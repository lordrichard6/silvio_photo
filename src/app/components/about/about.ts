import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  animations: [
    trigger('slideInLeft', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('800ms ease-out')
      ])
    ]),
    trigger('slideInRight', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('800ms ease-out')
      ])
    ])
  ]
})
export class About implements OnInit {
  animationState = 'in';

  ngOnInit() {
    // Animation state is set on initialization
  }
}
