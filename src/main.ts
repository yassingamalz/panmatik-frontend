import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { AuthService } from './app/core/services/auth.service';
import { AuthGuard, NoAuthGuard, RoleGuard } from './app/core/guards/auth-guard';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(ReactiveFormsModule),
    AuthService,
    AuthGuard,
    NoAuthGuard,
    RoleGuard
  ]
}).catch((err) => console.error(err));