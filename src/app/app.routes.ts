import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FlashcardComponent } from './components/decks/flashcard/flashcard.component';
import { ColecaoComponent } from './components/decks/colecao/colecao.component';
import { MydecksComponent } from './components/mydecks/mydecks.component';

export const routes: Routes = [
    {
        path: "",
        component: IndexComponent
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"cadastro",
        component: CadastroComponent
    },
    {
        path:"flashcard/:id",
        component:FlashcardComponent
    },
    {
        path:"meus-decks",
        component: MydecksComponent
    }
];
