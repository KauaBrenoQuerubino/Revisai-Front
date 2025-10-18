import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colecao } from '../../../Model/flashcard/Colecao.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/Colecao';

  criarColecao(colecao: Colecao): Observable<any> {
    return this.http.post(`${this.url}`,  colecao ).pipe(
      tap((response: any) => {
        console.log(response);
      })
    );
  }

  procurarUsuario(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`).pipe(
      tap((response: any) => {
        console.log(response);
      })
    );
  }

}
