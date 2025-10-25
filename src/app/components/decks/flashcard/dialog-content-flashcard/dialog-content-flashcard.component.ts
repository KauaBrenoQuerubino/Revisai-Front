import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { flashcard } from '../../../../Model/flashcard/Flashcard.model';
import { CardsService } from '../../../../service/flashcards/cards/cards.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-content-flashcard',
  imports: [FormsModule],
  templateUrl: './dialog-content-flashcard.component.html',
  styleUrl: './dialog-content-flashcard.component.scss'
})
export class DialogContentFlashcardComponent {
constructor(private http: HttpClient) {}

  #FlashcardService = inject(CardsService);

  flashcardModel: flashcard = {
    nome: '',
    tema: '',
    enunciado: '',
    resposta: '',
    dificuldade: 'medio',
    colecao: {
      id: 1
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
