import { TestBed } from '@angular/core/testing';

import { ServiApiCreaUserService } from './servi-api-crea-user.service';

describe('ServiApiCreaUserService', () => {
  let service: ServiApiCreaUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiApiCreaUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
