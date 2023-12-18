import {ApplicationConfig, InjectionToken} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';

export const DEMO_TOKEN = new InjectionToken<string>("demo");

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    {provide: DEMO_TOKEN, useValue: 'Hello World'}
  ]
};
