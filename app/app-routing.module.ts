import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{NavComponent} from './nav/nav.component';
import { from } from 'rxjs';
import {SampleComponent}from'./sample/sample.component';
const routes: Routes = [{path:"home",component:HomeComponent},{path:"nav",component:NavComponent},{path:"sample",component:SampleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


  
}
