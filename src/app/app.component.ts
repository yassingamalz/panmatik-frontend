import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
  title = 'PANMATIK - Industrial ERP Platform';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const routeData = this.getRouteData();
        if (routeData?.title) {
          document.title = routeData.title;
        }
        if (routeData?.description) {
          this.setMetaDescription(routeData.description);
        }
      });

    this.initializeAuth();
  }

  private getRouteData(): any {
    let route = this.router.routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data;
  }

  private setMetaDescription(description: string): void {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }

  private initializeAuth(): void {
    const isAuthenticated = this.authService.isAuthenticated();
    const currentUrl = this.router.url;

    if (isAuthenticated && currentUrl === '/') {
      this.router.navigate(['/dashboard']);
    } else if (!isAuthenticated && currentUrl === '/') {
      this.router.navigate(['/auth/login']);
    }
  }
}