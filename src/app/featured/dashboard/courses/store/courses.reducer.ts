import { createFeature, createReducer, on } from '@ngrx/store';
import { Course } from '../../../../core/services/courses/model/course.model';
import { CourseAction } from './courses.actions';

export const coursesFeatureKey = 'courses';

export interface CoursesState {
  courses: Course[];
  isLoading: boolean;
  error: any;
}

export const initialState: CoursesState = {
  courses: [],
  isLoading: false,
  error: null
};

export const reducer = createReducer(
    initialState,
    on(CourseAction.loadCourses, (state) => ({
        ...state,
        isLoading: true,
        error: null
    })),
    on(CourseAction.loadCoursesSuccess, (state, { courses }) => ({
        ...state,
        courses: courses,
        isLoading: false,
        error: null
    })),
    on(CourseAction.loadCoursesFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    })),
    on(CourseAction.addCourse, (state) => ({
        ...state,
        isLoading: true,
        error: null
    })),
    on(CourseAction.updateCourse, (state) => ({
        ...state,
        isLoading: true,
        error: null
    })),
    on(CourseAction.deleteCourse, (state) => ({
        ...state,
        isLoading: true,
        error: null
    }))
);

export const coursesFeature = createFeature({
    name: coursesFeatureKey,
    reducer: reducer
});