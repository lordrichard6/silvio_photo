import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';

import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit, OnDestroy {
  isSubmitting = false;
  submitted = false;
  errorMessage = '';
  private observer!: IntersectionObserver;

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

  constructor(private el: ElementRef) {}

  ngOnInit() {
    emailjs.init('0Zwd6N709W5ix3792');
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      const elements = this.el.nativeElement.querySelectorAll('.reveal');
      elements.forEach((el: Element) => this.observer.observe(el));
    }, 0);
  }

  async onSubmit() {
    if (this.isSubmitting) return;
    this.errorMessage = '';
    this.isSubmitting = true;

    const templateParams = {
      from_name: this.contactForm.name,
      from_email: this.contactForm.email,
      phone: this.contactForm.phone,
      service: this.contactForm.service,
      message: this.contactForm.message,
      to_name: 'Silvio Valente'
    };

    try {
      const response = await emailjs.send(
        'service_fh0v8cc',
        'template_3wra85a',
        templateParams
      );

      this.contactForm = { name: '', email: '', phone: '', service: '', message: '' };
      this.submitted = true;
    } catch {
      this.errorMessage = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou contacte-nos directamente por email.';
    } finally {
      this.isSubmitting = false;
    }
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    };
    this.submitted = false;
    this.errorMessage = '';
  }
}
