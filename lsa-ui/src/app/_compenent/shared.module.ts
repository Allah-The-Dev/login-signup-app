import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@/_compenent/header/header.component';
import { AppMaterialModule } from '@/app-material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
