import {Component, Input} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-demo-application',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './demo-application.component.html',
  styleUrl: './demo-application.component.scss'
})
export class DemoApplicationComponent {

  @Input({required: true, transform: (links:any[]) => links.map((l:string|Link) => typeof l==='string'?{url: l, label: l}:l as Link)})
  links: Link[] = [];

  @Input()
  titleText = '';
}

export interface Link {
  url: string,
  label: string
}
