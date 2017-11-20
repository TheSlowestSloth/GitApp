import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GithubProvider } from '../providers/github/github';
import { ApiProvider } from '../providers/api/api';
import { AuthPage } from '../pages/auth/auth';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AuthPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AuthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubProvider,
    ApiProvider
  ]
})
export class AppModule {}
