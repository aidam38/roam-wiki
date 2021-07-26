goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35872 = arguments.length;
var i__4819__auto___35873 = (0);
while(true){
if((i__4819__auto___35873 < len__4818__auto___35872)){
args__4824__auto__.push((arguments[i__4819__auto___35873]));

var G__35874 = (i__4819__auto___35873 + (1));
i__4819__auto___35873 = G__35874;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35747){
var G__35748 = cljs.core.first(seq35747);
var seq35747__$1 = cljs.core.next(seq35747);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35748,seq35747__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35752 = cljs.core.seq(sources);
var chunk__35753 = null;
var count__35754 = (0);
var i__35755 = (0);
while(true){
if((i__35755 < count__35754)){
var map__35760 = chunk__35753.cljs$core$IIndexed$_nth$arity$2(null,i__35755);
var map__35760__$1 = cljs.core.__destructure_map(map__35760);
var src = map__35760__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35760__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35760__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35760__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35760__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35761){var e_35875 = e35761;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35875);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35875.message)].join('')));
}

var G__35876 = seq__35752;
var G__35877 = chunk__35753;
var G__35878 = count__35754;
var G__35879 = (i__35755 + (1));
seq__35752 = G__35876;
chunk__35753 = G__35877;
count__35754 = G__35878;
i__35755 = G__35879;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35752);
if(temp__5753__auto__){
var seq__35752__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35752__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35752__$1);
var G__35880 = cljs.core.chunk_rest(seq__35752__$1);
var G__35881 = c__4638__auto__;
var G__35882 = cljs.core.count(c__4638__auto__);
var G__35883 = (0);
seq__35752 = G__35880;
chunk__35753 = G__35881;
count__35754 = G__35882;
i__35755 = G__35883;
continue;
} else {
var map__35762 = cljs.core.first(seq__35752__$1);
var map__35762__$1 = cljs.core.__destructure_map(map__35762);
var src = map__35762__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35762__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35762__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35762__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35762__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35763){var e_35884 = e35763;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35884);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35884.message)].join('')));
}

var G__35885 = cljs.core.next(seq__35752__$1);
var G__35886 = null;
var G__35887 = (0);
var G__35888 = (0);
seq__35752 = G__35885;
chunk__35753 = G__35886;
count__35754 = G__35887;
i__35755 = G__35888;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35764 = cljs.core.seq(js_requires);
var chunk__35765 = null;
var count__35766 = (0);
var i__35767 = (0);
while(true){
if((i__35767 < count__35766)){
var js_ns = chunk__35765.cljs$core$IIndexed$_nth$arity$2(null,i__35767);
var require_str_35889 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35889);


var G__35890 = seq__35764;
var G__35891 = chunk__35765;
var G__35892 = count__35766;
var G__35893 = (i__35767 + (1));
seq__35764 = G__35890;
chunk__35765 = G__35891;
count__35766 = G__35892;
i__35767 = G__35893;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35764);
if(temp__5753__auto__){
var seq__35764__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35764__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35764__$1);
var G__35894 = cljs.core.chunk_rest(seq__35764__$1);
var G__35895 = c__4638__auto__;
var G__35896 = cljs.core.count(c__4638__auto__);
var G__35897 = (0);
seq__35764 = G__35894;
chunk__35765 = G__35895;
count__35766 = G__35896;
i__35767 = G__35897;
continue;
} else {
var js_ns = cljs.core.first(seq__35764__$1);
var require_str_35898 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35898);


