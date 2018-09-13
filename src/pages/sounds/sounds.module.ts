import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoundsPage } from './sounds';

@NgModule({
  declarations: [
    SoundsPage,
  ],
  imports: [
    IonicPageModule.forChild(SoundsPage),
  ],
})
export class SoundsPageModule {}
