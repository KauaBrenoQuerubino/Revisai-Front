import { Component } from '@angular/core';
import { DecksComponent } from "../decks/decks.component";

@Component({
  selector: 'app-mydecks',
  imports: [DecksComponent],
  templateUrl: './mydecks.component.html',
  styleUrl: './mydecks.component.scss'
})
export class MydecksComponent {

}
