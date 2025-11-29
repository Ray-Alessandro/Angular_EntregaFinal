import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { User } from '../../../core/services/auth/model/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent implements OnInit {
  user$!: Observable<User | null>;
  
  adminFeatures = [
    { 
      icon: 'people', 
      title: 'Students Management', 
      description: 'Full CRUD: Create, edit, delete and view students', 
      route: '/dashboard/students' 
    },
    { 
      icon: 'school', 
      title: 'Courses Management', 
      description: 'Full CRUD: Create, edit, delete and view courses', 
      route: '/dashboard/courses' 
    }
  ];

  userFeatures = [
    { 
      icon: 'school', 
      title: 'View Courses', 
      description: 'Consult details of available courses (read-only)', 
      route: '/dashboard/courses' 
    }
  ];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.getUserInfo();
  }
}
