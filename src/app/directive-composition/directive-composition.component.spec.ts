import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveCompositionComponent } from './directive-composition.component';

describe('DirectiveCompositionComponent', () => {
  let component: DirectiveCompositionComponent;
  let fixture: ComponentFixture<DirectiveCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveCompositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectiveCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
