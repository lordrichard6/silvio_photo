import { Component, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';
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

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.projects = this.portfolioService.getClients();
  }
}
