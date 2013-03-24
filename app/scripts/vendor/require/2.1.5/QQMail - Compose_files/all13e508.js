




























var 
gsAgent=navigator.userAgent.toLowerCase(),
gsAppVer=navigator.appVersion.toLowerCase(),
gsAppName=navigator.appName.toLowerCase(),
gbIsOpera=gsAgent.indexOf("opera")>-1,
gbIsWebKit=gsAgent.indexOf("applewebkit")>-1,
gbIsKHTML=gsAgent.indexOf("khtml")>-1
||gsAgent.indexOf("konqueror")>-1||gbIsWebKit,
gbIsIE=(gsAgent.indexOf("compatible")>-1&&!gbIsOpera)
||gsAgent.indexOf("msie")>-1,
gbIsTT=gbIsIE?(gsAppVer.indexOf("tencenttraveler")!=-1?1:0):0,
gbIsQBWebKit=gbIsWebKit?(gsAppVer.indexOf("qqbrowser")!=-1?1:0):0,
gbIsQPlus=gsAgent.indexOf("qplus")>-1,
gbIsSogou=gsAgent.indexOf("se 2.x metasr 1.0")>-1,
gbIsChrome=gbIsWebKit&&!gbIsQBWebKit&&gsAgent.indexOf("chrome")>-1&&!gbIsSogou&&!gbIsQPlus,
gbIsSafari=gbIsWebKit&&!gbIsChrome&&!gbIsSogou&&!gbIsQBWebKit,
gbIsQBIE=gbIsIE&&gsAppVer.indexOf("qqbrowser")!=-1,
gbIsFF=gsAgent.indexOf("gecko")>-1&&!gbIsKHTML,
gbIsNS=!gbIsIE&&!gbIsOpera&&!gbIsKHTML&&(gsAgent.indexOf("mozilla")==0)
&&(gsAppName=="netscape"),
gbIsAgentErr=!(gbIsOpera||gbIsKHTML||gbIsSafari||gbIsIE||gbIsTT
||gbIsFF||gbIsNS),
gbIsWin=gsAgent.indexOf("windows")>-1||gsAgent.indexOf("win32")>-1,
gbIsVista=gbIsWin&&(gsAgent.indexOf("nt 6.0")>-1||gsAgent.indexOf("windows vista")>-1),
gbIsWin7=gbIsWin&&gsAgent.indexOf("nt 6.1")>-1,
gbIsMac=gsAgent.indexOf("macintosh")>-1||gsAgent.indexOf("mac os x")>-1,
gsMacVer=/mac os x (\d+)(\.|_)(\d+)/.test(gsAgent)&&parseFloat(RegExp.$1+"."+RegExp.$3),
gbIsLinux=gsAgent.indexOf("linux")>-1,
gbIsAir=gsAgent.indexOf("adobeair")>-1,
gnIEVer=/MSIE (\d+.\d+);/i.test(gsAgent)&&parseFloat(RegExp["$1"]),
gsFFVer=/firefox\/((\d|\.)+)/i.test(gsAgent)&&RegExp["$1"],
gsSafariVer=""+(/version\/((\d|\.)+)/i.test(gsAgent)&&RegExp["$1"]),
gsChromeVer=""+(/chrome\/((\d|\.)+)/i.test(gsAgent)&&RegExp["$1"]),
gsQBVer=""+(/qqbrowser\/((\d|\.)+)/i.test(gsAgent)&&RegExp["$1"]),

Vw="_For_E_Built";




if(document.domain!="qq.com"||!window.getTop)
{
document.domain="qq.com";






function getTop()
{
var od=arguments.callee;

if(!od.Bl)
{
try
{
if(window!=parent)
{
od.Bl=parent.getTop?parent.getTop():parent.parent.getTop();
}
else
{
od.Bl=window;
}
}
catch(aL)
{
od.Bl=window;
}
}

return od.Bl;
};

window.getTop=getTop;
}







function callBack(cd,ki)
{
if(!window.Console)
{
try
{
return callBack.Dc.call(this,cd,ki);
}
catch(aL)
{
debug(aL.message);
}
}
else
{
return callBack.Dc.call(this,cd,ki);
}
}







callBack.Dc=function(cd,ki)
{
return typeof cd=="function"
?cd.apply(this,ki||[]):null;
};










function waitFor(GW,zp,
qF,pq)
{
var hu=0,
iD=qF||500,
GT=(pq||10*500)/iD;

function XH(na)
{
try
{
zp(na)
}
catch(aL)
{
debug(aL,2);
}
};

(function()
{
try
{
if(GW())
{
return XH(true);
}
}
catch(aL)
{
debug(aL,2);
}

if(hu++>GT)
{
return XH(false);
}

setTimeout(arguments.callee,iD);
})();
}






function unikey(vI)
{
return[vI,now(),Math.random()].join("").split(".").join("");
}




function genGlobalMapIdx()
{
return Math.round(Math.random()*10000).toString()+new Date().getMilliseconds();
}






function isLeapYear(fL)
{
return(fL%400==0||(fL%4==0&&fL%100!=0));
}







function calDays(fL,gT)
{
return[null,31,null,31,30,31,30,31,31,30,31,30,31][gT]||(isLeapYear(fL)?29:28);
}





function now()
{
return+new Date;
}






function trim(bj)
{
return(bj&&bj.replace?bj:"").replace(/(^\s*)|(\s*$)/g,"");
}

function trim2(bj)
{


if(bj&&bj.substring)
{
var rb=/\s/,xC=-1,xH=bj.length;
while(rb.test(bj.charAt(--xH)));
while(rb.test(bj.charAt(++xC)));
return bj.substring(xC,xH+1);
}

}












function strReplace(bj,FT,aSl,cv)
{
return(bj||"").replace(
new RegExp(regFilter(FT),cv),aSl);
}






