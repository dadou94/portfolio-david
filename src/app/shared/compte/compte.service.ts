import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';
import {HttpParams} from "@angular/common/http";
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class CompteService{


idUser: string;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:9090/api/users');
  }




  getSelectUser(idUser: string): Observable<User> {

  idUser = idUser.trim();

	 const options = { 

		params: new HttpParams().set('id', idUser)
		};

	 

    return this.http.get<User>('http://localhost:9090/api/users/edit',options);
}

  createUser(user: User):  Observable<any> {
      return this.http.post('http://localhost:9090/api/users/create', user);
  }


  updateUser(user: User,idUser: string): Observable<any> {

 
  idUser = idUser.trim();

   const options = { 

    params: new HttpParams().set('id', idUser)
    };



  return this.http.put('http://localhost:9090/api/users/update', user, options);
  }


  deleteUser(idUser: string): Observable<any> {

  idUser = idUser.trim();

   const options = { 

    params: new HttpParams().set('id', idUser)
    };

     return this.http.delete('http://localhost:9090/api/users/delete',options);

  }


}