(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["estate-details"],{"0249":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAgCAYAAAAMq2gFAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGqADAAQAAAABAAAAIAAAAACEkDQXAAACa0lEQVRIDa1Wy3HCMBDFJsCVDkIqAA78TriDOBUEKshQQSiBVJCkA6eCkBO/A6GCkA44MwPkPcXyGI0WiwTNmJXervZJq9UKL5fR5vN5bb/fd2EWep5XhqzFUz4Ph8MG/QjyrdPprGPcKjwrCnCxWAS73e4RzgPJJo2DbIyvLxFaiabT6TMIemlHrn3MGzWbzYFpf0S0XC7L2+32HUY6PKa96zgqFov9er3O0Kp2pTuUFyKhqxC+KO/4w+b/ilyO4UL/vzvR7ijD2Ww21IAKHQ8emcWQZbUPHPhnKvuqWRPg94YJokIXZ5c4B86fSqXSMB1zGk8mkwoPH9+tNNn3/SF0PY/3BI6WkiGc9JFFL5KeOEJE/T37tsZd+fgJbEpi3EkWCe1arVYP4oN9W8vn84GPFYc2JTGGS9KZeBwiE1ZjbCb0seprqxYrNM9EsFNwo9FgZfi22WAzZe6oYlMCGwu4CMPX2qbkZpJ7ZDO4IOaRaCU4DARchKVj4E5JlNQjw0OXtc/AxCEvvXQMWMCGyRBJs1GvWJacGi+9ZIiMjE4SYWKIGvggOdB4/KwEemzKQqEQqVqHmz2GsmsapMYR7sLAfNQcH8dXXmhFxJqF7X2lHEtd/XxTzzpXYedUY/nhAhURDbF9FsfMMJ1yaupw/oN2uz0inhBxALIIZLfsX6CpkGk/RxcWta0HhXSv9BwXuYoLbWJ7RMTahrc+gPY/ZKvYR0LCzlHotCb+kzLGuKoxR6lIbMXYSkSnfyATSehPJDqT7CRJJpEjWSaJE1EGmROJM5FA5kxyFpFBlmMK27KLdhdpzMZz3ilN+gP0pCCm3IsohwAAAABJRU5ErkJggg=="},"0335":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"details"},[t.proTitle?[a("div",{staticClass:"content"},[a("DetailsViewImg",{attrs:{imagesArr:t.imagesAll,vrLink:t.vrLink}}),a("div",{staticClass:"title"},[a("h3",[t._v(t._s(t.proTitle))]),a("p",[a("img",{attrs:{src:e("0249")}}),t._v(" "+t._s(t.proAddress))])]),a("DetailsInfoBase",{attrs:{infoBase:t.infoBase,proTitle:t.proTitle}}),a("DetalsIntroduction",{attrs:{introduction:t.introduction,title:"项目介绍"}}),a("Conveniences",{attrs:{facilities:t.facilities}}),a("Consultant")],1),t.coordinate?a("BaiduMap",{attrs:{coordinate:t.coordinate,addr:t.infoBase.addr,title:t.proTitle,mapData:t.mapData}}):t._e()]:a("Loading")],2)},s=[],o=(e("a4d3"),e("e01a"),e("d81d"),e("2772")),n=e("5315"),r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"conveniences"},[e("h3",{staticClass:"other-t"},[t._v("便利设施")]),e("ul",{staticClass:"clearfix"},t._l(t.facilities,(function(i,a){return e("li",{key:a},[e("img",{attrs:{src:i.image,alt:i.title}}),t._v(" "+t._s(i.title)+" ")])})),0)])},c=[],A={props:{facilities:Array}},l=A,p=(e("b37b"),e("2877")),d=Object(p["a"])(l,r,c,!1,null,"77e305af",null),u=d.exports,f=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"info-base"},["shophouse"===t.type?[e("p",[t._v("店屋地址："),e("i",[t._v(" "+t._s(t.infoBase.addr)+" ")])]),e("p",[t._v("地契："),e("i",[t._v(" "+t._s(t.infoBase.deed)+" ")])]),e("p",[t._v("居住面积："),e("i",[t._v(" "+t._s(t.infoBase.area)+" ")])])]:[e("p",[t._v("建成时间："),e("i",[t._v(" "+t._s(t.infoBase.build_at)+" ")])]),e("p",[t._v("地契："),e("i",[t._v(" "+t._s(t.infoBase.deed)+" ")])]),e("p",[t._v("类型："),e("i",[t._v(" "+t._s(t.infoBase.type)+" ")])]),e("p",[t._v("总高："),e("i",[t._v(" "+t._s(t.infoBase.height)+" ")])]),e("p",[t._v("楼层："),e("i",[t._v(" "+t._s(t.infoBase.floor)+" ")])])],e("p",{staticClass:"traffic"},[t._v("靠近地铁站： "),t._l(t.infoBase.traffic,(function(i,a){return e("i",{key:a,style:{background:i.color}},[t._v(" "+t._s(i.name)+" ")])}))],2),t.infoBase.price?e("div",{staticClass:"price"},[t._v(" 参考价: "),e("span",[t._v(" "+t._s(t.infoBase.price)+" ")]),e("button",{on:{click:t.showAdvisory}},[t._v("购买")])]):t._e(),t.infoBase.rent_price?e("div",{staticClass:"price"},[t._v(" 参考价:"),e("span",[t._v(" "+t._s(t.infoBase.rent_price)+" ")]),e("button",{on:{click:t.showAdvisory}},[t._v("租赁")])]):t._e(),t.showAdvisoryType?e("AdvisoryPopup",{attrs:{type:"商业地产买卖",page:"estate",proTitle:t.proTitle},on:{closePopuo:t.showAdvisory}}):t._e()],2)},v=[],_=e("7761"),h={components:{AdvisoryPopup:_["a"]},props:{infoBase:Object,proTitle:String},data:function(){return{showAdvisoryType:!1}},computed:{type:function(){return this.$route.params.category}},methods:{showAdvisory:function(){this.showAdvisoryType=!this.showAdvisoryType}}},m=h,g=(e("ca49"),Object(p["a"])(m,f,v,!1,null,"24f5cfa2",null)),B=g.exports,C=e("a34f"),b=e("0e17"),y=e("d913"),w={components:{DetailsViewImg:o["a"],DetalsIntroduction:n["a"],Conveniences:u,Consultant:C["a"],DetailsInfoBase:B,Loading:b["a"],BaiduMap:y["a"]},data:function(){return{proTitle:"",proAddress:"",imagesAll:[],infoBase:{},introduction:"",vrLink:"",facilities:[],coordinate:"",mapData:""}},computed:{breadcrumb:function(){var t={building:{url:"/estate/building",name:"分层地契商业办公大楼"},shophouse:{url:"/estate/shophouse",name:"保留性店屋"}};return[t[this.$route.params.category],{url:this.$route.path,name:this.proTitle}]}},mounted:function(){var t=this,i={id:this.$route.params.id};this.$httpApi.estateDetailsApi(i).then((function(i){if(200===i.code){var e=i.data;t.proTitle=e.title,t.proAddress=e.addr,t.imagesAll=e.images,t.introduction=e.description,t.vrLink=e.vr_link,t.coordinate=e.coordinate,t.mapData=e.map,t.facilities=e.facilities,t.infoBase={floor:e.floor,deed:e.deed,height:e.height,build_at:e.build_at,type:e.house_type,addr:e.addr,traffic:e.traffic,price:e.price,rent_price:e.rent_price,area:e.area}}}))}},k=w,J=(e("4746"),e("1a42"),Object(p["a"])(k,a,s,!1,null,"1f77419d",null));i["default"]=J.exports},"1a42":function(t,i,e){"use strict";e("ed81")},"30f3":function(t,i,e){},4746:function(t,i,e){"use strict";e("cb69")},8832:function(t,i,e){},b37b:function(t,i,e){"use strict";e("30f3")},ca49:function(t,i,e){"use strict";e("8832")},cb69:function(t,i,e){},ed81:function(t,i,e){}}]);
//# sourceMappingURL=estate-details.ddddf81d.js.map