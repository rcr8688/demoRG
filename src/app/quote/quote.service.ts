import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { RestApiService } from '../shared/services/rest-api.service';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(public restapi: RestApiService) {
    this.getquotedetailsv1();
  }
  getquotedetails() {
    return this.restapi.get('https://pokeapi.co/api/v2/pokemon/ditto');
  }
  getquotedetailsv1() {
    return this.restapi
      .get('https://pokeapi.co/api/v2/pokemon/ditto')
      .pipe(
        switchMap((item: any) =>
          this.restapi.get(item.location_area_encounters)
        )
      )
      .subscribe((res) => res);
  }
}
