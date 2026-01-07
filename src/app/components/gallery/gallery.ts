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
  mainProjects: PortfolioClient[] = [];
  marqueeProjects: PortfolioClient[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    const allClients = this.portfolioService.getClients();
    this.mainProjects = allClients.slice(0, 3);

    // Duplicate clients to create a seamless marquee loop
    // We need enough items to fill the width of the screen plus overflow
    this.marqueeProjects = [...allClients, ...allClients, ...allClients, ...allClients];
  }
}
