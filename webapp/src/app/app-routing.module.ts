import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { ExploitationComponent } from './components/exploitation/exploitation.component';
import { RegistrationComponent } from './components/user/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/registration', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent,
    children:[
      {path: 'registration', component: RegistrationComponent}
    ] },
  { path: 'exploitation', component: ExploitationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
