import { Component, Input,OnInit } from '@angular/core';
import { IPOkemonlist } from '../Interfaces/IPokemonlist';
import { PokeApiService } from '../poke-api.service';
@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  @Input() public Pokemonlist?:IPOkemonlist
  public Pokemon?:IPOkemonlist
  public cargando:boolean=true

  constructor(private PokeApi:PokeApiService){}

  ngOnInit(): void {
    this.cargando=true
    //this.PokeApi.getPokemonDetalle(this.Pokemonlist?.url || '').subscribe(Pokemon=>{this.Pokemon = Pokemon this.cargando=false})
  }
}
