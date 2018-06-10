import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandmadeProductsComponent } from './handmade-products.component';

describe('HandmadeProductsComponent', () => {
  let component: HandmadeProductsComponent;
  let fixture: ComponentFixture<HandmadeProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandmadeProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandmadeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
