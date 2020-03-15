import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faSquare, faCheckSquare, faGithub } from '@fortawesome/free-solid-svg-icons';
// import { faSquare as farSquare, faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { MainContainerComponent } from './main-container/main-container.component';


@NgModule({
  declarations: [ProfileComponent, MainContainerComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProfileComponent, MainContainerComponent]
})
export class ComponentsModule { }
