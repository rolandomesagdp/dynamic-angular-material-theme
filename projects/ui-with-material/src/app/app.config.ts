import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideMaterialCssVars } from "angular-material-css-vars";
import { MaterialPaletteGenerator } from '../theme-generator/material-palette-generator';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_INITIALIZER, useFactory: MaterialPaletteGenerator.defaultPaletteInitializer, deps: [MaterialPaletteGenerator] },
    MaterialPaletteGenerator,
    provideRouter(routes), 
    provideAnimations(),
    provideMaterialCssVars({
      isAutoContrast: false
    })
  ]
};
