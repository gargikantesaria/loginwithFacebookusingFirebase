import { Injectable } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase/app';
import 'firebase/auth';
@Injectable()
export class LoginProvider {

  constructor(private facebook:Facebook) {
    console.log('Hello LoginProvider Provider');
  }

  facebookLogin(): Promise<any> {
    return this.facebook.login(['email'])
    .then( response => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
        .then( success => { 
          console.log("Firebase success: " + JSON.stringify(success)); 
        }).catch((err) => {
          console.log(err);
        });

    }).catch((error) => { console.log(error) });
}
}
