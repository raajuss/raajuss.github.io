(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{223:function(n,t,e){"use strict";e.r(t);var r=e(2).a.extend({props:["iconD","colorNameBg","colorNameText","colorNameDark","title","id","isOpened","colorParent","colorParent2"],methods:{toggleOpen:function(){this.$emit("activate",{id:this.id,color:this.colorParent,color2:this.colorParent2})},getHeight:function(){var n=document.querySelector("#row-el-"+this.id);return n?n.scrollHeight:0}}}),o=e(51),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"flex space-x-0 sm:space-x-4"},[e("div",{staticClass:"\n      hidden\n      sm:flex\n      select-none\n      group\n      cursor-pointer\n      w-20\n      h-20\n      rounded-lg\n      items-center\n      justify-center\n    ",class:n.colorNameBg,on:{click:function(t){return n.toggleOpen()}}},[e("svg",{staticClass:"\n        w-8\n        h-8\n        transform\n        group-hover:scale-125 group-hover:rotate-12\n        transition\n        duration-300\n      ",class:n.colorNameText,attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:n.iconD}})])]),n._v(" "),e("div",{staticClass:"\n      rounded-lg\n      bg-white\n      dark:bg-gray-800\n      w-full\n      p-6\n      relative\n      overflow-y-hidden\n      duration-300\n      shadow-md\n    ",style:{maxHeight:n.isOpened?n.getHeight()+"px":"80px"},attrs:{id:"row-el-"+n.id}},[e("div",{staticClass:"cursor-pointer flex items-start",on:{click:function(t){return n.toggleOpen()}}},[e("svg",{staticClass:"\n          block\n          sm:hidden\n          mr-2\n          w-6\n          h-6\n          transform\n          group-hover:scale-125 group-hover:rotate-12\n          transition\n          duration-300\n        ",class:n.colorNameText,attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:n.iconD}})]),n._v(" "),e("h1",{staticClass:"\n          dark:text-gray-50\n          text-black\n          cursor-pointer\n          font-bold\n          uppercase\n          text-md\n          sm:text-2xl\n          select-none\n          pr-8\n        ",class:n.isOpened?n.colorNameDark:""},[n._v("\n        "+n._s(n.title)+"\n      ")])]),n._v(" "),e("div",{staticClass:"mt-8 dark:text-gray-300"},[n._t("default")],2),n._v(" "),e("div",{staticClass:"\n        select-none\n        cursor-pointer\n        absolute\n        right-0\n        top-0\n        w-20\n        h-20\n        flex\n        justify-center\n        items-center\n      ",on:{click:function(t){return n.toggleOpen()}}},[e("svg",{staticClass:"\n          w-6\n          h-6\n          sm:w-8 sm:h-8\n          text-gray-400\n          hover:text-gray-600\n          transform\n          transition\n          duration-300\n        ",class:n.isOpened?"rotate-180":"",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])])])])}),[],!1,null,null,null);t.default=component.exports}}]);