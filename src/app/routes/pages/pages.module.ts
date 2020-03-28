import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './home/container/container.component';
import { DescriptionComponent } from './home/description/description.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './home/footer/footer.component';
=======

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DescriptionComponent } from './home/description/description.component';
import { SharedModule } from '../shared/shared.module';
>>>>>>> release/v1.0.1



@NgModule({
<<<<<<< HEAD
  declarations: [HomeComponent, ContainerComponent, DescriptionComponent, FooterComponent],
=======
  declarations: [
    HomeComponent,
    DescriptionComponent,
    PortfolioComponent
  ],
>>>>>>> release/v1.0.1
  imports: [
    CommonModule,
    SharedModule
  ],
<<<<<<< HEAD
  exports: [HomeComponent]
=======
  exports: [
    HomeComponent,
    PortfolioComponent
  ]
>>>>>>> release/v1.0.1
})
export class PagesModule { }
