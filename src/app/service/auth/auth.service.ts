import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../../Model/Usuario/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: any;

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/auth';

  private tokenKey = 'auth_token';




  cadastro(User: User): Observable<any> {
    return this.http.post(`${this.url}/cadastro`,  User ).pipe(
      tap((response: any) => {
        console.log(response);
      })
    );
  }

  login(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.url}/login`, { email, senha }).pipe(
      tap((response: any) => {
        if (response?.token) {
          localStorage.setItem(this.tokenKey, response.token);
        }
      })
    );
  }

  sessao(): Observable<any> {
    const token = localStorage.getItem(this.tokenKey)
    return this.http.post(`${this.url}/sessao`, {token}).pipe()
  }

}


