import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlertFilterComponent } from './alert-filter/alert-filter.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { AlretDetailComponent } from './alret-detail/alret-detail.component';
import {AgGridModule} from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertFilterComponent,
    AlertListComponent,
    AlretDetailComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
