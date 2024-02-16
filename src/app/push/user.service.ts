import {Injectable, signal} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface User {
  id: number;
  firstname: string;
  lastname: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = {
    id: 0,
    firstname: 'first',
    lastname: 'last',
  }
  cUserSignal = signal({
    id: 0,
    firstname: 'first',
    lastname: 'last',
  });
  cUserObs = new BehaviorSubject({
    id: 0,
    firstname: 'first',
    lastname: 'last',
  });

  constructor(private http: HttpClient) {
  }

  update() {
    this.user.id++;
    this.cUserSignal.update(u => {
      u.id++;
      return u;
    })

    const currentObsUser = this.cUserObs.value;
    currentObsUser.id++;
    this.cUserObs.next(currentObsUser);
  }

  load() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
