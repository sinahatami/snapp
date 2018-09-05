import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    
    trigger('navbar', [
      transition(':enter', [
        animate('1.5s cubic-bezier(.01,.56,.29,.15)',style({transform:'translateY(200px)', opacity: 0,}))  
      ])
    ])
  ]
})

export class NavbarComponent {
  show:boolean = true;
  show1:boolean = false;
  collapse:string = "closed";

  toggleCollapse() {
    this.collapse = this.collapse == "open" ? 'closed' : 'open';
    this.show1 = !this.show1
  }
  constructor() { }

}
