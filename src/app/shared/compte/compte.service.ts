import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';
import {HttpParams} from "@angular/common/http";
// import 'rxjs/add/operator/map';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CompteService{

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/users');
  }




  getSelectUser(idUser: string): Observable<User> {

  idUser = idUser.trim();

	 const options = { 

		params: new HttpParams().set('id', idUser)
		};

	 

    return this.http.get<User>(this.baseUrl + 'api/users/edit',options);
}

  createUser(user: User):  Observable<any> {
      return this.http.post(this.baseUrl + 'api/users/create', user);
  }


  updateUser(user: User,idUser: string): Observable<any> {

 
  idUser = idUser.trim();

   const options = { 

    params: new HttpParams().set('id', idUser)
    };



  return this.http.put(this.baseUrl + 'api/users/update', user, options);
  }


  deleteUser(idUser: string): Observable<any> {

  idUser = idUser.trim();

   const options = { 

    params: new HttpParams().set('id', idUser)
    };

     return this.http.delete(this.baseUrl + 'api/users/delete',options);

  }


}