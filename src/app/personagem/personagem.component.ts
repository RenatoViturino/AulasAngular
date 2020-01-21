import { Component, OnInit } from '@angular/core';
import { Personagem } from '../personagem';
import {PersonagemService} from '../personagem.service';


@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {
    personagens: Personagem[] ;

  constructor( private personagemService: PersonagemService) {   }

  ngOnInit() {
      this.getPersonagens();

  }
getPersonagens(): void {

 this.personagemService.getPersonagens().subscribe( personagens => this.personagens = personagens);
}
}
