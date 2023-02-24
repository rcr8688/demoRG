import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  response: Observable<any> = this.QuoteService.getquotedetails().pipe(
    map((res) => [res])
  );

  constructor(public QuoteService: QuoteService) {}

  ngOnInit() {
    // this.QuoteService.getquotedetails().pipe(
    //   map((res) => [res])
    // ).subscribe(res=>{
    //   console.log(res,"res")
    // })
  }
}
