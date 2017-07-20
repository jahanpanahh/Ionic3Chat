import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import {UserProvider} from '../../providers/user/user'
import {ProfilepicPage} from '../profilepic/profilepic';
import {LoginPage} from '../login/login';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  newUser = {
    email:"",
    password:"",
    nickname:""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public userService:UserProvider,
      public loadingctrl:LoadingController,public toastctrl:ToastController) {
  }

  signup(){
    var toaster = this.toastctrl.create({
      duration: 3000,
      position:'bottom'
    })
    if(this.newUser.email == '' || this.newUser.password == '' || this.newUser.nickname == '')
    {
        toaster.setMessage("All fields are required");
        toaster.present();
    }
    else if (this.newUser.password.length < 7) {
      toaster.setMessage('Password is not strong. Try giving more than six characters');
      toaster.present();
    }     
    else{
      let loader = this.loadingctrl.create({
        content:'Please wait'
      })
      loader.present();
      this.userService.adduser(this.newUser).then((res:any)=>{
        loader.dismiss();
        if(res.success){
          this.navCtrl.push(ProfilepicPage)
        }
        else
          alert('Error'+ res);
      })
    } 
  }

  goback(){
    this.navCtrl.setRoot(LoginPage);
  }

}
