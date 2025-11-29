import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '../../store/auth/auth.selector';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectUser).pipe(
    map(user => {
      if (user && user.role === 'admin') {
        return true;
      }
      
      router.navigate(['/dashboard']);
      return false;
    })
  );
};