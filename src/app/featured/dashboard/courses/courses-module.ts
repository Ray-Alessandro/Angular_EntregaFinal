import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing-module';
import { CoursesComponent } from './courses.component';
import { CoursesTableComponent } from './pages/courses-table/courses-table.component';
import { CoursesFormComponent } from './pages/courses-form/courses-form.component';
import { SharedModule } from '../../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { coursesFeatureKey, reducer } from './store/courses.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './store/courses.effects';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesTableComponent,
    CoursesFormComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    StoreModule.forFeature(coursesFeatureKey, reducer),
    EffectsModule.forFeature([CoursesEffects])
  ]
})
export class CoursesModule { }
