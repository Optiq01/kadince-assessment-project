import {trigger, animate, keyframes, transition, style} from '@angular/animations';

export const todoFormAnimation = trigger('todoFormAnimation', [
    transition('void => *', [
        animate('200ms', keyframes([
            style({
                opacity: 1,
                transform: 'translate(0px, -100vh)',
                offset: 0
            }),
            style({
                transform: 'translate(0px, 0px)',
                offset: 1
            })
        ]))
    ]),
    transition('* => void', [
        animate('200ms', keyframes([
            style({
                opacity: 1,
                transform: 'translate(0px, 0px)',
                offset: 0
            }),
            style({
                transform: 'translate(0px, -100vh)',
                offset: 1
            })
        ]))
    ])
])