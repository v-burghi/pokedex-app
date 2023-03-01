import { Component, Injectable, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { DexService } from '../../services/dex.service';
import { Pokemon, Results } from 'src/app/models/pokemon.model';
import { types } from 'src/app/common/types';



@Component({
  selector: 'app-no-prime-dex',
  templateUrl: './no-prime-dex.component.html',
  styleUrls: ['./no-prime-dex.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class NoPrimeDexComponent implements OnInit {

  results: Results = {results:[]};
  pokemonList: Pokemon[] = []
  unfilteredPokemonList: Pokemon[] = []
  unsortedPokemonList: Pokemon[] = []
  availableTypes: any[] = types
  faHeart = faHeart


  constructor (
    private dexService: DexService
  ) {}

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
      this.unfilteredPokemonList = this.pokemonList
      console.log(response)
    })
  }

  filterFavorite (event:any) {
    if (event.target.checked) {
      this.pokemonList = this.unfilteredPokemonList.filter(pokemon => pokemon.isFavorite)
    } else {
      this.pokemonList = this.unfilteredPokemonList
    }
  }

  filter (name:string, field:string) {
    if(name) {
      this.pokemonList = this.unfilteredPokemonList.filter(pokemon => (pokemon as any)[field].includes(name))
    } else {
      this.pokemonList = this.unfilteredPokemonList
    }
  }

  sort (order:string, field:string) {
    let unsortedList = this.pokemonList
    if (order === '') {this.pokemonList = unsortedList}
    if (order === 'asc') {
      this.pokemonList = unsortedList.sort((a,b) => {
        if((a as any)[field] > (b as any)[field]) {
          return 1
        }
        if ((a as any)[field] < (b as any)[field]) {
          return -1
        }
        return 0
      })
    } 
    if (order === 'desc') {
      this.pokemonList = unsortedList.sort((a,b) => {
        if((a as any)[field] < (b as any)[field]) {
          return 1
        }
        if ((a as any)[field] > (b as any)[field]) {
          return -1
        }
        return 0
      })
    }
  }
}
