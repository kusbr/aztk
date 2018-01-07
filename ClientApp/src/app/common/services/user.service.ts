import { Injectable, InjectionToken, Inject } from "@angular/core";
import { Headers, HttpModule  } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User, AADUser } from "../models/user";
import { Http } from "@angular/http/src/http";
import { promise } from "selenium-webdriver";

@Injectable()
export class UserService{
    private originUrl: string;
    private aadUser: AADUser;

    constructor(private http:Http, @Inject('ORIGIN_URL')originUrl: string){
        this.originUrl = originUrl;
    }

    public getUser(): Observable<User>{
        let url: string = this.originUrl + '/.auth/me';
        return this.http
            .get(url)
            .map(response => {
               try{
                    this.aadUser = response.json()[0] as AADUser;
                    let user = new User();
                    user.userId = this.aadUser.user_id;
                    this.aadUser.user_clains.forEach( claim =>
                    {
                        switch (claim.typ){
                            case "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname":
                                user.firstName = claim.val;
                                break;
                            
                            case "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname":
                                user.lastName = claim.val;
                                break;
                        }
                    });

                    return user;
                }
                catch(Exception){
                    console.log
                }
            })
            .catch(this.handleError);
    }

    private handleError(error: any){
        console.error('An error occurred', error);
        return Promise.reject(error);
    }
}