import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/cart.service';
import { formatPrice } from '../../data/catalog';

@Component({
  selector: 'app-cart-panel',
  imports: [CommonModule],
  templateUrl: './cart-panel.html',
  styleUrl: './cart-panel.scss',
})
export class CartPanelComponent {
  public readonly cart = inject(CartService);
  public readonly formatPrice = formatPrice;
}
