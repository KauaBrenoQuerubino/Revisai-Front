import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  imports: [],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent {


  constructor(private router: Router){}

  Home() {
      this.router.navigate([''])
    }
}
