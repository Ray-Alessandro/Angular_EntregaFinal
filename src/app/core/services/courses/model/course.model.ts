export interface Course {
    id: number;
    title: string;
    description: string;
    beginDate: Date;
    endDate: Date;
    status: CourseStatus;
}

export enum CourseStatus {
    STARTED = 'STARTED',
    NOT_STARTED = 'NOT_STARTED',
    SCHEDULED = 'SCHEDULED',
    FINISHED = 'FINISHED',
    CANCELLED = 'CANCELLED'
}

export const courseColumns: string[] = [
    'id',
    'title',
    'description',
    'beginDate',
    'endDate',
    'status',
    'actions'
];