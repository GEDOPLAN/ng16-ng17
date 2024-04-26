import {Component} from '@angular/core';
import {MatTooltip} from '@angular/material/tooltip';
import {ShowToolTipIfTruncatedDirective} from './show-tool-tip-if-truncated.directive';

@Component({
  selector: 'app-directive-composition',
  standalone: true,
  imports: [MatTooltip, ShowToolTipIfTruncatedDirective],
  hostDirectives: [
    MatTooltip
  ],
  templateUrl: './directive-composition.component.html',
  styleUrl: './directive-composition.component.scss'
})
export class DirectiveCompositionComponent {
  constructor(private matTooltip: MatTooltip) {
    matTooltip.message = 'Component ToolTip'
    matTooltip.disabled = true;
  }

  text = 'lorem ipsum'
}
