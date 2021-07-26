
shadow.cljs.devtools.client.env.module_loaded('main');

try { roam_wiki.core.init(); } catch (e) { console.error("An error occurred when calling (roam-wiki.core/init)"); throw(e); }