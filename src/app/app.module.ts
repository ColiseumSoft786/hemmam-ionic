import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ChallengePage } from '../pages/challenge/challenge';
import { LibraryPage } from '../pages/library/library';
import { FounderPage } from '../pages/founder/founder';
import { HistoryPage } from '../pages/history/history';
import { CertificatePage } from '../pages/certificate/certificate';
import { PartnerPage } from '../pages/partner/partner';
import { SponsorPage } from '../pages/sponsor/sponsor';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule} from "@angular/http";

import {FileTransfer} from "@ionic-native/file-transfer";
import { File } from '@ionic-native/file';
import {Camera} from "@ionic-native/camera";
import {Chooser} from "@ionic-native/chooser";
import {MediaCapture} from "@ionic-native/media-capture";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    ListPage,
    ChallengePage,
    LibraryPage,
    HistoryPage,
    FounderPage,
    CertificatePage,
    PartnerPage,
    SponsorPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    ListPage,
    HistoryPage,
    ChallengePage,
    LibraryPage,
    FounderPage,
    CertificatePage,
    PartnerPage,
    SponsorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
      File,
      Camera,
      Chooser,
      MediaCapture,
      {provide: ErrorHandler, useClass: IonicErrorHandler},
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
