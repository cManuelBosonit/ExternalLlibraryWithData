import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LineComponent } from './components/line/line.component';
import { BarComponent } from './components/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LineComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
