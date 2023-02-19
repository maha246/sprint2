import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ChoosePlanComponent } from './components/choose-plan/choose-plan.component';
import { PlanComponent } from './components/plan/plan.component';
import { SigninComponent } from './components/signin/signin.component';
import { FormelementComponent } from './components/formelement/formelement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChoosePlanComponent,
    PlanComponent,
    SigninComponent,
    FormelementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
