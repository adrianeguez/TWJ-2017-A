import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina23Component } from './pagina23.component';

describe('Pagina23Component', () => {
  let component: Pagina23Component;
  let fixture: ComponentFixture<Pagina23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
