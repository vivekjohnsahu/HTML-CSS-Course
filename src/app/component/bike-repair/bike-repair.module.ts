import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeRepairComponent } from './bike-repair.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
      path: '',
      component: BikeRepairComponent
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
export class BikeRepairModule { }
