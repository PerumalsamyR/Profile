import { trigger, state, style, animate, transition } from '@angular/animations';

export const flyinfromLeftAnimation = trigger('flyinfromLeftAnimation', [
  state('in', style({ opacity: 1, transform: 'translateX(0)' })),
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    animate('0.5s ease-in')
  ]),
  transition('* => void', [
    animate('0.5s 0.1s ease-out', style({
      opacity: 0,
      transform: 'translateX(100%)'
    }))
  ])
]);
