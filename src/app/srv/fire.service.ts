import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private afs: AngularFireAuth) { }

  async login_email(email: string, senha: string){
    return this.afs.signInWithEmailAndPassword(email, senha);
  }

  async login_google(){
    return this.afs.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  async cadastro_conta(email:string, senha:string){
    return this.afs.createUserWithEmailAndPassword(email, senha);
  }

  async recovery_senha(email:string) {
    return this.afs.sendPasswordResetEmail(email);
  }

  async logout(){
    return this.afs.signOut();
  }
}
