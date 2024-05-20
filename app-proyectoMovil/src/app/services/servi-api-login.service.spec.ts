import { TestBed } from '@angular/core/testing';

import { ServiApiLoginService } from './servi-api-login.service';

describe('ServiApiLoginService', () => {
  let service: ServiApiLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiApiLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
