


var biO=new Date().getTime();






var	cE,dz;


















var qmAnimation=function(iX)
{
this.NJ=null;
this.Fd=[];
this.aZD={};
this.Kb(iX,true);
};

dz=qmAnimation;
cE=dz.prototype;








cE.play=function(iX)
{
if(typeof iX=="function")
{
if(this.NJ)
{
this.Fd.push(iX);
}
else
{
this.ou(iX(),true);
}
}
else
{
this.stop();
this.ou(iX);
}
};

cE.stop=function()
{
var cM=this;
var bfo=this.Fd;
this.Fd=[];

this.Cb();

E(bfo,function(bdT)
{
var aku=bdT();
if(aku)
{
cM.Kb(aku);
if(typeof(cM.Ov)=="function")
{
cM.Ov.call(cM,cM.Xs,true);
}
}
}
);
};













cE.updateStyle=function(lU,aG,aew)
{
var azL=this.aYj||(this.aYj={}),
cP=aG.style;

if(aew)
{
azL[lU]=cP.cssText;
for(var i in aew)
{
cP[i]=aew[i];
}
}
else
{
cP.cssText=azL[lU];
}
};



cE.Qm=function(aBh)
{
var aBK=true,
aBD=now();

if(aBh||(aBD>this.aBI))
{
this.agU.clearInterval(this.NJ);

this.aBI=0;
this.NJ=null;

if(typeof(this.Ov)=="function")
{
this.Ov.call(this,this.bcl,aBh);
}

if(this.Fd.length>0)
{
this.ou(this.Fd.shift()(),true);
}

aBK=false;
}
else
{
var azv=aBD-this.aBE;
if(typeof(this.aju)=="function")
{
this.aju.call(this,this.aAH(azv,this.aiM,this.aYW,this.WS),
azv/this.WS);
}
}
return aBK;
};

cE.ou=function(iX,bfV)
{
if(bfV&&!iX)
{
if(this.Fd.length>0)
{
this.ou(this.Fd.shift()(),true);
}
return;
}

this.Kb(iX);

this.aBE=now();
this.aBI=this.aBE+this.WS;

if(this.Qm())
{
var cM=this;
this.NJ=this.agU.setInterval(function()
{
cM.Qm();
},
13
);
}
};

cE.Kb=function(iX,beg)
{
if(iX)
{
var Bh=this.aZD;
var rX=beg?Bh:this;
var aAa=this.constructor;

rX.agU=iX.win||Bh.agU||window;

rX.aiM=typeof(iX.from)=="number"?iX.from:Bh.aiM;
rX.Xs=typeof(iX.to)=="number"?iX.to:Bh.Xs;
rX.bcl=typeof(iX.completeto)=="number"?iX.completeto:rX.Xs;
rX.aYW=rX.Xs-rX.aiM;

rX.WS={fast:200,slow:600}[iX.speed]||iX.speed||Bh.WS;

var XI=aAa.azU[iX.tween]||Bh.aAH||aAa.azU.Linear;
rX.aAH=typeof(XI)=="function"?XI:(XI[iX.easing]||XI.easeIn);

rX.aju=iX.onaction||Bh.aju;
rX.Ov=iX.oncomplete||Bh.Ov;
}
};

cE.Cb=function()
{
if(!this.NJ)
return false;

return this.Qm(true);
};





















dz.play=function(ak,aj)
{
var ae=this,
kS=ae.hV,
aM=kS.azV,
Gj=now()+Math.random(),
aE=extend({},aM,aj),
aT,az,cr,lZ;

try
{
aT=ak.ownerDocument;
az=aT.defaultView||aT.parentWindow;
cr=az[kS.XT];
}
catch(bj)
{
return ak;
}
try
{
var ae=this,
kS=ae.hV,
aM=kS.azV,
Gj=now()+Math.random(),
aE=extend({},aM,aj),
aT=ak.ownerDocument,
az=aT.defaultView||aT.parentWindow,
cr=az[kS.XT],
lZ;

}
catch(e)
{
callBack.call(ak,aj.oncomplete,[aj.to,false,false]);
return ak;
}

if(!cr)
{
cr=az[kS.XT]={};
}

function azX(ve,LM)
{
ak.setAttribute(kS.OF,ve+"|"+LM);
}

function aAA(ve)
{
return(ak.getAttribute(kS.OF)||"").split("|")[0];
}

function aBF(beo)
{
ak.setAttribute(kS.agF,beo);
}

function ayU()
{
return ak.getAttribute(kS.agF)||"";
}

function ou(ve,vy)
{
var aBs=cr[ve],
NP=aBs[kS.aAp],
tZ;

azX(ve,NP.actiontype);

if(typeof NP.onready=="function")
{
tZ=NP.onready.call(ak,vy);
}


if(vy||tZ==false)
{
var pI=tZ&&tZ.to;
NP.oncomplete(
typeof pI=="number"?pI:NP.to,
vy,
tZ==false
);
}
else
{

if(tZ)
{
tZ.onaction=tZ.oncomplete=null;
}

aBs.play(tZ||{});
}
}

aE.onaction=function(cO,gv)
{
aj.onaction.call(ak,cO,gv);
};

aE.oncomplete=function(cO,vy,agK)
{
azX("",aj.actiontype);
delete cr[Gj];

aj.oncomplete.call(ak,cO,vy,agK);

var aio=ayU().split("|"),
agM=aio.shift();


if(agM)
{
aBF(aio.join("|"));

if(aio.length==0)
{
ou(agM);
}
else
{
ou(agM,vy);
}
}
};

aE.win=az;
lZ=cr[Gj]=new ae(aE);
lZ[kS.aAp]=aE;

if(aAA())
{
var aza=ayU();
aBF(aza+(aza?"|":"")+Gj);

if(aE.type!="wait")
{

var ahZ=cr[aAA()];
ahZ&&ahZ.stop();
}
}
else
{
ou(Gj);
}

return ak;
};






dz.stop=function(ak)
{
var ae=this,
kS=ae.hV,
aT,az,cr,ajb;

try
{
aT=ak&&ak.ownerDocument;
az=aT.defaultView||aT.parentWindow;
cr=az[kS.XT];
ajb=(ak.getAttribute(kS.OF)||"").split("|")[0];

if(ajb)
{
ak.setAttribute(kS.agF,"");
cr[ajb].stop();
}
}
catch(bj)
{
}

return ak;
};






dz.isPlaying=function(ak)
{
return!!ak.getAttribute(this.hV.OF);
};






dz.getActionType=function(ak)
{
return(ak.getAttribute(this.hV.OF)||"").split("|").pop();
};






















dz.aBt=function(ak,LM,aj)
{
var mW=gbIsIE?1:0,
aE=aj||{},
jR=aE.speed,
Bu=aE.from,
pI=aE.to,
Xp=aE.durlimit||0,
bal=aE.basespeed||1.8,
aZt=aE.unilimit,
aAd=typeof jR=="undefined"||jR=="uniform",
aiA=false,coe;

function agz()
{
var nL=arguments,
gK=aE["on"+nL[0]];
if(typeof gK=="function")
{
return gK.call(nL[1],nL[2]);
}
}

function aBd(as)
{
return as.scrollHeight-(gbIsIE
?0:parseInt(getStyle(as,"paddingTop"))
+parseInt(getStyle(as,"paddingBottom")));
}

return qmAnimation.play(ak,extend({},aE,
{
actiontype:LM,
speed:aAd?"fast":jR,
to:mW,
onready:function(vy)
{
if(!vy)
{
var cP=this.style,
oc,og,OP,qm;

aiA=false;
qm=agz("ready",this)||{};
OP=qm.speed;
oc=typeof qm.from=="number"
?qm.from:Bu;
og=typeof qm.to=="number"
?qm.to:pI;

if(LM=="expand")
{
if(typeof oc!="number"||isNaN(oc))
{
var cX=parseInt(cP.height);
if(isNaN(cX))
{
oc=cP.height=mW;
}
else
{
oc=cX;
}
}
else
{
cP.height=oc;
}
}
else
{
if(typeof og!="number"||isNaN(og)||og<mW)
{
og=mW;
}
}
coe=cP.overflow;
cP.overflow="hidden";
cP.visibility="visible";
if(cP.display=="none")
{
cP.display="";
}


if(gbIsIE)
{
var wt=this.scrollHeight;
}

if(LM=="expand")
{
if(typeof og!="number"||isNaN(og))
{
og=aBd(this);
aiA=true;
}
}
else
{
if(typeof oc!="number"||isNaN(oc))
{
var cX=parseInt(cP.height);
oc=isNaN(cX)
?aBd(this):cX;
}
}

var gZ=og-oc,
bfK=og;
if(Xp>0&&Math.abs(gZ)>Xp)
{
if(gZ>0)
{
og=oc+Xp;
}
else
{
oc=og+Xp;
}
}

if(!OP)
{
if(aAd)
{
var aAV=Math.abs(oc-og),
ahV=qm.unilimit||aZt;
OP=(qm.basespeed||bal)
*(ahV
?Math.min(Math.max(aAV,ahV[0]),ahV[1])
:aAV);
}
else
{
OP=jR;
}
}

return og==oc
?false
:{
from:Math.max(oc,mW),
to:Math.max(og,mW),
completeto:bfK,
speed:OP
};
}
},
onaction:function(cO,gv)
{
this.style.height=cO+"px";
agz("action",this,gv);
},
oncomplete:function(cO,vy,agK)
{
if(!vy)
{
if(cO==mW)
{
show(this,false);
}


this.style.height=aiA?"auto":(cO+"px");
this.style.overflow=coe;
agz("complete",this,cO,agK);
}
}
}
));
};






dz.expand=function(ak,aj)
{
return this.aBt(ak,"expand",aj);
};







dz.fold=function(ak,aj)
{
return this.aBt(ak,"fold",aj);
};

dz.hV={
XT:"QMaNiMatiON_CachE",
aAp:"sTatiC_Play_Conf",
OF:"QMaNiMatiON_PlaY",
agF:"QMaNiMatiON_WaiT",
azV:{
from:1,
to:100,
speed:"fast"
}
};

dz.azU=
{


Linear:function(t,b,c,d)
{
return c*t/d+b;
},
Sine:
{
easeIn:function(t,b,c,d)
{
return-c*Math.cos(t/d*(Math.PI/2))+c+b;
},
easeOut:function(t,b,c,d)
{
return c*Math.sin(t/d*(Math.PI/2))+b;
},
easeInOut:function(t,b,c,d){
return-c/2*(Math.cos(Math.PI*t/d)-1)+b;
}
},
Cubic:
{
easeIn:function(t,b,c,d)
{
return c*(t/=d)*t*t+b;
},
easeOut:function(t,b,c,d)
{
return c*((t=t/d-1)*t*t+1)+b;
},
easeInOut:function(t,b,c,d)
{
if((t/=d/2)<1)return c/2*t*t*t+b;
return c/2*((t-=2)*t*t+2)+b;
}
},
none:false
};





























var qmTab=function(dJ)
{
this.Li(dJ);
this.acG();
};

dz=qmTab;
cE=dz.prototype;



cE.change=function(vO)
{
var Bp=this.agS,
eW=this.hW,
Br=eW.NM,
qX=Bp[vO];

if(!qX||!qX.jP)
return false;

if(Br==vO)
return true;

if(Br)
{
var EM=Bp[Br].kf;
var NQ=qX.kf;

setClass(Bp[Br].eO,this.vz.normal);

if(this.Aw)
{
this.Aw.stop();

function aqK(cO)
{
var jf=cO/100;
setOpacity(EM,jf);
setOpacity(NQ,1-jf);
}

var aix={
display:"",
position:"absolute",
width:getStyle(EM,"width"),
height:getStyle(EM,"height"),
zIndex:1
};

this.Aw.updateStyle("pre",EM,aix);
this.Aw.updateStyle("cur",NQ,(aix.zIndex=2)&&aix);

var bCT=[];
var azo=this.nE.baJ;
this.Aw.play(
{
onaction:function(jq,ciO)
{
aqK(jq);
},
oncomplete:function(jq,aoC)
{
aqK(jq);

this.updateStyle("pre",EM);
this.updateStyle("cur",NQ);

show(EM,false);
show(NQ,true);

if(typeof(azo)=="function")
azo(vO,Br);

}
}
);
}
else
{
show(EM,false);
show(NQ,true);
}
}
else{
show(qX.kf,true);
}

setClass(qX.eO,this.vz.select);

eW.NM=vO;

if(typeof(this.nE.jV)=="function")
this.nE.jV(vO,Br);

return true;
};

cE.enable=function(vO,avz){
var qX=this.agS[vO];
if(!qX)
return false;

setClass(qX.eO,this.vz[
(qX.jP=avz||typeof(avz)=="undefined"?true:false)?
"normal":"disable"]);

return true;
};

cE.getSelectedTabId=function(){
return this.hW.NM;
};



cE.Li=function(dJ){
var Bp=this.agS={};
for(var i in dJ.tab)
Bp[i]={
qe:i,
eO:dJ.tab[i].obj,
kf:dJ.tab[i].container,
jP:true
};

this.vz=dJ.style;
this.nE={
jV:dJ.onchange,
baJ:dJ.onchangeend
};
this.hW={
NM:null
};

if(dJ.isEnableAnimation!=false)
{
this.Aw=new qmAnimation({
win:dJ.win,
from:100,
to:0,
speed:400,
tween:"Sine",
easing:"easeOut"
});
}
};

cE.acG=function(){
var cM=this;
var Bp=this.agS;

for(var i in Bp){
(function(){
var hf=Bp[i];
show(hf.kf,false);








hf.eO.onclick=function()
{
cM.change(hf.qe);
}
hf.eO.onmouseover=function(iP){
if(hf.jP&&cM.hW.NM!=hf.qe)
setClass(hf.eO,cM.vz.over);
}






hf.eO.onmouseout=function(iP){
try{
if(hf.jP&&cM.hW.NM!=hf.qe&&
!isObjContainTarget(hf.eO,iP.relatedTarget||iP.toElement))
setClass(hf.eO,cM.vz.normal);
}
catch(e)
{}
}






})();
}
};









































var qmSimpleThumb=function(dJ){
this.Li(dJ);
this.acG();
};

dz=qmSimpleThumb;
cE=dz.prototype;



cE.enable=function(){
var eW=this.hW;
if(eW.jP==true)
return;

eW.jP=true;
if(eW.jS==-1)
return this.goPage(1);

this.aih();
};

cE.disable=function(){
var eW=this.hW;
if(eW.jP==false)
return;

eW.jP=false;
this.aih();
};

cE.getDataLength=function(){
return this.EX.length;
};

cE.getId=function(){
return this.sj;
};

cE.getSelectedData=function(){
var Ba=this.hW.Ba;

return Ba<0?null:this.EX[Ba];
};

cE.goPage=function(Bo){
var eW=this.hW,
aCv=eW.jS;
if(eW.jP&&Bo>=1&&Bo<=eW.Ay){
eW.jS=Bo;

this.aih();
if(this.bei())
this.azg();
this.bbn();

callBack.call(this,this.nE.bcK,[Bo,aCv]);


return true;
}
return false;
};

cE.select=function(sb){
var qk=this.EX,
eW=this.hW;

sb=parseInt(sb);

if(sb<0)
{

}
else if(isNaN(sb)||((sb=sb%qk.length)==eW.Ba))
{
this.nE.rA.call(this,sb,eW.Xt);
return false;
}

eW.Xt=eW.Ba;
eW.Ba=sb;

this.azg();

if(typeof(this.nE.rA)=="function")
{
this.nE.rA.call(this,sb,eW.Xt);
}

return true;
};

cE.onmouseover=function(ak)
{
if(typeof(this.nE.alD)=="function")
{
this.nE.alD.call(this,ak);
}
return true;
},

cE.onmouseout=function(ak)
{
if(typeof(this.nE.alE)=="function")
{
this.nE.alE.call(this,ak);
}
return true;
},

cE.setExternInfo=function(tn,beu)
{
var eB=parseInt(tn),
aD=this.EX,
apF=this.Og.Fb,
nC=aD.length-1;

if(!isNaN(eB)&&eB>=0&&eB<=nC)
{
var anr=Math.floor((nC-eB)/apF),
dK=nC-eB-anr*apF,
bC=this.vs.Je[anr].firstChild.childNodes;

if(dK<0||dK>=bC.length)
{
return;
}

bC[dK].lastChild.innerHTML=beu;
}
};

cE.update=function(Ot){
this.baU(Ot);
this.bfl();
this.goPage(this.hW.jS=Math.min(this.hW.jS,this.hW.Ay));
};



cE.bgj=function(){
var wf=[];
var LQ=qmSimpleThumb.ci.anE;
var eW=this.hW;
var bbG=this.vz.thumb.container;

for(var i=0,cZ=Math.max(eW.Ay,1);i<cZ;i++)
wf.push(LQ.replace({border:bbG}));

return qmSimpleThumb.ci.aZq.replace({
container:wf.join("")
});
};

cE.ahq=function(akh,bfx){
return qmSimpleThumb.ci.Ww.replace({
images_path:getPath("image"),
msg:akh,
dispload:bfx?"":"none"
});
};

cE.bdD=function(Bo){
var Bc=this.EX;
var Er=Bc.length;

if(Er==0)
return this.ahq("No Data ");

var ayX=this.Og.Fb;
var azO=Bo*ayX;
var Eq=azO-ayX;
var aYB=azO-1;



if(Bc[Eq].indexOf)
{
if(Bc[Eq].indexOf("loading")==0)
{
return this.ahq(Bc[Eq].substr(7)||"Loading...",true);
}
else if(Bc[Eq].indexOf("custom")==0)
{
return this.ahq(Bc[Eq].substr(6));
}
}

var wf=[];
var LQ=qmSimpleThumb.ci.aLS;
var kg=this.vz.thumb;
var BW={
img:kg.img,
normal:kg.normal,
over:kg.over,
images_path:this.Og.aZp
};

if(Bc[Eq].thumb.indexOf("http")==0)
{

BW.images_path="";
}

for(var i=Eq,cZ=Math.min(Er--,aYB+1);i<cZ;i++){
var azF=Er-i;
BW.value=azF;
BW.url=Bc[azF].thumb;
wf.push(LQ.replace(BW));
}

return wf.join("");
};

cE.Li=function(dJ){
this.sj=dJ.id||T("qmSimpleThumb_$date$").replace({
date:now()
});
this.Og={
aZp:dJ.imgpath,
Fb:dJ.numperpage||8
};
this.vs=dJ.dom;
this.vz=dJ.style;
this.nE={
bcK:dJ.onchangepage,
rA:dJ.onselect,
alD:dJ.onmouseover,
alE:dJ.onmouseout
};
this.hW={
jS:-1,
Ay:0,
Ba:-1,
Xt:-1,
jP:null
};

var kf=this.vs.container;
this.Aw=new qmAnimation({
win:dJ.win,
speed:"slow",
tween:"Cubic",
easing:"easeOut",
onaction:function(jq){
kf.scrollLeft=jq;
},
oncomplete:function(jq,aoC){
if(!aoC)
kf.scrollLeft=jq;
}
});

this.update(dJ.data);
this[dJ.enabled?"enable":"disable"]();
};

cE.bfl=function(){
var kf=this.vs.container;
kf.innerHTML=this.bgj();
this.vs.Je=GelTags("td",kf);
};

cE.aih=function(){
var hR=this.vs;
var eW=this.hW;
var kg=this.vz.btn;
var jP=eW.jP;
var jS=eW.jS;
var Ay=eW.Ay;

if(hR.pagetxt&&jP)
hR.pagetxt.innerHTML=qmSimpleThumb.ci.aBS.replace({
page:jS,
total:Ay
});

if(hR.prevbtn)
{



setClass(hR.prevbtn,!jP||jS==1?
kg.disable:kg.normal);

}

if(hR.nextbtn)
{
setClass(hR.nextbtn,!jP||jS==Ay?
kg.disable:kg.normal);


}
};

cE.bei=function(){
var jS=this.hW.jS;
if(jS>0){
var XB=this.vs.Je[jS-1].firstChild;
if(!XB.innerHTML){
XB.innerHTML=this.bdD(jS);
return true;
}
}
return false;
};

cE.azg=function(){
var kg=this.vz.thumb;
var eW=this.hW;

var Er=this.EX.length-1;
var Fb=this.Og.Fb;
var Je=this.vs.Je;

function aAo(XU,aAf){
if(XU<0||XU>Er)
return;

var azI=Math.floor((Er-XU)/Fb);
var PL=Er-XU-azI*Fb;

var SB=Je[azI].firstChild.childNodes;
if(PL<0||PL>=SB.length)
return;

var eO=SB[PL];
eO.setAttribute("select",aAf&&kg.select&&kg.select!=kg.over
&&kg.select!=kg.normal?"true":"false");
setClass(eO,aAf?kg.select:kg.normal);
};

aAo(eW.Ba,true);
aAo(eW.Xt,false);
};

cE.acG=function(){
var cM=this;
var hR=this.vs;
var eW=this.hW;

addEvent(hR.prevbtn,"click",function(ag){
preventDefault(ag);
cM.goPage(eW.jS-1);
});

addEvent(hR.nextbtn,"click",function(ag){
preventDefault(ag);
cM.goPage(eW.jS+1);
});

addEvent(hR.container,"drag",preventDefault);

addEvent(hR.container,"click",function(iP){
preventDefault(iP);
var qO=iP.srcElement||iP.target;
var BW=qO.getAttribute("param");
if(BW)
cM.select(BW);
});

addEvent(hR.container,"mouseover",function(ag)
{

cM.onmouseover(ag);
});
addEvent(hR.container,"mouseout",function(ag)
{

cM.onmouseout(ag);
});
};

cE.bbn=function(){
var jS=this.hW.jS;
if(jS>0){
var kf=this.vs.container;
var XB=this.vs.Je[jS-1];


this.Aw.stop();
this.Aw.play({
from:kf.scrollLeft,
to:XB.offsetLeft
});










}
};

cE.baU=function(Ot){
this.EX=Ot;
this.hW.Ay=1+parseInt((this.EX.length-1)/this.Og.Fb);
};


dz.ci={};

dz.ci.aZq=T([
'<table cellpadding="0" cellspacing="0" border="0">',
'<tr>$container$</tr>',
'</table>'
]);

dz.ci.anE=T([
'<td><div class="$border$"></div></td>'
]);

dz.ci.crc=T([
'<div class="$border$">$content$</div>'
]);

dz.ci.aLS=T([
'<div class="$normal$" un="item" param="$value$"',
'onmouseover="',
'this.getAttribute(\x27select\x27)!=\x27true\x27&&getTop().setClass(this,\x27$over$\x27);',
'" onmouseout="',
'this.getAttribute(\x27select\x27)!=\x27true\x27&&getTop().setClass(this,\x27$normal$\x27);',
'">',
'<img class="$img$" src="$images_path$$url$" param="$value$"/>',

'</div>'
]);

dz.ci.Ww=T([
'<div style="text-align:center;">',
'<img src="$images_path$ico_loading112fb20.gif" style="display:$dispload$;"/>',
'$msg$',
'</div>'
]);

dz.ci.aBS=T([
'$page$ / $total$'
]);
































































var qmGroupThumb=function(dJ){
this.Li(dJ);
};

dz=qmGroupThumb;
cE=dz.prototype;



cE.changeGroup=function(tS){
this.IS.change(tS);
};

cE.enable=function(){
if(this.hW.jP==true)
return false;

this.hW.jP=true;

var KG=this.IS.getSelectedTabId();
if(KG)
this.vC[KG].enable();
};

cE.disable=function(){
if(this.hW.jP==false)
return false;

this.hW.jP=false;

var KG=this.IS.getSelectedTabId();
if(KG)
this.vC[KG].disable();
};

cE.getDataLength=function(tS){
return this.vC[tS].getDataLength();
};

cE.getId=function(){
return this.sj;
};

cE.getSelectedData=function(){
var pq=this.hW.pq;
return!pq?null:this.vC[pq].getSelectedData();
};

cE.goPage=function(Bo){
var yX=this.vC[this.IS.getSelectedTabId()];
if(yX)
yX.goPage(Bo);
};

cE.select=function(sb,tS){
var yX=this.vC[tS||this.IS.getSelectedTabId()];
return yX?yX.select(sb):false;
};

cE.update=function(Ot,tS){
var yX=this.vC[tS];
yX&&yX.update(Ot);
};



cE.Li=function(dJ){
this.sj=dJ.id||T("qmSimpleThumb_$date$").replace({
date:now()
});

this.nE={
rA:dJ.onselect,
jV:dJ.onchange
};

this.hW={
pq:null,
Bt:-1,
jP:null
};

var cM=this;
var axS=this.vC={};
var ayZ={};
var aBC=dJ.group;
for(var OD in aBC){
var aiz=aBC[OD];
ayZ[OD]=aiz.dom;
axS[OD]=new qmSimpleThumb({
id:OD,
win:dJ.win,
imgpath:dJ.imgpath,
numperPage:dJ.numperpage||8,
enabled:false,
dom:{
container:aiz.dom.container,
prevbtn:dJ.dom.prevbtn,
nextbtn:dJ.dom.nextbtn,
pagetxt:dJ.dom.pagetxt
},
style:{
thumb:dJ.style.thumb,
btn:dJ.style.btn
},
data:aiz.data,
onselect:function(Lb,apU){
cM.aZf(this,Lb,apU);
}
});
}

this.IS=new qmTab({
win:dJ.win,
tab:ayZ,
style:dJ.style.group,
onchange:function(vO,Br){
cM.aZP(vO,Br);
}
});

this.IS.change(dJ.defgroupid||OD);
this[dJ.enabled==false?"disable":"enable"]();
};

cE.aZP=function(tS,afN){
var ae=this;
if(!ae.hW.jP)
return;


callBack.call(ae,ae.nE.jV,[tS,afN]);

if(afN)
ae.vC[afN].disable();
ae.vC[tS].enable();
};

cE.aZf=function(ajk,Lb,apU){
var eW=this.hW;
var pq=eW.pq;
var Bt=eW.Bt;

if(Lb!=-1){
eW.pq=ajk.getId();
eW.Bt=Lb;

var aBl=this.vC[pq];
if(Lb!=-1&&pq!=ajk.getId()&&aBl)
aBl.select(-1);
}
else if(pq==ajk.getId()){

eW.Bt=-1;
}

if((pq!=eW.pq||Bt!=eW.Bt)&&
typeof(this.nE.rA)=="function")
this.nE.rA.call(this,
{
groupid:eW.pq,
thumbidx:eW.Bt
},
{
groupid:pq,
thumbidx:Bt
});
};





qmActivex=function(){
this.sj="qmActiveX_"+(new Date()).valueOf();
this.ajh={};
this.vF=null;
};

dz=qmActivex;
cE=dz.prototype;

cE.screenSnap=function(aAN){
var ru=this.Jl("screensnap");
if(!ru)
return false;

try{
ru.cck=(getDomain()=="foxmail.com")?1:0;
}
catch(e){
}

var aab=function(kM){
return function(){
if(typeof(aAN)=="function")
aAN(kM);
};
};

ru.OnCaptureFinished=aab(true);
ru.OnCaptureCanceled=aab(false);

ru.DoCapture();

return true;
};














cE.upload=function(aAC){
this.stopUpload();
this.vF=aAC;

var hF=aAC.config;
if(!hF||!hF.url)
throw{message:"qmActivex:no upload cgi url"};


hF.mode=hF.mode||"download";
hF.from=hF.from||"";
hF.scale=hF.scale||"";
hF.widthlimit=hF.widthlimit||"";
hF.heightlimit=hF.heightlimit||"";

return this.bbW()?true:this.baL();
};

cE.stopUpload=function(){
var fM=this.vF;
if(!fM)
return;

this.vF=null;
if(fM.ahn=="form"){
removeSelf(fM.Jo);
}
else if(fM.ahn=="activex"){
if(fM.wN!=90)
this.Jl("uploader").StopUpload();
}
};

cE.hasClipBoardImage=function(){
var ru=this.Jl("screensnap");
return ru?ru.IsClipBoardImage:false;
};

cE.checkImageType=function(bao,azW){
var bgq=bao.toLowerCase();
var agt="gif|jpg|jpeg|bmp|png".split("|");
for(var i=agt.length-1;i>=0;i--)
if(bgq.indexOf(agt[i])!=-1)
break;

if(-1==i){
var Hy=T("Please upload images of the following format: <b>#type#</b> . ","#").replace({
type:agt
});
if(azW=="showerr")
showError(Hy);
return azW=="returnerr"?Hy:false;
}

return true;
};

cE.Jl=function(Gb)
{
var aBM={
"screensnap":0,
"uploader":2
}[Gb];
if(!detectActiveX(aBM,1))
return null;

if(!this.ajh[Gb])
this.ajh[Gb]=createActiveX(aBM);

return this.ajh[Gb];
};

cE.beb=function()
{
var ru=this.Jl("screensnap");
return ru&&ru.IsClipBoardImage?ru.SaveClipBoardBmpToFile(1):null;
};

cE.bbW=function()
{
var jr=this.Jl("uploader");


if(!jr)
{
return false;
}

var fM=this.vF;
if(fM.fileCtrl&&(getTop().gnIEVer>6||!getTop().gbIsIE))
{

return false;
}

fM.screenImg=this.beb();
if(!fM.fileCtrl&&!fM.screenImg)
{
fM.config.url='';
return false;
}


fM.ahn="activex";
fM.wN=0;
fM.onupload.call(this,"start");

jr.StopUpload();
jr.ClearHeaders();
jr.ClearFormItems();

var hF=fM.config;

if(hF.url.indexOf("http")!=0)
{
jr.URL=[location.protocol,"//",location.host,hF.url].join("");
}
else
{
jr.URL=hF.url;
}

var cM=this;
jr.OnEvent=function(kY,aaO,IX,XP,auV){
cM.bdY(kY,aaO,IX,XP,auV);
}

jr.AddHeader("Cookie",document.cookie);

jr.AddFormItem("sid",0,0,getSid());
jr.AddFormItem("mode",0,0,hF.mode);
jr.AddFormItem("from",0,0,fM.fileCtrl?hF.from:"snapscreen");
jr.AddFormItem("scale",0,0,hF.scale);
jr.AddFormItem("widthlimit",0,0,hF.widthlimit||0);
jr.AddFormItem("heightlimit",0,0,hF.heightlimit||0);


if(fM.fileCtrl){
jr.AddFormItemObject(fM.fileCtrl);
}
else{
jr.AddFormItem("UploadFile",1,4,fM.screenImg);
}

jr.StartUpload();

return true;
};

