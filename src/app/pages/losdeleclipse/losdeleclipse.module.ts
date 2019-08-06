import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LosdeleclipsePage } from './losdeleclipse.page';

const routes: Routes = [
  {
    path: '',
    component: LosdeleclipsePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LosdeleclipsePage]
})
export class LosdeleclipsePageModule {}
