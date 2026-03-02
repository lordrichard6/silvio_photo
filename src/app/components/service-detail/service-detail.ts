import { Component, OnInit, OnDestroy, ElementRef, Renderer2, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { getServiceBySlug, ServicePageData } from '../../services/services-data';
import { PortfolioService, PortfolioClient } from '../../services/portfolio.service';

@Component({
    selector: 'app-service-detail',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './service-detail.html',
    styleUrls: ['./service-detail.scss']
})
export class ServiceDetailComponent implements OnInit, OnDestroy {
    service: ServicePageData | undefined;
    relatedProjects: PortfolioClient[] = [];
    openFaqIndex: number | null = null;
    private observer!: IntersectionObserver;
    private jsonLdScript: HTMLScriptElement | null = null;

    constructor(
        private route: ActivatedRoute,
        private meta: Meta,
        private titleService: Title,
        private el: ElementRef,
        private renderer: Renderer2,
        @Inject(DOCUMENT) private document: Document,
        private portfolioService: PortfolioService
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const slug = params.get('slug');
            if (slug) {
                this.service = getServiceBySlug(slug);
                if (this.service) {
                    this.setMetaTags(this.service);
                    this.injectJsonLd(this.service);
                    this.relatedProjects = this.service.relatedPortfolioSlugs
                        .map(s => this.portfolioService.getClientBySlug(s))
                        .filter((p): p is PortfolioClient => !!p);
                }
            }
            setTimeout(() => this.setupIntersectionObserver(), 50);
        });
    }

    ngOnDestroy() {
        if (this.observer) this.observer.disconnect();
        if (this.jsonLdScript) this.renderer.removeChild(this.document.head, this.jsonLdScript);
    }

    private setMetaTags(service: ServicePageData) {
        this.titleService.setTitle(`${service.subtitle} | Silvio Valente Fotografia`);
        this.meta.updateTag({ name: 'description', content: service.metaDescription });
        this.meta.updateTag({ name: 'keywords', content: service.keywords });
        this.meta.updateTag({ property: 'og:title', content: `${service.title} | Silvio Valente Fotografia` });
        this.meta.updateTag({ property: 'og:description', content: service.metaDescription });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
    }

    private injectJsonLd(service: ServicePageData) {
        if (this.jsonLdScript) {
            this.renderer.removeChild(this.document.head, this.jsonLdScript);
        }
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': service.title,
            'description': service.metaDescription,
            'provider': {
                '@type': 'LocalBusiness',
                'name': 'Silvio Valente Fotografia',
                'url': 'https://www.silviovalentt.pt',
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': 'Nisa',
                    'addressRegion': 'Portalegre',
                    'addressCountry': 'PT'
                }
            },
            'areaServed': 'Portugal',
            'url': `https://www.silviovalentt.pt/servicos/${service.slug}`
        };
        this.jsonLdScript = this.renderer.createElement('script');
        this.renderer.setAttribute(this.jsonLdScript, 'type', 'application/ld+json');
        this.renderer.setProperty(this.jsonLdScript, 'textContent', JSON.stringify(schema));
        this.renderer.appendChild(this.document.head, this.jsonLdScript);
    }

    private setupIntersectionObserver() {
        if (this.observer) this.observer.disconnect();
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('revealed');
                });
            },
            { threshold: 0.1 }
        );
        const elements = this.el.nativeElement.querySelectorAll('.reveal');
        elements.forEach((el: Element) => this.observer.observe(el));
    }

    toggleFaq(index: number) {
        this.openFaqIndex = this.openFaqIndex === index ? null : index;
    }

    scrollToContact() {
        window.location.href = '/#contact';
    }
}
