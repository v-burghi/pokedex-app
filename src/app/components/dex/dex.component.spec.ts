import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { PrimengModule } from 'src/app/common/primeng.module';
import { Results } from 'src/app/models/pokemon.model';

import { DexService } from 'src/app/services/dex.service';
import { DexComponent } from './dex.component';

describe('DexComponent', () => {
  let component: DexComponent;
  let service: DexService;
  let fixture: ComponentFixture<DexComponent>;

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


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, PrimengModule, FormsModule],
      providers: [DexService],
      declarations: [ DexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DexService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should onInit', () => {
    spyOn(component, 'getPokemonList');
    component.ngOnInit();
    expect(component.getPokemonList).toHaveBeenCalled();
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
