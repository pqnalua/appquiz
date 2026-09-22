import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'basico',
    loadChildren: () => import('./basico/basico.module').then( m => m.BasicoPageModule)
  },
  {
    path: 'interm',
    loadChildren: () => import('./interm/interm.module').then( m => m.IntermPageModule)
  },
  {
    path: 'avancado',
    loadChildren: () => import('./avancado/avancado.module').then( m => m.AvancadoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
