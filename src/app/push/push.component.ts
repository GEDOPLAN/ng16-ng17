import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ChildComponentComponent} from "./child-component/child-component.component";
import {UserService} from "./user.service";

@Component({
  selector: 'app-push',
  standalone: true,
  imports: [CommonModule, ChildComponentComponent],
  templateUrl: './push.component.html',
  styleUrl: './push.component.scss'
})
export class PushComponent {
  constructor(public dateService: UserService) {
  }

  load() {
    this.dateService.load().subscribe(r => {
      this.dateService.update();
    });
  }
}

