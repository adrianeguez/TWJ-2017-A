import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaStarWarsComponent } from './planeta-star-wars.component';

describe('PlanetaStarWarsComponent', () => {
  let component: PlanetaStarWarsComponent;
  let fixture: ComponentFixture<PlanetaStarWarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetaStarWarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetaStarWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
