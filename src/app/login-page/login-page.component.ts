import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../core/authentication/auth.service';
import {User} from '../user';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  public onLogin(userForm: NgForm): void {
    // document.getElementById('login-user-form').click();
    this.authService.loginUser(userForm.value).subscribe(
      (response: User) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  // public submit() {
  //   // Use the form value to do authentication
  //   console.log(this.form.value);
  //   // Navigate after successful login
  //   return this.router.navigate(['/']);
  // }

}
