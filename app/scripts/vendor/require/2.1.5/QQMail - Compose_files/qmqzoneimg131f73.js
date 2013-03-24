var QMQzoneImg=
{
etb:106,
eoT:1,
ago:{

},
dyQ:null,
dEO:{},
eAN:true,


bzO:null
};

QMQzoneImg.getAlbums=function(aI)
{
if(!this.eAN)
{
return this.bkx("albums",false,aI)();
}

if(!this.bzO)
{
this.Uz();
}

if(!aI.uin)
{
aI.uin=getUin();
}

var cr=this.bXj(aI.uin);
if(cr&&cr.bWt&&!aI.refresh)
{
return this.bkx("albums",true,aI)(
{
albums:cr.bWt
},true
);
}

var ae=this;
waitFor(
function()
{
return ae.bzO?true:false;
},
function(bz)
{
if(!bz||!ae.bzO.getAlbumList)
{
return ae.bkx("albums",false,aI)();
}

ae.bzO.getAlbumList({
uin:aI.uin,
callBack:ae.bkx("albums",true,aI),
errBack:ae
.bkx("albums",false,aI),




type:1,
refresh:1,
"_projectId":ae.etb,
"_pageId":ae.eoT
}
);
}
);
};

QMQzoneImg.getNewPhoto=function(aI)
{
if(!this.eAN)
{
return this.bkx("newphoto",false,aI)();
}

if(!this.bzO)
{
this.Uz();
}

if(!aI.uin)
{
aI.uin=getUin();
}

var cr=this.bXj(aI.uin);
if(cr&&cr.ewT&&!aI.refresh)
{
return this.bkx("newphoto",true,aI)(
{
data:cr.ewT
},true
);
}

var ae=this;
waitFor(
function()
{
return ae.bzO?true:false;
},
function(bz)
{
if(!bz||!ae.bzO.getNewPhoto)
{
return ae.bkx("newphoto",false,aI)();
}

ae.bzO.getNewPhoto(
{
uin:aI.uin,
callBack:ae.bkx("newphoto",true,
aI
),
errBack:ae.bkx("newphoto",false,
aI
),
refresh:1,
"_projectId":ae.etb,
"_pageId":ae.eoT
}
);
}
);
};

QMQzoneImg.getPhotos=function(aI)
{
if(!this.eAN)
{
return this.bkx("photos",false,aI)();
}

if(!this.bzO)
{
this.Uz();
}

if(!aI.uin)
{
aI.uin=getUin();
}

var cr=this.bXj(aI.uin);
if(cr&&cr.xu[aI.albumId]&&!aI.refresh)
{
return this.bkx("photos",true,aI)(
{
photos:cr.xu[aI.albumId]
},true
);
}

var ae=this;
waitFor(
function()
{
return ae.bzO?true:false;
},
function(bz)
{
if(!bz||!ae.bzO.getPhotoList)
{
return ae.bkx("photos",false,aI)();
}

ae.bzO.getPhotoList(
{
uin:aI.uin||getUin(),
id:aI.albumId,
refresh:1,
callBack:ae.bkx("photos",true,aI),
errBack:ae
.bkx("photos",false,aI),
"_projectId":this.etb,
"_pageId":this.eoT
}
);
}
);
};

QMQzoneImg.setPhotoLogic=function(flq)
{
this.bzO=flq;
};

QMQzoneImg.select=function(aI)
{
var ae=this;
ae.dyQ=aI;
new QMDialog(
{
sTitle:"QQ Album",
sBodyHtml:QMQzoneImg.ci.bEN.replace(
{
images_path:getPath("image"),
content:QMQzoneImg.ci.Ww.replace(
{
msg:QMQzoneImg.ci.bBH.replace(
{
images_path:getPath("image")
}
)
}
)
}
),
nWidth:500,

onload:function()
{
var cTc=this;
addEvent(cTc.S("qzoneimgData"),"click",function(ag)
{
var aK=ag.srcElement||ag.target;
if(aK&&aK.getAttribute("param"))
{
var dtT=aK.getAttribute("label"),
pz=aK.getAttribute("param");
if(aI&&typeof(aI.onclick)=="function")
{
aI.onclick(dtT,pz,ae
.bXj(getUin()).xu[dtT][pz]);
}
cTc.close();
}
}
);
},
onshow:function()
{
var cTc=this,
bQn=cTc.S("qzoneimgData"),
eHO=ae.dEO["scrollTop"];
eHO&&bQn&&(bQn.scrollTop=eHO);
ae.eEl(cTc);
},
onclose:function()
{
var Vh=this.S("qzoneimgAlbum"),
aD=this.S("qzoneimgData");

if(Vh)
{
ae.dEO["label"]=Vh.getAttribute("label");
}
if(aD)
{
ae.dEO["scrollTop"]=aD.scrollTop;
}
}
}
);
};


