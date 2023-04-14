import { TestBed } from '@angular/core/testing';

import { CadatroService } from './cadastro.service';

describe('CadatroService', () => {
  let service: CadatroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadatroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
