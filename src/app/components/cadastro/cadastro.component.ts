import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../Model/Usuario/Usuario.model';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  constructor(private http: HttpClient) {}

  #AuthService = inject(AuthService);

  passwordConfirm = ''

  usuario :User = {
    nome: '',
    email: '',
    senha: ''
  }


  Cadastrar(): void {

    if(this.passwordConfirm != this.usuario.senha) return

    this.#AuthService.cadastro(this.usuario).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    })
  }



  
}
