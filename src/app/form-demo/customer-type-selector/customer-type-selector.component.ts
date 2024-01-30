import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, ReactiveFormsModule, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CustomerType} from '../form-model';
import {takeUntil} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-customer-type-selector',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './customer-type-selector.component.html',
  styleUrl: './customer-type-selector.component.scss',
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi:true, useExisting: forwardRef(() => CustomerTypeSelectorComponent)}
  ]
})
export class CustomerTypeSelectorComponent implements ControlValueAccessor{

  availableTypes = Object.keys(CustomerType);
  control = new FormControl<CustomerType|null>(null);

  constructor() {
    this.control.valueChanges.pipe(takeUntilDestroyed()).subscribe(v => {
      this.onChange(v);
      this.onTouch();
    })
  }

  private onChange: any = () => {};
  private onTouch: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if(isDisabled) this.control.disable();
    else this.control.enable();
  }

  writeValue(obj: any): void {
    this.control.patchValue(obj);
  }

}
