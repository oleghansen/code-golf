import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
trigger('routeAnimations', [
  transition('RegisterScorePage => *', [
       query(':enter, :leave',
            style({ position: 'fixed', width: '100%' }),
            { optional: true }),
       group([
            query(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.5s ease-in-out',
                style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform:   'translateX(0%)'}),
                animate('0.5s ease-in-out',
                style({ transform: 'translateX(100%)' }))
            ], { optional: true }),
       ])
  ]),
  transition('NewTeamPage => *', [
       query(':enter, :leave',
            style({ position: 'fixed',  width: '100%' }),
            { optional: true }),
       group([
            query(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('0.5s ease-in-out',
                style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out',
                style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
        ])
  ]),
  transition('ScoresPage => RegisterScorePage', [
        query(':enter, :leave',
            style({ position: 'fixed', width: '100%' }),
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('0.5s ease-in-out',
                style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out',
                style({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
  ]),
  transition('ScoresPage => NewTeamPage', [
        query(':enter, :leave',
            style({ position: 'fixed', width: '100%' }),
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.5s ease-in-out',
                style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                 style({ transform: 'translateX(0%)' }),
                 animate('0.5s ease-in-out',
                 style({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ]),
      ]),
    ]);
