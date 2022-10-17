import { TestBed } from '@angular/core/testing';

import { GetFileDetailsService } from './get-file-details.service';

describe('GetFileDetailsService', () => {
  let service: GetFileDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFileDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
