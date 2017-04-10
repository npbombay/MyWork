import { RouterModule, Routes }  from '@angular/router';

import { HeroDetailComponent } from './hero/heroDetail/hero-detail.component';
import { HeroListComponent } from './hero/heroList/hero-list.component';
import { DashBoardComponent } from './hero/dashboard/dashboard.component';

export const ROUTES:Routes = [
  					{	path: 'heroes', component: HeroListComponent },
  					{	path: 'dashboard', component: DashBoardComponent },
  					{   path: 'detail/:id', component: HeroDetailComponent },
  					{	path: '', component: DashBoardComponent, pathMatch: 'full' }
  					];