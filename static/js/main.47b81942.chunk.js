(this["webpackJsonpjul-on-sale-react"]=this["webpackJsonpjul-on-sale-react"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(20),s=n.n(r),i=(n(26),n(5)),o=n(8),u=n(9),h=n(11),l=n(10),j=(n(27),n(2)),b=n(1),d=["January","February","March","April","May","June","July","August","September","October","November","December"],O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={date:new Date},e}return Object(u.a)(n,[{key:"formatDate",value:function(){return"For the day of "+d[this.state.date.getMonth()]+" "+this.state.date.getDate()+", "+this.state.date.getFullYear()}},{key:"render",value:function(){var e,t,n;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{className:"App-header",children:["What's On Sale @ Jul ",null===(e=this.props)||void 0===e||null===(t=e.match)||void 0===t||null===(n=t.params)||void 0===n?void 0:n.categoryName]}),Object(b.jsx)("div",{className:"DateHeader",children:Object(b.jsx)("p",{children:this.formatDate()})})]})}}]),n}(c.a.Component),m=Object(j.g)(O),p=(n(34),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return this.props.status?Object(b.jsxs)("div",{className:"loader",children:[Object(b.jsx)("div",{}),Object(b.jsx)("h4",{children:"\u05de\u05d1\u05d9\u05d0 \u05e4\u05e8\u05d9\u05d8\u05d9\u05dd..."})]}):null}}]),n}(c.a.Component)),f=(n(35),n(36),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={shouldShowSpinner:!0,items:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){0===this.state.items.length&&this.fetchData()}},{key:"fetchData",value:function(){var e,t,n,a=this;fetch("https://jul-on-sale.herokuapp.com/category/"+(null===(e=this.props)||void 0===e||null===(t=e.match)||void 0===t||null===(n=t.params)||void 0===n?void 0:n.categoryName)).then((function(e){return e.json()})).then((function(e){a.setState(Object(i.a)(Object(i.a)({},a.state),{},{shouldShowSpinner:!1,items:e.message}))})).catch((function(e){a.setState(Object(i.a)(Object(i.a)({},a.state),{},{shouldShowSpinner:!1}))}))}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{status:this.state.shouldShowSpinner}),Object(b.jsx)("div",{className:"categoryItems",children:this.state.items.map((function(e){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h4",{children:e.name}),Object(b.jsx)("a",{href:e.link,children:Object(b.jsx)("img",{src:e.image,className:"item",alt:e.name,title:e.name})}),Object(b.jsx)("h4",{children:e.price})]},"categoryItem-".concat(e.link))}))})]})}}]),n}(c.a.Component)),v=Object(j.g)(f),g=n(14),x=(n(37),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return null===this.props.categories?null:Object(b.jsx)("div",{className:"categories",children:this.props.categories&&this.props.categories.map((function(e){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"category",children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)(g.b,{to:"/categories"+e.image,children:Object(b.jsx)("img",{src:"https://github.com/TomerPacific/julOnSale/blob/master/assets/"+e.image+".png?raw=true",alt:"/".concat(e.name),title:e.name})})]},"category-".concat(e.name))})}))})}}]),n}(c.a.Component)),y=function(e){return Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{exact:!0,path:"/home",render:function(){return Object(b.jsx)(x,Object(i.a)({},e))}}),Object(b.jsx)(j.b,{exact:!0,path:"/categories/:categoryName",render:function(){return Object(b.jsx)(v,Object(i.a)({},e))}}),Object(b.jsx)(j.b,{path:"*",render:function(){return Object(b.jsx)(j.a,{to:"/home"})}})]})},S=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={shouldShowSpinner:!0,categories:[],serverError:!1},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){0===this.state.categories.length&&this.fetchData()}},{key:"fetchData",value:function(){var e=this;fetch("https://jul-on-sale.herokuapp.com/jul").then((function(e){return e.json()})).then((function(t){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{shouldShowSpinner:!1,categories:t.message,serverError:0===t.message.length}))})).catch((function(t){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{shouldShowSpinner:!1,serverError:!0}))}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{}),Object(b.jsx)(p,{status:this.state.shouldShowSpinner}),Object(b.jsx)(y,{categories:this.state.categories}),this.state.serverError?Object(b.jsx)("div",{children:"\u05d0\u05d5\u05d9 \u05dc\u05d0! \u05db\u05e0\u05e8\u05d0\u05d4 \u05e9\u05d9\u05e9\u05e0\u05d4 \u05d1\u05e2\u05d9\u05d4 \u05e2\u05dd \u05d4\u05e9\u05e8\u05ea. \u05d0\u05e0\u05d0 \u05e0\u05e1\u05d5 \u05e9\u05e0\u05d9\u05ea \u05de\u05d0\u05d5\u05d7\u05e8 \u05d9\u05d5\u05ea\u05e8."}):null]})}}]),n}(c.a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},w=function(){var e=document.title;window.addEventListener("blur",(function(e){document.title=" \u2764\ufe0f U"})),window.addEventListener("focus",(function(t){document.title=e}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g.a,{children:Object(b.jsx)(S,{})})}),document.getElementById("root")),k(),w()}},[[38,1,2]]]);
//# sourceMappingURL=main.47b81942.chunk.js.map