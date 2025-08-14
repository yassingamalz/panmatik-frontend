// src/app/layout/layout.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AuthLayout } from './auth-layout/auth-layout';

@NgModule({
  declarations: [
    AuthLayout
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ],
  exports: [
    AuthLayout
  ]
})
export class LayoutModule { }