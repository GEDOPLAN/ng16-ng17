import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoApplicationComponent} from './demo-application/demo-application.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DemoApplicationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng16';
}
