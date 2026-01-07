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

    constructor(
        private route: ActivatedRoute,
        private portfolioService: PortfolioService
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const slug = params.get('slug');
            if (slug) {
                this.client = this.portfolioService.getClientBySlug(slug);
            }
        });
    }
}
