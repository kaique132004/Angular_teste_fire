import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { ComprasComponent } from './compras/compras.component';
import { CurtidasComponent } from './curtidas/curtidas.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';



@NgModule({
  declarations: [
    PerfilComponent,
    ComprasComponent,
    CurtidasComponent,
    ConfiguracoesComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
