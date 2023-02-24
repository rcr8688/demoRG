import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from './quote-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { PurchaseComponent } from './purchase/purchase.component';


@NgModule({
  declarations: [
    SummaryComponent,
    PurchaseComponent
  ],
  imports: [
    CommonModule,
    QuoteRoutingModule
  ]
})
export class QuoteModule {
  constructor(){
    console.log("quote module")
  }
 }
