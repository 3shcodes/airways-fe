import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, User } from 'src/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  beUrl:string = "http://localhost:8080/user";
  constructor( 
    private beCon : HttpClient
  ) { }

  login(user:User):Observable<Response<User>> {
    return this.beCon.post(this.beUrl+"/login",user) as Observable<Response<User>>;
  }

  signup ( user: User ) : Observable<Response<User>> {
    return this.beCon.post(this.beUrl+"/signup", user) as Observable<Response<User>>;
  }

}
