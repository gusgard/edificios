(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(147),o=a(152),c=a(150);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},146:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(146);var d=r.a.createContext({}),u=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Edificio en venta en Montevideo-Uruguay"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),s=a(2),d=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},150:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(154),d=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Edificio en venta en Montevideo-Uruguay",description:"Edificio en venta en Montevideo. A dos cuadras de Shopping Tres Cruces, 2200 metros construidos.",author:"@gatsbyjs"}}}}},152:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(147),d=function(e){e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}}))};d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var u=d,l=(a(153),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))},data:n})});l.propTypes={children:c.a.node.isRequired};t.a=l}}]);
//# sourceMappingURL=component---src-pages-page-2-js-c414a74e7b7a669518e4.js.map