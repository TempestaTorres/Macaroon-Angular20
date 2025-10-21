import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {NgbActiveModal, NgbActiveOffcanvas} from '@ng-bootstrap/ng-bootstrap';
import {provideHttpClient, withNoXsrfProtection} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    NgbActiveModal,
    NgbActiveOffcanvas,
    provideHttpClient(withNoXsrfProtection()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
