import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { DashboardpageComponent } from './pages/dashboardpage/dashboardpage.component';
import { ButtonComponent } from './components/button/button.component';
import { FlightspageComponent } from './pages/dashboardpage/flightspage/flightspage.component';
import { TicketspageComponent } from './pages/dashboardpage/ticketspage/ticketspage.component';
import { FlightItemComponent } from './components/flight-item/flight-item.component';
import { TicketCompComponent } from './components/ticket-comp/ticket-comp.component';
import { CancelticketpageComponent } from './pages/dashboardpage/ticketspage/cancelticketpage/cancelticketpage.component';
import { BookingpageComponent } from './pages/dashboardpage/flightspage/bookingpage/bookingpage.component';


const appRoutes:Routes = [
    { path: "", component: HomepageComponent, title : "Home Page"},
    { path: "login", component: LoginpageComponent },
    { path: "signup", component: SignuppageComponent },
    { path: "dashboard", redirectTo: "dashboard/flights" },
    { 
      path: "dashboard", 
      component: DashboardpageComponent ,
      children: [
        { path:"flights", component:FlightspageComponent, children: [
            { path: "book", component: BookingpageComponent}
          ]  
        },
        { path:"tickets", component:TicketspageComponent , children :[
          { path:"cancel", component:CancelticketpageComponent }
        ]},
      ]
    },
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    LoginpageComponent,
    SignuppageComponent,
    DashboardpageComponent,
    ButtonComponent,
    FlightspageComponent,
    TicketspageComponent,
    FlightItemComponent,
    TicketCompComponent,
    CancelticketpageComponent,
    BookingpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' }),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
