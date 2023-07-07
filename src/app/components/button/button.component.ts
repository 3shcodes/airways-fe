import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'Button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  @Input() className:string = "";
  @Input() value:string = "Yes";
  @Input() disBtn:string = "";
  @Output() conClick = new EventEmitter();
  disVal = false;

  constructor(){}

  ngOnInit():void{
    this.disVal = this.disBtn==="true"?true:false;
  }

  onClick() {
    this.conClick.emit();
  }
}
