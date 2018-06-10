import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticProductsComponent } from './plastic-products.component';

describe('PlasticProductsComponent', () => {
  let component: PlasticProductsComponent;
  let fixture: ComponentFixture<PlasticProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlasticProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasticProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
