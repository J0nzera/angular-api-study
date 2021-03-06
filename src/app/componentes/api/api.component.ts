import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Imagem } from 'src/models/api';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  imagens: any;
  erro: any;

  constructor(private apiService: ApiService) {
    this.pegarImagem();
  }

  ngOnInit(): void {
  }

  pegarImagem(){
    this.apiService.getImg().subscribe(

    (data: Imagem) => {
      this.imagens = data;
      console.log('Dado sendo recebido', data);
      console.log('Dados enviados', this.imagens);
    },

    (error: any) => {
      this.erro = error;
      console.log('Erro', error);
    }
    );
  }
}
