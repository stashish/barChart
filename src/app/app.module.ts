import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DialogModule } from 'primeng/dialog';

import { BarChartComponent } from './Components/bar-chart/bar-chart.component';
import { ProductDetailsComponentComponent } from './Components/product-details-component/product-details-component.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { DocumentationComponent } from './Components/documentation/documentation.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    ProductDetailsComponentComponent,
    WelcomePageComponent,
    DocumentationComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    NgxChartsModule,
    DialogModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
