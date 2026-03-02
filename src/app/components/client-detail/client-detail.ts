import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PortfolioService, PortfolioClient } from '../../services/portfolio.service';

@Component({
    selector: 'app-client-detail',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './client-detail.html',
    styleUrls: ['./client-detail.scss']
})
export class ClientDetailComponent implements OnInit {
    client: PortfolioClient | undefined;
    prevProject: PortfolioClient | undefined;
    nextProject: PortfolioClient | undefined;

    constructor(
        private route: ActivatedRoute,
        private portfolioService: PortfolioService
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
            }
        });
    }
}
