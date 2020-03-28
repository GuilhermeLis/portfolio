import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  windows: any;

  constructor(private breakPoint: BreakpointObserver) { }

  ngOnInit(): void {
    // console.log(window.innerWidth);
    this.windows = window.innerWidth;
  }

}
