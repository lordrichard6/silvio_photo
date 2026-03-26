import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-terms',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './terms.html',
    styleUrls: ['./terms.scss']
})
export class TermsComponent {
    currentYear = new Date().getFullYear();
}
