import{a8 as l,a9 as d,aa as p,ab as g,l as c,m as u,y as h,R as m,w as y,ac as E,a7 as T,n as _,s as M,P as x,G as N}from"./utils.BCvjygOv.js";function P(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function s(e,r){var t=m;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function L(e,r){var t=(r&p)!==0,n=(r&g)!==0,a,o=!e.startsWith("<!>");return()=>{if(c)return s(u,null),u;a===void 0&&(a=P(o?e:"<!>"+e),t||(a=l(a)));var i=n?document.importNode(a,!0):a.cloneNode(!0);if(t){var v=l(i),b=i.lastChild;s(v,b)}else s(i,i);return i}}function R(e=""){if(!c){var r=d(e+"");return s(r,r),r}var t=u;return t.nodeType!==3&&(t.before(t=d()),h(t)),s(t,t),t}function w(){if(c)return s(u,null),u;var e=document.createDocumentFragment(),r=document.createComment(""),t=d();return e.append(r,t),s(r,t),e}function C(e,r){if(c){m.nodes_end=u,y();return}e!==null&&e.before(r)}let f=!1;function D(e,r,t){const n=t[r]??(t[r]={store:null,source:T(void 0),unsubscribe:_});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=_;else{var a=!0;n.unsubscribe=M(e,o=>{a?n.source.v=o:x(n.source,o)}),a=!1}return N(n.source)}function F(){const e={};return E(()=>{for(var r in e)e[r].unsubscribe()}),e}function G(e,r,t){return e.set(t),r}function O(e){var r=f;try{return f=!1,[e(),f]}finally{f=r}}export{C as a,D as b,O as c,w as d,R as e,s as f,G as g,P as h,F as s,L as t};