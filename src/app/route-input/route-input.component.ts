import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-route-input',
  standalone: true,
  imports: [],
  templateUrl: './route-input.component.html',
  styleUrl: './route-input.component.scss'
})
export class RouteInputComponent {

  // keep in mind that this feature has to be activated, see src/app/app.config.ts:10

  @Input()
  pathParam?:string;

  @Input()
  query01?: string;

  @Input()
  query02?: number;

  constructor(private router: Router) {
  }

  route() {
    this.router.navigateByUrl('/route-input/path01?query01=abc&query02=123')
  }
}
