










































































function extendEx(aj,DZ,Qf)
{
for(var i in DZ)
{
if(Qf||typeof(aj[i])=="undefined"||aj[i]==null)
{
aj[i]=DZ[i];
}
}
return aj;
}


function QMTreeView(aj)
{
var ae=this;
ae.bR=aj;
ae.fh();
}

QMTreeView.prototype={
fh:function()
{
var ae=this,
aE=ae.bR,
be=aE.oContainer,
aUM=aE.oDefaultItem;
ae.bmd={};
ae.Mi=be.ownerDocument;
ae.bZs=1;

addEvent(be,"click",function(ag){

stopPropagation(ag);
preventDefault(ag);
if(callBack.call(ae,ae.bR.onclick,[ag]))
{
ae.aiD(ag);
}
});

ae.bll(aUM).bnj(be,aUM).btm(aUM);

callBack.call(ae,ae.bR.onload);

return ae;
},





bll:function(XM)
{
var ae=this,
hO=now(),
po;
for(var aN=XM.length-1;aN>=0;aN--)
{
po=extendEx(XM[aN],{
nTime:hO,
sDisplay:"",
sHashCode:ae.bZs++
}
);
ae.bmd[po.sHashCode]=po;
}
return ae;
},

bnj:function(wi,XM)
{
var amc=QMTreeView.ci.yE,
bG=[],
po;
for(var aN=0,aF=XM.length;aN<aF;aN++)
{
var po=XM[aN];
bG.push(amc.replace(extend({sClass:'groupclose',sub:0},po)));
if(po.sType!="item")
{
bG.push(amc.replace(extendEx({sClass:'groupsub',sDisplay:'none',sub:1},po)));
}
}
wi.innerHTML=bG.join("");
return this;
},

cFv:function(wi,aS,bZ)
{
if(typeof bZ=="undefined")
{
return wi.getAttribute(aS);
}
else
{
wi.setAttribute(aS,bZ);
return wi;
}
},




aCP:function(Uv,bzm,wi)
{
var ae=this,
fVz=bzm||0,
de=wi||ae.bR.oContainer,
aQb=GelTags("div",de),
aL=[];
if(typeof Uv!="undefined")
{
for(var aN=0,aF=aQb.length;aN<aF;aN++)
{
var aDy=aQb[aN];
if((Uv==null^ae.cFv(aDy,'key')==Uv)&&ae.cFv(aDy,'sub')==fVz)
{
aL.push(aDy);
}
}
}
return aL;
},

chX:function(wi)
{
var ae=this,
aDy=wi.parentNode.firstChild,
aL=[];
while(aDy)
{
if(ae.cFv(aDy,'key')!=null)
{
aL.push(aDy);
}
aDy=aDy.nextSibling;
}
return aL;
},

aPY:function(wi)
{
var ae=this;
while(wi)
{
if(ae.cFv(wi,'sub')=='1')
{
return wi;
}
wi=wi.nextSibling;
}
},





aDL:function(cu)
{
var ae=this;

return ae.bmd[typeof cu=="string"?cu:ae.cFv(cu,'key')];
},

addNodeData:function(an)
{
var ae=this,
po=ae.bmd,
aD=an||[];
for(var i=0,len=aD.length;i<len;i++)
{
var dg=aD[i];
!po[dg.sHashCode]&&(po[dg.sHashCode]=dg);
}
},

aiD:function(ag)
{
var aK=getEventTarget(ag),
ae=this;
while(!ae.cFv(aK,'key'))
{
aK=aK.parentNode;
}
if(ae.cFv(aK,'sub')=='0')
{
var po=ae.aDL(aK);
if(po.sType=='group'||po.sType=='moreItem')
{
po.nStatus&2?
ae.aSr(aK):
ae.VF(aK);
}

callBack.call(ae,ae.bR.onselect,[po]);
}
},

aSr:function(wi)
{
var ae=this,
po=ae.aDL(wi);
if(po.sType=='item'||!(po.nStatus&2))
{
return;
}
var cnc=ae.aPY(wi),
aDz=ae.aCP(null,0,cnc),
oj,eSn;
for(var iV=aDz.length-1;iV>=0;iV--)
{

bsA=ae.aDL(oj=aDz[iV]);
if(bsA.sType=="moreItem")
{
eSn=ae.aPY(oj);
show(oj,1);
show(eSn,0);
bsA.nStatus&=13;
}
}
if(po.sType=="moreItem")
{
show(wi,1);
}
else
{
setClass(wi,'groupclose');
}
show(cnc,0);
po.nStatus&=13;
},







collapse:function(Uv)
{
for(var ae=this,rO=ae.aCP(Uv),aN=0,QK=rO.length;aN<QK;aN++)
{
ae.aSr(rO[aN]);
}
},

btm:function(XM)
{
var ae=this;
for(var aN=0,QK=XM.length;aN<QK;aN++)
{
var aD=XM[aN];
if(aD.bExpanded)
{
ae.expand(aD.sHashCode);
}
}
return ae;
},

VF:function(wi,YA)
{
var ae=this,
po=ae.aDL(wi);
if(po.sType=='item'||(po.nStatus&2)&&!YA)
{
return;
}
var cnc=ae.aPY(wi),
ayn=callBack.call(ae,ae.bR.ongetdata,[po]);

if(po.sType=="moreItem")
{
show(wi,0);
}
else
{
if(ae.bR.bUnique&&po.sType=="group")
{
var JH=ae.chX(wi);
for(var aN=0,QK=JH.length;aN<QK;aN++)
{
if(JH[aN]!=wi)
{
ae.aSr(JH[aN]);
}
}
}
setClass(wi,'groupopen');
}
if(ayn!=null)
{
ae.bll(ayn).bnj(cnc,ayn).btm(ayn);

}
show(cnc,1);
po.nStatus|=3;
},




expand:function(Uv,YA)
{
for(var ae=this,rO=ae.aCP(Uv),aN=0,QK=rO.length;aN<QK;aN++)
{
ae.VF(rO[aN],YA);
}
},

toggle:function(Uv)
{
var ae=this,
po=ae.aDL(Uv);
ae[po.nStatus&2?'collapse':'expand'](po.sHashCode);
return ae;
},

showItem:function(Uv,fZ)
{
for(var ae=this,rO=ae.aCP(Uv),aN=0,QK=rO.length;aN<QK;aN++)
{
show(rO[aN],fZ);
}
}












};

