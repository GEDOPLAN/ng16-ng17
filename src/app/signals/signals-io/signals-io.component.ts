import {
  Component,
  effect,
  EventEmitter,
  Input,
  input,
  OnChanges,
  Output,
  model,
  SimpleChanges,
  ViewChildren,
  QueryList,
  AfterViewInit, viewChildren,
} from '@angular/core';

@Component({
  selector: 'app-signals-io',
  standalone: true,
  imports: [],
  templateUrl: './signals-io.component.html',
  styleUrl: './signals-io.component.scss'
})
export class SignalsIOComponent implements OnChanges, AfterViewInit {

  @Input({alias: 'oi', required: true, transform: (v: string) => v + '!'})
  oldInput!: string;
  signalInput = input.required({alias: 'si', transform: (v: string) => v + '! (better)'});

  @Input()
  oldModelInput?: string;
  @Output()
  oldModelInputChanged = new EventEmitter<string>();
  newModel = model<string>();

  @ViewChildren('out')
  oldSpans?: QueryList<HTMLSpanElement>;
  newSpans = viewChildren<HTMLSpanElement>('out')

  constructor() {
    effect(() => {
      console.log(`NewStyleSignalChanged to ${this.signalInput()}`)
    });

    effect(() => {
      console.log("OldSchool: Found spans: " + this.newSpans().length)
    });

    setTimeout(() => {
      this.oldModelInputChanged.emit("new value...");
      this.newModel.set("new value...");
    }, 2000)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['oldInput']) {
      console.log(`OldStyleSignalChanged to ${this.oldInput}`);
    }
  }

  ngAfterViewInit() {
    console.log("OldSchool: Found spans: " + this.oldSpans?.length)
  }
}
