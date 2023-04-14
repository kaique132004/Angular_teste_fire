import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import { FireService } from 'src/app/srv/fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nome: any;
  email: any;
  senha: any;

  check: any;

  constructor(private firestore: AngularFirestore, private fire: FireService, private router: Router) { }

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton!.addEventListener('click', function () {
      container!.classList.add("right-panel-active");
    });

    signInButton!.addEventListener('click', function () {
      container!.classList.remove("right-panel-active");
    });
  }

  async login() {
    this.fire.login_email(this.email, this.senha).then((res) => {
      localStorage.setItem('user', JSON.stringify(res.user));
      console.log(res.user);
    }).catch((err) => {
      console.error(err);
    });
  }

  cadastro() {
    if (this.check == true) {

      this.fire.cadastro_conta(this.email, this.senha).then((res) => {
        res.user?.updateProfile({
          displayName: this.nome
        });

        this.firestore.collection('users').add({
          uid: res.user?.uid,
          nome: this.nome,
          concorda: this.check,
        });
      }).catch((err) => {
        console.error(err);
      });
    }else{
      alert('Concorde com os termos para continuar');
    }
  }

  async login_google() {
    await this.fire.login_google().then((res) => {
      localStorage.setItem('user', JSON.stringify(res.user));
      this.router.navigate(['perfil']);
    }).catch((err) => {
      console.error(err);
    });
  }

}
