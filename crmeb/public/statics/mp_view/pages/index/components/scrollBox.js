(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/scrollBox"],{1658:function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}));var o=function(){var t=this,n=t.$createElement;t._self._c},a=[]},6461:function(t,n,i){},"8d43":function(t,n,i){"use strict";i.r(n);var e=i("dd3d"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},b953:function(t,n,i){"use strict";i.r(n);var e=i("1658"),o=i("8d43");for(var a in o)"default"!==a&&function(t){i.d(n,t,(function(){return o[t]}))}(a);i("f8ec");var f,s=i("f0c5"),u=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],f);n["default"]=u.exports},dd3d:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i("4729"),o=i("7fe6"),a=getApp(),f={name:"scrollBox",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,n){t&&(this.numConfig=t.numConfig.val,this.isShow=t.isShow.val,this.tabConfig=t.tabConfig?t.tabConfig.tabVal:0,this.selectConfig=t.selectConfig.activeValue,this.titleInfo=t.titleInfo.list,this.tabConfig?this.fastList=t.goodsList.list:this.category())}}},created:function(){},mounted:function(){},data:function(){return{fastInfo:"上百种商品分类任您选择",fastList:[],name:this.$options.name,isShow:!0,isIframe:a.globalData.isIframe,numConfig:0,selectConfig:0,tabConfig:0,titleInfo:[]}},methods:{gopage:function(n){(0,e.goPage)().then((function(i){t.navigateTo({url:n})}))},category:function(){var t=this;(0,o.category)({pid:this.selectConfig,limit:this.numConfig}).then((function(n){t.fastList=n.data}))}}};n.default=f}).call(this,i("543d")["default"])},f8ec:function(t,n,i){"use strict";var e=i("6461"),o=i.n(e);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/scrollBox-create-component',
    {
        'pages/index/components/scrollBox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b953"))
        })
    },
    [['pages/index/components/scrollBox-create-component']]
]);
