import { animate, style, transition, trigger } from "@angular/animations";


export const fade = trigger(
  'fade',
  [
    transition(
      ':enter',
      [
        style({ opacity : 0 }),
        animate(100, style({ opacity: 1 }))//1000 = o tempo em segundos
      ]
    ),
    transition(
      ':leave',
      [
        animate(100, style({ opacity: 0 }))
      ]
    )
  ]
);
