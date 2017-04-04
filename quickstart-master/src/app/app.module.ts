import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { HeroDetailComponent } from './hero/heroDetail/hero-detail.component';
import { HeroListComponent } from './hero/heroList/hero-list.component';
import { DashBoardComponent } from './hero/dashboard/dashboard.component';

import { AppComponent }  from './app.component';
import {ROUTE} from './route';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  					RouterModule.forRoot([
  					{	path: 'heroes', component: HeroListComponent },
  					{	path: 'dashboard', component: DashBoardComponent },
  					{	path: '', component: DashBoardComponent, pathMatch: 'full' }
  					])
				],
  declarations: [ AppComponent, HeroDetailComponent, HeroListComponent, DashBoardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
