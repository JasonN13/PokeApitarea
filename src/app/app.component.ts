import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeApiService } from './poke-api.service';
import { PokeInfoComponent } from './poke-info/poke-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PokeInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'PokeApi';

  constructor(private pokeapi:PokeApiService){

  }

  ngOnInit(): void {
    this.pokeapi.getPokemons(200)
  }
}
