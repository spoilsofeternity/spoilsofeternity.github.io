"use strict";(self.webpackChunkspoils_of_eternity=self.webpackChunkspoils_of_eternity||[]).push([[6075],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),u=i,h=c["".concat(d,".").concat(u)]||c[u]||m[u]||n;return r?a.createElement(h,l(l({ref:t},p),{},{components:r})):a.createElement(h,l({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},903:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_position:2},l="Item Modifiers",o={unversionedId:"items/modifiers",id:"items/modifiers",title:"Item Modifiers",description:"Logic",source:"@site/docs/items/modifiers.md",sourceDirName:"items",slug:"/items/modifiers",permalink:"/docs/items/modifiers",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Types",permalink:"/docs/items/types"},next:{title:"Scrolls",permalink:"/docs/items/scrolls"}},d={},s=[{value:"Logic",id:"logic",level:2},{value:"Modifier Types",id:"modifier-types",level:2},{value:"Health",id:"health",level:3},{value:"Health Recharge Rate",id:"health-recharge-rate",level:3},{value:"Movement Speed",id:"movement-speed",level:3},{value:"Attack Speed",id:"attack-speed",level:3},{value:"Damage Multiplier",id:"damage-multiplier",level:3},{value:"Damage",id:"damage",level:3},{value:"Armor",id:"armor",level:3},{value:"Strength",id:"strength",level:3},{value:"Intelligence",id:"intelligence",level:3},{value:"Vitality",id:"vitality",level:3},{value:"Dexterity",id:"dexterity",level:3},{value:"Experience Gained",id:"experience-gained",level:3},{value:"Skill Gained",id:"skill-gained",level:3},{value:"Gold Find",id:"gold-find",level:3},{value:"Magic Find",id:"magic-find",level:3},{value:"Modifier Value Adjustments",id:"modifier-value-adjustments",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"item-modifiers"},"Item Modifiers"),(0,i.kt)("h2",{id:"logic"},"Logic"),(0,i.kt)("p",null,"Each Item rarity has a maximum number of possible modifiers that can roll upon item generation. Should the same modifier type roll multiple times on a single item, the modifier will appear only once on the item, with the value equal to the sum of the randomized values. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Rarity"),(0,i.kt)("th",{parentName:"tr",align:null},"Maximum rolled modifiers"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Normal"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Magic"),(0,i.kt)("td",{parentName:"tr",align:null},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rare"),(0,i.kt)("td",{parentName:"tr",align:null},"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Set"),(0,i.kt)("td",{parentName:"tr",align:null},"4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Epic"),(0,i.kt)("td",{parentName:"tr",align:null},"5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Unique"),(0,i.kt)("td",{parentName:"tr",align:null},"6")))),(0,i.kt)("h2",{id:"modifier-types"},"Modifier Types"),(0,i.kt)("h3",{id:"health"},"Health"),(0,i.kt)("p",null,"Adds to the maximum health of the character"),(0,i.kt)("h3",{id:"health-recharge-rate"},"Health Recharge Rate"),(0,i.kt)("p",null,"Increases the speed at which health regenerates"),(0,i.kt)("h3",{id:"movement-speed"},"Movement Speed"),(0,i.kt)("p",null,"Increases the character movement speed"),(0,i.kt)("h3",{id:"attack-speed"},"Attack Speed"),(0,i.kt)("p",null,"Increases the attack speed of the character"),(0,i.kt)("h3",{id:"damage-multiplier"},"Damage Multiplier"),(0,i.kt)("h3",{id:"damage"},"Damage"),(0,i.kt)("p",null,"Increases item damage. Typically only rolls on weapons"),(0,i.kt)("h3",{id:"armor"},"Armor"),(0,i.kt)("p",null,"Increases item defense. Typically only rolls on equipment"),(0,i.kt)("h3",{id:"strength"},"Strength"),(0,i.kt)("p",null,"Increases the strength attribute"),(0,i.kt)("h3",{id:"intelligence"},"Intelligence"),(0,i.kt)("p",null,"Increases the intelligence attribute"),(0,i.kt)("h3",{id:"vitality"},"Vitality"),(0,i.kt)("p",null,"Increases the vitality attribute"),(0,i.kt)("h3",{id:"dexterity"},"Dexterity"),(0,i.kt)("p",null,"Increases the dexterity attribute"),(0,i.kt)("h3",{id:"experience-gained"},"Experience Gained"),(0,i.kt)("p",null,"Increases the experience gain"),(0,i.kt)("h3",{id:"skill-gained"},"Skill Gained"),(0,i.kt)("p",null,"Grants points to a specific skill"),(0,i.kt)("h3",{id:"gold-find"},"Gold Find"),(0,i.kt)("p",null,"Increases the amount of gold found"),(0,i.kt)("h3",{id:"magic-find"},"Magic Find"),(0,i.kt)("p",null,"Increases the chance of magic items being found"),(0,i.kt)("h2",{id:"modifier-value-adjustments"},"Modifier Value Adjustments"))}m.isMDXComponent=!0}}]);