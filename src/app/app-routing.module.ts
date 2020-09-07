import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResetComponent} from './reset/reset.component';
import { ResetFormComponent } from './reset-form/reset-form.component';

const routes: Routes = [
  {path : '', component: ResetComponent},
  {path: 'reset', component: ResetFormComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
