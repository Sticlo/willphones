import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PriceListService } from '../../core/price-list.service';
import { SITE_CONFIG, whatsappLink } from '../../core/site.config';

interface TechService {
  id: string;
  title: string;
  description: string;
  iconPath: string;
  iconViewBox?: string;
}

interface Benefit {
  title: string;
  description: string;
  iconName: string;
}

interface Fact {
  text: string;
  category: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  private readonly priceList = inject(PriceListService);

  public readonly whatsappNumber = SITE_CONFIG.whatsappNumber;
  public readonly facebookUrl    = SITE_CONFIG.facebookUrl;
  public readonly instagramUrl   = SITE_CONFIG.instagramUrl;
  public readonly whatsappLink   = computed(() => whatsappLink());

  public readonly facts: Fact[] = [
    { text: 'Comprar al por mayor te permite obtener mejores márgenes al revender audífonos y cargadores en tu tienda.', category: 'Mayorista' },
    { text: 'Los pedidos desde 6 unidades acceden a precios especiales por volumen en la mayoría de referencias.', category: 'Mayorista' },
    { text: 'Un cargador de 65W es uno de los accesorios más vendidos al por mayor por su alta rotación.', category: 'Carga' },
    { text: 'Los audífonos Bluetooth tienen demanda constante — ideal para surtir vitrinas y mostradores.', category: 'Audio' },
    { text: 'Trabajamos con tiendas, técnicos celulares y distribuidores en todo el país.', category: 'Mayorista' },
    { text: 'Puedes armar tu pedido en el carrito y recibir la cotización completa por WhatsApp al instante.', category: 'Mayorista' },
  ];

  public activeFact = signal<number>(0);

  public nextFact(): void {
    this.activeFact.set((this.activeFact() + 1) % this.facts.length);
  }

  public prevFact(): void {
    this.activeFact.set((this.activeFact() - 1 + this.facts.length) % this.facts.length);
  }

  public readonly services = signal<TechService[]>([
    {
      id: 'screen',
      title: 'Reparación de pantallas',
      description: 'Reemplazo express de pantallas rotas y displays táctiles con repuestos de calidad original y garantía.',
      iconPath: 'M17 2H7C5.9 2 5 2.9 5 4v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-4H7V6h10v10z',
      iconViewBox: '0 0 24 24',
    },
    {
      id: 'battery',
      title: 'Cambio de batería',
      description: 'Recupera la autonomía de tu celular. Instalación inmediata de baterías de alto rendimiento con diagnóstico previo.',
      iconPath: 'M16.67 4H15V2H9v2H7.33C6.6 4 6 4.6 6 5.33v15.33C6 21.4 6.6 22 7.33 22h9.33c.73 0 1.33-.6 1.33-1.33V5.33C18 4.6 17.4 4 16.67 4z',
      iconViewBox: '0 0 24 24',
    },
    {
      id: 'software',
      title: 'Reparación de software',
      description: 'Solución a reinicios infinitos, eliminación de malware, actualizaciones de sistema y recuperación de cuentas.',
      iconPath: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zm-8-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4 6h16v10H4V6z',
      iconViewBox: '0 0 24 24',
    },
    {
      id: 'connector',
      title: 'Puerto de carga',
      description: 'Limpieza y reemplazo de conectores USB-C, Lightning y Micro-USB. Solucionamos cargas intermitentes.',
      iconPath: 'M11 19H6.99c-.55 0-1-.45-1-1v-1h5V19zm-1-4H5V7h5V15zm0-10H6.99C6.44 5 6 5.45 6 6v.01h4V5zm5.01 0H14v1.01h4.01V6c0-.55-.45-1-1-1zM14 15h5v-8h-5V15zm1 4h3.01c.55 0 1-.45 1-1v-1H15V19z',
      iconViewBox: '0 0 24 24',
    },
    {
      id: 'water',
      title: 'Daño por agua',
      description: 'Tratamiento de corrosión, limpieza ultrasónica y restauración de componentes mojados.',
      iconPath: 'M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2zm-4-7.89c.16 0 .3.09.37.23C9.1 13.98 9.94 15 12 15c1.5 0 2.41-.7 2.99-1.34.2-.23.54-.27.78-.08.24.19.28.54.09.78C15.05 15.36 13.78 17 12 17c-2.66 0-3.86-1.87-4.39-2.95-.1-.19-.04-.43.14-.55.08-.05.17-.07.25-.07z',
      iconViewBox: '0 0 24 24',
    },
    {
      id: 'camera',
      title: 'Cámara y flash',
      description: 'Reemplazo de módulos de cámara trasera/frontal y reparación del sistema de flash.',
      iconPath: 'M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l1.83-2h4.24l1.83 2H20v12zM12 8c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z',
      iconViewBox: '0 0 24 24',
    },
  ]);

  public readonly benefits = signal<Benefit[]>([
    { title: 'Precios Mayoristas', description: 'Tarifas especiales por volumen para tiendas, técnicos y distribuidores.', iconName: 'dollar' },
    { title: 'Stock Disponible', description: 'Referencias de alta rotación listas para surtir tu negocio sin esperas.', iconName: 'shield' },
    { title: 'Pedidos por Volumen', description: 'Desde 6 unidades con descuentos progresivos según la cantidad.', iconName: 'zap' },
    { title: 'Catálogo Amplio', description: 'Audífonos, cargadores, teclados y accesorios para revender.', iconName: 'cpu' },
    { title: 'Cotización Rápida', description: 'Arma tu pedido en el carrito y recibe precios al instante por WhatsApp.', iconName: 'smile' },
    { title: 'Servicio Técnico', description: 'También reparamos equipos — ideal si tienes taller o tienda de celulares.', iconName: 'award' },
  ]);

  public downloadPriceList(): void {
    this.priceList.downloadCsv();
  }
}
