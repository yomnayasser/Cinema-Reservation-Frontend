import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies:any[]=[]
  constructor(private global:GlobalService) { }

  ngOnInit(): void {
    this.global.getMovies().subscribe(data=>{
      //console.log(data.data)
      this.movies=data.data
      // console.log(this.movies)
    })
  }


}
