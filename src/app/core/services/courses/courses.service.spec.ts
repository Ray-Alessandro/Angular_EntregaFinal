/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CoursesService } from './courses.service';
import { provideHttpClient } from '@angular/common/http';

describe('Service: Courses', () => {
  let service: CoursesService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService,
        provideHttpClient()
      ]
    });

    service = TestBed.inject(CoursesService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });
});
