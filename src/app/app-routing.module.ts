import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SecondaryPageComponent } from './secondary-page/secondary-page.component';

const routes: Routes = [
  {
    component: MainPageComponent,
    path: 'main-page',
  },
  {
    component: SecondaryPageComponent,
    path: 'secondary-page',
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
