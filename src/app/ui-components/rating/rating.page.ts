import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bytearray-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  rating: number=1;
  constructor() { }

  ngOnInit() {
  }

}
