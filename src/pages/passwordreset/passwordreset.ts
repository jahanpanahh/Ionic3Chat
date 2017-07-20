import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import {LoginPage} from  '../login/login';
import {UserProvider} from '../../providers/user/user'
/**
 * Generated class for the PasswordresetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-passwordreset',
  templateUrl: 'passwordreset.html',
})
export class PasswordresetPage {
  email:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public userService:UserProvider,
    public alertCtrl:AlertController) {
  }

  reset(){
    let alert = this.alertCtrl.create({
      buttons:['Ok']
    })
    this.userService.resetPassword(this.email).then((res:any)=>{
      if(res.success){
        alert.setTitle('EmailSent');
        alert.setSubTitle('Follow instruction sent in mail');
      }
      else{
        alert.setTitle('Failed');
      }
      alert.present();
    })
  }
  goback(){
    this.navCtrl.setRoot(LoginPage);
  }
}
