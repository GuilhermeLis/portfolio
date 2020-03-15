import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    FontAwesomeModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports: [
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    FontAwesomeModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class SharedModule { }
