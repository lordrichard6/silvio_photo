import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioService, PortfolioClient } from '../../services/portfolio.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery implements OnInit, OnDestroy {
  featuredProjects: PortfolioClient[] = [];

  private observer!: IntersectionObserver;

  constructor(private portfolioService: PortfolioService, private el: ElementRef) {}

  ngOnInit() {
    this.featuredProjects = this.portfolioService.getClients().slice(0, 3);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12 }
    );

    // setTimeout allows *ngFor to render cards before observing
    setTimeout(() => {
      const targets = this.el.nativeElement.querySelectorAll('.reveal');
      targets.forEach((t: Element) => this.observer.observe(t));
    }, 0);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
