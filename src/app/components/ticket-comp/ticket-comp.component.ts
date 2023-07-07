import { Component, Input, OnInit } from '@angular/core';
import { GlobalStatesService } from 'src/app/services/global-states.service';
import { Ticket, User } from 'src/types';

const monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

@Component({
  selector: 'TicketComp',
  templateUrl: './ticket-comp.component.html',
  styleUrls: ['./ticket-comp.component.css']
})

export class TicketCompComponent implements OnInit{

  @Input() ticketItem : Ticket | undefined;
  user:User | null = null;
  fliDate:string|undefined; 

  constructor( private globalState : GlobalStatesService ){

  }

  ngOnInit(): void {
      this.user = this.globalState.getUser()
      if ( this.ticketItem?.flyAt !== undefined ) {
        const tickDate = new Date(this.ticketItem?.flyAt);
        this.fliDate = tickDate.getDate().toString() + " " + monthArr[tickDate.getMonth()] +" "+tickDate.getFullYear();
      }
  }
}
