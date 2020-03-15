import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './home/container/container.component';



@NgModule({
  declarations: [HomeComponent, ContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent]
})
export class PagesModule { }
