import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsTableComponent } from './ads-table.component';

describe('AdsTableComponent', () => {
  let component: AdsTableComponent;
  let fixture: ComponentFixture<AdsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
