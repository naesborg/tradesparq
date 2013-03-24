













var QMTip={aEF:{}};






QMTip.close=function(aq,cmc,dJw,erh)
{

var mj=QMTip.aEF[cmc],
ag=getTop();

if(mj)
{
mj.Eh="showed";
dJw&&QMTip.cEb(cmc,aq);
erh?ag.removeSelf(ag.S(mj.domid+"rlt",mj.win)):QMTip.cYv(mj,0);
}
};






QMTip.markunshow=function(aj)
{
var ag=getTop();
ag.waitFor(function()
{
return ag.S(aj.click_id||aj.domid);
},
function(aP)
{
if(aP)
{
ag.addEvent(ag.S(aj.click_id||aj.domid),"click",function()
{
QMTip.cEb(aj.tipid,"mark","notipsclick");
});
}
}
);
};








QMTip.cEb=function(cmc,aq,FG)
{

var	ag=getTop();
if(cmc<10000)
{
ag.ossLog(aq=="mark"?"delay":"realtime","all",ag.TE("stat=tips&type=$type$&tipid=$tipid$$@$if($loc$)$@$&loc=$loc$,,,$tipid$$@$endif$@$").replace({
tipid:cmc,
type:aq,
loc:FG
}));
}
};







QMTip.show2=function(aj)
{
if(!QMTip.gr(aj))
{
return false;
}

var ag=getTop(),
Vx=aj.tipid,
Fg=aj.domid,
ap=aj.win;

ag.addEvent(ag.S(Fg+"rlt",aj.win),"mousedown",function(ah){
aj.onmousedown&&aj.onmousedown(ah);
});


ag.addEvent(ag.S(Fg+"closefork",ap),"click",function(ah){
QMTip.close("close",Vx,1);
ag.preventDefault(ah);
});

ag.addEvent(ag.S(Fg+"closetemporary",ap),"click",function(ah){
QMTip.close("close",Vx,1);
ag.preventDefault(ah);
});

ag.addEvent(ag.S(Fg+"closeforever",ap),"click",function(ah){
QMTip.close("know",Vx,1);
ag.preventDefault(ah);
});


};





















QMTip.gr=function(aj)
{

var Vx=aj.tipid,
Fg=aj.domid,
ap=aj.win,
ag=getTop(),
aw=ag.S(Fg,ap);


if(
(typeof Vx=="undefined"&&gbIsOpera)
||(QMTip.aEF[Vx]&&QMTip.aEF[Vx].Eh=="showed"&&!aj.bForceShow)
)
{
return false;
}

aj.notlog=aj.notlog||0;
aj.type=aj.type||1;
aj.images_path=ag.getPath("image");
aj.showicon=aj.showicon||"";

if(typeof aj.closetemporary=="undefined")
{
aj.closetemporary="OK";
}

{
QMTip.aEF[Vx]=aj;


aj.cFf=QMTip.cFf;


}
if(!aw)
{

if(!aj.Eh)
{
aj.Eh="unshow";
QMTip.dOH();
}
return false;
}
ag.addEvent(ap,"resize",QMTip.dwQ,1);
ag.addEvent(ap,"resize",QMTip.dwQ);




if(ag.S(Fg+"rlt",ap))
{
return false;
}



if(!ag.insertHTML(ap.document.body,"afterBegin",this.bJ.aVg.replace(aj)))
{
ag.doPageError("insertHTML false in qmtip","","");
delete QMTip.aEF[Vx];
return false;
}

aw.parentNode.insertBefore(ag.S(Fg+"rlt",ap),aw);
aj.Eh="showing";

this.cFf(aj);
this.cYv(aj,1);

var dEY=ag.S(Fg+"rlt",ap);
ag.addEvent(dEY,"click",ag.stopPropagation);
ag.addEvent(dEY,"mousedown",ag.stopPropagation);

return true;

};


