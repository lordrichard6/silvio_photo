import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  animations: [
    trigger('slideInUp', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out')
      ])
    ])
  ]
})
export class Contact implements OnInit {
  animationState = 'in';

  contactForm: ContactForm = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  services = [
    'Fotografia de Casamento',
    'Sessões de Retrato',
    'Fotografia de Eventos',
    'Fotografia Comercial'
  ];

  ngOnInit() {
    // Component initialization
  }

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    // Here you would typically send the form data to a backend service
    alert('Obrigado pela sua mensagem! Entraremos em contacto consigo brevemente.');
    this.resetForm();
  }

  private resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    };
  }
}
