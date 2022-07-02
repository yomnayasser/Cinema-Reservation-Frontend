import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';
import {BookTicketComponent} from './pages/book-ticket/book-ticket.component'
import { BookTimeComponent } from './pages/book-time/book-time.component';

const routes: Routes = [
  {path:"" , component : HomeComponent},
  {path:"movieDeitals/:id", component:MovieInfoComponent},
  {path:"bookTime/:theaterID/:movieID",component:BookTimeComponent},
  {path:"bookTicket/:seatsNumber",component:BookTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
