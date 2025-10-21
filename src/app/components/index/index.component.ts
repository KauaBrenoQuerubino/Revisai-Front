import { Component } from '@angular/core';
import { DecksComponent } from "../decks/decks.component";
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: 'app-index',
  imports: [DecksComponent, MenuComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
