import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const fadeInAnimation =
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
  ]);
