import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationItem } from '../../core/models/navigation-item';
import { SystemStatus } from '../../core/models/system-status';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.scss'
})
export class SidebarComponent implements OnInit {
  isCollapsed = signal(false);
  activeRoute = signal('');
  systemStatus = signal<SystemStatus>({
    machinesOnline: 12,
    totalMachines: 15,
    activeProcesses: 8,
    efficiency: 94.2
  });

  navigationItems: NavigationItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
      icon: 'bi-speedometer2'
    },
    {
      id: 'production',
      label: 'Production',
      route: '/production',
      icon: 'bi-gear-fill',
      children: [
        { id: 'production-overview', label: 'Overview', route: '/production/overview', icon: 'bi-pie-chart' },
        { id: 'production-planning', label: 'Planning', route: '/production/planning', icon: 'bi-calendar-check' },
        { id: 'production-scheduling', label: 'Scheduling', route: '/production/scheduling', icon: 'bi-clock' }
      ]
    },
    {
      id: 'machines',
      label: 'Machines',
      route: '/machines',
      icon: 'bi-cpu',
      badge: 3,
      children: [
        { id: 'machines-status', label: 'Machine Status', route: '/machines/status', icon: 'bi-activity' },
        { id: 'machines-maintenance', label: 'Maintenance', route: '/machines/maintenance', icon: 'bi-tools' },
        { id: 'machines-performance', label: 'Performance', route: '/machines/performance', icon: 'bi-graph-up' }
      ]
    },
    {
      id: 'quality',
      label: 'Quality Control',
      route: '/quality',
      icon: 'bi-shield-check'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      route: '/analytics',
      icon: 'bi-bar-chart',
      children: [
        { id: 'analytics-reports', label: 'Reports', route: '/analytics/reports', icon: 'bi-file-earmark-bar-graph' },
        { id: 'analytics-kpis', label: 'KPIs', route: '/analytics/kpis', icon: 'bi-target' },
        { id: 'analytics-trends', label: 'Trends', route: '/analytics/trends', icon: 'bi-graph-up-arrow' }
      ]
    },
    {
      id: 'inventory',
      label: 'Inventory',
      route: '/inventory',
      icon: 'bi-boxes'
    },
    {
      id: 'maintenance',
      label: 'Maintenance',
      route: '/maintenance',
      icon: 'bi-wrench-adjustable',
      badge: 2
    },
    {
      id: 'security',
      label: 'Security',
      route: '/security',
      icon: 'bi-shield-lock'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateActiveRoute();
    this.router.events.subscribe(() => {
      this.updateActiveRoute();
    });
  }

  toggleSidebar(): void {
    this.isCollapsed.update(collapsed => !collapsed);
  }

  toggleSection(item: NavigationItem): void {
    if (item.children) {
      item.isExpanded = !item.isExpanded;
    } else {
      this.router.navigate([item.route]);
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  private updateActiveRoute(): void {
    this.activeRoute.set(this.router.url);
  }

  isActiveRoute(route: string): boolean {
    return this.activeRoute().startsWith(route);
  }

  getEfficiencyStatus(): string {
    const efficiency = this.systemStatus().efficiency;
    if (efficiency >= 90) return 'excellent';
    if (efficiency >= 80) return 'good';
    if (efficiency >= 70) return 'warning';
    return 'critical';
  }
}