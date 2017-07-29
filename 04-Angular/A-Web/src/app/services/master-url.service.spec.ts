import { TestBed, inject } from '@angular/core/testing';

import { MasterUrlService } from './master-url.service';

describe('MasterUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterUrlService]
    });
  });

  it('should be created', inject([MasterUrlService], (service: MasterUrlService) => {
    expect(service).toBeTruthy();
  }));
});
