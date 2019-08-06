import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OgrodrogasPage } from './ogrodrogas.page';

const routes: Routes = [
  {
    path: '',
    component: OgrodrogasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OgrodrogasPage]
})
export class OgrodrogasPageModule {}
