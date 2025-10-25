import { Component, inject } from '@angular/core';
import { FlashcardComponent } from "./flashcard/flashcard.component";
import { ColecaoComponent } from "./colecao/colecao.component";
import { HttpClient } from '@angular/common/http';
import { ColecaoService } from '../../service/flashcards/colecao/colecao.service';
import { CadastroComponent } from "../cadastro/cadastro.component";
import { MatDialog } from '@angular/material/dialog';
import { DialogContentColecaoComponent } from './colecao/dialog-content-colecao/dialog-content-colecao.component';
import { DialogContentFlashcardComponent } from './flashcard/dialog-content-flashcard/dialog-content-flashcard.component';

@Component({
  selector: 'app-decks',
  imports: [FlashcardComponent, ColecaoComponent, CadastroComponent],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.scss'
})
export class DecksComponent {
  
  constructor(private http: HttpClient) {}

  #colecaoService = inject(ColecaoService);

  deck: any[] = [];

  ngOnInit() {
    this.#colecaoService.procurarUsuario(1).subscribe({
      next: (colecao) => {
        this.deck = colecao
        console.log(colecao)
      }
    })
  }
  
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentFlashcardComponent, {
      height: '300px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
