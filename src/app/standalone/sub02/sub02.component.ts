import { Component } from '@angular/core';
import {MyService} from '../my.service';

@Component({
  selector: 'app-sub02',
  standalone: true,
  imports: [],
  providers: [MyService],
  templateUrl: './sub02.component.html',
  styleUrl: './sub02.component.scss'
})
export class Sub02Component {
  constructor(public myService:MyService) {

  }
}
