export interface CatalogItem {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface CategoryConfig {
  id: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  theme: 'blue' | 'orange' | 'black';
  items: CatalogItem[];
}

export function formatPrice(amount: number): string {
  return '$' + amount.toLocaleString('es-CO');
}

export function formatWholesalePrice(amount: number): string {
  return `Desde ${formatPrice(amount)}`;
}

export const AUDIFONOS_ITEMS: CatalogItem[] = [
  { id: 'audifonos', name: 'Audífonos Bluetooth', image: 'assets/products/audifonos.webp', price: 45000 },
  { id: 'audifonos3', name: 'Audífonos Pro', image: 'assets/products/audifonos3.webp', price: 55000 },
  { id: 'audifonos32', name: 'Audífonos Premium', image: 'assets/products/audifonos32.webp', price: 62000 },
  { id: 'audifonos4', name: 'Audífonos Sport', image: 'assets/products/audifonos4.webp', price: 48000 },
  { id: 'audifonos54', name: 'Audífonos ANC', image: 'assets/products/audifonos54.webp', price: 75000 },
  { id: 'audifonosear', name: 'Audífonos In-Ear', image: 'assets/products/audifonosear.webp', price: 35000 },
  { id: 'audifonosearmorado', name: 'Audífonos Morado', image: 'assets/products/audifonosearmorado.webp', price: 42000 },
  { id: 'audifonoskun', name: 'Audífonos Kun', image: 'assets/products/audifonoskun.webp', price: 38000 },
  { id: 'audifonoskunrojos', name: 'Audífonos Kun Rojos', image: 'assets/products/audifonoskunrojos.webp', price: 40000 },
];

export const CARGADORES_ITEMS: CatalogItem[] = [
  { id: 'cargador3', name: 'Cargador Rápido', image: 'assets/products/cargador3.webp', price: 22000 },
  { id: 'cargador6', name: 'Cargador USB-C', image: 'assets/products/cargador6.webp', price: 18000 },
  { id: 'cargador7', name: 'Cargador Dual', image: 'assets/products/cargador7.webp', price: 25000 },
  { id: 'cargador8', name: 'Cargador 65W', image: 'assets/products/cargador8.webp', price: 28000 },
  { id: 'cargador10', name: 'Cargador Turbo', image: 'assets/products/cargador10.webp', price: 32000 },
  { id: 'cargadorpzx', name: 'Cargador PZX', image: 'assets/products/cargadorpzx.webp', price: 20000 },
  { id: 'cargadorpzx2', name: 'Cargador PZX Pro', image: 'assets/products/cargadorpzx2.webp', price: 24000 },
  { id: 'cargadorusb', name: 'Cargador USB', image: 'assets/products/cargadorusb.webp', price: 15000 },
  { id: 'cargadoor', name: 'Cargador Original', image: 'assets/products/cargadoor.webp', price: 35000 },
];

export const TECLADOS_ITEMS: CatalogItem[] = [
  { id: 'teclado', name: 'Teclado Bluetooth', image: 'assets/products/teclado.webp', price: 85000 },
  { id: 'teclados32', name: 'Teclado Premium', image: 'assets/products/teclados32.webp', price: 95000 },
];

export const CATEGORIES: Record<string, CategoryConfig> = {
  audifonos: {
    id: 'audifonos',
    title: 'Audífonos al por mayor',
    subtitle: 'Catálogo mayorista de audífonos Bluetooth, in-ear y over-ear. Precios por volumen para tiendas y distribuidores.',
    eyebrow: 'Venta al por mayor · Audio',
    theme: 'orange',
    items: AUDIFONOS_ITEMS,
  },
  cargadores: {
    id: 'cargadores',
    title: 'Cargadores al por mayor',
    subtitle: 'Carga rápida, USB-C y compatibles con las principales marcas. Ideal para revender con margen.',
    eyebrow: 'Venta al por mayor · Carga',
    theme: 'blue',
    items: CARGADORES_ITEMS,
  },
  teclados: {
    id: 'teclados',
    title: 'Teclados al por mayor',
    subtitle: 'Teclados Bluetooth y premium para oficina, tablet y celular. Precios mayoristas con descuento por volumen.',
    eyebrow: 'Venta al por mayor · Teclados',
    theme: 'black',
    items: TECLADOS_ITEMS,
  },
};

export const ALL_CATALOG_ITEMS: Record<string, CatalogItem> = Object.fromEntries(
  [...AUDIFONOS_ITEMS, ...CARGADORES_ITEMS, ...TECLADOS_ITEMS].map(item => [item.id, item])
);
