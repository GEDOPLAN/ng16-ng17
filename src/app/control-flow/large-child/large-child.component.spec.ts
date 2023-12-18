import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeChildComponent } from './large-child.component';

describe('LargeChildComponent', () => {
  let component: LargeChildComponent;
  let fixture: ComponentFixture<LargeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
