// src/app/features/auth/auth-module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing-module';
import { Login } from './login/login';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  declarations: [
    Login
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }