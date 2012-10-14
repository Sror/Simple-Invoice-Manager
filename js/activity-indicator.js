/*!
 * NETEYE Activity Indicator jQuery Plugin
 * Copyright (c) 2010 NETEYE GmbH
 * Licensed under the MIT license
 * Author: Felix Gnass
 */
(function(a){function d(b,c){var d=document.createElementNS("http://www.w3.org/2000/svg",b||"svg");if(c){a.each(c,function(a,b){d.setAttributeNS(null,a,b)})}return a(d)}a.fn.activity=function(d){this.each(function(){var e=a(this);var f=e.data("activity");if(f){clearInterval(f.data("interval"));f.remove();e.removeData("activity")}if(d!==false){d=a.extend({color:e.css("color")},a.fn.activity.defaults,d);f=b(e,d).css("position","absolute").prependTo(d.outside?"body":e);var g=e.outerHeight()-f.height();var h=e.outerWidth()-f.width();var i={top:d.valign=="top"?d.padding:d.valign=="bottom"?g-d.padding:Math.floor(g/2),left:d.align=="left"?d.padding:d.align=="right"?h-d.padding:Math.floor(h/2)};var j=e.offset();if(d.outside){f.css({top:j.top+"px",left:j.left+"px"})}else{i.top-=f.offset().top-j.top;i.left-=f.offset().left-j.left}f.css({marginTop:i.top+"px",marginLeft:i.left+"px"});c(f,d.segments,Math.round(10/d.speed)/10);e.data("activity",f)}});return this};a.fn.activity.defaults={segments:12,space:3,length:7,width:4,speed:1.2,align:"center",valign:"center",padding:4};a.fn.activity.getOpacity=function(a,b){var c=a.steps||a.segments-1;var d=a.opacity!==undefined?a.opacity:1/c;return 1-Math.min(b,c)*(1-d)/c};var b=function(){return a("<div>").addClass("busy")};var c=function(){};if(document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect){b=function(b,c){var e=c.width*2+c.space;var f=e+c.length+Math.ceil(c.width/2)+1;var g=d().width(f*2).height(f*2);var h=d("g",{"stroke-width":c.width,"stroke-linecap":"round",stroke:c.color}).appendTo(d("g",{transform:"translate("+f+","+f+")"}).appendTo(g));for(var i=0;i<c.segments;i++){h.append(d("line",{x1:0,y1:e,x2:0,y2:e+c.length,transform:"rotate("+360/c.segments*i+", 0, 0)",opacity:a.fn.activity.getOpacity(c,i)}))}return a("<div>").append(g).width(2*f).height(2*f)};if(document.createElement("div").style.WebkitAnimationName!==undefined){var e={};c=function(a,b,c){if(!e[b]){var d="spin"+b;var f="@-webkit-keyframes "+d+" {";for(var g=0;g<b;g++){var h=Math.round(1e5/b*g)/1e3;var i=Math.round(1e5/b*(g+1)-1)/1e3;var j="% { -webkit-transform:rotate("+Math.round(360/b*g)+"deg); }\n";f+=h+j+i+j}f+="100% { -webkit-transform:rotate(100deg); }\n}";document.styleSheets[0].insertRule(f);e[b]=d}a.css("-webkit-animation",e[b]+" "+c+"s linear infinite")}}else{c=function(a,b,c){var d=0;var e=a.find("g g").get(0);a.data("interval",setInterval(function(){e.setAttributeNS(null,"transform","rotate("+ ++d%b*(360/b)+")")},c*1e3/b))}}}else{var f=a("<shape>").css("behavior","url(#default#VML)");a("body").append(f);if(f.get(0).adj){var g=document.createStyleSheet();a.each(["group","shape","stroke"],function(){g.addRule(this,"behavior:url(#default#VML);")});b=function(b,c){var d=c.width*2+c.space;var e=d+c.length+Math.ceil(c.width/2)+1;var f=e*2;var g=-Math.ceil(f/2);var h=a("<group>",{coordsize:f+" "+f,coordorigin:g+" "+g}).css({top:g,left:g,width:f,height:f});for(var i=0;i<c.segments;i++){h.append(a("<shape>",{path:"m "+d+",0  l "+(d+c.length)+",0"}).css({width:f,height:f,rotation:360/c.segments*i+"deg"}).append(a("<stroke>",{color:c.color,weight:c.width+"px",endcap:"round",opacity:a.fn.activity.getOpacity(c,i)})))}return a("<group>",{coordsize:f+" "+f}).css({width:f,height:f,overflow:"hidden"}).append(h)};c=function(a,b,c){var d=0;var e=a.get(0);a.data("interval",setInterval(function(){e.style.rotation=++d%b*(360/b)},c*1e3/b))}}a(f).remove()}})(jQuery)