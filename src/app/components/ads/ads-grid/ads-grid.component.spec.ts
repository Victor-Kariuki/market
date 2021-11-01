import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsGridComponent } from './ads-grid.component';

describe('AdsGridComponent', () => {
  let component: AdsGridComponent;
  let fixture: ComponentFixture<AdsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
