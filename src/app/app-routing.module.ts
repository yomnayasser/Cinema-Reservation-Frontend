import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';

const routes: Routes = [
  {path:"" , component : HomeComponent},
  {path:"movieDeitals/:id", component:MovieInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
