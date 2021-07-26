goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30247 = arguments.length;
switch (G__30247) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30254 = (function (f,blockable,meta30255){
this.f = f;
this.blockable = blockable;
this.meta30255 = meta30255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30256,meta30255__$1){
var self__ = this;
var _30256__$1 = this;
return (new cljs.core.async.t_cljs$core$async30254(self__.f,self__.blockable,meta30255__$1));
}));

(cljs.core.async.t_cljs$core$async30254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30256){
var self__ = this;
var _30256__$1 = this;
return self__.meta30255;
}));

(cljs.core.async.t_cljs$core$async30254.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30254.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30255","meta30255",-2110197744,null)], null);
}));

(cljs.core.async.t_cljs$core$async30254.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30254");

(cljs.core.async.t_cljs$core$async30254.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30254");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30254.
 */
cljs.core.async.__GT_t_cljs$core$async30254 = (function cljs$core$async$__GT_t_cljs$core$async30254(f__$1,blockable__$1,meta30255){
return (new cljs.core.async.t_cljs$core$async30254(f__$1,blockable__$1,meta30255));
});

}

return (new cljs.core.async.t_cljs$core$async30254(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30276 = arguments.length;
switch (G__30276) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30281 = arguments.length;
switch (G__30281) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30283 = arguments.length;
switch (G__30283) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33016 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33016) : fn1.call(null,val_33016));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33016) : fn1.call(null,val_33016));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30293 = arguments.length;
switch (G__30293) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___33018 = n;
var x_33019 = (0);
while(true){
if((x_33019 < n__4695__auto___33018)){
(a[x_33019] = x_33019);

var G__33020 = (x_33019 + (1));
x_33019 = G__33020;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30308 = (function (flag,meta30309){
this.flag = flag;
this.meta30309 = meta30309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30310,meta30309__$1){
var self__ = this;
var _30310__$1 = this;
return (new cljs.core.async.t_cljs$core$async30308(self__.flag,meta30309__$1));
}));

(cljs.core.async.t_cljs$core$async30308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30310){
var self__ = this;
var _30310__$1 = this;
return self__.meta30309;
}));

(cljs.core.async.t_cljs$core$async30308.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30308.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30309","meta30309",122776034,null)], null);
}));

(cljs.core.async.t_cljs$core$async30308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30308");

(cljs.core.async.t_cljs$core$async30308.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30308.
 */
cljs.core.async.__GT_t_cljs$core$async30308 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30308(flag__$1,meta30309){
return (new cljs.core.async.t_cljs$core$async30308(flag__$1,meta30309));
});

}

return (new cljs.core.async.t_cljs$core$async30308(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30316 = (function (flag,cb,meta30317){
this.flag = flag;
this.cb = cb;
this.meta30317 = meta30317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30318,meta30317__$1){
var self__ = this;
var _30318__$1 = this;
return (new cljs.core.async.t_cljs$core$async30316(self__.flag,self__.cb,meta30317__$1));
}));

(cljs.core.async.t_cljs$core$async30316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30318){
var self__ = this;
var _30318__$1 = this;
return self__.meta30317;
}));

(cljs.core.async.t_cljs$core$async30316.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30316.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30316.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30316.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30317","meta30317",745668197,null)], null);
}));

(cljs.core.async.t_cljs$core$async30316.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30316");

(cljs.core.async.t_cljs$core$async30316.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30316");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30316.
 */
cljs.core.async.__GT_t_cljs$core$async30316 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30316(flag__$1,cb__$1,meta30317){
return (new cljs.core.async.t_cljs$core$async30316(flag__$1,cb__$1,meta30317));
});

}

