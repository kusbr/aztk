import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
 import { Headers, Http } from '@angular/http';
 import { Observable } from 'rxjs/Observable';
 import 'rxjs/add/operator/catch';
 import 'rxjs/add/operator/map';
 import { AzureHttpClient } from './azureHttpClient';
 import { BingSearchResponse } from '../models/bingSearchResponse';
 @Injectable()
 export class CognitiveService {
     bingSearchAPIKey = 'edc020aa3ba5405cb0ed03ba69455ed8';
     constructor(private http: AzureHttpClient) { }
     searchImages(searchTerm: string): Observable<BingSearchResponse> {
         let url : string;
         url = 'https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=' + searchTerm;
         return this.http.get(url, this.bingSearchAPIKey)
             .map(response => response.json() as BingSearchResponse)
             .catch(this.handleError);
     }
     private handleError(error: any): Promise<any> {
         console.error('An error occurred', error); // for demo purposes only
         return Promise.reject(error.message || error);
     }
 }