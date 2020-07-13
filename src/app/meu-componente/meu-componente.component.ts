import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {

  nome: string;
  arrayNum = ['Jon', 'Deb', 'Dan', 'TT', 'Jonzera'];

  constructor() { }

  ngOnInit(): void {
    // this.nome = 'Jon Silva';
  }

  recuperarTexto(nome: string) {
    this.nome = nome;
  }

}
