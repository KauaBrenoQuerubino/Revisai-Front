import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroComponent } from "./components/cadastro/cadastro.component";
import { LoginComponent } from "./components/login/login.component";
import { ColecaoComponent } from "./components/decks/colecao/colecao.component";
import { DecksComponent } from "./components/decks/decks.component";
import { IndexComponent } from "./components/index/index.component";
import { FlashcardComponent } from "./components/decks/flashcard/flashcard.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroComponent, LoginComponent, ColecaoComponent, DecksComponent, IndexComponent, FlashcardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'revisai';
}
