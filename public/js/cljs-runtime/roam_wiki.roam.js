goog.provide('roam_wiki.roam');
roam_wiki.roam.url = window.location.href;
console.log(roam_wiki.roam.url);
roam_wiki.roam.graph_name = (function (){var tail = cljs.core.last(cljs.core.re_find(/(#\/app\/)(.+)/,roam_wiki.roam.url));
if(clojure.string.includes_QMARK_(tail,"/")){
return cljs.core.last(cljs.core.re_find(/^(.*?)\//,tail));
} else {
return tail;
}
})();
roam_wiki.roam.base_url = (function (){var head = cljs.core.last(cljs.core.re_find(/(.*)#/,roam_wiki.roam.url));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),"#/app/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(roam_wiki.roam.graph_name)].join('');
})();
roam_wiki.roam.base_page_url = [roam_wiki.roam.base_url,"/page/"].join('');
roam_wiki.roam.current_user_email = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(JSON.parse(localStorage.getItem("globalAppState")),(6)),(2));
roam_wiki.roam.api = roamAlphaAPI;
roam_wiki.roam.q = (function roam_wiki$roam$q(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28497 = arguments.length;
var i__4819__auto___28498 = (0);
while(true){
if((i__4819__auto___28498 < len__4818__auto___28497)){
args__4824__auto__.push((arguments[i__4819__auto___28498]));

var G__28499 = (i__4819__auto___28498 + (1));
i__4819__auto___28498 = G__28499;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return roam_wiki.roam.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(roam_wiki.roam.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,o){
var args = cljs.core.cons(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q], 0)),/\n/," "),o);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(roam_wiki.roam.api.data.q,args);
}));

(roam_wiki.roam.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(roam_wiki.roam.q.cljs$lang$applyTo = (function (seq28494){
var G__28495 = cljs.core.first(seq28494);
var seq28494__$1 = cljs.core.next(seq28494);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28495,seq28494__$1);
}));

roam_wiki.roam.query = (function roam_wiki$roam$query(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28500 = arguments.length;
var i__4819__auto___28501 = (0);
while(true){
if((i__4819__auto___28501 < len__4818__auto___28500)){
args__4824__auto__.push((arguments[i__4819__auto___28501]));

var G__28502 = (i__4819__auto___28501 + (1));
i__4819__auto___28501 = G__28502;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return roam_wiki.roam.query.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(roam_wiki.roam.query.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(roam_wiki.roam.q,args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));

(roam_wiki.roam.query.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(roam_wiki.roam.query.cljs$lang$applyTo = (function (seq28496){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28496));
}));

roam_wiki.roam.current_user_page = cljs.core.first(cljs.core.first(roam_wiki.roam.query.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"email","email",-1238619063,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?b","?b",1575118075,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ep","?ep",-340206877,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ep","?ep",-340206877,null),new cljs.core.Keyword("node","title","node/title",628940777),"email"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?bs","?bs",-1614233387,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.string","includes?","clojure.string/includes?",-1842146260,null),new cljs.core.Symbol(null,"?bs","?bs",-1614233387,null),new cljs.core.Symbol(null,"email","email",-1238619063,null))], null)], null),roam_wiki.roam.current_user_email], 0))));
roam_wiki.roam.current_user_page_uid = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(roam_wiki.roam.current_user_page);
roam_wiki.roam.current_user_page_name = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(roam_wiki.roam.current_user_page);
roam_wiki.roam.get_page_url = (function roam_wiki$roam$get_page_url(uid){
return [roam_wiki.roam.base_page_url,cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join('');
});
roam_wiki.roam.left_sidebar = document.querySelector(".roam-sidebar-content");
roam_wiki.roam.left_sidebar_top_row = document.querySelector(".top-row");
roam_wiki.roam.custom_sidebar_wrapper = goog.dom.createDom("div",({"id": "roam-wiki-sidebar"}));
roam_wiki.roam.insert_custom_sidebar_wrapper_BANG_ = (function roam_wiki$roam$insert_custom_sidebar_wrapper_BANG_(){
return roam_wiki.roam.left_sidebar.insertBefore(roam_wiki.roam.custom_sidebar_wrapper,roam_wiki.roam.left_sidebar_top_row.nextSibling);
});
roam_wiki.roam.clear_left_sidebar_BANG_ = (function roam_wiki$roam$clear_left_sidebar_BANG_(){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,document.querySelectorAll(".log-button"));
});
roam_wiki.roam.roam_main = (function roam_wiki$roam$roam_main(){
return document.querySelector(".roam-main");
});
roam_wiki.roam.roam_body_main = (function roam_wiki$roam$roam_body_main(){
return document.querySelector(".roam-body-main");
});
roam_wiki.roam.clear_body_main = (function roam_wiki$roam$clear_body_main(){
return goog.dom.removeChildren(roam_wiki.roam.roam_body_main());
});
roam_wiki.roam.user_todos = (function roam_wiki$roam$user_todos(name){
return roam_wiki.roam.query.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?n","?n",-2053238410,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?np","?np",866570450,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?tp","?tp",-978615235,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?np","?np",866570450,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?n","?n",-2053238410,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tp","?tp",-978615235,null),new cljs.core.Keyword("node","title","node/title",628940777),"TODO"], null)], null),name], 0));
});
roam_wiki.roam.mount_block_BANG_ = (function roam_wiki$roam$mount_block_BANG_(uid,node){
return roam_wiki.roam.api.ui.components.renderBlock(({"uid": uid, "el": node}));
});
roam_wiki.roam.unmount_node_BANG_ = (function roam_wiki$roam$unmount_node_BANG_(node){
console.log("unmounting");

return roam_wiki.roam.api.ui.components.unmountNode(({"el": node}));
});

//# sourceMappingURL=roam_wiki.roam.js.map
