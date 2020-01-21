import { Component, OnInit, Input } from '@angular/core';
import { Personagem} from '../personagem';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PersonagemService} from '../personagem.service';

@Component({
  selector: 'app-personagem-detalhe',
  templateUrl: './personagem-detalhe.component.html',
  styleUrls: ['./personagem-detalhe.component.css']
})
export class PersonagemDetalheComponent implements OnInit {
 personagem: Personagem;


  constructor(
    private route: ActivatedRoute,
    private personagemService: PersonagemService,
    private location: Location) { }

  ngOnInit(): void {
  this.getPersonagem();
  }
getPersonagem(): void {
 const id = + this.route.snapshot.paramMap.get('id');
 this.personagemService.getPersonagem(id).subscribe( personagem => this.personagem = personagem);
}
goBack(): void {
  this.location.back();
}
}
