(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(178),a(179)),i=a(165),c=a(163),s=a(185),d=a.n(s),u=a(186),l=a.n(u),p=a(187),m=a.n(p),f=a(188),g=a.n(f),b=a(189),y=a.n(b),h=a(190),E=a.n(h),v=a(191),w=a.n(v),x=a(192),j=a.n(x),T=a(193),q=a.n(T),M=a(194),k=a.n(M),R=[d.a,l.a,m.a,g.a,y.a,E.a,k.a],P=["edificio","edificios","uruguay","montevideo"],C=function(e){var t=e.list,a=(e.description,e.children);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Carousel,{infiniteLoop:!0,autoPlay:!0,swipeable:!0,showThumbs:!1,showStatus:!1},t.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("img",{src:e,alt:"example"}))})),r.a.createElement("div",{style:{paddingTop:"0.6rem"}},a))};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Home",keywords:P}),r.a.createElement("h1",null,"Edificio en venta en Montevideo, Uruguay"),r.a.createElement("h2",null,"A dos cuadras de Shopping Tres Cruces, 2200 metros construidos con 4 pisos, precio U$S 2.600.000"),r.a.createElement("h3",null,"Telefono: ",r.a.createElement("a",{href:"tel:+59894661256"},"(+598) 094-661-256")),r.a.createElement(C,{list:R},r.a.createElement("p",null,"\nPlanta baja: entrada para camiones, altura 5 metros, 440 metros cuadrados de planta, con 3 baños y vestuario,\nentrada de bomberos, entrada de UTE 200 KW, acensor monta carga\n"),r.a.createElement("p",null,"\nPiso 1, 2 y 3, con 440 metros cuadrados, techo de hormigon, altura de techo 4 metros, tiene 4 baños por piso\n")),r.a.createElement(C,{list:[w.a,j.a,q.a]},r.a.createElement("p",null,"Piso 4, con 440 metros cuadrados, techo de chapa galvanizada, altura de techo 3.5 metros y tiene 3 baños con vestuario")))}},159:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},160:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(0),r=a.n(n),o=a(5),i=a.n(o),c=a(39),s=a.n(c);a.d(t,"a",function(){return s.a});a(159);var d=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(d.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||o,staticQueryData:e})})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Edificio en venta en Montevideo-Uruguay"}}}}},162:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),o=a(5),i=a.n(o),c=a(64),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},163:function(e,t,a){"use strict";var n=a(164),r=a(0),o=a.n(r),i=a(5),c=a.n(i),s=a(167),d=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,s=n.data.site,u=t||s.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Edificio en venta en Montevideo-Uruguay",description:"Edificio en venta en Montevideo. A dos cuadras de Shopping Tres Cruces, 2200 metros construidos.",author:"@gatsbyjs"}}}}},165:function(e,t,a){"use strict";var n=a(161),r=a(0),o=a.n(r),i=a(5),c=a.n(i),s=a(160),d=function(e){e.siteTitle;return o.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}}))};d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var u=d,l=(a(166),function(e){var t=e.children;return o.a.createElement(s.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,t)))},data:n})});l.propTypes={children:c.a.node.isRequired};t.a=l},185:function(e,t,a){e.exports=a.p+"static/photo1-3066bb27bd0d047f8b25021d5a177f21.jpg"},186:function(e,t,a){e.exports=a.p+"static/photo2-53dcdcb345dd70eeb68e40a198761a5a.jpg"},187:function(e,t,a){e.exports=a.p+"static/photo3-448d91007f92b037e6167d9e069feda6.jpg"},188:function(e,t,a){e.exports=a.p+"static/photo5-e070bfdb3b46e098c72821ef9d39e40a.jpg"},189:function(e,t,a){e.exports=a.p+"static/photo6-c494e8c08c4d9a9334ceaac8957b3e60.jpg"},190:function(e,t,a){e.exports=a.p+"static/photo7-62d3aebcabaee772b7a2ec15bac91bd5.jpg"},191:function(e,t,a){e.exports=a.p+"static/alta_1-dda5c0a60ef8b3019e7b60e553dfdfc0.jpg"},192:function(e,t,a){e.exports=a.p+"static/alta_2-d8e3c4fdea3f0a2745dc0b069f279138.jpg"},193:function(e,t,a){e.exports=a.p+"static/alta_3-53724e4df56220b5122f2124555d4550.jpg"},194:function(e,t,a){e.exports=a.p+"static/escritorio_1-4fb9ed732eab5a622a24a1678f5d511b.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-8d1da0aae18fc8082cac.js.map