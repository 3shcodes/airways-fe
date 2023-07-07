import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlobalStatesService } from 'src/app/services/global-states.service';
import { User } from 'src/types';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

    @Input() title:string = "TTAir";
    buttVal:string = "";
    user:User | null = null;

    constructor(
      private globalState : GlobalStatesService,
      private router : Router
    ){}

    ngOnInit(): void {
      this.user = this.globalState.getUser()
    }

    logOutFunc(): void {
      this.globalState.delUser();
      window.location.reload();
      return;
    }
}
