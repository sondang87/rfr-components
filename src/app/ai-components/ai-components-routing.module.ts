import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AiComponentsPage } from './ai-components.page';

const routes: Routes = [
  {
    path: '',
    component: AiComponentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AiComponentsPageRoutingModule {}
