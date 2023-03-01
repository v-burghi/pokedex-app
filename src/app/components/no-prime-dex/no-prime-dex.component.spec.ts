import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Pokemon, Results } from 'src/app/models/pokemon.model';
import { DexService } from 'src/app/services/dex.service';

import { NoPrimeDexComponent } from './no-prime-dex.component';

describe('NoPrimeDexComponent', () => {
  let component: NoPrimeDexComponent;
  let fixture: ComponentFixture<NoPrimeDexComponent>;
  let service: DexService;


  let mockResponse:Results = {results: [
    {
      attack : 49,
      defense : 49,
      evolution : null,
      hp : 45,
      name : 'Bulbasaur',
      national_number : '001',
      sp_atk : 65,
      sp_def : 65,
      speed : 45,
      sprites : {
        normal : 'test',
        large: 'test',
        animated: 'test'
      },
      total : 318,
      type : ['Grass', 'Poison']
    }
  ]}

  let mock:Pokemon[] = [
    {
      attack : 49,
      defense : 49,
      evolution : null,
      hp : 45,
      name : "Bulbasaur",
      national_number : "001",
      sp_atk : 65,
      sp_def : 65,
      speed : 45,
      sprites : {
        normal : "test",
        large: 'test',
        animated: 'test'
      },
      total : 318,
      type : ["Grass", "Poison"],
      isFavorite: true
    },
    {
      attack : 49,
      defense : 49,
      evolution : null,
      hp : 45,
      name : "Venusaur",
      national_number : "002",
      sp_atk : 65,
      sp_def : 65,
      speed : 45,
      sprites : {
        normal : "test",
        large: 'test',
        animated: 'test'
      },
      total : 318,
      type : ["Grass", "Poison"]
    }
  ]

  let flippedMock:Pokemon[] = [
    {
      attack : 49,
      defense : 49,
      evolution : null,
      hp : 45,
      name : "Venusaur",
      national_number : "002",
      sp_atk : 65,
      sp_def : 65,
      speed : 45,
      sprites : {
        normal : "test",
        large: 'test',
        animated: 'test'
      },
      total : 318,
      type : ["Grass", "Poison"],
    },
    {
      attack : 49,
      defense : 49,
      evolution : null,
      hp : 45,
      name : "Bulbasaur",
      national_number : "001",
      sp_atk : 65,
      sp_def : 65,
      speed : 45,
      sprites : {
        normal : "test",
        large: 'test',
        animated: 'test'
      },
      total : 318,
      type : ["Grass", "Poison"]
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ NoPrimeDexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPrimeDexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(DexService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should onInit', () => {
    spyOn(component, 'getPokemonList');
    component.ngOnInit();
    expect(component.getPokemonList).toHaveBeenCalled();
  })

  it('should filter', () => {
    let result: Pokemon[] = [{
      attack : 49,
      defense : 49,
      evolution : null,
      hp : 45,
      name : "Bulbasaur",
      national_number : "001",
      sp_atk : 65,
      sp_def : 65,
      speed : 45,
      sprites : {
        normal : "test",
        large: 'test',
        animated: 'test'
      },
      total : 318,
      type : ["Grass", "Poison"],
      isFavorite: true
    }]
    component.unfilteredPokemonList = mock;
    component.filter('001', 'national_number');

    expect(component.pokemonList).toEqual(result)
  })

  it('should not filter', () => {
    component.unfilteredPokemonList = mock;
    component.filter('', 'national_number');

    expect(component.pokemonList).toEqual(mock)
  })

  it('should filter favorite', () => {
    let result: Pokemon[] = [{
      attack : 49,
      defense : 49,
      evolution : null,
      hp : 45,
      name : "Bulbasaur",
      national_number : "001",
      sp_atk : 65,
      sp_def : 65,
      speed : 45,
      sprites : {
        normal : "test",
        large: 'test',
        animated: 'test'
      },
      total : 318,
      type : ["Grass", "Poison"],
      isFavorite: true
    }]
    component.unfilteredPokemonList = mock;
    let event = {target:{checked:true}}

    component.filterFavorite(event)

    expect(component.pokemonList).toEqual(result)


  })

  it('should not filter Favorite', () => {
    component.unfilteredPokemonList = mock;
    let event = {target:{checked:false}}
    
    component.filterFavorite(event)

    expect(component.pokemonList).toEqual(mock)
  })

  it('should sort by ascending', () => {
    component.pokemonList = mock;
    component.sort('asc', 'national_number');

    expect(component.pokemonList).toEqual(mock)
  })

  it('should sort by ascending flipped', () => {
    component.pokemonList = flippedMock;
    component.sort('asc', 'national_number');

    expect(component.pokemonList).toEqual(flippedMock)
  })

  it('should sort with no args', () => {
    component.pokemonList = mock;
    component.sort('', 'national_number');

    expect(component.pokemonList).toEqual(mock)
  })

  it('should sort by descending', () => {
    component.pokemonList = mock;
    component.sort('desc', 'national_number');

    expect(component.pokemonList).toEqual(mock)
  })

  it('should sort by descending flipped', () => {
    component.pokemonList = flippedMock;
    component.sort('desc', 'national_number');

    expect(component.pokemonList).toEqual(flippedMock)
  })

  it ('shoud get pokemon list', fakeAsync(() => {
    const spy = spyOn(service, 'getPokemonList').and.callThrough()

    const subSpy = spyOn(service.getPokemonList(), 'subscribe')
    component.getPokemonList();
    tick();
    expect (component.results).toBeDefined()
    expect (spy).toHaveBeenCalled();
  }))
});
