import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MiguelelmaquinaPage } from './miguelelmaquina.page';

const routes: Routes = [
  {
    path: '',
    component: MiguelelmaquinaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MiguelelmaquinaPage]
})
export class MiguelelmaquinaPageModule {}
