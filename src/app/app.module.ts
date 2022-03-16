import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboadPageComponent } from './dashboad-page/dashboad-page.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ReportsComponent } from './reports/reports.component';
import { UserProfileComponent } from './calendar/user-profile/user-profile.component';
import { CallsComponent } from './calendar/calls/calls.component';
import { NotificationsComponent } from './calendar/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboadPageComponent,
    CalendarComponent,
    ReportsComponent,
    UserProfileComponent,
    CallsComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
