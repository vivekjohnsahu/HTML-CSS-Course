import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YogurtComponent } from './yogurt.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: YogurtComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class YogurtModule { }
