import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from '@/auth/auth-routing.module';
import { LoginComponent } from '@/auth/login/login.component';
import { SignupComponent } from '@/auth/signup/signup.component';
import { AppMaterialModule } from '@/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
