(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{234:function(t,a,s){"use strict";s.r(a);var n={methods:{handleClick:function(){alert("按钮被点击")}},created:function(){var t=this;setTimeout(function(){t.title="bbbbbbbbbb"},3e3)},watch:{a:function(t){console.log(t)}},data:function(){return{a:null,title:"aaaaa"}}},e=s(2),o=Object(e.a)(n,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("ClientOnly",[[s("show-components",{attrs:{title:"类型",linesOfCode:3}},[s("show-components-item",{attrs:{label:"默认按钮"}},[s("Button",{attrs:{tooltip:"222",styles:{margin:10}},on:{click:t.handleClick}},[t._v("default")])],1),t._v(" "),s("show-components-item",{attrs:{label:"图标按钮"}},[s("Button",{attrs:{icon:"RatingStarFillZeroWidthLegacy"},on:{click:t.handleClick}},[t._v("\n            default\n            "),s("span",{attrs:{slot:"tooltip"},slot:"tooltip"},[t._v("1111111111111")])])],1),t._v(" "),s("show-components-item",{attrs:{label:"禁用按钮"}},[s("Button",{attrs:{disabled:"",icon:"RatingStarFillZeroWidthLegacy",iconPosition:"right"},on:{click:t.handleClick}},[t._v("disabled")])],1),t._v(" "),s("show-components-item",{attrs:{label:"动画"}},[s("FadeInOut",{attrs:{speed:1e3}},[s("Button",{attrs:{styles:{margin:10}}},[t._v("\n                FadeInOut\n            ")]),t._v(" "),s("Button",{attrs:{styles:{margin:10}}},[t._v("\n                FadeInOut\n            ")])],1)],1),t._v(" "),s("Toast",{attrs:{title:t.title,description:["Conf Room 2001 / Building 135","10:00 AM - 10:30 AM"],showCloseIcon:""},model:{value:t.a,callback:function(a){t.a=a},expression:"a"}},[s("Icon",{attrs:{slot:"logoNode"},slot:"logoNode"},[t._v("ActionCenterNotification")])],1),t._v(" "),s("show-components-item",{attrs:{label:"AppBarButton"}},[s("AppBarButton",{staticClass:"aa",attrs:{styles:{margin:10,background:"rgba(255, 255, 255, 0.1)"},icon:"Shuffle",label:"Shuffle"}})],1),t._v(" "),s("show-components-item",{attrs:{label:"CheckBox"}},[s("CheckBox",{attrs:{styles:{margin:"10px 10px 10px 0"},label:t.a?"显示通知":"隐藏通知"},model:{value:t.a,callback:function(a){t.a=a},expression:"a"}}),t._v(" "),s("RadioButton",{attrs:{styles:{margin:"10px 10px 10px 0"},label:t.a?"显示通知":"隐藏通知"},model:{value:t.a,callback:function(a){t.a=a},expression:"a"}}),t._v(" "),s("Toggle",{attrs:{label:t.a?"显示通知":"隐藏通知"},model:{value:t.a,callback:function(a){t.a=a},expression:"a"}}),t._v(" "),s("IconButton",[t._v("\n            GlobalNavButton\n        ")]),t._v(" "),s("HyperLink",{attrs:{styles:{margin:"10px 0"},href:"/",target:"_blank"}},[t._v("\n            Link to Home Page\n        ")]),t._v(" "),s("TextBox",{attrs:{placeholder:"请输入",maxLength:10},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}},[s("Icon",{attrs:{slot:"leftNode",styles:{margin:"0 4px"}},slot:"leftNode"},[t._v("HeartFillLegacy")]),t._v(" "),s("Icon",{attrs:{slot:"rightNode",styles:{margin:"0 4px"}},slot:"rightNode"},[t._v("Emoji2Legacy")])],1),t._v(" "),s("PasswordBox",{attrs:{placeholder:"请输入",maxLength:10},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}}),t._v(" "),s("Dialog",{attrs:{styles:{zIndex:400}},model:{value:t.a,callback:function(a){t.a=a},expression:"a"}},[s("Button",[t._v("Dialog 2")])],1)],1),t._v(" "),s("template",{slot:"code"},[s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("空"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("default"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("disabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("disabled"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],2)]],2)],1)},[],!1,null,null,null);a.default=o.exports}}]);