import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BorrachoarboladaPage } from './borrachoarbolada.page';

const routes: Routes = [
  {
    path: '',
    component: BorrachoarboladaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BorrachoarboladaPage]
})
export class BorrachoarboladaPageModule {}
