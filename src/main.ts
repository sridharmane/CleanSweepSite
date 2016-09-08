///<reference path="../node_modules/@angular/platform-browser/index.d.ts"/> 
import "zone.js";
import "reflect-metadata";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
