import platform from 'platform';
export const GA_TRACKING_ID = 'G-QHS95VKLJD'; // Replace with your tracking ID

// 声明 gtag 类型
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// 跟踪特定事件
interface GtagEvent {
  action: string;
  args?: object
}

export const event = (action:string, args?: object) => {
  window.gtag('event', action, {
    user_id:'',
    timestamp: new Date(),
    event_category: action,
    client_type: platform.product,
    user_ip:'',
    ...args
  });
};
