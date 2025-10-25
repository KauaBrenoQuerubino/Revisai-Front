import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Colecao } from '../../../../Model/flashcard/Colecao.model';
import { ColecaoService } from '../../../../service/flashcards/colecao/colecao.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-content-colecao',
  imports: [FormsModule],
  templateUrl: './dialog-content-colecao.component.html',
  styleUrl: './dialog-content-colecao.component.scss'
})
export class DialogContentColecaoComponent {
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


  colecaoModel: Colecao = {
    nome: '',
    usuarios: [{ id: 1 }]
  }

  CriarColecao(): void {
    this.#colecaoService.criarColecao(this.colecaoModel).subscribe({
      next: res => window.location.reload(),
      error: err => console.log(err)
    })

  }
}