QMTreeView.ci={
yE:T(['<div class="$sClass$" style="display:$sDisplay$" key="$sHashCode$" sub="$sub$">$sItemValue$</div>'])
};






























function QMLinkman(aj)
{
var ae=this;
ae.bR=aj;
ae.Mi=aj.oContainer.ownerDocument;
ae.aEf=unikey("lm");

ae.aev={};

ae.asY={};



ae.fh();
}

QMLinkman.prototype={
fh:function()
{
var ae=this;
if(ae.bR.nType==1)
{
ae.cbS();
}
ae.fY();
},






eGu:function(pG,aS)
{
var ae=this,
ty=getTop().QMAddress,
auP=100000;
while(ty.getAddress(auP)||ae.asY[auP])
{
auP++;
}
return ae.asY[auP]={
id:auP,
pinyin:aS,
email:pG,
name:aS,
qq:-1
};
},

cbS:function()
{
var ae=this,
ty=getTop().QMAddress,
bih=ae.bR.oExitAddress;


ae.Vz=[];


if(!bih)
{
return;
}

for(var aN=0,cZ=bih.length;aN<cZ;aN++)
{
var fe=bih[aN].addr,
aV=bih[aN].nick,
fi=ty.getAddress(fe);
ae.aev[fe]=1;
if(fi)
{
ae.Vz.push(fi.id);
}
else
{
fi=ae.eGu(fe,aV);
ae.Vz.push(fi.id);
}
ae.aVE(fi,1);
}
},

cgf:function(an)
{
var ae=this,
aE=ae.bR,
ah=getTop(),
gb=an.nTime,
cR=QMLinkman.ci,
aU=an.fL.id,
lQ=ah.QMAddress,
vK=lQ.getGroup(aU),
aMT=vK.addressesId,
bC=[],
fei=aE.onfilteraddr;
if(lQ.getTime()<=gb&&(an.nStatus&1))
{

return null;
}


var VA=lQ.getGroup(aU),
ayl=VA.groupsId;
if(ayl)
{
for(var iV=0,aF=ayl.length;iV<aF;iV++)
{
var cQl=lQ.getGroup(ayl[iV]),
bpC=cQl.addressesId.length,
aCx=aE.bSupportGroup&&bpC>0&&bpC<21&&ayl[iV]>9&&lQ.getAncestor(cQl)==1;
bC.push(
{
sType:'group',
sItemValue:cR.bFf.replace({
other:aCx||(ayl[iV]===3&&aE.nType===0)?cR.buD.replace({
disp:'none',


name:ayl[iV]===3?'Clear':'Select All',
title:ayl[iV]===3?'Clear recent contacts':'',
fun:'g'+cQl.id
}):'',
cac:aCx?'lm_cac':'',
name:cQl.name
}),
sHashCode:'g'+cQl.id,
nTime:lQ.getTime(),
fL:cQl

}
);
}
}

for(var aN=0,cZ=aMT.length;aN<cZ;aN++)
{
var qs=ah.QMAddress.getAddress(aMT[aN]);
qs&&(!fei||ah.callBack(fei,[qs])!==false)&&bC.push(
{
sType:'item',
sItemValue:cR.boZ.replace({
beforeImage:aCx&&qs.nShortcutGroupId?cR.fyn:(qs.qq==getTop().g_admuin?cR.cHB:''),
title:qs.email,
name:qs.name,
memo:qs.memo
}),
sHashCode:qs.id,
nTime:lQ.getTime(),
sDisplay:ae.aev[qs.email]?'none':''
}
);
}


if(typeof vK.moreChildId!="undefined")
{
var aLl=lQ.getGroup(vK.moreChildId);
bC.push(
{
sType:'moreItem',
sItemValue:cR.boZ.replace({

title:aLl.name,
name:"<b>Show more\u2193</b>"
}),
sHashCode:'m'+aLl.id,
nTime:lQ.getTime(),
fL:aLl
}
);
}

if(an.sType!="title")
{

if(cZ==0)
{
bC.push(
{
sType:'title',
sHashCode:"-1",
sItemValue:cR.bBO.replace({
locale:getTop().getLocale(),
message:{
"Frequent Contacts":"Frequent Contacts",
"Inactive Contacts":"Inactive Contacts"
}[vK.name]||"Contacts"
})
}
);
}
}

return bC;
},

fY:function()
{
var ae=this,
aE=ae.bR,
be=aE.oContainer,

lQ=getTop().QMAddress,
cR=QMLinkman.ci,
aZo=aE.oMainGroup,
bsD=[];

be.innerHTML=cR.bSt.replace(
{
pid:ae.aEf
}
);

for(var aN=0,cZ=aZo.length;aN<cZ;aN++)
{
var VA=lQ.getGroup(aZo[aN]);
if(!VA||!VA.groupsId)
{
continue;
}
bsD.push(
{
sType:'title',
bExpanded:true,
sHashCode:'t'+VA.id,
fL:VA,
sItemValue:cR.aLv.replace({
title:VA.name








})
}
);
}








var aEq;
ae.cIy=new QMTreeView({
oContainer:S(ae.aEf+'tree',ae.Mi),
oDefaultItem:bsD,


ongetdata:function(an)
{
return ae.cgf(an);
},
onload:function()
{
this.expand(aEq='g3');
},

onclick:function(ag)
{
var aK=getEventTarget(ag);
while(aK&&aK.nodeType==3)
{
aK=aK.parentNode;
}
var Wm=aK.getAttribute("fun");

if(!Wm)
{
return true;
}
if(Wm=="qq")
{

lQ.importqq();
}
else if(Wm=='creategroup')
{
goUrlMainFrm("/cgi-bin/addr_listall?sid="+getSid()+"&category=mailgroup&groupaddr=&t=mail_group_addr");
}
else if(Wm.charAt(0)=='g')
{

var aah=Wm.substr(1);
if(aah==="3")
{
QMAjax.send(T("/cgi-bin/addr_opr?sid=$sid$&action=clearupdatetime").replace(
{
sid:getSid()
}),
{
onload:function(bz,bU)
{
if(bz&&bU.indexOf('<!--cgi exception-->')==-1)
{
showInfo("recent contacts cleared");
QMAddress.setExpired(0);
QMAddress.initAddress&&QMAddress.initAddress();
var de=ae.cIy.aCP("g3")[0],
cnc=ae.cIy.aPY(de),
ayn=[{
sType:'title',
sHashCode:"-1",
sItemValue:cR.bBO.replace({
locale:getTop().getLocale(),
message:"Contacts"
})
}];
ae.cIy.bll(ayn).bnj(cnc,ayn);
show(cnc,1);
}
else
{
showError("recent contacts clear fail , please retry");
}
}
});
}
else
{
var fL=lQ.getGroup(aah),
brI=fL.addressesId,
aF=brI.length,
aN;
for(aN=0;aN<aF;aN++)
{
ae.dEf(1,brI[aN]);
}
}
}
return false;
},

onselect:function(an)
{

if(an.sType=="group"&&an.sHashCode!=aEq)
{
this.collapse(aEq);
aEq=an.sHashCode;
}
if(an.sType=="item")
{
callBack.call(ae,ae.dEf,[true,an.sHashCode]);
}
}

});

ae.kc();

},

showHint:function(an)
{
var ae=this,
fgf=S(ae.aEf+'tree',ae.Mi),
dfy=S(ae.aEf+'hint',ae.Mi),
cR=QMLinkman.ci,
eZd=10;

if(!an||!an.length)
{
VF(dfy,false);
return;
}

if(!dfy)
{
insertHTML(fgf,"afterBegin","<div id='"+ae.aEf+"hint' style='display:none;'>"+cR.eOV.replace(an.slice(0,eZd))+"</div>");
dfy=S(ae.aEf+'hint',ae.Mi);
}
else
{
dfy.innerHTML=cR.eOV.replace(an.slice(0,eZd));
}
VF(dfy,true);

var po=[];
for(var i=0,len=an.length;i<len;i++)
{
po.push({sHashCode:an[i].oAddress.id,sType:"item"});
}
ae.cIy&&ae.cIy.addNodeData(po);

function VF(as,akQ)
{
if(!as)return;

var lZ=getTop().qmAnimation;
lZ?lZ[akQ?'expand':'fold'](as,
{
durlimit:300,
type:'wait',
speed:'fast',
onready:function()
{
return{
from:as.clientHeight||0
};
},
oncomplete:function()
{
show(as,akQ);
}
}):show(as,akQ);
}
},

kc:function()
{



var ae=this,
CJ=function(ag,aA)
{
var aK=getEventTarget(ag),
arl=[ae.aEf,aA,""].join("_");
while(aK)
{
if((aK.id||"").indexOf(arl)==0)
{
return aK.id.substr(arl.length);
}
aK=aK.parentNode;
}
return null;
},
eEU=S(ae.aEf+'search',ae.Mi),
bGu=S(ae.aEf+'searchtext',ae.Mi),
dFr=S(ae.aEf+'cancel',ae.Mi),
bqn="rgb(160, 160, 160)",
awe="Search contact...";

addEvent(eEU,"click",function(ag)
{
var aU=CJ(ag,'s');
if(aU)
{
ae.dEf(1,aU);
}
eEU.blur();
stopPropagation(ag);
preventDefault(ag);
}
);

addEvent(dFr,"click",function()
{
ae.YO(false);
bGu.value=awe;
bGu.style.color=bqn;
dFr.blur();
}
);

var eMC;

addEvents(bGu,
{
blur:function()
{
if(bGu.value=="")
{
bGu.value=awe;
bGu.style.color=bqn;
}
},
focus:function()
{
if(bGu.value==awe)
{
bGu.value="";
bGu.style.color="#000000";
}
},
keyup:function()
{
clearTimeout(eMC);
eMC=setTimeout(function()
{
ae.aaf(bGu);
ae.YO(!!bGu.value);
},300);
}
}
);

addEvent(ae.bR.oContainerRight,"click",function(ag)
{
var aU=CJ(ag,'r');
if(aU)
{
ae.dEf(0,aU);
}
stopPropagation(ag);
preventDefault(ag);
}
);
},

aaf:function(cG)
{
function dTV(pL)
{
return!pL.nShortcutGroupId;
}

var ae=this,
lQ=getAddrACData(cG,null,ae.bR.onfilteraddr||ae.bR.bSupportGroup||dTV),
bG=['<div style="padding:5px">Found: </div>'],
cR=QMLinkman.ci,
Bi=/\"(.*)\" &lt;(.*)&gt;$/,
eId=S(ae.aEf+'search',ae.Mi);

if(!eId)
{
return;
}

ae.dKt=0;

for(var aN=0,aF=lQ.length;aN<aF;aN++)
{
var fi=lQ[aN],
fe=fi.oAddress.email,
fxu=ae.aev[fe];

if(fi.oAddress.nShortcutGroupId||fi.oAddress.qq==getTop().g_admuin)
{
bG.push(cR.bOc.replace(
{
pid:ae.aEf,
id:fi.oAddress.id,
title:[fi.oAddress.name,' (',fi.oAddress.email,')'].join(""),
disp:ae.aev[fe]?"none":"",
name:fi.sItemValue,
email:fi.oAddress.email
})
);
}
else
{
var eKa=/\"(.*)\" &lt;(.*)&gt;\((.*)\)$/;

if(!Bi.test(fi.sItemValue))
{
eKa.test(fi.sItemValue);
}
bG.push(cR.bOc.replace(
{
pid:ae.aEf,
id:fi.oAddress.id,
title:fe,
disp:ae.aev[fe]?"none":"",
name:RegExp.$1,
email:RegExp.$2,
memo:RegExp.$3 
})
);
}

ae.dKt+=fxu?0:1
}
bG.push(cR.cjG.replace(
{
pid:ae.aEf,
disp:ae.dKt?'none':''
})
);

if(window.QMAddrParser)
{
var cvE=trim(cG.value);
if(QMAddrParser.isEmailAddress(cvE)&&ae.aev[cvE]!=1&&!getTop().QMAddress.getAddress(cvE))
{
var sg=cvE.replace(/@.+/,""),
fi=ae.eGu(cvE,sg);

bG.push(cR.ftq.replace(
{
pid:ae.aEf
})
);
bG.push(cR.bOc.replace(
{
pid:ae.aEf,
id:fi.id,
title:cvE,
disp:"",
name:sg,
email:cvE
})
);
}
}
eId.innerHTML=bG.join("");
},

YO:function(dCr)
{
var ae=this,
fgF=S(ae.aEf+'tree',ae.Mi),
fEm=S(ae.aEf+'hint',ae.Mi),
fws=S(ae.aEf+'search',ae.Mi),
dFr=S(ae.aEf+'cancel',ae.Mi);
show(fgF,!dCr);
show(fEm,!dCr);
show(fws,dCr);


setClass(dFr,dCr?"lm_sclose":"lm_sopen");
},





dEf:function(fkr,aJ)
{
var ae=this,
ty=getTop().QMAddress,
fi=ty.getAddress(aJ)||ae.asY[aJ],
aE=ae.bR,
cU=[];
if(aE.nType==0)
{
cU=[fi];
}
else
{
var dJw=S(ae.aEf+"_s_"+aJ,ae.Mi);
if(fkr)
{
if(!ae.aev[fi.email])
{
ae.cIy.showItem(aJ,false);
if(dJw)
{
if(!ae.asY[fi.id])
{
show(ae.aEf+'noaddress',!--ae.dKt,ae.Mi);
}
show(dJw,0);
}

ae.aev[fi.email]=1;
ae.Vz.push(aJ);
ae.aVE(fi,1);
}
}
else
{

if(ae.aev[fi.email]==1)
{
ae.cIy.showItem(aJ,true);
if(dJw)
{
if(!ae.asY[fi.id])
{
show(ae.aEf+'noaddress',!++ae.dKt,ae.Mi);
}
show(dJw,1);
}
ae.aev[fi.email]=0;
ae.aVE(fi,0);

for(var aN=0,aF=ae.Vz.length;aN<aF;aN++)
{
if(ae.Vz[aN]==aJ)
{
ae.Vz.splice(aN,1);
break;
}
}
}
}
for(var aN=0,aF=ae.Vz.length;aN<aF;aN++)
{
var eB=ae.Vz[aN];
cU.push(ty.getAddress(eB)||ae.asY[eB]);
}
}
callBack.call(ae,aE.onselect,[cU]);

},

aVE:function(pL,fZ)
{
var ae=this,
eGJ=[ae.aEf,'r',pL.id].join('_');
if(fZ)
{
insertHTML(ae.bR.oContainerRight,'beforeEnd',
QMLinkman.ci.cen.replace(extend(
{
rid:eGJ
},pL)
)
);
}
else
{
removeSelf(S(eGJ,ae.Mi));
}
},




show:function(dB)
{
var ae=this;
if(typeof dB=="string")
{
ae.bR.oContainer.innerHTML=dB;
}
else
{
ae.kF=dB;
ae.aKM=now();
ae.fY();
}
},






getAddress:function()
{
var ae=this,
aL=[],
ty=getTop().QMAddress,
aJ;
for(var aN=0,aF=ae.Vz.length;aN<aF;aN++)
{
aJ=ae.Vz[aN];
aL.push(ty.getAddress(aJ)||ae.asY[aJ]);
}
return aL;
}

};

