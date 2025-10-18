import { Component, inject } from '@angular/core';
import { CardsService } from '../../../service/flashcards/cards/cards.service';
import { HttpClient } from '@angular/common/http';
import { flashcard } from '../../../Model/flashcard/Flashcard.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flashcard',
  imports: [FormsModule],
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.scss'
})
export class FlashcardComponent {
  constructor(private http: HttpClient) {}

  #FlashcardService = inject(CardsService);

  flashcardModel: flashcard = {
    nome: '',
    tema: '',
    enunciado: '',
    resposta: '',
    dificuldade: 'medio',
    colecao: {
      id: 4
    }
  }

  criarFlashcard() {
    console.log('Flashcard enviado:', this.flashcardModel);

    this.#FlashcardService.criarCard(this.flashcardModel).subscribe({
      next: res => console.log('Resposta:', res),
      error: err => console.error('Erro:', err)
    });
  }

}
