import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private loginProvider:LoginProvider) {

  }
  loginwithFacebook()
  {
    this.loginProvider.facebookLogin().then((response) =>{
      console.log("response is", response)
    })
  }
}
