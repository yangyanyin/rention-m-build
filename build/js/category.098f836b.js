(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["category"],{1276:function(t,e,i){"use strict";var n=i("d784"),r=i("44e7"),a=i("825a"),o=i("1d80"),c=i("4840"),s=i("8aa5"),l=i("50c4"),u=i("14c3"),d=i("9263"),f=i("d039"),h=[].push,p=Math.min,A=4294967295,g=!f((function(){return!RegExp(A,"y")}));n("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(o(this)),a=void 0===i?A:i>>>0;if(0===a)return[];if(void 0===t)return[n];if(!r(t))return e.call(n,t,a);var c,s,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,f+"g");while(c=d.call(g,n)){if(s=g.lastIndex,s>p&&(u.push(n.slice(p,c.index)),c.length>1&&c.index<n.length&&h.apply(u,c.slice(1)),l=c[0].length,p=s,u.length>=a))break;g.lastIndex===c.index&&g.lastIndex++}return p===n.length?!l&&g.test("")||u.push(""):u.push(n.slice(p)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var r=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r,i):n.call(String(r),e,i)},function(t,r){var o=i(n,t,this,r,n!==e);if(o.done)return o.value;var d=a(t),f=String(this),h=c(d,RegExp),x=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),C=new h(g?d:"^(?:"+d.source+")",v),m=void 0===r?A:r>>>0;if(0===m)return[];if(0===f.length)return null===u(C,f)?[f]:[];var y=0,b=0,k=[];while(b<f.length){C.lastIndex=g?b:0;var w,O=u(C,g?f:f.slice(b));if(null===O||(w=p(l(C.lastIndex+(g?0:b)),f.length))===y)b=s(f,b,x);else{if(k.push(f.slice(y,b)),k.length===m)return k;for(var _=1;_<=O.length-1;_++)if(k.push(O[_]),k.length===m)return k;b=y=w}}return k.push(f.slice(y)),k}]}),!g)},"44e7":function(t,e,i){var n=i("861d"),r=i("c6b6"),a=i("b622"),o=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},"4ddf":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAYAAAAkjjtxAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAALKADAAQAAAABAAAAIgAAAABglnv4AAACCUlEQVRYCb3YwW3CMBQGYJKGOyuwAQOARDfoBqUbtFfgwAFxRZ2AbtBugCoWyArdID2DoO+P4uhBk9jPfsaXOInf88erm1hJendqq9VqcDqdPs/n89tms8l9p019AyVxwB6Pxz3FTNM03c/n85Ekno9N+EmMvsEmScKRRZZlQ7pXSOeMWuEWLIxlxXFfCo5W4Q5sbbxcLnm/33+UVDoK2AVr1FK0OliC9UGrgn2wUrQaOAQrQauANbCu6GCwJtYFHQSOgbWhvcExsV1oL/A9sG1oMfie2Ca0aC/RhKU31S9tGV9M8hhHbJyq3V7PGdyGJfCU9rcfsdE0zzuK8eBSEQs2R47D4ZCPx+MfqsaTS07JGBQDRUGMFeyCNZPHQHMs5rEuCVo7W775xpqtlkFZWYM1R83lcYvFHJ0VXiwWO8LODMaGNeM0Kt2ERf5WsC9WA92GbQWHYkPQXdhGsBbWB23D/gNrYyVoF+wVOBaWoyeTyZA/ccw9VyzGl4+12FhMRB9PZoR9Rp83CRZx2S0WF+nx9RryOQk5eFsul3j77fg19KVYxKSE+0aHN/qctA35nMRzVXlUsMhbbi/x5yLkbdKCfgyuFxwg6VMFB7QMPihmwON8Kmvi6/1wC9qMUzuGYIGo33Qar1PbrwrFXoFxEhOtgYWxXhI4Ma36rx6Zc4Vjvl6vvxTy9P4AWtoIEPSwuVwAAAAASUVORK5CYII="},"765a":function(t,e,i){},a093:function(t,e,i){"use strict";i("765a")},a15b:function(t,e,i){"use strict";var n=i("23e7"),r=i("44ad"),a=i("fc6a"),o=i("a640"),c=[].join,s=r!=Object,l=o("join",",");n({target:"Array",proto:!0,forced:s||!l},{join:function(t){return c.call(a(this),void 0===t?",":t)}})},a434:function(t,e,i){"use strict";var n=i("23e7"),r=i("23cb"),a=i("a691"),o=i("50c4"),c=i("7b0b"),s=i("65f0"),l=i("8418"),u=i("1dde"),d=i("ae40"),f=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,A=Math.min,g=9007199254740991,x="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!h},{splice:function(t,e){var i,n,u,d,f,h,v=c(this),C=o(v.length),m=r(t,C),y=arguments.length;if(0===y?i=n=0:1===y?(i=0,n=C-m):(i=y-2,n=A(p(a(e),0),C-m)),C+i-n>g)throw TypeError(x);for(u=s(v,n),d=0;d<n;d++)f=m+d,f in v&&l(u,d,v[f]);if(u.length=n,i<n){for(d=m;d<C-n;d++)f=d+n,h=d+i,f in v?v[h]=v[f]:delete v[h];for(d=C;d>C-n+i;d--)delete v[d-1]}else if(i>n)for(d=C-n;d>m;d--)f=d+n-1,h=d+i-1,f in v?v[h]=v[f]:delete v[h];for(d=0;d<i;d++)v[d+m]=arguments[d+2];return v.length=C-n+i,u}})},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,i){var n=i("83ab"),r=i("d039"),a=i("5135"),o=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(a(c,t))return c[t];e||(e={});var i=[][t],l=!!a(e,"ACCESSORS")&&e.ACCESSORS,u=a(e,0)?e[0]:s,d=a(e,1)?e[1]:void 0;return c[t]=!!i&&!r((function(){if(l&&!n)return!0;var t={length:-1};l?o(t,1,{enumerable:!0,get:s}):t[1]=1,i.call(t,u,d)}))}},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"pat-infinite-scroll",rawName:"v-pat-infinite-scroll",value:t.getProductList,expression:"getProductList"}],staticClass:"category",attrs:{"pat-infinite-scroll-distance":"450"}},[i("SearchBox"),t.total<=0?i("Loading"):[i("Filters",{attrs:{category:t.breadcrumb[0].name}}),i("ProductList",{attrs:{productData:t.productData,total:t.total}}),t.pageLoading?i("Loading"):t._e()]],2)},r=[],a=(i("99af"),i("b0c0"),i("50b3")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter"},[t.showTips?n("div",{staticClass:"tips"},[n("p",[t._v("全岛各地段海量租赁房源，系统自动于每日上午9时采集、更新房源信息，故无法做到全部房源数据实时同步展示。如有需求，请联系我们专业的房产顾问，最快24小时内安排现场看房!")])]):t._e(),n("div",{staticClass:"type"},[n("span",{on:{click:function(e){return t.typeClick("region")}}},[t._v("地区")]),n("span",{on:{click:function(e){return t.typeClick("area")}}},[t._v("面积")]),n("span",{on:{click:function(e){return t.typeClick("price")}}},[t._v("价格")]),n("span",{on:{click:function(e){return t.typeClick("house")}}},[t._v("户型")])]),t.typeTitle?n("div",{staticClass:"down-list"},[n("div",{staticClass:"bg",on:{click:function(e){return t.typeClick("")}}}),n("div",{staticClass:"content"},[n("span",{class:{active:t.filterClickItem[t.typeTitle].length<=0}},[t._v("全部")]),t._l(t.filterData[t.typeTitle],(function(e,i){return n("span",{key:i,class:{active:t.filterClickItem[t.typeTitle]&&t.filterClickItem[t.typeTitle].indexOf(e.id)>=0},attrs:{"data-id":e.id},on:{click:function(i){return t.filterClick(t.typeTitle,e.id)}}},[t._v(" "+t._s(e.text)+" ")])})),n("div",{staticClass:"btn"},[n("i",{on:{click:t.clearFilter}},[n("img",{attrs:{src:i("4ddf"),alt:"清除条件"}}),t._v("清除条件")]),n("button",{on:{click:t.confirmJumpLink}},[t._v("确定")])])],2)]):t._e()])},c=[],s=(i("c975"),i("a15b"),i("a434"),i("ac1f"),i("1276"),{data:function(){return{typeTitle:"",filterResult:{},filterLink:"",filterClickItem:{region:[],area:[],price:[],house:[]}}},props:{category:String},computed:{showTips:function(){return"renting"===this.$route.params.name},filterData:function(){var t={region:[{text:"东部",id:"east"},{text:"西部",id:"west"},{text:"市区",id:"urban"},{text:"中部",id:"middle"},{text:"南部",id:"south"},{text:"北部",id:"north"},{text:"东北部",id:"east_north"},{text:"其他地区",id:"other"}],price:[{text:"100万以下",id:"1"},{text:"100万-200万",id:"2"},{text:"200万-500万",id:"3"},{text:"500万以上",id:"4"}],area:[{text:"50㎡以下",id:"1"},{text:"50㎡-70㎡",id:"2"},{text:"70㎡-100㎡",id:"3"},{text:"100㎡-150㎡",id:"4"},{text:"150㎡以上",id:"5"}],house:[{text:"一卧室",id:"1"},{text:"一厅+书房",id:"6"},{text:"一室一厅",id:"2"},{text:"一室一厅+书房",id:"3"},{text:"两室一厅",id:"4"},{text:"两室一厅+书房",id:"5"},{text:"三室一厅",id:"10"},{text:"三室一厅+书房",id:"11"},{text:"四室一厅",id:"7"},{text:"四室一厅+书房",id:"8"},{text:"顶层复式楼",id:"9"}]};return"狮城租房"===this.category&&(t.price=[{text:"500-2000",id:"1"},{text:"2000-3000",id:"2"},{text:"3000-5000",id:"3"},{text:"5000-8000",id:"4"},{text:"8000以上",id:"5"}],t.house=[{text:"studio",id:"1"},{text:"1卧室",id:"2"},{text:"2卧室",id:"3"},{text:"3卧室",id:"4"},{text:"4卧室",id:"5"},{text:"5卧室",id:"6"},{text:"独栋洋房",id:"7"},{text:"半独栋洋房",id:"8"}]),t}},methods:{typeClick:function(t){this.typeTitle=t},filterClick:function(t,e){this.filterClickItem[t]&&this.filterClickItem[t].indexOf(e)>=0?this.filterClickItem[t].splice(this.filterClickItem[t].indexOf(e),1):this.filterClickItem[t].push(e)},confirmJumpLink:function(){var t={};for(var e in this.filterClickItem)t[e]=this.filterClickItem[e].join(",");this.$router.push({query:t})},clearFilter:function(){this.filterClickItem={region:[],area:[],price:[],house:[]}}},mounted:function(){var t=this.$route.query;if(t)for(var e in t)t[e].length>0&&(this.filterClickItem[e]=t[e].split(","))}}),l=s,u=(i("a093"),i("2877")),d=Object(u["a"])(l,o,c,!1,null,"514f26c7",null),f=d.exports,h=i("828e"),p=i("0e17"),A={name:"category",components:{SearchBox:a["a"],Filters:f,ProductList:h["a"],Loading:p["a"]},data:function(){return{productData:[],total:0,page:1,pageLoading:!1,onMore:!0}},computed:{breadcrumb:function(){var t={"new house":{url:"/c/new-house",name:"新楼盘",api:"new_house"},renting:{url:"/c/renting",name:"狮城租房",api:"rented_house"},"second hand":{url:"/c/second-hand",name:"二手公寓",api:"second_hand_house"}};return[t[this.$route.name]]}},methods:{getProductList:function(){var t=this;if(this.onMore){this.onMore=!1;var e=this.$route.query.region,i=this.$route.query.house,n=this.$route.query.price,r=this.$route.query.area,a={page:this.page,price_index:n,area_index:r,house_index:i,region_index:e,size:10,api_url:this.breadcrumb[0].api};this.pageLoading=!0,this.$httpApi.categoryListApi(a).then((function(e){if(200===e.code){var i=e.data.new_houses||e.data.second_hand_houses||e.data.rented_houses;t.page++,t.productData=t.productData.concat(i),t.total=e.data.total,t.pageLoading=!1,10===i.length&&(t.onMore=!0)}}))}}},mounted:function(){this.getProductList()}},g=A,x=Object(u["a"])(g,n,r,!1,null,null,null);e["default"]=x.exports},c975:function(t,e,i){"use strict";var n=i("23e7"),r=i("4d64").indexOf,a=i("a640"),o=i("ae40"),c=[].indexOf,s=!!c&&1/[1].indexOf(1,-0)<0,l=a("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:s||!l||!u},{indexOf:function(t){return s?c.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=category.098f836b.js.map