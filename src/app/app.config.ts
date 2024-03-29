import {ApplicationConfig, InjectionToken} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient} from '@angular/common/http';

export const DEMO_TOKEN = new InjectionToken<string>("demo");

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    {provide: DEMO_TOKEN, useValue: 'Hello World'},
    provideAnimationsAsync(),
    provideHttpClient()
  ]
};
