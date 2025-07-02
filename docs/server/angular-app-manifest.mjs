
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2241, hash: 'c6af3cc6cb1b913d2fdf31ea7ab3937ee7db0002ba04f1dd1a96f8db7d7a7602', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: 'c6990375afc8b8ac260eef30b673a7cef34701241fc5709ad7fc27933f14f2fb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-RNQXQHUS.css': {size: 19228, hash: 'jXfGeaLgJmE', text: () => import('./assets-chunks/styles-RNQXQHUS_css.mjs').then(m => m.default)}
  },
};
