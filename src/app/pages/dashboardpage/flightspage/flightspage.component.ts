import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FlightServicesService } from 'src/app/services/flight-services.service';
import { Flight } from 'src/types';

@Component({
  selector: 'app-flightspage',
  templateUrl: './flightspage.component.html',
  styleUrls: ['./flightspage.component.css']
})


// const httpOpts = {
//   headers: new HttpHeaders({
//     "Access-Control-Allow-Origin": "*",
//   })
// }
export class FlightspageComponent implements OnInit{
  flights:Flight[] = [];
  leftArrow = faArrowLeft
  rightArrow = faArrowRight
  squery:string="";

  fromPlace:string="";
  toPlace:string="";
  loading: boolean = true;

  constructor( private flightServ: FlightServicesService, private router : Router ){}
  ngOnInit(): void {
      this.flightServ.getAllFlights().subscribe((resp) => {
        console.log(resp);
        this.flights = resp.data;
      });
      this.loading = false;
      return;
  }
  searchButt(squery:string){
    this.loading = true;
    this.flightServ.getByName(squery).subscribe((resp) =>{
      this.flights = resp.data;
    });

    this.loading = false;
    return;
  }
  pickRoutes(fromPlace:string,toPlace:string){
    if( fromPlace===""|| toPlace==="" ) {
      alert("Please select the fields first");
      this.flightServ.getAllFlights().subscribe((resp) => {
        console.log(resp);
        this.flights = resp.data;
      });
      return;
    }
    this.flightServ.getByRoute(fromPlace,toPlace).subscribe((resp) => {
      this.flights = resp.data;
    })

  }
  hasRoute(route:string) {
    return this.router.url===route;
  }
}
