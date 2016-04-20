# angular2-livechat
Angular2 component to integrate LiveChat with your single-page app

## Install
```
npm install --save angular2-livechat
```

## Usage
```js
import {LiveChat} from 'angular2-livechat';

@Component({
  selector: 'app',
  template: `
    <livechat
      [license]="007"        
    ></livechat>
  `,
  directives: [LiveChat]  
})
class App {}
```
