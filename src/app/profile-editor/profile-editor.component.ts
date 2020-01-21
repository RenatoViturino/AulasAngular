import { Component, OnInit } from '@angular/core';
import { Validators} from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { FormArray} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  perfilForm = this.fb.group({
    nome: ['', Validators.required],
    sobrenome: [''],
    endereco: this.fb.group({
      rua: [''],
      cidade: [''],
      estado: [''],
      cep: ['']
    }),

   aliases: this.fb.array([
    this.fb.control('')
  ])
});
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
  console.warn(this.perfilForm.value);
  }
  get aliases() {
return this.perfilForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
