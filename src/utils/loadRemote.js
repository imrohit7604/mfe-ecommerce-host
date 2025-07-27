// utils/loadRemote.js
export async function loadRemote(name, url, scope, module) {
  if (!window[scope]) {
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.type = 'text/javascript';
      script.async = true;

      script.onload = () => {
        resolve();
      };
      script.onerror = () => {
        reject(new Error(`Failed to load remote: ${url}`));
      };

      document.head.appendChild(script);
    });

    await __webpack_init_sharing__('default');
    await window[scope].init(__webpack_share_scopes__.default);
  }

  const factory = await window[scope].get(module);
  return factory();
}
