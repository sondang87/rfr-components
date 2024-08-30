import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloatingButtonsPageRoutingModule } from './floating-buttons-routing.module';

import { FloatingButtonsPage } from './floating-buttons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloatingButtonsPageRoutingModule
  ],
  declarations: [FloatingButtonsPage]
})
export class FloatingButtonsPageModule {}
