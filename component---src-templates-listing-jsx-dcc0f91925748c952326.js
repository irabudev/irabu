(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+DWa":function(e,t,a){"use strict";a.r(t);var n=a("KQm4"),r=a("q1tI"),o=a.n(r),i=a("qhky"),c=a("Wbzz"),l=a("hpys"),s=a("1wty"),m=a("okzv"),u=a("IpnI"),d=a.n(u);a("zfG9");t.default=function(e){var t,a,r,u,p,f,E=e.pageContext,g=e.data.allMarkdownRemark.edges;return o.a.createElement(l.a,null,o.a.createElement("div",{className:"listing-container"},o.a.createElement("div",{className:"posts-container"},o.a.createElement(i.a,{title:d.a.siteTitle}),o.a.createElement(m.a,null),o.a.createElement(s.a,{postEdges:g})),(t=E.currentPageNum,a=E.pageCount,r=t-1==1?"/":"/"+(t-1)+"/",u="/"+(t+1)+"/",p=1===t,f=t===a,o.a.createElement("div",{className:"paging-container"},!p&&o.a.createElement(c.Link,{to:r},"Previous"),Object(n.a)(Array(a)).map((function(e,t){var a=t+1;return o.a.createElement(c.Link,{key:"listing-page-"+a,to:1===a?"/":"/"+a+"/"},a)})),!f&&o.a.createElement(c.Link,{to:u},"Next")))))}},"1wty":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz");t.a=function(e){var t=e.postEdges,a=[];return t.forEach((function(e){a.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})})),r.a.createElement("div",null,a.map((function(e){return r.a.createElement(o.Link,{to:e.path,key:e.title},r.a.createElement("h1",null,e.title))})))}},zfG9:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-listing-jsx-dcc0f91925748c952326.js.map