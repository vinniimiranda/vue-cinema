(function(e){function t(t){for(var s,r,c=t[0],o=t[1],l=t[2],u=0,f=[];u<c.length;u++)r=c[u],i[r]&&f.push(i[r][0]),i[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);d&&d(t);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},i={app:0},n=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"30d6":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=n(e);return a(t)}function n(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(s)},i.resolve=n,e.exports=i,i.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("img",{staticClass:"logo ",attrs:{src:a("cf05"),unselectable:"on",onselectstart:"return false;",ondrag:"return false",draggable:"false"}}),s("router-view")],1)},n=[],r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{staticClass:"black"},[a("div",{staticClass:"nav-wrapper"},[a("a",{staticClass:"brand-logo",attrs:{href:"#!"}}),a("a",{staticClass:"sidenav-trigger",attrs:{href:"#","data-target":"mobile-demo"}},[a("i",{staticClass:"material-icons"},[e._v("menu")])]),a("ul",{staticClass:"right hide-on-med-and-down"},[a("li",[a("div",{staticClass:"input-field"},[a("input",{attrs:{id:"search",type:"search"}}),a("i",{staticClass:"material-icons white-text"},[e._v("search")]),a("i",{staticClass:"material-icons"},[e._v("close")])])])])])]),a("ul",{staticClass:"sidenav",attrs:{id:"mobile-demo"}})])}],o={name:"Navbar"},l=o,d=(a("5dfc"),a("2877")),u=Object(d["a"])(l,r,c,!1,null,null,null);u.options.__file="Navbar.vue";var f=u.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",attrs:{id:""}},[a("div",{staticClass:"row",staticStyle:{}},[a("div",{staticClass:"card col s12 l5 m8  input-field offset-l1 offset-m2 ",staticStyle:{"margin-right":"-8%"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.categoria,expression:"categoria"}],staticClass:"deep-purple accent-2-text",staticStyle:{"border-bottom":"none !important"},attrs:{name:"categorias",id:"categorias"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.categoria=t.target.multiple?a:a[0]},function(t){e.carregaRecentes(e.selectedPage)}]}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("Selecione a Categoria")]),a("option",{attrs:{value:"popularity.desc"}},[e._v("Populares")])])]),a("div",{staticClass:" card col s12 l5 m8 input-field offset-l1 offset-m2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.pesquisa,expression:"pesquisa"}],staticStyle:{"border-bottom":"none !important"},attrs:{id:"search",type:"search",required:""},domProps:{value:e.pesquisa},on:{keyup:e.buscaFilme,blur:e.ocultaSearch,input:function(t){t.target.composing||(e.pesquisa=t.target.value)}}}),e._m(0),a("i",{staticClass:"material-icons",staticStyle:{"vertical-align":"middle !important"},on:{click:function(t){e.pesquisa=""}}},[e._v("close")])])]),a("div",{staticClass:"row section scrollspy",attrs:{id:"inicio"}},e._l(e.searchMovies,function(t,s){return a("div",{key:s,staticClass:"card col s12 m8 l5 movie offset-l1 offset-m2",staticStyle:{padding:"10px"}},[a("div",{staticClass:"card-image waves-effect waves-block waves-light"},[t.backdrop_path?a("img",{staticClass:"activator hoverable ",staticStyle:{cursor:"pointer"},attrs:{onselectstart:"return false;",ondrag:"return false",draggable:"false",alt:t.title,src:"https://image.tmdb.org/t/p/w500"+t.backdrop_path}}):a("img",{staticClass:"activator hoverable",staticStyle:{cursor:"pointer",width:"50%",margin:"auto"},attrs:{alt:t.title,src:"https://www.freeiconspng.com/uploads/no-image-icon-4.png"}})]),a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title activator titulo",attrs:{onselectstart:"return false;",ondrag:"return false;",draggable:"false",unselectable:"on"}},[e._v(e._s(t.title))])]),a("div",{staticClass:"card-reveal"},[e._m(1,!0),a("p",[e._v(e._s(t.overview))]),a("p",[a("b",[e._v("Lançamento:")]),e._v("\n          "+e._s(e.converteData(t.release_date))+"\n        ")]),a("p",[a("b",[e._v("Nota:")]),e._v("\n          "+e._s(t.vote_average)+" \n          \n        ")]),a("p",[a("router-link",{attrs:{to:{name:"Detalhes",params:{id:t.id}}}},[a("i",{staticClass:"material-icons",staticStyle:{"vertical-align":"middle"}},[e._v("add")]),e._v(" Detalhes")])],1)]),a("br")])}),0),a("div",{staticClass:"row center"},[a("ul",{staticClass:"pagination col s12 m8 l10 offset-m2 offset-l1 card",staticStyle:{padding:"10px"}},[a("li",{class:{disabled:1==e.selectedPage}},[a("a",{attrs:{href:"#inicio"}},[a("i",{staticClass:"material-icons",on:{click:e.voltaPagina}},[e._v("chevron_left")])])]),e._l(e.pages,function(t,s){return a("li",{key:s,staticClass:"waves-effect",class:{active:1==t},attrs:{id:"pagina"+t}},[a("a",{attrs:{href:"#inicio"},on:{click:function(a){e.carregaRecentes(t)}}},[e._v(e._s(t))])])}),a("li",{staticClass:"waves-effect"},[a("a",{attrs:{href:"#inicio"}},[a("i",{staticClass:"material-icons",on:{click:e.proximaPagina}},[e._v("chevron_right")])])])],2)])])},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"label-icon",attrs:{for:"search"}},[a("i",{staticClass:"material-icons ",attrs:{id:"searchIcon"}},[e._v("search")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"card-title ",attrs:{onselectstart:"return false;",ondrag:"return false",draggable:"false",unselectable:"on"}},[a("b",[e._v("Sinopse:")]),a("i",{staticClass:"material-icons right close"},[e._v("close")]),a("br")])}],b=(a("4917"),a("bc3a")),m=a.n(b),h=a("c1df"),g=(a("d2d4"),a("6e55"),{name:"Lista",data:function(){return{pesquisa:"",lang:"pt-BR",apiKey:"7b8e1e239f830512fd3d0ada5105a8e7",region:"US",categoria:"popularity.desc",list:1,movies:[],pages:[],selectedPage:0}},created:function(){for(var e=1;this.pages.length<5;e++)this.pages.push(e);this.carregaRecentes(1)},computed:{searchMovies:function(){var e=this;return this.movies.filter(function(t){return t.title.match(e.pesquisa)})}},updated:function(){$("select").formSelect()},methods:{ocultaSearch:function(){""==this.pesquisa?$("#searchIcon").show(0):$("#searchIcon").hide(0)},converteData:function(e){return h(e).format("ll")},carregaLista:function(){var e=this;m.a.get("https://api.themoviedb.org/3/list/".concat(this.list,"?api_key=").concat(this.apiKey,"&language=").concat(this.lang,"&region=").concat(this.region)).then(function(t){e.movies=t.data.item})},buscaFilme:function(){var e=this;m.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(this.apiKey,"&language=").concat(this.lang,"&query=").concat(this.pesquisa,"&page=1&include_adult=false")).then(function(t){return e.movies=t.data.results})},selecionaPagina:function(e){this.selectedPage=e,$("li").removeClass("active"),$("#pagina"+e).addClass("active")},proximaPagina:function(){var e=this;this.selectedPage>=this.pages.length&&(this.pages.push(this.pages.length+1),setTimeout(function(){return e.selecionaPagina(e.pages.length)},10)),this.selectedPage++,this.carregaRecentes(this.selectedPage)},voltaPagina:function(){if(1==this.selectedPage)return!1;this.selectedPage--,this.carregaRecentes(this.selectedPage)},listaFilmes:function(){},carregaRecentes:function(e){var t=this;this.selecionaPagina(e),m.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat(this.apiKey,"&language=").concat(this.lang,"&region=").concat(this.region,"&sort_by=").concat(this.categoria,"&include_adult=false&include_video=false&page=").concat(e)).then(function(e){t.movies=e.data.results})}}}),j=g,_=(a("a0e6"),Object(d["a"])(j,p,v,!1,null,null,null));_.options.__file="Lista.vue";var y=_.exports,w={name:"app",components:{Navbar:f,Lista:y}},C=w,k=(a("5c0b"),Object(d["a"])(C,i,n,!1,null,null,null));k.options.__file="App.vue";var x=k.exports,S=a("8c4f"),P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",attrs:{id:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 l5 m5"},[a("router-link",{attrs:{to:{name:"Lista"}}},[a("i",{staticClass:"material-icons large white-text back",staticStyle:{cursor:"pointer"}},[e._v("undo")])])],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 l8 movie offset-l2 offset-m2 card",staticStyle:{padding:"10px"}},[a("iframe",{staticClass:"video",attrs:{src:"https://www.youtube.com/embed/"+e.youtubeVideoID,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",autoplay:""}}),a("p",[e._v("Título: "+e._s(e.movie.title))]),a("p",[e._v("Orçamento: "+e._s(e.formataValor(e.movie.budget)))]),a("p",[e._v("Rendimento: "+e._s(e.formataValor(e.movie.revenue)))]),a("p",[e._v("Data de Lançamento: "+e._s(e.converteData(e.movie.release_date)))]),""!=e.torrents?a("div",[a("div",{staticClass:"divider"}),a("div",{staticClass:"row"},[a("h5",[e._v("Downloads")]),a("div",{staticClass:"col s3 offset-s3"},[a("h5",[e._v("1080p")]),a("h6",[e._v(e._s(e.torrents.en["1080p"].filesize))]),a("a",{attrs:{href:e.torrents.en["1080p"].url,target:"blank"}},[a("i",{staticClass:"material-icons download"},[e._v("file_download")])])]),a("div",{staticClass:"col s3"},[a("h5",[e._v("720p")]),a("h6",[e._v(e._s(e.torrents.en["720p"].filesize))]),a("a",{staticStyle:{cursor:"pointer"},attrs:{href:e.torrents.en["720p"].url,target:"blank"}},[a("i",{staticClass:"material-icons download"},[e._v("file_download")])])])]),a("div",{staticClass:"row"},[a("a",{staticClass:"btn white-text ",attrs:{target:"blank",href:"http://www.ysubs.com/movie-imdb/"+e.movie.imdb_id}},[e._v("Legenda")])])]):e._e()])])])},z=[],O=(a("386d"),a("28a5"),{name:"Detalhes",data:function(){return{pesquisa:"",nota:5,lang:"pt-BR",apiKey:"7b8e1e239f830512fd3d0ada5105a8e7",region:"US",torrents:"",idMovie:this.$route.params.id,movie:{},youtubeVideoID:""}},created:function(){this.detalhes()},methods:{converteData:function(e){return h(e).format("ll")},formataValor:function(e){var t=parseInt(e).toFixed(2).split(".");return t[0]="U$ "+t[0].split(/(?=(?:...)*$)/).join(".")},pesquisaVideo:function(){var e=this,t=new Promise(function(e,t){gapi.client.setApiKey("AIzaSyCBvW6bnbdyR07s3JmjIA32UeGMwbRjwgI"),gapi.client.load("youtube","v3",function(){e("Api setada")})});t.then(function(t){gapi.client.youtube.search.list({part:"snippet",type:"video",regionCode:"US",q:e.movie.title+" Trailer Legendado",maxResults:1,order:"relevance"}).execute(function(t){e.youtubeVideoID=t.items[0].id.videoId,e.buscaTorrent()})})},buscaTorrent:function(){var e=this;m.a.get("https://tv-v2.api-fetch.website/movie/".concat(this.movie.imdb_id)).then(function(t){return e.torrents=t.data.torrents}).catch(function(e){return console.error(e)})},detalhes:function(){var e=this;m.a.get("https://api.themoviedb.org/3/movie/".concat(this.idMovie,"?api_key=").concat(this.apiKey,"&language=").concat(this.lang)).then(function(t){e.movie=t.data,e.pesquisaVideo()})}}}),q=O,D=(a("b5b8"),Object(d["a"])(q,P,z,!1,null,"797cd29c",null));D.options.__file="Detalhes.vue";var R=D.exports;s["a"].use(S["a"]);var I=new S["a"]({routes:[{path:"/",name:"Lista",component:y},{path:"/detalhes/:id",name:"Detalhes",component:R}],mode:"history"});s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(x)},router:I}).$mount("#app")},"575b":function(e,t,a){},"5c0b":function(e,t,a){"use strict";var s=a("5e27"),i=a.n(s);i.a},"5dfc":function(e,t,a){"use strict";var s=a("30d6"),i=a.n(s);i.a},"5e27":function(e,t,a){},a0e6:function(e,t,a){"use strict";var s=a("575b"),i=a.n(s);i.a},b5b8:function(e,t,a){"use strict";var s=a("dcce"),i=a.n(s);i.a},cf05:function(e,t,a){e.exports=a.p+"img/logo.c5af251c.png"},dcce:function(e,t,a){}});
//# sourceMappingURL=app.f157075f.js.map