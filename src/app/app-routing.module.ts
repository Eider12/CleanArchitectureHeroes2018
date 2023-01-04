import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './presentation/auth/guards/auth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';



const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./presentation/auth/auth.module').then( m => m.AuthModule),
  },
  {
    path: 'heroe',
    loadChildren: () => import('./presentation/heroe/heroe.module').then( m => m.HeroeModule),
     // canLoad: [ AuthGuard ],
     // canActivate: [ AuthGuard ]
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
