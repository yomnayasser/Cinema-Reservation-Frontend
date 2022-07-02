import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';
import { BookTicketComponent } from './pages/book-ticket/book-ticket.component';
import { MovieCardComponent } from './compnents/movie-card/movie-card.component';
import { BookTimeComponent } from './pages/book-time/book-time.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieInfoComponent,
    BookTicketComponent,
    MovieCardComponent,
    BookTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
