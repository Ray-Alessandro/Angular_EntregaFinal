import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StudentsRoutingModule } from './students-routing-module';
import { StudentsComponent } from './students.component';
import { StudentsFormComponent } from './pages/students-form/students-form.component';
import { SharedModule } from '../../../shared/shared.module';
import { StudentsTableComponent } from './pages/students-table/students-table.component';
import { studentsFeatureKey, reducer } from './store/students.reducer';
import { StudentsEffects } from './store/students.effects';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormComponent,
    StudentsTableComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    StoreModule.forFeature(studentsFeatureKey, reducer),
    EffectsModule.forFeature([StudentsEffects])
  ]
})
export class StudentsModule { }