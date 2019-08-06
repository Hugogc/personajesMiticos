import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SisabencomomepongoPage } from './sisabencomomepongo.page';

const routes: Routes = [
  {
    path: '',
    component: SisabencomomepongoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SisabencomomepongoPage]
})
export class SisabencomomepongoPageModule {}
