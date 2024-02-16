import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsIOComponent } from './signals-io.component';

describe('SignalsIOComponent', () => {
  let component: SignalsIOComponent;
  let fixture: ComponentFixture<SignalsIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsIOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
