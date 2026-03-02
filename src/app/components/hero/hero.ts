import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  @ViewChild('heroBg') heroBg!: ElementRef<HTMLElement>;

  @HostListener('window:scroll', [])
  onScroll() {
    if (!this.heroBg) return;
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
