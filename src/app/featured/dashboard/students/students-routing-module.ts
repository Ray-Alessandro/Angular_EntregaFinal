import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentsTableComponent } from './pages/students-table/students-table.component';
import { StudentsFormComponent } from './pages/students-form/students-form.component';
import { adminGuard } from '../../../core/guards/admin/admin-guard';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    canActivate: [adminGuard],
    children: [
      {
        path: '',
        component: StudentsTableComponent,
      },
      {
        path: 'create',
        component: StudentsFormComponent,
      },
      {
        path: 'edit/:id',
        component: StudentsFormComponent,
      },
      {
        path: '**',
        redirectTo: '',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
