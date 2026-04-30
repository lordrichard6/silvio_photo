import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const STORAGE_KEY = 'sv_cookie_consent_v1';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cookie-consent.html',
  styleUrl: './cookie-consent.scss'
})
export class CookieConsent implements OnInit {
  show = false;
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    // Show banner only if user hasn't decided yet.
    this.show = !localStorage.getItem(STORAGE_KEY);
  }

  accept() {
    this.persist('granted');
    this.updateConsent('granted');
    this.show = false;
  }

  reject() {
    this.persist('denied');
    this.updateConsent('denied');
    this.show = false;
  }

  private persist(value: 'granted' | 'denied') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, ts: Date.now() }));
    } catch { /* private mode / quota — ignore */ }
  }

  private updateConsent(value: 'granted' | 'denied') {
    if (typeof window === 'undefined' || !window.dataLayer) return;
    // Google Consent Mode v2 update.
    window.dataLayer.push(['consent', 'update', {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value
    }]);
  }
}
