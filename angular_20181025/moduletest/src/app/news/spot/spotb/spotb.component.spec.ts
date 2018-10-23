import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotbComponent } from './spotb.component';

describe('SpotbComponent', () => {
  let component: SpotbComponent;
  let fixture: ComponentFixture<SpotbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
