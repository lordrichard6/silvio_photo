import { Component, OnInit, OnDestroy, ElementRef, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
  private platformId = inject(PLATFORM_ID);

  constructor(private portfolioService: PortfolioService, private el: ElementRef) {}

  ngOnInit() {
    this.featuredProjects = this.portfolioService.getClients().slice(0, 3);

    if (!isPlatformBrowser(this.platformId)) return;

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

    // setTimeout allows @for to render cards before observing
    setTimeout(() => {
      const targets = this.el.nativeElement.querySelectorAll('.reveal');
      targets.forEach((t: Element) => this.observer.observe(t));
    }, 0);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
