import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  services: Service[] = [
    {
      id: 1,
      title: 'Sessões de Retrato',
      description: 'Retratos profissionais para indivíduos, famílias e casais',
      price: 'A partir de 100€',
      features: [
        'Sessão de 1-2 horas',
        '25 fotos editadas',
        'Local à escolha',
        'Download digital'
      ],
      icon: 'fa-user'
    },
    {
      id: 2,
      title: 'Fotografia de Eventos',
      description: 'Eventos corporativos, festas e ocasiões especiais',
      price: 'A partir de 150€ + deslocação',
      features: [
        'Cobertura do evento',
        'Momentos espontâneos',
        'Fotos de grupo',
        'Imagens alta resolução'
      ],
      icon: 'fa-calendar'
    },
    {
      id: 3,
      title: 'Fotografia Comercial',
      description: 'Fotografia de produto, marca e empresarial',
      price: 'A partir de 200€',
      features: [
        'Fotografia de produto',
        'Fotografia de marca',
        'Direitos de uso comercial',
        'Edição incluído'
      ],
      icon: 'fa-briefcase'
    }
  ];

  constructor(private el: ElementRef) {}

  ngOnInit() {
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