var G__35899 = cljs.core.next(seq__35764__$1);
var G__35900 = null;
var G__35901 = (0);
var G__35902 = (0);
seq__35764 = G__35899;
chunk__35765 = G__35900;
count__35766 = G__35901;
i__35767 = G__35902;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35769){
var map__35770 = p__35769;
var map__35770__$1 = cljs.core.__destructure_map(map__35770);
var msg = map__35770__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35770__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35770__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35771(s__35772){
return (new cljs.core.LazySeq(null,(function (){
var s__35772__$1 = s__35772;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35772__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35777 = cljs.core.first(xs__6308__auto__);
var map__35777__$1 = cljs.core.__destructure_map(map__35777);
var src = map__35777__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__35772__$1,map__35777,map__35777__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35770,map__35770__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35771_$_iter__35773(s__35774){
return (new cljs.core.LazySeq(null,((function (s__35772__$1,map__35777,map__35777__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35770,map__35770__$1,msg,info,reload_info){
return (function (){
var s__35774__$1 = s__35774;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35774__$1);
if(temp__5753__auto____$1){
var s__35774__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35774__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__35774__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__35776 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__35775 = (0);
while(true){
if((i__35775 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__35775);
cljs.core.chunk_append(b__35776,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35903 = (i__35775 + (1));
i__35775 = G__35903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35776),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35771_$_iter__35773(cljs.core.chunk_rest(s__35774__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35776),null);
}
} else {
var warning = cljs.core.first(s__35774__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35771_$_iter__35773(cljs.core.rest(s__35774__$2)));
}
} else {
return null;
}
break;
}
});})(s__35772__$1,map__35777,map__35777__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35770,map__35770__$1,msg,info,reload_info))
,null,null));
});})(s__35772__$1,map__35777,map__35777__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35770,map__35770__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35771(cljs.core.rest(s__35772__$1)));
} else {
var G__35904 = cljs.core.rest(s__35772__$1);
s__35772__$1 = G__35904;
continue;
}
} else {
var G__35905 = cljs.core.rest(s__35772__$1);
s__35772__$1 = G__35905;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35778_35906 = cljs.core.seq(warnings);
var chunk__35779_35907 = null;
var count__35780_35908 = (0);
var i__35781_35909 = (0);
while(true){
if((i__35781_35909 < count__35780_35908)){
var map__35784_35910 = chunk__35779_35907.cljs$core$IIndexed$_nth$arity$2(null,i__35781_35909);
var map__35784_35911__$1 = cljs.core.__destructure_map(map__35784_35910);
var w_35912 = map__35784_35911__$1;
var msg_35913__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784_35911__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784_35911__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784_35911__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784_35911__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35916)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35914),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35915),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35913__$1)].join(''));


var G__35917 = seq__35778_35906;
var G__35918 = chunk__35779_35907;
var G__35919 = count__35780_35908;
var G__35920 = (i__35781_35909 + (1));
seq__35778_35906 = G__35917;
chunk__35779_35907 = G__35918;
count__35780_35908 = G__35919;
i__35781_35909 = G__35920;
continue;
} else {
var temp__5753__auto___35921 = cljs.core.seq(seq__35778_35906);
if(temp__5753__auto___35921){
var seq__35778_35922__$1 = temp__5753__auto___35921;
if(cljs.core.chunked_seq_QMARK_(seq__35778_35922__$1)){
var c__4638__auto___35923 = cljs.core.chunk_first(seq__35778_35922__$1);
var G__35924 = cljs.core.chunk_rest(seq__35778_35922__$1);
var G__35925 = c__4638__auto___35923;
var G__35926 = cljs.core.count(c__4638__auto___35923);
var G__35927 = (0);
seq__35778_35906 = G__35924;
chunk__35779_35907 = G__35925;
count__35780_35908 = G__35926;
i__35781_35909 = G__35927;
continue;
} else {
var map__35785_35928 = cljs.core.first(seq__35778_35922__$1);
var map__35785_35929__$1 = cljs.core.__destructure_map(map__35785_35928);
var w_35930 = map__35785_35929__$1;
var msg_35931__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35785_35929__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35785_35929__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35785_35929__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35785_35929__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35934)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35932),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35933),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35931__$1)].join(''));


