(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["category-details"],{"0ab5":function(t,e,i){},1148:function(t,e,i){"use strict";var o=i("a691"),n=i("1d80");t.exports="".repeat||function(t){var e=String(n(this)),i="",s=o(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(i+=e);return i}},"1c28":function(t,e,i){"use strict";i("4162")},2174:function(t,e,i){},"245a":function(t,e,i){"use strict";i("d994")},"26da":function(t,e,i){"use strict";i("802a")},"2b66":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mortgage"},[i("h3",[t.isCount?i("span",{on:{click:t.recalculation}}):t._e(),t._v(" "+t._s(t.isCount?"计算结果":"房贷计算")+" "),i("i",{on:{click:t.closeMortgage}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isCount,expression:"!isCount"}],staticClass:"count"},[i("div",{staticClass:"input-box"},[i("i",[t._v("房产价格($)")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.roomTotalPrice,expression:"roomTotalPrice"}],staticClass:"inp",attrs:{type:"text",placeholder:"输入价格"},domProps:{value:t.roomTotalPrice},on:{input:function(e){e.target.composing||(t.roomTotalPrice=e.target.value)}}})]),i("div",{staticClass:"input-box"},[i("i",[t._v("贷款比例")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.loanScale,expression:"loanScale"}],staticClass:"inp",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.loanScale=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"25"}},[t._v("25%")]),i("option",{attrs:{value:"30"}},[t._v("30%")]),i("option",{attrs:{value:"40"}},[t._v("40%")]),i("option",{attrs:{value:"50"}},[t._v("50%")]),i("option",{attrs:{value:"70"}},[t._v("70%")])])]),i("div",{staticClass:"input-box"},[i("i",[t._v("贷款总额($)")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.countLoanPrice,expression:"countLoanPrice"}],staticClass:"inp",attrs:{placeholder:"根据比例自行计算",type:"text",disabled:"disabled"},domProps:{value:t.countLoanPrice},on:{input:function(e){e.target.composing||(t.countLoanPrice=e.target.value)}}})]),i("div",{staticClass:"input-box"},[i("i",[t._v("贷款年利率")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.interestRate,expression:"interestRate"}],staticClass:"inp",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.interestRate=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"2.5"}},[t._v("2.5%")]),i("option",{attrs:{value:"3"}},[t._v("3%")]),i("option",{attrs:{value:"4"}},[t._v("4%")])])]),i("div",{staticClass:"input-box"},[i("i",[t._v("偿还年限")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.years,expression:"years"}],staticClass:"inp",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.years=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"10"}},[t._v("10")]),i("option",{attrs:{value:"20"}},[t._v("20")]),i("option",{attrs:{value:"30"}},[t._v("30")])])]),i("button",{staticClass:"btn",on:{click:t.startCount}},[t._v("开始计算")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isCount,expression:"isCount"}],staticClass:"result"},[i("ul",[i("li",[t._v("首付合计"),i("span",[t._v(t._s(t.countResult.down_payment))])]),i("li",[t._v("贷款金额"),i("span",[t._v(t._s(t.countResult.loan_price))])]),i("li",[t._v("支付利息"),i("span",[t._v(t._s(t.countResult.interest))])]),i("li",[t._v("月均还款"),i("span",[t._v(t._s(t.countResult.repayment))])])]),t._m(0),i("button",{staticClass:"btn",on:{click:function(e){return t.recalculation(1)}}},[t._v("重新计算")])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("本次计算仅作为购房参考，不能作为最终的购房依据。了解更准确的方案，建议"),i("a",[t._v("咨询置业顾问")])])}],s=(i("b680"),{data:function(){return{roomTotalPrice:"",loanScale:"25",interestRate:"2.5",years:10,countResult:{down_payment:"",loan_price:"",interest:"",repayment:""},isCount:!1}},computed:{countLoanPrice:function(){return this.roomTotalPrice>0?1*this.roomTotalPrice*(this.loanScale/100).toFixed(2):""},monthlyPayment:function(){var t=this.interestRate/100,e=12*this.years;return this.countLoanPrice*(t/12)/(1-Math.pow(1+t/12,-e))}},methods:{startCount:function(){this.isCount=this.countResult={down_payment:"$".concat((1*this.roomTotalPrice-this.countLoanPrice).toFixed(2)),loan_price:"$".concat(this.countLoanPrice.toFixed(2)),interest:"$".concat((this.monthlyPayment*this.years*12-this.countLoanPrice).toFixed(2)),repayment:"$".concat(this.monthlyPayment.toFixed(2))}},recalculation:function(t){1===t&&(this.roomTotalPrice="",this.loanScale="25",this.interestRate="2.5",this.years=10),this.isCount=!this.isCount},closeMortgage:function(){this.$emit("closeMortgage")}},mounted:function(){}}),a=s,r=(i("9198"),i("2877")),c=Object(r["a"])(a,o,n,!1,null,"1bb779d9",null);e["a"]=c.exports},"2d53":function(t,e,i){},"30af":function(t,e,i){"use strict";i("2174")},"3bd3":function(t,e,i){"use strict";i("ce40")},"408a":function(t,e,i){var o=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},4162:function(t,e,i){},"50f4":function(t,e,i){"use strict";i("ddc1")},"517c":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"details-side"},[i("h3",[t._v(t._s(t.recommendType.title))]),i("div",{staticClass:"recommend"},t._l(t.recommendList,(function(e,o){return i("div",{key:o,staticClass:"item"},[i("router-link",{staticClass:"a-img",attrs:{to:t.recommendType.link+e._id}},[i("rentImg",{staticClass:"img-object",attrs:{url:e.image,alt:e.title}})],1),i("router-link",{attrs:{to:"/",tag:"strong"}},[t._v(t._s(e.title))]),i("span",[t._v(t._s(e.price)+" "),i("em",[t._v(t._s(t.recommendType.unit))])])],1)})),0),i("Consultant"),t._m(0),i("div",{staticClass:"message"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.message,expression:"fromInfo.message"}],staticClass:"inp text",attrs:{placeholder:"我对这个物业感兴趣，希望得到更多信息"},domProps:{value:t.fromInfo.message},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"message",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.name,expression:"fromInfo.name"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的称呼（必填）"},domProps:{value:t.fromInfo.name},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"name",e.target.value)}}}),t.fromErr.name?i("i",[t._v("请输入您的称呼")]):t._e(),i("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.tel,expression:"fromInfo.tel"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的联系电话（必填）"},domProps:{value:t.fromInfo.tel},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"tel",e.target.value)}}}),t.fromErr.tel?i("i",[t._v("请输入您的联系电话")]):t._e(),i("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.email,expression:"fromInfo.email"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的邮箱地址（必填）"},domProps:{value:t.fromInfo.email},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"email",e.target.value)}}}),t.fromErr.email?i("i",[t._v("请输入您的邮箱地址")]):t._e(),i("p",[i("span",{class:{check:t.fromInfo.protocol},on:{click:t.protocolClick}}),t._v(" 已阅读并同意"),i("router-link",{attrs:{to:"/"}},[t._v("《新加坡看公寓网用户协议》")])],1),t.fromErr.protocol?i("i",{staticClass:"protocol-err"},[t._v("请勾选《新加坡看公寓网用户协议》")]):t._e(),i("button",{on:{click:t.submitInfo}},[t.submitLoad?[t._v("...")]:[t._v("立即咨询")]],2)]),t.submitStatus?i("SubmitSuccess",{on:{close:function(e){t.submitStatus=!1}}}):t._e()],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",[t._v("给TA留言"),i("i",[t._v("提交咨询请求，30分钟内回复")])])}],s=(i("b0c0"),i("570b")),a=i("a34f"),r={components:{Consultant:a["a"],SubmitSuccess:s["a"]},props:{proTitle:String},data:function(){return{recommendList:[],submitStatus:!1,submitLoad:!1,fromInfo:{message:"",name:"",tel:"",email:"",protocol:""},fromErr:{name:!1,tel:!1,email:!1,protocol:!1}}},computed:{recommendType:function(){var t={"second-hand":{title:"二手房推荐",type:"second_hand_house",link:"/c/second-hand/",unit:"万"},"new-house":{title:"新楼盘推荐",type:"new_house",link:"/c/new-house/",unit:"万起"},renting:{title:"租房推荐",type:"renting",link:"/c/renting/",unit:"/月"}};return t[this.$route.params.category]||{title:"房产推荐",type:"new_house",link:"/c/new-house/",unit:"万起"}}},methods:{protocolClick:function(){this.fromInfo.protocol=!this.fromInfo.protocol},submitInfo:function(){var t=this;for(var e in this.fromErr){if(""===this.fromInfo[e])return this.fromErr[e]=!0,!1;this.fromErr[e]=!1}var i={email_title:"房产咨询",advisory_source:this.proTitle,message:this.fromInfo.message,name:this.fromInfo.name,tel:this.fromInfo.tel,email:this.fromInfo.email,protocol:this.fromInfo.protocol};this.submitLoad||(this.submitLoad=!0,this.$httpApi.messageApi(i).then((function(e){if(200===e.code)for(var i in t.submitLoad=!1,t.submitStatus=!0,t.fromInfo)t.fromInfo[i]=""})))}},mounted:function(){var t=this,e={type:this.recommendType.type};this.$httpApi.categoryRecommendApi(e).then((function(e){200===e.code&&(t.recommendList=e.data.recommend)}))}},c=r,l=(i("d23c"),i("2877")),u=Object(l["a"])(c,o,n,!1,null,"7b94cf6d",null);e["a"]=u.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var o=i("1d80"),n=i("5899"),s="["+n+"]",a=RegExp("^"+s+s+"*"),r=RegExp(s+s+"*$"),c=function(t){return function(e){var i=String(o(e));return 1&t&&(i=i.replace(a,"")),2&t&&(i=i.replace(r,"")),i}};t.exports={start:c(1),end:c(2),trim:c(3)}},"68d1":function(t,e,i){"use strict";i("a92a")},7156:function(t,e,i){var o=i("861d"),n=i("d2bb");t.exports=function(t,e,i){var s,a;return n&&"function"==typeof(s=e.constructor)&&s!==i&&o(a=s.prototype)&&a!==i.prototype&&n(t,a),t}},"802a":function(t,e,i){},"80d5":function(t,e,i){"use strict";i("2d53")},9198:function(t,e,i){"use strict";i("0ab5")},a852:function(t,e,i){"use strict";i("f75f")},a92a:function(t,e,i){},a9e3:function(t,e,i){"use strict";var o=i("83ab"),n=i("da84"),s=i("94ca"),a=i("6eeb"),r=i("5135"),c=i("c6b6"),l=i("7156"),u=i("c04e"),p=i("d039"),m=i("7c73"),f=i("241c").f,_=i("06cf").f,v=i("9bf2").f,d=i("58a8").trim,g="Number",h=n[g],y=h.prototype,b=c(m(y))==g,I=function(t){var e,i,o,n,s,a,r,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=d(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+l}for(s=l.slice(2),a=s.length,r=0;r<a;r++)if(c=s.charCodeAt(r),c<48||c>n)return NaN;return parseInt(s,o)}return+l};if(s(g,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var C,T=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof T&&(b?p((function(){y.valueOf.call(i)})):c(i)!=g)?l(new h(I(e)),i,T):I(e)},w=o?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;w.length>x;x++)r(h,C=w[x])&&!r(T,C)&&v(T,C,_(h,C));T.prototype=y,y.constructor=T,a(n,g,T)}},aeea:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"details"},[t.proTitle?i("div",{staticClass:"content"},[t.proBigImages?i("DetailsViewImg",{attrs:{vrLink:t.vrLink,imagesArr:t.proBigImages}}):t._e(),i("div",{staticClass:"name"},[t._l(t.titleTags,(function(e,o){return i("i",{key:o},[t._v(t._s(e))])})),i("h3",[t._v(t._s(t.proTitle))]),t._l(t.houseTags,(function(e,o){return i("span",{key:e+o},[t._v(t._s(e))])}))],2),i("DetailsInfoBase",{attrs:{infoBase:t.infoBase,messageType:t.breadcrumb[0].message_type,type:t.breadcrumb[0].name,proTitle:t.proTitle}}),"狮城租房"!==t.breadcrumb[0].name?[i("DetalsIntroduction",{attrs:{introduction:t.introduction}}),i("DetailsPhoto",{attrs:{photoAll:t.photoAll}}),i("DetailsDetailed",{attrs:{projectDetails:t.projectDetails}}),i("DetailsUnitType",{attrs:{houseTypes:t.houseTypes}})]:[i("DetailsHousingInfo",{attrs:{infoBase:t.infoBase}}),i("DetailsHousingDescribe",{attrs:{facilities:t.surroundingFacilities,community:t.community,introduction:t.introduction,payType:t.payType,price:t.infoBase.price}})],t.coordinate?i("BaiduMap",{attrs:{coordinate:t.coordinate,addr:t.infoBase.addr,title:t.proTitle,mapData:t.mapData}}):t._e(),i("DetailsRecommend",{attrs:{proTitle:t.proTitle}})],2):i("Loading")],1)},n=[],s=(i("a4d3"),i("e01a"),i("d81d"),i("b0c0"),i("2772")),a=i("5315"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShowPhoto?i("div",{staticClass:"photo"},[i("h3",{staticClass:"other-t"},[t._v("房源相册")]),i("div",{staticClass:"list"},[t._l(t.imgSet,(function(e,o,n){return[e&&e.length>0?[i("strong",{key:n},[t._v(t._s(o))]),i("div",{key:"p"+n,staticClass:"image-all"},t._l(e,(function(o,n){return i("span",{key:n},[i("rentImg",{staticClass:"img-object",attrs:{url:o},nativeOn:{click:function(i){return t.viewBigImg(n,e)}}})],1)})),0)]:t._e()]}))],2),t.bigImgArr?i("ImagePopup",{attrs:{bigImgArr:t.bigImgArr,imgIndex:t.imgIndex},on:{closeBigImg:t.viewBigImg}}):t._e()],1):t._e()},c=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"big-img"},[i("div",{staticClass:"content"},[i("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),t._l(t.images,(function(t,e){return i("img",{key:e,staticClass:"img-object",attrs:{src:t,alt:""}})})),0),i("span",{staticClass:"close",on:{click:function(e){return t.closeBigImg("")}}})],1)])},u=[],p=(i("a9e3"),i("ac1f"),i("5319"),i("a7ab")),m=i.n(p),f=(i("7b8d"),i("6a2c"),{components:{VueSlickCarousel:m.a},props:{bigImgArr:Array,imgIndex:Number,type:String},data:function(){return{settings:{accessibility:!1,dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,initialSlide:this.imgIndex,adaptiveHeight:!0}}},computed:{images:function(){var t=[];return this.bigImgArr.map((function(e){t.push(e.replace("http://web.aicassets.com","https://cms.kangongyu.cn"))})),t}},methods:{closeBigImg:function(){this.$emit("closeBigImg",-1)}}}),_=f,v=(i("80d5"),i("30af"),i("2877")),d=Object(v["a"])(_,l,u,!1,null,"134ffe45",null),g=d.exports,h={components:{ImagePopup:g},props:{photoAll:Object},data:function(){return{bigImgArr:"",imgSet:{"效果图":this.photoAll.effect_picture,"样板间":this.photoAll.sample_room,"周边配套":this.photoAll.matching}}},computed:{isShowPhoto:function(){return this.imgSet["效果图"].length>0||this.imgSet["样板间"].length>0||this.imgSet["周边配套"].length>0}},methods:{viewBigImg:function(t,e){this.imgIndex=t,this.bigImgArr=e}}},y=h,b=(i("efc1"),Object(v["a"])(y,r,c,!1,null,"0491ac68",null)),I=b.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detailed"},[i("h3",{staticClass:"other-t"},[t._v("项目详情")]),i("ul",{staticClass:"clearfix"},[i("li",[i("i",[t._v("楼盘名称")]),t._v(" "+t._s(t.projectDetails.name))]),i("li",[i("i",[t._v("房产类型 ")]),t._v(" "+t._s(t.projectDetails.type)+" ")]),i("li",[i("i",[t._v("开发商 ")]),t._v(" "+t._s(t.projectDetails.developer)+" ")]),i("li",[i("i",[t._v("产权 ")]),t._v(" "+t._s(t.projectDetails.property)+" ")]),i("li",[i("i",[t._v("开盘日期 ")]),t._v(" "+t._s(t.projectDetails.start_time?t.projectDetails.start_time.substring(0,7):"")+" ")]),i("li",[i("i",[t._v("预计落成日期 ")]),t._v(" "+t._s(t.projectDetails.finish?t.projectDetails.finish.substring(0,7):"")+" ")]),i("li",[i("i",[t._v("公寓设施 ")]),i("div",t._l(t.projectDetails.facility,(function(e,o){return i("span",{key:o},[t._v(t._s(e))])})),0)])])])},T=[],w={props:{projectDetails:Object}},x=w,k=(i("1c28"),Object(v["a"])(x,C,T,!1,null,"56324ecf",null)),A=k.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"unit-type"},[o("h3",{staticClass:"other-t"},[t._v("户型介绍")]),t._l(t.houseTypes,(function(e,n){return o("div",{key:n,staticClass:"item"},[o("i",{staticClass:"a-img"},[o("rentImg",{staticClass:"img-object",attrs:{url:e.image,alt:e.type},nativeOn:{click:function(e){return t.viewBigImg(n)}}})],1),o("i",{attrs:{tag:"h3"}},[t._v(t._s(e.type))]),o("p",[t._v("参考均价："),o("i",[t._v(t._s(e.average_price))]),t._v("/㎡")]),o("p",[t._v("参考总价："),o("i",[t._v(" "+t._s(e.price)+" ")]),t._v("/套")]),o("span",[t._v(t._s(e.area))]),e.vr_link?o("a",{staticClass:"vr",attrs:{href:e.vr_link,target:"_blank"}},[o("img",{attrs:{src:i("0d19")}}),t._v(" VR看房 ")]):t._e()])})),o("button",{on:{click:t.clickMortgage}},[t._v("房贷计算")]),o("strong",[t._v("免责声明")]),o("em",[t._v("页面所载楼盘内容及数据仅供用户参考和借鉴，最终以开发商实际公示为准，如楼盘信息有误或其他疑义，可进行纠错。")]),t.bigImgArr?o("ImagePopup",{attrs:{bigImgArr:t.bigImgArr,imgIndex:t.imgIndex},on:{closeBigImg:t.viewBigImg}}):t._e(),t.showMortgage?o("DetailsMortgage",{on:{closeMortgage:function(e){t.showMortgage=!1}}}):t._e()],2)},S=[],D=i("2b66"),P={components:{ImagePopup:g,DetailsMortgage:D["a"]},props:{houseTypes:Array},data:function(){return{bigImgArr:"",imgIndex:"",showMortgage:!1}},methods:{viewBigImg:function(t){if(console.log(t>=0),t>=0){var e=[];this.houseTypes.map((function(t){e.push(t.image)})),this.bigImgArr=e}else this.bigImgArr="";this.imgIndex=t},clickMortgage:function(){this.showMortgage=!0}}},E=P,N=(i("a852"),Object(v["a"])(E,B,S,!1,null,"0ba3d557",null)),$=N.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"info-base"},[i("div",{staticClass:"price"},[t._v(" "+t._s(t.infoBase.price)),i("i",[t._v(t._s(t.priceType))]),i("a",{on:{click:t.showAdvisory}},[t._v("变价提醒")])]),"狮城租房"===t.type?[i("p",[t._v("租凭方式："),i("i",[t._v(t._s(t.infoBase.rent_type))])]),i("p",[t._v("房屋类型："),i("i",[t._v(t._s(t.infoBase.house_type))])]),i("p",[t._v("楼层："),i("i",[t._v(t._s(t.infoBase.floor))])])]:[i("p",[t._v("地区位置："),i("i",[t._v(t._s(t.infoBase.region))])]),i("p",[t._v("建筑面积："),i("i",[t._v(t._s(t.infoBase.area))])]),t.infoBase.completion_date?i("p",[t._v("预计落成日期："),i("i",[t._v(t._s(t.infoBase.completion_date.substring(0,7)))])]):t._e(),i("p",[t._v("房产地址："),i("i",[t._v(t._s(t.infoBase.addr))])])],i("p",{staticClass:"traffic"},[t._v(" 交通： "),t.infoBase.traffic.length>0?t._l(t.infoBase.traffic,(function(e,o){return i("span",{key:o,style:{background:e.color}},[t._v(t._s(e.name))])})):[i("i",[t._v("暂无详细信息")])],i("em",[t._v(t._s(t.infoBase.traffic_tips))])],2),t.houseTypes?i("div",{staticClass:"rule clearfix"},t._l(t.houseTypes,(function(e,o,n){return i("ul",{key:n},[i("li",{staticClass:"t"},[t._v(t._s(o))]),t._l(e,(function(e,n){return i("li",{key:n,class:{p:"售价"===o}},[t._v(t._s(e))])}))],2)})),0):t._e(),t.showAdvisoryType?i("AdvisoryPopup",{attrs:{proTitle:t.proTitle,type:t.messageType,page:"product_details"},on:{closePopuo:t.showAdvisory}}):t._e()],2)},L=[],M=i("7761"),R={components:{AdvisoryPopup:M["a"]},props:{infoBase:Object,type:String,proTitle:String,messageType:String},data:function(){return{showAdvisoryType:!1}},computed:{houseTypes:function(){var t=this.infoBase.house_types,e=!1;if(t)for(var i={"户型":[],"面积㎡":[],"售价":[]},o=0;o<t.length;o++)i["户型"].push(t[o].type),i["面积㎡"].push(t[o].area),i["售价"].push(t[o].price);return e},priceType:function(){return"new-house"===this.$route.params.category?"万起":"second-hand"===this.$route.params.category?"万":"/月"}},methods:{showAdvisory:function(){this.showAdvisoryType=!this.showAdvisoryType}}},F=R,O=(i("245a"),Object(v["a"])(F,j,L,!1,null,"81bba868",null)),V=O.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"housing-info"},[i("h3",{staticClass:"other-t"},[t._v("房屋信息")]),i("strong",[t._v("基本信息")]),i("ul",[i("li",[t._v("面积 "),i("i",[t._v(t._s(t.infoBase.area))])]),i("li",[t._v("入住 "),i("i",[t._v(t._s(t.infoBase.live_time>0?"随时入住":"无"))])]),i("li",[t._v("楼层 "),i("i",[t._v(t._s(t.infoBase.floor))])]),i("li",[t._v("电梯 "),i("i",[t._v(t._s(t.infoBase.has_elevator>0?"有":"无"))])]),i("li",[t._v("车位 "),i("i",[t._v(t._s(t.infoBase.has_parking>0?"有":"无"))])]),i("li",[t._v("用水 "),i("i",[t._v(t._s(t.infoBase.water>0?"民水":"商业用水"))])]),i("li",[t._v("用电 "),i("i",[t._v(t._s(t.infoBase.electricity>0?"民电":"商业用电"))])]),i("li",[t._v("燃气 "),i("i",[t._v(t._s(t.infoBase.has_gas>0?"有":"无"))])]),i("li",[t._v("租期 "),i("i",[t._v(t._s(t.lease[t.infoBase.lease]))])]),i("li",[t._v("看房 "),i("i",[t._v(t._s(t.infoBase.checking_house>0?"随时看房":"无"))])])]),i("strong",[t._v("配套设施")]),i("Conveniences",{attrs:{facilities:t.infoBase.facilities}})],1)},U=[],G=i("61ca"),J={components:{Conveniences:G["a"]},props:{infoBase:Object},data:function(){return{lease:["半年","一年以上","两年以上","三年以上"]}}},X=J,Y=(i("dd4c"),i("3bd3"),Object(v["a"])(X,H,U,!1,null,"4247c87d",null)),W=Y.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"housing-info"},[i("h3",{staticClass:"other-t"},[t._v("房屋描述")]),i("strong",[t._v("户型介绍")]),i("p",{domProps:{innerHTML:t._s(t.introduction)}},[t._v(t._s(t.introduction))]),i("strong",[t._v("周边配套")]),i("p",{domProps:{innerHTML:t._s(t.facilities)}}),i("strong",[t._v("小区介绍")]),t._l(t.community,(function(e,o){return i("span",{key:o},[t._v(t._s(e))])})),i("strong",[t._v("租金")]),i("p",[t._v("付款方式："+t._s(t.payType))]),i("p",[t._v("租金（新元/月）："+t._s(t.price))]),i("h4",[t._v("免责声明")]),i("em",[t._v("页面所载楼盘内容及数据仅供用户参考和借鉴，最终以开发商实际公示为准，如楼盘信息有误或其他疑义，可进行纠错。")])],2)},z=[],K={props:{facilities:Array,community:Array,introduction:String,payType:String,price:String}},Q=K,Z=(i("50f4"),Object(v["a"])(Q,q,z,!1,null,"4eabad05",null)),tt=Z.exports,et=i("517c"),it=i("d913"),ot=i("0e17"),nt={name:"category-detail",components:{DetailsViewImg:s["a"],DetailsPhoto:I,DetailsDetailed:A,DetailsUnitType:$,DetalsIntroduction:a["a"],DetailsInfoBase:V,DetailsHousingInfo:W,DetailsHousingDescribe:tt,DetailsRecommend:et["a"],BaiduMap:it["a"],Loading:ot["a"]},data:function(){return{proTitle:"",proBigImages:"",infoBase:{},introduction:"",photoAll:{},projectDetails:{},houseTypes:"",houseTags:[],titleTags:[],vrLink:"",coordinate:"",mapData:"",surroundingFacilities:"",community:"",payType:""}},computed:{breadcrumb:function(){var t={"new-house":{url:"/c/new-house",name:"新楼盘",api:"new_house",message_type:"购买新楼盘"},renting:{url:"/c/renting",name:"狮城租房",api:"rented_house",message_type:"租房"},"second-hand":{url:"/c/second-hand",name:"二手公寓",api:"second_hand_house",message_type:"二手公寓"}};return[t[this.$route.params.category],{url:this.$route.path,name:this.proTitle}]}},mounted:function(){var t=this,e={id:this.$route.params.id,api_url:this.breadcrumb[0].api};this.$httpApi.productDetailApi(e).then((function(e){if(200===e.code){var i=e.data.new_house||e.data.second_hand_house;t.proTitle=i.title,t.proBigImages=i.effect_images||i.images,t.introduction=i.description,t.houseTypes=i.house_types,t.houseTags=i.house_tags,t.titleTags=i.title_tags,t.vrLink=i.vr_link,t.mapData=i.map,t.coordinate=i.coordinate,t.surroundingFacilities=i.surrounding_facilities,t.community=i.community,t.payType=i.pay_type,t.infoBase={region:i.region_ch?i.region_ch[0]:"",area:i.area,completion_date:i.finish_at,traffic:i.traffic,traffic_tips:i.traffic_tips,price:i.price,addr:i.addr,house_type:i.house_type,house_types:i.house_types,rent_type:i.rent_type,floor:i.floor,facilities:i.facilities},t.photoAll={effect_picture:i.effect_images,sample_room:i.demo_images,matching:i.surrounding_images},t.projectDetails={name:i.name,type:i.type,developer:i.developer,property:i.property,start_time:i.start_at,finish:i.finish_at,facility:i.facilities},console.log(e.data)}}))}},st=nt,at=(i("68d1"),i("26da"),Object(v["a"])(st,o,n,!1,null,"38b5a9e8",null));e["default"]=at.exports},b680:function(t,e,i){"use strict";var o=i("23e7"),n=i("a691"),s=i("408a"),a=i("1148"),r=i("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,i){return 0===e?i:e%2===1?u(t,e-1,i*t):u(t*t,e/2,i)},p=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},m=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));o({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,i,o,r,c=s(this),m=n(t),f=[0,0,0,0,0,0],_="",v="0",d=function(t,e){var i=-1,o=e;while(++i<6)o+=t*f[i],f[i]=o%1e7,o=l(o/1e7)},g=function(t){var e=6,i=0;while(--e>=0)i+=f[e],f[e]=l(i/t),i=i%t*1e7},h=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var i=String(f[t]);e=""===e?i:e+a.call("0",7-i.length)+i}return e};if(m<0||m>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(_="-",c=-c),c>1e-21)if(e=p(c*u(2,69,1))-69,i=e<0?c*u(2,-e,1):c/u(2,e,1),i*=4503599627370496,e=52-e,e>0){d(0,i),o=m;while(o>=7)d(1e7,0),o-=7;d(u(10,o,1),0),o=e-1;while(o>=23)g(1<<23),o-=23;g(1<<o),d(1,1),g(2),v=h()}else d(0,i),d(1<<-e,0),v=h()+a.call("0",m);return m>0?(r=v.length,v=_+(r<=m?"0."+a.call("0",m-r)+v:v.slice(0,r-m)+"."+v.slice(r-m))):v=_+v,v}})},c788:function(t,e,i){},ce40:function(t,e,i){},d23c:function(t,e,i){"use strict";i("c788")},d49c:function(t,e,i){},d994:function(t,e,i){},dd4c:function(t,e,i){"use strict";i("fe1b")},ddc1:function(t,e,i){},efc1:function(t,e,i){"use strict";i("d49c")},f75f:function(t,e,i){},fe1b:function(t,e,i){}}]);
//# sourceMappingURL=category-details.f9354dc2.js.map