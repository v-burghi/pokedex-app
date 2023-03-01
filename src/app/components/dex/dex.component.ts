import { Component, Injectable, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { DexService } from '../../services/dex.service';
import { Pokemon, Results } from 'src/app/models/pokemon.model';
import { types } from 'src/app/common/types';


@Component({
  selector: 'app-dex',
  templateUrl: './dex.component.html',
  styleUrls: ['./dex.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class DexComponent implements OnInit {

  results: Results = {results:[]};
  pokemonList: Pokemon[] = []
  availableTypes: any[] = types
  
  constructor (
    private dexService: DexService
    ) { }
    faHeart = faHeart
    
    ngOnInit() {
      this.getPokemonList()
    }  

    getPokemonList() {
      this.dexService.getPokemonList().subscribe(response => {
        this.results = response;
        this.pokemonList = this.results.results;
        this.pokemonList.forEach(pokemon => {
          pokemon.isFavorite = false;
        })
      })
    }

}
