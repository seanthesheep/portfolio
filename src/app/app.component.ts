import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DevelopmentPage } from '../pages/development/development';
import { DesignPage } from '../pages/design/design';
import { WritingPage } from '../pages/writing/writing';
import { GamesPage } from '../pages/games/games';
import { OtherPage } from '../pages/other/other';
import { SoundsPage } from '../pages/sounds/sounds';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'About', component: HomePage },
      { title: 'Software Development', component: DevelopmentPage },
      { title: 'Writing', component: WritingPage },
      { title: 'Games', component: GamesPage },
      { title: 'Sound Design & Music', component: SoundsPage },
      { title: 'Other Stuff', component: OtherPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
