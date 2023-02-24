import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  constructor(public httpclient: HttpClient) {}
  post(data: any) {
    return this.httpclient.post('url',data);
  }
  get(url:any) {
    return this.httpclient.get(url);
  }
}
