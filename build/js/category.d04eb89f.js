(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["category"],{"065e":function(t,e,i){},"0d19":function(t,e,i){t.exports=i.p+"img/vr_icon.1a28b5dc.gif"},1276:function(t,e,i){"use strict";var n=i("d784"),r=i("44e7"),a=i("825a"),c=i("1d80"),o=i("4840"),s=i("8aa5"),u=i("50c4"),l=i("14c3"),d=i("9263"),f=i("d039"),p=[].push,h=Math.min,v=4294967295,g=!f((function(){return!RegExp(v,"y")}));n("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(c(this)),a=void 0===i?v:i>>>0;if(0===a)return[];if(void 0===t)return[n];if(!r(t))return e.call(n,t,a);var o,s,u,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,f+"g");while(o=d.call(g,n)){if(s=g.lastIndex,s>h&&(l.push(n.slice(h,o.index)),o.length>1&&o.index<n.length&&p.apply(l,o.slice(1)),u=o[0].length,h=s,l.length>=a))break;g.lastIndex===o.index&&g.lastIndex++}return h===n.length?!u&&g.test("")||l.push(""):l.push(n.slice(h)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var r=c(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r,i):n.call(String(r),e,i)},function(t,r){var c=i(n,t,this,r,n!==e);if(c.done)return c.value;var d=a(t),f=String(this),p=o(d,RegExp),m=d.unicode,x=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),A=new p(g?d:"^(?:"+d.source+")",x),y=void 0===r?v:r>>>0;if(0===y)return[];if(0===f.length)return null===l(A,f)?[f]:[];var _=0,b=0,C=[];while(b<f.length){A.lastIndex=g?b:0;var k,w=l(A,g?f:f.slice(b));if(null===w||(k=h(u(A.lastIndex+(g?0:b)),f.length))===_)b=s(f,b,m);else{if(C.push(f.slice(_,b)),C.length===y)return C;for(var I=1;I<=w.length-1;I++)if(C.push(w[I]),C.length===y)return C;b=_=k}}return C.push(f.slice(_)),C}]}),!g)},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"2c0a":function(t,e,i){"use strict";i("9992")},"386e":function(t,e,i){},"44e7":function(t,e,i){var n=i("861d"),r=i("c6b6"),a=i("b622"),c=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==r(t))}},"4ddf":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAYAAAAkjjtxAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAALKADAAQAAAABAAAAIgAAAABglnv4AAACCUlEQVRYCb3YwW3CMBQGYJKGOyuwAQOARDfoBqUbtFfgwAFxRZ2AbtBugCoWyArdID2DoO+P4uhBk9jPfsaXOInf88erm1hJendqq9VqcDqdPs/n89tms8l9p019AyVxwB6Pxz3FTNM03c/n85Ekno9N+EmMvsEmScKRRZZlQ7pXSOeMWuEWLIxlxXFfCo5W4Q5sbbxcLnm/33+UVDoK2AVr1FK0OliC9UGrgn2wUrQaOAQrQauANbCu6GCwJtYFHQSOgbWhvcExsV1oL/A9sG1oMfie2Ca0aC/RhKU31S9tGV9M8hhHbJyq3V7PGdyGJfCU9rcfsdE0zzuK8eBSEQs2R47D4ZCPx+MfqsaTS07JGBQDRUGMFeyCNZPHQHMs5rEuCVo7W775xpqtlkFZWYM1R83lcYvFHJ0VXiwWO8LODMaGNeM0Kt2ERf5WsC9WA92GbQWHYkPQXdhGsBbWB23D/gNrYyVoF+wVOBaWoyeTyZA/ccw9VyzGl4+12FhMRB9PZoR9Rp83CRZx2S0WF+nx9RryOQk5eFsul3j77fg19KVYxKSE+0aHN/qctA35nMRzVXlUsMhbbi/x5yLkbdKCfgyuFxwg6VMFB7QMPihmwON8Kmvi6/1wC9qMUzuGYIGo33Qar1PbrwrFXoFxEhOtgYWxXhI4Ma36rx6Zc4Vjvl6vvxTy9P4AWtoIEPSwuVwAAAAASUVORK5CYII="},"4e86":function(t,e,i){},"50b3":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"category-search"},[i("div",{staticClass:"search-box"},[i("SearchBar")],1)])},r=[],a=i("efa1"),c={components:{SearchBar:a["a"]},computed:{}},o=c,s=(i("a80e"),i("2c0a"),i("2877")),u=Object(s["a"])(o,n,r,!1,null,"076bc702",null);e["a"]=u.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),r=i("5899"),a="["+r+"]",c=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),s=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(c,"")),2&t&&(i=i.replace(o,"")),i}};t.exports={start:s(1),end:s(2),trim:s(3)}},"5c7a":function(t,e,i){"use strict";i("bda7")},7156:function(t,e,i){var n=i("861d"),r=i("d2bb");t.exports=function(t,e,i){var a,c;return r&&"function"==typeof(a=e.constructor)&&a!==i&&n(c=a.prototype)&&c!==i.prototype&&r(t,c),t}},7608:function(t,e,i){"use strict";i("4e86")},"828e":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-list"},[0===t.total?i("NoResult",{attrs:{text:"没有匹配结果！"}}):t._l(t.productData,(function(t,e){return i("ProductItem",{key:e,attrs:{item:t}})}))],2)},r=[],a=(i("b0c0"),i("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("router-link",{staticClass:"a-img",attrs:{to:t.routerLink+t.item._id}},[n("rentImg",{staticClass:"img-object",attrs:{url:t.item.image,alt:t.item.title}})],1),n("router-link",{attrs:{to:t.routerLink+t.item._id,tag:"h3"}},[t._v(t._s(t.item.title))]),n("p",{staticClass:"type"},["renting"===t.type?[n("i",[t._v(t._s(t.item.house_model[0])+" "+t._s(t.item.area))])]:[n("i",[t._v(t._s(t.item.house_types[0].type)+" / "+t._s(t.item.house_types[0].area))])]],2),n("div",{staticClass:"price"},[t._v(" "+t._s(t.item.price)+" "),n("i",[t._v(t._s(t.priceType))])]),t.item.vr_link?n("a",{staticClass:"vr",attrs:{href:t.item.vr_link,target:"_blank"}},[n("img",{attrs:{src:i("0d19")}}),t._v(" VR看房 ")]):t._e()],1)}),c=[],o=(i("ac1f"),i("5319"),i("841c"),{props:{item:Object},computed:{priceType:function(){return"new house"===this.$route.name?"万起":"second hand"===this.$route.name?"万":"/月"},routerLink:function(){var t={"new house":"/c/new-house/",renting:"/c/renting/","second hand":"/c/second-hand/"};return this.$route.params.search?t[this.$route.params.search.replace("-"," ")]||{}:[t[this.$route.name]]},type:function(){return this.$route.name}}}),s=o,u=(i("bf51"),i("2877")),l=Object(u["a"])(s,a,c,!1,null,"31c36598",null),d=l.exports,f=i("e02f"),p={components:{ProductItem:d,NoResult:f["a"]},props:{productData:Array,total:Number},data:function(){return{recommendList:[]}},computed:{recommendType:function(){var t={"second hand":{title:"二手房推荐",type:"second_hand_house",link:"/c/second-hand/"},"new house":{title:"新楼盘推荐",type:"new_house",link:"/c/new-house/"},renting:{title:"租房推荐",type:"rented_house",link:"/c/renting/"}};return t[this.$route.name]}},mounted:function(){}},h=p,v=Object(u["a"])(h,n,r,!1,null,null,null);e["a"]=v.exports},"841c":function(t,e,i){"use strict";var n=i("d784"),r=i("825a"),a=i("1d80"),c=i("129f"),o=i("14c3");n("search",1,(function(t,e,i){return[function(e){var i=a(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,i):new RegExp(e)[t](String(i))},function(t){var n=i(e,t,this);if(n.done)return n.value;var a=r(t),s=String(this),u=a.lastIndex;c(u,0)||(a.lastIndex=0);var l=o(a,s);return c(a.lastIndex,u)||(a.lastIndex=u),null===l?-1:l.index}]}))},9992:function(t,e,i){},a15b:function(t,e,i){"use strict";var n=i("23e7"),r=i("44ad"),a=i("fc6a"),c=i("a640"),o=[].join,s=r!=Object,u=c("join",",");n({target:"Array",proto:!0,forced:s||!u},{join:function(t){return o.call(a(this),void 0===t?",":t)}})},a434:function(t,e,i){"use strict";var n=i("23e7"),r=i("23cb"),a=i("a691"),c=i("50c4"),o=i("7b0b"),s=i("65f0"),u=i("8418"),l=i("1dde"),d=i("ae40"),f=l("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var i,n,l,d,f,p,x=o(this),A=c(x.length),y=r(t,A),_=arguments.length;if(0===_?i=n=0:1===_?(i=0,n=A-y):(i=_-2,n=v(h(a(e),0),A-y)),A+i-n>g)throw TypeError(m);for(l=s(x,n),d=0;d<n;d++)f=y+d,f in x&&u(l,d,x[f]);if(l.length=n,i<n){for(d=y;d<A-n;d++)f=d+n,p=d+i,f in x?x[p]=x[f]:delete x[p];for(d=A;d>A-n+i;d--)delete x[d-1]}else if(i>n)for(d=A-n;d>y;d--)f=d+n-1,p=d+i-1,f in x?x[p]=x[f]:delete x[p];for(d=0;d<i;d++)x[d+y]=arguments[d+2];return x.length=A-n+i,l}})},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},a80e:function(t,e,i){"use strict";i("386e")},a9e3:function(t,e,i){"use strict";var n=i("83ab"),r=i("da84"),a=i("94ca"),c=i("6eeb"),o=i("5135"),s=i("c6b6"),u=i("7156"),l=i("c04e"),d=i("d039"),f=i("7c73"),p=i("241c").f,h=i("06cf").f,v=i("9bf2").f,g=i("58a8").trim,m="Number",x=r[m],A=x.prototype,y=s(f(A))==m,_=function(t){var e,i,n,r,a,c,o,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(i=u.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+u}for(a=u.slice(2),c=a.length,o=0;o<c;o++)if(s=a.charCodeAt(o),s<48||s>r)return NaN;return parseInt(a,n)}return+u};if(a(m,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var b,C=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof C&&(y?d((function(){A.valueOf.call(i)})):s(i)!=m)?u(new x(_(e)),i,C):_(e)},k=n?p(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;k.length>w;w++)o(x,b=k[w])&&!o(C,b)&&v(C,b,h(x,b));C.prototype=A,A.constructor=C,c(r,m,C)}},ae40:function(t,e,i){var n=i("83ab"),r=i("d039"),a=i("5135"),c=Object.defineProperty,o={},s=function(t){throw t};t.exports=function(t,e){if(a(o,t))return o[t];e||(e={});var i=[][t],u=!!a(e,"ACCESSORS")&&e.ACCESSORS,l=a(e,0)?e[0]:s,d=a(e,1)?e[1]:void 0;return o[t]=!!i&&!r((function(){if(u&&!n)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:s}):t[1]=1,i.call(t,l,d)}))}},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"pat-infinite-scroll",rawName:"v-pat-infinite-scroll",value:t.getProductList,expression:"getProductList"}],staticClass:"category",attrs:{"pat-infinite-scroll-distance":"450"}},[i("SearchBox"),t.total<=0?i("Loading"):[i("Filters",{attrs:{category:t.breadcrumb[0].name}}),i("ProductList",{attrs:{productData:t.productData,total:t.total}}),t.pageLoading?i("Loading"):t._e()]],2)},r=[],a=(i("99af"),i("b0c0"),i("50b3")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter"},[t.showTips?n("div",{staticClass:"tips"},[n("p",[t._v("全岛各地段海量租赁房源，系统自动于每日上午9时采集、更新房源信息，故无法做到全部房源数据实时同步展示。如有需求，请联系我们专业的房产顾问，最快24小时内安排现场看房!")])]):t._e(),n("div",{staticClass:"type"},[n("span",{on:{click:function(e){return t.typeClick("region")}}},[t._v("地区")]),n("span",{on:{click:function(e){return t.typeClick("area")}}},[t._v("面积")]),n("span",{on:{click:function(e){return t.typeClick("price")}}},[t._v("价格")]),n("span",{on:{click:function(e){return t.typeClick("house")}}},[t._v("户型")])]),t.typeTitle?n("div",{staticClass:"down-list"},[n("div",{staticClass:"bg",on:{click:function(e){return t.typeClick("")}}}),n("div",{staticClass:"content"},[n("span",{class:{active:t.filterClickItem[t.typeTitle].length<=0},on:{click:function(e){return t.filterClick(t.typeTitle,"all")}}},[t._v(" 全部 ")]),t._l(t.filterData[t.typeTitle],(function(e,i){return n("span",{key:i,class:{active:t.filterClickItem[t.typeTitle]&&t.filterClickItem[t.typeTitle].indexOf(e.id)>=0},attrs:{"data-id":e.id},on:{click:function(i){return t.filterClick(t.typeTitle,e.id)}}},[t._v(" "+t._s(e.text)+" ")])})),n("div",{staticClass:"btn"},[n("i",{on:{click:t.clearFilter}},[n("img",{attrs:{src:i("4ddf"),alt:"清除条件"}}),t._v("清除条件")]),n("button",{on:{click:t.confirmJumpLink}},[t._v("确定")])])],2)]):t._e()])},o=[],s=(i("c975"),i("a15b"),i("a434"),i("ac1f"),i("1276"),{data:function(){return{typeTitle:"",filterResult:{},filterLink:"",filterClickItem:{region:[],area:[],price:[],house:[]}}},props:{category:String},computed:{showTips:function(){return"renting"===this.$route.params.name},filterData:function(){var t={region:[{text:"东部",id:"east"},{text:"西部",id:"west"},{text:"市区",id:"urban"},{text:"中部",id:"middle"},{text:"南部",id:"south"},{text:"北部",id:"north"},{text:"东北部",id:"east_north"},{text:"其他地区",id:"other"}],price:[{text:"100万以下",id:"1"},{text:"100万-200万",id:"2"},{text:"200万-500万",id:"3"},{text:"500万以上",id:"4"}],area:[{text:"50㎡以下",id:"1"},{text:"50㎡-70㎡",id:"2"},{text:"70㎡-100㎡",id:"3"},{text:"100㎡-150㎡",id:"4"},{text:"150㎡以上",id:"5"}],house:[{text:"一卧室",id:"1"},{text:"一厅+书房",id:"6"},{text:"一室一厅",id:"2"},{text:"一室一厅+书房",id:"3"},{text:"两室一厅",id:"4"},{text:"两室一厅+书房",id:"5"},{text:"三室一厅",id:"10"},{text:"三室一厅+书房",id:"11"},{text:"四室一厅",id:"7"},{text:"四室一厅+书房",id:"8"},{text:"顶层复式楼",id:"9"}]};return"狮城租房"===this.category&&(t.price=[{text:"500-2000",id:"1"},{text:"2000-3000",id:"2"},{text:"3000-5000",id:"3"},{text:"5000-8000",id:"4"},{text:"8000以上",id:"5"}],t.house=[{text:"studio",id:"1"},{text:"1卧室",id:"2"},{text:"2卧室",id:"3"},{text:"3卧室",id:"4"},{text:"4卧室",id:"5"},{text:"5卧室",id:"6"},{text:"独栋洋房",id:"7"},{text:"半独栋洋房",id:"8"}]),t}},methods:{typeClick:function(t){this.typeTitle=t},filterClick:function(t,e){"all"!==e?this.filterClickItem[t]&&this.filterClickItem[t].indexOf(e)>=0?this.filterClickItem[t].splice(this.filterClickItem[t].indexOf(e),1):this.filterClickItem[t].push(e):this.filterClickItem[t]=[]},confirmJumpLink:function(){var t={};for(var e in this.filterClickItem)t[e]=this.filterClickItem[e].join(",");this.typeTitle="",this.$router.push({query:t})},clearFilter:function(){this.filterClickItem={region:[],area:[],price:[],house:[]}}},mounted:function(){var t=this.$route.query;if(t)for(var e in t)t[e].length>0&&(this.filterClickItem[e]=t[e].split(","))}}),u=s,l=(i("5c7a"),i("2877")),d=Object(l["a"])(u,c,o,!1,null,"45896428",null),f=d.exports,p=i("828e"),h=i("0e17"),v={name:"category",components:{SearchBox:a["a"],Filters:f,ProductList:p["a"],Loading:h["a"]},data:function(){return{productData:[],total:0,page:1,pageLoading:!1,onMore:!0}},computed:{breadcrumb:function(){var t={"new house":{url:"/c/new-house",name:"新楼盘",api:"new_house"},renting:{url:"/c/renting",name:"狮城租房",api:"rented_house"},"second hand":{url:"/c/second-hand",name:"二手公寓",api:"second_hand_house"}};return[t[this.$route.name]]}},methods:{getProductList:function(){var t=this;if(this.onMore){this.onMore=!1;var e=this.$route.query.region,i=this.$route.query.house,n=this.$route.query.price,r=this.$route.query.area,a={page:this.page,price_index:n,area_index:r,house_index:i,region_index:e,size:10,api_url:this.breadcrumb[0].api};this.pageLoading=!0,this.$httpApi.categoryListApi(a).then((function(e){if(200===e.code){var i=e.data.new_houses||e.data.second_hand_houses||e.data.rented_houses;t.page++,t.productData=t.productData.concat(i),t.total=e.data.total,t.pageLoading=!1,10===i.length&&(t.onMore=!0)}}))}}},mounted:function(){this.getProductList()}},g=v,m=Object(l["a"])(g,n,r,!1,null,null,null);e["default"]=m.exports},bda7:function(t,e,i){},bf51:function(t,e,i){"use strict";i("065e")},c975:function(t,e,i){"use strict";var n=i("23e7"),r=i("4d64").indexOf,a=i("a640"),c=i("ae40"),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0,u=a("indexOf"),l=c("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:s||!u||!l},{indexOf:function(t){return s?o.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},e02f:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nothing"},[t._v(" "+t._s(t.text)+" ")])},r=[],a={props:{text:String}},c=a,o=(i("f6e8"),i("2877")),s=Object(o["a"])(c,n,r,!1,null,"bbe953aa",null);e["a"]=s.exports},e5b5:function(t,e,i){},efa1:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-Keyword"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.selectType,expression:"selectType"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectType=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"新楼盘"}},[t._v("新楼盘")]),i("option",{attrs:{value:"二手房"}},[t._v("二手房")]),i("option",{attrs:{value:"租房"}},[t._v("租房")])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.Keyword,expression:"Keyword"}],attrs:{type:"text",placeholder:"输入MRT、小区名、地区名称"},domProps:{value:t.Keyword},on:{input:function(e){e.target.composing||(t.Keyword=e.target.value)}}}),i("button",{on:{click:t.searchClick}},[t._v("搜索")])])},r=[],a=(i("ac1f"),i("841c"),{"新楼盘":"new-house","二手房":"second-hand","租房":"renting"}),c={data:function(){return{selectType:"新楼盘",Keyword:""}},methods:{searchClick:function(){this.$router.push({path:"/search/".concat(a[this.selectType]),query:{keyword:this.Keyword}})}},mounted:function(){for(var t in a)this.$route.params.search===a[t]&&(this.selectType=t)}},o=c,s=(i("7608"),i("2877")),u=Object(s["a"])(o,n,r,!1,null,"94630560",null);e["a"]=u.exports},f6e8:function(t,e,i){"use strict";i("e5b5")}}]);
//# sourceMappingURL=category.d04eb89f.js.map