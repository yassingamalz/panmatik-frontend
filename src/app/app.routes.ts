import { Routes } from '@angular/router';
import { AuthGuard, NoAuthGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    canActivate: [NoAuthGuard],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then(c => c.LoginComponent),
        data: { title: 'Login - PANMATIK' }
      }
    ]
  },
  // {
  //   path: 'dashboard',
  //   canActivate: [AuthGuard],
  //   loadComponent: () => import('./features/dashboard/dashboard.component').then(c => c.DashboardComponent),
  //   data: { title: 'Dashboard - PANMATIK' }
  // },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];