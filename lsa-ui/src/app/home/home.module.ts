import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppMaterialModule } from '@/app-material.module';



@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [WelcomeComponent]
})
export class HomeModule { }
