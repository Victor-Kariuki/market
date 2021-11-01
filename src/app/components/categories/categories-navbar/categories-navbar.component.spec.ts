import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesNavbarComponent } from './categories-navbar.component';

describe('CategoriesNavbarComponent', () => {
  let component: CategoriesNavbarComponent;
  let fixture: ComponentFixture<CategoriesNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
