import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'
import { MydayComponent } from './myday/myday.component';
import { ImportantComponent } from './important/important.component';
import { CompletedComponent } from './completed/completed.component';
import { PendingComponent } from './pending/pending.component';



const routes : Routes =[
  {path:'my-day', component: MydayComponent},
  {path:'important',component:ImportantComponent},
  {path:'complete',component:CompletedComponent},
  {path:'pending',component:PendingComponent}
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports :[RouterModule]
})
export class AppRoutingModule { }
