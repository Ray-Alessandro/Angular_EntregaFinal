import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const authservice = inject(AuthService);
  const router = inject(Router);

  if (authservice.isAuthenticated()) {
    router.navigate(['/dashboard']);
    return false;
  }
  
  return true;
};
