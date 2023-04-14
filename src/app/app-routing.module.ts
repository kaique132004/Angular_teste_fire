import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pg/home/home.component';
import { CarrinhoComponent } from './pg/carrinho/carrinho.component';
import { ProdutosComponent } from './pg/produtos/produtos.component';
import { LoginComponent } from './pg/login/login.component';
import { PerfilComponent } from './pg/perfil/perfil.component';
import { CadastroComponent } from './pg/cadastro/cadastro.component';
import { ComprasComponent } from './pg/perfil/compras/compras.component';
import { CurtidasComponent } from './pg/perfil/curtidas/curtidas.component';
import { ConfiguracoesComponent } from './pg/perfil/configuracoes/configuracoes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'compras', component: ComprasComponent },
  { path: 'curtidas', component: CurtidasComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
