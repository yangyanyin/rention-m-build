(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["estate"],{"0794":function(t,e,n){},"0d57":function(t,e,n){},"0e17":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[n("div",{staticClass:"ball-pulse"},[n("div"),n("div"),n("div")])])}],s=(n("2b92"),n("2877")),r={},o=Object(s["a"])(r,i,a,!1,null,"1d44565b",null);e["a"]=o.exports},1039:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("router-link",{staticClass:"a-img",attrs:{to:"/estate/"+t.type+"/"+t.item._id}},[n("rentImg",{staticClass:"img-object",attrs:{url:t.item.image,alt:t.item.title}})],1),n("router-link",{attrs:{to:"/estate/"+t.type+"/"+t.item._id,tag:"strong"}},[t._v(t._s(t.item.title))]),n("p",[t._v(t._s(t.item.addr))])],1)},a=[],s={props:{item:{type:Object,default:function(){return{}}},type:String}},r=s,o=(n("5eff"),n("2877")),u=Object(o["a"])(r,i,a,!1,null,"e9d23e2e",null);e["a"]=u.exports},"17b7":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"business"},[t._l(t.introductionData,(function(t,e){return n("Introduction",{key:e,attrs:{introduction:t}})})),t._m(0)],2)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"advantage mt40"},[i("h3",[t._v("投资商业地产的优势")]),i("ul",{staticClass:"clearfix"},[i("li",[i("img",{attrs:{src:n("a1e4"),alt:""}}),i("p",[t._v("无购买身份限制 "),i("br"),t._v(" 外国人可以买 "),i("br"),t._v(" 无额外印花税")])]),i("li",[i("img",{attrs:{src:n("a92b"),alt:""}}),i("p",[t._v("随时自由买卖 "),i("br"),t._v(" 不受私宅卖方印花税条例限制")])]),i("li",[i("img",{attrs:{src:n("e087"),alt:""}}),i("p",[t._v("银行给予最高商业贷款高达80% "),i("br"),t._v("【附带条件】")])]),i("li",[i("img",{attrs:{src:n("9ce9"),alt:""}}),i("p",[t._v("地理位置极佳 "),i("br"),t._v(" 位于新加坡黄金地段，"),i("br"),t._v("投资回报率可观")])]),i("li",[i("img",{attrs:{src:n("a881"),alt:""}}),i("p",[t._v("商业贷款利率低，租金回报率高 "),i("br"),t._v(" 可以以租养贷，减轻压力")])])])])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"introduction"},[n("h3",[n("img",{staticClass:"img-object",attrs:{src:t.introduction.image,alt:t.introduction.title}}),n("i",[t._v(t._s(t.introduction.title))])]),n("p",[t._v(t._s(t.introduction.des))])])},r=[],o={props:{introduction:Object}},u=o,c=(n("8875"),n("2877")),l=Object(c["a"])(u,s,r,!1,null,"ad4bf38e",null),d=l.exports,f={components:{Introduction:d},data:function(){return{introductionData:[{title:"新加坡商业地产介绍",image:n("6883"),des:"新加坡大型的甲A级办公楼主要为财团或者基金公司控制，一般不对外出售，市场上在中央商务区(CBD)有分层地契办公楼出售，地理位置在市区的办公楼一般都有比较稳定的租客，该类产业投资金额一般为总额$150万新币起，中长期投资潜力是非常良好的。"},{title:"新加坡商业地产",image:n("5053"),des:"店屋，意即楼下为店，楼上为屋，一般由两层到三层组成，属于新加坡历史悠久并独具特色的房子。主要兴建于1840年到1960年之间，此类店屋为政府保留建筑，不可拆除重建，此类店屋以前一楼用来开店，楼上用来居住，随着经济的发展，现在的楼上一般用于办公室用途啦，而一楼继续保留作为商业用途，比方说开餐厅，酒吧等服务行业。不再作为住宅居住，店屋因为作为历史遗留产物，因其“稀缺，独特和尊贵”性质，而受到众多东南亚富豪和欧美财团的青睐。"}]}}},p=f,b=(n("f4af"),Object(c["a"])(p,i,a,!1,null,"d3aaf268",null));e["default"]=b.exports},"28d3":function(t,e,n){},"2b92":function(t,e,n){"use strict";n("0d57")},"38bd":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shop-house"},[0===t.shophouseData.length?n("Loading"):t._e(),t.shophouseData.length>0?t._l(t.shophouseData,(function(t,e){return n("ProductItem",{key:e,attrs:{item:t,type:"shophouse"}})})):t._e()],2)},a=[],s=n("1039"),r=n("0e17"),o={components:{ProductItem:s["a"],Loading:r["a"]},data:function(){return{shophouseData:[]}},mounted:function(){var t=this;this.$httpApi.shophouseApi().then((function(e){200===e.code&&(t.shophouseData=e.data.retention_houses)}))}},u=o,c=(n("833b"),n("2877")),l=Object(c["a"])(u,i,a,!1,null,"133b65e0",null);e["default"]=l.exports},5037:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"building"},[0===t.buildingData.length?n("Loading"):t._e(),t.buildingData.length>0?t._l(t.buildingData,(function(t,e){return n("ProductItem",{key:e,attrs:{item:t,type:"building"}})})):t._e()],2)},a=[],s=n("1039"),r=n("0e17"),o={components:{ProductItem:s["a"],Loading:r["a"]},data:function(){return{buildingData:[]}},mounted:function(){var t=this;this.$httpApi.buildingApi().then((function(e){200===e.code&&(t.buildingData=e.data.office_houses)}))}},u=o,c=(n("d0f2"),n("2877")),l=Object(c["a"])(u,i,a,!1,null,"1abe0830",null);e["default"]=l.exports},5053:function(t,e,n){t.exports=n.p+"img/introduction-banner2.ab810c09.png"},"5eff":function(t,e,n){"use strict";n("a5d8")},6883:function(t,e,n){t.exports=n.p+"img/introduction-banner1.338526bb.png"},7322:function(t,e,n){},"833b":function(t,e,n){"use strict";n("d3a9")},8875:function(t,e,n){"use strict";n("7322")},"9ce9":function(t,e,n){t.exports=n.p+"img/estate-advantage-icon4.49b7da6a.png"},a1e4:function(t,e,n){t.exports=n.p+"img/estate-advantage-icon1.d3a0254f.png"},a5d8:function(t,e,n){},a881:function(t,e,n){t.exports=n.p+"img/estate-advantage-icon5.3ba3a0a7.png"},a92b:function(t,e,n){t.exports=n.p+"img/estate-advantage-icon2.28599c70.png"},bb8b:function(t,e,n){"use strict";n("0794")},c38d:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"estate"},[n("div",{staticClass:"banner"},[n("div",{staticClass:"btn"},[n("router-link",{attrs:{tag:"button",to:"/estate"}},[t._v(" 新加坡商业地产简介")]),n("router-link",{attrs:{tag:"button",to:"/estate/building"}},[t._v(" 分层地契商业办公大楼")]),n("router-link",{attrs:{tag:"button",to:"/estate/shophouse"}},[t._v(" 保留性店屋")])],1)]),n("router-view")],1)},a=[],s={name:"estate"},r=s,o=(n("bb8b"),n("2877")),u=Object(o["a"])(r,i,a,!1,null,"01a5deef",null);e["default"]=u.exports},d0f2:function(t,e,n){"use strict";n("f49b")},d3a9:function(t,e,n){},e087:function(t,e,n){t.exports=n.p+"img/estate-advantage-icon3.5fa685a2.png"},f49b:function(t,e,n){},f4af:function(t,e,n){"use strict";n("28d3")}}]);
//# sourceMappingURL=estate.a07b1065.js.map