import { Injectable } from '@angular/core';
import { Flight } from 'src/types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/types';

const httpOpts = {
  
}
@Injectable({
  providedIn: 'root'
})
export class FlightServicesService {
  private beUrl = "http://localhost:8080/flights";

  constructor( private be:HttpClient) { }

  getAllFlights() : Observable<Response<Flight[]>> {

    const subUrl = "/qbyname?flightName=";
    return this.be.get(this.beUrl+subUrl ) as Observable<Response<Flight[]>>;
    
  }

  getByName(squery:string):Observable<Response<Flight[]>> {

    const subUrl = "/qbyname?flightName="+squery;
    return this.be.get(this.beUrl+subUrl ) as Observable<Response<Flight[]>>;
  }

  getByRoute(from:string, to:string):Observable<Response<Flight[]>> {

    const subUrl = `/qbyplace?from=${from}&to=${to}`;
    return this.be.get(this.beUrl+subUrl) as Observable<Response<Flight[]>>;
  }
}
