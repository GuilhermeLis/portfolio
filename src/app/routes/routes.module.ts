import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesModule } from './pages/pages.module';
<<<<<<< HEAD
import { ComponentsModule } from './components/components.module'
=======

>>>>>>> release/v1.0.1



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesModule,
<<<<<<< HEAD
    ComponentsModule
  ],
  exports: [PagesModule, ComponentsModule]
=======
  ],
  exports: [
    PagesModule,
  ]
>>>>>>> release/v1.0.1
})
export class RoutesModule { }
