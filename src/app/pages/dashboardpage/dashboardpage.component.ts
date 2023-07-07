import { Component, OnInit } from '@angular/core';
import { faPlane, faTicket } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { User } from 'src/types';
import { GlobalStatesService } from 'src/app/services/global-states.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.css']
})
export class DashboardpageComponent implements OnInit{

  subscription:Subscription | undefined;
  navItems = [
    {
      name: "Flights",
      hr: "flights",
      icon: faPlane
    },
    {
      name: "Tickets",
      hr: "tickets",
      icon: faTicket
    },
  ]

  user:User|null = null;
  constructor( private router:Router, private globalStates:GlobalStatesService ){
    
  }

  ngOnInit(): void {
    const res = this.globalStates.getUser();
    if ( res === null ) {
      this.router.navigateByUrl("login");
      return;
    }
    this.user = res;
    return;
  }

  hasRoute(route:string){
    return route===this.router.url;
  }
}
