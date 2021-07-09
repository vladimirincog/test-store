import { LoginComponent } from './pages/login/login.component';
import { EditComponent } from './pages/edit/edit.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateComponent } from './pages/create/create.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';

import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        //canActivate: [],  
      },
      {
        path: 'create',
        component: CreateComponent,
        //canActivate: [],
      },
      {
        path: 'post/:id/edit',
        component: EditComponent,
        //canActivate: [],
      },
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    CreateComponent,
    DashboardComponent,
    EditComponent,
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AdminModule {}
