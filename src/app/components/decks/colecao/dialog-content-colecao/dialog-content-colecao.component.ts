import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Colecao } from '../../../../Model/flashcard/Colecao.model';
import { ColecaoService } from '../../../../service/flashcards/colecao/colecao.service';
import { AuthService } from '../../../../service/auth/auth.service';

@Component({
  selector: 'app-dialog-content-colecao',
  standalone: true, // adiciona standalone (boa prática em componentes com "imports")
  imports: [FormsModule],
  templateUrl: './dialog-content-colecao.component.html',
  styleUrls: ['./dialog-content-colecao.component.scss']
})
export class DialogContentColecaoComponent {
  private readonly colecaoService = inject(ColecaoService);
  private readonly authService = inject(AuthService);

  colecaoModel: Colecao = { nome: '', usuarios: [] };
  userId!: number;
  deck: any[] = [];

  ngOnInit(): void {
    // 1️⃣ Obter sessão do usuário logado
    this.authService.sessao().subscribe({
      next: (user) => {
        if (!user?.id) {
          console.warn('Nenhum usuário logado.');
          return;
        }

        this.userId = user.id;
        console.log('Usuário logado:', this.userId);

        this.colecaoModel = {
          nome: '',
          usuarios: [{ id: this.userId }]
        };

        // 2️⃣ Buscar coleções do usuário
        this.carregarColecoes();
      },
      error: (err) => console.error('Erro ao buscar sessão:', err)
    });
  }

  private carregarColecoes(): void {
    if (!this.userId) return;

    this.colecaoService.procurarUsuario(this.userId).subscribe({
      next: (colecoes) => {
        this.deck = colecoes;
        console.log('Coleções do usuário:', colecoes);
      },
      error: (err) => console.error('Erro ao buscar coleções:', err)
    });
  }

  CriarColecao(): void {
    if (!this.colecaoModel?.nome?.trim()) {
      alert('Digite um nome para a coleção antes de salvar.');
      return;
    }

    this.colecaoService.criarColecao(this.colecaoModel).subscribe({
      next: (res) => {
        console.log('Coleção criada com sucesso:', res);
        // Aqui você pode fechar o dialog ao invés de recarregar a página
        window.location.reload();
      },
      error: (err) => console.error('Erro ao criar coleção:', err)
    });
  }
}
