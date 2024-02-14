import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, Observable} from 'rxjs';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-reactive-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reactive-template.component.html',
  styleUrl: './reactive-template.component.scss'
})
export class ReactiveTemplateComponent {

  loadUser$: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this.loadUser$ = this.httpClient.get('https://jsonplaceholder.typicode.com/users/1').pipe(
      delay(2000)
    );

    // un-smart:
    // this.httpClient.get('https://jsonplaceholder.typicode.com/users/1').subscribe(user => {
    //   this.user = user;
    // })
  }
}
