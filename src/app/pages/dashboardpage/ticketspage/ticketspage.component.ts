import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalStatesService } from 'src/app/services/global-states.service';
import { TicketsServicesService } from 'src/app/services/tickets-services.service';
import { Ticket, User } from 'src/types';

@Component({
  selector: 'app-ticketspage',
  templateUrl: './ticketspage.component.html',
  styleUrls: ['./ticketspage.component.css']
})
export class TicketspageComponent implements OnInit {

  tickets:Ticket[] = [];
  user:User|null = null;
  loading:boolean = true;
  constructor( 
    private tickServs: TicketsServicesService, 
    private router: Router,
    private globalStates: GlobalStatesService
  ){}

  ngOnInit(): void {
    this.user = this.globalStates.getUser();
    if( this.user !== null ) {
      this.tickServs.getTickets(this.user.username).subscribe(
        (resp) => {
          console.log(resp);
          this.tickets = resp.data;
        }
      )
    }
    this.loading = false;
  }

  hasRoute(route:string) {
    return this.router.url===route;
  }


}
