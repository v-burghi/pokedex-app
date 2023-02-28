import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPrimeDexComponent } from './no-prime-dex.component';

describe('NoPrimeDexComponent', () => {
  let component: NoPrimeDexComponent;
  let fixture: ComponentFixture<NoPrimeDexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPrimeDexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPrimeDexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
