import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { config } from './app.firebaseconfig';
import { LoginPage } from '../pages/login/login';
import {TabsPage} from '../pages/tabs/tabs';
import {ChatsPage} from '../pages/chats/chats';
import {GroupsPage} from '../pages/groups/groups';
import {ProfilePage} from '../pages/profile/profile';
import {SignupPage} from '../pages/signup/signup';
import {ProfilepicPage} from '../pages/profilepic/profilepic';
import {PasswordresetPage} from '../pages/passwordreset/passwordreset';
import {BuddiesPage} from '../pages/buddies/buddies';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';


import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    ChatsPage,
    GroupsPage,
    ProfilePage,
    ProfilepicPage,
    SignupPage,
    PasswordresetPage,
    BuddiesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {scrollPadding: false,
            scrollAssist: true,
            autoFocusAssist: false,
            tabsPlacement: 'top'}),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    ChatsPage,
    GroupsPage,
    ProfilePage,
    ProfilepicPage,
    SignupPage,
    PasswordresetPage,
    BuddiesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthProvider,
    UserProvider,
    ImghandlerProvider,
    File,
    FileChooser,
    FilePath
  ]
})
export class AppModule {}
