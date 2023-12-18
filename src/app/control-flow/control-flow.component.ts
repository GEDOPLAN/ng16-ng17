import { Component } from '@angular/core';
import {LargeChildComponent} from './large-child/large-child.component';
import {SecondLargeChildComponent} from './second-large-child/second-large-child.component';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [LargeChildComponent, SecondLargeChildComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  show = true;

  users = [
    {id: 1, name: 'U01'},
    {id: 2, name: 'U02'},
    {id: 3, name: 'U03'},
    {id: 4, name: 'U04'},
  ]

  userCount = 3;
}
