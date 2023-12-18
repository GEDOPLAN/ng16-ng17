import { Component } from '@angular/core';
import {MyService} from '../my.service';

@Component({
  selector: 'app-sub01',
  standalone: true,
  imports: [],
  templateUrl: './sub01.component.html',
  styleUrl: './sub01.component.scss'
})
export class Sub01Component {
  constructor(public myService:MyService) {

  }
}