cE.baL=function(){
var fM=this.vF;
if(!fM.fileCtrl)
return false;

for(var mL=fM.fileCtrl.parentNode;mL&&mL.tagName!="FORM"&&mL.tagName!="BODY";)
mL=mL.parentNode;

if(!mL||mL.tagName!="FORM")
return false;

fM.ahn="form";
fM.onupload.call(this,"start");

var Gi=fM.window||window;
var aja=this.sj;

Gi[aja+"Instance"]=this;
Gi.qmActiveXDoUploadFinish=function(beW){
var eO=Gi[beW.id+"Instance"];
if(eO)
eO.bcY();
};

if(fM.Jo)
{
cpH(fM.Jo);
}

createBlankIframe(Gi,{
id:aja,
virtual:false,
onload:bby
});
var azZ=false;
function bby(ao)
{
var kU=this;

if(!azZ)
{
fM.Jo=kU;

var hF=fM.config||{};
mL.action=hF.url||["/cgi-bin/upload?sid=",getTop.getSid()].join("");
mL.target=aja;

mL.sid.value=getSid();
mL.mode.value=hF.mode||"download";
mL.scale.value=hF.scale||"";
mL.widthlimit.value=hF.widthlimit||"";
mL.heightlimit.value=hF.heightlimit||"";
mL.submit();
return azZ=true;
}
ao.qmActiveXDoUploadFinish(kU);
}
};

cE.bcY=function()
{
var fM=this.vF;
if(!fM)
return debug("_doFormUploaderEvent: upload info not exist",null,61882714);
if(!fM.Jo)
return;
try
{
var aBi=fM.Jo.contentWindow.document;
var bdL=aBi.body;
if(bdL.className==fM.Jo.id)
return;

var aAu=[];
var aAJ=GelTags("script",aBi);
for(var i=0;i<aAJ.length;i++)
aAu.push(aAJ[i].innerHTML);
this.ahL(aAu.join(""));
}
catch(e)
{
debug(e.message,61882714);
this.CL(false);
}
};

cE.bdY=function(kY,aaO,IX,XP,auV){
var fM=this.vF;
if(!fM)
return debug("_doActivexUploaderEvent: upload info not exist",null,61882714);
switch(aaO){
case 1:

return this.CL(false,{
errCode:IX
});
case 2:

fM.wN=parseInt(IX*90/XP);
return fM.onupload.call(this,"uploading",{
percent:fM.wN
});
case 3:

var jr=this.Jl("uploader");
if(jr.ResponseCode!="200")
return this.CL(false,{
errCode:IX
});

this.ahL(jr.Response);
}
};

cE.ahL=function(bdg){

var FK=bdg||"";
var wU=FK.indexOf('On_upload("');
var Ih=FK.indexOf('");',wU);
var DC=(wU!=-1&&Ih!=-1)?FK.substring(wU+11,Ih):"err";

if(DC!="err")
{
DC=FK.substring(wU+11,Ih).replace(new RegExp("\"","ig"),"").split(",");
return this.CL(true,{

imgParam:DC[0],
imgwidth:DC[1],
imgheight:DC[2]
});
}
wU=FK.indexOf('On_upload_Fail("');
Ih=FK.indexOf('");',wU);

var ark=function(jq){
jq=parseInt(jq);
return(isNaN(jq)?"5":(parseInt(100*parseInt(jq)/(1024*1024))/100));
};
if(wU!=-1&&Ih!=-1){
DC=FK.substring(wU+16,Ih).replace(new RegExp("\"","ig"),"").split(",");
return this.CL(false,{
curSize:ark(DC[0]),
allowSize:ark(DC[1])
});
}

return this.CL(false);
};
cE.CL=function(kM,VH){
if(!this.vF)
return;

try
{
this.vF.onupload.call(this,kM?"ok":"fail",VH);
}
catch(bj)
{
doPageError(bj.message,this.vF.window.location.href,"_uploadFinish callback");
}

this.stopUpload();
};














function qmFlash(dJ)
{
if(!(this.sj=dJ.id))
{
throw Error(0,"config.id can't use null");
}

if(!(this.anD=dJ.win))
{
throw Error(0,"config.win win is null");
}

this.bAa=dJ.flash;
this.aNl=this.constructor;
this.SV=dJ;
this.Uz();
}

dz=qmFlash;
cE=dz.prototype;

dz.get=function(aoK,PU)
{
var xT=PU[this.hV.anL];
return xT&&xT[aoK];
};

dz.getFlashVer=function()
{
var hf="";
var Nv=-1;
var ND=-1;
var Nw=-1;
var Nt=navigator.plugins;
if(Nt&&Nt.length){

for(var i=0,aNj=Nt.length;i<aNj;i++){
var aoi=Nt[i];
if(aoi.name.indexOf('Shockwave Flash')!=-1){
hf=aoi.description.split('Shockwave Flash ')[1];
Nv=parseFloat(hf);
Nw=parseInt(hf.split("r")[1]);
ND=parseInt(hf.split("b")[1]);
break;
}
}
}
else{
try
{
var aog=new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
if(aog)
{
hf=aog.GetVariable("$version").split(" ")[1];
var Yy=hf.split(",");
Nv=parseFloat(Yy.join("."));
Nw=parseInt(Yy[2]);
ND=parseInt(Yy[3]);
}
}
catch(e)
{
}
}

return{
version:(isNaN(Nv)?-1:Nv)||-1,
build:(isNaN(Nw)?-1:Nw)||-1,
beta:(isNaN(ND)?-1:ND)||-1,
desc:hf
};
};

dz.isSupported=function()
{
var Ps=this.getFlashVer();
return Ps.version>=10||Ps.version==9&&Ps.build>50;
};

dz.hV={
aGe:5*1000 ,
anL:"qmFlashCaches_ASDr431gGas",
anx:"onFlashEvent_ASDr431gGas"
};

cE.getFlash=function(){
return this.bAa||getFlash(this.sj,this.anD);
};

cE.isDisabled=function(){
return this.aMx||false;
};

cE.disable=function(aNx){
this.aMx=aNx!=false;
return this;
};











cE.getLoadedPercent=function(aMv){
var cM=this;
function gK(jq){
try{
aMv.call(cM,jq);
}
catch(e){
}
}

var eO=this.getFlash();
if(!eO)
return gK("notfound");

var anU=0;
(function(){
var Ea=arguments.callee;
if(!Ea.anB)
Ea.anB=getTop().now();

var wN=0;
var afo=false;
try{
wN=eO.PercentLoaded();
}
catch(e){
afo=true;
}

if(wN!=anU)
gK(anU=wN);

if(wN!=100){
if(getTop().now()-Ea.anB>qmFlash.hV.aGe){
gK(afo?"noflash":"timeout");
}
else{
setTimeout(Ea,100);
}
}
})();
};












cE.setup=function(aMq){
var cM=this;
function gK(kM,aaK){
try{
aMq.call(cM,kM,aaK);
}
catch(e){
}
}

this.getLoadedPercent(function(jq){
if(jq==100){
setTimeout(function(){
try{
if(!cM.getFlash().setup(qmFlash.hV.anx,cM.sj))
return gK(false,"setuperr");
}
catch(e){
return gK(false,"nosetup");
}

gK(true);
});
}
else if(typeof jq!="number"){
gK(false,jq);
}



});
};



cE.Uz=function(){
var xA=this.anD;
var anV=this.aNl.hV;
var Ny=anV.anL;
var Le=anV.anx;

if(!xA[Ny])
xA[Ny]=new xA.Object;

xA[Ny][this.sj]=this;

if(!xA[Le]){
xA[Le]=function(){
var qe=arguments[0];
var aod=arguments[1];
var LV=xA[Ny][qe];

if(LV&&typeof(LV.SV[aod])=="function"){
var anS=[];
for(var i=2,cZ=arguments.length;i<cZ;i++)
anS.push(arguments[i]);
LV.SV[aod].apply(LV,anS);
}
};
}
};




var QMTimeLang={
aAR:new Date(1970,0,5,0,0,0,0)
};

dz=QMTimeLang;







dz.formatRefer=function(iQ,ahG)
{
return T('$date$ $time$').replace({
date:this.formatDate(iQ,ahG),
time:this.formatTime(iQ)
});
};







dz.formatDate=function(iQ,ahG)
{
var cH=iQ;
var azu=ahG||new Date();

var Xm=cH-this.aAR;
var azM=azu-this.aAR;
var ahj=24*3600000;
var aBA=Math.floor(Xm/ahj)
-Math.floor(azM/ahj);

if(Math.abs(aBA)<3)
{

return T('$day$').replace({
day:["2 days ago","Yesterday","Today","Tomorrow","2 days later"][aBA+2]
});
}

var aBx=7*ahj;
var aBJ=Math.floor(Xm/aBx)
-Math.floor(azM/aBx);

if(Math.abs(aBJ)<2)
{

return T('$weekpos$week$weekday$').replace({
weekpos:["Last ","Current ","Next "][aBJ+1],
weekday:this.formatWeek(cH)
});
}

var bGk="";
if(cH.getYear()==azu.getYear())
{
bGk="%MM%-%DD%";
}
else
{
bGk="%YY%-%MM%-%DD%";
}
return formatDateByLocale({year:cH.getFullYear(),month:cH.getMonth()+1,day:cH.getDate(),pattern:bGk});








};







dz.formatTime=function(iQ)
{
var jJ=iQ.getHours();
var Cx=iQ.getMinutes();
var sX;
if(jJ<6)
{
sX="In the morning";
}else if(jJ<9)
{
sX="AM";
}else if(jJ<12)
{
sX="\u4E0A\u5348";
}else if(jJ<13)
{
sX="\u4E2D\u5348";
}else if(jJ<18)
{
sX="P.M.";
}else if(jJ<22)
{
sX="\u665A\u4E0A";
}else
{
sX="At night";
}
if(getTop().getLocale()=="zh_CN")
{
jJ=jJ==12?jJ:jJ%12;
}
else
{
sX=" ";
}
return T('$desc$$hour$:$min$').replace({
desc:getTop().getLocale()=="zh_CN"?sX:" ",
hour:jJ,
min:this.Au(Cx)
});
};






dz.formatWeek=function(iQ)
{
return["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"][iQ.getDay()];
};






dz.Au=function(jH)
{
return jH<10?"0"+jH:jH;
};




var QMDragDrop={
groups:{},
setGroup:function(aJ,agJ)
{
var ae=this;
if(!ae.Ok(aJ))
{
ae.groups[aJ]=agJ;
for(var i=0;i<agJ.length;i++)
{
agJ[i].setGroupId(aJ);
}
}
return ae;
},

addGroup:function(aJ,aAy)
{
var ae=this,
fL;
if(!(fL=ae.Ok(aJ)))
{
fL=[];
ae.setGroup(aJ,fL);
}

fL.push(aAy);
aAy.setGroupId(aJ);

return ae;
},

delGroup:function(aJ)
{
var ae=this,
fL;
if(fL=ae.Ok(aJ))
{
if(delete ae.groups[aJ])
{

}
else
{
debug('error delete dragdrop group:'+aJ);
}
}

return ae;
},

getDragFromGroup:function(aJ)
{
var ae=this,
fL,
aBe=[];
if(fL=ae.Ok(aJ))
{
if(fL[i]instanceof QMDragDrop.Draggable)
{
aBe.push(fL[i]);
}
}
return aBe;
},

getDropFromGroup:function(aJ)
{
var ae=this,
fL,
uF=[];
if(fL=ae.Ok(aJ))
{
for(var i=0;fL&&i<fL.length;i++)
{
if(fL[i]instanceof QMDragDrop.DropTarget)
{
uF.push(fL[i]);
}
}
}
return uF;
},

Ok:function(aJ)
{
var ae=this;
for(var groupid in ae.groups)
{
if(groupid==aJ)
{
return ae.groups[groupid];
}
}
}
};

dz=QMDragDrop;


























dz.Draggable=function(as,bc,vo)
{
this.eh=null;
this.aLV=[];
this.ju={};
this.kV={};
this.Zo=0;
this.Zp=0;
this.fK=2;

this.fh(as,bc,vo);
};

dz.Draggable.STATE={
aVU:0,
acd:1,
LO:2
};

dz.Draggable.prototype={
setGroupId:function(aJ)
{
this.nf=aJ;
return this;
},

addDropTarget:function(auD)
{
if(auD)
{
this.aLV.push(auD);
}
return this;
},

moveTo:function(nx,nb,cd,aI)
{
var ae=this,
av=ae.eh,
abp=av.offsetLeft,
aav=av.offsetTop;
qmAnimation.play(av,{
from:0,
to:1,
speed:Math.max(Math.abs(nx-abp),Math.abs(nb-aav))*0.5||10,
onaction:function(cO){
cO=cO||0;
this.style.left=abp+(nx-abp)*cO;
this.style.top=aav+(nb-aav)*cO;
},
oncomplete:function(){
this.style.left=nx;
this.style.top=nb;

if(cd)
{
cd.call(ae,aI);
}
}
});
},


exchangePos:function(Ti)
{
if(Ti&&this.vH)
{
Ti.parentNode.insertBefore(this.eh,Ti);
this.vH.parentNode.insertBefore(Ti,this.vH);
this.eh.parentNode.insertBefore(this.vH,this.eh);
}
},

getElement:function()
{
return this.eh;
},

getPlaceHolder:function()
{
return this.vH;
},

lock:function(aBv)
{
this.ju.lockx=!!aBv;
this.ju.locky=!!aBv;
},

fh:function(as,bc,vo)
{
if(as)
{
this.eh=as;
this.yo=as.ownerDocument;
this.iw=this.yo.parentWindow||this.yo.defaultView;
this.bfQ=getStyle(as,'position');
this.Kb(bc).aVd(vo);
}
},

Kb:function(bc)
{
var ae=this,
bu=ae.ju;

bu.handle=bc.handle||ae.eh;
bu.maxContainer=bc.maxcontainer;
bu.lockx=!!bc.lockx;
bu.locky=!!bc.locky;
bu.transparent=!!bc.transparent;
bu.placeholder=!!bc.placeholder;
bu.threshold=bc.threshold||5;
bu.holderhtml=bc.holderhtml;


bu.oTitle=bc.oTitle;

if(bu.transparent)
{
var cI=calcPos(ae.eh);
var aUO='<div style="display:none;background:#FFF;position:absolute;opacity:0.5;filter:alpha(opacity=50);width:100%;height:100%;z-index:999;cursor:move;"></div>';
insertHTML(ae.eh,'afterBegin',aUO);
ae.Ez=ae.eh.firstChild;
ae.Ez.style.height=cI[5]+'px';
}

return ae;
},

aVd:function(vo)
{
var ae=this;

ae.kV={
ondragstart:function(){},
ondrag:function(){},
ondragend:function(){}
};
extend(ae.kV,vo);

function Sx(ag)
{

var yb=getEventTarget(ag).tagName;
if(!gbIsIE&&yb&&yb.toLowerCase()=='input')
{
return;
}


if(ae.ju.lockx&&ae.ju.locky)
{
return;
}

ae.Zo=ag.clientX-ae.eh.offsetLeft+(parseInt(getStyle(ae.eh,'marginLeft'))||0)+bodyScroll(ae.iw,'scrollLeft');
ae.Zp=ag.clientY-ae.eh.offsetTop+(parseInt(getStyle(ae.eh,'marginTop'))||0)+bodyScroll(ae.iw,'scrollTop');


if(ae.ju.oTitle)
{
var HV=gbIsIE?calcPos(ae.iw.frameElement):[0,0,0,0];
ae.acl=HV[3]+ag.clientX;
ae.acg=HV[0]+ag.clientY;
}
else
{
ae.acl=ag.clientX;
ae.acg=ag.clientY;
}

ae.fK=QMDragDrop.Draggable.STATE.LO;

ae.Yh(ag);
}

addEvent(ae.ju.handle,'mousedown',Sx);
return ae;
},

Yh:function(ag)
{
var ae=this,
bu=ae.ju,
Tg=QMDragDrop.DataTransfer;


if(!bu.oTitle)
{


preventDefault(ag);
}

if(!ae.Lw||!ae.vN)
{
ae.Lw=function(ag)
{

preventDefault(ag);


if(gbIsIE&&bu.oTitle)
{
}
else
{
ae.iw.getSelection?ae.iw.getSelection().removeAllRanges():ae.yo.selection.empty();
}


if(ae.fK==QMDragDrop.Draggable.STATE.LO&&bu.threshold)
{

var aGE=Math.abs(ae.acl-ag.clientX),
aGG=Math.abs(ae.acg-ag.clientY);
if(aGE>bu.threshold||aGG>bu.threshold)
{
callBack.call(ae,ae.kV['ondragstart'],[ag]);

ae.fK=QMDragDrop.Draggable.STATE.aVU;
ae.asP();

if(!bu.oTitle)
{

ae.eh.style.left=ae.acl-ae.Zo+bodyScroll(ae.iw,'scrollLeft');
ae.eh.style.top=ae.acg-ae.Zp+bodyScroll(ae.iw,'scrollTop');
}
}
return;
}

var Wj=ag.clientX-ae.Zo+bodyScroll(ae.iw,'scrollLeft'),
Wi=ag.clientY-ae.Zp+bodyScroll(ae.iw,'scrollTop');

if(bu.oTitle)
{
}
else
{

if(!bu.lockx)
{
ae.eh.style.left=Wj+'px';
}

if(!bu.locky)
{
ae.eh.style.top=Wi+'px';
}
}

if(bu.maxContainer)
{
var sR=calcPos(bu.maxContainer),
yF=calcPos(ae.eh);

if(yF[1]>sR[1])
{
ae.eh.style.left=Wj+sR[1]-yF[1]+'px';
}
else if(yF[3]<sR[3])
{
ae.eh.style.left=Wj+sR[3]-yF[3]+'px';
}

if(yF[2]>sR[2])
{
ae.eh.style.top=Wi+sR[2]-yF[2]+'px';
}
else if(yF[0]<sR[0])
{
ae.eh.style.top=Wi+sR[0]-yF[0]+'px';
}
}

ae.fK=QMDragDrop.Draggable.STATE.acd;
callBack.call(ae,ae.kV['ondrag'],[ag]);


var acN=new Tg(Tg.TYPE.DOWN,ae,ag.clientX,ag.clientY,ag);
ae.Pc(acN);
};

ae.vN=function(ag)
{

if(ae.fK==QMDragDrop.Draggable.STATE.LO)
{
ae.Cb();
return;
}


ae.Cb();

var acN=new Tg(Tg.TYPE.UP,ae,ag.clientX,ag.clientY,ag);
ae.Pc(acN);

ae.fK=QMDragDrop.Draggable.STATE.LO;

callBack.call(ae,ae.kV['ondragend'],[ag]);

ae.asP();
};
}

if(gbIsIE&&ae.eh.setCapture)
{
var lR=bu.oTitle||ae.eh;
lR.setCapture(true);
addEvents(lR,{
mousemove:ae.Lw,
mouseup:ae.vN,
losecapture:ae.vN
});



}
else
{
addEvents(ae.yo,{
mousemove:ae.Lw,
mouseup:ae.vN
});



ae.iw.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
addEvent(ae.iw,'blur',ae.vN);
}

return ae;
},

Cb:function()
{
var ae=this;

var bu=ae.ju,
lR=bu.oTitle||ae.eh;

if(gbIsIE&&lR.releaseCapture)
{
addEvents(lR,{
mousemove:ae.Lw,
mouseup:ae.vN,
losecapture:ae.vN
},true);

lR.releaseCapture();





}
else
{
addEvents(ae.yo,{
mousemove:ae.Lw,
mouseup:ae.vN
},true);


ae.iw.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);
removeEvent(ae.iw,'blur',ae.vN);
}

return ae;
},

atR:function(Kf)
{

var ae=this;
if(Kf)
{
var lK=ae.eh.cloneNode(true),
cI=calcPos(ae.eh);

lK.style.position='static';
lK.style.width=cI[4]+'px';
lK.style.height=cI[5]+'px';
if(ae.ju.holderhtml)
{
lK.innerHTML=ae.ju.holderhtml;

}
lK.removeAttribute('id');
lK.removeAttribute('name');
ae.eh.parentNode.insertBefore(lK,ae.eh);
ae.vH=lK;
}
else
{
if(ae.vH)
{
ae.eh.parentNode.removeChild(ae.vH);
ae.vH=null;
}
ae.eh.style.position=ae.bfQ;
}
},

asP:function()
{
var ae=this,
bu=ae.ju,
DP=ae.fK==QMDragDrop.Draggable.STATE.LO;

if(bu.oTitle)
{
return;
}

ae.eh.style.position=DP?'absolute':'absolute';

if(bu.transparent)
{
show(ae.Ez,!DP);
}
if(bu.placeholder)
{
var SD=ae.vH,
qQ=SD&&SD.offsetLeft,
nJ=SD&&SD.offsetTop;

!DP&&ae.atR(true);
DP&&ae.moveTo(qQ,nJ,ae.atR,false);
}

return ae;
},

Pc:function(lS)
{
var ae=this,
uF=QMDragDrop.getDropFromGroup(ae.nf);

for(var i=0;i<uF.length;i++)
{
if(ae!=uF[i])
{
uF[i].listen(lS);
}
}
return ae;
}
};














dz.DropTarget=function(aWq,vo,Xx)
{
this.eh=null;
this.kV={};
this.aeg=null;
this.fK=-1;

this.fh(aWq,vo,Xx);
};

dz.DropTarget.STATE={
acH:0,
adH:1,
arO:2,
FJ:3
};

dz.DropTarget.prototype={
setGroupId:function(aJ)
{
this.nf=aJ;
return this;
},

getElement:function()
{
return this.eh;
},

getDragTarget:function()
{
return this.aeg;
},

listen:function(lS)
{
var ae=this,
tv=QMDragDrop.DropTarget.STATE;

ae.aeg=lS.target;









var SR=ae.aeg.getElement(),
qQ=SR.offsetLeft+SR.offsetWidth/2,
nJ=SR.offsetTop+SR.offsetHeight/2;


if(ae.isOver(qQ,nJ,lS))
{
if(lS.type==QMDragDrop.DataTransfer.TYPE.DOWN)
{
ae.fK=(ae.fK==tv.acH||ae.fK==tv.adH)
?tv.adH:tv.acH;
}
else
{
ae.fK=tv.FJ;
}
}
else
{
ae.fK=tv.arO;
}

switch(ae.fK)
{
case tv.acH:
callBack.call(ae,ae.kV['ondragenter'],[lS]);

break;
case tv.adH:
callBack.call(ae,ae.kV['ondragover'],[lS]);

break;
case tv.FJ:
callBack.call(ae,ae.kV['ondrop'],[lS]);

break;
case tv.arO:
callBack.call(ae,ae.kV['ondragleave'],[lS]);

break;
default:
break;
}
},


isOver:function(nx,nb)
{
var hc=this.eh;

var LS=hc.offsetLeft;
var	abu=LS+hc.offsetWidth;
var	LJ=hc.offsetTop;
var abr=LJ+hc.offsetHeight;
return(nx>LS&&nx<abu&&nb>LJ&&nb<abr);
},

fh:function(as,vo,Xx)
{
if(as)
{
this.eh=as;

this.kV={
ondragenter:function(){},
ondragover:function(){},
ondragleave:function(){},
ondrop:function(){}
};
extend(this.kV,vo);

if(Xx)
{
this.isOver=Xx;
}
}
}
};

dz.DataTransfer=function(eo,aVM,nx,nb,ag)
{
this.type=eo;
this.target=aVM;
this.x=nx;
this.y=nb;
this.event=ag;
};

dz.DataTransfer.TYPE={
DOWN:1,
UP:2
};






























































var QMPanel=inheritEx("QMPanel",Object,
function(aB)
{
return{
$_constructor_:function(aj)
{
if(aj)
{
var mN=this.constructor,
aAh=mN.get(aj.sId);

aAh&&aAh.destroy();
this.aZa(aj);
mN.$_add&&mN.$_add(aj.sId,this);
this.fh(aj);
}
},

configHelp_:function(aj,DZ,Qf)
{
for(var i in DZ)
{
if(Qf||typeof(aj[i])=="undefined"||aj[i]==null)
{
aj[i]=DZ[i];
}
}
return aj;
},

autoAlignCenter_:function()
{
var ae=this,
aE=ae.bR,
dQ=ae.hK,
xo=aE.oEmbedWin||getTop(),
WY=xo.document.body;

if(!aE.nX)
{
var qQ=(WY.clientWidth-dQ.offsetWidth)/2+bodyScroll(xo,"scrollLeft");
aE.nX=qQ;
dQ.style.left=qQ+"px";
}
if(!aE.nY)
{
var nJ=Math.max(2,(WY.clientHeight-dQ.offsetHeight)/2
+bodyScroll(xo,"scrollTop")-25);
aE.nY=nJ;
dQ.style.top=nJ+"px";
}
},

dfConfig_:function(aj)
{
var xo=aj.oEmbedWin||getTop(),
WY=xo.document.body;

this.configHelp_(aj,
{
oEmbedWin:xo,
oEmbedToDom:WY,
sEmbedPos:"afterBegin",
oCallerWin:window,
nZIndex:1100,


bDisplay:true,
sBodyHtml:""
}
);



},

aZa:function(aj)
{
return this.tp=[
aj.sId||(aj.sId=["__QmDefPanelId","__"].join(unikey())),
this.constructor.classname
].join("_");
},

processHtml_:function(cL)
{
var agp=this.tp;
return cL.toString().replace(/ (id|for)=[\"\']?(\w+)[\"\']?/gi,[' $1="',agp,'_$2"'].join(""));
},

insertHtml_:function(aj)
{
aj.sPanelId=this.tp;
aj.sBodyHtml=this.processHtml_(aj.sBodyHtml);
insertHTML(aj.oEmbedToDom,aj.sEmbedPos,QMPanel.ci.yE.replace(aj));
},

initMemVar_:function(aj)
{
this.bR=aj;
this.hM="";
this.hK=S(this.tp,aj.oEmbedWin);
},

htmlReady_:function(aj)
{
var ae=this;
ae.hM="hide";
callBack.call(this,aj.onload);
ae.setEvent_();
aj.bDisplay&&this.show();
},

setEvent_:function()
{
},


panelDomCtrl_:function(oq,cd)
{
var ae=this;
show(ae.hK,oq);
if(oq)
{
ae.autoAlignCenter_();
}
callBack.call(ae,cd);
},


panelDomDestroy_:function()
{
var ae=this;
removeSelf(ae.hK);
ae.hK=null;
},

panelDestroy_:function()
{
var ae=this,
aU=ae.bR.sId,
mN=ae.constructor;

if(mN.get(aU))
{
mN.$_del(aU);
ae.panelDomDestroy_();
}
},

fh:function(aj)
{
this.dfConfig_(aj);
this.insertHtml_(aj);
this.initMemVar_(aj);
this.htmlReady_(aj);
},


destroy:function()
{
var ae=this;
ae.panelDomCtrl_(false);
ae.panelDestroy_();
},

getConfig:function()
{
return this.bR;
},



option:function(qS,oK)
{
var ae=this,
bez=
{
nX:"left",
nY:"top",
nWidth:"width",
nHeight:"height",
nZIndex:"zIndex"
},
agC=
{
nWidth:"scrollWidth",
nHeight:"scrollHeight"
},
wF;

if(typeof oK!="undefined")
{
ae.bR[qS]=oK;
if(wF=bez[qS])
{
ae.hK.style[wF]=typeof oK=="number"&&wF!="zIndex"
?oK+"px":oK;
}
}

if(qS=="status")
{
return ae.hM;
}

if(!oK&&ae.bR[qS]=="auto"&&agC[qS])
{

var hQ=ae.hK,
aAv,gU;
if(!isShow(hQ))
{
aAv=getStyle(hQ,"left");
hQ.style.left="-9999px";
gU=show(hQ,true)[agC[qS]];
show(hQ,false).style.left=aAv;

}
else
{
gU=hQ[agC[qS]];
}
return gU;
}

return oK?ae:ae.bR[qS];
},


S:function(Vn)
{
var xo=this.bR.oEmbedWin||getTop();
return S([this.tp,Vn].join("_"),xo);
},


isContain:function(aG)
{
return isObjContainTarget(this.hK,aG);
},


getPanelDom:function()
{
return this.hK;
},


show:function()
{
var ae=this;
if(ae.hM!="showing"&&ae.hM!="show")
{
ae.hM="showing";

ae.panelDomCtrl_(true,function()
{
ae.hM="show";
setTimeout(function()
{
try
{
callBack.call(ae,ae.bR.onshow);
}
catch(bj)
{
debug("onshow error : "+bj.message);
}
}
);
}
);
}
return ae;
},


hide:function(cd)
{
var ae=this;
if(ae.hM!="hiding"||ae.hM!="hide")
{
ae.hM="hiding";
ae.panelDomCtrl_(false,function()
{
ae.hM="hide";
setTimeout(function()
{
callBack.call(ae,ae.bR.onhide);
}
);
callBack.call(ae,cd);
}
);
}
else
{
callBack.call(ae,cd);
}
return ae;
},





bgr:function()
{
try
{
var dQ=this.hK;




if(dQ.parentNode==null)
{
return false;
}

if(gbIsIE)
{
return!!dQ.ownerDocument;
}
else
{
var az=dQ.ownerDocument.defaultView,
kU=az.frameElement;
if(kU)
{
return kU.contentDocument==dQ.ownerDocument;
}
else
{

return az==getTop();
}
}
}
catch(e)
{
return false;
}
},


close:function(aJo)
{
if(this.hM!="close")
{
var ae=this;
if(ae.bgr())
{
aJo&&(this.bR.bAnimation=false);
this.hide(function()
{
ae.hM="close";
ae.panelDestroy_();
callBack.call(ae,ae.bR.onclose);
}
);
}
else
{

ae.hM="close";
ae.panelDestroy_();
}

}
return this;
},

setBody:function(cL)
{
this.hK.innerHTML=this.processHtml_(cL);
callBack.call(this,this.bR.onload);
return this;
},


setHtml:function(aRX,cL)
{
((typeof aRX=="string"?this.S(aRX):aRX)||{}).innerHTML=this.processHtml_(cL);
return this;
},


isShow:function()
{
return this.hM=="show"||this.hM=="showing";
},


isClose:function()
{
return this.hM=="close";
}
};
},
{
ci:
{
yE:TE([
'<div id="$sPanelId$" class="$sClassName$" $sAttr$ ',
'style="$sStyle$;display:none;z-index:$nZIndex$;position:absolute;left:$nX$px;top:$nY$px;',
'$@$if($nHeight$&&!isNaN($nHeight$))$@$ height:$nHeight$px; $@$endif$@$',
'$@$if($nWidth$&&!isNaN($nWidth$))$@$ width:$nWidth$px; $@$endif$@$"',
'>',
'$sBodyHtml$',
'</div>'])
}
}
);

















































var QMDialog=inheritEx("QMDialog",QMPanel,
function(aB)
{
return{
initMemVar_:function(aj)
{
callBack.call(this,aB.initMemVar_,[aj]);
this.Ez=null;
this.adn=null;
this.BA=null;

var mN=this.constructor;
this.aVX=aj.bModal?mN.Kg:mN.acu;

},


atn:function(SI)
{
var ae=this,
dj=ae,
mN=ae.constructor,
adr,
SM=ae.aVX,
aob=function(atx,aSQ,aTm)
{
for(var i=atx.length-1;i>=0;i--)
{
dj=atx[i];
dj.option("nZIndex",adr?aTm:aSQ);
dj.asH(adr);
adr=true;
}
};

if(SI>0)
{
for(var i in SM)
{
if(SM[i]==ae)
{
dj=SM.splice(i,1)[0];
break;
}
}
if(SI==2)
{
SI=0;
}
}
if(SI==0)
{
SM.push(dj);
}
aob(mN.Kg,1120,1106);
aob(mN.acu,1110,1105);
},

setEvent_:function()
{
var aE=this.bR,
ae=this;

if(aE.bModal)
{
addEvent(this.Ez,"mousedown",function()
{
var afM=ae.constructor.Kg,
asS=afM[afM.length-1];
asS&&asS.spark();
}
);
}
else
{
addEvent(this.hK,"mousedown",function()
{
if(!aE.bModal)
{
ae.atn(2);
}
}
);
}

var xo=aE.oEmbedWin,
dQ=this.hK;

if(aE.bMin)
{
this.S("_minbtn_").onclick=function(ag)
{
ae.min();
return false;
}
}
if(aE.bClose)
{
this.S("_closebtn_").onclick=function(ag)
{
ae.close();
return false;
}
}

dQ.tabindex="-1";
addEvent(dQ,"keydown",function(ag){
if(ag&&ag.keyCode==27)
{
ae.close();
preventDefault(ag);
}
});

new(QMDragDrop.Draggable)(ae.hK,
{
handle:ae.S("_head_"),
maxcontainer:aE.oEmbedWin.document.body
},
{
ondragstart:function(){
callBack.call(ae,aE.ondragstart);
},
ondrag:function(){
callBack.call(ae,aE.ondrag);
},
ondragend:function()
{
ae.bR.nX=parseInt(ae.hK.style.left);
ae.bR.nY=parseInt(ae.hK.style.top);
}
}
).lock(!aE.bDraggable);
},

dfConfig_:function(aj)
{

this.configHelp_(aj,{bModal:true});

var ath=
{
bDraggable:true,
bClose:true,
bAnimation:true,
sEmbedPos:"beforeEnd",
sTitle:""
};

var mN=this.constructor,
fu=aj.bModal?mN.Kg:mN.acu,
adh=fu[fu.length-1];

if(adh&&!aj.bAlignCenter)
{
extend(ath,
{
nX:adh.option("nX")+20,
nY:adh.option("nY")+20
}
);
}
this.configHelp_(aj,ath);

var be=S("qmdialog_container",getTop());
if(!be)
{
var aT=getTop().document;

insertHTML(aT.body,
aT.readyState=="complete"?"beforeEnd":"afterBegin",
'<span id="qmdialog_container"></span>');

be=S("qmdialog_container",getTop());
}

this.configHelp_(aj,
{
oEmbedWin:getTop(),
oEmbedToDom:be,
nZIndex:aj.bModal?1110:1105
},
true
);

return callBack.call(this,aB.dfConfig_,[aj]);
},

insertHtml_:function(aj)
{
var agp=this.tp;

aj.sBodyHtml=QMDialog.ci.yE.replace(aj);
aj.sClassName="qm_dialog";
callBack.call(this,aB.insertHtml_,[aj]);
},

htmlReady_:function(aj)
{
var ae=this;
if(aj.bModal)
{
ae.Ez=ae.aTt(aj.oEmbedWin);
}
if(aj.bMin)
{
insertHTML(ae.hK,"afterEnd",
ae.processHtml_(ae.constructor.ci.aTL.replace(aj))
);
this.adn=this.S("_min_animation_");
}

callBack.call(this,aB.htmlReady_,[aj]);
},


aTt:function(ao)
{
ao=ao||getTop();
var aU="qqmail_mask",
VR=S(aU,ao);

if(!VR)
{
insertHTML(
ao.document.body,

"beforeEnd",
T([
'<div id="$id$" class="$class$" style="z-index:98;display:none;"',
' onkeypress="return false;" onkeydown="return false;"',
' tabindex="0"></div>'
]).replace(
{

'class':'editor_mask opa50Mask ',
id:aU
}
)
);
VR=S(aU,ao);
}
return VR;
},





panelDomCtrl_:function(oq,cd,Kp)
{
this.atn(oq?0:1);

var	ae=this,
aE=ae.bR,
Kp=Kp||(aE.bAnimation?"ani1":"ani0"),
lZ=getTop().qmAnimation,
aWK=this.constructor.Kg.length,
dQ=ae.hK,
vg=ae.S("_content_");

function bpH()
{
if(aE.sUrl&&oq)
{
ae.S("_dlgiframe_").height="0";
ae.S("_dlgiframe_").height=ae.hK.offsetHeight-ae.S("_head_").offsetHeight-2;
}
}

if(this.bR.bModal&&aWK==(oq?1:0))
{


callBack(getTop().iPadPrevent);
show(this.Ez,oq);
}

hideWindowsElement(!oq);

if(Kp=="ani0")
{
callBack.call(this,aB.panelDomCtrl_,[oq,cd]);
bpH();
}
else if(Kp=="ani2")
{
var KM=ae.adn,
avb=ae.BA,
lC=calcPos(show(avb,true)),
ast=(ae.brG||dQ.offsetWidth)-lC[4],
asj=(ae.bqF||dQ.offsetHeight)-lC[5],
arF=aE.nX-lC[3],
asU=aE.nY-lC[0],
atv=function(aTY)
{
E(["left","top","width","height"],function(aSb,nj)
{
KM.style[aSb]=aTY[nj]+"px";
}
);
};

if(oq)
{
lZ.play(dQ,
{
win:window,
speed:300,
onready:function()
{
show(KM,true);
show(avb,false);
},
onaction:function(cO,gv)
{
atv(
[
lC[3]+(arF*gv),
lC[0]+(asU*gv),
lC[4]+(ast*gv),
lC[5]+(asj*gv)
]
);
},
oncomplete:function()
{
show(KM,false);

dQ.style.top=dQ.getAttribute("originTop");
callBack.call(ae,cd);
}
}
);
}
else
{
ae.brG=dQ.offsetWidth;
ae.bqF=dQ.offsetHeight;

lZ.play(dQ,
{
win:window,
speed:300,
onready:function()
{

dQ.setAttribute("originTop",dQ.style.top);
dQ.style.top="-1000px";
show(KM,true);
},
onaction:function(cO,gv)
{
atv(
[
aE.nX-(arF*gv),
aE.nY-(asU*gv),
ae.brG-(ast*gv),
ae.bqF-(asj*gv)
]
);
},
oncomplete:function()
{
show(KM,false);
callBack.call(ae,cd);
}
}
);
}
return;
}
else if(Kp=="ani1")
{
if(oq)
{
lZ.play(dQ,
{
win:window,
speed:300,
easing:"easeOut",
tween:"Sina",
from:-30,
to:0,
onready:function()
{
show(setOpacity(dQ,0),true);
ae.autoAlignCenter_();
bpH();
vg.style.visibility="hidden";
},
onaction:function(cO,gv)
{
setOpacity(dQ,gv).style.marginTop=cO+"px";
},
oncomplete:function()
{
setOpacity(dQ,1).style.marginTop=0;
vg.style.visibility="visible";
callBack.call(ae,cd);
}
}
);
}
else
{
lZ.play(dQ,
{
win:window,
speed:300,
easing:"easeIn",
tween:"Sina",
from:0,
to:-30,
onaction:function(cO,gv)
{
setOpacity(dQ,1-gv).style.marginTop=cO+"px";
},
oncomplete:function(cO)
{
show(dQ,false);
callBack.call(ae,cd);
}
}
);
}
}
},


panelDomDestroy_:function()
{
var ae=this;
if(ae.bR.sUrl)
{

try
{
ae.S("_dlgiframe_").contentWindow.location.replace("javascript:'';");
}
catch(bj)
{
}
}
if(ae.bR.bAnimation)
{
qmAnimation.stop(ae.hK);
}
ae.BA&&removeSelf(ae.BA);
removeSelf(ae.hK);
removeSelf(ae.adn);
ae.hK=null;
},

asH:function(aGU)
{
var ae=this;
dQ=ae.hK;

setClass(dQ,"qm_dialog "+(aGU?"qm_dialog_flash":""));
},






S:function(Vn)
{
var ae=this,
aE=ae.bR,
av=callBack.call(ae,aB.S,[Vn]);
if(aE.sUrl&&!av)
{
av=S(Vn,aB.S("_dlgiframe_").contentWindow);
}
return av;
},


close:function(aUK)
{
var IR=this.bR.onbeforeclose;
if(IR&&!IR.call(this))
{
return;
}
if(aUK)
{
this.bR.bAnimation=false;
}
callBack.call(this,aB.close);
callBack(getTop().iPadRemoveEvent);
return this;
},

min:function()
{
if(this.hM!="show")
{
return;
}

var ae=this,
aSw=S("minimize_container",getTopWin()),
aE=ae.bR,
atg=ae.tp+"_min",
FN=ae.BA,
azY=ae.bR.onbeforemin;

if(azY&&!azY.call(ae))
{
return;
}

if(!FN)
{
insertHTML(aSw,"beforeEnd",ae.constructor.ci.aTl.replace(
{
dialogId:aE.sId,
id:atg,
title:aE.sTitle
}
));
this.BA=FN=S(atg,getTopWin());
}

ae.panelDomCtrl_(false,
function()
{
ae.hM="min";
show(FN,true);
callBack.call(ae,ae.bR.onmin);
},
"ani2"
);
return ae;
},

max:function()
{
if(this.hM!="min")
{
return;
}
var ae=this,
FN=ae.BA,
lC=calcPos(FN),
aE=ae.bR;

ae.panelDomCtrl_(true,function(){
ae.hM="show";
show(FN,false);
callBack.call(ae,ae.bR.onmax);
},"ani2");
return this;
},

spark:function()
{
var ae=this,
gu=4,
aVk=function()
{
if(--gu>0)
{
setTimeout(arguments.callee,80);
}
var aSy=gu%2;
ae.asH(aSy);
};
aVk();
return ae;
},

getMinDom:function()
{
return this.BA;
},

getDialogWin:function()
{
var aE=this.bR;
return aE.sUrl?this.S("_dlgiframe_").contentWindow:aE.oEmbedWin;
},

setHeader:function(cL)
{
this.S("_title_").innerHTML=this.processHtml_(cL);
return this;
},

setBody:function(cL)
{
this.S("_content_").innerHTML=this.processHtml_(cL);
callBack.call(this,this.bR.onload);
return this;
}

};
},
{
ci:
{
yE:TE([
'<div style="cursor:$@$if($bDraggable$)$@$move$@$endif$@$;" class="dialog_head" id="_head_">',
'<span id="_title_">$sTitle$</span>',
'$@$if($bMin$)$@$',
'<a title="Minimize" class="ico_minimize" href="javascript:;" initlized="true" id="_minbtn_"><em class="ico_minimize_inner"></em></a>',
'$@$endif$@$',
'<a title="Close" dlg="close" class="ico_close_d" href="javascript:;" id="_closebtn_" initlized="true"></a>',
'</div>',
'<div id="_content_">',
'$@$if($sUrl$)$@$',
'<iframe id="_dlgiframe_" frameborder="0" scrolling="no" src="$sUrl$" style="width:100%;"></iframe>',
'$@$else$@$',
'<div class="dialog_inner">',
'<div class="dialog_content" id="_body_">',
'$sBodyHtml$',
'</div>',
'$@$if($sFootHtml$)$@$',
'<div class="dialog_operate" id="_foot_">',
'$sFootHtml$',
'<div class="clr"></div>',
'</div>',
'$@$endif$@$',
'</div>',
'$@$endif$@$',
'</div>'
]),

aTl:T('<span id="$id$" style="display:none;"><a href="javascript:;" onclick="getTop().QMDialog(\'$dialogId$\',\'max\');" nocheck="true">$title$</a>&nbsp;|&nbsp;</span>'),

aTL:T('<div id="_min_animation_" style="display:none;position:absolute;z-index:$nZIndex$;border-width:2px;left:$nX$;top:$nY$;" class="bd_upload"></div>')
},

acu:[],
Kg:[]
}
);





















































var QMMenu=inheritEx("QMMenu",QMPanel,
function(aB)
{
return{
initMemVar_:function(aj)
{
var ae=this;
callBack.call(ae,aB.initMemVar_,[aj]);
ae.vG;
ae.cqf;

ae.tR=null;
ae.BJ=null;
ae.Nr=null;
ae.Nq=null;


ae.En=null;
},

setEvent_:function()
{
var ae=this,
aE=ae.bR,
clJ=null,
kP=ae.S("_menuall_"),
aAU=ae.S("_foot_"),
hQ=ae.getPanelDom();





function CJ(ak,blr)
{




while(ak)
{
var aU=ak.id||"";
if(aU.indexOf("_menuitem_")>-1)
{
return!blr&&ak.className.indexOf("menu_item_nofun")>-1?0:ak;
}
else if(/_QMMenu$/.test(aU))
{

return 0;
}
ak=ak.parentNode;
}
return null;
}

function anC(ag)
{
if(aE.bProxyScroll!==false)
{
var aK=getEventTarget(ag),
yQ=typeof(ag.wheelDelta)=="undefined"?
ag.detail/3:-ag.wheelDelta/120,
sl=kP.scrollTop+yQ*20;
kP.scrollTop=Math.min(Math.max(sl,0),kP.scrollHeight-kP.offsetHeight);

while(aK)
{
if(aK.getAttribute&&aK.getAttribute('scroll')=='true')
{
return;
}
aK=aK.parentNode;
}

preventDefault(ag);
stopPropagation(ag);
}
}

function aBk(aJ)
{
var bC=aE.oItems;
for(var i in bC)
{
if(bC[i].sId==aJ)
{
return bC[i];
}
}
}


addEvents(hQ,
{
contextmenu:preventDefault,
mousewheel:anC,
DOMMouseScroll:anC,

mouseout:function(ag)
{
var Xz=ae.vG,
Jq=CJ(ag.relatedTarget||ag.toElement,1);

if(Jq==null&&aE.bAutoClose)
{
ae.aCk();
}
if(Jq===0||Jq==Xz)
{

return;
}
if(Xz)
{


var	aU=Xz.getAttribute("itemid"),
beN=['sub',aU,'_QMMenu'].join(''),
XH=Jq;

while(XH)
{
if(XH.id==beN)
{
return;
}
XH=XH.parentNode;
}
if(ae.tR&&Jq==null&&Xz==ae.tR.ajR)
{

return;
}
ae.Ol().ayY();
ae.Nq=setTimeout(function(){

ae.ahJ();
},100);
setClass(ae.vG,"menu_item");
return ae.vG=null;
}
},
mouseover:function(ag)
{
if(aE.bAutoClose)
{
ae.bgu();
}
var aK=CJ(getEventTarget(ag));
if(aK)
{

ae.oQ(aK);


var aU=aK.getAttribute("itemid"),
bE=aBk(aU);
if(bE.oSubMenu)
{
ae.aJk(bE,aK);
}
}
if(ae.BJ)
{

ae.BJ.Ol().ayY();
ae.BJ.selectItem(ae.ajR);
}
},
click:function(ag)
{
var aLW=getEventTarget(ag),
aK;

if(aLW.getAttribute("qmmenuopt")=="close")
{
ae.close();
}
else if(aK=CJ(getEventTarget(ag)))
{
var aU=aK.getAttribute("itemid"),
bE=aBk(aU);


if(!bE.oSubMenu)
{
ae.Ol();
callBack.call(ae,aE.onitemclick,[aU,bE]);
setClass(aK,"menu_item");
ae.close();
ae.aiG();
}
}
}
}
);

addEvent(ae.hK,"mousedown",stopPropagation);
},

dfConfig_:function(aj)
{
this.configHelp_(aj,
{
bAutoClose:true,
nZIndex:1121,
nWidth:"auto",
nMinWidth:100,
nMaxWidth:9999,
bAnimation:true,
nMaxItemView:1000000,
sClassName:aj.sClassName?aj.sClassName:"qmpanel_shadow rounded5",
nArrowDirection:"Up"
}
);


this.configHelp_(aj,
{
nHeight:"auto"

},true);

if(aj.nArrowPos&&aj.nArrowDirection=="Up")
{
aj.nX-=aj.nArrowPos;
aj.nY+=12;
}

return callBack.call(this,aB.dfConfig_,[aj]);
},

insertHtml_:function(aj)
{
var ae=this,
bC=aj.oItems,
Jb=aj.oFootItems,
aBa=bC.length>aj.nMaxItemView,
bbV=aBa?aj.nMaxItemView:bC.length,
agp=ae.tp,
OU=0;

for(var i=0;i<bC.length;i++)
{
var bfz=bC[i].nHeight=bC[i].nHeight||aj.nItemHeight||22;
if(i<bbV)
{
OU+=bfz;
}
if(bC[i].sId===0)
{
bC[i].sId="0";
}
ae.configHelp_(bC[i],{
bDisSelect:!(bC[i].sId)
});
}

if(Jb)
{
for(var i=0,cZ=Jb.length;i<cZ;i++)
{
if(Jb[i].sId===0)
{
Jb[i].sId="0";
}
ae.configHelp_(Jb[i],{
nHeight:aj.nItemHeight||22,
bDisSelect:!(Jb[i].sId)
});
}
}

aj.sBodyHtml=QMMenu.ci.yE.replace(
{
nArrowPos:aj.nArrowPos||0,
nArrowDirection:aj.nArrowDirection,
nX:aj.nX,
sWidthDetect:aj.sWidthDetect||"mini",
mwidth:aj.nWidth-2,
mheight:aBa?OU:"auto",
nMinWidth:aj.nMinWidth,
oItems:aj.oItems,
oFootItems:aj.oFootItems
}
);

callBack.call(this,aB.insertHtml_,[aj]);
},

Tr:function()
{
var ae=this;
if(ae.bR.nWidth=="auto")
{
var ek=ae.S("_menuall_"),
aAU=ae.S("_foot_");
if(ek&&ek.offsetWidth>10)
{





var aHI=(Math.max(ae.bR.nMinWidth,Math.min(ek.scrollWidth,ae.bR.nMaxWidth))+(gbIsIE?0:ek.offsetWidth-ek.scrollWidth));
if(typeof ae.bR.nMaxWidth==="number"&&aHI>ae.bR.nMaxWidth)
{
aHI=ae.bR.nMaxWidth;
}
else if(typeof ae.bR.nMinWidth==="number"&&aHI<ae.bR.nMinWidth)
{
aHI=ae.bR.nMinWidth;
}
aAU.style.width=ek.style.width=aHI+"px";

setClass(ek,"txtflow");

}
}
},

panelDomCtrl_:function(oq,cd)
{
var	ae=this,
dQ=ae.hK;
if(true)

{
callBack.call(this,aB.panelDomCtrl_,[oq,cd]);
return ae.Tr();
}

if(oq)
{
var Ao=true;
show(dQ,true);
qmAnimation.expand(dQ,
{
win:window,
from:0,
speed:200,
easing:"easeOut",
tween:"Cubic",
oncomplete:function()
{
callBack.call(ae,cd);
},
onaction:function()
{
if(Ao)
{
ae.Tr();
Ao=0;
}
}
}
);
}
else
{


qmAnimation.fold(dQ,

{
win:window,
speed:200,
easing:"easeIn",
tween:"Cubic",
oncomplete:function()
{
show(dQ,false);
callBack.call(ae,cd);
}
}
);
}
},


panelDomDestroy_:function()
{
var ae=this;
if(ae.bR.bAnimation)
{
qmAnimation.stop(ae.hK);
}
removeSelf(ae.hK);
ae.hK=null;
},


aif:function(nj)
{
var ae=this;
return typeof(nj)=="number"?
ae.S("_menuall_").childNodes[nj]:
ae.S("_menuitem_"+nj);
},

oQ:function(jU)
{
var jz=(typeof(jU)=="string"||typeof(jU)=="number")?this.S("_menuitem_"+jU):jU;

if(this.vG==jz)
{
return this;
}

if(jz)
{
jz.className="menu_item_high";
}
if(this.vG)
{
this.vG.className="menu_item";
}
this.vG=jz;
return this;
},

Ol:function()
{
var ae=this;
if(ae.Nr)
{
clearTimeout(ae.Nr);
ae.Nr=null;
}
return ae;
},

ayY:function()
{
var ae=this;
if(ae.Nq)
{
clearTimeout(ae.Nq);
ae.Nq=null;
}
return ae;
},




bgu:function()
{
var ae=this,
ek=ae;
while(ek.BJ)
{
ek=ek.BJ;
}
while(ek)
{
if(ek.En)
{
clearTimeout(ek.En);
ek.En=null;
}
ek=ek.tR;
}
return ae;
},

aCk:function()
{
var ae=this;
if(ae.En)
{
clearTimeout(ae.En);
}
ae.En=setTimeout(function(){
ae.aiG().close();
ae.En=null;
},500);
return ae;
},

aJk:function(ada,aBg)
{
var ae=this,
aE=ae.bR,

qm=ae.configHelp_(ada.oSubMenu,aE);
qm.sId="sub"+ada.sId;
qm.nZIndex=aE.nZIndex+1;
if(ae.tR)
{
if(ae.tR.bR.sId==qm.sId)
{

return ae;
}
}
ae.Ol();
ae.Nr=setTimeout(function(){

if(ae.tR)
{


ae.ahJ();
}
if(ae.isShow())
{
var cI=calcPos(aBg);
cI[0]-=5;
cI[1]-=1;
cI[2]+=7;
cI[3]+=2;
var	XC=ae.tR=new QMMenu(qm),
aAi=calcAdjPos(cI,XC.option('nWidth'),XC.option('nHeight'),aE.oEmbedWin,1);
XC.option('nY',Math.max(0,aAi[0])).option('nX',Math.max(0,aAi[3])).BJ=ae;
XC.ajR=aBg;
}
},100);
},

ahJ:function()
{
var ae=this;
if(ae.tR)
{

ae.tR.close();
ae.tR=null;
}
return ae;
},




aiG:function()
{
var ae=this,
ahW=ae.BJ;
if(ahW)
{
ahW.tR=null;
ahW.aiG().close();
ae.BJ=null;
}
return ae;
},


toggle:function()
{
var ae=this;
ae.isShow()?ae.hide():ae.show();
return ae;
},

selectItem:function(jU)
{
var ae=this;
ae.oQ(jU);
if(ae.vG)
{

scrollIntoMidView(ae.vG,ae.S("_menuall_"));
}
return ae;
},

selectItemByOffset:function(tW)
{
var ae=this,
anQ=-1,
bC=ae.bR.oItems,
aF=Math.abs(tW),
oP=tW/aF,
i;
if(ae.vG==null)return ae;
anQ=ae.getCurItemIndex();
for(i=0;i<aF;i++)
{
anQ+=oP;
while(anQ>=0&&anQ<bC.length&&bC[anQ].bDisSelect)
anQ+=oP;
if(anQ<0||anQ>=bC.length)break;
}
if(i<aF)return ae;
ae.selectItem(bC[anQ].sId);
return ae;
},
getCurItemIndex:function()
{
var ae=this,
bC=ae.bR.oItems,
anQ=-1;
if(ae.vG==null)return-1;
return QMMenu.indexOf.call(bC,ae.vG.getAttribute("itemid"));
},
addItem:function(nj,bF)
{
var ae=this,
jz=ae.aif(nj);
ae.configHelp_(bF,{
nHeight:22
});
if(jz)
{
insertHTML(jz,"beforeBegin",ae.constructor.ci.yE.replace(bF,"item"));
}
else
{

var aqE=ae.S("_menuall_").childNodes;
insertHTML(ae.S("_menuall_"),"beforeEnd",ae.constructor.ci.yE.replace(bF,"item"));
}
},

delItem:function(nj)
{
var ae=this,
jz=ae.aif(nj);
if(jz)
{
removeSelf(jz);
}
},

itemOption:function(nj,aS,bZ)
{
var ae=this,
jz=this.aif(nj),
bC=ae.bR.oItems;
if(jz)
{
switch(aS)
{
case"bDisSelect":
jz.className=(bZ?"menu_item_nofun":"menu_item");
break;
case"bDisplay":
jz.style.display=bZ?"":"none";
break;
}
}
},

close:function(aJo)
{
var ae=this,
IR=ae.bR.onbeforeclose;
if(IR&&!IR.call(ae))
{
return;
}

aJo&&(this.bR.bAnimation=false);
ae.Ol();
ae.ahJ();
return callBack.call(ae,aB.close);
},




autoClose:function()
{
return this.aCk();
},

option:function(qS,oK)
{
var ae=this;
if(typeof oK!="undefined")
{
switch(qS)
{
case"nHeight":

var kP=ae.S("_menuall_");
kP.style.height=typeof oK=="number"?
(oK-(ae.bR.nGap?ae.bR.nGap:12)+'px'):oK;

break;
case"nX":
ae.bR.nArrowPos&&ae.bR.nArrowDirection=="Up"&&(oK-=ae.bR.nArrowPos);
break;
case"nY":
ae.bR.nArrowPos&&ae.bR.nArrowDirection=="Up"&&(oK+=12);
break;
}
return callBack.call(ae,aB.option,[qS,oK]);
}
else
{
var fG=callBack.call(ae,aB.option,[qS]);
switch(qS)
{
case"nHeight":
if(!fG)
{
var kP=ae.S("_menuall_");
fG=ae.hK.offsetHeight||kP.offsetHeight;
}
break;
case"nX":
ae.bR.nArrowPos&&ae.bR.nArrowDirection=="Up"&&(fG+=ae.bR.nArrowPos);
break;
case"nY":
ae.bR.nArrowPos&&ae.bR.nArrowDirection=="Up"&&(fG-=12);
break;
}
return fG;
}
}


};
},
{



makeMenuItem:function(agA,XJ)
{
var bC=[];
for(var aN=0,aF=XJ?Math.min(agA.length,XJ.length):agA.length;aN<aF;aN++)
{
bC.push({
sId:XJ?XJ[aN]:aN,
sItemValue:agA[aN]
});
}
return bC;
},



indexOf:function(aJ)
{
var ae=this;
for(var i=0,len=ae.length;i!=len;++i)
{
if(ae[i].sId==aJ)return i;
}
return-1;
},
ci:
{
yE:TE([
'$@$if($nArrowPos$>0&&$nArrowDirection$=="Up")$@$',
'<span class="arrow" style="left:$nArrowPos$px;"></span>',






'$@$else if($nArrowPos$>0&&$nArrowDirection$=="Left")$@$',
'<div class="c_arrow" style="left:-10px;top:$nArrowPos$px;">',
'<div class="c_arrow_d"></div>',
'<div class="c_arrow_u"></div>',
'</div>',
'$@$endif$@$',
'<div style="margin:0pt;" $@$if($nArrowDirection$=="Left")$@$class="c_list_msg_pop"$@$endif$@$>',
'<div $@$if($nArrowDirection$=="Up")$@$class="menu_base"$@$endif$@$>',
'<div class="menu_bd$@$if($nArrowDirection$=="Left")$@$ ui_menu_bd$@$endif$@$">',


'<div id="_menuall_"',
'style="overflow-y:auto;$@$if(isNaN($mwidth$))$@$width:$@$if(gbIsIE&&$sWidthDetect$!="float")$@$$nMinWidth$px;$@$else$@$auto$@$endif$@$;$@$else$@$overflow-x:hidden;width:$mwidth$px;$@$endif$@$',
'$@$if($mheight$)$@$height:$mheight$$@$endif$@$$@$if(!isNaN($mheight$))$@$px$@$endif$@$;">',
'$@$for($oItems$)$@$',
'$@$sec item$@$',
'<div id="_menuitem_$sId$" itemid="$sId$" class="menu_item$@$if($bDisSelect$)$@$_nofun$@$endif$@$"',

'style="height:$nHeight$$@$if(!isNaN($nHeight$))$@$px$@$endif$@$;line-height:$nHeight$$@$if(!isNaN($nHeight$))$@$px$@$endif$@$;$sStyle$" title="$sTitle$" onclick=";">$sItemValue$</div>',
'$@$endsec$@$',
'$@$endfor$@$',
'</div>',
'<div id="_foot_"',
'style="overflow-y:auto;$@$if(isNaN($mwidth$))$@$width:$@$if(gbIsIE)$@$$nMinWidth$px;$@$else$@$auto$@$endif$@$;$@$else$@$overflow-x:hidden;width:$mwidth$px;$@$endif$@$',
'padding-top:3px;border-top:1px solid #ccc;$@$if(!$oFootItems$)$@$display:none;$@$endif$@$height:auto;">',
'$@$for($oFootItems$)$@$',
'<div id="_menuitem_$sId$" itemid="$sId$" class="menu_item$@$if($bDisSelect$)$@$_nofun$@$endif$@$"',
'style="height:$nHeight$px;line-height:$nHeight$px;" onclick=";">$sItemValue$</div>',
'$@$endfor$@$',
'</div>',
'$@$if($nArrowPos$>0||$nArrowDirection$=="Left")$@$',
'<a class="btn_close" qmmenuopt="close"  onmousedown="return false;"></a>',
'$@$endif$@$',
'</div>',
'</div>',
'</div>'])
}
}
);








































function QMSelect(aj)
{
this.constructor=arguments.callee;
this.VW(aj).CZ();
}



QMSelect.prototype=
{





get:function(eo)
{
var ae=this;
switch(eo=eo||1)
{
case 1:
case 2:
return ae.Jm[eo==1?"sItemValue":"sId"];
case 8:
return S(ae.cnr,ae.bM);
case"menu":
return ae.ox;
}
},







set:function(bZ,eo)
{
var ae=this,
bE=ae.HN(bZ,eo);
if(!bE.bbi)
{
S(ae.bR.sId,ae.bM).innerHTML=(ae.Jm=bE).sItemValue;
}
return ae;
},







update:function(aj)
{
var ae=this;
ae.configHelp_(aj,ae.bR);





ae.configHelp_(aj.oMenu,ae.bR.oMenu);

ae.bR=aj;
ae.Jm=ae.HN(aj.sDefaultId,2,1);
ae.CZ().set(aj.sDefaultId,2);
},




HN:function(bZ,eo,Ao)
{
var by=(eo==2)?"sId":"sItemValue",
aE=this.bR,
bE,
bC=aE.oMenu.oItems;
if(aE.oMenu.oFootItems)
{
bC=bC.concat(aE.oMenu.oFootItems);
}
for(var aN=0,cZ=bC.length;aN<cZ;aN++)
{
if(bC[aN].sId||bC[aN].sId===0)
{
if(bC[aN][by]==bZ)
{
return bC[aN];
}
else if(Ao&&!bE)
{
bE=bC[aN];
}
}
}
return bE||{sItemValue:aE.sDefaultItemValue,bbi:1};
},


configHelp_:function(aj,DZ,Qf)
{
for(var i in DZ)
{
if(Qf||typeof(aj[i])=="undefined"||aj[i]==null)
{
aj[i]=DZ[i];
}
}
return aj;
},

VW:function(aj)
{
var ae=this;
ae.bM=aj.oContainer.ownerDocument.parentWindow||aj.oContainer.ownerDocument.defaultView;

ae.configHelp_(aj,{
sDefaultItemValue:"",
sId:QMSelect.ci.aZz+Math.random()
});
ae.bR=aj;
ae.Jm=ae.HN(aj.sDefaultId,2,!aj.sDefaultItemValue);

return this;
},
CZ:function()
{
var ah=getTop(),
ae=this,
aE=ae.bR,
lg=S(aE.sId,ae.bM);
if(!lg)
{
if(aE.sName)
{
insertHTML(aE.oContainer,"beforeEnd",
QMSelect.ci.aZk.replace(aE)
);
}

insertHTML(aE.oContainer,"beforeEnd",
QMSelect.ci.bcZ.replace(
extend(aE,{
content:ae.Jm.sItemValue,
images_path:getPath("image")
})
)
);


}
if(!(lg=S(aE.sId+"_div",ae.bM)))
{

return;
}

ae.configHelp_(aE.oMenu,
{
oEmbedWin:ae.bM,

sId:"select",

nWidth:lg.clientWidth+3,
nMinWidth:lg.clientWidth+3,
onitemclick:function(aJ)
{
if(aE.sName)
{
S(aE.sName,ae.bM).value=aJ;
}
if(!callBack.call(ae,aE.onselect,[ae.HN(aJ,2)]))
{
ae.Jm=ae.HN(aJ,2);
ae.set(aJ,2);
}
callBack.call(ae,aE.onchange,[ae.HN(aJ,2)])
},
onshow:function()
{
var aU=ae.Jm.sId;
if(aU||aU===0)
{
this.selectItem(aU);
}
},
onload:function()
{

var mC=this,
cI=calcPos(lg),
Mu=bodyScroll(ae.bM,'clientHeight'),
Iq=bodyScroll(ae.bM,'scrollTop'),
mI=Mu+Iq;

callBack.call(ae,aE.onafteropenmenu,[mC,lg]);

var cX=parseInt(mC.option("nHeight")),
cz=cI[2],
YN=lg.offsetHeight,
DH=cz-cX-YN,
bjq=true;

if(aE.oMenu.bAutoItemView)
{
var aNa=Mu/2+Iq,
nB;

if(aE.oMenu.nMaxHeight)
{
nB=Math.min(cX,aE.oMenu.nMaxHeight);
if(cz>aNa&&cz-nB-YN>0)
{
cz=cz-nB-YN;
bjq=false;
}
}
else if(cz<aNa)
{

nB=Math.floor((mI-cz)*0.66);
}
else if(cz+cX<mI)
{

nB=cX;
}
else
{

nB=Math.floor((Mu-(mI-cz+YN))*0.66);
cz=cz-Math.min(cX,nB)-YN;
bjq=false;
}
if(cX>nB)
{
mC.option("nHeight",nB);
}
}
else if(DH>0&&cz+cX>mI)
{
cz=DH;
}
if(aE.oMenu.bOverLap)
{
cz+=bjq?-1:1;
}
mC.option("nX",cI[3]).option("nY",cz);
}
}
);

addEvent(ae.bM.document.body,(gbIsFF?"DOMMouseScroll":"mousewheel"),function()
{
ah.QMMenu("select","close");
}
);

lg.onclick=function()
{
if(lg.className.indexOf("btn_disabled")!=-1)return false;
callBack.call(ae,aE.onbeforeopenmenu,[aE.oMenu]);
ae.ox=new ah.QMMenu(aE.oMenu);
return false;
};

lg.onkeydown=function(ag)
{
var ek=ae.ox,
lg=S(aE.sId+"_div",ae.bM),
ey=(ag||ae.bM.event).keyCode;
if(ey==38)
{
if(ek==null)return false;
ek.selectItemByOffset(-1);
}
else if(ey==40)
{
if(ek==null)return false;
ek.selectItemByOffset(1);
}
else if(ey==13)
{
if(ek!=null)
{
ae.bR.oMenu.onitemclick(ek.bR.oItems[ek.getCurItemIndex()].sId);
ah.QMMenu("select","close");
ae.ox=null;
}else
{
lg.onclick();
}
}
return false;
}
return ae;
},
disable:function(aYp)
{
var	lg=S(this.bR.sId+"_div",this.bM),
dI=lg.className.replace("btn_disabled","");
dI=aYp?dI+" btn_disabled":dI;
lg.className=dI;
}
};

QMSelect.ci=
{
bcZ:TE(
[
'<a tabindex="-1" class="btn_gray btn_select$@$if($nWidth$)$@$ btn_select_limiting$@$endif$@$" href="javascript:;" id="$sId$_div" style="width:$nWidth$px;$sStyle$">',
'<span id="$sId$" class="btn_select_txt">$content$</span>',
'<span class="ico_select_s"></span>',
'</a>'






]
),
aZk:T(
'<input type="hidden" id="$sName$" name="$sName$" value="$sDefaultId$"/>'
),
aZz:"QmCs_2_"
};




var QMAddrParser=
{


parseAddr:function(bW)
{
var aL,gX,ayE,aD,
aPe=[],
gr=getTop().trim(bW||"");

for(var i=0,aF=gr.length;i<aF;i=ayE[0])
{
aL=[];
gX=[];
ayE=this.buK(gr,i,aL,gX);
aD=this.bAd(ayE[1],aL,gX);
if(aD.addr)
{
aPe.push(aD);
}
}

return aPe;
},






























isEmailAddress:function(bW)
{
var dzr=/^(.+)@(.+)$/,
dlf="\\(\\)><@,;:\\\\\\\"\\.\\[\\]",
dog="\[^\\s"+dlf+"\]",

cpI=dog+'+',

PF="("+cpI+")",
dxD=new RegExp("^"+PF+"(\\."+PF+")*$"),
bHU=bW.match(dzr);

if(bHU==null)
{
return false;
}

var pE=bHU[1],
hv=bHU[2];

for(var i=0;i<pE.length;i++)
{
if(pE.charCodeAt(i)>126||hv.charCodeAt(i)<32)
{
return false;
}
}

if(pE.match(dxD)==null)
{
return false;
}

var dxI=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
for(var i=0;i<hv.length;i++)
{
if(hv.charCodeAt(i)>126||hv.charCodeAt(i)<32)
{
return false;
}
}

var cmC=hv.match(dxI);
if(cmC!=null)
{
for(var i=1;i<=4;i++)
{
if(cmC[i]>255)
{
return false;
}
}
}

var dpt=new RegExp("^"+cpI+"$"),
cnx=hv.split(".");
for(var i=0;i<cnx.length;i++)
{
if(cnx[i].search(dpt)==-1)
{
return false;
}
}
return true;
},





buK:function(bW,fm,bd,arZ)
{
var tP,abh,aOU,eY,
uX='N',
bxO='<(",;\uFF0C\uFF1B\u3001',
bxJ='<("DDDDD',
bvQ='>)"',
hA=0,
hD=fm,
PF="",
vV=0,
aQI=0;

for(var i=fm;uX!='D';)
{
tP=bW.charAt(i);
abh=uX;
vV=0;


if(tP=='\\'&&uX!='<')
{
tP=bW.charAt(++i);
vV=1;
}


if(tP=='')
{
uX='D';
hA=i;
}

else if(uX=='N')
{
if(!vV&&(eY=bxO.indexOf(tP))>-1)
{
uX=bxJ.charAt(eY);
aOU=bvQ.charAt(eY);
hA=(eY>2)?i:i-1;
}





else
{
PF+=tP;
}
++i;
}
else
{
if(!vV&&tP==aOU)
{
uX='N';
hA=i;
}
else
{
PF+=tP;
}
++i;
}

if(uX!=abh||aQI)
{
if(abh=='"'||getTop().trim(PF)!="")
{
bd.push([PF,abh,hD,
bW.substr(hD,hA-hD+1)]);
arZ.push(abh);
}
aQI=0;
PF="";
hD=hA+1;
}
}
return[i,bW.substr(fm,i-fm)];

},



bAd:function(Oy,ayh,arZ)
{
var jL="",
eG="";
switch(arZ.join(""))
{
case'N':
case'<':
eG=ayh[0][0];
break;
case'"<':
case'N<':
case'"N':
jL=ayh[0][0];
eG=ayh[1][0];
break;
}

eG=getTop().trim(eG);
jL=getTop().trim(jL);


if(!/[^0-9]/.test(eG))
{
eG+="@qq.com";
}
eG=this.dls(eG);
return this.isEmailAddress(eG)?{
nick:jL,
addr:eG,
valid:true
}:{
nick:"",
addr:/[;,\uFF1B\uFF0C\u3001]$/.test(Oy)
?Oy.slice(0,-1)
:Oy,
valid:false
};
},







dls:function(er)
{
if(/^(400\d{7})@qq.com$/.test(er)||/^(800\d{6,7})@qq.com$/.test(er))
{
return RegExp.$1+"@b.qq.com";
}
return er;
}
};






var JS=(function()
{
var cr={};

function asN(ft,iB)
{
var ah=getTop();
iB=typeof iB=="string"?[iB]:iB;

E(iB,function(hT)
{
if(cr[hT]!==true)
{
loadJsFile(ft+hT,true,ah.document,function()
{
var Gz=cr[hT];
cr[hT]=true;
if(isArr(Gz))
{
for(var i in Gz)
{
Gz[i]();
}
}
}
);
}
});
}

function bhn(iB,cj)
{
iB=(typeof iB=="string")?[iB]:iB;

function ahK()
{
var kA=true;
E(iB,function(hT)
{
kA=kA&&(cr[hT]===true);
});
kA&&cj();
return kA;
}

if(!ahK())
{
E(iB,function(hT)
{
var Gz=cr[hT];
if(Gz===true)
{
return;
}
else if(!isArr(Gz))
{
cr[hT]=[ahK];
}
else
{
Gz.push(ahK);
}
});
}
}


















return(
{
load:asN,
wait:bhn
})
})();





var	cE,dz;




function clsXfBatchDownload(dYG,cj)
{
var ae=this;
ae.dvB=dYG;
ae.cUE={
"sid":21513,
"data":[]
};
ae.daJ=cj;

if(typeof(XFLIB)=="undefined")
{
cj("check");
loadJsFile("http://x.soso.com/js/xf/xflib2.0.js",true);
}
waitFor(function()
{
return typeof(XFLIB)!="undefined";
},
function(auH)
{
if(auH)
{
if(!ae.aNs())
{
cj("check_err");
}
else
{
setCookie("qm_ftn_key","",new Date(),"/","qq.com");
cj("get_url");
ae.eBD();
}
}
else
{
cj("load_err");
}
});
}

clsXfBatchDownload.prototype=
{
aNs:function()
{
return XFLIB.IsXFInstalled();
},
eBD:function()
{
this.epq(this.dRP());
},
dRP:function()
{
var aPT=[];
for(var aN in this.dvB)
{
aPT.push(
this.dvB[aN].replace("t=exs_ftn_download","t=exs_ftn_getfiledownload&s=email").replace(/^http:\/\/mail.qq.com/,"")
);
}
return aPT;
},
epq:function(ans)
{
var aF=Math.min(100,ans.length),
eL=new QMAjax,
aL={},
ae=this;
(function bgf(hq)
{
if(hq>=aF)
{
return ae.bfA(aL,aF);
}
QMAjax.send([ans[hq],"&nm=",hq,"&rn=",Math.random()].join(""),
{
method:"GET",
onload:function(bz,bU){
var aV="name"+hq;
if(bz&&bU.indexOf(aV)>0)
{
aL[aV]=bU.split('"')[1];
}
bgf(hq+1);
}
},
eL);
})(0);
},
epD:function(bT)
{
var dUV=/fname=([^&]+)/g;
dUV.test(bT);
return RegExp.$1;
},
bfA:function(azi,adc){

var	ae=this,
chV=0,
eqk=ae.cUE.data;
for(var aN=0;aN<adc;aN++){
if(typeof azi["name"+aN]!="undefined"){
var VM=azi["name"+aN].split("|");
if(VM[0]!="error"&&VM[0].indexOf("http://")==0){
eqk.push({
"url":VM[0].replace(/#/g,"_"),
"file_name":ae.epD(VM[0]),
"cookie":VM[1]
});
chV++;
}
}
}
if(chV<adc)
{
ae.daJ("geturl_err",adc-chV);
}
if(chV>0)
{
showProcess(0);
ae.bgn();
}
},
bgn:function()
{
XFLIB.startDownload_BatchTask(this.cUE);
}









































































































































}





















var QMSender=function(mv)
{
this.bM=mv.oWin;
this.Nx=[];
this.ajc=false;
this.ahf=null;
this.bak(mv);
}

dz=QMSender;
cE=dz.prototype;

cE.bak=function(mv)
{
var be=S("Senderdiv",this.bM);
if(!be)
{
return;
}
try
{
var il=getTop().goUserInfo.get('RealDefaultAllMail');
}
catch(e)
{
var kX=arguments.callee;
return setTimeout(function()
{
kX.apply(this.bM,arguments);
},500);
}

if(!il||!il.length)
{
return;
}

var abV=mv.nCurFolderId;
var QJ=mv.sCurSaveFrom;
var auh=mv.bShowNode;
var aRJ=typeof(mv.sTitle)=="undefined"?
"You can use mailbox alias or address of POP folder &#10; as the sender. ":mv.sTitle;

var aUz=typeof(mv.sDesContent)=="undefined"?
"From:":mv.sDesContent;
var cun=mv.bDraft||false;
var cZi=(this.bM.location.getParams()["s"]=="background"&&this.bM.location.getParams()["recoverCompose"]=="true")

this.ahf=function(an)
{

var bkG=S("sendmailname_val",this.bM);
if(!bkG)
{
return;
}

var pn="",
Mv=GelTags("span",S("sendmailname_val",this.bM))[0],
adB=GelTags("b",S("sendmailname_val",this.bM))[0],
jL=Mv.getAttribute("nickname"),
fi=jL?jL.split("|"):[];


if(fi[0]==an.email)
{
pn=fi[1];
}
Mv.innerHTML=this.ci.atE.replace(an);
adB.innerHTML=htmlEncode(pn)||an.nick.replace(/(^\"|\"$)/g,"");
S("sendname",this.bM).value=htmlDecode(adB.innerHTML);


this.aOf(an);


if(an.sms)
{
loadJsFileToTop(["$js_path$qmtip13e6cd.js"]);
var Dz=this.bM;

waitFor(function()
{
return QMTip;
},
function(bz)
{

if(bz&&S("sendmailname",Dz).value==an.email)
{
QMTip.show({
tipid:10001,
domid:'sendmailname_val',
win:Dz,
msg:['<span class="black">Use \u4F7F\u7528\u624B\u673A\u53F7\u90AE\u7BB1\u53D1\u4FE1\uFF0C\u8FD9\u6837\u5BF9\u65B9\u56DE<br/>\u4FE1\u60A8\u5C31\u4F1A\u83B7\u5F97\u77ED\u4FE1\u63D0\u9192\u3002<a onclick="window.open(\'http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=8&&no=1000605\')">\u8BE6\u60C5</a></span>'].join(''),
arrow_direction:'down',
arrow_offset:25,
height_offset:4,
tip_offset:-110,
width:305,
auto_hide:1,
notlog:true,
bForceShow:true
});
}
}
);
}
callBack.call(this,mv.onclickItemCallBack,[an]);
}

var aug=typeof(mv.sAlignType)=="undefined"?
"left":aug,
bja=mv.sVerAlign||"bottom";

var Oh=300;
var dp=parseInt(mv.sWidth)||Oh;
var LW,avh;
this.ajc=(dp<0);


if(this.ajc)
{
LW=getStrDispLen(mv.sCurSaveFrom)+60;
dp=LW+(gbIsIE?50:50);
}
else
{
LW=dp-(gbIsIE?40:40);
}
avh=LW-25;

var aVg=Math.floor(dp*23/Oh);
var aSD=Math.floor(dp*20/Oh);

var rq=[];
var yx=[];
var yi=null;
var XA=this.hV;
var aQj=this.ci.aWB;
var aUF=this.ci.atE;
var aUj=this.ci.aME;
var aRS=this.ci.Mm;

var aWd=this.Nx=[];

var azC=this;



















for(var i=0;i<il.length;i++)
{
(function()
{
var aD=il[i];
var fe=aD.email;
var hv=fe.split("@").pop();
var arH=XA.hasOwnProperty(hv);
var IK={
nick:aD.nickname&&"\""+aD.nickname+"\"",
email:fe,
phone:aD.phone,
emaildisp:this.ajc?fe:subAsiiStr(fe,arH?aSD:aVg,"..."),
signid:aD.signid,
domain:aUj.replace({images_path:getPath("image"),margin_top:(aD.phone==1?416:(arH?XA[hv]:321))}),
sms:aD.phone==1&&aD.smsleft>0


};

aWd.push(IK);
rq.push(extend({smtp:aD.smtp==2?'':''},IK));

yx.push(function(e)
{
azC.ahf(IK);
});

if(!abV&&!QJ&&getTop().goUserInfo.get('RealDefaulSender')==fe)
{

yi=IK;
}
else if((QJ&&QJ.toLowerCase()==aD.email)
||(!QJ&&abV&&abV==aD.folderid)
||yi==null)
{
yi=IK;
}
})();
}

be.innerHTML=aRS.replace({
title:aRJ,
desContent:aUz,
email_width:avh,
sel_width:LW,
width:dp,
images_path:getPath("image"),
nick:yi.nick,
email:aUF.replace(yi)
});

var BM=0;
S("sendmailname_val",this.bM).onclick=function()
{
if(!BM)
{
for(var i=0;i<il.length;i++)
{
var asW=getStrDispLen(il[i].email+(il[i].smtp==2?'':''));
if(BM<asW)
{
BM=asW;
}
}
BM=Math.max(this.clientWidth,BM+42);
}
var UW=calcPos(this),
bC=[],
aSB=GelTags("span",this)[0],bSo=0;

for(var i=0;i<rq.length;i++)
{

aSB.innerHTML==rq[i].email&&(bSo=i);
bC.push({
sId:i,
sItemValue:aQj.replace(extend({selected:aSB.innerHTML==rq[i].email},rq[i]))
});
}

var Mv=this.getElementsByTagName("span")[0],
pn="",
aGF=Mv&&Mv.innerHTML||"";

for(var i=0;i<il.length;i++)
{

if(il[i].email==aGF)
{
pn=il[i].nickname;

var jL=Mv.getAttribute("nickname"),
fi=jL?jL.split("|"):[];



if(fi[0]==aGF)
{
pn=fi[1];
}

break;
}
}

bC.push({
sId:"border",
nHeight:5,
sItemValue:[
'<div style="border-top:1px solid;margin-top:2px;padding-top:2px;font-size:0;line-height:0;height:0;"></div>'
].join(""),
bDisSelect:true
});
bC.push({
sId:"send__nickname",
nHeight:25,
sItemValue:[
'<div style="padding-left:15px;overflow:hidden">',

'<span id="snn_getAlias" style="line-height:25px;">',
'<font style="color:#000">Nickname for Outgoing Messages:</font>',
'<span title="',pn,'">',subAsiiStr(pn,16,"...",true),'</span>',
'&nbsp;<a href="javascript:;" onclick="getTop().QMSender.initAlias(\'',pn,'\');return false">Edit</a>&nbsp;&nbsp;&nbsp;&nbsp;',
'</span>',
'<span id="snn_setAlias" style="display:none;line-height:25px;">',
'<input onkeyup="if(event.keyCode==13){getTop().QMSender.setAlias()};" class="text" onchange="" style="width:120px" type="text" value=""/>',

'&nbsp;<input type="button" value="OK" onclick="getTop().QMSender.setAlias();return false" />',
'</span>',
'</div>'
].join(""),
bDisSelect:true
});
var aFm=bC.length>17?17:bC.length,
cBh=new(getTop().QMMenu)({
oEmbedWin:azC.bM,
sId:"sendermenu",
nMaxItemView:17,
nX:aug=="left"?UW[3]:UW[3]-(BM-this.clientWidth),
nY:bja=="bottom"?UW[2]:(UW[2]-21*aFm-21),

nMinWidth:230,
bAnimation:false,
nItemHeight:21,
oItems:bC,
onitemclick:function(aJ)
{
yx[aJ]();
},
onshow:function()
{

cBh.selectItem(bSo);
}
});
};

if(S("sendmailname",this.bM))
{
S("sendmailname",this.bM).value=yi.email;
}
var Dz=this.bM;
if(Dz.setSignature&&!cun&&!cZi)
{
if(getTop().goUserInfo.get('RealUserSignatureId')!=-1)
{
S("signtype",this.bM)&&(S("signtype",this.bM).value=getTop().goUserInfo.get('RealUserSignatureId'));
}

Dz.setSignature("sign",getTop().goUserInfo.get('RealUserSignatureId'));












}
show(auh?be[auh]:be,true);
if(rq.length>1)
{
getTop().requestShowTip("sendmailname_val",17,this.bM);
}
};
dz.setAlias=function()
{
var ah=getTop(),
az=ah.getMainWin(),
uk=S("sendermenu_QMMenu",az)?"sendermenu_QMMenu_":"sendermenu__",
cC=GelTags("input",S(uk+"snn_setAlias",az))[0],
apa=GelTags("span",S(uk+"snn_getAlias",az))[0],
aes=GelTags("span",S("sendmailname_val",az))[0],
adB=GelTags("b",S("sendmailname_val",az))[0],
cA=cC.value;

S("sendname",az).value=cA||" ";
aes.setAttribute("nickname",[aes.innerHTML,cA].join("|"));

adB.innerHTML=htmlEncode(cA);
apa.innerHTML=htmlEncode(cA);

if(S("useraddr").innerHTML==aes.innerHTML)
{
S("useralias").innerHTML=htmlEncode(cA);
}

show(S(uk+"snn_setAlias",az),false);
show(S(uk+"snn_getAlias",az),true);
}
dz.initAlias=function(aMr)
{
var ah=getTop(),
az=ah.getMainWin(),
uk=S("sendermenu_QMMenu",az)?"sendermenu_QMMenu_":"sendermenu__",
apa=GelTags("span",S(uk+"snn_getAlias",az))[0],
cC=GelTags("input",S(uk+"snn_setAlias",az))[0];



cC.value=htmlDecode(apa.innerHTML);

show(S(uk+"snn_setAlias",az),true);
show(S(uk+"snn_getAlias",az),false);
setTimeout(function(){
cC.select();
});
}

cE.aOf=function(an)
{
var Dz=this.bM;
S("sendmailname",Dz).value=an.email;
if(Dz.setSignature)
{
Dz.setSignature("sign",an.signid==-2?getTop().goUserInfo.get('RealUserSignatureId'):an.signid);
}
}


cE.setSenderSelected=function(pG)
{
var bC=this.Nx;
for(var i=bC.length-1;i>=0;i--)
{
if(bC[i].email==pG)
{
this.ahf(bC[i]);
return;
}
}
}

cE.hV={

"hotmail.com":0,
"live.com":0,
"live.cn":0,
"msn.com":0,
"msn.cn":0,

"yahoo.com.cn":30,
"yahoo.cn":30,
"yahoo.com":30,
"ymail.com":30,
"rocketmail.com":30,

"gmail.com":61,
"vipgmail.com":61,

"sina.com":95,
"sina.com.cn":95,
"vip.sina.com":95,
"my3ia.sina.com":95,
"sina.cn":95,

"163.com":383,
"vip.163.com":383,
"126.com":352,
"vip.126.com":352,
"yeah.net":223,

"foxmail.com":159,

"sohu.com":193,
"vip.sohu.com":193,

"vip.qq.com":288,
"qq.com":288,

"21cn.com":256,
"21cn.net":256
};

cE.ci={
Mm:T([
'<div title="$title$" style="float:left; margin-left:-3px;" class="textoftitle">&nbsp;$desContent$</div>',
'<div id="sendmailname_val" unselectable="on" onmousedown="return false" ',
'style="cursor:pointer; padding:0 0 0 3px;  float:left;">',
'<b>$nick$</b> &lt;<span>$email$</span>&gt;<span class="addrtitle" style="font-family: arial,sans-serif; padding-left:4px; font-size:9px; position:relative; top:-1px;" >\u25BC</span>',
'</div>',
]),
aWB:TE([



'<div class="composeAccount" style="">',
'<input type="button" class="ft_upload_success" style="$@$if(!$selected$)$@$visibility:hidden;$@$endif$@$">$email$$smtp$',
'</div>'
]),
atE:T([



'$email$'
]),
aME:T([
'<img src="$images_path$spacer12fb20.gif" style="background-position:0 -$margin_top$px;" valign="absmiddle" >'
])
};








































var QMAutoComplete=inherit("QMAutoComplete",Object,
function(aB)
{
return{

$_constructor_:function(aj)
{
this.VW(aj);
},






show:function(an)
{
var ae=this;
ae.kF=an;
return ae.fY();
},
close:function()
{
var ae=this;
ae.ox&&ae.ox.hide();
return ae;
},
isShow:function()
{
var ek=this.ox;
return ek&&ek.isShow();
},
getSelection:function()
{
return this.kF[this.ox.getSelectItemId()];
},









setHeader:function(cL)
{
var ek=this.ox;
return ek&&ek.setHeader(cL);
},

VW:function(aj)
{
var ae=this,
cC=ae.Bs=aj.oInput;

ae.agO=aj.oPosObj||cC;
ae.bM=ae.agO.ownerDocument.parentWindow
||ae.agO.ownerDocument.defaultView;
ae.kF=null;
ae.ox=null;
ae.ajp=aj.defaultValue||"";
ae.aBH=!(aj.notSupportKey||0);

ae.om=aj.type||"";

cC.setAttribute("autocomplete","off");


ae.aaU=aj.sUrl;
ae.bdV=aj.ondata;

ae.DX=ae.aaU?500:20;
ae.DX=(typeof aj.nDelay=="number")?
aj.nDelay:ae.DX;

ae.bdO=aj.ongetdata;
ae.rA=aj.onselect;
ae.aiD=aj.onclick;
ae.atj=aj.onkeydown;
ae.bbX=aj.ontouchstart;

addEvents(cC,
{
keydown:ae.nI(ae.apx),
keypress:ae.nI(ae.awu),
keyup:ae.nI(ae.ayo),
focus:ae.nI(ae.As),
blur:ae.nI(ae.ajZ)
}
);

ae.ox=new QMAutoComplete.bbL(
{
sId:unikey(),
oItems:[],
supportKey:ae.aBH,
oEmbedWin:ae.bM,
nWidth:aj.nWidth||"auto",
nMinWidth:aj.nMinWidth||100,
nItemHeight:aj.nItemHeight||21,
nMaxItemView:aj.nMaxItemView||0,
type:aj.type,
sClassName:aj.sClassName,
oClass:aj.oClass,
bDisplay:false,
onselect:function(aJ)
{
callBack.call(ae,ae.rA,[ae.kF[aJ]]);
},
onclick:function(ag,aJ)
{
callBack.call(ae,ae.aiD,[ag,ae.kF[aJ]]);
},
ontouchstart:function(ag)
{
callBack.call(ae,ae.bbX,[ag]);
}
}
);
return ae.acF();
},
nI:function(eF)
{
var ae=this;
return function(ag)
{
return eF.call(ae,ag);
};
},
awu:function(ag)
{
if(gbIsOpera&&ag.keyCode==13)
{
preventDefault(ag);
}
},
ayo:function(ag)
{
if(!ag.ctrlKey)
{
var ey=ag.keyCode,
ae=this;
if(!(ey==38||ey==40||(ey==13&&ae.aLU!=229)||ey==27))
{
ae.Tz&&clearTimeout(ae.Tz);
ae.Tz=setTimeout(function()
{

if(ae.aaU)
{
var xp=trim(ae.Bs.value);
if(xp=="")
{
ae.close();
}
else
{
xp=encodeURIComponent(xp);
QMAjax.send([ae.aaU,"&resp_charset=UTF8&q=",xp].join(""),
{
method:"get",
onload:function(bz,bU)
{
if(bz)
{
ae.kF=ae.bdV.call(ae,bU);
ae.fY().Tz=0;
}




}
}
);
}
}
else
{
ae.kF=ae.bdO(ae.Bs,ey);
ae.fY().Tz=0;
}
},
ae.DX
);
}
}
},
apx:function(ag)
{
var ae=this,
ey=ag.keyCode;
callBack.call(ae,ae.atj,[ag,1]);


ae.aLU=ey;
if(ae.isShow()&&this.aBH)
{
switch(ey)
{
case 13:
callBack.call(ae,ae.rA,[ae.getSelection()]);
ae.close();
preventDefault(ag);
break;
case 38:
ae.ox.selectItem(-1);
preventDefault(ag);
break;
case 40:
ae.ox.selectItem(1);
preventDefault(ag);
break;
case 9:
callBack.call(ae,ae.rA,[ae.getSelection()]);
ae.close();

break;
case 27:


ae.close();
preventDefault(ag);
break;
}
}
callBack.call(ae,ae.atj,[ag,0]);
},
As:function(ag,aqH)
{
var ae=this;
ae.JR=true;
aqH&&ae.Bs.focus();
return ae.acF();
},
ajZ:function(ag)
{
var ae=this;
ae.JR=false;
setTimeout(function()
{
!ae.JR&&
ae.close().acF();
},
20
);
},
acF:function()
{
var ae=this;
if(ae.ajp)
{
var nA=ae.Bs,
cA=nA.value;
if(ae.JR)
{
if(cA==ae.ajp)
{
var dI=nA.className.replace(/graytext/ig,"");
if(this.om=="rss")
{
dI=dI.replace(/textInput/ig," textInput2");
}
nA.className=dI;
nA.value="";
}
}
else
{
if(cA=="")
{
var dI=(this.om=="rss"?nA.className.replace(/textInput2/ig," textInput"):nA.className)+" graytext";
nA.className=dI;
nA.value=ae.ajp;
}
}
}
return ae;
},
fY:function()
{
var ae=this;
if(!ae.kF||ae.kF.length==0)
{
ae.close();
}
else
{
var cI=calcPos(ae.agO);
ae.ox.setContent(
{
oItems:ae.kF
}
).option("nX",cI[3]).option("nY",cI[2]);
}
return ae;
}
}
}
);

QMAutoComplete.bbL=inheritEx("QMAutoCompleteMenu",QMPanel,
function(aB)
{
return{
processHtml_:function(cL)
{
return cL;
},

initMemVar_:function(aj)
{
callBack.call(this,aB.initMemVar_,[aj]);

if(aj.supportKey)
{
this.ais(this.uz=0);
}
},

setEvent_:function()
{
var aE=this.bR,
ae=this,
kP=this.S("_menuall_"),
KR=this.S("_title_"),
aqR=function(ag){
var ag=ag||aE.oEmbedWin.event,
aK=getEventTarget(ag);
while(aK&&aK!=kP&&aK.parentNode!=kP)
{
aK=aK.parentNode;
}
return aK;
};

if(aE.supportKey)
{
kP.onmouseover=function(ag){


if(now()-(ae.blU||0)>500)
{
var aK=aqR(ag),
Gf=parseInt(aK.id.substr(ae.tp.length+1));
if(!isNaN(Gf))
{
ae.ais(Gf);
}
}
};
KR.onclick=function(ag){
var ag=ag||aE.oEmbedWin.event;
callBack.call(ae,aE.onclick,[ag,""]);
};
kP.onclick=function(ag){
var aK=aqR(ag),
bK=aK.getAttribute("key");
callBack.call(ae,aE.onclick,[ag,bK]);
if(bK)
{
callBack.call(ae,aE.onselect,[bK]);
setClass(aK,"menu_item");
if(aE.type!="rss")
{
ae.hide();
}
}
};
}

addEvents(this.hK,
{
mousedown:preventDefault,
touchstart:function(ag)
{
callBack.call(ae,aE.ontouchstart,[ag]);
}
}
);
},

dfConfig_:function(aj)
{
var bC=aj.oItems,
OU=(aj.nItemHeight||21)*(aj.nMaxItemView||bC.length);

this.configHelp_(aj,
{
mheight:OU,
nWidth:"auto",
nHeight:OU,
nZIndex:1121
}
);


this.configHelp_(aj,{sStyle:"background:#fff"},true);
return callBack.call(this,aB.dfConfig_,[aj]);
},







azG:function(aj)
{
var bC=aj.oItems,
bG=[],
aE=this.bR,
jo=(aE&&aE.oClass&&aE.oClass.classnormal)?aE.oClass.classnormal:"menu_item";
this.WP=0;
for(var i=0,cZ=bC.length;i<cZ;i++)
{

bG.push('<div unselectable="on" style="height:',bC[i].nItemHeight||aj.nItemHeight,'px;" onclick=";" ');
var aU=bC[i].sId;
if(aU||aU===0)
{
bG.push('key="',i,'" id="',this.tp,'_',this.WP++,'" class="',jo,'" >');
}
else
{
bG.push('class="menu_item_onfun">');
}
bG.push(bC[i].sItemValue,'</div>');
}
return bG;
},


insertHtml_:function(aj)
{

var bC=aj.oItems,
bG=[
'<div style="margin:0px;">',
'<div class="menu_base">',
'<div class="menu_bd" style="padding:0;">',
'<div unselectable="on" id="',this.tp,'__title_" style="white-space:nowrap;width:',aj.nMinWidth,'px;line-height:',aj.nItemHeight,'px;',(aj.header?'':'display:none;'),'">',aj.header,'</div>',
'<div unselectable="on" id="',this.tp,'__menuall_" style="overflow-y:auto;height:auto;line-height:',aj.nItemHeight,'px;width:'];


if(aj.nWidth=="auto")
{

bG.push(!getTop().gbIsIE?aj.nMinWidth+"px":"auto");
}
else
{

bG.push(aj.nWidth-(getTop().gbIsIE?0:2),"px;overflow-x:hidden;");
}
bG.push('">');
bG=bG.concat(this.azG(aj));
bG.push('</div></div></div></div>');
aj.sBodyHtml=bG.join("");

callBack.call(this,aB.insertHtml_,[aj]);
},

Tr:function(vq,XD)
{
var azN=this.bR.nMaxItemView||this.bR.oItems.length,
Ln=this.WP<=azN?"auto":this.bR.nItemHeight*azN;
this.option("nHeight",Ln);
vq.style.height=Ln=="auto"?"auto":Ln+"px";

if(this.bR.nWidth!="auto")
{
if(vq.style.width!=this.bR.nWidth)
{
XD.style.width=vq.style.width=this.bR.nWidth-(getTop().gbIsIE?0:2)+"px";
}
}
else
{
if(gnIEVer>6&&vq.ownerDocument.documentElement.clientHeight)
{
XD.style.width=vq.style.width="auto";
}

if(vq.offsetWidth>10)
{
XD.style.width=vq.style.width=
(Math.max(vq.offsetWidth,XD.offsetWidth,this.bR.nMinWidth)
+(gbIsIE?(gnIEVer>6?18:0):vq.offsetWidth-vq.scrollWidth))+"px";
}

}
},

setHeader:function(cL)
{
if(cL)
{
this.S("_title_").innerHTML=this.processHtml_(cL);
show(this.S("_title_"),1);
}
else if(cL=="")
{
show(this.S("_title_"),0);
}
},

setContent:function(aj)
{
var ae=this,
kP=ae.S("_menuall_"),
KR=ae.S("_title_");

this.configHelp_(ae.bR,aj,true);
if(ae.bR.nWidth=="auto")
{
KR.style.width=kP.style.width=gbIsIE&&gnIEVer!=7?ae.bR.nMinWidth+"px":"auto";
}
ae.setHeader(aj.oItems.header);

kP.innerHTML=ae.azG(aj).join("");
if(ae.bR.supportKey)
{
ae.selectItem(ae.uz=0);
}

ae.show();
ae.Tr(kP,KR);
callBack.call(ae,ae.bR.onload,[aj]);

ae.blU=now();

return ae;
},

selectItem:function(tW)
{
var ae=this,
jz=ae.ais((ae.uz+tW+ae.WP)%ae.WP);

scrollIntoMidView(jz,ae.S("_menuall_"));



},

getSelectItemId:function()
{
var aAQ=this.S(this.uz);
return aAQ&&aAQ.getAttribute("key");
},

ais:function(azs)
{
var jz=this.S(this.uz),
aE=this.bR,
jo=(aE&&aE.oClass&&aE.oClass.classnormal)?aE.oClass.classnormal:"menu_item",
bjZ=(aE&&aE.oClass&&aE.oClass.classhigh)?aE.oClass.classhigh:"menu_item_high";

if(jz)
{
jz.className=jo;
}

if(jz=this.S(azs))
{
jz.className=bjZ;
this.uz=azs;
}
return jz;
}
};
}
);















function uI(aj)
{
aj.bI.push('&t=mail_mgr2&resp_charset=UTF8&ef=js&sid=',getSid(),getTop().bnewwin?'&newwin=true':'');
QMAjax.send(aj.bi||'/cgi-bin/mail_mgr',{
content:aj.bI.join(""),
onload:function(bz,bU,fj){
var aUu=bU.indexOf(aj.tf)>=0,
aBy=bU.indexOf("cgi exception")>=0;
if(bz&&(aUu||aBy))
{
var aL=evalValue(bU);
if(aBy)
{

showError(aL.errmsg,0,true);
}
else
{
aj.mj(aL,bU,fj);
}
}
else if(aj.oE)
{
showError(aj.oE);
}
}
});
}

var AjaxSendMailMgr=uI;
function setRollBack(bH,cQ)
{

if(bH&&bH>0)
{
setGlobalVarValue('DEF_ROLLBACK_ACTION',{
msg:cQ,
rbkey:bH
});
}
}

function getRollbackText(bH)
{
return bH&&bH>0?"&nbsp;<a href='#' style='color:white' onclick='getTop().rollback(2);return false;'>[Undo]</a>":"";
}














function setMailFilter(bD,aj)
{

var TU=true,
bf=aj.oMail,
aF=bf.length,
Me=QMMailList.avL(aj),
bbU=Me[1],
ahk=Me[0];

for(var i=aF-1;i>=0;i--)
{
var nw=bf[i].oChk;

if(nw&&/^[@C]/.test(nw.value))
{
TU=false;
}
}

TU=TU&&aj.sFid==1&&aF>1&&ahk&&!/(10000|newsletter-noreply|postmaster)@qq.com/g.test(ahk);
if(!TU)
{
return;
}

bD.sEmail=ahk;
bD.sNickname=htmlEncode(bbU);
bD.sFolderName=htmlEncode(bD.sFolderName);

var 
aNc='Tips',
ZS="&fun=addfilter&t=foldermgr_json&resp_charset=UTF8&ef=js&sid="+getSid(),
aE=
({
move:{

iC:3,
aaC:"Move",
ZI:"move to folder <span class='bold'>$sFolderName$</span>  automatically",
eu:T(ZS+'&action=move&sender=$sEmail$&folderid=$sFolderId$&oldmail=$oldmail$')
},
star:{

iC:2,
aaC:"Starred",
ZI:"Starred automatically",
eu:T(ZS+'&action=star&sender=$sEmail$&oldmail=$oldmail$')
},
tag:{

iC:2,
aaC:"Starred",
ZI:"Starred with tag $sTagName$  automatically",
eu:T(ZS+'&action=tag&sender=$sEmail$&tagid=$sTagId$&oldmail=$oldmail$')
},
read:{

iC:1,
aaC:"Starred",
ZI:"Mark as read",
eu:T(ZS+'&action=read&sender=$sEmail$&oldmail=$oldmail$')
},
"delete":{

iC:4,
aaC:"Delete",
ZI:"auto-deletion",
eu:T(ZS+'&action=delete&sender=$sEmail$&oldmail=$oldmail$')
}
})[bD.sFilterType];


ossLog("realtime","all","stat=noting&locval=,,auto_filter_label,"+aE.iC);

confirmBox({
style:'cnfx_move',
confirmBtnTxt:'Create',
cancelBtnTxt:'Close',
sType:"custom",
recordInfo:'filter old message with this rule.',
enableRecord:true,
defaultChecked:true,
title:aNc,
msg:T([
'<div class="cnfx_content">',
'<span class="icon_finish_b" style="float:left;margin:15px 10px 0;display:$imgdisp$;"></span>',
'<table style="width:$width$px;height:$height$px;">',
'<tr><td style="vertical-align:top;"><div style="padding-top:17px;word-break:break-all;line-height:150%;" class="bold b_size">',
'',aE.aaC,' message(s) succeed',
'</div></td></tr>',
'</table>',
'</div>',
'<div style="border-top: 1px solid #E3E3E3; margin-top: 4px; width: 400px; padding: 18px 30px;">',
'<h3 class="b_size bold">Create filter of receiving message ?</h3>',
'<div class="b_size" style="border-left: 3px solid #DEDEDE; margin-left: 16px; padding-left: 10px; margin-top: 10px;">',
'<div style="width:400px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">',
'If sender match <span class="bold">$sNickname$</span>&lt;$sEmail$&gt;,',
'</div>',
'<div style="margin: 6px 0pt 8px 14px;">then  ',aE.ZI,'.</div>',
'<div class="f_size">',
'<input type="checkbox" checked="checked" id="recordstatus" style="vertical-align: middle;"><label for="recordstatus">filter old message with this rule.</label>',
'</div>',
'</div>',
'</div>',
''
]).replace(bD),
onreturn:function(kM,aOS,bvH){

if(kM)
{
bD.oldmail=aOS?1:0;

QMAjax.send('/cgi-bin/foldermgr',{
content:aE.eu.replace(bD),
onload:function(bz,zY)
{
if(bz&&zY.indexOf("addfilter")>0)
{
showInfo("create tag succeed");
if(aOS)
{

reloadFrmLeftMain(false,true);
}
}
else
{
showError("create fail");
}
}
});
}
},
onload:function()
{
var ae=this;

ae.S("_foot_").style.background="white";
}
});
return;
}



function colorTag(ag,eH,ao)
{
ag=ag||ao.event;
stopPropagation(ag);
preventDefault(ag);

var aU="tag"+eH,
aVR=QMMenu(aU,"isClose");
if(aVR===false)
{
return;
}

var ak=getEventTarget(ag),
atG=function(iN)
{
return/\bflagbg(\d+)\b/.test(iN)&&RegExp.$1;
},
aUG=atG(ak.className),

aSe=T(['<div class="flag_menu_item"><div id="flagbg$flagbg$" class="flagbg$flagbg$"></div></div>']),
adQ=[
['0','1','2','3','4'],
['5','6','7','8','9'],
['11','12','13','14','15'],
['16','17','18','19','20'],
['21','22','23','24','25'],
['26','27','28','29','30'],
['31','32','33','34','35']
],
aer=
{
nHeight:5,
sItemValue:'<div style="height:1px; overflow:hidden;"></div>'
},
bC=[];

bC.push(aer);

for(var aN=0,QK=adQ.length;aN<QK;aN++)
{
for(var rO=[],iV=0,Xu=adQ[aN].length;iV<Xu;iV++)
{
rO.push(aSe.replace({
flagbg:adQ[aN][iV]
}));
}
bC.push({
nHeight:24,
sItemValue:rO.join("")
});
if(aN==1)
{
bC.push(aer);
}
}

bC.push(aer);

new QMMenu({
oEmbedWin:ao,
sId:aU,
nWidth:148,
oItems:bC,

onshow:function()
{




},
onload:function()
{
var mC=this,
cI=calcPos(ak),
cX=parseInt(mC.option("nHeight")),
cz=cI[2],

mI=bodyScroll(ao,'clientHeight')+bodyScroll(ao,'scrollTop'),
DH=cz-cX-ak.clientHeight;
if(DH>0&&cz+cX>mI)
{
cz=DH;
}
mC.option("nX",cI[3]).option("nY",cz);

var kP=mC.S("_menuall_"),
acM=null;
function CJ(ag)
{
var aK=getEventTarget(ag);
while(aK&&aK!=kP)
{
if(aK.id.indexOf("flagbg")>-1)
{
return aK;
}
aK=aK.parentNode;
}
return null;
}

addEvents(kP,
{
mousemove:function(ag)
{
var aK=CJ(ag);
if(acM)
{
acM.parentNode.style.borderColor="#fff";
}
if(acM=aK)
{

aK.parentNode.style.borderColor="#aaa";
}
},
click:function(ag)
{
var aK=CJ(ag);
if(aK)
{
colorTag.aYT(eH,atG(aK.className),aUG,ak,ao);

mC.close();
}
}
}
);
}
});
}


colorTag.aYT=function(eH,aiN,beA,ak,ao)
{
var gB='Label color set';
if(aiN==beA)
{
return showInfo(gB);
}

QMAjax.send('/cgi-bin/foldermgr',{
content:['&fun=setcolor&sid=',getSid(),"&tagid=",eH,"&flagbg=",aiN].join(""),
onload:function(bz,bU,fj){
var bi=ao.location.href,
bgc=getMainWin().location.href;

if(bz&&bU.indexOf(gB)>0)
{



setClass(ak,ak.className.replace(/\bflagbg\d+\b/i,"flagbg"+aiN));

if(bi.indexOf('t=folderlist_setting')>-1)
{
reloadLeftWin();
}
else
{

if(/cgi-bin\/(mail_list|readmail)|t=folderlist_setting/.test(bgc))
{
reloadFrmLeftMain(false,true);
}
}
return showInfo(gB);
}
var vT=getErrMsg(fj,'msg_txt');
showError(vT||"Failed to set label color. Please try again. ");
}
});
};














function setMailRead(kx,aj)
{
var bf=aj.oMail,
aF=bf.length,
vV=0,
ayI,
VL=kx?1:-1,
bI=[],
cF=getMainWin(),
kN=isSelectAllFld(cF),
fF=aj.sFid,
aah,
cLs=aj.bNoShowFilter||false,
oy=checkSelectGroup();

if(!aF)
{
return showError('No message selected ');
}

else if(kN||oy)
{
var cy=getSelectAllParam(cF),
avE=kx?cy.totalcnt:0;

aah=cy.groupid;
bI=['mailaction=',cy.type,'&fun=mail_flag',kx?'unread':'read'];
cy.fid&&bI.push('&folderid=',cy.fid);
cy.tid&&bI.push('&srctagid=',cy.tid);
aah&&bI.push('&groupid=',aah);

if(cy.flags)
{
var uJ=cy.flags.split("|");
E(uJ,function(oD)
{
if(oD!="")
{
bI.push('&flag=',oD);
}
});
}
oy&&bI.push(getSelectGroupUrl());

setFolderUnread(fF,avE);
setMailListInfo(avE,null);
}
else
{
bI=['mailaction=mail_flag&flag=new&status=',kx];


aj.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=21");
}
showSelectALL(cF,false);

var GM={
system:{
cnt:"0",
foldertagid:"sysmsg",
notcnt:"0",
notfoldertagid:"notsysmsg"
},
friend:{},
important:{}
};
for(var i=0;i<aF;i++)
{
var bJ=bf[i];
if(bJ.bUnr!=kx)
{
if(bJ.oChk)
{
bJ.oChk.setAttribute('unread',kx?'true':'false');

var wz=bJ.oChk.getAttribute('gid');
setGroupUnread(wz,getGroupUnread(wz)+VL);
}
vV++;


if(bJ.sFid)
{
ayI=ayI||{};
ayI[bJ.sFid]=(ayI[bJ.sFid]||0)+1;
}

bI.push('&mailid=',bJ.sMid);
if(bJ.oTable&&!kx)
{

var beK=GelTags("table",bJ.oTable)[0],
kR=beK.rows[0].cells[1];
if(kR.className=="new_g")
{
kR.innerHTML="";
}
}

for(var sz=bJ.oTagIds,aJu=sz.length,j=0;j<aJu;j++)
{
var fF='tag_'+sz[j];
setTagUnread(fF,getFolderUnread(fF)+VL);
}
if(aJu)
{
setTagUnread('tag',getFolderUnread('tag')+VL);
}
E(bJ.oSysTag,function(bZ,bH)
{
if(GM[bH])
{
var ewX=GM[bH];
bZ=="1"&&GM[bH].cnt&&(GM[bH].cnt++);
bZ=="0"&&GM[bH].notcnt&&(GM[bH].notcnt++);
}

});
}
}

QMMailList.selectedUI({oMail:[],oACB:aj.oACB});
if(vV||kN)
{



var TF=VL*vV;

if(!kN)
{
if(ayI)
{
E(ayI,function(bOp,fk)
{
setFolderUnread(fk,getFolderUnread(fk)+VL*bOp);
});
}
else
{
setFolderUnread(aj.sFid,getFolderUnread(aj.sFid)+TF);
}

setMailListInfo(getMailListInfo().unread+TF,null);
}





E(GM,function(bZ,bH)
{
if(GM[bH])
{
GM[bH].cnt&&setFolderUnread(GM[bH].foldertagid,getFolderUnread(GM[bH].foldertagid)+(kx?1:-1)*GM[bH].cnt);
GM[bH].notcnt&&setFolderUnread(GM[bH].notfoldertagid,getFolderUnread(GM[bH].notfoldertagid)+(kx?1:-1)*GM[bH].notcnt);
}
});


rdVer(bJ.sMid,1);
var az=aj.oWin;
if(aj.sFid==8)
{


if(kN)
{
if(aah)
{
TF=parseInt(S("folder_"+aah,getMainWin()).getAttribute("totalCnt"));
setGroupUnread(aah,kx?TF:0);
!kx&&(TF*=-1);
setGroupUnread("gall",getGroupUnread("gall")+TF);
}
else
{
var agx=finds("#folder_group a.left",getMainWin().document);

TF=0;
E(agx,function(ht)
{
var wz=ht.id.split("_")[1],
aBV=parseInt(ht.getAttribute("totalCnt"));

setGroupUnread(wz,kx?aBV:0);
TF+=aBV;
});
setGroupUnread("gall",kx?TF:0);
}
}
else
{
setGroupUnread("gall",getGroupUnread("gall")+TF);
}
}

var aOZ=kx?'set read':'set unread';
uI({
bI:bI,
tf:"new successful",
oE:T([aOZ,' message fail, please try again']),
mj:function(aL,bU,fj)
{


var agv=0,
amI=0;
for(var i=0;i<aF;i++)
{
var bJ=bf[i];
if(bJ.bUnr!=kx&&bJ.bStar)
{
agv++;
}








if(!kx)
{

QMMailCache.addData(bJ.sMid,{bUnread:null});
amI=1;
}
else
{

QMMailCache.addData(bJ.sMid,{bUnread:true});
amI=1;
}
}

if(amI)
{
QMMailCache.setExpire();
}


(fF!=5&&fF!=6)&&
setFolderUnread("starred",getFolderUnread("starred")+(kx?1:-1)*agv);







if(az.goback)
{
az.goback();
}
if(/folderid=(pop|personal|all)/i.test(az.location.href)||kN||oy)
{
reloadLeftWin();
}

if(!kx&&vV>4&&!cLs)
{
setMailFilter({
sFilterType:"read"
},aj
);
}
setRollBack(aL.rbkey,aOZ+"Message");
}
});
}
}














function starMail(mV,aj)
{
var bf=aj.oMail,
aF=bf.length,
atX={
fg:0,
'fg fs1':1,
qm_ico_flagoff:2,
qm_ico_flagon:3
},
aWl=['fg','fg fs1','qm_ico_flagoff','qm_ico_flagon'],
bI=[],
cF=getMainWin(),
kN=isSelectAllFld(cF),
fF=aj.sFid,
oy=checkSelectGroup();


if(!aF)
{
return showError('No message selected ');
}

else if((kN&&aF>1)||oy)
{
var cy=getSelectAllParam(cF);

bI=['mailaction=',cy.type,'&fun=mail_flag',mV?'star':'unstar'];
cy.fid&&bI.push('&folderid=',cy.fid);
cy.tid&&bI.push('&srctagid=',cy.tid);
cy.groupid&&bI.push('&groupid=',cy.groupid);
if(cy.flags)
{
var uJ=cy.flags.split("|");
E(uJ,function(oD)
{
if(oD!="")
{
bI.push('&flag=',oD);
}
});
}
oy&&bI.push(getSelectGroupUrl());
}
else
{
bI=['mailaction=mail_flag&flag=star'];


aj.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=22");
}
showSelectALL(cF,false);

for(var i=0;i<aF;i++)
{
var bJ=bf[i];
bI.push('&mailid=',bJ.sMid);
if(mV==null)
{
mV=!(atX[bJ.oStar.className]&1);
}
}

for(var i=0,nT=0;i<aF;i++)
{
var bJ=bf[i],
Fo=bJ.oStar;
if(bJ.oChk)
{

bJ.oChk.setAttribute('star',mV?'1':'0');
}
if(bJ.bStar!=mV)
{
nT+=bJ.bUnr?1:0;
QMMailCache.addData(bJ.sMid,{star:mV});
rdVer(bJ.sMid,1);
}
setClass(Fo,aWl[(atX[Fo.className]&2)+(mV?1:0)]);
Fo.title=mV?'remove star':'mark as star';
}

bI.push('&status='+mV);


if(nT&&(fF!=5&&fF!=6))
{
setFolderUnread("starred",getFolderUnread("starred")+(mV?1:-1)*nT);
}

uI({
bI:bI,
tf:'star successful',
oE:mV?'star message fail,please try again':'remove message star fail,please try again',
mj:function(aL,bU,fj)
{


QMMailList.selectedUI({oMail:[],oACB:aj.oACB});


if(!callBack(aj.oncomplete,[aj,mV]))
{
var az=aj.oWin;
if(az.showMailFlag)
{
az.showMailFlag(mV);

}
}
if(mV&&aF>2)
{
setMailFilter({
sFilterType:"star"
},aj
);
}

(kN||oy)&&reloadLeftWin();
}
});
}









function moveMailJs(Dl,aMe,aNf,aj)
{
if(aNf==Dl)
{
return showError(gsMsgMoveMailSameFldErr);
}

var aZK=aj.bML,
bf=aj.oMail,
aF=bf.length,
qr=unikey('mv'),
bI=[aj.bML?'&location=mail_list':''],
BI=Dl=="new",

adk=false,
bEI;



cF=getMainWin(),
kN=isSelectAllFld(cF),
oy=checkSelectGroup();


for(var i=aF-1;i>=0;i--)
{
var bJ=bf[i],
nw=bJ.oChk;
if(bJ.bTms)
{
return showError("Scheduled messages can not be moved. ");
}





adk=adk||bJ.bUnr;
bI.push('&mailid=',bJ.sMid);
}











aj.oWin[qr]=1;

var arU=function()
{

!aj.bIsJump&&aF>0&&showInfo('Moving messages...',-1);

var rT=BI?"Message moved successfully. ":T("Message moved successfully <a href='/cgi-bin/mail_list?sid=$sid$&folderid=$folderid$&page=0' style='color:white' onclick='getTop().hiddenMsg();' target='mainFrame' >[]</a>").replace({
sid:getSid(),
folderid:Dl
});


uI({
bI:bI,
tf:'mail_move successful',
oE:'Failed to move messages. Please try again. ',
mj:function(aL,bU,fj)
{
var zG,bQi;
if(aj.oWin[qr])
{

zG=callBack(aj.onbeforesend,[{sucMsg:rT+getRollbackText(aL.rbkey)}]);
}
if(BI)
{
var bOw=evalValue(bU);
bQi=
{
sDestName:bEI,
sDestId:(bOw&&bOw.sDesId)||""
};
}
var vp=callBack(aj.oncomplete,[aj,aL,bQi]);



!(zG&&vp)&&aL.msg&&showInfo(aL.msg+getRollbackText(aL.rbkey));


(BI||oy)&&reloadLeftWin();

if(aj.oWin[qr])
{

if(!vp)
{
if(
!(aj.bML&&aj.oWin.location.href.indexOf('s=search')>0)
&&aL&&aL.url&&!aj.bIsJump
)
{
goUrlMainFrm(aL.url,true,true);
}
else
{
reloadFrmLeftMain(true,true);
}
}
else
{
QMMailList.selectedUI({oMail:[],oACB:aj.oACB});
adk
&&!BI&&reloadLeftWin();
}
}
else
{

(adk||kN)&&!BI&&reloadLeftWin();
}

if(!BI&&aF>2)
{

setMailFilter({
sFilterType:"move",
sFolderId:Dl,
sFolderName:aMe
},aj
);
}

setRollBack(aL.rbkey,'move message');
}
});
};

if(kN||oy)
{
var cy=getSelectAllParam(cF);

bI=[];
bI.push('&mailaction=',cy.type);
bI.push('&fun=mail_move'+(BI?'_new':''));
cy.fid&&bI.push('&folderid=',cy.fid);
cy.tid&&bI.push('&srctagid=',cy.tid);
cy.groupid&&bI.push('&groupid=',cy.groupid);
if(cy.flags)
{
var uJ=cy.flags.split("|");
E(uJ,function(oD)
{
if(oD!="")
{
bI.push('&flag=',oD);
}
});
}
oy&&bI.push(getSelectGroupUrl());
}
else
{

bI.push('&mailaction=',aZK&&!aF&&BI?"onlyaddfolder":"mail_move");


aj.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=24");
}
bI.push('&destfolderid=',BI?-1:Dl);
if(BI)
{
promptFolder({
type:'folder',
onreturn:function(gj){




bI.push('&foldername=',gj);
bEI=gj;
arU();
}
});
}
else if(aF)
{




arU();
}
else
{
showError('No message selected ');
}
}











function configPreRmMail(aj,gx)
{
var bI=aj.oWin.location.getParams();

if(bI['s']=='search'||!aj.bML||((aj.sFid=='pop'||aj.sFid=='personal')&&gx=='moveMailJs')||getMainWin().tmpSortTypePrev=='5')
{
return false;
}
aj['bSelectGroup']=checkSelectGroup();
var cHq={},
aE=aj,
bjI=aE.onbeforesend,
bmY=aE.oncomplete,
aoV=false;
if((bI['s']=='star'||bI['showtag']=='1')&&gx=='moveMailJs')
{

aoV=true;
}
else
{
aE.onbeforesend=function(KY)
{
callBack(bjI,[KY]);
return(aoV=configPreRmMail.blQ(aE,KY));
};
}
aE.oncomplete=function(aj,bd)
{
callBack(bmY,[aj,bd]);
return aoV;
}
return true;
}

















configPreRmMail.blQ=function(aj,KY)
{
getTop().shit=aj












var bni="toarea",
az=aj.oWin,
bf=aj.oMail,
aF=bf.length,
aIJ=S('nextpage',az),
bi=null,
aIv=null,
acp=null,
Iy=null,
yc=null,

bK="_pReRmMaIl_",
aIP=0;
E(SN("mailid",az),function(cG)
{
if(cG.type=="checkbox")
{
aIP++;
}
}
);
if(aIP==aF||aF==0||aj['bSelectGroup'])
{
return false;
}
az[bK]=az[bK]||{az:az,wK:0};


if(aIJ)
{
bi=[aIJ.href.replace(/(&|\?)(loc|r|t)=.*?(&|$)/gi,"$1"),'&ef=js&resp_charset=UTF8&record=n&t=mail_list_fragment&listcount=',aF,'&r=',Math.random()].join('');
}

function JK()
{









var Uu=getMailListInfo(),
nT=0;

for(var i=0;i<aF;i++)
{
Uu.totle--;
bf[i].bStar&&(Uu.star--);
bf[i].bUnr&&nT++;

var de=bf[i].oTable.parentNode,
ht=de.previousSibling;
if(!ht.tagName||ht.tagName.toLowerCase()!='a')
{
ht=ht.previousSibling;
}
if(!yc)
{
yc=de;
while((yc=yc.nextSibling)&&yc.className!='list_btline');


Iy=yc;
while((Iy=Iy.previousSibling)&&Iy.className!=bni);
}
removeSelf(bf[i].oTable);

aIv=ht;
acp=de;
var kn=GelTags('span',ht)[0];
kn&&(kn.innerHTML=(parseInt(kn.innerHTML)-1)+" messages");
if(GelTags('table',de).length==0)
{
removeSelf(ht);
removeSelf(de);
}


if(bf[i].oChk&&bf[i].bUnr)
{

var wz=bf[i].oChk.getAttribute('gid');
setGroupUnread(wz,getGroupUnread(wz)-1);
}
}
getTop().fuck=aj
aj.oACB.checked=false;

setMailListInfo(aj.sFid==4?null:Uu.unread-nT,Uu.star,Uu.totle);

if(aj.sFid==8)
{
setGroupUnread("gall",getGroupUnread("gall")-nT);
}
aF&&(KY||{}).sucMsg&&showInfo(KY.sucMsg);

if(nT)
{
setFolderUnread(aj.sFid,getFolderUnread(aj.sFid)-nT);
}
QMMailCache.setExpire();
}

function awo(bz,bU)
{
if(bz)
{


var cF=getMainWin();

bU=trim(bU);
var aGC=bU.substr(0,18),
ME;
if(/<!--mlf\d{8}-->/.test(aGC))
{
ME=bU.split(aGC);
ME.shift();
}

if(cF[bK].az!=cF||!ME||!ME.length)
{

return;
}







if(yc)
{

if(Iy==acp)
{

yc.parentNode.insertBefore(acp,yc);
yc.parentNode.insertBefore(aIv,acp);

}



for(var i=0,aIW=Math.min(cF[bK].wK,ME.length);i<aIW;i++)
{
insertHTML(Iy,'beforeEnd',ME[i]);
}
cF[bK].wK=0;


var ht=Iy.previousSibling;
if(!ht.tagName||ht.tagName.toLowerCase()!='a')
{
ht=ht.previousSibling;
}
var kn=GelTags('span',ht)[0];
kn.innerHTML=(parseInt(kn.innerHTML)+aIW)+" messages";

var adx=SN("mailid",cF);
for(var i=adx.length-1;i>=0;i--)
{
if(adx[i].getAttribute('init')!="true"&&adx[i].type=='checkbox')
{
MLIUIEvent(adx[i],az,aj.sFid);
}
}
}
}
else
{

}
}

JK();
if(bi)
{
if(az[bK].wK)
{
az[bK].wK+=aF;
}
else
{
az[bK].wK=aF;
QMAjax.send(bi,
{
method:'GET',
onload:awo
}
);
}
}

return true;
};










function rmMail(eo,aj)
{
var bf=aj.oMail,
aF=bf.length,
GL=0,
bI=[],
adM={},
aqi=[],
cF=getMainWin(),
kN=isSelectAllFld(cF),
oy=checkSelectGroup();

if(!aF)
{
showError(gsMsgNoMail);
return false;
}

else if(kN||oy)
{
var cy=getSelectAllParam(cF);

bI.push('&mailaction=',cy.type);
cy.fid&&bI.push('&folderid=',cy.fid);
cy.tid&&bI.push('&tagid=',cy.tid);
cy.groupid&&bI.push('&groupid=',cy.groupid);
if(cy.flags)
{
var uJ=cy.flags.split("|");
E(uJ,function(oD)
{
if(oD!="")
{
bI.push('&flag=',oD);
}
});
}

if(oy)
{
bI.push(getSelectGroupUrl());
for(var i=0;i<aF;i++)
{
bI.push('&mailid=',bf[i].sMid);
}
}
}

else
{
bI=['mailaction=mail_del',aj.bML?'&location=mail_list':''];












var blH=false,blw=false;


for(var i=0;i<aF;i++)
{
var bJ=bf[i],
ajq=bJ.sSName,
bmS=bJ.sSEmail;

if(bJ.bTms===true)
{
blw=true;
}
else
{
blH=true;
}

bI.push('&mailid=',bJ.sMid);
GL=bJ.bUnr||GL;



if(bJ.bUnr&&bmS.match(/tuan@mail-admin.qq.com|newsletter-noreply@qq.com/))
{
var RW=bJ.sColId;

adM[RW]?(adM[RW]++):(adM[RW]=1);
adM[RW]==5&&aqi.push(RW);
}
}

aj.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=25");
}

if(eo==1)
{
var aKc=aqi.length,
aSL='Messages deleted permanently can not be recovered.<br/>Are you sure to delete them once and for all?',
kI=getTop().getSid();

if(aj.sFid=='4')
{
aSL='Draft deleted permanently can not be recovered.<br/>Are you sure to delete them once and for all?';
if(blw===true)
{
if(blH===true)
{
aSL='Draft deleted permanently can not be recovered.<br/>Are you sure to delete them once and for all?';
}
else
{
aSL='Time messages deleted permanently will not be sent. Are you sure you want to continue? ';
}
}

aj.sDelIngMsg='Deleting draft ...';
aj.sDelRetMsg='Remove draft succeed';
}

confirmBox({
title:"Warning",
mode:"prompt",
msg:TE([
'<div>$sMsg$</div>',
'<div>',
'$@$if($bHasBoth$)$@$',
'<div>Deleted time message will not be sent .</div>',
'$@$endif$@$',
'$@$if($bUnsubscribe$)$@$',
'<div>',
'<input style="vertical-align:middle; height:13px; width:13px; padding:0; margin:0 5px 0 0" id="unsubscribe" type="checkbox" name="Unsubscribe" >',
'<label for="unsubscribe"><span id="unsubscribe_text" style="color:#333; font-size:12px;">\u540C\u65F6\u9000\u8BA2\u9009\u4E2D\u7684\u8BA2\u9605\u90AE\u4EF6</span></label>',
'</div>',
'$@$endif$@$',
'</div>'
]).replace(
{
sMsg:aSL,
bHasBoth:(blw===true&&blH===true)?true:false,
bUnsubscribe:(aKc>0)
}
),
onreturn:function(bz)
{
if(bz)
{
if(kN||oy)
{
bI.push('&fun=mail_perdelall');
}
else
{
var nw=this.S("unsubscribe");

bI.push('&Fun=PerDel');


if(nw&&nw.checked)
{
var aKq=""
for(var i=0;i<aKc;i++)
{
aKq+=("&colid="+aqi[i]);
}
getTop().QMAjax.send(getTop().T("/cgi-bin/setting10?action=desubscribe&sid=$sid$$colidlist$").replace({
sid:kI,
colidlist:aKq
}),
{
method:"GET",
onload:function(bz,bU){}
});
aj.sDelRetMsg="\u5220\u9664\u90AE\u4EF6\u5E76\u9000\u8BA2\u6210\u529F";
}
}
aAL(aj,bI,GL);
}
}
});
}




else
{
(kN||oy)&&bI.push('&fun=mail_delall');
aAL(aj,bI,GL);
}

return true;
}

function aAL(aj,eK,bjf)
{
var rT=aj.sDelRetMsg||"Messages deleted. ",
cBS=aj.sDelIngMsg||"Deleting messages...",
kK=aj.sFid,
qr=unikey('rm');

if(aj.bPop&&getTop().goUserInfo.get("POP_PROPOSE"))
{
confirmBox({
title:"Recommendation",
mode:"prompt",
msg:T([
'<div class="dialog_f_t">Delete message(s) in $dn$folder, the message in original box will be delete at the same time.?</div>',
'<div class="dialog_f_d">',
'You can also set it in Edit Settings. ',
'<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=26&&no=326" target="_blank" >\u4E86\u89E3\u8BE6\u8BF7</a>',
'</div>'
]).replace(
{
dn:getDomain(true)
}
),
onreturn:function(bz)
{
if(bz)
{
runUrlWithSid(T("/cgi-bin/foldermgr?fun=updpop&updflag=22&folderid=$folderid$").replace({
folderid:kK
}
));
showInfo('Setting edited. Current messages selected will be deleted. ');

}
}
});
}






showInfo(cBS,-1);
aj.oWin[qr]=1;



uI({
bI:eK,
tf:'mail_del successful',
oE:'Failed to delete messages. Please try again. ',
mj:function(aL,bU,fj)
{
rT=rT+getRollbackText(aL.rbkey);

var zG;
if(aj.oWin[qr])
{
zG=callBack(aj.onbeforesend,[{sucMsg:rT}]);
}

var bi=aL.url,
vp=callBack(aj.oncomplete,[aj,aL]);






!(zG&&vp)&&showInfo(rT);
if(!vp&&aj.oWin[qr])
{
if(aj.bML&&aj.oWin.location.href.indexOf('s=search')>0)
{
reloadFrmLeftMain(true,true);
}
else
{
aj.oWin.location.href=bi+"&r="+Math.random();
}
}
var bi=eK.join("");
if(bjf||isSelectAllFld(aj.oWin)||aj.sFid==3||aj.sFid==4||aj.sFid==1||bi.indexOf("mail_grpsearchall")>-1||bi.indexOf("mail_grpoprall")>-1)
{
reloadLeftWin();
}
if(aj.oMail.length>4)
{
setMailFilter({
sFilterType:"delete"
},aj
);
}

setRollBack(aL.rbkey,'Delete Message');
}
});
}


var doRmMail=aAL;



























































function reportSpamJson(bD,aj)
{

if(getTop().isSelectAllFld(getMainWin()))
{
return showError('Can not do this in all folders');
}


var bf=aj.oMail,
aF=bf.length,
GL=0,
aIU=aj.sFid==6,
oy=checkSelectGroup(),
bI=[aj.bML?'&location=mail_list':'','&mailaction=mail_spam&isspam=true&Fun=',3<aj.sFid&&aj.sFid<7?"PerDel":"Del",'&srcfolderid=',aj.sFid];

if(!aF)
{
showError(gsMsgNoMail);
return false;
}
if(oy)
{
var cy=getSelectAllParam(getMainWin());
cy.tid&&bI.push('&srctagid=',cy.tid);
}

var aTw=bD.bBlackList===false?false:true,
bX,

nO={};
for(var i=0;i<aF;i++)
{
bX=bf[i];
bI.push('&mailid=',bX.sMid);

if(/(@groupmail.qq.com|10000@qq.com)/.test(bX.sSEmail))
{

aTw=false;
}

if(typeof nO.sender=="undefined")
{
nO.sender=bX.sSEmail;
nO.nickname=bX.sSName;
}
else if(nO.sender!=bX.sSEmail)
{
nO.sender="";
}
}











QMMailList.selectedUI(aj);



var EY=["From"];

if(nO&&nO.sender&&nO.sender.indexOf(',')<0)
{
EY[0]=nO.sender;
}


var xQ=bD.oAddrList,
aaq=0;
if(xQ&&xQ.length>0)
{
if(xQ[0].length>0)EY[aaq++]=xQ[0];
if(xQ[1])EY[aaq++]=xQ[1];
}





































































































bI.push("&s=readmail_spam&reporttype=",aIU?11:8,"&s_reject_what=00");
oy&&bI.push(getSelectGroupUrl());
reportSpamJson.bij(bI,"readmail_spam",aj);
return false;
}

reportSpamJson.bnP=function(er)
{
var eY=er.indexOf("@"),
uw='...';
if(eY>-1)
{
var bmE=er.substr(0,eY),
bol=er.substr(eY);
return subAsiiStr(bmE,18,uw)+subAsiiStr(bol,18,uw);
}
else
{
return subAsiiStr(er,36,uw);
}
};


reportSpamJson.bIg=function(CP)
{
var axY=T([
'<div><input type="checkbox" name="refuse$id$" id="refuese$id$" $TCHECK$>Add <label for="refuese$id$">$TVALUE$</label> to blacklist </div>'
]),
cU=[],
i;
for(i=0;i<CP.length;i++)
{
cU.push(axY.replace({
id:i,
TVALUE:CP[i]!="From"?"&lt;"+reportSpamJson.bnP(CP[i])+"&gt;":CP[i],
TCHECK:""
})
);
}
return cU.join('');
};

reportSpamJson.bij=function(eK,bkB,aj)
{















var rT="Message labeled as Spam",
agH=0,
qr=unikey('spam'),
bf=aj.oMail,
GL=0,
cjT=0,
aru=false,
bI=['mailaction=mail_spam&isspam=true'],
zG;

switch(bkB)
{
case"readmail_spam":
case"readmail_spam_newwin":
if(aj.sFid==6)
{
rT="Report spam succeed, message was removed ,thank you for your support .";
}
else
{
rT=["Report succeed, message(s) have been move to spam box.<a style='color:white' onclick=\"javascript: getTop().goUrlMainFrm('/cgi-bin/mail_list?sid=",getSid(),"&folderid=6&page=0', false);\"></a>"].join("");
cjT=10000;
}


break;
case"readmail_reject":
case"readmail_reject_newwin":
rT=(aj.sFid==6?"Report succeed, and the sender will be added to the blacklist":"The sender has been added to the blacklist. The message has been moved to Spam Folder. ");
break;
case"readmail_group":
case"readmail_group_newwin":
rT="Reject succeed, message(s) with this subject will be blocked by now."
break;
}

for(var i=bf.length-1;i>=0;i--)
{
aru=aru||bf[i].bSys;
GL+=bf[i].bUnr?1:0;
}
showInfo('Reporting spam...',-1);
aj.oWin[qr]=1;
if(aj.bML&&!getTop().QMTip)
{
loadJsFileToTop(["$js_path$qmtip13e6cd.js"]);
}



uI({
bI:eK,
tf:'spam successful',
oE:'Report spam fail, please try again',
mj:function(aL,bU,fj)
{
var bi=aL.url,
vp=callBack(aj.oncomplete,[aj,aL]);


!(zG&&vp)&&showInfo(rT,cjT);

if(bi&&!vp&&aj.oWin[qr])
{
if(aj.bML&&aj.oWin.location.href.indexOf('s=search')>0)
{
reloadFrmLeftMain(false,true);
}
else
{
goUrl(aj.oWin,bi+"&r="+Math.random(),false);

QMMailCache.setExpire();
}

if(!aL.nodlg&&aL.showReportInfo)
{
aL.showReportInfo(aL.reportCnt,aL.acceptCnt,aL.allCnt,aL.trushCnt);
}
}
else if(aj.bML&&!aL.nodlg&&getTop().QMTip&&aj.oWin[qr])
{

var aJH=10002;

aL.sid=getSid();
aL.tipid=aJH;
var aXm=TE([
"<p>You have reported for $reportCnt$  times, </p>",
"<p style='font-weight:normal;'>$@$if($acceptCnt$)$@$had been adopted  $acceptCnt$  times <br/>$@$endif$@$ We had received  $allCnt$   report spam today<br/>  and had totally blocked  $trushCnt$  spam messge(s) <br/> thank you for your support !",
"<div style=''></div>",
"<div style='text-align:right;font-weight:normal;'><a onclick=\"javascript: getTop().goUrlMainFrm('/cgi-bin/help_report_spam?sid=$sid$', false);getTop().QMTip.close('', $tipid$, false, true);\" style='text-decoration:underline;'>Eeport to spam center </a>&nbsp;<a href='javascript;' onclick='getTop().runUrlWithSid(\"/cgi-bin/help_report_spam?type=0&ixspaminfo=1\");getTop().QMTip.close(\"\", $tipid$, false, true);return false;' style='text-decoration:underline;'>No tips anymore</a></div>"
]).replace(aL);

QMTip.show2({
bForceShow:true,
type:4,
win:aj.oWin,
tipid:aJH,
domid:"gotnomail",
msg:aXm,
arrow_direction:"none",
arrow_offset:0,
width:400,
height_offset:150,
tip_offset:-300,
close_fork:1
});
}
{
reloadLeftWin();
}
}
});
};








function reportNoSpamJson(bD,aj)
{

var rT="The message has been moved to Inbox. ",
bf=aj.oMail,
aF=bf.length,
agH=0,
qr=unikey('spam'),
bI=[aj.bML?'&location=mail_list':'','&mailaction=mail_spam&isspam=false'],
oy=checkSelectGroup(),
bX;

if(!aF)
{
showError(gsMsgNoMail);
return false;
}

for(var i=0;i<aF;i++)
{
bX=bf[i];
bI.push('&mailid=',bX.sMid);
agH+=bX.bUnr?1:0;
}
oy&&bI.push(getSelectGroupUrl());

aj.oWin[qr]=1;



var zG=false;

uI({
bI:bI,
tf:'spam successful',
oE:'Report spam fail,please try again.',
mj:function(aL,bU,fj)
{
var bi=aL.url,

vp=false;

!(zG&&vp)&&showInfo(rT+getRollbackText(aL.rbkey));
if(bi&&!vp&&aj.oWin[qr])
{
aj.oWin.location.href=bi;
}
if(agH||oy)
{
reloadLeftWin();
}
setRollBack(aL.rbkey,"Not spam");
}
});
}








function isSelectAllFld(dH)
{
var aOT=false;
E(GelTags("div",S("selectAll",dH)),
function(bQ,fm)
{
if("selected"==bQ.getAttribute("un"))
{
aOT=isShow(bQ);
return false;
}
}
);
return aOT;
}






function getSelectAllParam(dH)
{
var sG=S("selectAll",dH),
cjR=sG.getAttribute("fid"),
bGZ={
"type":sG.getAttribute("ftype"),
"fid":cjR,
"tid":sG.getAttribute("tid"),
"flags":sG.getAttribute("flags"),
"totalcnt":sG.getAttribute("totalcnt")};

cjR==8&&(bGZ=extend(bGZ,{groupid:sG.getAttribute("groupid")}));
return bGZ;
}

function setSelectAllFlag()
{

}






function showSelectALL(dH,Dr)
{
var sG=S("selectAll",dH);

if(sG)
{
displayGrayTip(sG,Dr);
!Dr&&selectAllFld(dH,Dr);
show(S("tips_bar",dH),!Dr);
}
}






function selectAllFld(dH,abSelect)
{
var pz="&selectall="+(abSelect?1:0),
sG=S("selectAll",dH);

if(sG)
{
E(GelTags("div",sG),
function(bQ,fm)
{
var NH=bQ.getAttribute("un");
NH=="unselect"&&show(bQ,!abSelect);
if(NH=="selected")
{
var kn=GelTags("span",bQ)[0],
hD=kn.getAttribute("start"),
hA=kn.getAttribute("end"),
Ys=4,
lI=parseInt((hA-hD)/Ys),
afT=function(anZ){kn.innerHTML=anZ;};

if(!!abSelect)
{
if(kn.innerHTML==hA)
{
return;
}
afT(hD);
setTimeout(function()
{
afT(hA-(--Ys)*lI);
Ys!=0&&setTimeout(arguments.callee,150);
},
150
);
}
else
{
afT(hD);
}
show(bQ,!!abSelect);
}
}

);
var cfv=sG.getAttribute("fid"),
ceZ=sG.getAttribute("totalcnt");
getTop().ossLog("realtime","all","stat=selectallCompare&mailcount="+ceZ+"&folderid="+cfv);
E(["prevpage","nextpage","prevpage1","nextpage1"],function(aJ)
{
var iR=S(aJ,dH);
if(iR)
{
var hk=iR.href;
iR.href=hk.match(/selectall/)?hk.replace(/&selectall=\d/,pz):(hk+pz);
}
});
}
}





var QMMailList={},
cE,dz;






































QMMailList.getCBInfo=function(ao,aP)
{
var apt=true,
aL={
oMail:[],
oWin:ao,
sFid:ao.location.getParams()['folderid'],
bML:true
};

var aHm=GelTags("input",S('list',ao));
if(aHm.length===0)
{
aHm=GelTags("input",S('qqmail_mailcontainer',ao));
}

E(aHm,function(cG)
{
if(cG.title=="ALL/None")
{

aL.oACB=cG;
}
else if(cG.type=="checkbox"&&cG.name=="mailid"&&(aP&&cG.value==aP||!aP&&cG.checked))
{
var hN=cG.value,
gh=cG.parentNode;
while(gh.tagName.toUpperCase()!="TABLE")
{
gh=gh.parentNode;
}

var CX=gh.rows[0].cells,
kR=CX[CX.length-1],
Vg=GelTags("input",kR)[0],
MW=GelTags("td",GelTags('tr',kR)[0]),

afr=MW[MW.length-1],
tV=GelTags("table",kR),
tG,
sz=[],
bf={};
for(var aN=0,aF=tV.length;aN<aF;aN++)
{
if(tG=tV[aN].getAttribute("tagid"))
{
sz.push(tG);
}
}
var afc=cG.getAttribute("ssystag")||"",
adV=[],aKs={};
if(afc!="")
{
adV=afc.split("|");
}
for(var i=0;i<adV.length-1;i++)
{
if(adV[i]!="")
{
var ei=adV[i].split(":");
if(ei[0]&&ei[1]!="")
{
aKs[ei[0]]=ei[1];
}
}
}
bf.sMid=hN;
bf.bSys=Vg&&{"s1bg":1}[Vg.className];
bf.bDft=Vg&&{"drifticon":1}[Vg.className];
bf.bUnr=cG.getAttribute("unread")=="true";
bf.bSubUnr=MW[1]&&MW[1].className=="new_g"&&GelTags("b",MW[1]).length>0;
bf.bStar=afr&&afr.className=="fg fs1";
bf.oSysTag=aKs||{};
bf.bTms=cG.getAttribute("isendtime")==1;
bf.oTagIds=sz;
bf.sSName=cG.getAttribute("fn");
bf.sSEmail=cG.getAttribute("fa");
bf.sColId=cG.getAttribute("colid");
var cjD=cG.getAttribute("rf");



bf.oTable=gh;
bf.oStar=afr;
bf.oChk=cG;
aL.oMail.push(bf);

var aco=GelTags('div',kR);
for(var aN=0,aF=aco.length;aN<aF;aN++)
{
if(aco[aN].className=='TagDiv')
{
bf.oTCont=aco[aN];
break;
}
}

}
apt&&cG.type=="checkbox"&&cG.name=="mailid"&&!cG.checked&&(apt=false);
});


aL.bSelectAll=apt;
return aL;
};






QMMailList.selectedUI=function(aj)
{
var az=getMainWin(),
arA={},
SQ=false;
if(az.location.href.indexOf('/cgi-bin/mail_list')<0)
{
return;
}
for(var bf=aj.oMail,i=bf.length-1;i>=0;i--)
{
arA[bf[i].sMid]=1;
}
aj=aj||this.getCBInfo(az);
E(SN("mailid",az),function(cG)
{
if(cG.type=="checkbox")
{
var rS=cG.value in arA,
GB=cG.getAttribute('unread')=='true'&&aj.sFid!=4,
gh=cG;
while(gh.tagName.toUpperCase()!="TABLE")
{
gh=gh.parentNode;
}

if(gh.style.backgroundColor!="")
{
gh.style.backgroundColor="";
}
setClass(gh,[GB?"i F":"i M",rS?" B":""].join(""));

setClass(GelTags("table",gh)[0],GB?"i bold":"i");


var afB=cG.getAttribute("isendtime"),
afs=cG.getAttribute("rf");

setClass(GelTags("div",gh.rows[0].cells[1])[1],
'cir '+((GB?'Ru':'')||{0:'Rc',1:'Ti'}[afB]||{r:'Rh',f:'Rz'}[afs]||(GB?'':'Rr'))
);

cG.checked=rS;
SQ=SQ||rS;

}
});
E(SN("selectgroup",az),function(cG)
{
cG.checked=false;
});
if(!SQ&&aj.oACB)
{

aj.oACB.checked=SQ;
}
};







QMMailList.avL=function(vJ)
{
for(var Td=null,Pb=null,bf=vJ.oMail,i=bf.length-1;i>=0;i--)
{
var bJ=bf[i],
jL=bJ.sSName,
fe=bJ.sSEmail;
if(Pb!=jL)
{
Pb=Pb===null?jL:'';
}
if(Td!=fe)
{
Td=Td===null?fe:'';
}
}
return[Td,Pb];
};





























function BaseMailOper(aj)
{
var ae=this;
ae.fh(ae.bR=aj);
}




BaseMailOper.aVA=function(aj)
{
var Hn=BaseMailOper,
az=aj.oWin;
if(!Hn.getInstance(az))
{
new Hn(aj);
}
return Hn.getInstance(az);
};

BaseMailOper.getInstance=function(ao)
{
return ao["__gBmOi_"];
};

BaseMailOper.prototype={
fh:function(aj)
{
var ae=this,
az=aj.oWin,
kG=az.location,
hk=kG.href;
if(hk.indexOf("/cgi-bin/mail_list")>0)
{
aj.mnFolderType=0;
}
else if(hk.indexOf("t=readmail_conversation")>0)
{
aj.mnFolderType=2;
}
else if(hk.indexOf("readmail_group.html")>0)
{
aj.mnFolderType=3;
}
else
{

aj.mnFolderType=1;
}
aj.bAutoTag=kG.getParams()['folderid']==1||aj.sFolderid==1||aj.bAutoTag;
az["__gBmOi_"]=ae;

return ae;
},

getConfig:function()
{
return this.bR;
},

setMailInfo:function(vJ)
{
this.bR.adt=vJ;
},

getMailInfo:function()
{
return this.bR.adt;
},







apply:function(jU,aVW)
{
var ae=this,
aE=ae.bR,
iG=aE.adt,
az=aE.oWin;







switch(jU)
{
case"mark":
case"move":
case"preview":
return false;
case"opennew":
if(iG.oMail.length==1)
{

var yp=GelTags("table",iG.oMail[0].oTable)[0].parentNode,
JQ=yp.onclick.toString(),
czT=T([
'{',
'shiftKey:true,',
'hitmailid:"$hitmailid$"',
'}'
]).replace({
"hitmailid":yp.getAttribute("hitmailid")||""
});



JQ=JQ.split("{")[1].split("}")[0].replace(/event/ig,czT);

if(/\WRD/.test(JQ))
{
eval(JQ);
}
else
{
debug("opennew error");
}
}
break;
case"new":
configPreRmMail(iG,'moveMailJs');
moveMailJs('new','',iG.sFid,iG);
break;
case"delmail":

configPreRmMail(iG,'rmMail');
rmMail(0,iG);
break;
case'predelmail':
configPreRmMail(iG,'rmMail');
rmMail(1,iG);
break;
case'frwmail':


iG.oWin.FwMailML();
break;
case'spammail':

configPreRmMail(iG,'spammail');
reportSpamJson({bBlackList:true},iG);
break;
case"read":
case"unread":
setMailRead(jU=="unread",iG);
break;
case"star":
case"unstar":
starMail(jU=="star",iG);
break;
case"rmalltag":
QMTag.rmTag('',iG);
break;
case"newtag":
QMTag.newMailTag(iG);
break;
case'autotag':
QMTag.setMailAutoTag(iG);
break;
case'createreceiverule':
getTop().ossLog("delay","all","stat=donothing&locval=maillist,clickcreatereceiverule,,1,1");
goUrlMainFrm(T('/cgi-bin/setting2?sid=$sid$&Fun=Create&CurFilterID=0&sender=1&sendercontent=$sendercontent$').replace({
sid:getSid(),
sendercontent:iG&&iG.oMail&&iG.oMail[0]&&iG.oMail[0].sSEmail
}));
break;
default:
var ate;
if(ate=/fid_(.+)/.exec(jU))
{
configPreRmMail(iG,'moveMailJs');

moveMailJs(ate[1],aVW,iG.sFid,iG);
}
else if(ate=/tid_(.+)/.exec(jU))
{


QMTag.setMailTag(ate[1],iG);
}
break;
}
return true;
}
};














var QMTag={
aAm:"",
Kh:{},
acz:[]
};






QMTag.set=function(EB,vm)
{
var ae=this;
if(!vm||vm>ae.aAm)
{
vm&&(ae.aAm=vm);
ae.acz=[];
ae.Kh={};

for(var aN=0,aF=EB.length;aN<aF;aN++)
{
var jt=EB[aN],
tG=jt.id,
aTO;
if(tG!=aTO)
{
ae.acz.push(tG);
ae.Kh[tG]=jt;
jt.aMD=aN;
}
}
}
};

QMTag.get=function()
{
for(var cU=[],ae=this,iI=ae.acz,aN=0,aF=iI.length;aN<aF;aN++)
{
cU.push(ae.Kh[iI[aN]]);
}
return cU;
};





QMTag.setItem=function(eH,lc,bZ)
{
var auR=this.Kh;
if(auR[eH])
{
auR[eH][lc]=bZ;
}
};

QMTag.getItem=function(eH,lc)
{
var jt=this.Kh[eH];

return jt&&lc?jt[lc]:jt;
};


QMTag.Tb=function(bU)
{
try
{
var aL=eval(bU),
aoL=aL.taglist;
aL.mailids.length--;
aL.taglist.length--;

aoL&&aoL.length&&QMTag.set(aoL,aL.timestamp);
}
catch(e)
{

}
return aL;
};

QMTag.setMailTag=function(eH,aj)
{
var bf=aj.oMail,
aF=bf.length,
gu=0,

bI=[],
cF=getMainWin(),
kN=isSelectAllFld(cF),
oy=checkSelectGroup();

if(!aF)
{
return showError('No message selected ');
}

else if(kN||oy)
{
var cy=getSelectAllParam(cF);

bI=['mailaction=',cy.type,'&fun=mail_flagtag&tagid=',eH];
cy.fid&&bI.push('&folderid=',cy.fid);
cy.tid&&bI.push('&srctagid=',cy.tid);
cy.groupid&&bI.push('&groupid=',cy.groupid);
if(cy.flags)
{
var uJ=cy.flags.split("|");
E(uJ,function(oD)
{
if(oD!="")
{
bI.push('&flag=',oD);
}
});
}
oy&&bI.push(getSelectGroupUrl());
}
else
{
bI=['mailaction=mail_tag&fun=add&tagid=',eH];


aj.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=23");
}
showSelectALL(cF,false);


for(var i=0;i<aF;i++)
{
var bJ=bf[i],
bt=bJ.sMid;

if(QMTag.addTagUI(bJ.oTCont,eH,aj.sFid,bt,!aj.bML))
{
gu++;
bI.push('&mailid=',bt);
rdVer(bt,1);
QMMailCache.addData(bt,{addTagId:eH});
if(bJ.bUnr)
{

var fF='tag_'+eH;
setTagUnread(fF,getFolderUnread(fF)+1);
if(!bJ.oTagIds.length)
{
setTagUnread('tag',getFolderUnread('tag')+1);
}
}
}
}
QMMailList.selectedUI({oMail:[],oACB:aj.oACB});
if(gu)
{
AjaxSendMailMgr({
bI:bI,
tf:'mail_tag successful',
oE:'Failed to set labels. Please try again later. ',
mj:function(aL,bU,fj)
{
var aL=QMTag.Tb(bU),
az=aj.oWin;


if(az.QMReadMail)
{
az.QMReadMail.modifyTag(eH,0);
}

if(aF>2)
{
setMailFilter({
sFilterType:"tag",
sTagId:eH,
sTagName:QMTag.getItem(eH).name
},aj
);
}
(kN||oy)&&reloadLeftWin();
return;
}
});
}
};






QMTag.newMailTag=function(aj)
{
aj=aj||{};
promptFolder({
type:'tag',
onreturn:function(gj){
var bf=aj&&aj.oMail,
aF=bf&&bf.length,
bI=[],
cF=getMainWin(),
kN=isSelectAllFld(cF),
oy=checkSelectGroup();

if(kN||oy)
{
var cy=getSelectAllParam(cF);

bI=['mailaction=',cy.type,'&fun=mail_flagtag_new&tagname=',encodeURI(gj)];
cy.fid&&bI.push('&folderid=',cy.fid);
cy.tid&&bI.push('&srctagid=',cy.tid);
cy.groupid&&bI.push('&groupid=',cy.groupid);
if(cy.flags)
{
var uJ=cy.flags.split("|");
E(uJ,function(oD)
{
if(oD!="")
{
bI.push('&flag=',oD);
}
});
}
oy&&bI.push(getSelectGroupUrl());
}
else
{
bI=['&mailaction=mail_tag&fun=add&tagname=',encodeURI(gj)];


aj.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=23");
}
showSelectALL(cF,false);


for(var i=0;i<aF;i++)
{
bI.push('&mailid=',bf[i].sMid);
}
AjaxSendMailMgr({
bI:bI,
tf:'mail_tag successful',
oE:'Failed to create labels. Please try again later. ',
mj:function(aL,bU,fj)
{
showInfo("Label created");
reloadLeftWin();
callBack(aj.oncomplete,[aj,aL]);
var auK=aj&&aj.oWin.QMReadMail;

if(auK)
{

rdVer(auK.getMailId(),1);
return reloadFrmLeftMain(true,true);
}
else if(!aj)
{

return reloadFrmLeftMain(true,true);
}

var aL=QMTag.Tb(bU);
QMMailList.selectedUI({oMail:[],oACB:aj.oACB});

for(var i=0;i<aF;i++)
{
var bJ=bf[i];
QMTag.addTagUI(bJ.oTCont,aL.newtag.id,aj.sFid,bJ.sMid,!aj.bML);
}

reloadFrmLeftMain(true,false);
(kN||oy)&&reloadLeftWin();
}
});
}
});

};


QMTag.aTJ=function(aRZ,aZE)
{
confirmBox({
title:"Filters",
msg:"Do you want to add the label to matched existing messages?",
confirmBtnTxt:'Yes',
cancelBtnTxt:'No',
onreturn:function(bz)
{
if(bz)
{
AjaxSendMailMgr({
bI:['&fun=AutoTag&mailaction=mail_filter&filterid=',aRZ],
tf:'mail_tag successful',
oE:'Operation failed. Please try again later. ',
mj:function(aL,bU,fj)
{
var aL=eval(bU);
if(aL.count)
{
reloadFrmLeftMain(1,1);
}
return showInfo(
T(aL.count?"Operation completed. $count$ message(s) labeled. <a href='/cgi-bin/mail_list?sid=$sid$&folderid=all&tagid=$tagid$'  style='color:white' onclick='getTop().hiddenMsg();' target='mainFrame'>[View]</a>":"Operation completed. No message moved or labeled. ").replace(aL),
30000);
}
});
}
else
{
reloadFrmLeftMain(1,!aZE);
}
}
});
};






QMTag.setMailAutoTag=function(aj)
{
var bf=aj.oMail,
UV=false,
atA=/[~!#\$%\^&\*\(\)=\+|\\\[\]\{\};\':\",\?\/<>]/ig,
bI=['&mailaction=mail_tag&Fun=AutoTag'];


if(isSelectAllFld(getMainWin()))
{
return showError('Can not create a new automatic label when all messages are selected.');
}

for(var aN=bf.length-1;aN>=0;aN--)
{
if(bf[aN].bSys)
{
return showError('Auto labeling is not available to system messages. ');
}
bI.push('&mailid=',bf[aN].sMid);
}
confirmBox(
{
mode:"prompt",

title:'New Auto Label',
sType:"custom",
msg:[
'<div style="padding:10px;">',
'<div style="width:100%;margin:10px;"><b>Label all messages from</b><input type="text" id="addr" style="width:300px;margin-left:54px;"/></div><div style="margin:10px;"><b> automatically</b><input type="text" id="name" style="width:300px;margin-left:15px;"/></div>',
'<div class="graytext" style="width:450px;margin:10px;">Messages from this address will be labeled automatically for easy management. </div>',
'</div>'
].join(''),
onload:function()
{
var ae=this;
addEvents([ae.S("addr"),ae.S("name")],
{
keydown:function(ag)
{
if(ag.keyCode==13)
{
UV=true;
ae.close();
}
}
}
);
},
onshow:function()
{
var dj=this,
bJ=aj.adt,
Me=QMMailList.avL(aj),
pn=Me[1],
fe=Me[0];

if(!pn||!fe)
{
dj.S('addr').focus();
}
else
{
dj.S('addr').value=fe.split(',')[0];
dj.S('name').value=trim(htmlDecode(pn).split(/[,@]/)[0].replace(atA,''))+"'s messages";
}
},
onreturn:function(bz)
{

var dj=this,
eG=trim(dj.S('addr').value),
aV=trim(dj.S('name').value);
if(!bz&&!UV)
{
return;
}
if(!eG)
{
return showError('Please fill the sender name or address. ');
}
var aF=getAsiiStrLen(aV);
if(aF==0||aF>50)
{
return showError(aF?"Label name is too long, please enter the name less than 50 characters(25 Chinese characters)":'Please enter the label name');
}
if(atA.test(aV))
{
return showError('The label name can not contain the following characters: ~!#$%^&*()=+|\\[]{};\':",?/<> .');
}

bI.push('&sender=',encodeURI(eG),'&tagname=',encodeURI(aV));
AjaxSendMailMgr({
bi:'/cgi-bin/setting2',
bI:bI,
tf:'mail_tag successful',
oE:'Failed to set auto label. Please try again. ',
mj:function(aL,bU,fj)
{
showInfo("Create a automatic label successfully, please try again. All receiving messages will be labeled automatically through filter.");

var az=aj.oWin,
aL=QMTag.Tb(bU);

if(!aj.bML&&az.QMReadMail)
{

rdVer(az.QMReadMail.getMailId(),1);

}
else
{
QMMailList.selectedUI({oMail:[],oACB:aj.oACB});
for(var i=bf.length-1;i>=0;i--)
{
var bJ=bf[i];
QMTag.addTagUI(bJ.oTCont,aL.newtag.id,aj.sFid,bJ.sMid,!aj.bML);
}
}

QMTag.aTJ(aL.filterid,aj.bML);
return;
}
});
}
}
);


};








QMTag.rmTag=function(eH,aj)
{
var bf=aj.oMail,
aF=bf.length,
gu=0,
bI=[],
cF=getMainWin(),
kN=isSelectAllFld(cF),
bRx=aj.bNoCheck,
oy=checkSelectGroup();

if(!aF)
{
return showError('No message selected ');
}
else if(kN||oy)
{
var cy=getSelectAllParam(cF);

bI=['mailaction=',cy.type,'&fun=mail_flaguntag'];
cy.fid&&bI.push('&folderid=',cy.fid);
cy.tid&&bI.push('&srctagid=',cy.tid);
cy.groupid&&bI.push('&groupid=',cy.groupid);
if(cy.flags)
{
var uJ=cy.flags.split("|");
E(uJ,function(oD)
{
if(oD!="")
{
bI.push('&flag=',oD);
}
});
}
oy&&bI.push(getSelectGroupUrl());
}
else
{
bI=['&mailaction=mail_tag&fun=del'];


aj.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=23");
}
showSelectALL(cF,false);

if(eH)
{
bI.push('&tagid=',eH);
}


for(var i=bf.length-1;i>=0;i--)
{
if(QMTag.rmTagUI(bf[i].oTCont,eH)||bRx)
{
gu++;
var bJ=bf[i],
bt=bJ.sMid;
bI.push('&mailid=',bt);
rdVer(bt,1);
QMMailCache.addData(bt,{removeTagId:eH});

if(bJ.bUnr)
{

var sz=eH?bJ.oTagIds:[eH];

if(eH)
{
var fF='tag_'+eH;
setTagUnread(fF,getFolderUnread(fF)-1);
}
else
{
E(bJ.oTagIds,function(nz){
var fF='tag_'+nz;
setTagUnread(fF,getFolderUnread(fF)-1);
});
}

if(bJ.oTagIds.length==1||!eH)
{
setTagUnread('tag',getFolderUnread('tag')-1);
}
}
}
}
QMMailList.selectedUI({oMail:[],oACB:aj.oACB});
if(gu)
{
AjaxSendMailMgr({
bI:bI,
tf:"mail_tag successful",
oE:T(['Failed to remove the label. Please try again. ']),
mj:function(aL,bU,fj)
{
QMTag.Tb(bU);
























(kN||oy)&&reloadLeftWin();
}
});
}
};










QMTag.rmTagUI=function(KI,eH)
{
if(eH)
{
for(var tV=GelTags("table",KI),aN=tV.length-1;aN>=0;aN--)
{
if(tV[aN].getAttribute("tagid")==eH)
{
removeSelf(tV[aN]);
return true;
}
}
}
else
{
KI.innerHTML='';
return true;
}
return false;
};



QMTag.addTagUI=function(KI,eH,fk,aP,aVF)
{
for(var Dt=GelTags("table",KI),aN=Dt.length-1;aN>=0;aN--)
{
if(Dt[aN].getAttribute('tagid')==eH)
{
return false;
}
}

var bP=
TE([
'<table cellspacing="0" cellpadding="0" border="0" class="tagleftDiv flagbg$flagbg$" tagid="$id$">',
'<tr>',
'<td class="falg_rounded">\n',
'</td>',
'<td colspan="2">\n',
'</td>',
'<td class="falg_rounded">\n',
'</td>',
'</tr>',
'<tr>',
'<td>\n',
'</td>',
'<td class="tagbgSpan" tid2="$id$">',
'<span>\u4E2Da</span>$name$<span>\u4E2Da</span>',
'$@$if($t$=="mail_list")$@$<div class="closeTagSideDiv flagbg$flagbg$" style="display:none" title="Remove Label" tid2="$id$">&nbsp;&nbsp;&nbsp;</div>$@$endif$@$',
'</td>',
'$@$if($t$!="mail_list")$@$<td title="Remove Label" class="closeTagDiv $disclose$" tid2="$id$">&nbsp;</td>$@$endif$@$',
'<td>\n',
'</td>',
'</tr>',
'<tr>',
'<td class="falg_rounded">\n',
'</td>',
'<td colspan="2">\n',
'</td>',
'<td class="falg_rounded">\n',
'</td>',
'</tr>',
'</table>'
]).replace(extend({
t:aVF?"readmail":"mail_list",
folderid:fk,
mailid:aP||""
},QMTag.getItem(eH)));

insertHTML(KI,"beforeEnd",bP);
return true;
};






QMTag.showTagClose=function(Kd,fZ)
{
function fY(Kd,fZ)
{
try
{
for(var rO=GelTags("div",Kd),aN=rO.length-1;aN>=0;aN--)
{
if(rO[aN].className.indexOf("closeTagSideDiv")>-1)
{
show(rO[aN],fZ);
return;
}
}
}
catch(e)
{
}
}

var ae=arguments.callee;

if(ae.tH)
{
clearTimeout(ae.tH);
}
if(ae.Zh!=Kd)
{
fY(ae.Zh,0);
}
ae.Zh=Kd;
ae.tH=setTimeout(function()
{
fY(Kd,fZ);
},
fZ?500:100);
};








QMTag.readclose=function(ag,aj)
{
var aK=getEventTarget(ag),
dI;
while(aK)
{
dI=aK.className;
if(/closeTag(Side)?Div/.test(dI))
{


QMTag.rmTag(aK.getAttribute('tid2'),aj);
return true;
}
else if(dI=='tagbgSpan')
{

readTag(aK.getAttribute('tid2'),aj.oWin,aj.sFid);
return true;
}
aK=aK.parentNode;
}
return false;
};


function readTag(eH,ao,nh)
{
nh=nh>100?nh:"all";
goUrlMainFrm(T('/cgi-bin/mail_list?sid=$sid$&tagid=$tagid$&folderid=$folderid$&page=0').replace({
tagid:eH,
folderid:nh,
sid:getSid()
}));




}







function initMailSelect(adl,asF,aSW,ao,fk,aWU,aVq)
{
var Hn=BaseMailOper,
aE={
sFolderid:fk,
bReadMode:asF&&fk!=4,
bStarMode:asF,
bAutoTag:aWU||false,
bTagMode:aSW&&fk!=5&&fk!=6,
moMoveItem:adl,
bSpam:aVq||false,
oWin:ao
},
tD=Hn.aVA(aE);

aE=tD.getConfig();


if(adl)
{
E(SN("selmContainer",ao),function(as){
if(!as.innerHTML)
{
new QMSelect({
oContainer:as,

sDefaultItemValue:"Move to...",
oMenu:{
nWidth:"auto",
nMaxWidth:180,

bAutoItemView:true,
bAutoClose:true,
oItems:adl
},
onafteropenmenu:function(ek,aKN){
var bJ;
if(aE.mnFolderType==0)
{

bJ=QMMailList.getCBInfo(aE.oWin);
}
else
{


bJ=aE.oWin.QMReadMail.getCBInfo(aE.oWin);
}

tD.setMailInfo(bJ);
},
onselect:function(bF){


tD.apply(bF.sId,bF.sItemValue);
return true;
}
});
}
});
}


function awf()
{
var bC=[],
uZ={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:5px; overflow:hidden;"></div>'},
avn=T([
'<div style="white-space:nowrap;zoom:1;">',
'<input type="button" class="item_square flagbg$flagbg$"/>',
'<span class="item_square_txt">$name$ &nbsp</span>',


'</div>']);

if(aE.bReadMode)
{
bC.push(
{sId:"read",sItemValue:"Read"},
{sId:"unread",sItemValue:"Unread"},
uZ
);
}
if(aE.bStarMode)
{
bC.push(
{sId:"star",sItemValue:"Starred Messages"},
{sId:"unstar",sItemValue:"Remove Star"}
);
if(aE.bTagMode)
{
bC.push(uZ);
}
}
if(aE.bTagMode)
{
bC.push(
{
sId:'rmalltag',
sItemValue:'Remove Label'
},
extend({bDisSelect:true,sId:'deltaghr'},uZ)
);
for(var Zl=QMTag.get(),i=0,aF=Zl.length;i<aF;i++)
{
var jt=Zl[i];
bC.push(
{
sId:'tid_'+jt.id,
sItemValue:avn.replace(jt)
}
);
}
if(aF)
{
bC.push(uZ);
}
bC.push({
sId:'newtag',
sItemValue:'New Label'
});









}
return bC;
}


E(SN("markContainer",ao),function(as){
if(as.innerHTML)
{
return;
}
if(!(aE.bReadMode||aE.bStarMode||aE.bTagMode))
{
show(as,false);
return;
}
new QMSelect({
oContainer:as,

sDefaultItemValue:"Mark as...",
oMenu:{
nWidth:"auto",
nMaxWidth:180,

bAutoItemView:true,
bAutoClose:true,
oItems:[]
},
onselect:function(bF){
var ek=this.get("menu");

tD.apply(bF.sId,bF.sItemValue);
ek.hide();

return true;
},

onbeforeopenmenu:function(arI)
{
aE.ccI=aE.bTagMode?QMTag.get():[];
arI.sDefaultId="";
arI.oItems=awf();
},

onafteropenmenu:function(ek){
var bJ;

if(aE.mnFolderType==0)
{

bJ=QMMailList.getCBInfo(aE.oWin);
var agX=bJ.oMail.length;
ek.itemOption("rmalltag","bDisplay",agX);
ek.itemOption("deltaghr","bDisplay",agX);
}
else
{


bJ=aE.oWin.QMReadMail.getCBInfo(aE.oWin);
}

tD.setMailInfo(bJ);
}
});
});
}












var QMFileAdaptor=(function(aR)
{


return{

isBrowser:function(ZN)
{
return(
{
ie:gbIsIE,
safari:gbIsSafari,
chrome:gbIsChrome,
ff:gbIsFF
})[ZN];
},
browserVer:function()
{
return gnIEVer;
},

getDomWin:function(as)
{
var aT=as.ownerDocument;
return aT.parentWindow||aT.defaultView;
},

isSystem:function(ZN)
{
return(
{
win:gbIsWin,
mac:gbIsMac
})[ZN];
},


S:S,
removeSelf:removeSelf,
insertHTML:insertHTML,

addEvent:addEvent,
stopPropagation:stopPropagation,
preventDefault:preventDefault,
createActiveX:createActiveX,

createBlankIframe:createBlankIframe,
unikey:unikey,
generateFlashCode:generateFlashCode,
detectActiveX:detectActiveX,

E:E,
trim:trim,
qmFlash:qmFlash,
T:T,
extend:extend,
evalValue:evalValue
};

}
)();







(function(A,aR)
{
var gV={},sU,az=window;

sU=gV.components={};
gV.libs={};

var Bx=function(){}

var aMV=function(){}
aMV.prototype=
{
create:function(aA,aq)
{
var ae=this,
akp=ae.orders[aA],
bX=ae.aKF(aA,aq.oOrders||akp),
BX=sU[bX.sCom];

debug("uploader implement:"+bX.sCom);
aq.sType=aA;

if(BX)
{
if(aA=="popup"&&/Flash/.test(bX.sCom))
{

bX=ae.aKF(aA,akp,+bX.nIdx+1);
sU[bX.sCom]&&new sU[bX.sCom](aq);
}
return new BX(aq);
}
},

orders:
{
"base":["Base"],
"popup":["FlashPopup","Html5Popup","ActivexPopup","RawinputPopup"],
"drag":["Html5Drag","ActivexDrag"],
"paste":["ActivexPaste"]
},

















aKF:function(aA,aSk,fm)
{
fm=fm||0;
if(aSk)
{
for(var i in aSk)
{
if(i>=fm)
{
var aVe=aSk[i],
BX=sU[aVe]&&new(sU[aVe]);

if(BX&&BX.detect(aA))
{
return(
{
nIdx:i,
sCom:aVe
})
}
}
}
}
return{nIdx:-1};
}
}

var Qn=new aMV();

gV.qmCreater=aMV;


gV.create=function(aA,aq)
{
return Qn.create(aA,aq);
}

gV.create.oCreaterInstance=Qn;

gV.createCom=function(aS,eF,bfy)
{
var abX=sU[bfy],
Dm=(abX&&new abX)||{},
BX=function()
{
if(arguments.length>0)
{
this.name=aS;
this.init_.apply(this,arguments);
}
};

BX.prototype=Dm;
A.extend(
BX.prototype,
typeof(eF)=="function"?eF(abX&&abX.prototype):eF
);
sU[aS]=BX;
}









var ML=function(an)
{
var ae=this;
ae.LH={};
ae.set(an);
}
ML.prototype=
{
set:function(bH,dS)
{
var ae=this;
if(!bH)
{
return;
}
if(typeof bH=="object")
{
A.extend(ae.LH,bH);
}
else
{
ae.LH[bH]=dS;
}
return ae;
},

get:function(bH)
{
var ae=this;
if(bH)
{
return ae.LH[bH];
}
else
{
return ae.LH;
}
},

upload:function()
{
var ae=this;
ae.oUploader.upload(ae);
},

destroy:function()
{
var ae=this;
ae.oUploader.rmFile(ae);
},

cancel:function()
{
var ae=this;
ae.oUploader.cancel(ae);
},

uploader:function()
{
return this.oUploader;
}
}

gV.qmFile=ML;

gV.oUtil=
{
isFileDragOver:function(ag)
{
var aAT=ag.dataTransfer.types,azh=false;
if(aAT===null)
{
return true;
}
else
{
A.E(aAT,function(nz)
{
if(nz=="Files")
{
azh=true;
return true;
}
})
return azh;
}
}
};














gV.createCom("Base",
{
init_:function(aq)
{
var ae=this,
Bj={};

if(typeof aq=="function")
{
aq=aq.call(ae,ae.name);
}

ae.NG={};
aq.sUrl=aq.sUrl||"";
aq.sFile=aq.sFile||"UploadFile";
aq.oBodyData=aq.oBodyData||{};
ae.initConfg(aq);
},

initConfg:function(aq)
{
this.oCfg=A.extend(this.oCfg||{},aq);
},

qmFile:ML,

nConcurrent:1,

detect:function(aA)
{
return true;
},

callBack:function(ana,bD)
{
var ae=this,aM=ae.oCfg,
gK=aM[ana]||Bx;

gK.apply(ae,bD);
},

getUploadingCnt:function()
{
var ae=this,LB=0,
fI=ae.getFile();

for(var i in fI)
{
if(fI[i].get("sStatus")=="uploading")
{
LB+=1;
}
}
return LB;
},

isBusy:function()
{
var ae=this;
return ae.getUploadingCnt()>=ae.nConcurrent;
},

cancel:function(aH)
{
var ae=this;

if(aH.get("sStatus")=="uploading")
{
aH.set("sStatus","cancel");
ae.calcUsedTime(aH);
ae.ossLog(aH);
aH.fCancel&&aH.fCancel();
}
else if(aH.get("sStatus")=="ready")
{
aH.set("sStatus","cancel");
}
clearInterval(aH.Xy);
clearTimeout(aH.dT);
ae.rmFile(aH);
},

onselect:function(iB)
{
var ae=this;
ae.callBack("onselect",[iB]);
},

calcSpeed:function(aH,wn)
{
var ae=this,
zO=new Date().valueOf();

if(!aH.get("nSize"))
{
return;
}

if(!aH.Pu)
{
aH.aAD=aH.get("nUploadPercent");
aH.Pu=zO;
return;
}
else if(zO-aH.Pu>(wn||1000))
{

var ED=
aH.get("nSize")*(aH.get("nUploadPercent")-aH.aAD)/100/
(zO-aH.Pu),
aiE=aH.get("nSize")*(100-aH.get("nUploadPercent"))/100/ED;

if(ED>0)
{
aH.set(
{
nSpeed:(ED/1024*1000).toFixed(2),
nRemainTime:(aiE/1000).toFixed(2)
});
}

aH.aAD=aH.get("nUploadPercent");
aH.Pu=zO;
}
},

onprocess:function(aH)
{
var ae=this;

if(aH.get("nUploadPercent")>=100&&aH.get("nPercent")>=80)
{

return;
}

ae.calcSpeed(aH);

aH.set(
{
sStatus:"uploading",
sUploadStep:"posting",
nPercent:aH.get("nUploadPercent")*0.8
}
);
ae.callBack("onprocess",[aH]);

if(aH.get("nUploadPercent")==100)
{
if(!aH.get("nSpeed"))
{
ae.calcSpeed(aH,0);



}
aH.Xy=setInterval(function()
{
if(aH.get("nPercent")>=99)
{
clearInterval(aH.Xy);
return;
}
ae.callBack("onprocess",[
aH.set(
{
"nPercent":aH.get("nPercent")+1,
"sUploadStep":"waiting"
}
)
]);
},100);
}
},

oncomplete:function(aH)
{
var ae=this;

if(aH.get("sStatus")=="uploading")
{
var dG=aH.get("sStatus");
aH.set("sStatus","complete");
ae.calcUsedTime(aH);
ae.ossLog(aH);
aH.set("sStatus",dG);
ae.rmFile(aH);
clearTimeout(aH.dT);
aH.dT=setTimeout(function()
{
clearInterval(aH.Xy);
aH.set("sStatus","complete");
aH&&aH.get()&&ae.callBack("oncomplete",[aH]);
},Math.max(1600-(new Date()).valueOf()+aH.get("nUpTime"),0)
);
}
},

onerror:function(aH)
{
var ae=this;

if(/(uploading)|(ready)|(stopped)/.test(aH.get("sStatus")))
{
var dG=aH.get("sStatus");
aH.set("sStatus","error");
ae.calcUsedTime(aH);
ae.ossLog(aH);
aH.set("sStatus",dG);




clearTimeout(aH.dT);
aH.dT=setTimeout(function()
{
clearInterval(aH.Xy);
aH.set("sStatus","error");
aH&&aH.get()&&ae.callBack("onerror",[aH]);
},Math.max(1600-(new Date()).valueOf()+aH.get("nUpTime"),0)
);
}
},

calcUsedTime:function(aH)
{
var ain=aH.get("nUpTime");

if(ain)
{
aH.set("nUsedTime",new Date().valueOf()-aH.get("nUpTime"));
}
},

cfg:function(aH)
{
return A.extend({},this.oCfg,aH&&aH.oCfg);
},

upload:function(aH)
{

},

ossLog:function(aH)
{
debug("ossLog sStatus:"+aH.sStatus);
},

parser:function(fT,aH)
{
return["complete",{}];
},

err:function(aA,KO)
{
return[].slice.call(arguments).join(",");
},

prepareUpload_:function(aH)
{
var ae=this;

if(!ae.getFile(aH.get("sId")))
{

ae.addFile(aH);
}

if(ae.isBusy())
{
return false;
}
return true;
},

getFile:function(aJ)
{
return arguments.length?this.NG[aJ]:this.NG;
},

rmFile:function(aH)
{
var ae=this;
delete ae.NG[aH.get("sId")];
},

addFile:function(an)
{
var ae=this,cD;

if(an instanceof ae.qmFile)
{
cD=an;
}
else
{
an.sId=an.sId||A.unikey();
an.nTry=0;
an.sType=ae.name;
cD=new ae.qmFile(an);
cD.oUploader=ae;
}
cD.set("sStatus","ready");
ae.NG[cD.get("sId")]=cD;
return cD;
}
}
);

window.QMFileUpload=gV;

})(QMFileAdaptor);






(function(A,aR)
{
var sU=QMFileUpload.components,
az=window;

var bk=QMFileUpload.oUtil;
var Bx=function(){};

QMFileUpload.createCom("ActivexPopup",function(aB)
{
return(
{
init_:function(aq)
{
var ae=this;
aB.init_.call(ae,aq);
ae.initConfg();
ae.sI();
},

detect:function()
{

return A.isBrowser("ie")&&A.detectActiveX(2);
},

upload:function(aH)
{
var ae=this,aM=ae.cfg(aH);

if(!ae.prepareUpload_(aH))
{
return false;
}

var iZ=A.createActiveX(2,A.getDomWin(aM.oContainer));

ae.Fc(aH,aM,iZ);
iZ.AddFormItem(aM.sFile,4,0,aH.get("sFid"));

aH.set(
{
sStatus:"uploading",
nTry:aH.get("nTry")+1,
nUpTime:new Date().valueOf()
});
aH.fCancel=function()
{
iZ.StopUpload();
};
iZ.StartUpload();
},

sH:function(lA,aH)
{
var ae=this,
aiQ="axver=",
fF=aH.get("sFid");

try
{
aiQ+=lA.Version;
}
catch(e)
{

}

lA.OnEvent=function(kY,aVa,GT,IA,aAr)
{
switch(aVa)
{
case 1:
ae.onerror(
aH.set(
{
sError:ae.err("internal",GT,IA,aiQ)
})
);
break;
case 2:
ae.onprocess(
aH.set(
{
nUploadPercent:GT/IA*100
})
);
break;
case 3:
debug(["OnEvent",lA.ResponseCode,lA.Response]);
if(lA.ResponseCode!="200")
{
ae.onerror(
aH.set(
{
sError:ae.err("http",lA.ResponseCode,aiQ)
})
);
}
else
{
var aL=ae.parser(lA.Response,aH);
(ae["on"+aL[0]]||Bx).call(ae,aH.set(aL[1]));
}
break;
}
}
},

Fc:function(aH,aq,lA)
{
var ae=this;
ae.sH(lA,aH);

lA.URL=aq.sUrl;

lA.AddHeader("Cookie",document.cookie);

A.E(aq.oBodyData,function(bF,bH)
{
lA.AddFormItem(bH,0,0,bF);
});
},

ahl:function(nK,lA)
{
var ae=this,
iZ=lA||A.createActiveX(2);

if(nK&&typeof nK=="string")
{
var eN=[];
A.E(nK.split("\r\n"),function(auN)
{
var EK=A.trim(auN).split(" ");
if(EK.length>=2)
{
var cD,
fF=EK.shift(),
eU=EK.join(" "),
ee=parseInt(iZ.GetFileSize(eU));

cD=ae.addFile(
{
sFid:fF,
sStatus:"ready",
sName:eU.split(/[\\\/]/).pop(),
nSize:ee
});
eN.push(cD);
}
}
);
ae.onselect(eN);
}
},

sI:function()
{
var ae=this,
aM=ae.oCfg,
be=aM.oContainer;

A.addEvent(be,"click",
function(ag)
{
var iZ=A.createActiveX(2);
if(iZ)
{
var aZT=iZ.SelectFiles(az);
ae.ahl(aZT,iZ);
A.stopPropagation(ag);
}
});
}
});
},"Base");

QMFileUpload.createCom("ActivexPaste",function(aB)
{
return(
{
sI:function()
{
var ae=this,
aM=ae.oCfg,
be=aM.oContainer;

if(be&&aM.bBindKeyDown)
{
A.addEvent(be,"keydown",
function(ag)
{
if((ag.ctrlKey||ag.metaKey)&&
(ag.keyCode==86||ag.keyCode==118)&&!ag.cancelBubble
)
{
ae.getClipBoardFiles(ag);
}
});
}
},

detect:function()
{
return A.detectActiveX(2);
},

getClipBoardFiles:function(ag)
{
var ae=this,
iZ=A.createActiveX(2);

if(iZ)
{
var ayW=iZ.GetClipboardFiles();
ae.ahl(ayW);
if(ayW)
{

A.preventDefault(ag);
}
}
}
});
},"ActivexPopup");

function arb()
{
var iZ=A.createActiveX(0),
eU="";

try{eU=iZ.GetDLLFileName();}catch(e){}
if(eU.indexOf("_2.dll")!=-1)
{
return['<object classid="CLSID:B0F77C07-8507-4AB9-B130-CC882FDDC046"',
' width=100% height=100%></object>'].join("");
}
else
{
return['<object classid="CLSID:F4BA5508-8AB7-45C1-8D0A-A1237AD82399"',
' width=100% height=100%></object>'].join("");
}
}

bk.getDragCode4Ax=arb;

QMFileUpload.createCom("ActivexDrag",function(aB)
{
return(
{
sI:function()
{
var ae=this,
aM=ae.oCfg,Ed,
be=aM.oContainer;

be.innerHTML=arb();
setTimeout(function()
{
Ed=ae.aMH=be.firstChild;
A.extend(Ed,ae.oCfg.oActivexCfg,
{
OnFilesDroped:function(nK)
{
ae.aNE(nK);
}
});
},200);
},

aNE:function(nK)
{
var ae=this,Ed=ae.aMH;
switch(nK)
{
case"ENTER":
Ed.text=ae.oCfg.sEnter;
break;
case"LEAVE":
Ed.text=ae.oCfg.sLeave;
break;
case"OVER":
break;
default:
Ed.text=ae.oCfg.sLeave;
ae.ahl(nK);
break;
};
},

detect:function()
{
return A.detectActiveX(4,1);
},

initConfg:function(aq)
{
var ae=this;
aB.initConfg.apply(ae,arguments);

ae.oCfg.sEnter="Release the mouse";
ae.oCfg.sLeave="Drag the file to this area";
ae.oCfg.oActivexCfg=
{
text:ae.oCfg.sLeave,
backColor:0xffffff,
textColor:0x000000,
textFacName:"\u5B8B\u4F53",
textFontSize:10,
textFontWeight:500
};
}
});
},"ActivexPopup");

})(QMFileAdaptor);





(function(A,aR)
{
var gV=QMFileUpload,
sU=gV.components;

var bk=QMFileUpload.oUtil;

var Bx=function(){};

var avv=A.T([
"top:0;left:0;",
"position:absolute;",
"cursor:pointer;",
"width:$width$px;",
"height:$height$px;",
"overflow:hidden;",
"background-color:#fff;",
"filter: alpha(opacity=0);",
"zoom:1;",
"opacity:0.0;",
"z-index:1;"
]);









var azE=A.T([
'cursor: pointer; ',
'font-family: Times;',
'position: absolute; ',
'cursor: pointer; ',
'width:200px; ',
'height:200px; ',
'font-size:50px; ',
A.isBrowser("ff")?'right:426px; ':'right:0px;'
]);

gV.createCom("RawinputPopup",function(aB)
{
return({
init_:function(aq)
{
var ae=this;
aB.init_.call(ae,aq);
ae.sI();
},

detect:function(aA)
{
return true;
},

upload:function(aH)
{
var ae=this,aM=ae.cfg(aH);

if(!ae.prepareUpload_(aH))
{
return false;
}

ae.Fc(aH,aM,function()
{
ae.ahe(aH);
});
return true;
},

ahe:function(aH)
{
var ae=this,ain=new Date().valueOf(),
aAB=function()
{
ae.onprocess(
aH.set(
{
nTry:aH.get("nTry")+1,
nUpTime:ain,
nUploadPercent:-1
})
);
};

aH.oForm.submit();
aAB();

setTimeout(function()
{
if(aH.get("sStatus")=="uploading")
{
aAB();
setTimeout(arguments.callee,1000);
}
},1000);
},

Fc:function(aH,aq,cd)
{
var ae=this,
Bk="if"+aq.sId,
az=A.getDomWin(aq.oContainer),
afa=az.document,
aZ={

id:Bk,
obj:afa.body,
where:"beforeEnd",
style:"display:none;",
onload:function(ao)
{
var kU=this,
gQ=aH.oForm;

A.extend(gQ,
{
method:"post",
target:Bk,
action:aq.sUrl
});
gQ.encoding="multipart/form-data";
gQ.style.display="none";

gQ.firstChild.name=aq.sFile;

A.E(aq.oBodyData,function(bF,bH)
{
var XQ=afa.createElement("input");
XQ.type="hidden";
XQ.name=bH;
XQ.value=bF;
gQ.appendChild(XQ);
});
afa.body.appendChild(gQ);

aZ.onload=function()
{
var dv,aL;
try
{
dv=getTop().htmlDecode(kU.contentWindow.document.documentElement.innerHTML);
dv=dv.replace(/BODY/g,'body');
var pR=dv.match(/<body>(.*?)<\/body>/);
if(pR[1])
{
dv=pR[1];
}
aL=ae.parser(dv,aH);
}
catch(e)
{
aL=["complete",{}];
}

A.removeSelf(kU);
A.removeSelf(gQ);

(ae["on"+aL[0]]||Bx).call(ae,aH.set(aL[1]));
aH.oForm=aH.oFile=null;
};

aH.fCancel=function()
{
A.removeSelf(kU);
A.removeSelf(gQ);
}

cd();
}
};

A.createBlankIframe(az,aZ);
},

NZ:function()
{
var ae=this,aM=ae.oCfg,av=ae.dL,
aT=A.getDomWin(av).document,
cC=aT.createElement("input");

cC.type="file";
cC.title="no selected";
cC.name=aM.sFile;
cC.style.cssText=azE;

cC.onchange=function()
{
ae.jV(this);
}

A.addEvent(cC,"click",function(ag)
{
A.stopPropagation(ag);
});

av.appendChild(cC);
},

jV:function(cG)
{
var ae=this,
aT=A.getDomWin(cG).document,
gQ=aT.createElement("form");

gQ.appendChild(cG);

ae.NZ();
var cD=ae.addFile(
{
sName:cG.value.split("\\").pop()
}
);
cD.oForm=gQ;
ae.onselect([cD]);
},

sI:function()
{
var ae=this,aM=ae.oCfg,
be=ae.oCfg.oContainer,
aT=A.getDomWin(be).document,
av=aT.createElement("span");

ae.dL=av;
av.style.cssText=avv.replace(
{
width:be.offsetWidth,
height:be.offsetHeight+1
});
ae.NZ();

be.style.position="relative";
be.insertBefore(av,be.firstChild);
}
});
},"Base");

gV.createCom("Html5Popup",function(aB)
{
return({

init_:function(aq)
{
var ae=this;
aB.init_.call(ae,aq);
ae.sI();
},

doHtml5Upload_:function(aH,cN)
{
var ae=this;
cN.send(aH.oFile);
},

detect:function(aA)
{
var az=window,
cC=az.document.createElement('input');
cC.type='file';
return'multiple'in cC&&
az.File!=aR&&
az.XMLHttpRequest!=aR&&
(new XMLHttpRequest).upload!=aR;
},

upload:function(aH)
{
var ae=this,aM=ae.cfg(aH);

if(!ae.prepareUpload_(aH))
{
return false;
}

var cV=new XMLHttpRequest();
ae.Fc(aH,aM,cV);

aH.set(
{
sStatus:"uploading",
nTry:aH.get("nTry")+1,
nUpTime:new Date().valueOf()
});
aH.fCancel=function()
{
cV.abort();
};

ae.doHtml5Upload_(aH,cV);

return true;
},

sI:function()
{
var ae=this,aM=ae.oCfg,
be=ae.oCfg.oContainer,
aT=A.getDomWin(be).document,
av=aT.createElement("span");

ae.dL=av;
av.style.cssText=avv.replace(
{
width:aM.nWidth||be.offsetWidth,
height:aM.nHeight||be.offsetHeight+1
});
ae.NZ();

be.style.position="relative";
be.insertBefore(av,be.firstChild);
},

NZ:function()
{
var ae=this,aM=ae.oCfg,av=ae.dL,
aT=A.getDomWin(av).document,
cC=aT.createElement("input");

cC.type="file";
cC.name=aM.sFile;
cC.style.cssText=azE;

if(aM.bMulti!==false)
{
cC.multiple="true";
}

cC.onchange=function()
{
ae.jV(this);
}

A.addEvent(cC,"click",function(ag)
{
A.stopPropagation(ag);
});

av.appendChild(cC);
},

jV:function(cG)
{
var ae=this,eN=[],
fI=cG.files;

A.removeSelf(cG);
ae.NZ();

A.E(fI,function(bF)
{
var cD=ae.addFile(
{
sName:bF.name,
nSize:parseInt(bF.size,10)
});
cD.oFile=bF;
eN.push(cD);
});
ae.onselect(eN);
},

Fc:function(aH,aq,cN)
{
var ae=this;

cN.upload.onprogress=function(ag)
{
if(ag.lengthComputable)
{
ae.onprocess(
aH.set(
{
nUploadPercent:ag.loaded/ag.total*100
})
);
}
}

cN.onreadystatechange=function()
{
if(cN.readyState==4)
{
cN.onreadystatechange=cN.upload.onprogress=null;

if(cN.status==200)
{
var aL=ae.parser(cN.responseText,aH);
ae["on"+aL[0]].call(ae,
aH.set(aL[1])
);
}
else
{
ae.onerror(
aH.set(
{
sError:ae.err("http",cN.status)
})
);
}
}
}

cN.open("POST",aq.sUrl,true);
cN.setRequestHeader("content-type","application/octet-stream");
}
});
},"Base");


QMFileUpload.createCom("Html5Drag",function(aB)
{
return(
{
sI:function()
{
var ae=this,aM=ae.oCfg,
be=ae.oCfg.oContainer,
aT=A.getDomWin(be).document,
av=aT.createElement("div");

av.style.cssText="width:100%;height:100%;font-size:14px;text-align:center;line-height:150px;";

av.innerHTML=aM.sLeave;

A.addEvent(av,"dragover",function(ag)
{
if(bk.isFileDragOver(ag))
{
av.innerHTML=aM.sEnter;
}
A.stopPropagation(ag);
A.preventDefault(ag);
});

A.addEvent(av,"dragleave",function(ag)
{
if(bk.isFileDragOver(ag))
{
av.innerHTML=aM.sLeave;
}
A.stopPropagation(ag);
A.preventDefault(ag);
});

A.addEvent(av,"drop",function(ag)
{
if(ag.dataTransfer.files.length)
{
ae.beQ(ag);
av.innerHTML=aM.sLeave;
}
A.stopPropagation(ag);
A.preventDefault(ag);
});

be.insertBefore(av,be.firstChild);
},

beQ:function(ag)
{
var ae=this,eN=[],
fI=ag.dataTransfer.files;

A.E(fI,function(bF)
{
var cD=ae.addFile(
{
sName:bF.name,
nSize:parseInt(bF.size,10)
});
cD.oFile=bF;
eN.push(cD);
});
ae.onselect(eN);
},

initConfg:function(aq)
{
var ae=this;
aB.initConfg.apply(ae,arguments);

ae.oCfg.sEnter="Release the mouse";
ae.oCfg.sLeave="Drag the file to this area";
}
});
},"Html5Popup");

})(QMFileAdaptor);






(function(A,aR)
{
var sU=QMFileUpload.components,
az=window,
bbI=A.T([
'<span style="top:0;left:0;position:absolute;width:100%;height:100%;margin:$margin$;z-index:0;overflow:hidden;">',
'$code$',
'</span>']);

var bk=QMFileUpload.oUtil;

var Bx=function(){};

QMFileUpload.createCom("FlashPopup",function(aB)
{
return({







init_:function(aq)
{
var ae=this;
aB.init_.call(ae,aq);
ae.sI();
},

detect:function()
{
return A.qmFlash.isSupported();
},

upload:function(aH)
{
var ae=this,oI=ae.FB,
aM=ae.cfg(aH);

if(!ae.prepareUpload_(aH))
{
return false;
}

ae.Fc(aM);
aH.set(
{
sStatus:"uploading",
nTry:aH.get("nTry")+1,
nUpTime:new Date().valueOf()
}
);
aH.fCancel=function()
{
oI.cancel();
};
ae.doFlashUpload_(aH,oI);
return true;
},

cancel:function(aH)
{
var ae=this;
aB.cancel.call(ae,aH);
},

getFile:function(hX)
{
var ae=this,
fI=aB.getFile.call(ae);

for(var i in fI)
{
if(fI[i].get("sFid")==hX)
{
return fI[i];
}
}
return fI;
},

Fc:function(aq)
{
var ae=this,oI=ae.FB;

A.E(aq.oBodyData,function(bF,bH)
{
oI.addUploadVar(bH,bF);
});
oI.setUploadUrl(aq.sUrl);
},

bcv:function(gO)
{
var ae=this,
aM=ae.oCfg;

return bbI.replace(
{
height:aM.nHeight||gO.offsetHeight,
width:aM.nWidth||gO.offsetWidth,
margin:aM.nMargin||0,
code:A.generateFlashCode(
"flashUploader_"+aM.sId,
aM.sFlashUrl||"../flash/uploader.swf?"+Math.random(),
{
width:"100%",
height:"100%"
},
{
wmode:"transparent"
})
});
},

sI:function()
{
var ae=this,
aM=ae.oCfg,
be=aM.oContainer,
az=A.getDomWin(be);

if(be)
{
aM.sId=Math.random();

var dv=ae.bcv(be);

be.style.position="relative";
if(A.browserVer()==6)
{
be.style.zoom=1;
be.style.overflow="hidden";
}
A.insertHTML(be,"afterBegin",dv);

setTimeout(function(){
(new A.qmFlash({
id:"flashUploader_"+aM.sId,
win:az,
onSelect:function(aqQ,aqW)
{
ae.onFlashSelect_.apply(ae,arguments);
},
onProcess:function(jn,jZ)
{
ae.onFlashProcess_.apply(ae,arguments);
},
onError:function(jn,HD,ic,jZ)
{
ae.onFlashError_.apply(ae,arguments);
},
onComplete:function(jn,an,aqy)
{
ae.onFlashComplete_.apply(ae,arguments);
}
})).setup(function(kM,avW)
{
if(kM)
{



be.firstChild.style.zIndex=2;
ae.initFlash_(this.getFlash());
}
else
{
be.removeChild(be.firstChild);
debug("the flash uploader is not ok...");
}
});
},300);
}
},

getFlash:function()
{
return this.FB;
},

doFlashUpload_:function(aH,yk)
{
var ae=this,
aM=ae.cfg(aH);

yk.upload(aH.get("sFid"),aM.sFile);
},

initFlash_:function(yk)
{
var ae=this,aM=ae.oCfg;

ae.FB=yk;
if(aM.bMulti!==false)
{
yk.initlize("multi");
}
else
{
yk.initlize("single");
}


yk.clearUploadVars();
},

onFlashSelect_:function(aqQ,aqW)
{
var ae=this,aM=ae.oCfg,oI=ae.FB,eN=[];

for(var i=aqQ;i<=aqW;i++)
{
var cD=ae.addFile(
{
sFid:i,
sName:oI.getFileInfo(i,"name"),
nSize:parseInt(oI.getFileInfo(i,"size"),10)
});
eN.push(cD);
}
ae.onselect(eN);
},

onFlashProcess_:function(jn,jZ)
{
var ae=this;
ae.onprocess(
ae.getFile(jn).set(
{
nUploadPercent:jZ
})
);
},

onFlashComplete_:function(jn,an,aqy)
{
var ae=this,
cD=ae.getFile(jn),
ec=ae.parser(an,cD);

cD.set(
{
nPostMode:aqy,
nUpType:ae.FB.getCurUptype()
});

(ae["on"+ec[0]]||Bx).call(ae,cD.set(ec[1]));
},

onFlashError_:function(jn,HD,ic,jZ)
{
var ae=this,
cD=ae.getFile(jn);

ae.onerror(
cD.set(
{
nUpType:ae.getFlash().getCurUptype(),
nUploadPercent:jZ,
sError:ae.err(
"internal",
parseInt(ic.replace(/Error #/g,''),10),
"flashver="+A.qmFlash.getFlashVer().desc
)
})
);
}
});
},"Base");

})(QMFileAdaptor);









(function()
{
QMFileAdaptor.extend(QMFileAdaptor,
{

getCookie:getCookie,
getSid:getSid,
getUin:getUin,
getPath:getPath,
ossLog:ossLog,
QMAjax:QMAjax
});
})();






;(function(A)
{
var gV=QMFileUpload,
sU=gV.components,
bk=gV.oUtil,
aMU=[location.protocol,"//",location.hostname,"/cgi-bin/upload"].join("");

var bnY={
"unknow":100000000,
"http":200000000,
"cgi":300000000,
"internal":400000000
};

var biE={
"RawPost":3,
"CheckPost":7,
"MultiPost":9
};

var Qn=new gV.qmCreater();

Qn.orders=
{
"base":["Base"],
"popup":["FlashPopupMail","Html5PopupMail","ActivexPopupMail","RawinputPopupMail"],
"drag":["Html5DragMail","ActivexDragMail"],
"paste":["ActivexPasteMail"]
};


gV.create=function(aA,aq)
{
return Qn.create(aA,aq);
}

gV.create.oCreaterInstance=Qn;

gV.getMailLib=function(aB)
{
return(
{
addToUrl:function(cJl)
{
var bi=this.oCfg.sUrl,
aL=[];

A.E(cJl,function(bF,bH)
{
aL.push([bH,encodeURIComponent(bF||"")].join("="));
});
this.oCfg.sUrl=[(bi.split("?")||"")[0],aL.join("&")].join("?");
},

ossLog:function(aH)
{
var ae=this,aM=ae.cfg(aH),nZ,
aV=ae.name,iC=0,aHU=0;

if(aH.get("sStatus")=="error")
{
var ei=(aH.get("sError")||"").split(",");

nZ=bnY[ei[0]];

if(nZ)
{
if(aH.get("nUploadPercent")<100&&ei[0]=="internal")
{
nZ=500000000;
}
nZ+=Math.abs(ei[1]);
}
}
else if(aH.get("sStatus")=="cancel")
{
nZ=900000001;
}
else if(aH.get("sStatus")=="stopped"&&aH.get("sUploadStep")=="paused")
{
nZ=900000;
}
else if(aH.get("sStatus")=="complete")
{
var ee=aH.get("nSize")/1024/1024,
nZ=0;

if(ee>=1&&ee<6)
{
nZ=Math.floor(ee);
}
else if(6<=ee&&ee<=50)
{
nZ=6;
}
else if(50<ee&&ee<=1024)
{
nZ=7;
}
else if(ee>1024)
{
nZ=8;
}
nZ=nZ*100000;

if(aH.get("nTry")>1)
{
nZ+=1000000;
}

if(/Flash/.test(aV)&&(aHU=aH.get("nPostMode")))
{
nZ+=(aHU*10000000);
}
}

if(typeof nZ=="undefined")
{
return;
}

if(/Flash/.test(aV))
{
iC=aH.get("nUpType")||biE[aM.sFlashMode]||3;


if(aH.get("bFtnFile"))
{
iC=3;
}
}
else if(/Activex/.test(aV))
{
iC=2;
}
else if(/Rawinput/.test(aV))
{
iC=5;
}
else if(/Html5/.test(aV))
{
iC=1;
}
else if(/Ftn/.test(aV))
{
iC=6;
}

var aIV=/http:\/\/(.*?)\//.exec(ae.cfg(aH).sUrl);
A.ossLog("delay","all",
A.T("stat=$stat$&ftype=$ftype$&utype=$utype$&errno=$errno$&retry=$retry$&fsize=$fsize$&utime=$utime$&percent=$percent$&errdetail=$errdetail$&uphost=$uphost$").replace(
{
stat:aM.bOssLog===false?"custom":"attach",
retry:0,
ftype:aH.get("bFtnFile")?"1":"0",
errno:nZ,
utype:iC,
fsize:aH.get("nRealPostSize")||aH.get("nSize"),

utime:aH.get("nRealPostTime")||aH.get("nUsedTime")||-1,
percent:aH.get("nUploadPercent"),
uphost:aIV&&aIV[1],
errdetail:aH.get("sError")
}
));
},


parser:function(fT,aH)
{
var ae=this,aM=ae.cfg(aH),aL={},dG="error";

if(/.*\/cgi-bin\/uploadfile/.test(aM.sUrl))
{
var ei;
if(fT.indexOf("/data/")!=-1)
{
ei=fT.split("|");

aL.sFileId=ei[0].split("/").pop();

if(aL.sFileId)
{
ei[1]&&(aL.sFileUrl=ei[1]);
dG="complete";
}
else
{
dG="error";
aL.sError=ae.err("unknow",709394);
}
}
else if(ei=/"errorcode" : "(.*)"/gi.exec(fT))
{
dG="error";
aL.sError=ae.err("cgi",ei[1]);
}
else
{
dG="error";
aL.sError=ae.err("unknow",709390);
}
}

else if(/.*\/cgi-bin\/upload/.test(aM.sUrl))
{
if(/var\s*result\s*=\s*"qmfileuploadsuccess";/.test(fT))
{
var ei=/viewfileurl="(.*?)";/.exec(fT);

aL.sFileUrl=ei&&(ei[1]+"&sid="+A.getSid());

ei=/filepath="(.*?)";/.exec(fT);
aL.sFileId=ei&&ei[1].split("/").pop();
ei=/filesize="(.*?)";/.exec(fT);
var ee=parseInt(ei&&ei[1],10);
ee&&(aL.nSize=ee);

if(aL.sFileId)
{
dG="complete";
}
else
{
dG="error";
aL.sError=ae.err("unknow",709395);
}
}
else if(/title\s*:\s*"cgi exception",/.test(fT))
{
var ei=/errcode\s*:\s*"(.*?)",/gi.exec(fT);
aL.sError=ae.err("cgi",ei?ei[1]:"0");
}
else
{
dG="error";
aL.sError=ae.err("unknow",709397);
}
}

else if(/\/ftn_handler/.test(aM.sUrl))
{
var ei=/parent\.ftn_post_end\((.*?)\)/.exec(fT);
if(ei[1]==0)
{
dG="complete";
}
else
{
aL.sError=ae.err("cgi",ei?ei[1]:"709398");
}
}
else
{
aL.sError=ae.err("unknow","709399");
}

return[dG,aL];
},

getMailUploadUrl:function()
{
return aMU;
},

callBack:function(ana,bD)
{
var ae=this;
if(ana=="onprocess")
{
ae.setKeepAlive(true);
}
else if(ana=="oncomplete"||ana=="onerror")
{
ae.checkClearAlive();
}
aB.callBack.apply(ae,arguments);
},

setKeepAlive:function(mV)
{
var ae=this;

if(mV)
{
if(ae.apq)
{
return;
}
ae.apq=setInterval(
function()
{
A.QMAjax.send("/cgi-bin/readtemplate?t=keep_alive&ef=js&sid="+A.getSid()+"&r="+Math.random(),
{
method:"GET",
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(kA,bU,cN)
{
if(bU.indexOf("<!--cgi exception-->")!=-1
&&bU.indexOf('errcode : "-2"')!=-1)
{


var	fI=ae.getFile();
for(var i in fI)
{
var cD=fI[i];
if(cD.get("sStatus")=="uploading")
{
cD.fCancel&&cD.fCancel();
ae.onerror(cD);
}
}
}
}
});
},15*60*1000
);
}
else
{
clearInterval(ae.apq);
ae.apq=null;
}
},

checkClearAlive:function()
{
var ae=this;
setTimeout(function()
{
if(ae.getUploadingCnt())
{
ae.setKeepAlive(false);
}
},2000);
}
});
}

var ML=gV.qmFile;

var adj=function(an)
{
ML.call(this,an);
}
adj.prototype=new ML({});

adj.prototype.uploadToFtn=function()
{
var ae=this;
return ae.oUploader.uploadToFtn(ae);
}

gV.getFtnLib=function(aB)
{
return(
{
qmFile:adj,

oncomplete:function(aH)
{
var ae=this;

if(aH.get("bFtnFile"))
{
A.QMAjax.send(
A.T("/cgi-bin/ftnGetURL?sid=$sid$&t=ftn.json&s=part&fid=$fid$&ef=js").replace(
{
sid:A.getSid(),
fid:aH.get("sFileId")
}),
{
onload:function(kA,bU,cN)
{
if(kA)
{
var cU=A.evalValue(bU),sE;

if(cU.errcode=="0")
{
if(cU.oFile&&cU.oFile.sKey&&cU.oFile.sFetchCode)
{
aH.set(cU.oFile).set(
{
sDownloadPage:["http://mail.qq.com/cgi-bin/ftnExs_download?t=exs_ftn_download&k=",cU.oFile.sKey,"&code=",cU.oFile.sFetchCode].join("")

});
aB.oncomplete.call(ae,aH.set("sStatus","uploading"));
return;
}
else
{
sE=ae.err("cgi",cU.errcode);
}
}
else
{
sE=ae.err("http",cU.errcode);
}
aB.onerror.call(ae,aH.set({sError:sE}));
}
else
{
aB.onerror.call(ae,
aH.set(
{
sError:ae.err("http",bU)
}
)
);
}
}
}
);
}
else
{
aB.oncomplete.call(ae,aH);
}
},

uploadToFtn:function(aH)
{
var ae=this,
Wf=aH.get("nAppId")||2;

if(!ae.prepareUpload_(aH))
{
return false;
}

A.QMAjax.send(
A.T("/cgi-bin/ftnCreatefile?sid=$sid$&path=$path$&type=direct&s=comCreate&appid=$appid$&dirid=$dirid$&ef=js&resp_charset=UTF8&loc=$loc$").replace(
{
sid:A.getSid(),
loc:["ftnCreatefile","ftnCreatefile","comCreate",
(aH.get("sFrom")||"")+Wf].join(","),
appid:Wf,
dirid:aH.get("sPathId")||"",
path:encodeURIComponent(aH.get("sName"))
}),
{
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(kA,bU,cN)
{
var cU;
if(kA)
{
cU=A.evalValue(bU);
if(cU.errcode=="0"&&cU.url)
{

aH.set(cU.data);
aH.oCfg=A.extend(
aH.oCfg||{},
{
sUrl:cU.url,
sFile:"file",
oQueryData:{},
oBodyData:{
mode:/Flash/.test(aH.oUploader.name)?"flashupload":"formupload"
}
}
);

ae.upload(aH.set("sStatus","ready"));
return true;
}
}

ae.onerror(
aH.set(
{
nPercent:0,
sError:(cU&&cU.errcode)?
ae.err("cgi",cU.errcode,cU.appname):ae.err("http",cN.status)
})
);
}
}
);

ae.onprocess(
aH.set(
{
nUploadPercent:0,
bFtnFile:true,
nUpTime:new Date().valueOf()
}
));
return true;
}
});
}

})(QMFileAdaptor);






;(function(A,aR)
{
var gV=QMFileUpload,
sU=gV.components,
bk=gV.oUtil,
Bx=function(){};

function awR(aB)
{
return(
{
addToUrlAx:function()
{
var ae=this,aM=ae.oCfg;

aM=ae.oCfg;
aM.sUrl=aM.sUrl||ae.getMailUploadUrl();
ae.addToUrl(
{

resp_charset:A.isSystem("mac")?"UTF8":"",
t:"qmfileupload",
ef:"qdata",
ssl_edition:A.getCookie("ssl_edition"),
sid:A.getSid(),
mode:"file"
});
},

initConfg:function(aq)
{
var ae=this;
aB.initConfg.apply(ae,arguments);
ae.addToUrlAx();
}
});
};

gV.createCom("ActivexPopupMail",function(aB)
{
return A.extend(gV.getMailLib(aB),gV.getFtnLib(aB),awR(aB));
},"ActivexPopup");

gV.createCom("ActivexPasteMail",function(aB)
{
return A.extend(gV.getMailLib(aB),gV.getFtnLib(aB),awR(aB));
},"ActivexPaste");

gV.createCom("ActivexDragMail",
function(aB)
{
return A.extend(gV.getMailLib(aB),gV.getFtnLib(aB),awR(aB),
{
initConfg:function(aq)
{
var ae=this;
aB.initConfg.apply(ae,arguments);
ae.addToUrlAx();

ae.oCfg.sLeave="Drag and drop files to this area, You can also add attachments by using shortcuts ctrl+c, ctrl+v.";
}
});
},"ActivexDrag");

})(QMFileAdaptor);





;(function(A,aR)
{
var gV=QMFileUpload,
sU=gV.components;

gV.createCom("RawinputPopupMail",function(aB)
{
return A.extend(gV.getMailLib(aB),gV.getFtnLib(aB),
{
initConfg:function(aq)
{
var ae=this,aM;
aB.initConfg.apply(ae,arguments);
aM=ae.oCfg;
aM.sUrl=aM.sUrl||ae.getMailUploadUrl();
ae.addToUrl(
{
t:"qmfileupload",
ef:"qdata",
sid:A.getSid(),
mode:"file"
});
}
});
},"RawinputPopup");


function awR(aB)
{
return(
{
doHtml5Upload_:function(aH,cN)
{
var ae=this,
aV=aH.get("sName");

if(A.isBrowser("safari"))
{
aV=encodeURIComponent(aV).replace(/%(\w{2})/ig,function(aXe,YC)
{
return String.fromCharCode(parseInt(YC,16));
}
);
}
cN.setRequestHeader("X-QQMAIL-FILENAME",aV);
cN.send(aH.oFile);
},

addToUrlHtml5:function()
{
var ae=this,aM=ae.oCfg;

aM=ae.oCfg;
aM.sUrl=aM.sUrl||ae.getMailUploadUrl();
ae.addToUrl(
{
t:"qmfileupload",
ef:"qdata",
sid:A.getSid(),
resp_charset:"UTF8",
mode:"file"
});
}
});
};

gV.createCom("Html5PopupMail",
function(aB)
{
return A.extend(gV.getMailLib(aB),awR(aB),
{
initConfg:function(aq)
{
var ae=this,aM;
aB.initConfg.apply(ae,arguments);
ae.addToUrlHtml5();
}
});
},"Html5Popup");

gV.createCom("Html5DragMail",
function(aB)
{
return A.extend(gV.getMailLib(aB),awR(aB),
{
initConfg:function(aq)
{
var ae=this,aM;
aB.initConfg.apply(ae,arguments);
ae.addToUrlHtml5();
ae.oCfg.sLeave=A.detectActiveX(2,1)?'Drag and drop files to this area. You can also add attachments by using Shortcuts ctrl+c, ctrl+v.':'Drag and drop files to this area';
}
});
},"Html5Drag");

})(QMFileAdaptor);





;(function(A,aR)
{
var gV=QMFileUpload,
sU=QMFileUpload.components;

QMFileUpload.createCom("FlashPopupMail",function(aB)
{
var bTx=gV.getFtnLib(aB);

return A.extend(gV.getMailLib(aB),bTx,
{
aqj:function(Kf)
{
var ae=this,oI=ae.FB;

if(Kf&&!ae.bmF)
{
ae.bmF=true;
setInterval(function()
{
},1000);
}
},

initFlash_:function(yk)
{
var ae=this;
aB.initFlash_.call(ae,yk);

yk.addUploadVar("timeout",60000);

if(yk.setMultiAndResumeMode&&A.isBrowser("chrome")&&ae.oCfg.sFlashMode=="CheckPost")
{
yk.setMultiAndResumeMode(0);
}
},

uploadToFtn:function(aH)
{
aH.oCfg={sFlashMode:"RawPost"};
bTx.uploadToFtn.apply(this,arguments);
},

doFlashUpload_:function(aH,yk)
{
var ae=this,
aM=ae.cfg(aH);

aH.set(
{
bVirtual:aM.sFlashMode!="RawPost"
}
);
yk.upload(aH.get("sFid"),aM.sFile,aM.sFlashMode=="RawPost"?0:1);
},

onFlashProcess_:function(jn,jZ)
{
var ae=this;
ae.aqj(true);
aB.onFlashProcess_.apply(ae,arguments);
},





onFlashComplete_:function(jn,an,aqy)
{
var ae=this;

ae.aqj(false);

ae.getFile(jn).set(
{
nUpType:ae.getFlash().getCurUptype(),
nPostMode:aqy
});

aB.onFlashComplete_.apply(ae,arguments);
},

onFlashError_:function(jn,HD,ic,jZ)
{
var ae=this,
cD=ae.getFile(jn);

ae.aqj(false);

ae.getFile(jn).set(
{
nUpType:ae.getFlash().getCurUptype()
});

aB.onFlashError_.apply(ae,arguments);
},

initConfg:function(aq)
{
var ae=this,aM,
PB=
{
sid:A.getSid(),
lang:"utf8",
ssl_edition:A.getCookie("ssl_edition"),
skey:A.getCookie("skey"),
uin:A.getUin(),
qm_sk:A.getCookie("qm_sk"),
mode:"file"
};

aB.initConfg.apply(ae,arguments);
aM=ae.oCfg;
aM.sFlashMode=aM.sFlashMode||"RawPost";

if(aM.sFlashMode=="RawPost")
{
aM.sUrl=ae.getMailUploadUrl();
PB.ef="qdata";
PB.t="qmfileupload";
}

if(aM.sFlashMode=="CheckPost")
{
PB.sid=PB.sid.split(',')[0];
}

aM.sFlashUrl=A.getPath("swf")+"uploader.swf?r="+Math.random();








ae.addToUrl(PB);
},

cancel:function(aH)
{
var ae=this;

aH.set("nUpType",ae.getFlash().getCurUptype());
aB.cancel.call(ae,aH);
}
});
},"FlashPopup");
})(QMFileAdaptor);


var gnQmToolLoad=new Date().getTime()-biO;




function qmtool_js(){}