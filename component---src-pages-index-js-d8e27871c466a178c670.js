(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return s});var n=a(0),r=a.n(n),i=a(56),o=a(154),l=a(155),s="2861884065";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"home"}),r.a.createElement("div",{className:"main"},r.a.createElement("h2",null,"hi."),r.a.createElement("p",null,"personal website. it's a work in progress. but whose isn't."),r.a.createElement(i.Link,{to:"/contact/"},"contact me")),r.a.createElement("div",null,r.a.createElement("h2",null,"posts."),t.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return r.a.createElement(i.Link,{to:t.frontmatter.path,key:t.id,className:"postLink"},r.a.createElement("div",{className:"postContainer"},r.a.createElement("div",{className:"postHeader"},r.a.createElement("h3",{className:"postTitle"},t.frontmatter.title),r.a.createElement("p",{className:"postDate"},t.frontmatter.date)),r.a.createElement("p",{className:"postExcerpt"},t.excerpt)))})))}},153:function(e){e.exports={data:{site:{siteMetadata:{title:"flibbon"}}}}},154:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(1),l=a.n(o),s=a(56),c=(a(158),function(e){var t=e.siteTitle;return i.a.createElement("header",null,i.a.createElement("h1",null,i.a.createElement(s.Link,{to:"/",className:"siteTitle"},t)))});c.propTypes={siteTitle:l.a.string},c.defaultProps={siteTitle:""};var m=c,p=(a(159),a(160),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(r.Fragment,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"content"},i.a.createElement("main",null,t)))},data:n})});p.propTypes={children:l.a.node.isRequired};t.a=p},155:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(1),l=a.n(o),s=a(157),c=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,s=n.data.site,m=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m},156:function(e){e.exports={data:{site:{siteMetadata:{title:"flibbon",description:"welcome to my house",author:"@flibbon"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-d8e27871c466a178c670.js.map