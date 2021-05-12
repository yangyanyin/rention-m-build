(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["News"],{"4dec":function(t,e,n){"use strict";n("6e82")},"517c":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"details-side"},[n("h3",[t._v(t._s(t.recommendType.title))]),n("div",{staticClass:"recommend"},t._l(t.recommendList,(function(e,s){return n("div",{key:s,staticClass:"item"},[n("router-link",{staticClass:"a-img",attrs:{to:t.recommendType.link+e._id}},[n("rentImg",{staticClass:"img-object",attrs:{url:e.image,alt:e.title}})],1),n("router-link",{attrs:{to:"/",tag:"strong"}},[t._v(t._s(e.title))]),n("span",[t._v(t._s(e.price)+" "),n("em",[t._v(t._s(t.recommendType.unit))])])],1)})),0),n("Consultant"),t._m(0),n("div",{staticClass:"message"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.message,expression:"fromInfo.message"}],staticClass:"inp text",attrs:{placeholder:"我对这个物业感兴趣，希望得到更多信息"},domProps:{value:t.fromInfo.message},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"message",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.name,expression:"fromInfo.name"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的称呼（必填）"},domProps:{value:t.fromInfo.name},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"name",e.target.value)}}}),t.fromErr.name?n("i",[t._v("请输入您的称呼")]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.tel,expression:"fromInfo.tel"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的联系电话（必填）"},domProps:{value:t.fromInfo.tel},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"tel",e.target.value)}}}),t.fromErr.tel?n("i",[t._v("请输入您的联系电话")]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.email,expression:"fromInfo.email"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的邮箱地址（必填）"},domProps:{value:t.fromInfo.email},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"email",e.target.value)}}}),t.fromErr.email?n("i",[t._v("请输入您的邮箱地址")]):t._e(),n("p",[n("span",{class:{check:t.fromInfo.protocol},on:{click:t.protocolClick}}),t._v(" 已阅读并同意"),n("router-link",{attrs:{to:"/"}},[t._v("《新加坡看公寓网用户协议》")])],1),t.fromErr.protocol?n("i",{staticClass:"protocol-err"},[t._v("请勾选《新加坡看公寓网用户协议》")]):t._e(),n("button",{on:{click:t.submitInfo}},[t.submitLoad?[t._v("...")]:[t._v("立即咨询")]],2)]),t.submitStatus?n("SubmitSuccess",{on:{close:function(e){t.submitStatus=!1}}}):t._e()],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("给TA留言"),n("i",[t._v("提交咨询请求，30分钟内回复")])])}],a=(n("b0c0"),n("570b")),o=n("a34f"),r={components:{Consultant:o["a"],SubmitSuccess:a["a"]},props:{proTitle:String},data:function(){return{recommendList:[],submitStatus:!1,submitLoad:!1,fromInfo:{message:"",name:"",tel:"",email:"",protocol:""},fromErr:{name:!1,tel:!1,email:!1,protocol:!1}}},computed:{recommendType:function(){var t={"second-hand":{title:"二手房推荐",type:"second_hand_house",link:"/c/second-hand/",unit:"万"},"new-house":{title:"新楼盘推荐",type:"new_house",link:"/c/new-house/",unit:"万起"},renting:{title:"租房推荐",type:"renting",link:"/c/renting/"}};return t[this.$route.params.category]||{title:"房产推荐",type:"new_house",link:"/c/new-house/",unit:"万起"}}},methods:{protocolClick:function(){this.fromInfo.protocol=!this.fromInfo.protocol},submitInfo:function(){var t=this;for(var e in this.fromErr){if(""===this.fromInfo[e])return this.fromErr[e]=!0,!1;this.fromErr[e]=!1}var n={email_title:"房产咨询",advisory_source:this.proTitle,message:this.fromInfo.message,name:this.fromInfo.name,tel:this.fromInfo.tel,email:this.fromInfo.email,protocol:this.fromInfo.protocol};this.submitLoad||(this.submitLoad=!0,this.$httpApi.messageApi(n).then((function(e){if(200===e.code)for(var n in t.submitLoad=!1,t.submitStatus=!0,t.fromInfo)t.fromInfo[n]=""})))}},mounted:function(){var t=this,e={type:this.recommendType.type};this.$httpApi.categoryRecommendApi(e).then((function(e){200===e.code&&(t.recommendList=e.data.recommend)}))}},c=r,l=(n("ad0e"),n("2877")),u=Object(l["a"])(c,s,i,!1,null,"aae8ee48",null);e["a"]=u.exports},"572c":function(t,e,n){},"584d":function(t,e,n){"use strict";n("572c")},5884:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news"},[n("div",{staticClass:"nav-menu"},t._l(t.newsMenu,(function(e,s){return n("router-link",{key:s,attrs:{to:e.url}},[n("i",[t._v(t._s(e.name))])])})),1),t.newsList?t._e():n("Loading"),0===t.newsList.length?n("Nothing",{attrs:{text:"没有新闻！"}}):t._e(),t.newsList.length>0?[n("NewsBanner",{attrs:{newsBanner:t.bannerNewsList}}),n("div",{staticClass:"list"},[n("h3",[t._v(t._s(t.newsName))]),t._l(t.newsList,(function(e,s){return n("NewsItem",{key:s,attrs:{cUrl:t.itemUrl,item:e}})}))],2),n("DetailsRecommend",{attrs:{proTitle:t.newsName}})]:t._e()],2)},i=[],a=(n("c975"),n("d81d"),n("fb6a"),n("b0c0"),n("517c")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-banner"},[n("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),t._l(t.newsBanner,(function(e,s){return n("div",{key:s,staticClass:"item"},[n("router-link",{attrs:{to:"/n/d/"+e.id}},[n("h3",[t._v(t._s(e.title))]),n("rentImg",{staticClass:"img-object",attrs:{url:e.img,alt:e.title}})],1)],1)})),0)],1)},r=[],c=n("a7ab"),l=n.n(c),u=(n("7b8d"),n("6a2c"),{components:{VueSlickCarousel:l.a},props:{newsBanner:Array},data:function(){return{settings:{dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e5,pauseOnDotsHover:!0,pauseOnFocus:!0,pauseOnHover:!0}}}}),m=u,f=(n("4dec"),n("7eff"),n("2877")),d=Object(f["a"])(m,o,r,!1,null,null,null),p=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"item",attrs:{to:t.cUrl+"/"+t.item.id}},[n("i",[n("rentImg",{staticClass:"img-object",attrs:{url:t.item.img,alt:t.item.title}})],1),n("router-link",{attrs:{to:t.cUrl+"/"+t.item.id,tag:"h3"}},[t._v(t._s(t.item.title))]),n("p",[t._v(t._s(t.item.description))]),n("span",[t._v(t._s(t.item.created_at?t.item.created_at.split(" ")[0]:""))]),n("router-link",{attrs:{to:t.cUrl+"/"+t.item.id}},[t._v("查看详情")])],1)},_=[],h={props:{item:Object,cUrl:String}},w=h,g=(n("a7b4"),Object(f["a"])(w,v,_,!1,null,"024a31fa",null)),b=g.exports,y=n("0e17"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nothing"},[t._v(" "+t._s(t.text)+" ")])},I=[],x={props:{text:String}},k=x,N=(n("584d"),Object(f["a"])(k,C,I,!1,null,"e00017e4",null)),L=N.exports,S={name:"news",components:{DetailsRecommend:a["a"],NewsBanner:p,NewsItem:b,Loading:y["a"],Nothing:L},data:function(){return{newsMenu:[{name:"买房必看",url:"/n/must-see",id:1},{name:"产权交易",url:"/n/property",id:3},{name:"常见问题",url:"/n/faq",id:4},{name:"购房指南",url:"/n/guide",id:5}],newsList:!1,bannerNewsList:[],newsName:"",itemUrl:""}},mounted:function(){var t=this,e="";this.newsMenu.map((function(n){n.url.indexOf(t.$route.params.name)>=0&&(e=n.id,t.newsName=n.name,t.itemUrl=n.url)}));var n={category_id:e};this.$httpApi.newsListApi(n).then((function(e){200===e.code&&(0===t.bannerNewsList.length&&(t.bannerNewsList=e.data.news_list.slice(0,4)),t.newsList=e.data.news_list)}))}},O=S,$=(n("d848"),Object(f["a"])(O,s,i,!1,null,"f98683a2",null));e["default"]=$.exports},"6e82":function(t,e,n){},7479:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"details"},[t.newsData.title?[n("div",{staticClass:"title"},[n("h3",[t._v(t._s(t.newsData.title))]),n("p",[t._v("发布时间："+t._s(t.newsData.created_at.split(" ")[0])+" 阅读次数："+t._s(t.newsData.read_count)+"次")])]),n("div",{staticClass:"new-html",domProps:{innerHTML:t._s(t.newsContent)}}),n("div",{staticClass:"context"},[t.prevNews.title?n("p",[t._v("上一篇："),n("router-link",{attrs:{to:"/n/"+t.newsType+"/"+t.prevNews.id}},[t._v(t._s(t.prevNews.title))])],1):t._e(),t.nextNews.title?n("p",[t._v("下一篇："),n("router-link",{attrs:{to:"/n/"+t.newsType+"/"+t.nextNews.id}},[t._v(t._s(t.nextNews.title))])],1):t._e()]),n("DetailsRecommend",{attrs:{proTitle:t.newsData.title}})]:n("Loading")],2)},i=[],a=(n("b0c0"),n("ac1f"),n("5319"),n("517c")),o=n("0e17"),r={components:{DetailsRecommend:a["a"],Loading:o["a"]},data:function(){return{newsData:{},prevNews:{},nextNews:{},newsContent:"",recommendNews:[],newsType:this.$route.params.name}},mounted:function(){var t=this,e={id:this.$route.params.id};this.$httpApi.newsDetailsApi(e).then((function(e){200===e.code&&(t.newsData=e.data.news,t.newsContent=e.data.news.content.replace(/\/images\/default/g,"https://cms.kangongyu.cn/images/default/"),t.prevNews=e.data.prev_news||{},t.nextNews=e.data.next_news||{})}))}},c=r,l=(n("8e10"),n("2877")),u=Object(l["a"])(c,s,i,!1,null,"a1950fbe",null);e["default"]=u.exports},"7eff":function(t,e,n){"use strict";n("ce6d")},"8e10":function(t,e,n){"use strict";n("dfc5")},a640:function(t,e,n){"use strict";var s=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&s((function(){n.call(null,e||function(){throw 1},1)}))}},a7b4:function(t,e,n){"use strict";n("bd3f")},ad0e:function(t,e,n){"use strict";n("d39f")},b001:function(t,e,n){},bd3f:function(t,e,n){},c975:function(t,e,n){"use strict";var s=n("23e7"),i=n("4d64").indexOf,a=n("a640"),o=n("ae40"),r=[].indexOf,c=!!r&&1/[1].indexOf(1,-0)<0,l=a("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(t){return c?r.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},ce6d:function(t,e,n){},d39f:function(t,e,n){},d848:function(t,e,n){"use strict";n("b001")},dfc5:function(t,e,n){},fb6a:function(t,e,n){"use strict";var s=n("23e7"),i=n("861d"),a=n("e8b5"),o=n("23cb"),r=n("50c4"),c=n("fc6a"),l=n("8418"),u=n("b622"),m=n("1dde"),f=n("ae40"),d=m("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),_=[].slice,h=Math.max;s({target:"Array",proto:!0,forced:!d||!p},{slice:function(t,e){var n,s,u,m=c(this),f=r(m.length),d=o(t,f),p=o(void 0===e?f:e,f);if(a(m)&&(n=m.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?i(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return _.call(m,d,p);for(s=new(void 0===n?Array:n)(h(p-d,0)),u=0;d<p;d++,u++)d in m&&l(s,u,m[d]);return s.length=u,s}})}}]);
//# sourceMappingURL=News.76c7e4fd.js.map