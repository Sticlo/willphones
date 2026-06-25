import { Component, inject } from '@angular/core';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-cart-panel',
  imports: [],
  templateUrl: './cart-panel.html',
  styleUrl: './cart-panel.scss',
})
export class CartPanelComponent {
  public readonly cart = inject(CartService);
}
