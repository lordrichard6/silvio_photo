import { Component, HostListener, ViewChild, ElementRef, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  @ViewChild('heroBg') heroBg!: ElementRef<HTMLElement>;

  private platformId = inject(PLATFORM_ID);

  @HostListener('window:scroll', [])
  onScroll() {
    if (!isPlatformBrowser(this.platformId) || !this.heroBg) return;
    const scrolled = window.pageYOffset;
    const heroHeight = window.innerHeight;
    if (scrolled < heroHeight) {
      this.heroBg.nativeElement.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
  }

  scrollToGallery() {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToNext() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
}
