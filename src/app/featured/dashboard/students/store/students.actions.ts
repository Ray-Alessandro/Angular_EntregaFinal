import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Student } from "../../../../core/services/students/model/student.model";

export const StudentAction = createActionGroup({
    source: 'Students',
    events: {
        'Load Students': emptyProps(),
        'Load Students Success': props<{ students: Student[] }>(),
        'Load Students Failure': props<{ error: any }>(),
        'Add Student': props<{ student: Student }>(),
        'Update Student': props<{ studentId: number; updatedStudent: Student }>(),
        'Delete Student': props<{ studentId: number }>()
    }
});