import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AzureHttpClient } from './azureHttpClient';
import { BingSearchResponse } from '../models/bingSearchResponse';
import { ComputerVisionRequest, ComputerVisionResponse } from '../models/computerVisionResponse';
import { resetFakeAsyncZone } from '@angular/core/testing';

 @Injectable()
 export class CognitiveService {
     bingSearchAPIKey = 'edc020aa3ba5405cb0ed03ba69455ed8';
     computerVisionAPIKey = 'd1385f5b895c4dd89cda3eaaadfa1ea5';

     constructor(private http: AzureHttpClient) { }

     searchImages(searchTerm: string): Observable<BingSearchResponse> {
         let imageSearchApiUrl : string;
         imageSearchApiUrl = 'https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=' + searchTerm;
         return this.http.get(imageSearchApiUrl, this.bingSearchAPIKey)
             .map(response => response.json() as BingSearchResponse)
             .catch(this.handleError);
     }

     analyzeImage(request: ComputerVisionRequest) : Observable<ComputerVisionResponse>{
         let imageDetectionApiUrl = 'https://southeastasia.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Description,Tags';
         return this.http.post(imageDetectionApiUrl, this.computerVisionAPIKey, request)
            .map(response => response.json() as ComputerVisionResponse)
            .catch(this.handleError);
     }

     private handleError(error: any): Promise<any> {
         console.error('An error occurred', error); // for demo purposes only
         return Promise.reject(error.message || error);
     }
 }