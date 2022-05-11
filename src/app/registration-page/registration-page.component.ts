import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {User} from '../user';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthService} from '../core/authentication/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  // form = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });
  public users: User[];
  constructor(private readonly router: Router, private authService: AuthService) {
    this.users = [];
  }

  ngOnInit(): void {
  }
  public onRegisterUser(registerForm: NgForm): void {
    // document.getElementById('register-user-form').click();
    this.authService.registerUser(registerForm.value).subscribe(
      (response: User) => {
        console.log(response);
        // this.getUserById();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
