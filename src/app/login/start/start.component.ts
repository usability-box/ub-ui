import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/shared/animations/login-animations';

@Component({
  selector: 'ub-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  animations: [
    slideInAnimation,
    trigger('inOut', [
      state('in', style({
        opacity: 1
      })),
      transition('void => in', [
        animate('1s 0s ease-in',
          keyframes([
            style({
              opacity: 0,
              offset: 0
            }),
            style({
              opacity: 0.5,
              offset: 0.4
            }),
            style({
              opacity: 0.8,
              offset: 0.8
            }),
            style({
              opacity: 1,
              offset: 1
            }),
          ]))
      ])
    ])
  ]
})
export class StartComponent implements OnInit {

  inOut = true;

  constructor() { }

  ngOnInit() { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
