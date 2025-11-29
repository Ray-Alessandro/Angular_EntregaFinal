import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student, studentColumns } from '../../../../../core/services/students/model/student.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StudentsService } from '../../../../../core/services/students/students.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { StudentAction } from '../../store/students.actions';
import { selectIsLoading, selectStudents } from '../../store/students.selectors';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css'],
  standalone: false
})
export class StudentsTableComponent{

  displayedColumns: string[] = studentColumns;
  dataSource = new MatTableDataSource<Student>([]);
  isLoading$!: Observable<boolean>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private store: Store) { 
    this.store.dispatch(StudentAction.loadStudents());
    this.isLoading$ = this.store.select(selectIsLoading);

    this.store.select(selectStudents).subscribe(students => {
      this.dataSource.data = students;
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.chargeFilter();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDeleteStudent(studentId: number): void {
    const firmDelete = confirm('Are you sure you want to delete this student?');
    if (!firmDelete) {
      return;
    }

    this.store.dispatch(StudentAction.deleteStudent({ studentId }));
  }

  chargeFilter() {
    this.dataSource.sortingDataAccessor = (item, atributo) => {
      switch (atributo) {
        case 'nombres':
          return (item.lastName + ', ' + item.firstName).toLowerCase();
        default:
          return item[atributo as keyof Student];
      }
    };
  }
}
