import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloatingButtonsPage } from './floating-buttons.page';

const routes: Routes = [
  {
    path: '',
    component: FloatingButtonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloatingButtonsPageRoutingModule {}
