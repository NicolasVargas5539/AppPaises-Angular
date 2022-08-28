import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugueridos: Country[] = [];
  mostrarSugerencias: boolean = false;


  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe((paise) => {
        console.log(paise);
        this.paises = paise;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }
  sugerencias(termino : string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;


     this.paisService.buscarPais(termino)
       .subscribe(
        paises => this.paisesSugueridos = paises.splice(0,3),
        (err) => this.paisesSugueridos = []
      );
  }

  buscarSugerido( termino: string){
    this.buscar(termino);
    this.mostrarSugerencias = false;
  }
}
