import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { usercreds } from '../../models/interfaces/usercreds';
import {AuthProvider} from '../../providers/auth/auth';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';
import {PasswordresetPage} from '../passwordreset/passwordreset';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  creadentials = {} as usercreds;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin(){
    this.authService.login(this.creadentials).then((res:any)=>{
      if(!res.code)
          this.navCtrl.setRoot(TabsPage);
      else
          alert(res);
    })
  }

  passwordreset() {
    this.navCtrl.push(PasswordresetPage);
  }
   
  signup() {
    this.navCtrl.push(SignupPage);
  }  
}
