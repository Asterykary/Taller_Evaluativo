import { TestBed } from '@angular/core/testing';

import { VillanosService } from './villanos.service';

describe('VillanosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VillanosService = TestBed.get(VillanosService);
    expect(service).toBeTruthy();
  });
});
