import { Component, OnInit, OnDestroy, ElementRef, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit, OnDestroy {
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

    const targets = this.el.nativeElement.querySelectorAll('.reveal');
    targets.forEach((t: Element) => this.observer.observe(t));
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
