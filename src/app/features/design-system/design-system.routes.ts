import {Routes} from '@angular/router';

export const designSystemRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./design-system.component').then(m => m.DesignSystemComponent),
  }
];
