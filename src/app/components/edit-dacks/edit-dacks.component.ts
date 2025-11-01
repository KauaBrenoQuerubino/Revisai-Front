import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColecaoService } from '../../service/flashcards/colecao/colecao.service';
import { Colecao } from '../../Model/flashcard/Colecao.model';
import { flashcard } from '../../Model/flashcard/Flashcard.model';

@Component({
  selector: 'app-edit-dacks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-dacks.component.html',
  styleUrl: './edit-dacks.component.scss'
})
export class EditDacksComponent {


  constructor(private router: Router){}


  #colecaoService = inject(ColecaoService);
  #route = inject(ActivatedRoute);

  colecao?: Colecao;
  flashcards: flashcard[] = [];
  ColecaoID = 0;

  ngOnInit() {
    this.#route.paramMap.subscribe(params => {
      const idString = params.get('id');
      this.ColecaoID = idString ? +idString : 0;
      if (this.ColecaoID > 0) this.carregarColecao();
    });
  }

  carregarColecao() {
    this.#colecaoService.procurarColecao(this.ColecaoID).subscribe({
      next: (response) => {
        this.colecao = response;
        this.flashcards = response.flashcards ?? [];
      },
      error: (error) => {
        console.error('Erro ao carregar coleção:', error);
      }
    });
  }

  salvarColecao() {
    if (!this.colecao) return;

    this.#colecaoService.criarColecao(this.colecao).subscribe({
      next: () => {
        alert('✅ Coleção atualizada com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao salvar coleção:', err);
        alert('❌ Erro ao salvar alterações!');
      }
    });
  }

    Home() {
      this.router.navigate([''])
    }
}
