import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../../core/cart.service';
import { CATEGORIES, CategoryConfig } from '../../data/catalog';
import { SITE_CONFIG, whatsappLink } from '../../core/site.config';

@Component({
  selector: 'app-category',
  imports: [CommonModule, RouterLink],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class CategoryComponent {
  private readonly route = inject(ActivatedRoute);
  public readonly cart = inject(CartService);

  public readonly config = computed<CategoryConfig>(() => {
    const slug = this.route.snapshot.data['category'] as string;
    return CATEGORIES[slug];
  });

  public readonly whatsappLink = whatsappLink();
  public readonly wholesaleMinUnits = SITE_CONFIG.wholesaleMinUnits;

  public whatsappFor(productName: string): string {
    return whatsappLink(`Hola! Me interesa comprar al por mayor: ${productName}. ¿Me pueden cotizar?`);
  }
}
