import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule) },
  // { path: 'users', loadChildren : 'src/app/user/user.module#UserModule'},
  // { path: 'users', loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
