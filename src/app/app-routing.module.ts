import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './Components/bar-chart/bar-chart.component';
import { ProductDetailsComponentComponent } from './Components/product-details-component/product-details-component.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { DocumentationComponent } from './Components/documentation/documentation.component';


const routes: Routes = [
  {path : '' , component :ProductDetailsComponentComponent },
  {path : 'product-list' , component :ProductDetailsComponentComponent },
  {path : 'bar-chart' , component : BarChartComponent},
  {path : 'welcome' , component : WelcomePageComponent},
  {path : 'documentation' , component : DocumentationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
