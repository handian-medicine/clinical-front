webpackJsonp([10],{Xpyq:function(e,t){},wtgq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"Pjr001",components:{Header:n("GgDs").a},data:function(){return{collapsed:!0}},computed:{routes:function(){return this.$router.options.routes.filter(function(e){return"Prj001"==e.name})},routeChildren:function(e){return function(e){return e.children.filter(function(e){return!e.hidden})}}},methods:{getUserInfo:function(){this.$refs.userInfo.$emit("getUserEvent")},onSubmit:function(){console.log("submit!")},handleopen:function(){},handleclose:function(){},handleselect:function(e,t){},logout:function(){var e=this;this.$confirm("确认退出吗?","提示",{type:"warning"}).then(function(){sessionStorage.removeItem("user"),e.$router.push("/login")}).catch(function(){})},collapse:function(){this.collapsed=!this.collapsed},showMenu:function(e,t){this.$refs.menuCollapsed.getElementsByClassName("submenu-hook-"+e)[0].style.display=t?"block":"none"}},mounted:function(){var e=sessionStorage.getItem("user");e&&(e=JSON.parse(e),console.log(e))}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"container"},[n("Header",{on:{headerEvent:function(t){return e.collapsed=t}}}),e._v(" "),n("el-col",{staticClass:"main",attrs:{span:24}},[n("aside",{class:e.collapsed?"menu-collapsed":"menu-expanded"},[n("el-menu",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}],staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b","unique-opened":"",router:""},on:{open:e.handleopen,close:e.handleclose,select:e.handleselect}},[e._l(e.routes[0].children,function(t){return[t.leaf?e._e():n("el-menu-item",{key:t.name,attrs:{index:t.path}},[n("i",{class:t.iconCls}),e._v("\n            "+e._s(t.name)+"\n          ")])]})],2),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.collapsed,expression:"collapsed"}],ref:"menuCollapsed",staticClass:"el-menu el-menu-vertical-demo collapsed"},e._l(e.routes[0].children,function(t){return n("li",{key:t.name,staticClass:"el-submenu item"},[[n("div",{staticClass:"el-submenu__title",class:e.$route.path===t.path?"is-active":"",staticStyle:{height:"56px","line-height":"56px",padding:"0 20px"},on:{click:function(n){return e.$router.push(t.path)}}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"right"}},[n("div",{attrs:{slot:"content"},slot:"content"},[e._v(e._s(t.name))]),e._v(" "),n("i",{class:t.iconCls})])],1)]],2)}),0)],1),e._v(" "),n("section",{staticClass:"content-container"},[n("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[n("strong",{staticClass:"title"},[e._v(e._s(e.$route.name))]),e._v(" "),n("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},e._l(e.$route.matched,function(t){return n("el-breadcrumb-item",{key:t.path},[e._v(e._s(t.name))])}),1)],1),e._v(" "),n("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)])],1)},staticRenderFns:[]};var o=n("C7Lr")(s,a,!1,function(e){n("Xpyq")},"data-v-069800fe",null);t.default=o.exports}});
//# sourceMappingURL=10.ea5974071f407f341b7d.js.map