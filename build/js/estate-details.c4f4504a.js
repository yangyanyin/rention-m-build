(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["estate-details"],{"0249":function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAgCAYAAAAMq2gFAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGqADAAQAAAABAAAAIAAAAACEkDQXAAACa0lEQVRIDa1Wy3HCMBDFJsCVDkIqAA78TriDOBUEKshQQSiBVJCkA6eCkBO/A6GCkA44MwPkPcXyGI0WiwTNmJXervZJq9UKL5fR5vN5bb/fd2EWep5XhqzFUz4Ph8MG/QjyrdPprGPcKjwrCnCxWAS73e4RzgPJJo2DbIyvLxFaiabT6TMIemlHrn3MGzWbzYFpf0S0XC7L2+32HUY6PKa96zgqFov9er3O0Kp2pTuUFyKhqxC+KO/4w+b/ilyO4UL/vzvR7ijD2Ww21IAKHQ8emcWQZbUPHPhnKvuqWRPg94YJokIXZ5c4B86fSqXSMB1zGk8mkwoPH9+tNNn3/SF0PY/3BI6WkiGc9JFFL5KeOEJE/T37tsZd+fgJbEpi3EkWCe1arVYP4oN9W8vn84GPFYc2JTGGS9KZeBwiE1ZjbCb0seprqxYrNM9EsFNwo9FgZfi22WAzZe6oYlMCGwu4CMPX2qbkZpJ7ZDO4IOaRaCU4DARchKVj4E5JlNQjw0OXtc/AxCEvvXQMWMCGyRBJs1GvWJacGi+9ZIiMjE4SYWKIGvggOdB4/KwEemzKQqEQqVqHmz2GsmsapMYR7sLAfNQcH8dXXmhFxJqF7X2lHEtd/XxTzzpXYedUY/nhAhURDbF9FsfMMJ1yaupw/oN2uz0inhBxALIIZLfsX6CpkGk/RxcWta0HhXSv9BwXuYoLbWJ7RMTahrc+gPY/ZKvYR0LCzlHotCb+kzLGuKoxR6lIbMXYSkSnfyATSehPJDqT7CRJJpEjWSaJE1EGmROJM5FA5kxyFpFBlmMK27KLdhdpzMZz3ilN+gP0pCCm3IsohwAAAABJRU5ErkJggg=="},"0335":function(i,t,e){"use strict";e.r(t);var a=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"details"},[i.proTitle?[a("div",{staticClass:"content"},[a("DetailsViewImg",{attrs:{imagesArr:i.imagesAll,vrLink:i.vrLink}}),a("div",{staticClass:"title"},[a("h3",[i._v(i._s(i.proTitle))]),a("p",[a("img",{attrs:{src:e("0249")}}),i._v(" "+i._s(i.proAddress))])]),a("DetailsInfoBase",{attrs:{infoBase:i.infoBase,proTitle:i.proTitle}}),a("DetalsIntroduction",{attrs:{introduction:i.introduction,title:"项目介绍"}}),a("Conveniences",{attrs:{facilities:i.facilities}}),a("Consultant")],1),i.coordinate?a("BaiduMap",{attrs:{coordinate:i.coordinate,addr:i.infoBase.addr,title:i.proTitle,mapData:i.mapData}}):i._e()]:a("Loading")],2)},s=[],o=(e("a4d3"),e("e01a"),e("d81d"),e("2772")),n=e("5315"),r=e("61ca"),A=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"info-base"},["shophouse"===i.type?[e("p",[i._v("店屋地址："),e("i",[i._v(" "+i._s(i.infoBase.addr)+" ")])]),e("p",[i._v("地契："),e("i",[i._v(" "+i._s(i.infoBase.deed)+" ")])]),e("p",[i._v("居住面积："),e("i",[i._v(" "+i._s(i.infoBase.area)+" ")])])]:[e("p",[i._v("建成时间："),e("i",[i._v(" "+i._s(i.infoBase.build_at)+" ")])]),e("p",[i._v("地契："),e("i",[i._v(" "+i._s(i.infoBase.deed)+" ")])]),e("p",[i._v("类型："),e("i",[i._v(" "+i._s(i.infoBase.type)+" ")])]),e("p",[i._v("总高："),e("i",[i._v(" "+i._s(i.infoBase.height)+" ")])]),e("p",[i._v("楼层："),e("i",[i._v(" "+i._s(i.infoBase.floor)+" ")])])],e("p",{staticClass:"traffic"},[i._v("靠近地铁站： "),i._l(i.infoBase.traffic,(function(t,a){return e("i",{key:a,style:{background:t.color}},[i._v(" "+i._s(t.name)+" ")])}))],2),i.infoBase.price?e("div",{staticClass:"price"},[i._v(" 参考价: "),e("span",[i._v(" "+i._s(i.infoBase.price)+" ")]),e("button",{on:{click:i.showAdvisory}},[i._v("购买")])]):i._e(),i.infoBase.rent_price?e("div",{staticClass:"price"},[i._v(" 参考价:"),e("span",[i._v(" "+i._s(i.infoBase.rent_price)+" ")]),e("button",{on:{click:i.showAdvisory}},[i._v("租赁")])]):i._e(),i.showAdvisoryType?e("AdvisoryPopup",{attrs:{type:"商业地产买卖",page:"estate",proTitle:i.proTitle},on:{closePopuo:i.showAdvisory}}):i._e()],2)},c=[],p=e("7761"),d={components:{AdvisoryPopup:p["a"]},props:{infoBase:Object,proTitle:String},data:function(){return{showAdvisoryType:!1}},computed:{type:function(){return this.$route.params.category}},methods:{showAdvisory:function(){this.showAdvisoryType=!this.showAdvisoryType}}},l=d,u=(e("ca49"),e("2877")),f=Object(u["a"])(l,A,c,!1,null,"24f5cfa2",null),v=f.exports,_=e("a34f"),h=e("0e17"),m=e("d913"),B={components:{DetailsViewImg:o["a"],DetalsIntroduction:n["a"],Conveniences:r["a"],Consultant:_["a"],DetailsInfoBase:v,Loading:h["a"],BaiduMap:m["a"]},data:function(){return{proTitle:"",proAddress:"",imagesAll:[],infoBase:{},introduction:"",vrLink:"",facilities:[],coordinate:"",mapData:""}},computed:{breadcrumb:function(){var i={building:{url:"/estate/building",name:"分层地契商业办公大楼"},shophouse:{url:"/estate/shophouse",name:"保留性店屋"}};return[i[this.$route.params.category],{url:this.$route.path,name:this.proTitle}]}},mounted:function(){var i=this,t={id:this.$route.params.id};this.$httpApi.estateDetailsApi(t).then((function(t){if(200===t.code){var e=t.data;i.proTitle=e.title,i.proAddress=e.addr,i.imagesAll=e.images,i.introduction=e.description,i.vrLink=e.vr_link,i.coordinate=e.coordinate,i.mapData=e.map,i.facilities=e.facilities,i.infoBase={floor:e.floor,deed:e.deed,height:e.height,build_at:e.build_at,type:e.house_type,addr:e.addr,traffic:e.traffic,price:e.price,rent_price:e.rent_price,area:e.area}}}))}},g=B,C=(e("4746"),e("1a42"),Object(u["a"])(g,a,s,!1,null,"1f77419d",null));t["default"]=C.exports},"1a42":function(i,t,e){"use strict";e("ed81")},4746:function(i,t,e){"use strict";e("cb69")},8832:function(i,t,e){},ca49:function(i,t,e){"use strict";e("8832")},cb69:function(i,t,e){},ed81:function(i,t,e){}}]);
//# sourceMappingURL=estate-details.c4f4504a.js.map