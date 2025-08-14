import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl?: string;
}

interface Filter {
  label: string;
  value: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  animations: [
    trigger('fadeInScale', [
      state('in', style({ opacity: 1, transform: 'scale(1)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('600ms ease-out')
      ])
    ]),
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class Gallery implements OnInit {
  animationState = 'in';
  activeFilter = 'all';
  lightboxActive = false;
  currentImageIndex = 0;

  filters: Filter[] = [
    { label: 'Todos', value: 'all' },
    { label: 'Casamentos', value: 'wedding' },
    { label: 'Retratos', value: 'portrait' },
    { label: 'Eventos', value: 'event' },
    { label: 'Comercial', value: 'commercial' }
  ];

  galleryItems: GalleryItem[] = [
    { id: 1, title: 'Cerimónia de Casamento Elegante', category: 'wedding' },
    { id: 2, title: 'Retrato Profissional', category: 'portrait' },
    { id: 3, title: 'Evento Corporativo', category: 'event' },
    { id: 4, title: 'Fotografia de Produto', category: 'commercial' },
    { id: 5, title: 'Casamento na Praia', category: 'wedding' },
    { id: 6, title: 'Retrato de Família', category: 'portrait' },
    { id: 7, title: 'Fotografia de Conferência', category: 'event' },
    { id: 8, title: 'Fotografia de Marca', category: 'commercial' },
    { id: 9, title: 'Casamento no Jardim', category: 'wedding' },
    { id: 10, title: 'Retrato de Finalista', category: 'portrait' },
    { id: 11, title: 'Evento de Gala', category: 'event' },
    { id: 12, title: 'Fotografia de Arquitetura', category: 'commercial' }
  ];

  filteredItems: GalleryItem[] = [];

  ngOnInit() {
    this.filteredItems = this.galleryItems;
  }

  get currentImage(): GalleryItem | undefined {
    return this.filteredItems[this.currentImageIndex];
  }

  setActiveFilter(filter: string) {
    this.activeFilter = filter;
    this.filteredItems = filter === 'all' 
      ? this.galleryItems 
      : this.galleryItems.filter(item => item.category === filter);
  }

  openLightbox(index: number) {
    this.currentImageIndex = index;
    this.lightboxActive = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxActive = false;
    document.body.style.overflow = 'auto';
  }

  previousImage() {
    this.currentImageIndex = this.currentImageIndex > 0 
      ? this.currentImageIndex - 1 
      : this.filteredItems.length - 1;
  }

  nextImage() {
    this.currentImageIndex = this.currentImageIndex < this.filteredItems.length - 1 
      ? this.currentImageIndex + 1 
      : 0;
  }
}
