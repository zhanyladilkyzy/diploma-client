import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthService} from '../core/authentication/auth.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {

  constructor(private authService: AuthService) { }



  ngOnInit(): void {
  }

  // public getUserById(): void {
  //   this.authService.getUserById()
  // }


}
