import { formatPrice } from '../data/catalog';

export interface VolumeTier {
  min: number;
  max: number | null;
  label: string;
  discount: number;
}

export const VOLUME_TIERS: VolumeTier[] = [
  { min: 24, max: null, label: '24+ uds', discount: 0.10 },
  { min: 12, max: 23, label: '12-23 uds', discount: 0.05 },
  { min: 6, max: 11, label: '6-11 uds', discount: 0 },
];

export function getVolumeTier(quantity: number): VolumeTier {
  return (
    VOLUME_TIERS.find(tier => quantity >= tier.min && (tier.max === null || quantity <= tier.max)) ??
    VOLUME_TIERS[VOLUME_TIERS.length - 1]
  );
}

export function getUnitPrice(basePrice: number, quantity: number): number {
  const tier = getVolumeTier(Math.max(quantity, 1));
  return Math.round(basePrice * (1 - tier.discount));
}

export function getLineSubtotal(basePrice: number, quantity: number): number {
  return getUnitPrice(basePrice, quantity) * quantity;
}

export function tierPriceLabel(basePrice: number, tier: VolumeTier): string {
  return formatPrice(getUnitPrice(basePrice, tier.min));
}

export function tierDiscountLabel(tier: VolumeTier): string {
  if (tier.discount === 0) return 'Precio base';
  return `-${Math.round(tier.discount * 100)}%`;
}
