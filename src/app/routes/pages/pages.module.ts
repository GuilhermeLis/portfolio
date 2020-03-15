import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './home/container/container.component';
import { DescriptionComponent } from './home/description/description.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './home/footer/footer.component';



@NgModule({
  declarations: [HomeComponent, ContainerComponent, DescriptionComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomeComponent]
})
export class PagesModule { }
