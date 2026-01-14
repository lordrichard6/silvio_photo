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
      await emailjs.send(
        'service_fh0v8cc',
        'template_3wra85a',
        templateParams,
        '0Zwd6N709W5ix3792'
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
