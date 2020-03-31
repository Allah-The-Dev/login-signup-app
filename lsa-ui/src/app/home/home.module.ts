import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '@/home/welcome/welcome.component';
import { AppMaterialModule } from '@/app-material.module';
import { AppRoutingModule } from '@/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  exports: [WelcomeComponent]
})
export class HomeModule { }
