export interface User {
    id: string;
    username: string;
    email: string;
    role: 'admin' | 'user' | 'operator';
    tenantId: string;
    permissions: string[];
}

export interface LoginCredentials {
    username: string;
    password: string;
    rememberMe: boolean;
}
