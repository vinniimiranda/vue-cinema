(function(e){function t(t){for(var a,i,c=t[0],o=t[1],l=t[2],f=0,u=[];f<c.length;f++)i=c[f],n[i]&&u.push(n[i][0]),n[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},n={app:0},r=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=o;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"30d6":function(e,t,s){},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){var t=a[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("img",{staticClass:"logo ",attrs:{src:s("cf05"),unselectable:"on",onselectstart:"return false;",ondrag:"return false",draggable:"false"}}),a("router-view")],1)},r=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("nav",{staticClass:"black"},[s("div",{staticClass:"nav-wrapper"},[s("a",{staticClass:"brand-logo",attrs:{href:"#!"}}),s("a",{staticClass:"sidenav-trigger",attrs:{href:"#","data-target":"mobile-demo"}},[s("i",{staticClass:"material-icons"},[e._v("menu")])]),s("ul",{staticClass:"right hide-on-med-and-down"},[s("li",[s("div",{staticClass:"input-field"},[s("input",{attrs:{id:"search",type:"search"}}),s("i",{staticClass:"material-icons white-text"},[e._v("search")]),s("i",{staticClass:"material-icons"},[e._v("close")])])])])])]),s("ul",{staticClass:"sidenav",attrs:{id:"mobile-demo"}})])}],o={name:"Navbar"},l=o,d=(s("5dfc"),s("2877")),f=Object(d["a"])(l,i,c,!1,null,null,null);f.options.__file="Navbar.vue";var u=f.exports,b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container",attrs:{id:""}},[s("h2",{staticClass:"center"},[e._v("CARREGOU PRINCIPAL")])])}],v=s("bc3a"),p=s.n(v),m=s("c1df"),h=(s("d2d4"),s("6e55"),{name:"Lista"}),g=h,_=Object(d["a"])(g,b,j,!1,null,null,null);_.options.__file="Lista.vue";var y=_.exports,w={name:"app",components:{Navbar:u,Lista:y}},k=w,C=(s("5c0b"),Object(d["a"])(k,n,r,!1,null,null,null));C.options.__file="App.vue";var z=C.exports,x=s("8c4f"),O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container",attrs:{id:""}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col s12 l5 m5"},[s("router-link",{attrs:{to:{name:"Lista"}}},[s("i",{staticClass:"material-icons large white-text back",staticStyle:{cursor:"pointer"}},[e._v("undo")])])],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col s12 m8 l8 movie offset-l2 offset-m2 card",staticStyle:{padding:"10px"}},[s("iframe",{staticClass:"video",attrs:{src:"https://www.youtube.com/embed/"+e.youtubeVideoID,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",autoplay:""}}),s("p",[e._v("Título: "+e._s(e.movie.title))]),s("p",[e._v("Orçamento: "+e._s(e.formataValor(e.movie.budget)))]),s("p",[e._v("Rendimento: "+e._s(e.formataValor(e.movie.revenue)))]),s("p",[e._v("Data de Lançamento: "+e._s(e.converteData(e.movie.release_date)))]),""!=e.torrents?s("div",[s("div",{staticClass:"divider"}),s("div",{staticClass:"row"},[s("h5",[e._v("Downloads")]),s("div",{staticClass:"col s3 offset-s3"},[s("h5",[e._v("1080p")]),s("h6",[e._v(e._s(e.torrents.en["1080p"].filesize))]),s("a",{attrs:{href:e.torrents.en["1080p"].url,target:"blank"}},[s("i",{staticClass:"material-icons download"},[e._v("file_download")])])]),s("div",{staticClass:"col s3"},[s("h5",[e._v("720p")]),s("h6",[e._v(e._s(e.torrents.en["720p"].filesize))]),s("a",{staticStyle:{cursor:"pointer"},attrs:{href:e.torrents.en["720p"].url,target:"blank"}},[s("i",{staticClass:"material-icons download"},[e._v("file_download")])])])]),s("div",{staticClass:"row"},[s("a",{staticClass:"btn white-text ",attrs:{target:"blank",href:"http://www.ysubs.com/movie-imdb/"+e.movie.imdb_id}},[e._v("Legenda")])])]):e._e()])])])},D=[],S=(s("386d"),s("28a5"),{name:"Detalhes",data:function(){return{pesquisa:"",nota:5,lang:"pt-BR",apiKey:"7b8e1e239f830512fd3d0ada5105a8e7",region:"US",torrents:"",idMovie:this.$route.params.id,movie:{},youtubeVideoID:""}},created:function(){this.detalhes()},methods:{converteData:function(e){return m(e).format("ll")},formataValor:function(e){var t=parseInt(e).toFixed(2).split(".");return t[0]="U$ "+t[0].split(/(?=(?:...)*$)/).join(".")},pesquisaVideo:function(){var e=this,t=new Promise(function(e,t){gapi.client.setApiKey("AIzaSyCBvW6bnbdyR07s3JmjIA32UeGMwbRjwgI"),gapi.client.load("youtube","v3",function(){e("Api setada")})});t.then(function(t){gapi.client.youtube.search.list({part:"snippet",type:"video",regionCode:"US",q:e.movie.title+" Trailer Legendado",maxResults:1,order:"relevance"}).execute(function(t){e.youtubeVideoID=t.items[0].id.videoId,e.buscaTorrent()})})},buscaTorrent:function(){var e=this;p.a.get("https://tv-v2.api-fetch.website/movie/".concat(this.movie.imdb_id)).then(function(t){return e.torrents=t.data.torrents}).catch(function(e){return console.error(e)})},detalhes:function(){var e=this;p.a.get("https://api.themoviedb.org/3/movie/".concat(this.idMovie,"?api_key=").concat(this.apiKey,"&language=").concat(this.lang)).then(function(t){e.movie=t.data,e.pesquisaVideo()})}}}),I=S,L=(s("b5b8"),Object(d["a"])(I,O,D,!1,null,"797cd29c",null));L.options.__file="Detalhes.vue";var $=L.exports;a["a"].use(x["a"]);var E=new x["a"]({routes:[{path:"/",name:"Lista",component:y},{path:"/detalhes/:id",name:"Detalhes",component:$}],mode:"history"});a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(z)},router:E}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var a=s("5e27"),n=s.n(a);n.a},"5dfc":function(e,t,s){"use strict";var a=s("30d6"),n=s.n(a);n.a},"5e27":function(e,t,s){},b5b8:function(e,t,s){"use strict";var a=s("dcce"),n=s.n(a);n.a},cf05:function(e,t,s){e.exports=s.p+"img/logo.c5af251c.png"},dcce:function(e,t,s){}});
//# sourceMappingURL=app.3c633a26.js.map