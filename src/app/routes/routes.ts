import { Routes } from '@angular/router';
import { LandingComponent } from './../components/core/landing/landing.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LandingComponent },
];
