import { TestBed, inject } from '@angular/core/testing';

import { EstaLogeadoService } from './esta-logeado.service';

describe('EstaLogeadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstaLogeadoService]
    });
  });

  it('should be created', inject([EstaLogeadoService], (service: EstaLogeadoService) => {
    expect(service).toBeTruthy();
  }));
});
