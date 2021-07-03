import { LoginPageComponent } from './login-page/login-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      {
        path: 'dashboard',
        component: DashboardPageComponent,
        //canActivate: [],  
      },
      {
        path: 'create',
        component: CreatePageComponent,
        //canActivate: [],
      },
      {
        path: 'post/:id/edit',
        component: EditPageComponent,
        //canActivate: [],
      },
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    CreatePageComponent,
    DashboardPageComponent,
    EditPageComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AdminModule {}
