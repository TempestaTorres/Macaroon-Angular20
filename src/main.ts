/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {HeaderComponent} from './app/header.component/header.component';
import {FooterComponent} from './app/footer.component/footer.component';

bootstrapApplication(HeaderComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(FooterComponent, appConfig)
  .catch((err) => console.error(err));
