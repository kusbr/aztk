import { Injectable } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { Http, Headers } from "@angular/http";

@Injectable()
 export class AzureHttpClient {
     constructor(private http: Http) {}
     get(url: string, apiKey: string) {
         let headers = new Headers();
         headers.append('Ocp-Apim-Subscription-Key', apiKey);
         return this.http.get(url, {
             headers: headers
         });
     }
     post(url, apiKey, data) {
         let headers = new Headers();
         headers.append('Ocp-Apim-Subscription-Key', apiKey);
         return this.http.post(url, data, {
             headers: headers
         });
     }
 }
