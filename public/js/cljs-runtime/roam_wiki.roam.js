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
roam_wiki.roam.query = (function roam_wiki$roam$query(var_args){
var args__4824__auto__ = [];
var len__4818__auto___26439 = arguments.length;
var i__4819__auto___26440 = (0);
while(true){
if((i__4819__auto___26440 < len__4818__auto___26439)){
args__4824__auto__.push((arguments[i__4819__auto___26440]));

var G__26441 = (i__4819__auto___26440 + (1));
i__4819__auto___26440 = G__26441;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return roam_wiki.roam.query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(roam_wiki.roam.query.cljs$core$IFn$_invoke$arity$variadic = (function (q,o){
var args = cljs.core.cons(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q], 0)),/\n/," "),o);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(roam_wiki.roam.api.data.q,args);
}));

(roam_wiki.roam.query.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(roam_wiki.roam.query.cljs$lang$applyTo = (function (seq26437){
var G__26438 = cljs.core.first(seq26437);
var seq26437__$1 = cljs.core.next(seq26437);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26438,seq26437__$1);
}));

roam_wiki.roam.current_user_page = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(cljs.core.first(roam_wiki.roam.query.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"email","email",-1238619063,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?b","?b",1575118075,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ep","?ep",-340206877,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ep","?ep",-340206877,null),new cljs.core.Keyword("node","title","node/title",628940777),"email"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?bs","?bs",-1614233387,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.string","includes?","clojure.string/includes?",-1842146260,null),new cljs.core.Symbol(null,"?bs","?bs",-1614233387,null),new cljs.core.Symbol(null,"email","email",-1238619063,null))], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([roam_wiki.roam.current_user_email], 0)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
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

//# sourceMappingURL=roam_wiki.roam.js.map
