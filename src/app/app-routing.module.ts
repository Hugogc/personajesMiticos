import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'borrachoarbolada', loadChildren: './pages/borrachoarbolada/borrachoarbolada.module#BorrachoarboladaPageModule' },
  { path: 'chukizieza', loadChildren: './pages/chukizieza/chukizieza.module#ChukiziezaPageModule' },
  { path: 'contigonobicho', loadChildren: './pages/contigonobicho/contigonobicho.module#ContigonobichoPageModule' },
  { path: 'eltorrao', loadChildren: './pages/eltorrao/eltorrao.module#EltorraoPageModule' },
  { path: 'elvanidoso', loadChildren: './pages/elvanidoso/elvanidoso.module#ElvanidosoPageModule' },
  { path: 'guardiandelasestrellas', loadChildren: './pages/guardiandelasestrellas/guardiandelasestrellas.module#GuardiandelasestrellasPageModule' },
  { path: 'losdeleclipse', loadChildren: './pages/losdeleclipse/losdeleclipse.module#LosdeleclipsePageModule' },
  { path: 'miguelelmaquina', loadChildren: './pages/miguelelmaquina/miguelelmaquina.module#MiguelelmaquinaPageModule' },
  { path: 'ogrodrogas', loadChildren: './pages/ogrodrogas/ogrodrogas.module#OgrodrogasPageModule' },
  { path: 'tomalacasitos', loadChildren: './pages/tomalacasitos/tomalacasitos.module#TomalacasitosPageModule' },
  { path: 'liadoparda', loadChildren: './pages/liadoparda/liadoparda.module#LiadopardaPageModule' },
  { path: 'matiaselhumilde', loadChildren: './pages/matiaselhumilde/matiaselhumilde.module#MatiaselhumildePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
