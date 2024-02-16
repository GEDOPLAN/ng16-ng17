import {ChangeDetectionStrategy, Component, effect, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {User, UserService} from "../user.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent {

  @Input()
  inputUser?: User;

  @Input()
  withObservableAndAsync = true;

  @Input()
  withObservableWithoutAsync = false;

  @Input()
  withSignal = true;

  @Output()
  someEvent = new EventEmitter<void>();

  userIdByManualObservableSubscription?: number;

  constructor(public dateService: UserService) {


    effect(() => {
      console.log(`signal: ${dateService.cUserSignal()}`)
    });

    dateService.cUserObs.pipe(takeUntilDestroyed()).subscribe(user => {
      this.userIdByManualObservableSubscription = user.id;
      console.log(`observable: ${user}`)
    })
  }
}
