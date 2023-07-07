import { Component, OnInit } from '@angular/core';
import { TicketsServicesService } from 'src/app/services/tickets-services.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'CancelTicket',
  templateUrl: './cancelticketpage.component.html',
  styleUrls: ['./cancelticketpage.component.css']
})
export class CancelticketpageComponent implements OnInit {

  agreeMent:boolean=false;
  routedState:any = this.location.getState();
  constructor( 
      private ticketServs : TicketsServicesService, 
      private location : Location,
      private router : Router 
    ){}

  ngOnInit(): void {
    console.log(this.routedState);
  }

  confirmCancel():void {
    this.ticketServs.cancelTicket(this.routedState.pnrNo).subscribe(
      {
        next: ( resp ) => {
          console.log(resp);
          alert("Cancellation Successful");
          this.router.navigateByUrl("dashboard/tickets").then(
            () => {
              window.location.reload();
            }
          )
        },
        error : ( err ) => {
          alert("Cancellation failed");
          this.router.navigateByUrl("dashboard/tickets").then(
            () => {
              window.location.reload();
            }
          )
        }
      }
    )
  }


}
