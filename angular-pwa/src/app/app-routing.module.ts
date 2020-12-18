import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullPageComponent } from './full-page/full-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: FullPageComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
