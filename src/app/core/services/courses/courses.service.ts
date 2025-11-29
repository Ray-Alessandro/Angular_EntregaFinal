import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Course } from './model/course.model';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesURL = API_BASE_URL + '/courses';

  constructor(private httpClient: HttpClient) {}

  getCourseById(id: number) : Observable<Course> {
    return this.httpClient.get<Course>(`${this.coursesURL}/${id}`);
  }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.coursesURL);
  }

  addCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(this.coursesURL, course);
  }

  updateCourse(updatedCourse: Course, courseId: number): Observable<Course> {
    return this.httpClient.put<Course>(`${this.coursesURL}/${courseId}`, updatedCourse);
  }

  deleteCourse(courseId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.coursesURL}/${courseId}`);
  }

}