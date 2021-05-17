import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RestaurantsComponent } from './component/restaurants/restaurants.component';
import { BikeRepairComponent } from './component/bike-repair/bike-repair.component';
import { ContactComponent } from './component/contact/contact.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { YogurtComponent } from './component/yogurt/yogurt.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    DashboardComponent,
    BikeRepairComponent,
    ContactComponent,
    PortfolioComponent,
    YogurtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
