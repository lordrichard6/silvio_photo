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

import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
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
  isSubmitting = false;

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

  async onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    const templateParams = {
      from_name: this.contactForm.name,
      from_email: this.contactForm.email,
      phone: this.contactForm.phone,
      service: this.contactForm.service,
      message: this.contactForm.message,
      to_name: 'Silvio Valente' // Optional, depends on your template
    };

    try {
      // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
      // 1. Service ID: e.g., 'service_xyz'
      // 2. Template ID: e.g., 'template_abc'
      // 3. Public Key: e.g., 'user_123'
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      alert('Mensagem enviada com sucesso! Entraremos em contacto consigo brevemente.');
      this.resetForm();
    } catch (error) {
      console.error('FAILED...', error);
      alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou contacte-nos directamente por email.');
    } finally {
      this.isSubmitting = false;
    }
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
