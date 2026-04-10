import { Component, OnInit, ElementRef, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  image: string;
}

@Component({
  selector: 'app-services',
  imports: [RouterModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;
  private platformId = inject(PLATFORM_ID);

  services: Service[] = [
    {
      id: 1,
      slug: 'sessoes-de-retrato',
      title: 'Sessões de Retrato',
      description: 'Retratos profissionais para indivíduos, famílias e casais — capturados com luz natural e direção artística.',
      price: 'A partir de 100€',
      features: [
        'Sessão de 1-2 horas',
        '25 fotos editadas',
        'Local à escolha',
        'Download digital'
      ],
      image: '/services/retrato_01.webp'
    },
    {
      id: 2,
      slug: 'fotografia-de-eventos',
      title: 'Fotografia de Eventos',
      description: 'Eventos corporativos, festas e ocasiões especiais — cada momento espontâneo documentado com precisão.',
      price: 'A partir de 150€ + deslocação',
      features: [
        'Cobertura completa',
        'Momentos espontâneos',
        'Fotos de grupo',
        'Alta resolução'
      ],
      image: '/services/eventos_01.webp'
    },
    {
      id: 3,
      slug: 'fotografia-comercial',
      title: 'Fotografia Comercial',
      description: 'Fotografia de produto, marca e empresarial — imagens que comunicam valor e geram resultados.',
      price: 'A partir de 200€',
      features: [
        'Fotografia de produto',
        'Identidade de marca',
        'Direitos comerciais',
        'Edição incluída'
      ],
      image: '/services/comercial_01.webp'
    }
  ];

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15 }
    );

    setTimeout(() => {
      const elements = this.el.nativeElement.querySelectorAll('.reveal');
      elements.forEach((el: Element) => this.observer.observe(el));
    }, 0);
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
