export interface IWindow extends Window {
  __lc: {
    hostname?: string;
    chat_absolute_url?: string;
    license?: number;
    lc4?: boolean;
  };
  LC_tasks: any[];
}
