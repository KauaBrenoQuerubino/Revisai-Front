import { Component, inject } from '@angular/core';
import { FlashcardComponent } from "./flashcard/flashcard.component";
import { ColecaoComponent } from "./colecao/colecao.component";
import { HttpClient } from '@angular/common/http';
import { ColecaoService } from '../../service/flashcards/colecao/colecao.service';
import { CadastroComponent } from "../cadastro/cadastro.component";

@Component({
  selector: 'app-decks',
  imports: [FlashcardComponent, ColecaoComponent, CadastroComponent],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.scss'
})
export class DecksComponent {
  
  constructor(private http: HttpClient) {}

  #colecaoService = inject(ColecaoService);

  Teste: any[] = [];

  ngOnInit() {
    this.#colecaoService.procurarUsuario(1).subscribe({
      next: (colecao) => {
        this.Teste = colecao
        console.log(colecao)
      }
    })
  
  }
}
