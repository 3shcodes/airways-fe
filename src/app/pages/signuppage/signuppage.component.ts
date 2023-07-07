import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';
import { User } from 'src/types';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})

export class SignuppageComponent {
  
  userName:string="";
  pass:string="";
  repass:string="";
  age:number=0;
  dob:string="";
  mobile:string="";
  city:string="";
  state:string="";
  gender:string="";
  

  constructor(
    private userServs : UserServicesService,
    private router : Router
  ){}

  signupBtnFunc(){
    if(
      this.userName==="" || 
      this.pass!==this.repass ||
      this.pass.length<7 ||
      this.age<10 || 
      this.dob==="" ||
      this.mobile==="" ||
      this.city==="" ||
      this.state==="" ||
      this.gender===""
    ) {
      alert("Invalid details entered. Please retype all that sh-");
      return;
    }

    const signUpUser:User = { 
      username: this.userName, 
      password:this.pass, 
      age: this.age, 
      dob: this.dob,
      mobile_no: this.mobile,
      city: this.city,
      state: this.state,
      gender: this.gender,
    }

    this.userServs.signup(signUpUser).subscribe({
      next: ( resp ) => {
        alert(resp.msg);
        this.router.navigateByUrl("login");
        return;
      },
      error: ( err ) => {
        alert(err.error.msg);
        return;
      }
    })
  }
}