QMTip.show=function(aj)
{





























































if(getTop().getLocale()!="zh_CN")
{
return false;
}
if(!QMTip.gr(aj))
{

return false;
}


var ag=getTop(),
Vx=aj.tipid,
Fg=aj.domid,
dYv=aj.bClickClose||true,
ap=aj.win,
aw=ag.S(Fg,ap),
Qg=function(){
QMTip.close("close",Vx,0,1);
};
if(aj.auto_hide==1){
ag.addEvent(aw,"click",Qg);
}

ag.addEvent(ag.S(Fg+"closefork",ap),"click",function(ah){
QMTip.close("close",Vx,1);
ag.preventDefault(ah);
});










ag.addEvent(ag.S(Fg+"closetemporary",ap),"click",function(ah){
QMTip.close("close",Vx,1);
ag.preventDefault(ah);
});

ag.addEvent(ag.S(Fg+"closeforever",ap),"click",function(ah){
QMTip.close("know",Vx,1);
ag.preventDefault(ah);
});



ag.E(ag.GelTags("a",ap.document),function(Zz)
{
if(Zz.getAttribute("autohide")=="1")
{
ag.addEvent(Zz,"click",Qg);
}
});


aj.click_id&&ag.addEvent(ag.S(aj.click_id,ap),"click",function(ah)
{
dYv&&Qg();
QMTip.cEb(Vx,"mark","clicktipslink");
});

QMTip.cEb(Vx,"mark","tipshow");
};







QMTip.cYv=function(aj,gJ)
{
try
{
var ag=getTop(),
bzy=ag.S(aj.domid+"tipcontainer",aj.win||aj.doc),
jB=new(ag.qmAnimation)(
{
from:1,
to:100
}
);
jB.play(
{
speed:"slow",
onaction:function(bX,fR)
{
ag.setOpacity(bzy,Math.abs((gJ?0:-1)+fR));
},
oncomplete:function(bX,ate)
{
if(gJ)
{
ag.setOpacity(bzy,1);
}
else
{

ag.removeSelf(ag.S(aj.domid+"rlt",aj.win));
}
}
});
}
catch(e)
{


ag.removeSelf(ag.S(aj.domid+"rlt"));
}
};





QMTip.dOH=function()
{
var ae=arguments.callee,
aEF=QMTip.aEF,
gF=0;
ae.Vv=(ae.Vv||0)+1;
if(ae.wI)
{
clearTimeout(ae.wI);
}
for(var aV in aEF)
{
if(aEF[aV].Eh=="unshow")
{
++gF;
QMTip.show(aEF[aV]);
}
}
if(gF&&ae.Vv<300)
{
ae.wI=setTimeout(ae,1000);
}
};






QMTip.cFf=function(aj)
{
var ag=getTop(),
ap=aj.win,
Fg=aj.domid,
ae=arguments.callee,
aw=ag.S(Fg,ap,ap),
aS=ag.S(Fg+"rlt",ap),
bPr=ag.S(Fg+"newtips",ap),
bzy=ag.S(Fg+"tipcontainer",ap),
ckh=ag.bodyScroll(ap,'clientWidth'),
euE=ag.bodyScroll(ap,'clientHeight');


if(!(aw&&aS))
{
return;
}

aj.height_offset=aj.height_offset||0;

var	byg=ag.calcPos(aw),
ty=ag.calcPos(aS),
cCw=bzy.offsetWidth,
coT=bzy.offsetHeight;


if(!aj.arrow_direction)
{

aj.arrow_direction=(byg[0]-coT-aj.height_offset)<10?"down":"up";
}

if(aj.arrow_direction!="none")
{
ag.show(Fg+aj.arrow_direction,0,ap);
}
else
{
ag.show(Fg+"up",0,ap);
ag.show(Fg+"down",0,ap);
}


var dcE=aj.height_offset;
if(aj.arrow_direction=="down")
{
dcE+=byg[2];
}
else
{
dcE+=byg[0]-coT;
}

var cNn=dcE-ty[0];
if(aj.top!=cNn)
{
aj.top=cNn;
bPr.style.top=cNn+"px";
}


var bYA=byg[3]+(aj.tip_offset||0),
dEG=bYA+cCw;


if(typeof aj.tip_offset=="undefined")
{
if(dEG+10>ckh)
{
bYA-=dEG+10-ckh;
}
if(bYA<10)
{
bYA=10;
}
}
var cPD=bYA-ty[3];
if(aj.left!=cPD)
{


aj.left=cPD;
bPr.style.left=cPD+"px";
}



var dTw=(byg[3]-ty[3])-aj.left,
dwI=dTw+(aj.arrow_offset||0),
dpR=ag.S(Fg+"up",ap),
dCn=ag.S(Fg+"down",ap);

dpR&&(dpR.style.marginLeft=dwI+"px");
dCn&&(dCn.style.marginLeft=dwI+"px");

};




