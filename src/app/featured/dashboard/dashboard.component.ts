import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { User } from '../../core/services/auth/model/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent implements OnInit {

  user$!: Observable<User | null>;

  constructor(private authService: AuthService) { }

  listItems = [
    {
      name: 'Home',
      icon: 'home',
      route: ''
    },
    {
      name: 'Courses',
      icon: 'book',
      route: 'courses'
    },
    {
      name: 'Students',
      icon: 'group',
      route: 'students'
    }
  ];

  ngOnInit(): void {
    this.user$ = this.authService.getUserInfo();
  }

  logout() {
    this.authService.logout();
  }
}
