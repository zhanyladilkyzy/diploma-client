import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegistrationPageComponent} from './registration-page/registration-page.component';
import {MainPageComponent} from './main-page/main-page.component';

const routes: Routes = [
  {path:'main-page', component: MainPageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'signup', component: RegistrationPageComponent},
  {path:'', redirectTo:'main-page',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
