// polyfills
import 'es6-shim';
import 'reflect-metadata';

import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

// dependencies
import 'rxjs/Rx';

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {LiveChat} from './lib/livechat';

@Component({
  selector: 'app',
  directives: [LiveChat],
  template: `
    <livechat
      [license]="007"
      [lc4]="true"
    ></livechat>
  `
})
class App {}

document.addEventListener('DOMContentLoaded', () => {
  bootstrap(App);
});
