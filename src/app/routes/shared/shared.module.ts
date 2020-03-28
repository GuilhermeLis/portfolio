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
import { LayoutModule } from '@angular/cdk/layout';
<<<<<<< HEAD






@NgModule({
  declarations: [],
=======
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
>>>>>>> release/v1.0.1
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    FontAwesomeModule,
    MatGridListModule,
    MatButtonModule,
<<<<<<< HEAD
    LayoutModule
=======
    LayoutModule,
    MatToolbarModule,
>>>>>>> release/v1.0.1
  ],
  exports: [
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    FontAwesomeModule,
    MatGridListModule,
    MatButtonModule,
<<<<<<< HEAD
    LayoutModule
=======
    LayoutModule,
    MatToolbarModule,
    HeaderComponent,
    FooterComponent,
>>>>>>> release/v1.0.1
  ]
})
export class SharedModule { }
