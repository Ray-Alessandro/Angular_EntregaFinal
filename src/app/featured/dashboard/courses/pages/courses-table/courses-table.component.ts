import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Course, courseColumns } from '../../../../../core/services/courses/model/course.model';
import { MatTableDataSource } from '@angular/material/table';
import { CoursesService } from '../../../../../core/services/courses/courses.service';
import { Store } from '@ngrx/store';
import { CourseAction } from '../../store/courses.actions';
import { selectCourses, selectIsLoading } from '../../store/courses.selectors';
import { Observable } from 'rxjs';
import { selectUser } from '../../../../../core/store/auth/auth.selector';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css'],
  standalone: false
})
export class CoursesTableComponent{
  displayedColumns: string[] = courseColumns;
  dataSource = new MatTableDataSource<Course>([]);
  isLoading$! : Observable<boolean>;
  isAdmin: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private store: Store) {
    this.store.select(selectUser).subscribe(user => {
      if (user && user.role === 'admin') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });

    this.store.dispatch(CourseAction.loadCourses());
    this.isLoading$ = this.store.select(selectIsLoading);

    this.isLoading$.subscribe(loading => {
      console.log('isLoading:', loading);
    });

    this.store.select(selectCourses).subscribe(courses => {
      this.dataSource.data = courses;
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  onDeleteCourse(courseId: number): void {
    const firmDelete = confirm('Are you sure you want to delete this course?');
    if (!firmDelete) {
      return;
    }
    
    this.store.dispatch(CourseAction.deleteCourse({ courseId }));
  }
}
