import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Flight, Ticket } from 'src/types';
import { TicketsServicesService } from 'src/app/services/tickets-services.service';
import { GlobalStatesService } from 'src/app/services/global-states.service';

@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css']
})

export class BookingpageComponent implements OnInit{
  

  constructor( 
    private router : Router,
    private location : Location,
    private tickServs : TicketsServicesService,
    private globalState : GlobalStatesService,
  ){}


  flightItem : Flight = this.location.getState() as Flight;
  ticketCount:number = 0;

  ngOnInit(): void {
    console.log(this.flightItem);
    
  }
  inFunc(): void {
    this.ticketCount+=1;
  }
  deFunc(): void {
    this.ticketCount-=1;
  }

  confirmBooking():void{
    const newTicket = {
      username: this.globalState.getUser()?.username,
      flightNumber : this.flightItem.flightNumber,
      seatsBooked : this.ticketCount,
      amount: this.ticketCount*this.flightItem.seatRate,
      flyAt: new Date().toISOString(),
    }

    this.tickServs.bookTicket(newTicket as Ticket).subscribe({
      next: ( resp ) => {
        alert(resp.msg);
        this.router.navigateByUrl("dashboard/tickets");
        return;
      },
      error: ( err ) => {
        alert(err.error.error);
        return;
      }
    })
  }

}
