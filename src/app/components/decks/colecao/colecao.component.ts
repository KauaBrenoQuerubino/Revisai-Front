import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ColecaoService } from '../../../service/flashcards/colecao/colecao.service';
import { Colecao } from '../../../Model/flashcard/Colecao.model';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogContentColecaoComponent } from './dialog-content-colecao/dialog-content-colecao.component';

@Component({
  selector: 'app-colecao',
  imports: [FormsModule, MatDialogModule,MatButtonModule],
  templateUrl: './colecao.component.html',
  styleUrl: './colecao.component.scss'
})
export class ColecaoComponent {

  
}
