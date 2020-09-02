import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.css']
})
export class ImportantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.currentv[this.i]=JSON.parse(localStorage.getItem("important tasks"));
  }
  currentv=<any>[];
   i=0;
  getv(val){
            this.currentv[this.i]=val;
            localStorage.setItem("important tasks",JSON.stringify(this.currentv))
            this.i=this.i+1;


}
}