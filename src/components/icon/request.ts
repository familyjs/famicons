import { validateContent } from './validate';


export const famiconContent = new Map<string, string>();
const requests = new Map<string, Promise<any>>();


export const getSvgContent = (url: string) => {
  // see if we already have a request for this url
  let req = requests.get(url);

  if (!req) {
    if (typeof fetch !== 'undefined') {
      // we don't already have a request
      req = fetch(url).then(rsp => {
        if (rsp.ok) {
          return rsp.text().then(svgContent => {
            famiconContent.set(url, validateContent(svgContent));
          });
        }
        famiconContent.set(url, '');
      });

      // cache for the same requests
      requests.set(url, req);
    } else {
      // set to empty for ssr scenarios and resolve promise
      famiconContent.set(url, '');
      return Promise.resolve();
    }
  }

  return req;
};
