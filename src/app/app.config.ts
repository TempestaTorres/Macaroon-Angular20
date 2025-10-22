import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {NgbActiveModal, NgbActiveOffcanvas} from '@ng-bootstrap/ng-bootstrap';
import {provideHttpClient, withNoXsrfProtection} from '@angular/common/http';
import {McProduct} from './services/mcproduct';

export const appConfig: ApplicationConfig = {
  providers: [
    McProduct,
    NgbActiveModal,
    provideHttpClient(withNoXsrfProtection()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
export const headerConfig: ApplicationConfig = {
  providers: [
    NgbActiveOffcanvas,
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
export const footerConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
  ]
};
