import { Course, CourseStatus } from "../model/course.model";

export const mockCourses: Course[] = [
    {
        id: 1,
        title: 'Creación de aplicaciones web con Angular',
        description: 'Aprende a crear aplicaciones web dinámicas y responsivas utilizando el framework Angular.',
        beginDate: new Date('2024-01-15'),
        endDate: new Date('2024-04-15'),
        status: CourseStatus.STARTED
    },
    {
        id: 2,
        title: 'Desarrollo de aplicaciones móviles con React Native',
        description: 'Crea aplicaciones móviles nativas para iOS y Android utilizando React Native.',
        beginDate: new Date('2024-03-01'),
        endDate: new Date('2024-06-01'),
        status: CourseStatus.NOT_STARTED
    },
    {
        id: 3,
        title: 'Backend con Node.js y Express',
        description: 'Construye APIs RESTful escalables usando Node.js, Express y buenas prácticas de arquitectura.',
        beginDate: new Date('2023-09-01'),
        endDate: new Date('2023-12-01'),
        status: CourseStatus.FINISHED
    },
    {
        id: 4,
        title: 'Introducción a TypeScript',
        description: 'Aprende los fundamentos de TypeScript para escribir código más seguro y mantenible.',
        beginDate: new Date('2024-05-10'),
        endDate: new Date('2024-07-10'),
        status: CourseStatus.NOT_STARTED
    },
    {
        id: 5,
        title: 'DevOps básico: CI/CD con GitHub Actions',
        description: 'Configura pipelines de integración y despliegue continuo con GitHub Actions y buenas prácticas DevOps.',
        beginDate: new Date('2024-02-15'),
        endDate: new Date('2024-03-15'),
        status: CourseStatus.FINISHED
    },
    {
        id: 6,
        title: 'Testing con Jest y Jasmine',
        description: 'Implementa pruebas unitarias y de integración para aplicaciones JavaScript/TypeScript con Jest y Jasmine.',
        beginDate: new Date('2024-04-01'),
        endDate: new Date('2024-05-15'),
        status: CourseStatus.STARTED
    },
    {
        id: 7,
        title: 'Diseño de interfaces con Angular Material',
        description: 'Crea interfaces consistentes y accesibles usando los componentes y estilos de Angular Material.',
        beginDate: new Date('2024-06-01'),
        endDate: new Date('2024-08-01'),
        status: CourseStatus.NOT_STARTED
    },
    {
        id: 8,
        title: 'Bases de datos SQL: PostgreSQL',
        description: 'Modela y optimiza bases de datos relacionales, consultas avanzadas y administración con PostgreSQL.',
        beginDate: new Date('2023-10-01'),
        endDate: new Date('2023-12-15'),
        status: CourseStatus.FINISHED
    }
];
