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

export const taskItemAnimation = trigger('taskItemAnimation', [
    transition('void => *', [
        animate('222ms', keyframes([
            style({
                opacity: 0,
                transform: 'translate(0px, -100px)',
                zIndex: 0,
                offset: 0
            }),
            style({
                opacity: 1,
                transform: 'translate(0px, 22px)',
                zIndex: 5,
                offset: .6
            }),
            style({
                transform: 'translate(0px, -11px)',
                offset: .8
            }),
            style({
                transform: 'translate(0px, 0px)',
                offset: 1

            })
        ]))
    ]),
    transition('* => void', [
        animate('555ms', keyframes([
            style({
                opacity: 1,
                transform: 'translate(0px, 0px)',
                offset: 0
            }),
            style({
                opactiy: 1,
                transform: 'translate(22px, 0px)',
                offset: .5
            }),
            style({
                opacity: 0,
                transform: 'translate(-120px, 0px)',
                offset: 1
            })
        ]))
    ])
])

export const todoDetailAnimation = trigger('todoDetailAnimation', [
    transition('void => *', [
        animate('300ms', keyframes([
            style({
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
        animate('2ms', keyframes([
            style({
                opacity: 1,
                offset: 0
            }),
            style({
                opacity: 0,
                offset: 1
            })
        ]))
    ]),
])

export const deleteTodoAnimation = trigger('deleteTodoAnimation', [
    transition('* => void', [
        animate('300ms', keyframes([
            style({
                opacity: 1,
                transform: 'scale(1)',
                offset: 0
            }),
            style({
                opacity: 0,
                transform: 'scale(0)',
                offset: 1
            })
        ]))
    ])
])