// src/app/core/services/auth.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User, LoginCredentials } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class Auth {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  public currentUser$ = this.currentUserSubject.asObservable();
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router) {
    this.checkExistingAuth();
  }

  private checkExistingAuth(): void {
    const token = localStorage.getItem('panmatik_token');
    const user = localStorage.getItem('panmatik_user');

    if (token && user) {
      try {
        const userData = JSON.parse(user);
        this.currentUserSubject.next(userData);
        this.isAuthenticatedSubject.next(true);
      } catch (error) {
        this.clearAuth();
      }
    }
  }

  login(credentials: LoginCredentials): Observable<boolean> {
    return new Observable(observer => {
      // Simulate API call
      setTimeout(() => {
        // Mock authentication - replace with real API call
        if (credentials.username && credentials.password) {
          const mockUser: User = {
            id: '1',
            username: credentials.username,
            email: `${credentials.username}@panmatik.com`,
            role: credentials.username === 'admin' ? 'admin' : 'user',
            tenantId: 'tenant-1',
            permissions: ['read', 'write']
          };

          const mockToken = 'mock-jwt-token-' + Date.now();

          // Store auth data
          localStorage.setItem('panmatik_token', mockToken);
          localStorage.setItem('panmatik_user', JSON.stringify(mockUser));

          if (credentials.rememberMe) {
            localStorage.setItem('panmatik_remember', 'true');
          }

          // Update state
          this.currentUserSubject.next(mockUser);
          this.isAuthenticatedSubject.next(true);

          observer.next(true);
          observer.complete();
        } else {
          observer.error('Invalid credentials');
        }
      }, 1000); // Simulate network delay
    });
  }

  logout(): void {
    this.clearAuth();
    this.router.navigate(['/auth/login']);
  }

  private clearAuth(): void {
    localStorage.removeItem('panmatik_token');
    localStorage.removeItem('panmatik_user');
    localStorage.removeItem('panmatik_remember');

    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  getToken(): string | null {
    return localStorage.getItem('panmatik_token');
  }

  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user?.role === role;
  }

  hasPermission(permission: string): boolean {
    const user = this.getCurrentUser();
    return user?.permissions.includes(permission) || false;
  }
}