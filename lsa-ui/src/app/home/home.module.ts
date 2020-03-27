import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppMaterialModule } from '@/app-material.module';
import { AppRoutingModule } from '@/app-routing.module';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  exports: [WelcomeComponent]
})
export class HomeModule { }
