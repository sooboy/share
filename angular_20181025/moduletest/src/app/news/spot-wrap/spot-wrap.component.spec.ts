import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotWrapComponent } from './spot-wrap.component';

describe('SpotWrapComponent', () => {
  let component: SpotWrapComponent;
  let fixture: ComponentFixture<SpotWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
