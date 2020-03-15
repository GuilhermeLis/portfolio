import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  windows: any;

  constructor() { }

  ngOnInit(): void {
    // console.log(window.innerWidth);
    this.windows = window.innerWidth;
  }

}
