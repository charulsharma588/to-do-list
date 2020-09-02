import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { AppRoutingModule } from './app-routing.module';
import { FirstComponent } from './first/first.component';
import { MydayComponent } from './myday/myday.component';
import { ImportantComponent } from './important/important.component';
import { CompletedComponent } from './completed/completed.component';
import { PendingComponent } from './pending/pending.component';



@NgModule({
  declarations: [
    AppComponent,
 
    
    FirstComponent,
    
    MydayComponent,
    
    ImportantComponent,
    
    CompletedComponent,
    
    PendingComponent
    
    
    
  
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
