import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderModelComponent } from './render-model.component';

describe('RenderModelComponent', () => {
  let component: RenderModelComponent;
  let fixture: ComponentFixture<RenderModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
