import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AiComponentsPageRoutingModule } from './ai-components-routing.module';

import { AiComponentsPage } from './ai-components.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AiComponentsPageRoutingModule
  ],
  declarations: [AiComponentsPage]
})
export class AiComponentsPageModule {}
