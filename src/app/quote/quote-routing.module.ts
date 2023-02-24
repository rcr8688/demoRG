import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'purchase', component: PurchaseComponent },
  {
    path: '',
    redirectTo: 'purchase',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuoteRoutingModule {}
