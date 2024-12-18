import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:3000/user'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  // Create a new user
  createUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  // Get all users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  // Get a single user by ID
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // Update a user by ID
  updateUser(id: number, user: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}`, user);
  }

  // Delete a user by ID
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
