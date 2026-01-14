import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { PortfolioService, PortfolioClient } from '../../services/portfolio.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('600ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
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
  currentProject: PortfolioClient | undefined;
  currentIndex = 0;
  private carouselInterval: any;
  allClients: PortfolioClient[] = [];
  marqueeProjects: PortfolioClient[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.allClients = this.portfolioService.getClients();

    // Initialize with first project
    if (this.allClients.length > 0) {
      this.currentProject = this.allClients[0];
      this.startCarousel();
    }

    // Duplicate clients to create a seamless marquee loop
    // We need enough items to fill the width of the screen plus overflow
    this.marqueeProjects = [...this.allClients, ...this.allClients, ...this.allClients, ...this.allClients];
  }

  ngOnDestroy() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.allClients.length;
      this.currentProject = this.allClients[this.currentIndex];
    }, 4000);
  }
}