QMLinkman.ci={
aLv:T('<div class="settingtable qqshowbd" style="padding:4px 0 2px 8px;" >$other$$title$</div>'),



bFf:T('<div class="$cac$" onmouseover="this.style.background=\'#ffeec2\'" onmouseout="this.style.background=\'#fff\'" style="padding:2px 0 1px;overflow:hidden;height:100%;"><div style="overflow:hidden;width:100%">$other$<div title="$name$" class="lm_ca"><a nocheck="true"><input type="button" class="lm_ico"/>$name$</a></div></div></div>'),

buD:T('<a nocheck="true" href="javascript:\'\'" class="lm_rt" fun="$fun$" title="$title$">$name$</a>'),

bSt:T([
'<div class="lm_sbar">',
'<input type="button" id="$pid$cancel" class="lm_sopen"/>',
'<div>',
'<input id="$pid$searchtext" type="text" class="txt" value="Search contact..." autocomplete="off"/>',
'</div>',
'</div>',
'<div id="$pid$tree" class="lm_panel"></div>',
'<div id="$pid$search" class="lm_panel" style="display:none;"></div>'
]),

eOV:TE([
'<ul class="addr_associate">',
'<li class="fn" style="padding:4px 0 4px 8px; margin:0; height:15px; line-height:15px;" >Do you wanna find...</li>',
'</ul>',
'<div class="groupsub">',
'$@$for($_this_$)$@$',
'<div class="groupclose" key="$oAddress.id$" sub="0">',
'<a unselectable="on" nocheck="true" onmousedown="return false;" href="javascript:\'\'" title="$oAddress.email$" class="lm_addr">$oAddress.name$</a>',
'</div>',
'$@$endfor$@$',
'</div>',
]),

boZ:TE('<a unselectable="on" nocheck="true" onmousedown="return false;" href="javascript:\'\'" title="$title$" class="lm_addr">$beforeImage$$name$$@$if($memo$)$@$($memo$)$@$endif$@$</a>'),

cen:T([
'<a id="$rid$" title="$email$" nocheck="true" class="lm_addr lm_raddr" href="javascript:\'\'">',
'<input type="button" class="mov"/>',
'<div style="overflow:hidden;height:100%;*float:right;">',
'<div style="overflow:hidden;width:100%;">$name$</div>',
'</div>',
'</a>'
]),

bOc:TE([
'<a nocheck="true" id="$pid$_s_$id$" title="$title$" style="display:$disp$" class="lm_saddr" href="javascript:\'\'" onclick="return false">',
'<div class="lm_name">$name$$@$if($memo$)$@$($memo$)$@$endif$@$</div>',
'<div class="lm_email">$email$</div>',
'</a>'
]),

cHB:T(['<img class="lm_groupAutoIcon" src="',getPath("image"),'spacer.gif" title="','Group account','"/>']),

fyn:T(['<img class="lm_groupUnfold" src="',getPath("image"),'spacer.gif" title="','Group ID','"/>']),


bBO:TE('<div style="margin:4px 0 6px 17px;color:#797979">',
'$@$if($locale$=="zh_CN")$@$',
'(None$message$)',
'$@$else$@$',
'None',
'$@$endif$@$',
'</div>'),

cjG:T('<div id="$pid$noaddress" style="padding:5px;display:$disp$">No matched contact found</div>'),

ftq:T('<div id="$pid$stranger" style="padding:5px;display:$disp$">\u662F\u5426\u6DFB\u52A0</div>'),

"":null
};


















































































































