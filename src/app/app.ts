import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { CartService } from './core/cart.service';
import { SITE_CONFIG, phoneLink, whatsappLink } from './core/site.config';
import { CartPanelComponent } from './shared/cart-panel/cart-panel';

export interface NavItem {
  label: string;
  route: string;
  fragment?: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, CartPanelComponent],
  templateUrl: './app.html',
})
export class App {
  private readonly router = inject(Router);

  public readonly cart = inject(CartService);
  public readonly menuOpen = signal(false);
  public readonly isCatalogRoute = signal(false);
  public readonly whatsappNumber = SITE_CONFIG.whatsappNumber;
  public readonly facebookUrl = SITE_CONFIG.facebookUrl;
  public readonly instagramUrl = SITE_CONFIG.instagramUrl;
  public readonly whatsappLink = computed(() => whatsappLink());
  public readonly phoneLink = phoneLink();

  public readonly navItems: NavItem[] = [
    { label: 'Inicio', route: '/', fragment: 'inicio' },
    { label: 'Audífonos', route: '/audifonos' },
    { label: 'Cargadores', route: '/cargadores' },
    { label: 'Teclados', route: '/teclados' },
    { label: 'Accesorios', route: '/', fragment: 'accesorios' },
    { label: 'Reparaciones', route: '/', fragment: 'servicios' },
    { label: 'Contacto', route: '/', fragment: 'contacto' },
  ];

  constructor() {
    this.syncCatalogRoute(this.router.url);
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.syncCatalogRoute(event.urlAfterRedirects));
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    this.syncBodyScroll();
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.syncBodyScroll();
  }

  onNavClick(event: MouseEvent, item: NavItem): void {
    this.closeMenu();

    if (!item.fragment || item.route !== '/') {
      return;
    }

    event.preventDefault();
    void this.router.navigate(['/'], { fragment: item.fragment }).then(() => {
      this.waitAndScrollToFragment(item.fragment!);
    });
  }

  isNavActive(item: NavItem): boolean {
    const [path, fragment = ''] = this.router.url.split('#');

    if (item.route !== '/') {
      return path === item.route;
    }

    if (item.fragment) {
      return (path === '/' || path === '') && fragment === item.fragment;
    }

    return false;
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 768 && this.menuOpen()) {
      this.closeMenu();
    }
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.menuOpen()) {
      this.closeMenu();
    }
  }

  private waitAndScrollToFragment(id: string, attempts = 0): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (attempts < 24) {
      requestAnimationFrame(() => this.waitAndScrollToFragment(id, attempts + 1));
    }
  }

  private syncBodyScroll(): void {
    document.body.classList.toggle('nav-open', this.menuOpen());
  }

  private syncCatalogRoute(url: string): void {
    const path = url.split(/[#?]/)[0];
    this.isCatalogRoute.set(['/audifonos', '/cargadores', '/teclados'].includes(path));
  }
}
