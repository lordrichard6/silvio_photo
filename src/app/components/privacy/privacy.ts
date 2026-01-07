import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-privacy',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './privacy.html',
    styleUrls: ['./privacy.scss']
})
export class PrivacyComponent {
    currentYear = new Date().getFullYear();
}
