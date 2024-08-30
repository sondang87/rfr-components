import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bytearray-animation',
  templateUrl: './animation.page.html',
  styleUrls: ['./animation.page.scss'],
})
export class AnimationPage implements OnInit {
  viewMode: string = "set1";
  constructor() { }

  ngOnInit() {
  }

}
