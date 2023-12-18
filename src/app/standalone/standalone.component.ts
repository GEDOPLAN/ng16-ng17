import {Component, Inject} from '@angular/core';
import {MyService} from './my.service';
import {Sub02Component} from './sub02/sub02.component';
import {Sub01Component} from './sub01/sub01.component';
import {DEMO_TOKEN} from '../app.config';

export const STANDALONE_SUBS = [
  Sub01Component, Sub02Component
]

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [...STANDALONE_SUBS],
  templateUrl: './standalone.component.html',
  styleUrl: './standalone.component.scss'
})
export class StandaloneComponent {

  constructor(public myService:MyService, @Inject(DEMO_TOKEN) token:string) {
    console.log(token)
  }
}
