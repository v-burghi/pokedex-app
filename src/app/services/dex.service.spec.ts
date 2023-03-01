import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { DexService } from './dex.service';
import { Observable } from 'rxjs';
import { Results } from '../models/pokemon.model';

describe('DexService', () => {
  let service: DexService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [DexService]
    });
    service = TestBed.inject(DexService);
  });

  it(
    'should get Pokemon',
    inject(
      [HttpTestingController, DexService],
      (httpMock: HttpTestingController, dexService: DexService) => {
        dexService.getPokemonList().subscribe((response: Results) => {
              expect(response).not.toBeDefined();     
        });

        const mockReq = httpMock.expectOne(dexService.url);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        httpMock.verify();
      }
    )
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
