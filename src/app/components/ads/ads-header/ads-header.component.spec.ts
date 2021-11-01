import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsHeaderComponent } from './ads-header.component';

describe('AdsHeaderComponent', () => {
  let component: AdsHeaderComponent;
  let fixture: ComponentFixture<AdsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
