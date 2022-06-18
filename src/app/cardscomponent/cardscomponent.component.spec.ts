import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardscomponentComponent } from './cardscomponent.component';

describe('CardscomponentComponent', () => {
  let component: CardscomponentComponent;
  let fixture: ComponentFixture<CardscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
