import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './home/container/container.component';
import { DescriptionComponent } from './home/description/description.component';



@NgModule({
  declarations: [HomeComponent, ContainerComponent, DescriptionComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent]
})
export class PagesModule { }
