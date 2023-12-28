import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input()
  value?: string;

  @Input({transform: (v:string) => v + ' with v16.1.0'})
  valueTransformed?: string;

  @Input({transform: transformValue})
  value2Transformed?: string;

  _oldSchool = '';

  @Input({required: true})
  set oldSchool(v:string){
    this._oldSchool = v.toUpperCase();
  }

  get oldSchool(){
    return this._oldSchool;
  }
}

function transformValue(v: string) {
  return v + ' with v16.1.0';
}
