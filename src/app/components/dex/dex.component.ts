import { Component, Injectable, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { DexService } from './dex.service';
import { Pokemon, Results } from 'src/app/models/pokemon.model';


@Component({
  selector: 'app-dex',
  templateUrl: './dex.component.html',
  styleUrls: ['./dex.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class DexComponent implements OnInit {

  cols: any[] = [
    { field: 'sprites.normal', header: 'Imagem' },
    { field: 'name', header: 'Nome' },
    { field: 'national_number', header: 'Registro Nacional' },
    { field: 'type', header: 'Tipo(s)' },
    { field: 'isFavorite', header: 'Favorito'}
  ];

  results: Results = {results:[]};
  pokemonList: Pokemon[] = []
  types = [
    {name: 'Normal', value: 'Normal'},
    {name: 'Fire', value: 'Fire'},
    {name: 'Water', value: 'Water'},
    {name: 'Grass', value: 'Grass'},
    {name: 'Flying', value: 'Flying'},
    {name: 'Fighting', value: 'Fighting'},
    {name: 'Poison', value: 'Poison'},
    {name: 'Electric', value: 'Electric'},
    {name: 'Ground', value: 'Ground'},
    {name: 'Rock', value: 'Rock'},
    {name: 'Psychic', value: 'Psychic'},
    {name: 'Ice', value: 'Ice'},
    {name: 'Bug', value: 'Bug'},
    {name: 'Ghost', value: 'Ghost'},
    {name: 'Steel', value: 'Steel'},
    {name: 'Dragon', value: 'Dragon'},
    {name: 'Dark', value: 'Dark'},
    {name: 'Fairy', value: 'Fairy'},
  ]
  
  constructor (
    private dexService: DexService
    ) { }
    faHeart = faHeart
    
    ngOnInit() {
      this.dexService.getPokemonList().subscribe(response => {
        this.results = response;
        this.pokemonList = this.results.results;
        this.pokemonList.forEach(pokemon => {
          pokemon.isFavorite = false;
        })
        // console.log(this.pokemonList)
      })
    }  

    changeFavorite(event:any) {
      console.log(event)
    }

}
