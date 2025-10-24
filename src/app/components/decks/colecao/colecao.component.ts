import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ColecaoService } from '../../../service/flashcards/colecao/colecao.service';
import { Colecao } from '../../../Model/flashcard/Colecao.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colecao',
  imports: [FormsModule],
  templateUrl: './colecao.component.html',
  styleUrl: './colecao.component.scss'
})
export class ColecaoComponent {

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


  colecaoModel: Colecao = {
    nome: '',
    usuarios: [{ id: 1 }]
  }

  CriarColecao(): void {
    this.#colecaoService.criarColecao(this.colecaoModel).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    })

  }

}
