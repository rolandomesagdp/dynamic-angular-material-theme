import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dynamic-material' },
    { path: 'dynamic-material', loadChildren: () => import('./dynamic-material') },
];
