import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  // tslint:disable-next-line:typedef
  signOut() {
    window.sessionStorage.clear();
  }

  // tslint:disable-next-line:typedef
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  // tslint:disable-next-line:typedef
  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUsername(): string {
    return  JSON.parse(sessionStorage.getItem(USER_KEY));
  }
  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}
