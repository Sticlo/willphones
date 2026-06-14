import { Injectable } from '@angular/core';
import { CATEGORIES, CatalogItem, formatPrice } from '../data/catalog';
import { VOLUME_TIERS, getUnitPrice } from './pricing';

@Injectable({ providedIn: 'root' })
export class PriceListService {
  public downloadCsv(): void {
    const header = [
      'Categoría',
      'Producto',
      'Precio 6-11 uds',
      'Precio 12-23 uds (-5%)',
      'Precio 24+ uds (-10%)',
    ];

    const rows = [header];

    for (const category of Object.values(CATEGORIES)) {
      for (const item of category.items) {
        rows.push(this.rowForItem(category.title.replace(' al por mayor', ''), item));
      }
    }

    rows.push([]);
    rows.push(['Willphone\'s — Lista mayorista']);
    rows.push(['Compra mínima recomendada: 6 unidades por referencia']);
    rows.push(['Precios de referencia en COP. Confirmar disponibilidad por WhatsApp.']);

    const csv = rows.map(row => row.map(cell => this.escapeCell(cell)).join(';')).join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'willphones-lista-precios-mayorista.csv';
    link.click();
    URL.revokeObjectURL(url);
  }

  private rowForItem(category: string, item: CatalogItem): string[] {
    return [
      category,
      item.name,
      formatPrice(getUnitPrice(item.price, 6)),
      formatPrice(getUnitPrice(item.price, 12)),
      formatPrice(getUnitPrice(item.price, 24)),
    ];
  }

  private escapeCell(value: string): string {
    if (/[;"\n]/.test(value)) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }
}
