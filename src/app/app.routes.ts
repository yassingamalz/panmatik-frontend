// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AuthGuard, NoAuthGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // Authentication Routes (No Layout)
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
  // Main Application Routes (With Admin Layout including Sidebar)
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () => import('./layout/admin-layout/admin-layout').then(c => c.AdminLayoutComponent),
    children: [
      // Default Dashboard Route - using existing Overview component
      {
        path: 'dashboard',
        loadComponent: () => import('./features/admin/dashboard/overview/overview').then(c => c.Overview),
        data: {
          title: 'Dashboard - PANMATIK'
        }
      },

      // ADMIN ROUTES - using existing components
      {
        path: 'admin',
        children: [
          {
            path: 'dashboard',
            loadComponent: () => import('./features/admin/dashboard/overview/overview').then(c => c.Overview),
            data: { title: 'Admin Dashboard - PANMATIK' }
          },
          {
            path: 'system-health',
            loadComponent: () => import('./features/admin/system-health/health-dashboard/health-dashboard').then(c => c.HealthDashboard),
            data: { title: 'System Health - PANMATIK' }
          },
          {
            path: 'recent-activity',
            loadComponent: () => import('./features/admin/dashboard/recent-activity/recent-activity').then(c => c.RecentActivity),
            data: { title: 'Recent Activity - PANMATIK' }
          }
        ]
      },

      // OPERATIONAL ROUTES - using existing components for now
      {
        path: 'production',
        children: [
          {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full'
          },
          {
            path: 'overview',
            loadComponent: () => import('./features/admin/dashboard/overview/overview').then(c => c.Overview),
            data: { title: 'Production Overview - PANMATIK' }
          }
        ]
      },
      {
        path: 'machines',
        children: [
          {
            path: '',
            redirectTo: 'status',
            pathMatch: 'full'
          },
          {
            path: 'status',
            loadComponent: () => import('./features/admin/dashboard/overview/overview').then(c => c.Overview),
            data: { title: 'Machine Status - PANMATIK' }
          }
        ]
      },
      {
        path: 'quality',
        loadComponent: () => import('./features/admin/dashboard/overview/overview').then(c => c.Overview),
        data: { title: 'Quality Control - PANMATIK' }
      },
      {
        path: 'analytics',
        children: [
          {
            path: '',
            redirectTo: 'reports',
            pathMatch: 'full'
          },
          {
            path: 'reports',
            loadComponent: () => import('./features/admin/dashboard/overview/overview').then(c => c.Overview),
            data: { title: 'Analytics Reports - PANMATIK' }
          }
        ]
      },
      {
        path: 'inventory',
        loadComponent: () => import('./features/admin/dashboard/overview/overview').then(c => c.Overview),
        data: { title: 'Inventory - PANMATIK' }
      },
      {
        path: 'maintenance',
        loadComponent: () => import('./features/admin/dashboard/overview/overview').then(c => c.Overview),
        data: { title: 'Maintenance - PANMATIK' }
      },
      {
        path: 'security',
        loadComponent: () => import('./features/admin/dashboard/overview/overview').then(c => c.Overview),
        data: { title: 'Security - PANMATIK' }
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];