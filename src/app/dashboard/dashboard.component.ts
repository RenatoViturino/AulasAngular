import { Component, OnInit } from '@angular/core';
import { Personagem} from '../personagem';
import { PersonagemService} from '../personagem.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 personagens: Personagem[] = [];
  constructor( private personagemService: PersonagemService) { }

  ngOnInit() {
    this.getPersonagens();
  }
  getPersonagens(): void {
    this.personagemService.getPersonagens().subscribe(personagens => this.personagens = personagens.slice(1, 5));
  }

}
