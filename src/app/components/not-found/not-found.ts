import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss'
})
export class NotFound implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private meta = inject(Meta);

  ngOnInit() {
    // Tell crawlers this is a 404 even though SPA serves 200.
    this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
    this.meta.updateTag({ name: 'prerender-status-code', content: '404' });
    if (isPlatformBrowser(this.platformId)) {
      // No-op on client beyond meta — SPA, can't change HTTP status.
    }
  }
}
