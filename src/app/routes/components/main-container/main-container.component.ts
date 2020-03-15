import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.sass']
})
export class MainContainerComponent implements OnInit {
  @ViewChild(TemplateRef) template;

  constructor() { }

  ngOnInit(): void {
  }

}
