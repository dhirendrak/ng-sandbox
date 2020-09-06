import { MediaMatcher } from '@angular/cdk/layout';
import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {
  themes = ['dark-theme', 'light-theme'];
  theme = new BehaviorSubject('light-theme');

  constructor(private ref: ApplicationRef, private mediaMatcher: MediaMatcher) {
    const darkModeOn = this.mediaMatcher.matchMedia('(prefers-color-scheme: dark)').matches;

    if (darkModeOn) {
      this.theme.next('dark-theme');
    }

    this.mediaMatcher.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
      const turnOn = e.matches;
      this.theme.next(turnOn ? 'dark-theme' : 'light-theme');

      this.ref.tick();
    });
  }
}
