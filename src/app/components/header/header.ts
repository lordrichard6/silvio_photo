import { Component, HostListener, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = '';

  private observer!: IntersectionObserver;
  private platformId = inject(PLATFORM_ID);

  constructor(private router: Router) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.checkScroll();
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.checkScroll();
  }

  private checkScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  private setupIntersectionObserver() {
    const sectionIds = ['home', 'about', 'gallery', 'services', 'contact'];

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  scrollTo(elementId: string) {
    this.closeMobileMenu();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/'], { fragment: elementId });
    }
  }
}
