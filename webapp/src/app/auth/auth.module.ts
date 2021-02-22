import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/account/register/register.component';
import { LoginComponent } from './components/account/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { RegistrationService } from './services/registration.service';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, AccountComponent],
  providers: [RegistrationService],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    AccountComponent
  ]
})
export class AuthModule { }
