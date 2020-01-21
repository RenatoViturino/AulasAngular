import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonagemComponent} from './personagem/personagem.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import {PersonagemDetalheComponent} from './personagem-detalhe/personagem-detalhe.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detalhes/:id', component: PersonagemDetalheComponent},
  {path: 'personagem', component: PersonagemComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
