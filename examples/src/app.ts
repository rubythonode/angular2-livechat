import 'angular2/bundles/angular2-polyfills';

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {LiveChat} from '../../src/livechat';

@Component({
    selector: 'app',
    directives: [LiveChat],
    template: `
      <livechat
        license="001"        
      ></livechat>
    `
})
class App {}

bootstrap(App);