var G__35935 = cljs.core.next(seq__35778_35922__$1);
var G__35936 = null;
var G__35937 = (0);
var G__35938 = (0);
seq__35778_35906 = G__35935;
chunk__35779_35907 = G__35936;
count__35780_35908 = G__35937;
i__35781_35909 = G__35938;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35768_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35768_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35786){
var map__35787 = p__35786;
var map__35787__$1 = cljs.core.__destructure_map(map__35787);
var msg = map__35787__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35787__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35788 = cljs.core.seq(updates);
var chunk__35790 = null;
var count__35791 = (0);
var i__35792 = (0);
while(true){
if((i__35792 < count__35791)){
var path = chunk__35790.cljs$core$IIndexed$_nth$arity$2(null,i__35792);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35822_35939 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35826_35940 = null;
var count__35827_35941 = (0);
var i__35828_35942 = (0);
while(true){
if((i__35828_35942 < count__35827_35941)){
var node_35943 = chunk__35826_35940.cljs$core$IIndexed$_nth$arity$2(null,i__35828_35942);
if(cljs.core.not(node_35943.shadow$old)){
var path_match_35944 = shadow.cljs.devtools.client.browser.match_paths(node_35943.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35944)){
var new_link_35945 = (function (){var G__35834 = node_35943.cloneNode(true);
G__35834.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35944),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35834;
})();
(node_35943.shadow$old = true);

(new_link_35945.onload = ((function (seq__35822_35939,chunk__35826_35940,count__35827_35941,i__35828_35942,seq__35788,chunk__35790,count__35791,i__35792,new_link_35945,path_match_35944,node_35943,path,map__35787,map__35787__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35943);
});})(seq__35822_35939,chunk__35826_35940,count__35827_35941,i__35828_35942,seq__35788,chunk__35790,count__35791,i__35792,new_link_35945,path_match_35944,node_35943,path,map__35787,map__35787__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35944], 0));

goog.dom.insertSiblingAfter(new_link_35945,node_35943);


var G__35946 = seq__35822_35939;
var G__35947 = chunk__35826_35940;
var G__35948 = count__35827_35941;
var G__35949 = (i__35828_35942 + (1));
seq__35822_35939 = G__35946;
chunk__35826_35940 = G__35947;
count__35827_35941 = G__35948;
i__35828_35942 = G__35949;
continue;
} else {
var G__35950 = seq__35822_35939;
var G__35951 = chunk__35826_35940;
var G__35952 = count__35827_35941;
var G__35953 = (i__35828_35942 + (1));
seq__35822_35939 = G__35950;
chunk__35826_35940 = G__35951;
count__35827_35941 = G__35952;
i__35828_35942 = G__35953;
continue;
}
} else {
var G__35954 = seq__35822_35939;
var G__35955 = chunk__35826_35940;
var G__35956 = count__35827_35941;
var G__35957 = (i__35828_35942 + (1));
seq__35822_35939 = G__35954;
chunk__35826_35940 = G__35955;
count__35827_35941 = G__35956;
i__35828_35942 = G__35957;
continue;
}
} else {
var temp__5753__auto___35958 = cljs.core.seq(seq__35822_35939);
if(temp__5753__auto___35958){
var seq__35822_35959__$1 = temp__5753__auto___35958;
if(cljs.core.chunked_seq_QMARK_(seq__35822_35959__$1)){
var c__4638__auto___35960 = cljs.core.chunk_first(seq__35822_35959__$1);
var G__35961 = cljs.core.chunk_rest(seq__35822_35959__$1);
var G__35962 = c__4638__auto___35960;
var G__35963 = cljs.core.count(c__4638__auto___35960);
var G__35964 = (0);
seq__35822_35939 = G__35961;
chunk__35826_35940 = G__35962;
count__35827_35941 = G__35963;
i__35828_35942 = G__35964;
continue;
} else {
var node_35965 = cljs.core.first(seq__35822_35959__$1);
if(cljs.core.not(node_35965.shadow$old)){
var path_match_35966 = shadow.cljs.devtools.client.browser.match_paths(node_35965.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35966)){
var new_link_35967 = (function (){var G__35835 = node_35965.cloneNode(true);
G__35835.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35966),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35835;
})();
(node_35965.shadow$old = true);

(new_link_35967.onload = ((function (seq__35822_35939,chunk__35826_35940,count__35827_35941,i__35828_35942,seq__35788,chunk__35790,count__35791,i__35792,new_link_35967,path_match_35966,node_35965,seq__35822_35959__$1,temp__5753__auto___35958,path,map__35787,map__35787__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35965);
});})(seq__35822_35939,chunk__35826_35940,count__35827_35941,i__35828_35942,seq__35788,chunk__35790,count__35791,i__35792,new_link_35967,path_match_35966,node_35965,seq__35822_35959__$1,temp__5753__auto___35958,path,map__35787,map__35787__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35966], 0));

goog.dom.insertSiblingAfter(new_link_35967,node_35965);


var G__35968 = cljs.core.next(seq__35822_35959__$1);
var G__35969 = null;
var G__35970 = (0);
var G__35971 = (0);
seq__35822_35939 = G__35968;
chunk__35826_35940 = G__35969;
count__35827_35941 = G__35970;
i__35828_35942 = G__35971;
continue;
} else {
var G__35972 = cljs.core.next(seq__35822_35959__$1);
var G__35973 = null;
var G__35974 = (0);
var G__35975 = (0);
seq__35822_35939 = G__35972;
chunk__35826_35940 = G__35973;
count__35827_35941 = G__35974;
i__35828_35942 = G__35975;
continue;
}
} else {
var G__35976 = cljs.core.next(seq__35822_35959__$1);
var G__35977 = null;
var G__35978 = (0);
var G__35979 = (0);
seq__35822_35939 = G__35976;
chunk__35826_35940 = G__35977;
count__35827_35941 = G__35978;
i__35828_35942 = G__35979;
continue;
}
}
} else {
}
}
break;
}


