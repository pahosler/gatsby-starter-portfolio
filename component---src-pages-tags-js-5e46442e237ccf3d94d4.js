(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/8Fb":function(t,e,n){var r=n("XKFU"),a=n("UExd")(!0);r(r.S,"Object",{entries:function(t){return a(t)}})},UExd:function(t,e,n){var r=n("nh4g"),a=n("DVgA"),u=n("aCFj"),o=n("UqcF").f;t.exports=function(t){return function(e){for(var n,c=u(e),l=a(c),i=l.length,f=0,s=[];i>f;)n=l[f++],r&&!o.call(c,n)||s.push(t?[n,c[n]]:c[n]);return s}}},enK5:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return s}));n("hhXQ"),n("rGqo"),n("yt8O"),n("Btvt"),n("/8Fb"),n("Oyvg"),n("KKXr");var r=n("5D9J"),a=n("Wbzz"),u=n("q1tI"),o=n.n(u),c=n("Bl7J"),l=n("vrFN");function i(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n  margin: 1rem;\n  text-decoration: none;\n  border-bottom: 1px solid var(--link-color);\n"]);return i=function(){return t},t}var f=Object(r.a)(a.Link)(i());e.default=function(t){var e=t.data,n=e.allMarkdownRemark.group,r=e.site.siteMetadata.title,a=o.a.useState("abcdefghijklmnopqrstuvwxyz".split(""))[0],u=o.a.useState({}),i=u[0],s=u[1];o.a.useEffect((function(){var t={};a.forEach((function(e){var r=new RegExp("^"+e,"i"),a=n.filter((function(t){return r.test(t.fieldValue)}));a.length>0&&(t[e]={},t[e].tags=a.map((function(t){return t.fieldValue})),t[e].count=a.map((function(t){return t.totalCount})))})),s(t)}),[]);var v=Object.entries(i).map((function(t){var e=t[0],n=t[1];return console.log(e,n),o.a.createElement("div",{key:e},o.a.createElement("h2",null,e.toUpperCase()),n.tags.map((function(t,e){return o.a.createElement(f,{to:"/tags/"+t+"/"},t," (",n.count[e],")")})))}));return o.a.createElement(c.a,null,o.a.createElement(l.a,{title:r}),o.a.createElement("div",null,o.a.createElement("h1",null,"All Tags"),Object.values(i).length&&v))};var s="3450235017"},hhXQ:function(t,e,n){var r=n("XKFU"),a=n("UExd")(!1);r(r.S,"Object",{values:function(t){return a(t)}})}}]);
//# sourceMappingURL=component---src-pages-tags-js-5e46442e237ccf3d94d4.js.map