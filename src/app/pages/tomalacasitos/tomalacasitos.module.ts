import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TomalacasitosPage } from './tomalacasitos.page';

const routes: Routes = [
  {
    path: '',
    component: TomalacasitosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TomalacasitosPage]
})
export class TomalacasitosPageModule {}