return (new cljs.core.async.t_cljs$core$async30316(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30329_SHARP_){
var G__30331 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30329_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30331) : fret.call(null,G__30331));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30330_SHARP_){
var G__30332 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30330_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30332) : fret.call(null,G__30332));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33026 = (i + (1));
i = G__33026;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33028 = arguments.length;
var i__4819__auto___33029 = (0);
while(true){
if((i__4819__auto___33029 < len__4818__auto___33028)){
args__4824__auto__.push((arguments[i__4819__auto___33029]));

var G__33031 = (i__4819__auto___33029 + (1));
i__4819__auto___33029 = G__33031;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30342){
var map__30343 = p__30342;
var map__30343__$1 = cljs.core.__destructure_map(map__30343);
var opts = map__30343__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30334){
var G__30335 = cljs.core.first(seq30334);
var seq30334__$1 = cljs.core.next(seq30334);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30335,seq30334__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30361 = arguments.length;
switch (G__30361) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30151__auto___33033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_30403){
var state_val_30404 = (state_30403[(1)]);
if((state_val_30404 === (7))){
var inst_30399 = (state_30403[(2)]);
var state_30403__$1 = state_30403;
var statearr_30405_33034 = state_30403__$1;
(statearr_30405_33034[(2)] = inst_30399);

(statearr_30405_33034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (1))){
var state_30403__$1 = state_30403;
var statearr_30406_33035 = state_30403__$1;
(statearr_30406_33035[(2)] = null);

(statearr_30406_33035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (4))){
var inst_30377 = (state_30403[(7)]);
var inst_30377__$1 = (state_30403[(2)]);
var inst_30382 = (inst_30377__$1 == null);
var state_30403__$1 = (function (){var statearr_30408 = state_30403;
(statearr_30408[(7)] = inst_30377__$1);

return statearr_30408;
})();
if(cljs.core.truth_(inst_30382)){
var statearr_30418_33036 = state_30403__$1;
(statearr_30418_33036[(1)] = (5));

} else {
var statearr_30419_33037 = state_30403__$1;
(statearr_30419_33037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (13))){
var state_30403__$1 = state_30403;
var statearr_30424_33038 = state_30403__$1;
(statearr_30424_33038[(2)] = null);

(statearr_30424_33038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (6))){
var inst_30377 = (state_30403[(7)]);
var state_30403__$1 = state_30403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30403__$1,(11),to,inst_30377);
} else {
if((state_val_30404 === (3))){
var inst_30401 = (state_30403[(2)]);
var state_30403__$1 = state_30403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30403__$1,inst_30401);
} else {
if((state_val_30404 === (12))){
var state_30403__$1 = state_30403;
var statearr_30437_33039 = state_30403__$1;
(statearr_30437_33039[(2)] = null);

(statearr_30437_33039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (2))){
var state_30403__$1 = state_30403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30403__$1,(4),from);
} else {
if((state_val_30404 === (11))){
var inst_30392 = (state_30403[(2)]);
var state_30403__$1 = state_30403;
if(cljs.core.truth_(inst_30392)){
var statearr_30438_33040 = state_30403__$1;
(statearr_30438_33040[(1)] = (12));

} else {
var statearr_30439_33041 = state_30403__$1;
(statearr_30439_33041[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (9))){
var state_30403__$1 = state_30403;
var statearr_30440_33042 = state_30403__$1;
(statearr_30440_33042[(2)] = null);

(statearr_30440_33042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (5))){
var state_30403__$1 = state_30403;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30441_33043 = state_30403__$1;
(statearr_30441_33043[(1)] = (8));

} else {
var statearr_30442_33044 = state_30403__$1;
(statearr_30442_33044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (14))){
var inst_30397 = (state_30403[(2)]);
var state_30403__$1 = state_30403;
var statearr_30448_33045 = state_30403__$1;
(statearr_30448_33045[(2)] = inst_30397);

(statearr_30448_33045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (10))){
var inst_30389 = (state_30403[(2)]);
var state_30403__$1 = state_30403;
var statearr_30454_33046 = state_30403__$1;
(statearr_30454_33046[(2)] = inst_30389);

(statearr_30454_33046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (8))){
var inst_30385 = cljs.core.async.close_BANG_(to);
var state_30403__$1 = state_30403;
var statearr_30459_33047 = state_30403__$1;
(statearr_30459_33047[(2)] = inst_30385);

(statearr_30459_33047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29630__auto__ = null;
var cljs$core$async$state_machine__29630__auto____0 = (function (){
var statearr_30476 = [null,null,null,null,null,null,null,null];
(statearr_30476[(0)] = cljs$core$async$state_machine__29630__auto__);

(statearr_30476[(1)] = (1));

return statearr_30476;
});
var cljs$core$async$state_machine__29630__auto____1 = (function (state_30403){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_30403);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e30477){var ex__29633__auto__ = e30477;
var statearr_30479_33048 = state_30403;
(statearr_30479_33048[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_30403[(4)]))){
var statearr_30480_33049 = state_30403;
(statearr_30480_33049[(1)] = cljs.core.first((state_30403[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33050 = state_30403;
state_30403 = G__33050;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$state_machine__29630__auto__ = function(state_30403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29630__auto____1.call(this,state_30403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29630__auto____0;
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29630__auto____1;
return cljs$core$async$state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_30481 = f__30159__auto__();
(statearr_30481[(6)] = c__30151__auto___33033);

return statearr_30481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30487){
var vec__30491 = p__30487;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30491,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30491,(1),null);
var job = vec__30491;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30151__auto___33053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_30503){
var state_val_30504 = (state_30503[(1)]);
if((state_val_30504 === (1))){
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30503__$1,(2),res,v);
} else {
if((state_val_30504 === (2))){
var inst_30500 = (state_30503[(2)]);
var inst_30501 = cljs.core.async.close_BANG_(res);
var state_30503__$1 = (function (){var statearr_30505 = state_30503;
(statearr_30505[(7)] = inst_30500);

return statearr_30505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30503__$1,inst_30501);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____0 = (function (){
var statearr_30510 = [null,null,null,null,null,null,null,null];
(statearr_30510[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__);

(statearr_30510[(1)] = (1));

return statearr_30510;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____1 = (function (state_30503){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_30503);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e30511){var ex__29633__auto__ = e30511;
var statearr_30512_33054 = state_30503;
(statearr_30512_33054[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_30503[(4)]))){
var statearr_30518_33055 = state_30503;
(statearr_30518_33055[(1)] = cljs.core.first((state_30503[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33056 = state_30503;
state_30503 = G__33056;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__ = function(state_30503){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____1.call(this,state_30503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_30519 = f__30159__auto__();
(statearr_30519[(6)] = c__30151__auto___33053);

return statearr_30519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30520){
var vec__30521 = p__30520;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30521,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30521,(1),null);
var job = vec__30521;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___33057 = n;
var __33058 = (0);
while(true){
if((__33058 < n__4695__auto___33057)){
var G__30524_33059 = type;
var G__30524_33060__$1 = (((G__30524_33059 instanceof cljs.core.Keyword))?G__30524_33059.fqn:null);
switch (G__30524_33060__$1) {
case "compute":
var c__30151__auto___33062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33058,c__30151__auto___33062,G__30524_33059,G__30524_33060__$1,n__4695__auto___33057,jobs,results,process,async){
return (function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = ((function (__33058,c__30151__auto___33062,G__30524_33059,G__30524_33060__$1,n__4695__auto___33057,jobs,results,process,async){
return (function (state_30537){
var state_val_30538 = (state_30537[(1)]);
if((state_val_30538 === (1))){
var state_30537__$1 = state_30537;
var statearr_30539_33063 = state_30537__$1;
(statearr_30539_33063[(2)] = null);

(statearr_30539_33063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (2))){
var state_30537__$1 = state_30537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30537__$1,(4),jobs);
} else {
if((state_val_30538 === (3))){
var inst_30535 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30537__$1,inst_30535);
} else {
if((state_val_30538 === (4))){
var inst_30527 = (state_30537[(2)]);
var inst_30528 = process(inst_30527);
var state_30537__$1 = state_30537;
if(cljs.core.truth_(inst_30528)){
var statearr_30542_33066 = state_30537__$1;
(statearr_30542_33066[(1)] = (5));

} else {
var statearr_30544_33067 = state_30537__$1;
(statearr_30544_33067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (5))){
var state_30537__$1 = state_30537;
var statearr_30545_33068 = state_30537__$1;
(statearr_30545_33068[(2)] = null);

(statearr_30545_33068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (6))){
var state_30537__$1 = state_30537;
var statearr_30547_33069 = state_30537__$1;
(statearr_30547_33069[(2)] = null);

(statearr_30547_33069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (7))){
var inst_30533 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
var statearr_30548_33070 = state_30537__$1;
(statearr_30548_33070[(2)] = inst_30533);

(statearr_30548_33070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33058,c__30151__auto___33062,G__30524_33059,G__30524_33060__$1,n__4695__auto___33057,jobs,results,process,async))
;
return ((function (__33058,switch__29629__auto__,c__30151__auto___33062,G__30524_33059,G__30524_33060__$1,n__4695__auto___33057,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____0 = (function (){
var statearr_30551 = [null,null,null,null,null,null,null];
(statearr_30551[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__);

(statearr_30551[(1)] = (1));

return statearr_30551;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____1 = (function (state_30537){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_30537);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e30552){var ex__29633__auto__ = e30552;
var statearr_30553_33071 = state_30537;
(statearr_30553_33071[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_30537[(4)]))){
var statearr_30554_33072 = state_30537;
(statearr_30554_33072[(1)] = cljs.core.first((state_30537[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33073 = state_30537;
state_30537 = G__33073;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__ = function(state_30537){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____1.call(this,state_30537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__;
})()
;})(__33058,switch__29629__auto__,c__30151__auto___33062,G__30524_33059,G__30524_33060__$1,n__4695__auto___33057,jobs,results,process,async))
})();
var state__30160__auto__ = (function (){var statearr_30555 = f__30159__auto__();
(statearr_30555[(6)] = c__30151__auto___33062);

return statearr_30555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
});})(__33058,c__30151__auto___33062,G__30524_33059,G__30524_33060__$1,n__4695__auto___33057,jobs,results,process,async))
);


break;
case "async":
var c__30151__auto___33074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33058,c__30151__auto___33074,G__30524_33059,G__30524_33060__$1,n__4695__auto___33057,jobs,results,process,async){
return (function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = ((function (__33058,c__30151__auto___33074,G__30524_33059,G__30524_33060__$1,n__4695__auto___33057,jobs,results,process,async){
return (function (state_30568){
var state_val_30569 = (state_30568[(1)]);
if((state_val_30569 === (1))){
var state_30568__$1 = state_30568;
var statearr_30574_33075 = state_30568__$1;
(statearr_30574_33075[(2)] = null);

(statearr_30574_33075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (2))){
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30568__$1,(4),jobs);
} else {
if((state_val_30569 === (3))){
var inst_30566 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30568__$1,inst_30566);
} else {
if((state_val_30569 === (4))){
var inst_30558 = (state_30568[(2)]);
var inst_30559 = async(inst_30558);
var state_30568__$1 = state_30568;
if(cljs.core.truth_(inst_30559)){
var statearr_30576_33076 = state_30568__$1;
(statearr_30576_33076[(1)] = (5));

} else {
var statearr_30577_33077 = state_30568__$1;
(statearr_30577_33077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (5))){
var state_30568__$1 = state_30568;
var statearr_30578_33078 = state_30568__$1;
(statearr_30578_33078[(2)] = null);

(statearr_30578_33078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (6))){
var state_30568__$1 = state_30568;
var statearr_30579_33079 = state_30568__$1;
(statearr_30579_33079[(2)] = null);

(statearr_30579_33079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (7))){
var inst_30564 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30580_33080 = state_30568__$1;
(statearr_30580_33080[(2)] = inst_30564);

(statearr_30580_33080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33058,c__30151__auto___33074,G__30524_33059,G__30524_33060__$1,n__4695__auto___33057,jobs,results,process,async))
;
return ((function (__33058,switch__29629__auto__,c__30151__auto___33074,G__30524_33059,G__30524_33060__$1,n__4695__auto___33057,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____0 = (function (){
var statearr_30581 = [null,null,null,null,null,null,null];
(statearr_30581[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__);

(statearr_30581[(1)] = (1));

return statearr_30581;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____1 = (function (state_30568){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_30568);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e30586){var ex__29633__auto__ = e30586;
var statearr_30587_33081 = state_30568;
(statearr_30587_33081[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_30568[(4)]))){
var statearr_30588_33082 = state_30568;
(statearr_30588_33082[(1)] = cljs.core.first((state_30568[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33083 = state_30568;
state_30568 = G__33083;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__ = function(state_30568){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____1.call(this,state_30568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__;
})()
;})(__33058,switch__29629__auto__,c__30151__auto___33074,G__30524_33059,G__30524_33060__$1,n__4695__auto___33057,jobs,results,process,async))
})();
var state__30160__auto__ = (function (){var statearr_30589 = f__30159__auto__();
(statearr_30589[(6)] = c__30151__auto___33074);

return statearr_30589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
});})(__33058,c__30151__auto___33074,G__30524_33059,G__30524_33060__$1,n__4695__auto___33057,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30524_33060__$1)].join('')));

}

var G__33084 = (__33058 + (1));
__33058 = G__33084;
continue;
} else {
}
break;
}

var c__30151__auto___33085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_30615){
var state_val_30616 = (state_30615[(1)]);
if((state_val_30616 === (7))){
var inst_30611 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
var statearr_30617_33086 = state_30615__$1;
(statearr_30617_33086[(2)] = inst_30611);

(statearr_30617_33086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (1))){
var state_30615__$1 = state_30615;
var statearr_30618_33087 = state_30615__$1;
(statearr_30618_33087[(2)] = null);

(statearr_30618_33087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (4))){
var inst_30593 = (state_30615[(7)]);
var inst_30593__$1 = (state_30615[(2)]);
var inst_30594 = (inst_30593__$1 == null);
var state_30615__$1 = (function (){var statearr_30619 = state_30615;
(statearr_30619[(7)] = inst_30593__$1);

return statearr_30619;
})();
if(cljs.core.truth_(inst_30594)){
var statearr_30620_33088 = state_30615__$1;
(statearr_30620_33088[(1)] = (5));

} else {
var statearr_30622_33089 = state_30615__$1;
(statearr_30622_33089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (6))){
var inst_30598 = (state_30615[(8)]);
var inst_30593 = (state_30615[(7)]);
var inst_30598__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30599 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30600 = [inst_30593,inst_30598__$1];
var inst_30601 = (new cljs.core.PersistentVector(null,2,(5),inst_30599,inst_30600,null));
var state_30615__$1 = (function (){var statearr_30624 = state_30615;
(statearr_30624[(8)] = inst_30598__$1);

return statearr_30624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30615__$1,(8),jobs,inst_30601);
} else {
if((state_val_30616 === (3))){
var inst_30613 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30615__$1,inst_30613);
} else {
if((state_val_30616 === (2))){
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30615__$1,(4),from);
} else {
if((state_val_30616 === (9))){
var inst_30608 = (state_30615[(2)]);
var state_30615__$1 = (function (){var statearr_30625 = state_30615;
(statearr_30625[(9)] = inst_30608);

return statearr_30625;
})();
var statearr_30626_33090 = state_30615__$1;
(statearr_30626_33090[(2)] = null);

(statearr_30626_33090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (5))){
var inst_30596 = cljs.core.async.close_BANG_(jobs);
var state_30615__$1 = state_30615;
var statearr_30627_33091 = state_30615__$1;
(statearr_30627_33091[(2)] = inst_30596);

(statearr_30627_33091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (8))){
var inst_30598 = (state_30615[(8)]);
var inst_30606 = (state_30615[(2)]);
var state_30615__$1 = (function (){var statearr_30629 = state_30615;
(statearr_30629[(10)] = inst_30606);

return statearr_30629;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30615__$1,(9),results,inst_30598);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____0 = (function (){
var statearr_30630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30630[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__);

(statearr_30630[(1)] = (1));

return statearr_30630;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____1 = (function (state_30615){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_30615);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e30631){var ex__29633__auto__ = e30631;
var statearr_30636_33093 = state_30615;
(statearr_30636_33093[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_30615[(4)]))){
var statearr_30637_33094 = state_30615;
(statearr_30637_33094[(1)] = cljs.core.first((state_30615[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33095 = state_30615;
state_30615 = G__33095;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__ = function(state_30615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____1.call(this,state_30615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_30641 = f__30159__auto__();
(statearr_30641[(6)] = c__30151__auto___33085);

return statearr_30641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));


var c__30151__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_30686){
var state_val_30687 = (state_30686[(1)]);
if((state_val_30687 === (7))){
var inst_30681 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
var statearr_30689_33096 = state_30686__$1;
(statearr_30689_33096[(2)] = inst_30681);

(statearr_30689_33096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (20))){
var state_30686__$1 = state_30686;
var statearr_30693_33097 = state_30686__$1;
(statearr_30693_33097[(2)] = null);

(statearr_30693_33097[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (1))){
var state_30686__$1 = state_30686;
var statearr_30694_33098 = state_30686__$1;
(statearr_30694_33098[(2)] = null);

(statearr_30694_33098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (4))){
var inst_30644 = (state_30686[(7)]);
var inst_30644__$1 = (state_30686[(2)]);
var inst_30645 = (inst_30644__$1 == null);
var state_30686__$1 = (function (){var statearr_30695 = state_30686;
(statearr_30695[(7)] = inst_30644__$1);

return statearr_30695;
})();
if(cljs.core.truth_(inst_30645)){
var statearr_30696_33099 = state_30686__$1;
(statearr_30696_33099[(1)] = (5));

} else {
var statearr_30697_33100 = state_30686__$1;
(statearr_30697_33100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (15))){
var inst_30660 = (state_30686[(8)]);
var state_30686__$1 = state_30686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30686__$1,(18),to,inst_30660);
} else {
if((state_val_30687 === (21))){
var inst_30676 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
var statearr_30701_33101 = state_30686__$1;
(statearr_30701_33101[(2)] = inst_30676);

(statearr_30701_33101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (13))){
var inst_30678 = (state_30686[(2)]);
var state_30686__$1 = (function (){var statearr_30702 = state_30686;
(statearr_30702[(9)] = inst_30678);

return statearr_30702;
})();
var statearr_30703_33102 = state_30686__$1;
(statearr_30703_33102[(2)] = null);

(statearr_30703_33102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (6))){
var inst_30644 = (state_30686[(7)]);
var state_30686__$1 = state_30686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30686__$1,(11),inst_30644);
} else {
if((state_val_30687 === (17))){
var inst_30668 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
if(cljs.core.truth_(inst_30668)){
var statearr_30704_33103 = state_30686__$1;
(statearr_30704_33103[(1)] = (19));

} else {
var statearr_30705_33104 = state_30686__$1;
(statearr_30705_33104[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (3))){
var inst_30683 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30686__$1,inst_30683);
} else {
if((state_val_30687 === (12))){
var inst_30657 = (state_30686[(10)]);
var state_30686__$1 = state_30686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30686__$1,(14),inst_30657);
} else {
if((state_val_30687 === (2))){
var state_30686__$1 = state_30686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30686__$1,(4),results);
} else {
if((state_val_30687 === (19))){
var state_30686__$1 = state_30686;
var statearr_30710_33105 = state_30686__$1;
(statearr_30710_33105[(2)] = null);

(statearr_30710_33105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (11))){
var inst_30657 = (state_30686[(2)]);
var state_30686__$1 = (function (){var statearr_30714 = state_30686;
(statearr_30714[(10)] = inst_30657);

return statearr_30714;
})();
var statearr_30715_33106 = state_30686__$1;
(statearr_30715_33106[(2)] = null);

(statearr_30715_33106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (9))){
var state_30686__$1 = state_30686;
var statearr_30716_33107 = state_30686__$1;
(statearr_30716_33107[(2)] = null);

(statearr_30716_33107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (5))){
var state_30686__$1 = state_30686;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30721_33108 = state_30686__$1;
(statearr_30721_33108[(1)] = (8));

} else {
var statearr_30722_33109 = state_30686__$1;
(statearr_30722_33109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (14))){
var inst_30662 = (state_30686[(11)]);
var inst_30660 = (state_30686[(8)]);
var inst_30660__$1 = (state_30686[(2)]);
var inst_30661 = (inst_30660__$1 == null);
var inst_30662__$1 = cljs.core.not(inst_30661);
var state_30686__$1 = (function (){var statearr_30731 = state_30686;
(statearr_30731[(11)] = inst_30662__$1);

(statearr_30731[(8)] = inst_30660__$1);

return statearr_30731;
})();
if(inst_30662__$1){
var statearr_30735_33110 = state_30686__$1;
(statearr_30735_33110[(1)] = (15));

} else {
var statearr_30736_33111 = state_30686__$1;
(statearr_30736_33111[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (16))){
var inst_30662 = (state_30686[(11)]);
var state_30686__$1 = state_30686;
var statearr_30740_33112 = state_30686__$1;
(statearr_30740_33112[(2)] = inst_30662);

(statearr_30740_33112[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (10))){
var inst_30654 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
var statearr_30741_33113 = state_30686__$1;
(statearr_30741_33113[(2)] = inst_30654);

(statearr_30741_33113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (18))){
var inst_30665 = (state_30686[(2)]);
var state_30686__$1 = state_30686;
var statearr_30742_33114 = state_30686__$1;
(statearr_30742_33114[(2)] = inst_30665);

(statearr_30742_33114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30687 === (8))){
var inst_30651 = cljs.core.async.close_BANG_(to);
var state_30686__$1 = state_30686;
var statearr_30743_33115 = state_30686__$1;
(statearr_30743_33115[(2)] = inst_30651);

(statearr_30743_33115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____0 = (function (){
var statearr_30748 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__);

(statearr_30748[(1)] = (1));

return statearr_30748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____1 = (function (state_30686){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_30686);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e30749){var ex__29633__auto__ = e30749;
var statearr_30750_33116 = state_30686;
(statearr_30750_33116[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_30686[(4)]))){
var statearr_30751_33117 = state_30686;
(statearr_30751_33117[(1)] = cljs.core.first((state_30686[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33119 = state_30686;
state_30686 = G__33119;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__ = function(state_30686){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____1.call(this,state_30686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_30752 = f__30159__auto__();
(statearr_30752[(6)] = c__30151__auto__);

return statearr_30752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));

return c__30151__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30754 = arguments.length;
switch (G__30754) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30759 = arguments.length;
switch (G__30759) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30770 = arguments.length;
switch (G__30770) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30151__auto___33126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_30807){
var state_val_30808 = (state_30807[(1)]);
if((state_val_30808 === (7))){
var inst_30802 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
var statearr_30809_33130 = state_30807__$1;
(statearr_30809_33130[(2)] = inst_30802);

(statearr_30809_33130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (1))){
var state_30807__$1 = state_30807;
var statearr_30810_33134 = state_30807__$1;
(statearr_30810_33134[(2)] = null);

(statearr_30810_33134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (4))){
var inst_30782 = (state_30807[(7)]);
var inst_30782__$1 = (state_30807[(2)]);
var inst_30783 = (inst_30782__$1 == null);
var state_30807__$1 = (function (){var statearr_30811 = state_30807;
(statearr_30811[(7)] = inst_30782__$1);

return statearr_30811;
})();
if(cljs.core.truth_(inst_30783)){
var statearr_30812_33137 = state_30807__$1;
(statearr_30812_33137[(1)] = (5));

} else {
var statearr_30813_33138 = state_30807__$1;
(statearr_30813_33138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (13))){
var state_30807__$1 = state_30807;
var statearr_30814_33139 = state_30807__$1;
(statearr_30814_33139[(2)] = null);

(statearr_30814_33139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (6))){
var inst_30782 = (state_30807[(7)]);
var inst_30788 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30782) : p.call(null,inst_30782));
var state_30807__$1 = state_30807;
if(cljs.core.truth_(inst_30788)){
var statearr_30815_33140 = state_30807__$1;
(statearr_30815_33140[(1)] = (9));

} else {
var statearr_30816_33141 = state_30807__$1;
(statearr_30816_33141[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (3))){
var inst_30805 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30807__$1,inst_30805);
} else {
if((state_val_30808 === (12))){
var state_30807__$1 = state_30807;
var statearr_30817_33143 = state_30807__$1;
(statearr_30817_33143[(2)] = null);

(statearr_30817_33143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (2))){
var state_30807__$1 = state_30807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30807__$1,(4),ch);
} else {
if((state_val_30808 === (11))){
var inst_30782 = (state_30807[(7)]);
var inst_30793 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30807__$1,(8),inst_30793,inst_30782);
} else {
if((state_val_30808 === (9))){
var state_30807__$1 = state_30807;
var statearr_30822_33145 = state_30807__$1;
(statearr_30822_33145[(2)] = tc);

(statearr_30822_33145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (5))){
var inst_30785 = cljs.core.async.close_BANG_(tc);
var inst_30786 = cljs.core.async.close_BANG_(fc);
var state_30807__$1 = (function (){var statearr_30823 = state_30807;
(statearr_30823[(8)] = inst_30785);

return statearr_30823;
})();
var statearr_30835_33148 = state_30807__$1;
(statearr_30835_33148[(2)] = inst_30786);

(statearr_30835_33148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (14))){
var inst_30800 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
var statearr_30849_33149 = state_30807__$1;
(statearr_30849_33149[(2)] = inst_30800);

(statearr_30849_33149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (10))){
var state_30807__$1 = state_30807;
var statearr_30850_33150 = state_30807__$1;
(statearr_30850_33150[(2)] = fc);

(statearr_30850_33150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (8))){
var inst_30795 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
if(cljs.core.truth_(inst_30795)){
var statearr_30851_33151 = state_30807__$1;
(statearr_30851_33151[(1)] = (12));

} else {
var statearr_30852_33152 = state_30807__$1;
(statearr_30852_33152[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29630__auto__ = null;
var cljs$core$async$state_machine__29630__auto____0 = (function (){
var statearr_30853 = [null,null,null,null,null,null,null,null,null];
(statearr_30853[(0)] = cljs$core$async$state_machine__29630__auto__);

(statearr_30853[(1)] = (1));

return statearr_30853;
});
var cljs$core$async$state_machine__29630__auto____1 = (function (state_30807){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_30807);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e30854){var ex__29633__auto__ = e30854;
var statearr_30855_33153 = state_30807;
(statearr_30855_33153[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_30807[(4)]))){
var statearr_30856_33154 = state_30807;
(statearr_30856_33154[(1)] = cljs.core.first((state_30807[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33155 = state_30807;
state_30807 = G__33155;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$state_machine__29630__auto__ = function(state_30807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29630__auto____1.call(this,state_30807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29630__auto____0;
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29630__auto____1;
return cljs$core$async$state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_30859 = f__30159__auto__();
(statearr_30859[(6)] = c__30151__auto___33126);

return statearr_30859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30151__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_30903){
var state_val_30909 = (state_30903[(1)]);
if((state_val_30909 === (7))){
var inst_30887 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_30957_33156 = state_30903__$1;
(statearr_30957_33156[(2)] = inst_30887);

(statearr_30957_33156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (1))){
var inst_30869 = init;
var inst_30871 = inst_30869;
var state_30903__$1 = (function (){var statearr_30959 = state_30903;
(statearr_30959[(7)] = inst_30871);

return statearr_30959;
})();
var statearr_30960_33157 = state_30903__$1;
(statearr_30960_33157[(2)] = null);

(statearr_30960_33157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (4))){
var inst_30874 = (state_30903[(8)]);
var inst_30874__$1 = (state_30903[(2)]);
var inst_30875 = (inst_30874__$1 == null);
var state_30903__$1 = (function (){var statearr_30961 = state_30903;
(statearr_30961[(8)] = inst_30874__$1);

return statearr_30961;
})();
if(cljs.core.truth_(inst_30875)){
var statearr_30962_33158 = state_30903__$1;
(statearr_30962_33158[(1)] = (5));

} else {
var statearr_30967_33159 = state_30903__$1;
(statearr_30967_33159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (6))){
var inst_30874 = (state_30903[(8)]);
var inst_30878 = (state_30903[(9)]);
var inst_30871 = (state_30903[(7)]);
var inst_30878__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30871,inst_30874) : f.call(null,inst_30871,inst_30874));
var inst_30879 = cljs.core.reduced_QMARK_(inst_30878__$1);
var state_30903__$1 = (function (){var statearr_30978 = state_30903;
(statearr_30978[(9)] = inst_30878__$1);

return statearr_30978;
})();
if(inst_30879){
var statearr_30979_33160 = state_30903__$1;
(statearr_30979_33160[(1)] = (8));

} else {
var statearr_30980_33161 = state_30903__$1;
(statearr_30980_33161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (3))){
var inst_30893 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30903__$1,inst_30893);
} else {
if((state_val_30909 === (2))){
var state_30903__$1 = state_30903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30903__$1,(4),ch);
} else {
if((state_val_30909 === (9))){
var inst_30878 = (state_30903[(9)]);
var inst_30871 = inst_30878;
var state_30903__$1 = (function (){var statearr_30982 = state_30903;
(statearr_30982[(7)] = inst_30871);

return statearr_30982;
})();
var statearr_30984_33162 = state_30903__$1;
(statearr_30984_33162[(2)] = null);

(statearr_30984_33162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (5))){
var inst_30871 = (state_30903[(7)]);
var state_30903__$1 = state_30903;
var statearr_30985_33163 = state_30903__$1;
(statearr_30985_33163[(2)] = inst_30871);

(statearr_30985_33163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (10))){
var inst_30885 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_30986_33164 = state_30903__$1;
(statearr_30986_33164[(2)] = inst_30885);

(statearr_30986_33164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (8))){
var inst_30878 = (state_30903[(9)]);
var inst_30881 = cljs.core.deref(inst_30878);
var state_30903__$1 = state_30903;
var statearr_30987_33165 = state_30903__$1;
(statearr_30987_33165[(2)] = inst_30881);

(statearr_30987_33165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29630__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29630__auto____0 = (function (){
var statearr_30988 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30988[(0)] = cljs$core$async$reduce_$_state_machine__29630__auto__);

(statearr_30988[(1)] = (1));

return statearr_30988;
});
var cljs$core$async$reduce_$_state_machine__29630__auto____1 = (function (state_30903){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_30903);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e30990){var ex__29633__auto__ = e30990;
var statearr_30991_33166 = state_30903;
(statearr_30991_33166[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_30903[(4)]))){
var statearr_30992_33167 = state_30903;
(statearr_30992_33167[(1)] = cljs.core.first((state_30903[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33168 = state_30903;
state_30903 = G__33168;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29630__auto__ = function(state_30903){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29630__auto____1.call(this,state_30903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29630__auto____0;
cljs$core$async$reduce_$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29630__auto____1;
return cljs$core$async$reduce_$_state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_30994 = f__30159__auto__();
(statearr_30994[(6)] = c__30151__auto__);

return statearr_30994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));

return c__30151__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30151__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_31005){
var state_val_31006 = (state_31005[(1)]);
if((state_val_31006 === (1))){
var inst_30998 = cljs.core.async.reduce(f__$1,init,ch);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31005__$1,(2),inst_30998);
} else {
if((state_val_31006 === (2))){
var inst_31000 = (state_31005[(2)]);
var inst_31001 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31000) : f__$1.call(null,inst_31000));
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31005__$1,inst_31001);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29630__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29630__auto____0 = (function (){
var statearr_31009 = [null,null,null,null,null,null,null];
(statearr_31009[(0)] = cljs$core$async$transduce_$_state_machine__29630__auto__);

(statearr_31009[(1)] = (1));

return statearr_31009;
});
var cljs$core$async$transduce_$_state_machine__29630__auto____1 = (function (state_31005){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_31005);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e31010){var ex__29633__auto__ = e31010;
var statearr_31011_33170 = state_31005;
(statearr_31011_33170[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_31005[(4)]))){
var statearr_31012_33172 = state_31005;
(statearr_31012_33172[(1)] = cljs.core.first((state_31005[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33173 = state_31005;
state_31005 = G__33173;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29630__auto__ = function(state_31005){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29630__auto____1.call(this,state_31005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29630__auto____0;
cljs$core$async$transduce_$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29630__auto____1;
return cljs$core$async$transduce_$_state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_31013 = f__30159__auto__();
(statearr_31013[(6)] = c__30151__auto__);

return statearr_31013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));

return c__30151__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31022 = arguments.length;
switch (G__31022) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30151__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_31055){
var state_val_31056 = (state_31055[(1)]);
if((state_val_31056 === (7))){
var inst_31037 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31058_33175 = state_31055__$1;
(statearr_31058_33175[(2)] = inst_31037);

(statearr_31058_33175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (1))){
var inst_31029 = cljs.core.seq(coll);
var inst_31030 = inst_31029;
var state_31055__$1 = (function (){var statearr_31059 = state_31055;
(statearr_31059[(7)] = inst_31030);

return statearr_31059;
})();
var statearr_31060_33176 = state_31055__$1;
(statearr_31060_33176[(2)] = null);

(statearr_31060_33176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (4))){
var inst_31030 = (state_31055[(7)]);
var inst_31035 = cljs.core.first(inst_31030);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31055__$1,(7),ch,inst_31035);
} else {
if((state_val_31056 === (13))){
var inst_31049 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31061_33177 = state_31055__$1;
(statearr_31061_33177[(2)] = inst_31049);

(statearr_31061_33177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (6))){
var inst_31040 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
if(cljs.core.truth_(inst_31040)){
var statearr_31062_33178 = state_31055__$1;
(statearr_31062_33178[(1)] = (8));

} else {
var statearr_31063_33179 = state_31055__$1;
(statearr_31063_33179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (3))){
var inst_31053 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31055__$1,inst_31053);
} else {
if((state_val_31056 === (12))){
var state_31055__$1 = state_31055;
var statearr_31064_33180 = state_31055__$1;
(statearr_31064_33180[(2)] = null);

(statearr_31064_33180[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (2))){
var inst_31030 = (state_31055[(7)]);
var state_31055__$1 = state_31055;
if(cljs.core.truth_(inst_31030)){
var statearr_31065_33181 = state_31055__$1;
(statearr_31065_33181[(1)] = (4));

} else {
var statearr_31066_33182 = state_31055__$1;
(statearr_31066_33182[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (11))){
var inst_31046 = cljs.core.async.close_BANG_(ch);
var state_31055__$1 = state_31055;
var statearr_31067_33183 = state_31055__$1;
(statearr_31067_33183[(2)] = inst_31046);

(statearr_31067_33183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (9))){
var state_31055__$1 = state_31055;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31068_33184 = state_31055__$1;
(statearr_31068_33184[(1)] = (11));

} else {
var statearr_31069_33185 = state_31055__$1;
(statearr_31069_33185[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (5))){
var inst_31030 = (state_31055[(7)]);
var state_31055__$1 = state_31055;
var statearr_31070_33186 = state_31055__$1;
(statearr_31070_33186[(2)] = inst_31030);

(statearr_31070_33186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (10))){
var inst_31051 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31071_33187 = state_31055__$1;
(statearr_31071_33187[(2)] = inst_31051);

(statearr_31071_33187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (8))){
var inst_31030 = (state_31055[(7)]);
var inst_31042 = cljs.core.next(inst_31030);
var inst_31030__$1 = inst_31042;
var state_31055__$1 = (function (){var statearr_31072 = state_31055;
(statearr_31072[(7)] = inst_31030__$1);

return statearr_31072;
})();
var statearr_31073_33188 = state_31055__$1;
(statearr_31073_33188[(2)] = null);

(statearr_31073_33188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29630__auto__ = null;
var cljs$core$async$state_machine__29630__auto____0 = (function (){
var statearr_31081 = [null,null,null,null,null,null,null,null];
(statearr_31081[(0)] = cljs$core$async$state_machine__29630__auto__);

(statearr_31081[(1)] = (1));

return statearr_31081;
});
var cljs$core$async$state_machine__29630__auto____1 = (function (state_31055){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_31055);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e31082){var ex__29633__auto__ = e31082;
var statearr_31083_33189 = state_31055;
(statearr_31083_33189[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_31055[(4)]))){
var statearr_31084_33190 = state_31055;
(statearr_31084_33190[(1)] = cljs.core.first((state_31055[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33192 = state_31055;
state_31055 = G__33192;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$state_machine__29630__auto__ = function(state_31055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29630__auto____1.call(this,state_31055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29630__auto____0;
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29630__auto____1;
return cljs$core$async$state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_31085 = f__30159__auto__();
(statearr_31085[(6)] = c__30151__auto__);

return statearr_31085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));

return c__30151__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31114 = arguments.length;
switch (G__31114) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33195 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33195(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33198 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33198(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33199 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33199(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33200 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33200(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31153 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31153 = (function (ch,cs,meta31154){
this.ch = ch;
this.cs = cs;
this.meta31154 = meta31154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31155,meta31154__$1){
var self__ = this;
var _31155__$1 = this;
return (new cljs.core.async.t_cljs$core$async31153(self__.ch,self__.cs,meta31154__$1));
}));

(cljs.core.async.t_cljs$core$async31153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31155){
var self__ = this;
var _31155__$1 = this;
return self__.meta31154;
}));

(cljs.core.async.t_cljs$core$async31153.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31153.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31153.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31153.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31153.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31153.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31154","meta31154",-838011120,null)], null);
}));

(cljs.core.async.t_cljs$core$async31153.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31153");

(cljs.core.async.t_cljs$core$async31153.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31153");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31153.
 */
cljs.core.async.__GT_t_cljs$core$async31153 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31153(ch__$1,cs__$1,meta31154){
return (new cljs.core.async.t_cljs$core$async31153(ch__$1,cs__$1,meta31154));
});

}

return (new cljs.core.async.t_cljs$core$async31153(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30151__auto___33201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_31321){
var state_val_31322 = (state_31321[(1)]);
if((state_val_31322 === (7))){
var inst_31317 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
var statearr_31323_33202 = state_31321__$1;
(statearr_31323_33202[(2)] = inst_31317);

(statearr_31323_33202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (20))){
var inst_31222 = (state_31321[(7)]);
var inst_31234 = cljs.core.first(inst_31222);
var inst_31235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31234,(0),null);
var inst_31236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31234,(1),null);
var state_31321__$1 = (function (){var statearr_31324 = state_31321;
(statearr_31324[(8)] = inst_31235);

return statearr_31324;
})();
if(cljs.core.truth_(inst_31236)){
var statearr_31325_33203 = state_31321__$1;
(statearr_31325_33203[(1)] = (22));

} else {
var statearr_31326_33204 = state_31321__$1;
(statearr_31326_33204[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (27))){
var inst_31264 = (state_31321[(9)]);
var inst_31184 = (state_31321[(10)]);
var inst_31271 = (state_31321[(11)]);
var inst_31266 = (state_31321[(12)]);
var inst_31271__$1 = cljs.core._nth(inst_31264,inst_31266);
var inst_31272 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31271__$1,inst_31184,done);
var state_31321__$1 = (function (){var statearr_31327 = state_31321;
(statearr_31327[(11)] = inst_31271__$1);

return statearr_31327;
})();
if(cljs.core.truth_(inst_31272)){
var statearr_31328_33206 = state_31321__$1;
(statearr_31328_33206[(1)] = (30));

} else {
var statearr_31329_33207 = state_31321__$1;
(statearr_31329_33207[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (1))){
var state_31321__$1 = state_31321;
var statearr_31330_33208 = state_31321__$1;
(statearr_31330_33208[(2)] = null);

(statearr_31330_33208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (24))){
var inst_31222 = (state_31321[(7)]);
var inst_31241 = (state_31321[(2)]);
var inst_31242 = cljs.core.next(inst_31222);
var inst_31194 = inst_31242;
var inst_31195 = null;
var inst_31196 = (0);
var inst_31197 = (0);
var state_31321__$1 = (function (){var statearr_31331 = state_31321;
(statearr_31331[(13)] = inst_31194);

(statearr_31331[(14)] = inst_31195);

(statearr_31331[(15)] = inst_31241);

(statearr_31331[(16)] = inst_31197);

(statearr_31331[(17)] = inst_31196);

return statearr_31331;
})();
var statearr_31332_33210 = state_31321__$1;
(statearr_31332_33210[(2)] = null);

(statearr_31332_33210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (39))){
var state_31321__$1 = state_31321;
var statearr_31336_33211 = state_31321__$1;
(statearr_31336_33211[(2)] = null);

(statearr_31336_33211[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (4))){
var inst_31184 = (state_31321[(10)]);
var inst_31184__$1 = (state_31321[(2)]);
var inst_31185 = (inst_31184__$1 == null);
var state_31321__$1 = (function (){var statearr_31337 = state_31321;
(statearr_31337[(10)] = inst_31184__$1);

return statearr_31337;
})();
if(cljs.core.truth_(inst_31185)){
var statearr_31338_33213 = state_31321__$1;
(statearr_31338_33213[(1)] = (5));

} else {
var statearr_31339_33214 = state_31321__$1;
(statearr_31339_33214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (15))){
var inst_31194 = (state_31321[(13)]);
var inst_31195 = (state_31321[(14)]);
var inst_31197 = (state_31321[(16)]);
var inst_31196 = (state_31321[(17)]);
var inst_31212 = (state_31321[(2)]);
var inst_31213 = (inst_31197 + (1));
var tmp31333 = inst_31194;
var tmp31334 = inst_31195;
var tmp31335 = inst_31196;
var inst_31194__$1 = tmp31333;
var inst_31195__$1 = tmp31334;
var inst_31196__$1 = tmp31335;
var inst_31197__$1 = inst_31213;
var state_31321__$1 = (function (){var statearr_31340 = state_31321;
(statearr_31340[(13)] = inst_31194__$1);

(statearr_31340[(18)] = inst_31212);

(statearr_31340[(14)] = inst_31195__$1);

(statearr_31340[(16)] = inst_31197__$1);

(statearr_31340[(17)] = inst_31196__$1);

return statearr_31340;
})();
var statearr_31341_33215 = state_31321__$1;
(statearr_31341_33215[(2)] = null);

(statearr_31341_33215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (21))){
var inst_31245 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
var statearr_31345_33216 = state_31321__$1;
(statearr_31345_33216[(2)] = inst_31245);

(statearr_31345_33216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (31))){
var inst_31271 = (state_31321[(11)]);
var inst_31275 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31271);
var state_31321__$1 = state_31321;
var statearr_31349_33217 = state_31321__$1;
(statearr_31349_33217[(2)] = inst_31275);

(statearr_31349_33217[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (32))){
var inst_31265 = (state_31321[(19)]);
var inst_31263 = (state_31321[(20)]);
var inst_31264 = (state_31321[(9)]);
var inst_31266 = (state_31321[(12)]);
var inst_31277 = (state_31321[(2)]);
var inst_31278 = (inst_31266 + (1));
var tmp31342 = inst_31265;
var tmp31343 = inst_31263;
var tmp31344 = inst_31264;
var inst_31263__$1 = tmp31343;
var inst_31264__$1 = tmp31344;
var inst_31265__$1 = tmp31342;
var inst_31266__$1 = inst_31278;
var state_31321__$1 = (function (){var statearr_31350 = state_31321;
(statearr_31350[(21)] = inst_31277);

(statearr_31350[(19)] = inst_31265__$1);

(statearr_31350[(20)] = inst_31263__$1);

(statearr_31350[(9)] = inst_31264__$1);

(statearr_31350[(12)] = inst_31266__$1);

return statearr_31350;
})();
var statearr_31351_33218 = state_31321__$1;
(statearr_31351_33218[(2)] = null);

(statearr_31351_33218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (40))){
var inst_31290 = (state_31321[(22)]);
var inst_31294 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31290);
var state_31321__$1 = state_31321;
var statearr_31352_33220 = state_31321__$1;
(statearr_31352_33220[(2)] = inst_31294);

(statearr_31352_33220[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (33))){
var inst_31281 = (state_31321[(23)]);
var inst_31283 = cljs.core.chunked_seq_QMARK_(inst_31281);
var state_31321__$1 = state_31321;
if(inst_31283){
var statearr_31353_33224 = state_31321__$1;
(statearr_31353_33224[(1)] = (36));

} else {
var statearr_31354_33225 = state_31321__$1;
(statearr_31354_33225[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (13))){
var inst_31206 = (state_31321[(24)]);
var inst_31209 = cljs.core.async.close_BANG_(inst_31206);
var state_31321__$1 = state_31321;
var statearr_31355_33226 = state_31321__$1;
(statearr_31355_33226[(2)] = inst_31209);

(statearr_31355_33226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (22))){
var inst_31235 = (state_31321[(8)]);
var inst_31238 = cljs.core.async.close_BANG_(inst_31235);
var state_31321__$1 = state_31321;
var statearr_31356_33227 = state_31321__$1;
(statearr_31356_33227[(2)] = inst_31238);

(statearr_31356_33227[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (36))){
var inst_31281 = (state_31321[(23)]);
var inst_31285 = cljs.core.chunk_first(inst_31281);
var inst_31286 = cljs.core.chunk_rest(inst_31281);
var inst_31287 = cljs.core.count(inst_31285);
var inst_31263 = inst_31286;
var inst_31264 = inst_31285;
var inst_31265 = inst_31287;
var inst_31266 = (0);
var state_31321__$1 = (function (){var statearr_31360 = state_31321;
(statearr_31360[(19)] = inst_31265);

(statearr_31360[(20)] = inst_31263);

(statearr_31360[(9)] = inst_31264);

(statearr_31360[(12)] = inst_31266);

return statearr_31360;
})();
var statearr_31361_33228 = state_31321__$1;
(statearr_31361_33228[(2)] = null);

(statearr_31361_33228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (41))){
var inst_31281 = (state_31321[(23)]);
var inst_31296 = (state_31321[(2)]);
var inst_31297 = cljs.core.next(inst_31281);
var inst_31263 = inst_31297;
var inst_31264 = null;
var inst_31265 = (0);
var inst_31266 = (0);
var state_31321__$1 = (function (){var statearr_31365 = state_31321;
(statearr_31365[(19)] = inst_31265);

(statearr_31365[(20)] = inst_31263);

(statearr_31365[(25)] = inst_31296);

(statearr_31365[(9)] = inst_31264);

(statearr_31365[(12)] = inst_31266);

return statearr_31365;
})();
var statearr_31367_33229 = state_31321__$1;
(statearr_31367_33229[(2)] = null);

(statearr_31367_33229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (43))){
var state_31321__$1 = state_31321;
var statearr_31368_33230 = state_31321__$1;
(statearr_31368_33230[(2)] = null);

(statearr_31368_33230[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (29))){
var inst_31305 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
var statearr_31369_33232 = state_31321__$1;
(statearr_31369_33232[(2)] = inst_31305);

(statearr_31369_33232[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (44))){
var inst_31314 = (state_31321[(2)]);
var state_31321__$1 = (function (){var statearr_31370 = state_31321;
(statearr_31370[(26)] = inst_31314);

return statearr_31370;
})();
var statearr_31371_33233 = state_31321__$1;
(statearr_31371_33233[(2)] = null);

(statearr_31371_33233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (6))){
var inst_31255 = (state_31321[(27)]);
var inst_31254 = cljs.core.deref(cs);
var inst_31255__$1 = cljs.core.keys(inst_31254);
var inst_31256 = cljs.core.count(inst_31255__$1);
var inst_31257 = cljs.core.reset_BANG_(dctr,inst_31256);
var inst_31262 = cljs.core.seq(inst_31255__$1);
var inst_31263 = inst_31262;
var inst_31264 = null;
var inst_31265 = (0);
var inst_31266 = (0);
var state_31321__$1 = (function (){var statearr_31372 = state_31321;
(statearr_31372[(27)] = inst_31255__$1);

(statearr_31372[(19)] = inst_31265);

(statearr_31372[(20)] = inst_31263);

(statearr_31372[(9)] = inst_31264);

(statearr_31372[(12)] = inst_31266);

(statearr_31372[(28)] = inst_31257);

return statearr_31372;
})();
var statearr_31373_33235 = state_31321__$1;
(statearr_31373_33235[(2)] = null);

(statearr_31373_33235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (28))){
var inst_31263 = (state_31321[(20)]);
var inst_31281 = (state_31321[(23)]);
var inst_31281__$1 = cljs.core.seq(inst_31263);
var state_31321__$1 = (function (){var statearr_31374 = state_31321;
(statearr_31374[(23)] = inst_31281__$1);

return statearr_31374;
})();
if(inst_31281__$1){
var statearr_31375_33237 = state_31321__$1;
(statearr_31375_33237[(1)] = (33));

} else {
var statearr_31376_33238 = state_31321__$1;
(statearr_31376_33238[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (25))){
var inst_31265 = (state_31321[(19)]);
var inst_31266 = (state_31321[(12)]);
var inst_31268 = (inst_31266 < inst_31265);
var inst_31269 = inst_31268;
var state_31321__$1 = state_31321;
if(cljs.core.truth_(inst_31269)){
var statearr_31377_33239 = state_31321__$1;
(statearr_31377_33239[(1)] = (27));

} else {
var statearr_31378_33240 = state_31321__$1;
(statearr_31378_33240[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (34))){
var state_31321__$1 = state_31321;
var statearr_31379_33243 = state_31321__$1;
(statearr_31379_33243[(2)] = null);

(statearr_31379_33243[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (17))){
var state_31321__$1 = state_31321;
var statearr_31380_33244 = state_31321__$1;
(statearr_31380_33244[(2)] = null);

(statearr_31380_33244[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (3))){
var inst_31319 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31321__$1,inst_31319);
} else {
if((state_val_31322 === (12))){
var inst_31250 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
var statearr_31381_33245 = state_31321__$1;
(statearr_31381_33245[(2)] = inst_31250);

(statearr_31381_33245[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (2))){
var state_31321__$1 = state_31321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31321__$1,(4),ch);
} else {
if((state_val_31322 === (23))){
var state_31321__$1 = state_31321;
var statearr_31382_33246 = state_31321__$1;
(statearr_31382_33246[(2)] = null);

(statearr_31382_33246[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (35))){
var inst_31303 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
var statearr_31383_33247 = state_31321__$1;
(statearr_31383_33247[(2)] = inst_31303);

(statearr_31383_33247[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (19))){
var inst_31222 = (state_31321[(7)]);
var inst_31226 = cljs.core.chunk_first(inst_31222);
var inst_31227 = cljs.core.chunk_rest(inst_31222);
var inst_31228 = cljs.core.count(inst_31226);
var inst_31194 = inst_31227;
var inst_31195 = inst_31226;
var inst_31196 = inst_31228;
var inst_31197 = (0);
var state_31321__$1 = (function (){var statearr_31384 = state_31321;
(statearr_31384[(13)] = inst_31194);

(statearr_31384[(14)] = inst_31195);

(statearr_31384[(16)] = inst_31197);

(statearr_31384[(17)] = inst_31196);

return statearr_31384;
})();
var statearr_31385_33248 = state_31321__$1;
(statearr_31385_33248[(2)] = null);

(statearr_31385_33248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (11))){
var inst_31194 = (state_31321[(13)]);
var inst_31222 = (state_31321[(7)]);
var inst_31222__$1 = cljs.core.seq(inst_31194);
var state_31321__$1 = (function (){var statearr_31386 = state_31321;
(statearr_31386[(7)] = inst_31222__$1);

return statearr_31386;
})();
if(inst_31222__$1){
var statearr_31387_33250 = state_31321__$1;
(statearr_31387_33250[(1)] = (16));

} else {
var statearr_31388_33251 = state_31321__$1;
(statearr_31388_33251[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (9))){
var inst_31252 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
var statearr_31389_33252 = state_31321__$1;
(statearr_31389_33252[(2)] = inst_31252);

(statearr_31389_33252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (5))){
var inst_31192 = cljs.core.deref(cs);
var inst_31193 = cljs.core.seq(inst_31192);
var inst_31194 = inst_31193;
var inst_31195 = null;
var inst_31196 = (0);
var inst_31197 = (0);
var state_31321__$1 = (function (){var statearr_31390 = state_31321;
(statearr_31390[(13)] = inst_31194);

(statearr_31390[(14)] = inst_31195);

(statearr_31390[(16)] = inst_31197);

(statearr_31390[(17)] = inst_31196);

return statearr_31390;
})();
var statearr_31391_33254 = state_31321__$1;
(statearr_31391_33254[(2)] = null);

(statearr_31391_33254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (14))){
var state_31321__$1 = state_31321;
var statearr_31392_33255 = state_31321__$1;
(statearr_31392_33255[(2)] = null);

(statearr_31392_33255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (45))){
var inst_31311 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
var statearr_31393_33256 = state_31321__$1;
(statearr_31393_33256[(2)] = inst_31311);

(statearr_31393_33256[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (26))){
var inst_31255 = (state_31321[(27)]);
var inst_31307 = (state_31321[(2)]);
var inst_31308 = cljs.core.seq(inst_31255);
var state_31321__$1 = (function (){var statearr_31394 = state_31321;
(statearr_31394[(29)] = inst_31307);

return statearr_31394;
})();
if(inst_31308){
var statearr_31395_33257 = state_31321__$1;
(statearr_31395_33257[(1)] = (42));

} else {
var statearr_31396_33258 = state_31321__$1;
(statearr_31396_33258[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (16))){
var inst_31222 = (state_31321[(7)]);
var inst_31224 = cljs.core.chunked_seq_QMARK_(inst_31222);
var state_31321__$1 = state_31321;
if(inst_31224){
var statearr_31397_33259 = state_31321__$1;
(statearr_31397_33259[(1)] = (19));

} else {
var statearr_31398_33260 = state_31321__$1;
(statearr_31398_33260[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (38))){
var inst_31300 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
var statearr_31400_33261 = state_31321__$1;
(statearr_31400_33261[(2)] = inst_31300);

(statearr_31400_33261[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (30))){
var state_31321__$1 = state_31321;
var statearr_31407_33262 = state_31321__$1;
(statearr_31407_33262[(2)] = null);

(statearr_31407_33262[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (10))){
var inst_31195 = (state_31321[(14)]);
var inst_31197 = (state_31321[(16)]);
var inst_31205 = cljs.core._nth(inst_31195,inst_31197);
var inst_31206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31205,(0),null);
var inst_31207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31205,(1),null);
var state_31321__$1 = (function (){var statearr_31453 = state_31321;
(statearr_31453[(24)] = inst_31206);

return statearr_31453;
})();
if(cljs.core.truth_(inst_31207)){
var statearr_31454_33266 = state_31321__$1;
(statearr_31454_33266[(1)] = (13));

} else {
var statearr_31455_33267 = state_31321__$1;
(statearr_31455_33267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (18))){
var inst_31248 = (state_31321[(2)]);
var state_31321__$1 = state_31321;
var statearr_31456_33268 = state_31321__$1;
(statearr_31456_33268[(2)] = inst_31248);

(statearr_31456_33268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (42))){
var state_31321__$1 = state_31321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31321__$1,(45),dchan);
} else {
if((state_val_31322 === (37))){
var inst_31281 = (state_31321[(23)]);
var inst_31184 = (state_31321[(10)]);
var inst_31290 = (state_31321[(22)]);
var inst_31290__$1 = cljs.core.first(inst_31281);
var inst_31291 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31290__$1,inst_31184,done);
var state_31321__$1 = (function (){var statearr_31457 = state_31321;
(statearr_31457[(22)] = inst_31290__$1);

return statearr_31457;
})();
if(cljs.core.truth_(inst_31291)){
var statearr_31458_33269 = state_31321__$1;
(statearr_31458_33269[(1)] = (39));

} else {
var statearr_31459_33270 = state_31321__$1;
(statearr_31459_33270[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31322 === (8))){
var inst_31197 = (state_31321[(16)]);
var inst_31196 = (state_31321[(17)]);
var inst_31199 = (inst_31197 < inst_31196);
var inst_31200 = inst_31199;
var state_31321__$1 = state_31321;
if(cljs.core.truth_(inst_31200)){
var statearr_31460_33271 = state_31321__$1;
(statearr_31460_33271[(1)] = (10));

} else {
var statearr_31466_33272 = state_31321__$1;
(statearr_31466_33272[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29630__auto__ = null;
var cljs$core$async$mult_$_state_machine__29630__auto____0 = (function (){
var statearr_31495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31495[(0)] = cljs$core$async$mult_$_state_machine__29630__auto__);

(statearr_31495[(1)] = (1));

return statearr_31495;
});
var cljs$core$async$mult_$_state_machine__29630__auto____1 = (function (state_31321){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_31321);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e31496){var ex__29633__auto__ = e31496;
var statearr_31497_33273 = state_31321;
(statearr_31497_33273[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_31321[(4)]))){
var statearr_31498_33275 = state_31321;
(statearr_31498_33275[(1)] = cljs.core.first((state_31321[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33276 = state_31321;
state_31321 = G__33276;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29630__auto__ = function(state_31321){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29630__auto____1.call(this,state_31321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29630__auto____0;
cljs$core$async$mult_$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29630__auto____1;
return cljs$core$async$mult_$_state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_31505 = f__30159__auto__();
(statearr_31505[(6)] = c__30151__auto___33201);

return statearr_31505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31509 = arguments.length;
switch (G__31509) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33279 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33279(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33280 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33280(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33296 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33296(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33303 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33303(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33304 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33304(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33307 = arguments.length;
var i__4819__auto___33308 = (0);
while(true){
if((i__4819__auto___33308 < len__4818__auto___33307)){
args__4824__auto__.push((arguments[i__4819__auto___33308]));

var G__33309 = (i__4819__auto___33308 + (1));
i__4819__auto___33308 = G__33309;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31554){
var map__31555 = p__31554;
var map__31555__$1 = cljs.core.__destructure_map(map__31555);
var opts = map__31555__$1;
var statearr_31556_33317 = state;
(statearr_31556_33317[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31557_33318 = state;
(statearr_31557_33318[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31558_33322 = state;
(statearr_31558_33322[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31537){
var G__31538 = cljs.core.first(seq31537);
var seq31537__$1 = cljs.core.next(seq31537);
var G__31539 = cljs.core.first(seq31537__$1);
var seq31537__$2 = cljs.core.next(seq31537__$1);
var G__31540 = cljs.core.first(seq31537__$2);
var seq31537__$3 = cljs.core.next(seq31537__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31538,G__31539,G__31540,seq31537__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31572 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31573){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31573 = meta31573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31574,meta31573__$1){
var self__ = this;
var _31574__$1 = this;
return (new cljs.core.async.t_cljs$core$async31572(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31573__$1));
}));

(cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31574){
var self__ = this;
var _31574__$1 = this;
return self__.meta31573;
}));

(cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31573","meta31573",-1084720878,null)], null);
}));

(cljs.core.async.t_cljs$core$async31572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31572");

(cljs.core.async.t_cljs$core$async31572.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31572.
 */
cljs.core.async.__GT_t_cljs$core$async31572 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31572(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31573){
return (new cljs.core.async.t_cljs$core$async31572(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31573));
});

}

return (new cljs.core.async.t_cljs$core$async31572(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30151__auto___33330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_31645){
var state_val_31646 = (state_31645[(1)]);
if((state_val_31646 === (7))){
var inst_31605 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
if(cljs.core.truth_(inst_31605)){
var statearr_31655_33331 = state_31645__$1;
(statearr_31655_33331[(1)] = (8));

} else {
var statearr_31662_33332 = state_31645__$1;
(statearr_31662_33332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (20))){
var inst_31598 = (state_31645[(7)]);
var state_31645__$1 = state_31645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31645__$1,(23),out,inst_31598);
} else {
if((state_val_31646 === (1))){
var inst_31579 = calc_state();
var inst_31582 = cljs.core.__destructure_map(inst_31579);
var inst_31583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31582,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31582,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31582,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31586 = inst_31579;
var state_31645__$1 = (function (){var statearr_31667 = state_31645;
(statearr_31667[(8)] = inst_31586);

(statearr_31667[(9)] = inst_31584);

(statearr_31667[(10)] = inst_31585);

(statearr_31667[(11)] = inst_31583);

return statearr_31667;
})();
var statearr_31668_33333 = state_31645__$1;
(statearr_31668_33333[(2)] = null);

(statearr_31668_33333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (24))){
var inst_31589 = (state_31645[(12)]);
var inst_31586 = inst_31589;
var state_31645__$1 = (function (){var statearr_31670 = state_31645;
(statearr_31670[(8)] = inst_31586);

return statearr_31670;
})();
var statearr_31671_33334 = state_31645__$1;
(statearr_31671_33334[(2)] = null);

(statearr_31671_33334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (4))){
var inst_31598 = (state_31645[(7)]);
var inst_31600 = (state_31645[(13)]);
var inst_31597 = (state_31645[(2)]);
var inst_31598__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31597,(0),null);
var inst_31599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31597,(1),null);
var inst_31600__$1 = (inst_31598__$1 == null);
var state_31645__$1 = (function (){var statearr_31672 = state_31645;
(statearr_31672[(14)] = inst_31599);

(statearr_31672[(7)] = inst_31598__$1);

(statearr_31672[(13)] = inst_31600__$1);

return statearr_31672;
})();
if(cljs.core.truth_(inst_31600__$1)){
var statearr_31673_33335 = state_31645__$1;
(statearr_31673_33335[(1)] = (5));

} else {
var statearr_31674_33336 = state_31645__$1;
(statearr_31674_33336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (15))){
var inst_31619 = (state_31645[(15)]);
var inst_31590 = (state_31645[(16)]);
var inst_31619__$1 = cljs.core.empty_QMARK_(inst_31590);
var state_31645__$1 = (function (){var statearr_31681 = state_31645;
(statearr_31681[(15)] = inst_31619__$1);

return statearr_31681;
})();
if(inst_31619__$1){
var statearr_31686_33337 = state_31645__$1;
(statearr_31686_33337[(1)] = (17));

} else {
var statearr_31687_33338 = state_31645__$1;
(statearr_31687_33338[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (21))){
var inst_31589 = (state_31645[(12)]);
var inst_31586 = inst_31589;
var state_31645__$1 = (function (){var statearr_31688 = state_31645;
(statearr_31688[(8)] = inst_31586);

return statearr_31688;
})();
var statearr_31689_33339 = state_31645__$1;
(statearr_31689_33339[(2)] = null);

(statearr_31689_33339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (13))){
var inst_31612 = (state_31645[(2)]);
var inst_31613 = calc_state();
var inst_31586 = inst_31613;
var state_31645__$1 = (function (){var statearr_31690 = state_31645;
(statearr_31690[(8)] = inst_31586);

(statearr_31690[(17)] = inst_31612);

return statearr_31690;
})();
var statearr_31691_33340 = state_31645__$1;
(statearr_31691_33340[(2)] = null);

(statearr_31691_33340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (22))){
var inst_31639 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
var statearr_31692_33341 = state_31645__$1;
(statearr_31692_33341[(2)] = inst_31639);

(statearr_31692_33341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (6))){
var inst_31599 = (state_31645[(14)]);
var inst_31603 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31599,change);
var state_31645__$1 = state_31645;
var statearr_31694_33342 = state_31645__$1;
(statearr_31694_33342[(2)] = inst_31603);

(statearr_31694_33342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (25))){
var state_31645__$1 = state_31645;
var statearr_31695_33343 = state_31645__$1;
(statearr_31695_33343[(2)] = null);

(statearr_31695_33343[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (17))){
var inst_31599 = (state_31645[(14)]);
var inst_31591 = (state_31645[(18)]);
var inst_31621 = (inst_31591.cljs$core$IFn$_invoke$arity$1 ? inst_31591.cljs$core$IFn$_invoke$arity$1(inst_31599) : inst_31591.call(null,inst_31599));
var inst_31622 = cljs.core.not(inst_31621);
var state_31645__$1 = state_31645;
var statearr_31699_33344 = state_31645__$1;
(statearr_31699_33344[(2)] = inst_31622);

(statearr_31699_33344[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (3))){
var inst_31643 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31645__$1,inst_31643);
} else {
if((state_val_31646 === (12))){
var state_31645__$1 = state_31645;
var statearr_31707_33345 = state_31645__$1;
(statearr_31707_33345[(2)] = null);

(statearr_31707_33345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (2))){
var inst_31586 = (state_31645[(8)]);
var inst_31589 = (state_31645[(12)]);
var inst_31589__$1 = cljs.core.__destructure_map(inst_31586);
var inst_31590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31589__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31589__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31589__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31645__$1 = (function (){var statearr_31708 = state_31645;
(statearr_31708[(16)] = inst_31590);

(statearr_31708[(18)] = inst_31591);

(statearr_31708[(12)] = inst_31589__$1);

return statearr_31708;
})();
return cljs.core.async.ioc_alts_BANG_(state_31645__$1,(4),inst_31592);
} else {
if((state_val_31646 === (23))){
var inst_31630 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
if(cljs.core.truth_(inst_31630)){
var statearr_31712_33346 = state_31645__$1;
(statearr_31712_33346[(1)] = (24));

} else {
var statearr_31713_33347 = state_31645__$1;
(statearr_31713_33347[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (19))){
var inst_31625 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
var statearr_31714_33348 = state_31645__$1;
(statearr_31714_33348[(2)] = inst_31625);

(statearr_31714_33348[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (11))){
var inst_31599 = (state_31645[(14)]);
var inst_31609 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31599);
var state_31645__$1 = state_31645;
var statearr_31719_33349 = state_31645__$1;
(statearr_31719_33349[(2)] = inst_31609);

(statearr_31719_33349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (9))){
var inst_31599 = (state_31645[(14)]);
var inst_31590 = (state_31645[(16)]);
var inst_31616 = (state_31645[(19)]);
var inst_31616__$1 = (inst_31590.cljs$core$IFn$_invoke$arity$1 ? inst_31590.cljs$core$IFn$_invoke$arity$1(inst_31599) : inst_31590.call(null,inst_31599));
var state_31645__$1 = (function (){var statearr_31724 = state_31645;
(statearr_31724[(19)] = inst_31616__$1);

return statearr_31724;
})();
if(cljs.core.truth_(inst_31616__$1)){
var statearr_31725_33354 = state_31645__$1;
(statearr_31725_33354[(1)] = (14));

} else {
var statearr_31726_33355 = state_31645__$1;
(statearr_31726_33355[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (5))){
var inst_31600 = (state_31645[(13)]);
var state_31645__$1 = state_31645;
var statearr_31728_33356 = state_31645__$1;
(statearr_31728_33356[(2)] = inst_31600);

(statearr_31728_33356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (14))){
var inst_31616 = (state_31645[(19)]);
var state_31645__$1 = state_31645;
var statearr_31730_33357 = state_31645__$1;
(statearr_31730_33357[(2)] = inst_31616);

(statearr_31730_33357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (26))){
var inst_31635 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
var statearr_31732_33358 = state_31645__$1;
(statearr_31732_33358[(2)] = inst_31635);

(statearr_31732_33358[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (16))){
var inst_31627 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
if(cljs.core.truth_(inst_31627)){
var statearr_31733_33359 = state_31645__$1;
(statearr_31733_33359[(1)] = (20));

} else {
var statearr_31734_33360 = state_31645__$1;
(statearr_31734_33360[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (10))){
var inst_31641 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
var statearr_31735_33361 = state_31645__$1;
(statearr_31735_33361[(2)] = inst_31641);

(statearr_31735_33361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (18))){
var inst_31619 = (state_31645[(15)]);
var state_31645__$1 = state_31645;
var statearr_31736_33362 = state_31645__$1;
(statearr_31736_33362[(2)] = inst_31619);

(statearr_31736_33362[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (8))){
var inst_31598 = (state_31645[(7)]);
var inst_31607 = (inst_31598 == null);
var state_31645__$1 = state_31645;
if(cljs.core.truth_(inst_31607)){
var statearr_31737_33363 = state_31645__$1;
(statearr_31737_33363[(1)] = (11));

} else {
var statearr_31738_33364 = state_31645__$1;
(statearr_31738_33364[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29630__auto__ = null;
var cljs$core$async$mix_$_state_machine__29630__auto____0 = (function (){
var statearr_31739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31739[(0)] = cljs$core$async$mix_$_state_machine__29630__auto__);

(statearr_31739[(1)] = (1));

return statearr_31739;
});
var cljs$core$async$mix_$_state_machine__29630__auto____1 = (function (state_31645){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_31645);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e31740){var ex__29633__auto__ = e31740;
var statearr_31741_33365 = state_31645;
(statearr_31741_33365[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_31645[(4)]))){
var statearr_31742_33366 = state_31645;
(statearr_31742_33366[(1)] = cljs.core.first((state_31645[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33367 = state_31645;
state_31645 = G__33367;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29630__auto__ = function(state_31645){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29630__auto____1.call(this,state_31645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29630__auto____0;
cljs$core$async$mix_$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29630__auto____1;
return cljs$core$async$mix_$_state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_31744 = f__30159__auto__();
(statearr_31744[(6)] = c__30151__auto___33330);

return statearr_31744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33370 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33370(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33371 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33371(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33372 = (function() {
var G__33373 = null;
var G__33373__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33373__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33373 = function(p,v){
switch(arguments.length){
case 1:
return G__33373__1.call(this,p);
case 2:
return G__33373__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33373.cljs$core$IFn$_invoke$arity$1 = G__33373__1;
G__33373.cljs$core$IFn$_invoke$arity$2 = G__33373__2;
return G__33373;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31774 = arguments.length;
switch (G__31774) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33372(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33372(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31783 = arguments.length;
switch (G__31783) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31781_SHARP_){
if(cljs.core.truth_((p1__31781_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31781_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31781_SHARP_.call(null,topic)))){
return p1__31781_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31781_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31789 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31790){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31790 = meta31790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31791,meta31790__$1){
var self__ = this;
var _31791__$1 = this;
return (new cljs.core.async.t_cljs$core$async31789(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31790__$1));
}));

(cljs.core.async.t_cljs$core$async31789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31791){
var self__ = this;
var _31791__$1 = this;
return self__.meta31790;
}));

(cljs.core.async.t_cljs$core$async31789.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31789.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31789.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31789.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31789.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31789.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31790","meta31790",615864459,null)], null);
}));

(cljs.core.async.t_cljs$core$async31789.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31789");

(cljs.core.async.t_cljs$core$async31789.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31789");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31789.
 */
cljs.core.async.__GT_t_cljs$core$async31789 = (function cljs$core$async$__GT_t_cljs$core$async31789(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31790){
return (new cljs.core.async.t_cljs$core$async31789(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31790));
});

}

return (new cljs.core.async.t_cljs$core$async31789(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30151__auto___33378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_32044){
var state_val_32045 = (state_32044[(1)]);
if((state_val_32045 === (7))){
var inst_32031 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32046_33379 = state_32044__$1;
(statearr_32046_33379[(2)] = inst_32031);

(statearr_32046_33379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (20))){
var state_32044__$1 = state_32044;
var statearr_32047_33380 = state_32044__$1;
(statearr_32047_33380[(2)] = null);

(statearr_32047_33380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (1))){
var state_32044__$1 = state_32044;
var statearr_32048_33381 = state_32044__$1;
(statearr_32048_33381[(2)] = null);

(statearr_32048_33381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (24))){
var inst_32012 = (state_32044[(7)]);
var inst_32023 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32012);
var state_32044__$1 = state_32044;
var statearr_32050_33382 = state_32044__$1;
(statearr_32050_33382[(2)] = inst_32023);

(statearr_32050_33382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (4))){
var inst_31848 = (state_32044[(8)]);
var inst_31848__$1 = (state_32044[(2)]);
var inst_31849 = (inst_31848__$1 == null);
var state_32044__$1 = (function (){var statearr_32052 = state_32044;
(statearr_32052[(8)] = inst_31848__$1);

return statearr_32052;
})();
if(cljs.core.truth_(inst_31849)){
var statearr_32053_33383 = state_32044__$1;
(statearr_32053_33383[(1)] = (5));

} else {
var statearr_32054_33384 = state_32044__$1;
(statearr_32054_33384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (15))){
var inst_32006 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32055_33386 = state_32044__$1;
(statearr_32055_33386[(2)] = inst_32006);

(statearr_32055_33386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (21))){
var inst_32028 = (state_32044[(2)]);
var state_32044__$1 = (function (){var statearr_32056 = state_32044;
(statearr_32056[(9)] = inst_32028);

return statearr_32056;
})();
var statearr_32057_33388 = state_32044__$1;
(statearr_32057_33388[(2)] = null);

(statearr_32057_33388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (13))){
var inst_31878 = (state_32044[(10)]);
var inst_31990 = cljs.core.chunked_seq_QMARK_(inst_31878);
var state_32044__$1 = state_32044;
if(inst_31990){
var statearr_32059_33391 = state_32044__$1;
(statearr_32059_33391[(1)] = (16));

} else {
var statearr_32060_33392 = state_32044__$1;
(statearr_32060_33392[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (22))){
var inst_32018 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
if(cljs.core.truth_(inst_32018)){
var statearr_32061_33393 = state_32044__$1;
(statearr_32061_33393[(1)] = (23));

} else {
var statearr_32062_33394 = state_32044__$1;
(statearr_32062_33394[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (6))){
var inst_32014 = (state_32044[(11)]);
var inst_32012 = (state_32044[(7)]);
var inst_31848 = (state_32044[(8)]);
var inst_32012__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31848) : topic_fn.call(null,inst_31848));
var inst_32013 = cljs.core.deref(mults);
var inst_32014__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32013,inst_32012__$1);
var state_32044__$1 = (function (){var statearr_32065 = state_32044;
(statearr_32065[(11)] = inst_32014__$1);

(statearr_32065[(7)] = inst_32012__$1);

return statearr_32065;
})();
if(cljs.core.truth_(inst_32014__$1)){
var statearr_32066_33395 = state_32044__$1;
(statearr_32066_33395[(1)] = (19));

} else {
var statearr_32067_33396 = state_32044__$1;
(statearr_32067_33396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (25))){
var inst_32025 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32068_33397 = state_32044__$1;
(statearr_32068_33397[(2)] = inst_32025);

(statearr_32068_33397[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (17))){
var inst_31878 = (state_32044[(10)]);
var inst_31997 = cljs.core.first(inst_31878);
var inst_31998 = cljs.core.async.muxch_STAR_(inst_31997);
var inst_31999 = cljs.core.async.close_BANG_(inst_31998);
var inst_32000 = cljs.core.next(inst_31878);
var inst_31858 = inst_32000;
var inst_31859 = null;
var inst_31860 = (0);
var inst_31861 = (0);
var state_32044__$1 = (function (){var statearr_32071 = state_32044;
(statearr_32071[(12)] = inst_31999);

(statearr_32071[(13)] = inst_31859);

(statearr_32071[(14)] = inst_31860);

(statearr_32071[(15)] = inst_31861);

(statearr_32071[(16)] = inst_31858);

return statearr_32071;
})();
var statearr_32072_33398 = state_32044__$1;
(statearr_32072_33398[(2)] = null);

(statearr_32072_33398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (3))){
var inst_32033 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32044__$1,inst_32033);
} else {
if((state_val_32045 === (12))){
var inst_32008 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32073_33404 = state_32044__$1;
(statearr_32073_33404[(2)] = inst_32008);

(statearr_32073_33404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (2))){
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32044__$1,(4),ch);
} else {
if((state_val_32045 === (23))){
var state_32044__$1 = state_32044;
var statearr_32076_33405 = state_32044__$1;
(statearr_32076_33405[(2)] = null);

(statearr_32076_33405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (19))){
var inst_32014 = (state_32044[(11)]);
var inst_31848 = (state_32044[(8)]);
var inst_32016 = cljs.core.async.muxch_STAR_(inst_32014);
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32044__$1,(22),inst_32016,inst_31848);
} else {
if((state_val_32045 === (11))){
var inst_31878 = (state_32044[(10)]);
var inst_31858 = (state_32044[(16)]);
var inst_31878__$1 = cljs.core.seq(inst_31858);
var state_32044__$1 = (function (){var statearr_32078 = state_32044;
(statearr_32078[(10)] = inst_31878__$1);

return statearr_32078;
})();
if(inst_31878__$1){
var statearr_32079_33406 = state_32044__$1;
(statearr_32079_33406[(1)] = (13));

} else {
var statearr_32080_33407 = state_32044__$1;
(statearr_32080_33407[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (9))){
var inst_32010 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32081_33408 = state_32044__$1;
(statearr_32081_33408[(2)] = inst_32010);

(statearr_32081_33408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (5))){
var inst_31855 = cljs.core.deref(mults);
var inst_31856 = cljs.core.vals(inst_31855);
var inst_31857 = cljs.core.seq(inst_31856);
var inst_31858 = inst_31857;
var inst_31859 = null;
var inst_31860 = (0);
var inst_31861 = (0);
var state_32044__$1 = (function (){var statearr_32082 = state_32044;
(statearr_32082[(13)] = inst_31859);

(statearr_32082[(14)] = inst_31860);

(statearr_32082[(15)] = inst_31861);

(statearr_32082[(16)] = inst_31858);

return statearr_32082;
})();
var statearr_32083_33410 = state_32044__$1;
(statearr_32083_33410[(2)] = null);

(statearr_32083_33410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (14))){
var state_32044__$1 = state_32044;
var statearr_32087_33411 = state_32044__$1;
(statearr_32087_33411[(2)] = null);

(statearr_32087_33411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (16))){
var inst_31878 = (state_32044[(10)]);
var inst_31992 = cljs.core.chunk_first(inst_31878);
var inst_31993 = cljs.core.chunk_rest(inst_31878);
var inst_31994 = cljs.core.count(inst_31992);
var inst_31858 = inst_31993;
var inst_31859 = inst_31992;
var inst_31860 = inst_31994;
var inst_31861 = (0);
var state_32044__$1 = (function (){var statearr_32092 = state_32044;
(statearr_32092[(13)] = inst_31859);

(statearr_32092[(14)] = inst_31860);

(statearr_32092[(15)] = inst_31861);

(statearr_32092[(16)] = inst_31858);

return statearr_32092;
})();
var statearr_32093_33412 = state_32044__$1;
(statearr_32093_33412[(2)] = null);

(statearr_32093_33412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (10))){
var inst_31859 = (state_32044[(13)]);
var inst_31860 = (state_32044[(14)]);
var inst_31861 = (state_32044[(15)]);
var inst_31858 = (state_32044[(16)]);
var inst_31866 = cljs.core._nth(inst_31859,inst_31861);
var inst_31867 = cljs.core.async.muxch_STAR_(inst_31866);
var inst_31868 = cljs.core.async.close_BANG_(inst_31867);
var inst_31869 = (inst_31861 + (1));
var tmp32084 = inst_31859;
var tmp32085 = inst_31860;
var tmp32086 = inst_31858;
var inst_31858__$1 = tmp32086;
var inst_31859__$1 = tmp32084;
var inst_31860__$1 = tmp32085;
var inst_31861__$1 = inst_31869;
var state_32044__$1 = (function (){var statearr_32102 = state_32044;
(statearr_32102[(13)] = inst_31859__$1);

(statearr_32102[(14)] = inst_31860__$1);

(statearr_32102[(15)] = inst_31861__$1);

(statearr_32102[(16)] = inst_31858__$1);

(statearr_32102[(17)] = inst_31868);

return statearr_32102;
})();
var statearr_32115_33413 = state_32044__$1;
(statearr_32115_33413[(2)] = null);

(statearr_32115_33413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (18))){
var inst_32003 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32116_33414 = state_32044__$1;
(statearr_32116_33414[(2)] = inst_32003);

(statearr_32116_33414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (8))){
var inst_31860 = (state_32044[(14)]);
var inst_31861 = (state_32044[(15)]);
var inst_31863 = (inst_31861 < inst_31860);
var inst_31864 = inst_31863;
var state_32044__$1 = state_32044;
if(cljs.core.truth_(inst_31864)){
var statearr_32117_33415 = state_32044__$1;
(statearr_32117_33415[(1)] = (10));

} else {
var statearr_32118_33416 = state_32044__$1;
(statearr_32118_33416[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29630__auto__ = null;
var cljs$core$async$state_machine__29630__auto____0 = (function (){
var statearr_32120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32120[(0)] = cljs$core$async$state_machine__29630__auto__);

(statearr_32120[(1)] = (1));

return statearr_32120;
});
var cljs$core$async$state_machine__29630__auto____1 = (function (state_32044){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_32044);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e32121){var ex__29633__auto__ = e32121;
var statearr_32122_33417 = state_32044;
(statearr_32122_33417[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_32044[(4)]))){
var statearr_32123_33418 = state_32044;
(statearr_32123_33418[(1)] = cljs.core.first((state_32044[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33419 = state_32044;
state_32044 = G__33419;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$state_machine__29630__auto__ = function(state_32044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29630__auto____1.call(this,state_32044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29630__auto____0;
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29630__auto____1;
return cljs$core$async$state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_32124 = f__30159__auto__();
(statearr_32124[(6)] = c__30151__auto___33378);

return statearr_32124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32126 = arguments.length;
switch (G__32126) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32128 = arguments.length;
switch (G__32128) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32143 = arguments.length;
switch (G__32143) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30151__auto___33428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_32202){
var state_val_32203 = (state_32202[(1)]);
if((state_val_32203 === (7))){
var state_32202__$1 = state_32202;
var statearr_32205_33429 = state_32202__$1;
(statearr_32205_33429[(2)] = null);

(statearr_32205_33429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (1))){
var state_32202__$1 = state_32202;
var statearr_32206_33430 = state_32202__$1;
(statearr_32206_33430[(2)] = null);

(statearr_32206_33430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (4))){
var inst_32157 = (state_32202[(7)]);
var inst_32158 = (state_32202[(8)]);
var inst_32160 = (inst_32158 < inst_32157);
var state_32202__$1 = state_32202;
if(cljs.core.truth_(inst_32160)){
var statearr_32207_33431 = state_32202__$1;
(statearr_32207_33431[(1)] = (6));

} else {
var statearr_32208_33432 = state_32202__$1;
(statearr_32208_33432[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (15))){
var inst_32187 = (state_32202[(9)]);
var inst_32192 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32187);
var state_32202__$1 = state_32202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32202__$1,(17),out,inst_32192);
} else {
if((state_val_32203 === (13))){
var inst_32187 = (state_32202[(9)]);
var inst_32187__$1 = (state_32202[(2)]);
var inst_32188 = cljs.core.some(cljs.core.nil_QMARK_,inst_32187__$1);
var state_32202__$1 = (function (){var statearr_32209 = state_32202;
(statearr_32209[(9)] = inst_32187__$1);

return statearr_32209;
})();
if(cljs.core.truth_(inst_32188)){
var statearr_32210_33433 = state_32202__$1;
(statearr_32210_33433[(1)] = (14));

} else {
var statearr_32211_33435 = state_32202__$1;
(statearr_32211_33435[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (6))){
var state_32202__$1 = state_32202;
var statearr_32213_33436 = state_32202__$1;
(statearr_32213_33436[(2)] = null);

(statearr_32213_33436[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (17))){
var inst_32194 = (state_32202[(2)]);
var state_32202__$1 = (function (){var statearr_32217 = state_32202;
(statearr_32217[(10)] = inst_32194);

return statearr_32217;
})();
var statearr_32218_33437 = state_32202__$1;
(statearr_32218_33437[(2)] = null);

(statearr_32218_33437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (3))){
var inst_32199 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32202__$1,inst_32199);
} else {
if((state_val_32203 === (12))){
var _ = (function (){var statearr_32219 = state_32202;
(statearr_32219[(4)] = cljs.core.rest((state_32202[(4)])));

return statearr_32219;
})();
var state_32202__$1 = state_32202;
var ex32215 = (state_32202__$1[(2)]);
var statearr_32220_33438 = state_32202__$1;
(statearr_32220_33438[(5)] = ex32215);


if((ex32215 instanceof Object)){
var statearr_32222_33439 = state_32202__$1;
(statearr_32222_33439[(1)] = (11));

(statearr_32222_33439[(5)] = null);

} else {
throw ex32215;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (2))){
var inst_32156 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32157 = cnt;
var inst_32158 = (0);
var state_32202__$1 = (function (){var statearr_32224 = state_32202;
(statearr_32224[(7)] = inst_32157);

(statearr_32224[(11)] = inst_32156);

(statearr_32224[(8)] = inst_32158);

return statearr_32224;
})();
var statearr_32225_33440 = state_32202__$1;
(statearr_32225_33440[(2)] = null);

(statearr_32225_33440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (11))){
var inst_32165 = (state_32202[(2)]);
var inst_32166 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32202__$1 = (function (){var statearr_32226 = state_32202;
(statearr_32226[(12)] = inst_32165);

return statearr_32226;
})();
var statearr_32227_33441 = state_32202__$1;
(statearr_32227_33441[(2)] = inst_32166);

(statearr_32227_33441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (9))){
var inst_32158 = (state_32202[(8)]);
var _ = (function (){var statearr_32228 = state_32202;
(statearr_32228[(4)] = cljs.core.cons((12),(state_32202[(4)])));

return statearr_32228;
})();
var inst_32173 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32158) : chs__$1.call(null,inst_32158));
var inst_32174 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32158) : done.call(null,inst_32158));
var inst_32175 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32173,inst_32174);
var ___$1 = (function (){var statearr_32229 = state_32202;
(statearr_32229[(4)] = cljs.core.rest((state_32202[(4)])));

return statearr_32229;
})();
var state_32202__$1 = state_32202;
var statearr_32230_33442 = state_32202__$1;
(statearr_32230_33442[(2)] = inst_32175);

(statearr_32230_33442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (5))){
var inst_32185 = (state_32202[(2)]);
var state_32202__$1 = (function (){var statearr_32231 = state_32202;
(statearr_32231[(13)] = inst_32185);

return statearr_32231;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32202__$1,(13),dchan);
} else {
if((state_val_32203 === (14))){
var inst_32190 = cljs.core.async.close_BANG_(out);
var state_32202__$1 = state_32202;
var statearr_32233_33443 = state_32202__$1;
(statearr_32233_33443[(2)] = inst_32190);

(statearr_32233_33443[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (16))){
var inst_32197 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
var statearr_32234_33444 = state_32202__$1;
(statearr_32234_33444[(2)] = inst_32197);

(statearr_32234_33444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (10))){
var inst_32158 = (state_32202[(8)]);
var inst_32178 = (state_32202[(2)]);
var inst_32179 = (inst_32158 + (1));
var inst_32158__$1 = inst_32179;
var state_32202__$1 = (function (){var statearr_32235 = state_32202;
(statearr_32235[(14)] = inst_32178);

(statearr_32235[(8)] = inst_32158__$1);

return statearr_32235;
})();
var statearr_32236_33445 = state_32202__$1;
(statearr_32236_33445[(2)] = null);

(statearr_32236_33445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (8))){
var inst_32183 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
var statearr_32237_33446 = state_32202__$1;
(statearr_32237_33446[(2)] = inst_32183);

(statearr_32237_33446[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29630__auto__ = null;
var cljs$core$async$state_machine__29630__auto____0 = (function (){
var statearr_32238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32238[(0)] = cljs$core$async$state_machine__29630__auto__);

(statearr_32238[(1)] = (1));

return statearr_32238;
});
var cljs$core$async$state_machine__29630__auto____1 = (function (state_32202){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_32202);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e32239){var ex__29633__auto__ = e32239;
var statearr_32240_33448 = state_32202;
(statearr_32240_33448[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_32202[(4)]))){
var statearr_32242_33449 = state_32202;
(statearr_32242_33449[(1)] = cljs.core.first((state_32202[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33450 = state_32202;
state_32202 = G__33450;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$state_machine__29630__auto__ = function(state_32202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29630__auto____1.call(this,state_32202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29630__auto____0;
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29630__auto____1;
return cljs$core$async$state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_32243 = f__30159__auto__();
(statearr_32243[(6)] = c__30151__auto___33428);

return statearr_32243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32247 = arguments.length;
switch (G__32247) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30151__auto___33453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_32282){
var state_val_32284 = (state_32282[(1)]);
if((state_val_32284 === (7))){
var inst_32262 = (state_32282[(7)]);
var inst_32261 = (state_32282[(8)]);
var inst_32261__$1 = (state_32282[(2)]);
var inst_32262__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32261__$1,(0),null);
var inst_32263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32261__$1,(1),null);
var inst_32264 = (inst_32262__$1 == null);
var state_32282__$1 = (function (){var statearr_32286 = state_32282;
(statearr_32286[(7)] = inst_32262__$1);

(statearr_32286[(9)] = inst_32263);

(statearr_32286[(8)] = inst_32261__$1);

return statearr_32286;
})();
if(cljs.core.truth_(inst_32264)){
var statearr_32287_33454 = state_32282__$1;
(statearr_32287_33454[(1)] = (8));

} else {
var statearr_32288_33455 = state_32282__$1;
(statearr_32288_33455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (1))){
var inst_32251 = cljs.core.vec(chs);
var inst_32252 = inst_32251;
var state_32282__$1 = (function (){var statearr_32289 = state_32282;
(statearr_32289[(10)] = inst_32252);

return statearr_32289;
})();
var statearr_32290_33456 = state_32282__$1;
(statearr_32290_33456[(2)] = null);

(statearr_32290_33456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (4))){
var inst_32252 = (state_32282[(10)]);
var state_32282__$1 = state_32282;
return cljs.core.async.ioc_alts_BANG_(state_32282__$1,(7),inst_32252);
} else {
if((state_val_32284 === (6))){
var inst_32278 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32292_33458 = state_32282__$1;
(statearr_32292_33458[(2)] = inst_32278);

(statearr_32292_33458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (3))){
var inst_32280 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32282__$1,inst_32280);
} else {
if((state_val_32284 === (2))){
var inst_32252 = (state_32282[(10)]);
var inst_32254 = cljs.core.count(inst_32252);
var inst_32255 = (inst_32254 > (0));
var state_32282__$1 = state_32282;
if(cljs.core.truth_(inst_32255)){
var statearr_32294_33460 = state_32282__$1;
(statearr_32294_33460[(1)] = (4));

} else {
var statearr_32296_33461 = state_32282__$1;
(statearr_32296_33461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (11))){
var inst_32252 = (state_32282[(10)]);
var inst_32271 = (state_32282[(2)]);
var tmp32293 = inst_32252;
var inst_32252__$1 = tmp32293;
var state_32282__$1 = (function (){var statearr_32297 = state_32282;
(statearr_32297[(11)] = inst_32271);

(statearr_32297[(10)] = inst_32252__$1);

return statearr_32297;
})();
var statearr_32298_33462 = state_32282__$1;
(statearr_32298_33462[(2)] = null);

(statearr_32298_33462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (9))){
var inst_32262 = (state_32282[(7)]);
var state_32282__$1 = state_32282;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32282__$1,(11),out,inst_32262);
} else {
if((state_val_32284 === (5))){
var inst_32276 = cljs.core.async.close_BANG_(out);
var state_32282__$1 = state_32282;
var statearr_32299_33466 = state_32282__$1;
(statearr_32299_33466[(2)] = inst_32276);

(statearr_32299_33466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (10))){
var inst_32274 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32301_33467 = state_32282__$1;
(statearr_32301_33467[(2)] = inst_32274);

(statearr_32301_33467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (8))){
var inst_32262 = (state_32282[(7)]);
var inst_32263 = (state_32282[(9)]);
var inst_32252 = (state_32282[(10)]);
var inst_32261 = (state_32282[(8)]);
var inst_32266 = (function (){var cs = inst_32252;
var vec__32257 = inst_32261;
var v = inst_32262;
var c = inst_32263;
return (function (p1__32244_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32244_SHARP_);
});
})();
var inst_32267 = cljs.core.filterv(inst_32266,inst_32252);
var inst_32252__$1 = inst_32267;
var state_32282__$1 = (function (){var statearr_32302 = state_32282;
(statearr_32302[(10)] = inst_32252__$1);

return statearr_32302;
})();
var statearr_32303_33468 = state_32282__$1;
(statearr_32303_33468[(2)] = null);

(statearr_32303_33468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29630__auto__ = null;
var cljs$core$async$state_machine__29630__auto____0 = (function (){
var statearr_32304 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32304[(0)] = cljs$core$async$state_machine__29630__auto__);

(statearr_32304[(1)] = (1));

return statearr_32304;
});
var cljs$core$async$state_machine__29630__auto____1 = (function (state_32282){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_32282);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e32305){var ex__29633__auto__ = e32305;
var statearr_32306_33469 = state_32282;
(statearr_32306_33469[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_32282[(4)]))){
var statearr_32307_33470 = state_32282;
(statearr_32307_33470[(1)] = cljs.core.first((state_32282[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33471 = state_32282;
state_32282 = G__33471;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$state_machine__29630__auto__ = function(state_32282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29630__auto____1.call(this,state_32282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29630__auto____0;
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29630__auto____1;
return cljs$core$async$state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_32309 = f__30159__auto__();
(statearr_32309[(6)] = c__30151__auto___33453);

return statearr_32309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32311 = arguments.length;
switch (G__32311) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30151__auto___33474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_32338){
var state_val_32339 = (state_32338[(1)]);
if((state_val_32339 === (7))){
var inst_32320 = (state_32338[(7)]);
var inst_32320__$1 = (state_32338[(2)]);
var inst_32321 = (inst_32320__$1 == null);
var inst_32322 = cljs.core.not(inst_32321);
var state_32338__$1 = (function (){var statearr_32341 = state_32338;
(statearr_32341[(7)] = inst_32320__$1);

return statearr_32341;
})();
if(inst_32322){
var statearr_32342_33475 = state_32338__$1;
(statearr_32342_33475[(1)] = (8));

} else {
var statearr_32343_33476 = state_32338__$1;
(statearr_32343_33476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (1))){
var inst_32315 = (0);
var state_32338__$1 = (function (){var statearr_32344 = state_32338;
(statearr_32344[(8)] = inst_32315);

return statearr_32344;
})();
var statearr_32345_33477 = state_32338__$1;
(statearr_32345_33477[(2)] = null);

(statearr_32345_33477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (4))){
var state_32338__$1 = state_32338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32338__$1,(7),ch);
} else {
if((state_val_32339 === (6))){
var inst_32333 = (state_32338[(2)]);
var state_32338__$1 = state_32338;
var statearr_32346_33478 = state_32338__$1;
(statearr_32346_33478[(2)] = inst_32333);

(statearr_32346_33478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (3))){
var inst_32335 = (state_32338[(2)]);
var inst_32336 = cljs.core.async.close_BANG_(out);
var state_32338__$1 = (function (){var statearr_32347 = state_32338;
(statearr_32347[(9)] = inst_32335);

return statearr_32347;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32338__$1,inst_32336);
} else {
if((state_val_32339 === (2))){
var inst_32315 = (state_32338[(8)]);
var inst_32317 = (inst_32315 < n);
var state_32338__$1 = state_32338;
if(cljs.core.truth_(inst_32317)){
var statearr_32349_33479 = state_32338__$1;
(statearr_32349_33479[(1)] = (4));

} else {
var statearr_32350_33480 = state_32338__$1;
(statearr_32350_33480[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (11))){
var inst_32315 = (state_32338[(8)]);
var inst_32325 = (state_32338[(2)]);
var inst_32326 = (inst_32315 + (1));
var inst_32315__$1 = inst_32326;
var state_32338__$1 = (function (){var statearr_32351 = state_32338;
(statearr_32351[(10)] = inst_32325);

(statearr_32351[(8)] = inst_32315__$1);

return statearr_32351;
})();
var statearr_32352_33481 = state_32338__$1;
(statearr_32352_33481[(2)] = null);

(statearr_32352_33481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (9))){
var state_32338__$1 = state_32338;
var statearr_32353_33482 = state_32338__$1;
(statearr_32353_33482[(2)] = null);

(statearr_32353_33482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (5))){
var state_32338__$1 = state_32338;
var statearr_32354_33483 = state_32338__$1;
(statearr_32354_33483[(2)] = null);

(statearr_32354_33483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (10))){
var inst_32330 = (state_32338[(2)]);
var state_32338__$1 = state_32338;
var statearr_32355_33484 = state_32338__$1;
(statearr_32355_33484[(2)] = inst_32330);

(statearr_32355_33484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32339 === (8))){
var inst_32320 = (state_32338[(7)]);
var state_32338__$1 = state_32338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32338__$1,(11),out,inst_32320);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29630__auto__ = null;
var cljs$core$async$state_machine__29630__auto____0 = (function (){
var statearr_32356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32356[(0)] = cljs$core$async$state_machine__29630__auto__);

(statearr_32356[(1)] = (1));

return statearr_32356;
});
var cljs$core$async$state_machine__29630__auto____1 = (function (state_32338){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_32338);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e32357){var ex__29633__auto__ = e32357;
var statearr_32358_33485 = state_32338;
(statearr_32358_33485[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_32338[(4)]))){
var statearr_32359_33486 = state_32338;
(statearr_32359_33486[(1)] = cljs.core.first((state_32338[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33487 = state_32338;
state_32338 = G__33487;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$state_machine__29630__auto__ = function(state_32338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29630__auto____1.call(this,state_32338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29630__auto____0;
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29630__auto____1;
return cljs$core$async$state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_32360 = f__30159__auto__();
(statearr_32360[(6)] = c__30151__auto___33474);

return statearr_32360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32363 = (function (f,ch,meta32364){
this.f = f;
this.ch = ch;
this.meta32364 = meta32364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32365,meta32364__$1){
var self__ = this;
var _32365__$1 = this;
return (new cljs.core.async.t_cljs$core$async32363(self__.f,self__.ch,meta32364__$1));
}));

(cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32365){
var self__ = this;
var _32365__$1 = this;
return self__.meta32364;
}));

(cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32367 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32367 = (function (f,ch,meta32364,_,fn1,meta32368){
this.f = f;
this.ch = ch;
this.meta32364 = meta32364;
this._ = _;
this.fn1 = fn1;
this.meta32368 = meta32368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32369,meta32368__$1){
var self__ = this;
var _32369__$1 = this;
return (new cljs.core.async.t_cljs$core$async32367(self__.f,self__.ch,self__.meta32364,self__._,self__.fn1,meta32368__$1));
}));

(cljs.core.async.t_cljs$core$async32367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32369){
var self__ = this;
var _32369__$1 = this;
return self__.meta32368;
}));

(cljs.core.async.t_cljs$core$async32367.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32367.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32367.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32367.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32362_SHARP_){
var G__32370 = (((p1__32362_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32362_SHARP_) : self__.f.call(null,p1__32362_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32370) : f1.call(null,G__32370));
});
}));

(cljs.core.async.t_cljs$core$async32367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32364","meta32364",174061861,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32363","cljs.core.async/t_cljs$core$async32363",1055457234,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32368","meta32368",-98799822,null)], null);
}));

(cljs.core.async.t_cljs$core$async32367.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32367");

(cljs.core.async.t_cljs$core$async32367.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32367");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32367.
 */
cljs.core.async.__GT_t_cljs$core$async32367 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32367(f__$1,ch__$1,meta32364__$1,___$2,fn1__$1,meta32368){
return (new cljs.core.async.t_cljs$core$async32367(f__$1,ch__$1,meta32364__$1,___$2,fn1__$1,meta32368));
});

}

return (new cljs.core.async.t_cljs$core$async32367(self__.f,self__.ch,self__.meta32364,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32372 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32372) : self__.f.call(null,G__32372));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32364","meta32364",174061861,null)], null);
}));

(cljs.core.async.t_cljs$core$async32363.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32363");

(cljs.core.async.t_cljs$core$async32363.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32363");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32363.
 */
cljs.core.async.__GT_t_cljs$core$async32363 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32363(f__$1,ch__$1,meta32364){
return (new cljs.core.async.t_cljs$core$async32363(f__$1,ch__$1,meta32364));
});

}

return (new cljs.core.async.t_cljs$core$async32363(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32374 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32374 = (function (f,ch,meta32375){
this.f = f;
this.ch = ch;
this.meta32375 = meta32375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32376,meta32375__$1){
var self__ = this;
var _32376__$1 = this;
return (new cljs.core.async.t_cljs$core$async32374(self__.f,self__.ch,meta32375__$1));
}));

(cljs.core.async.t_cljs$core$async32374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32376){
var self__ = this;
var _32376__$1 = this;
return self__.meta32375;
}));

(cljs.core.async.t_cljs$core$async32374.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32374.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32374.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32374.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32374.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32374.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32375","meta32375",1869542201,null)], null);
}));

(cljs.core.async.t_cljs$core$async32374.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32374");

(cljs.core.async.t_cljs$core$async32374.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32374");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32374.
 */
cljs.core.async.__GT_t_cljs$core$async32374 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32374(f__$1,ch__$1,meta32375){
return (new cljs.core.async.t_cljs$core$async32374(f__$1,ch__$1,meta32375));
});

}

return (new cljs.core.async.t_cljs$core$async32374(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32379 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32379 = (function (p,ch,meta32380){
this.p = p;
this.ch = ch;
this.meta32380 = meta32380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32381,meta32380__$1){
var self__ = this;
var _32381__$1 = this;
return (new cljs.core.async.t_cljs$core$async32379(self__.p,self__.ch,meta32380__$1));
}));

(cljs.core.async.t_cljs$core$async32379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32381){
var self__ = this;
var _32381__$1 = this;
return self__.meta32380;
}));

(cljs.core.async.t_cljs$core$async32379.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32379.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32379.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32379.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32379.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32379.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32379.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32380","meta32380",-1494977838,null)], null);
}));

(cljs.core.async.t_cljs$core$async32379.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32379");

(cljs.core.async.t_cljs$core$async32379.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32379");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32379.
 */
cljs.core.async.__GT_t_cljs$core$async32379 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32379(p__$1,ch__$1,meta32380){
return (new cljs.core.async.t_cljs$core$async32379(p__$1,ch__$1,meta32380));
});

}

return (new cljs.core.async.t_cljs$core$async32379(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32386 = arguments.length;
switch (G__32386) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30151__auto___33512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_32409){
var state_val_32410 = (state_32409[(1)]);
if((state_val_32410 === (7))){
var inst_32405 = (state_32409[(2)]);
var state_32409__$1 = state_32409;
var statearr_32411_33513 = state_32409__$1;
(statearr_32411_33513[(2)] = inst_32405);

(statearr_32411_33513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (1))){
var state_32409__$1 = state_32409;
var statearr_32412_33514 = state_32409__$1;
(statearr_32412_33514[(2)] = null);

(statearr_32412_33514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (4))){
var inst_32391 = (state_32409[(7)]);
var inst_32391__$1 = (state_32409[(2)]);
var inst_32392 = (inst_32391__$1 == null);
var state_32409__$1 = (function (){var statearr_32413 = state_32409;
(statearr_32413[(7)] = inst_32391__$1);

return statearr_32413;
})();
if(cljs.core.truth_(inst_32392)){
var statearr_32414_33515 = state_32409__$1;
(statearr_32414_33515[(1)] = (5));

} else {
var statearr_32415_33516 = state_32409__$1;
(statearr_32415_33516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (6))){
var inst_32391 = (state_32409[(7)]);
var inst_32396 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32391) : p.call(null,inst_32391));
var state_32409__$1 = state_32409;
if(cljs.core.truth_(inst_32396)){
var statearr_32416_33517 = state_32409__$1;
(statearr_32416_33517[(1)] = (8));

} else {
var statearr_32417_33518 = state_32409__$1;
(statearr_32417_33518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (3))){
var inst_32407 = (state_32409[(2)]);
var state_32409__$1 = state_32409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32409__$1,inst_32407);
} else {
if((state_val_32410 === (2))){
var state_32409__$1 = state_32409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32409__$1,(4),ch);
} else {
if((state_val_32410 === (11))){
var inst_32399 = (state_32409[(2)]);
var state_32409__$1 = state_32409;
var statearr_32418_33519 = state_32409__$1;
(statearr_32418_33519[(2)] = inst_32399);

(statearr_32418_33519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (9))){
var state_32409__$1 = state_32409;
var statearr_32419_33520 = state_32409__$1;
(statearr_32419_33520[(2)] = null);

(statearr_32419_33520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (5))){
var inst_32394 = cljs.core.async.close_BANG_(out);
var state_32409__$1 = state_32409;
var statearr_32420_33521 = state_32409__$1;
(statearr_32420_33521[(2)] = inst_32394);

(statearr_32420_33521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (10))){
var inst_32402 = (state_32409[(2)]);
var state_32409__$1 = (function (){var statearr_32421 = state_32409;
(statearr_32421[(8)] = inst_32402);

return statearr_32421;
})();
var statearr_32424_33522 = state_32409__$1;
(statearr_32424_33522[(2)] = null);

(statearr_32424_33522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (8))){
var inst_32391 = (state_32409[(7)]);
var state_32409__$1 = state_32409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32409__$1,(11),out,inst_32391);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29630__auto__ = null;
var cljs$core$async$state_machine__29630__auto____0 = (function (){
var statearr_32425 = [null,null,null,null,null,null,null,null,null];
(statearr_32425[(0)] = cljs$core$async$state_machine__29630__auto__);

(statearr_32425[(1)] = (1));

return statearr_32425;
});
var cljs$core$async$state_machine__29630__auto____1 = (function (state_32409){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_32409);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e32426){var ex__29633__auto__ = e32426;
var statearr_32427_33526 = state_32409;
(statearr_32427_33526[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_32409[(4)]))){
var statearr_32428_33527 = state_32409;
(statearr_32428_33527[(1)] = cljs.core.first((state_32409[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33528 = state_32409;
state_32409 = G__33528;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$state_machine__29630__auto__ = function(state_32409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29630__auto____1.call(this,state_32409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29630__auto____0;
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29630__auto____1;
return cljs$core$async$state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_32429 = f__30159__auto__();
(statearr_32429[(6)] = c__30151__auto___33512);

return statearr_32429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32434 = arguments.length;
switch (G__32434) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30151__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_32511){
var state_val_32512 = (state_32511[(1)]);
if((state_val_32512 === (7))){
var inst_32503 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32529_33530 = state_32511__$1;
(statearr_32529_33530[(2)] = inst_32503);

(statearr_32529_33530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (20))){
var inst_32473 = (state_32511[(7)]);
var inst_32484 = (state_32511[(2)]);
var inst_32485 = cljs.core.next(inst_32473);
var inst_32459 = inst_32485;
var inst_32460 = null;
var inst_32461 = (0);
var inst_32462 = (0);
var state_32511__$1 = (function (){var statearr_32532 = state_32511;
(statearr_32532[(8)] = inst_32460);

(statearr_32532[(9)] = inst_32459);

(statearr_32532[(10)] = inst_32462);

(statearr_32532[(11)] = inst_32461);

(statearr_32532[(12)] = inst_32484);

return statearr_32532;
})();
var statearr_32534_33531 = state_32511__$1;
(statearr_32534_33531[(2)] = null);

(statearr_32534_33531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (1))){
var state_32511__$1 = state_32511;
var statearr_32536_33535 = state_32511__$1;
(statearr_32536_33535[(2)] = null);

(statearr_32536_33535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (4))){
var inst_32448 = (state_32511[(13)]);
var inst_32448__$1 = (state_32511[(2)]);
var inst_32449 = (inst_32448__$1 == null);
var state_32511__$1 = (function (){var statearr_32537 = state_32511;
(statearr_32537[(13)] = inst_32448__$1);

return statearr_32537;
})();
if(cljs.core.truth_(inst_32449)){
var statearr_32540_33536 = state_32511__$1;
(statearr_32540_33536[(1)] = (5));

} else {
var statearr_32542_33537 = state_32511__$1;
(statearr_32542_33537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (15))){
var state_32511__$1 = state_32511;
var statearr_32562_33538 = state_32511__$1;
(statearr_32562_33538[(2)] = null);

(statearr_32562_33538[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (21))){
var state_32511__$1 = state_32511;
var statearr_32564_33539 = state_32511__$1;
(statearr_32564_33539[(2)] = null);

(statearr_32564_33539[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (13))){
var inst_32460 = (state_32511[(8)]);
var inst_32459 = (state_32511[(9)]);
var inst_32462 = (state_32511[(10)]);
var inst_32461 = (state_32511[(11)]);
var inst_32469 = (state_32511[(2)]);
var inst_32470 = (inst_32462 + (1));
var tmp32548 = inst_32460;
var tmp32549 = inst_32459;
var tmp32550 = inst_32461;
var inst_32459__$1 = tmp32549;
var inst_32460__$1 = tmp32548;
var inst_32461__$1 = tmp32550;
var inst_32462__$1 = inst_32470;
var state_32511__$1 = (function (){var statearr_32572 = state_32511;
(statearr_32572[(8)] = inst_32460__$1);

(statearr_32572[(9)] = inst_32459__$1);

(statearr_32572[(10)] = inst_32462__$1);

(statearr_32572[(11)] = inst_32461__$1);

(statearr_32572[(14)] = inst_32469);

return statearr_32572;
})();
var statearr_32573_33543 = state_32511__$1;
(statearr_32573_33543[(2)] = null);

(statearr_32573_33543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (22))){
var state_32511__$1 = state_32511;
var statearr_32575_33544 = state_32511__$1;
(statearr_32575_33544[(2)] = null);

(statearr_32575_33544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (6))){
var inst_32448 = (state_32511[(13)]);
var inst_32457 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32448) : f.call(null,inst_32448));
var inst_32458 = cljs.core.seq(inst_32457);
var inst_32459 = inst_32458;
var inst_32460 = null;
var inst_32461 = (0);
var inst_32462 = (0);
var state_32511__$1 = (function (){var statearr_32579 = state_32511;
(statearr_32579[(8)] = inst_32460);

(statearr_32579[(9)] = inst_32459);

(statearr_32579[(10)] = inst_32462);

(statearr_32579[(11)] = inst_32461);

return statearr_32579;
})();
var statearr_32581_33548 = state_32511__$1;
(statearr_32581_33548[(2)] = null);

(statearr_32581_33548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (17))){
var inst_32473 = (state_32511[(7)]);
var inst_32477 = cljs.core.chunk_first(inst_32473);
var inst_32478 = cljs.core.chunk_rest(inst_32473);
var inst_32479 = cljs.core.count(inst_32477);
var inst_32459 = inst_32478;
var inst_32460 = inst_32477;
var inst_32461 = inst_32479;
var inst_32462 = (0);
var state_32511__$1 = (function (){var statearr_32582 = state_32511;
(statearr_32582[(8)] = inst_32460);

(statearr_32582[(9)] = inst_32459);

(statearr_32582[(10)] = inst_32462);

(statearr_32582[(11)] = inst_32461);

return statearr_32582;
})();
var statearr_32583_33549 = state_32511__$1;
(statearr_32583_33549[(2)] = null);

(statearr_32583_33549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (3))){
var inst_32505 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32511__$1,inst_32505);
} else {
if((state_val_32512 === (12))){
var inst_32493 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32584_33550 = state_32511__$1;
(statearr_32584_33550[(2)] = inst_32493);

(statearr_32584_33550[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (2))){
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32511__$1,(4),in$);
} else {
if((state_val_32512 === (23))){
var inst_32501 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32585_33551 = state_32511__$1;
(statearr_32585_33551[(2)] = inst_32501);

(statearr_32585_33551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (19))){
var inst_32488 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32588_33556 = state_32511__$1;
(statearr_32588_33556[(2)] = inst_32488);

(statearr_32588_33556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (11))){
var inst_32459 = (state_32511[(9)]);
var inst_32473 = (state_32511[(7)]);
var inst_32473__$1 = cljs.core.seq(inst_32459);
var state_32511__$1 = (function (){var statearr_32617 = state_32511;
(statearr_32617[(7)] = inst_32473__$1);

return statearr_32617;
})();
if(inst_32473__$1){
var statearr_32618_33557 = state_32511__$1;
(statearr_32618_33557[(1)] = (14));

} else {
var statearr_32619_33561 = state_32511__$1;
(statearr_32619_33561[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (9))){
var inst_32495 = (state_32511[(2)]);
var inst_32496 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32511__$1 = (function (){var statearr_32620 = state_32511;
(statearr_32620[(15)] = inst_32495);

return statearr_32620;
})();
if(cljs.core.truth_(inst_32496)){
var statearr_32621_33562 = state_32511__$1;
(statearr_32621_33562[(1)] = (21));

} else {
var statearr_32622_33563 = state_32511__$1;
(statearr_32622_33563[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (5))){
var inst_32451 = cljs.core.async.close_BANG_(out);
var state_32511__$1 = state_32511;
var statearr_32623_33564 = state_32511__$1;
(statearr_32623_33564[(2)] = inst_32451);

(statearr_32623_33564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (14))){
var inst_32473 = (state_32511[(7)]);
var inst_32475 = cljs.core.chunked_seq_QMARK_(inst_32473);
var state_32511__$1 = state_32511;
if(inst_32475){
var statearr_32624_33565 = state_32511__$1;
(statearr_32624_33565[(1)] = (17));

} else {
var statearr_32625_33566 = state_32511__$1;
(statearr_32625_33566[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (16))){
var inst_32491 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32626_33567 = state_32511__$1;
(statearr_32626_33567[(2)] = inst_32491);

(statearr_32626_33567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (10))){
var inst_32460 = (state_32511[(8)]);
var inst_32462 = (state_32511[(10)]);
var inst_32467 = cljs.core._nth(inst_32460,inst_32462);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32511__$1,(13),out,inst_32467);
} else {
if((state_val_32512 === (18))){
var inst_32473 = (state_32511[(7)]);
var inst_32482 = cljs.core.first(inst_32473);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32511__$1,(20),out,inst_32482);
} else {
if((state_val_32512 === (8))){
var inst_32462 = (state_32511[(10)]);
var inst_32461 = (state_32511[(11)]);
var inst_32464 = (inst_32462 < inst_32461);
var inst_32465 = inst_32464;
var state_32511__$1 = state_32511;
if(cljs.core.truth_(inst_32465)){
var statearr_32628_33571 = state_32511__$1;
(statearr_32628_33571[(1)] = (10));

} else {
var statearr_32629_33572 = state_32511__$1;
(statearr_32629_33572[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29630__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29630__auto____0 = (function (){
var statearr_32631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32631[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29630__auto__);

(statearr_32631[(1)] = (1));

return statearr_32631;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29630__auto____1 = (function (state_32511){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_32511);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e32632){var ex__29633__auto__ = e32632;
var statearr_32633_33576 = state_32511;
(statearr_32633_33576[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_32511[(4)]))){
var statearr_32634_33577 = state_32511;
(statearr_32634_33577[(1)] = cljs.core.first((state_32511[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33578 = state_32511;
state_32511 = G__33578;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29630__auto__ = function(state_32511){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29630__auto____1.call(this,state_32511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29630__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29630__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_32638 = f__30159__auto__();
(statearr_32638[(6)] = c__30151__auto__);

return statearr_32638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));

return c__30151__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32640 = arguments.length;
switch (G__32640) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32652 = arguments.length;
switch (G__32652) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32665 = arguments.length;
switch (G__32665) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30151__auto___33586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_32727){
var state_val_32728 = (state_32727[(1)]);
if((state_val_32728 === (7))){
var inst_32719 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
var statearr_32737_33587 = state_32727__$1;
(statearr_32737_33587[(2)] = inst_32719);

(statearr_32737_33587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (1))){
var inst_32696 = null;
var state_32727__$1 = (function (){var statearr_32739 = state_32727;
(statearr_32739[(7)] = inst_32696);

return statearr_32739;
})();
var statearr_32740_33588 = state_32727__$1;
(statearr_32740_33588[(2)] = null);

(statearr_32740_33588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (4))){
var inst_32703 = (state_32727[(8)]);
var inst_32703__$1 = (state_32727[(2)]);
var inst_32704 = (inst_32703__$1 == null);
var inst_32705 = cljs.core.not(inst_32704);
var state_32727__$1 = (function (){var statearr_32744 = state_32727;
(statearr_32744[(8)] = inst_32703__$1);

return statearr_32744;
})();
if(inst_32705){
var statearr_32745_33589 = state_32727__$1;
(statearr_32745_33589[(1)] = (5));

} else {
var statearr_32746_33590 = state_32727__$1;
(statearr_32746_33590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (6))){
var state_32727__$1 = state_32727;
var statearr_32748_33591 = state_32727__$1;
(statearr_32748_33591[(2)] = null);

(statearr_32748_33591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (3))){
var inst_32721 = (state_32727[(2)]);
var inst_32722 = cljs.core.async.close_BANG_(out);
var state_32727__$1 = (function (){var statearr_32752 = state_32727;
(statearr_32752[(9)] = inst_32721);

return statearr_32752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32727__$1,inst_32722);
} else {
if((state_val_32728 === (2))){
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32727__$1,(4),ch);
} else {
if((state_val_32728 === (11))){
var inst_32703 = (state_32727[(8)]);
var inst_32713 = (state_32727[(2)]);
var inst_32696 = inst_32703;
var state_32727__$1 = (function (){var statearr_32754 = state_32727;
(statearr_32754[(10)] = inst_32713);

(statearr_32754[(7)] = inst_32696);

return statearr_32754;
})();
var statearr_32758_33592 = state_32727__$1;
(statearr_32758_33592[(2)] = null);

(statearr_32758_33592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (9))){
var inst_32703 = (state_32727[(8)]);
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32727__$1,(11),out,inst_32703);
} else {
if((state_val_32728 === (5))){
var inst_32703 = (state_32727[(8)]);
var inst_32696 = (state_32727[(7)]);
var inst_32707 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32703,inst_32696);
var state_32727__$1 = state_32727;
if(inst_32707){
var statearr_32763_33593 = state_32727__$1;
(statearr_32763_33593[(1)] = (8));

} else {
var statearr_32764_33594 = state_32727__$1;
(statearr_32764_33594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (10))){
var inst_32716 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
var statearr_32765_33595 = state_32727__$1;
(statearr_32765_33595[(2)] = inst_32716);

(statearr_32765_33595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (8))){
var inst_32696 = (state_32727[(7)]);
var tmp32762 = inst_32696;
var inst_32696__$1 = tmp32762;
var state_32727__$1 = (function (){var statearr_32768 = state_32727;
(statearr_32768[(7)] = inst_32696__$1);

return statearr_32768;
})();
var statearr_32769_33596 = state_32727__$1;
(statearr_32769_33596[(2)] = null);

(statearr_32769_33596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29630__auto__ = null;
var cljs$core$async$state_machine__29630__auto____0 = (function (){
var statearr_32770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32770[(0)] = cljs$core$async$state_machine__29630__auto__);

(statearr_32770[(1)] = (1));

return statearr_32770;
});
var cljs$core$async$state_machine__29630__auto____1 = (function (state_32727){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_32727);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e32771){var ex__29633__auto__ = e32771;
var statearr_32772_33597 = state_32727;
(statearr_32772_33597[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_32727[(4)]))){
var statearr_32773_33598 = state_32727;
(statearr_32773_33598[(1)] = cljs.core.first((state_32727[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33599 = state_32727;
state_32727 = G__33599;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$state_machine__29630__auto__ = function(state_32727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29630__auto____1.call(this,state_32727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29630__auto____0;
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29630__auto____1;
return cljs$core$async$state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_32774 = f__30159__auto__();
(statearr_32774[(6)] = c__30151__auto___33586);

return statearr_32774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32780 = arguments.length;
switch (G__32780) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30151__auto___33601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_32830){
var state_val_32832 = (state_32830[(1)]);
if((state_val_32832 === (7))){
var inst_32823 = (state_32830[(2)]);
var state_32830__$1 = state_32830;
var statearr_32833_33602 = state_32830__$1;
(statearr_32833_33602[(2)] = inst_32823);

(statearr_32833_33602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (1))){
var inst_32786 = (new Array(n));
var inst_32787 = inst_32786;
var inst_32788 = (0);
var state_32830__$1 = (function (){var statearr_32834 = state_32830;
(statearr_32834[(7)] = inst_32787);

(statearr_32834[(8)] = inst_32788);

return statearr_32834;
})();
var statearr_32835_33603 = state_32830__$1;
(statearr_32835_33603[(2)] = null);

(statearr_32835_33603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (4))){
var inst_32791 = (state_32830[(9)]);
var inst_32791__$1 = (state_32830[(2)]);
var inst_32792 = (inst_32791__$1 == null);
var inst_32793 = cljs.core.not(inst_32792);
var state_32830__$1 = (function (){var statearr_32836 = state_32830;
(statearr_32836[(9)] = inst_32791__$1);

return statearr_32836;
})();
if(inst_32793){
var statearr_32837_33604 = state_32830__$1;
(statearr_32837_33604[(1)] = (5));

} else {
var statearr_32838_33605 = state_32830__$1;
(statearr_32838_33605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (15))){
var inst_32817 = (state_32830[(2)]);
var state_32830__$1 = state_32830;
var statearr_32839_33606 = state_32830__$1;
(statearr_32839_33606[(2)] = inst_32817);

(statearr_32839_33606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (13))){
var state_32830__$1 = state_32830;
var statearr_32840_33607 = state_32830__$1;
(statearr_32840_33607[(2)] = null);

(statearr_32840_33607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (6))){
var inst_32788 = (state_32830[(8)]);
var inst_32809 = (inst_32788 > (0));
var state_32830__$1 = state_32830;
if(cljs.core.truth_(inst_32809)){
var statearr_32841_33608 = state_32830__$1;
(statearr_32841_33608[(1)] = (12));

} else {
var statearr_32842_33609 = state_32830__$1;
(statearr_32842_33609[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (3))){
var inst_32828 = (state_32830[(2)]);
var state_32830__$1 = state_32830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32830__$1,inst_32828);
} else {
if((state_val_32832 === (12))){
var inst_32787 = (state_32830[(7)]);
var inst_32815 = cljs.core.vec(inst_32787);
var state_32830__$1 = state_32830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32830__$1,(15),out,inst_32815);
} else {
if((state_val_32832 === (2))){
var state_32830__$1 = state_32830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32830__$1,(4),ch);
} else {
if((state_val_32832 === (11))){
var inst_32803 = (state_32830[(2)]);
var inst_32804 = (new Array(n));
var inst_32787 = inst_32804;
var inst_32788 = (0);
var state_32830__$1 = (function (){var statearr_32843 = state_32830;
(statearr_32843[(7)] = inst_32787);

(statearr_32843[(10)] = inst_32803);

(statearr_32843[(8)] = inst_32788);

return statearr_32843;
})();
var statearr_32844_33610 = state_32830__$1;
(statearr_32844_33610[(2)] = null);

(statearr_32844_33610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (9))){
var inst_32787 = (state_32830[(7)]);
var inst_32801 = cljs.core.vec(inst_32787);
var state_32830__$1 = state_32830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32830__$1,(11),out,inst_32801);
} else {
if((state_val_32832 === (5))){
var inst_32787 = (state_32830[(7)]);
var inst_32791 = (state_32830[(9)]);
var inst_32788 = (state_32830[(8)]);
var inst_32796 = (state_32830[(11)]);
var inst_32795 = (inst_32787[inst_32788] = inst_32791);
var inst_32796__$1 = (inst_32788 + (1));
var inst_32797 = (inst_32796__$1 < n);
var state_32830__$1 = (function (){var statearr_32849 = state_32830;
(statearr_32849[(12)] = inst_32795);

(statearr_32849[(11)] = inst_32796__$1);

return statearr_32849;
})();
if(cljs.core.truth_(inst_32797)){
var statearr_32850_33611 = state_32830__$1;
(statearr_32850_33611[(1)] = (8));

} else {
var statearr_32851_33612 = state_32830__$1;
(statearr_32851_33612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (14))){
var inst_32820 = (state_32830[(2)]);
var inst_32821 = cljs.core.async.close_BANG_(out);
var state_32830__$1 = (function (){var statearr_32853 = state_32830;
(statearr_32853[(13)] = inst_32820);

return statearr_32853;
})();
var statearr_32854_33613 = state_32830__$1;
(statearr_32854_33613[(2)] = inst_32821);

(statearr_32854_33613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (10))){
var inst_32807 = (state_32830[(2)]);
var state_32830__$1 = state_32830;
var statearr_32858_33614 = state_32830__$1;
(statearr_32858_33614[(2)] = inst_32807);

(statearr_32858_33614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (8))){
var inst_32787 = (state_32830[(7)]);
var inst_32796 = (state_32830[(11)]);
var tmp32852 = inst_32787;
var inst_32787__$1 = tmp32852;
var inst_32788 = inst_32796;
var state_32830__$1 = (function (){var statearr_32860 = state_32830;
(statearr_32860[(7)] = inst_32787__$1);

(statearr_32860[(8)] = inst_32788);

return statearr_32860;
})();
var statearr_32861_33615 = state_32830__$1;
(statearr_32861_33615[(2)] = null);

(statearr_32861_33615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29630__auto__ = null;
var cljs$core$async$state_machine__29630__auto____0 = (function (){
var statearr_32866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32866[(0)] = cljs$core$async$state_machine__29630__auto__);

(statearr_32866[(1)] = (1));

return statearr_32866;
});
var cljs$core$async$state_machine__29630__auto____1 = (function (state_32830){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_32830);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e32867){var ex__29633__auto__ = e32867;
var statearr_32868_33616 = state_32830;
(statearr_32868_33616[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_32830[(4)]))){
var statearr_32869_33617 = state_32830;
(statearr_32869_33617[(1)] = cljs.core.first((state_32830[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33618 = state_32830;
state_32830 = G__33618;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$state_machine__29630__auto__ = function(state_32830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29630__auto____1.call(this,state_32830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29630__auto____0;
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29630__auto____1;
return cljs$core$async$state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_32871 = f__30159__auto__();
(statearr_32871[(6)] = c__30151__auto___33601);

return statearr_32871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32881 = arguments.length;
switch (G__32881) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30151__auto___33620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30159__auto__ = (function (){var switch__29629__auto__ = (function (state_32937){
var state_val_32938 = (state_32937[(1)]);
if((state_val_32938 === (7))){
var inst_32929 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
var statearr_32941_33621 = state_32937__$1;
(statearr_32941_33621[(2)] = inst_32929);

(statearr_32941_33621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (1))){
var inst_32886 = [];
var inst_32887 = inst_32886;
var inst_32888 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32937__$1 = (function (){var statearr_32942 = state_32937;
(statearr_32942[(7)] = inst_32888);

(statearr_32942[(8)] = inst_32887);

return statearr_32942;
})();
var statearr_32943_33622 = state_32937__$1;
(statearr_32943_33622[(2)] = null);

(statearr_32943_33622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (4))){
var inst_32891 = (state_32937[(9)]);
var inst_32891__$1 = (state_32937[(2)]);
var inst_32892 = (inst_32891__$1 == null);
var inst_32893 = cljs.core.not(inst_32892);
var state_32937__$1 = (function (){var statearr_32944 = state_32937;
(statearr_32944[(9)] = inst_32891__$1);

return statearr_32944;
})();
if(inst_32893){
var statearr_32945_33623 = state_32937__$1;
(statearr_32945_33623[(1)] = (5));

} else {
var statearr_32946_33624 = state_32937__$1;
(statearr_32946_33624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (15))){
var inst_32887 = (state_32937[(8)]);
var inst_32921 = cljs.core.vec(inst_32887);
var state_32937__$1 = state_32937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32937__$1,(18),out,inst_32921);
} else {
if((state_val_32938 === (13))){
var inst_32913 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
var statearr_32951_33625 = state_32937__$1;
(statearr_32951_33625[(2)] = inst_32913);

(statearr_32951_33625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (6))){
var inst_32887 = (state_32937[(8)]);
var inst_32915 = inst_32887.length;
var inst_32917 = (inst_32915 > (0));
var state_32937__$1 = state_32937;
if(cljs.core.truth_(inst_32917)){
var statearr_32956_33626 = state_32937__$1;
(statearr_32956_33626[(1)] = (15));

} else {
var statearr_32957_33627 = state_32937__$1;
(statearr_32957_33627[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (17))){
var inst_32926 = (state_32937[(2)]);
var inst_32927 = cljs.core.async.close_BANG_(out);
var state_32937__$1 = (function (){var statearr_32958 = state_32937;
(statearr_32958[(10)] = inst_32926);

return statearr_32958;
})();
var statearr_32959_33628 = state_32937__$1;
(statearr_32959_33628[(2)] = inst_32927);

(statearr_32959_33628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (3))){
var inst_32931 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32937__$1,inst_32931);
} else {
if((state_val_32938 === (12))){
var inst_32887 = (state_32937[(8)]);
var inst_32906 = cljs.core.vec(inst_32887);
var state_32937__$1 = state_32937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32937__$1,(14),out,inst_32906);
} else {
if((state_val_32938 === (2))){
var state_32937__$1 = state_32937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32937__$1,(4),ch);
} else {
if((state_val_32938 === (11))){
var inst_32887 = (state_32937[(8)]);
var inst_32891 = (state_32937[(9)]);
var inst_32895 = (state_32937[(11)]);
var inst_32903 = inst_32887.push(inst_32891);
var tmp32963 = inst_32887;
var inst_32887__$1 = tmp32963;
var inst_32888 = inst_32895;
var state_32937__$1 = (function (){var statearr_32965 = state_32937;
(statearr_32965[(7)] = inst_32888);

(statearr_32965[(8)] = inst_32887__$1);

(statearr_32965[(12)] = inst_32903);

return statearr_32965;
})();
var statearr_32969_33629 = state_32937__$1;
(statearr_32969_33629[(2)] = null);

(statearr_32969_33629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (9))){
var inst_32888 = (state_32937[(7)]);
var inst_32899 = cljs.core.keyword_identical_QMARK_(inst_32888,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32937__$1 = state_32937;
var statearr_32971_33630 = state_32937__$1;
(statearr_32971_33630[(2)] = inst_32899);

(statearr_32971_33630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (5))){
var inst_32888 = (state_32937[(7)]);
var inst_32891 = (state_32937[(9)]);
var inst_32895 = (state_32937[(11)]);
var inst_32896 = (state_32937[(13)]);
var inst_32895__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32891) : f.call(null,inst_32891));
var inst_32896__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32895__$1,inst_32888);
var state_32937__$1 = (function (){var statearr_32972 = state_32937;
(statearr_32972[(11)] = inst_32895__$1);

(statearr_32972[(13)] = inst_32896__$1);

return statearr_32972;
})();
if(inst_32896__$1){
var statearr_32973_33631 = state_32937__$1;
(statearr_32973_33631[(1)] = (8));

} else {
var statearr_32977_33632 = state_32937__$1;
(statearr_32977_33632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (14))){
var inst_32891 = (state_32937[(9)]);
var inst_32895 = (state_32937[(11)]);
var inst_32908 = (state_32937[(2)]);
var inst_32909 = [];
var inst_32910 = inst_32909.push(inst_32891);
var inst_32887 = inst_32909;
var inst_32888 = inst_32895;
var state_32937__$1 = (function (){var statearr_32979 = state_32937;
(statearr_32979[(7)] = inst_32888);

(statearr_32979[(14)] = inst_32908);

(statearr_32979[(15)] = inst_32910);

(statearr_32979[(8)] = inst_32887);

return statearr_32979;
})();
var statearr_32980_33633 = state_32937__$1;
(statearr_32980_33633[(2)] = null);

(statearr_32980_33633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (16))){
var state_32937__$1 = state_32937;
var statearr_32981_33634 = state_32937__$1;
(statearr_32981_33634[(2)] = null);

(statearr_32981_33634[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (10))){
var inst_32901 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
if(cljs.core.truth_(inst_32901)){
var statearr_32983_33635 = state_32937__$1;
(statearr_32983_33635[(1)] = (11));

} else {
var statearr_32984_33636 = state_32937__$1;
(statearr_32984_33636[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (18))){
var inst_32923 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
var statearr_32985_33637 = state_32937__$1;
(statearr_32985_33637[(2)] = inst_32923);

(statearr_32985_33637[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (8))){
var inst_32896 = (state_32937[(13)]);
var state_32937__$1 = state_32937;
var statearr_32986_33638 = state_32937__$1;
(statearr_32986_33638[(2)] = inst_32896);

(statearr_32986_33638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29630__auto__ = null;
var cljs$core$async$state_machine__29630__auto____0 = (function (){
var statearr_32991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32991[(0)] = cljs$core$async$state_machine__29630__auto__);

(statearr_32991[(1)] = (1));

return statearr_32991;
});
var cljs$core$async$state_machine__29630__auto____1 = (function (state_32937){
while(true){
var ret_value__29631__auto__ = (function (){try{while(true){
var result__29632__auto__ = switch__29629__auto__(state_32937);
if(cljs.core.keyword_identical_QMARK_(result__29632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29632__auto__;
}
break;
}
}catch (e32995){var ex__29633__auto__ = e32995;
var statearr_32996_33639 = state_32937;
(statearr_32996_33639[(2)] = ex__29633__auto__);


if(cljs.core.seq((state_32937[(4)]))){
var statearr_32998_33640 = state_32937;
(statearr_32998_33640[(1)] = cljs.core.first((state_32937[(4)])));

} else {
throw ex__29633__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33641 = state_32937;
state_32937 = G__33641;
continue;
} else {
return ret_value__29631__auto__;
}
break;
}
});
cljs$core$async$state_machine__29630__auto__ = function(state_32937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29630__auto____1.call(this,state_32937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29630__auto____0;
cljs$core$async$state_machine__29630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29630__auto____1;
return cljs$core$async$state_machine__29630__auto__;
})()
})();
var state__30160__auto__ = (function (){var statearr_32999 = f__30159__auto__();
(statearr_32999[(6)] = c__30151__auto___33620);

return statearr_32999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30160__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
