import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  public submit() {
    // Use the form value to do authentication
    console.log(this.form.value);
    // Navigate after successful login
    return this.router.navigate(['/']);
  }

}
