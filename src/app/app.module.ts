import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './pg/produtos/produtos.component';
import { CarrinhoComponent } from './pg/carrinho/carrinho.component';
import { LoginComponent } from './pg/login/login.component';
import { PerfilComponent } from './pg/perfil/perfil.component';
import { CadastroComponent } from './pg/cadastro/cadastro.component';

import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { HomeComponent } from './pg/home/home.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './pg/payment/payment.component';


const firebaseConfig = {
  apiKey: "AIzaSyAUpwP02V7bXcp3dp-m2fRpXvXsrhX8mMc",
  authDomain: "malulu-a8953.firebaseapp.com",
  projectId: "malulu-a8953",
  storageBucket: "malulu-a8953.appspot.com",
  messagingSenderId: "376267368709",
  appId: "1:376267368709:web:81587d71e3b27c7894af6c"
};

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    CarrinhoComponent,
    LoginComponent,
    PerfilComponent,
    CadastroComponent,
    HomeComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
