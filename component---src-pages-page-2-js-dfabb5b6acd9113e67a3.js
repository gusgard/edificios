(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(160),o=a(165),c=a(163);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},159:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},160:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(0),r=a.n(n),i=a(5),o=a.n(i),c=a(39),s=a.n(c);a.d(t,"a",function(){return s.a});a(159);var u=r.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(d,{data:t,query:a,render:n||i,staticQueryData:e})})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Edificio en venta en Montevideo-Uruguay"}}}}},162:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),i=a(5),o=a.n(i),c=a(64),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},163:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),o=a(5),c=a.n(o),s=a(167),u=a.n(s);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,s=n.data.site,d=t||s.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Edificio en venta en Montevideo-Uruguay",description:"Edificio en venta en Montevideo. A dos cuadras de Shopping Tres Cruces, 2200 metros construidos.",author:"@gatsbyjs"}}}}},165:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),o=a(5),c=a.n(o),s=a(160),u=function(e){e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}}))};u.propTypes={siteTitle:c.a.string},u.defaultProps={siteTitle:""};var d=u,l=(a(166),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))},data:n})});l.propTypes={children:c.a.node.isRequired};t.a=l}}]);
//# sourceMappingURL=component---src-pages-page-2-js-dfabb5b6acd9113e67a3.js.map