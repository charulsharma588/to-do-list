import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-myday',
  templateUrl: './myday.component.html',
  styleUrls: ['./myday.component.css']
})
export class MydayComponent implements OnInit {


  now = new Date();

  constructor() { }
  currentv=<any>[];
  i=0;
 getv(val){
           this.currentv[this.i]=val;
           localStorage.setItem("My tasks",JSON.stringify(this.currentv))
           this.i=this.i+1;}
  ngOnInit() {
    this.currentv[this.i]=JSON.parse(localStorage.getItem("My tasks"));
  }
  checking=<any>[];

  check(y){
       
   
      this.checking[this.i]=y;
     
      localStorage.setItem("completed tasks",JSON.stringify(this.checking));
     
      this.i=this.i+1;
     
    
    
  
  }
  
  markig=<any>[];
  marked(x){
    this.markig[this.i]=x;
    localStorage.setItem("important tasks",JSON.stringify(this.markig));
    this.i=this.i+1;
    
  }


}