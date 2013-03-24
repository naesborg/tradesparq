var QMAddrParser=getTop().QMAddrParser;




var QMAddrDomainCheck=
{

ePH:";qzone.qq.com;qq.com;vip.qq.com;",

dzT:{},
eYe:{},

bnM:null,







cgZ:function(an)
{
var ae=this,
Mx=ae.dzT;
if(an.checkdomain)
{
for(var aFd=an.checkdomain,aN=aFd.length-1;aN>=0;aN--)
{
if(aFd[aN])
{
var hv=aFd[aN][0];
Mx[hv]=Mx[hv]||{};
Mx[hv].tips=aFd[aN][1].split(';');
}
}
}
if(an.domainlimit)
{
for(var aue=an.domainlimit,aN=aue.length-1;aN>=0;aN--)
{
if(aue[aN])
{
var hv=aue[aN][0];
Mx[hv]=Mx[hv]||{};


Mx[hv].attlmt=parseInt(aue[aN][1]);


Mx[hv].dmn=aue[aN][2]=='1';
}
}
}





















if(an.prohibit)
{
ae.eYe[an.prohibit[0]]=an.prohibit[1];
}
},












createChecker:function(diY,eo,aj)
{
return new this.dGS(diY,eo,aj||{});
},






permit:function(PG)
{
return!this.eYe[PG.sort().join(';')];
},


bsz:function(xb)
{
var ae=this,
cJ=[];
for(var aN=xb.length-1;aN>=0;aN--)
{
var aD=ae.dzT[xb[aN]];
aD&&aD.tips&&cJ.push({sDom:xb[aN],oTips:aD.tips});
}
return cJ;
},





getAttachLimit:function(xb)
{
var ae=this,
hv,
aUR=50*1024*1024,
afb=[],
aUU=[];

for(var aN=xb.length-1;aN>=0;aN--)
{
var aD=ae.dzT[xb[aN]];
if(aD)
{
if(!aD.attlmt)
{
afb.push(xb[aN]);
}
else if(aD.attlmt<aUR)
{
hv=xb[aN];
aUR=aD.attlmt;
}
}
else if(ae.ePH.indexOf(';'+xb[aN]+';')<0)
{
aUU.push(xb[aN]);
}
}
return{
sDom:hv,
nLim:(aUU.length==xb.length?-1:aUR),
oUnknown:afb,
oNoCheck:aUU
};
},





getExDomain:function(xb)
{
var ae=this,
aL=[];

for(var aN=xb.length-1;aN>=0;aN--)
{
var aD=ae.dzT[xb[aN]];
if(aD&&!aD.dmn)
{
aL.push(xb[aN]);
}
}
return aL;
},





ash:function(aGX)
{
var ae=this,
XA={},
bpS={},
Sc=[],
akG=[],
fGo=ae.ePH;

getTop().E(QMAddrParser.parseAddr(aGX),function(SP)
{
SP.valid&&(XA[SP.addr.split("@").pop()]=1)&&(bpS[SP.addr]=1);
}
);
for(var hv in XA)
{
if(fGo.indexOf(";"+hv+";")==-1)
{
akG.push(hv);
}
}
for(var fe in bpS)
{
Sc.push(fe);
}
return[akG,Sc];
},










check:function(aGX,eo,cd)
{

var ae=this,
ah=getTop(),
io=ae.ash(aGX),
akG=[],
bph="";

for(var Jz=io[0],cZ=Jz.length,aN=0;aN<cZ;aN++)
{
if(!ae.dzT[Jz[aN]])
{
akG.push(Jz[aN]);
}
}

if(eo&4&&io[1].length>5)
{
bph=io[1].sort().join(";");
}
else
{
eo&=59;
}

if(akG.length==0)
{
eo&=60;
}






if(eo)
{
if(ae.bnM)
{
clearTimeout(ae.bnM);
}

ae.bnM=setTimeout(function()
{
ah.QMAjax.send("/cgi-bin/addr_domain_check",{

method:"POST",
content:
ah.T('sid=$sid$&addrs=$addrs$&addrlist=$list$&acttype=$type$&t=addr_domain_check&addrfilt=$addrfilt$').replace(
{
sid:ah.getSid(),
type:eo&3,
list:encodeURI(bph),
addrfilt:encodeURI(aGX),
addrs:encodeURI("a@"+akG.join(";a@"))
}
),
onload:function(bz,bU)
{
if(bz&&bU.indexOf('success:true')>0)
{
ae.cgZ(eval(bU));
ah.callBack.call(ae,cd,[{
bCksp:ae.permit(io[1]),
oCklm:ae.getAttachLimit(io[0]),
oCkdm:ae.bsz(io[0])
}]);
}
}
});
},200);
}
else
{

ah.callBack.call(ae,cd,[{
bCksp:ae.permit(io[1]),
oCklm:ae.getAttachLimit(io[0]),
oCkdm:ae.bsz(io[0])
}]);
}
return ae;
}

};

QMAddrDomainCheck.dGS=function(diY,eo,aj)
{
var ah=getTop(),
ae=this,
aXN=[];
ae.bTY=QMAddrDomainCheck.dGS.ci;
ae.Qz=eo;


var Fi=diY.join?diY:[diY];
ah.E(Fi,function(nW,fm)
{
var be,
aXh=nW.getContainer
?nW.getContainer()
:nW;
aXh.parentNode.insertBefore(
be=aXh.ownerDocument.createElement("div"),
aXh.nextSibling);
ah.show(be,false);
ah.addEvent(be,"click",function(ag)
{
return ae.bZD(ag,fm);
}
);
aXN.push(be);
}
);
ae.boS=new Array(Fi.length);
ae.asu=Fi;
ae.bWW=aXN;

if(aj.oPermit)
{
aXh=aj.oPermit;



aXh.appendChild(be=aXh.ownerDocument.createElement("div"));
ah.show(ae.chF=be,false);
}
};

QMAddrDomainCheck.dGS.prototype=
{



check:function()
{
var ae=this,
iC=ae.Qz,
oz,
Fi=ae.asu,
lE=[];
for(var aN=Fi.length-1;aN>=0;aN--)
{
oz=Fi[aN];
if(!(oz.isDisabled&&oz.isDisabled()))
{
lE.push(oz.get?oz.get(';'):oz.value);
}
}


QMAddrDomainCheck.check(lE.join(';'),iC,function(bd)
{
if(iC&4)
{
ae.fY(ae.chF,bd.bCksp?[]:[1],4);
}
if(iC&1)
{
ae.bsg();
}
}
);
},


TK:function()
{

var oz,
Fi=this.asu,
Jz=[];
for(var aN=Fi.length-1;aN>=0;aN--)
{
oz=Fi[aN];
if(!(oz.isDisabled&&oz.isDisabled()))
{
var hw=oz.get('json');
for(var iV=hw.length-1;iV>=0;iV--)
{
Jz.push(hw[iV].addr.replace(/.+@/,''));
}
}
}
return Jz;
},





getAttachLimit:function()
{
return QMAddrDomainCheck.getAttachLimit(this.TK());
},

getExDomain:function()
{
return QMAddrDomainCheck.getExDomain(this.TK());
},




bsg:function()
{
var ae=this,
Fi=ae.asu,
be=ae.bWW;
getTop().E(ae.asu,function(nW,fm)
{
if(nW.isDisabled&&nW.isDisabled())
{
return;
}
var LK=nW.get?nW.get(';'):nW.value;
QMAddrDomainCheck.check(LK,1,function(bd){
var aTI=bd.oCkdm;
ae.boS[fm]=aTI;
nW.setDomainError
&&nW.setDomainError(aTI);
ae.fY(be[fm],aTI,1);
});
}
);
},

fY:function(gO,brN,eo)
{
if(!gO)
{
return;
}
var ae=this,
ah=getTop(),
btc=brN.length,
doI=ah.qmAnimation,
brb=doI.getActionType(gO)=="expand"&&gO.style.display=='';
if(btc>0)
{
var hw={errors:[],type:eo},
cbF=hw.errors;
if(eo&1)
{
for(var i=0;i<btc;i++)
{
var asg=brN[i],
boR={
domain:asg.sDom,
items:[]
};
ah.E(asg.oTips,function(TN)
{
boR.items.push({data:TN});
}
);
cbF.push(boR);
}
}
gO.innerHTML=ae.bTY.replace(hw);
if(!brb)
{
doI.expand(gO,{type:"break"});
}
if(eo&4)
{
getTop().requestShowTip("sendtimepadding","75",window);
}
}
else if(brb)
{
doI.fold(gO,{type:"break"});
}
},

bZD:function(ag,fm)
{
var ah=getTop(),
ae=this,
be=ae.bWW[fm],
cG=ae.asu[fm],
aEd=ae.boS[fm],
aK=ah.getEventTarget(ag);
if(aK.name)
{
var aTj=aK.parentNode.getAttribute("domain"),
aXA=aK.name;

if(cG.updateDomain)
{
cG.updateDomain(aTj,aXA);
}
else
{
var aL=[],
cR=ah.TE('$@$if($nick$)$@$"$nick$"<$@$endif$@$$addr$$@$if($nick$)$@$>$@$endif$@$');
ah.E(QMAddrParser.parseAddr(cG.value),function(SP)
{
var bun=SP.addr.split("@");
if(bun.pop()==aTj)
{
SP.addr=[bun[0],aXA].join("@");
}
SP.nick=getTop().encodeNick(SP.nick);
aL.push(cR.replace(SP));
}
);
cG.value=aL.join(";");
}

for(var i=0,aF=aEd.length;i<aF;i++)
{
if(aEd[i].sDom==aTj)
{
aEd.splice(i,1);
break;
}
}
ae.fY(be,aEd,1);
}
}

};

