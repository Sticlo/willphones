import { Injectable, computed, signal } from '@angular/core';
import { CatalogItem } from '../data/catalog';
import { whatsappLink } from './site.config';

export interface CartLine {
  id: string;
  name: string;
  image: string;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly lines = signal<CartLine[]>([]);

  public readonly items = this.lines.asReadonly();
  public readonly isOpen = signal(false);

  public readonly count = computed(() =>
    this.lines().reduce((sum, line) => sum + line.quantity, 0)
  );

  public readonly whatsappCheckout = computed(() => whatsappLink(this.buildMessage()));

  public open(): void {
    this.isOpen.set(true);
  }

  public close(): void {
    this.isOpen.set(false);
  }

  public toggle(): void {
    this.isOpen.update(open => !open);
  }

  public isInCart(id: string): boolean {
    return this.lines().some(line => line.id === id);
  }

  public quantityOf(id: string): number {
    return this.lines().find(line => line.id === id)?.quantity ?? 0;
  }

  public add(item: CatalogItem): void {
    const current = this.lines();
    const existing = current.find(line => line.id === item.id);

    if (existing) {
      this.lines.set(
        current.map(line =>
          line.id === item.id ? { ...line, quantity: line.quantity + 1 } : line
        )
      );
    } else {
      this.lines.set([
        ...current,
        {
          id: item.id,
          name: item.name,
          image: item.image,
          quantity: 1,
        },
      ]);
    }

    this.open();
  }

  public increment(id: string): void {
    this.lines.update(lines =>
      lines.map(line =>
        line.id === id ? { ...line, quantity: line.quantity + 1 } : line
      )
    );
  }

  public decrement(id: string): void {
    this.lines.update(lines =>
      lines
        .map(line =>
          line.id === id ? { ...line, quantity: line.quantity - 1 } : line
        )
        .filter(line => line.quantity > 0)
    );
  }

  public remove(id: string): void {
    this.lines.update(lines => lines.filter(line => line.id !== id));
  }

  public clear(): void {
    this.lines.set([]);
  }

  private buildMessage(): string {
    const lines = this.lines();

    if (lines.length === 0) {
      return "Hola Willphone's! Me gustaría información sobre sus productos al por mayor.";
    }

    const detail = lines
      .map(line => `• ${line.name} x${line.quantity} uds`)
      .join('\n');

    return [
      "Hola Willphone's! Quiero cotizar una compra *al por mayor* con los siguientes productos:",
      '',
      detail,
      '',
      '¿Me pueden enviar precios, disponibilidad y formas de pago? Gracias.',
    ].join('\n');
  }
}
