import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/types';

@Injectable({
  providedIn: 'root'
})


export class GlobalStatesService {

  user : User | null = null;
  

  constructor() { }

  getUser() : User | null {
    const res =  localStorage.getItem("user"); 
    if ( res === null ) {
      this.user = null;
    } else {
      this.user = JSON.parse(res);
    }
    return this.user;
  }

  setUser(fUser:User|null) : void {
    localStorage.setItem("user", JSON.stringify(fUser));
    
    const res =  localStorage.getItem("user"); 
    if ( res === null ) {
      this.user = null;
    } else {
      this.user = JSON.parse(res);
    }
    return;
  }

  delUser() : void {
    localStorage.removeItem("user");
    this.user = null;
    return;
  }



}