QMAddrDomainCheck.dGS.ci=getTop().TE(
[
'<div style="padding:3px 0;line-height: 18px; margin: 4px 0 0 0;" class="domainCheckDisp ">',
'$@$if($type$&4)$@$',
'<div class="txt_red">Too many recipients. Please edit and try again. </div>',
'$@$else$@$',
'<div class="graytext">There are somethig wrong with the address, please edit and try again:</div>',
'$@$for($errors$)$@$',
'<div style="margin-top: 4px;" domain="$domain$">',

'$domain$',
'$@$for($items$)$@$',
'$@$if($_idx_$!=0)$@$',
',&nbsp;',
'$@$else if($data$)$@$',
' \u2192 ',
'$@$endif$@$',
'<a name="$data$">$data$</a>',
'$@$endfor$@$',
'</div>',
'$@$endfor$@$',
'$@$endif$@$',
'</div>'
]);



















































function QMAddrInput(aj)
{
this.constructor=arguments.callee;
this.Uz(aj)
.CZ(aj.tabIndex,aj.accessKey)
.dgy("setup",aj)
.sH()
.bBv();
};

QMAddrInput.get=function(aJ,ao)
{
var cr=ao[this.hV.adZ];
return cr&&cr[aJ];
};

QMAddrInput.prototype=
{

add:function(er,aVZ,cQs)
{
var ae=this,
lE=QMAddrParser.parseAddr(er),
aF=lE.length;

getTop().E(lE,function(gE)
{
var fAo=cQs||ae.fnw(gE.nick);
ae.bYP(gE.addr,gE.nick,gE.valid,fAo);
}
);

aF&&getTop().show(ae.dEJ,false);

if(aF&&!aVZ)
{
getTop().callBack.call(this,this.SV.jV,["add"]);
}

return lE;
},

clear:function()
{
var ae=this,
hx=ae.mE,
aF=hx.length;

while(hx.length!=0)
{
ae.Qk(hx[0]);
}

if(aF)
{
getTop().callBack.call(this,this.SV.jV,["del"]);
}

return ae;
},

disabled:function(bsv)
{
this.bpD=typeof bsv!="boolean"
?true
:bsv;
return this;
},

edit:function(er)
{
var ae=this,
io=ae.Am[er];
if(io)
{
var aXs=io.jL&&getTop().encodeNick(io.jL),dtc=-1;

ae.HS.blur();
ae.SH();
ae.Ct();
ae.zf(er);
ae.Qk(er);
ae.aWt(ae.MJ.bpU.replace(
{
nick:aXs,
addr:er,
splitchar:ae.bsf
}
));

if(io.aeJ)
{
if(aXs)
{
dtc=ae.sr.value.length-2;
}
else
{
dtc=er.length
}
}
else if(io.cRy)
{

dtc=er.indexOf("@");
}
else
{
dtc=er.length;
}
ae.focus(dtc);
}
return ae;
},

flush:function()
{
this.Ct();
return this;
},

focus:function(dE)
{

var ae=this;

switch(dE)
{
case"all":
return ae.aEG(0,-1);
case"start":
return ae.aEG(0,0);
case"end":
return ae.aEG(-1,-1);
}

if(typeof(dE)=="number")
{
return ae.aEG(dE,dE);
}
if(typeof(dE)=="string")
{
return ae.aEg().oQ(dE);
}
return ae.aEg();
},

get:function(dE)
{
var ae=this,
aL=[],
hx=ae.mE,
sV=ae.Am;
if(dE=="autocomplete")
{
return ae.Tc;
}

else if(!dE||{error:1,errhtml:1,errQQhtml:1,json:1,validemail:1}[dE])
{
getTop().E(hx,function(er)
{
var bX=sV[er],
jL=ae.fhs(bX.jL);
switch(dE)
{
case"error":
if(!bX.aeJ&&!bX.cRy)
{
aL.push(er);
}
break;
case"errhtml":
if(!bX.aeJ&&!bX.cRy)
{
aL.push(getTop().htmlEncode(er));
}
break;
case"errQQhtml":
if(!bX.aeJ&&bX.cRy)
{
aL.push(getTop().htmlEncode(er));
}
break;
case"json":
aL.push(
{
nick:jL,
addr:er,
valid:bX.aeJ,
isQQ:bX.cRy,
format:jL?['"',
getTop().encodeNick(jL),'"<',er,'>']
.join(""):er
}
);
break;
case"validemail":
if(bX.aeJ)
{
aL.push(er);
};
break;
default:
aL.push(jL?['"',getTop().encodeNick(jL),
'"<',er,'>'].join(""):er);
}
}
);

return aL;
}
else
{
return hx.join(dE);
}
},

getContainer:function()
{
return this.jc;
},

getId:function()
{
return this.nf;
},

getOwnerWindow:function()
{
return this.iw;
},

hasAddr:function(er)
{
return this.Am.hasOwnProperty(er);
},

isDisabled:function()
{
return this.bpD;
},

length:function()
{
return this.mE.length;
},

updateDomain:function(caN,bZX)
{
var ae=this,
bpB=[],
hx=this.mE,
sV=this.Am;

getTop().E(hx,function(er)
{
if(sV[er].hv==caN)
{
bpB.push(er);
}
}
);

getTop().E(bpB,function(er)
{
var io=sV[er];
ae.zf(er);
ae.add(ae.MJ.bpU.replace(
{
nick:io.jL,
addr:[io.pE,bZX].join("@")
}
),true);
ae.Qk(er,true);
}
);

getTop().callBack.call(this,this.SV.jV,["change"]);
},

setDomainError:function(bRB)
{
var ae=this,
aIH=false,
aEj=ae.aDV;
getTop().E(bRB,function(asg)
{
if(!aEj[asg.sDom])
{
aIH=aEj[asg.sDom]=true;
}
}
);
return ae.bXc();
},
setAddrError:function(aGX)
{
var ae=this,
sV=ae.Am;
for(var i=0;i<aGX.length;i++)
{
var fe=aGX[i];
if(sV[fe])
{
sV[fe].aeJ=false;
sV[fe].cRy=true;
}
}
return ae.bXc();
},


fnw:function(bW)
{
return getTop().htmlEncode(bW).replace(/&#38;#x(?=\w{4})/gi,"&#x").replace(/&amp;#x(?=\w{4})/gi,"&#x");
},

fhs:function(bW)
{
var dCe;
if(bW&&/&#x(?=\w{4})/gi.test(bW))
{
!dCe&&(dCe=document.createElement("div"));
dCe.innerHTML=bW;
return dCe.innerHTML;
}
else
{
return bW;
}
},

bYP:function(er,uH,aEt,cQs)
{
var ae=this,
sV=ae.Am,
hx=ae.mE,
Tx=ae.xB,
btN=Tx.previousSibling,
aEA=(btN
?ae.Md(btN.getAttribute("addr"))
:-1)+1;

if(sV[er])
{

hx.splice(ae.Md(er),1);
ae.jc
.insertBefore(sV[er].av,Tx);
}
else
{

var qF=ae.MJ,
eG=getTop().htmlEncode(er),
jL=uH,
bsH=er.split("@"),
hv=aEt?bsH[1]:"";
pE=aEt?bsH[0]:er;

function bvY(bW,bbu)
{
return getTop().htmlEncode(getTop().getAsiiStrLen(bW)>bbu
?getTop().subAsiiStr(bW,bbu,"...")
:bW);
}
function fHe(bW,bbu)
{
return getTop().getAsiiStrLen(bW)>bbu
?getTop().subAsiiStr(bW,bbu,"...",false)
:bW;
}

getTop().insertHTML(Tx,"beforeBegin",qF.aPG
.replace(
{

nick:cQs&&fHe(cQs,ae.cPa.cjz),
alias:pE&&bvY(pE,ae.cPa.cel),
domain:hv&&getTop().htmlEncode(hv),
addr:eG,
css:ae.aEE,
dispmode:ae.chI,
splitchar:ae.bsf,
isvalid:aEt,
isdomainerr:!!ae.aDV[hv],
images_path:getTop().getPath("image")
}
)
);

var bE=Tx.previousSibling;
sV[er]={
jL:uH,
pE:pE,
hv:hv,
av:bE,
aeJ:aEt
};

ae.ciG(bE,er);
}

ae.cfo();

hx.splice(aEA,0,er);
},

Ct:function()
{
if(this.add(getTop().trim(this.sr.value))!=0)
{
this.aWt("");
return true;
}
return false;
},




cfo:function()
{
var ae=this,
be=ae.jc;
if(ae.aYQ&&getTop().gnIEVer<7)
{
be.style.height='auto';
var cjh=be.offsetHeight;
if(cjh>ae.aYQ)
{
be.style.height=ae.aYQ+'px';
}
}
},

acC:function(acw)
{
var ae=this,
dp=ae.cdJ(acw);


if(this.cff!=dp)
{
this.cff=dp;

var Tx=ae.xB,
akz=ae.cPa.akz,
aEe=ae.cPa.aEe,
gP=dp<akz?0:1
+Math.floor((dp-akz)/aEe),
brg=Math.min(akz+aEe*gP,
ae.jc.offsetWidth-5
),
aqS=Tx.clientWidth;

if(brg!=aqS)
{
Tx.style.width=brg+"px";
if(acw=="paste")
{
Tx.scrollLeft=0;
}
}
}
},

SH:function(er,cbm)
{
var qA=this.XK;

if(this.ahd())
{
var aD=qA.aD;

if(er)
{
var cv=qA.cv,
bE=aD[er];
if(bE)
{
this.acZ(bE,"normal");
for(var i=0,aF=cv.length;i<aF;i++)
{
if(cv[i]==er)
{
cv.splice(i,1);
break;
}
}
delete aD[er];
}
}
else
{
for(var eG in aD)
{
this.acZ(aD[eG],"normal");
}

qA.aD={};
qA.cv=[];

if(!cbm)
{
qA.Tf=null;
}
}
return true;
}
return false;
},

aWt:function(cjf)
{
this.sr.value=cjf;
this.acC();
},

Qk:function(aWn)
{
var eG=typeof aWn=="string"
?aWn:aWn.getAttribute("addr"),
asn=this.Am[eG],
cS=this.SV;
if(asn)
{
getTop().removeSelf(asn.av);
delete this.Am[eG];
this.mE.splice(this.Md(eG),1);
}
cS.dIU&&cS.dIU();

},

auo:function(cgV,aVZ)
{
var qA=this.XK;

if(qA.wh!=0)
{
var cv=qA.cv,
eY=this.Md(cv[cv.length-1]),
aD=qA.aD;

this.SH();

for(var eG in aD)
{
this.Qk(eG);
}

var hx=this.mE,
aF=hx.length;

if(!cgV)
{
if(aF!=0)
{
this.zf(eY<aF
?hx[eY]:null);
}
this.focus("start");
}

if(!aVZ)
{
getTop().callBack.call(this,this.SV.jV,["del"]);
}
}
},

aEg:function()
{

this.bss().sr.focus();
return this.cil();
},

Md:function(er)
{
var hx=this.mE
for(var i=0,aF=hx.length;i<aF;i++)
{
if(hx[i]==er)
{
return i;
}
}
return-1;
},

btD:function(axE)
{
var ae=this,
ah=getTop(),
aD=[];

if(ah.getAddrACData)
{
var aD=ah.getAddrACData(ae.sr,axE||"",ae.bTZ);
aD.header=ae.bqp&&ae.constructor.bUU()?
[
'<div unselectable="on" class="graytext" style="border-bottom:1px solid #ccc;padding:0 5px;">',
'<a unselectable="on" style="float:right;" opt="hidetip">I got it</a>',
'QQ number and pinyin was supported',
'</div>'
].join(""):'';
}

return aD;
},

aFc:function()
{
return{cmd:getTop().gbIsMac?"Command":"Ctrl"};
},

cdJ:function(acw)
{
var cA=this.sr.value,
cag=acw==8,
brD=acw==32
||(acw>=48&&acw<229),
bYy=cA||brD;

if(!bYy)
{
return 0;
}

if(cag)
{
cA=cA.slice(0,-1);
}

var aST=cA+(brD?"WW":"WW");
if(aST==this.civ)
{
return this.cbv;
}

var asK=this.cdc;
this.civ=aST;
asK.innerHTML=getTop().htmlEncode(aST)
.replace(/ /ig,"&nbsp;");

return this.cbv=asK.scrollWidth;
},

acO:function()
{
var alk=this.xB.previousSibling;
return alk?this.Md(alk
.getAttribute("addr")):-1;
},

acX:function()
{
var zN=this.sr,
caO=zN.value,
Fh=this.iw,
Hx=Fh.document,
aL={
wh:caO.length
};

if(Hx.selection)
{
var adq=zN.createTextRange(),
aEa=Hx.selection.createRange();

function brC(dE)
{
try
{
adq.moveStart("character",0);
adq.setEndPoint(["EndTo",dE].join(""),
aEa
);
return(adq.text||"").length;
}
catch(bj)
{
return-1;
}
}

aL.hD=brC("Start");
aL.hA=brC("End");
}
else
{
var adq=Hx.createRange();
adq.selectNode(zN);


try
{
var aEa=Fh.getSelection().getRangeAt(0);
var bmu=adq.compareBoundaryPoints(
Range.START_TO_nStart,aEa
)==1,
bjp=adq.compareBoundaryPoints(
Range.END_TO_nEnd,aEa
)==-1,
aUb=!bmu&&!bjp;
}
catch(bj)
{



var aUb=true;
}

aL.hD=aUb?zN.selectionStart:-1;
aL.hA=aUb?zN.selectionEnd:-1;
}

if(aL.hD==-1)
{
aL.by="none";
}
else if(aL.hD!=aL.hA)
{
aL.by="range";
}
else
{
aL.by="point";
}

return aL;
},

ahd:function()
{
return this.XK.cv.length>0;
},

Nb:function()
{
this.dXj.style.left="-200px";
},

Uz:function(aj)
{
var ae=this,
mN=ae.constructor;

try
{
ae.cPa=mN.hV;
ae.MJ=mN.ci;
ae.nf=aj.id;
ae.iw=aj.win;
ae.jc=aj.dom.container;
ae.aYQ=aj.maxHeight;
ae.cvB=aj.maxItemView||15,
ae.cdB=aj.minWidth||220,
ae.aEm=aj.width||"auto",
ae.aEE=getTop().extend(
{
text:"addr_text",

normal:"addr_base addr_normal",
over:"addr_base addr_over attbg",
select:"addr_base addr_select fn_list",

error:"addr_base addr_error",
errover:"addr_base addr_errover attbg",
errsel:"addr_base addr_errsel fn_list",

dmerror:"addr_base addr_domain_err",
dmerrover:"addr_base addr_domain_errover attbg",
dmerrsel:"addr_base addr_domain_errsel fn_list",

move:"addr_move",
mover:"addr_mover"
},
aj.style
);
ae.chI=aj.dispMode;
ae.bsf=aj.splitChar||";";
ae.ciC=aj.defaultText||ae.jc.getAttribute("defaultText");
ae.bqp=aj.isEnableTip!==false;
ae.fMI=aj.isFocusAC===true;
ae.bTZ=aj.filterFunc;
ae.bpD=false;
ae.mE=[];
ae.Am={};
ae.aDV={};
ae.XK={
cv:[],
aD:{},
Tf:null
};
ae.SV={
eHq:aj.onfocus,
crE:aj.onblur,
jV:aj.onchange,
atj:aj.onkeydown,
dIU:aj.onNotify 
}
ae.feq={
"autoFold":1 
};
mN.azQ(ae);
}
catch(bj)
{
throw new Error("QMAddrInput constructor:"+bj.message);
}

return ae;
},

zf:function(er)
{
var ae=this,
bpQ=(ae.Am[er]||{}).av
||ae.jc.lastChild;

if(ae.xB.nextSibling!=bpQ)
{
ae.jc
.insertBefore(ae.xB,bpQ);
}

return ae;
},

aoD:function()
{
var ae=this,
arq=ae.arY?ae.sr:ae.HS;
return!ae.ciy()?true:(ae.iw.getSelection
?arq.selectionStart==arq.selectionEnd
:ae.iw.document.selection.type=="None");
},

ciy:function()
{
return this.arY||this.ahd();
},

chb:function()
{
return this.bsJ;
},

aky:function(er)
{
return this.XK.aD[typeof er=="string"
?er
:er.getAttribute("addr")];
},

cgp:function()
{
if(this.avH)
{

if(window.getSelection)
{




}
else
{
this.avH.select();
}

this.avH=null;
}
},

bss:function()
{
this.bsJ=true;
return this;
},

gaQ:function(dKP,fft)
{
var sV=this.Am,
edZ=sV[dKP];
if(edZ)
{
var hx=this.mE,
eGC=sV[fft];
hx.splice(this.Md(dKP),1);
if(eGC)
{
this.jc.insertBefore(edZ.av,
eGC.av
);
hx.splice(this.Md(fft),0,dKP);
}
else
{
this.jc.insertBefore(edZ.av,
this.xB
);
hx.push(dKP);
}
}
},

bZJ:function()
{
(this.ahd()?this.HS:this.sr).focus();


if(window.getSelection)
{
var jK=this.iw.getSelection();
this.avH=jK&&jK.rangeCount?jK.getRangeAt(0):null;
}
else
{
this.avH=this.iw.document.selection.createRange();
}
},




oQ:function(er,dE)
{
var asn=this.Am[er],
qA=this.XK;

if(asn)
{
if(dE=="shift")
{
var hx=this.mE,
sV=this.Am,
Tf=qA.Tf,
Lc=this.Md(er),Ff;

if(typeof Tf!="number")
{
Ff=this.Md(qA.cv[0]);
if(Ff==-1)
{
Tf=qA.Tf=this
.acO();
}
}

if(typeof Tf=="number")
{
Ff=Tf+(Tf<Lc?1:0);
}

this.SH(false,true);

var gP=Ff>Lc?-1:1,
Iu=qA.cv,
bqy=qA.aD;

for(var i=Ff,Lc=Lc+gP;i!=Lc;i+=gP)
{
var eG=hx[i];
Iu.push(eG);
this.acZ(
qA.aD[eG]=sV[eG].av,
"select"
);
}
}
else
{
if(dE!="add")
{
this.SH();
}

if(this.aky(er))
{
this.SH(er);
}
else
{
var Iu=qA.cv;

this.Ct();


Iu.push(er);
this.acZ(
qA.aD[er]=asn.av,"select"
);
}
}
}

if(this.ahd())
{
var aL=[],
hx=this.mE,
sV=this.Am,
bqy=qA.aD;

for(var i=0,aF=this.length();i<aF;i++)
{
var eG=hx[i];
if(bqy[eG])
{
var bX=sV[eG];
aL.push(bX.jL?['"',getTop().encodeNick(bX.jL),
'"<',eG,'>'].join(""):eG);
}
}
aL.push("");

var aVr=this.HS;
aVr.value=aL.join(";");
aVr.focus();
aVr.select();
}

return this;
},

btK:function()
{
var ae=this,
hx=ae.mE;
ae.Ct();
ae.oQ(hx[0]);
ae.oQ(hx[hx.length-1],"shift");
},

bBv:function()
{
var ae=this,
ah=getTop();
ae.bqp&&ae.constructor.bUU();
ae.Tc=new ah.QMAutoComplete(
{
oInput:ae.sr,
oPosObj:ae.jc,
nMaxItemView:ae.cvB,
nMinWidth:ae.cdB,
nWidth:ae.aEm,
ongetdata:function(nW)
{
return ae.btD();
},
onclick:function(ag,an)
{
if(!an)
{
var aK=ah.getEventTarget(ag);
if(aK&&aK.getAttribute("opt")=="hidetip")
{


this.setHeader("");
ae.constructor.aMY();
}
}
},
onselect:function(an)
{
var ah=getTop(),
lQ=an.oAddress,
chN=ah.T('"$nick$"<$addr$>;'),
avB=[];

function btP(pL)
{
return chN.replace(
{
nick:ah.encodeNick(ah.htmlDecode(pL.name)),
addr:ah.htmlDecode(pL.email)
}
);
}

if(lQ.nShortcutGroupId)
{

var fL=ah.QMAddress.getGroup(lQ.nShortcutGroupId);
for(var ij=fL.addressesId,aN=0,cZ=ij.length;aN<cZ;aN++)
{
fi=ah.QMAddress.getAddress(ij[aN]);
if(!fi.nShortcutGroupId)
{
avB.push(btP(fi));
}
}
}
else
{
avB.push(btP(lQ));
}






ae.bZu(avB.join(""));
},
ontouchstart:function()
{
ae.bss();
}
}
);
return ae;
},

ciG:function(YU,er)
{

this.cKw(YU,
{
"click":this.cbV,
"dblclick":this.ccv,
"mouseover":this.cjk,
"mouseout":this.cer
},
er
);
var
aDz=YU.childNodes,
cS=this.SV,
dg;
for(var i=0,aF=aDz.length;i<aF;i++)
{
dg=aDz[i];
dg.nodeName.toLowerCase()=="a"&&dg.getAttribute("name")=="del"&&this.cKw(dg,{
"click":this.fDe
})&&(i=aF)
}
cS.dIU&&cS.dIU();
},

acZ:function(YU,aA)
{
var ae=this,
bqm="",
by={
move:"select",
mover:"select"
}[aA],
io=ae.Am[YU.getAttribute("addr")];

if(!by)
{
by=aA||"normal";
}
else
{
bqm=ae.aEE[aA];
}

if(io&&!io.aeJ)
{
by={
normal:"error",
over:"errover",
select:"errsel"
}[by];
}
else if(io&&ae.aDV[io.hv])
{
by={
normal:"dmerror",
over:"dmerrover",
select:"dmerrsel"
}[by];
}

getTop().setClass(
YU,
[ae.aEE[by],bqm].join(" ")
);

return ae;
},

sH:function()
{
var ae=this;

ae.cKw(ae.jc,
{
"mousedown":ae.cbM,



"selectstart":ae.cch,
"contextmenu":ae.ceS
}
);


var bpI=
{
"focus":ae.cjC,
"blur":ae.bZF,
"keydown":ae.ceu,
"keyup":ae.caj,
"paste":ae.cfL
};

if(getTop().gbIsTT)
{
bpI["keypress"]=ae.bYC;
}

ae.cKw(ae.sr,bpI);


ae.cKw(ae.HS,
{
"focus":ae.bYM,
"blur":ae.cjn,
"keydown":ae.cgK,
"keyup":ae.cfw,
"paste":ae.cdW,
"cut":ae.bYS
}
);


ae.cKw(ae.dXj,
{
"click":ae.ceC,
"contextmenu":ae.sm
}
);

ae.cKw(ae.dEJ,
{
"click":ae.focus
}
);

return ae;
},

aEG:function(ciQ,chi)
{

var zN=this.sr,
KV=zN.value.length;


function boJ(cO)
{
if(!cO)
{
cO=0;
}
if(cO<0)
{
cO=KV+cO+1;
}
if(cO<0)
{
return 0;
}
if(cO>KV)
{
return KV;
}
return cO;
}

var Ff=boJ(ciQ),
Lc=boJ(chi);

if(zN.createTextRange)
{

var dR=zN.createTextRange();
dR.moveStart("character",Ff);
dR.collapse();
dR.moveEnd("character",Lc-Ff);
dR.select();
this.aEg();
}
else
{
this.aEg();
zN.selectionStart=Ff;
zN.selectionEnd=Lc;
}
return this;
},

CZ:function(azB,brV)
{
var ae=this,
be=ae.jc,
cQi,Tx,zN,asK;

be.unselectable="on";
be.style.cursor="text";
be.innerHTML=ae.MJ.bVI.replace(
{
css:ae.aEE.text,
width:ae.cPa.akz,
defaulttext:ae.ciC,
accesskey:brV?'accesskey="'+brV+'"':''
}
);

cQi=ae.dEJ=be.firstChild;
Tx=ae.xB=cQi.nextSibling,
zN=ae.sr=Tx.firstChild,
asK=ae.cdc=Tx.lastChild;


ae.HS=be.lastChild.firstChild;


ae.bzM=typeof azB=="number"?azB:0;
zN.tabIndex=azB;


ae.ciq(asK,zN);


var bpT=[],
cW=ae.iw.document.body;

getTop().E(ae.cPa.wJ,function(bW)
{
var jm=bW.split("|");
bpT.push((jm[0]=="seperater"
?ae.MJ.bYQ
:ae.MJ.chK.replace({
operate:jm[0],
name:jm[1],
shortcut:getTop().T(jm[2]||"").replace(ae.aFc())
})));
});

getTop().insertHTML(cW,"afterBegin",ae.MJ.cjr.replace({
items:bpT.join(""),
width:getTop().gbIsMac?160:150
}));

ae.dXj=cW.firstChild;

return ae;
},


dgy:function()
{
var ah=getTop(),
nS=arguments[0],
dDj=this.feq;

if(nS=="setup")
{
var aM=arguments[1];

for(var i in dDj)
{
if(!aM.feature||!aM.feature[i])
{

dDj[i]=0;
}
else
{

this.eUf(i)['init'].call(this,aM);
}
}
}
else
{
var bLO=arguments[1],
fwi=[].slice.call(arguments,2),
eUE=this.eUf(nS);
eUE[bLO]
&&eUE[bLO].apply(this,fwi);
}

return this;
},

eUf:function(aA)
{
var ah=getTop(),
dDj=this.feq;
if(dDj[aA])
{
return(function(eGf)
{
var OC={
"init":function()
{
debug(eGf+": not init");
}
};




switch(eGf)
{
case"autoFold":
return ah.extend(OC,
{
"init":function(aq)
{
var ae=this;
ah.insertHTML(ae.jc,"afterBegin",ae.MJ.fkN.replace({}));
ah.addEvent(ah.S("qmAddrInputFold",ae.iw),"mousedown",function()
{
getTop().fireMouseEvent(ae.jc,"mousedown")
}
);
},
"fold":function(eLx)
{
if(eLx&&this.ahd())
{

return;
}

var be=this.jc,
dEM="smart_contact_fold";
be.scrollTop=0;
if(eLx)
{
this.length()
&&!ah.hasClass(be,dEM)
&&ah.addClass(be,dEM);
be.style.height="";
getTop().S("qmAddrInputFoldCnt",this.iw).innerHTML=this.length();
}
else
{
var scrollHeight=be.scrollHeight-2;
ah.hasClass(be,dEM)
&&ah.rmClass(be,dEM);

be.style.height="18px";
be.style.height=scrollHeight+"px";
be.style.height="auto";
}
}
});
default:
return OC;
}
})(aA);
}
return{};
},

cey:function()
{
var ae=this;
ae.Tc.show(ae.btD(" "));
return ae;
},

ciw:function(Lx,KK,er)
{
var cW=this.iw.document.body,
fBp=cW.clientWidth,
fvu=cW.clientHeight,
doG=this.dXj,
eYA=doG.clientWidth,
eLb=doG.clientHeight;

doG.style.left=cW.scrollLeft
+(Lx+eYA>fBp?Lx
-eYA:Lx)+"px";
doG.style.top=cW.scrollTop
+(KK+eLb>fvu?KK
-eLb:KK)+"px";

var aoD=this.aoD();
getTop().E(getTop().GelTags("div",doG)[0].childNodes,function(iz)
{
switch(iz.getAttribute("opt"))
{
case"cut":
case"copy":
case"delete":
getTop().setClass(iz,aoD
?"menu_item_nofun"
:"menu_item");
break;
case"edit":
iz.setAttribute("addr",er||"");
break;
}
});
},

ciq:function(car,cep)
{
getTop().E("fontFamily,fontSize,fontWeight,lineHeight,wordSpacing".split(","),
function(eGw)
{
car.style[eGw]=getTop().getStyle(cep,eGw);
}
);
},

cil:function()
{
this.bsJ=false;
return this;
},

bXc:function()
{
var ae=this,
sV=ae.Am,
aEj=ae.aDV;

getTop().E(ae.mE,function(er)
{
var io=sV[er],
jQ="",
YJ=io.av;
if(aEj[io.hv])
{
jQ=ae.MJ.aPG.replace({},"errdomainmsg")
}
else if(io.cRy)
{
jQ=io.aeJ?er:ae.MJ.aPG.replace({addrError:true},"errmsg");
}
else
{
jQ=io.aeJ?er:ae.MJ.aPG.replace({},"errmsg");
}





if(YJ.title!=jQ)
{
YJ.title=jQ;
ae.acZ(YJ,"normal");
}
}
);
return ae;
},







btC:function()
{
var hx=this.mE,
sV=this.Am,xZ,aso,ajV,Gh,bve,Bw,VT,aEL,sR,akU,avR,atr,aEk;

if(this.Xn)
{
delete this.Xn;
}

if(hx.length!=0)
{
xZ=sV[hx[0]].av;
aso=sV[hx[hx.length-1]].av;
ajV=aso.nextSibling;

Gh=xZ.offsetParent;
bve=getTop().calcPos(Gh);
Bw=bve[0];
VT=bve[3];

aEL=xZ.offsetHeight;
}

sR=getTop().calcPos(this.jc);
akU=sR[0];
avR=sR[3];
atr=sR[2];
aEk=sR[1];

this.Xn={
xZ:xZ,
aso:aso,
ajV:ajV,

Bw:Bw,
VT:VT,

aEL:aEL,

akU:akU,
avR:avR,
atr:atr,
aEk:aEk
};
},





btW:function(acQ)
{
var wB=this.Xn,
CS=acQ.clientX,
Bv=acQ.clientY;

return CS>=wB.avR
&&CS<=wB.aEk
&&Bv>=wB.akU
&&Bv<=wB.atr;
},








bqj:function(acQ,dE)
{
var bZP=dE=="limit",
akF={};

if(!bZP||this.btW(acQ))
{
var NC=this.bqo(),
aUD=NC.length;

if(aUD>0)
{
var wB=this.Xn,
chd=acQ.clientX-wB.VT,
bru=acQ.clientY-wB.Bw,
ajS=this.brk(acQ.clientY),Tl,
bqq,aFv,aRT,BH,
aUL,aWe,aVl,
aTx,aFI,aUg;

if(ajS<0)
{
ajS=0;
}
else if(ajS>=aUD)
{
ajS=aUD-1;
}

Tl=NC[ajS].Tl;
bqq=Tl.length;

for(var i=0,aWe=9999999;i<bqq;i++)
{
aFI=Tl[i];
aFv=chd-aFI.offsetLeft;
aRT=aFI.offsetWidth-aFv;
aUg=Math.min(Math.abs(aFv),Math
.abs(aRT));

if(aUg<aWe)
{
BH=aFI;
aWe=aUg;
aVl=aFv;
aTx=aRT;
}
else
{
break;
}
}

aUL=BH.offsetTop;

akF.bE=BH;
akF.cfE=ajS;
akF.cgR=aVl>0
&&aTx>0;
akF.dFe=bru>=aUL
&&bru<=aUL+wB.aEL;
akF.WL=aVl<aTx
?"left"
:"right";
}
}

return akF;
},





bqo:function()
{
var wB=this.Xn,
NC=wB.NC;

if(NC)
{
return NC;
}

var bE=wB.xZ,
ajV=wB.ajV,Tl,aTB,aWy;

wB.NC=NC=[];

for(;bE&&bE!=ajV;bE=bE.nextSibling)
{
if(bE.getAttribute("addr"))
{
aWy=bE.offsetTop;
if(aTB!=aWy)
{
aTB=aWy;
Tl=[bE];
NC.push({
Bw:aTB,
Tl:Tl
});
}
else
{
Tl.push(bE);
}
}
}

return NC;
},





brk:function(bYc)
{
var wB=this.Xn,
bqw=wB.akU,
brh=this.bqo().length;

return!brh?0:Math.floor((bYc-bqw)*brh
/(wB.atr-bqw));
},



cKw:function(aG,fdq,aI)
{
var ae=this;
for(var i in fdq)
{
(function()
{
var bMl=fdq[i];
getTop().addEvent(aG,i,function()
{
bMl.call(ae,arguments[0],aG,aI);
}
);
})();
}
return ae;
},

cbM:function(ag,gO)
{
var ae=this,
aK=ag.srcElement||ag.target;

if(window.getSelection&&ag.button==0||!window.getSelection&&ag.button==1)
{
var JC=aK.tagName=="SPAN"||aK.tagName=="B"
?aK.parentNode
:aK,
eG=JC.getAttribute("addr"),
awl=aK!=ae.sr;
if(aK==gO)
{

getTop().now()-(ae.chk||0)<300
?ae.btK():ae.bZI(ag,gO);
ae.chk=getTop().now();
}

if(eG)
{
if(ag.ctrlKey||ag.metaKey)
{
ae.oQ(eG,"add");
}
else if(ag.shiftKey)
{
ae.oQ(eG,"shift");
}
else
{
if(!ae.aky(eG))
{
ae.oQ(eG);
}

ae.ciI(ag,gO,eG);
}
}
else if(awl
||ae.sr.value.length==0)
{
ae.cdb(ag);
}


if(awl)
{
getTop().preventDefault(ag);
}
if(awl||ae.sr.value.length==0)
{
ae.Tc.close();
}

ae.Nb();
}
else if(ag.button==2
||(getTop().gbIsIE&&ag.button==0))
{
if(aK!=ae.sr)
{
var JC=aK.tagName=="SPAN"||aK.tagName=="B"
?aK.parentNode
:aK,
eG=JC.getAttribute("addr");

if(eG&&!ae.aky(eG))
{


if(getTop().gbIsIE)
{
this.arY=false;
}
ae.oQ(eG);
}

ae.sm(ag);
ae.bZJ();
}
}
else if(aK!=ae.sr)
{
ae.sm(ag);
}
},

cch:function(ag)
{
var aK=ag.srcElement||ag.target;
if(aK!=this.sr&&aK!=this.HS)
{
getTop().preventDefault(ag);
}
},

ciI:function(ag,gO,er)
{
var ae=this,
Fh=this.iw,
Hx=Fh.document,
amk=Fh.captureEvents?Fh:Hx.body,
CS=ag.clientX,
Bv=ag.clientY,
FL=Hx.createElement("div"),
Gn=Hx.createElement("div");

FL.className="addr_cursor";
FL.innerHTML='&nbsp;';

Gn.style.cssText='position:absolute;z-index:99999;top:-999px;left:-999px;';
Gn.innerHTML=this.MJ.cjE;

var oJ=this.SK={
auf:false,
FL:FL,
Gn:Gn,
be:gO,
ava:function(ag)
{
if(ae.SK)
{
ae.SK=null;

ae.aLo();

getTop().removeEvent(amk,"mouseup",oJ.ava);
getTop().removeEvent(amk,"mousemove",
oJ.atd
);

try
{

if(oJ.auf)
{
var bYD=ae.HS.value,
HP=oJ.Th[oJ.aks].iU,
aWr=HP.jc,
brY=[],
cdz=ae.mE,dHD;

if(FL.parentNode==aWr)
{
aWr.style.backgroundColor="#fff";

getTop().E(cdz,function(btG)
{
if(ae.aky(btG))
{
brY.push(btG);
}
}
);

ae.auo(true,true);
aWr.insertBefore(
HP.xB,FL
);
HP.add(bYD,true);

getTop().E(brY,function(er)
{
HP.oQ(er,"add");
}
);

if(ae==HP)
{
getTop().callBack.call(ae,ae.SV.jV,["move"]);
}
else
{
getTop().callBack.call(ae,ae.SV.jV,["del"]);
getTop().callBack.call(HP,HP.SV.jV,["add"]);
}
}
}
else
{
ae.oQ(er);
}
}
catch(bj)
{
doPageError(bj.message,"/js/qmaddrinput.js","_fDoMouseUp");
}

getTop().removeSelf(FL);
getTop().removeSelf(Gn);

delete Gn;
delete FL;
delete oJ;
}

ae.sm(ag);
},
atd:function(ag)
{
if(!oJ.auf&&

Math.max(Math.abs(CS-ag.clientX),Math
.abs(Bv-ag.clientY))>8)
{
var Th=[],
cW=Hx.body;

getTop().E(QMAddrInput.jM(Fh),function(aG,fm)
{
var eY=getTop().calcPos(aG.jc);

if(eY[2])
{
if(aG==ae)
{
oJ.aks=fm;
}

Th[fm]={
iU:aG,
eY:eY
};
aG.btC();
}
}
);

cW.insertBefore(Gn,cW.firstChild);

if(getTop().gsAgent&&getTop().gsAgent.indexOf("mac")!=-1)
{
var aEM=Gn.firstChild.style;
aEM.left=parseInt(aEM.left)-2;
aEM.top=parseInt(aEM.top)-4;
}

oJ.auf=true;
oJ.Th=Th;
}

ae.cdQ(ag);
ae.sm(ag);
}
}

this.aEb();

getTop().addEvent(amk,"mouseup",oJ.ava);
getTop().addEvent(amk,"mousemove",oJ.atd);
},

cdQ:function(ag)
{
var oJ=this.SK;

if(oJ&&oJ.auf)
{
var FL=oJ.FL,
Gn=oJ.Gn,
Th=oJ.Th,
aks=oJ.aks,
aFb=Th[aks].iU.jc,
HP;

Gn.style.left=ag.clientX-5+"px";
Gn.style.top=ag.clientY-5+"px";


for(var i=Th.length-1;i>=0;i--)
{
var aEl=Th[i];
if(aEl&&aEl.iU&&aEl.iU.btW(ag))
{
HP=aEl.iU;
break;
}
}

if(HP)
{


if(aks!=i)
{
oJ.aks=i;
}

var wB=HP.Xn,
be=HP.jc,
adK=HP.bqj(ag),
BH=adK.bE;

if(BH&&adK.WL=="right")
{
BH=BH.nextSibling;
}

if(be!=aFb)
{
aFb.style.backgroundColor="#fff";
}

if(oJ.be!=be)
{
be.style.backgroundColor="#f9f2b3";
}

be.insertBefore(FL,BH
||be.firstChild);
}
else if(FL.parentNode==aFb)
{

getTop().removeSelf(FL);
aFb.style.backgroundColor="#fff";
}
}
},

ceS:function(ag)
{
var aK=ag.srcElement||ag.target;
if(aK!=this.sr)
{

this.sm(ag);
this.cgp();
this.ciw(ag.clientX,ag.clientY,aK.getAttribute("addr"));

this.Tc.close();
}
},

bZI:function(ag,gO)
{

var qC=gO.childNodes,
Gh=qC[1].offsetParent,
bve=getTop().calcPos(Gh),
VT=bve[3],
Bw=bve[0],
CS=ag.clientX,
Bv=ag.clientY,
bqx=false;

for(var i=0,aF=qC.length-1;i<aF;i++)
{
var bE=qC[i],
adO=Bw+bE.offsetTop,
brX=CS<=VT+bE.offsetLeft
+2,
cdT=Bv<=adO,
caI=Bv<=adO
+bE.offsetHeight;
if((brX&&caI)
||(!brX&&cdT))
{
var eG=bE.getAttribute("addr");
if(!eG)
{

this.focus("start");
}
else if(bE.previousSibling==this.xB)
{

this.focus("end");
}
else
{
this.Ct();
this.zf(eG);
this.focus("start");
}
bqx=true;
break;
}
}
if(!bqx)
{
if(bE==this.xB)
{
this.focus("end");
}
else
{
this.Ct();
this.zf();
this.focus("start");
}
}
},

cdb:function(ag)
{
var hx=this.mE,
wh=hx.length;

if(wh==0||this.sr.value.length!=0)
{
return;
}

var Fh=this.iw,
amk=Fh.captureEvents?Fh:Fh.document.body,
ae=this,
bsZ=ag.clientX,
aRY=ag.clientY;

var oJ=this.SK={
auf:true,
ava:function(ag)
{
if(ae.SK)
{
ae.SK=null;
ae.aLo();

getTop().removeEvent(amk,"mouseup",oJ.ava);
getTop().removeEvent(amk,"mousemove",
oJ.atd
);

delete oJ;
}

ae.sm(ag);
},
atd:function(ag)
{
if(ae.SK)
{
var CS=ag.clientX,
Bv=ag.clientY,
auL,aVs;

if(Math.abs(CS-bsZ)>2
||Math.abs(Bv-aRY)>5)
{
var wB=ae.Xn,
adK=ae.bqj(ag),
BH=adK.bE,
ccY=adK.cfE;

if(adK.cgR)
{
auL=BH;
}
else
{
var cbh=ae.brk(aRY),
WL;

if(ccY==cbh)
{
WL=CS<bsZ
?"left"
:"right";
}
else
{
WL=Bv<aRY
?"left"
:"right";
}

if(adK.WL==WL)
{
if(BH
&&BH[WL=="left"
?"previousSibling"
:"nextSibling"]!=ae.xB)
{
auL=BH;
}
}
else
{
auL=BH
&&BH[WL=="right"
?"previousSibling"
:"nextSibling"];
}
}
}

aVs=auL
&&auL.getAttribute("addr");

if(aVs)
{
ae.oQ(aVs,"shift");
}
else if(ae.SH())
{
ae.focus("start");
}
}

ae.sm(ag);
}
};

this.btC();
this.aEb();

getTop().addEvent(amk,"mouseup",oJ.ava);
getTop().addEvent(amk,"mousemove",oJ.atd);
},
cjC:function(ag)
{
var ae=this;
ae.arY=true;
getTop().show(ae.dEJ,false);
setTimeout(function()
{
ae.fMI&&!ae.length()&&ae.cey();
ae.dgy("autoFold","fold",!1);
}
);
getTop().callBack.call(ae,ae.SV.eHq,[ag]);
},

bZF:function(ag)
{
var ae=this;
if(!ae.chb())
{
ae.arY&&ae.Nb();
ae.arY=false;
ae.Ct();


!ae.length()&&getTop().show(ae.dEJ,true);
setTimeout(function()
{
ae.dgy("autoFold","fold",!0);
}
);
getTop().callBack.call(ae,ae.SV.crE,[ag]);
}
},

ceu:function(ag)
{
this.acC(ag.ctrlKey?0:ag.keyCode);

switch(ag.keyCode)
{
case 59:
case 186:
case 188:
if(ag.shiftKey)
{
break;
}
case 32:
if(this.Ct())
{
this.sm(ag);
}
break;
case 46:
var qz=this.acX();
if(qz.by=="point"
&&qz.hA==qz.wh
&&this.xB.nextSibling)
{
this.Qk(this.xB.nextSibling);
this.sm(ag);
getTop().callBack.call(this,this.SV.jV,["del"]);
}
break;
case 8:
var qz=this.acX(),
alk=this.xB.previousSibling,
aNH=alk
&&alk.getAttribute("addr");
if(qz.by=="point"&&qz.hD==0
&&alk)
{
this.oQ(aNH,"shift");
this.sm(ag);





}
break;
case 37:
var qz=this.acX(),
alk=this.xB.previousSibling,
aNH=alk
&&alk.getAttribute("addr");
if(qz.by=="point"&&qz.hD==0
&&aNH)
{
if(ag.shiftKey)
{
this.oQ(aNH,"shift");
}
else
{
this.Ct();
this.zf(aNH);
this.focus("start");
}
this.sm(ag);
}
break;
case 39:
var qz=this.acX(),
aSM=this.xB.nextSibling,
aFF=aSM&&aSM.getAttribute("addr");

if(qz.by=="point"
&&qz.hA==qz.wh&&aFF)
{
if(ag.shiftKey)
{
this.oQ(aFF,"shift");
}
else
{
this.Ct();
this.zf(aSM.nextSibling
.getAttribute("addr"));
this.focus("start");
}

this.sm(ag);
}
break;
case 36:
var qz=this.acX();

if(qz.by=="point"&&qz.hD==0)
{
this.Ct();

if(ag.shiftKey&&this.acO()!=-1)
{
this.oQ(this.mE[0],"shift");
}
else
{
this.zf(this.mE[0]);
this.focus("start");
}

this.sm(ag);
}
break;
case 35:
var qz=this.acX();

if(qz.by=="point"
&&qz.hA==qz.wh)
{
this.Ct();

var WQ=this.mE.length-1;
if(ag.shiftKey
&&this.acO()!=WQ)
{
this.oQ(this.mE[WQ],
"shift"
);
}
else
{
this.zf();
this.focus("start");
}

this.sm(ag);
}
break;
case 65:
if(ag.ctrlKey||ag.metaKey)
{
var qz=this.acX(),
hx=this.mE;

if(qz.hD==0
&&qz.hA==qz.wh
&&hx.length!=0)
{
this.Ct();
this.oQ(hx[0]);
this.oQ(hx[hx.length-1],
"shift"
);
this.sm(ag);
}
}
break;
case 38:
case 40:

if(!this.Tc.isShow())
{
var alv=ag.keyCode==38,
dg=this.xB[alv
?"previousSibling"
:"nextSibling"];
eG=dg.getAttribute("addr"),
bqa=this.Md(eG);

if(bqa!=-1)
{
var Gh=dg.offsetParent,
bve=getTop().calcPos(Gh),
bqh=bve[0],
aUZ=bve[3],

bub=getTop().calcPos(this.xB);
bqe=bub[0],
ciU=bub[3],
brL=getTop().calcPos(this.jc),
PP=brL[3],
PJ=brL[0],

hx=this.mE,
sV=this.Am,
bpO=9999999,
aFi=null,
bur=null;

for(var i=bqa,aTh=hx.length,aF=alv
?-1
:aTh+1,gP=alv?-1:1;i!=aF;i+=gP)
{
if(i==aTh)
{
var aWM="",
JC=sV[hx[aTh-1]].av,
aEY=aUZ
+JC.offsetLeft
+JC.offsetWidth,
adO=bqh+JC.offsetTop,
aEu=Math.abs(adO-bqe);
}
else
{
var aWM=hx[i],
JC=sV[aWM].av,
aEY=aUZ
+JC.offsetLeft,
adO=bqh+JC.offsetTop,
aEu=Math.abs(adO-bqe);
}


if(Math.abs(aEY-PP)<5
&&Math.abs(adO-PJ)>5)
{
var IW=JC.previousSibling;
aEu-=JC.offsetHeight*gP;
aEY=aUZ
+IW.offsetLeft
+IW.offsetWidth;
}


if(aEu<5)
{
continue;
}

if(aEu>5+JC.offsetHeight)
{
break;
}

var brH=Math.abs(aEY-ciU);
if(brH>=bpO)
{
break;
}
bpO=brH;
aFi=aWM;
bur=bur;
}

if(aFi!=null)
{
this.Ct();
if(ag.shiftKey)
{
this.oQ(aFi,"shift");
}
else
{
this.zf(aFi);
this.focus("start");
}
}
}
this.sm(ag);
}
break;
default:
getTop().callBack.call(this,this.SV.atj,[ag]);
break;
}
this.Nb();
},

bYC:function()
{
this.acC();
},

caj:function(ag)
{
if(ag.keyCode!=13)
{
this.acC();
}
if(ag.keyCode==186||ag.keyCode==188||ag.keyCode==59||ag.keyCode==13)
{
if(this.Ct())
{
this.sm(ag);
}
}
},

cfL:function()
{

var ae=this;

this.iw.setTimeout(function()
{
ae.acC("paste");


if(getTop().gbIsFF)
{
getTop().show(ae.sr,false);
setTimeout(function()
{
getTop().show(ae.sr,true);
ae.focus("end");
}
);
}
},0);
this.iw.setTimeout(function()
{
ae.sr.value.indexOf("@")!=-1&&ae.Ct();
},100)

},

bYM:function(ag)
{
var ae=this;

this.HS.tabIndex=this.bzM;
setTimeout(function()
{
ae.dgy("autoFold","fold",!1);
}
);
getTop().callBack.call(this,this.SV.eHq,[ag]);
},

cjn:function(ag)
{
var ae=this;

this.HS.tabIndex=-1;
setTimeout(function()
{
ae.dgy("autoFold","fold",!0);
}
);
if(this.ahd())
{
this.SH();
this.Nb();
getTop().callBack.call(this,this.SV.crE,[ag]);
}
},

cgK:function(ag)
{
switch(ag.keyCode)
{
case 8:
case 46:
this.auo();
break;
case 37:
var qA=this.XK,
Iu=qA.cv,
aea=Iu[Iu.length-1];
if(ag.shiftKey)
{
var aEA=this.Md(aea)-1;
if(aEA>=0)
{
this.oQ(this.mE[aEA],"shift");
}
else if(this.acO()==-1)
{
this.zf(this.mE[0]);
this.focus("start");
}
}
else
{
this.SH();
this.zf(aea);
this.focus("start");
}
break;
case 39:
var qA=this.XK,
Iu=qA.cv,
aea=Iu[Iu.length-1];
if(ag.shiftKey)
{
var boW=this.Md(aea)+1,
WQ=this.mE.length-1;

if(boW<=WQ)
{
this.oQ(this.mE[boW],"shift");
}
else if(this.acO()==WQ)
{
this.zf();
this.focus("start");
}
}
else
{
var aFF=qA.aD[aea].nextSibling
.getAttribute("addr");
this.SH();
this.zf(aFF);
this.focus("start");
}
break;
case 36:
if(ag.shiftKey&&this.acO()!=-1)
{
this.oQ(this.mE[0],"shift");
}
else
{
this.zf(this.mE[0]);
this.focus("start");
}
this.sm(ag);
break;
case 35:
var WQ=this.mE.length-1;

if(ag.shiftKey&&this.acO()!=WQ)
{
this.oQ(this.mE[WQ],"shift");
}
else
{
this.zf();
this.focus("start");
}
this.sm(ag);
break;
case 13:
break;
default:
getTop().callBack.call(this,this.SV.atj,[ag]);
break;


}

if(!((ag.ctrlKey||ag.metaKey)
&&(ag.keyCode==67||ag.keyCode==86||ag.keyCode==88))

&&ag.keyCode!=9)
{
this.sm(ag);
}

this.Nb();
},

cfw:function(ag)
{
if((ag.keyCode==13 ||ag.keyCode==113 ))
{
var Iu=this.XK.cv,
aea=Iu[Iu.length-1];
this.edit(aea);
this.sm(ag);
}
},

cdW:function(ag)
{
var ae=this;
this.iw.setTimeout(function()
{
ae.auo();
ae.sr.value=ae.HS.value;
ae.acC("paste");
ae.focus("end");
}
);
},

bYS:function()
{
var ae=this;
this.iw.setTimeout(function()
{
ae.auo();
}
);
},

fDe:function(ag,YU,er)
{
getTop().stopPropagation(ag);
var
ae=this,
aK=ag.srcElement||ag.target,
fNO=aK.parentNode,
eG=fNO.getAttribute("addr");
eG&&ae.Qk(eG);

},

cbV:function(ag,YU,er)
{
var aK=ag.srcElement||ag.target;
if(aK.tagName=="IMG"
&&getTop().isObjContainTarget(YU,ag.srcElement
||ag.target))
{
this.Qk(er);
}
},

ccv:function(ag,YU,er)
{
if(getTop().isObjContainTarget(YU,ag.srcElement||ag.target))
{
this.edit(er);
getTop().stopPropagation(ag);
}
},

cjk:function(ag,YU)
{
if(!this.SK
&&!this.aky(YU)
&&getTop().isObjContainTarget(YU,ag.srcElement
||ag.target))
{
this.acZ(YU,"over");
getTop().showGGoupMember&&getTop().showGGoupMember(YU.getAttribute("addr"),YU);
}
},

cer:function(ag,YU)
{
if(!this.SK
&&!this.aky(YU)
&&!getTop().isObjContainTarget(YU,ag.relatedTarget
||ag.toElement)
&&getTop().isObjContainTarget(YU,ag.srcElement
||ag.target))
{
this.acZ(YU,"normal");
getTop().hideGGoupMember&&getTop().hideGGoupMember(YU.getAttribute("addr"));

}
},

ceC:function(ag)
{
var aK=ag.srcElement||ag.target;
if(aK.className=="menu_item_nofun")
{
return;
}

var ae=this;
switch(aK.getAttribute("opt"))
{
case"cut":
ae.Nb();
if(!getTop().gbIsIE)
{
alert(getTop().T('Auto-cutting is not allowed by your browser settings. Please cut the contents with keyboard shortcut ($cmd$+X). ')
.replace(ae.aFc()));
}
else
{
ae.iw.document.execCommand("Cut");
}
break;
case"copy":
ae.Nb();
if(!getTop().gbIsIE)
{
alert(getTop().T('Auto-copy is not allowed by your browser settings. Please copy the contents with keyboard shortcut ($cmd$+C). ')
.replace(ae.aFc()));
}
else
{
ae.iw.document.execCommand("Copy");
}
break;
case"paste":
ae.Nb();
if(!getTop().gbIsIE)
{
var btZ=prompt(getTop().T([
'According to your browser settings, the editor can not access to contents in clip board. Please paste the contents in the dialogue box manually.  \n\n',
'Please paste the contents in the box below with keyboard shortcut ($cmd$+V), and click OK. '])
.replace(ae.aFc()));
if(btZ)
{
ae.sr.value=btZ;
ae.acC();
ae.focus("end");
}
}
else
{
ae.iw.document.execCommand("Paste");
}
break;
case"edit":
ae.Nb();
ae.edit(aK.getAttribute("addr"));
break;
case"delete":
ae.Nb();
if(ae.ahd())
{
ae.auo();
}
else
{
ae.iw.document.execCommand("delete");
}
break;
case"selectall":
ae.Nb();
ae.btK();
break;
}
},

bZu:function(er)
{
var ae=this;
ae.aWt("");
ae.add(er);
ae.focus();
},

aEb:function()
{
var be=this.jc;
if(be.setCapture)
{
be.setCapture();
}
else
{
this.iw.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
}
},

sm:function(ag)
{
getTop().preventDefault(ag);

},

aLo:function()
{
var be=this.jc;
if(be.releaseCapture)
{
be.releaseCapture();
}
else
{
this.iw.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);
}
}
};


QMAddrInput.hV={
adZ:"QMAddrInput_aTGdf$#HAsGf",
cjz:25,
cel:40,
akz:13,
aEe:1,
wJ:["cut|Cut|$cmd$+X","copy|Copy|$cmd$+C","paste|Paste|$cmd$+V",
"edit|Edit","delete|Delete","seperater","selectall|Select All|$cmd$+A"]
};

QMAddrInput.jM=function(wV)
{
var cv=[],
cr=wV&&wV[this.hV.adZ];
for(var i in cr)
{
cv.push(cr[i]);
}
return cv;
};

QMAddrInput.azQ=function(ml)
{
var az=ml.iw,
adZ=this.hV.adZ;
if(!az[adZ])
{
az[adZ]=new az.Object;
}
az[adZ][ml.nf]=ml;
};


QMAddrInput.ci=
{
fkN:getTop().TE([
'<div id="qmAddrInputFold" class="smart_contact_info_wrap" >',
'<span class="smart_contact_info"><font id="qmAddrInputFoldCnt">$addrCnt$</font> file(s)</span>',
'<span class="smart_contact_gd smart_contact_gd1"></span><span class="smart_contact_gd smart_contact_gd2"></span><span class="smart_contact_gd smart_contact_gd3"></span>',
'</div>'
]),
bVI:getTop().TE(
[
'<div style="position:absolute;color:#A0A0A0;padding-top:1px;',
'$@$if(!$defaulttext$)$@$',
'display:none;',
'$@$endif$@$',
'">$defaulttext$</div>',

'<div class="$css$" style="float:left;border:none;overflow:hidden;width:$width$px;">',





'<input type="input" style="border:none;outline:none;-webkit-appearance:none;width:100%;" ime-mode="disabled" $accesskey$/>',

'<div style="width:1px;height:1px;overflow:auto;*overflow:hidden;white-space:nowrap;border:none;margin:0;padding:0;"></div>',
'</div>',

'<div style="clear:both;border:none;margin:0;padding:0;" unselectable="on">',
'<input type="text" style="position:absolute;border:none;padding:0;width:10px;left:-9999px;top:-9999px;" tabindex=-1 >',

'</div>'
]
),
cjE:getTop().T([
'<div style="width:8px;height:8px;*width:12px;*height:12px;',
'font-size:1px;border:2px solid #7B7D84;position:absolute;top:18px;left:9px;"></div>',


'<div style="background:#fff;width:11px;height:11px;font:1px;opacity:0;filter:alpha(opacity:0);"></div>'
]),
cjr:getTop().T([
'<table style="position:absolute;z-index:999;left:-200px;top:0;"',
' cellspacing="0" cellpadding="0" onmousedown="return false;" unselectable="on">',
'<tr><td>',
'<div style="border:1px solid #ACA899;width:$width$px;padding:2px;background:#fff;">',
'$items$',
'</div>',
'</td><td style="height:100%;filter:alpha(opacity=50);opacity:0.5;">',
'<div style="margin-top:4px;border-left:2px solid black;height:100%;"></div>',
'</td></tr>',
'<tr><td style="filter:alpha(opacity=50);opacity:0.5;">',
'<div style="margin-left:4px;border-top:2px solid black;height:2px;"></div>',
'</td><td style="filter:alpha(opacity=50);opacity:0.5;">',
'<div style="margin-left:0px;border-top:2px solid black;height:2px;"></div>',
'</td></tr>',
'</table>'
]),
chK:getTop().T([
'<div class="menu_item" onmouseover="',
'if (this.className == \x27menu_item\x27)',
'{',
'this.className = \x27menu_item_high\x27;',
'}',
'" onmouseout="',
'if (this.className == \x27menu_item_high\x27)',
'{',
'this.className = \x27menu_item\x27;',
'}',
'" style="padding:0 20px;line-height:19px;" unselectable="on" opt="$operate$">',
'<div style="float:right;" unselectable="on" opt="$operate$">$shortcut$</div>',
'$name$',
'</div>'
]),
bYQ:getTop().T([
'<div style="font-size:1px;height:7px;overflow:hidden;" unselectable="on">',
'<div style="border-top:1px solid #ACA899;margin-top:3px;"></div>',
'</div>'
]),
bpU:getTop().TE([
'$@$if($nick$)$@$"$nick$"<$@$endif$@$',
'$addr$',
'$@$if($nick$)$@$>$@$endif$@$',
'$splitchar$'
]),
bpP:getTop().T([
'$alias$',
'$@$if($domain$)$@$',
'<span class="domain" unselectable="on" addr="$addr$">@$domain$</span>',

'$@$endif$@$',
])
};

QMAddrInput.ci.aPG=getTop().TE([
'<div class="',
'$@$if(!$isvalid$)$@$',
'$css.error$',
'$@$else if($isdomainerr$)$@$',
'$css.dmerror$',
'$@$else$@$',
'$css.normal$',
'$@$endif$@$',
'" style="float:left;white-space:nowrap;" ',
'$@$if(!$isvalid$)$@$',
'title="$@$sec errmsg$@$$@$if(!$addrError$)$@$',
'The address format errors, double-click the modified',
'$@$else$@$',
'The e-mail address does not exist, and double-click to modify',
'$@$endif$@$$@$endsec$@$ "',
'$@$else if($isdomainerr$)$@$',
'title="$@$sec errdomainmsg$@$The domain name does not exist. Please double click to edit. $@$endsec$@$" ',
'$@$else$@$',
'title="$addr$"',
'$@$endif$@$',
'addr="$addr$" unselectable="on">',
'$@$if($nick$)$@$',
'<b unselectable="on" addr="$addr$">$nick$</b>',
'<span unselectable="on" addr="$addr$"',
'$@$if($dispmode$=="onlynick")$@$',
' style="display:none";',
'$@$endif$@$',
'>&lt;',
QMAddrInput.ci.bpP,
'&gt;</span>',
'$@$else$@$',
'<b unselectable="on" addr="$addr$">',
QMAddrInput.ci.bpP,
'</b>',
'$@$endif$@$',
'<span class="semicolon">',
'$splitchar$',
'</span>',
'<a href="javascript:;" class="addr_del" name="del"></a>',
'</div>'
]);

QMAddrInput.bUU=function()
{
var ah=getTop(),
bK="IS_SHOW_TOADDR_TIP",
ik=ah.getGlobalVarValue(bK);

if(typeof ik=="undefined")
{
ah.setGlobalVarValue(bK,"loading")
ah.QMAjax.send("/cgi-bin/readtemplate",
{
content:ah.T("sid=$sid$&t=tip&s=isshowtip&tipid=29").replace({sid:ah.getSid()}),
onload:function(bz,bU)
{
ah.setGlobalVarValue(bK,bU)
}
}
);
}

return ah.gnIEVer!=7&&ik=="true";
};

QMAddrInput.aMY=function()
{
getTop().ossLog("realtime","all","stat=tips&type=close&tipid=29");
getTop().setGlobalVarValue("IS_SHOW_TOADDR_TIP","false");
};

function qmaddrinput_js(){}
