import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CoursesTableComponent } from './pages/courses-table/courses-table.component';
import { CoursesFormComponent } from './pages/courses-form/courses-form.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: '',
        component: CoursesTableComponent
      },
      {
        path: 'create',
        component: CoursesFormComponent
      },
      {
        path: 'edit/:id',
        component: CoursesFormComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
