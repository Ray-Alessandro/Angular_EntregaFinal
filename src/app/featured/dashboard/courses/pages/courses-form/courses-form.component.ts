import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../../../../core/services/courses/courses.service';
import { courseFormValidator } from './validators/course-form-validator';
import { Store } from '@ngrx/store';
import { CourseAction } from '../../store/courses.actions';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css'],
  standalone: false
})
export class CoursesFormComponent {

  courseForm: FormGroup;
  isEditMode: boolean = false;
  courseId: number | null = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private courseService: CoursesService, 
    private router: Router, private store: Store
  ){
    this.courseForm = this.fb.group(courseFormValidator);

    this.route.params.subscribe((params) => {
      this.courseId = Number(params['id']);
      if (this.courseId) {
        this.isEditMode = true;
        this.courseService.getCourseById(this.courseId).subscribe(course => {
          if (course) {
            this.courseForm.patchValue(course);
          }
        });
      }
    });
  }

  onSubmit() {
    if (this.courseForm.invalid) {
      alert('Please fill out the form correctly.');
      return;
    }
    
    if(this.isEditMode) {
      this.store.dispatch(CourseAction.updateCourse({
        courseId: this.courseId!,
        updatedCourse: this.courseForm.value
      }));
    }
    else {
      this.store.dispatch(CourseAction.addCourse({
        course: this.courseForm.value
      }));
    }

    this.router.navigate(['dashboard', 'courses']);
  }
}
