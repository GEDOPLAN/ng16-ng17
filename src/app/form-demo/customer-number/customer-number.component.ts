import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {CustomerType} from '../form-model';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-customer-number',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './customer-number.component.html',
  styleUrl: './customer-number.component.scss',
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => CustomerNumberComponent)},
  ]
})
export class CustomerNumberComponent implements ControlValueAccessor {

  control = new FormControl<number | null>(null);

  constructor() {
    this.control.valueChanges.pipe(takeUntilDestroyed()).subscribe(v => {
      this.onChange(v);
      this.onTouch();
    })
  }

  private onChange: any = () => {
  };
  private onTouch: any = () => {
  };

  registerOnChange(fn: any): void { // "fn" rufen wir bei Änderungen auf
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { // "fn" rufen wir bei "Touch" auf
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void { // wird aufgerufen wenn das control state sich ändert
    if (isDisabled) this.control.disable();
    else this.control.enable();
  }

  writeValue(obj: any): void { // wird aufgerufen wenn sich der control wert ändert
    this.control.patchValue(obj);
  }
}
