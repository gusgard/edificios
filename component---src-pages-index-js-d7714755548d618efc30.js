(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(146),c=(a(167),a(168)),o=a(152),s=a(174),l=a(175),d=a.n(l),u=function(){return r.a.createElement(i.b,{query:"2011440971",render:function(t){return r.a.createElement(d.a,{fluid:t.placeholderImage.childImageSharp.fluid})},data:s})},m=a(150);e.default=function(){return r.a.createElement(o.a,null,r.a.createElement(m.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("h1",null,"Hi people"),r.a.createElement("p",null,"Welcome to your new Gatsby site."),r.a.createElement("p",null,"Now go build something great."),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(u,null)),r.a.createElement(c.Carousel,null,r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(u,null)),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(u,null)),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(u,null))),r.a.createElement(i.a,{to:"/page-2/"},"Go to page 2"))}},146:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(33),s=a.n(o);a.d(e,"a",function(){return s.a});a(147);var l=r.a.createContext({}),d=function(t){return r.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(t,e,a){var n;t.exports=(n=a(149))&&n.default||n},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},149:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(55),s=a(2),l=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=l},150:function(t,e,a){"use strict";var n=a(151),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(154),l=a.n(s);function d(t){var e=t.description,a=t.lang,r=t.meta,c=t.keywords,o=t.title,s=n.data.site,d=e||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=d},151:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},152:function(t,e,a){"use strict";var n=a(148),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(146),l=function(t){var e=t.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""};var d=l,u=(a(153),function(t){var e=t.children;return i.a.createElement(s.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});u.propTypes={children:o.a.node.isRequired};e.a=u},174:function(t){t.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fbe2f/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e1fed/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/08283/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fbe2f/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59257/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/26d9e/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/a3fa0/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-d7714755548d618efc30.js.map