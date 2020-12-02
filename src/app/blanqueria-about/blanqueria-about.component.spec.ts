import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanqueriaAboutComponent } from './blanqueria-about.component';

describe('BlanqueriaAboutComponent', () => {
  let component: BlanqueriaAboutComponent;
  let fixture: ComponentFixture<BlanqueriaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlanqueriaAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlanqueriaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