var G__35980 = seq__35788;
var G__35981 = chunk__35790;
var G__35982 = count__35791;
var G__35983 = (i__35792 + (1));
seq__35788 = G__35980;
chunk__35790 = G__35981;
count__35791 = G__35982;
i__35792 = G__35983;
continue;
} else {
var G__35984 = seq__35788;
var G__35985 = chunk__35790;
var G__35986 = count__35791;
var G__35987 = (i__35792 + (1));
seq__35788 = G__35984;
chunk__35790 = G__35985;
count__35791 = G__35986;
i__35792 = G__35987;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35788);
if(temp__5753__auto__){
var seq__35788__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35788__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35788__$1);
var G__35988 = cljs.core.chunk_rest(seq__35788__$1);
var G__35989 = c__4638__auto__;
var G__35990 = cljs.core.count(c__4638__auto__);
var G__35991 = (0);
seq__35788 = G__35988;
chunk__35790 = G__35989;
count__35791 = G__35990;
i__35792 = G__35991;
continue;
} else {
var path = cljs.core.first(seq__35788__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35836_35992 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35840_35993 = null;
var count__35841_35994 = (0);
var i__35842_35995 = (0);
while(true){
if((i__35842_35995 < count__35841_35994)){
var node_35996 = chunk__35840_35993.cljs$core$IIndexed$_nth$arity$2(null,i__35842_35995);
if(cljs.core.not(node_35996.shadow$old)){
var path_match_35997 = shadow.cljs.devtools.client.browser.match_paths(node_35996.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35997)){
var new_link_35998 = (function (){var G__35848 = node_35996.cloneNode(true);
G__35848.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35997),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35848;
})();
(node_35996.shadow$old = true);

(new_link_35998.onload = ((function (seq__35836_35992,chunk__35840_35993,count__35841_35994,i__35842_35995,seq__35788,chunk__35790,count__35791,i__35792,new_link_35998,path_match_35997,node_35996,path,seq__35788__$1,temp__5753__auto__,map__35787,map__35787__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35996);
});})(seq__35836_35992,chunk__35840_35993,count__35841_35994,i__35842_35995,seq__35788,chunk__35790,count__35791,i__35792,new_link_35998,path_match_35997,node_35996,path,seq__35788__$1,temp__5753__auto__,map__35787,map__35787__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35997], 0));

goog.dom.insertSiblingAfter(new_link_35998,node_35996);


var G__35999 = seq__35836_35992;
var G__36000 = chunk__35840_35993;
var G__36001 = count__35841_35994;
var G__36002 = (i__35842_35995 + (1));
seq__35836_35992 = G__35999;
chunk__35840_35993 = G__36000;
count__35841_35994 = G__36001;
i__35842_35995 = G__36002;
continue;
} else {
var G__36003 = seq__35836_35992;
var G__36004 = chunk__35840_35993;
var G__36005 = count__35841_35994;
var G__36006 = (i__35842_35995 + (1));
seq__35836_35992 = G__36003;
chunk__35840_35993 = G__36004;
count__35841_35994 = G__36005;
i__35842_35995 = G__36006;
continue;
}
} else {
var G__36007 = seq__35836_35992;
var G__36008 = chunk__35840_35993;
var G__36009 = count__35841_35994;
var G__36010 = (i__35842_35995 + (1));
seq__35836_35992 = G__36007;
chunk__35840_35993 = G__36008;
count__35841_35994 = G__36009;
i__35842_35995 = G__36010;
continue;
}
} else {
var temp__5753__auto___36011__$1 = cljs.core.seq(seq__35836_35992);
if(temp__5753__auto___36011__$1){
var seq__35836_36012__$1 = temp__5753__auto___36011__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35836_36012__$1)){
var c__4638__auto___36013 = cljs.core.chunk_first(seq__35836_36012__$1);
var G__36014 = cljs.core.chunk_rest(seq__35836_36012__$1);
var G__36015 = c__4638__auto___36013;
var G__36016 = cljs.core.count(c__4638__auto___36013);
var G__36017 = (0);
seq__35836_35992 = G__36014;
chunk__35840_35993 = G__36015;
count__35841_35994 = G__36016;
i__35842_35995 = G__36017;
continue;
} else {
var node_36018 = cljs.core.first(seq__35836_36012__$1);
if(cljs.core.not(node_36018.shadow$old)){
var path_match_36019 = shadow.cljs.devtools.client.browser.match_paths(node_36018.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36019)){
var new_link_36020 = (function (){var G__35849 = node_36018.cloneNode(true);
G__35849.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36019),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35849;
})();
(node_36018.shadow$old = true);

(new_link_36020.onload = ((function (seq__35836_35992,chunk__35840_35993,count__35841_35994,i__35842_35995,seq__35788,chunk__35790,count__35791,i__35792,new_link_36020,path_match_36019,node_36018,seq__35836_36012__$1,temp__5753__auto___36011__$1,path,seq__35788__$1,temp__5753__auto__,map__35787,map__35787__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36018);
});})(seq__35836_35992,chunk__35840_35993,count__35841_35994,i__35842_35995,seq__35788,chunk__35790,count__35791,i__35792,new_link_36020,path_match_36019,node_36018,seq__35836_36012__$1,temp__5753__auto___36011__$1,path,seq__35788__$1,temp__5753__auto__,map__35787,map__35787__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36019], 0));

