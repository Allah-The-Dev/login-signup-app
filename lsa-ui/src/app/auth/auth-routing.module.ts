import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const authenticationRoutes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(authenticationRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
