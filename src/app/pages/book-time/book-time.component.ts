import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../services/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-time',
  templateUrl: './book-time.component.html',
  styleUrls: ['./book-time.component.css']
})
export class BookTimeComponent implements OnInit {

 movieID:any
 theaterID:any
 date:any
 time:any
 deitals:any
 seatsNumber:any
  constructor(private activated : ActivatedRoute,private global:GlobalService) {
    this.theaterID = activated.snapshot.paramMap.get("theaterID")
    this.movieID=activated.snapshot.paramMap.get("movieID")
    this.global.getMovieDates(this.theaterID,this.movieID).subscribe(data=>{
      this.date=data
      this.date=this.date.data.dates
    })
    this.global.getMovieSchudleTime(this.theaterID,this.movieID).subscribe(data=>{
      this.time=data
      this.time=this.time.data.sechudleTime
      this.seatsNumber=data
      this.seatsNumber=this.seatsNumber.data.seatsNumber
      //console.log(this.seatsNumber)
    })

    this.global.getMovieDeitals(this.movieID).subscribe(data=>{
      this.deitals=data
      this.deitals=this.deitals.data
      //console.log(this.deitals)
    })
   }

  ngOnInit(): void {
 
  }

 

}
