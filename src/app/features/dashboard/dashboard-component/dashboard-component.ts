// src/app/features/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { User, AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <div class="dashboard-header">
        <h1 class="dashboard-title">
          {{ getDashboardTitle() }}
        </h1>
        <p class="dashboard-subtitle">
          Welcome {{ currentUser?.firstName }}, to your PANMATIK Control Center
        </p>
        <div class="role-indicator">
          <span class="role-badge role-badge--{{ currentUser?.role }}">
            {{ currentUser?.role | titlecase }}
          </span>
        </div>
      </div>

      <!-- Quick Access Cards -->
      <div class="quick-access" *ngIf="currentUser?.role === 'admin'">
        <button 
          class="quick-access-card"
          (click)="navigateToAdminDashboard()">
          <i class="bi bi-speedometer"></i>
          <h3>Admin Dashboard</h3>
          <p>System administration and management</p>
        </button>
      </div>
      
      <div class="dashboard-grid">
        <div class="dashboard-card" *ngIf="hasPermission('production.view')">
          <div class="card-icon">
            <i class="bi bi-gear-fill"></i>
          </div>
          <h3>Production Overview</h3>
          <p>Monitor your production lines and efficiency metrics</p>
          <div class="metric">
            <span class="metric-value">94.2%</span>
            <span class="metric-label">Efficiency</span>
          </div>
        </div>
        
        <div class="dashboard-card" *ngIf="hasPermission('machines.view')">
          <div class="card-icon">
            <i class="bi bi-cpu"></i>
          </div>
          <h3>Machine Status</h3>
          <p>Real-time status of all connected machines</p>
          <div class="metric">
            <span class="metric-value">12/15</span>
            <span class="metric-label">Online</span>
          </div>
        </div>
        
        <div class="dashboard-card">
          <div class="card-icon">
            <i class="bi bi-shield-check"></i>
          </div>
          <h3>Quality Control</h3>
          <p>Quality metrics and inspection results</p>
          <div class="metric">
            <span class="metric-value">98.7%</span>
            <span class="metric-label">Pass Rate</span>
          </div>
        </div>
        
        <div class="dashboard-card">
          <div class="card-icon">
            <i class="bi bi-bar-chart"></i>
          </div>
          <h3>Analytics</h3>
          <p>Performance insights and trend analysis</p>
          <div class="metric">
            <span class="metric-value">+5.2%</span>
            <span class="metric-label">Growth</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .dashboard-header {
      margin-bottom: 2rem;
      text-align: center;
    }
    
    .dashboard-title {
      font-size: 2.5rem;
      font-weight: bold;
      color: #002046;
      margin: 0 0 0.5rem 0;
    }
    
    .dashboard-subtitle {
      color: #64748b;
      margin: 0 0 1rem 0;
      font-size: 1.1rem;
    }

    .role-indicator {
      margin-bottom: 2rem;
    }

    .role-badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .role-badge--admin {
      background: linear-gradient(135deg, #00ACCB, #6366f1);
      color: white;
    }

    .role-badge--operator {
      background: linear-gradient(135deg, #67E470, #00ACCB);
      color: white;
    }

    .role-badge--viewer {
      background: linear-gradient(135deg, #FDA900, #67E470);
      color: white;
    }

    .quick-access {
      margin-bottom: 2rem;
    }

    .quick-access-card {
      background: linear-gradient(135deg, #002046, #00ACCB);
      color: white;
      border: none;
      border-radius: 16px;
      padding: 2rem;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      width: 300px;
      text-align: left;
    }

    .quick-access-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0, 172, 203, 0.25);
    }

    .quick-access-card i {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .quick-access-card h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
    }

    .quick-access-card p {
      margin: 0;
      opacity: 0.9;
    }
    
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    
    .dashboard-card {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      position: relative;
    }
    
    .dashboard-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 172, 203, 0.15);
    }

    .card-icon {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      opacity: 0.1;
    }

    .card-icon i {
      font-size: 3rem;
      color: #002046;
    }
    
    .dashboard-card h3 {
      color: #002046;
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
      font-weight: 600;
    }
    
    .dashboard-card p {
      color: #64748b;
      margin: 0 0 1.5rem 0;
      line-height: 1.5;
    }

    .metric {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
    }

    .metric-value {
      font-size: 1.5rem;
      font-weight: bold;
      color: #00ACCB;
    }

    .metric-label {
      font-size: 0.875rem;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  `]
})
export class DashboardComponent implements OnInit {
  currentUser: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  getDashboardTitle(): string {
    const role = this.currentUser?.role;
    switch (role) {
      case 'admin':
        return 'System Overview Dashboard';
      case 'operator':
        return 'Production Control Dashboard';
      case 'viewer':
        return 'Monitoring Dashboard';
      default:
        return 'Industrial Dashboard';
    }
  }

  hasPermission(permission: string): boolean {
    return this.authService.hasPermission(permission);
  }

  navigateToAdminDashboard(): void {
    this.router.navigate(['/admin/dashboard']);
  }
}