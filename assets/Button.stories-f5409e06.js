var s=Object.defineProperty;var r=(a,t)=>s(a,"name",{value:t,configurable:!0});import{c as e,A as m,C as n,S as u,M as y}from"./Props-bf30f436.js";import"./index-e59ec46a.js";import"./iframe-a9052c7e.js";import{A as c}from"./index-3bedecf5.js";import"./string-fad46ef0.js";import"./es.map.constructor-62fd3c16.js";import"./es.number.to-fixed-9d6d1344.js";import"./jsx-runtime-366d61c0.js";import"./index-a10873ea.js";import"./index-eb3299b9.js";import"./index-c6a27bf6.js";function d(){return d=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(a[i]=l[i])}return a},d.apply(this,arguments)}r(d,"_extends");const f={},x="wrapper";function p({components:a,...t}){return e(x,d({},f,t,{components:a,mdxType:"MDXLayout"}),e(y,{title:"漏洞管理平台/Button/使用文档",mdxType:"Meta"}),e("h1",null,"Button 按钮"),e("p",null,"按钮用于开始一个即时操作。"),e("h1",null,"API"),e("ol",null,e("li",{parentName:"ol"},"通过设置",e("inlineCode",{parentName:"li"},"Button"),"的属性来产生不同的按钮样式，推荐顺序为：",e("inlineCode",{parentName:"li"},"type -> shape -> size -> loading -> disabled。")),e("li",{parentName:"ol"},"支持原生",e("inlineCode",{parentName:"li"},"button"),"的其他所有属性。")),e("p",null,"按钮的属性说明如下："),e(c,{dataSource:[{name:"className",type:"string",required:"否",description:"设置按钮类名class类名",defaultValue:""},{name:"type",type:["primary","ghost","dashed","link","text","default"],required:"否",description:"设置按钮类型",defaultValue:"default"},{name:"danger",type:"boolean",required:"否",description:"设置危险按钮",defaultValue:"false"},{name:"disabled",type:"boolean",required:"否",description:"设置按钮失效状态",defaultValue:"false"},{name:"ghost",type:"boolean",required:"否",description:"幽灵属性，使按钮背景透明",defaultValue:"false"},{name:"loading",type:["boolean","{ delay: number }"],required:"否",description:"设置按钮载入状态",defaultValue:"false"},{name:"size",type:["large","middle","small"],required:"否",description:"设置按钮大小",defaultValue:"middle"},{name:"onClick",type:"(event: MouseEvent) => void",required:"否",description:"点击按钮时的回调",defaultValue:""}],mdxType:"ApiTable"}),e("h1",null,"代码演示"),e("h2",null,"主题色按钮"),e(n,{mdxType:"Canvas"},e(u,{id:"漏洞管理平台-button--primary-color",mdxType:"Story"})),e("h2",null,"主要按钮"),e(n,{mdxType:"Canvas"},e(u,{id:"漏洞管理平台-button--primary",mdxType:"Story"})),e("h2",null,"次要按钮"),e(n,{mdxType:"Canvas"},e(u,{id:"漏洞管理平台-button--default",mdxType:"Story"})),e("h2",null,"危险按钮"),e(n,{mdxType:"Canvas"},e(u,{id:"漏洞管理平台-button--danger",mdxType:"Story"})),e("h2",null,"链接按钮"),e(n,{mdxType:"Canvas"},e(u,{id:"漏洞管理平台-button--link-btn",mdxType:"Story"})))}r(p,"MDXContent");p.isMDXComponent=!0;const b=r(()=>{throw new Error("Docs-only story")},"__page");b.parameters={docsOnly:!0};const o={title:"漏洞管理平台/Button/使用文档",tags:["stories-mdx"],includeStories:["__page"]},F={};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(m,{mdxStoryNameToKey:F,mdxComponentAnnotations:o},e(p,null))};const q=["__page"];export{q as __namedExportsOrder,b as __page,o as default};
//# sourceMappingURL=Button.stories-f5409e06.js.map
