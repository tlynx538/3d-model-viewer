import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUploadComponent } from './sidebar-upload.component';

describe('SidebarUploadComponent', () => {
  let component: SidebarUploadComponent;
  let fixture: ComponentFixture<SidebarUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
