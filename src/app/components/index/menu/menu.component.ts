import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentColecaoComponent } from '../../decks/colecao/dialog-content-colecao/dialog-content-colecao.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {


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

    Deck() {
      this.router.navigate(['/meus-decks'])
    }

    config() {
      this.router.navigate(['/config'])
    }
}
