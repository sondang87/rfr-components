import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiComponentsPage } from './ui-components.page';

const routes: Routes = [
  {
    path: '',
    component: UiComponentsPage
  },
  {
    path: 'alerts',
    loadChildren: () => import('./alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'badges',
    loadChildren: () => import('./badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'radios',
    loadChildren: () => import('./radio/radio.module').then( m => m.RadioPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'icons',
    loadChildren: () => import('./icon/icon.module').then( m => m.IconPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiComponentsPageRoutingModule {}
