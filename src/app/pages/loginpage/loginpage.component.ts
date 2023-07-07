import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Router } from '@angular/router';
import { GlobalStatesService } from 'src/app/services/global-states.service';
import { Subscription } from 'rxjs';
import { User } from 'src/types';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit{

  userName:string = "";
  password:string = "";
  validationError:boolean = false;
  subscription:Subscription|undefined;
  user:User | null = null;

  constructor(
    private userServ : UserServicesService,
    private router : Router,
    private globalStates : GlobalStatesService,

  ){
    
  }

  ngOnInit(): void {
    const user = this.globalStates.getUser();
    if ( user !== null ) {
      this.router.navigateByUrl("dashboard");
      return;
    }
  }

  changeValidation(){
    this.validationError=false;
    return;
  }

  loginBtnFunc(){
    if ( this.userName==="" || this.password.length<6 ) {
      this.validationError = true;
      return;
    }

    this.userServ.login({username: this.userName, password: this.password}).subscribe(
      {
        next: (resp) => {
          this.globalStates.setUser(resp.data);
          this.router.navigateByUrl("dashboard");
          return;
        },
        error: (err) => {
          alert(err.error.msg);
          return;
        }
      }
    )

  }
}
