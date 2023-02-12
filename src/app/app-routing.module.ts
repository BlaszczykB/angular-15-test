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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
