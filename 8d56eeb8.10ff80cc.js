(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{125:function(M,A,I){"use strict";I.r(A),I.d(A,"frontMatter",(function(){return N})),I.d(A,"metadata",(function(){return C})),I.d(A,"rightToc",(function(){return D})),I.d(A,"default",(function(){return c}));var t=I(3),g=I(7),T=(I(0),I(181)),N={slug:"/introduction/",sidebar_label:"Introduction Index",title:"Wechaty Introduction"},C={unversionedId:"introduction/README",id:"introduction/README",isDocsHomePage:!1,title:"Wechaty Introduction",description:"Wechaty is a Conversational SDK for Chatbot Makers",source:"@site/docs/introduction/README.md",slug:"/introduction/",permalink:"/docs/introduction/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/introduction/README.md",version:"current",lastUpdatedBy:"Jun Tsai",lastUpdatedAt:1607829912,sidebar_label:"Introduction Index",sidebar:"docs",next:{title:"Multi-language Support",permalink:"/docs/introduction/multi-language"}},D=[{value:"Table of Contents",id:"table-of-contents",children:[{value:"Basic",id:"basic",children:[]},{value:"Advanced",id:"advanced",children:[]}]}],e={rightToc:D};function c(M){var A=M.components,N=Object(g.a)(M,["components"]);return Object(T.b)("wrapper",Object(t.a)({},e,N,{components:A,mdxType:"MDXLayout"}),Object(T.b)("p",null,Object(T.b)("img",{alt:"Wechaty is a Conversational SDK for Chatbot Makers",src:I(190).default})),Object(T.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(T.b)("h3",{id:"basic"},"Basic"),Object(T.b)("ul",null,Object(T.b)("li",{parentName:"ul"},Object(T.b)("p",{parentName:"li"},Object(T.b)("strong",{parentName:"p"},"What is Wechaty"))),Object(T.b)("li",{parentName:"ul"},Object(T.b)("p",{parentName:"li"},Object(T.b)("strong",{parentName:"p"},"Who uses Wechaty"))),Object(T.b)("li",{parentName:"ul"},Object(T.b)("p",{parentName:"li"},Object(T.b)("strong",{parentName:"p"},"How to Wechaty"))),Object(T.b)("li",{parentName:"ul"},Object(T.b)("p",{parentName:"li"},Object(T.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/introduction/concepts"}),"Concepts"))),Object(T.b)("li",{parentName:"ul"},Object(T.b)("p",{parentName:"li"},Object(T.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/introduction/motivations"}),"Motivations"))),Object(T.b)("li",{parentName:"ul"},Object(T.b)("p",{parentName:"li"},Object(T.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/introduction/alternatives"}),"Alternatives"))),Object(T.b)("li",{parentName:"ul"},Object(T.b)("p",{parentName:"li"},Object(T.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/introduction/multi-language"}),"Multi Languages"))),Object(T.b)("li",{parentName:"ul"},Object(T.b)("p",{parentName:"li"},"[Instance Messages]"," Conversational Protocols](/docs/introduction/puppet)")),Object(T.b)("li",{parentName:"ul"},Object(T.b)("p",{parentName:"li"},Object(T.b)("strong",{parentName:"p"},"Examples"),"\n'examples',\n'examples2',"))),Object(T.b)("h3",{id:"advanced"},"Advanced"),Object(T.b)("ul",null,Object(T.b)("li",{parentName:"ul"},Object(T.b)("strong",{parentName:"li"},"What is Wechaty"),Object(T.b)("ul",{parentName:"li"},Object(T.b)("li",{parentName:"ul"},Object(T.b)("a",Object(t.a)({parentName:"li"},{href:"#11-i-can-not-login-with-my-wechat-account"}),"Cannot login")),Object(T.b)("li",{parentName:"ul"},Object(T.b)("a",Object(t.a)({parentName:"li"},{href:"#a"}),"What wechaty cannot do on wechat")))),Object(T.b)("li",{parentName:"ul"},Object(T.b)("strong",{parentName:"li"},"Who uses Wechaty"),Object(T.b)("ul",{parentName:"li"},Object(T.b)("li",{parentName:"ul"},Object(T.b)("a",Object(t.a)({parentName:"li"},{href:"#b"}),"Can wechaty send url rich media message?")),Object(T.b)("li",{parentName:"ul"},Object(T.b)("a",Object(t.a)({parentName:"li"},{href:"#c"}),"I don't know wechaty support for personal account of wechat official account?")))),Object(T.b)("li",{parentName:"ul"},Object(T.b)("strong",{parentName:"li"},"How to Wechaty"),Object(T.b)("ul",{parentName:"li"},Object(T.b)("li",{parentName:"ul"},Object(T.b)("a",Object(t.a)({parentName:"li"},{href:"#b"}),"Can wechaty send url rich media message?")),Object(T.b)("li",{parentName:"ul"},Object(T.b)("a",Object(t.a)({parentName:"li"},{href:"#c"}),"I don't know wechaty support for personal account of wechat official account?"))))))}c.isMDXComponent=!0},181:function(M,A,I){"use strict";I.d(A,"a",(function(){return i})),I.d(A,"b",(function(){return n}));var t=I(0),g=I.n(t);function T(M,A,I){return A in M?Object.defineProperty(M,A,{value:I,enumerable:!0,configurable:!0,writable:!0}):M[A]=I,M}function N(M,A){var I=Object.keys(M);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(M);A&&(t=t.filter((function(A){return Object.getOwnPropertyDescriptor(M,A).enumerable}))),I.push.apply(I,t)}return I}function C(M){for(var A=1;A<arguments.length;A++){var I=null!=arguments[A]?arguments[A]:{};A%2?N(Object(I),!0).forEach((function(A){T(M,A,I[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(I)):N(Object(I)).forEach((function(A){Object.defineProperty(M,A,Object.getOwnPropertyDescriptor(I,A))}))}return M}function D(M,A){if(null==M)return{};var I,t,g=function(M,A){if(null==M)return{};var I,t,g={},T=Object.keys(M);for(t=0;t<T.length;t++)I=T[t],A.indexOf(I)>=0||(g[I]=M[I]);return g}(M,A);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(M);for(t=0;t<T.length;t++)I=T[t],A.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(M,I)&&(g[I]=M[I])}return g}var e=g.a.createContext({}),c=function(M){var A=g.a.useContext(e),I=A;return M&&(I="function"==typeof M?M(A):C(C({},A),M)),I},i=function(M){var A=c(M.components);return g.a.createElement(e.Provider,{value:A},M.children)},y={inlineCode:"code",wrapper:function(M){var A=M.children;return g.a.createElement(g.a.Fragment,{},A)}},a=g.a.forwardRef((function(M,A){var I=M.components,t=M.mdxType,T=M.originalType,N=M.parentName,e=D(M,["components","mdxType","originalType","parentName"]),i=c(I),a=t,n=i["".concat(N,".").concat(a)]||i[a]||y[a]||T;return I?g.a.createElement(n,C(C({ref:A},e),{},{components:I})):g.a.createElement(n,C({ref:A},e))}));function n(M,A){var I=arguments,t=A&&A.mdxType;if("string"==typeof M||t){var T=I.length,N=new Array(T);N[0]=a;var C={};for(var D in A)hasOwnProperty.call(A,D)&&(C[D]=A[D]);C.originalType=M,C.mdxType="string"==typeof M?M:t,N[1]=C;for(var e=2;e<T;e++)N[e]=I[e];return g.a.createElement.apply(null,N)}return g.a.createElement.apply(null,I)}a.displayName="MDXCreateElement"},190:function(M,A,I){"use strict";I.r(A),A.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTkyMC4wMDAwMDBwdCIgaGVpZ2h0PSI1NDAuMDAwMDAwcHQiIHZpZXdCb3g9IjAgMCAxOTIwLjAwMDAwMCA1NDAuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+CjxtZXRhZGF0YT4KQ3JlYXRlZCBieSBwb3RyYWNlIDEuMTYsIHdyaXR0ZW4gYnkgUGV0ZXIgU2VsaW5nZXIgMjAwMS0yMDE5CjwvbWV0YWRhdGE+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDU0MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiM0NGE4MzgiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0yNzEwIDQ3MzMgYy0zNiAtNjMgLTczIC0xMjkgLTgzIC0xNDYgbC0xOSAtMzAgLTczIDczIC03NCA3NCAtMjMKLTIwIGMtMTMgLTExIC01MiAtNDYgLTg3IC03NyBsLTYzIC01NiAtNzcgNTkgYy00MiAzMyAtODUgNzUgLTk1IDk1IC0zNCA2MgotMTI2IDExNSAtMjAwIDExNSAtMTM5IDAgLTI2MyAtMTQwIC0yNDEgLTI3MyAxNSAtODcgODMgLTE3MiAxNTkgLTE5NyBsMzYKLTEyIDAgLTUzMSAwIC01MzIgLTczIC0zOSBjLTQ0MSAtMjQwIC03OTYgLTY1MCAtOTQxIC0xMDg2IC03NSAtMjI1IC03OSAtMjU5Ci04MyAtNzE4IGwtNSAtNDEyIDIyNzkgMCAyMjc5IDAgMTQgMTc4IGMxOCAyNDggOSA1ODIgLTIwIDcxNyAtMTA2IDQ5NyAtNDIxCjkzMCAtOTA0IDEyNDQgLTYxIDM5IC0xMTQgNzEgLTExOCA3MSAtNCAwIC04IDI1MCAtOCA1NTUgbDAgNTU1IDM3IDE1IGM2MCAyNQo5OSA2MSAxMjcgMTE3IDQ0IDg3IDMyIDE4NCAtMzIgMjU4IC01MSA2MCAtMTA0IDg0IC0xODIgODQgLTQ3IDAgLTc2IC02IC0xMDYKLTIyIC03OCAtNDEgLTEzNCAtMTI4IC0xMzQgLTIxMCAwIC0zMSAtMjIgLTUzIC01MiAtNTIgLTcgMSAtNTMgNjQgLTEwMiAxNDEKbC04OCAxNDAgLTcwIC0xMjMgYy0zOSAtNjggLTc3IC0xMzQgLTg1IC0xNDcgbC0xNSAtMjMgLTcyIDcxIC03MyA3MiAtMTEyCi01NSAtMTEzIC01NSAtNTQgMzQgYy0zMCAxOSAtNTkgMzUgLTY1IDM1IC01IDAgLTQ2IC0yMSAtOTAgLTQ2IC00NSAtMjUgLTg1Ci00MiAtODkgLTM3IC01IDQgLTM2IDc3IC03MSAxNjEgLTM0IDgzIC02NSAxNTIgLTY4IDE1MiAtMyAwIC0zNSAtNTMgLTcxCi0xMTd6IG0xMzQgLTEwOCBjMzIgLTgwIDU5IC0xNDUgNjEgLTE0NSAxIDAgNDIgMjIgOTEgNTAgNDkgMjcgOTYgNDkgMTA0IDQ5CjggMCAzOCAtMTUgNjUgLTMzIGw1MCAtMzMgMTEwIDU0IDEwOSA1NCA4MSAtODEgODEgLTgwIDc5IDE0MCBjNDQgNzcgODIgMTQwCjg1IDE0MCAzIDAgMTggLTIxIDM1IC00OCAxNiAtMjYgNTMgLTg0IDgyIC0xMjkgbDUzIC04MiAzNyAxNiBjMjYgMTAgMzggMTIKNDEgNCAxNiAtNDcgNzIgLTEwOCAxMjUgLTEzNSBsNTcgLTI5IDAgLTUyMyAwIC01MjQgLTU3IDI2IGMtMzY2IDE2NCAtNjk5CjIzOCAtMTA3OCAyMzcgLTM4MSAtMSAtNzA0IC02NyAtMTA1NyAtMjE3IGwtMzggLTE2IDAgNTA5IDAgNTA5IDM0IDEyIGM4NCAyOAoxNTYgMTI1IDE1OSAyMTggMiA0NSAwIDQ1IDc5IC0xNiBsNTcgLTQ0IDg0IDc1IDgzIDc2IDgwIC04MCA4MCAtODAgNDQgNzgKYzg1IDE1MSAxMTEgMTkzIDExOCAxOTMgNCAwIDMzIC02NiA2NiAtMTQ1eiBtLTQxOSAtMjUwOSBjMTQ5IC0zOSAyNDggLTE1MQoyNDcgLTI4MSAwIC02NyAtMTEgLTEwMiAtNDggLTE1NiAtODIgLTEyMCAtMjk3IC0xNzcgLTQzMSAtMTE1IC02MiAyOSAtMTIzCjkwIC0xNTUgMTU0IC0zNCA2OSAtMzIgMTY5IDQgMjM4IDMzIDYzIDExNCAxMzcgMTcxIDE1NyA1MyAxOSAxNDcgMjEgMjEyIDN6Cm0xNTQ2IC0xNSBjMTIyIC00NyAxOTkgLTE1MCAxOTkgLTI2OSAwIC03OCAtMTYgLTExOCAtNzUgLTE4MCAtNjUgLTcwIC0xNDUKLTEwNSAtMjU3IC0xMTAgLTc2IC00IC05MiAtMSAtMTQwIDIwIC0xNTcgNzMgLTIyNiAyNDYgLTE1NSAzOTAgMzMgNjcgMTA5CjE0MCAxNzAgMTYyIDU5IDIyIDE4NSAxNSAyNTggLTEzeiIvPgo8cGF0aCBkPSJNMTMzNDAgNDA2MiBjLTQ2IC04MSAtODUgLTE0OSAtODcgLTE1MSAtMiAtMyAtMzcgMjggLTc4IDY5IGwtNzUgNzQKLTI3IC0yNSBjLTE2IC0xNCAtNTQgLTQ4IC04NiAtNzcgbC01OCAtNTIgLTk2IDc3IC05NiA3NiAtMTQ0IC03MSBjLTc5IC00MAotMTQ1IC03MiAtMTQ3IC03MiAtMiAwIC03IDE5IC0xMCA0MyAtMTkgMTIzIC0xNDQgMjIwIC0yNjMgMjAzIC04NCAtMTEgLTE2NgotNzMgLTE5NyAtMTQ4IC0zOCAtOTAgLTUgLTIxNiA3MyAtMjc4IGw0MSAtMzMgMCAtMTI4NCAwIC0xMjgzIDExMCAwIDExMCAwIDAKNTc4IGMwIDYzNSAyIDY1NyA2MSA3NzMgMzkgNzggMTQ0IDE4NiAyMTYgMjIzIDE1NCA3OCAzNTQgNzIgNDk3IC0xNCA3NCAtNDQKMTU4IC0xMzcgMTk3IC0yMTUgNTYgLTExNiA1OSAtMTQ1IDU5IC03NzIgbDAgLTU3MyAxMDUgMCAxMDYgMCAtNCA2MjggYy0zCjY5NiAtMSA2NzEgLTczIDgxNyAtODcgMTc5IC0yNTUgMzE1IC00NTMgMzY2IC0xMDYgMjggLTI4NyAyOCAtMzkyIDEgLTkyIC0yNQotMTk1IC03NiAtMjY0IC0xMzEgbC01MCAtNDAgLTMgNDY2IGMtMiA0MzcgLTEgNDY4IDE1IDQ3NyAzMyAxOCA4MyA4MCA5NSAxMTYKMTAgMzMgMjAgNDAgMTU2IDEwNSA4MCAzOSAxNTEgNzAgMTU3IDY5IDYgLTEgNTMgLTM0IDEwMyAtNzQgbDkyIC03MiA4NiA3Nwo4NyA3NyA3OCAtNzggYzQzIC00MyA4MCAtNzYgODIgLTczIDIgMiAzOCA2NCA3OSAxMzcgNDIgNzQgNzggMTMwIDgxIDEyNSAzCi00IDMwIC03MSA2MiAtMTQ4IDMxIC03NyA1OCAtMTQxIDYwIC0xNDMgMiAtMiA0MyAxOSA5MyA0NyA0OSAyOCA5NiA1MSAxMDQKNTEgNyAwIDM3IC0xNiA2NSAtMzUgMjkgLTE5IDU1IC0zNSA1OSAtMzUgNCAwIDU0IDI3IDExMSA2MSBsMTAzIDYxIDgxIC03Nwo4MiAtNzYgNzQgMTQwIGM0MSA3OCA3NyAxNDEgODEgMTQxIDQgMCA0NCAtNTQgOTAgLTEyMCA0NiAtNjYgODcgLTEyMCA5MgotMTIwIDQgMCAzOCAxMyA3NCAyOSBsNjUgMzAgMzggLTQ5IGMyMSAtMjcgNDIgLTQ5IDQ3IC01MCA0IDAgNTMgMjkgMTA3IDY1CjU1IDM2IDEwMiA2NSAxMDUgNjUgMyAwIDQ0IC0zMCA5MSAtNjYgNDcgLTM2IDg3IC02MyA4OSAtNjEgMiAyIDMwIDY2IDYyIDE0MgozMSA3NiA2MiAxNDAgNjcgMTQxIDYgMiA1MiAtNDggMTA0IC0xMTEgNTIgLTYzIDk3IC0xMTMgMTAwIC0xMTEgMyAyIDM0IDIwCjY5IDQwIGw2MiAzOCA2NSAtMjIgYzcyIC0yNCA5NSAtNDEgOTUgLTcxIDAgLTM0IDM4IC05NSA4NCAtMTM2IGw0NSAtNDAgMwotMTA3OSBjMyAtOTk0IDUgLTEwODQgMjEgLTExMzggNTUgLTE4NSAxODAgLTMwMiAzNjUgLTM0MiA0NCAtOSAxMzIgLTE0IDI1NQotMTQgbDE4NyAwIDAgOTkgMCA5OSAtMTk3IDQgYy0yMzEgNSAtMjc0IDE3IC0zNDMgOTYgLTcwIDc5IC03MCA3NSAtNzAgNzE5CmwwIDU3MyAzMDUgMCAzMDUgMCAwIDEwNSAwIDEwNSAtMzA1IDAgLTMwNSAwIDAgMzkxIDAgMzkxIDQ0IDM5IGMxMzYgMTIwIDkwCjM0MyAtODUgNDA0IC0yMyA4IC01NiAxNSAtNzMgMTUgLTk2IDAgLTIwNSAtNzkgLTIyOCAtMTY1IC03IC0yNSAtMTcgLTQ1IC0yNAotNDUgLTYgMCAtNDEgMTEgLTc4IDI1IGwtNjYgMjUgLTU3IC0zNSBjLTMyIC0xOSAtNjIgLTM1IC02OCAtMzUgLTUgMCAtNTcgNTcKLTExNCAxMjUgLTU4IDY5IC0xMDggMTIyIC0xMTEgMTE4IC00IC01IC0zMSAtNjYgLTYwIC0xMzggLTI5IC03MSAtNTYgLTEzOAotNjIgLTE0OCAtOCAtMTUgLTE4IC0xMCAtODYgNDMgLTQzIDMzIC04MSA2MCAtODUgNjAgLTQgMCAtNTIgLTMwIC0xMDcgLTY2CmwtMTAwIC02NyAtMjIgMjkgYy0xMyAxNiAtMzIgMzkgLTQzIDUyIGwtMjEgMjQgLTYyIC0zMSBjLTM0IC0xNyAtNjUgLTMxIC03MAotMzEgLTQgMCAtNTAgNjEgLTEwMiAxMzYgLTgwIDExNCAtOTYgMTMzIC0xMDYgMTE5IC02IC04IC00MiAtNzQgLTc4IC0xNDUKLTM3IC03MiAtNzAgLTEzMCAtNzMgLTEzMCAtMyAwIC0zOCAzMCAtNzkgNjYgbC03MyA2NiAtMTAxIC02MSBjLTU2IC0zNCAtMTA1Ci02MSAtMTEwIC02MSAtNSAwIC0zNCAxNiAtNjQgMzUgLTMwIDE5IC02MCAzNSAtNjYgMzUgLTYgMCAtNDcgLTIxIC05MSAtNDYKLTQ1IC0yNSAtODQgLTQzIC04NyAtNDAgLTMgNCAtMzYgNzggLTcyIDE2NiBsLTY2IDE1OSAtODQgLTE0N3oiLz4KPHBhdGggZD0iTTkzOTMgMjk1OSBjLTIxNSAtMjEgLTM5NyAtMTA2IC01NDcgLTI1NiAtMTIyIC0xMjIgLTIwOSAtMjc0IC0yNTIKLTQ0MyAtMjkgLTExNCAtMjcgLTM3NiA0IC00ODMgOTcgLTMzOSAzNjIgLTU4OCA3MDcgLTY2MyAxMDkgLTIzIDMzNSAtMjQgNDI5Ci0xIDI3NiA2OSA1MDQgMjU0IDYyNSA1MDggNTQgMTEyIDcyIDE4MyA3OCAzMDcgbDYgMTAyIC0xMTIgMCAtMTExIDAgMCAtNDkKYzAgLTMwNyAtMjQwIC01OTMgLTU1NyAtNjY1IC04OSAtMjAgLTIzNSAtMjAgLTMyOCAtMSAtMjM0IDQ5IC00NDIgMjQ0IC01MTcKNDg1IC0yMCA2NCAtMjMgOTYgLTIzIDIyMCAwIDEyNCAzIDE1NiAyMyAyMjAgMzIgMTAwIDY0IDE2MSAxMjggMjQ3IDE0NSAxOTAKMzUzIDI4NCA2MDAgMjcwIDE2NSAtOSAyOTAgLTU5IDQwMCAtMTYwIDQ1IC00MSA1MyAtNTIgNDIgLTYzIC03IC02IC0yNTEKLTE3MyAtNTQzIC0zNjkgLTI5MSAtMTk2IC01MzQgLTM2MSAtNTM5IC0zNjUgLTcgLTcgNjggLTEyMSAxMTQgLTE3MyA1IC02CjkxMSA2MDAgMTI4MiA4NTggMTcgMTEgMTQgMTggLTMxIDgxIC05OCAxNDAgLTI2OCAyNzMgLTQzMSAzMzcgLTEyNCA0OSAtMzAwCjcxIC00NDcgNTZ6Ii8+CjxwYXRoIGQ9Ik0xMTQxMCAyOTYwIGMtMTUwIC0xNSAtMzExIC03MiAtNDI3IC0xNTEgLTE2OSAtMTE1IC0yOTkgLTMwMCAtMzU1Ci01MDQgLTE4IC02NyAtMjEgLTEwOCAtMjIgLTI1MCAwIC0xNDUgMyAtMTgzIDIyIC0yNjAgODYgLTM0MCAzNTcgLTU4OSA3MDkKLTY1MCA1NiAtMTAgMTUyIC0xNSAyNzkgLTE1IGwxOTQgMCAwIDEwOSAwIDEwOSAtMjIyIDUgYy0yNDggNSAtMjkxIDEzIC00MTgKNzUgLTEwNCA1MSAtMjIyIDE2OCAtMjczIDI3MiAtNjAgMTIyIC03MiAxODQgLTcxIDM1NSAwIDEzNCAzIDE1OCAyNyAyMzAgMTUKNDQgNDMgMTA5IDY0IDE0NCA1NCA5MCAxNjYgMTkyIDI2NyAyNDEgMTE4IDU4IDE4NiA3MCA0MjQgNzAgbDIwMiAwIDAgMTE1IDAKMTE1IC0xNjIgLTEgYy05MCAtMSAtMTk3IC01IC0yMzggLTl6Ii8+CjxwYXRoIGQ9Ik0xNDYwMCAyOTU5IGMtMTk3IC0yMyAtMzgwIC0xMTYgLTUxNyAtMjYzIC03OSAtODQgLTExNiAtMTM4IC0xNjMKLTIzOSAtNjAgLTEyNyAtODEgLTIyMSAtODcgLTM4MiAtNiAtMTY0IDEwIC0yNzYgNTggLTQwOCA2MiAtMTcyIDIyMCAtMzYzCjM3OCAtNDU3IDIwMyAtMTIxIDQ4NyAtMTUyIDY5NSAtNzYgNzkgMjggMjA0IDEwMiAyNzAgMTU4IGw0NiA0MCAwIDEzNCAwIDEzNAotNzcgLTc4IGMtMTY5IC0xNjkgLTMxNSAtMjMwIC01MjggLTIxOSAtMTY3IDggLTI4NiA2NSAtNDE1IDE5NiAtMTQzIDE0NQotMjEwIDMxNSAtMjEwIDUzMiAwIDIxNiA3NyA0MDEgMjI1IDU0NCAyMDIgMTk1IDQ3MiAyMzggNzIwIDExNiAxNzYgLTg3IDMxNQotMjc4IDM1OSAtNDkzIDEzIC02NCAxNiAtMTYwIDE2IC01NzMgbDAgLTQ5NSAxMDUgMCAxMDUgMCAwIDUxNCBjMCA1NTMgLTMKNTg5IC01NCA3MzYgLTY2IDE5MiAtMjIxIDM3NSAtNDA4IDQ4MyAtNzMgNDIgLTIxNyA4NiAtMzE5IDk3IC0xMDQgMTEgLTk1IDExCi0xOTkgLTF6Ii8+CjxwYXRoIGQ9Ik02MDAzIDIyNjMgYzMgLTYwMyA1IC02NzQgMjEgLTcyNyA2NCAtMjE1IDIxNyAtMzY2IDQyNyAtNDIzIDg3IC0yMwoyNzEgLTIzIDM1OSAwIDEzMyAzNiAyMzUgMTA2IDMwMCAyMDcgMTggMjcgMzMgNTAgMzUgNTAgMiAwIDE1IC0yMCAyOSAtNDQgMzYKLTYxIDEyNiAtMTQwIDE5OSAtMTc1IDkzIC00MyAxNTggLTU2IDI5MiAtNTUgMTAxIDEgMTMyIDUgMjAxIDI3IDE5OCA2NSAzMzgKMjE1IDM5NyA0MjYgMjAgNzMgMjEgMTAwIDI1IDcyOSBsMyA2NTIgLTExMCAwIC0xMTEgMCAwIC02MzAgYzAgLTQyMSAtNCAtNjQ2Ci0xMSAtNjgyIC0zMSAtMTQ4IC0xMzcgLTI2MSAtMjgzIC0zMDMgLTg1IC0yNSAtMjE0IC0xNyAtMjkwIDE4IC03MyAzNCAtMTU5CjExNiAtMTkwIDE4MSAtNDQgOTUgLTQ2IDEyNCAtNDYgNzg2IGwwIDYzMCAtMTEwIDAgLTExMCAwIDAgLTY0NCBjMCAtNjEzIC0xCi02NDcgLTIwIC03MDggLTM2IC0xMTcgLTEwMiAtMTkyIC0yMTggLTI0NiAtNTEgLTI0IC02OSAtMjcgLTE2NyAtMjcgLTEwMyAwCi0xMTQgMiAtMTc1IDMxIC0zNiAxNyAtODQgNDggLTEwNyA2OCAtNTkgNTEgLTExMCAxNTkgLTEyMyAyNTYgLTUgNDEgLTEwIDM0NAotMTAgNjczIGwwIDU5NyAtMTA2IDAgLTEwNSAwIDQgLTY2N3oiLz4KPHBhdGggZD0iTTE2OTcwIDIzNzIgYzAgLTMyNiA0IC01OTIgMTAgLTY0MSAyMyAtMTc2IDg2IC0zMTMgMjAyIC00MzYgOTkKLTEwNCAyMjUgLTE3MiAzNTYgLTE5MCBsNTIgLTcgMCAtMjY5IDAgLTI2OSAxMTUgMCAxMTUgMCAwIDI2OSAwIDI2OSA2NyAxMgpjMTk3IDM0IDM2NSAxNjcgNDYyIDM2NCA3NyAxNTggNzQgMTI3IDc4IDgyOSBsNCA2MjcgLTEwNiAwIC0xMDUgMCAwIC01NjQgYzAKLTYyNCAtMyAtNjYxIC02MSAtNzg0IC0zOSAtODEgLTE0MCAtMTg3IC0yMTYgLTIyNiAtMTU0IC03NyAtMzUwIC03NSAtNDkyIDYKLTc1IDQzIC0xNjAgMTMzIC0xOTkgMjA5IC02MiAxMjUgLTYyIDEyNCAtNjIgNzcxIGwwIDU4OCAtMTEwIDAgLTExMCAwIDAKLTU1OHoiLz4KPHBhdGggZD0iTTc3MCA3NTUgbDAgLTE0NSAyMzAwIDAgMjMwMCAwIDAgMTQ1IDAgMTQ1IC0yMzAwIDAgLTIzMDAgMCAwIC0xNDV6Ii8+CjwvZz4KPC9zdmc+Cg=="}}]);