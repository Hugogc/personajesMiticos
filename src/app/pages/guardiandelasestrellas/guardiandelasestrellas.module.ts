import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GuardiandelasestrellasPage } from './guardiandelasestrellas.page';

const routes: Routes = [
  {
    path: '',
    component: GuardiandelasestrellasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GuardiandelasestrellasPage]
})
export class GuardiandelasestrellasPageModule {}
