import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {animate, AnimationEvent, group, keyframes, query, stagger, state, style, transition, trigger} from "@angular/animations";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('2s', style({opacity: 1}))
      ])
    ]),
    trigger('in', [
      state('size', style({})), // style final
      transition('void => size', [
        style({transform: 'scale(0.1,0.1)', transformOrigin: 'bottom right'}), // style start animation
        animate('0.35s ease-in-out', style({transform: 'scale(1,1)'})) // target animation style
      ])
    ]),
    trigger('staggerItem', []),
    trigger('staggerItems', [
      transition('* => true', [
        query('@staggerItem', [
          style({transform: 'scale(0.1,0.1)', transformOrigin: 'bottom right', opacity: 0}), // style start animation
          stagger(500, [
            animate('0.5s ease-in-out', style({transform: 'scale(1,1)', opacity: 1})) // target animation style
          ])
        ], {optional: true})
      ])
    ]),
    trigger('rolling', [
      transition('* => true', [
        group([
          animate("5s", style({transform: 'rotate(720deg)'})),
          animate("5s ease-in-out", keyframes([
            style({position: 'absolute', left: '0px', offset: 0}),
            style({left: '200px', offset: 0.19}),
            style({left: '210px', top: '-30px', offset: 0.20}),
            style({left: '220px', top: '-60px', offset: 0.25}),
            style({left: '230px', top: '-90px', offset: 0.3}),
            style({left: '250px', top: '-120px', offset: 0.35}),
            style({left: '270px', top: '-150px', offset: 0.4}),
            style({left: '290px', top: '-120px', offset: 0.45}),
            style({left: '320px', top: '-90px', offset: 0.5}),
            style({left: '350px', top: '-60px', offset: 0.55}),
            style({left: '380px', top: '-30px', offset: 0.6}),
            style({left: '410px', top: '0', offset: 0.65}),
            style({left: '800px', top: '0', offset: 1}),
          ]))
        ]),
      ])
    ]),
    trigger('colorFlip', [
      transition('false => true', [
        animate('3s', keyframes([
          style({backgroundColor: 'red', offset: 0}),
          style({backgroundColor: '*', offset: 0.5}),
        ]))
      ])
    ])
  ]
})
export class AnimationsComponent{
  load = false;
  load2 = false;
  rolling = false;
  animationIn = '';
  rollingFinish = false;


  rollingDone(e: AnimationEvent) {
    console.log(e)
    if (e.toState as any as boolean) {
      this.rollingFinish = true;
    }
    this.rolling = false;
  }
}
