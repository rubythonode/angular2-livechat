import {Input, Directive} from 'angular2/core';

import {IWindow} from './window.interface';

@Directive({
  selector: 'livechat'
})
export class LiveChat {
  @Input() public license: number;
  @Input() public entityDetails: any;

  private lc4: boolean = true;
  private hostname: string = 'secure-lc.livechatinc.com';
  private chatAbsoluteUrl: string = 'https://cdn.livechatinc.com/livechat4/open_chat.html';

  private window: IWindow = <IWindow>window;

  ngOnInit() {
    this.window.__lc = this.window.__lc || {};
    this.window.__lc.license = this.license;
    this.window.__lc.lc4 = this.lc4;
    this.window.__lc.hostname = this.hostname;
    this.window.__lc.chat_absolute_url = this.chatAbsoluteUrl;

    this.window.LC_tasks = this.window.LC_tasks || [];
    this.window.LC_tasks.push(['entity_details', this.entityDetails]);

    (() => {
      const lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
      lc.src = `${('https:' === document.location.protocol ? 'https://' : 'http://')}cdn.livechatinc.com/livechat4/tracking.js`;
      const s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
    })();
  }
}
