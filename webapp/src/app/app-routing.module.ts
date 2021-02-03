import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { ExploitationComponent } from './components/exploitation/exploitation.component';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  /*{ path: 'account', component: AccountComponent,
    children:[
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ]},*/
  { path: 'exploitation', component: ExploitationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
