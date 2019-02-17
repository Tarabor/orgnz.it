import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HttpHeaders } from '@angular/common/http';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'token'
  });

  constructor(
    private storage: Storage,
    private plt: Platform,
    public afAuth: AngularFireAuth
  ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }


  // ########## Refactored Method
  signInWithEmail(credentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(resp => {
        resp.user.getIdToken().then(token => {
          this.authenticationState.next(true);
          localStorage.setItem('TOKEN_KEY', token);
        });
    });
  }

  public getToken(): string {
    return localStorage.getItem('TOKEN_KEY');
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

}
