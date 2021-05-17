import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
      path: '',
      component: RestaurantsComponent
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RestaurantsModule { }
