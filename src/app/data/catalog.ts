export interface CatalogItem {
  id: string;
  name: string;
  image: string;
}

export interface CategoryConfig {
  id: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  theme: 'blue' | 'orange' | 'black';
  items: CatalogItem[];
}

export const AUDIFONOS_ITEMS: CatalogItem[] = [
  { id: 'audifonos', name: 'Audífonos Bluetooth', image: 'assets/products/audifonos.webp' },
  { id: 'audifonos3', name: 'Audífonos Pro', image: 'assets/products/audifonos3.webp' },
  { id: 'audifonos32', name: 'Audífonos Premium', image: 'assets/products/audifonos32.webp' },
  { id: 'audifonos4', name: 'Audífonos Sport', image: 'assets/products/audifonos4.webp' },
  { id: 'audifonos54', name: 'Audífonos ANC', image: 'assets/products/audifonos54.webp' },
  { id: 'audifonosear', name: 'Audífonos In-Ear', image: 'assets/products/audifonosear.webp' },
  { id: 'audifonosearmorado', name: 'Audífonos Morado', image: 'assets/products/audifonosearmorado.webp' },
  { id: 'audifonoskun', name: 'Audífonos Kun', image: 'assets/products/audifonoskun.webp' },
  { id: 'audifonoskunrojos', name: 'Audífonos Kun Rojos', image: 'assets/products/audifonoskunrojos.webp' },
];

export const CARGADORES_ITEMS: CatalogItem[] = [
  { id: 'cargador3', name: 'Cargador Rápido', image: 'assets/products/cargador3.webp' },
  { id: 'cargador6', name: 'Cargador USB-C', image: 'assets/products/cargador6.webp' },
  { id: 'cargador7', name: 'Cargador Dual', image: 'assets/products/cargador7.webp' },
  { id: 'cargador8', name: 'Cargador 65W', image: 'assets/products/cargador8.webp' },
  { id: 'cargador10', name: 'Cargador Turbo', image: 'assets/products/cargador10.webp' },
  { id: 'cargadorpzx', name: 'Cargador PZX', image: 'assets/products/cargadorpzx.webp' },
  { id: 'cargadorpzx2', name: 'Cargador PZX Pro', image: 'assets/products/cargadorpzx2.webp' },
  { id: 'cargadorusb', name: 'Cargador USB', image: 'assets/products/cargadorusb.webp' },
  { id: 'cargadoor', name: 'Cargador Original', image: 'assets/products/cargadoor.webp' },
];

export const TECLADOS_ITEMS: CatalogItem[] = [
  { id: 'teclado', name: 'Teclado Bluetooth', image: 'assets/products/teclado.webp' },
  { id: 'teclados32', name: 'Teclado Premium', image: 'assets/products/teclados32.webp' },
];

export const CATEGORIES: Record<string, CategoryConfig> = {
  audifonos: {
    id: 'audifonos',
    title: 'Audífonos al por mayor',
    subtitle: 'Catálogo mayorista de audífonos Bluetooth, in-ear y over-ear. Cotiza por WhatsApp según la cantidad que necesites.',
    eyebrow: 'Venta al por mayor · Audio',
    theme: 'orange',
    items: AUDIFONOS_ITEMS,
  },
  cargadores: {
    id: 'cargadores',
    title: 'Cargadores al por mayor',
    subtitle: 'Carga rápida, USB-C y compatibles con las principales marcas. Escríbenos por WhatsApp para cotizar tu pedido.',
    eyebrow: 'Venta al por mayor · Carga',
    theme: 'blue',
    items: CARGADORES_ITEMS,
  },
  teclados: {
    id: 'teclados',
    title: 'Teclados al por mayor',
    subtitle: 'Teclados Bluetooth y premium para oficina, tablet y celular. Cotización directa por WhatsApp.',
    eyebrow: 'Venta al por mayor · Teclados',
    theme: 'black',
    items: TECLADOS_ITEMS,
  },
};

export const ALL_CATALOG_ITEMS: Record<string, CatalogItem> = Object.fromEntries(
  [...AUDIFONOS_ITEMS, ...CARGADORES_ITEMS, ...TECLADOS_ITEMS].map(item => [item.id, item])
);
