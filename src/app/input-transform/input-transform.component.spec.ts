import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTransformComponent } from './input-transform.component';

describe('InputTransformComponent', () => {
  let component: InputTransformComponent;
  let fixture: ComponentFixture<InputTransformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTransformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputTransformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
