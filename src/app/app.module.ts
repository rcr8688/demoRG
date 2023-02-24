import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './auth/nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { CheckOptionsDirective } from './shared/directives/check-options.directive';

const route: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'nav', component: NavComponent },
  { path: 'reg', component: RegisterComponent },
  { path: 'quote', loadChildren: ()=>import('./quote/quote.module').then(m=>m.QuoteModule) },
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    NavBarComponent,
    CheckOptionsDirective    
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(route)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(){
    console.log("app module ")
  }
}
