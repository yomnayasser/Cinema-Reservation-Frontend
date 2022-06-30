import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../services/global.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
movieID:any
singleMovie:any
theaterID:any
SchudleTime:any
  constructor(private activated : ActivatedRoute,private global:GlobalService) {

    this.movieID = activated.snapshot.paramMap.get("id")
    this.global.getsingleMovie(this.movieID).subscribe(data=>{
      this.singleMovie=data.data
    })

    this.global.getMovieTheater(this.movieID).subscribe(data=>{
      this.theaterID=data.data
      this.global.getMovieSchudleTime(this.theaterID,this.movieID).subscribe(data=>{
        this.SchudleTime=data
        this.SchudleTime=this.SchudleTime.data.sechudleTime
        console.log(this.SchudleTime)
      })
    })

   
   }

  ngOnInit(): void {
  }
  bookTicket(){
    // this.router.navigateByUrl('/user');
  }
}