QMLinkman.showDlg=function(mH,bbb,cT)
{
cT=cT||{};
var ah=getTop(),
fgv=bbb&&!bbb.get&&bbb.value!=""&&window.QMAddrParser?QMAddrParser.parseAddr(bbb.value):[],
eaA=bbb&&bbb.get?bbb.get("json"):fgv,
dYn=null;

new QMDialog({
sId:"add_address",
sTitle:"Add from contact list",
sBodyHtml:T([
'<div class="lm_dlg" style="background:none;">',
'<div style="text-align:left; padding:0 0 6px 0;height:$height$px;">',
'<div id="loading" style="text-align:center;line-height:350px">Loading...</div>',
'<table id="content" width="93%" border="0" align="center" cellpadding="0" cellspacing="0" style="table-layout:fixed;display:none;">',
'<tr>',
'<td width="190" style="font-size:14px;font-weight:bold;padding:12px 0 3px 0;">Contacts<span id="totleNum"></span></td>',
'<td width="20">&nbsp;</td>',
'<td width="190" style="font-size:14px;font-weight:bold;padding:12px 0 3px 0;"><span id="text_name">$who$</span><span id="selectNum"></span>&nbsp;</td>',
'</tr>',
'<tr>',
'<td><div class="bd_upload lm_cnt" id="left"></div></td>',
'<td align="center"><img src="/zh_CN/htmledition/images/arrow_left.gif"/></td>',
'<td><div id="right" class="bd_upload lm_cnt" style="overflow-y:auto;"></div></td>',
'</tr>',
'</table>',
'</div>',
'</div>'
]).replace({
who:{"to":"To","cc":"Cc","bcc":"Bcc","sc":"Send individually","sms":"Receiver","member":"Members"}[mH],
height:"auto"
}),
sFootHtml:T([
'<input type="button" class="btn wd2" id="ok" value="OK"/>',
'<input type="button" class="btn wd2" id="cancel" value="Cancel" />'
]).toString(),
nWidth:cT.sDlgWidth||480,
bClose:true,

onshow:function()
{
var dj=this;
waitFor(function()
{
return ah.QMAddress&&ah.QMAddress.isInit();
},
function(bz)
{
if(bz)
{
dYn=new QMLinkman({
nType:1,
bSupportGroup:cT.bSupportGroup,
oMainGroup:cT.oMainGroup||["mailgroup",11,"domaingroup","qqgroup"],
oContainer:dj.S("left"),
oContainerRight:dj.S("right"),
oExitAddress:cT.oExitAddress||eaA,
onselect:function(aXE)
{
dj.S("selectNum").innerHTML=aXE.length?['(',aXE.length,')'].join(""):'';
},
onfilteraddr:cT.onfilteraddr
});
dj.S("totleNum").innerHTML="("+ah.QMAddress.countAddress()+")";
dj.S("selectNum").innerHTML=eaA.length?['(',eaA.length,')'].join(""):'';

show(dj.S("loading"),false);
show(dj.S("content"),true);
}
}
);

},
onload:function()
{
var dj=this;
addEvent(dj.S("ok"),"click",function()
{
if(dYn)
{
var lE=dYn.getAddress();
callBack.call(this,cT.onselect,[lE]);
QMLinkman.addAddrEx(lE,0,bbb);
}
dj.close();
}
);
addEvent(dj.S("cancel"),"click",function()
{
dj.close();
}
);
}
});
return true;
};







QMLinkman.addAddrEx=function(PG,fBR,bbb,biK)
{
var ah=getTop(),
cR=T('"$nick$"<$addr$>; '),
eJH,
fi,
lE;

if(PG&&bbb)
{
!fBR&&(bbb.clear?bbb.clear():bbb.value="");
eJH=bbb.add?
function(er,cQs)
{
bbb.add(er,false,cQs);
}:
function(er)
{
bbb.value+=er;
};

for(var aN=0,QK=PG.length;aN<QK;aN++)
{
fi=PG[aN];
if(fi.nShortcutGroupId)
{
lE=[];
var fL=ah.QMAddress.getGroup(fi.nShortcutGroupId);
for(var ePb=fL.addressesId,iV=0,Xu=ePb.length;iV<Xu;iV++)
{
lE.push(ah.QMAddress.getAddress(ePb[iV]));
}
}
else
{
lE=[fi];
}
for(var iV=0,Xu=lE.length;iV<Xu;iV++)
{
eJH(cR.replace(
{
nick:encodeNick(htmlDecode(lE[iV].name)),
addr:lE[iV].email
}
),lE[iV].name
)
}
}
if(!biK)
{
bbb.focus("end");
}
}
};