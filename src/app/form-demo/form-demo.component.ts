import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Address, CustomerType} from './form-model';
import {CommonModule} from '@angular/common';
import {CustomerTypeSelectorComponent} from './customer-type-selector/customer-type-selector.component';
import {CustomerNumberComponent} from './customer-number/customer-number.component';
import {CustomerNumberVVComponent} from './customer-number-v-v/customer-number.component';

@Component({
  selector: 'app-form-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CustomerTypeSelectorComponent, CustomerNumberComponent, CustomerNumberVVComponent],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.scss'
})
export class FormDemoComponent {

  form: FormGroup;
  savedValue: any = null;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      type: fb.control<CustomerType | null>(null, Validators.required),
      number: fb.control<CustomerType | null>(null, [Validators.required, Validators.minLength(5)]),
      address: fb.control<Address | null>(null)
    })
  }
}


