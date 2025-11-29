import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Course } from "../../../../core/services/courses/model/course.model";

export const CourseAction = createActionGroup({
    source: 'Courses',
    events: {
        'Load Courses': emptyProps(),
        'Load Courses Success': props<{ courses: Course[] }>(),
        'Load Courses Failure': props<{ error: any }>(),
        'Add Course': props<{ course: Course }>(),
        'Update Course': props<{ courseId: number; updatedCourse: Course }>(),
        'Delete Course': props<{ courseId: number }>()
    }
});