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
  

}
