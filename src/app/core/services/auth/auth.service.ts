import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../utils/constants';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user.model';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { clearAuthUser, setAuthUser } from '../../store/auth/auth.actions';
import { selectUser } from '../../store/auth/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersURL = `${API_BASE_URL}/users`;

  constructor(private httpClient: HttpClient, private router: Router, private store: Store) { 
    if (this.isAuthenticated()){
      this.loadUserFromToken(localStorage.getItem('token')!);
    }
  }

  login(email: string, password: string) {
    this.httpClient.get<User[]>(this.usersURL).subscribe(
      {
        next: (users) => {
          const user = users.find(u => u.email === email);
          if (!user) {
            throw new Error('Email not found');
          }
          
          if (user.password !== password) {
            throw new Error('Invalid password');
          }
  
          localStorage.setItem('token', user.email);
          this.store.dispatch(setAuthUser({ payload: user }));
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Error during login:', err);
        }
      }
    )
  }

  logout() {
    localStorage.removeItem('token');
    this.store.dispatch(clearAuthUser());
    this.router.navigate(['/login']);
  }

  getUserInfo(): Observable<User | null> {
    return this.store.select(selectUser);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  isAuthenticatedAsync(): Observable<boolean> {
    return this.store.select(selectUser).pipe(
      map(user => user !== null)
    );
  }

  loadUserFromToken(token: string) {
    this.httpClient.get<User[]>(this.usersURL).pipe(
      map(users => users.find(u => u.email === token))
    ).subscribe(user => {
      if (user) {
        this.store.dispatch(setAuthUser({ payload: user }));
      } else {
        localStorage.removeItem('token');
      }
    });
  }
}
