import {Input, Directive} from 'angular2/core';

import {IWindow} from './window.interface';

@Directive({
  selector: 'livechat'
})
export class LiveChat {
  @Input() public license: number;
  @Input() public lc4: boolean = true;
  @Input() public hostname: string = 'secure-labs.livechatinc.com';
  @Input() public chatAbsoluteUrl: string = 'https://lc4.labs.livechatinc.com/open_chat.html';

  private window: IWindow = <IWindow>window;

  ngOnInit() {
    this.window.__lc = this.window.__lc || {};
    this.window.__lc.license = this.license;
    this.window.__lc.lc4 = this.lc4;
    this.window.__lc.hostname = this.hostname;
    this.window.__lc.chat_absolute_url = this.chatAbsoluteUrl;

    (function() {
      var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
      lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'lc4.labs.livechatinc.com/tracking.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
    })();
  }
}
