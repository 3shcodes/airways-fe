export interface Flight {
  id: number;
  flightNumber: string;
  seatAvailability: number;
  source: string;
  destination: string;
  deptTime: string;
  arrTime: string;
  flightName: string;
  seatRate: number;
}

export interface User {
  id?: number;
  username: string;
  password: string;
  age?: number;
  dob?: string;
  mobile_no?: string;
  city?: string;
  state?: string;
  gender?: string;
}

export interface Ticket {
  id?: number,
  username:string,
  flightNumber:string,
  pnrNo?:string,
  seatsBooked: number,
  amount: number
  source?: string,
  destination?: string,
  flyAt?: string,
  arr_time:string,
  dept_time:string,
  flight_name:string,
}

export interface Response<T> {
  data: T;
  msg: string;
  status: string;
  ok: boolean;
}
