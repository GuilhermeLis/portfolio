import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    FontAwesomeModule
  ],
  exports: [
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
