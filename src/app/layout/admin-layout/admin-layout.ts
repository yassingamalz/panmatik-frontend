import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar-component/sidebar-component';

@Component({
  selector: 'app-admin-layout',
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss'
})
export class AdminLayoutComponent {

}