QMTip.dwQ=function()
{

var ae=arguments.callee;
if(ae.wI)
{
clearTimeout(ae.wI);
}
ae.wI=setTimeout(function(){
var aEF=QMTip.aEF;
for(var aV in aEF)
{
if(aEF[aV].Eh=="showing")
{
aEF[aV].cFf(aEF[aV]);
}
}
ae.wI=null;
},200);
};





QMTip.showMailList=function(ki,dF,cQ,Ci,Bp)
{
var Fg="maillist",
cKc=Fg+"newtips",
ag=getTop();

if(!ki)
{
ag.removeSelf(ag.S(cKc,dF));
return;
}

var	cg=dF.body,
aA={
domid:Fg,
doc:dF,
type:2,
msg:'<div class="addrtitle">Remark:</div>'+cQ,
arrowOffset:10,
icon:"tipsico_note",
images_path:ag.getPath("image")
},
bPr=ag.S(cKc,dF);
ag.removeSelf(bPr);
ag.insertHTML(cg,"beforeEnd",QMTip.bJ.aVg.replace(aA));

var ZR=ag.bodyScroll(dF,'scrollLeft')+Ci-15,
Xk=Bp,
ckh=ag.bodyScroll(dF,'clientWidth'),

bPr=ag.S(cKc,dF),
bzy=ag.S(Fg+"tipcontainer",dF),
cCw=bzy.offsetWidth,
coT=bzy.offsetHeight;

if(ZR+cCw>ckh)
{
ZR-=ZR+cCw-ckh+5;
}

if(Xk-coT>10)
{
ag.show(Fg+"up",0,dF);
Xk-=coT+13;
}
else
{
ag.show(Fg+"down",0,dF);
Xk+=5;
}
Xk+=ag.bodyScroll(dF,'scrollTop');

bPr.style.left=ZR+"px";
bPr.style.top=Xk+"px";

QMTip.cYv(aA,1);

};











































































































QMTip.bJ={
aVg:getTop().TE([

'$@$if($type$==1||$type$==4)$@$<span id="$domid$rlt" style="position:relative;cursor:default;z-index:1000;">$@$endif$@$',
'<div unselectable="on" id="$domid$newtips" class="newtips" style="top:$@$eval $top$||-999$@$px;left:$@$eval $left$||-999$@$px;xwidth:$@$eval $width$ $@$px;">',
'<div unselectable="on" id="$domid$tipcontainer" class="tipcontainer">',
'$@$if($type$==1||$type$==2)$@$<span id="$domid$up" class="arrowup" style="margin-left:$arrowOffset$px;"></span>\n$@$endif$@$',
'<div unselectable="on" class="container">',
'<div unselectable="on" class="contentcontainer">',
'<div unselectable="on" class="content" style="position:relative;zoom:1;">',
'<div unselectable="on" class="tipsicon $showicon$">',
'<span unselectable="on" class="tipsico $@$if($icon$)$@$$icon$$@$else$@$tipsico_normal$@$endif$@$" ></span>',
'</div>',
'$@$if($close_fork$)$@$<a class="btnClose" id="$domid$closefork" href="javascript:;"></a>$@$endif$@$',
'<div class="tipstxt">',
'$msg$',
'</div>',
'<div unselectable="on" class="tipsrightpanel" style="font-size:12px;color:#000;font-weight:normal;">',
'$@$if($type$==1||$type$==3)$@$<div  unselectable="on" class="opertbar">$operation$<a style="text-decoration:none;color:#000;cursor:default">&nbsp;&nbsp;</a>$@$if($closeforever$)$@$<a class="" id="$domid$closeforever" title="" href="javascript:;" >$closeforever$</a>$@$else if($closetemporary$)$@$<a class="" style="" id="$domid$closetemporary" title="" href="javascript:;" >$closetemporary$</a>$@$endif$@$</div>$@$endif$@$',
'</div>',
'<div unselectable="on" class="clr"></div>',
'</div>',
'</div>',
'</div>',
'$@$if($type$==1||$type$==2)$@$<span id="$domid$down" class="arrowdown"  style="margin-left:$arrowOffset$px;"></span>$@$endif$@$',
'</div>',
'<div unselectable="on" class="tipbackground"></div>',
'<div unselectable="on" class="oneheight" ></div>',
'</div>',
'$@$if($type$==1||$type$==4)$@$</span>$@$endif$@$'
])
};