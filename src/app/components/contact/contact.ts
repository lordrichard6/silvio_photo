import { Component, OnInit, ElementRef, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
  // Honeypot — must stay empty. Bots fill all fields, humans never see this.
  website: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit, OnDestroy {
  isSubmitting = false;
  submitted = false;
  errorMessage = '';
  private observer!: IntersectionObserver;
  private platformId = inject(PLATFORM_ID);
  private formLoadedAt = 0;

  contactForm: ContactForm = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false,
    website: ''
  };

  services = [
    'Sessões de Retrato',
    'Fotografia de Eventos',
    'Fotografia Comercial'
  ];

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    emailjs.init('0Zwd6N709W5ix3792');
    this.formLoadedAt = Date.now();
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

    // Honeypot — silently drop bot submissions. Pretend success so they don't retry.
    if (this.contactForm.website) {
      this.submitted = true;
      return;
    }

    // Time-based check: humans take >2s to fill a form. Bots submit instantly.
    if (Date.now() - this.formLoadedAt < 2000) {
      this.submitted = true;
      return;
    }

    if (!this.contactForm.consent) {
      this.errorMessage = 'Por favor, aceite a Política de Privacidade para continuar.';
      return;
    }

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
      await emailjs.send(
        'service_fh0v8cc',
        'template_3wra85a',
        templateParams
      );

      this.contactForm = { name: '', email: '', phone: '', service: '', message: '', consent: false, website: '' };
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
      message: '',
      consent: false,
      website: ''
    };
    this.submitted = false;
    this.errorMessage = '';
    this.formLoadedAt = Date.now();
  }
}
