import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DevelopmentPage } from '../pages/development/development';
import { DesignPage } from '../pages/design/design';
import { WritingPage } from '../pages/writing/writing';
import { GamesPage } from '../pages/games/games';
import { OtherPage } from '../pages/other/other';
import { SoundsPage } from '../pages/sounds/sounds';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DevelopmentPage,
    DesignPage,
    WritingPage,
    GamesPage,
    OtherPage,
    SoundsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DevelopmentPage,
    DesignPage,
    WritingPage,
    GamesPage
    // OtherPage,
    // SoundsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
