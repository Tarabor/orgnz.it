import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);

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

  login() {
    return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
      this.authenticationState.next(true);
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
      if (resp) {
        this.authenticationState.next(true);
        this.storage.set(TOKEN_KEY, resp.user.getIdToken);
      }
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  getToken() {
    this.storage.get(TOKEN_KEY).then(res => {
        this.authenticationState.next(true);
    });
  }


}
