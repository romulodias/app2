import { Component, OnInit } from '@angular/core';
import { ofertaService } from  '../ofertas.service';
import { Oferta  } from  '../shared/ofertas.model';
@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ofertaService]
})
export class RestaurantesComponent implements OnInit {

  constructor(private ofertaService: ofertaService) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
        console.log(ofertas)
      })
  }

}
