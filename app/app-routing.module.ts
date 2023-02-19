import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoosePlanComponent } from './components/choose-plan/choose-plan.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path:"signin",
    component:SigninComponent,
  },
  {
    path:"plan",
    component:ChoosePlanComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
