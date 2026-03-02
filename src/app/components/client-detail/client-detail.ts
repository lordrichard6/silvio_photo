import { Component, OnInit, OnDestroy, Renderer2, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { PortfolioService, PortfolioClient } from '../../services/portfolio.service';

@Component({
    selector: 'app-client-detail',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './client-detail.html',
    styleUrls: ['./client-detail.scss']
})
export class ClientDetailComponent implements OnInit, OnDestroy {
    client: PortfolioClient | undefined;
    prevProject: PortfolioClient | undefined;
    nextProject: PortfolioClient | undefined;
    private jsonLdScript: HTMLScriptElement | null = null;

    constructor(
        private route: ActivatedRoute,
        private portfolioService: PortfolioService,
        private meta: Meta,
        private titleService: Title,
        private renderer: Renderer2,
        @Inject(DOCUMENT) private document: Document
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const slug = params.get('slug');
            if (slug) {
                const allProjects = this.portfolioService.getClients();
                const index = allProjects.findIndex(p => p.slug === slug);
                this.client = index >= 0 ? allProjects[index] : undefined;
                this.prevProject = index > 0 ? allProjects[index - 1] : undefined;
                this.nextProject = index < allProjects.length - 1 ? allProjects[index + 1] : undefined;
                if (this.client) {
                    this.setMetaTags(this.client);
                    this.injectJsonLd(this.client);
                }
            }
        });
    }

    ngOnDestroy() {
        if (this.jsonLdScript) this.renderer.removeChild(this.document.head, this.jsonLdScript);
    }

    private setMetaTags(client: PortfolioClient) {
        this.titleService.setTitle(`${client.name} | Silvio Valente Fotografia`);
        this.meta.updateTag({ name: 'description', content: client.description });
        this.meta.updateTag({ property: 'og:title', content: `${client.name} | Silvio Valente Fotografia` });
        this.meta.updateTag({ property: 'og:description', content: client.description });
        this.meta.updateTag({ property: 'og:image', content: `https://www.silviovalentt.pt/${client.coverImage}` });
        this.meta.updateTag({ property: 'og:url', content: `https://www.silviovalentt.pt/portfolio/${client.slug}` });
    }

    private injectJsonLd(client: PortfolioClient) {
        if (this.jsonLdScript) this.renderer.removeChild(this.document.head, this.jsonLdScript);
        const base = 'https://www.silviovalentt.pt';
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            'name': `${client.name} — Silvio Valente Fotografia`,
            'description': client.description,
            'url': `${base}/portfolio/${client.slug}`,
            'author': {
                '@type': 'Person',
                'name': 'Silvio Valente',
                'url': base
            },
            'image': client.images.map((src, i) => ({
                '@type': 'ImageObject',
                'contentUrl': `${base}/${src}`,
                'name': `${client.name} por Silvio Valente — foto ${i + 1}`,
                'author': { '@type': 'Person', 'name': 'Silvio Valente' }
            }))
        };
        this.jsonLdScript = this.renderer.createElement('script');
        this.renderer.setAttribute(this.jsonLdScript, 'type', 'application/ld+json');
        this.renderer.setProperty(this.jsonLdScript, 'textContent', JSON.stringify(schema));
        this.renderer.appendChild(this.document.head, this.jsonLdScript);
    }
}
