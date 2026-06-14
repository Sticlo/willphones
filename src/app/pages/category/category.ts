import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../../core/cart.service';
import { PriceListService } from '../../core/price-list.service';
import { VOLUME_TIERS, getUnitPrice, getVolumeTier, tierDiscountLabel, tierPriceLabel } from '../../core/pricing';
import { CATEGORIES, CategoryConfig, formatPrice, formatWholesalePrice } from '../../data/catalog';
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
  private readonly priceList = inject(PriceListService);

  public readonly volumeTiers = VOLUME_TIERS;
  public readonly tierPriceLabel = tierPriceLabel;
  public readonly tierDiscountLabel = tierDiscountLabel;
  public readonly getUnitPrice = getUnitPrice;

  public readonly config = computed<CategoryConfig>(() => {
    const slug = this.route.snapshot.data['category'] as string;
    return CATEGORIES[slug];
  });

  public readonly whatsappLink = whatsappLink();
  public readonly formatPrice = formatPrice;
  public readonly formatWholesalePrice = formatWholesalePrice;
  public readonly wholesaleMinUnits = SITE_CONFIG.wholesaleMinUnits;

  public whatsappFor(productName: string): string {
    return whatsappLink(`Hola! Me interesa comprar al por mayor: ${productName}. ¿Precio por volumen?`);
  }

  public downloadPriceList(): void {
    this.priceList.downloadCsv();
  }

  public discountForQty(quantity: number): string | null {
    const label = tierDiscountLabel(getVolumeTier(quantity));
    return label === 'Precio base' ? null : label;
  }
}
