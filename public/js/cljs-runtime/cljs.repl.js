goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34662){
var map__34664 = p__34662;
var map__34664__$1 = cljs.core.__destructure_map(map__34664);
var m = map__34664__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34664__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34664__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34676_34838 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34677_34839 = null;
var count__34678_34840 = (0);
var i__34679_34841 = (0);
while(true){
if((i__34679_34841 < count__34678_34840)){
var f_34842 = chunk__34677_34839.cljs$core$IIndexed$_nth$arity$2(null,i__34679_34841);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34842], 0));


var G__34843 = seq__34676_34838;
var G__34844 = chunk__34677_34839;
var G__34845 = count__34678_34840;
var G__34846 = (i__34679_34841 + (1));
seq__34676_34838 = G__34843;
chunk__34677_34839 = G__34844;
count__34678_34840 = G__34845;
i__34679_34841 = G__34846;
continue;
} else {
var temp__5753__auto___34847 = cljs.core.seq(seq__34676_34838);
if(temp__5753__auto___34847){
var seq__34676_34848__$1 = temp__5753__auto___34847;
if(cljs.core.chunked_seq_QMARK_(seq__34676_34848__$1)){
var c__4638__auto___34849 = cljs.core.chunk_first(seq__34676_34848__$1);
var G__34850 = cljs.core.chunk_rest(seq__34676_34848__$1);
var G__34851 = c__4638__auto___34849;
var G__34852 = cljs.core.count(c__4638__auto___34849);
var G__34853 = (0);
seq__34676_34838 = G__34850;
chunk__34677_34839 = G__34851;
count__34678_34840 = G__34852;
i__34679_34841 = G__34853;
continue;
} else {
var f_34854 = cljs.core.first(seq__34676_34848__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34854], 0));


var G__34855 = cljs.core.next(seq__34676_34848__$1);
var G__34856 = null;
var G__34857 = (0);
var G__34858 = (0);
seq__34676_34838 = G__34855;
chunk__34677_34839 = G__34856;
count__34678_34840 = G__34857;
i__34679_34841 = G__34858;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34859 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34859], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34859)))?cljs.core.second(arglists_34859):arglists_34859)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34683_34860 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34684_34861 = null;
var count__34685_34862 = (0);
var i__34686_34863 = (0);
while(true){
if((i__34686_34863 < count__34685_34862)){
var vec__34703_34864 = chunk__34684_34861.cljs$core$IIndexed$_nth$arity$2(null,i__34686_34863);
var name_34865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34703_34864,(0),null);
var map__34706_34866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34703_34864,(1),null);
var map__34706_34867__$1 = cljs.core.__destructure_map(map__34706_34866);
var doc_34868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34706_34867__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34706_34867__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34865], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34869], 0));

if(cljs.core.truth_(doc_34868)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34868], 0));
} else {
}


var G__34871 = seq__34683_34860;
var G__34872 = chunk__34684_34861;
var G__34873 = count__34685_34862;
var G__34874 = (i__34686_34863 + (1));
seq__34683_34860 = G__34871;
chunk__34684_34861 = G__34872;
count__34685_34862 = G__34873;
i__34686_34863 = G__34874;
continue;
} else {
var temp__5753__auto___34875 = cljs.core.seq(seq__34683_34860);
if(temp__5753__auto___34875){
var seq__34683_34876__$1 = temp__5753__auto___34875;
if(cljs.core.chunked_seq_QMARK_(seq__34683_34876__$1)){
var c__4638__auto___34877 = cljs.core.chunk_first(seq__34683_34876__$1);
var G__34878 = cljs.core.chunk_rest(seq__34683_34876__$1);
var G__34879 = c__4638__auto___34877;
var G__34880 = cljs.core.count(c__4638__auto___34877);
var G__34881 = (0);
seq__34683_34860 = G__34878;
chunk__34684_34861 = G__34879;
count__34685_34862 = G__34880;
i__34686_34863 = G__34881;
continue;
} else {
var vec__34707_34882 = cljs.core.first(seq__34683_34876__$1);
var name_34883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34707_34882,(0),null);
var map__34710_34884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34707_34882,(1),null);
var map__34710_34885__$1 = cljs.core.__destructure_map(map__34710_34884);
var doc_34886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34710_34885__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34710_34885__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34883], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34887], 0));

if(cljs.core.truth_(doc_34886)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34886], 0));
} else {
}


var G__34888 = cljs.core.next(seq__34683_34876__$1);
var G__34889 = null;
var G__34890 = (0);
var G__34891 = (0);
seq__34683_34860 = G__34888;
chunk__34684_34861 = G__34889;
count__34685_34862 = G__34890;
i__34686_34863 = G__34891;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34720 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34721 = null;
var count__34722 = (0);
var i__34723 = (0);
while(true){
if((i__34723 < count__34722)){
var role = chunk__34721.cljs$core$IIndexed$_nth$arity$2(null,i__34723);
var temp__5753__auto___34892__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34892__$1)){
var spec_34893 = temp__5753__auto___34892__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34893)], 0));
} else {
}


