import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `
    button{
      min-width: 5rem;
    }
    `
  ]
})

export class RegionComponent {

  regiones: string[] = ['EU', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'NAFTA'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCss(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn-outline-secondary';
  }

  activarRegion(region: string) {

    if(region === this.regionActiva) {return;}

    this.regionActiva = region;
    this.paisService.buscarRegion(region)
      .subscribe(paises => this.paises = paises);
  }
}

