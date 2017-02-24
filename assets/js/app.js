/*
|-------------------------------------------------------
|  Main Javascript Function
|  Hope - Smart, Clean, Responsive Dashboard Template
|-------------------------------------------------------
|
|  Rubi Jihantoro - jihantoro8@gmail.com
|  https://kutemukan.com/see/hope-dashboard-template/
|  https://github.com/RubyGulla/hope-dashboard-template/
|
*/
!function(){"use strict";var t=function(t,e){this.play("menu",t,e),this.forclose(t,e)};t.prototype={constructor:t,forclose:function(t,e){function a(){o()}this.op=this.getOptions(e);var o=this.op.callbacks.onClose;window.onclick=function(t){0==t.target.matches("[couple-data]")&&0==t.target.matches("[couple-id] > .icon")&&($(".dropdown[couple-data]").removeClass("active"),a())}},callBacks:function(t,e,a){this.op=this.getOptions(a);this.op.callbacks},play:function(t,e,a){function o(t){switch(t){case 0:i();break;case 1:n();break;case 2:s()}}this.type=t,this.$el=$(e),this.op=this.getOptions(a),this.enabled=!0,t=this.op.type;var i=this.op.callbacks.onOpen,n=this.op.callbacks.onVisible,s=this.op.callbacks.onClose;$(e).each(function(){{var e=$(this).attr("couple-id");$("[couple-id='"+e+"'] > ul").attr("couple-data")}switch(t){case"click":$(this).on({click:function(){$(".dropdown[couple-data!='"+e+"']").removeClass("active"),o(2),o(0),$(".dropdown[couple-data='"+e+"']").addClass("active"),o(1)}});break;case"hover":$(this).on({mouseenter:function(){$(".dropdown[couple-data!='"+e+"']").removeClass("active"),o(2),o(0),$(".dropdown[couple-data='"+e+"']").addClass("active"),o(1)}})}})},getOptions:function(t){return t=$.extend({},$.fn[this.type].defaults,t,this.$el.data())}},$.fn.menu=function(e){return this.each(function(){var a=$(this),o=a.data("menu"),i="object"==typeof e&&e;o||a.data("menu",o=new t(this,i)),"string"==typeof e&&o[e]()})},$.fn.menu.Constructor=t,$.fn.menu.defaults={type:"image",acton:"hover",identity:""}}(window.jQuery),$(".main-content").mCustomScrollbar({theme:"minimal-dark",keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"}}),$(".scrolled.list").mCustomScrollbar({theme:"minimal-dark",keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"}}),$(".chat.list").mCustomScrollbar({theme:"minimal-bright",keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"}}),$(function(){function t(){for(a.length>0&&(a=a.slice(1));a.length<o;){var t=a.length>0?a[a.length-1]:50,e=t+10*Math.random()-5;0>e?e=0:e>100&&(e=100),a.push(e)}for(var i=[],n=0;n<a.length;++n)i.push([n,a[n]]);return i}function e(){n.setData([t()]),n.draw(),setTimeout(e,i)}var a=[],o=300,i=30;$("#updateInterval").val(i).change(function(){var t=$(this).val();t&&!isNaN(+t)&&(i=+t,1>i?i=1:i>2e3&&(i=2e3),$(this).val(""+i))});var n=$.plot("#placeholderRT",[t()],{series:{shadowSize:0},yaxis:{min:0,max:100},xaxis:{show:!1}});e()}),$(function(){$(".cards").each(function(){for(var t=$(this).attr("class"),e=($(t+" > .card"),t+" > .card"),a=$(t+" > .card").length,o='"'+t+'"',i=a-1;i>=0;i--)void 0!=$(o).attr("top-height")&&"undefined"!=typeof $(o).attr("top-height")&&"undefined"!=$(o).attr("top-height")&&$(o).attr("top-height")||$(o).attr("top-height",2),$(e+":nth-child("+i+")").height()>$(o).attr("top-height")-1+1&&$(o).attr("top-height",$(e+":nth-child("+i+")").height()),$(e).height($(o).attr("top-height")),alert(i)})}),$(function(){var t=$(".sidebar > .menu").attr("active-menu");$('.sidebar > .menu > [menu-id="'+t+'"]').addClass("active"),$('.sidebar > .menu > [menu-id!="'+t+'"]').removeClass("active")});


/* Top Menu Activator */
$('.item').menu({
  type: "click",
  showfor: "topmenu",
  callbacks: {
    onOpen: function(){
      
    },
    onVisible: function () {
      
    },
    onClose: function () {
      
    }
  }
});