import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserListModel, UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    private headers = new HttpHeaders();

    constructor(private http: HttpClient) {
        this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    }

    getUsers(): Observable<UserListModel> {
        return this.http.get<UserListModel>(`http://localhost:3000/user`);
    }

    getUser(id: number): Observable<UserModel> {
        return this.http.get<UserModel>(`http://localhost:3000/user/${id}`);
    }

    addUser(body: UserModel) {
        return this.http.post(`http://localhost:3000/user`, JSON.stringify(body), { headers: this.headers });
    }

    updateUser(body: UserModel) {
        return this.http.put(`http://localhost:3000/user/${body.id}`, JSON.stringify(body), { headers: this.headers });
    }

    deleteUser(id: number) {
        return this.http.put(`http://localhost:3000/user/${id}`, { headers: this.headers });
    }
}