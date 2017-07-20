import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ChatsPage} from '../chats/chats';
import {GroupsPage} from '../groups/groups';
import {ProfilePage} from '../profile/profile';
/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any = ChatsPage;
  tab2: any = GroupsPage;
  tab3: any = ProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
