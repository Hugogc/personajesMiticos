import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ElvanidosoPage } from './elvanidoso.page';

const routes: Routes = [
  {
    path: '',
    component: ElvanidosoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ElvanidosoPage]
})
export class ElvanidosoPageModule {}
