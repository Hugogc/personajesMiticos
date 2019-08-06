import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LiadopardaPage } from './liadoparda.page';

const routes: Routes = [
  {
    path: '',
    component: LiadopardaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LiadopardaPage]
})
export class LiadopardaPageModule {}
