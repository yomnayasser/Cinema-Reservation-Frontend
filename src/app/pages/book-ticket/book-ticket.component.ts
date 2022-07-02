import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../services/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  seatsNumber:any
  index:any
  arr:any[]=[]
  arr2:any[]=[]
  constructor(private activated : ActivatedRoute,private global:GlobalService) { 
    this.seatsNumber = activated.snapshot.paramMap.get("seatsNumber")
    this.index=1
    console.log(this.seatsNumber)
  }

  ngOnInit(): void {
    for(let  i = this.seatsNumber/2 ; i>=1 ; i-- ){
     // console.log(i)
      this.arr.push(i)
    }
    this.arr.reverse()
    for(let  i = this.seatsNumber ; i>=this.seatsNumber/2 ; i-- ){
     // console.log(i)
      this.arr2.push(i)
    }
    this.arr2.reverse()
    console.log(this.arr2)
  }

}
