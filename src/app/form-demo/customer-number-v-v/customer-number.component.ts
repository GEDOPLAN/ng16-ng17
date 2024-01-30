import {Component, forwardRef} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule, ValidationErrors, Validator,
  Validators
} from '@angular/forms';
import {CustomerType} from '../form-model';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-customer-number-v-v',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './customer-number.component.html',
  styleUrl: './customer-number.component.scss',
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => CustomerNumberVVComponent)},
    {provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => CustomerNumberVVComponent)},
  ]
})
export class CustomerNumberVVComponent implements ControlValueAccessor, Validator {

  control = new FormControl<number | null>(null);

  constructor() {
    this.control.valueChanges.pipe(takeUntilDestroyed()).subscribe(v => {
      this.onChange(v);
      this.onTouch();
    })
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return (!value || value.startsWith('600')) ? null : {'customerNumber': 'have to start with 600'}
  }

  private onChange: any = () => {
  };
  private onTouch: any = () => {
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) this.control.disable();
    else this.control.enable();
  }

  writeValue(obj: any): void {
    this.control.patchValue(obj);
  }
}
