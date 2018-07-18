import { Oferta } from './shared/ofertas.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


// import 'rxjs/add/operator/toPromise';


@Injectable()
export class ofertaService {

    constructor(private http: Http){}




    public getOfertas(): Promise<Oferta[]> {

        //requisição http
       return this.http.get('http://localhost:3000/ofertas?destaque=true')
        .toPromise()
        .then((resposta: any) => resposta.json())
         //retornar promessa array de promessa
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]>{
        
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta.json())

    }

}