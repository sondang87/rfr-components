import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'bytearray-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  wide: boolean = true;
  datetime: Date = new Date();
  menus = [
    {
      title: 'Getting Started',
      sub: [
        {
          title: 'UI Components',
          url: '/home'
        },
        {
          title: 'AI Components (Coming soon)',
          url: '/ai-components'
        }
      ]
    },
    {
      title: 'Action Sheet',
      sub: [
        {
          title: 'ion-action-sheet',
          url: '/ui-components/action-sheets'
        }
      ]
    },
    {
      title: 'Alert',
      sub: [
        {
          title: 'ion-alert',
          url: '/ui-components/alerts'
        }
      ]
    },
    {
      title: 'Badge',
      sub: [
        {
          title: 'ion-badge',
          url: '/ui-components/badges'
        }
      ]
    },
    {
      title: 'Button',
      sub: [
        {
          title: 'ion-button',
          url: '/ui-components/buttons'
        }
      ]
    },
    {
      title: 'Card',
      sub: [
        {
          title: 'ion-card',
          url: '/ui-components/cards'
        }
      ]
    },
    {
      title: 'Input Types',
      sub: [
        {
          title: 'ion-input ion-item ion-list',
          url: '/ui-components/lists'
        }
      ]
    },
    {
      title: 'Date & Time Picker',
      sub: [
        {
          title: 'ion-datetime',
          url: '/ui-components/datetime'
        }
      ]
    },
    {
      title: 'Floating Action Button',
      sub: [
        {
          title: 'ion-fab ion-fab-button',
          url: '/ui-components/floating-buttons'
        }
      ]
    },
    {
      title: 'Grid',
      sub: [
        {
          title: 'ion-grid',
          url: '/ui-components/grid'
        }
      ]
    },
    {
      title: 'Radio Button',
      sub: [
        {
          title: 'ion-radio',
          url: '/ui-components/radios'
        }
      ]
    },
    {
      title: 'Icon',
      sub: [
        {
          title: 'ion-icon',
          url: '/ui-components/icons'
        }
      ]
    },
    {
      title: 'AI Tools (Coming soon)',
      sub: []
    },
  ];
  constructor(
    private platform: Platform,
    private menuCtrl: MenuController
  ) {
  }
}
