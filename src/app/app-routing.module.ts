import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegistrationPageComponent} from './registration-page/registration-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ReportPageComponent} from './report-page/report-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {CalendarPageComponent} from './calendar-page/calendar-page.component';

const routes: Routes = [
  {path: 'main-page', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: RegistrationPageComponent},
  {path: 'report', component: ReportPageComponent},
  {path: 'dashboards', component: DashboardPageComponent},
  {path: 'calendar', component: CalendarPageComponent},
  // {path: 'scrumboard', component: ScrumboardComponent},
  {path: '', redirectTo: 'main-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
