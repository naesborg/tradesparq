(function(ao,aR)
{





var afU={




getInst:function()
{
return afU.fqr;
},




callBack:function(aC,cd,mD)
{
if(ao.QMWin&&QMWin.call)
{
QMWin.call(aC||this,cd,mD);
}
else
{
callBack.call(aC||this,cd,mD);
}
},



uin:function()
{
if(ao.QMWin&&QMWin.uin)
{
return QMWin.uin();
}
else
{
return getUin();
}
},



sid:function()
{
if(ao.QMWin&&QMWin.sid)
{
return QMWin.sid();
}
else
{
return getSid();
}
},


















brz:function(aj)
{
var az=ao,
gz=aj.vData,
bG=["r=",Math.random()],
eQj="GET";
aj.sType=aj.sType||eQj;
aj.nTimeout=aj.nTimeout||15000;
if(typeof(gz)!="string")
{
for(var k in gz)
{
if(Object.prototype.toString.call(gz[k])=="[object Array]")
{
for(var i=0,len=gz[k].length;i<len;i++)
{
bG.push('&',k,'=',encodeURIComponent(gz[k][i]));
}
}
else
{
bG.push('&',k,'=',encodeURIComponent(gz[k]));
}
}
}
else
{
bG.push(gz);
}

if(az.QMWin&&QMWin.ajax)
{

QMWin.ajax({
sDataType:"json",
sUrl:aj.sUrl,
vData:bG.join(''),
sType:aj.sType,
nTimeout:aj.nTimeout,
ongetxhr:function()
{
return aj.oAjaxInst||QMWin.ajaxSetting().ongetxhr();
},
onerror:function(cN,gS,gR)
{
afU.callBack(null,aj.oncomplete,[false,gS,cN]);
},
onsuccess:function(dB,gS,cN)
{
afU.callBack(null,aj.oncomplete,[true,dB,cN]);
}
});
}
else
{

var bi=aj.sUrl,
dMe=aj.sType==eQj;
if(dMe)
{
bG.unshift(bi,bi.indexOf('?')<0?'?':'&');
}
QMAjax.send(
dMe?bG.join(''):bi,
{
method:aj.sType,
timeout:aj.nTimeout,
content:dMe?'':bG.join(''),
onload:function(bz,bU,fj)
{
bU=="abort"&&(bU="timeout");
afU.callBack(null,aj.oncomplete,[bz,bU,fj]);
}
},
new QMAjax("","",0,aj.oAjaxInst)
);
}
},















dAF:function(aj)
{
var fMf="afterBegin",
az=ao;
if(az.QMWin&&QMWin.insertIframe)
{
QMWin.insertIframe(aj,fMf);
}
else
{
createIframe(az,aj.src,aj);
}
}
};












afU.fsu=
{
fUi:"/cgi-bin/getwpkey",
fGn:5,
flY:60,
fBl:300000,

dDq:0,





djO:false,
tQ:"",

dMI:[],








getKey:function(cj,XY)
{
var ae=this;

if(ae.tQ&&!XY)
{
return ae.tQ;
}
ae.dDq=0;
ae.dMI.push(cj);
ae.eRJ();
return null;
},






expire:function()
{
var ae=this;
ae.tQ="";
return ae;
},






dGP:null,
dKF:0,
eRJ:function()
{
var ae=this;
afU.debug(["_oSelf._getKeyDelayFromCgi",ae.dKF,!ae.dGP,!ae.djO]);

if(!ae.dGP)
{
if(ae.dKF&&(+new Date)-ae.dKF<60000)
{
ae.dGP=setTimeout(function()
{
ae.dGP=null;
ae.faf();
},
ae.fBl
);
}
else
{
ae.faf();
}
}
return ae;
},





faf:function()
{
var ae=this;
afU.debug(["_oSelf._mbGettingKey begin",ae.djO,ae.dDq]);
if(ae.djO||++ae.dDq>ae.fGn)
{
return;
}
ae.djO=true;
ae.dKF=+(new Date);

afU.brz({
sUrl:ae.fUi,
vData:{
resp_charset:"UTF8",
ef:"js",
sid:afU.sid()
},
oncomplete:function(bz,bU,fj)
{
ae.djO=false;

var DX=ae.flY,
eO;

if(bz)
{
try
{
eO=eval("("+bU+")");
}
catch(e)
{
afU.debug(["_getKeyFromCgi eval\u9519\u8BEF",e.message]);
}
if(eO&&eO.k)
{
ae.tQ=eO.k;

for(var cv=ae.dMI,i=0,aF=cv.length;i<aF;i++)
{
if(ae.tQ)
{
afU.callBack(ae,cv[i],[ae.tQ]);
}
}
ae.dMI=[];
ae.dDq=0;
return;
}
}


if(eO)
{
DX=eO.errcode=="-2"?-1:(parseInt(eO.errmsg)||DX);
}
afU.debug(["_getKeyFromCgi\u8FD4\u56DE\u9519\u8BEF",eO&&eO.errcode,DX]);
if(DX>=0)
{
setTimeout(function()
{
ae.eRJ();
},
DX*1000
);
}
}
});
}
};


















afU.fqr={
eDN:null,
dQs:false,
cTC:null,
dgD:false,

tQ:null,
deX:"0",
bba:0,

byz:[],

eUA:30,
fmn:location.protocol+"//wp.mail.qq.com/poll",

fBf:location.protocol+"//wp.mail.qq.com/ajax_proxy.html?qq.com&v=110701",







open:function(adX)
{
var ae=this;
ae.bba|=adX;
afU.debug(["\u5F00\u901A\u4E86",ae.bba,adX]);



return ae.dHS();
},







close:function(adX)
{
var ae=this;
ae.bba&=~adX;
afU.debug(["\u5173\u95ED",ae.bba,adX]);



return ae;
},









addEvent:function(adX,eke,fhT)
{
var ae=this;
afU.debug(["\u52A0\u8F7D\u4E8B\u4EF6",adX]);



if(adX&&eke)
{
for(var i=0,awS=ae.byz,aF=awS.length;i<aF;i++)
{
if(awS[i][1]==eke)
{
awS[i][0]|=adX;
break;
}
}
i>=aF&&awS.push([adX,eke]);
fhT&&ae.open(adX);
}
return ae;
},







delEvent:function(eGR)
{
var ae=this;



if(eGR)
{
for(var i=0,awS=ae.byz,aF=awS.length;i<aF;i++)
{
if(awS[i][1]==eGR)
{


awS.splice(i,1);

}
}
}
return ae;
},







aNJ:function(aQO,an)
{
var ae=this;
afU.debug(["_fireEvent service",ae.bba,aQO,an]);
for(var i=0,awS=ae.byz,aF=awS.length;i<aF;i++)
{
afU.debug(["_fireEvent loop",(ae.bba&aQO&awS[i][0]),awS[i][0]]);
(ae.bba&aQO&awS[i][0])&&afU.callBack(ae,awS[i][1],[aQO,an]);
}















return ae;
},





eUo:function()
{
var ae=this,
fDd=afU.fsu,
bK=fDd.getKey(function(bH)
{
ae.tQ=bH;
ae.dHS();
},
true
);
ae.tQ=bK;
return ae;
},







fRA:function(gn)
{
var ae=this,
hU={},
erT=0;
for(var i=0,aF=gn.length;i<aF;i++)
{
var aD=gn[i];
erT<aD.t&&(erT=aD.t);
(hU[aD.b]=hU[aD.b]||[]).push(aD.c);
}
ae.deX=erT;

for(var k in hU)
{
if(!ae.aNJ)
{
afU.debug(["_analysePoll_noevent"]);
}
else
{
afU.debug([k]);
}

ae.aNJ(k,hU[k]);
}
return ae;
},





fMk:function()
{
var ae=this;
if(ae.cTC&&ae.dgD)
{
ae.cTC.abort();
ae.dgD=false;
}
return ae;
},





dHS:function()
{
afU.debug(["poll\u8C03\u7528"]);
var ae=this;
if(!ae.bba||ae.dgD)
{
return ae;
}
if(!ae.cTC)
{

return ae.dGV();
}
if(!ae.tQ)
{

return ae.eUo();
}

ae.fMk().dgD=true;
afU.debug(["poll\u8BF7\u6C42",ae.deX]);

afU.brz({
sUrl:ae.fmn,
vData:{
u:afU.uin(),
s:ae.bba,
k:ae.tQ,
t:ae.deX,
i:ae.eUA,
r:Math.random()
},
nTimeout:(ae.eUA+3)*1000,
oAjaxInst:ae.cTC,
oncomplete:function(bz,bU,fj)
{
ae.dgD=false;

var hw=null,
DX=10;
if(bz)
{
try
{
hw=eval(bU);
}
catch(e)
{
afU.debug(["poll\u8FD4\u56DEjson\u6709\u8BEF"]);
}
}

if(!bz&&bU=="timeout")
{
afU.debug([bU]);

DX=0;
}
else if(hw)
{
afU.debug(["poll\u7684json",hw.e,hw.d]);
if(!hw.e)
{


ae.fRA(hw);
DX=0;
}
else if(hw.e==-100)
{

return ae.eUo();
}
else if(!isNaN(hw.d))
{

DX=parseInt(hw.d);
}
}
afU.debug(["_nDelay",DX]);
if(DX>=0)
{
setTimeout(function()
{
ae.dHS();
},
DX*1000
);
}
}
});
return ae;
},





dGV:function()
{

var ae=this;
if(!(ae.eDN&&ae.dQs))
{
ae.dQs=true;
afU.dAF({
id:"webpush"+(+new Date),
style:"position:absolute;z-index:-1;width:1px;height:1px;left:-5;top:-5px;",
src:ae.fBf,
onload:function()
{
ae.dQs=false;
var bSw,
aEr;
try
{
bSw=this.contentWindow;
aEr=!!bSw.xmlHttp;
}
catch(bj)
{
afU.debug([bj.message]);
aEr=0;
}

if(aEr)
{
ae.eDN=bSw;
ae.cTC=bSw.xmlHttp();
ae.dHS();
}
afU.debug(["createiframe",aEr]);
}
});
}
return ae;
}
};


ao.QMWebpush=afU;




eZq=[];
afU.debug=function(dB)
{
if(ao.debug)
{

}
eZq.push([(new Date).toLocaleString(),' : ',dB.join?dB.join(','):dB].join(''));
};
afU.output=function()
{
var de=document.createElement("div");
de.style.cssText="position:absolute;width:300px;height:400px;z-index:999;background:white;";
de.innerHTML=["<a href='javascript:void(0);' style='display:block;text-align:center;' onclick='document.body.removeChild(this.parentNode)'>\u9690\u85CF</a><div style='width:100%;height:100%'><textarea style='width:100%;height:100%'>",eZq.join('\n'),"</textarea></div>"].join('');
document.body.appendChild(de);
};
afU.debug(["QMWin",ao.QMWin]);

})(window)
