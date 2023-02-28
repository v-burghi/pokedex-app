import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Results } from 'src/app/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class DexService {

  constructor(
    private http: HttpClient
  ) { }

  url = 'https://unpkg.com/pokemons@1.1.0/pokemons.json'

  getPokemonList (): Observable<Results> {
    return this.http.get<Results>(this.url)
  }
}
