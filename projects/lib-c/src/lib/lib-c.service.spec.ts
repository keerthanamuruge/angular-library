import { TestBed } from '@angular/core/testing';

import { LibCService } from './lib-c.service';

describe('LibCService', () => {
  let service: LibCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
