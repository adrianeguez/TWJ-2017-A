import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina21Component } from './pagina21.component';

describe('Pagina21Component', () => {
  let component: Pagina21Component;
  let fixture: ComponentFixture<Pagina21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
