// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    // Default redirect to dashboard if authenticated, otherwise to login
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },

    // Auth routes (login, register, etc.) - No guard needed
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth-module').then(m => m.AuthModule)
    },

    // Protected dashboard routes
    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule),
        canActivate: [authGuard]
    },

    // Protected admin routes
    {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin-module').then(m => m.AdminModule),
        canActivate: [authGuard]
    },

    // Catch-all route - redirect to dashboard
    {
        path: '**',
        redirectTo: '/dashboard'
    }
];