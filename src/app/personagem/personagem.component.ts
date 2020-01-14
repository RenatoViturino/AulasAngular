import { Component, OnInit } from '@angular/core';
import { Personagem } from '../personagem';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {
  personagem: Personagem = {
 id: 1,
 nome: 'Cebolinha',
 vida : 250,
 estilo: 'Ladrão',
 genero: 'masculino'

  };
  constructor() {
       }

  ngOnInit() {
  }

}
