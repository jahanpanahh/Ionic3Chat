import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import firebase from 'firebase';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {
  firedata = firebase.database().ref('chatusers');
  constructor(public af2auth:AngularFireAuth) {
    
  }

  adduser(newUser){
    var promise = new Promise((resolve,reject)=> {
      this.af2auth.auth.createUserWithEmailAndPassword(newUser.email,newUser.password).then(()=>{
          this.af2auth.auth.currentUser.updateProfile({
            displayName:newUser.nickname,
            photoURL:''
          }).then(()=> {
            this.firedata.child(this.af2auth.auth.currentUser.uid).set({
              uid: this.af2auth.auth.currentUser.uid,
              displayName: newUser.nickname,
              photoURL: 'give a dummy placeholder url here'              
            }).then(()=>{
              resolve({success:true});
            }).catch((err)=>reject(err))
          }).catch((err)=>reject(err))
      }).catch((err)=>reject(err))
    })

    return promise;
  }

  resetPassword(email){
    var promise = new Promise((resolve,reject)=>{
      this.af2auth.auth.sendPasswordResetEmail(email).then(()=>{
        resolve({
          success:true
        })
      }).catch((err)=> reject(err))
    })

    return promise;
  }

  updateimage(imageurl) {
      var promise = new Promise((resolve, reject) => {
          this.af2auth.auth.currentUser.updateProfile({
              displayName: this.af2auth.auth.currentUser.displayName,
              photoURL: imageurl      
          }).then(() => {
              firebase.database().ref('/users/' + firebase.auth().currentUser.uid).update({
              displayName: this.af2auth.auth.currentUser.displayName,
              photoURL: imageurl,
              uid: firebase.auth().currentUser.uid
              }).then(() => {
                  resolve({ success: true });
                  }).catch((err) => {
                      reject(err);
                  })
          }).catch((err) => {
                reject(err);
             })  
      })
      return promise;
  }
}
