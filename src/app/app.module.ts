import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { PersonagemComponent } from './personagem/personagem.component';
import {FormsModule} from '@angular/forms';
import { PersonagemDetalheComponent } from './personagem-detalhe/personagem-detalhe.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    PersonagemComponent,
    PersonagemDetalheComponent,
    MensagemComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