function encodeURI(bj)
{
return bj&&bj.replace?bj.replace(/%/ig,"%25").replace(/\+/ig,"%2B")
.replace(/&/ig,"%26").replace(/#/ig,"%23")
.replace(/\'/ig,"%27").replace(/\"/ig,"%22"):bj;
}






function decodeURI(bj)
{
return decodeURIComponent(bj||"");
}






function regFilter(DG)
{
return DG.replace(/([\^\.\[\$\(\)\|\*\+\?\{\\])/ig,"\\$1");
}






function isUrl(fM)
{
return(fM||"").replace(
/http?:\/\/[\w.]+[^ \f\n\r\t\v\"\\\<\>\[\]\u2100-\uFFFF]*/,"url")=="url";
}













function cookQueryString(be,aM)
{
var hH=be.split("#"),
aDU=hH[1]?("#"+hH[1]):"";

be=hH[0];

for(var i in aM)
{
var cW=aM[i],
cS=new RegExp(["([?&]",i,"=)[^&#]*"].join(""),"gi");

be=cS.test(be)?
be.replace(cS,"$1"+cW):[be,"&",i,"=",cW,aDU].join("");
}
return be;
}









function formatNum(hQ,anF)
{
var rq=(isNaN(hQ)?0:hQ).toString(),
Si=anF-rq.length;
return Si>0?[new Array(Si+1).join("0"),rq].join(""):rq;
}







function numToStr(hQ,aPH)
{
var rq=String(hQ.toFixed(aPH));
var re=/(-?\d+)(\d{3})/;
while(re.test(rq))
{
rq=rq.replace(re,"$1,$2");
}
return rq;
}




function numToTimeStr(hQ,rg)
{
var ZK=rg||"$HH$:$MM$:$SS$";
return	T(ZK).replace({
SS:formatNum(parseInt(hQ)%60,2),
MM:formatNum(parseInt(hQ/60)%60,2),
HH:formatNum(parseInt(hQ/3600)%60,2)
})
}








function formatDate(iN,rg,ayl)
{
var cO=iN||new Date(),
yh=formatNum;

return T(rg,ayl).replace({
YY:yh(cO.getFullYear(),4),
MM:yh(cO.getMonth()+1,2),
DD:yh(cO.getDate(),2),
hh:yh(cO.getHours(),2),
mm:yh(cO.getMinutes(),2),
ss:yh(cO.getSeconds(),2),
ww:outputDayOfWeek(cO.getDay())
});
}

function formatDayByLocale(iN,rg,ayl)
{

var cO=iN||new Date(),
yh=formatNum,bhl=getLocale();
var aUW={
"zh_CN":
{
"%YY%-%MM%":"%YY%\u5E74%MM%\u6708",
"%YY%-%MM%-%DD%":"%YY%\u5E74%MM%\u6708%DD%\u65E5",
"%YY%-%MM%-%DD%-%WW%":"%YY%\u5E74%MM%\u6708%DD%\u65E5 %WW%",
"%MM%-%DD%":"%MM%\u6708%DD%\u65E5",
"%YY%-%MM%-%DD%-%HH%-%MMMM%":"%YY%\u5E74%MM%\u6708%DD%\u65E5%HH%\u65F6%MMMM%\u5206"
},
"en_US":
{
"%YY%-%MM%":"%MM% %YY%",
"%YY%-%MM%-%DD%":"%MM% %DD%, %YY%",
"%YY%-%MM%-%DD%-%WW%":"%WW%, %MM% %DD%, %YY%",
"%MM%-%DD%":"%MM% %DD%",
"%YY%-%MM%-%DD%-%HH%-%MMMM%":"%MM% %DD%, %YY% %HH%:%MMMM%"
}
};



return T(aUW[bhl][rg],ayl).replace({
YY:yh(cO.getFullYear(),4),
MM:outputMonth(cO.getMonth()),
DD:yh(cO.getDate(),2),
WW:outputDayOfWeek(cO.getDay(),true),
HH:yh(cO.getHours(),2),
MMMM:yh(cO.getMinutes(),2)
});
}

function formatDateByLocale(iN)
{

return formatDayByLocale(new Date(iN.year,parseInt(iN.month)-1,iN.day||"1"),iN.pattern,"%");
}
function outputMonth(gT)
{
var bhl=getLocale();
var avA=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
var erV=["January","February","March","April","May","June","July","Aguest","September","October","November","December"];
if(bhl=="en_US")
{
return avA[gT];
}
else
{
return gT+1;
}
}

function outputDayOfWeek(cZp,crC)
{
var bhl=getLocale(),aXU;

if(bhl=="en_US")
{
if(!crC)
{
aXU=["S","M","T","W","T","F","S"];
}
else
{
aXU=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
}
}
else
{
if(crC)
{
aXU=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"];
}
else
{
aXU=["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"];
}
}
return aXU[cZp];
}






function getAsiiStrLen(bj)
{
return(bj||"").replace(/[^\x00-\xFF]/g,"aa").length;
}





function clearHtmlStr(bj)
{
return bj?bj.replace(/<[^>]*>/g,""):bj;
}








function subAsiiStr(bj,vV,Ju,xR)
{
var uI=function(fM){return fM},
ya=xR?htmlEncode:uI,
eV=(xR?htmlDecode:uI)(trim((bj||"").toString())),
rn=Ju||"",
Ke=Math.max(vV-rn.length,1),
JX=eV.length,
qV=0,
rc=-1,
nm;

for(var i=0;i<JX;i++)
{
nm=eV.charCodeAt(i);


qV+=nm==35||nm==87
?1.2
:(nm>255?1.5:1);

if(rc==-1&&qV>Ke)
{
rc=i;
}

if(qV>vV)
{
return ya(eV.substr(0,rc))+rn;
}
}

return ya(eV);
}













function setCookie(aI,bC,jN,ei,iA,lI)
{
if(aI)
{
document.cookie=T(
[
'$name$=$value$; ',
!jN?'':'expires=$expires$; ',
'path=$path$; ',
'domain=$domain$; ',
!lI?'':'$secure$'
]
).replace(
{
name:aI,
value:encodeURIComponent(bC||""),
expires:jN&&jN.toGMTString(),
path:ei||'/',
domain:iA||["mail.",getDomain()].join(""),
secure:lI?"secure":""
}
);
return true;
}
else
{
return false;
}
}






function getCookie(aI)
{
var hc=(new RegExp(["(^|;|\\s+)",regFilter(aI),"=([^;]*);?"].join("")));

if(hc.test(document.cookie))
{

try
{
return decodeURIComponent(RegExp["$2"]);
}
catch(e)
{
return RegExp["$2"];
}
}
}







function deleteCookie(aI,ei,iA)
{
setCookie(aI,"",new Date(0),ei,iA);
}









function setCookieFlag(aI,dB,tT,adp)
{
var iV=adp||getCookieFlag(aI),
xT=new Date();


xT.setTime(xT.getTime()+(30*24*3600*1000));
iV[dB]=tT;
setCookie(aI,iV.join(""),xT);

return iV;
}






function getCookieFlag(aI)
{
var xs=(getCookie(aI)||"").split("");

for(var i=xs.length;i<6;i++)
{
xs[i]='0';
}

return xs;
}








function isArr(aM)
{
return Object.prototype.toString.call(aM)=="[object Array]";
}









function E(rL,zU,LC,yV)
{
if(!rL)
{
return;
}

if(rL.length!=null)
{
var aB=rL.length,
fq;

if(yV<0)
{
fq=aB+yV;
}
else
{
fq=yV<aB?yV:aB;
}

for(var i=(LC||0);i<fq;i++)
{
try
{
if(zU(rL[i],i,aB)===false)
{
break;
}
}
catch(aL)
{
debug([aL.message,"<br>line:",aL.lineNumber,'<br>file:',aL.fileName,"<br>",zU]);
}
}
}
else
{
for(var i in rL)
{
try
{
if(zU(rL[i],i)===false)
{
break;
}
}
catch(aL)
{
debug([aL.message,"<br>",zU]);
}
}
}
}









function extend()
{
for(var aR=arguments,qC=aR[0],i=1,aB=aR.length;i<aB;i++)
{
var rz=aR[i];
for(var j in rz)
{
qC[j]=rz[j];
}
}
return qC;
}







function delAtt(au,Dl)
{
try
{
delete au[Dl];
}
catch(aL)
{
}
return au;
}







function saveAtt(au,Dl)
{
if(au)
{
var aRQ=au.hasOwnProperty(Dl),
eh=au[Dl];
return function()
{
if(aRQ)
{
au[Dl]=eh;
}
else
{
delAtt(au,Dl);
}
return au;
};
}
else
{
return function(){};
}
}









function globalEval(fT,nH)
{
var qZ=getTop().globalEval||arguments.callee;

if(!qZ.JN&&typeof(qZ.Wa)!="boolean")
{
var aJ="testScriptEval"+now();

qZ.JN=true;
qZ(T('window.$id$=1;').replace({
id:aJ
}));
qZ.JN=false;

qZ.Wa=getTop()[aJ]?true:false;
}

var gH=trim(fT);
if(!gH)
{
return false;
}

var aH=(nH||window).document,
pM=GelTags("head",aH)[0]||aH.documentElement,
eP=aH.createElement("script");

eP.type="text/javascript";
if(qZ.Wa||arguments.callee.JN)
{
try
{
eP.appendChild(aH.createTextNode(gH));
}
catch(aL)
{
}
}
else
{

eP.text=gH;
}
pM.insertBefore(eP,pM.firstChild);
pM.removeChild(eP);

return true;
}





function evalValue(fT,nH)
{
var aV=unikey("_u"),
ap=nH||window,
iV;

globalEval(
[
"(function(){try{window.",aV,"=",fT,";}catch(_oError){}})();"
].join(""),
ap
);
iV=ap[aV];
ap[aV]=null;

return iV;
}







function evalCss(aHd,nH,Kk)
{
if(aHd)
{
var aH=nH?nH.document||nH:document,
aHs="cssfrom",
aVQ="style",
BN=aH.getElementsByTagName(aVQ)[0];

if(Kk&&BN)
{
var aci=BN.getAttribute(aHs)||"";
if(aci.indexOf(Kk)!=-1)
{
return;
}
}

if(aH.createStyleSheet)
{
BN=BN||aH.createStyleSheet().owningElement;
BN.styleSheet.cssText+=getRes(aHd);
}
else
{

if(!BN)
{
var wx=aH.getElementsByTagName("head")[0];
BN=aH.createElement(aVQ);
BN.type="text/css";
wx.insertBefore(BN,wx.firstChild);
}
BN.textContent+=getRes(aHd);
}
Kk&&BN.setAttribute(
aHs,[BN.getAttribute(aHs)||"",Kk].join(",")
);
}
}







function S(ay,ce)
{
try
{
return(ce&&(ce.document||ce)
||document).getElementById(ay);
}
catch(aL)
{
return null;
}
}







function SN(aI,ce)
{
try
{
var xL=(ce&&(ce.document||ce)
||document).getElementsByName(aI);
if(xL)
{
xL[Vw]=true;
}
return xL;
}
catch(aL)
{
return null;
}
}









function attr(an,eb,bC)
{

if(!an||!an.nodeType||an.nodeType===3||an.nodeType===8)
{
return undefined;
}
if(bC===undefined)
{
return an.getAttribute(eb);
}
else
{
an.setAttribute(eb,bC);
return an;
}
}







function GelTags(pQ,aQ)
{
var xL=(aQ||document).getElementsByTagName(pQ);
if(xL)
{
xL[Vw]=true;
}
return xL;

}







function CN(XZ,an,iR)
{
an=an||document;

if(an.getElementsByClassName)
{
return an.getElementsByClassName(XZ);
}
else
{
iR=iR||"*";
var QB=[],
aiu=(iR=='*'&&an.all)?an.all:an.getElementsByTagName(iR),
i=aiu.length;
XZ=XZ.replace(/\-/g,'\\-');
var hc=new RegExp('(^|\\s)'+XZ+'(\\s|$)');
while(--i>=0)
{
if(hc.test(aiu[i].className))
{
QB.push(aiu[i]);
}
}
return QB;
}
};







function F(ay,ak)
{
var uq=S(ay,ak);
return uq&&(uq.contentWindow||(ak||window).frames[ay]);
}

function appendToUrl(be,aPb)
{
var hH=be.split("#");
return[hH[0],aPb,(hH.length>1?"#"+hH[1]:"")].join("");
}









function insertHTML(aQ,eQ,cr)
{
if(!aQ)
{
return false;
}
try
{

if(aQ.insertAdjacentHTML)
{
aQ.insertAdjacentHTML(eQ,cr);
}
else
{
var bI=aQ.ownerDocument.createRange(),
jk=eQ.indexOf("before")==0,
vi=eQ.indexOf("Begin")!=-1;
if(jk==vi)
{
bI[jk?"setStartBefore":"setStartAfter"](aQ);
aQ.parentNode.insertBefore(
bI.createContextualFragment(cr),vi
?aQ
:aQ.nextSibling
);
}
else
{
var cq=aQ[jk?"lastChild":"firstChild"];
if(cq)
{
bI[jk?"setStartAfter":"setStartBefore"](cq);
aQ[jk?"appendChild":"insertBefore"](bI
.createContextualFragment(cr),cq);
}
else
{

aQ.innerHTML=cr;
}
}
}
return true;
}
catch(aL)
{

return false;
}
}

















function setHTML(Vc,cr)
{
var UZ=typeof Vc==="string"?S(Vc):Vc,
Tb=UZ.cloneNode(false);
Tb.innerHTML=cr;
UZ.parentNode.replaceChild(Tb,UZ);
return Tb;
}



















function createIframe(ak,pl,cj)
{
var Au="_creAteifRAmeoNlQAd_",
cM=cj||{},
aJ=cj.id||unikey(),
nx=S(aJ,ak);


typeof ak[Au]!="function"&&
(ak[Au]=function(ay,axL)
{
callBack.call(axL,arguments.callee[ay],[ak]);
}
);


ak[Au][aJ]=cj.onload;
if(!nx)
{
insertHTML(
cM.obj||ak.document.body,
cM.where||"afterBegin",
TE([
'<iframe frameborder="0" scrolling="$scrolling$" id="$id$" name="$id$" ',
'$@$if($transparent$)$@$allowTransparent$@$endif$@$ class="$className$" ',
'onload="this.setAttribute(\x27loaded\x27,\x27true\x27);$cb$(\x27$id$\x27,this);" ',
'src="$src$" style="$style$" $attrs$>',
'</iframe>'
]).replace(extend(
{
"id":aJ,
"cb":Au,
style:"display:none;",
scrolling:"no",
src:pl
}
,cj))
);
nx=S(aJ,ak);
nx.ava=cj.onload;
}
else if(nx.getAttribute("loaded")=="true")
{
ak[Au](aJ,nx);
}

return nx;
}





function removeSelf(aQ)
{
try
{
aQ.parentNode.removeChild(aQ);
}
catch(aL)
{
}

return aQ;
}







function isObjContainTarget(aQ,cV)
{
try
{
if(!aQ||!cV)
{
return false;
}
else if(aQ.contains)
{
return aQ.contains(cV);
}
else if(aQ.compareDocumentPosition)
{
var xP=aQ.compareDocumentPosition(cV);
return(xP==20||xP==0);
}
}
catch(FJ)
{


}

return false;
}






function isDisableCtl(aae,ak)
{
var aqo=SN(aae,ak);
for(var i=aqo.length-1;i>=0;i--)
{
if(aqo[i].disabled)
{
return true;
}
}
return false;
}







function disableCtl(aae,mM,ce)
{
E(SN(aae,ce),function(IP)
{
var daj=IP.disabled;
IP.disabled=mM;


if(!gbIsIE&&IP.tagName.toUpperCase()=="A")
{
if(daj!=mM)
{

var bEe="oldstyledisplay",
cnp="disablednodeid";
if(mM)
{
var bpv=unikey();
var aQx=IP.cloneNode(true);
addClass(aQx," btn_disabled");
aQx.name="";
aQx.id=bpv;
IP.parentNode.insertBefore(aQx,IP);
attr(IP,bEe,IP.style.display);
attr(IP,cnp,bpv);
IP.style.display="none";
}
else
{
var bpv=attr(IP,"disablednodeid");
var aQx=S(bpv,ce);
IP.style.display=attr(IP,bEe);
removeSelf(aQx);
attr(IP,bEe,"");
attr(IP,cnp,"");
}
}
}
}
);
}


(function(aT)
{
var	ag=getTop(),

TM=/\[([\w\-_]+)(=[\'\"]?([\w\-_~@]+)[\'\"]?)?\]/,
TV=/\[[\w\-_]+(=[\'\"]?[\w\-_~@]+[\'\"]?)?\]/g,
aaM=/^([#\$<:])([\w\-_]+)>?$/,
SD=/.*?\.([\w\-_]+)/,
Fk=/(?:[\w\-~@\\.#\[\]=\'\"]+)+|\*|>/ig,
vX=/#([\w\-_]+)/,
wi=/^([\w\*\-_]+)/,

ka=[aT,aT];

function nN(au)
{
for(var i=0,gg=[],aB=au.length;i<aB;i++)
{
gg[i]=au[i];
}
return gg;
}


function pA(eE,Gl,rU,TF)
{
var vm=!Gl||Gl.test(eE.className),
i=0,vR,vP;

while(vm&&i<TF)
{
vR=eE.getAttribute((vP=rU[i++])[1]);
vm=vP[2]?vR===vP[3]:!!vR;
}
return vm;
}


function wj(eJ)
{
var cX=eJ.match(TV);
if(cX)
{
for(i=cX.length-1;i>=0;i--)
{
cX[i]=cX[i].match(TM);
}
}
return cX;
}


function xn(eJ)
{
var hR=(eJ.match(SD)||ka)[1];
return hR&&RegExp('(^|\\s)'+hR+'(\\s|$)');
}

function ru(rj,sR,Uz)
{
var og=rj.pop();

if(og==='>')
{
return ru(rj,sR,true);
}

var aJ=(og.match(vX)||ka)[1],
gA=xn(og),
eC=(og.match(wi)||ka)[1],
cX=wj(og),
iB=cX?cX.length:0,
cF=[],
Ra=-1,
dZ=-1,
bM,
eF,
vQ;


eC&&(eC=eC=="*"?"":eC.toUpperCase());

while((bM=sR[++dZ]))
{
eF=bM.parentNode;

do
{
vQ=(!aJ||eF.id===aJ)&&
(!eC||eF.nodeName==eC)&&
pA(eF,gA,cX,iB);

if(Uz||vQ)
{
break;
}

}
while((eF=eF.parentNode)&&eF.getAttribute);

vQ&&(cF[++Ra]=bM);
}

return rj[0]&&cF[0]?ru(rj,cF):cF;
}


function bMQ(eJ,an)
{
if(!an)
{
return[];
}
var fG=eJ.match(Fk),
iq=fG.pop(),
aJ=(iq.match(vX)||ka)[1],
gA=xn(iq),
cX=wj(iq),
iB=cX?cX.length:0,
eC=(iq.match(wi)||ka)[1],
bei=[],
cT=[],
i=-1,
dZ=-1,
bM;

while((an=an.parentNode)&&an.nodeType!==9)
{
bei.push(an);
}

eC&&(eC=eC=="*"?"":eC.toUpperCase());

while(bM=bei[++i])
{
(!aJ||bM.id===aJ)&&
(!eC||bM.nodeName==eC)&&
pA(bM,gA,cX,iB)&&
(cT[++dZ]=bM);
}

return fG[0]&&cT[0]?ru(fG,cT):cT;
}

function uD(eJ,bT)
{
if(!bT)
{
return[];
}

if(bT.querySelectorAll)
{
return nN(bT.querySelectorAll(eJ));
}

var fG=eJ.match(Fk),
iq=fG.pop(),
aJ=(iq.match(vX)||ka)[1],
gA=xn(iq),
cX=wj(iq),
iB=cX?cX.length:0,
eC=(iq.match(wi)||ka)[1],
cT;


if(aJ)
{
var aH=(bT||window).document||bT,
aw=aH.getElementById(aJ);

if(!aw||(eC&&aw.nodeName!=eC.toUpperCase())||
!pA(aw,gA,cX,iB))
{
return[];
}
cT=[aw];
}
else
{
var da=bT.getElementsByTagName?bT:bT.document,
kt=da.getElementsByTagName(eC||'*');

if(gA||iB)
{
var i=-1,dZ=-1,bM;
cT=[];
if(!iB)
{
while(bM=kt[++i])
{
gA.test(bM.className)&&(cT[++dZ]=bM);
}
}
else
{
while(bM=kt[++i])
{
pA(bM,gA,cX,iB)&&(cT[++dZ]=bM);
}
}
}
else
{
cT=nN(kt);
}
}

return fG[0]&&cT[0]?ru(fG,cT):cT;
}

window.finds=uD;
window.parents=bMQ;
})();








function isShow(ne,ce)
{
return(getStyle((typeof(ne)=="string"?S(ne,ce):ne),"display")||"none")
!="none";
}







function show(ne,kg,ce)
{
var cq=(typeof(ne)=="string"?S(ne,ce):ne);
if(cq)
{
cq.style.display=(kg?"":"none");
}
else if(!ce&&typeof(ne)=="string")
{

}
return cq;
}


var Show=show;





function toggle(ne,ce)
{
return show(ne,!isShow(ne,ce),ce);
}







function setClass(aQ,lb)
{
if(aQ&&typeof(lb)!="undefined"&&aQ.className!=lb)
{
aQ.className=lb;
}
return aQ;
}







function addClass(aQ,lb)
{
if(aQ)
{
var hR=" "+aQ.className+" ";
if(hR.indexOf(" "+lb+" ")<0)
{
aQ.className+=aQ.className?" "+lb:lb;
}
}
return aQ;
};







function rmClass(aQ,lb)
{
if(aQ)
{
if(lb)
{
var hR=" "+aQ.className+" ";
hR=hR.replace(" "+lb+" "," ");
aQ.className=trim(hR);
}
else
{
aQ.className="";
}
}
return aQ;
};





function hasClass(aQ,lb)
{
return aQ&&(" "+aQ.className+" ").indexOf(" "+lb+" ")>-1;
};







function getStyle(aQ,auO)
{
var nF=aQ&&(aQ.currentStyle
?aQ.currentStyle
:aQ.ownerDocument.defaultView.getComputedStyle(aQ,null));
return nF&&nF[auO]||"";
}







function setOpacity(aQ,Zy)
{
if(aQ&&aQ.tagName)
{
var cB=aQ.style,
sB=Zy||0;











if(typeof cB.opacity=="undefined")
{
cB.filter=sB==1
?"":["alpha(opacity=",sB*100,")"].join("");
}
else
{
cB.opacity=sB;
}
}
return aQ;
}






function getOpacity(aQ,Zy)
{
if(aQ&&aQ.tagName)
{
var cB=aQ.style,
sB=1;









if(typeof cB.opacity=="undefined")
{
sB=parseFloat(cB.filter.split("=").pop())/100;
}
else
{
sB=parseFloat(cB.opacity);
}

if(isNaN(sB))
{
sB=1;
}
}
return sB;
}






function getStrDispLen(bj)
{
var ard="__QMStrCalcer__";
var QN=S(ard,getTop());
if(!QN)
{
var cg=getTop().document.body;
insertHTML(
cg,
"afterBegin",
T([
'<div id="$id$" ',
'style="width:1px;height:1px;overflow:auto;*overflow:hidden;white-space:nowrap;',
'position:absolute;left:0;top:0;">','</div>']).replace({
id:ard
})
);
QN=cg.firstChild;
}
QN.innerHTML=htmlEncode(bj);
return QN.scrollWidth;
}







function calcPos(aQ,VS)
{
var bR=0,
di=0,
cH=0,
cs=0;

if(aQ&&aQ.tagName)
{
var IO=aQ,
cq=aQ.parentNode,
VB=aQ.offsetParent,
aH=aQ.ownerDocument,
ge=aH.documentElement,
cg=aH.body;

di+=aQ.offsetLeft;
bR+=aQ.offsetTop;
cH=aQ.offsetWidth;
cs=aQ.offsetHeight;

while(VB&&cq&&cq!=ge&&cq!=cg)
{
if(calcPos.apm()&&IO.style&&getStyle(IO,"position")==="fixed")
{
break;
}

if(VB==cq)
{
di+=cq.offsetLeft;
bR+=cq.offsetTop;
VB=cq.offsetParent;
}

di-=cq.scrollLeft;
bR-=cq.scrollTop;
IO=cq;
cq=cq.parentNode;

}

if(calcPos.apm()&&IO.style&&getStyle(IO,"position")==="fixed")
{
di+=bodyScroll(aH,'scrollLeft');
bR+=bodyScroll(aH,'scrollTop');
}
}

return VS=="json"
?{top:bR,bottom:bR+cs,left:di,
right:di+cH,width:cH,height:cs}
:[bR,di+cH,bR+cs,di,cH,cs];
}

calcPos.apm=function()
{

var aSQ,
ae=this;
if(ae.apc==aSQ)
{
var cu=document.createElement("div");
cu.style.cssText="'position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;";
cu.innerHTML="<div style='position:fixed;top:20px;'></div>";
document.body.appendChild(cu);
ae.apc=!!{20:1,15:1}[cu.firstChild.offsetTop];
}
return ae.apc;
};







function calcPosFrame(aQ,ak)
{
ak=ak||window;
var jF=calcPos(aQ),
ag=getTop();
while(ak.frameElement&&ak!=ag)
{
var eY=calcPos(ak.frameElement);
for(var i=0;i<4;i++)
{

jF[i]+=eY[i&1?3:0]-bodyScroll(ak,i&1?"scrollLeft":"scrollTop");

}
ak=ak.parent;
}
return jF;
}










function calcAdjPos(jZ,kE,iv,ak,ee)
{
var GY=bodyScroll(ak,'clientHeight'),
avx=bodyScroll(ak,'clientWidth'),
ze=bodyScroll(ak,'scrollTop'),
ZB=bodyScroll(ak,'scrollLeft'),
LZ=ze+GY,
aqY=ZB+avx,
aF=[0,0,0,0];
if(ee<2)
{

var kU=ZB-jZ[1];
if(ee==0&&jZ[3]<kE
||ee==1&&aqY-jZ[1]>kE)
{

aF[1]=(aF[3]=jZ[1])+kE;
}
else
{

aF[3]=(aF[1]=jZ[3])-kE;
}
if(jZ[0]+iv>LZ)
{


aF[0]=(aF[2]=(jZ[2]-iv<ze?LZ:jZ[2]))-iv;
}
else
{

aF[2]=(aF[0]=jZ[0])+iv;
}
}
else
{

if(ee==2&&jZ[0]-ze<iv
||ee==3&&LZ>jZ[2]+iv)
{

aF[2]=(aF[0]=jZ[2])+iv;
}
else
{

aF[0]=(aF[2]=jZ[0])-iv;
}
aF[1]=jZ[1];
aF[3]=jZ[3];
}
return aF;
}







function bodyScroll(ce,aq,bX)
{
var aH=(ce||window).document||ce,
cg=aH.body,
qS=aH.documentElement;

if(typeof(bX)=="number")
{
cg[aq]=qS[aq]=bX;
}
else
{
if(aq=="scrollTop"&&typeof ce.pageYOffset!="undefined")
{
return ce.pageYOffset;
}
else
{
return qS[aq]||cg[aq];
}
}
}








function htmlDecode(bj)
{
return bj&&bj.replace?(bj.replace(/&nbsp;/gi," ").replace(/&lt;/gi,"<").replace(/&gt;/gi,">")
.replace(/&quot;/gi,"\"").replace(/&#39;/gi,"'").replace(/&amp;/gi,"&")
):bj;
}






function htmlEncode(bj)
{
return bj&&bj.replace?(bj.replace(/&/g,"&amp;").replace(/\"/g,"&quot;")
.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\'/g,"&#39;")):bj;
}







function filteScript(bj,aPP)
{
return bj
&&bj.replace(/<script ?.*>(.*?)<\/script>/ig,
"<script>$1\n</script>"
).replace(/<script ?.*>([\s\S]*?)<\/script>/ig,aPP||"");
}






function textToHtml(eK)
{

return[
'<DIV>',
eK.replace((eK.indexOf("<BR>")>=0)?/<BR>/ig:/\n/g,
"</DIV><DIV>"
),
"</DIV>"
].join("")
.replace(new RegExp("\x0D","g"),"")
.replace(new RegExp("\x20","g"),"&nbsp;")
.replace(new RegExp("(<DIV><\/DIV>)*$","g"),"")
.replace(/<DIV><\/DIV>/g,"<DIV>&nbsp;</DIV>");
}






function textToHtmlForNoIE(eK)
{
return eK.replace(/\n/g,"<br>");
}






function htmlToText(eK)
{
return eK

.replace(/\n/ig,"")

.replace(/(<\/div>)|(<\/p>)|(<br\/?>)|(<\/li>)/ig,"\n");
}






function fixNonBreakSpace(bj)
{
return(bj||"").replace(/\xA0/ig," ");
}









function pasteHTML(HY,Sl,aSe,ak)
{
ak=ak||getMainWin();
HY=filteScript(HY);
var aS=(typeof(Sl)=="string"?S(Sl,ak):Sl);
if(!aS||!HY)
{
return false;
}
if(aSe)
{
aS.innerHTML=HY;
}
else
{
insertHTML(aS,"afterBegin",HY);
}
return true;
}







function T(fo,hZ)
{
return new T.ny(fo,hZ);
}









































function TE(fo,hZ)
{
var ag=getTop();
if(ag.QMTmplChecker)
{
var aL=(new ag.QMTmplChecker(fo.join?fo:[fo],
hZ)).getErrors();
if(aL.length)
{
debug(aL.join("\n"),"code");
}
}
return new T.ny(fo,hZ,"exp");
}

T.ny=function(fo,hZ,aq)
{
this.pC=fo.join?fo.join(""):fo.toString();
this.lQ=hZ||"$";
this.Ha=aq=="exp"
?this.GQ
:this.GO;
};

T.ny.prototype=
{
toString:function()
{
return this.pC;
},

replace:function(eG,hY,uk)
{
return this.Ha(eG,hY,uk);
},

GO:function(eG,Rc,Hj)
{
var ae=this,
jH=ae.lQ,
iu=ae.uT,
pE=ae.Hk,
vb=!iu,
FZ=Rc?ae.QX:ae.ik;

if(vb)
{

iu=ae.uT=ae.pC.split(ae.lQ);
pE=ae.Hk=ae.uT.concat();
}

for(var i=1,aB=iu.length;i<aB;i+=2)
{
pE[i]=FZ.call(ae,vb?(iu[i]=iu[i].split("."))
:iu[i],eG,Hj,jH);
}

return pE.join("");
},

GQ:function(eG,hY,uk)
{
var ae=this,
iw;

if(!ae.vs)
{
ae.Ht();
}

if(typeof hY=="string")
{
var lK=ae.uU[hY];
if(lK)
{
iw=typeof lK!="function"
?ae.uU[hY]=ae.vf(lK)
:lK;
}
}
else
{
iw=ae.vs;
}

try
{
return iw&&iw(eG,ae.Fn,
ae.ik,ae.lQ,htmlEncode,uk||hY)||"";
}
catch(aL)
{
return aL.message;
}
},




Ht:function()
{
var ae=this,
fu=0,
ea=[],
pD=[],
pI=[],
Hh=ae.uU=[],
jH=ae.lQ,
hc=new RegExp(["","(.*?)",""].join(regFilter(jH)),"g"),
jO="_afG('$1'.split('.'),_oD,_aoD,_aoR)",
ov=ae.Fn=ae.pC.split(["","@",""].join(jH)),
cz;

for(var i=0,aB=ov.length;i<aB;i++)
{
cz=ov[i];

if(i%2==0)
{
ea.push("_oR.push(_aoT[",i,"].replace(_oD,false,_aoD));");
ov[i]=T(cz,jH);
}
else if(cz=="else")
{
ea.push("}else{");
}
else if(cz=="endsec")
{
if(pI.length)
{
var as=pI.pop();
Hh[as[0]]=ea.slice(as[1]);
}
}
else if(cz=="endfor")
{
pD.length&&ea.push(
"try{delete _oD._parent_;delete _oD._idx_;}catch(e){}}_oD=_oS",pD.pop(),";");
}
else if(cz=="endif")
{
ea.push("}");
}
else if(cz.indexOf("else if(")==0)
{
ea.push("}",cz.replace(hc,jO),"{");
}
else if(cz.indexOf("if(")==0)
{
ea.push(cz.replace(hc,jO),"{");
}
else if(cz.indexOf("for(")==0)
{
pD.push(++fu);
ea.push(
"var _sI",fu,",_oD",fu,",_oS",fu,"=_oD;",
cz.replace(hc,
["_sI",fu," in (_oD",fu,"=",jO,")"].join("")),
"{",
"_oD=_oD",fu,"[_sI",fu,"];",
"if(!_oD){continue;}",
"try{_oD._parent_=_oS",fu,";",
"_oD._idx_=_sI",fu,";}catch(e){}"
);
}
else if(cz.indexOf("sec ")==0)
{
pI.push([cz.split(" ").pop(),ea.length]);
}
else if(cz.indexOf("eval ")==0)
{
ea.push("_oR.push(",cz.substr(5).replace(hc,jO),");");
}
else if(cz.indexOf("html(")==0)
{
ea.push("_oR.push(_afE(",cz.substr(5).replace(hc,jO),");");
}
}

ae.vs=ae.vf(ea);

return ea;
},

vf:function(Hu)
{
try
{
return eval(
[
'([function(_aoD,_aoT,_afG,_aoR, _afE, A){var _oR=[],_oD=_aoD;',
Hu.join(""),
'return _oR.join("");}])'
].join("")
)[0];
}
catch(fO)
{
return function(){return"compile err!"};
}
},

QX:function(jf,eG,rH,lh)
{
var eh=this.ik(jf,eG,rH,lh);
return typeof eh=="undefined"?lh+jf.join(".")+lh:eh;
},

ik:function(jf,eG,rH,lh,hA)
{
var aB=jf.length,
aV,
eh,
Mc;

if(aB>1)
{
try
{
eh=eG;
for(var i=0;i<aB;i++)
{
aV=jf[i];
if(aV=="_root_")
{
eh=rH;
}
else
{
eh=eh[aV];
}
}
}
catch(aL)
{
eh=Mc;
}
}
else
{
eh={
"_var_":lh,
"_this_":eG
}[aV=jf[0]]||eG[aV];
}

return eh;
}
};










var addEvent=(function()
{








function ux(cV,aq,uZ,kR)
{
if(cV&&uZ)
{
if(cV.addEventListener)
{
cV[kR?"removeEventListener":"addEventListener"](
aq,uZ,false
);
}
else if(cV.attachEvent)
{
cV[kR?"detachEvent":"attachEvent"]("on"+aq,
uZ
);
}
else
{
cV["on"+aq]=kR?null:uZ;
}
}

return cV;
}

return function(cV,aq,Ti,kR)
{
if(cV&&(cV.join||cV[Vw]))
{
E(cV,function(an)
{
ux(an,aq,Ti,kR);
}
);
}
else
{
ux(cV,aq,Ti,kR);
}

return cV;
};
}
)();








function addEvents(cV,io,kR)
{
E(io,function(lW,aq)
{
addEvent(cV,aq,lW,kR);
}
);
return cV;
}








function removeEvent(cV,aq,uZ)
{
return addEvent(cV,aq,uZ,true);
}







function removeEvents(cV,io)
{
return addEvents(cV,io,true);
}






function preventDefault(ah)
{
if(ah)
{
if(ah.preventDefault)
{
ah.preventDefault();
}
else
{
ah.returnValue=false;
}
}
return ah;
}






function stopPropagation(ah)
{
if(ah)
{
if(ah.stopPropagation)
{
ah.stopPropagation();
}
else
{
ah.cancelBubble=true;
}
}
return ah;
}






function getEventTarget(ah)
{
return ah&&(ah.srcElement||ah.target);
}











function getUserTarget(an,ah,eb)
{
var aC=getEventTarget(ah);
while(aC&&isObjContainTarget(an,aC))
{
if(attr(aC,eb))
{
return aC;
}
aC=aC.parentNode;
}
}











function fireMouseEvent(aQ,Nz,ah)
{
if(aQ)
{
ah=ah||{};
if(aQ.dispatchEvent)
{

var aH=aQ.ownerDocument,
ap=aH.defaultView,
cf=aH.createEvent("MouseEvents");
cf.initMouseEvent(Nz,true,true,ap,0,0,0,0,0,!!ah.ctrlKey,!!ah.altKey,!!ah.shiftKey,!!ah.metaKey,0,null);
aQ.dispatchEvent(cf);
}
else
{


if(aQ.tagName=="INPUT"&&aQ.getAttribute("type")=="submit"&&Nz=="click")
{
aQ.click();
}
else
{
var cf=aQ.ownerDocument.createEventObject();
for(var aR=["ctrlKey","altKey","shiftKey","metaKey"],i=aR.length-1;i>=0;i--)
{
cf[aR[i]]=ah[aR[i]];
}
aQ.fireEvent("on"+Nz,cf);
}
}
}
return aQ;
}

var liveEvent=(function()
{
var 
aee=
{
click:"ck",
dblclick:"dbl",
mousedown:'md',
mouseup:'mu',
mouseover:'mor',
mousemove:'mm',
mouseout:'mot',
keydown:'kd',
keypress:'kp',
keyup:'ku'
};

function cPt(ah,au)
{
var mv=ah.type,
aas=aee[mv],
Jb=au.rule()[mv],
cC=au.events(),
aC=getEventTarget(ah);

if(!aas)
{
return;
}

do
{
var HF=aC.getAttribute(aas),
hs=Jb[HF];
if(HF&&hs&&cC[HF])
{
ecz=cC[HF].call(au,ah,aC);
if(!hs.bPropagable)
{
break;
}
}
}
while((aC=aC.parentNode)&&aC.getAttribute);
}

return function(an,au)
{
var Jb=au.rule();
for(var mv in Jb)
{
addEvent(an,mv,function(ah)
{
cPt(ah,au);
});
}
};
})();











function loadJsFile(gj,Yn,dF,yL,uP,bIn)
{
var aH=dF||document,
aEA=typeof yL=="function",
bMc,eP,
ye=getTop().loadJsFile,
hm=getRes(gj),
gn=ye.gn||(ye.gn={});

if(Yn)
{
for(var Fm=GelTags("script",aH),
i=Fm.length-1;i>=0;i--)
{
if(Fm[i].src.indexOf(hm)!=-1)
{
if(aEA)
{
var aV=Fm[i].getAttribute("_key_");
if(gn[aV]===true)
{
callBack.call(Fm[i],yL);
}
else
{
gn[aV].push(yL);
}
}
return Fm[i];
}
}
}

eP=aH.createElement("script");
E(uP,function(mA,bh)
{
eP.setAttribute(bh,mA);
}
);

var aV=unikey();
eP.setAttribute("_key_",aV);
gn[aV]=[];

function aqC()
{
var ae=this,aV=ae.getAttribute("_key_");
callBack.call(ae,yL);
E(gn[aV],function(dz){dz()});
gn[aV]=true;

if(bIn)
{
removeSelf(eP);
}
ae.onreadystatechange=ae.onload=null;
}

(GelTags("head",aH)[0]||aH.documentElement)
.appendChild(extend(eP,

{
onload:aqC,
onreadystatechange:function()
{
var ae=this;
({loaded:true,complete:true}[ae.readyState])&&aqC.call(this);
}
},
{
type:"text/javascript",
charset:uP&&uP.charset||"gb2312",
src:hm
}
)
);

return eP;
}






function loadJsFileToTop()
{

if(arguments.length==2)
{
var bcp=arguments[0],
kj=arguments[1];
}
else
{
var bcp="",
kj=arguments[0];
}
var aPi=window.loadJsFile;


function aHE(gj)
{
if(gj)
{

aPi(bcp+gj,true,getTop().document);
}
}
E(kj,aHE);
}









function loadCssFile(gj,Yn,dF)
{
var aH=dF||document,
hm=getRes(gj);

if(Yn)
{
for(var apn=GelTags("link",aH),
i=apn.length-1;i>=0;i--)
{
if(apn[i].href.indexOf(hm)!=-1)
{
return;
}
}
}

var gC=aH.createElement("link"),
abH=GelTags("link",aH);

gC.type="text/css";
gC.rel="stylesheet";
gC.href=hm;

if(abH.length>0)
{
var aqi=abH[abH.length-1];
aqi.parentNode.insertBefore(gC,
aqi.nextSibling);
}
else
{
(GelTags("head",aH)[0]||aH.documentElement).appendChild(gC);
}

return gC;
}








function replaceCssFile(rg,gj,dF)
{
if(rg)
{
E(GelTags("link",dF||document),function(abR)
{
if(abR&&abR.href.indexOf(rg)!=-1)
{
removeSelf(abR);
}
});
}

return loadCssFile(gj,false,dF);
}









function QMAjax(be,hW,pq,er)
{
var ae=this,
ag=getTop(),
hD=er,
dA;

function aGI()
{
ae.onComplete(hD);
}

function aFj(cv)
{
ae.onError(hD,cv);
}

function aFi(aGx)
{
if(!dA)
{
dA=setTimeout(
function()
{
ae.abort();
},
aGx
);
}
}

function FP(cv)
{
if(dA)
{
clearTimeout(dA);
dA=null;
if(cv!="ok")
{
aFj(cv);
}
return true;
}
return false;
}



this.method=hW||"POST";
this.url=be;
this.async=true;
this.content="";
this.timeout=pq;


this.onComplete=function()
{
};
this.onError=function()
{
};

if(!hD)
{
try
{
hD=new XMLHttpRequest;
}
catch(aL)
{
try
{
hD=new ActiveXObject("MSXML2.XMLHTTP");
}
catch(aL)
{
try
{
hD=new ActiveXObject("Microsoft.XMLHTTP");
}
catch(aL)
{
}
}
}
}



if(!hD)
{
return false;
}





this.abort=function()
{
FP("abort");
hD.abort();
};






this.send=function(aFV)
{
if(!this.method||!this.url||!this.async)
{
return false;
}

typeof this.url=="object"&&(this.url=this.url.replace({}));

var eU=this.method.toUpperCase(),
ug=getTop().getSid&&getTop().getSid();
this.abort();

hD.open(eU,

this.url+(ug&&eU=="POST"&&((this.url.split("?")[1]||"")+"&").indexOf("&sid=")==-1
?(this.url.indexOf("?")==-1?"?sid=":"&sid=")+ug:""),
this.async
);

if(eU=="POST")
{
hD.setRequestHeader("Content-Type",document.charset);
hD.setRequestHeader("Content-length",this.content.length);
hD.setRequestHeader("Content-Type",
"application/x-www-form-urlencoded"
);
}

ag.E(this.headers,function(bC,bh)
{
hD.setRequestHeader(bh,bC);
}
);

hD.onreadystatechange=function()
{
try
{
if(hD.readyState==4)
{
if(hD.status==200)
{
if(FP("ok"))
{
aGI();
}
}
else
{
FP(hD.status);
}
}
}
catch(wg)
{
FP(wg.message);
}
}



aFi(this.timeout||15000);

try
{
if(eU=="POST")
{
hD.send(aFV||this.content);
}
else
{

hD.send(null);
}
}
catch(aL)
{
FP(aL.message);
}

return true;
}
};













QMAjax.send=function(be,aj,aES)
{
var ag=getTop(),
ey=aES||new QMAjax,
aA=aj||{};
ey.url=be;

ag.E("method,timeout,content,headers".split(","),function(bh)
{
if(aA[bh])
{
ey[bh]=aA[bh];
}
}
);

var bck=new Date().valueOf();
ey.onComplete=function(er)
{
QMAjax.stat(new Date().valueOf()-bck,be);
ag.callBack.call(er,aj.onload,[true,ag.trim2(er.responseText||""),er]);

};

ey.onError=function(er,cv)
{
ag.callBack.call(er,aj.onload,[false,cv,er]);
};

ey.send();
}


;(function()
{
var gg=[];

QMAjax.stat=function(bLs,be)
{
bLs<120000&&bLs>0&&(be.indexOf("/")==0)&&gg.push(bLs);

if(gg.length>=20)
{
var ceM=0,cnD=0;
for(var i in gg)
{
ceM+=gg[i];
}
cnD=(ceM/gg.length).toFixed(2);
gg.length=0;
ossLog("delay","all","stat=qmajax&time="+cnD);
}
}
})();


function includeAjax(ak)
{


var gH=[];
gH.push(QMAjax.toString());
gH.push(["var QMAjaxSend =",QMAjax.send.toString()].join(""));
globalEval(gH.join(""),ak);

}

var QMAjaxRequest=QMAjax;







function getErrMsg(er,apb)
{
var Sj="_AjaxErrorHTML_";
var rQ=S(Sj);
if(!rQ)
{
rQ=document.createElement("div");
rQ.id=Sj;
rQ.style.display="none";
document.body.appendChild(rQ);
}
rQ.innerHTML=filteScript(er.status==200?er.responseText:"");
var Fb=S(apb);
return Fb&&(Fb.innerText||Fb.textContent)||"";
}





function getHttpProcesser()
{
var ag=getTop(),
QF=ag.gCurHttpProcesserId||0;

ag.gCurHttpProcesserId=(QF+1)%30;

try
{
if(ag.gHttpProcesserContainer[QF]!=null)
{
delete ag.gHttpProcesserContainer[QF];
}
}
catch(aL)
{
ag.gHttpProcesserContainer={};
}

var apP=ag.gHttpProcesserContainer[QF]=new ag.Image;
apP.onload=function()
{
return false;
};

return apP;
}







function goUrl(aag,be,aPr)
{
try
{
var nE=(aag.contentWindow||aag).location,
aOp=nE.href.split("#"),
aqH=be.split("#"),
aPN=aqH[0]==aOp[0],
aN=aPN?aqH[0]:be;

if(aPr)
{
nE.href=aN;
}
else
{
nE.replace(aN);
}
}
catch(aL)
{
aag.src=be;
}
}









function generateFlashCode(ay,Nj,rU,dr)
{
var acw=[],
Ol=[],
GB=[],
cm=dr||{},

Gv=T(' $name$=$value$ '),
acR=T('<param name="$name$" value="$value$" />'),
aBz=gbIsIE?T([
'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ',
'$codebase$ ','$attr$ $id$ >',
'$param$',
'<embed $embed$ type="application/x-shockwave-flash" ',
'$pluginspage$ ',' $name$ ></embed>',
'</object>'
]):T([
'<embed $embed$ type="application/x-shockwave-flash" ',
'$pluginspage$ ',' $name$ $id$ ></embed>'
]);

function Gp(aI,mA)
{
return{
name:aI,
value:mA
};
}

cm.allowscriptaccess=rU&&rU.allowscriptaccess||"always";
cm.quality="high";

for(var qO in cm)
{
var bK=Gp(qO,cm[qO]);
Ol.push(acR.replace(bK));
GB.push(Gv.replace(bK));
}

for(var qO in rU)

{
var bK=Gp(qO,rU[qO]);
acw.push(Gv.replace(bK));
GB.push(Gv.replace(bK));
}

if(Nj)
{
Ol.push(acR.replace(Gp("movie",Nj)));
GB.push(Gv.replace(Gp("src",Nj)));
}

return aBz.replace({
id:ay&&[' id="',ay,'"'].join(""),
name:ay&&[' name="',ay,'"'].join(""),
attr:acw.join(""),
param:Ol.join(""),
embed:GB.join(""),
codebase:location.protocol=="https:"
?''
:'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" ',
pluginspage:location.protocol=="https:"
?''
:'pluginspage="http://www.adobe.com/cn/products/flashplayer" '
}
);
}







function getFlash(ay,ak)
{
var ap=ak||window,
cq=ap[ay]||ap.document[ay];
return cq&&(cq.length?cq[cq.length-1]:cq);
}

















function zoomFuncCreater(aj)
{














return function(kE,iv,aSm,aQm)
{
var abh=aSm||aj.limitWidth||1,
aaY=aQm||aj.limitHeight||1,
afx=(kE/abh)||1,
ahZ=(iv/aaY)||1,
tZ=[afx<1?"w":"W",ahZ<1?"h":"H"]
.join(""),
ng=aj[tZ]||aj.all,
aF={};

switch(ng)
{
case"stretch":
aF.width=abh;
aF.height=aaY;
break;
case"zoomMaxMin":
case"zoomMinMax":
var aro=kE>iv?0:1;
ng=["zoomMax","zoomMin"][ng=="zoomMinMax"
?1-aro
:aro];
case"zoomMax":
case"zoomMin":
var apA=Math[ng=="zoomMax"?"min":"max"](
ahZ,afx
);
aF.width=Math.round(kE/apA);
aF.height=Math.round(iv/apA);
break;
case"none":
default:
aF.width=kE;
aF.height=iv;
break;
}

aF.left=Math.round((abh-aF.width)/2);
aF.top=Math.round((aaY-aF.height)/2);

return aF;
};
}










function scrollIntoMidView(aQ,eI,aRK,
aSv,aQl)
{
if(!aQ||!eI)
{
return false;
}


var apd=eI.tagName.toUpperCase()=="BODY",
aH=eI.ownerDocument,
qS=aH.documentElement;
if(apd&&qS.clientHeight)
{
eI=qS;
}

var tg=calcPos(aQ)[0]-calcPos(eI)[0]-(apd?eI.scrollTop:0),
IF=tg,
CS=aQ.offsetHeight,
Qd=eI.clientHeight,
abd=aSv||0;

if(aRK||IF<0
||IF+CS>Qd)
{
var WB=0,
kS;

if(Qd>CS+abd)
{
if(aQl)
{
WB=IF<0?0
:(Qd-CS-abd);
}
else
{
WB=(Qd-CS-abd)/2
}
}

kS=eI.scrollTop=eI.scrollTop+tg-WB;
eI==qS&&(aH.body.scrollTop=kS);
}

return true;
}





function Gel(ay,aQ)
{
return(aQ||document).getElementById(ay);
}





function objectActive(aQ)
{





}




















function inherit(Tn,uN,UG,Tl,aHB)
{
var ahd=callBack(UG,[uN.prototype]),
aJa=ahd.$_constructor_,
zo=function()
{
if(arguments[0]!="__inherit__")
{

var als=callBack.call(this,aHB,arguments)||{};
if(als.bReturn)
{
return als.vData;
}
else
{
if(!this.aGf)
{
this.constructor=arguments.callee;
this.aGf=true;
}
uN.apply(this,arguments);
callBack.call(this,aJa,arguments);
}
}
};
extend(zo.prototype=new uN("__inherit__"),ahd,{toString:function(){return"";}});
return extend(zo,Tl,
{
classname:Tn,
superclass:uN
}
);
}







function inheritEx(Tn,uN,UG,Tl)
{
var Ee={},
zo=inherit(Tn,uN,UG,Tl,
function()
{
var bp=typeof(arguments[0]),
aER=bp=="string"||bp=="undefined";

return{
bReturn:aER,
vData:zo.$_call.apply(zo,arguments)
};
}
);
return extend(
zo,
{


$_call:function(ay,aJB,aM)
{
if(arguments.length==0)
{
return Ee;
}
else
{
var de=Ee[ay];
return arguments.length>1&&de?
callBack.call(de,de[aJB],aM):de;
}
},

$_add:function(ay,au)
{
return Ee[ay]=au;
},

get:function(ay)
{
return Ee[ay];
},

$_del:function(ay)
{
delete Ee[ay];
}
}
);
}







function inheritSimple(aG,axB)
{
var QC=function(aTo)
{
var ae=this;
if(aTo!=="__inherit__"&&typeof(ae.init_)=="function")
{
ae.init_.apply(ae,arguments);
}
};
if(!axB)
{
axB=aG;
aG=function(){};
}
QC.prototype=A.extend(new aG("__inherit__"),axB(aG.prototype));
QC.prototype.constructor=QC;
return QC;
}


























function cacheByIframe(KK,cj)
{
var aV="_cAcheBYifRAme_",
cM=cj||{},
ap=cM.win||getTop(),
aJ=cM.id||unikey("_"),
cX=[cM.attrs],
wx=[cM.header],
cg=[],
aDm=cM.virtual!==false;


for(var i=0,aB=KK&&KK.length||0;i<aB;i++)
{
for(var pV=KK[i],j=2,asG=pV.length;j<asG;j++)
{
switch(pV[0])
{
case"img":
cg.push('<img src="',pV[1],pV[j],'"/>');
break;
case"js":
case"html":
if(gbIsWebKit)
{
cg.push('<img src="',pV[1],pV[j],'"/>');
break;
}
if(gbIsIE)
{
wx.push('<script src="',pV[1],pV[j],'" ><\/script>');
break;
}
case"css":
wx.push('<link rel="stylesheet" type="text/css" href="',pV[1],pV[j],'" />');
}
}
}



!ap[aV]&&(ap[aV]={});
ap[aV][aJ+"_h"]=wx.join("");

ap[aV][aJ+"_b"]=((cM.body||"").toString().indexOf("<body")==-1?
'<body class="domain">'+cg.join("")+'</body>':
cM.body+cg.join(""));

createIframe(ap,
(aDm?
["javascript:(function(){document.open();document.domain='",document.domain,"';frameElement['_render_']=1;",
"try{document.write('<head><script>window.onerror=function(){return true};<\/script>'+",
"parent['",aV,"']['",aJ,"_h']+'</head>'+parent['",aV,"']['",aJ,"_b']);",
"parent['",aV,"']['",aJ,"_h']=parent['",aV,"']['",aJ,"_b']=null;}catch(e){alert(e.message);}",
"document.close();})()"
]:
[getRes("$base_path$zh_CN/htmledition/domain2104475.html"),"#",encodeURIComponent(document.domain),
"&",aV+"&"+encodeURIComponent(aJ)+"&"+(cM.destroy!==false?"1":"")
]
).join(""),
extend({},cM,
{
id:aJ,
attrs:cX.join(""),
onload:function(ak)
{
var jg=this;
if(!aDm||jg["_render_"])
{
callBack.call(jg,cM.onload,[ak]);

(cM.destroy!=false||jg.getAttribute("destroy")=="true")
&&ap.setTimeout(function(){removeSelf(jg);},100);
}
}
}
)
);
}








function clearCache()
{












arguments.length>0&&getTop().cacheByIframe(arguments,
{
virtual:false,
destroy:false,
onload:function()
{
if(!this.getAttribute("destroy"))
{
this.setAttribute("destroy","true");
this.contentWindow.location.reload(true);
}
}
}
);
}








function preLoad(aq,ei,kj,aqB)
{
if(window!=getTop())
{
getTop().preLoad.apply(this,arguments);
}
else
{
var ae=arguments.callee,
QD=ae.aOR=(ae.aOR||[]);

if(aq&&kj)
{
for(var i=0,aB=kj.length;i<aB;i++)
{
QD.push([[aq,ei,kj[i]]]);
}
}

if(!ae.arf&&QD.length>0)
{
ae.arf=true;

function VK()
{
ae.arf=false;
callBack(aqB,[QD.shift()[0][2]]);
setTimeout(function(){ae("","","",aqB);},100);
}

cacheByIframe(QD[0],{onload:VK});
}
}
}





function setDblClickNoSel(aQ)
{
if(aQ)
{
var abu="__MoUSeDoWnnoSEL__";
function getAtts()
{
return(aQ.getAttribute(abu)||"").toString().split(",");
}
function setAtts(iY,aq)
{
aQ.setAttribute(abu,[iY,aq]);
}
if(getAtts().length==1)
{

setAtts(0,"up");
addEvents(aQ,{
mousedown:function(ah)
{
var ib=now(),
wG=parseInt(getAtts()[0]);
setAtts(ib,"down");

if(ib-wG<500)
{
preventDefault(ah);
}
},

mouseup:function()
{
setAtts(getAtts()[0],"up");
},
selectstart:function(ah)
{
if(getAtts().pop()=="up")
{
preventDefault(ah);
}
}
});
}
}

return aQ;
}













;(function()
{
var aXm=TE([
'<form method="$sMethod$" id="$sFormId$" name="$sFormId$" target="$sTarget$" action="$sAction$" enctype="multipart/form-data">',
'$@$for($oInputs$)$@$',
'<input name="$name$" type="hidden" value="$value$"/>',
'$@$endfor$@$',
'</form>'
]);

window.createForm=function(aj,Px)
{
var alo=aj.sFormId||unikey(),
fV=S(alo,aj.oWin),
jb=[];

if(fV)
{
removeSelf(fV);
}
Px=Px||{};
Px.sid=Px.sid||getSid();
E(Px,function(qc,lg)
{
jb.push({name:lg,value:qc});
}
);
aj.oInputs=jb;
insertHTML(aj.oWin.document.body,"beforeEnd",aXm.replace(
extend(
{
sFormId:alo,
sTarget:"_self",
sMethod:"POST"
},aj)
)
);
return S(alo,aj.oWin);
}
})();





































var 
gsMsgNoSubject="Please fill in the message subject. ",
gsMsgNoMail="No message selected ",
gsMsgSend="Sending message... ",
gsMsgSave="&nbsp;&nbsp;&nbsp;Saving message ...",
gsMsgSaveOk="Message saved as draft",
gsMsgAutoSave="&nbsp;&nbsp;&nbsp;Saving message ...",
gsMsgAutoSaveOk="Message saved as draft automatically",
gsMsgSendErrorSaveOK="Message saved as draft",
gsMsgSaveErr="Failed to save the message as draft",
gsMsgNoSender="Please fill in the recipient first. ",
gsMsgNoCardSender="Please fill in the recipient first. ",
gsMsgNoCard="\u8BF7\u9009\u4E2D\u8D3A\u5361\u540E\u518D\u53D1\u9001",
gsMsgSettingOk="Setting saved",
gsMsgLinkErr="Network response failed",
gsMsgCheatAlert="\u7CFB\u7EDF\u4F1A\u5C06\u6B64\u90AE\u4EF6\u79FB\u5165\u5230\u201C\u5783\u573E\u90AE\u4EF6\u201D\u4E2D\uFF0C\u5E76\u628A\u90AE\u4EF6\u5185\u5BB9\u63D0\u4EA4\u7ED9\u90AE\u7BB1\u7BA1\u7406\u5458\u3002\n\n\u60A8\u786E\u5B9A\u8981\u4E3E\u62A5\u6B64\u90AE\u4EF6\u5417\uFF1F",
gsMsgSendTimeErr="Invalid time",
gsMsgMoveMailSameFldErr="Please select a different directory. ";








function doPageError(cQ,be,wA)
{
var gV=arguments.callee.caller,
aaC=gV&&gV.caller,
aRk=aaC&&aaC.caller,
atT=(gV||"null").toString(),
apZ=(aaC||"").toString(),
aqq=(aRk||"").toString(),
Tg;

try
{

if(cQ.indexOf(" Script ")!=-1)
{
return;
}


log("err:",cQ,"-",be,"-",wA);

if(cQ.indexOf("flashUploader")!=-1)
{
var aBn=qmFlash.getFlashVer();
for(var i in aBn)
{
cQ+="|"+aBn[i];
}
}

if(!(be&&be.indexOf("/cgi-bin/mail_list?")!=-1&&wA==2)&&location.getParams)
{
var cm=location.getParams(be);
aBW=(be||"").split("?")[0].split("/"),
aCJ=encodeURIComponent(
atT.replace(/[\r\n\t ]/ig,"")
.substr(0,50)
);

if(aBW.length>0)
{
cm.cgi=aBW.pop();
getTop().ossLog("delay","sample",[
"stat=js_run_err&msg=",
cQ,
"&line=",
wA,
"&url=",
T('$cgi$?t=$t$&s=$s$').replace(cm),
"&func=",
aCJ,(gbIsIE?"":"_NIE")
].join(""));
}
else
{
Tg=aCJ;
}
}

getTop().debug([
"error:",
cQ,
"<br><b>line</b>:",
wA,
"<br><b>url</b>:",
be,
"<br><b>function</b>:",
atT.substr(0,100),
apZ?"<br><b>parent function</b>:"
+apZ.substr(0,100):"",
aqq?"<br><b>parent parent function</b>:"
+aqq.substr(0,100):""].join(""),"error");
}
catch(aL)
{
Tg=aL.message;
}

Tg&&log("err:doPageError ",Tg,"-",be,"-",wA);







return location.host.indexOf("dev.")!=0;
}




var QMFileType={};

QMFileType.data={
doc:"doc",
docx:"doc",

xls:"exl",
xlsx:"exl",

ppt:"ppt",
pptx:"ppt",

pdf:"pdf",

txt:"txt",
log:"txt",
xml:"txt",
js:"txt",
css:"txt",
php:"txt",
asp:"txt",
aspx:"txt",
jsp:"txt",
vbs:"txt",
h:"txt",
cpp:"txt",

eml:"eml",

rar:"rar",
zip:"rar",
"7z":"rar",
arj:"rar",

wav:"mov",
mp3:"mov",
wma:"mov",
mid:"mov",
rmi:"mov",
ra:"mov",
ram:"mov",

mp1:"mov",
mp2:"mov",
mp4:"mov",
rm:"mov",
rmvb:"mov",
avi:"mov",
mov:"mov",
qt:"mov",
mpg:"mov",
mpeg:"mov",
mpeg4:"mov",
dat:"mov",
asf:"mov",
wmv:"mov",
"3gp":"mov",
ac3:"mov",
asf:"mov",
divx:"mov",
mkv:"mov",
ogg:"mov",
pmp:"mov",
ts:"mov",
vob:"mov",
xvid:"mov",

htm:"html",
html:"html",
mht:"html",

swf:"swf",
flv:"swf",

bmp:"bmp",
gif:"gif",
jpg:"jpg",
jpeg:"jpg",
jpe:"jpg",
psd:"psd",
pdd:"psd",
eps:"psd",

tif:"tu",
tiff:"tu",
ico:"tu",
png:"tu",
pic:"tu",
ai:"tu"
};






QMFileType.getFileType=function(RA)
{
return this.data[(trim(RA||"")).toLowerCase()]||"qita";
};






QMFileType.getFileTypeForFile=function(fN)
{
return this.getFileType((fN||"").split(".").pop());
};






var QMHistory={
OG:{




},
Mz:{





}
};






QMHistory.getId=function(ay)
{
return ay;
};






QMHistory.getUrl=function(ay)
{
var cU=getTop().QMHistory.Mz[QMHistory.getId(ay)];
return cU&&cU.aN;
};





QMHistory.getLastRecordId=function()
{
return getTop().QMHistory.OG.bjf;
};






QMHistory.tryBackTo=function(ay)
{
try
{
var bK=getTop().QMHistory.OG,
Xu=QMHistory.getId(ay),
IL=getTop().QMHistory.Mz[Xu],
axC=IL&&IL.aN,
azp=IL
&&IL.aVK>=getTop().history.length,
azq=IL&&bK.bfY==axC,
azv=IL&&!bK.aWb;

function aYA()
{
var aN=axC.split("#")[0];

if(getTop().location.getParams
&&getTop().location.getParams(aN)["folderid"]==4)
{
return goUrlMainFrm(aN);
}


if(gbIsIE&&gnIEVer==6)
{
return getTop().history.go(aN);
}
getTop().history.back();
};

if((gbIsIE&&(azp||azq)&&azv)
||(!gbIsWebKit&&azp&&azq&&azv))
{

aYA();
return true;
}
}
catch(aL)
{

}

return false;
};





QMHistory.recordCurrentUrl=function(ak)
{
var aN=ak.location.href,
BB=getTop().QMHistory.Mz,
bK=getTop().QMHistory.OG;

var bgO=bK.bfY=bK.aWk,
aaD=bK.aWk=aN;

var VE,MC;


for(var i in BB)
{
if(BB[i].aN==bgO)
{
VE=i;
}
if(BB[i].aN==aaD)
{
MC=i;
}
}


if(VE&&MC)
{
delete BB[VE];
}


if(aN.indexOf("/mail_list")!=-1)
{
this.agk("mail_list",aN);
}

if(aN.indexOf("t=readmail")!=-1)
{
this.agk("readmail",aN);
}

if(aN.indexOf("/today")!=-1)
{
this.agk("today",aN);
}
};





QMHistory.recordActionFrameChange=function(cv)
{
getTop().QMHistory.OG.aWb=cv!="clear";
};






QMHistory.agk=function(ay,be)
{
var ag=getTop(),
Xu=QMHistory.getId(ay),
BB=ag.QMHistory.Mz,
cU=BB[Xu];

if(!cU)
{
cU=BB[Xu]=new ag.Object;
}

cU.aVK=history.length+1;
cU.aN=be;

ag.QMHistory.OG.bjf=ay;
};












function QMCache(aj)
{
var wG=this.bgU=aj.timeStamp||1;
var At=this.OU=aj.appName;

if(!wG||!At)
{
throw{
message:"QMCache construct : config error!"
};
}

var YJ=getTop().QMCache.Ib;
if(!YJ)
{
YJ=getTop().QMCache.Ib={};
}

var uH=YJ[At];
if(!uH)
{
uH=YJ[At]={
ajs:"0",
ma:{}
};
}

if(this.ayk(uH.ajs,wG)==1)
{
uH.ajs=wG;
}
};





QMCache.prototype.isHistoryTimeStamp=function()
{
return this.ayk(
getTop().QMCache.Ib[this.OU].ajs,
this.bgU
)!=0;
};






QMCache.prototype.setData=function(bh,bC)
{
getTop().QMCache.Ib[this.OU][bh]=bC;
};

QMCache.prototype.getAll=function(bh)
{
return getTop().QMCache.Ib[this.OU];
}






QMCache.prototype.getData=function(bh)
{
return getTop().QMCache.Ib[this.OU][bh];
};





QMCache.prototype.delData=function(bh)
{
delete getTop().QMCache.Ib[this.OU][bh];
};







QMCache.prototype.ayk=function(axf,axi)
{
if(axf==axi)
{
return 0;
}
return axf>axi?-1:1;
};










var QMMailCache=
{
rZ:now()
};







QMMailCache.newCache=function(nH,aiX)
{
var Iz=false,
ag=getTop();

if(!ag.gMailListStamp||ag.gMailListStamp<aiX)
{
ag.gMailListStamp=aiX;
if(!ag.goMailListMap)
{
ag.goMailListMap=new ag.Object;
}
Iz=true;
}
else if(ag.gnExpireTimeStamp>=aiX)
{







reloadFrm(nH);
}

return nH["isNewQMMailCache"+this.rZ]=Iz;
};




QMMailCache.setExpire=function()
{
getTop().gnExpireTimeStamp=getTop().gMailListStamp;
};













QMMailCache.addData=function(bc,dr)
{
if(!bc||!getTop().goMailListMap)
{
return;
}

if(!this.hasData(bc))
{
getTop().goMailListMap[bc]={
oTagIds:{},
bUnread:null,
star:null,
reply:null
};
}

if(!dr)
{
return;
}

var hF=getTop().goMailListMap[bc];
for(var i in dr)
{
switch(i)
{
case"removeTagId":
hF.oTagIds[dr[i]]=0;
break;
case"addTagId":
hF.oTagIds[dr[i]]=1;
break;
default:
if(typeof dr[i]!="undefined")
{
hF[i]=dr[i];
}
break;
}
}
};





QMMailCache.delData=function(bc)
{
if(getTop().goMailListMap)
{
delete getTop().goMailListMap[bc];
}
};






QMMailCache.hasData=function(bc)
{
return getTop().goMailListMap&&getTop().goMailListMap[bc]!=null;
};






QMMailCache.getData=function(bc)
{
return getTop().goMailListMap&&getTop().goMailListMap[bc];
};







QMMailCache.addVar=function(Yj,bX)
{
return getMainWin()[Yj]=this.getVar(Yj,0)+bX;
};







QMMailCache.getVar=function(Yj,bdX)
{
return getMainWin()[Yj]||bdX;
};






QMMailCache.isRefresh=function(nH)
{
return nH["isNewQMMailCache"+this.rZ];
};









function rdVer(Ia,Ct,aha)
{

var alA,oN,EB,ahU,
cU=new QMCache({appName:"readmail"});

if(Ct==-1)
{
return cU.delData(Ia);
}

alA=cU.getData("on");
if(Ia=="on")
{
return Ct==0?(alA||0):(cU.setData("on",Ct));
}

if(!alA||!Ia)
{
return 0;
}

ahU=Ia=="BaseVer";

EB=cU.getData("BaseVer");
if(!EB||(ahU&&Ct==1))
{

EB=EB||(rdVer("on",0)+(+Math.random().toFixed(2)));
EB+=10;
cU.setData("BaseVer",EB);
}

if(ahU)
{
return EB;
}

oN=(cU.getData(Ia)||0);
var axK=(!oN||Ct==1);

if(axK||aha)
{
if(axK)
{
oN+=10000;
}
if(aha)
{
oN=Math.floor(oN/10000)*10000+parseInt(aha,10)%10000;
}
cU.setData(Ia,oN);
}
return oN;
}

rdVer.batch=function(aq)
{
var cU=new QMCache({appName:"readmail"}),
hc=new RegExp("^"+aq),
hF=cU.getAll();

E(hF,function(HV,bc)
{
if(hc.test(bc))
{
rdVer(bc,1);
}
}
);
}






rdVer.check=function(ak,bc,ajf)
{
if(ak)
{
var iS=ak.location,
bc=bc||iS.getParams()["mailid"],
ajf=ajf||iS.getParams()["ver"]||0,
axX=rdVer(bc,0);

if(axX>ajf)
{
goUrl(ak,cookQueryString(iS.href,{ver:axX}),true);
return true;
}
else
{
return false;
}
}
}






rdVer.log=function(bc,LX)
{
var ahO=new QMCache({appName:"preload"}),
vG=new Date().getTime(),
hu=ahO.getData(bc),
akO=hu&&(vG-hu)<rdVer.maxage(bc)*1000;

switch(LX)
{
case"pre":
if(!akO)
{
ahO.setData(bc,vG);
ossLog("delay","all","stat=rdcache&type=281&locval=,rdcache,preload,1");
}
break;
case"hit":
if(akO)
{
ossLog("delay","all","stat=rdcache&type=291&locval=,rdcache,hit,1");
}
if(hu)
{
ahO.delData(bc);
}
break;
}
return akO;
}

rdVer.isPre=function(Fl)
{

return!(Fl>2&&Fl<7||Fl==9||Fl==11);
}


rdVer.preRD=function(IA,Zg)
{
var aAh=function()
{
preLoad("html","/cgi-bin/readmail?",IA,function(gj)
{
rdVer.log(location.getParams(gj)["mailid"],"pre");
}
);
}
if(IA&&IA.length>0)
{
Zg=Zg||40;

IA=IA.slice(0,rdVer("on",0)>1?2:1);

if(IA.length>0)
{
if(Zg)
{
setTimeout(aAh,Zg);
}
else
{
aAh();
}
}
}
}

rdVer.maxage=function(bc)
{
if(!bc)
{
return 0;
}
return(bc[0]=="@"||bc[0]=="C"?10:60)*60;
}










rdVer.url=function(bc,kd,bfL,ee,bhr,Nr,
agR,ajk,aBP)
{
var aIf='/cgi-bin/$cgi$?folderid=$folderid$$s$&t=$t$&mailid=$mailid$$cache$&sid=$sid$',
amU,
zt,vx,aN,Hd="readmail";

if(agR)
{
zt="readmail&s=draft";
}
else if(ee===0)
{
zt=ajk==100?"compose_card&s=draft"
:"compose&s=draft";
}
else if(kd=="9")
{
aIf=[location.protocol,location.protocol=="https:"?"//ws.mail.qq.com":"//msgopt.mail.qq.com",aIf].join("");
zt="sms_list_v2";
Hd="readtemplate";
}
else if(kd=="11"||/^(LP|ZP)/.test(bc))
{
Hd="bottle_panel";
zt="bottle";
}
else
{
switch(bc.charAt(0))
{
case'C':
if(ee==3)
{
zt="readmail_ad_conversation";
}
else
{
zt="readmail_conversation";
}
break;
case'@':
zt="readmail_group";
break;
default:
zt=ee==3?"readmail_ad":"readmail";
break;
}
amU=true;
}

if(bhr)
{
vx=["&newwin=true","&compose_new=compose"][ee?0:1];
}
else
{
vx=["","&s=from_unread_list","&s=from_star_list"][
Nr!=1&&Nr!=2?0:Nr];
}

var oN=amU?rdVer(bc,0,bfL):0;

if(!oN&&aBP)
{
return"";
}

aN=T(aIf).replace(
{
cgi:Hd,
mailid:bc,
folderid:kd,
t:zt,
s:vx,
sid:getSid(),
cache:oN?T("&mode=pre&maxage=$maxage$&base=$base$&ver=$ver$").replace(
{
maxage:rdVer.maxage(bc),
base:rdVer("BaseVer",0),
ver:oN
}
):""
}
);

return aBP?aN.split("?")[1]:aN;
}









function setGlobalVarValue(bh,dG,bbX)
{
var ag=getTop();

if(!ag.goDataBase)
{
ag.goDataBase=new ag.Object;
}

if(bh&&!bbX)
{
ag.goDataBase[bh]=dG;
}

return dG;
}






function getGlobalVarValue(bh)
{
return getTop().goDataBase&&getTop().goDataBase[bh];
}






function hideWindowsElement(hx,ak)
{
ak=ak||getMainWin();
if(!gbIsIE||gnIEVer>6||(ak.gbIsHasHideElements||false)!=(hx||false))
{
return;
}

getTop().setGlobalVarValue("WINDOWS_ELEMENT_NOT_DISPLAY",hx?"":"true");

ak.gbIsHasHideElements=!hx;

var cg=ak.document.body;

E(ak.QMReadMail?["select","object","embed"]:["select"],
function(bbh)
{
E(GelTags(bbh,cg),
function(aQ)
{
if(hx)
{
aQ.style.visibility=
aQ.getAttribute("savevisibility");
}
else
{
aQ.setAttribute("savevisibility",
getStyle(aQ,"visibility"));
aQ.style.visibility="hidden";
}
}
);
}
);
}






function controlWindowsElement()
{
var bbP=getTop().getGlobalVarValue("WINDOWS_ELEMENT_NOT_DISPLAY");
if(bbP=="true")
{
hideWindowsElement(false);
}
}





function setKeepAlive(ak)
{
if(getTop().gKeepAliveNum==null)
{
getTop().gKeepAliveNum=0;
}

if(ak==null||ak.gbIsSetKeepAlive==true)
{
return;
}

ak.gbIsSetKeepAlive=true;
getTop().gKeepAliveNum++;

if(getTop().gKeepAliveTimer==null)
{

getTop().gKeepAliveTimer=getTop().setInterval(
function()
{
getTop().runUrlWithSid("/cgi-bin/readtemplate?t=keep_alive");
},
15*60*1000
);
}
addEvent(
ak,
"unload",
function()
{
ak.gbIsSetKeepAlive=false;
getTop().gKeepAliveNum--;
if(getTop().gKeepAliveNum==0)
{
getTop().clearInterval(getTop().gKeepAliveTimer);
getTop().gKeepAliveTimer=null;
}
}
);
}







function encodeNick(pK)
{
return pK&&pK.replace(/\\/g,"\\\\").replace(/\"/ig,"\\\"").replace(/\'/ig,"\\\'")||"";
}






function encodeNickHTML(pK)
{
return pK&&pK.replace(/\&\#92;/ig,"&#92;&#92;").replace(/\&quot;/ig,"&#92;&quot;").replace(/\&\#39;/ig,"&#92;&#39")||"";
}






function decodeNick(pK)
{
return pK&&pK.replace(/\\\"/ig,"\"").replace(/\\\\/ig,"\\")||"";
}






function rollback(ee)
{
var aaq=getGlobalVarValue('DEF_ROLLBACK_ACTION');
if(aaq&&aaq.rbkey)
{
confirmBox({
title:"Warning",
mode:"prompt",

height:135,
msg:T([
'Do you want to undo the last action: $msg$ ?',
]).replace(aaq),
onreturn:function(aP)
{
if(aP)
{
QMAjax.send("/cgi-bin/mail_mgr",
{
method:"POST",
content:["sid=",getSid(),"&mailaction=mail_revert&t=mail_mgr2&timekey=",aaq.rbkey,"&logtype=",ee].join(''),
onload:function(aP,bt)
{
if(aP&&bt.indexOf("mail_revert successful")>=0)
{
var sO=getMainWin().location.getParams()["t"];

if(sO=="mail_list"||sO=="mail_list_group"||(!sO&&getMainWin().location.href.indexOf("/cgi-bin/mail_list?")>-1))
{
reloadFrmLeftMain(true,true);
}
else if(sO=="folderlist_setting")
{
goUrlMainFrm(getMainWin().location.href.replace(/\#.+/,"").replace(/&s=.+?(&|$)/,"&")+"&s="+getMainWin().getType());
reloadFrmLeftMain(true,false);
}
else
{
reloadFrmLeftMain(true,false);
}

setGlobalVarValue('DEF_ROLLBACK_ACTION',null);
showInfo("Succeed to undo the last action:"+aaq.msg);
}
else
{
var aL=globalEval(bt);
showInfo(aL&&aL.errmsg||("Failed to undo the last action: "+aaq.msg+". Please try again."));
}
}
});
}
}
});
}
}


var QMPageInit={
aCX:function(ak)
{
var ag=getTop();
if(ak==ag)
{
var gV=new(ag.Function)(
"var _oLogs = arguments.callee.logs;_oLogs.length > 500 && _oLogs.shift();"+
"_oLogs.push([+new Date, [].slice.apply(arguments).join('')].join(' '));");
gV.logs=new(ag.Array);
return gV;
}
else
{
return ag.log||(ag.log=this.aCX(ag));
}
},

aWz:function(bkc)
{
return function()
{
try
{
var afT=arguments.length,
ais=arguments[afT-1],
ayM=ais>100000;
if(typeof(ais)=="number"
&&(ayM&&ais!=getTop().g_uin))
{
return;
}
}
catch(e)
{

return;
}

if(getTop().Console)
{
if(afT==0||(afT==1&&ayM))
{
if(location.host=="dev.mail.qq.com")
{
debugger;
}
}
else
{
try
{
var aCo=getTop().Console[bkc];
aCo.add.apply(aCo,arguments);

}
catch(aL)
{
}
}
}
}
},

bfM:function(ak)
{
return function(aI,aVh,cv,bjD,jz)
{
if(getTop().QMTimeTracer&&(!jz||jz==getTop().g_uin))
{
getTop().QMTimeTracer.getTracer().trace(aI,aVh,
ak,cv,bjD
);
}
}
},

aYW:function(ak)
{
var nE=ak.location;
nE.aBa=false;
nE.params={};
nE.getParams=function(be)
{
if(!be&&this.aBa)
{
return this.params;
}

var cm={},
asW=be
?be.substr(be.indexOf("?")+1).split("#")[0]
:this.search.substr(1);

if(asW)
{
E(asW.split("&"),function(jD)
{
var bV=jD.split("=");
cm[bV.shift()]=unescape(bV.join("="));
}
);
}

if(!be)
{
this.params=cm;
this.aBa=true;
}

return cm;
};

var eS=nE.href,
ag=getTop();

if(ak==ag
&&getSid()
&&eS.indexOf("/cgi-bin/")>-1
&&eS.indexOf("/frame_html?")==-1
&&eS.indexOf("/log")==-1
&&(eS.indexOf("/ftnExs_")==-1||eS.indexOf("/ftnExs_files")>-1)
&&!ak.gbIsNoCheck
&&nE.getParams()["nocheckframe"]!="true")
{
if(eS.indexOf("/cgi-bin/bizmail")==-1)
{

goNewWin(nE,true,!ak.gbSupportNW);
}
else
{
goNewWin(nE,true,false,{frametmpl:"dm_frame",frametmplparam:"&dmtype=bizmail"});
}
}

else if(ak!=ag&&ag.bnewwin&&ak==getMainWin())
{
if(!ak.gbSupportNW)
{
goNewWin(nE,true,true);
}
else if(nE.getParams()["newwin"]!="true")
{
ak.location.replace(eS+"&newwin=true");
}
}
},

aWA:function(ah,aXc)
{
var cE=ah.srcElement||ah.target,
Vk=ah.ctrlKey,
cdD=ah.altKey,
rT=ah.shiftKey,
ciY=ah.metaKey,
ep=ah.keyCode,
Je=cE.type=="text"
||cE.tagName=="TEXTAREA",
bcZ=aXc
&&(cE.tagName=="INPUT"&&cE.type!="button"),
baH=cE.tagName=="BUTTON"||cE.type=="button";

switch(ep)
{

case 8:

if(!Je&&goBackHistory())
{
preventDefault(ah);
}
break;

case 13:


if(!baH&&((!Je&&QMReadedItem.read(cE))||bcZ))
{
preventDefault(ah);
}
break;

case 37:

case 39:

if(Vk)
{
goPrevOrNextMail(ep==39);
preventDefault(ah);
}
break;

case 38:

case 40:

case 188:

case 190:

var WG=ep==38||ep==188;
if(!Je&&getMainWin()&&getMainWin().QMReadedAddr)
{
if(getMainWin().QMReadedAddr.move(!WG))
{
preventDefault(ah);
}
}
else
{
if(!Je)
{
if(QMReadedItem.move(!WG))
{
preventDefault(ah);
}
}
}
break;

case 46:


if(!Je)
{
var azY=S(
rT?"quick_completelydel":"quick_del",
getMainWin()
),
aAa=rT?S("quick_del",getMainWin()):null,
aAf=S("del",getMainWin());
if(isShow(azY)||isShow(aAa)||isShow(aAf))
{
preventDefault(ah);
fireMouseEvent((azY||aAa||aAf),"click");
}
}
break;

case 88:

if(!Je&&QMReadedItem.check(rT))
{
preventDefault(ah);
}
break;
case 90:
var wS=cE.tagName.toUpperCase();
if(Vk&&!(wS=="INPUT"&&cE.type.toLowerCase()!="button"||wS=="TEXTAREA"))
{
rollback(1);
}
break;

case 65:
if(!Je&&(ciY||Vk))
{
preventDefault(ah);
var bwD=S("frm",getMainWin());
if(bwD)
{
var bAm=GelTags("table",bwD)[0];
if(bAm)
{
var Rr=GelTags("input",bAm)[0];


!Rr.addEventListener&&Rr.click&&Rr.click()
||fireMouseEvent(Rr,"click");

}
}
}
break;
}
},

aZT:function(ak)
{
ak.Log=ak.log=this.aCX("log");
ak.Debug=ak.debug=this.aWz("debug");

ak.Trace=ak.trace=this.bfM(ak);
ak.onerror=doPageError;
},

bcm:function(ak)
{
if(ak!=getTop()&&ak==getMainWin())
{

getTop().QMHistory.recordCurrentUrl(ak);
getTop().QMHistory.recordActionFrameChange("clear");


var ae=this,eS=ak.location.href,
anG=eS.indexOf("t=sms_list_v2")>0,
ber=eS.indexOf("t=bottle")>0;

addEvents(ak,
{load:function()
{
initAD(ak)
},
unload:function()
{

showProcess(0);
if(isshowMsg()&&getTop().gMsgDispTime
&&now()-getTop().gMsgDispTime>2000)
{
hiddenMsg();
}

anG&&startWebpush(2);

}
});

anG&&closeWebpush(2);
ber&&closeWebpush(4);
getTop().QMWebpushTip&&getTop().QMWebpushTip.hideAll(3000);

ak.setTimeout(function()
{



















if(!(getTop().QQPlusMail&&getTop().QQPlusMail.getPageTitle()))
{
ak.document.title&&(getTop().document.title=ak.document.title);
}

},
200
);
}
},

bbp:function(ak)
{

if(ak==getTop()&&ak.location.href.indexOf("/frame_html")!=-1)
{



















addEvents(ak,{
load:function(e)
{
var cg=getTop().document.body;

function aBN(ah)
{
var cE=ah.srcElement||ah.target;

for(var Vv=0;cE&&Vv<3;
cE=cE.parentNode,Vv++)
{
if(cE.tagName=="A")
{
break;
}
}

return cE||{};
};

function bkD(ah)
{
if((ah.target||ah.srcElement)==cg)
{
preventDefault(ah);
}
}

function aBk(ah)
{
var cE=aBN(ah);
if(cE.tagName=="A")
{
if(cE.getAttribute("initlized")!="true")
{
cE.setAttribute("initlized","true");

var azt=cE.onclick;
cE.onclick=function(baR)
{
var cf=baR||getTop().event,
dA=parseInt(cE
.getAttribute("md"));
if(!isNaN(dA)&&dA>0)
{
getTop().clearTimeout(dA);
cE.setAttribute("md","0");

var rT=cf.shiftKey,
Vk=cf.ctrlKey,
bkd=cf.metaKey,
aCV=rT||Vk||bkd,
cot=cE.getAttribute("nocheck"),
eS=trim(cE.href),
cms=!(eS==""||eS.indexOf("javascript:")==0),
aIC=trim(cE.href)
.indexOf("http")==0;

function aBJ()
{
if(azt)
{
azt.call(cE);
preventDefault(cf);
}

if(aIC)
{

if(aCV&&cms)
{
open(cE.href);
preventDefault(cf);
}
else
{
switch(cE.target)
{
case"mainFrame":
var aN=cE.href;
goUrlMainFrm(
aN+(aN.indexOf("?")!=-1?"#stattime="+now():""),
false
);
preventDefault(cf);
break;
case"_parent":
case"_self":
try
{
ak.location.href=cE.href;
}
catch(FJ)
{
}
preventDefault(cf);
break;
default:
break;
}
}
}
};















if(cot=="false"
||(!aCV&&cot!="true"&&(cms&&cE.target!="_blank")))
{
preventDefault(cf);
QMPageInit
.avY(aBJ);
}
else
{
aBJ();
}
}
};
}

cE.setAttribute(
"md",
getTop().setTimeout(
function()
{
cE.setAttribute("md","0");
},
1000
)
);
}

}

function anN(ah)
{
var cE=aBN(ah);
if(cE.tagName=="A"
&&cE.getAttribute("initlized")!="true")
{
preventDefault(ah);
}
}

addEvents(cg,
{
mousewheel:bkD,
mousedown:aBk,
keydown:aBk,
click:anN
}
);
}


});
}
},

bgc:function(ak,ah)
{
var sO,
axY=["u","1","2","3","4"],
aC=getEventTarget(ah),
azl=function(an)
{
if(an&&an.getAttribute)
{
var sv=an.getAttribute("t");
for(var i in axY)
{
if(axY[i]==sv)
{
return sv;
}
}
}
};

sO=azl(aC);

while(aC&&aC!=ak.document.body&&sO)
{
if(sO=="u")
{
aC=aC.parentNode;
sO=azl(aC)||sO;
}
else
{
return aC;
}
}
return null;
},

aCK:function(aq,ak,ah)
{
var aC=this.bgc(ak,ah),
aNm;
if(!aC&&aq=="over"&&(aNm=ak["__simpleTipDivShared"]))
{
aNm&&addClass(aNm,"smt_hide");
aNm=null;
}
if(aC)
{
var sO=aC.getAttribute("t");
switch(sO)
{
case"1":
case"2":
case"3":
waitFor(
function()
{
return getTop().QMProfileTips;
},
function(na)
{
if(na)
{
getTop().QMProfileTips.doMouseEvent(aq,ak,aC);
}
}
);
break;
case"4":
var VM="simpletip",
axR="stitle",
aym="smt_hide";
if(aC.title)
{
aC.setAttribute(axR,aC.title);
aC.title="";
}
if(aq=="over")
{
var iX=aC.getAttribute(axR),
nv=S(VM,ak);
if(!nv)
{
insertHTML(ak.document.body,"afterBegin",'<div id="'+VM+'" class="smt_container smt_up smt_hide"><span class="smt_inner"></span></div>');
nv=S(VM,ak);
}
if(nv)
{
nv.firstChild.innerHTML!=iX&&(nv.firstChild.innerHTML=iX);
rmClass(nv,aym);

var Ep=calcPos(aC),
awX=(Ep[1]+Ep[3])/2;
Ep[0]-=3;
Ep[2]+=3;

var	cs=parseInt(nv.offsetHeight),
cH=parseInt(nv.offsetWidth),
bP=calcAdjPos([Ep[0],awX,Ep[2],awX],cH,cs,ak,2),
hR=nv.className,
aFJ=bP[2]==Ep[0]?"smt_down":"smt_up";


nv.className="smt_container "+aFJ+" smt_id_"+aC.id;

nv.style.top=bP[0]+"px";
nv.style.left=(bP[3]-cH/2)+"px";
ak["__simpleTipDivShared"]=nv;
}
}
else if(aq=="out")
{
var nv=S(VM,ak);
nv&&addClass(nv,aym);
ak["__simpleTipDivShared"]=null;
}
break;
}
}
},

bdW:function(ak)
{
ak.call=function()
{
var aR=arguments,azf=[],i,l,
cX=aR[0].split("."),
ae=gV=ak;

for(i=1,l=aR.length;i<l;i++)
{
azf.push(aR[i]);
}

for(i=0,l=cX.length;i<l&&gV;i++)
{
ae=gV;
gV=gV[cX[i]];
}

if(typeof gV=="function")
{
return gV.apply(ae,azf);
}
}
},



bkf:function(ak)
{
var ae=this;
ak.setTimeout(
function()
{
var bep=(ak.location.getParams
&&ak.location.getParams()["t"]||"")
.indexOf("compose")==0;

addEvents(ak.document,
{
mousedown:hideMenuEvent,
touchend:getTop().iPadCloseMenu||function(){},
keydown:function(ah)
{

ae.aWA(ah,bep);
},
click:function(ah)
{
hideEditorMenu();


getTop().QMWebpushTip&&getTop().QMWebpushTip.hideAll(3000);
},
mouseover:function(ah)
{
ae.aCK("over",ak,ah);
},
mouseout:function(ah)
{
ae.aCK("out",ak,ah);
}
}
);
},100
);
},

LI:function(ak)
{
ak=ak||window;

if(ak.gIsInitPageEventProcess)
{
return;
}

ak.gIsInitPageEventProcess=true;

var iF=0;
try
{
iF=1;
this.aZT(ak);

iF=2;
this.aYW(ak);

iF=3;
this.bcm(ak);

iF=4;
this.bbp(ak);

iF=5;
this.bkf(ak);

iF=6;
this.bdW(ak);

getTop().gbIsMac&&ak.document.documentElement&&(ak.document.documentElement.className+=" MacOS");
}
catch(aL)
{
doPageError(aL.message,ak.location.href,
"initPageEvent_processid:"+iF
);
}

try
{

ak.document.execCommand("BackgroundImageCache",false,true);
}
catch(aL)
{
}
},

avY:function(Tp)
{
try
{
if(getMainWin().exitConfirm)
{
return getMainWin().exitConfirm(Tp);
}
}
catch(aL)
{
debug(aL.message);
}


Tp();
}
}





function initPageEvent(ak)
{
QMPageInit.LI(ak);
}

(function()
{
initPageEvent(window);
})();






function getTopWin()
{
return getTop();
}





function getMainWin()
{
return F("mainFrame",getTop())||getTop();
}





function getActionWin()
{
return F("actionFrame",getTopWin());
}





function getLeftWin()
{
return getTop();
}
var GetLeftWin=getLeftWin;





function getLeftDateWin()
{
return F("leftFrame",getTop());
}






function reloadFrm(ak)
{
if(ak&&ak!=getTop())
{
try
{
if(ak.location.search)
{


var Wx=ak.location.href.split("#")[0].split("?"),
axO="r="+now();
Wx[1]=!Wx[1]?axO:
(("&"+Wx[1]+"&").replace(/&r=.*?&/,"&")+axO).slice(1);
ak.location.replace(Wx.join("?"));
return true;
}
}
catch(aL)
{
}
}
return false;
}




function reloadLeftWin()
{
var uq;
if(!reloadFrm(getLeftDateWin())&&(uq=S("leftFrame",getTop())))
{
uq.src=T('/cgi-bin/folderlist?sid=$sid$&r=$rand$').replace(
{
sid:getSid(),
rand:Math.random()
}
);
}
}








function reloadAllFrm(csJ,ckM,VW,Wm)
{
function Dp(bbU)
{
var axJ=arguments.callee;
getTop().setTimeout(bbU,axJ.jy);
axJ.jy+=200;
}
Dp.jy=0;

if(Wm==null||Wm)
{
Dp(
function()
{
reloadFrm(getMainWin());
}
);
}

if(VW==null||VW)
{
Dp(
function()
{
reloadFrm(reloadLeftWin());
}
);
}
}






function reloadFrmLeftMain(VW,Wm)
{
reloadAllFrm(false,false,VW,Wm);
}













function goUrlTopWin(be,bkh)
{

goUrl(getTop(),be,!bkh);
}







function goUrlMainFrm(be,bbe,azJ)
{
if(bbe!=false)
{
reloadLeftWin();
setTimeout(
function()
{
goUrl(S("mainFrame",getTop())||getTop(),be,!azJ);
},
300
);
}
else
{
goUrl(S("mainFrame",getTop())||getTop(),be,!azJ);
}
}

function bjW(akU)
{
return akU&&akU.substr&&("?"+(["&",akU.substr(1),"&"].join("")
.replace(/&sid=.*?&/ig,"&")
.replace(/&loc=.*?&/ig,"&")
.replace(/&newwin=true/ig,"&")
.slice(1,-1)));
}










function goNewWin(Is,bjj,biI,Ye)
{
var Tz="",
adC="",
uB="";

if(typeof(Is)=="object")
{
Tz=Is.pathname;
adC=Is.search;
}
else
{
var wE=Is.indexOf("?");
Tz=Is.substring(0,wE);
adC=Is.substr(wE);
}

if(Ye)
{
uB=Ye.frametmpl;
}
else
{
uB=biI?"frame_html":"newwin_frame";
}

var aBZ='';
if(Tz.indexOf('reader_')>-1)
{
aBZ=getTop().location.protocol+"//mail.qq.com";
}

var aN=T(aBZ+'/cgi-bin/frame_html?t=$t$&sid=$sid$&url=$url$').replace(
{
t:uB,
sid:getSid(),
url:encodeURI(Tz+bjW(adC))
}
);

if(Ye)
{
aN+=Ye.frametmplparam;
}

if(bjj)
{
goUrlTopWin(aN,true);
}
else
{

window.open(aN);
}
}






function isMaximizeMainFrame()
{
return getTop().maximizeMainFrame.baj;
}






function maximizeMainFrame(XK)
{
var ado=S("mainFrame",getTop()),
Xw=S("leftPanel",getTop()),
Zd=S("imgLine",getTop());

if(!ado||!Zd||!Xw
||XK!=2&&(XK==0)==!isMaximizeMainFrame())
{
return false;
}

var PL=getTop().maximizeMainFrame,
zZ=PL.baj=XK==2
?!isMaximizeMainFrame():(XK?true:false);

if(zZ)
{
PL.biV=Xw.style.width;
PL.bkz=Zd.parentNode.style.cssText;
}

ado.parentNode.style.marginLeft=
zZ?"5px":PL.biV;
Xw.parentNode.style.cssText=
zZ?"border-left:none;":"";
Zd.parentNode.style.cssText=
(zZ?"border-left:none;margin-left:0;padding:0;":"")+PL.bkz;

show(Xw,!zZ);
show(Zd,!zZ);
show(S("qqplus_panel",getTop()),!zZ);
show(S("folder",getTop()),!zZ);
}







function filteSignatureTag(bj,cv)
{
var eV=typeof bj=="string"?bj:"";

if(cv=="2LOWCASE")
{
return eV.replace(/<sign(.*?)\/>/ig,"<sign$1>")
.replace(/<qzone(.*?)\/>/ig,"<qzone$1>")
.replace(/<taotao(.*?)\/>/ig,"<taotao$1>")
.replace(/<\/sign>/ig,"</sign>")
.replace(/<\/qzone>/ig,"</qzone>")
.replace(/<\/taotao>/ig,"</taotao>")
.replace(/<(\/?)includetail>/ig,"<$1tincludetail>");
}
if(cv=="FILTE<:")
{
return eV.replace(/<:sign.*?>/ig,"")
.replace(/<[:\/]?qzone.*?>/ig,"")
.replace(/<[:\/]?taotao.*?>/ig,"")
.replace(/<[:\/]?includetail>/ig,"");
}
else
{
return eV.replace(/<\/?sign.*?>/ig,"")
.replace(/<\/?qzone.*?>/ig,"")
.replace(/<\/?taotao.*?>/ig,"")
.replace(/<\/?includetail.*?>/ig,"");
}
}





function getSignatureHeader()
{
return T([
'<div style="color:#909090;font-family:Arial Narrow;font-size:12px">',
'------------------',
'</div>'
]);
}





window.g_sBaseImageUrl=getTop().getPath("stationery");
if(!getTop().goUserInfo)
{
getTop().goUserInfo=
{
dC:'init',
agm:{},
as:{},
bYc:function()
{
for(var obj in getTop().goUserInfo.agm)
{
for(var i=0,l=getTop().goUserInfo.agm[obj].length;i<l;i++)
{
try{
getTop().goUserInfo.agm[obj][i](getTop().goUserInfo.get(obj));
}catch(e){}
}
}
getTop().goUserInfo.agm={};
},
get:function(aV)
{
if(getTop().goUserInfo.dC=='init')
{
getTop().goUserInfo.reset();
return'';
}
else
{
if(typeof getTop().goUserInfo.as[aV]==='undefined')
{
return'';
}
return getTop().goUserInfo.as[aV];
}
},
deferget:function(aV,xg)
{
if(getTop().goUserInfo.dC=='init')
{
if(typeof getTop().goUserInfo.agm[aV]==='undefined')
{
getTop().goUserInfo.agm[aV]=[];
}
getTop().goUserInfo.agm[aV].push(xg);
getTop().goUserInfo.reset();
}
else
{
xg(getTop().goUserInfo.as[aV]);
}
},
set:function(de)
{
extend(getTop().goUserInfo.as,de);
},
reset:function()
{
if(getTop().goUserInfo.dC=='loading')
{
return;
}
getTop().goUserInfo.dC='loading';

var aN=T(["/cgi-bin/getcomposedata?t=signature&fun=compose&sid=$sid$&qzonesign=$qzonesign$&r=$rand$"])
.replace({
sid:getSid(),
qzonesign:"",
rand:now()
});
QMAjax.send(aN,
{
method:"GET",
timeout:10000,
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(aP,bt)
{
var iE=trim2(bt);

if(aP&&iE.indexOf("(")==0)
{
getTop().goUserInfo.dC='ready';
getTop().goUserInfo.set(
(function(){
return(new Function("return "+iE))();
})()
);
bindAccount();
}
else
{
getTop().goUserInfo.dC='init';
}
getTop().goUserInfo.bYc();
}
});
}
};
}






function setDefaultSender(mw)
{

getTop().goUserInfo.set({"DEF_MAIL_FROM":mw});

}

function getMailZoomTool()
{
return getTop().goUserInfo.get("DEF_MAILZOOMTOOL")=="1";
}

function setMailZoomTool(anu)
{
getTop().goUserInfo.set({"DEF_MAILZOOMTOOL":anu?"1":"0"});
}





function closeRecognizeNickName()
{
ossLog("realtime","all","stat=tips&type=know&tipid=66");
getTop().goUserInfo.set({"DEF_RECOGNIZENICKNAME":false});
}






function getUserInfoText(aq)
{
var cq=S("user"+aq,getTopWin())||{};
return fixNonBreakSpace(cq.innerText||cq.textContent);
}






function getUserInfo(aq)
{
return(S("user"+aq,getTopWin())||{}).innerHTML||"";
}







function setUserInfo(aq,bC)
{
try
{
S("user"+aq,getTopWin()).innerHTML=htmlEncode(bC);
return true;
}
catch(aL)
{
return false;
}
}










function msgBox(cQ,Lb,Xx,ve,
azh,ak)
{
if(window!=getTop())
{
return getTop().msgBox(cQ,Lb,Xx,ve,
azh,ak);
}

var fS=cQ;

if(!fS)
{
var Io=S("msg_txt",ak||window)
||S("msg_txt",getActionWin());

if(Io&&(Io.innerText||Io.textContent)
&&Io.getAttribute("ok")!="true")
{
fS=filteScript(Io.innerHTML);
Io.setAttribute("ok","true");
}
}

if(!fS||!(fS=trim(fS.replace(/[\r\n]/ig,""))))
{
return;
}

hiddenMsg();

if(Lb=="dialog")
{
alertBox(
{
msg:fS,
title:azh||"Warning"
}
);
}
else
{
setClass(arguments.callee.createMessageBox().firstChild,
Lb=="success"?"msg":"errmsg").innerHTML=fS;

showMsg();

if(Xx)
{
getTop().gMsgBoxTimer=getTop().setInterval(getTop().hiddenMsg,ve||5000);
}

getTop().gMsgDispTime=now();
}
};




msgBox.createMessageBox=function(Jr)
{
var OI=S("msgBoxDIV",getTop());
if(!OI)
{

var bR=typeof Jr=="undefined"?(getTop().bnewwin?0:43):Jr;
insertHTML(
getTop().document.body,
"afterBegin",
T([
'<div id="msgBoxDIV" style="position:absolute;width:100%;display:none;',
'padding-top:2px;height:24px;*height:24px;_height:20px;top:$top$px;text-align:center;">',
'<span></span>',
'</div>'
]).replace({
top:bR
})
);
OI=S("msgBoxDIV",getTop());
}
return OI;
};





function isshowMsg()
{
return getTop().isShow("msgBoxDIV");
}




function hiddenMsg()
{
if(getTop().gMsgBoxTimer)
{
getTop().clearInterval(getTop().gMsgBoxTimer);
getTop().gMsgBoxTimer=null;
}
getTop().show("msgBoxDIV",false);
getTop().showProcess(0);
}






function displayGrayTip(an,gJ)
{
var cB=an.style;

cB.visibility=!gJ?"hidden":"";
cB.height=!gJ?"0":"";
}




function showMsg()
{
getTop().show("msgBoxDIV",true);
}







function showError(hN,ve,bNo)
{
msgBox(hN,"",ve!=-1,ve||5000);
var OI=S("msgBoxDIV",getTop());
if(OI&&bNo)
{
var aOo=[];
E(GelTags("script",OI),function(bpw)
{
aOo.push(bpw.innerHTML);
}
);
globalEval(aOo.join(";"),getTop());
}
}






function showInfo(baz,ve)
{
msgBox(baz,"success",ve!=-1,ve||5000);
}











function showProcess(tT,bev,ajO,aCG,bhj)
{
var aJ="load_process",
aAZ=arguments.callee.aPY(aJ);

if(tT==0)
{
return show(aAZ,false);
}

hiddenMsg();
show(aAZ,true);

var Ic=tT==2;

if(Ic)
{
var fB=parseInt(ajO);

if(isNaN(fB))
{
fB=0;
}
else
{
fB=Math.max(0,Math.min(100,fB));
}
if(aCG)
{
S(aJ+"_plan_info",getTop()).innerHTML=aCG+(fB?":":"");
}

S(aJ+"_plan_rate",getTop()).innerHTML=
S(aJ+"_plan_bar",getTop()).style.width=[fB,"%"].join("");
}
else
{
if(ajO)
{
S(aJ+"_info",getTop()).innerHTML=ajO;
}
}

show(S(aJ+"_plan",getTop()),Ic);
show(S(aJ+"_img",getTop()),Ic?false:bev);
show(S(aJ+"_plan_info",getTop()),Ic);
show(S(aJ+"_plan_rate",getTop()),Ic&&fB);
show(S(aJ+"_info",getTop()),!Ic);
show(S(aJ+"_cancel",getTop()),bhj!=false);
}






showProcess.aPY=function(ay)
{
var ajL=S(ay,getTop());
if(!ajL)
{
insertHTML(
getTop().document.body,
"afterBegin",
T([
'<table id="$id$" cellspacing=0 cellpadding=0 border=0 ',
'style="position:absolute;top:$top$px;left:0;width:100%;display:none;z-index:9999;">',
'<tr><td align="center">',
'<table cellspacing=0 cellpadding=0 border=0 class="autosave autosave_txt" style="height:20px;"><tr>',
'<td style="width:2px;"></td>',
'<td id="$id$_img" style="padding:0 0 0 5px;">',
'<img src="$image_path$ico_loading12fb20.gif" style="width:16px;height:16px;vertical-align:middle;">',
'</td>',
'<td id="$id$_plan" valign=center style="padding:0 0 0 5px;">',
'<div style="font:1px;border:1px solid white;width:104px;text-align:left;">',
'<div id="$id$_plan_bar" style="font:1px;background:#fff;height:8px;margin:1px 0;width:50%;"></div>',
'</div>',
'</td>',
'<td id="$id$_plan_info" style="padding:0 0 0 5px;"></td>',
'<td id="$id$_plan_rate" style="width:40px;text-align:right;padding:0;"></td>',
'<td id="$id$_info" style="padding:0 0 0 5px;"></td>',
'<td id="$id$_cancel" style="padding:0 0 0 5px;">',
'[<a onclick="getTop().cancelDoSend();" nocheck="true" style="color:white;">Cancel</a>]',
'</td>',
'<td style="padding:0 0 0 5px;"></td>',
'<td style="width:2px;"></td>',
'</tr></table>',
'</td></tr>',
'</table>'
]).replace(
{
id:ay,
top:getTop().bnewwin?0:45,
image_path:getPath("image",true)
}
)
);
ajL=S(ay,getTop());
}
return ajL;
};





function getProcessInfo()
{
var aJ="load_process",
jL=getTop();

if(isShow(S(aJ,jL)))
{
var aCO=S(aJ+"_plan_rate",jL),
aik=S(aJ+"_info",jL);

if(aik&&isShow(aik))
{
return aik.innerHTML;
}

if(aCO&&isShow(S(aJ+"_plan",jL)))
{
return parseInt(aCO.innerHTML);
}
}
return"";
}






function replaceCss(ak,qu)
{
replaceCssFile(
"skin",
[getPath("style"),getFullResSuffix(["skin",
typeof qu=="undefined"?getPath("skin"):qu,".css"].join(""))
].join(""),
(ak||window).document
);
}






function aBX(qu,Yz)
{
var ag=getTop();

return!Yz&&ag.gLogoUrl?ag.gLogoUrl.replace(/(.*)_[^_]+_([^_]+)/,"$1_"+qu+"_$2")
:TE([
'$images_path$logo',
'$@$if($bFoxmail$)$@$',
'_foxmail',
'$@$else$@$',
'$sSubfolder$',
'$@$endif$@$',
'/logo_$nSkinId$_',
'$@$if($bFoxmail$)$@$',
'0',
'$@$else$@$',
'$sLogoid$',
'$@$endif$@$.gif'
]).replace(
{
images_path:getPath("image"),
bFoxmail:Yz,
sSubfolder:ag.gsLogoFolder,
nSkinId:qu,
sLogoid:(ag.gsLogoFolder||qu==0)?(ag.gLogoId||0):0
}
);
}








function doRealChangeStyle(aYH,qu,Yz,pd,bkg)
{
var ag=getTop(),
Am=ag.gTempSkinId=qu,
bN=getMainWin(),
agn=[ag,bN],
bbc=bkg||false,
RC=S("imglogo",ag);

if(RC)
{

if(typeof pd=="undefined"||pd=="")
{
RC.style.backgroundImage="";
if(qu<10000000&&ag.gLogoUrl)
{

RC.style.backgroundImage="url("+aBX(Am,Yz)+")";
RC.src="/zh_CN/htmledition/images/spacer.gif";












}
}
else
{
RC.style.backgroundImage="url("+pd+")";
}
RC.className=bbc?"domainmaillogo":"maillogo";
}







E(ag.goDialogList,function(iC,nV)
{
agn.push(F(nV,getTop()));
});

E(GelTags("iframe",bN.document),function(iC)
{
agn.push(iC.contentWindow);
});

E(agn,function(ak)
{
replaceCss(ak,Am);
});

removeSelf(aYH);

setTimeout(resizeFolderList);

rdVer("BaseVer",1);
}






function changeStyle(qu,pd)
{
var VL=false,
YU=false;


var Wn=getTop().getGlobalVarValue("DOMAIN_MAIL_LOGO_URL")||{},
Eg=getTop().goUserInfo.get("DEF_MAIL_FROM")||'';
if(pd)
{
YU=pd.indexOf("/cgi-bin/viewfile")>=0;
if(YU)
{
Wn[Eg]=pd;
Eg&&setGlobalVarValue("DOMAIN_MAIL_LOGO_URL",Wn);
}
}
else if(Eg&&Wn[Eg])
{

pd=Wn[Eg];
YU=pd&&pd.indexOf("/cgi-bin/viewfile")>=0;
}

var Am=typeof qu=="undefined"||qu==""?getTop().skin_path:qu,
aXD=getTop().gsLogoFolder,
baW=VL?0:(aXD||Am==0?(getTop().gLogoId||0):0),
bbM=VL?"_foxmail":"",
aDt=getTop().changeStyle,
beF=aDt.ake,
ake=aDt.ake=["skinCssCache",Am,
bbM,pd||baW].join("_");


if(ake!=beF)
{
cacheByIframe([
["css",getPath("style"),"skin"+Am+".css"],
!!pd?["img","",pd]

:["img",aBX(Am,VL)]
],
{
onload:function()
{
doRealChangeStyle(this,Am,VL,pd,YU);
}
}
);
}
}




function osslogCompose(iY,ajJ,bc,aho,ajV)
{
getTop().ossLog("delay","all",T([
'stat=compose_send',
'&t=$time$&actionId=$actionId$&mailid=$mailid$',
'&isActivex=$isActivex$&failCode=$failCode$',
'&$other$'
]).replace({
time:iY,
actionId:ajJ,
mailId:bc,
failCode:aho,
other:["&cgitm=",getTop().g_cgiTimeStamp||-1,"&clitm=",getTop().g_clientTimeStamp||-1,"&comtm=",ajV&&ajV.valueOf?ajV.valueOf():-1].join('')
}));
}

function osslogAjaxCompose(zi,Cf,hY,aq)
{
var ag=getTop(),
bfk=["IE","FF","Safari","Chrome","Opera","QBIE","TT","NS"],
tN="gbIs",
bxQ="Other";
for(var i=0;i<bfk.length;i++)
{
if(ag[tN+bfk[i]])
{
bxQ=bfk[i];
break;
}
}
ossLog("delay","all",T([
'stat=compose_ajax_send',
'&server=$server$&browser=$browser$',
'&status=$status$&code=$code$&section=$section$&sendtype=$type$&ran=$ran$',
]).replace(
{
ran:now(),
server:getCookie("ssl_edition")||location.host,
browser:bxQ,

status:zi,
code:Cf,
section:hY,
type:aq
}
));
}








function recodeComposeStatus(ajJ,bc,aho,bgB)
{
var hu=0,
Rz=getTop().gSendTimeStart;

if(!Rz||!Rz.valueOf)
{
if(!bgB)
{
return;
}
}
else
{
hu=now()-Rz.valueOf();
getTop().gSendTimeStart=null;
}



osslogCompose(hu,ajJ,bc,aho,Rz);













getTop().isUseActiveXCompose=false;
}




function errorProcess(Ri)
{

if(typeof getMainWin().ErrorCallBack=="function")
{
getMainWin().ErrorCallBack(Ri);

}
else if(typeof getTop().ErrorCallBack=="function")
{
getTop().ErrorCallBack(Ri);
}
}







function doPostFinishCheck(ay,ak,aPZ)
{
if(ay)
{
var Es="",
Sr=false,
uq=S(ay,ak),
acO=F(ay,ak),
aOk=-1;
try
{
aOk=0;
if(!uq
||uq.getAttribute("deleted")=="true")
{
return;
}

aOk=1;
var cg=acO.document.body,
Sr=!cg.className&&!cg.style.cssText;

aOk=2;
if(Sr)
{
var azB=acO.document.documentElement;
Es=(azB.textContent
||azB.innerText||"").substr(0,30);
}




}
catch(aL)
{
doPageError([ay,aL.message].join(":"),acO&&acO.location&&acO.location.href||ay,aOk);
Sr=aL.message||"exception";
}

QMHistory.recordActionFrameChange();

if(Sr)
{
callBack.call(uq,aPZ,[Es]);












errorProcess();
}
}
}




function actionFinishCheck()
{
doPostFinishCheck("actionFrame",getTop(),function(responseContent)
{
showError(gsMsgLinkErr);
}
);
}




function doSendFinishCheck()
{
doPostFinishCheck("sendmailFrame",getTop(),function(akF)
{
recodeComposeStatus(2,null,akF||0);
msgBox(T(['Failed to send the message: network problem occurred. '
,'[<a href="/cgi-bin/switch2service?sid=$sid$&errcode=-1&time=$time$&cginame=sendmail&t=error_report">Report error</a>]']).replace(
{
time:formatDate(new Date(),"$YY$$MM$$DD$$hh$$mm$$ss$")
}
),"dialog",true,0,"Error Information");
}
);
}






function submitToActionFrm(jp)
{
try
{
jp.submit();
return true;
}
catch(aL)
{
showError(jp.message);
return false;
}
}









function afterAutoSave(tA,bc,cQ,beG)
{

var iF=0,
zN,aqv;

try
{
var bN=getTop().getMainWin();

function akj()
{
if(disableAll)
{
disableAll(false);
}
}

iF=1;

if(bc==""||!bc)
{
return akj();
}

iF=2;

if(!bN||!S("fmailid",bN))
{
return akj();
}

iF=3;
aqv=S("fmailid",bN).value;

if(aqv!=bc)
{
S("fmailid",bN).value=bc;
getTop().setTimeout(
function()
{
reloadLeftWin()
},
0
);
}

iF=4;

var eM=tA.split(" |"),
IH=[],
apf=bN.QMAttach.getExistList();

for(var i=0,aB=apf.length;i<aB;i++)
{
var YS=S("Uploader"+apf[i],bN);
if(YS&&!YS.disabled&&YS.value!="")
{
IH.push(YS);
}
}

iF=5;

var bcX=IH.length;
for(var i=0,aB=eM.length-1;i<aB;i++)
{
var qJ=false;
for(var j=0;j<=i&&j<bcX;j++)
{
if(!IH[j].disabled
&&IH[j].value.indexOf(eM[i])!=-1)
{
IH[j].disabled=true;
qJ=true;
try
{
if(gbIsIE||gbIsWebKit)
{
IH[j].parentNode.childNodes[1].innerText=eM[i];
}
}
catch(aL)
{
}
}
}
if(!qJ)
{
var bd=eM[i]+" |",
dN=tA.indexOf(bd);

if(dN!=-1)
{
tA=tA.substr(0,dN)
+tA.substr(dN+bd.length,
tA.length-dN-bd.length
);
}
}
}

iF=6;

bN.loadValue();

iF=7;

if(tA&&S("fattachlist",bN))
{
S("fattachlist",bN).value+=tA;
}

iF=8;







iF=9;

showInfo(cQ
||(formatDate(new Date,"$hh$:$mm$")+" "+getTop().gsMsgSendErrorSaveOK));

iF=10;
var dV=getTop().QMDialog("composeExitAlert");
var pe=dV&&dV.S("btn_exit_notsave");
if(pe&&pe.isShow())
{
return fireMouseEvent(pe,"click");
}

iF=11;

if(!beG)
{
akj();
}

iF=12;

bN.enableAutoSave();
}
catch(aL)
{
zN=aL.message;
debug(["afterAutoSave:",aL.message,"eid:",iF]);
}









}




function cancelDoSend()
{
var bN=getMainWin(),
GH=bN.QMAttach;

if(GH&&GH.onfinish)
{
GH.onprogress=null;
GH.onfinish=null;
}
else
{
var agY=S("sendmailFrame",getTop());
if(agY)
{
agY.setAttribute("deleted","true");
removeSelf(agY);
}
}

recodeComposeStatus(3,null,0);
showProcess(0);
errorProcess();
}







function quickDoSend(rh,bC,cQ)
{
var acY=false;

if(cQ!="nomsg")
{
showProcess(1,0,[
"<img src='",getPath("image"),"newicon/a_send.gif' width='14px' height='14px' align='absmiddle'>&nbsp;",
(cQ||gsMsgSend)].join(""),null,true);
}

disableSendBtn(true);
disableSource(true);

createBlankIframe(getTop(),
{
id:"sendmailFrame",
onload:function(ak)
{
if(acY)
{
doSendFinishCheck(this);
}
else
{
acY=true;

try
{
rh.content.value=bC;
rh.target="sendmailFrame";
rh.submit();
}
catch(aL)
{
showError("Failed to send: "+aL.message);
disableSendBtn(false);
disableSource(false);
}
}
}
}
);
}






function disableSendBtn(mM,ak)
{
disableCtl("sendbtn",mM,ak||getMainWin());
}





function disableSaveBtn(mM,ak)
{
disableCtl("savebtn",mM,ak||getMainWin());
}





function disableTimeSendBtn(mM,ak)
{
disableCtl("timeSendbtn",mM,ak||getMainWin());
}





function disableSource(mM)
{
disableCtl("source",mM,getMainWin());
}




function disableAll(mM,ak)
{
var bN=ak||getMainWin();
if(bN.disableAll&&bN.disableAll!=arguments.callee)
{
return bN.disableAll(mM);
}

disableSendBtn(mM,ak);
disableSaveBtn(mM,ak);
disableTimeSendBtn(mM,ak);

var dV=getTop().QMDialog("composeExitAlert"),
ayE=dV&&dV.S("btn_exit_save");
if(ayE)
{
ayE.disabled=mM;
}
}






function verifyCode(aq,atn)
{
if(window!=getTop())
{
return getTop().verifyCode(bzq);
}

var ye=arguments.callee,

aZx=ye.bdz;


setVerifyCallBack();
loadingBox(
{
model:"Verification Code",
js:"$js_path$qmverify131cca.js",
oncheck:function()
{
return window.QMVerifyBox;
},
onload:function()
{
QMVerifyBox.open(
{
sType:aq,
sVerifyKey:atn,
onok:aZx
}
);
}
}
);
}
























function openComposeDlg(Ji,aj,aCm)
{
!(typeof QMAddress!="undefined"&&QMAddress.isInit())&&initAddress();



loadJsFileToTop(["$js_path$com/kits/qmeditor/qqmail/release/editor1341a3.js"]);
loadingBox(
{
model:"Sending Messages",
js:["$js_path$libcompose131cca.js","$js_path$qmaddrinput131cca.js"],
oncheck:function()
{
return window.ComposeLib&&window.QMAddrInput&&window.QMEditor&&(!aCm||aCm());
},
onload:function()
{
ComposeLib.openDlg(Ji,aj);
}
}
);
}










function setVerifyCallBack(cd)
{
getTop().verifyCode.bdz=cd;
}







function emptyFolder(brp,bnG,ayA)
{
confirmBox({
title:"Warning",
msg:T([
'<div class="dialog_f_t">$name$</div>',
'<div class="dialog_f_d">Messages can not be recovered once you had emptied the folder.</div>'
]).replace({
name:(ayA?"Do you want to empty this folder ?":"Do you want to empty folder "+ayA+"")

}),
confirmBtnTxt:'Yes',
cancelBtnTxt:'No',
onreturn:function(aP)
{
aP&&bnG();
}
});




}








function renameFolder(dM,aq,ak,aSL)
{
promptFolder({
defaultValue:aSL||'',
type:"rename"+(aq||'folder'),
onreturn:function(TR){
var eA=S("frm",ak);
if(aq=='tag')
{
eA.fun.value="renametag";
eA.tagname.value=TR;
eA.tagid.value=dM;
}
else
{
eA.fun.value="rename";
eA.name.value=TR;
eA.folderid.value=dM;
}
submitToActionFrm(eA);
}
});
return false;
}











function promptFolder(aj)
{
var aA={
shortcutgroup:{title:'\u65B0\u5EFA\u8054\u7CFB\u4EBA\u5206\u7EC4',msg:'\u8BF7\u586B\u5199\u8054\u7CFB\u4EBA\u5206\u7EC4\u540D\u79F0',name:'\u8054\u7CFB\u4EBA\u5206\u7EC4',maxascii:32,description:"\u5199\u4FE1\u65F6\uFF0C\u53EA\u9700\u8981\u8F93\u5165\u8FD9\u4E2A\u7FA4\u7EC4\u540D(\u6C49\u5B57\u9700\u8F93\u5165\u62FC\u97F3)\uFF0C\u5C31\u53EF\u4EE5\u5FEB\u6377\u7FA4\u53D1\u4E86\u3002"},
folder:{title:'New Folder',msg:'Please enter folder name',name:'Folder Name',maxascii:80},
tag:{title:'New Label',msg:'Please fill in the label name',name:'label',maxascii:50},
renamefolder:{title:'Rename Folder',msg:'Please fill in the new folder name.',name:'Folder',maxascii:80},
renametag:{title:'Rename Label',msg:'Please fill in the new label name.',name:'Label',maxascii:50}
}[aj.type];
aA.defaultValue=aj.defaultValue;

aj.width&&(aA.width=aj.width);
aj.height&&(aA.height=aj.height);
aj.bAlignCenter&&(aA.bAlignCenter=aj.bAlignCenter);
aj.onclose&&(aA.onclose=aj.onclose);
aj.style&&(aA.style=aj.style);

aA.onreturn=function(aP,fM){
if(!aP)
{
return;
}

var aB=getAsiiStrLen(trim(fM));
if(aB==0||aB>aA.maxascii)
{
return showError(TE(aB?"$name$Please set the name in$maxascii$ characters. ($@$eval $maxascii$/2$@$ Chinese )":'$name$Please fill in the name.').replace(aA));
}
if(/[~!#\$%\^&\*\(\)=\+|\\\[\]\{\};\':\",\?\/<>]/.test(fM))
{
return showError(aA.name+'Name can not include characters like ~!#$%^&*()=+|\\[]{};\':",?/<> . ');
}

aj.onreturn(fM);
};
promptBox(aA);
}


function ayU(dM,GL,VP,cv)
{
if(dM)
{
var aiI=S(dM+"_td",GL);
if(aiI)
{
setClass(aiI,VP);
return aiI;
}
else
{

var afH=S(dM,GL);
if(afH)
{
var aAx=cv=="over";
if(aAx)
{
showFolders(afH.name,true);
}
var aZA=S(dM,GL).parentNode;
setClass(aZA,aAx?"fn_list":"");
return afH;
}
}
}
}











function switchFolderComm(ay,ak,aei,iR,bjc,
bhs,aAq)
{
var aij=S(aei,ak),
jn=ay;

if(jn)
{
aAq.aYL=jn;
}
else
{
jn=aAq.aYL;
}

if(aij)
{
var aAY="SwiTchFoLdErComM_gLoBaldATa",
azV=ak[aAY],
OR;

if(azV!=jn)
{
ayU(azV,ak,bhs,"none");
}

if(OR=
ayU(ak[aAY]=jn,ak,bjc,"over"))
{

E("new|personal|pop|tag".split("|"),function(axU)
{
var It=S(axU+"folders",ak);
It&&isObjContainTarget(It,OR)
&&showFolders(axU,true);
}
);

if(getStyle(aij,"overflow")!="hidden")
{

scrollIntoMidView(OR,aij);
}
else
{

var It=S("ScrollFolder",ak);
It&&isObjContainTarget(It,OR)
&&scrollIntoMidView(OR,It);
}
}
}
}






function switchFolder(ay,ak)
{
getTop().switchFolderComm(ay,ak||getLeftWin(),"folder","li","fn","fs",
getTop().switchFolder
);
}







function switchRightFolder(ay,biq,aei)
{
getTop().switchFolderComm(ay,biq||F("rightFolderList",getMainWin()),
aei||"folder_new","div","toolbg","",getTop().switchRightFolder
);
}






function isShowFolders(ay,ak)
{
var yP=S("icon_"+ay,ak||getTop());
return!!(yP&&yP.className=="fd_off");
}





function showFolders(ay,kg,ak)
{
var ap=ak||getTop(),
aS=S(ay+"folders",ap),
yP=S("icon_"+ay,ap);

if(aS&&yP)
{
var sa=S(ay+"folders",ap),
buj=GelTags("li",sa).length;

var hx=!isShowFolders(ay,ap);
if(buj&&(typeof kg!="boolean"||hx==kg))
{
setClass(yP,hx?"fd_off":"fd_on");

if(!ak)
{
var ag=getTop(),
axs="fOlDErsaNimaTion"+ay,
jA=ag[axs];

if(!jA)
{
jA=ag[axs]=new ag.qmAnimation(
{
from:1,
to:100
}
);
}

jA.stop();

if(hx)
{
aS.style.height="1px";
show(aS,true);
}
else
{
aS.style.height="auto";
}

var lR=aS.scrollHeight;
jA.play(
{
speed:lR,
onaction:function(bX,fR)
{
S(ay+"folders",ag).style.height=
(Math.floor((hx?fR:1-fR)*lR)
||1)+"px";
},
oncomplete:function(bX,atf)
{
var de=S(ay+"folders",ag);
if(hx)
{
de.style.height="auto";
}
else
{
show(de,false);
}
}
}
);
}
else
{
show(aS,hx);
}

callBack(getTop().iPadResizeFolder);
}
}
}

function decreaseFolderUnread(mw,tm,ak)
{
var ry,Kv=mw.split(';');
for(var i=Kv.length-1;i>=0;i--)
{
if(ry=Bd(0,Kv[i]))
{
Bd(1,Kv[i],ry-1,tm,ak);
}
}
}







function getFolderUnread(dM)
{
return Bd(0,dM);
}









function setFolderUnread(dM,bX,tm,ak)
{







return Bd(1,dM,bX||0,tm,ak);
}






function getGroupUnread(EM)
{
return Bd(0,EM,null,null,getMainWin());
}








function setGroupUnread(EM,bX,tm)
{
return Bd(1,EM,bX||0,tm,getMainWin());
}









function setTagUnread(dM,bX,tm,ak)
{
return Bd(1,dM,bX||0,tm,ak,true);
}











function Bd(ee,dM,bX,tm,ak,bdL)
{
var tx=S(
[
"folder_",


(new String(dM)).toString().split("folder_").pop()
].join(""),
ak||getLeftWin()
);
if(!tx)
{
return 0;
}

var fa=tx.getAttribute("etitle"),
aqG=GelTags("div",tx),
bd=tx.name;
if(aqG.length)
{
tx=aqG[0];
}

var hU=typeof(bX)=="number"&&bX>0?bX:0,
Pf=tx.innerText||tx.textContent||"",
XY=Pf.lastIndexOf("("),
aiV=XY==-1?0
:parseInt(Pf.substring(XY+1,Pf.lastIndexOf(")")));

if(ee==0)
{
return aiV;
}

if(aiV==hU)
{
return 1;
}

var are=hU==0,
bK={
info:htmlEncode(XY!=-1?Pf.substring(0,XY):Pf),
title:fa,
unread:hU
};

tx.title=T('$title$'+(tm||are?'':'  $unread$ unread message(s)')).replace(bK);




tx=setHTML(tx,T(are&&'$info$'
||(tm?'$info$($unread$)':'<b>$info$</b><b>($unread$)</b>')
).replace(bK)+(bK.info=='Starred Messages'?'<input type="button" class="ico_input icon_folderlist_star"/>':'')+(bK.info=='Bottle Messages'?'<input class="ico_input drifticon" type="button" hidefocus />':'')
);
tx.setAttribute("initlized","");


var bws=S(
"folder_"+(new String(dM)).toString().split("folder_").pop()+"_ns",
ak||getLeftWin()
);
bws&&setHTML(bws,T(are?'$info$':'<b>$info$</b>').replace(bK));

if(bd&&!bdL)
{
var aku=S("folder_"+bd,getTop());
if(aku)
{
try
{
Bd(ee,dM,hU,tm,getMainWin());
}
catch(aL)
{
doPageError(aL.message,"all.js","_optFolderUnread");
}

return setFolderUnread(aku.id,
getFolderUnread(aku.id)-aiV+hU);
}
}

return 1;
}







function doFolderEmpty(dM,rh,FW)
{
rh.folderid.value=dM;
rh.rk.value=Math.random();

if(rh.loc)
{
rh.loc.value=FW;
}

submitToActionFrm(rh);
}

function handleSubFolder(dM)
{
var bfD="icon_subfolder_fold",
aAm=S("icon_subfolder_"+dM),
hx=!hasClass(aAm,bfD);
if(aAm)
{
hx?
addClass(aAm,bfD):
rmClass(aAm,bfD);
show("folder_sysmsg_td",hx);
show("folder_notsysmsg_td",hx);
show("folder_sysmsg_line",hx);
show("folder_"+dM+"_ns",hx);
show("folder_"+dM,!hx);

QMAjax.send(T("/cgi-bin/setting4?sid=$sid$&openclassify=$openclassify$&fun=submit&loc=switchfolder,,,$loc$").replace(
{
openclassify:hx?0:1,
sid:getSid(),
loc:hx?"open":"close"
}
)
);
}
}








function selectAll(uy,ce)
{
E(GelTags("input",S('list',ce)),function(ha)
{
ha.checked=uy;
}
);
getTop().showSelectALL(ce,uy);
}





function selectReadMail(uy,ce)
{
E(GelTags("input",S('list',ce)),function(ha)
{
if(ha.title!="Select/Unselect")
{
ha.checked=ha.getAttribute('unread')!=uy;
}
}
);
}





function checkAddrSelected(ce)
{
var jb=GelTags("input",S('list',ce)),
aB=jb.length,
bS;

for(var i=0;i<aB;i++)
{
bS=jb[i];
if(bS.type=="checkbox"&&bS.checked)
{
return true;
}
}

return false;
}






function checkBoxCount(adf,ce)
{
var gF=0;

E(GelTags("INPUT",S("list",ce)),function(ky)
{
if(ky.type=="checkbox"
&&ky.name==adf
&&ky.checked)
{
gF++;
}
}
);

return gF;
}




function PGV()
{
}






function checkCheckBoxs(aI,rh)
{
var eA=rh||S("frm",getMainWin()),
jb=GelTags("input",eA),
kw;

for(var i=0,aB=jb.length;i<aB;i++)
{
kw=jb[i];

if(kw.type=="checkbox"
&&kw.name==aI
&&kw.checked)
{
return true;
}
}

return false;
}






function setListCheck(ky,Gb)
{
if(ky.type!="checkbox")
{
return;
}

if(Gb==null)
{
Gb=ky.checked;
}
else
{
ky.checked=Gb;
}

var cq=ky.parentNode.parentNode;

if(cq.tagName=="TR")
{
cq=cq.parentNode.parentNode;
}


if(cq==S("frm",getMainWin()))
{
return;
}

var Pm=cq.className;
if(Pm=="B")
{
Pm=Gb?"B":"";
}
else
{
Pm=strReplace(Pm," B","")
+(Gb?" B":"");
}

setClass(cq,Pm);

if(Gb)
{
listMouseOut.call(cq);
}
}







function doCheck(ah,PU,bjV,aWq)
{
var cf=ah||window.event,
cE=PU||cf.srcElement||cf.target,
bN=aWq||getMainWin();

if(!cE||!bN)
{
return;
}

if(cE.className=="one"||cE.className=="all")
{
CA(cE);
}
setListCheck(cE);

if((cf&&cf.shiftKey||bjV)
&&bN.gCurSelObj
&&bN.gCurSelObj!=cE
&&cE.checked==bN.gCurSelObj.checked)
{
var jb=getTop().GelTags("input",bN.document),
gF=0,
aB=jb.length,
kw;

for(var i=0;i<aB;i++)
{
kw=jb[i];

if(kw.type!="checkbox")
{
continue;
}

if((kw==bN.gCurSelObj
||kw==cE)&&gF++==1)
{
break;
}

if(gF==1)
{
setListCheck(kw,cE.checked);
}
}
}
bN.gCurSelObj=cE;

getTop().showSelectALL(bN,false);
var ctK=parents(".toarea",cE),
ayZ=ctK[0]&&ctK[0].previousSibling,
dNN;
if(ayZ)
{

while(ayZ)
{
if(ayZ.className&&ayZ.className.indexOf("bd talk")>=0)
{
break;
}
ayZ=ayZ.previousSibling;
}
if(ayZ)
{
E(GelTags("div",ayZ),function(an)
{
if(an.getAttribute("name")==="selectgrouptip"&&parseInt(an.style.width,10)==500)
{
if(bN.oSGKWs)
{
var aeW=an.getAttribute("keyword");
(aeW||aeW=="")&&bN.oSGKWds[aeW]&&delete bN.oSGKWds[aeW];
}
an.style.width="0px";

return true;
}
});
}
}
}






function checkAll(adf,ce)
{
E(GelTags("input",ce),function(cI)
{
if(cI.name==adf)
{
setListCheck(cI);
}
}
);
}







function fakeReadmail(aj)
{
QMAjax.send(
T('/cgi-bin/readmail?sid=$sid$&mailid=$mailid$&t=readsubmail&mode=fake&base=$base$&pf=$pf$').replace({
sid:getSid(),
mailid:aj.sMailId,
pf:rdVer.isPre(aj.sFolderId)?1:0,
base:rdVer("BaseVer",0)
}),
{
method:"GET",
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(aP,bt)
{
var iE=trim2(bt);
if(aP&&iE.indexOf("(")==0)
{
var fI=evalValue(iE);
if(fI)
{
folderOpt(extend(aj,fI));
callBack(getMainWin().updatePreAndNext,[aj]);
}
}
else
{
var Bf=getActionWin().document;
Bf.open();
Bf.write(kO.responseText);
}
}
}
);
}













function folderOpt(aj)
{
if(!aj)
{
return;
}

var ag=getTop();
ag.recordCompareReadedMailId(aj.sMailId);
if(aj.bNewMail)
{
var jn=aj.sFolderId,
boZ;





if(jn>0)
{
try{
ag.setFolderUnread(jn,ag.getFolderUnread(jn)-1);
if(aj.bStar)
{
ag.setFolderUnread("starred",ag.getFolderUnread("starred")-1);
}


if(aj.oSysTag&&/system:1\|/.test(aj.oSysTag))
{
setFolderUnread("sysmsg",getFolderUnread("sysmsg")-1);
}
if(aj.oSysTag&&/system:0\|/.test(aj.oSysTag))
{
setFolderUnread("notsysmsg",getFolderUnread("notsysmsg")-1);
}










var pS=aj.oMatchTag||[],
i=pS.length-1;
i>=0&&setTagUnread('tag',getFolderUnread('tag')-1);
for(;i>=0;i--)
{
var gl='tag_'+pS[i];
debug(['getFolderUnread',gl,getFolderUnread(gl)]);
setTagUnread(gl,getFolderUnread(gl)-1);
}

}catch(e){}
}




}
}






function recordReadedMailId(bc)
{
getTop().gsReadedMailId=bc;
}



function recordMailListScroll()
{
getTop().gnMailListPos=bodyScroll(getTop().getMainWin(),"scrollTop");
}





function recordCompareReadedMailId(bc)
{
if(bc&&getTop().gsReadedMailId!=bc)
{
getTop().gsReadedMailId=bc;
}

QMMailCache.addData(bc,{bUnread:null});
}






function SG(Pg,bap)
{
var dc=Pg.className,
hx=!/\bsts\b/i.test(dc);



var	bS=GelTags("input",Pg.parentNode)[0],
aBs=bS&&bS.className,
Ns=(bap
?Pg.parentNode.parentNode.parentNode
:Pg.parentNode).nextSibling;

if(aBs=="one"||aBs=="all")
{
setClass(bS,hx?"one":"all");
}

setClass(Pg,
hx?dc.replace(/\bhts\b/i,"sts"):dc.replace(/\bsts\b/i,"hts"));


if(Ns.className!="toarea")
{
Ns=Ns.nextSibling;
}

if(Ns.className!="toarea")
{
return;
}

return show(Ns,hx);
}







function checkNodeLocate(an,lb,cfT)
{
an=cfT?an.nextSibling:an.previousSibling;
while(an)
{
if(an.className===lb)
{
return false;
}
an=cfT?an.nextSibling:an.previousSibling;
}
return true;
}




function getSelectGroupUrl()
{
var bFS=[],
bN=getMainWin(),
bYi=S("sortinfo",bN),
cgg=bN.location.getParams()['s'],
bLc=cgg==="search"||cgg==="searchcontact";
if(bN.location.href&&bN.location.href.indexOf("/cgi-bin/mail_list")<0)
{
return"";
}
for(var i in bN.oSGKWs)
{
bN.oSGKWs[i]==1&&bFS.push(i);
}
bN.oSGKWs={};
if(bFS.length>0&&bYi)
{
return["&action=",bLc?"mail_grpsearchall":"mail_grpoperall","&keyword=",bFS.join("&keyword="),"&sorttype=",bYi.getAttribute("ssorttype")].join("");
}
else
{
return"";
}
}

function checkSelectGroup()
{
var bN=getMainWin(),
aaz=false;
if(bN.location.href&&bN.location.href.indexOf("/cgi-bin/mail_list")<0)
{
return false;
}

E(finds("div[name='selectgrouptip']",bN.document.body),function(an)
{
an&&(an.style.width="0px");
});
for(var i in bN.oSGKWs)
{
bN.oSGKWs[i]==1&&(aaz=true);
};
return aaz;
}






function hideSelectGroupTip()
{
var bN=getMainWin();

E(finds("div[name='selectgrouptip']",bN.document.body),function(an)
{
an&&(an.style.width="0px");
});
bN.oSGKWs={};
}






function selectGroupCheck(an,aET)
{
var
cu=an.parentNode.parentNode.parentNode,
bS=GelTags("input",cu)[0],
brj=an.parentNode.parentNode,
bN=getMainWin(),
IJ;

if(aET)
{
var gs=parseInt(finds("span[un='nowcnt']",brj)[0].innerHTML,10)||0,
fq=parseInt(finds("span[un='totalcnt']",brj)[0].innerHTML,10)||0;
E(GelTags("span",brj),function(Cx)
{
IJ=Cx.getAttribute("un");
if(IJ==="select")
{
show(Cx,false);
}
else if(IJ==="unselect")
{

var jQ=GelTags("span",Cx)[0],
Ue=4,
iD=parseInt((fq-gs)/Ue),
adD=function(Sn){jQ.innerHTML=Sn;};
adD(gs);
setTimeout(function()
{
adD(fq-(--Ue)*iD);
Ue!=0&&setTimeout(arguments.callee,150);
},150);
show(Cx,true);
}
});
brj.setAttribute("totalcnt",an.getAttribute("totalcnt"));

if(bN.oSGKWs)
{
for(var i in bN.oSGKWs)
{
if(bN.oSGKWs[i]==1)
{
E(finds("div[name='selectgrouptip']",bN.document.body),function(an)

{
an&&an.getAttribute("keyword")==i&&(an.style.width="0px");
});
}
}
bN.oSGKWs={};
}
else
{
bN.oSGKWs={};
}
bN.oSGKWs[bS.getAttribute("keyword")]=1;
}
else
{
an.parentNode.parentNode.style.width="0px";

fireMouseEvent(bS,"click");
if(bN.oSGKWs)
{
delete bN.oSGKWs[bS.getAttribute("keyword")];
}
}
}




function CA(GE)
{
if(GE)
{
var sL=(GE.className=="all"
?GE.parentNode.parentNode.parentNode.parentNode
:GE.parentNode).nextSibling;

if(sL.className!="toarea")
{
sL=sL.nextSibling;
}
getTop().showSelectALL(getMainWin(),false);
if(sL.className=="toarea")
{
var aIE=GE.checked,
aEZ=GE.nextSibling,
cqE=false,
bQG=S("selectAll",getMainWin());

E(GelTags("input",sL),function(cI)
{
setListCheck(cI,aIE);
}
);
var cgu=finds("div.sidetip",GE.parentNode);
cgu.length>0&&(cqE=true)&&(aEZ=cgu[0]);
if(cqE)
{

if(aIE&&(bQG&&bQG.style.visibility==="hidden")||!bQG)
{
var BM=checkNodeLocate(sL,"toarea",false),
cSm=checkNodeLocate(sL,"toarea",true),
cbp=
{
"5":"sender|sender",
"6":"time|day",
"7":"subject|subject",
"8":"size|size",
"9":"recipient|receiver",
"13":"reply|unread"
},
blx=attr(S("sortinfo",getMainWin()),"isorttype"),
bLc=getMainWin().location.getParams()["s"]==="search",
aN;

if(cSm||BM)
{
var jb=finds("input[name='mailid']",sL),
ccR=(jb&&jb.length)||0;
function showTip(bvv)
{
if(bvv>ccR&&aIE)
{
E(GelTags("span",aEZ),function(qE)
{
IJ=qE.getAttribute("un");
if(IJ==="select")
{
GelTags("span",qE)[0].innerHTML=ccR;
GelTags("a",qE)[0].innerHTML=["Select all the messages in this ",cbp[blx].split("|")[0],", totally ",bvv,""].join("");
GelTags("a",qE)[0].setAttribute("totalcnt",bvv);
show(qE,true);
}
else if(IJ==="unselect")
{

GelTags("span",qE)[0].innerHTML=bvv;
show(qE,false);
}
});
aEZ.style.width="500px";
}
}
if(!aEZ.getAttribute("groupcnt"))
{
aN=["/cgi-bin/mail_list_stat",getMainWin().location.search.replace(/t=(mail_list_group|mail_list)/g,"").replace(/&sorttype=\d*/,"").replace(/&sortasc=\d*/,""),"&sorttype=",cbp[blx].split("|")[1],"&keyword=",encodeURIComponent(attr(GE,"keyword")),"&ef=js&r=",Math.random(),bLc?"&action=search":""].join("");
QMAjax.send(aN,
{
method:"GET",
onload:function(aP,aRe)
{
if(aP&&aRe)
{
var aF=evalValue(aRe),
alZ=parseInt(aF.count,10);
aEZ.setAttribute("groupcnt",alZ);
showTip(alZ);
}
}
})
}
else
{
showTip(parseInt(aEZ.getAttribute("groupcnt"),10));
}

}
}
else
{
aEZ.style.width="0px";
}
}
}
}
}















function RD(ah,bc,tp,ee,kd,Nr,
agR,ajk,Da)
{
recordReadedMailId(bc);
recordMailListScroll();

if(ah)
{
preventDefault(ah);


var aC=getEventTarget(ah),
jn=aC&&aC.getAttribute("fid");

if(jn)
{
goUrlMainFrm(T("/cgi-bin/$cgi$?sid=$sid$&folderid=$fid$&page=0&t=$t$").replace(
{
cgi:jn=="9"?"readtemplate":"mail_list",
fid:jn,
sid:getSid(),
t:jn=="9"?"sms_list_v2":""
}
),false);
return stopPropagation(ah);
}
}

var aN=rdVer.url(bc,kd,Da,
ee,getTop().bnewwin||(ah&&ah.shiftKey),
Nr,agR,ajk),
chD="&hitmailid=",
btB;


if(ah)
{

if(typeof(ah.hitmailid)!="undefined")
{
btB=ah.hitmailid;
}
else
{
var aC=getEventTarget(ah),
bHc=aC.getAttribute("hitmailid")?aC:parents("td[hitmailid]",aC)[0];

bHc&&bHc.getAttribute("hitmailid")
&&(btB=bHc.getAttribute("hitmailid"));
}
}
if(btB)
{
aN=[aN,chD,btB.split("|").join(chD)].join("");
}

rdVer.log(bc,"hit");

if(ah&&(ah.shiftKey||ah.ctrlKey||ah.metaKey))
{
var cE=ah.target||ah.srcElement;

while(cE&&cE.className!="i M"
&&cE.className!="i F")
{
cE=cE.parentNode;
}

cE&&QMReadedItem.disp(cE);
goNewWin(aN);
}
else
{
goUrlMainFrm([aN,"#stattime=",now()].join(""),false);
}
}









var QMReadedItem={};





QMReadedItem.addItem=function(ha)
{
if(!getMainWin().gMailItems)
{
getMainWin().gMailItems=[];
}

getMainWin().gMailItems.push(ha);
};





QMReadedItem.getItems=function()
{
return getMainWin().gMailItems||[];
};





QMReadedItem.save=function(bfs)
{
getMainWin().goReadedItemImg=bfs;
};





QMReadedItem.load=function()
{
return getMainWin().goReadedItemImg;
};





QMReadedItem.disp=function(QH)
{
if(!QH)
{
return;
}

var Cy=QH.type=="checkbox"
?QH.parentNode
:GelTags("input",QH)[0].parentNode,
dJ=Cy.firstChild;

if(dJ.tagName!="IMG")
{
insertHTML(
Cy,
"afterBegin",
T([
'<img src="$path$spacer.gif" width="10" height="11" class="showarrow"',
' title="This is the message you read last time. " />'
]).replace(
{
path:getPath("image")
}
)
);
dJ=Cy.firstChild;
}

show(this.load(),false);
show(dJ,true);

this.save(dJ);
};





QMReadedItem.read=function(PU)
{
if(PU&&PU.tagName==="U")
{
fireMouseEvent(PU,"click");
}
else
{
if(!this.load())
{
return false;
}

fireMouseEvent(
GelTags("table",this.load().parentNode.parentNode)[0].parentNode,
"click"
);
}

return true;
};






QMReadedItem.check=function(bbt)
{
if(!this.load())
{
return false;
}

var afI=this.load().nextSibling;
afI.checked=!afI.checked;

doCheck(null,afI,bbt);
return true;
};






QMReadedItem.move=function(aSa)
{
var bn=this.getItems(),
aaI=bn.length,
dN=-1;

if(aaI==0)
{
return false;
}

if(this.load()!=null)
{
var aEH=QMReadedItem.load().nextSibling;

for(var i=aaI-1;i>=0;i--)
{
if(aEH==bn[i])
{
dN=i;
break;
}
}
}

dN+=aSa?1:-1;

if(dN>-1&&dN<aaI)
{
this.disp(bn[dN]);
scrollIntoMidView(bn[dN],getMainWin().document.body,false);
return true;
}

return false;
};







function listMouseOver(ah)
{
var ae=this,
dc=ae.className;

if(dc.indexOf(" B")==-1
&&dc.indexOf(" V")==-1
&&ae.getAttribute("colorchange")!="none")
{
ae.className=dc+" V";
}


if(ah)
{
var aC=getEventTarget(ah);
while(aC&&aC!=ae&&aC.className!='tagbgSpan')
{
aC=aC.parentNode;
}
if(aC&&aC!=ae)
{
QMTag.showTagClose(aC,1);
}
}
}





function listMouseOut(ah)
{
var ae=this;
if((!ah||!isObjContainTarget(ae,ah.relatedTarget
||ah.toElement))
&&ae.className.indexOf(" V")>-1
&&ae.getAttribute("colorchange")!="none")
{
ae.className=ae.className.replace(" V","");
}


if(ah)
{

var aC=getEventTarget(ah);
while(aC&&aC!=ae&&aC.className!='tagbgSpan')
{
aC=aC.parentNode;
}
if(aC&&aC!=ae)
{
QMTag.showTagClose(aC,0);
}
}

}






function listMouseEvent(aQ)
{
addEvents(aQ,{
contextmenu:function(ah)
{
listContextMenu.call(aQ,ah);
},
mouseover:function(ah)
{
listMouseOver.call(aQ,ah);
},
mouseout:function(ah)
{
listMouseOut.call(aQ,ah);
}
});
}

function listContextMenu(ah)
{
var aw=this;
allDeferOK()&&mailRightMenu(aw,ah);
preventDefault(ah);
}





function GetListMouseClick(ak)
{
return function(ah)
{
ListMouseClick(ah,ak||window);
}
}






function ListMouseClick(ah,ak)
{
var cE,
cf=ah||ak.event;

if(!(cE=getEventTarget(cf)))
{
return;
}


if(attr(cE,"name")=="mailid"||(cE.lastChild&&attr(cE.lastChild,"name")=="mailid")||attr(cE,"name")=="AddrID"||(cE.lastChild&&attr(cE.lastChild,"name")=="AddrID"))
{
if(cE.lastChild&&(attr(cE.lastChild,"name")=="mailid"||attr(cE.lastChild,"name")=="AddrID"))
{
cE.lastChild.click();
}

if(!getGlobalVarValue('TIP_46'))
{
requestShowTip('gotnomail',46,ak,function(bt,er)
{



setGlobalVarValue('TIP_46',1);

return true;
}
);
}

return doCheck(cf);
}


if(cE.className.indexOf("cir")==0)
{
var bGz=T([
'{',
'shiftKey:true,',
'hitmailid:"$hitmailid$"',
'}'
]).replace({
"hitmailid":cE.getAttribute("hitmailid")||parents("td[hitmailid]",cE)[0]||""
}),
Dh=GelTags("table",cE.parentNode.parentNode)[0]
.parentNode.onclick.toString().split("{")[1]
.split("}")[0].replace(/event/ig,bGz);

if(/\WRD/.test(Dh))
{
return eval(Dh);
}
else
{
Dh=GelTags("table",cE.parentNode.parentNode)[0]
.parentNode.onclick.toString().replace(/.*{/g,"")
.replace(/}.*/g,"").replace(/event/ig,"{shiftKey:true}");
return eval(Dh);
}
}
}






function listInitForComm(cv,bgH)
{
var dc,
oX=GelTags("div"),
beu=doCheck,
Iw,ke;

dc=cv?cv:"M";
for(var i=oX.length-1;i>=0;i--)
{
Iw=oX[i];

if(Iw.className!=dc)
{
continue;
}

if(cv=="ft")
{
Iw=GelTags("table",Iw)[0];
}

ke=GelTags("input",Iw)[0];
if(!ke||ke.type!="checkbox")
{
continue;
}

ke.title="Press and hold Shift key and click multiple checkboxes to select  more. ";
addEvent(ke,"click",beu);









if(!bgH)
{
listMouseEvent(Iw);
}
}
}










function modifyFolder(kd,xO)
{
getMainWin().location.href=T([
'/cgi-bin/foldermgr?sid=$sid$&fun=detailpop&t=pop_detail',
'&folderid=$folderid$&acctid=$acctid$'
]).replace(
{
sid:getSid(),
folderid:kd,
acctid:xO
}
);
return false;
}







function recvPopHidden(kd)
{
getMainWin().setTimeout(
function()
{
if(!kd)
{
getTop().reloadFrmLeftMain(false,true);
}
else
{
var aJ="iframeRecvPopHidden";
createBlankIframe(getMainWin(),{id:aJ});

var aN=["/cgi-bin/mail_list?sid=",getSid(),"&folderid=",
kd,"&t=recv_pop_hidden"].join("");
try
{
F(aJ,getMainWin()).location.replace(aN);
}
catch(aL)
{
S(aJ,getMainWin()).src=aN;
}
}
},
10000
);
}






function recvPop(xO,kd,ce)
{
recvPopCreat(xO,kd);
if(S("tips",ce))
{
S("tips",ce).innerHTML=T(
[
'<img src="$images_path$ico_loading312fb20.gif" align=absmiddle>',
' Poping message...&nbsp;pop will proceed in background, you could check it after a while.'
]
).replace(
{
images_path:getPath("image",true)
}
);
}


recvPopHidden(kd);
}





function recvPopCreat(xO)
{
getActionWin().location=["/cgi-bin/foldermgr?sid=",getSid(),
"&fun=recvpop&acctid=",xO].join("");
}




function recvPopAll()
{
getActionWin().location=["/cgi-bin/foldermgr?sid=",getSid(),
"&fun=recvpopall"].join("");
try
{

setTimeout(
function()
{
reloadFrmLeftMain(false,true);
},
3000
);
}
catch(aL)
{
}
return false;
}







function setPopFlag(xO,uj,bC)
{
if(uj=="recent")
{
setPopRecentFlag(xO,bC);
}
}






function setPopRecentFlag(xO,bC)
{
runUrlWithSid(["/cgi-bin/foldermgr?sid=",getSid(),
"&fun=pop_setting&acctid=",xO,"&recentflag=",bC].join(""));
}







function checkPopMailShow(mw)
{
var azc=["@yahoo.com.cn","@sina.com","@tom.com","@gmail.com"],
bdv=mw.toLowerCase();

for(var i=0;i<azc.length;i++)
{
if(bdv.indexOf(azc[i])>=0)
{
return true;
}
}

return false;
}









function setBeforeUnloadCheck(ak,cQ,nC,bjR,
eI)
{
var ajn=["input","select","textarea"];

ak=ak||window;
eI=eI?(typeof(eI)=="string"
?S(eI,ak)
:eI):ak.document;
ak.gbIsBeforeUnloadCheck=true;

E(ajn,
function(iR)
{
var bjx=ak[iR+"_save"]=[];

E(GelTags(iR,eI),
function(aQ,dB)
{
bjx.push(aQ.value+aQ.checked);
aQ.setAttribute("saveid",dB);
}
);
}
);

if(!ak.onsetbeforeunloadcheck)
{
ak.onsetbeforeunloadcheck=function()
{
if(ak.gbIsBeforeUnloadCheck)
{
for(var i=0,aB=ajn.length;i<aB;i++)
{
var wS=ajn[i],
bd=wS+"_save",
Pc=GelTags(wS,eI);

for(var j=0,jlen=Pc.length;j<jlen;j++)
{
var aBM=Pc[j].getAttribute("saveid");
if(aBM!=null&&Pc[j].getAttribute("nocheck")!="true"&&ak[bd][aBM]
!=(Pc[j].value+Pc[j].checked))
{
return cQ?cQ:"Changes not saved. Do you want to leave now?";
}
}
}
}
};

gbIsIE?(ak.document.body.onbeforeunload=ak.onsetbeforeunloadcheck)
:ak.document.body.setAttribute("onbeforeunload","return onsetbeforeunloadcheck();");
}

E(bjR||["cancel"],
function(akh)
{
addEvent(
typeof(akh)=="string"
?S(akh,ak):akh,
"mousedown",
function()
{
ak.gbIsBeforeUnloadCheck=false;
}
);
}
);

E(GelTags("form",ak.document),
function(jp)
{
addEvent(jp,"submit",
function()
{
ak.gbIsBeforeUnloadCheck=false;
}
);

if(!jp.Wj)
{
jp.Wj=jp.submit;
jp.submit=function()
{
ak.gbIsBeforeUnloadCheck=false;
this.Wj();
};
}
}
);
}









function popErrProcess(cQ,Lb,Xx,ve,bdT,ayW)
{
if(cQ!=null)
{
msgBox(cQ,Lb,Xx,ve);
}

if(ayW!=null)
{
getMainWin().ShowPopErr(ayW,bdT);
}

showSubmitBtn();
}




function showSubmitBtn()
{
var anc=S("submitbtn",getMainWin());

if(anc)
{
anc.disabled=false;
}
}




function showPopSvr()
{
show(S("popsvrTR",getMainWin()),true);
}





function setTaskId(KG)
{
try
{
getMainWin().document.checkFrom.taskid.value=KG;
}
catch(aL)
{
}
}








function showQuickReply(kg)
{
show(S('quickreply',getMainWin()),kg);
show(S('upreply',getMainWin()),!kg);
runUrlWithSid("/cgi-bin/getcomposedata?Fun=setshowquickreply&isShowQuickReply="
+(kg?0:1));
}




function hiddenReceipt(ak)
{
show(S("receiptDiv",ak),false);
}





function switchOption(ce)
{
var aF=[
[
"<span class='qm_ico_quickup' alt='more' title='hide'></span>",true],

[
"<span class='qm_ico_quickdown' alt='More' id='display_more_operator'></span>",false]

][
S("trOption",ce).style.display=="none"?0:1
];
S("aSwitchOption",ce).innerHTML=aF[0];
show(S("trOption",ce),aF[1]);
}






function checkPerDel(ak)
{


delMail("PerDel",ak);

}






function delMail(ZS,ak)
{
rmMail(ZS=="PerDel"?1:0,ak.QMReadMail.getCBInfo(ak));
}








function setMailType(aq,wr,Av,ce)
{
var eA=S("mail_frm",ce);

eA.s.value=["readmail_",
wr?(Av?"group":aq):("not"+aq),
getMainWin().newwinflag?"_newwin":""].join("");
eA.action="/cgi-bin/mail_mgr?sid="+getSid();
eA.mailaction.value="mail_spam";
eA.isspam.value=wr;
eA.reporttype.value=aq=="cheat"?"1":"";

submitToActionFrm(eA);
}



function getAddrSub(addr)
{
var bP=addr.indexOf("@");
if(bP>-1)
{
var addrName=addr.substr(0,bP);
var addrDom=addr.substr(bP);
return subAsiiStr(addrName,18,'...')+subAsiiStr(addrDom,18,'...');
}
else
{
debug("name+dom"+addr);
return subAsiiStr(addr,36,'...');
}
}

function getRefuseText(wF)
{
var anv=T([
'<input type="checkbox" name="$TNAME$" id="$TID$" $TCHECK$>Add <label for="$TID$">$TVALUE$</label> to blacklist '
]);
var i;
var retstr="";
var br="";
for(i in wF)
{
var tagname="refuse";
if(i>0){
tagname="refuse"+i;
br="<br>"
}
var addrlabel;
if(wF[i]!="From")
addrlabel="&lt;"+getAddrSub(wF[i])+"&gt;";
else
addrlabel=wF[i];
var ischecked="";
debug("ITEM: "+wF[i]);
retstr+=br+anv.replace({
TNAME:tagname,
TID:tagname,
TVALUE:addrlabel,
TCHECK:ischecked
});
}
debug("RET Text"+retstr);
return retstr;
}










function reportSpam(Zf,aiG,ak,zi,uJ)
{
debug("Enter mail.js reportSpam "+Zf);
var ap=ak||(window==getTopWin()?getMainWin():window);
if(!S("mail_frm",ap))
{
debug("enter from maillist");

var hw=QMMailList.getCBInfo(ap),
bD,
ayc=0,
cJ=hw.oMail.length,
kX={};
if(cJ==0)
{
showError(gsMsgNoMail);
return false;
}
for(var aD=0;aD<cJ;aD++)
{

bD=hw.oMail[aD];
if(bD.bSys)
{





}
ayc+=bD.bDft?1:0;
if(bD.sSEmail.indexOf("@groupmail.qq.com")!=-1)
{

Zf=true;
}else if(bD.sSEmail.indexOf("10000@qq.com")!=-1){

Zf=true;
}
if(typeof kX.sender=="undefined")
{
kX.sender=bD.sSEmail;
kX.nickname=bD.sSName;
}else if(kX.sender!=bD.sSEmail)
{
kX.sender="";
}
}
if(ayc==cJ)
{

zi=1;
}
else
{

for(aD=0;aD<cJ;aD++)
{
bD=hw.oMail[aD];




}
hw=QMMailList.getCBInfo(ap);
QMMailList.selectedUI(hw);
}
}

var yc=new Array();
yc[0]="From";

if(kX&&kX.sender&&kX.sender.indexOf(',')<0)
{
yc[0]=kX.sender;
}

var Sy=0;
if(uJ)
{
if(uJ[0].length>0)yc[Sy++]=uJ[0];
if(uJ[1])yc[Sy++]=uJ[1];
}
var IM=T([
'<div>',
'<input type="radio" name="reporttype" id="r$value$" value="$value$" $checked$>',
'<label for="r$value$">$content$</label>',
'</div>'
]);
var dq=(zi!==1?[
"<div style='padding:10px 10px 0 25px;text-align:left;'>",
"<form id='frm_spamtype'>",
"<div style='margin:3px 0 3px 3px'><b>Please select a type: </b></div>",
IM.replace({
value:(aiG?11:8),
checked:"checked",
content:"Other messages"
}),

IM.replace({
value:(aiG?10:4),
checked:"",
content:"Ads"
}),

IM.replace({
value:(aiG?9:1),
checked:"",
content:"Fraud Messages"
}),
"<div style=\"padding:5px 0 2px 0;\">",
(Zf
?"&nbsp;"
:getRefuseText(yc)),"</div><div style='margin:10px 3px 0px 3px' class='addrtitle' >Tip: messages with correct type specified will be processed in advance. </div>","</form>",
"</div><div style='padding:3px 15px 12px 10px;text-align:right;'>",
"<input type=button id='btn_ok' class='btn wd2' value=OK>",
"<input type=button id='btn_cancel' class='btn wd2' value=Cancel>",
"</div>"
]:[
"<div class='cnfx_content'>",
"<img style='float:left; margin:5px 10px 0;' src='",getPath("image"),"ico_question.gif' />",
"<div class='b_size' style='padding:10px 10px 0 0;margin-left:65px;line-height:1.5;height:80px;text-align:left;'>",
"<form id='frm_spamtype'>",
"<strong>\u60A8\u8981\u4E3E\u62A5\u8FD9\u4E2A\u6F02\u6D41\u74F6\u5417\uFF1F</strong><br>",
"<div style=\"display:none\">",
IM.replace({
value:8,
checked:"checked",
content:""
}),
"</div>",
"\u4E3E\u62A5\u4EE5\u540E\uFF0C\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u8FD9\u4E2A\u6F02\u6D41\u74F6\u7684\u56DE\u5E94\u3002","</form>",
"</div></div><div class='cnfx_btn'>",
"<input type=button id='btn_ok' class='btn wd2' value=OK>",
"<input type=button id='btn_cancel' class='btn wd2' style='margin-left:5px' value=Cancel>",
"</div>"
]).join("");

new(getTop().QMDialog)({
sId:"reportSpam",
sTitle:zi===1?"\u7838\u6389\u8FD9\u4E2A\u74F6\u5B50":"\u4E3E\u62A5\u5E76\u62D2\u6536\u9009\u4E2D\u90AE\u4EF6",
sBodyHtml:dq,
nWidth:450,
nHeight:zi===1?150:220,
onload:function(){
var bW=this;
addEvent(bW.S("btn_ok"),"click",function()
{
var eA=S("mail_frm",getMainWin())||S("frm",getMainWin());
if(!eA)
{
return;
}
eA.s.value="readmail_spam";
eA.isspam.value='true';
eA.mailaction.value="mail_spam";
eA.action='/cgi-bin/mail_mgr?sid='+getTop().getSid();

var Oe=bW.S("frm_spamtype").reporttype,
Bc=bW.S("frm_spamtype").refuse,
DT=bW.S("frm_spamtype").refuse1;
for(var i=0,aB=Oe.length;i<aB;i++)
{
if(Oe[i].checked)
{
eA.reporttype.value=Oe[i].value;
break;
}
}
var pj=new Array();
pj[0]="0";
pj[1]="0";
if((Bc&&Bc.checked)||
(DT&&DT.checked))
{
eA.s.value="readmail_reject";
}

if(DT)
{
pj[0]=Bc&&Bc.checked?"1":"0";
pj[1]=DT.checked?"1":"0";
}
else 
{
pj[0]="1";
pj[1]="1";
}

if(eA.s_reject_what){
eA.s_reject_what.value=pj[0]+pj[1];
debug("Reject method "+eA.s_reject_what.value);
}

submitToActionFrm(eA);
bW.close();
});
addEvent(bW.S("btn_cancel"),"click",function(){bW.close()});

},
onshow:function()
{
this.S("btn_cancel").focus();
}
});

return false;
}









function setSpamMail(wr,Av,ce)
{
var aze=ce||(window==getTopWin()?getMainWin():window);
if(wr&&!Av)
{
return reportSpam(null,null,aze);
}
setMailType("spam",wr,Av,aze);
}






function setCheatMail(wr,Av)
{
setMailType("cheat",wr,Av);
}






function doReject(wr,Av,ce,mI,cQ)
{
var aGy="";
if(mI){
aGy=htmlEncode("<"+mI+">");
}

var eA=S("mail_frm",ce);
if(eA.s_reject_what)
{
eA.s_reject_what.value="10";
}





confirmBox(
{
title:"Warning",
msg:cQ||"You could not receive message from this email after rejection ,Are you sure to continue ?",
onreturn:function(aP)
{
if(aP)
{
setMailType("reject",wr,Av,ce);
}
}
});
}




function setFolderReaded(dM,EM,bov,uj)
{

var bhu=dM=="all"?parseInt(bov||"0"):(EM?getGroupUnread(EM):getFolderUnread(dM));
if(bhu<1)
{
return showError("No unread messages in this folder");
}

var ug=getSid(),
aBY=unikey("allread"),
aNj=function()
{
QMAjax.send("/cgi-bin/mail_mgr?mailaction=read_all&t=unreadmail_reg_data&loc=setFolderUnread,,,32",
{
method:"POST",
content:T('sid=$sid$&folderid=$folderid$&groupid=$groupid$$flags$').replace(
{
sid:ug,
folderid:dM!="all"?dM:"1&folderid=3&folderid=8&folderid=9&folderid=11&folderid=personal&folderid=pop&folderid=subscribe",
groupid:EM,
flags:uj?uj:""
}
),
onload:function(aP,bt)
{
if(aP&&bt.indexOf("mark_allmail_ok")>-1)
{
var fS="Mark folder as read"
reloadFrmLeftMain(true,!!getMainWin()[aBY]);
showInfo(fS+" successfully");
var aF=eval(bt);
setRollBack(aF.rbkey,fS);
}
else
{
showError("Failed to mark as read. Please try again.");
}
}
});
};
getMainWin()[aBY]=1;


aNj();












































}






function linkMaker(FT)
{


var cjB="(https?:\\/\\/[\\w.]+[^ \\f\\n\\r\\t\\v\"\\\\\\'\\<\\>\[\\]\\u2100-\\uFFFF]*)",






bDj="([a-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[A-Z0-9-]+\\.)+[A-Z]{2,4})";
function anZ(bj)
{
var gW=12,
eV=bj||"",
bO=[],
aB=eV.length/gW;

for(var i=0;i<aB;i++)
{
bO[i]=eV.substr(i*gW,gW);
}

return bO.join("<wbr>");
}

return FT.replace(
new RegExp([cjB,bDj].join("|"),"ig"),
function(azS,cnb,alF)
{
if(alF)
{
return['<a href="mailto:',alF,'">',
anZ(alF),'</a>'].join("");
}
else
{
return['<a href="',azS,'">',
anZ(azS),'</a>'].join("");
}
}
);
}





function linkIdentify(aQ)
{
if(!aQ||aQ.tagName=="A"||aQ.tagName=="SCRIPT"
||aQ.tagName=="STYLE"||aQ.className=="qqmailbgattach")
{
return;
}

for(var bM=aQ.firstChild,nextNode;bM;bM=nextNode)
{
nextNode=bM.nextSibling;
linkIdentify(bM);
}

if(aQ.nodeType==3)
{
var eV=aQ.nodeValue.replace(/</g,"&lt;").replace(/>/g,"&gt;"),
gH=linkMaker(eV);

if(eV!=gH)
{
var jM=false;

if(aQ.previousSibling)
{
jM=insertHTML(aQ.previousSibling,"afterEnd",gH);
}
else
{
jM=insertHTML(aQ.parentNode,"afterBegin",gH);
}

if(jM)
{
removeSelf(aQ);
}
}
}
}







function azu(an)
{
var eS=an.href||"",
dF=an.ownerDocument,
iS=(dF.parentWindow||dF.defaultView).location;





return!an.onclick&&eS&&eS.indexOf("javascript:")!=0&&eS.indexOf("#")!=0;




}







function swapLink(ay,BE,ce)
{
var cq=ay.ownerDocument?ay:S(ay,ce);
if(cq)
{
function auc(abc)
{

if(azu(abc))
{

abc.target="_blank";
abc.onclick=function()
{
return aCs.call(this,BE);
};
}
else
{
}
abc=null;
}
linkIdentify(cq);
E(GelTags("a",cq),auc);
E(GelTags("area",cq),auc);
E(GelTags("form",cq),function(aHQ)
{
aHQ.onsubmit=function()
{
var iS=ce.location;

if(iS.getParams()["filterflag"]=="true"||this.action)
{
this.target="_blank";
return true;
}

showError(T(['This action has been blocked for security. [<a onclick="',
'setTimeout( function() {',
'goUrlMainFrm(\x27$url$&filterflag=true\x27);',
'showInfo(\x27Success to cancel blocking.\x27);','});',
'" style="color:white;" >Cancel blocking</a>]']).replace({url:iS.pathname+iS.search}));

return false;
};
aHQ=null;
}
);
}
cq=null;
}






function preSwapLink(ah,BE)
{
var aC=getEventTarget(ah);
if(aC
&&{"A":1,"AREA":1}[aC.tagName]
&&azu(aC))
{
aCs.call(aC,BE)&&window.open(aC.href);
preventDefault(ah);
}
}








function swapImg(ay,cfi,BE,ak)
{














































































}




function openSpam(ak)
{
ak=ak||window;
if(true||confirm("Images in this message may contain dangerous information. Go on?"))
{
ak.location.replace(appendToUrl(ak.location.href,"&disptype=html&dispimg=1&clickshowimage=1"));
}
}




function openHttpsMail(ak)
{
ak.location.replace(appendToUrl(ak.location.href,"&dispimg=1"));
}






function copyToClipboard(fM)
{
try
{
if(gbIsFF)
{
netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper).copyString(fM);
}
else
{

var Ix=S("copyinputcontainer");
if(!Ix)
{
insertHTML(document.body,"beforeEnd",'<input id="copyinputcontainer" style="position:absolute;top:-1000px;left:-1000px;"/>');
Ix=S("copyinputcontainer");
}
Ix.value=fM;
Ix.select();
document.execCommand('Copy');
}
}
catch(e)
{
alert(T('Auto-copy is not allowed by your browser settings. Please copy the contents with keyboard shortcut ($cmd$+C). ').replace({cmd:gbIsMac?"Command":"Ctrl"}));
return false;
}
return true;
}






function aCs(BE)
{
var dv=this;

if(dv.href.indexOf("mailto:")==0&&dv.href.indexOf("@")!=-1)
{
window.open(["/cgi-bin/readtemplate?sid=",getSid(),
"&t=compose&s=cliwrite&newwin=true&email=",
dv.href.split("mailto:")[1]].join(""));
return false;
}
else if(dv.className=="qqmail_card_reply"
||dv.className=="qqmail_card_reply_btn"
||dv.className=="qqmail_birthcard_reply"
||dv.className=="qqmail_birthcard_reply_btn")
{






var fa=dv.name,
dc=dv.className,
aBy=!!fa,
aWf=dc.indexOf("birthcard")!=-1;

getMainWin().location=T('/cgi-bin/cardlist?sid=$sid$&t=$t$&s=$s$&today_tips=$tips$&loc=readmail,readmail,sendnewcard,1&ListType=$listtype$&email=$email$$newwin$').replace(
{
sid:getSid(),
t:aBy?"compose_card":"card",
s:aWf?"replybirthcard":"",
tips:dc.indexOf("btn")!=-1?"112":"111",
listtype:aBy?"No":"Cards&Cate1Idx=listall",
email:fa,
newwin:getTop().bnewwin?"&newwin=true":""
});
return false;
}
else if(dv.className=="qqmail_postcard_reply_mobile")
{
var qf=getMainWin().QMReadMail;
if(qf)
{
getMainWin().location=T("/cgi-bin/readmail?sid=$sid$&mailid=$mailid$&t=compose&s=reply&disptype=html").replace(
{
sid:getSid(),
mailid:qf.getMailId()
})
}
return false;
}
else if(dv.className=="qqmail_postcard_sendhelp_mobile")
{
window.open("http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=36&&no=1000696");
return false;
}
else if(dv.className=="qqmail_card_reply_thanksbtn"
||dv.className=="qqmail_card_reply_thanks"
||dv.className=="qqmail_birthcard_reply_thanksbtn")
{
var fa=dv.name;

openComposeDlg("card",{
sTitle:"Thank your friend",
sDefAddrs:fa,
bAddrEdit:true,
nWidth:495,
sDefContent:"Thank you for your postcard. Please keep in touch.",
bContentEdit:true,
sDefSubject:"Thank you for your postcard.!",
bRichEditor:false,
oncomplete:function(){},

bShowResult:true
});
return false;
}












else if(dv.className=="qqmail_postcard_reply")
{
goUrlMainFrm(
T('/cgi-bin/readtemplate?sid=$sid$&t=compose_postcard&email=$email$'
).replace({
sid:getSid(),
email:dv.name
}),false
);
return false;
}
else if(dv.className=="qqmail_postcard_reply2")
{
var aqA='',
apQ='',
qf=getMainWin().QMReadMail;
if(qf)
{
try
{
var Gx=(qf.getSubMailWithDom?qf.getSubMailWithDom(dv):qf.getMailInfo()).from;
aqA=Gx&&Gx.name||'';
apQ=Gx&&Gx.addr||'';
}
catch(e)
{
}
}
goUrlMainFrm(
T('/cgi-bin/readtemplate?sid=$sid$&t=compose_postcard&email=$email$&reply=1&frname=$name$&fraddr=$addr$'
).replace({
name:escape(aqA),
addr:escape(apQ),
sid:getSid(),
email:dv.name
}),false
);
return false;
}












else if(dv.className=="qqmail_postcard_print")
{
var qf=getMainWin().QMReadMail;
if(qf)
{
window.open(T('/cgi-bin/readmail?sid=$sid$&t=print_haagendazs&s=print&filterflag=true&mailid=$mailid$').replace(
{
sid:getSid(),
mailid:qf.getMailId()
})
);
}
return false;
}
else if(dv.className=="qqmail_postcard_getmoreinfo")
{
var qf=getMainWin().QMReadMail;
if(qf)
{
window.open(T('/cgi-bin/today?t=haagendazs2010&sid=$sid$').replace(
{
sid:getSid(),
mailid:qf.getMailId()
})
);
}
return false;
}
else if(dv.className=="qqmail_videomail_reply")
{
goUrlMainFrm(
T('/cgi-bin/readtemplate?sid=$sid$&t=compose_video&email=$email$'
).replace({
sid:getSid(),
email:dv.name
}),false
);
return false;
}
else if(dv.className=="groupmail_open")
{
getMainWin().location=["/cgi-bin/grouplist?sid=",getSid(),
"&t=compose_group",(getTop().bnewwin?"&newwin=true":"")].join("");
return false;
}
else if(dv.className=="reg_alias")
{
getMainWin().location=[
"/cgi-bin/readtemplate?reg_step=1&t=regalias_announce&sid=",
getSid()].join("");
return false;
}

else if(dv.className=="mergemail_reader_article_list_link")
{
var beM=dv.getAttribute("ctype");
var aiS=dv.getAttribute("param_new");
var aN="";


if(aiS.indexOf("follow=1")>=0)
{
var bkq=dv.getAttribute("followuin");
aN=(getTop().gsRssDomain||"")+"/cgi-bin/reader_mgr";
QMAjax.send(aN,
{
method:"POST",
content:"fun=followshare&followuin="+bkq+"&sid="+getSid(),
onload:function(aP,cvy)
{
if(aP)
{

getMainWin().location=T('$host$/cgi-bin/reader_article_list?sid=$sid$&$param$'
).replace({
host:(getTop().gsRssDomain||""),
sid:getSid(),
param:aiS
});
}
}
});
}

else
{
getMainWin().location=T('$host$/cgi-bin/reader_article_list?sid=$sid$&$param$'
).replace({
host:(getTop().gsRssDomain||""),
sid:getSid(),
param:aiS
});
}


if(beM=="onefeed")
{
aN=(getTop().gsRssDomain||"")+"/cgi-bin/reader_mgr?fun=setlog&flag=3&from=2";
}
else
{
aN=(getTop().gsRssDomain||"")+"/cgi-bin/reader_mgr?fun=setlog&flag=3&from=4";
}
runUrlWithSid(aN);

return false;
}
else if(dv.className=="mergemail_reader_setting_link")
{

getMainWin().location=T('$host$/cgi-bin/reader_setting?t=rss_setting_notify&sid=$sid$&$param$'
).replace({
host:(getTop().gsRssDomain||""),
sid:getSid(),
param:dv.getAttribute("param")
});


var aN=(getTop().gsRssDomain||"")+"/cgi-bin/reader_mgr?fun=setlog&flag=3&from=3";
runUrlWithSid(aN);
return false;
}
else if(dv.className=="reader_article_list_link")
{

getMainWin().location=T('$host$/cgi-bin/reader_article_list?sid=$sid$&$param$').replace(
{
host:(getTop().gsRssDomain||""),
sid:getSid(),
param:dv.getAttribute("param")
}
);

return false;
}

else if(dv.className=="reader_detail_qqmail_link")
{
var cm=[];

E(dv.getAttribute("param").split("&"),function(bt)
{
if(bt.indexOf("share=1")<0)
{
cm.push(bt);
}
}
);

getMainWin().location=T('$host$/cgi-bin/reader_detail?sid=$sid$&$param$'
).replace({
host:(getTop().gsRssDomain||""),
sid:getSid(),
param:cm.join("&")
});
return false;
}
else if(dv.className=="reader_list_qqmail_link")
{
var cm=[];

E(dv.getAttribute("param").split("&"),function(bt)
{
cm.push(bt);
}
);
getMainWin().location=T('$host$/cgi-bin/reader_list?classtype=allfriend&refresh=1&share=1&sid=$sid$&$param$'
).replace({
host:(getTop().gsRssDomain||""),
sid:getSid(),
param:cm.join("&")
});
return false;
}
else if(dv.className=="reader_catalog_list_qqmail_link")
{
var cm=[];

E(dv.getAttribute("param").split("&"),function(bt)
{
cm.push(bt);
}
);

getMainWin().location=T('$host$/cgi-bin/reader_catalog_list?sid=$sid$&classtype=share&share=1&refresh=1&$param$'
).replace({
host:(getTop().gsRssDomain||""),
sid:getSid(),
param:cm.join("&")
});
return false;
}
else if(dv.className=="ftn_groupshare_enter_link")
{
getMainWin().location.href=T(
'/cgi-bin/ftnExs_files?listtype=group&s=group&t=exs_ftn_files&sid=$sid$'
).replace({sid:getSid()});
return false;
}
else if(dv.className=="book_article_list_link")
{

getMainWin().location=T('/cgi-bin/setting10?sid=$sid$&$param$').replace(
{
sid:getSid(),
param:dv.getAttribute("param")
}
);

return false;
}



if(1)
{

if(dv.href.indexOf("javascript:void(0)")>=0)
{

return false;
}
if(BE!="preview"&&getMainWin().location.href.indexOf('/cgi-bin/readmail?')<0)
{
return true;
}

var la=dv.parentNode;
while(la)
{
if(la.nodeType==1&&(la.id=="QQmailNormalAtt"||la.id=="attachment"))
{
return true;
}
la=la.parentNode;
}

window.open(T('/cgi-bin/mail_spam?action=check_link&url=$url$&mailid=$mid$&spam=$spam$').replace(
{
mid:getMainWin().location.getParams()['mailid'],
spam:BE=="spam"?1:0,
url:escape(dv.href)
}
),"_blank");
return false;
}

var eV="http://mail.qq.com/cgi-bin/feed?u=";
if(dv.name=="_QQMAIL_QZONESIGN_"||dv.href.indexOf(eV)==0)
{
if(dv.name=="_QQMAIL_QZONESIGN_")
{
var bcd=dv.href.split("/"),
za=parseInt(bcd[2]),
bK=[
"&sid=",
getSid(),
"&u=http%3A%2F%2Ffeeds.qzone.qq.com%2Fcgi-bin%2Fcgi_rss_out%3Fuin%3D",
za
].join("");
}
else
{
var aBA=dv.href.substr(eV.length);
if(aBA.indexOf("http%3A%2F%2F")==0
||aBA.indexOf("https%3A%2F%2F")==0)
{
var bK=["&sid=",getSid(),"&u=",dv.href.substr(eV.length)]
.join("");
}
else
{
var bK=["&sid=",getSid(),"&u=",
encodeURIComponent(dv.href.substr(eV.length))].join("");
}
}
if(getTop().bnewwin)
{
goUrlTopWin(["/cgi-bin/frame_html?target=feed",bK].join(""));
}
else
{
goUrlMainFrm(["/cgi-bin/feed?",bK].join(""),false);
}
return false;
}
else if(dv.name=="QmRsSRecomMand")
{
getMainWin().location=T("$host$/cgi-bin/reader_detail?vs=1&feedid=$feedid$&itemid=$itemid$&t=compose&s=content&mailfmt=1&sid=$sid$&newwin=$isnewwin$&tmpltype=recommend&loc=reader_detail,rss_recommend,,2").replace({
host:(getTop().gsRssDomain||""),
feedid:dv.getAttribute("feedid"),
itemid:dv.getAttribute("itemid"),
sid:getSid(),
isnewwin:!!getTop().bnewwin
});
return false;
}

return true;
}





function goPrevOrNextMail(aDi)
{
var cq,
bN=getMainWin();

if(!!(cq=S(["prevmail","nextmail"][aDi?1:0],bN))
&&!cq.getAttribute("disabled"))
{

}
else if(!!(cq=S(["prevpage","nextpage","prevpage1","nextpage1"][aDi?1:0],bN))
&&!cq.getAttribute("disabled"))
{
bN.location=cq.href;
}
}





function goBackHistory()
{
var Gn=SN("readmailBack",getMainWin());
if(Gn.length>0&&isShow(Gn[0]))
{
fireMouseEvent(Gn[0],"click");
return true;
}
return false;
}













function checkPerDelML(kd,aCb,ce)
{
return delMailML(kd,aCb,"PerDel",ce);
}









function delMailML(kd,aCb,ZS,ce)
{
var ap=ce.nodeType==9?(ce.defaultView||ce.parentWindow):ce,
aA=QMMailList.getCBInfo(ap);
configPreRmMail(aA,'rmMail');
rmMail(ZS=="PerDel"?1:0,aA);
return;
}






function reportSpamML(bdI,ce)
{

if(getTop().isSelectAllFld(getMainWin()))
{
return showError('can not do this in all folders');
}

var ap=ce.nodeType==9?(ce.defaultView||ce.parentWindow):ce,
aA=QMMailList.getCBInfo(ap);


configPreRmMail(aA,'spammail');
(bdI?reportSpamJson:reportNoSpamJson)({bBlackList:true},aA);
return false;
}














function MLIUIEvent(yz,ak,dM)
{
var ek=yz.value,
cU=QMMailCache,
alf=cU.isRefresh(ak),
vg=yz.parentNode;
while(vg.tagName.toUpperCase()!="TABLE")
{
vg=vg.parentNode;
}
var hC=GelTags("table",vg)[0],
Cl=GelTags("td",GelTags("tr",hC)[0]),
aRT=Cl[1],
Gi=Cl[Cl.length-1];

yz.setAttribute('init','true');
QMReadedItem.addItem(yz);


if(Gi.className=="new_g")
{
Gi=Cl[6];
}


var agV=GelTags("div",hC),
Ow;
for(var aD=agV.length-1;aD>=0;aD--)
{
if(agV[aD].className=="TagDiv")
{
Ow=agV[aD];
break;
}
}


if(cU.hasData(ek))
{
if(!alf)
{
var as=cU.getData(ek);
if(yz.getAttribute("unread")=="true")
{
cU.addVar("unread",-1);
}
axb(yz,vg,as.bUnread?true:false,as.reply);
axP(yz,vg);

if(as.star!=null)
{
setClass(Gi,as.star?"fg fs1":"fg");
cU.addVar("star",as.star?1:-1);
}

if(as.oTagIds)
{
var tF=GelTags("table",hC),
pS=as.oTagIds,
tK,
aBx={};

if(Ow)
{
for(var aD=tF.length-1;aD>=0;aD--)
{
if(tK=tF[aD].getAttribute("tagid"))
{
aBx[tK]=1;
}
}
for(var WI in pS)
{
if(pS[WI]===0)
{

QMTag.rmTagUI(Ow,WI);
}
else if(!aBx[WI])
{

QMTag.addTagUI(Ow,WI,dM,ek,false);
}
}
}
}
}
else
{

cU.addData(ek,
{
bUnread:yz.getAttribute("unread")=="true",
oTagIds:{},
star:null,
reply:null
});
}
}

listMouseEvent(vg);

Gi.title=Gi.className=="fg"?"Add Star":"Remove Star";
addEvent(Gi,'click',function(ah)
{
starMail(null,QMMailList.getCBInfo(ak,ek));
return stopPropagation(ah);
}
);

addEvent(vg,"click",GetListMouseClick(ak));
addEvent(vg,"selectstart",preventDefault);


var aiY=hC.rows[0].cells[1];
if(aiY.className.indexOf("fr")>-1)
{

loadJsFile("$js_path$qmtip13e6cd.js",true);
addEvent(aiY,"mouseover",MLI.aDc);
addEvent(aiY,"mouseout",MLI.aDc);
}


addEvent(Ow,'click',function(ah)
{
if(QMTag.readclose(ah,QMMailList.getCBInfo(ak,ek)))
{
return stopPropagation(ah);
}
}
);

dragML(vg,yz);

}






function MLI(bYT,ak,dM,Da)
{














var aAR=SN("mailid",ak),
DE=aAR[aAR.length-1],
ek=DE.value,
bF=DE.parentNode,
cU=QMMailCache,
alf=cU.isRefresh(ak);

while(bF.tagName.toUpperCase()!="TABLE")
{
bF=bF.parentNode;
}

MLIUIEvent(DE,ak,dM);


var bjA=DE.getAttribute("uw")=="1",
axn=bjA?ak.oPreUWMails:ak.oPreMails,
baO=axn.length,
bfA=alf?2:1,

beA=new Date()-new Date(parseInt(DE.getAttribute("totime")))<2592000000,

bfu=!/^(LP|ZP)/.test(ek)&&beA&&DE.getAttribute("unread")=="true"&&baO<bfA&&!rdVer.log(ek);

if(bfu&&rdVer.isPre(dM))
{
var aN,
sI=DE.getAttribute("gid");

aN=rdVer.url(ek,dM,Da,"",false,"",false,"",true);

if(aN)
{
axn.push(aN);
}
}

if(getTop().gsReadedMailId==ek)
{
QMReadedItem.disp(bF);
recordReadedMailId(null);
}

}









function MLJump(bkH,bgK,be,ak)
{
var aXY=SN("maillistjump",ak.document),
axW="_MlJuMp_",
ND=parseInt(bkH)||0,
acZ=parseInt(bgK)||0;

function aln(ay)
{
var zm=getTop().QMMenu(ay).S("txt"),
wh=parseInt(zm.value);

if(isNaN(wh))
{
zm.select();
return showError("Please enter number of Pages");
}

wh=Math.max(0,Math.min(wh-1,acZ));
if(ND==wh)
{
zm.select();
return showError("You enter the current number of pages");
}

getTop().QMMenu(ay).close();
goUrlMainFrm([be,'&page=',wh,'&loc=mail_list,,jump,0',getTop().isSelectAllFld(getMainWin())?"&selectall=1":""].join(''));
}

E(aXY,function(Yl)
{
if(!Yl.getAttribute(axW))
{
Yl.setAttribute(axW,"1");
addEvents(Yl,
{
click:function(ah)
{
var aJ=unikey("mljump"),
bP=calcPos(Yl),
cH=185,
cs=40;


new(getTop().QMMenu)(
{
sId:aJ,
oEmbedWin:ak,
nWidth:cH,
nX:bP[1]-cH,
nY:bodyScroll(ak,"scrollHeight")-bP[2]<cs?(bP[0]-cs-13):bP[2],
bAutoClose:false,
oItems:
[
{
nHeight:cs,
sItemValue:MLJump.ic.replace({id:aJ})
}
],
onshow:function()
{
this.S("txt").focus();
}
}
);

addEvent(getTop().QMMenu(aJ).S("txt"),"keypress",function(ah)
{
var ep=ah.keyCode||ah.which;
if(ep===13)
{
aln(aJ);
}
else if((ep<48||ep>57)&&ep!=8&&ep!=9)
{
preventDefault(ah);
}
}
);

addEvent(getTop().QMMenu(aJ).S("btn"),"click",function(ah)
{
aln(aJ);
}
);

preventDefault(ah);
}
}
);
}
}
);
}

MLJump.ic=T(
[
'<div style="position:absolute;width:160px;margin-left:-7px;">',
'<div class="addrtitle jumpmenusdjust" style="float:left;">Go to page <input id="txt" type="text" class="txt" style="width:30px;" /> </div>',
'<a id="btn" href="javascript:;" class="left button_gray_s" style="width:40px; margin:7px 0 0 5px; _display:inline;">&nbsp;OK&nbsp;</a>',
'</div>'
]
);







function initDropML()
{
function Xy(an)
{
var bP=calcPos(an),
hf=S('dragtitle'),
ox=hf.offsetLeft,
nB=hf.offsetTop;
return(bP[1]>ox&&bP[3]<ox&&bP[2]>nB&&bP[0]<nB)?an:null;
}

function NS(an,aBc)
{
if(an&&an.id.indexOf('folder_')>=0)
{
var dc=an.className,
aAD=dc.indexOf('toolbg')>-1;
if(aBc&&aAD)
{
setClass(an,dc.replace(/\btoolbg\b/g,''));
}
else if(!aAD&&!aBc)
{
setClass(an,dc+' toolbg');
}
}
}

var hf=S('dragtitle'),
azn=S('OutFolder'),
aBL='inidrop',
sJ=BaseMailOper.getInstance(getMainWin()),
akQ=QMDragDrop,
aBU='mail_list';

if(azn.getAttribute(aBL)=='true')
{

return false;
}
azn.getAttribute(aBL,'true');
akQ.delGroup(aBU);

var yM=null,

aiP=false,
pc=null,
hK=null,
ko=null,



azb=/^([489]|personal|pop|tag)$/,

aEG=new akQ.DropTarget(
S('OutFolder'),
{





ondragover:function(pZ)
{
if(pc==hK)
{
return;
}
var clC=pc&&pc.id||'',
MC=hK&&hK.id||'',
akZ=pc&&pc.getAttribute('dp'),
agP=hK&&hK.getAttribute('dp'),
azT=hK&&hK.getAttribute('dr');


if(agP)
{
showFolders(agP,true,getTop());
}
if(akZ&&akZ!=agP)
{
showFolders(akZ,false,getTop());
}

NS(pc,1);
NS(hK);


if(ko)
{
clearTimeout(ko);
}
aiP=azT&&!azb.test(azT);
ko=setTimeout(function(){
setClass(hf,aiP?'drag_over':'drag_out');
ko=null;
},50);

pc=hK;
},





ondrop:function(pZ)
{
if(!hK||!aiP)
{
return;
}
var gl=sJ.getMailInfo().sFid,
aJ=hK.getAttribute('dr')||'';
ossLog("delay","all","stat=drag&opr="+aJ);


if(aJ=='6')
{

NS(pc,1);
pc=null;
sJ.apply('spammail');
dragML.ahH=true;
return;
}
else if(azb.test(aJ))
{
NS(pc,1);
pc=null;
return;
}
else if(aJ.indexOf('tag_')>=0)
{

aJ=aJ.replace('tag','tid');
}
else if(aJ=='starred')
{
aJ='star';
}
else if((gl==5||gl==6)&&aJ==5)
{
aJ='predelmail';
dragML.ahH=true;
}
else if(parseInt(aJ))
{
aJ={5:'delmail'}[aJ]||'fid_'+aJ;
}
else
{
return;
}
sJ.apply(aJ);
hf.setAttribute('na','true');
var jA=new qmAnimation(
{
from:100,
to:1
}
);
jA.play(
{
speed:"slow",
onaction:function(bX,fR)
{
setOpacity(hf,bX/100.0);
},
oncomplete:function(bX,atf)
{
show(hf,0);
setClass(hf,'drag_out');
setOpacity(hf,100);
NS(pc,1);
pc=null;
}
});
}
},
function(ox,nB,pZ){






if(gbIsIE)
{
var aC=getEventTarget(pZ.event),
bgZ=/(folder_\w+_td|(personal|pop|tag)foldersDiv)/;
while(aC&&!bgZ.test(aC.id))
{
aC=aC.parentNode;
}
hK=aC;
}
else if(hK=Xy(S('OutFolder')))
{


var hp=['personal','pop','tag'],
Oc=null,
axD=null,
FX,
i;
for(i=hp.length-1;i>=0;i--)
{
if(Oc=Xy(S(hp[i]+'foldersDiv')))
{
break;
}
}

if(Oc=Oc||Xy(S('SysFolderList')))
{

FX=GelTags('li',Oc);
for(i=FX.length-1;i>=0;i--)
{
if(axD=Xy(FX[i]))
{
break;
}
}
}
hK=axD||Oc;

}
return!!(pc||hK);
}
);
akQ.addGroup(aBU,aEG);
}

function dragML(an,ha)
{
if(!S('OutFolder')||!QMDragDrop)
{


return;
}
var ae=dragML,
aJ='dragtitle',
hf=S(aJ);
if(!hf)
{
insertHTML(getTop().document.body,'afterBegin','<div id="dragtitle" class="drag_out" style="display:none;"></div>');
hf=S(aJ);
}
var yM,

aIP=new QMDragDrop.Draggable(
an,
{

threshold:5,
oTitle:hf
},
{
ondragstart:function(ah)
{
ae.ahH=ha.checked==true;
ha.checked=true;
var ap=getMainWin(),
sJ=BaseMailOper.getInstance(ap),
cy=QMMailList.getCBInfo(ap);
QMMailList.selectedUI(cy);
sJ.setMailInfo(cy);
hf.innerHTML=['Select ',cy.oMail.length,'  message(s)'].join('');

ossLog("delay","all","stat=drag&c="+cy.oMail.length);









yM=gbIsIE?[0,0,0,0]:calcPos(ap.frameElement);
hf.style.left=yM[3]+ah.clientX+'px';
hf.style.top=yM[0]+ah.clientY+'px';
hf.setAttribute('na','');
show(hf,1);

initDropML();
},
ondrag:function(ah)
{
hf.style.left=yM[3]+ah.clientX+'px';
hf.style.top=yM[0]+ah.clientY+'px';
},
ondragend:function(ah)
{
if(!hf.getAttribute('na'))
{

show(hf,0);
setClass(hf,'drag_out');
}
if(!ae.ahH)
{
ha.checked=false;
var aOO=QMMailList.getCBInfo(getMainWin());
QMMailList.selectedUI(aOO);
}
}
}
);
QMDragDrop.addGroup('mail_list',aIP);


var aH=an.ownerDocument,
ap=aH.parentWindow||aH.defaultView,
Yp=dragML.Yp=dragML.Yp||unikey('drag');
if(!ap[Yp])
{
addEvent(ap,'unload',function(){
if(hf.releaseCapture)
{
hf.releaseCapture();
}
show(hf,0);
});
ap[Yp]=1;
}
}




MLI.aDc=function(ah)
{
var ag=getTop(),
ae=arguments.callee,
BY=ah.clientX,
Br=ah.clientY,
aQ=getEventTarget(ah);
while(aQ&&aQ.tagName.toUpperCase()!="TD")
{
aQ=aQ.parentNode;
}
if(ae.wO)
{
clearTimeout(ae.wO);
ae.wO=0;
}

if(ah.type=="mouseout")
{
ag.QMTip&&ag.QMTip.showMailList(0,aQ.ownerDocument);
return;
}

ae.wO=setTimeout(function(){
var aDz=ag.GelTags("b",aQ.parentNode.cells[2]),
aCv=aDz[aDz.length-1];

if(!ag.QMTip||!aCv||(ae.yE==BY&&ae.wI==Br))
{
return;
}

ae.yE=BY;
ae.wI=Br;

var Bs=aCv.innerHTML.replace(/^\&nbsp;-\&nbsp;/,"").replace(/\&nbsp;/gi,"&nbsp; ").replace(/&lt;br\/?&gt;/g,'<br/>');
ag.QMTip.showMailList(1,aQ.ownerDocument,Bs,BY,Br);
},250);
};





function MLI_A(dF)
{
var DX=GelTags("table",dF),
aYP=DX.length,

bF=DX[aYP-1],
ek=bF.getAttribute("mailid");

if(QMMailCache.hasData(ek))
{
if(!QMMailCache.isRefresh(window))
{
setClass(bF,"i M");
}
else
{
QMMailCache.delData(ek);
}
}

listMouseEvent(bF);

addEvent(bF,"selectstart",preventDefault);
}










function aAV(ha,xt,tp,Yt)
{
if(!(ha&&ha.type=="checkbox"))
{
return false;
}

if(tp==null)
{
return ha.getAttribute("unread")=="true";
}

if(!xt)
{
xt=ha.parentNode.parentNode.parentNode.parentNode;
}

if((ha.getAttribute("unread")=="true")==!!tp
&&!Yt)
{
return tp;
}

var sI=ha.getAttribute("gid");
if(sI)
{
setGroupUnread(sI,getGroupUnread(sI)-1);
setGroupUnread("gall",getGroupUnread("gall")-1);
}

ha.setAttribute("unread",tp?"true":"false");

setClass(xt,
[tp?"i F":"i M",ha.checked?" B":""].join(""));
setClass(GelTags("table",xt)[0],tp?"i bold":"i");


var aAJ=GelTags("div",xt)[1];
if(!/(s[016789]bg)|(Rw)/.test(aAJ.className))
{
var aav=Yt?"r":ha.getAttribute("rf"),
abM=ha.getAttribute("isendtime"),
dc="Rr";

if(abM)
{
dc=abM=="0"?"Rc":"Ti";
}
else if(tp)
{
dc="Ru";
}
else if(aav)
{
dc=aav=="r"?"Rh":"Rz";
}

setClass(aAJ,"cir "+dc);
}

return tp;
}






function aWV(ha)
{
return aAV(ha);
}









function axb(ha,xt,tp,Yt)
{
return aAV(ha,xt,tp,Yt);
}








function axP(ha,xt)
{
if(!ha||!ha.getAttribute("gid"))
{
return false;
}

var aDq=GelTags("b",xt)[0],
Cy=aDq&&aDq.parentNode;

if(Cy&&Cy.className=="new_g")
{
Cy.style.visibility="hidden";
return true;
}

return false;
}






function getMailListInfo()
{
var bN=getMainWin(),
ayV=S("_ut_c",bN),
aAp=S("_ur_c",bN),
aBt=S("_ui_c",bN);

return{
totle:(ayV&&parseInt(ayV.innerHTML))||0,
unread:(aAp&&parseInt(aAp.innerHTML))||0,
star:(aBt&&parseInt(aBt.innerHTML))||0
};
}






function bQc(ce,aFK)
{
var tL=S("selectAll",ce);

if(tL)
{
tL.setAttribute("totalcnt",aFK);
E(GelTags("div",tL),
function(aQ,dB)
{
var IJ=aQ.getAttribute("un");
if(IJ=="selected")
{
GelTags("span",aQ)[0].setAttribute("end",aFK);
}
else if(IJ=="unselect")
{
var dk=aQ.innerHTML;
aQ.innerHTML=dk.replace(/\u5168\u90E8.*\u5C01/gi,"\u5168\u90E8&nbsp;"+aFK+"&nbsp;\u5C01");
}
}
);
}
}








function setMailListInfo(Bb,vN,ajG)
{
var bN=getMainWin(),
jM=true,
ajD=S("_ur",bN),
bgJ=S("_ui",bN),
bgi=S("_ut",bN),
cq;

if(!isNaN(Bb=parseInt(Bb)))
{
if(!!(cq=S("_ur_c",bN)))
{
cq.innerHTML=Math.max(0,Bb);
show(ajD,Bb>0);
}
else
{
jM=false;
}
var Yh=S("tip_unread",bN);
if(Yh)
{
Yh.innerHTML=Bb<0?parseInt(Yh.innerHTML)+Bb:Bb;
show(Yh,Bb);
}
}

if(!isNaN(vN=parseInt(vN)))
{
vN=Math.max(0,vN);
if(!!(cq=S("_ui_c",bN)))
{
cq.innerHTML=vN;
show(bgJ,vN!=0);
}
else
{
jM=false;
}
}

if(!isNaN(ajG=parseInt(ajG)))
{
vN=Math.max(0,ajG);
if(!!(cq=S("_ut_c",bN)))
{
cq.innerHTML=vN;
show(bgi,vN!=0);

getTop().bQc(bN,vN);
}
else
{
jM=false;
}
}

show(
S("_uc",bN),
isShow(ajD)

);
show(
S("_ua",bN),
isShow(ajD)

);

return jM;
}








function readMailFinish(bc,aq,dM,bcx)
{
var bN=getMainWin(),
ahe=S("load_"+bc,bN),
bF,ke;

QMMailCache.addData(bc);

if(ahe)
{
show(ahe,false);

bF=ahe.parentNode.previousSibling;
ke=GelTags("input",bF)[0];
}
else
{
var jb=GelTags("input",bN.document);
for(var i=0,aB=jb.length;i<aB;i++)
{
if(jb[i].type=="checkbox"
&&jb[i].value==bc)
{
ke=jb[i];
break;
}
}
bF=ke;
while(bF.tagName.toUpperCase()!="TABLE")
{
bF=bF.parentNode;
}
}


var tF=GelTags("table",bF),
aCf=false;
for(var aD=tF.length-1;aD>=0;aD--)
{
if(tF[aD].getAttribute("tagid"))
{
aCf=true;
break;
}
}

axP(ke,bF);

if(ke&&aWV(ke))
{
axb(ke,bF,false);
setMailListInfo(getMailListInfo().unread-1);


if(ke.getAttribute('star')=='1')
{
setFolderUnread('starred',getFolderUnread('starred')-1);
}
var alm=ke.getAttribute("ssystag");
if(alm&&/system:1\|/.test(alm))
{
setFolderUnread("sysmsg",getFolderUnread("sysmsg")-1);
}
if(alm&&/system:0\|/.test(alm))
{
setFolderUnread("notsysmsg",getFolderUnread("notsysmsg")-1);
}

if(dM&&parseInt(dM)>0&&!aCf)
{
setFolderUnread(dM,bcx
?getGroupUnread("gall")
:getMailListInfo().unread);
}
else
{
reloadLeftWin();
}
}
}







function checkMail(mw)
{
var deW=getTop().QMAddrParser,
cRH=mw.indexOf("@")>0,
cS=deW.parseAddr(mw);

if(cS.length==0)
{
showError("Please fill in email address");
return false;
}
else if(!cRH||(cS.length==1&&!cS[0].valid))
{
showError("Invalid email address. Please fill in again. ");
return false;
}
else if(cS.length>1)
{
showError("Only one email address allowed ,please refill");
return false;
}
return true;
}








function checkAndSubmit(ay)
{
var bS=S(ay);

if(!checkMail(trim(bS.value)))
{
bS.focus();
return false;
}

submitToActionFrm(bS.form);
}






function pushToDialogList(ay)
{
var ag=getTop();

if(!ag.goDialogList)
{
ag.goDialogList=new ag.Object;
}

if(ay)
{
ag.goDialogList[ay]=true;
}
}





function showDialogNewReadMail(bie,aXt,aTt,bc)
{
new(getTop().QMDialog)({
sId:"addnewremind_qqmail",
sTitle:"New Reminder",
sUrl:T("/cgi-bin/read_reminder?linkid=%linkid%&linktitle=%linktitle%&sid=%sid%&t=remind_edit&from=%from%","%").replace({
sid:getSid(),
linkid:bie,
linktitle:aXt,
from:aTt
}),
nWidth:450,
nHeight:360
})
bc&&rdVer(bc,1);
}

function setRemindSpan(bc,ak)
{


getTop().S('remind_edit_'+bc,ak).innerHTML=(getTop().reminddetail["mailid:"+bc]||"")
.replace(/linktitle=.*&sid=/g,function(bC)
{
return bC.replace(/\'/g,"&#039;");
}
);
}


function showSimpleRuleFilter(du)
{
if(!du)
{
showError("Can not create a filter without sender email. ");
return;
}
var dV=new(getTop().QMDialog)(
{
sId:"addnewfilter_qqmail",
sTitle:"Create new filter",
sUrl:T("/cgi-bin/setting2?sid=$sid$&Fun=GetFolderList&CurFilterID=0&t=readmail_filter&fromaddr=$fromaddr$").replace({
sid:getSid(),
fromaddr:du
}),
nWidth:420,
nHeight:240,
onshow:function()
{
var acr=this.getDialogWin();
waitFor(
function()
{
try
{
return S("jump",acr);
}
catch(e){}
},
function(aP)
{
if(aP)
{
function cqb(aLb)
{
if(aLb.length)
{
aLb.push({
bDisSelect:true,
nHeight:10,
sItemValue:'<hr/>'
});
}
aLb.push({
bDisSelect:false,
nHeight:22,
sId:"new",
sItemValue:'New folder...'
});

return aLb;
};
function bxJ()
{
var De=aLp.get(2);

return De=="new"?"-1":De;
};
function bBY()
{
aLp.set(Ob[0].sId,2);
};
function chL(aI,bC)
{
var bCx={
bDisSelect:false,
nHeight:22,
sId:bC,
sItemValue:aI
};

if(Ob.length==1)
{
Ob=bfw(Ob,{
bDisSelect:true,
nHeight:10,
sItemValue:'<hr/>'
},0);
Ob=bfw(Ob,bCx,0);
}
else
{

Ob=bfw(Ob,bCx,Ob.length-2)
}
aLp.update({
oMenu:{
oItems:Ob
}
});
aLp.set(bC,2);
};
function bfw(eI,bf,qY)
{
({}).toString.call([])!="[object Array]"&&(bf=[bf]);
return eI.slice(0,qY).concat(bf).concat(eI.slice(qY,eI.length));
};
function cbf()
{

promptFolder({
type:'folder',
bAlignCenter:true,
width:410,
height:237,
style:"createNewFolder",
onreturn:function(aI)
{
QMAjax.send(
"/cgi-bin/foldermgr",
{
method:"POST",
content:["sid=",getSid(),"&fun=new&from=simple&ef=js&resp_charset=UTF8&name=",aI].join(''),
onload:function(aP,Rl)
{
try
{
if(aP)
{
var as=eval("("+Rl+")");
if(as.errcode=="0")
{
chL(aI,as.folderid);
reloadLeftWin()
showInfo("New folder succeed");
}
else
{
showError(as.errmsg);
}
return;
}
}
catch(e)
{}
showError("Network error, please click reload and try again.");
}
}
);
}
});
};

var Ob=cqb(acr.oUserFolder)
aLp=new QMSelect({
oContainer:S("selectfolder",acr),


oMenu:{
nWidth:"auto",
nMaxWidth:180,
nMaxItemView:4,
oItems:Ob 
},
onselect:function(bf)
{
if(bf.sId=="new")
{
cbf();
return true;
}
}
});

addEvent(S("jump",acr),"click",function()
{
dV.close();
var jn=bxJ();
jn=="-1"&&(jn="");
getMainWin().location.replace(
acr.location.href
.replace("&Fun=GetFolderList","&Fun=Create")
.replace("&t=readmail_filter","&loc=filter,simple,0,0&folderid="+jn)
);
}
);
addEvent(S("confirm",acr),"click",function()
{
var jn=bxJ(),
bBI=S("oldmail",acr).checked?1:0;

if(jn=="-1")
{
showError("A new folder is needed.");
bBY();
}
else if(!jn)
{
showError("Please choose a folder.");
bBY();
}
else
{
QMAjax.send(
"/cgi-bin/foldermgr",
{
method:"POST",
content:["sid=",getSid(),"&fun=addfilter&from=simple&ef=js&action=move&oldmail=",bBI,"&sender=",du,"&folderid=",jn].join(''),
onload:function(aP,Rl)
{
try
{
if(aP)
{
var as=eval("("+Rl+")");
if(as.errcode=="0")
{
if(bBI&&as.affected>0)
{
showInfo(TE([
'Operation succeed,',
'$@$if($num$>0)$@$',
'$num$ messages are moved. ',
'$@$else$@$',
',no message moved or labeled. ',
'$@$endif$@$',
'<a href="/cgi-bin/mail_list?sid=$sid$&folderid=$fid$&page=0"',
'style="color:white" onclick="getTop().hiddenMsg();" target="mainFrame">',
'[View]',
'</a>']).replace({
sid:getSid(),
fid:as.folderid,
num:as.affected
}),30000);
}
else
{
showInfo("New filter succeed");
}


ossLog("realtime","all","loc=filter,simple,0,1");
dV.close();
}
else
{
showError(as.errmsg);
}
return;
}
}
catch(e)
{}
showError("Network error, please click reload and try again.");
}

}
);
}
}
);
addEvent(S("cancel",acr),"click",function()
{
dV.close();
}
);
}
else
{
showError("Network error, please click reload and try again.");
}
}
);
}
});

}
function closeSimpleRuleFilter(jd)
{
jd&&jd();
QMDialog("addnewfilter_qqmail").close();
}



function applyRules(bzd)
{
confirmBox({
title:"Filters",
msg:"Do you want to apply the filter to existing messages in inbox??",
confirmBtnTxt:'Yes',
cancelBtnTxt:'No',
onreturn:function(aP)
{
if(aP)
{
QMAjax.send(T("/cgi-bin/exbook_mgr?sid=$sid$&fname=&optype=mailfilter").replace(
{
sid:getSid()
}),
{
method:"GET",
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(aP,bt)
{
show(S("spam",getMainWin()),0);
showInfo("The filter has been applied to messages in inbox.!");
callBack(bzd);
}
});
}
else
{
callBack(bzd);
}
}
});
}

function submitSwitchForm()
{
var fV=getTop().S("frmSwitch");
fV&&fV.submit();
}















function getDomain(bdu)
{
return[["foxmail.com","qq.com","biz"],["Foxmail.com","QQ","\u817E\u8BAF"]][
bdu?1:0][/,7$/.test(getSid())?2:(location.href.indexOf("foxmail.com")>-1?0:1)];
}
var GetDomain=getDomain;





function getSid()
{
return getTop().g_sid
||(S("sid")?S("sid").value:location.getParams(getTop().location.href)["sid"]);
}
var GetSid=getSid;





function getUin()
{
return getTop().g_uin;
}





function getPaths()
{

if(getLocale()=="zh_CN")
{
var Fj=
{
images_path:"/zh_CN/htmledition/images/",
js_path:"/zh_CN/htmledition/js/",
css_path:"/zh_CN/htmledition/css/",
style_path:"/cgi-bin/getcss?sid="+getSid()+"ft=",
swf_path:"/zh_CN/htmledition/swf/",
stationery_path:"http://res.mail.qq.com/zh_CN/",
card_path:"http://res.mail.qq.com/zh_CN/",
mo_path:"http://res.mail.qq.com/zh_CN/",
base_path:"/",
skin_path:"0"
};
}
else
{
var Fj=
{
images_path:"/en_US/htmledition/images/",
js_path:"/en_US/htmledition/js/",
css_path:"/en_US/htmledition/css/",
style_path:"/cgi-bin/getcss?sid="+getSid()+"ft=",
swf_path:"/en_US/htmledition/swf/",
stationery_path:"http://res.mail.qq.com/zh_CN/",
card_path:"http://res.mail.qq.com/zh_CN/",
mo_path:"http://res.mail.qq.com/zh_CN/",
base_path:"/",
skin_path:"0"
};
}
for(var k in Fj)
{
Fj[k]=trim(getTop()[k])||Fj[k];
}
return Fj;
}






function getPath(aq,aDg)
{













aq=="image"&&(aq+="s");
var hz=getPaths()[aq+"_path"]||"";
if(hz)
{
if(aDg&&aq!="skin"&&hz.indexOf("http")!=0)
{
hz=[location.protocol,"//",location.host,hz].join("");
}
}
return hz;
}








function getRes(aTe)
{
return T(aTe).replace(getPaths(),true);
}






function getFullResSuffix(fN)
{
if(!getTop().gLn)
{
return fN;
}
var hm,uw,alO=".j"+"s";
if(fN.indexOf(alO)>0)
{
hm=fN.substr(0,fN.indexOf(alO));
uw=alO;
}
else if(fN.indexOf(".css")>0)
{
hm=fN.substr(0,fN.indexOf(".css"));
uw=".css";
}
else if(fN.indexOf(".html")>0)
{
hm=fN.substr(0,fN.indexOf(".html"));
uw=".html";
}
if(hm.length>0&&getTop().gLn[hm])
{
return hm+getTop().gLn[hm]+uw;
}
else
{
return fN;
}
}












function outputJsReferece(ei,kj,ak)
{
var hz=ei||outputJsReferece.Tx,
eg=kj||outputJsReferece.sn,
ap=ak||window,
bU=T(['<script language="JavaScript" src="$file$',(ei?'':'?r='+Math.random()),'"></','script>']),
uO=[];
outputJsReferece.Tx=hz;
outputJsReferece.sn=eg;

function bjm(gj)
{
var hm=trim(gj||""),
eZ=/[0-9a-fA-F]{6}\.js$/.test(hm)?gj.substr(0,gj.length-9):gj.split(".")[0];

if(eZ&&(ei||!ap[eZ+"_js"]))
{
uO.push(bU.replace(
{
file:hz+gj
}
));
}
}
E(eg,bjm);
return uO.join("");
}





function runUrlWithSid(be)
{
try
{

getTop().getHttpProcesser().src=T('$url$&sid=$sid$&r=$rand$').replace(
{
url:be,
sid:getSid(),
rand:Math.random()
}
);
}
catch(aL)
{
}
}




























function createBlankIframe(ak,cj)
{
cacheByIframe(cj&&cj.defcss==false
?[]
:[["css","",getRes("$css_path$comm131f73.css")],["css",getPath("style"),"skin"]],
extend(
{
className:"menu_base_if",
transparent:false,
destroy:false
},
cj,
{
win:ak,
header:["<script>",getTop.toString().replace(/[\r\n]/g,""),"<\/script>",cj&&cj.header||""].join(""),
onload:function(ak)
{
if(this.getAttribute("cbi_inited")!="true")
{
cj&&cj.transparent&&
(this.contentWindow.document.body.style.background="transparent");
this.setAttribute("cbi_inited","true");
}
callBack.call(this,cj&&cj.onload,[ak]);
}
}
)
);
}






function createActionFrame(ak)
{
return createBlankIframe(ak,
{
id:"actionFrame",
defcss:false,
onload:actionFinishCheck
}
);
}
















function hideEditorMenu()
{
if(getTop().QMEditor)
{
getTop().QMEditor.hideEditorMenu();
}
}





function hideMenuEvent(ah)
{
var cE=getEventTarget(ah),
Ie=getTop().QMMenu&&getTop().QMMenu();
for(var i in Ie)
{
!Ie[i].isContain(cE)&&Ie[i].close();
}

try
{
getTop().QQPlusUI.hideMenuEvent(cE);
}
catch(FJ)
{
}
}






















function confirmBox(aM)
{

var	BX=2,
rJ=aM.defaultChecked||false,
amS=aM.confirmBtnTxt||"OK",
anM=aM.cancelBtnTxt||"Cancel",
Wb=aM.neverBtnTxt;



new(getTop().QMDialog)({
bAlignCenter:aM.bAlignCenter,
sId:aM.id||"QMconfirm",
sTitle:aM.title||"Warning",
sBodyHtml:TE([
'<div class="$sStyle$">',
'$@$if($sType$=="custom")$@$',
'$msg$',
'$@$else$@$',
'<div class="cnfx_content">',
'<span class="dialog_icon icon_info_b"></span>',




'<div class="dialog_f_c">$msg$</div>',
'</div>',
'<div class="cnfx_status" style="display:$statusdisp$;">',
'<input id="recordstatus" class="cnfx_status_checkbox" type="checkbox" $checked$/><label for="recordstatus">$recordinfo$</label>',
'</div>',
'$@$endif$@$',
'</div>'
]).replace({
sStyle:aM.style||'',
sType:aM.sType||"",

msg:aM.msg,
caceldisp:aM.mode=="alert"?"none":"",
imgdisp:aM.mode=="prompt"?"none":"block",
recordinfo:aM.recordInfo,
statusdisp:aM.enableRecord?"":"none",
checked:aM.defaultChecked?"checked":"",


confrim:amS,
confirmcss:getAsiiStrLen(amS)>5?"":"wd2",
cancel:anM,
cancelcss:getAsiiStrLen(anM)>5?"":"wd2",
never:Wb,
neverdisp:Wb?'':'none',
nevercss:getAsiiStrLen(Wb)>5?"":"wd2"
}),
sFootHtml:T([
'<div class=" txt_right cnfx_btn">',
'<a class="btn_gray confirm $confirmcss$" id="confirm" href="javascript:;">$confirm$</a>',
'<a class="btn_gray cancel$cancelcss$" id="cancel" style="display:$caceldisp$;" href="javascript:;">$cancel$</a>',
'<a class="btn_gray $nevercss$" id="never" style="display:$neverdisp$;" href="javascript:;">$never$</a>',



'</div>'
]).replace({
caceldisp:aM.mode=="alert"?"none":"",
confirm:amS,
confirmcss:getAsiiStrLen(amS)>5?"":"wd2",
cancel:anM,
cancelcss:getAsiiStrLen(anM)>5?"":"wd2",
never:Wb,
neverdisp:Wb?'':'none',
nevercss:getAsiiStrLen(Wb)>5?"":"wd2"

}),


onload:function(){
var bW=this,
acP=bW.S("confirm"),
aaU=bW.S("cancel"),
acF=bW.S("never");








addEvents([acP,aaU,acF],
{
click:function(ah)
{
var aw=getEventTarget(ah);
if(aw==acP)
{
if(bW.S("recordstatus"))
{
rJ=bW.S("recordstatus").checked;
}
BX=1;
}
else if(aw==acF)
{
BX=3;
}
bW.close();



preventDefault(ah);
}
}
);
callBack.call(bW,aM.onload);
},
onshow:function(){

gbIsMac||this.S("confirm").focus();
callBack.call(this,aM.onshow);
},
onclose:function(){
callBack.call(this,aM.onclose)
},
onbeforeclose:function(){
try
{

callBack.call(this,aM.onreturn,[BX==1,rJ,BX]);
}
catch(aL)
{
}
return true;
}
});
}










function alertBox(aM)
{
confirmBox(extend({mode:"alert"},aM))
}













function promptBox(aM)
{
var SX=false,
bks=aM.onreturn;
aM.onreturn=function(aP)
{
var ae=this;
callBack.call(ae,bks,[SX||aP,ae.S("txt").value]);
};
aM.msg=T(
[
'<div class="dialog_txt">',
'<div style="margin:0 10px 10px;" class="bold">$msg$</div>',
'<div style="margin:10px 10px 5px;"><input type="text" id="txt" style="width:352px;" class="txt" value="$defaultValue$"/></div>',
'<div style="margin:0 10px 10px;" class="f_size addrtitle">$description$</div>',
'</div>',
]
).replace(aM);
confirmBox(extend(
{
sType:"custom",
height:160,
onload:function()
{
var ae=this;
addEvent(ae.S("txt"),"keydown",function(ah)
{
if(ah.keyCode==13)
{
SX=true;
ae.close();
}
}
);
},
onshow:function()
{
this.S('txt').select();
this.S("txt").focus();
}
},aM)
);
}











function loadingBox(aM)
{
if(!callBack(aM.oncheck))
{
var cG=new QMDialog(
{
sId:"LoAdINgBOx",
sTitle:aM.model+"Loading module...",
nWidth:400,
nHeight:200,
sBodyHtml:T(
[
'<div style="text-align:center;padding:58px;">',
'<img id="load" src="$images_path$ico_loading212fb20.gif">',
'<span id="err" style="display:none;">$model$Failed to load module</span>',
'</div>'
]
).replace(extend(aM,{images_path:getPath("image")})),
onclose:function()
{
cG=null;
}
}
);
if(aM.js)
{
var eM=[];
E(typeof aM.js=="string"?[aM.js]:aM.js,function(gj)
{
eM.push(gj);
}
);
loadJsFileToTop(eM);
}
waitFor(
function()
{
return callBack(aM.oncheck);
},
function(aP)
{

if(!cG)
{
return;
}
if(!aP)
{
show(cG.S("load"),false);
show(cG.S("err"),true);
}
else
{
cG.close(true);
callBack(aM.onload);
}
}
)
}
else
{
callBack(aM.onload);
}
}





















(function()
{
var ag=getTop();

function bkm(afP,VP)
{
var afP="weixinCss";

if(!ag.S(afP))
{
var IZ=ag.document.createElement("style");
IZ.type="text/css";
IZ.id=afP;
if(ag.gbIsIE)
{
IZ.styleSheet.cssText=VP;
}
else
{
IZ.innerHTML=VP;
}
ag.document.getElementsByTagName("head")[0].appendChild(IZ);
}
}

var bfc=TE([
'<div id="mask" class="editor_mask opa50Mask editor_maskAtt" ></div>',
'<a id="close" class="wx_c_bar" href="javascript:;" title="Close" style="$@$if($noclose$)$@$display:none$@$endif$@$;"><span class="wx_close"></span></a>',

'<div id="out" style="z-index:1000;position: absolute;width:$width$%;height:$height$%;margin-left:$offsetLeft$%;margin-top:$offsetTop$%;outline:0;" tabindex="-1" hidefocus="hidefocus">',
'<div id="body" style="width:100%;height:100%">$html$</div>',
'</div>'
]);


function maskPanel(ao)
{
bkm(ao.sId,ao.sCssRule);

new QMPanel(
{
oEmbedWin:ag,
sStyle:"position:absolute;width:100%; height:100%; left:0; top:0; margin-top:-2px",
nWidth:"auto",
nHeight:"auto",
sId:"weixinnote",
sClassName:"qr_previewer",
sBodyHtml:bfc.replace(
{
noclose:ao.bNoCloseBtn,
html:ao.sBodyHtml,
images_path:getPath("image"),
offsetTop:(100-ao.nHeightPercent)/2,
offsetLeft:(100-ao.nWidthPercent)/2,
width:ao.nWidthPercent,
height:ao.nHeightPercent
}),
onclose:ao.onclose,
onload:function()
{
var Ov=this;
Ov.S("mask").onclick=Ov.S("close").onclick=function()
{
Ov.close();
}
ao.onload&&callBack.call(Ov,ao.onload,[Ov]);
}
}
);
}
window.maskPanel=maskPanel;
})();




function getQMPluginInfo(baL)
{
var b=
(gbIsWin&&
(


(gbIsFF&&gsFFVer.split(".")[0]>=3&&(gsFFVer.split(".")[1]>0||gsFFVer.split(".")[2]>=8||parseInt(navigator.buildID.substr(0,8))>=20090701))
||(gbIsChrome&&(""+gsChromeVer).split('.')[0]>=6)
||(gbIsSafari&&gsAgent.indexOf("se 2.x metasr 1.0")<0)
||(gbIsOpera)
||(gbIsQPlus)
||(gbIsQBWebKit&&getQMPluginInfo.ZV(gsQBVer,"6.5")>0)
)
)
||(gbIsMac&&getQMPluginInfo.ZV(gsMacVer,""+baL)>=0&&
(
gbIsFF&&parseFloat(gsFFVer)>=3.6
||gbIsChrome&&parseFloat(gsChromeVer)>=8
||gbIsSafari&&parseFloat(gsSafariVer)>=5
||gbIsQBWebKit
)
);
return b;
}







getQMPluginInfo.ZV=function(bIY,bIZ)
{
var aYz=(""+bIY).split("."),
bif=aYz.length,
aYx=(""+bIZ).split("."),
bjU=aYx.length;

for(var i=0;i<bif&&i<bjU;i++)
{
var bbL=parseInt(aYz[i]),
bbK=parseInt(aYx[i]);
if(bbL==bbK)
{
continue;
}
return bbL>bbK?1:-1;
}
if(i<bif)
{
return 1;
}
if(i<bjU)
{
return-1
}
return 0;
};






var QMAXInfo=
{
alR:
{
path:"/activex/",
cab:["TencentMailActiveX.cab","TencentMailActiveX_2.cab"],
exe:"TencentMailActiveXInstall.exe",

obj:[
["TXGYMailActiveX.ScreenCapture","TXGYMailActiveX.UploadFilePartition",
"TXGYMailActiveX.Uploader","TXFTNActiveX.FTNUpload","TXGYMailActiveX.DropFile"]],
available:["ScreenCapture","Uploader","FTNUpload","DropFile","UploadFilePartition"],
lastVer:["1.0.1.51","1.0.1.29","1.0.1.51","1.0.0.29","1.0.0.51"],
miniVer:[(getDomain()=="foxmail.com")?"1.0.0.5":"1.0.1.28",
"1.0.1.28","1.0.1.28","1.0.0.13","1.0.0.7"]
},

adM:
{
path:"/xpi/",
xpi:"TencentMailPlugin.xpi",

obj:["ScreenCapture","","Uploader","FTNUpload",""],
available:["ScreenCapture","Uploader","FTNUpload"],
name:["QQMail Plugin","","QQMail Plugin","Tencent FTN plug-in","QQMail Plugin"],




type:(function()
{
var wv="application/txftn",
aqn="application/txftn-webkit";
return["application/x-tencent-qmail","","application/x-tencent-qmail",
(typeof navigator.mimeTypes!="undefined")&&navigator.mimeTypes[aqn]?aqn:wv,
"application/x-tencent-qmail"];
})(),
lastVer:["1.0.1.51","","1.0.1.51","1.0.0.3","1.0.0.0"],
miniVer:["1.0.1.28","","1.0.1.28","1.0.0.1","1.0.0.0"]
},

UM:
{
path:"/crx/",
crx:"TencentMailPlugin.crx",
exe:"QQMailWebKitPlugin.exe",
obj:["ScreenCapture","","Uploader","FTNUpload",""],
available:["ScreenCapture","FTNUpload"],
name:["QQMail Plugin","","QQMail Plugin","Tencent FTN plug-in",""],
type:["application/x-tencent-qmail-webkit","","application/x-tencent-qmail-webkit","application/txftn-webkit",""],
lastVer:["1.0.1.51","","1.0.1.51","1.0.0.3",""],
miniVer:["1.0.1.28","","1.0.1.28","1.0.0.1",""]
},

amu:
{
path:"/crx/",
pkg:"TencentMailPluginForMac.pkg",
obj:["ScreenCapture","","Uploader","FTNUpload",""],
available:["ScreenCapture","Uploader"],
name:["QQMailPlugin","","QQMailPlugin","Tencent FTN Plug-in",""],
type:["application/x-tencent-qmail-webkit","","application/x-tencent-qmail-webkit","application/txftn",""],
lastVer:["1.0.1.34","","1.0.1.34","1.0.0.3",""],
miniVer:["1.0.1.34","","1.0.1.34","1.0.0.3",""]
},







mbAblePlugin:getQMPluginInfo("10.6.8"),



mbAbleUsePlugin:getQMPluginInfo("10.6.8"),




aIb:true,

getTitle:function()
{
return gbIsIE?"Control":"Plug-in";
},




getinfo:function()
{
if(QMAXInfo.mbAblePlugin)
{
if(gbIsWin)
{
if(gbIsIE)
{
return QMAXInfo.alR.available;
}
if(gbIsFF)
{
return QMAXInfo.adM.available;
}
if(gbIsChrome||gbIsSafari||gbIsOpera||gbIsQBWebKit)
{
return QMAXInfo.UM.available;
}
}
if(gbIsMac)
{
return QMAXInfo.amu.available;
}
}

return[];
},




aJD:function()
{








},











installer:function(aq,mC)
{
var bD=this.get("whole",mC),
eZ="";
if(/^online/.test(aq))
{
if(bD.cab)
{
eZ=this.get("cab");
}
else
{
eZ=bD.xpi||(gbIsChrome&&parseInt(gsChromeVer)<21&&bD.crx);
}
}
else if(/^download/.test(aq)&&bD)
{
if(mC=="FF"||(!mC&&gbIsFF))
{
bD=this.get("whole","WebKit");
}
eZ=bD.exe||bD.pkg;
}
if(eZ)
{
var cvr=eZ.split('.');
eZ=[[cvr[0]].concat(bD.lastVer[0].split('.')).join("_"),cvr[1]].join('.');
}
if(eZ&&/Abs$/.test(aq))
{
eZ=bD.path+eZ;
}
return eZ;
},







get:function(Zq,zk)
{
if(!zk)
{
gbIsIE&&(zk="IE");
gbIsFF&&(zk='FF');
(gbIsChrome||gbIsSafari||gbIsOpera||gbIsQBWebKit)&&(zk="WebKit");
!gbIsIE&&gbIsMac&&(zk="mac");
}

var hw={
IE:this.alR,
FF:this.adM,
chrome:this.UM,
WebKit:this.UM,
mac:this.amu
}[zk];

if(!this.aIb)
{
this.aJD();
}

if(Zq=="whole")
{
return hw;
}
else if(Zq=="cab")
{
var ix=createActiveX(0),
eZ=ix?"":"_2.dll";
try{eZ=ix.GetDLLFileName();}catch(e){}
return hw["cab"][eZ&&eZ.indexOf("_2.dll")!=-1?0:1];
}

return hw[Zq];
}
};






function createActiveX(nu,ak)
{
if(!gbIsIE)
{
return createPlugin(nu,false,ak);
}

if(nu>=0&&nu<=4)
{
var CJ=QMAXInfo.get("obj");
for(var i=0,len=CJ.length;i<len;i++)
{




















if(nu==3)
{
try
{
new ActiveXObject(CJ[i][0]);
}
catch(aL)
{
}
}
try
{
return new ActiveXObject(CJ[i][nu]);
}
catch(aL)
{
}
}
}
return null;
}








function detectActiveX(nu,tf,UV,bEd)
{
if(!gbIsIE)
{
return detectPlugin(nu,tf,UV,bEd);
}

var Iz=typeof(UV)=="undefined",
qJ=false,
mG=Iz?createActiveX(nu)
:UV,
lZ=getActiveXVer(mG);




if(mG&&lZ)
{

if(tf!=1&&tf!=2)
{
qJ=true;
}




else if(getQMPluginInfo.ZV(lZ,QMAXInfo.get(tf==1?"miniVer":"lastVer")[nu])>=0)
{
qJ=true;
}

if(Iz)
{
delete mG;
mG=null;
}
}
return qJ;
}






function getActiveXVer(bz)
{
if(!gbIsIE)
{
return getPluginVer(bz);
}

var lZ="",
mG;
try
{
mG=typeof(bz)=="number"?createActiveX(bz):bz;
lZ=mG&&(mG.version
?mG.version
:"1.0.0.8")||"";
}
catch(aL)
{
}

return lZ;
}






function checkInstallPlugin(iI)
{

if(!QMAXInfo.mbAbleUsePlugin)
{
return false;
}

try
{

navigator.plugins.refresh(false);
}
catch(e)
{
}

var bd=QMAXInfo.get("name")[iI],
bp=QMAXInfo.get("type")[iI],
qb=navigator.plugins;
if(qb&&bd)
{
for(var i=qb.length-1;i>=0;i--)
{
for(var j=qb[i].length-1;j>=0;j--)
{
if(qb[i].name.indexOf(bd)!=-1&&qb[i][j].type==bp)
{

if(iI!=3&&(gsAgent.indexOf("vista")>-1||/nt 6/gi.test(gsAgent))&&bp=="application/x-tencent-qmail")
{
var amN=qb[i].description.split('#')[1];
if(!amN)
{

continue;
}
}

var amN=/(\d+(?:\.\d+)+)/.test(qb[i].description||"")?RegExp.$1:"1.0.0.0";
if(gbIsMac&&iI!=3&&amN=="1.0.0.0")
{
continue;
}

if(gbIsMac&&gbIsChrome&&parseFloat(gsChromeVer)>21&&getQMPluginInfo.ZV(amN,"1.0.0.6")<0)
{
continue;
}

return true;
}
}


}
}
return false;
}









function createPlugin(iI,aUv,ak,rp)
{
var gG=null;
ak=ak||getMainWin();
switch(iI)
{
case 0:
case 2:
case 4:
if(gbIsSafari)
{
createPlugin.aqX(iI,ak,rp);
}
gG=createPlugin.aqX(iI,getTop(),rp);
break;
case 3:
gG=createFTNPlugin(ak,rp);
break;
}


if(!aUv&&checkInstallPlugin(iI))
{

getTop().ossLog("delay","all",
T([
'stat=ff_addon',
'&type=%type%&info=%info%'
],'%').replace({
type:!gG?"failcreatePlugin":"successcreatePlugin",
info:["ver:",gsFFVer,",pluginId:",iI,",brtpe:",(gbIsFF?1:(gbIsChrome?2:(gbIsSafari?3:(gbIsOpera?4:5))))].join("")
})
);
}
return gG;
}

createPlugin.aqX=function(iI,ak,rp)
{
var iy,
gG=null,
Vz=gbIsFF?"application/x-tencent-qmail":"application/x-tencent-qmail-webkit";
ak=ak||getTop();
if(checkInstallPlugin(iI))
{
var Gf=rp||"QQMailFFPluginIns";
if(!(iy=S(Gf,ak)))
{
insertHTML(

ak.document.body,
"beforeEnd",
T('<embed id="$id$" type="$type$" hidden="true"></embed>').replace({

type:Vz,
id:Gf
})
);
iy=S(Gf,ak);
}

var HF={0:"CreateScreenCapture",
2:"CreateUploader",
4:"CreateDragDropManager"
}[iI];
if(typeof iy[HF]!="undefined")
{
gG=iy[HF]();



if(iI==0)
{
gG.OnCaptureFinished=function(){};
}
else if(iI==2)
{
gG.OnEvent=function(){};
}
}
}
return gG;
};

createPlugin.avV=function(ak,rp)
{
var iy=null,


Vz=QMAXInfo.get("whole")["type"][3],
aaE=rp||"npftnPlugin";
ak=ak||getTop();
if(!(iy=S(aaE,ak)))
{
insertHTML(
ak.document.body,
"beforeEnd",
T('<embed id="$id$" type="$type$" style="z-index:99999;position:absolute;top:0;left:0;width:1px;height:1px;"></embed>').replace({

type:Vz,
id:aaE
})
);
iy=S(aaE,ak);
if(iy)
{
iy.onEvent=function(){};
}
}
return iy;
};







function createFTNPlugin(ak,rp)
{
if(!checkInstallPlugin(3))
{
return null;
}
createPlugin.avV(ak,rp);
var iy=createPlugin.avV(getTop(),rp);
















if(rp)
{

getTop().ossLog("delay","all",T([
'stat=ff_addon',
'&type=%type%&info=%info%'
],'%').replace({
type:iy&&iy.Version?"successcreatePlugin":"failcreatePlugin",
info:["ver:",gsFFVer,",pluginId:3,insId:",rp].join("")
}));
}

return iy.Version?iy:null;
}






function detectPlugin(iI,tf,aEU,rp)
{

var qJ=false;
var aay=aEU||createPlugin(iI,true,null,rp),
lZ=getPluginVer(aay);

if(aay&&lZ)
{
if(tf!=1&&tf!=2)
{
qJ=true;
}


else if(getQMPluginInfo.ZV(lZ,QMAXInfo.get(tf==1?"miniVer":"lastVer")[iI])>=0)
{
qJ=true;
}
}
return qJ;
}



function getPluginVer(bz)
{
var mG,lZ="";
try
{
mG=typeof(bz)=="number"?createPlugin(bz,true):bz;
lZ=(mG&&mG.Version)||"";
}
catch(aL)
{
}

return lZ;
}








































function initDialog(ay,HQ,be,kE,iv)
{
new(getTop().QMDialog)({
sid:ay,
sTitle:HQ,
sUrl:be,
nWidth:kE,
nHeight:iv
});
}








function requestShowTip(HI,aXv,ak,eN)
{
var aN=T('/cgi-bin/tip?sid=$sid$&args=$dom$,$tip$&r=$r$').replace({
sid:getSid(),
dom:HI,
tip:aXv,
r:Math.random()
});


QMAjax.send(aN,{
method:'GET',
onload:function(aP,bt,er)
{
if(aP&&bt.indexOf('oTop.QMTip')>0)
{
if(!eN||eN(bt,er))
{
globalEval(bt,ak);
}
}
}
});
}

function detectCapsLock(Hi,aQr,dF)
{
if(!Hi)
{
return;
}
function showTips(ah)
{
var aC=ah.target||ah.srcElement,
bP=calcPos(aC),
CT=aQr||S("capTip");

function getStyle()
{
return["z-index:20;position:absolute;background:#fdf6aa;padding:1px;",
"border:1px solid #dbc492;border-right:1px solid #b49366;border-bottom:1px solid #b49366;",
"left:",bP[3],"px;","top:",(bP[2]+1),"px;"].join("");
}
if(!CT)
{
insertHTML((dF||document).body,"afterBegin",
'<div id="capTip" style="'+getStyle()+'">Caps Lock On</div>');
}
else
{
CT.style.cssText=getStyle();
}
}
function hideTips()
{
show(S("capTip",(dF||document)),false);
}
var zg=-1;
addEvents(Hi,{
keydown:function(ah)
{
var ft=ah.keyCode||ah.charCode

if(ft==20)
{
if(zg==0)
{
showTips(ah);
zg=1;
}
else if(zg==1)
{
hideTips();
zg=0;
}

}
},
keypress:function(ah)
{
var ft=ah.keyCode||ah.charCode,
rT=ah.shiftKey;

if((ft>=65&&ft<=90&&!rT)
||(ft>=97&&ft<=122&&rT))
{
zg=1
showTips(ah);
}
else if((ft>=97&&ft<=122&&!rT)||(ft>=65&&ft<=90&&rT))
{
zg=0;
hideTips();
}
else
{
hideTips();
}
},
blur:function()
{
hideTips();
}
});
}






function calcMainFrameDomInGlobalPos(bhH,VS)
{
var bP=calcPos(bhH),
axF=calcPos(S("mainFrame",getTop())),
aAr=getMainWin().document,
ayD=aAr.documentElement,
awV=aAr.body,
di=bP[3]+axF[3]
-(ayD.scrollLeft||awV.scrollLeft||0),
bR=bP[0]+axF[0]
-(ayD.scrollTop||awV.scrollTop||0),
cH=bP[4],
cs=bP[5];

return VS=="json"
?{top:bR,bottom:bR+cs,left:di,
right:di+cH,width:cH,height:cs}
:[bR,di+cH,bR+cs,di,cH,cs];
}

function allDeferOK()
{
return typeof all_defer_js=="function"
}





















function attachSetFlag(bz,adS,eN)
{
bz="&mailattach="+(typeof bz=="string"?bz.split(","):bz).join("&mailattach=");

var ag=getTop(),
aN=[bz,"&action=",adS?"setflag":"cancelflag"].join(""),
aTx=adS?"Attachment has been archived":"Cancel archive",
cYV=adS?"Failed to archive":"Failed to cancel archive";


QMAjax.send(
"/cgi-bin/attachfolder?t=attachfolder.json",
{
method:"POST",
content:["r=",Math.random(),aN].join(""),
onload:function(aP,bz)
{
if(aP)
{
try
{
var as=eval(bz);
ag.showInfo(aTx);
eN&&eN.call(null,as);
}
catch(e)
{
ag.showError(cYV);
}
}
else
{
ag.showError("Operation failed, please try again later. ");
}
}
}
);
};




















function getAttachList(bz,eN,cj)
{
cj=cj||{};
var kh=arguments.callee,
aR=arguments,
bO=(typeof bz=="object"&&bz.length)?bz:[],
aYr=T("/cgi-bin/readmail?sid=$sid$&t=$t$&s=forward&from=attachfolder&disptype=html&ef=js$param$"),
sN=TE([
'$@$for($oAttach$)$@$',
'&mailattach=$mailid$|$attachid$|$attachname$|$fileextenal$|$filebyte$',
'$@$if($editname$)$@$',
'|$editname$',
'$@$endif$@$',
'$@$endfor$@$'
]).replace({
oAttach:bO
});

QMAjax.send(aYr.replace({
sid:getSid(),
t:"compose.json",
param:sN
}),
{
method:"GET",
onload:function(aP,dS,cR)
{
var kY=true;
if(aP)
{
try
{
var as=eval(["(",dS,")"].join("")),
ly=as.attach;
if(ly&&ly.length)
{
for(var i=0;i<ly.length;i++)
{
if(+ly[i]["byte"]==0)
{
kY=false;
break;
}
}
}
else
{
kY=false;
}
}
catch(e)
{
kY=false;
}
}

if(kY&&aP)
{
eN(true,as,cR);
}
else
{
eN(false,as,cR,dS);
}
}
},
cj.ajax
);




























};





function isEn()
{
return getLocale()=="en_US";
}

function isCh()
{
return getLocale()=="zh_CN";
}



function getLocale()
{
if(typeof gsLocale=="undefined")
{
return"zh_CN";
}
else
{
return gsLocale||"zh_CN";
}
}






function mailRecall(ee,aM,bpz)
{
var vB=bpz||{},
amz=extend(
{
r:Math.random(),
sid:getSid()
},
aM
);

if(vB.onbeforesend&&vB.onbeforesend()===false)
{
return;
}
QMAjax.send(
"/cgi-bin/send_status",
{
method:"POST",
content:!ee?
T('t=send_status.json&s=mailrecallv2&messageid=$msgid$&time=$time$&sid=$sid$&r=$r$&ef=js').replace(amz):
T('t=send_status.json&s=mailrecall_queryv2&taskid=$taskid$&messageid=$msgid$&sid=$sid$&r=$r$&ef=js').replace(amz),
onload:function(aP,bz)
{
if(aP)
{
try
{
var as=eval(["(",bz,")"].join(""));
if(+as.errcode>-1)
{
vB.onsuccess&&vB.onsuccess(as);
return;
}
else
{
showError(as.errmsg||(ee==1?"\u67E5\u8BE2\u90AE\u4EF6\u64A4\u56DE\u72B6\u6001\u5931\u8D25\uFF0C\u64A4\u56DE\u7ED3\u679C\u5C06\u7A0D\u540E\u901A\u77E5\u4F60":"\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"));
}
}
catch(e)
{
showError(as.errmsg||(ee==1?"\u67E5\u8BE2\u90AE\u4EF6\u64A4\u56DE\u72B6\u6001\u5931\u8D25\uFF0C\u64A4\u56DE\u7ED3\u679C\u5C06\u7A0D\u540E\u901A\u77E5\u4F60":"\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"));
}
vB.onerror&&vB.onerror(bz);
}
else
{
bz!="abort"
&&showError(as.errmsg||(ee==1?"\u67E5\u8BE2\u90AE\u4EF6\u64A4\u56DE\u72B6\u6001\u5931\u8D25\uFF0C\u64A4\u56DE\u7ED3\u679C\u5C06\u7A0D\u540E\u901A\u77E5\u4F60":"\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"));
vB.onerror&&vB.onerror(bz);
}
vB.oncomplete&&vB.oncomplete(aP,bz);
}
}
);
};





function backHome(bdA)
{
if(getLocale()=="zh_CN")
{
getMainWin().location.href=T('/cgi-bin/today?sid=$sid$&loc=backhome,,,$locid$')
.replace(
{
sid:getSid(),
locid:bdA||140
}
);
}
else
{
getMainWin().location.href=T('/cgi-bin/mail_list?sid=$sid$&folderid=1&page=0&nocheckframe=true').replace(
{
sid:getSid()
});
}
}






function resizeFolderList()
{
var axq=S("SysFolderList"),
aiT=S("ScrollFolder"),
sa=S("folder");
















if(axq&&aiT&&sa)
{
var alq=["auto","hidden"],
aDh=sa.clientHeight,
ayB=axq.offsetHeight,
IF=aDh-ayB,
ahr=IF<50?0:1;
sa.style.overflow=alq[ahr];
sa.style.overflowX=alq[1];
aiT.style.overflow=alq[1-ahr];
aiT.style.height=ahr
?(aDh-ayB)+"px":"auto";
}

AD.setAdFlag();
AD.adjustADDisp();
}






function setTopSender(cj)
{
var Eg=getTop().goUserInfo.get("DEF_MAIL_FROM")||'';
switch(cj&&cj.action)
{
case"setting4":
if(Eg!=cj.email)
{
setUserInfo("addr",cj.email);
setDefaultSender(cj.email);
changeStyle(cj.skin,cj.logo);
getTop().skin_path=cj.skin;
clearCache(["css",getPath("style"),"skin"]);
}


getTop().goUserInfo.reset();
break;
}
}




function bindAccount()
{
var YW=S("useraddr"),
amI=S("useraddrArrow"),
Cq=getTop().goUserInfo.get('RealBindAccount'),
ub={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:5px; overflow:hidden;"></div>'},
bn=[],
aBj=YW&&subAsiiStr(YW.innerHTML,20,"...");

if(!YW||!Cq)
{
return;
}

if(Cq.qq.length+Cq.biz.length)
{
bn.push(
{
sItemValue:'<a id="manage" href="javascript:;" style="float: right;">Manage</a><span class="ml">Associated Accounts</span>'
},
{
sId:'self',
bDisSelect:true,
sItemValue:T('<div class="unread_num"><span class="ico_unreadnum"></span>$unread$</div><input type="button" class="ft_upload_success" id="self"/><span style="overflow:hidden;margin-left:0" >$myemail$</span>').replace(extend({myemail:subAsiiStr(aBj,19,"...")},Cq.self))
}
);
E(['qq','biz'],function(bC,dB)
{
var cJ=Cq[bC].length;
if(cJ&&dB)
{
bn.push(ub);
}
for(var cJ=Cq[bC].length,i=0;i<cJ;i++)
{
var as=Cq[bC][i],

fa=subAsiiStr(as['email'],19,"...");














bn.push(
{
bp:bC,
sId:as.uin,
sItemValue:['<div class="unread_num"><span class="ico_unreadnum"></span>',as.unread,'</div>','<span style="overflow:hidden;">',fa,'</span>'].join('')
}
);
}
}
);
}
else
{

bn.push(
{
sItemValue:'Current Account: '
},
{
sItemValue:T('<strong class="ml black">$myemail$</strong>').replace({myemail:aBj})
},
ub,
{
sItemValue:'Alternate account for different uses.'
},
{
sItemValue:'They can be associated together.'
},
{
sItemValue:'Convenient to switch between them.'
},
{
nHeight:35,
sItemValue:'<a href="/cgi-bin/readtemplate?sid=$sid$&t=attrpwd_sec" target="mainFrame" id="bind_a" class="btn_gray">Associate</a>'
}
);
}
if(amI)
{
amI.style.visibility="visible";
amI.parentNode.onclick=function()
{
var jY=calcPos(YW.parentNode);
new QMMenu(
{
sId:"bindaccount",
sClassName:"bindacc qmpanel_shadow",

nX:jY[3],
nY:jY[2],
nWidth:235,
nMinWidth:160,
nItemHeight:25,
oItems:bn,
onitemclick:function(ay,bf)
{
if(bf.bp=='biz')
{
submitSwitchForm();
}
else
{
goUrlTopWin(T('/cgi-bin/login?vt=relate&uin=$uin$&old_sid=$sid$').replace({
uin:ay,
sid:getSid()
})
);
}
},
onload:function()
{
var ae=this,
ayn=ae.S("self"),
bM;
if(ayn)
{
bM=ayn.parentNode;
setClass(bM,bM.className+' settingtable');
}

addEvent(ae.S("manage"),'click',function(ah)
{

goUrlMainFrm(
T("/cgi-bin/setting4?fun=list&acc=1&sid=$sid$&go=bind").replace({sid:getSid()})
);
ae.close();
preventDefault(ah);
}
);

addEvent(ae.S("bind"),'click',function(ah)
{

goUrlMainFrm(
T("/cgi-bin/readtemplate?sid=$sid$&t=attrpwd_sec_alone&s=regemail&by=beiyong").replace({sid:getSid()})
);
ae.close();
preventDefault(ah);
}
);

addEvent(ae.S("bind_a"),'click',function(ah)
{

goUrlMainFrm(
T("/cgi-bin/readtemplate?sid=$sid$&t=attrpwd_sec").replace({sid:getSid()})
);
ae.close();
preventDefault(ah);
}
);

}
}
);
};
}
}

bindAccount.ctT=function()
{
var ae=arguments.callee;
if(ae.wO)
{
}
};




function initAddress(eN)
{
callBack.call(window,eN,[{sType:"loading",sMsg:""}]);

var ag=getTop(),
QU=ag.document,
bkW=getPath("js"),
gF=0,
mR=function()
{
if(++gF>=2)
{
ag.QMAddress.initAddress(eN);
}
};

loadJsFile("$js_path$qmlinkman131cca.js",true,QU,mR);
loadJsFile("$js_path$qmaddress131cca.js",true,QU,mR);






























}




function getPhotoCGI()
{
return[location.protocol,"//",location.host,"/cgi-bin/upload?sid=",getTop().getSid()]
.join("");
}





function aKr()
{
var kh=arguments.callee;
return(kh.KC||(kh.KC=
{"sid":1,"username":1,"foxacc":1,

"m3gmsid":1,"mcookie":1,"msid":1,"defaultf":1,
"qm_flag":1,"QFRIENDUNREADCNT":1,"RSSUNREADCNT":1,"rss_domain":1,"qqmail_activated":1,"qqmail_alias_default":1,
"qqmail_from":1,"wimrefreshrun":1,"new":1,"qm_sk":1,"qm_ssum":1,"qq2self_sid":1,"exstype":1,"lockurl":1,"new_mail_num":1})
);
}

function setUserCookie(aI,bC,jN,ei,iA,lI)
{







if(aKr()[aI]==1)
{
var lB=getCookie(aI),
fU=lB?lB.split("|"):[],
lq=getUin(),
cW=lq+"&"+bC,
kY=true;


for(var i=0;i<fU.length;i++)
{
if(fU[i].match(lq))
{
fU[i]=cW;
kY=false;
}
}

lB=fU.join("|");
kY&&(lB+=(lB==""?"":"|")+cW);
return setCookie(aI,lB,jN,ei,iA,lI);
}
else
return setCookie(aI,bC,jN,ei,iA,lI);

}





function getUserCookie(aI)
{




var gf=getCookie(aI);

if(aKr()[aI]!=1)
{
return gf;
}
else
{
var fU=gf?gf.split("|"):[],
lq=getUin();

for(var i=0;i<fU.length;i++)
{
if(fU[i].match(lq))
{
return((fU[i].split("&"))[1]||fU[i]);
}
}
return gf;
}

}




function deleteUserCookie(aI,ei,iA)
{
deleteCookie(aI,ei,iA);
}





function setUserCookieFlag(aI,dB,tT,adp)
{
return setCookieFlag(aI,dB,tT,adp)
}





function getUserCookieFlag(aI)
{
return getCookieFlag(aI);
}








function getReaderData(be)
{
if(window!=getTop())
{
getTop().getReaderData(be);
}
else
{
var od=arguments.callee;
removeSelf(od.jsObj);
od.jsObj=loadJsFile(be+"&r="+Math.random(),false,document);
}
}






function getReaderDataInterval(be,qF)
{
if(window!=getTop())
{
return getTop().getReaderDataInterval(be,qF);
}
else
{
var od=arguments.callee,
aN=(window.gsRssDomain||'')+"/cgi-bin/reader_data2?sid="+getSid()+"&t=rss_data.js";

if(od.nTimer)
{
clearInterval(od.nTimer);
}

function aaQ()
{
getReaderData(aN);
}

od.nTimer=setInterval(aaQ,qF
||(window.gnRssInterval*1000)||(10*60*1000));
aaQ();
}
}


function changeStatus(aVC)
{
var aMH=S("searchIcon");
aMH&&setClass(aMH,aVC?"ss_icon ss_fronticon ss_icon_loading":"ss_icon ss_fronticon ss_icon_search")
}





function doSearch()
{
QMPageInit.avY(
function()
{
var eA=S("frmSearch");
eA.sender.value=eA.subject.value;
eA.receiver.value=eA.subject.value;
eA.keyword.value=eA.subject.value;
eA.combinetype.value="or";
submitToActionFrm(eA);
}
);
return false;
}





function audioPlay(aj)
{
var ag=getTop();
if(!aj.container)
{
aj.container=S('mp3player_container',ag.getMainWin());
}
if(aj.global&&!aj.globalcontainer)
{
aj.globalcontainer=S('gplayer_container',ag);
if(!aj.globalcontainer)
{
aj.global=false;
}
}

if(!ag.QMPlayer)
{

loadJsFileToTop(["$js_path$qmplayer/player131cca.js"]);
}
waitFor(
function()
{
return!!ag.QMPlayer;
},
function(aP)
{
if(aP)
{



var aan="gplayer_kernel",
aDC=aj.id||("qmplayer_unique"+unikey());

function aPh()
{
var aJ=aan+"_dom";
if(ag.S(aJ))
{
return ag.S(aJ)
}
else
{
var aw=ag.document.createElement("div");
aw.id=aJ;
aw.style.cssText="position:absolute;left:-100000px;";
ag.document.body.appendChild(aw);
return aw;
}
};

if(!aj.msg)
{
aj.msg="QQMail player";
}
if(aj.container&&aj.container.getElementsByTagName("div").length==0)
{
aj.container.innerHTML="";
}

if(aj.global)
{
var amw=QMPlayer.initKernel({
sId:aan,
oContainer:aPh()
}),
aRw=QMPlayer.initSkin({
sId:aan,
sSkin:"Global",




oContainer:aj.globalcontainer
});

ag.QMPlayer.init({
oSkin:aRw,
oKernel:amw
});
}

ag.QMPlayer.delUIById(aDC);

ag.QMPlayer.init({
oSkin:QMPlayer.initSkin({
sId:aDC,
oContainer:aj.container,
sSkin:aj.skin||"Mini"
}),
oKernel:aj.global?amw.setInfo(aj):QMPlayer.initKernel({
sId:aDC,
oContainer:aj.container,
oInfo:aj
})
});
}
else if(aj.container)
{
aj.container.innerHTML="Failed to load player";
}
}
);
}




function audioStop()
{
var hg=getTop().QMPlayer;
hg&&hg.stop();
}




function audioPause()
{
var hg=getTop().QMPlayer;
hg&&hg.pause();
}














function setPlayer(aj)
{
var ag=getTop();

function azz(aj)
{
if(!ag.QMPlayer)
{
setTimeout(function()
{
azz(aj);
},200);
return false;
}

var aJ="qqmailMediaPlayer"+(aj.id||""),
ap=aj.win||window;

if(!ap||ap[aJ])
{
return false;
}

if(!aj.container
&&!(aj.container=S("mp3player_container",ap)))
{
return false;
}

return(ap[aJ]=new ag.QMPlayer()).setup(aj);
}

if(!ag.QMPlayer)
{

loadJsFile("$js_path$qmplayer131cca.js",true,ag.document);
}

return azz(aj);
}













function playUrl(lF)
{
var hg=(lF.win||window)["qqmailMediaPlayer"
+(lF.id||"")];

if(!hg)
{
setPlayer(lF);
}
else
{
hg.openUrl(lF.url,lF.dispInfo);
}
}









function stopUrl(lF)
{
if(!lF)
{
lF={};
}

try
{
(lF.win||window)["qqmailMediaPlayer"+(lF.id||"")].stop();
}
catch(aL)
{
}
}











function searchMusic(jC,kv,cd)
{
if(window!=getTop())
{
return getTop().searchMusic(jC,kv,cd);
}
jC=jC||"";
kv=kv||"";
var Fh=arguments.callee,
alG=[jC,kv].join("@");

var cHP=function(be)
{






if(be.indexOf("qqmusic.qq.com")==-1)
{
return be;
}
else
{
if(be.indexOf(".wma")!=-1)
{
var aV="stream",
sv=be.substring(be.indexOf(aV)+aV.length),
cRz=sv.substring(0,sv.indexOf(".")),
ckU=be.substring(0,be.indexOf(".")),
dfU=be.substring(be.indexOf(".")),
eY=dfU.split("/"),
fY=eY[0],
aDF=eY[1],
cNy=parseInt(cRz)+10;

var cJN=parseFloat(aDF.substring(0,aDF.indexOf("."))),
cXm=cJN-12000000+30000000;
return ckU.substring(0,ckU.indexOf(aV)+aV.length)+cNy+fY+"/"+cXm+".mp3";
}
else
{
return be;
}
}
}
Fh.fCallBack=function(jD)
{
var bO,
aN="",
Xd=[];

if(!jD.contentWindow.gMusicInfo||!(bO=jD.contentWindow.gMusicInfo.list))
{
return cd(Xd);
}







for(var i=0,aB=bO.length;i<aB;i++)
{
var bD={
song:bO[i].songname.replace(/<\/?strong>/gi,""),
singer:bO[i].singername.replace(/<\/?strong>/gi,"")
},
aaV=htmlDecode(bO[i].songurl).replace(/\|/g,"").split(";");



for(var j=0,ang=aaV.length;j<ang;j+=2)
{



if(aaV[j])

{

bD.url=cHP(aaV[j].replace(/^(FI|SI|AN|QQ)/,""));

Xd.push(bD);
break;
}
}
}
Fh.MU[alG]=Xd;
cd(Xd);
};

if(!jC&&!kv)
{
return cd([]);
}
if(!Fh.MU)
{
Fh.MU={};
}
if(Fh.MU[alG])
{
return cd(Fh.MU[alG]);
}

Fh.cez=createBlankIframe(getTop(),{
id:"getMusicUrlFromSoSo",
style:"display:none;",
virtual:false,
header:T(
[
'<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>',
'<script>',
'function searchJsonCallback(a)',
'{',
'window.gMusicInfo = a;',
'}',
'<\/script>',
'<script src="$domain$/fcgi-bin/fcg_search_xmldata.q?w=$song$%20$singer$&source=3&r=$rand$"><\/script>',


]
).replace(
{
domain:(location.protocol=="https:"?'https://qqshow.mail.qq.com':'http://cgi.music.soso.com'),
song:encodeURI(jC),

singer:encodeURI(kv),

rand:Math.random()
}
),
destroy:true,
onload:function(ak)
{
searchMusic.fCallBack(this);
}
});
}








function getMusicUrl(jC,kv,cd)
{
searchMusic(jC,kv,function(tG)
{
if(tG.length>0)
{
var j=0,
aOx=/\.mp3$/i;
for(var i=0;(gbIsMac||gbIsLinux)&&i<tG.length;i++)
{
if(aOx.test(tG[i].url))
{
j=i;
break;
}
}

cd(tG[j].song,tG[j].singer,tG[j].url,tG);
}
else
{
cd(jC,kv,"",tG);
}
},1);
}









function startWebpush(KQ)
{
var ag=getTop();

ag.loadCssFile("$css_path$webpushtip131f73.css",true);

ag.loadJsFile("$js_path$qmwebpushtip131f73.js",
true,
ag.document,
function()
{
ag.QMWebpushTip.open(KQ);
}
);

ag.loadJsFile("$js_path$qmwebpush131cca.js",true,ag.document);
}







function closeWebpush(KQ)
{
getTop().QMWebpushTip&&getTop().QMWebpushTip.close(KQ,true);
}








function ftSendStatic(fT,jz)
{
if(fT)
{
ossLog("realtime","all",T('stat=exskick&sid=$sid$&uin=$uin$&log=$code$')
.replace(
{
uin:jz||getTop().g_uin,
sid:getSid(),
code:fT
}
));
}
}






function twoDCodeImgUrl(bRd)
{
var cm=location.getParams(bRd);

return TE(
[
'/cgi-bin/generate_twodimcode?out=250&sid=$@$eval getSid()$@$',
'$@$if($mailid$)$@$',
'&filename=$@$eval escape($filename$)$@$&mailid=$mailid$',
'$@$else if($att$)$@$',
'&att=$att$&action=groupattach',
'$@$else if($k$)$@$',
'&k=$k$&code=$code$&action=bigattach',
'$@$endif$@$'
]).replace(cm);
}

function showTwoDCodeImgMenu(ak,ar,fN,bRd)
{
var ae=this,
aH=ak.document,
bP=calcPos(ar),
mS=bP[2]-40,
fk=0,
kS=bodyScroll(aH,"scrollTop"),
wn=bodyScroll(aH,"clientHeight");

if((fk=mS+320-kS-wn)>0)
{
mS-=(fk+10);
}
new QMMenu(
{
oEmbedWin:ak,
sId:"scanImg",
nArrowPos:bP[0]-mS-5,
bAutoClose:false,
sWidthDetect:"float",
nArrowDirection:"Left",
nWidth:"auto",
nX:bP[3]+25,
nY:mS,
onshow:function()
{
if(gnIEVer==6)
{
this.S("twodcode").src=this.S("twodcode").src;
}
},
oItems:[
{
bDisSelect:true,
sStyle:"padding:0;",
nHeight:"auto",
sItemValue:T([
'<div style="width:300px;height:310px;padding-top:10px;">',
'<div style="text-align:center;">',
'<img id="twodcode" style="width:250px;height:250px;" src="$src$"/>',
'</div>',
'<div style="margin-top:-5px;">',

'<p style="margin:0;text-align:center;padding:5px 0;">Scan and download attachment to your phone.</p>',
'<p style="margin:0;text-align:center;padding:5px 0;">(QR code is valid for 5 minutes)</p>',
'</div>',
'</div>'
]).replace(
{
filename:fN,
src:twoDCodeImgUrl(bRd)
})
}]
});
}






function beginStatTime(ak)
{
var XS=parseInt(ak.location.hash.split("stattime=").pop());

if(!isNaN(XS)&&XS.toString().length==13&&XS>(getTop().gnStatTimeStamp||0))
{
ak.gnBeginTime=getTop().gnStatTimeStamp=XS;
ak.gnStatTimeStart=now();
}
}

















function endStatTime(ak,dL)
{
var Ey=ak.gnBeginTime,
gs=ak.gnStatTimeStart,
fq=now();

if(!isNaN(gs)&&!isNaN(Ey))
{
addEvent(ak,"load",function()
{
var ahx=now();

ossLog("delay","sample",T(
[
'stat=cgipagespeed&type=$type$&t1=$t1$&t2=$t2$&t3=$t3$',
'&rcgi=$appname$&rt=$t$&rs=$s$&allt=$allt$&flowid=$wm_flowid$'
]
).replace(extend(dL,
{
t1:gs-Ey,
t2:fq-gs,
t3:ahx-fq,
allt:[Ey,gs,fq,ahx].join("|")
}
)));
debug([gs-Ey,fq-gs,ahx-fq],994919736);
}
);
}
}
















function ossLog()
{
var aBw=getTop().ossLog;
return aBw.agl.apply(aBw,arguments);
}

ossLog.agl=function(Te,vF,ou,atY)
{
var ae=this,
Td=Te||"realtime",
DO=ae.TP(ou),
jr=ae.jr||(ae.jr=[]),
fB=typeof vF=="number"?vF:{all:1}[vF||"all"]||0.1;




if(Td=="realtime")
{
ae.Ev(fB)&&ae.ahl(DO);
}

else
{

ae.Ev(fB)
&&jr.push(["delayurl","=",encodeURIComponent(DO)].join(""));

jr.length>=1000?ae.ahl()

:(!ae.dA&&jr.length>0&&(ae.dA=setTimeout(ae.ahl,5*1000)));
}
};

ossLog.ahl=function(BI)
{
var ae=ossLog,
jr=ae.jr;
if(BI||jr.length>0)
{
QMAjax.send("/cgi-bin/getinvestigate",
{
method:"POST",
timeout:500,
content:T('sid=$sid$&$rl$&$ls$').replace(
{
sid:getSid(),
rl:BI,
ls:jr.join("&")
}
)
}
);
jr.length=0;
ae.dA&&clearTimeout(ae.dA);
ae.dA=null;
}
};

ossLog.Ev=function(hB)
{
return(this.wG||(this.wG=now()))%100<100*hB;
};

ossLog.TP=function(ou)
{
var hw=[];
typeof ou=="string"
?hw.push("&",ou)
:E(ou,function(mA,bh)
{
hw.push("&",bh,"=",encodeURIComponent(mA));
}
);
return hw.shift()&&hw.join("");
};










function isdLog(bvY,bh,mA)
{
var nE=T([
window.location.protocol,
"//isdspeed.qq.com/cgi-bin/r.cgi?flag1=6000&flag2=101&flag3=$flag$&$key$=$value$&r=$r$"
]),
dJ=new Image();

setTimeout(function()
{
dJ.src=nE.replace({
flag:bvY,
key:bh,
value:mA||"1",
r:Math.random()
});
}
);
}




var AD=
{
bqZ:"",
init:function(ak)
{
var ae=this;
ak["AD_callback"]=function(ao)
{
try
{
if(ae.bqZ!="timeout")
{
ae.bqZ="ok";
for(var i=0;i<ao.length;i++)
{
var bk=ao[i]&&ao[i][0];
if(bk)
{
var azD=bk.loc,
btL=bk.oid,
bsc=bk.fodder,cmy=T("stat=log_ad_show&loc=$loc$&oid=$oid$&hit=$hit$&resource_url=$resource_url$&link_to=$link_to$&loc=ad_today,$loc$,$oid$,$hit$");
if(btL=="1"||btL=="100")
{
ae.ciy(ak,azD);
if(getUin()%100==55||getUin()%100==77)
{
ossLog("realtime","all",cmy.replace(
{
loc:azD,
oid:btL,
hit:0
}
));
}
}
else if(bsc[0]&&azD)
{
if(getUin()%100==55||getUin()%100==77)
{
ossLog("realtime","all",cmy.replace(
{
loc:azD,
oid:btL,
hit:1,
link_to:encodeURIComponent(bsc[0].link_to),
resource_url:encodeURIComponent(bsc[0].resource_url)
}
));
}
ae.dfZ(ak,extend(bsc[0],{cid:bk.cid,loc:bk.loc,oid:bk.oid}),azD)
}
else
{
debug("No AD loc or DATA")
}
}
else
{
debug("no AD")
}
}
}
}
catch(e)
{
}

};

















this.cUO(ak);
this.dio(ak);
},
postADlog:function(cGf,nL,be,ah)
{
if(cGf=="flash")
{
var de=getEventTarget(ah);
if(de.tagName=="DIV")
{
ossLog("realtime","all",T('stat=log_ad_click&pos=$pos$')
.replace(
{
pos:nL
}
));
be&&window.open(be);
}
}
else
{
ossLog("realtime","all",T('stat=log_ad_click&pos=$pos$')
.replace(
{
pos:nL
}
));
}
},

setAdFlag:function()
{
setCookieFlag("CCSHOW",5,getTop().document.body.clientWidth<1152?0:1);
},
adjustADDisp:function()
{
var bN=getTop().getMainWin(),
bED=S("qqmail_AD_container",bN),
aS=S("qqmail_mailcontainer",bN);
rdVer("BaseVer",1);
if(this.cch()=="0"&&isShow(bED))
{
bED&&(show(bED,0));
}













},
cch:function()
{
return getCookieFlag("CCSHOW")[5];
},
cMk:function(be)
{
var sv=strReplace(be,"http://",""),
aUd=sv.indexOf("/"),
fY=sv.substr(0,aUd),
cXR="https://stockweb.mail.qq.com";
return strReplace(be,"http://"+fY,cXR)+"?pdomain="+fY;
},
cGZ:function(ee)
{























var	cUU=TE([
'<span style="background:url($pingurl$);"></span>',
'<a href="$link_to$" target="_blank"  onclick="getTop().AD.postADlog(\'img\',\'$pos$\')" ',
'style="white-space: nowrap; height:80px; overflow: hidden; display: block; margin-bottom:3px; background:url($resource_url$) no-repeat;"></a>']),
cOD=TE([
'<a href="$link_to$" target="_blank" style="background:url($pingurl$);" onclick="getTop().AD.postADlog(\'img\',\'$pos$\')">',
'<img src="$resource_url$" width="$width$" height="$height$">',
'</a>',
'<style>',
'.ad_btn_close{position:absolute; top:5px; right:5px; line-height:0; text-decoration:none; background:#aaa; width:12px; height:12px;  border:1px solid #999;}',
'.ad_btn_close:hover{border-color:#888;background-color:#999;}',
'</style>',
'$@$if($bCloseBtn$)$@$',
' <a class="ad_btn_close" onclick="closeAD(\'$pos$\')"><img src="$img_path$ico_closetip.gif"></a>',
'$@$endif$@$',
]);




if(ee==1)
{
return cUU;
}
else if(ee==2)
{
return cOD;
}
},
dfZ:function(ak,az,FW,eN)
{
try
{
var aw=this.bPA(ak,FW),
bpJ=location.protocol=="https:",
dbn=bpJ?T("https://stockweb.mail.qq.com/p?oid=$oid$&cid=$cid$&loc=$loc$&pdomain=p.l.qq.com")
:T("http://p.l.qq.com/p?oid=$oid$&cid=$cid$&loc=$loc$"),
cWD=attr(aw,"bgimg")=="1"?true:false,
cRa=attr(aw,"closebtn")=="1"?true:false,
daW=attr(aw,"pos");
if(aw&&az.resource_url)
{
var cpO=aw.parentNode;
bpJ&&(az.resource_url=this.cMk(az.resource_url));






var cNa=this.cGZ(cWD?1:2);


show(cpO,1);
setHTML(cpO,cNa.replace(extend(az,
{
img_path:getPath("image"),
bIsIE:gbIsIE,
bCloseBtn:cRa,
pingurl:dbn.replace(az),
pos:daW
})));
var ahQ=S("todaybarTitle",ak);
if(ahQ)
{
setHTML(ahQ,"Business information");
show(ahQ,1)
}
}
else
{
debug("no loc dom")
}
}
catch(e)
{

}
},
bPA:function(ak,FW)
{
var cF=null;
E(GelTags("qqmailad",ak.document),function(an)
{
cFK=attr(an,"loc")||"";
if(cFK==FW)
{
cF=an;
}
});
return cF;
},
cUO:function(ak,afv)
{
var bFZ=[],alw="",ae=this,
bpJ=location.protocol=="https:",
dcn=bpJ?T("https://stockweb.mail.qq.com/lview?c=www&loc=$loc$&callback=AD_callback&rot=1&pdomain=l.qq.com"):T("http://l.qq.com/lview?c=www&loc=$loc$&callback=AD_callback&rot=1");

E(GelTags("qqmailad",ak.document),function(an)
{
alw=attr(an,"loc")||"";
if(afv)
{
attr(an,"disp")=="0"&&alw&&bFZ.push(alw)&&attr(an,"disp","1");
}
else
{
attr(an,"disp")!="0"&&alw&&bFZ.push(alw);
}
});

alw=bFZ.join(",");


if(alw)
{
setTimeout(function()
{
try
{
var aw=ae.bPA(ak,alw),
ahQ=S("todaybarTitle",ak);
if(aw)
{
var aHF=aw&&attr(aw,"ADDefault")||"";
if(aHF!=""&&S(aHF,ak))
{
if(!isShow(S(aHF,ak)))
{
show(S(aHF,ak),1);
}
}
}
if(ahQ&&!isShow(ahQ))
{
show(ahQ,1)
}
}
catch(e)
{
}

},2.5*1000);

if(!(this.cch()=="0"&&alw=="qqmail_send_skyscraper"))
{
var dPf=loadJsFile(dcn.replace({loc:alw}),false,ak.document);

setTimeout(function()
{
if(ae.bqZ!="ok")
{
ae.bqZ="timeout";
ae.ciy(ak,alw);
ossLog("realtime","all","loc=ad_timeout,,,");
}
},2*1000);
}

}

},
ciy:function(ak,FW)
{
try
{
var aw=this.bPA(ak,FW),
aHF=aw&&attr(aw,"ADDefault")||"",
ahQ=S("todaybarTitle",ak);
if(aHF!="")
{
aw&&aw.parentNode&&show(aw.parentNode,0);
show(S(aHF,ak),1);
}
if(ahQ&&!isShow(ahQ))
{
show(ahQ,1)
}
}
catch(e)
{

}
},
dio:function(ak)
{
var csm=S("todaybarnormallink",ak);
if(csm)
{
csm.onclick=function()
{
ossLog("realtime","all","stat=log_todaybar_click");
}
}
}
};


function initAD(ak)
{
AD.init(ak);
}






function all_js(){}

