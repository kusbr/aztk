import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AzureToolkitService{
    private originUrl: string;

    constructor(private http:Http, @Inject('ORIGIN_URL')originUrl : string){
        this.originUrl = originUrl;
    }

    public saveImages(imagePostData: { url: string, id: string, encodingFormat: string}) : Observable<boolean>{
        let url: string = this.originUrl + '/api/images';
        return this.http.post(url, imagePostData)
            .map(response => {return response.ok;})
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }



}