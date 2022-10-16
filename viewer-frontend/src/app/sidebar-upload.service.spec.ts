import { TestBed } from '@angular/core/testing';

import { SidebarUploadService } from './sidebar-upload.service';

describe('SidebarUploadService', () => {
  let service: SidebarUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
