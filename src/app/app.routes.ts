import { Routes } from '@angular/router';
import { ClientDetailComponent } from './components/client-detail/client-detail';
import { HomeComponent } from './components/home/home';
import { TermsComponent } from './components/terms/terms';
import { PrivacyComponent } from './components/privacy/privacy';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'portfolio/:slug', component: ClientDetailComponent },
    { path: 'termos', component: TermsComponent },
    { path: 'politica-privacidade', component: PrivacyComponent }
];
