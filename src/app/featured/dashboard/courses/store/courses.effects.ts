import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { CoursesService } from '../../../../core/services/courses/courses.service';
import { CourseAction } from './courses.actions';

@Injectable()
export class CoursesEffects {
    private actions$ = inject(Actions);
    private coursesService = inject(CoursesService);

    loadCourses$ = createEffect(() =>
        this.actions$.pipe(
        ofType(CourseAction.loadCourses),
        switchMap(() =>
            this.coursesService.getCourses().pipe(
                delay(500),
                map(courses => CourseAction.loadCoursesSuccess({ courses })),
                catchError(error => of(CourseAction.loadCoursesFailure({ error: error.message })))
            )
        )
        )
    );

    addCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CourseAction.addCourse),
            switchMap(({ course }) =>
                this.coursesService.addCourse(course).pipe(
                    map(() => CourseAction.loadCourses()),
                    catchError(error => of(CourseAction.loadCoursesFailure({ error: error.message })))
                )
            )
        )
    );

    updateCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CourseAction.updateCourse),
            switchMap(({ courseId, updatedCourse }) =>
                this.coursesService.updateCourse(updatedCourse, courseId).pipe(
                    map(() => CourseAction.loadCourses()),
                    catchError(error => of(CourseAction.loadCoursesFailure({ error: error.message })))
                )
            )
        )
    );

    deleteCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CourseAction.deleteCourse),
            switchMap(({ courseId }) =>
                this.coursesService.deleteCourse(courseId).pipe(
                    map(() => CourseAction.loadCourses()),
                    catchError(error => of(CourseAction.loadCoursesFailure({ error: error.message })))
                )
            )
        )
    );
}