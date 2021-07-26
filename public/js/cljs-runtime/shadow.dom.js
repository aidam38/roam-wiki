goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34119 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34119(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34123 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34123(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33196 = coll;
var G__33197 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33196,G__33197) : shadow.dom.lazy_native_coll_seq.call(null,G__33196,G__33197));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33253 = arguments.length;
switch (G__33253) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33277 = arguments.length;
switch (G__33277) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33289 = arguments.length;
switch (G__33289) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33306 = arguments.length;
switch (G__33306) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33389 = arguments.length;
switch (G__33389) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33451 = arguments.length;
switch (G__33451) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33473){if((e33473 instanceof Object)){
var e = e33473;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33473;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33492 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33493 = null;
var count__33494 = (0);
var i__33495 = (0);
while(true){
if((i__33495 < count__33494)){
var el = chunk__33493.cljs$core$IIndexed$_nth$arity$2(null,i__33495);
var handler_34143__$1 = ((function (seq__33492,chunk__33493,count__33494,i__33495,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33492,chunk__33493,count__33494,i__33495,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34143__$1);


var G__34145 = seq__33492;
var G__34146 = chunk__33493;
var G__34147 = count__33494;
var G__34148 = (i__33495 + (1));
seq__33492 = G__34145;
chunk__33493 = G__34146;
count__33494 = G__34147;
i__33495 = G__34148;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33492);
if(temp__5753__auto__){
var seq__33492__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33492__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33492__$1);
var G__34150 = cljs.core.chunk_rest(seq__33492__$1);
var G__34151 = c__4638__auto__;
var G__34152 = cljs.core.count(c__4638__auto__);
var G__34153 = (0);
seq__33492 = G__34150;
chunk__33493 = G__34151;
count__33494 = G__34152;
i__33495 = G__34153;
continue;
} else {
var el = cljs.core.first(seq__33492__$1);
var handler_34154__$1 = ((function (seq__33492,chunk__33493,count__33494,i__33495,el,seq__33492__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33492,chunk__33493,count__33494,i__33495,el,seq__33492__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34154__$1);


var G__34156 = cljs.core.next(seq__33492__$1);
var G__34157 = null;
var G__34158 = (0);
var G__34159 = (0);
seq__33492 = G__34156;
chunk__33493 = G__34157;
count__33494 = G__34158;
i__33495 = G__34159;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33503 = arguments.length;
switch (G__33503) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33508 = cljs.core.seq(events);
var chunk__33509 = null;
var count__33510 = (0);
var i__33511 = (0);
while(true){
if((i__33511 < count__33510)){
var vec__33540 = chunk__33509.cljs$core$IIndexed$_nth$arity$2(null,i__33511);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33540,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33540,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34161 = seq__33508;
var G__34162 = chunk__33509;
var G__34163 = count__33510;
var G__34164 = (i__33511 + (1));
seq__33508 = G__34161;
chunk__33509 = G__34162;
count__33510 = G__34163;
i__33511 = G__34164;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33508);
if(temp__5753__auto__){
var seq__33508__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33508__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33508__$1);
var G__34165 = cljs.core.chunk_rest(seq__33508__$1);
var G__34166 = c__4638__auto__;
var G__34167 = cljs.core.count(c__4638__auto__);
var G__34168 = (0);
seq__33508 = G__34165;
chunk__33509 = G__34166;
count__33510 = G__34167;
i__33511 = G__34168;
continue;
} else {
var vec__33545 = cljs.core.first(seq__33508__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33545,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33545,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34169 = cljs.core.next(seq__33508__$1);
var G__34170 = null;
var G__34171 = (0);
var G__34172 = (0);
seq__33508 = G__34169;
chunk__33509 = G__34170;
count__33510 = G__34171;
i__33511 = G__34172;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33552 = cljs.core.seq(styles);
var chunk__33553 = null;
var count__33554 = (0);
var i__33555 = (0);
while(true){
if((i__33555 < count__33554)){
var vec__33573 = chunk__33553.cljs$core$IIndexed$_nth$arity$2(null,i__33555);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33573,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33573,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34173 = seq__33552;
var G__34174 = chunk__33553;
var G__34175 = count__33554;
var G__34176 = (i__33555 + (1));
seq__33552 = G__34173;
chunk__33553 = G__34174;
count__33554 = G__34175;
i__33555 = G__34176;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33552);
if(temp__5753__auto__){
var seq__33552__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33552__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33552__$1);
var G__34177 = cljs.core.chunk_rest(seq__33552__$1);
var G__34178 = c__4638__auto__;
var G__34179 = cljs.core.count(c__4638__auto__);
var G__34180 = (0);
seq__33552 = G__34177;
chunk__33553 = G__34178;
count__33554 = G__34179;
i__33555 = G__34180;
continue;
} else {
var vec__33579 = cljs.core.first(seq__33552__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33579,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33579,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34182 = cljs.core.next(seq__33552__$1);
var G__34183 = null;
var G__34184 = (0);
var G__34185 = (0);
seq__33552 = G__34182;
chunk__33553 = G__34183;
count__33554 = G__34184;
i__33555 = G__34185;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33584_34186 = key;
var G__33584_34187__$1 = (((G__33584_34186 instanceof cljs.core.Keyword))?G__33584_34186.fqn:null);
switch (G__33584_34187__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34189 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_34189,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_34189,"aria-");
}
})())){
el.setAttribute(ks_34189,value);
} else {
(el[ks_34189] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33650){
var map__33651 = p__33650;
var map__33651__$1 = cljs.core.__destructure_map(map__33651);
var props = map__33651__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33651__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33666 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33666,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33666,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33666,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33675 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33675,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33675;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33677 = arguments.length;
switch (G__33677) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33700){
var vec__33701 = p__33700;
var seq__33702 = cljs.core.seq(vec__33701);
var first__33703 = cljs.core.first(seq__33702);
var seq__33702__$1 = cljs.core.next(seq__33702);
var nn = first__33703;
var first__33703__$1 = cljs.core.first(seq__33702__$1);
var seq__33702__$2 = cljs.core.next(seq__33702__$1);
var np = first__33703__$1;
var nc = seq__33702__$2;
var node = vec__33701;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33705 = nn;
var G__33706 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33705,G__33706) : create_fn.call(null,G__33705,G__33706));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33707 = nn;
var G__33708 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33707,G__33708) : create_fn.call(null,G__33707,G__33708));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33712 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33712,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33712,(1),null);
var seq__33715_34193 = cljs.core.seq(node_children);
var chunk__33716_34194 = null;
var count__33717_34195 = (0);
var i__33718_34196 = (0);
while(true){
if((i__33718_34196 < count__33717_34195)){
var child_struct_34197 = chunk__33716_34194.cljs$core$IIndexed$_nth$arity$2(null,i__33718_34196);
var children_34198 = shadow.dom.dom_node(child_struct_34197);
if(cljs.core.seq_QMARK_(children_34198)){
var seq__33731_34199 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34198));
var chunk__33733_34200 = null;
var count__33734_34201 = (0);
var i__33735_34202 = (0);
while(true){
if((i__33735_34202 < count__33734_34201)){
var child_34204 = chunk__33733_34200.cljs$core$IIndexed$_nth$arity$2(null,i__33735_34202);
if(cljs.core.truth_(child_34204)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34204);


var G__34206 = seq__33731_34199;
var G__34207 = chunk__33733_34200;
var G__34208 = count__33734_34201;
var G__34209 = (i__33735_34202 + (1));
seq__33731_34199 = G__34206;
chunk__33733_34200 = G__34207;
count__33734_34201 = G__34208;
i__33735_34202 = G__34209;
continue;
} else {
var G__34210 = seq__33731_34199;
var G__34211 = chunk__33733_34200;
var G__34212 = count__33734_34201;
var G__34213 = (i__33735_34202 + (1));
seq__33731_34199 = G__34210;
chunk__33733_34200 = G__34211;
count__33734_34201 = G__34212;
i__33735_34202 = G__34213;
continue;
}
} else {
var temp__5753__auto___34214 = cljs.core.seq(seq__33731_34199);
if(temp__5753__auto___34214){
var seq__33731_34215__$1 = temp__5753__auto___34214;
if(cljs.core.chunked_seq_QMARK_(seq__33731_34215__$1)){
var c__4638__auto___34216 = cljs.core.chunk_first(seq__33731_34215__$1);
var G__34218 = cljs.core.chunk_rest(seq__33731_34215__$1);
var G__34219 = c__4638__auto___34216;
var G__34220 = cljs.core.count(c__4638__auto___34216);
var G__34221 = (0);
seq__33731_34199 = G__34218;
chunk__33733_34200 = G__34219;
count__33734_34201 = G__34220;
i__33735_34202 = G__34221;
continue;
} else {
var child_34222 = cljs.core.first(seq__33731_34215__$1);
if(cljs.core.truth_(child_34222)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34222);


var G__34223 = cljs.core.next(seq__33731_34215__$1);
var G__34224 = null;
var G__34225 = (0);
var G__34226 = (0);
seq__33731_34199 = G__34223;
chunk__33733_34200 = G__34224;
count__33734_34201 = G__34225;
i__33735_34202 = G__34226;
continue;
} else {
var G__34227 = cljs.core.next(seq__33731_34215__$1);
var G__34228 = null;
var G__34229 = (0);
var G__34230 = (0);
seq__33731_34199 = G__34227;
chunk__33733_34200 = G__34228;
count__33734_34201 = G__34229;
i__33735_34202 = G__34230;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34198);
}


var G__34231 = seq__33715_34193;
var G__34232 = chunk__33716_34194;
var G__34233 = count__33717_34195;
var G__34234 = (i__33718_34196 + (1));
seq__33715_34193 = G__34231;
chunk__33716_34194 = G__34232;
count__33717_34195 = G__34233;
i__33718_34196 = G__34234;
continue;
} else {
var temp__5753__auto___34235 = cljs.core.seq(seq__33715_34193);
if(temp__5753__auto___34235){
var seq__33715_34236__$1 = temp__5753__auto___34235;
if(cljs.core.chunked_seq_QMARK_(seq__33715_34236__$1)){
var c__4638__auto___34237 = cljs.core.chunk_first(seq__33715_34236__$1);
var G__34238 = cljs.core.chunk_rest(seq__33715_34236__$1);
var G__34239 = c__4638__auto___34237;
var G__34240 = cljs.core.count(c__4638__auto___34237);
var G__34241 = (0);
seq__33715_34193 = G__34238;
chunk__33716_34194 = G__34239;
count__33717_34195 = G__34240;
i__33718_34196 = G__34241;
continue;
} else {
var child_struct_34242 = cljs.core.first(seq__33715_34236__$1);
var children_34243 = shadow.dom.dom_node(child_struct_34242);
if(cljs.core.seq_QMARK_(children_34243)){
var seq__33737_34244 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34243));
var chunk__33739_34245 = null;
var count__33740_34246 = (0);
var i__33741_34247 = (0);
while(true){
if((i__33741_34247 < count__33740_34246)){
var child_34248 = chunk__33739_34245.cljs$core$IIndexed$_nth$arity$2(null,i__33741_34247);
if(cljs.core.truth_(child_34248)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34248);


var G__34249 = seq__33737_34244;
var G__34250 = chunk__33739_34245;
var G__34251 = count__33740_34246;
var G__34252 = (i__33741_34247 + (1));
seq__33737_34244 = G__34249;
chunk__33739_34245 = G__34250;
count__33740_34246 = G__34251;
i__33741_34247 = G__34252;
continue;
} else {
var G__34253 = seq__33737_34244;
var G__34254 = chunk__33739_34245;
var G__34255 = count__33740_34246;
var G__34256 = (i__33741_34247 + (1));
seq__33737_34244 = G__34253;
chunk__33739_34245 = G__34254;
count__33740_34246 = G__34255;
i__33741_34247 = G__34256;
continue;
}
} else {
var temp__5753__auto___34257__$1 = cljs.core.seq(seq__33737_34244);
if(temp__5753__auto___34257__$1){
var seq__33737_34258__$1 = temp__5753__auto___34257__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33737_34258__$1)){
var c__4638__auto___34259 = cljs.core.chunk_first(seq__33737_34258__$1);
var G__34260 = cljs.core.chunk_rest(seq__33737_34258__$1);
var G__34261 = c__4638__auto___34259;
var G__34262 = cljs.core.count(c__4638__auto___34259);
var G__34263 = (0);
seq__33737_34244 = G__34260;
chunk__33739_34245 = G__34261;
count__33740_34246 = G__34262;
i__33741_34247 = G__34263;
continue;
} else {
var child_34264 = cljs.core.first(seq__33737_34258__$1);
if(cljs.core.truth_(child_34264)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34264);


var G__34265 = cljs.core.next(seq__33737_34258__$1);
var G__34266 = null;
var G__34267 = (0);
var G__34268 = (0);
seq__33737_34244 = G__34265;
chunk__33739_34245 = G__34266;
count__33740_34246 = G__34267;
i__33741_34247 = G__34268;
continue;
} else {
var G__34269 = cljs.core.next(seq__33737_34258__$1);
var G__34270 = null;
var G__34271 = (0);
var G__34272 = (0);
seq__33737_34244 = G__34269;
chunk__33739_34245 = G__34270;
count__33740_34246 = G__34271;
i__33741_34247 = G__34272;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34243);
}


var G__34273 = cljs.core.next(seq__33715_34236__$1);
var G__34274 = null;
var G__34275 = (0);
var G__34276 = (0);
seq__33715_34193 = G__34273;
chunk__33716_34194 = G__34274;
count__33717_34195 = G__34275;
i__33718_34196 = G__34276;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33755 = cljs.core.seq(node);
var chunk__33756 = null;
var count__33757 = (0);
var i__33758 = (0);
while(true){
if((i__33758 < count__33757)){
var n = chunk__33756.cljs$core$IIndexed$_nth$arity$2(null,i__33758);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34277 = seq__33755;
var G__34278 = chunk__33756;
var G__34279 = count__33757;
var G__34280 = (i__33758 + (1));
seq__33755 = G__34277;
chunk__33756 = G__34278;
count__33757 = G__34279;
i__33758 = G__34280;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33755);
if(temp__5753__auto__){
var seq__33755__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33755__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33755__$1);
var G__34281 = cljs.core.chunk_rest(seq__33755__$1);
var G__34282 = c__4638__auto__;
var G__34283 = cljs.core.count(c__4638__auto__);
var G__34284 = (0);
seq__33755 = G__34281;
chunk__33756 = G__34282;
count__33757 = G__34283;
i__33758 = G__34284;
continue;
} else {
var n = cljs.core.first(seq__33755__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34285 = cljs.core.next(seq__33755__$1);
var G__34286 = null;
var G__34287 = (0);
var G__34288 = (0);
seq__33755 = G__34285;
chunk__33756 = G__34286;
count__33757 = G__34287;
i__33758 = G__34288;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33761 = arguments.length;
switch (G__33761) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33766 = arguments.length;
switch (G__33766) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33772 = arguments.length;
switch (G__33772) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34292 = arguments.length;
var i__4819__auto___34293 = (0);
while(true){
if((i__4819__auto___34293 < len__4818__auto___34292)){
args__4824__auto__.push((arguments[i__4819__auto___34293]));

var G__34294 = (i__4819__auto___34293 + (1));
i__4819__auto___34293 = G__34294;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33774_34295 = cljs.core.seq(nodes);
var chunk__33775_34296 = null;
var count__33776_34297 = (0);
var i__33777_34298 = (0);
while(true){
if((i__33777_34298 < count__33776_34297)){
var node_34299 = chunk__33775_34296.cljs$core$IIndexed$_nth$arity$2(null,i__33777_34298);
fragment.appendChild(shadow.dom._to_dom(node_34299));


var G__34300 = seq__33774_34295;
var G__34301 = chunk__33775_34296;
var G__34302 = count__33776_34297;
var G__34303 = (i__33777_34298 + (1));
seq__33774_34295 = G__34300;
chunk__33775_34296 = G__34301;
count__33776_34297 = G__34302;
i__33777_34298 = G__34303;
continue;
} else {
var temp__5753__auto___34304 = cljs.core.seq(seq__33774_34295);
if(temp__5753__auto___34304){
var seq__33774_34305__$1 = temp__5753__auto___34304;
if(cljs.core.chunked_seq_QMARK_(seq__33774_34305__$1)){
var c__4638__auto___34306 = cljs.core.chunk_first(seq__33774_34305__$1);
var G__34307 = cljs.core.chunk_rest(seq__33774_34305__$1);
var G__34308 = c__4638__auto___34306;
var G__34309 = cljs.core.count(c__4638__auto___34306);
var G__34310 = (0);
seq__33774_34295 = G__34307;
chunk__33775_34296 = G__34308;
count__33776_34297 = G__34309;
i__33777_34298 = G__34310;
continue;
} else {
var node_34311 = cljs.core.first(seq__33774_34305__$1);
fragment.appendChild(shadow.dom._to_dom(node_34311));


var G__34312 = cljs.core.next(seq__33774_34305__$1);
var G__34313 = null;
var G__34314 = (0);
var G__34315 = (0);
seq__33774_34295 = G__34312;
chunk__33775_34296 = G__34313;
count__33776_34297 = G__34314;
i__33777_34298 = G__34315;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33773){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33773));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33778_34316 = cljs.core.seq(scripts);
var chunk__33779_34317 = null;
var count__33780_34318 = (0);
var i__33781_34319 = (0);
while(true){
if((i__33781_34319 < count__33780_34318)){
var vec__33791_34320 = chunk__33779_34317.cljs$core$IIndexed$_nth$arity$2(null,i__33781_34319);
var script_tag_34321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791_34320,(0),null);
var script_body_34322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791_34320,(1),null);
eval(script_body_34322);


var G__34323 = seq__33778_34316;
var G__34324 = chunk__33779_34317;
var G__34325 = count__33780_34318;
var G__34326 = (i__33781_34319 + (1));
seq__33778_34316 = G__34323;
chunk__33779_34317 = G__34324;
count__33780_34318 = G__34325;
i__33781_34319 = G__34326;
continue;
} else {
var temp__5753__auto___34327 = cljs.core.seq(seq__33778_34316);
if(temp__5753__auto___34327){
var seq__33778_34328__$1 = temp__5753__auto___34327;
if(cljs.core.chunked_seq_QMARK_(seq__33778_34328__$1)){
var c__4638__auto___34329 = cljs.core.chunk_first(seq__33778_34328__$1);
var G__34330 = cljs.core.chunk_rest(seq__33778_34328__$1);
var G__34331 = c__4638__auto___34329;
var G__34332 = cljs.core.count(c__4638__auto___34329);
var G__34333 = (0);
seq__33778_34316 = G__34330;
chunk__33779_34317 = G__34331;
count__33780_34318 = G__34332;
i__33781_34319 = G__34333;
continue;
} else {
var vec__33794_34334 = cljs.core.first(seq__33778_34328__$1);
var script_tag_34335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33794_34334,(0),null);
var script_body_34336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33794_34334,(1),null);
eval(script_body_34336);


var G__34337 = cljs.core.next(seq__33778_34328__$1);
var G__34338 = null;
var G__34339 = (0);
var G__34340 = (0);
seq__33778_34316 = G__34337;
chunk__33779_34317 = G__34338;
count__33780_34318 = G__34339;
i__33781_34319 = G__34340;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33797){
var vec__33798 = p__33797;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33798,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33798,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33825 = arguments.length;
switch (G__33825) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33839 = cljs.core.seq(style_keys);
var chunk__33840 = null;
var count__33841 = (0);
var i__33842 = (0);
while(true){
if((i__33842 < count__33841)){
var it = chunk__33840.cljs$core$IIndexed$_nth$arity$2(null,i__33842);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34345 = seq__33839;
var G__34346 = chunk__33840;
var G__34347 = count__33841;
var G__34348 = (i__33842 + (1));
seq__33839 = G__34345;
chunk__33840 = G__34346;
count__33841 = G__34347;
i__33842 = G__34348;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33839);
if(temp__5753__auto__){
var seq__33839__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33839__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33839__$1);
var G__34349 = cljs.core.chunk_rest(seq__33839__$1);
var G__34350 = c__4638__auto__;
var G__34351 = cljs.core.count(c__4638__auto__);
var G__34352 = (0);
seq__33839 = G__34349;
chunk__33840 = G__34350;
count__33841 = G__34351;
i__33842 = G__34352;
continue;
} else {
var it = cljs.core.first(seq__33839__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34353 = cljs.core.next(seq__33839__$1);
var G__34354 = null;
var G__34355 = (0);
var G__34356 = (0);
seq__33839 = G__34353;
chunk__33840 = G__34354;
count__33841 = G__34355;
i__33842 = G__34356;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33850,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33854 = k33850;
var G__33854__$1 = (((G__33854 instanceof cljs.core.Keyword))?G__33854.fqn:null);
switch (G__33854__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33850,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33855){
var vec__33856 = p__33855;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33856,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33856,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33849){
var self__ = this;
var G__33849__$1 = this;
return (new cljs.core.RecordIter((0),G__33849__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33851,other33852){
var self__ = this;
var this33851__$1 = this;
return (((!((other33852 == null)))) && ((((this33851__$1.constructor === other33852.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33851__$1.x,other33852.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33851__$1.y,other33852.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33851__$1.__extmap,other33852.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33850){
var self__ = this;
var this__4468__auto____$1 = this;
var G__33873 = k33850;
var G__33873__$1 = (((G__33873 instanceof cljs.core.Keyword))?G__33873.fqn:null);
switch (G__33873__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33850);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33849){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__33874 = cljs.core.keyword_identical_QMARK_;
var expr__33875 = k__4470__auto__;
if(cljs.core.truth_((pred__33874.cljs$core$IFn$_invoke$arity$2 ? pred__33874.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33875) : pred__33874.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33875)))){
return (new shadow.dom.Coordinate(G__33849,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33874.cljs$core$IFn$_invoke$arity$2 ? pred__33874.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33875) : pred__33874.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33875)))){
return (new shadow.dom.Coordinate(self__.x,G__33849,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33849),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33849){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33849,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33853){
var extmap__4501__auto__ = (function (){var G__33878 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33853,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33853)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33878);
} else {
return G__33878;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33853),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33853),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33880,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33887 = k33880;
var G__33887__$1 = (((G__33887 instanceof cljs.core.Keyword))?G__33887.fqn:null);
switch (G__33887__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33880,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33888){
var vec__33889 = p__33888;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33889,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33889,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33879){
var self__ = this;
var G__33879__$1 = this;
return (new cljs.core.RecordIter((0),G__33879__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33881,other33882){
var self__ = this;
var this33881__$1 = this;
return (((!((other33882 == null)))) && ((((this33881__$1.constructor === other33882.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33881__$1.w,other33882.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33881__$1.h,other33882.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33881__$1.__extmap,other33882.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33880){
var self__ = this;
var this__4468__auto____$1 = this;
var G__33902 = k33880;
var G__33902__$1 = (((G__33902 instanceof cljs.core.Keyword))?G__33902.fqn:null);
switch (G__33902__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33880);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33879){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__33903 = cljs.core.keyword_identical_QMARK_;
var expr__33904 = k__4470__auto__;
if(cljs.core.truth_((pred__33903.cljs$core$IFn$_invoke$arity$2 ? pred__33903.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33904) : pred__33903.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33904)))){
return (new shadow.dom.Size(G__33879,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33903.cljs$core$IFn$_invoke$arity$2 ? pred__33903.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33904) : pred__33903.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33904)))){
return (new shadow.dom.Size(self__.w,G__33879,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33879),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33879){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33879,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33885){
var extmap__4501__auto__ = (function (){var G__33909 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33885,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33885)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33909);
} else {
return G__33909;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33885),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33885),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__34373 = (i + (1));
var G__34374 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34373;
ret = G__34374;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33932){
var vec__33933 = p__33932;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33933,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33933,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33949 = arguments.length;
switch (G__33949) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34383 = ps;
var G__34384 = (i + (1));
el__$1 = G__34383;
i = G__34384;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33971 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33974_34388 = cljs.core.seq(props);
var chunk__33975_34389 = null;
var count__33976_34390 = (0);
var i__33977_34391 = (0);
while(true){
if((i__33977_34391 < count__33976_34390)){
var vec__33988_34392 = chunk__33975_34389.cljs$core$IIndexed$_nth$arity$2(null,i__33977_34391);
var k_34393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33988_34392,(0),null);
var v_34394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33988_34392,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34393);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34393),v_34394);


var G__34395 = seq__33974_34388;
var G__34396 = chunk__33975_34389;
var G__34397 = count__33976_34390;
var G__34398 = (i__33977_34391 + (1));
seq__33974_34388 = G__34395;
chunk__33975_34389 = G__34396;
count__33976_34390 = G__34397;
i__33977_34391 = G__34398;
continue;
} else {
var temp__5753__auto___34399 = cljs.core.seq(seq__33974_34388);
if(temp__5753__auto___34399){
var seq__33974_34400__$1 = temp__5753__auto___34399;
if(cljs.core.chunked_seq_QMARK_(seq__33974_34400__$1)){
var c__4638__auto___34401 = cljs.core.chunk_first(seq__33974_34400__$1);
var G__34402 = cljs.core.chunk_rest(seq__33974_34400__$1);
var G__34403 = c__4638__auto___34401;
var G__34404 = cljs.core.count(c__4638__auto___34401);
var G__34405 = (0);
seq__33974_34388 = G__34402;
chunk__33975_34389 = G__34403;
count__33976_34390 = G__34404;
i__33977_34391 = G__34405;
continue;
} else {
var vec__33993_34406 = cljs.core.first(seq__33974_34400__$1);
var k_34407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33993_34406,(0),null);
var v_34408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33993_34406,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34407);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34407),v_34408);


var G__34409 = cljs.core.next(seq__33974_34400__$1);
var G__34410 = null;
var G__34411 = (0);
var G__34412 = (0);
seq__33974_34388 = G__34409;
chunk__33975_34389 = G__34410;
count__33976_34390 = G__34411;
i__33977_34391 = G__34412;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33997 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33997,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33997,(1),null);
var seq__34000_34413 = cljs.core.seq(node_children);
var chunk__34002_34414 = null;
var count__34003_34415 = (0);
var i__34004_34416 = (0);
while(true){
if((i__34004_34416 < count__34003_34415)){
var child_struct_34417 = chunk__34002_34414.cljs$core$IIndexed$_nth$arity$2(null,i__34004_34416);
if((!((child_struct_34417 == null)))){
if(typeof child_struct_34417 === 'string'){
var text_34418 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34418),child_struct_34417].join(''));
} else {
var children_34419 = shadow.dom.svg_node(child_struct_34417);
if(cljs.core.seq_QMARK_(children_34419)){
var seq__34048_34420 = cljs.core.seq(children_34419);
var chunk__34050_34421 = null;
var count__34051_34422 = (0);
var i__34052_34423 = (0);
while(true){
if((i__34052_34423 < count__34051_34422)){
var child_34424 = chunk__34050_34421.cljs$core$IIndexed$_nth$arity$2(null,i__34052_34423);
if(cljs.core.truth_(child_34424)){
node.appendChild(child_34424);


var G__34425 = seq__34048_34420;
var G__34426 = chunk__34050_34421;
var G__34427 = count__34051_34422;
var G__34428 = (i__34052_34423 + (1));
seq__34048_34420 = G__34425;
chunk__34050_34421 = G__34426;
count__34051_34422 = G__34427;
i__34052_34423 = G__34428;
continue;
} else {
var G__34429 = seq__34048_34420;
var G__34430 = chunk__34050_34421;
var G__34431 = count__34051_34422;
var G__34432 = (i__34052_34423 + (1));
seq__34048_34420 = G__34429;
chunk__34050_34421 = G__34430;
count__34051_34422 = G__34431;
i__34052_34423 = G__34432;
continue;
}
} else {
var temp__5753__auto___34433 = cljs.core.seq(seq__34048_34420);
if(temp__5753__auto___34433){
var seq__34048_34434__$1 = temp__5753__auto___34433;
if(cljs.core.chunked_seq_QMARK_(seq__34048_34434__$1)){
var c__4638__auto___34435 = cljs.core.chunk_first(seq__34048_34434__$1);
var G__34436 = cljs.core.chunk_rest(seq__34048_34434__$1);
var G__34437 = c__4638__auto___34435;
var G__34438 = cljs.core.count(c__4638__auto___34435);
var G__34439 = (0);
seq__34048_34420 = G__34436;
chunk__34050_34421 = G__34437;
count__34051_34422 = G__34438;
i__34052_34423 = G__34439;
continue;
} else {
var child_34440 = cljs.core.first(seq__34048_34434__$1);
if(cljs.core.truth_(child_34440)){
node.appendChild(child_34440);


var G__34441 = cljs.core.next(seq__34048_34434__$1);
var G__34442 = null;
var G__34443 = (0);
var G__34444 = (0);
seq__34048_34420 = G__34441;
chunk__34050_34421 = G__34442;
count__34051_34422 = G__34443;
i__34052_34423 = G__34444;
continue;
} else {
var G__34445 = cljs.core.next(seq__34048_34434__$1);
var G__34446 = null;
var G__34447 = (0);
var G__34448 = (0);
seq__34048_34420 = G__34445;
chunk__34050_34421 = G__34446;
count__34051_34422 = G__34447;
i__34052_34423 = G__34448;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34419);
}
}


var G__34449 = seq__34000_34413;
var G__34450 = chunk__34002_34414;
var G__34451 = count__34003_34415;
var G__34452 = (i__34004_34416 + (1));
seq__34000_34413 = G__34449;
chunk__34002_34414 = G__34450;
count__34003_34415 = G__34451;
i__34004_34416 = G__34452;
continue;
} else {
var G__34453 = seq__34000_34413;
var G__34454 = chunk__34002_34414;
var G__34455 = count__34003_34415;
var G__34456 = (i__34004_34416 + (1));
seq__34000_34413 = G__34453;
chunk__34002_34414 = G__34454;
count__34003_34415 = G__34455;
i__34004_34416 = G__34456;
continue;
}
} else {
var temp__5753__auto___34457 = cljs.core.seq(seq__34000_34413);
if(temp__5753__auto___34457){
var seq__34000_34458__$1 = temp__5753__auto___34457;
if(cljs.core.chunked_seq_QMARK_(seq__34000_34458__$1)){
var c__4638__auto___34459 = cljs.core.chunk_first(seq__34000_34458__$1);
var G__34460 = cljs.core.chunk_rest(seq__34000_34458__$1);
var G__34461 = c__4638__auto___34459;
var G__34462 = cljs.core.count(c__4638__auto___34459);
var G__34463 = (0);
seq__34000_34413 = G__34460;
chunk__34002_34414 = G__34461;
count__34003_34415 = G__34462;
i__34004_34416 = G__34463;
continue;
} else {
var child_struct_34464 = cljs.core.first(seq__34000_34458__$1);
if((!((child_struct_34464 == null)))){
if(typeof child_struct_34464 === 'string'){
var text_34465 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34465),child_struct_34464].join(''));
} else {
var children_34466 = shadow.dom.svg_node(child_struct_34464);
if(cljs.core.seq_QMARK_(children_34466)){
var seq__34061_34467 = cljs.core.seq(children_34466);
var chunk__34063_34468 = null;
var count__34064_34469 = (0);
var i__34065_34470 = (0);
while(true){
if((i__34065_34470 < count__34064_34469)){
var child_34471 = chunk__34063_34468.cljs$core$IIndexed$_nth$arity$2(null,i__34065_34470);
if(cljs.core.truth_(child_34471)){
node.appendChild(child_34471);


var G__34472 = seq__34061_34467;
var G__34473 = chunk__34063_34468;
var G__34474 = count__34064_34469;
var G__34475 = (i__34065_34470 + (1));
seq__34061_34467 = G__34472;
chunk__34063_34468 = G__34473;
count__34064_34469 = G__34474;
i__34065_34470 = G__34475;
continue;
} else {
var G__34476 = seq__34061_34467;
var G__34477 = chunk__34063_34468;
var G__34478 = count__34064_34469;
var G__34479 = (i__34065_34470 + (1));
seq__34061_34467 = G__34476;
chunk__34063_34468 = G__34477;
count__34064_34469 = G__34478;
i__34065_34470 = G__34479;
continue;
}
} else {
var temp__5753__auto___34480__$1 = cljs.core.seq(seq__34061_34467);
if(temp__5753__auto___34480__$1){
var seq__34061_34481__$1 = temp__5753__auto___34480__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34061_34481__$1)){
var c__4638__auto___34482 = cljs.core.chunk_first(seq__34061_34481__$1);
var G__34483 = cljs.core.chunk_rest(seq__34061_34481__$1);
var G__34484 = c__4638__auto___34482;
var G__34485 = cljs.core.count(c__4638__auto___34482);
var G__34486 = (0);
seq__34061_34467 = G__34483;
chunk__34063_34468 = G__34484;
count__34064_34469 = G__34485;
i__34065_34470 = G__34486;
continue;
} else {
var child_34487 = cljs.core.first(seq__34061_34481__$1);
if(cljs.core.truth_(child_34487)){
node.appendChild(child_34487);


var G__34488 = cljs.core.next(seq__34061_34481__$1);
var G__34489 = null;
var G__34490 = (0);
var G__34491 = (0);
seq__34061_34467 = G__34488;
chunk__34063_34468 = G__34489;
count__34064_34469 = G__34490;
i__34065_34470 = G__34491;
continue;
} else {
var G__34492 = cljs.core.next(seq__34061_34481__$1);
var G__34493 = null;
var G__34494 = (0);
var G__34495 = (0);
seq__34061_34467 = G__34492;
chunk__34063_34468 = G__34493;
count__34064_34469 = G__34494;
i__34065_34470 = G__34495;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34466);
}
}


var G__34496 = cljs.core.next(seq__34000_34458__$1);
var G__34497 = null;
var G__34498 = (0);
var G__34499 = (0);
seq__34000_34413 = G__34496;
chunk__34002_34414 = G__34497;
count__34003_34415 = G__34498;
i__34004_34416 = G__34499;
continue;
} else {
var G__34500 = cljs.core.next(seq__34000_34458__$1);
var G__34501 = null;
var G__34502 = (0);
var G__34503 = (0);
seq__34000_34413 = G__34500;
chunk__34002_34414 = G__34501;
count__34003_34415 = G__34502;
i__34004_34416 = G__34503;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34507 = arguments.length;
var i__4819__auto___34508 = (0);
while(true){
if((i__4819__auto___34508 < len__4818__auto___34507)){
args__4824__auto__.push((arguments[i__4819__auto___34508]));

var G__34509 = (i__4819__auto___34508 + (1));
i__4819__auto___34508 = G__34509;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34079){
var G__34080 = cljs.core.first(seq34079);
var seq34079__$1 = cljs.core.next(seq34079);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34080,seq34079__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34089 = arguments.length;
switch (G__34089) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__30151__auto___34511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_34095){
var state_val_34096 = (state_34095[(1)]);
if((state_val_34096 === (1))){
var state_34095__$1 = state_34095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34095__$1,(2),once_or_cleanup);
} else {
if((state_val_34096 === (2))){
var inst_34092 = (state_34095[(2)]);
var inst_34093 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34095__$1 = (function (){var statearr_34097 = state_34095;
(statearr_34097[(7)] = inst_34092);

return statearr_34097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34095__$1,inst_34093);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29630__auto__ = null;
var shadow$dom$state_machine__29630__auto____0 = (function (){
var statearr_34098 = [null,null,null,null,null,null,null,null];
(statearr_34098[(0)] = shadow$dom$state_machine__29630__auto__);

(statearr_34098[(1)] = (1));

return statearr_34098;
});
var shadow$dom$state_machine__29630__auto____1 = (function (state_34095){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_34095);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e34105){var ex__29633__auto__ = e34105;
var statearr_34106_34515 = state_34095;
(statearr_34106_34515[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_34095[(4)]))){
var statearr_34107_34516 = state_34095;
(statearr_34107_34516[(1)] = cljs.core.first((state_34095[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34517 = state_34095;
state_34095 = G__34517;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
shadow$dom$state_machine__29630__auto__ = function(state_34095){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29630__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29630__auto____1.call(this,state_34095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29630__auto____0;
shadow$dom$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29630__auto____1;
return shadow$dom$state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_34108 = f__30159__auto__();
(statearr_34108[(6)] = c__30151__auto___34511);

return statearr_34108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
