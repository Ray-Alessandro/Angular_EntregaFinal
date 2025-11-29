import { Injectable } from '@angular/core';
import { Student } from './model/student.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../utils/constants';


@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private studentsURL = API_BASE_URL + '/students';

  constructor(private httpClient: HttpClient) {}

  getStudentById(id: number) : Observable<Student> {
    return this.httpClient.get<Student>(`${this.studentsURL}/${id}`);
  }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.studentsURL);
  }

  addStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.studentsURL, student);
  }

  updateStudent(updatedStudent: Student, studentId: number): Observable<Student> {
    return this.httpClient.put<Student>(`${this.studentsURL}/${studentId}`, updatedStudent);
  }

  deleteStudent(studentId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.studentsURL}/${studentId}`);
  }
}
