import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColecaoService } from '../../../service/flashcards/colecao/colecao.service';
import { flashcard } from '../../../Model/flashcard/Flashcard.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'] // <- IMPORTANTE: plural
})
export class FlashcardComponent {
  #colecaoService = inject(ColecaoService);

  constructor(private route: ActivatedRoute) {}

  flashcards: flashcard[] = [];
  currentIndex = 0;
  showAnswer = false;
  ColecaoID = 1;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idString = params.get('id');
      this.ColecaoID = idString ? +idString : 0; // '+' converte string para number
      console.log(this.ColecaoID);
  });

    this.#colecaoService.procurarColecao(this.ColecaoID).subscribe({
      next: (response) => {
        this.flashcards = response.flashcards ?? [];
      },
      error: (error) => {
        console.error('Erro ao carregar flashcards:', error);
      }
    });
  }

  toggleAnswer() {
    this.showAnswer = !this.showAnswer;
  }

  nextCard() {
    if (!this.flashcards.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.flashcards.length;
    this.showAnswer = false;
  }

  previousCard() {
    if (!this.flashcards.length) return;
    this.currentIndex = (this.currentIndex - 1 + this.flashcards.length) % this.flashcards.length;
    this.showAnswer = false;
  }
}
