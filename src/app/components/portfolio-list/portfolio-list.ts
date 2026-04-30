import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { PortfolioService, PortfolioClient } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './portfolio-list.html',
  styleUrl: './portfolio-list.scss'
})
export class PortfolioListComponent implements OnInit {
  projects: PortfolioClient[] = [];

  private portfolioService = inject(PortfolioService);
  private titleService = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.projects = this.portfolioService.getClients();

    const t = 'Portefólio | Silvio Valente Fotografia — Trabalhos no Alentejo e Portugal';
    const d = 'Portefólio de trabalhos fotográficos de Silvio Valente — eventos, retratos, gastronomia, imobiliário, cinema e desporto em Nisa, Alentejo e em todo Portugal.';
    this.titleService.setTitle(t);
    this.meta.updateTag({ name: 'description', content: d });
    this.meta.updateTag({ property: 'og:title', content: t });
    this.meta.updateTag({ property: 'og:description', content: d });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.silviovalentt.pt/portfolio' });
    this.meta.updateTag({ name: 'twitter:title', content: t });
    this.meta.updateTag({ name: 'twitter:description', content: d });
  }
}
