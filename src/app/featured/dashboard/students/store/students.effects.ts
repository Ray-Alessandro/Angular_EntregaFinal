import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { StudentsService } from '../../../../core/services/students/students.service';
import { StudentAction } from './students.actions';

@Injectable()
export class StudentsEffects {
    private actions$ = inject(Actions);
    private studentsService = inject(StudentsService);

    loadStudents$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StudentAction.loadStudents),
            switchMap(() =>
                this.studentsService.getStudents().pipe(
                    delay(500),
                    map(students => StudentAction.loadStudentsSuccess({ students })),
                    catchError(error => of(StudentAction.loadStudentsFailure({ error: error.message })))
                )
            )
        )
    );

    addStudent$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StudentAction.addStudent),
            switchMap(({ student }) =>
                this.studentsService.addStudent(student).pipe(
                    map(() => StudentAction.loadStudents()),
                    catchError(error => of(StudentAction.loadStudentsFailure({ error: error.message })))
                )
            )
        )
    );

    updateStudent$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StudentAction.updateStudent),
            switchMap(({ studentId, updatedStudent }) =>
                this.studentsService.updateStudent(updatedStudent, studentId).pipe(
                    map(() => StudentAction.loadStudents()),
                    catchError(error => of(StudentAction.loadStudentsFailure({ error: error.message })))
                )
            )
        )
    );

    deleteStudent$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StudentAction.deleteStudent),
            switchMap(({ studentId }) =>
                this.studentsService.deleteStudent(studentId).pipe(
                    map(() => StudentAction.loadStudents()),
                    catchError(error => of(StudentAction.loadStudentsFailure({ error: error.message })))
                )
            )
        )
    );
}