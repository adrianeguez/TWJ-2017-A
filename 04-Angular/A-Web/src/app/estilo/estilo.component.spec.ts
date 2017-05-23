import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstiloComponent } from './estilo.component';

describe('EstiloComponent', () => {
  let component: EstiloComponent;
  let fixture: ComponentFixture<EstiloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
