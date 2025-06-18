import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./features/landing/landing.routes').then(
            (m) => m.landingRoutes
          )
      }
    ]
  }
];
