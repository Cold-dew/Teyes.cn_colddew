var app={};

app.GetQueryString=function(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

app.ispc=function(){
	
     var userAgentInfo = navigator.userAgent;  
     var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");    
     var flag = true;    
     for (var v = 0; v < Agents.length; v++) {    
         if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }    
     }    
     return flag;    
  
}
if(app.ispc()){
			document.write('<script type="text/javascript" src="newscripts/jquery.mCustomScrollbar.concat.min.js"></script><script type="text/javascript" src="newscripts/jquery.mCustomScrollbar.js"></script>')
}

$(function(){
     $(".mobile-inner-header-icon").click(function() {
          $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
          $(".mobile-inner-nav").slideToggle(250);
     });
     $(".mobile-inner-nav a").each(function(index) {
          $(this).css({
               'animation-delay': (index / 10) + 's'
          });
     });

     if(app.ispc()){
          $("#home").mCustomScrollbar({
               scrollInertia:0,
               scrollButtons:{enable:true},
          });
          
     }
})