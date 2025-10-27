import { Component, inject } from '@angular/core';
import { FlashcardComponent } from "./flashcard/flashcard.component";
import { ColecaoComponent } from "./colecao/colecao.component";
import { HttpClient } from '@angular/common/http';
import { ColecaoService } from '../../service/flashcards/colecao/colecao.service';
import { CadastroComponent } from "../cadastro/cadastro.component";
import { MatDialog } from '@angular/material/dialog';
import { DialogContentColecaoComponent } from './colecao/dialog-content-colecao/dialog-content-colecao.component';
import { DialogContentFlashcardComponent } from './flashcard/dialog-content-flashcard/dialog-content-flashcard.component';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decks',
  imports: [FlashcardComponent, ColecaoComponent, CadastroComponent],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.scss'
})
export class DecksComponent {
  
  constructor(private http: HttpClient, private router: Router) {}

  #colecaoService = inject(ColecaoService);
  
  #AuthService = inject(AuthService)

  deck: any[] = [];

  UserId?: number;

  ngOnInit() {
    this.#AuthService.sessao().subscribe({
      next: (user) => {
        this.UserId = user.id;

        // Agora que temos o ID, chamamos o serviço
        this.carregarDecks(user.id);
      },
      error: (err) => {
        console.error('Erro ao buscar sessão:', err);
      }
    });
  }

  irParaFlashCards(id: number) {
    this.router.navigate(['/flashcard', id]); // rota com parâmetro
  }

  carregarDecks(id: number) {
    this.#colecaoService.procurarUsuario(id).subscribe({
      next: (colecao) => {
        this.deck = colecao;
        console.log('Coleções carregadas:', colecao);
      },
      error: (err) => {
        console.error('Erro ao carregar coleções:', err);
      }
    });
  }
  
  readonly dialog = inject(MatDialog);

  openDialog(item: any) {
    const dialogRef = this.dialog.open(DialogContentFlashcardComponent, {
      height: '400px',
      width: '600px',
      data: {
        colecao: item
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
