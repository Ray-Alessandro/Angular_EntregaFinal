/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { StudentsService } from './students.service';
import { provideHttpClient } from '@angular/common/http';

describe('Service: Students', () => {
  let service: StudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsService,
        provideHttpClient()
      ]
    });

    service = TestBed.inject(StudentsService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should have an initial students list', () => {
    const students = service.getStudents();
    expect(students).toBeDefined();
    expect(Array.isArray(students)).toBeTrue();
  });
});
