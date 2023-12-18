import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLargeChildComponent } from './second-large-child.component';

describe('SecondLargeChildComponent', () => {
  let component: SecondLargeChildComponent;
  let fixture: ComponentFixture<SecondLargeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondLargeChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondLargeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
