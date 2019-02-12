import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export default class Services {
    constructor(private http: HttpClient) { }
   
     url:any =  "http://localhost:3001/api/user/";

    register(fname, lname,email, password) {    
        return this.http.post<any>(this.url +'userSignup', {name : fname, lastname:lname, email: email, password: password })
            .pipe(map(user => {
               return user;
            }));
    }
    login(e, p){
        return this.http.post<any>(this.url +'userLogin', { email: e, password: p })
            .pipe(map(user => {
               return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}