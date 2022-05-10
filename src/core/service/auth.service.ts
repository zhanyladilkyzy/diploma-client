import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private registerUrl = '/auth/public/v1/auth/register';
  private loginUrl = '/auth/public/v1/auth/login';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(login: string, password: string): any {
    return this.http
      .post<any>(this.loginUrl, {
        login,
        password,
      }).pipe(map((user) => {
          console.log('This is user ', user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout(): any {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    return of({success: false});
  }

  registerUser(form: FormGroup): Observable<any> {
    return (this.http.post(this.registerUrl, form.getRawValue()));
  }

  loginUser(form: FormGroup): Observable<any> {
    return this.http.post(this.loginUrl, form.getRawValue());
  }

  loggedIn(): any {
    return !!localStorage.getItem('currentUser');
  }
}
