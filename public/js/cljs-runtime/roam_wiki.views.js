goog.provide('roam_wiki.views');
roam_wiki.views.divider = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-2","div.mb-2",-710047800),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 0.5px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(57, 75, 89)",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"20px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"20px"], null)], null)], null);
roam_wiki.views.todo_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
roam_wiki.views.add_task_list_wrapper = (function roam_wiki$views$add_task_list_wrapper(){
return roam_wiki.roam.roam_main().insertBefore(goog.dom.createDom("div",({"class": "roam-wiki-task-list-wrapper rm-article-wrapper rm-spacing--small", "style": "flex: 0 0 auto; margin-top: 50px;", "innerHTML": "<h1>My tasks</h1>"})),roam_wiki.roam.roam_body_main());
});
roam_wiki.views.mount_todo_list_BANG_ = (function roam_wiki$views$mount_todo_list_BANG_(){
if(cljs.core.truth_(document.querySelector(".roam-wiki-task-list-wrapper"))){
return null;
} else {
var wrapper = roam_wiki.views.add_task_list_wrapper();
var todos = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,roam_wiki.roam.user_todos(roam_wiki.roam.current_user_page_name));
cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26573_SHARP_){
return roam_wiki.roam.mount_block_BANG_(p1__26573_SHARP_.id,p1__26573_SHARP_);
}),cljs.core.reset_BANG_(roam_wiki.views.todo_nodes,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26572_SHARP_){
return wrapper.appendChild(p1__26572_SHARP_);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26571_SHARP_){
return goog.dom.createDom("div",({"id": new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(p1__26571_SHARP_), "class": "py-2", "style": "border-bottom: 1px solid rgba(55, 53, 47, 0.09);\n                                                    "}));
}),todos))));

return (window.onhashchange = (function (){
cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26574_SHARP_){
return roam_wiki.roam.unmount_node_BANG_(p1__26574_SHARP_);
}),cljs.core.deref(roam_wiki.views.todo_nodes));

wrapper.remove();

return (window.onhashchange = null);
}));
}
});
roam_wiki.views.main = (function roam_wiki$views$main(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-end.items-center.text-sm.roam-wiki-editing-as","div.flex.justify-end.items-center.text-sm.roam-wiki-editing-as",1895264873),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 20px 5px 20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Editing as: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.roam-wiki-user-name.p-1.mx-1.rounded","a.roam-wiki-user-name.p-1.mx-1.rounded",-1962839948),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),roam_wiki.roam.get_page_url(roam_wiki.roam.current_user_page_uid)], null),roam_wiki.roam.current_user_page_name], null)], null)], null),roam_wiki.views.divider,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.log-button","a.log-button",-1307708389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),roam_wiki.roam.get_page_url("IUTjyZyiV")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bp3-icon.bp3-icon-lightbulb.icon.bp3-icon-small","span.bp3-icon.bp3-icon-lightbulb.icon.bp3-icon-small",1742358433)], null),"Dashboard"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.log-button","a.log-button",-1307708389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),roam_wiki.roam.base_url], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bp3-icon.bp3-icon-calendar.icon.bp3-icon-small","span.bp3-icon.bp3-icon-calendar.icon.bp3-icon-small",1742195464)], null),"Daily notes"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.log-button","a.log-button",-1307708389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),roam_wiki.views.mount_todo_list_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bp3-icon.bp3-icon-tick-circle.icon.bp3-icon-small","span.bp3-icon.bp3-icon-tick-circle.icon.bp3-icon-small",1750456375)], null),"My tasks"], null)], null);
});

//# sourceMappingURL=roam_wiki.views.js.map
