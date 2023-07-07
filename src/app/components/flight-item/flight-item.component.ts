import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Flight } from 'src/types';

@Component({
  selector: 'FlightItem',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.css']
})
export class FlightItemComponent implements OnInit{
  @Input() flightItem!:Flight ;
  leftArrow = faArrowLeft;
  rightArrow = faArrowRight;

  constructor(
    private router : Router,
  ){}
  ngOnInit(): void {
  }
  
  bookTicket(){
    this.router.navigateByUrl('dashboard/flights/book', { state: this.flightItem })
  }
}
