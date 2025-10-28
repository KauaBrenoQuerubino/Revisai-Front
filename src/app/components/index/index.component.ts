import { Component, inject } from '@angular/core';
import { DecksComponent } from "../decks/decks.component";
import { MenuComponent } from "./menu/menu.component";
import { MatDialog } from '@angular/material/dialog';
import { DialogContentColecaoComponent } from '../decks/colecao/dialog-content-colecao/dialog-content-colecao.component';
import { DialogContentFlashcardComponent } from '../decks/flashcard/dialog-content-flashcard/dialog-content-flashcard.component';
import { AuthService } from '../../service/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [DecksComponent, MenuComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
   
  constructor(private http: HttpClient, private router: Router){}

  #AuthService = inject(AuthService)

  UserInfos :any;
  ngOnInit() {
    this.#AuthService.sessao().subscribe({
      next: (user) => {
        console.log(user)
        this.UserInfos = user;
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    })
  }
}
