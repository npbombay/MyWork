import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';
import { RouterModule, Routes }  from '@angular/router';

import { HeroDetailComponent } from './hero/heroDetail/hero-detail.component';
import { HeroListComponent } from './hero/heroList/hero-list.component';
import { DashBoardComponent } from './hero/dashboard/dashboard.component';

import { ROUTES } from './route';

import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,
  					RouterModule.forRoot(ROUTES)
				],
  declarations: [ AppComponent, HeroDetailComponent, HeroListComponent, DashBoardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }