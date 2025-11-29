import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth-guard';
import { loginGuard } from './core/guards/login/login-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./featured/auth/auth-module').then(m => m.AuthModule),
    canActivate: [loginGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./featured/dashboard/dashboard-module').then(m => m.DashboardModule),
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
