import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bytearray-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigate(url: string) {
    this.router.navigateByUrl(`/ui-components/${url}`);
  }

}
