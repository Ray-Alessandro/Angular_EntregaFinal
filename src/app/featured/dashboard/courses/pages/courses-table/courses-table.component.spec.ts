/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoursesTableComponent } from './courses-table.component';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from '../../courses-routing-module';
import { SharedModule } from '../../../../../shared/shared.module';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CoursesTableComponent', () => {
  let component: CoursesTableComponent;
  let fixture: ComponentFixture<CoursesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesTableComponent],
      providers: [
        provideHttpClient(),
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
            snapshot: { params: { id: 1 } },
          },
        },
      ],
      imports: [CommonModule, CoursesRoutingModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table', () => {
    const tableElement = fixture.nativeElement.querySelector('table');
    expect(tableElement).toBeTruthy();
  });

  it('should have more than 0 rows', () => {
    const rowElements = fixture.nativeElement.querySelectorAll('td');
    expect(rowElements.length).toBeGreaterThan(0);
  });
});
