import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { flashcard } from '../../../../Model/flashcard/Flashcard.model';
import { CardsService } from '../../../../service/flashcards/cards/cards.service';

@Component({
  selector: 'app-dialog-content-flashcard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dialog-content-flashcard.component.html',
  styleUrls: ['./dialog-content-flashcard.component.scss']
})
export class DialogContentFlashcardComponent implements OnInit {
  
  
  private readonly FlashcardService = inject(CardsService);

  flashcardModel!: flashcard;

  constructor(
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogContentFlashcardComponent>
  ) {}

  ngOnInit(): void {
    
    console.log('Coleção recebida:', this.data.colecao);


    this.flashcardModel = {
      enunciado: '',
      resposta: '',
      dificuldade: 'medio',
      colecao: {
        id: this.data.colecao
      }
    };
  }

  criarFlashcard(): void {
    if (!this.flashcardModel.enunciado.trim() || !this.flashcardModel.resposta.trim()) {
      alert('Preencha o enunciado e a resposta antes de salvar.');
      return;
    }

    console.log('Enviando flashcard:', this.flashcardModel);

    this.FlashcardService.criarCard(this.flashcardModel).subscribe({
      next: (res) => {
        console.log('Flashcard criado com sucesso:', res);
        this.dialogRef.close(res); 
        window.location.reload();
      },
      error: (err) => {
        console.error('Erro ao criar flashcard:', err);
      }
    });
  }
}
