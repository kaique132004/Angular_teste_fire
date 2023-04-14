import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PerfilComponent } from './perfil.component';
import { ComprasComponent } from './compras/compras.component';
import { CurtidasComponent } from './curtidas/curtidas.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { PaymentComponent } from '../payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: 'perfil' },
  { path: 'perfil', component: PerfilComponent },
  { path: 'curtidas', component: CurtidasComponent },
  { path: 'compras', component: ComprasComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent },
  { path: 'pagamento', component: PaymentComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PerfilRoutingModule { }
