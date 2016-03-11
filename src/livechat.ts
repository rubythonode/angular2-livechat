import {Input, Directive} from 'angular2/core';

import {IWindow} from './window.interface';

@Directive({
  selector: 'livechat'
})
export class LiveChat {
  @Input() public license: number;

  private window: IWindow = <IWindow>window;

  ngOnInit() {
    this.window.__lc = this.window.__lc || {};
    this.window.__lc.license = this.license;

    (function() {
      var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
      lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/labs/tracking.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
    })();
  }
}
