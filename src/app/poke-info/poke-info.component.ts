import { Component,OnInit } from '@angular/core';
import { IPOkemon } from '../Interfaces/IPokemon';
import { PokeApiService } from '../poke-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-poke-info',
  standalone: true,
  imports: [CommonModule,FormsModule,PokemonComponent],
  templateUrl: './poke-info.component.html',
  styleUrl: './poke-info.component.css'
})
export class PokeInfoComponent {
pokemond?:IPOkemon
cargando:boolean=true
cantidad: number = 2

constructor(private PokeApi:PokeApiService){

  }
ngOnInit():void{
  this.cargandoPokemons()
}
cargandoPokemons(){
  this.cargando = true
   this.PokeApi.getPokemons(this.cantidad).subscribe(pokemond =>{
    this.pokemond = pokemond
    this.cargando = false
   })
 }
}
