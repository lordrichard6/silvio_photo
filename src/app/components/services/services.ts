import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  styleUrl: './services.scss',
  animations: [
    trigger('fadeInUp', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out')
      ])
    ])
  ]
})
export class Services implements OnInit {
  animationState = 'in';

  services: Service[] = [
    {
      id: 1,
      title: 'Sessões de Retrato',
      description: 'Retratos profissionais para indivíduos, famílias e casais',
      price: 'A partir de 150€',
      features: [
        'Sessão de 1-2 horas',
        '50+ fotos editadas',
        'Várias mudanças de roupa',
        'Local à escolha',
        'Download digital'
      ],
      icon: 'fa-user'
    },
    {
      id: 2,
      title: 'Fotografia de Eventos',
      description: 'Eventos corporativos, festas e ocasiões especiais',
      price: 'A partir de 80€/hora',
      features: [
        'Cobertura do evento',
        'Momentos espontâneos',
        'Fotos de grupo',
        'Entrega em 48 horas',
        'Imagens alta resolução'
      ],
      icon: 'fa-calendar'
    },
    {
      id: 3,
      title: 'Fotografia Comercial',
      description: 'Fotografia de produto, marca e empresarial',
      price: 'A partir de 250€',
      features: [
        'Fotografia de produto',
        'Fotografia de marca',
        'Direitos de uso comercial',
        'Retoque incluído',
        'Múltiplos formatos'
      ],
      icon: 'fa-briefcase'
    }
  ];

  ngOnInit() {
    // Component initialization
  }
}
