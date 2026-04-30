import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Gallery } from '../gallery/gallery';
import { Services } from '../services/services';
import { Drone } from '../drone/drone';
import { Founder } from '../founder/founder';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    About,
    Gallery,
    Services,
    Drone,
    Founder,
    Contact
  ],
  template: `
    <h1 class="visually-hidden">Silvio Valente — Fotógrafo Profissional no Alentejo</h1>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-gallery></app-gallery>
    <app-services></app-services>
    <app-drone></app-drone>
    <app-founder></app-founder>
    <app-contact></app-contact>
  `,
  styles: [`
    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `]
})
export class HomeComponent implements OnInit {
  private titleService = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    const t = 'Silvio Valente Fotografia — Fotógrafo Profissional no Alentejo, Portugal';
    const d = 'Fotógrafo profissional em Nisa, Alentejo. Sessões de retrato, fotografia de eventos e fotografia comercial em todo Portugal. Cobertura aérea com drone certificado ANAC.';
    this.titleService.setTitle(t);
    this.meta.updateTag({ name: 'description', content: d });
    this.meta.updateTag({ property: 'og:title', content: t });
    this.meta.updateTag({ property: 'og:description', content: d });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.silviovalentt.pt/' });
    this.meta.updateTag({ name: 'twitter:title', content: t });
    this.meta.updateTag({ name: 'twitter:description', content: d });
  }
}
