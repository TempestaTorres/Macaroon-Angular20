import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {NgbActiveModal, NgbActiveOffcanvas} from '@ng-bootstrap/ng-bootstrap';
import {provideHttpClient, withNoXsrfProtection} from '@angular/common/http';
import {McProduct} from './services/mcproduct';
import {ScrollService} from './services/scroll';
import {AddToCartService} from './services/add-to-cart';

export const appConfig: ApplicationConfig = {
  providers: [
    McProduct,
    NgbActiveModal,
    NgbActiveOffcanvas,
    ScrollService,
    AddToCartService,
    provideHttpClient(withNoXsrfProtection()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
