import { Component, inject } from '@angular/core';
import { DecksComponent } from "../decks/decks.component";
import { DialogContentColecaoComponent } from '../decks/colecao/dialog-content-colecao/dialog-content-colecao.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mydecks',
  imports: [DecksComponent],
  templateUrl: './mydecks.component.html',
  styleUrl: './mydecks.component.scss'
})
export class MydecksComponent {


  constructor(private router: Router){}
  

  readonly dialog = inject(MatDialog);
    
  openDialog() {
        const dialogRef = this.dialog.open(DialogContentColecaoComponent, {
          height: '300px',
          width: '600px',
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
  }


  Home() {
      this.router.navigate([''])
    }
}
