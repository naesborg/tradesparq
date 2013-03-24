(function(ao,aR)
{















var dGj={





open:function(adX)
{
var ae=this;
ae.bba|=adX;



ae.bVB&&QMWebpush.getInst().open(ae.bba);
return ae;
},








close:function(adX,fpG,fEM)
{
var ae=this;
ae.bba&=~adX;



if(ae.bVB)
{
fEM&&QMWebpush.getInst().close(adX);
fpG&&ae.read(adX,"");
}
return ae;
},






hideAll:function(jC)
{
var ae=this,
hO=now(),
aeb;
if(ae.bVB)
{
ao.clearTimeout(ae.fKV);

ae.fKV=setTimeout(function()
{
for(var i=0;i<ae.deB;i++)
{
aeb=1<<i;
if(ae.bXb[aeb]&&hO-ae.dBn[aeb]>jC)
{
ae.eDj(aeb,"");
}
}
ae.eLn(true).fah(true);
},jC
);
}
return ae;
},









read:function(adX,aP)
{
var ae=this,
i,aeb;

if(ae.bVB)
{
for(i=0;i<ae.deB;i++)
{
if((aeb=1<<i)&adX)
{

ae.eDj(aeb,aP);
}
}
ae.est();
}
return ae
},

euN:"mfwebpushtiptitle",

deB:31,
bba:0,


bXb:{},
dBn:{},
eYk:{},
bVB:false,








cTd:function(aQO,an)
{
var ae=this;







if(ae.bba&aQO)
{

ae.dBn[aQO]=now();
ae.bXb[aQO]=(ae.bXb[aQO]||[]).concat(an);
}
return ae;
},









eDj:function(aQO,aP)
{
var ae=this;
if(aP==="")
{
ae.bXb[aQO]=[];
}
else
{
for(var dAw=ae.bXb[aQO],
i=(dAw?dAw.length:0)-1;
i>=0&&dAw[i].mailid!=aP;
i--);
i>=0&&dAw.splice(i,1);
}
return ae;
},





eLn:function(cTt)
{
var ae=this,
cbO=ae.bXb,
bWL=ae.eYk,
aeb,
i;
for(i=0;i<ae.deB;i++)
{
aeb=1<<i;
if(!(ae.bba&aeb)
||!(cbO[aeb]&&cbO[aeb].length)
||(bWL[aeb]&&(ae.dBn[aeb]!=bWL[aeb].r||bWL[aeb].isClose()))
)
{
bWL[aeb]&&bWL[aeb].close(cTt);
bWL[aeb]=null;
}
}
return ae;
},






est:function()
{
var ae=this,
cbO=ae.bXb,
bWL=ae.eYk,
elo=[],
aeb,
aF,
aD;
ae.eLn(false);
for(var i=0;i<ae.deB;i++)
{
aeb=1<<i;
aF=cbO[aeb]&&cbO[aeb].length;
if((ae.bba&aeb)&&aF)
{
if(!bWL[aeb])
{

elo.push(aeb);
}
else
{

aD=cbO[aeb][aF-1];
bWL[aeb].update(
{
count:aF,
content:JM[aeb].replace(aD)
}
);
}
}
}

i=-1;
(function()
{
if(++i<elo.length)
{
var kX=arguments.callee;
aeb=elo[i],
aF=cbO[aeb].length,
aD=cbO[aeb][aF-1];
(
bWL[aeb]=new ae.fcO({
type:aeb,
count:aF,
eviltype:aeb==32?aD.eviltype:"",
content:JM[aeb].replace(aD),
onclick:ae.Qm(aeb,cbO[aeb]),
onload:kX
})
).r=ae.dBn[aeb];

}
})();

return ae;
},







evS:0,
dCy:null,
fSy:function(aQO)
{
var ae=this;
if(ae.dCy)
{
clearTimeout(ae.dCy);
}
ae.evS|=aQO;
ae.dCy=setTimeout(function()
{
var dzF=false;
bi=getMainWin().location.href,
fad=ae.evS,
eTD="cgi-bin/today",
fAJ="cgi-bin/mail_list";
ae.evS=0;
ae.dCy=null;
switch(false)
{
case!(fad&1):

dzF=bi.indexOf(eTD)>-1||(bi.indexOf(fAJ)>-1&&bi.indexOf("page=0")>-1&&QMMailList.getCBInfo(getMainWin()).oMail.length==0);
reloadFrmLeftMain(true,dzF);
break;
case!(fad&2):

dzF=bi.indexOf(eTD)>-1;
reloadFrmLeftMain(true,dzF);
break;
}
if(dzF)
{
try
{
getMainWin().frameElement.setAttribute(ae.euN,"1");
}
catch(e)
{
}
}
},
100
);
return ae;
},




fah:function(fmY)
{
try
{
var ae=this,
ah=getTop(),
TM=ah.document,
cF=getMainWin(),
eDs=cF.document,
aCB=cF.frameElement;
if(fmY&&aCB.getAttribute(ae.euN)!="1")
{
TM.title!=eDs.title&&(TM.title=eDs.title);
}
else
{
var bzH=(ae.bXb[1]||{}).length,
eYd=(ae.bXb[2]||{}).length,
eWM=(ae.bXb[4]||{}).length;
if(bzH||eYd||eWM)
{
TM.title=JM.bSW.replace({
email:bzH,
sms:eYd,
plp:eWM
});
}
cF.frameElement.setAttribute(ae.euN,"0");
}
}
catch(e)
{

}

return ae;
},
fMj:function()
{
var ae=this,
ah=getTop(),
aDz=ah.document.body.childNodes;
for(var i=0,l=aDz.length;i<l;i++)
{
if(aDz[i].tagName&&ah.hasClass(aDz[i],"previewer"))
{
for(var j=0,dGl=aDz[i].childNodes,m=dGl.length;j<m;j++)
{
if(dGl[j].tagName&&ah.hasClass(dGl[j],"mask"))
{
ah.fireMouseEvent(dGl[j],"click");
break;
}
}
break;
}
}
return ae;
},




Qm:function(aQO,an)
{
var ae=this;
return function(ag)
{
preventDefault(ag);
stopPropagation(ag);

ae.read(aQO,"");
var aK=getEventTarget(ag);
if(aK.className=="notify_close")
{

return;
};
ae.fMj();
switch(aQO)
{
case 1:

if(an.length>1||!an[0].mailid)
{
goUrlMainFrm("/cgi-bin/mail_list?page=0&flag=new&s=unread&folderid=1&folderid=3&folderid=8&folderid=9&folderid=11&folderid=personal&folderid=pop&folderid=subscribe&fun=slock&loc=webpushtip,,,1&sid="+QMWebpush.sid(),true,true);
}
else
{

var bX=an[0];

rdVer(bX.mailid,1);
RD(null,bX.mailid,1,1,bX.folderid,0,0,0,'');
}
break;
case 2:


goUrlMainFrm([location.protocol,"//msgopt.mail.qq.com/cgi-bin/readtemplate?folderid=9&page=0&t=sms_list_v2&loc=webpushtip,,,1&sid=",QMWebpush.sid()].join(''),true,true);
break;
case 4:
goUrlMainFrm("/cgi-bin/bottle_panel?t=bottle&plpfrom=webmail&loc=webpushtip,,,1&sid="+QMWebpush.sid(),true,true);
break;
}
};
}
};




var JM={
bSW:TE([
'Got',
'$@$if($email$)$@$ $email$ new message(s)$@$endif$@$',
'$@$if($sms$)$@$ $sms$\u6761\u65B0\u77ED\u6D88\u606F$@$endif$@$',
'$@$if($plp$)$@$ $plp$\u4E2A\u65B0\u6F02\u6D41\u74F6$@$endif$@$'
]),

anE:T([
'<div id="webpushtipcontainer" class="webpushtipoutter"></div>'
]),

cRt:TE([
'<div class="webpushtipinner">',
'<div id="webpushtip$type$" style="visibility:hidden;" class="newmailNotifyItem $@$if($type$==2)$@$notify_sms$@$else if($type$==4)$@$notify_bottle$@$else$@$notify_mail$@$endif$@$">',
'$@$sec value$@$',
'<div class="newmailNotify">',
'<a nocheck="true" id="webpushtip$type$close" class="notify_close" href="javascript:void(0);" title="\u5173\u95ED"></a>',
'$@$if($type$==32)$@$',
'$@$if($eviltype$==1||$eviltype$==5)$@$',
'<div class="notify_type">',
'<span></span>',
'<label><em>$count$</em></label>',
'</div>',
'$@$else if($eviltype$==2)$@$',
'<div class="notify_type">',
'<span></span>',
'<label><em>$count$</em></label>',
'</div>',
'$@$endif$@$',
'$@$else$@$',
'<div class="notify_type">',
'<span></span>',
'<label><em>$count$</em></label>',
'</div>',
'$@$endif$@$',
'<div class="notify_content">$content$</div>',
'</div>',
'$@$endsec$@$',
'</div>',
'</div>'
]),

1:TE([
'<p class="notify_account">$senderNick$ $@$if($senderEmail$)$@$<span class="addrtitle notify_accountmail">&lt;$senderEmail$&gt;</span>$@$endif$@$</p>',
'<p class="notify_title">$@$if($subject$)$@$$subject$$@$else$@$(No subject)$@$endif$@$</p>',
'<p class="notify_digest">$summary$</p>'
]),

2:TE([

'<p class="notify_account">$senderNick$ $@$if($senderEmail$)$@$<span class="addrtitle notify_accountmail">&lt;$senderEmail$&gt;</span>$@$endif$@$</p>',
'<p class="notify_digest">$subject$</p>'
]),


4:T([
'<p class="notify_title">\u60A8\u6536\u5230\u4E00\u4E2A\u65B0\u7684\u6F02\u6D41\u74F6</p>'
]),

32:T([
'<p class="notify_title">There is deviation in the URL, suggest you stop to access it</p>'
])
};

















dGj.fcO=function(aq)
{
this.fh(aq);
};

dGj.fcO.prototype=
{




update:function(aq)
{
var ae=this;
if(!ae.cGT)
{
for(var k in aq)
{
ae.au[k]=aq[k];
}

ae.dL.innerHTML=JM.cRt.replace(ae.au,"value");
}
return ae;
},

isClose:function()
{
return this.cGT;
},






close:function(cTt)
{
var ae=this,
akK=function()
{
removeSelf(ae.dL.parentNode);
ae.dL=null;
};
if(!ae.cGT)
{

ae.cGT=true;
cTt?ae.fKe(akK):akK();
}
return ae;
},

fwT:function(aJ)
{
return"webpushtip"+this.au.type+(aJ||"");
},







fAP:function(cZG)
{
var ae=this,
av=ae.dL,
lZ=new qmAnimation(
{
from:1,
to:100
}
),
dGB=av.style,
fdX=-av.offsetHeight;
dGB.bottom=fdX+"px";
dGB.visibility="visible";

lZ.play(
{
speed:"slow",
onaction:function(cO,gv)
{
if(!ae.cGT)
{
var fxN=Math.floor(fdX*(1-gv));
dGB.bottom=fxN+"px";
}
},
oncomplete:function(cO,aVj)
{
!ae.cGT&&(dGB.bottom="0px");
cZG&&cZG();
}
});
return ae;
},






fKe:function(cZG)
{
var ae=this,
av=ae.dL,
lZ=new qmAnimation(
{
from:1,
to:100
}
);
lZ.play(
{
speed:"slow",
onaction:function(cO,gv)
{
setOpacity(ae.dL,Math.abs(gv-1));
},
oncomplete:function(cO,aVj)
{
cZG&&cZG();
}
});
return ae;
},

kc:function()
{
var ae=this;
addEvent(ae.dL,"click",function(ag)
{
if(!ae.cGT)
{
ae.close(true);


QMWebpush.callBack(ae,ae.au.onclick,[ag]);

}
}
);
return ae;
},





bDA:function()
{
var ae=this,
cNd="webpushtipcontainer",
be=S(cNd,ae.bM);
if(!be)
{
insertHTML(ae.bM.document.body,"beforeEnd",JM.anE);
be=S(cNd,ae.bM);
}
debug(ae.au,2)
insertHTML(be,"afterBegin",JM.cRt.replace(ae.au));
ae.dL=S(ae.fwT(),ae.bM);
ae.jc=be;
return ae;
},

fh:function(aq)
{
var ae=this;
ae.au=aq;
ae.bM=getTop();
ae.cGT=false;
return ae.bDA().fAP(function()
{
ae.kc();
QMWebpush.callBack(ae,aq.onload);
}
);
}
};






(function()
{
var ae=dGj,
ah=getTop();


ah.loadJsFile("$js_path$qmwebpush131cca.js",
true,
ah.document,
function()
{


QMWebpush.getInst().addEvent((1<<ae.deB-1)*2-1,
function(aQO,an)
{
ae.cTd(aQO,an)
.fSy(aQO)
.est()
.fah();
}
).open(ae.bba);
ae.bVB=true;
}
);

})();


ao.QMWebpushTip=dGj;

})(window)