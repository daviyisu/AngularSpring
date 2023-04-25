import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/user/';
  }

  public findAll():Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl + "users");
  }

  loginUser(user: User): Observable<Object>{
    console.log(user);
    return this.http.post<User>(this.usersUrl + "login", user);
  }

  addUser(user: User): Observable<Object>{
    console.log(user);
    return this.http.post<User>(this.usersUrl + "adduser", user);
  }

  deleteUser(user: User): Observable<Object>{
      console.log(user);
      return this.http.delete<User>(this.usersUrl + `deleteuser/${user.id}`);
    }

  updateUser(user: User, user_id: String | undefined): Observable<Object>{
      console.log(user);
      return this.http.put<User>(this.usersUrl + `updateuser/${user_id}`, user);
    }

}
