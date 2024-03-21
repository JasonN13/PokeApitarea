import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPOkemon } from './Interfaces/IPokemon';
import { Observable } from 'rxjs';
import { IPokemondetale } from './Interfaces/IPokemonDetalle';


@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private Url="https://pokeapi.co/api/v2"

  constructor(private cliente: HttpClient) { }

   private httpOptions={
    headers:new HttpHeaders({"Content-type":"application/json"})
   }

  getPokemons(limit?:number):Observable<IPOkemon>{
    let url = (!limit) ? `${this.Url}/pokemon` : `${this.Url}/pokemon/?limit=${limit}`

    return this.cliente.get<IPOkemon>(url, this.httpOptions)
  }

  getPokemonDetalle(url:string){
  return this.cliente.get<IPokemondetale>(url,this.httpOptions)
  }


}
