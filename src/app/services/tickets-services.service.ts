import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket, Response } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class TicketsServicesService {
  private beUrl = "http://localhost:8080/ticket";

  constructor( private be : HttpClient) { }

  getTickets( userName : string ): Observable<Response<Ticket[]>>{
    const subUrl = this.beUrl+"/mytickets?userName="+userName;
    return this.be.get(subUrl) as Observable<Response<Ticket[]>>;
  }

  bookTicket( newTicket : Ticket ) : Observable<Response<Ticket>> {
    const subUrl = this.beUrl + "/book";
    return this.be.post(subUrl, newTicket) as Observable<Response<Ticket>>;
  }

  cancelTicket( pnrNo : string ) : Observable<Response<null>>  {
    const subUrl = this.beUrl+"/cancel?pnrNo="+pnrNo;
    return this.be.delete(subUrl) as Observable<Response<null>>;
  }
}
