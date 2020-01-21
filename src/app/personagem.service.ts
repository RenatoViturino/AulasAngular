import { Injectable } from '@angular/core';
import {Personagem} from './personagem';
import {PERSONAGENS} from './mock-personagem';
import {Observable, of} from 'rxjs';
import {MensagemService} from './mensagem.service';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  constructor( private mensagemService: MensagemService) { }

  getPersonagens(): Observable<Personagem[]> {
    this.mensagemService.add('');
    return of(PERSONAGENS);
    }


  getPersonagem(id: number): Observable<Personagem> {
    this.mensagemService.add('Personagem: id: ' + id);

    return of(PERSONAGENS.find( personagem => personagem.id === id));
  }




}
