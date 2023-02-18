import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyCompComponent } from './lazy-comp/lazy-comp.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LazyCompComponent,
  }
];

@NgModule({
  declarations: [
    LazyCompComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }
