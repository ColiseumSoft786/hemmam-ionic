import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryPage } from './history';
import { IonAffixModule } from "ion-affix";
import {Http, HttpModule} from "@angular/http";
@NgModule({
  declarations: [
    HistoryPage,
  ],
  imports: [
    HttpModule,
    IonicPageModule.forChild(HistoryPage),
  ],
})
export class HistoryPageModule {}