goog.dom.insertSiblingAfter(new_link_36020,node_36018);


var G__36021 = cljs.core.next(seq__35836_36012__$1);
var G__36022 = null;
var G__36023 = (0);
var G__36024 = (0);
seq__35836_35992 = G__36021;
chunk__35840_35993 = G__36022;
count__35841_35994 = G__36023;
i__35842_35995 = G__36024;
continue;
} else {
var G__36025 = cljs.core.next(seq__35836_36012__$1);
var G__36026 = null;
var G__36027 = (0);
var G__36028 = (0);
seq__35836_35992 = G__36025;
chunk__35840_35993 = G__36026;
count__35841_35994 = G__36027;
i__35842_35995 = G__36028;
continue;
}
} else {
var G__36029 = cljs.core.next(seq__35836_36012__$1);
var G__36030 = null;
var G__36031 = (0);
var G__36032 = (0);
seq__35836_35992 = G__36029;
chunk__35840_35993 = G__36030;
count__35841_35994 = G__36031;
i__35842_35995 = G__36032;
continue;
}
}
} else {
}
}
break;
}


var G__36033 = cljs.core.next(seq__35788__$1);
var G__36034 = null;
var G__36035 = (0);
var G__36036 = (0);
seq__35788 = G__36033;
chunk__35790 = G__36034;
count__35791 = G__36035;
i__35792 = G__36036;
continue;
} else {
var G__36037 = cljs.core.next(seq__35788__$1);
var G__36038 = null;
var G__36039 = (0);
var G__36040 = (0);
seq__35788 = G__36037;
chunk__35790 = G__36038;
count__35791 = G__36039;
i__35792 = G__36040;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35850){
var map__35851 = p__35850;
var map__35851__$1 = cljs.core.__destructure_map(map__35851);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35851__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35852){
var map__35853 = p__35852;
var map__35853__$1 = cljs.core.__destructure_map(map__35853);
var _ = map__35853__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35853__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35854,done,error){
var map__35855 = p__35854;
var map__35855__$1 = cljs.core.__destructure_map(map__35855);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35855__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35856,done,error){
var map__35857 = p__35856;
var map__35857__$1 = cljs.core.__destructure_map(map__35857);
var msg = map__35857__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35857__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35857__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35857__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35858){
var map__35859 = p__35858;
var map__35859__$1 = cljs.core.__destructure_map(map__35859);
var src = map__35859__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35859__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35860 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35860) : done.call(null,G__35860));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35861){
var map__35862 = p__35861;
var map__35862__$1 = cljs.core.__destructure_map(map__35862);
var msg__$1 = map__35862__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35862__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35863){var ex = e35863;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35864){
var map__35865 = p__35864;
var map__35865__$1 = cljs.core.__destructure_map(map__35865);
var env = map__35865__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35865__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35866){
var map__35867 = p__35866;
var map__35867__$1 = cljs.core.__destructure_map(map__35867);
var msg = map__35867__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35867__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35868){
var map__35869 = p__35868;
var map__35869__$1 = cljs.core.__destructure_map(map__35869);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35869__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35869__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35870){
var map__35871 = p__35870;
var map__35871__$1 = cljs.core.__destructure_map(map__35871);
var svc = map__35871__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35871__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
