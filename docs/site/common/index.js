import sixtyConfig from "../sixty.config";
export const { nav } = sixtyConfig.site;

export function iframeReady(iframe, callback) {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  const interval = () => {
    if (iframe.contentWindow.replacePath) {
      callback();
    } else {
      setTimeout(() => {
        interval();
      }, 50);
    }
  };

  if (doc.readyState === "complete") {
    interval();
  } else {
    iframe.onload = interval;
  }
}

const ua = navigator.userAgent.toLowerCase();
export const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);

// export function decamelize(str, sep = '-') {
//     return str
//         .replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
//         .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
//         .toLowerCase();
// }

export function importAll(map, r) {
  r.keys().forEach((key) => {
    map[key] = r(key);
  });
}
