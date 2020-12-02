import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanqueriaProductsComponent } from './blanqueria-products.component';

describe('BlanqueriaProductsComponent', () => {
  let component: BlanqueriaProductsComponent;
  let fixture: ComponentFixture<BlanqueriaProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlanqueriaProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlanqueriaProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
