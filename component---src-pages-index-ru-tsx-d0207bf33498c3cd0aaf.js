(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{KzLV:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a("9Dj+"),l=a("H8eV"),c=a("n2AS"),o=a("lfct");t.default=function(e){var t=e.location;return n.createElement(r.a,{location:t,defaultLang:"ru"},n.createElement(l.a,{title:o.a.title.ru,description:o.a.description.ru,location:t}),n.createElement(c.a,{location:t,defaultLang:"ru"}))}},WszV:function(e,t,a){e.exports={radioGroup:"FormFields-module--radioGroup--3idzI"}},n2AS:function(e,t,a){"use strict";a("OG14"),a("9VmF");var n=a("q1tI"),r=a("YwZP"),l=a("nt6w"),c=a("jrVH"),o=a("uaRY"),i=a("PUeq"),m=a("J9Qx"),s=a("b2pr"),u=a("BHVN"),g=a("1Ad8"),d=a("7XWO"),p=a("lfct"),f=a("HBbU"),b=a("G3ap"),E=a.n(b),y=a("9QH1"),h=a.n(y),v=a("9Ruc"),O=a.n(v),j=a("z4hI"),L=a.n(j),N=n.useState,k=n.useRef,x=n.useEffect,S={rootMargin:"0px 0px",threshold:[1]};t.a=n.memo((function(e){var t=e.location,a=e.defaultLang,b=N({}),y=b[0],v=b[1],j=N(!1),D=j[0],q=j[1],w=k(null),B=N(!1),I=B[0],P=B[1],C=N(!1),W=C[0],A=C[1],F=N(!1),G=F[0],R=F[1],V=N(!1),H=V[0],z=(V[1],N(!1)),J=z[0],T=z[1],K=N(!1),U=K[0],X=K[1],Y=Object(d.c)().state.language,Q=(Y&&Y.currentLanguage?Y:{currentLanguage:a}).currentLanguage;return x((function(){t.search.startsWith("?goToDemo")&&setTimeout((function(){w.current.scrollIntoView({behavior:"smooth"}),t.search.startsWith("?goToDemo&updated=true")&&X(!0)}),100),IntersectionObserver||(P(!0),A(!0));var e=document.querySelector("#featureLast"),a=document.querySelector("#codeComparison"),n=document.querySelector("#rendering"),r=document.querySelector("#isolate"),l=(document.querySelector("#card"),new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(t.target!==e||I||P(!0),t.target!==a||W||A(!0),t.target!==n||J||T(!0),t.target!==r||G||R(!0))}))}),S));return l.observe(e),l.observe(a),l.observe(n),l.observe(r),function(){return l.disconnect()}}),[]),n.createElement("div",{className:L.a.root},D&&n.createElement(u.a,{showBuilder:!0,toggleBuilder:q,HomeRef:w,defaultLang:a}),n.createElement(c.a,{isCardPlay:H,homeRef:w,defaultLang:a}),n.createElement(g.a,{isPlayFeature:I,currentLanguage:Q}),n.createElement(o.a,{isPlayCodeCompare:W,currentLanguage:Q}),n.createElement(m.a,{isIsolatePlay:G,currentLanguage:Q}),n.createElement(i.a,{isPlayRender:J,currentLanguage:Q}),n.createElement("div",{ref:w}),n.createElement(l.a,{onSubmit:function(e){v(e)},submitData:y,toggleBuilder:q,formUpdated:U,currentLanguage:Q}),n.createElement("section",{className:h.a.centerContent},n.createElement("h1",{className:E.a.h1},p.a.findInteresting[Q].heading),n.createElement("p",null,p.a.findInteresting[Q].description),n.createElement("div",{className:O.a.buttonsGroup,style:{maxWidth:500}},n.createElement("button",{className:O.a.primaryButton,onClick:function(){Object(r.navigate)(Object(f.a)("get-started",Q))}},p.a.getStarted[Q]),n.createElement("button",{className:O.a.primaryButton,onClick:function(){Object(r.navigate)(Object(f.a)("api",Q))}},"API"))),n.createElement(s.a,{currentLanguage:Q}))}))},nt6w:function(e,t,a){"use strict";a("/8Fb"),a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");var n=a("q1tI"),r=a("68so"),l=a("7XWO"),c=(a("Oyvg"),a("KKXr"),a("f3/d"),a("LuW/")),o=a("WszV"),i=a.n(o),m={border:"1px solid "+c.a.secondary,background:c.a.errorPink,borderLeft:"10px solid "+c.a.lightPink},s=function(e){var t=e.formData,a=e.errors,r=e.register;return(t||[]).map((function(e){switch(e.type){case"select":return n.createElement("select",{"aria-label":e.name,name:e.name,ref:r({required:e.required}),key:e.name,style:Object.assign({marginBottom:20},a[e.name]?m:null)},n.createElement("option",{value:""},"Select..."),e.options&&e.options.split(";").filter(Boolean).map((function(e){return n.createElement("option",{key:e},e)})));case"textarea":return n.createElement("textarea",{"aria-label":e.name,name:e.name,placeholder:e.name,ref:r(Object.assign(Object.assign({required:e.required},e.maxLength?{maxLength:e.maxLength}:null),e.minLength?{minLength:e.minLength}:null)),key:e.name,style:Object.assign({marginBottom:20},a[e.name]?m:null)});case"radio":return n.createElement("div",{className:i.a.radioGroup,key:e.name,style:{marginBottom:20},"aria-label":e.name},e.options&&e.options.split(";").filter(Boolean).map((function(t){return n.createElement("label",{key:t,style:Object.assign({},a[e.name]?{color:c.a.lightPink}:null)},t," ",n.createElement("input",{type:"radio",name:e.name,value:t,ref:r({required:e.required})}))})));default:return n.createElement("input",{style:Object.assign({marginBottom:20},a[e.name]?m:null),"aria-label":e.name,autoComplete:"off",key:e.name,type:e.type,name:e.name,placeholder:e.name,ref:r(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({required:e.required},e.pattern?{pattern:new RegExp(e.pattern)}:null),e.max?{max:e.max}:null),e.min?{min:e.min}:null),e.maxLength?{maxLength:e.maxLength}:null),e.minLength?{minLength:e.minLength}:null))})}}))},u=a("6x5l"),g=a("MHX4"),d=a("lfct"),p=a("Kzm3"),f=a("9Ruc"),b=a.n(f),E=a("9QH1"),y=a.n(E),h=a("G3ap"),v=a.n(h),O=a("YSDk"),j=a.n(O);var L={start:{opacity:0},end:{opacity:1},duration:.8};t.a=n.memo((function(e){var t=e.onSubmit,a=e.submitData,c=e.toggleBuilder,o=e.formUpdated,i=e.currentLanguage,m=e.methods,f=e.devTool,E=m||Object(g.a)({mode:"onChange"}),h=E.register,O=E.errors,N=E.handleSubmit,k=E.watch,x=E.formState,S=E.reset,D=Object.keys(x.touched),q=Object(l.c)().state.formData;return n.createElement(n.Fragment,null,!f&&n.createElement("div",{className:y.a.centerContent},n.createElement("h1",{className:v.a.h1},p.a.liveDemo[i]),o&&n.createElement(r.Animate,{play:o,start:{opacity:0,transform:"translateY(20px)"},end:{opacity:1},delay:1.5,render:function(e){var t=e.style;return n.createElement("p",{style:Object.assign({marginBottom:20},t)},n.createElement("b",{className:v.a.note},"Note:")," your form has been updated.")}}),n.createElement("p",null,d.a.liveDemo[i].description)),n.createElement("div",{className:j.a.wrapper},n.createElement("form",{className:j.a.demoForm,onSubmit:N(t)},n.createElement("h2",{className:v.a.title},p.a.example[i]),n.createElement(s,{formData:q,errors:O,register:h}),n.createElement("button",{className:b.a.pinkButton},d.a.liveDemo[i].submit),!f&&n.createElement(n.Fragment,null,n.createElement("h2",{className:v.a.title,style:{fontSize:14,maxWidth:"80%",margin:"0 auto"}},"or"),n.createElement("button",{className:b.a.darkButton,type:"button",onClick:function(){S(),c(!0),Object(u.a)()}},p.a.edit[i]))),!f&&n.createElement(n.Fragment,null,n.createElement("section",null,n.createElement("h2",{className:v.a.title},d.a.liveDemo[i].watchTitle),n.createElement("p",null,"ⓘ ",d.a.liveDemo[i].watch),n.createElement(r.Animate,Object.assign({play:Object.keys(k()).length>0},L,{render:function(e){var t=e.style;return n.createElement("pre",{className:j.a.code,style:t},JSON.stringify(k(),null,2))}}))),n.createElement("section",null,n.createElement("h2",{className:v.a.title},d.a.liveDemo[i].errorTitle),n.createElement("p",null,"ⓘ ",d.a.liveDemo[i].error),n.createElement(r.Animate,Object.assign({},L,{play:!!Object.keys(O).length}),n.createElement("pre",{className:j.a.code},Object.keys(O).length>0&&JSON.stringify(Object.entries(O).reduce((function(e,t){var a=t[0],n=t[1],r=(n.ref,function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(n,["ref"]));return e[a]=r,e}),{}),null,2)))),n.createElement("section",null,n.createElement("h2",{className:v.a.title},d.a.liveDemo[i].touchedTitle),n.createElement("p",null,"ⓘ ",d.a.liveDemo[i].touched),n.createElement(r.Animate,Object.assign({play:!!D.length},L,{render:function(e){var t=e.style;return n.createElement("pre",{className:j.a.code,style:t},JSON.stringify(D,null,2))}}))),!!Object.keys(a).length&&n.createElement("section",null,n.createElement("h2",{className:v.a.title},d.a.liveDemo[i].submit),n.createElement(r.Animate,Object.assign({play:!!Object.keys(a).length},L,{render:function(e){var t=e.style;return n.createElement("pre",{className:j.a.code,style:t},Object.keys(a).length>0&&JSON.stringify(a,null,2))}}))))))}))}}]);
//# sourceMappingURL=component---src-pages-index-ru-tsx-d0207bf33498c3cd0aaf.js.map