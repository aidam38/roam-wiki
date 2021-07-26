goog.provide('roam_wiki.core');
roam_wiki.core.mount_custom_sidebar_wrapper = (function roam_wiki$core$mount_custom_sidebar_wrapper(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [roam_wiki.views.main], null),roam_wiki.roam.custom_sidebar_wrapper);
});
roam_wiki.core.init = (function roam_wiki$core$init(){
roam_wiki.roam.clear_left_sidebar_BANG_();

roam_wiki.roam.insert_custom_sidebar_wrapper_BANG_();

return roam_wiki.core.mount_custom_sidebar_wrapper();
});

//# sourceMappingURL=roam_wiki.core.js.map
