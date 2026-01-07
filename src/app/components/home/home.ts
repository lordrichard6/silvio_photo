import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Gallery } from '../gallery/gallery';
import { Services } from '../services/services';
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
    Founder,
    Contact
  ],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-gallery></app-gallery>
    <app-services></app-services>
    <app-founder></app-founder>
    <app-contact></app-contact>
  `
})
export class HomeComponent { }
