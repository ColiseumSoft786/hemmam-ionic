import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { HomePage } from '../pages/home/home';
import { ChallengePage } from '../pages/challenge/challenge';
import { HistoryPage } from '../pages/history/history';
import { FounderPage } from '../pages/founder/founder';
import { SponsorPage } from '../pages/sponsor/sponsor';
import { PartnerPage } from '../pages/partner/partner';
import { CertificatePage } from '../pages/certificate/certificate';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ChallengePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'لوحة القيادة', component: DashboardPage },
    ];

      if (localStorage.getItem("user") === null) {
          this.rootPage = HomePage;

      }else{
          this.rootPage = DashboardPage;
      }

  }
  logout(){
    localStorage.clear();
    this.nav.setRoot(HomePage);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
