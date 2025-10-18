import { Injectable } from '@angular/core';
import { flashcard } from '../../../Model/flashcard/Flashcard.model';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/Flashcard';

  criarCard(flashcard: flashcard): Observable<any> {
    return this.http.post(`${this.url}`,  flashcard ).pipe(
      tap((response: any) => {
        console.log(response);
      })
    );
  }

}
