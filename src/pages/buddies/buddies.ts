import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the BuddiesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-buddies',
  templateUrl: 'buddies.html',
})
export class BuddiesPage {
  temparr = [];
  filteredUsers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public userservice: UserProvider) {
    this.userservice.getAllUsers().then((data:any)=>{
      this.filteredUsers = data;
      this.temparr = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuddiesPage');
  }

  searchuser(searchbar) {
    this.filteredUsers = this.temparr;
    var q = searchbar.target.value;
    if (q.trim() == '') {
      return;
    }

    this.filteredUsers = this.filteredUsers.filter((v) => {
      if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }

}
