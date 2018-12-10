import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChallengePage } from './challenge';
import {Http, HttpModule} from "@angular/http";
@NgModule({
  declarations: [
    ChallengePage,
  ],
  imports: [ 
    HttpModule,
    IonicPageModule.forChild(ChallengePage),
  ],
})
export class ChallengePageModule {}
