import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechService {
  id: string;
  title: string;
  description: string;
  iconPath: string; // SVG path d attribute or icon key
  iconViewBox?: string;
}

interface Benefit {
  title: string;
  description: string;
  iconName: string;
}

interface GalleryItem {
  title: string;
  category: string;
  image: string;
  size: 'small' | 'large' | 'tall' | 'wide';
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // --- CONFIGURATION PLACEHOLDERS (Easily editable by the user) ---
  public readonly whatsappNumber = signal('+57 300 000 0000'); // Reemplazar con el número real, ej: '573123456789'
  public readonly whatsappDefaultMessage = signal('Hola Willphone\'s! Me gustaría solicitar información sobre sus servicios de reparación y accesorios.');
  public readonly facebookUrl = signal('https://facebook.com/willphones'); // Reemplazar con link real
  public readonly instagramUrl = signal('https://instagram.com/willphones'); // Reemplazar con link real
  public readonly officialLogoUrl = signal(''); // Si hay logo oficial en imagen, colocar la ruta aquí. Si está vacío, se usará el logo de texto SVG.
  
  // Computed property to format WhatsApp Link
  public readonly whatsappLink = computed(() => {
    // Strip non-numeric characters for the api link
    const cleanNum = this.whatsappNumber().replace(/\D/g, '');
    const encodedMsg = encodeURIComponent(this.whatsappDefaultMessage());
    return `https://wa.me/${cleanNum}?text=${encodedMsg}`;
  });

  // --- CONTENT DATA STORES ---
  public readonly services = signal<TechService[]>([
    {
      id: 'screen',
      title: 'Reparación de pantallas',
      description: 'Reemplazo express de pantallas rotas y displays táctiles con repuestos de calidad original y garantía.',
      iconPath: 'M17 2H7C5.9 2 5 2.9 5 4v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-4H7V6h10v10z',
      iconViewBox: '0 0 24 24'
    },
    {
      id: 'battery',
      title: 'Cambio de batería',
      description: 'Recupera la autonomía de tu celular. Instalación inmediata de baterías de alto rendimiento con diagnóstico previo.',
      iconPath: 'M16.67 4H15V2H9v2H7.33C6.6 4 6 4.6 6 5.33v15.33C6 21.4 6.6 22 7.33 22h9.33c.73 0 1.33-.6 1.33-1.33V5.33C18 4.6 17.4 4 16.67 4z',
      iconViewBox: '0 0 24 24'
    },
    {
      id: 'software',
      title: 'Reparación de software',
      description: 'Solución a reinicios infinitos, eliminación de malware, actualizaciones de sistema y recuperación de cuentas.',
      iconPath: 'M9.5 2C5.91 2 3 4.91 3 8.5V11c0 1.1.9 2 2 2h2v-2H5V8.5C5 6.01 7.01 4 9.5 4S14 6.01 14 8.5V11h-2v2h2c1.1 0 2-.9 2-2V8.5C16 4.91 13.09 2 9.5 2z M18 10h-2v11.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V13h-3v-3z',
      iconViewBox: '0 0 24 24'
    },
    {
      id: 'glass',
      title: 'Vidrios templados',
      description: 'Protección máxima 9D, cerámica mate y privacidad para tu pantalla. Instalación perfecta sin burbujas.',
      iconPath: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 15H7V6h10v12z',
      iconViewBox: '0 0 24 24'
    },
    {
      id: 'cases',
      title: 'Forros y estuches',
      description: 'Forros anti-impacto, fundas de silicona premium y estuches de diseño con alta protección y estilo futurista.',
      iconPath: 'M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v14z',
      iconViewBox: '0 0 24 24'
    },
    {
      id: 'chargers',
      title: 'Cargadores y cables',
      description: 'Carga rápida certificada Power Delivery e Qualcomm 3.0. Cables reforzados y cargadores inalámbricos.',
      iconPath: 'M18 10H16.2L18 4H10V10H8.2L12 20V12h1.8L10 6h6v4z',
      iconViewBox: '0 0 24 24'
    },
    {
      id: 'headphones',
      title: 'Audífonos y accesorios',
      description: 'Audífonos bluetooth con cancelación de ruido activa, soportes magnéticos y gadgets tecnológicos.',
      iconPath: 'M12 2c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z',
      iconViewBox: '0 0 24 24'
    }
  ]);

  public readonly benefits = signal<Benefit[]>([
    {
      title: 'Atención Rápida',
      description: 'Reparaciones express en tiempo récord para que no te quedes incomunicado.',
      iconName: 'zap'
    },
    {
      title: 'Técnicos Especializados',
      description: 'Certificados para las principales marcas como Apple, Samsung, Xiaomi y más.',
      iconName: 'cpu'
    },
    {
      title: 'Productos de Calidad',
      description: 'Accesorios seleccionados y repuestos testeados individualmente.',
      iconName: 'shield'
    },
    {
      title: 'Garantía Asegurada',
      description: 'Todas nuestras reparaciones y repuestos cuentan con garantía Willphone’s.',
      iconName: 'award'
    },
    {
      title: 'Excelente Atención',
      description: 'Asesoramiento personalizado, honesto y transparente en todo momento.',
      iconName: 'smile'
    },
    {
      title: 'Precios Competitivos',
      description: 'Las mejores tarifas del mercado con excelente relación calidad-precio.',
      iconName: 'dollar-sign'
    }
  ]);

  public readonly galleryItems = signal<GalleryItem[]>([
    {
      title: 'Soporte Técnico Especializado',
      category: 'Reparación',
      image: 'assets/hero-repair.png',
      size: 'large'
    },
    {
      title: 'Accesorios y Audio Premium',
      category: 'Accesorios',
      image: 'assets/tech-accessories.png',
      size: 'wide'
    },
    {
      title: 'Repuestos Originales de Pantalla',
      category: 'Calidad',
      image: 'assets/hero-repair.png',
      size: 'small'
    },
    {
      title: 'Estuches y Carga de Vanguardia',
      category: 'Tecnología',
      image: 'assets/tech-accessories.png',
      size: 'small'
    }
  ]);

  public activeTab = signal<string>('all');

  public toggleTab(category: string): void {
    this.activeTab.set(category);
  }

  // Filter gallery items based on active tab
  public filteredGalleryItems = computed(() => {
    const tab = this.activeTab();
    if (tab === 'all') return this.galleryItems();
    return this.galleryItems().filter(item => item.category.toLowerCase() === tab.toLowerCase());
  });
}
