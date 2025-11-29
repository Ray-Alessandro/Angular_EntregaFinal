import { createFeature, createReducer, on } from '@ngrx/store';
import { Student } from '../../../../core/services/students/model/student.model';
import { StudentAction } from './students.actions';

export const studentsFeatureKey = 'students';

export interface StudentsState {
  students: Student[];
  isLoading: boolean;
  error: any;
}

export const initialState: StudentsState = {
  students: [],
  isLoading: false,
  error: null
};

export const reducer = createReducer(
    initialState,
    on(StudentAction.loadStudents, (state) => ({
        ...state,
        isLoading: true,
        error: null
    })),
    on(StudentAction.loadStudentsSuccess, (state, { students }) => ({
        ...state,
        students: students,
        isLoading: false,
        error: null
    })),
    on(StudentAction.loadStudentsFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),
    on(StudentAction.addStudent, (state) => ({
        ...state,
        isLoading: true,
        error: null
    })),
    on(StudentAction.updateStudent, (state) => ({
        ...state,
        isLoading: true,
        error: null
    })),
    on(StudentAction.deleteStudent, (state) => ({
        ...state,
        isLoading: true,
        error: null
    }))
);

export const studentsFeature = createFeature({
    name: studentsFeatureKey,
    reducer: reducer
});