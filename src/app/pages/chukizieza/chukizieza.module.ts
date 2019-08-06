import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChukiziezaPage } from './chukizieza.page';

const routes: Routes = [
  {
    path: '',
    component: ChukiziezaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChukiziezaPage]
})
export class ChukiziezaPageModule {}
