import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./component/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./component/restaurants/restaurants.module').then(m => m.RestaurantsModule)
  },
  {
    path: 'bike-repair',
    children:[
      {
        path:'',
        loadChildren: () => import('./component/bike-repair/bike-repair.module').then(m => m.BikeRepairModule),
      },
      {
        path:'contact',
        loadChildren: () => import('./component/contact/contact.module').then(m => m.ContactModule),
      }

    ]
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./component/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'yogurt',
    loadChildren: () => import('./component/yogurt/yogurt.module').then(m => m.YogurtModule)
  },
  {
    path: '**',
    loadChildren: () => import('./component/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