QMQzoneImg.selectInMenu=function(aq)
{
var ae=this,
cR=QMQzoneImg.dEj,
aT=aq.oContainer.ownerDocument,
az=aT.parentWindow||aT.defaultView,
hQ={
oTmpl:cR,
S:function(aJ){return S(aJ,az)}
};

ae.dyQ=aq;

aq.oContainer.innerHTML=
cR.bEN.replace(
{
images_path:getPath("image"),
content:cR.Ww.replace(
{
msg:cR.bBH.replace(
{
images_path:getPath("image")
}
)
}
)
});

var ffc=hQ.S("qzoneimgData");
addEvent(ffc,"click",function(ag)
{
var aK=ag.srcElement||ag.target;
if(aK&&aK.getAttribute("param"))
{
var dtT=aK.getAttribute("label"),
pz=aK.getAttribute("param");
if(typeof(aq.onclick)=="function")
{
aq.onclick(dtT,pz,ae
.bXj(getUin()).xu[dtT][pz]);
}
}
}
);
addEvent(ffc.parentNode,"mousedown",function(ag)
{
getTop().hideMenuEvent(ag);
}
);

QMQzoneImg.eEl(hQ);
}

QMQzoneImg.eEl=function(CG)
{
var ae=this,
cR=CG.oTmpl||QMQzoneImg.ci,
eKV=this.dyQ.labelIdx||this.dEO["label"];

this.getAlbums(
{
onload:function(rU,DQ)
{
var be=CG.S("qzoneimgData");
if(be)
{
if(!rU)
{
return be.innerHTML=cR.Ww
.replace(
{
msg:"Album load fail!"
}
);
}

var bWt=DQ;
if(!bWt||bWt.length==0)
{
return be.innerHTML=cR.Ww
.replace(
{
msg:"Album does not exist."
}
);
}

var eXa=CG.S("qzoneimgAlbum"),
bC=[],
dBw=0;

for(var i=0,aF=bWt.length;i<aF;i++)
{
var Vh=bWt[i];
(!eKV&&Vh.modifytime>bWt[dBw].modifytime
||eKV==Vh.id)&&(dBw=i);
bC.push(
{
sId:i,
sItemValue:Vh.name
}
);
}

function eDr(aJ)
{
var Vh=bWt[aJ];
eXa.setAttribute("label",Vh.id);
ae.bIB(CG,Vh.id);
}
new(getTop().QMSelect)({
oContainer:eXa,
nWidth:140,
sDefaultId:dBw,
oMenu:{
nMaxItemView:5,
nZIndex:1132,
oItems:bC
},
onselect:function(bF){
eDr(bF.sId);
}
});
eDr(dBw);
}
}
}
);
};

QMQzoneImg.bIB=function(CG,beh)
{
var be=CG.S("qzoneimgData");
cR=CG.oTmpl||QMQzoneImg.ci;

if(!be)
{
return;
}

var fuv=beh==this.dyQ.labelIdx
?this.dyQ.listIdx
:-1;

be.innerHTML=cR.Ww.replace(
{
msg:cR.bBH.replace(
{
images_path:getPath("image")
}
)
}
);

this.getPhotos(
{
albumId:beh,
onload:function(rU,Cs)
{
var be=CG.S("qzoneimgData");
if(!be)
{
return;
}
else if(!rU)
{
be.innerHTML=cR.Ww.replace(
{
msg:"Album load fail!"
}
);
}
else if(!Cs||Cs.length==0)
{
return be.innerHTML=cR.Ww
.replace(
{
msg:"Custom No image in this album. "
}
);
}
else
{
var rq=[];
for(var i=0,aF=Cs.length;i<aF;i++)
{
var ePj=fuv==i;
rq.push(cR.eGV.replace(
{
label:beh,
value:i,
url:Cs[i].pre,
thumbclass:ePj
?"left thumbon pointer attbg bd_upload"
:"left thumbnone pointer",
thumbnone:"left thumbnone pointer",
thumbover:"left thumbover pointer settingtable bd",
select:ePj
}
));
}
be.innerHTML=rq.join("");
}

}
}
);
};

QMQzoneImg.bkx=function(aA,rU,aI)
{
var cr=this.bXj(aI.uin);
return function(aG,fiD)
{
if(rU&&!fiD)
{
if(aA=="albums")
{
cr.bWt=aG[aA];
}
else if(aA=="photos")
{
cr.xu[aI.albumId]=aG[aA];
}
else if(aA=="newphoto")
{
cr.ewT=aG.data;
}
}

try
{
if(typeof(aI.onload)=="function")
{
if(aA!="newphoto")
{
aI.onload(rU,
rU?aG[aA]:aG,aI
);
}
else
{
aI.onload(rU,aG.data,aI);
}
}
}
catch(e)
{
}
if(aA=="albums")
{
if(!rU)
{
getTop().ossLog("delay","all","stat=qzoneimg&type=1&errcode=1");
}

}
};
};

