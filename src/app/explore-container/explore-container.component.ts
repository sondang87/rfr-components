import { Component, Input } from '@angular/core';

@Component({
  selector: 'bytearray-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;

}
