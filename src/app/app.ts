import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartService } from './core/cart.service';
import { SITE_CONFIG, phoneLink, whatsappLink } from './core/site.config';
import { CartPanelComponent } from './shared/cart-panel/cart-panel';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CartPanelComponent],
  templateUrl: './app.html',
})
export class App {
  public readonly cart = inject(CartService);
  public readonly whatsappNumber = SITE_CONFIG.whatsappNumber;
  public readonly facebookUrl    = SITE_CONFIG.facebookUrl;
  public readonly instagramUrl   = SITE_CONFIG.instagramUrl;
  public readonly whatsappLink   = computed(() => whatsappLink());
  public readonly phoneLink      = phoneLink();
}
