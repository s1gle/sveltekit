import{s as c,g as l}from"./B-L73mro.js";import{n as f,m as o,g as b,t as d,a as p,d as g}from"./B8wOluw4.js";let s=!1,i=Symbol();function m(e,u,r){const n=r[u]??(r[u]={store:null,source:o(void 0),unsubscribe:f});if(n.store!==e&&!(i in r))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=f;else{var t=!0;n.unsubscribe=c(e,a=>{t?n.source.v=a:p(n.source,a)}),t=!1}return e&&i in r?l(e):b(n.source)}function y(){const e={};function u(){d(()=>{for(var r in e)e[r].unsubscribe();g(e,i,{enumerable:!1,value:!0})})}return[e,u]}function N(e){var u=s;try{return s=!1,[e(),s]}finally{s=u}}export{y as a,N as c,m as s};