QMQzoneImg.bXj=function(mU)
{
return this.ago[mU]||(this.ago[mU]={
bWt:null,
xu:{},
ewT:null
});
};

QMQzoneImg.Uz=function()
{
var qG="qmQzoneImgLogicIframe",
fcB=S(qG);

if(fcB)
{
if(fcB.getAttribute("loaded")=="true")
{
this.setPhotoLogic(F(qG).PhotoLogic||{});
}

return;
}

createBlankIframe(window,
{
id:qG,
defcss:false,
className:"",
style:"position:absolute;border:none;z-index:99999;right:0;bottom:0;width:1px;height:1px;",
header:[


'<script language="javascript" src="http://qzonestyle.gtimg.cn/ac/qzfl/release/qzfl_for_qzone.js" charset="utf-8"><\/script>',

'<script language="javascript" src="http://imgcache.qq.com/qzone/client/photo/pages/qzone_v4/script/photo_logic.js" charset="utf-8"><\/script>',
].join(""),
body:['<body style="padding:0;margin:0;"></body>'],
onload:function()
{
var bzJ=this;
setTimeout(function()
{
bzJ.setAttribute("loaded","true");
QMQzoneImg.setPhotoLogic(bzJ.contentWindow.PhotoLogic||{});
},
500
);
}
}
);
};

QMQzoneImg.ci={};

QMQzoneImg.ci.bEN=T(
[
'<div id="qzoneimgAlbum" style="padding:6px 5px 0;"></div>',
'<div class="clr"></div>',
'<div id="qzoneimgData" class="bd" style="height:270px;*height:290px;margin:4px 5px 5px;overflow-y:auto;padding:10px 10px;" >',
'$content$',
'</div>',
'<div class="dialog_operate addrtitle" style="text-align:left;">(Insert image with click)</div>'
]
);

QMQzoneImg.ci.eGV=T(
[
'<div class="$thumbclass$" label="$label$" param="$value$" select="$select$" ',
'onmouseover="',
'if ( this.getAttribute( \x27select\x27 ) != \x27true\x27 )',
'{',
'this.className=\x27$thumbover$\x27;',
'}',
'" onmouseout="',
'if ( this.getAttribute( \x27select\x27 ) != \x27true\x27 )',
'{',
'this.className=\x27$thumbnone$\x27;',
'}',
'">',
'<img class="$thumbimg$" src="$url$" label="$label$" param="$value$" style="width:100px;height:75px;"/>',
'</div>'
]
);

QMQzoneImg.ci.bBH=T(
[
'<img src="$images_path$ico_loading212fb20.gif" align="absmiddle" />',
'&nbsp;&nbsp;Loading ...'
]
);

QMQzoneImg.ci.Ww=T(
[
'<table class="addrtitle" style="width:100%;height:100%;"><tr><td align=center>',
'$msg$',
'</td></tr></table>'
]
);

QMQzoneImg.dEj=(function(){
var ei=function(){};
ei.prototype=QMQzoneImg.ci;
return new ei;
})();


QMQzoneImg.dEj.bBH=T(
[
'<img src="$images_path$ico_loading212fb20.gif" align="absmiddle" />',
'&nbsp;&nbsp;Loading'
]
);

QMQzoneImg.dEj.bEN=T(
[
'<div class="QMEditorToolPop" style="width:100%;">',
'<h1 class="qmEditorHead">',
'<div class="left">QQ Album</div>',
'<div id="qzoneimgAlbum" class="left qmEditorAlbumsSelect"></div>',
'<div class="clr"></div></h1>',
'<div id="qzoneimgData" class="qzoneimgData">',
'$content$',
'</div>',
'</div>'
]
);

QMQzoneImg.dEj.eGV=T(
[
'<div class="left qmEditorPicSelect pointer" label="$label$" param="$value$" select="$select$" ',
' onmouseover="this.className=\x27left pointer  qmEditorPicSelect bd\x27;"',
' onmouseout="this.className=\x27left pointer  qmEditorPicSelect\x27;"',
'>',
'<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="absmiddle">',
'<img class="$thumbimg$" src="$url$" label="$label$" param="$value$" style="width:100px;"/>',
'</td></tr></tbody></table>',
'</div>'
]
);


var qmQzoneImg=QMQzoneImg;