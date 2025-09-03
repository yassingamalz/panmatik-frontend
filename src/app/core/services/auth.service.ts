import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
  expiresIn: number;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'operator' | 'viewer';
  permissions: string[];
  lastLoginAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'panmatik_token';
  private readonly REFRESH_TOKEN_KEY = 'panmatik_refresh_token';
  private readonly USER_KEY = 'panmatik_user';

  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasValidToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Mock users for development
  private mockUsers: Array<{ email: string; password: string; user: User }> = [
    {
      email: 'admin@panmatik.com',
      password: 'admin123',
      user: {
        id: '1',
        email: 'admin@panmatik.com',
        firstName: 'Admin',
        lastName: 'User',
        role: 'admin',
        permissions: ['dashboard.view', 'machines.manage', 'users.manage', 'analytics.view'],
        lastLoginAt: new Date()
      }
    },
    {
      email: 'operator@panmatik.com',
      password: 'operator123',
      user: {
        id: '2',
        email: 'operator@panmatik.com',
        firstName: 'Machine',
        lastName: 'Operator',
        role: 'operator',
        permissions: ['dashboard.view', 'machines.operate'],
        lastLoginAt: new Date()
      }
    }
  ];

  constructor() { }

  /**
   * Login with email and password
   * TODO: Replace with actual API call
   */
  login(credentials: LoginRequest): Observable<LoginResponse> {
    // Simulate API delay
    return of(credentials).pipe(
      delay(1000),
      map(creds => {
        const mockUser = this.mockUsers.find(
          user => user.email === creds.email && user.password === creds.password
        );

        if (!mockUser) {
          throw new Error('Invalid email or password');
        }

        const token = this.generateMockToken();
        const refreshToken = this.generateMockRefreshToken();
        const response: LoginResponse = {
          user: { ...mockUser.user, lastLoginAt: new Date() },
          token,
          refreshToken,
          expiresIn: 3600 // 1 hour
        };

        // Store tokens and user
        this.storeAuthData(response);

        return response;
      })
    );
  }

  /**
   * Logout user
   */
  logout(): Observable<void> {
    return of(null).pipe(
      delay(500),
      map(() => {
        this.clearAuthData();
        return;
      })
    );
  }

  /**
   * Refresh authentication token
   * TODO: Replace with actual API call
   */
  refreshToken(): Observable<LoginResponse> {
    const refreshToken = localStorage.getItem(this.REFRESH_TOKEN_KEY);

    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }

    return of(refreshToken).pipe(
      delay(500),
      map(() => {
        const currentUser = this.getCurrentUser();
        if (!currentUser) {
          throw new Error('No current user');
        }

        const newToken = this.generateMockToken();
        const newRefreshToken = this.generateMockRefreshToken();

        const response: LoginResponse = {
          user: currentUser,
          token: newToken,
          refreshToken: newRefreshToken,
          expiresIn: 3600
        };

        this.storeAuthData(response);
        return response;
      })
    );
  }

  /**
   * Check if user has specific permission
   */
  hasPermission(permission: string): boolean {
    const user = this.getCurrentUser();
    return user?.permissions.includes(permission) || false;
  }

  /**
   * Check if user has specific role
   */
  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user?.role === role;
  }

  /**
   * Get current authenticated user
   */
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  /**
   * Get current authentication token
   */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  private storeAuthData(response: LoginResponse): void {
    localStorage.setItem(this.TOKEN_KEY, response.token);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, response.refreshToken);
    localStorage.setItem(this.USER_KEY, JSON.stringify(response.user));

    this.currentUserSubject.next(response.user);
    this.isAuthenticatedSubject.next(true);
  }

  private clearAuthData(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);

    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  private getUserFromStorage(): User | null {
    const userJson = localStorage.getItem(this.USER_KEY);
    if (userJson) {
      try {
        return JSON.parse(userJson);
      } catch {
        return null;
      }
    }
    return null;
  }

  private hasValidToken(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token) {
      return false;
    }

    // TODO: Add token expiration check when using real JWT
    return true;
  }

  private generateMockToken(): string {
    // Generate a mock JWT-like token
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({
      sub: this.getCurrentUser()?.id || '1',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 3600 // 1 hour
    }));
    const signature = btoa('mock-signature');

    return `${header}.${payload}.${signature}`;
  }

  private generateMockRefreshToken(): string {
    return btoa(`refresh-token-${Date.now()}-${Math.random()}`);
  }
}