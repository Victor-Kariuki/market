import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsListingComponent } from './ads-listing.component';

describe('AdsListingComponent', () => {
  let component: AdsListingComponent;
  let fixture: ComponentFixture<AdsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