var G__34894 = seq__34720;
var G__34895 = chunk__34721;
var G__34896 = count__34722;
var G__34897 = (i__34723 + (1));
seq__34720 = G__34894;
chunk__34721 = G__34895;
count__34722 = G__34896;
i__34723 = G__34897;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34720);
if(temp__5753__auto____$1){
var seq__34720__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34720__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34720__$1);
var G__34898 = cljs.core.chunk_rest(seq__34720__$1);
var G__34899 = c__4638__auto__;
var G__34900 = cljs.core.count(c__4638__auto__);
var G__34901 = (0);
seq__34720 = G__34898;
chunk__34721 = G__34899;
count__34722 = G__34900;
i__34723 = G__34901;
continue;
} else {
var role = cljs.core.first(seq__34720__$1);
var temp__5753__auto___34902__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34902__$2)){
var spec_34903 = temp__5753__auto___34902__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34903)], 0));
} else {
}


var G__34904 = cljs.core.next(seq__34720__$1);
var G__34905 = null;
var G__34906 = (0);
var G__34907 = (0);
seq__34720 = G__34904;
chunk__34721 = G__34905;
count__34722 = G__34906;
i__34723 = G__34907;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34908 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34909 = cljs.core.ex_cause(t);
via = G__34908;
t = G__34909;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34745 = datafied_throwable;
var map__34745__$1 = cljs.core.__destructure_map(map__34745);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34745__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34745__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34745__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34746 = cljs.core.last(via);
var map__34746__$1 = cljs.core.__destructure_map(map__34746);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34746__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34746__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34746__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34747 = data;
var map__34747__$1 = cljs.core.__destructure_map(map__34747);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34747__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34747__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34747__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34748 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34748__$1 = cljs.core.__destructure_map(map__34748);
var top_data = map__34748__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34748__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34749 = phase;
var G__34749__$1 = (((G__34749 instanceof cljs.core.Keyword))?G__34749.fqn:null);
switch (G__34749__$1) {
case "read-source":
var map__34756 = data;
var map__34756__$1 = cljs.core.__destructure_map(map__34756);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34756__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34756__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34757 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34757__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34757,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34757);
var G__34757__$2 = (cljs.core.truth_((function (){var fexpr__34762 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34762.cljs$core$IFn$_invoke$arity$1 ? fexpr__34762.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34762.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34757__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34757__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34757__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34757__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34763 = top_data;
var G__34763__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34763,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34763);
var G__34763__$2 = (cljs.core.truth_((function (){var fexpr__34764 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34764.cljs$core$IFn$_invoke$arity$1 ? fexpr__34764.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34764.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34763__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34763__$1);
var G__34763__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34763__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34763__$2);
var G__34763__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34763__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34763__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34763__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34763__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34765 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765,(3),null);
var G__34768 = top_data;
var G__34768__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34768,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34768);
var G__34768__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34768__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34768__$1);
var G__34768__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34768__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34768__$2);
var G__34768__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34768__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34768__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34768__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34768__$4;
}

break;
case "execution":
var vec__34770 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34770,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34770,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34770,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34770,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34743_SHARP_){
var or__4212__auto__ = (p1__34743_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__34780 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34780.cljs$core$IFn$_invoke$arity$1 ? fexpr__34780.cljs$core$IFn$_invoke$arity$1(p1__34743_SHARP_) : fexpr__34780.call(null,p1__34743_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__34781 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34781__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34781,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34781);
var G__34781__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34781__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34781__$1);
var G__34781__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34781__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34781__$2);
var G__34781__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34781__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34781__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34781__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34781__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34749__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34790){
var map__34791 = p__34790;
var map__34791__$1 = cljs.core.__destructure_map(map__34791);
var triage_data = map__34791__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34791__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34791__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34791__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34791__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34791__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34791__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34791__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34791__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34796 = phase;
var G__34796__$1 = (((G__34796 instanceof cljs.core.Keyword))?G__34796.fqn:null);
switch (G__34796__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34797 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34798 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34799 = loc;
var G__34800 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34801_34916 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34802_34917 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34803_34918 = true;
var _STAR_print_fn_STAR__temp_val__34804_34919 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34803_34918);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34804_34919);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34788_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34788_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34802_34917);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34801_34916);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34797,G__34798,G__34799,G__34800) : format.call(null,G__34797,G__34798,G__34799,G__34800));

break;
case "macroexpansion":
var G__34806 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34807 = cause_type;
var G__34808 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34809 = loc;
var G__34810 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34806,G__34807,G__34808,G__34809,G__34810) : format.call(null,G__34806,G__34807,G__34808,G__34809,G__34810));

break;
case "compile-syntax-check":
var G__34811 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34812 = cause_type;
var G__34813 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34814 = loc;
var G__34815 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34811,G__34812,G__34813,G__34814,G__34815) : format.call(null,G__34811,G__34812,G__34813,G__34814,G__34815));

break;
case "compilation":
var G__34816 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34817 = cause_type;
var G__34818 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34819 = loc;
var G__34820 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34816,G__34817,G__34818,G__34819,G__34820) : format.call(null,G__34816,G__34817,G__34818,G__34819,G__34820));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34824 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34825 = symbol;
var G__34826 = loc;
var G__34827 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34828_34921 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34829_34922 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34830_34923 = true;
var _STAR_print_fn_STAR__temp_val__34831_34924 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34830_34923);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34831_34924);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34789_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34789_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34829_34922);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34828_34921);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34824,G__34825,G__34826,G__34827) : format.call(null,G__34824,G__34825,G__34826,G__34827));
} else {
var G__34832 = "Execution error%s at %s(%s).\n%s\n";
var G__34833 = cause_type;
var G__34834 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34835 = loc;
var G__34836 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34832,G__34833,G__34834,G__34835,G__34836) : format.call(null,G__34832,G__34833,G__34834,G__34835,G__34836));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34796__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
