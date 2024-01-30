import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTypeSelectorComponent } from './customer-type-selector.component';

describe('CustomerTypeSelectorComponent', () => {
  let component: CustomerTypeSelectorComponent;
  let fixture: ComponentFixture<CustomerTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerTypeSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
