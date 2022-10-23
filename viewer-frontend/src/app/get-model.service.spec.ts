import { TestBed } from '@angular/core/testing';

import { GetModelService } from './get-model.service';

describe('GetModelService', () => {
  let service: GetModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
