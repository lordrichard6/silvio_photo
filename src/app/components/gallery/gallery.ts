import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { PortfolioService, PortfolioClient } from '../../services/portfolio.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery implements OnInit {
  featuredProjects: PortfolioClient[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    // Get first 3 projects for the featured section
    this.featuredProjects = this.portfolioService.getClients().slice(0, 3);
  }
}
