import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  sendMessage(body: any) {
    console.log('service called: ', JSON.stringify(body));
    // don't subscribe http at service component; do it on caller component
    return this.http.post('http://ajoan.com:5000/sendmail', body);
  }
}
