import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveTemplateComponent } from './reactive-template.component';

describe('ReactiveTemplateComponent', () => {
  let component: ReactiveTemplateComponent;
  let fixture: ComponentFixture<ReactiveTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
