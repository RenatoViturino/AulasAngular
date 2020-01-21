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
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    PersonagemComponent,
    PersonagemDetalheComponent,
    MensagemComponent,
    DashboardComponent,
    NameEditorComponent,
    ProfileEditorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
