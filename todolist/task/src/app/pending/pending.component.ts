import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentv=<any>[];
   i=0;
  getvalue(val){
            this.currentv[this.i]=val;
            localStorage.setItem("pending tasks",JSON.stringify(this.currentv))
            this.i=this.i+1;

}
}