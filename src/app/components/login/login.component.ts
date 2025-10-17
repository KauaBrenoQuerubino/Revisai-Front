import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { Login } from '../../Model/Usuario/Usuario.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private http: HttpClient) {}

  #AuthService = inject(AuthService);

  login: Login = {
    email: '',
    senha: ''
  }

  logar(): void {
    this.#AuthService.login(this.login.email, this.login.senha).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    })
  }
}
