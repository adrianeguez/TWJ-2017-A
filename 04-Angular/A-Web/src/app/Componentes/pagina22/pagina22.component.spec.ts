import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina22Component } from './pagina22.component';

describe('Pagina22Component', () => {
  let component: Pagina22Component;
  let fixture: ComponentFixture<Pagina22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
