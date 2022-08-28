import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country [] = [];



  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe((capital) => {
        console.log(capital);
        this.paises = capital;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }
}
