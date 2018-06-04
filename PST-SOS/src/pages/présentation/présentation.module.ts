import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrésentationPage } from './présentation';

@NgModule({
  declarations: [
    PrésentationPage,
  ],
  imports: [
    IonicPageModule.forChild(PrésentationPage),
  ],
})
export class PrésentationPageModule {}
