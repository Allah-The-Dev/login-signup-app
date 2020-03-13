import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from '@/admin/admin-dashboard/admin-dashboard.component';

const adminRoutes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
