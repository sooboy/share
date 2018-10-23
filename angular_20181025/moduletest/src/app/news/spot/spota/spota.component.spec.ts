import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotaComponent } from './spota.component';

describe('SpotaComponent', () => {
  let component: SpotaComponent;
  let fixture: ComponentFixture<SpotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
