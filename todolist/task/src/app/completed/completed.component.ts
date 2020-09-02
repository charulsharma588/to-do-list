import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
    this.currentval[this.i]=JSON.parse(localStorage.getItem("completed tasks"));
  }
  
  currentval=<any>[];
   i=0;
  getvalue(val){
            this.currentval[this.i]=val;
            localStorage.setItem("completed tasks",JSON.stringify(this.currentval))
            this.i=this.i+1;

  }
 
 
}
