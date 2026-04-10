import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-drone',
  imports: [],
  templateUrl: './drone.html',
  styleUrl: './drone.scss'
})
export class Drone implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('droneVideo') droneVideoRef!: ElementRef<HTMLVideoElement>;
  private observer!: IntersectionObserver;
  private platformId = inject(PLATFORM_ID);

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

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

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    // Angular strips the `muted` attribute from video elements — set it programmatically
    const video = this.droneVideoRef.nativeElement;
    video.muted = true;
    video.play().catch(() => {
      // Autoplay blocked — video remains as a static poster, acceptable fallback
    });
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
