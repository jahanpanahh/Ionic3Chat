import { Component,NgZone } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import {ImghandlerProvider} from '../../providers/imghandler/imghandler';
import {TabsPage} from '../tabs/tabs'
/**
 * Generated class for the ProfilepicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profilepic',
  templateUrl: 'profilepic.html',
})
export class ProfilepicPage {
  imgurl = 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e';
  moveon = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,public imageService:ImghandlerProvider,
  public zone: NgZone, public userservice: UserProvider, public loadingCtrl: LoadingController) {
  }

  chooseimage(){
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();    
    this.imageService.uploadimage().then((uploadUrl:any)=>{
      loader.dismiss();
      this.zone.run(()=>{
        this.imgurl = uploadUrl;
        this.moveon = false;
      })
    })
  }

  updateproceed() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();  
    this.userservice.updateimage(this.imgurl).then((res:any)=>{
      loader.dismiss();
      if(res.success){
        this.navCtrl.setRoot(TabsPage);
      }
      else
        {
          alert(res);
        }
    })
  }

  proceed() {
    this.navCtrl.setRoot(TabsPage);
  }
}
