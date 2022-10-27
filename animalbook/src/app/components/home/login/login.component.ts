import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario= '';
  senha= '';

  constructor(
    private authService: AuthService, 
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe({
      next: (v) => console.log(v),
      error: (e) => {
        alert('Usuário ou senha inválidos!')
        console.log(e)
      },
      complete: () => this.router.navigate(['animais'])
    })
  }

  // login() {
  //   this.authService.autenticar(this.usuario, this.senha).subscribe(
  //     () => {
  //       this.router.navigate(['animais']);
  //     },
  //     (error) => {
  //       alert('Usuário ou senha inválido');
  //       console.log(error);
  //     }
  //   );
  // }
};
