import { Component, OnInit } from '@angular/core';
import { ofertaService } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ofertaService]
})
export class HomeComponent implements OnInit {


  public ofertas: Oferta[]

  constructor(private ofertaServices: ofertaService) { }

  ngOnInit() {


    this.ofertaServices.getOfertas()
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas

      })
      .catch((param: any) => {
        console.log(param)

      })
  }

}
