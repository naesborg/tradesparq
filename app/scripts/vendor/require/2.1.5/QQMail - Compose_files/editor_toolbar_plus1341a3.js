







(function(A,aT)
{
A.extend(QMEditor.CONST.LANGUAGE.zh_CN,{


FUN_MO:"Insert emotion",
FUN_MO_LABEL:"Emotion"
});

A.extend(QMEditor.CONST.getTemplate(),
{
MENU_MO:A.T(
[
'<div class="qmEditorMenuPanel" unselectable="on" ><span>$loading$</span></div>'
]
)
});



QMEditor.FUNCLIB.Mo=QMEditor.FUNCLIB.inheritFrom(function(ci)
{











this.setBindEditor(ci.editor);
var ae=this,
jl=ae.getBindEditor().getLanguage();

ae.setId("Mo");
ae.setFuncConfig((ci.oParamSet.funcConfig||{})[ae.hP]||{});
ae.setUiConfig(
{
arrowPos:ae.getFuncConfig().arrowPos||224,
title:jl.FUN_MO,
label:jl.FUN_MO_LABEL
});

},QMEditor.FUNCLIB.MENU
);

QMEditor.FUNCLIB.Mo.prototype.getMenuUI=function(fQ)
{
var cH=fQ.nWidth=this.getFuncConfig().width||448;
return A.T('<div id="mo_cntr" style="width:$width$px"><div class="qmEditorToolLoading"><img align="absmiddle" src="$images_path$ico_loading212fb20.gif">&nbsp;&nbsp;Loading</div></div>').replace(
{
width:cH,
images_path:A.getPath("image",true)
}
);
};

QMEditor.FUNCLIB.Mo.prototype.initMenu=function(cY)
{
if(!window.QMMo)
{
var ae=this;
A.loadJsFile("$js_path$/com/kits/qmeditor/base/release/plus/mo133d9c.js",true,document,function()
{
if(!window.QMMo)
{
cY.S("mo_cntr").innerHTML="<div>Load failed</div>";
}
else
{
ae.akx(cY);
}
}
);
}
else
{
this.akx(cY);
}
};

QMEditor.FUNCLIB.Mo.prototype.akx=function(cY)
{
var ae=this,
bmt="stat=nothing&locval=editor,plus,mo,1",
bwu=ae.getFuncConfig(),
bsl=A.ossLog;

new QMMo().setup(
{
container:cY.S("mo_cntr"),
maxWidth:bwu.width-10,
maxHeight:bwu.height
}
);

A.addEvent(cY.S("mo_cntr"),"click",function(ah)
{
var bK=A.getEventTarget(ah).getAttribute("param");
if(bK)
{
ae.hideMenu(true);
ae.getBindEditor().insertImage(bK);
bsl&&bsl("delay","all",bmt+(bK.match(/mo\/DEFAULT2/gi)?"0":"1"));
}
}
);

bsl&&bsl("delay","all",bmt);
};































































(function(){QMEditor.setupFunc();})();
}
)(QMEditorAdapter);
(function(A,aT)
{
A.extend(QMEditor.CONST.LANGUAGE.zh_CN,{
FUN_PHOTO:"Upload image",
FUN_PHOTO_LABEL:"Image",
FUN_SCREENSNAP:"Capture Screen",
FUN_SCREENSNAP_SETUP_TIP:"\u8BF7\u70B9\u51FB\u5B89\u88C5\u622A\u5C4F"+A.QMAXInfo.getTitle()+"\r\u5B89\u88C5\u540E\u60A8\u5C31\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u622A\u5C4F\uFF0C\u5E76\u53D1\u9001\n\u7ED9\u60A8\u7684\u597D\u53CB\u4E00\u8D77\u4EA4\u6D41\u5206\u4EAB\u3002",
FUN_SCREENSNAP_LABEL:"Capture",
FUN_MUSIC:"Insert Background Music",
FUN_MUSIC_LABEL:"Music",
FUN_MUSIC_LABEL_ADDED:"Added",

COMM_CONFIRM:"OK",
COMM_CANCEL:"Cancel",
COMM_HELP:"Help",

PO_LOCAL_PHOTO:"Upload local file",
PO_LOCAL_DESC:"( \u8BF7\u70B9\u51FB\u201C"+(A.gbIsIE||A.gbIsFF||A.gbIsQBWebKit?"\u6D4F\u89C8":(A.gbIsOpera?"\u9009\u62E9":"\u9009\u62E9\u6587\u4EF6"))+"\u201D\uFF0C\u5728\u60A8\u7535\u8111\u4E2D\u9009\u62E9\u60A8\u8981\u4E0A\u4F20\u7684\u7167\u7247\u3002)",
CLIP_LOCAL_DESC:"( \u8BF7\u590D\u5236\u4EE5\u4E0B\u8DEF\u5F84\uFF0C\u70B9\u51FB\u201C"+(A.gbIsIE||A.gbIsFF||A.gbIsQBWebKit?"\u6D4F\u89C8":(A.gbIsOpera?"\u9009\u62E9":"\u9009\u62E9\u6587\u4EF6"))+"\u201D\uFF0C\u5C06\u8DEF\u5F84\u7C98\u8D34\u5230\u6587\u4EF6\u540D\u4E0A\u3002)",
PO_LOCAL_INPUT:"Select Image: ",
PO_LOCAL_OK:"Upload Now",
PO_NET_PHOTO:"Image ",
PO_NET_DESC:"( Please input URL of the image. )",
PO_NET_INPUT:"Url of image",
PO_NET_OK:"Insert Now",
PO_QQALBUM_DESC:"Select from QQ Album",
PO_ATTACH_PHOTO:"Select from Favorites",

PO_DLG_TITLE:"Upload image",
PO_DLG_UPLOADING:"Uploading image...",
PO_DLG_UPLOADFAIL:"Failed to upload the image. ",
PO_DLG_UPLOADFAIL_INFO:"\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\uFF1A\u60A8\u4E0A\u4F20\u7684\u56FE\u7247\u5927\u5C0F($curSize$)\u8D85\u8FC7\u4E86\u6700\u5927\u9650\u5236($allowSize$)\u3002",
PO_DLG_INSERTING:"Loading image...",
PO_DLG_INSERTINGFAIL:"Failed to load image!",

MC_LOADING:"Music loading...",
MC_REPLACE_TIP:"You have added background music for the message. Do you want to replace it?",

SCREENSNAP_FAIL:"Failed to capture screen. ",
SCREENSNAP_SAVEFAIL:"Failed to save the snip. ",
UPLOADER_VERSION_LOW:"\u4E0A\u4F20"+A.QMAXInfo.getTitle()+"\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u5347\u7EA7\uFF01"
});

A.extend(QMEditor.CONST.getTemplate(),
{
MENU_PHOTO:A.T(
[
'<div style="width:330px;height:140px;" hideFocus="true"></div>'
]
),

MENU_CLIPIMG:A.T(
[
'<div style="width:360px;height:160px;" hideFocus="true"></div>'
]
),
cEO:A.T(
[
'<body unselectable="on"></body>'
]
),
cBs:A.T(
[
'<table cellspacing="0" cellpadding="0" border="0" width="100%" unselectable="on" ><tr>',
'<td class="QMEditorTabEmptyLeft" unselectable="on" nowrap >&nbsp;</td>',
'<td style="$uploadDisp$" unselectable="on" nowrap>',
'<div param="localPhoto" class="QMEditorTabSel" unselectable="on">$langLocalPhoto$</div>',
'</td>',
'<td class="QMEditorTabEmptyRight" unselectable="on" nowrap >&nbsp;</td>',
'</tr></table>',
'<div class="QMEditorPoPanel" unselectable1="on" style="$uploadDisp$" >',
'<iframe name="QMEditorPhotoIframe$iframeId$"  src="javascript:\'\'" style="display:none;" onload="if(window.QMEditorPhotoLoaded)QMEditorPhotoLoaded(this);"  ></iframe>',
'<form action="$actionSrc$" enctype="multipart/form-data" method="post" target="QMEditorPhotoIframe$iframeId$" >',
'<div class="QMEditorPoInputLabel" unselectable="on">$langLocalInput$&nbsp;',
'<input type="file" name="UploadFile" onkeydown="return false;" />',
'<input type="hidden" name="sid"  value="$sid$" />',
'<input type="hidden" name="fun" value="add" />',
'<input type="hidden" name="mode" value="download" />',
'<input type="hidden" name="widthlimit" value="$widthlimit$" />',
'<input type="hidden" name="heightlimit" value="$heightlimit$" />',
'<input type="hidden" name="sizelimit" value="$sizelimit$" />',
'</div>',
'<div style="background-color:#F6F4CE; padding:5px 10px; border:1px solid #c2bf86;">',
'<div class="QMEditorPoDesc" unselectable="on" >$langLocalDesc$</div>',
'<div class="QMEditorPoDesc" >Url :<input style="width:300px; border:0 none; background-color:#F6F4CE; padding:0 3px;" type="text" value="$clipimgpath$"/></div>',
'</div>',
'</form>',
'<div class="QMEditorPoButton" unselectable="on" >',
'<button class="qmEditorButton2" param="localok" >$langLocalOK$</button>&nbsp;',
'<button class="qmEditorButton1" param="cancel" >$langCancel$</button>',
'</div>',
'</div>'
]
),

DIALOG_UPLOADIMG:A.T(
[
'<div style="padding:40px 0;font:normal 12px;text-align:center">',
'<div id="uploading">',
'<img src="$imgPath$ico_loading2.gif" width="32" height="32" align=absmiddle style="margin:0 4px 0 0" />$langUploading$',
'<span id="uploadProcess"></span>',
'</div>',
'<div id="uploadFail" style="height:32px;line-height:32px;display:none;" >',
'$langUploadFail$',
'</div>',
'</div>'
]
),
MENU_MUSIC:A.T(
[
'<div class="qmEditorMenuPanel" unselectable="on" ><span>$loading$</span></div>'
]
),
PO_DLG_UPLOADING:A.TE(
[
'Upload In progress:',
'$@$if($cnt$ > 1)$@$',
'$idx$/$cnt$',
'$@$endif$@$',
'...'









]
)
});




QMEditor.qM=function(TD)
{
this.eO=TD;
};

QMEditor.qM.nb=function(TD)
{
if(!TD)
{
return null;
}
if(!TD.bca)
{
TD.bca=new QMEditor.qM(TD);
}
return TD.bca;
};

QMEditor.qM.prototype.bwq=function(bNE)
{
var aZ=this.eO,
ic=aZ.getTemplate(),
fc=aZ.getLanguage();

new(A.QMDialog)(
{
sId:"upload",
sTitle:fc.PO_DLG_TITLE,
sBodyHtml:ic.DIALOG_UPLOADIMG.replace(
{
imgPath:A.getPath("image"),
langUploading:fc.PO_DLG_UPLOADING,
langUploadFail:fc.PO_DLG_UPLOADFAIL
}
),
nWidth:400,

bAnimation:false,
onclose:function()
{
aZ.loadLastRange();
A.callBack(bNE);
}
}
);
};

QMEditor.qM.prototype.bQu=function()
{
A.QMDialog("upload","close");
};

QMEditor.qM.prototype.bIb=function(aM)
{
var dV=A.QMDialog("upload");
var aGb=dV&&dV.S("uploadFail");
if(!aGb)
{
return;
}

var jl=this.eO.getLanguage();
aGb.innerHTML=aM?A.T(jl.PO_DLG_UPLOADFAIL_INFO)
.replace(aM):jl.PO_DLG_UPLOADFAIL;

A.show(aGb,true);
if(dV&&dV.S("uploading"))
{
A.show(dV.S("uploading"),false);
}
};

QMEditor.qM.prototype.aWx=function(bEp)
{
var dV=A.QMDialog("upload");
var bfW=dV&&dV.S("uploadProcess");
if(bfW)
{
bfW.innerHTML=bEp;
if(dV&&dV.S("uploading"))
{
A.show(dV.S("uploading"),true);
}
if(dV&&dV.S("uploadFail"))
{
A.show(dV.S("uploadFail"),false);
}
}
};

QMEditor.qM.prototype.sP=function(beN)
{
var arm=this.aau();
if(!arm)
{
return;
}

var Sg=function(aP)
{
return function()
{
A.debug(["_oScreenSnapObj._fEventCreater",aP]);
if(typeof(beN)=="function")
{
beN(aP);
}
aP&&A.ossLog("delay","all","stat=nothing&locval=editor,plus,screensnap,10");
};
};

arm.OnCaptureFinished=Sg(true);
arm.OnCaptureCanceled=Sg(false);
arm.DoCapture();
};

QMEditor.qM.prototype.aau=function()
{
if(!this.bhh)
{
A.debug("_getScreenSnapObj");
if(A.detectActiveX(0,1))
{
this.bhh=A.createActiveX(0);
}
}

return this.bhh;
};

QMEditor.qM.prototype.bIV=function()
{
return this.aja;
};

QMEditor.qM.prototype.dik=function()
{
this.aja="";
};

QMEditor.qM.prototype.aEV=function()
{
return this.aau()&&this.aau().IsClipBoardImage;
};

QMEditor.qM.prototype.aIT=function(TW)
{
var fc=this.eO.getLanguage();
if(!this.aau())
{
return false;
}

if(!this.aEV())
{
if(TW)
{
alert(fc.SCREENSNAP_FAIL);
}
return false;
}

this.aja=this.aau().SaveClipBoardBmpToFile(1);

if(!this.aja)
{
if(TW)
{
alert(fc.SCREENSNAP_SAVEFAIL);
}
return false;
}

return true;
};

QMEditor.qM.prototype.bOJ=function(TW,
BU)
{
return this.aIT(TW)
&&this.aTN(null,TW,BU);
};

QMEditor.qM.prototype.aTN=function(ahu,
TW,BU)
{
var ae=this,
aZ=ae.eO;

if(!A.detectActiveX(2,1))
{
if(TW)
{
alert(aZ.getLanguage().UPLOADER_VERSION_LOW);
}
return false;
}

if(!ae.aja&&!ahu)
{
return false;
}



if((!A.gbIsIE||A.gnIEVer!=6)&&ahu)
{

return false;
}

if(!ae.Uf)
{
ae.Uf=A.createActiveX(2);


}


var oy=ae.Uf,
bbZ=false;

function bgV(aP,aM)
{
if(!bbZ)
{
bbZ=true;

oy.StopUpload();

if(typeof(BU)=="function")
{
BU(aP?true:false,aM);
}
}
};
ae.bwq(bgV);

oy.StopUpload();
oy.ClearHeaders();
oy.ClearFormItems();

oy.URL=aZ.getPhotoActionSrc();
oy.OnEvent=function(au,aJr,Bj,Gq,apk)
{
ae.bOE(au,aJr,Bj,Gq,apk,
bgV
);
}

oy.AddHeader("Cookie",document.cookie);
oy.AddFormItem("fun",0,0,"add");
oy.AddFormItem("sid",0,0,A.getSid());
oy.AddFormItem("mode",0,0,"download");
oy.AddFormItem("from",0,0,ahu?"":"snapscreen");

var ml=aZ.getPhotoConfig()||{};
oy.AddFormItem("widthlimit",0,0,ml.widthlimit||0);
oy.AddFormItem("heightlimit",0,0,ml.heightlimit||0);
oy.AddFormItem("sizelimit",0,0,ml.sizelimit||0);

if(ahu)
{
oy.AddFormItemObject(ahu);
}
else
{
oy.AddFormItem("UploadFile",1,4,ae.aja);
}

oy.StartUpload();
return true;
};

QMEditor.qM.prototype.bOE=function(au,aJr,Bj,
Gq,apk,BU)
{
switch(aJr)
{
case 1:

return BU(false,
{
errCode:Bj
}
);
case 2:

this.aWx(parseInt(Bj*90/Gq)+"%");
return;
case 3:

if(this.Uf.ResponseCode!="200")
{
return BU(false,
{
errCode:Bj
}
);
}

this.aWx("100%");
this.agC(this.Uf.Response,
BU
);
}
};

QMEditor.qM.prototype.agC=function(akF,
BU)
{
var Es=akF||"",
gs=Es.indexOf('On_upload("'),
fq=Es.indexOf('");',gs),
abG=(gs!=-1&&fq!=-1)?Es.substring(gs+11,fq):"err";
if(abG!="err")
{
return BU(true,
{
imgUrl:abG
}
);
}

gs=Es.indexOf('On_upload_Fail("');
fq=Es.indexOf('");',gs);

function FC(bC)
{
bC=parseInt(bC);
return'<span style="color:red;" >'
+(isNaN(bC)?"5M":(parseInt(100*parseInt(bC)
/(1024*1024))/100))+"M</span>";
};

if(gs!=-1&&fq!=-1)
{
abG=Es.substring(gs+16,fq)
.replace(new RegExp("\"","ig"),"").split(",");
return BU(false,
{
curSize:FC(abG[0]),
allowSize:FC(abG[1])
}
);
}

return BU(false);
};


QMEditor.FUNCLIB.MENUIMAGE=QMEditor.FUNCLIB.inheritFrom(function()
{
this.setId("MENUIMAGE");

this.asJ=true;
},QMEditor.FUNCLIB.MENU
);

QMEditor.FUNCLIB.MENUIMAGE.prototype.insertImage=function(aFf)
{
this.getBindEditor().insertImage(aFf);
};

QMEditor.FUNCLIB.MENUIMAGE.prototype.aTP=function()
{
this.asJ=false;
};

QMEditor.FUNCLIB.MENUIMAGE.prototype.cxn=function()
{
return this.asJ!=true;
};

QMEditor.FUNCLIB.MENUIMAGE.prototype.aJt=function(aP,
aM)
{
if(!this.asJ)
{
this.asJ=true;

var iG=QMEditor.qM.nb(this.getBindEditor());

if(aP)
{
iG.bQu();
this.insertImage(aM.imgUrl);
}
else
{
iG.bIb(aM);
}
}
};




var buN=QMEditor.prototype.insertImage,
aNn=function(gh,ak)
{
var aHI=50*1024*1024,
vS=A.finds("img[filesize]",ak),
kB=gh;

for(var i=0;i<vS.length;i++)
{
kB+=parseInt(vS[i].getAttribute("filesize"));
}
return kB<aHI;
}

QMEditor.prototype.insertImage=function(be,eN)
{
var ae=this,
aJW=be.match(/filesize=.*&/),
alX=aJW&&aJW[0],
Tk=alX&&parseInt(alX.split('=')[1]);

if(!aNn(Tk,ae.getEditWin()))
{
A.showError("Photos size can not exceed 50M.");
return;
}
buN.call(ae,be,function(be,nf)
{
Tk>0&&nf&&nf.setAttribute("filesize",Tk);
typeof eN=="function"&&eN.call(ae,be);
})
};


QMEditor.FUNCLIB.Photo=QMEditor.FUNCLIB.inheritFrom(function(ci)
{
if(!ci)return;
this.setBindEditor(ci.editor);
var ae=this,
jl=ae.getBindEditor().getLanguage(),
Qt=ae.aeJ=[];

ae.setId("Photo");
ae.setFuncConfig((ci.oParamSet.funcConfig||{})[ae.getId()]||{});

ae.getBindEditor().getPhotoActionSrc()&&Qt.push(
{
sId:"upload",
sItemValue:jl.PO_LOCAL_PHOTO
}
);
(ae.getFuncConfig().url!==false)&&Qt.push(
{
sId:"url",
sItemValue:jl.PO_NET_PHOTO
}
);
(ae.getFuncConfig().album===true)&&Qt.push(
{
sId:"qzone",
sItemValue:jl.PO_QQALBUM_DESC
}
);
(ae.getFuncConfig().attach===true)&&Qt.push(
{
sId:"attach",
sItemValue:jl.PO_ATTACH_PHOTO
}
);



var lq=QMEditor.getTopWin().g_uin,
aLm=QMEditor.getTopWin().goUserInfo.get("WEBAPNSENABLE"),
bvu=QMEditor.getTopWin().goUserInfo.get("IOSWEBAPPVER"),
bve=QMEditor.getTopWin().goUserInfo.get("ANDROIDWEBAPPVER");






if(ae.getFuncConfig().iPhoneUpload===true)
{
if(aLm=="1"&&(bvu!="0"||bve!="0"))
{
Qt.push(
{
sId:"webapns",
sItemValue:"Upload from iPhone"
}
);
QMEditor.getTopWin().requestShowTip("QMEditorToolBarPlusArea",48,QMEditor.getTopWin().getMainWin());
}
}
this.setUiConfig(
{
moreBtn:Qt.length>1,
title:jl.FUN_PHOTO,
label:jl.FUN_PHOTO_LABEL
});

},QMEditor.FUNCLIB.MENUIMAGE
);

QMEditor.FUNCLIB.Photo.prototype.getMenuItems=function(fQ)
{
var ae=this;
if(fQ)
{
if(fQ.sName=="more")
{
fQ.nWidth=getTop().getLocale()=="zh_CN"?150:170;

return ae.aeJ.slice(1);
}
else if(!fQ.sName&&ae.getUiType()=="text")
{

}
else
{
return QMEditor.FUNCLIB.MENU.prototype.getMenuItems.call(this,fQ);
}
}
else if(!ae.bnP&&ae.aeJ.length<2)
{
return QMEditor.FUNCLIB.MENU.prototype.getMenuItems.call(this,fQ);
}
else
{
return ae.aeJ;
}
};



QMEditor.FUNCLIB.Photo.prototype.getMenuUI=function(fQ)
{
var oL=fQ||{},ae=this;

switch(fQ.sName)
{
case"qzone":
oL.nWidth=364;
oL.nArrowPos=182;
return A.getRes('<div id="qzone" class="qzone_container" style="text-align:center;"><div style="text-align:center; margin:110px 0;"><img src="$images_path$ico_loading212fb20.gif" align="absmiddle" />&nbsp;&nbsp;Loading</div></div>');
case"attach":
oL.nWidth=364;
oL.nArrowPos=fQ.nWidth/2;
return A.getRes([
'<div class="QMEditorToolPop">',
'<h1 class="qmEditorHead">Favorites</h1>',
'<div class="qmEditorPicContent" id="content">',
'<div class="clr" id="contentclr"></div>',
'<div class="qzone_container" style="text-align:center; height:132px; padding-top:110px;"><img src="$images_path$ico_loading212fb20.gif" align="absmiddle"/>&nbsp;&nbsp;Loading</div>',
'</div>',
'</div>'
]);
case"webapns":
oL.nWidth=384;
oL.nArrowPos=fQ.nWidth/2;
oL.fMenuClose=function()
{
ae.atg=false;
ae.Hy&&clearInterval(ae.Hy);
ag.QMAjax.send(getTop().T("/cgi-bin/webapnscheck?sid=$sid$&action=clearindex").replace(
{
sid:getTop().getSid()
}
),
{
method:"POST",
onload:function()
{}

});
}
var ag=QMEditor.getTopWin(),

aLm=QMEditor.getTopWin().goUserInfo.get("WEBAPNSENABLE"),
aNY=parseInt(QMEditor.getTopWin().goUserInfo.get("IOSWEBAPPVER"),10)||0,
bup=QMEditor.getTopWin().goUserInfo.get("IOSWEBAPPVERNEW"),
aKp=parseInt(QMEditor.getTopWin().goUserInfo.get("ANDROIDWEBAPPVER"),10)||0,

aV=(new Date()).valueOf(),

bvE=[];


function checkImgExist(bda)
{

var aNg=A.window["goIphonePath"]||[];


for(var i=0;i<aNg.length;i++)
{
if(bda==aNg[i])
{

return true;
}
}

return false;
}

function moveProcess(an,aAB,hB)
{
var qH=1,wN=(aAB-1)*hB,gW=5,
bnL=setInterval(function(){
if(wN<aAB*hB-gW)
{
wN+=qH*gW;
an.style.width=wN+"%";
qH++;
}
else
{
clearInterval(bnL);
}
},500);

}


var zR=new(A.QMDialog)(
{
sId:"iphoneuploadimg",
sTitle:"Upload from iPhone",
sBodyHtml:A.TE([
'<div class="QMEditorToolPop">',

'<div class="qmEditorPicContent" id="content">',
'<div id="loading" style="padding-bottom:10px;">',
'<div class="iphoneupload_phone_big"></div>',
'$@$if($webappver$==1)$@$',
'<p class="iphoneupload_help">Click your phone push notification, and select the photos you want to upload.</p>',
'<p class="iphoneupload_help">If you did not receive reminders for a long time,please manually open the QQMail app.</p>',
'$@$else$@$',
'<p class="iphoneupload_help">Please <a href="http://itunes.apple.com/cn/app/id473225145?mt=8&ls=1" target="_blank">update</a> your QQMail app.</p>',
'$@$endif$@$',
'</div>',
'<div id="loaded" class="iphoneuploading" style="display:none;">',
'<div class="iphoneupload_thumb" ><img id="showimg" src="#"/></div>',
'<div class="iphoneupload_bar">',
'<span class="iphoneupload_icon_iphone"></span>',
'<div class="iphoneupload_progress" style="overflow:hidden">',
'<div id="uploadprocess" class="iphoneupload_progress_fill" style="width:5%;"></div>',
'</div>',
'<span class="iphoneupload_icon_imac"></span>',
'</div>',
'<div id="uploadnum" style="display:none"><span id="current"></span>/<span id="total"></span></div>',
'</div>',
'</div>',
'</div>'
]).replace(
{

webappver:(aNY==1||aKp==1)?1:0
}
),
nWidth:384,

bAnimation:false,
onload:function()
{

},
onclose:function()
{
ae.atg=false;
ae.Hy&&clearInterval(ae.Hy);
ag.QMAjax.send(getTop().T("/cgi-bin/webapnscheck?sid=$sid$&action=clearindex").replace(
{
sid:getTop().getSid()
}
),
{
method:"POST",
onload:function()
{}

});
}
}
);

ae.atg=true;
ae.aeD=0;
ae.cBU=0;
ae.BM=false;


(aNY=="1"||aKp=="1")&&ag.QMAjax.send(ag.T("/cgi-bin/webapnscheck?sid=$sid$&key=$key$").replace(
{
sid:ag.getSid(),
key:aV
}
),
{
method:"POST",
onload:function()
{


if(ae.Hy)
{

clearInterval(ae.Hy);
ae.Hy=null;
}

ae.Hy=setInterval(function()
{





ag.QMAjax.send(ag.T("/cgi-bin/webapnscheck?sid=$sid$&key=$key$&action=checkappimg").replace(
{
sid:ag.getSid(),
key:aV
}
),
{
method:"POST",
onload:function(aP,bt)
{

if(aP&&ae.atg)
{
var aF=evalValue(bt),VQ="",aN,
aOm=aF.Thumbnailurl||[],
nc=aF.total||1,
aKH=aF.imgurl||[],
Zh=zR.S("uploadprocess"),



Kf=aF.done,


brg=100/nc;

zR.S("total").innerHTML=nc;

















for(var i=0;i<aOm.length;i++)
{
var bF=aOm[i];
if(bF)
{
if(bF!="done")
{
aN=bF+"&sid="+A.getSid();

if(!checkImgExist(aN))
{
if(!ae.BM)
{
Zh.style.width="0";
ae.BM=true;
}
if(typeof A.window["goIphonePath"]=="undefined")
{
A.window["goIphonePath"]=[];
}
A.window["goIphonePath"].push(aN);

aN&&zR.S("showimg").setAttribute("src",aN);
A.show(zR.S("loading"),0);
A.show(zR.S("loaded"),1);

var asR;
if(zR.S("current").innerHTML==ae.aeD+1)
{
asR=parseInt(zR.S("current").innerHTML)+1
}
else
{
asR=parseInt(ae.aeD)+1;
}
zR.S("current").innerHTML=asR;


}
else
{

}
}
else
{



}
}
}
for(var i=0;i<aKH.length;i++)
{
var aOc=aKH[i],TQ="";
if(aOc)
{
TQ=aOc+"&sid="+A.getSid();
if(!checkImgExist(TQ))
{

ae.aeD++;


if(typeof A.window["goIphonePath"]=="undefined")
{
A.window["goIphonePath"]=[];
}
A.window["goIphonePath"].push(TQ);
Zh.style.width=brg*ae.aeD+"%";
debug(["process",Zh.style.width])
ae.insertImage(TQ);

if(bup=="0.9.8")
{


Zh.style.width="100%";
setTimeout(function()
{
zR.close();
},500);
}
}
else
{

}
}

}
if(Kf=="true")
{


Zh.style.width="100%";
setTimeout(function()
{
zR.close();
},500);
}
}
}
});
},2*1000);
}
});
break;
case"url":
default:
oL.nWidth=402;
oL.nArrowPos=201;
oL.sName="url";
return A.T([
'<div style="margin:15px;">',
'<p>Insert image</p>',
'<input id="select" class="left qm_addinput" name="select" type="text" value="http://">',
'<a id="ok" class="button_gray_s left" style="width:52px;">OK</a>',
'<div class="clr"></div>',
'</div>'
]);
}

};

QMEditor.FUNCLIB.Photo.prototype.initMenu=function(cY,fQ)
{
var ae=this;
if(fQ.sName=="url")
{
A.addEvent(cY.S("select"),"keypress",function(ah)
{
ah.keyCode==13&&cY.S("ok").click();
ah.keyCode==27&&ae.hideMenu(true);
}
);
cY.S("ok").onclick=function()
{
var aN=cY.S("select").value;
if(!aN||aN=="http://"||aN=="https://")
{
cY.S("select").focus();
}
else
{
ae.hideMenu(true);
setTimeout(function()
{
ae.insertImage(aN);
},
0
);
}
}
}
else if(fQ.sName=="attach")
{







A.addEvent(cY.S("content"),"click",function(ah)
{
var aC=A.getEventTarget(ah);
if(aC.tagName.toUpperCase()=="IMG")
{
ae.bvP(aC);
ae.ih("41");
cY.close();
}





else if(aC.getAttribute&&aC.getAttribute("retry"))
{
ae.auX(cY,0);
}
});
ae.aeq=false;
ae.XL=0;
A.addEvent(cY.S("content"),"scroll",function(ah)
{
if(!ae.aeq)
{
var eD=cY.S("content"),
CS=eD.offsetHeight,
wn=eD.clientHeight,
kS=eD.scrollTop;
if(CS-kS-wn<Math.min(50,(CS-wn)/2))
{
ae.auX(cY);
}
}
});
}
}

QMEditor.FUNCLIB.Photo.prototype.doMenuShow=function(cY,fQ)
{
var ae=this,
bd=fQ.sName;
if(bd=="url")
{
cY.S("select").select();
ae.ih("2");
}
else if(bd=="qzone")
{
A.loadJsFile(
"$js_path$/qmqzoneimg131f73.js",true,A.window.document,
function(){
if(!cY.isClose())
{
A.window.QMQzoneImg.selectInMenu(
{
oContainer:cY.S("qzone"),
onclick:function(bUb,bls,aFO,blE)
{
cY.close();
ae.insertImage(aFO.url);
ae.ih("31");
}
});
ae.ih("3");
}
});
}
else if(bd=="attach")
{
ae.auX(cY);
ae.ih("4");
}
};

QMEditor.FUNCLIB.Photo.prototype.auX=function(cY)
{
var ae=this;
if(ae.aeq||ae.XL<0)
{

return ae;
}
ae.aeq=true;
var ae=this,

aN=A.T("/cgi-bin/attachfolder?topmails=0&s=search&folderid=attach&hflag=attach&t=attachfolder.json&subject=&sender=&receiver=&searchmode=attach&advancesearch=0&showattachtag=1&perpage=18&filetype=1&action=list&func=getimage&page=$page$&sid=$sid$&resp_charset=UTF8&&ef=js").replace({
page:ae.XL,
sid:A.getSid()
}),
bnu=A.T(['<div style="text-align:center; line-height:1.5; margin-top:90px;">Fail to load, please <a href="javascript:void(0);" retry="1">Retry</a>.</div>']),
bpU=A.T(['<div style="text-align:center; line-height:1.5; margin-top:90px;">There is no image in your favorites.<br/>You can add images quickly after added the important images to favorites</div>']),
bud=A.TE([
'$@$for($oList$)$@$',
'<div class="left pointer qmEditorPicSelect"',
' onmouseover="this.className=\x27left pointer  qmEditorPicSelect bd\x27;"',
' onmouseout="this.className=\x27left pointer  qmEditorPicSelect\x27;"',
'>',
'<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="absmiddle">',
'<img src="$sIconUrl$" viewurl="$sUrl$" mailid="$sMailId$" attachid="$sAttachId$" attachname="$sAttachName$" fileextenal="$sFileExt$" filebyte="$sFileByte$" style="width:100px;"/>',
'</td></tr></tbody></table>',
'</div>',
'$@$endfor$@$',


''
]);
A.show(cY.S("content").lastChild,1);
A.QMAjax.send(aN,{
method:"GET",
onload:function(aP,bt,er)
{
ae.aeq=false;
if(aP)
{
try
{
var fI=eval(bt);
if(!fI.errcode)
{
var nK=cY.S("content");
A.show(nK.lastChild,0);
nK.style.cssText="height:242px;overflow-y:auto;overflow-x:hidden;";
A.insertHTML(cY.S("contentclr"),"beforeBegin",(ae.XL==0&&fI.oList.length==0?bpU:bud).replace(fI));
ae.XL=fI.oPageInfo.nNext;
}





}
catch(e)
{
aP=false;
}
}
if(!aP&&ae.XL==0)
{
cY.S("content").innerHTML=bnu;
}
}
});
};

QMEditor.FUNCLIB.Photo.prototype.bvP=function(ln)
{
var ae=this,
aJ="loadimg",
aZ=ae.getBindEditor(),
ic=aZ.getTemplate(),
fc=aZ.getLanguage();
new(A.QMDialog)(
{
sId:aJ,
sTitle:"Loading image",
sBodyHtml:ic.DIALOG_UPLOADIMG.replace(
{
imgPath:A.getPath("image"),
langUploading:fc.PO_DLG_INSERTING,
langUploadFail:fc.PO_DLG_INSERTINGFAIL
}
),
nWidth:400,

bAnimation:false,
onclose:function()
{
}
}
);
A.getAttachList(
[
{
mailid:ln.getAttribute("mailid"),
attachid:ln.getAttribute("attachid"),
attachname:ln.getAttribute("attachname"),
fileextenal:ln.getAttribute("fileextenal"),
filebyte:ln.getAttribute("filebyte")
}
],
function(aP,aM)
{
if(aP&&aM)
{
var ly=aM.attach;
if(ly&&ly[0])
{

A.QMDialog(aJ,"close");
ae.insertImage(ly[0].viewfileurl);
return;
}
}
var cG=A.QMDialog(aJ);
A.show(cG.S("uploading"),0);
A.show(cG.S("uploadFail"),1);
}
);
};

QMEditor.FUNCLIB.Photo.prototype.doItemClick=function(ay,ah,fQ)
{
if(!fQ||fQ.sName=="more")
{
this.showMenu(false,{sName:ay,nArrowPos:this.getUiConfig().arrowPos});
}
};

QMEditor.FUNCLIB.Photo.prototype.YA=function(kl,hB,Sn,rV)
{
var ae=this,
dV=A.QMDialog("uploadimg");
if(kl=="close")
{
A.QMDialog("uploadimg","close");
}
else if(kl=="process")
{
dV.S("uploadProcess").innerHTML=parseInt(hB)+"%";
}
else if(kl=="error")
{
A.show(dV.S("uploading"),0);
A.show(dV.S("uploadFail"),1);
}
else
{
var aZ=ae.getBindEditor(),
ic=aZ.getTemplate(),
fc=aZ.getLanguage();

ae.asq=false;
new(A.QMDialog)(
{
sId:"uploadimg",
sTitle:fc.PO_DLG_TITLE,
sBodyHtml:ic.DIALOG_UPLOADIMG.replace(
{
imgPath:A.getPath("image"),
langUploading:ic.PO_DLG_UPLOADING.replace({cnt:Sn,idx:rV||0}),
langUploadFail:fc.PO_DLG_UPLOADFAIL
}
),
nWidth:400,

bAnimation:false,
onclose:function()
{
ae.YM=0;
ae.asq=true;
ae.sn=null;
ae.atL=0;
aZ.loadLastRange();

}
}
);
}
}

QMEditor.FUNCLIB.Photo.prototype.init_=function()
{
var ae=this,aNv;
if(ae.aeJ[0].sId!="upload")
{
return;
}

ae.bnP=true;
ae.getContainer().style.position="relative";
aNv=ae.getContainer().firstChild.firstChild;

function jd(bkJ)
{
var ml=ae.getBindEditor().getPhotoConfig()||{};

bkJ.create("popup",
{
oContainer:aNv,
nTimeout:2000,
oQueryData:{
widthlimit:ml.widthlimit||0,
heightlimit:ml.heightlimit||0,
sizelimit:ml.sizelimit||0
},
onselect:function(kj)
{
var kB=0,
aMe=false;
A.E(kj,function(av)
{
if("gif|jpg|jpeg|bmp|png".indexOf((av.get("sName")||"").toLowerCase()
.split(".").pop())==-1)
{
A.showError("Please upload image files in .gif, .jpg, .jpeg, .bmp and .png. ");
ae.YA("close");
aMe=true;
return false;
}
kB+=av.get("nSize");
ae.ih("1");
});
if(aMe)
{
return;
}
if(!aNn(kB||0,ae.getBindEditor().getEditWin()))
{
A.showError("Photos size can not exceed 50M.");
return;
}
kj.length>1&&(ae.buC=kB);
ae.YM=0;
ae.sn=kj;
ae.atL=0;
ae.ady();
},
onprocess:function(av)
{
if(!ae.asq)
{
var afd;
if(ae.sn&&ae.sn.length>1)
{
var Fz=parseInt(av.get("nPercent")/100*av.get("nSize"))+ae.atL;
afd=parseInt(Fz/ae.buC*100);
}
else
{
afd=av.get("nPercent");
}

if(afd>=0)
{
ae.YA("process",afd);
}
}
},
onerror:function(av)
{
debug("fuck")

ae.YA("error");
},
oncomplete:function(av)
{
if(!ae.asq)
{
var eg=ae.sn,
aB=eg&&eg.length||0;

(aB<=1||aB<=(ae.YM+1))&&ae.YA("close");
aB>1&&(ae.atL+=av.get("nSize"));
ae.insertImage(av.get("sFileUrl"));
ae.ih("10");
ae.YM++;
ae.ady();
}
}
});
}

jd(window.QMFileUpload);
}

QMEditor.FUNCLIB.Photo.prototype.ady=function()
{
var ae=this,
eg=ae.sn,
dZ=ae.YM,
aB=eg&&eg.length||0,
bQ=dZ<aB&&eg[dZ];

if(bQ)
{
ae.YA("open",0,aB,dZ+1);
bQ.upload();
}
}

QMEditor.FUNCLIB.Photo.prototype.ih=function(aq)
{
aq&&A.ossLog("delay","all","stat=nothing&locval=editor,plus,photo,"+aq);
}



QMEditor.FUNCLIB.ScreenSnap=QMEditor.FUNCLIB.inheritFrom(function(
ci)
{


if(!ci.editor.getPhotoActionSrc())

{
return;
}




this.setId("ScreenSnap");
this.setType("btn");
this.setBindEditor(ci.editor);

this.auC();


var ae=this,
aZ=this.getBindEditor(),
iG=QMEditor.qM.nb(aZ),
aHy="",
baw=A.gbIsIE||A.QMAXInfo.mbAblePlugin,
ko;

function arP(ah)
{

ae.aTP();
iG.aIT();
iG.aTN(null,false,function(
aFt,aM)
{
ae.aJt(aFt,aM);
}
);
A.preventDefault(ah);
A.stopPropagation(ah);
}

this.setfOnKeyDown(function(ah)
{
if(ah.ctrlKey&&ah.altKey&&ah.keyCode==65)
{
ae.getfDoDefaultClick()();

A.preventDefault(ah);
}
else if((ah.ctrlKey||ah.metaKey)&&ah.keyCode==86)
{
if(iG.aEV())
{
arP(ah);
}
else if(!iG.aau())
{
ko=!A.gbIsOpera&&setTimeout(
function()
{
if(ko)
{
ko=null;
aZ.getfOnShowInstallactive()("paste");
}
},
200
);
if(!baw)
{
aHy=aZ.getContent();
}
}
}
});

this.setfOnContextMenu(function(ah)
{
if(iG.aIT())
{
clipboardData.setData("Text","");
}
});

this.setfOnPaste(function(ah)
{
if(ko)
{
clearTimeout(ko);
ko=null;
}

if(iG.aEV())
{
arP(ah);
}
else if(iG.bIV())
{
if(!clipboardData.getData("Text"))
{
arP(ah);
}
}
else if(ah.clipboardData&&window.FileReader)
{
var bbI=ah.clipboardData;
var bAD,bF;
if(bbI.items&&bbI.items.length==1&&(bF=bbI.items[0])&&/^image/i.test(bF.type)&&(bAD=bF.getAsFile()))
{

var bCL=new FileReader();
bCL.onload=function(bZk)
{
ae.insertImage(bZk.target.result);
};
bCL.readAsDataURL(bAD);
}
}
else if(A.gbIsFF&&!A.gbIsMac)
{
setTimeout(function()
{
var vS=aZ.getContentTags("img");
for(var i=0,aB=vS.length;i<aB;i++)
{
if(vS[i].src.indexOf("/moz-screenshot-")!=-1)
{
removeSelf(vS[i]);
aZ.getfOnShowInstallactive()("paste");
return;
}
};
},
200
);
}
else if(!baw)
{
setTimeout(function()
{
if(aZ.getContent()==aHy)
{
aZ.getfOnShowInstallactive()("failpaste");
}
aHy="";
},200);
}
});
this.setfDoDefaultClick(this.Cb);
},QMEditor.FUNCLIB.MENUIMAGE
);

QMEditor.FUNCLIB.ScreenSnap.prototype.Cb=function(ah)
{
var aZ=this.getBindEditor();
aZ.hideMenu();

if(!A.detectActiveX(0,1))
{
if(typeof(aZ.getfOnShowInstallactive())=="function")
{
aZ.getfOnShowInstallactive()();
}
return;
}



var ae=this,
iG=QMEditor.qM.nb(aZ);

iG.sP(function(aP)
{
if(!aP)
{
aZ.loadLastRange();
}
else
{
ae.aTP();
iG.bOJ(true,function(aFt,aM)
{
ae.aJt(aFt,aM);
}
);
}
}
);
A.ossLog("delay","all","stat=nothing&locval=editor,plus,screensnap,1");
};

QMEditor.FUNCLIB.ScreenSnap.prototype.auC=function()
{
var aRa=A.detectActiveX(0),
jl=this.getBindEditor().getLanguage();

this.setUiConfig(
{
clsName:aRa?"":"qmEditorScreenSnapDisable",
title:aRa
?jl.FUN_SCREENSNAP
:jl.FUN_SCREENSNAP_SETUP_TIP,
label:jl.FUN_SCREENSNAP_LABEL
});
};



QMEditor.FUNCLIB.Music=QMEditor.FUNCLIB.inheritFrom(function(ci)
{
var ae=this;
ae.setId("Music");
ae.setBindEditor(ci.editor);
ae.aCw=5;

var aZ=ae.getBindEditor(),
jl=aZ.getLanguage();
ae.setUiConfig(
{
arrowPos:160,
title:jl.FUN_MUSIC,
label:jl["FUN_MUSIC_LABEL"]
});
aZ.amK=function()
{
ae.bab(this.getBgMusicInfo());
}
},QMEditor.FUNCLIB.MENU);

QMEditor.FUNCLIB.Music.prototype.getMenuUI=function()
{
return A.T('<div class="qmEditorMusicCntr qmEditorToolLoading"><img align="absmiddle" src="$images_path$ico_loading212fb20.gif">&nbsp;&nbsp;Loading</div>').replace({images_path:A.getPath("image",true)});
};

QMEditor.FUNCLIB.Music.prototype.initMenu=function(My,aj)
{
var ae=this,
aZ=ae.getBindEditor(),
auN=My.S("_menuitem_");

if(!window.QMBgMusic)
{
aZ.loadFile({"$js_path$/com/kits/qmeditor/qqmail/release/plus/bgmusic1341a3.js":true},function()
{
if(!window.QMBgMusic)
{
auN.innerHTML='<div class="qmEditorMusicCntr">Load failed</div>';
}
else
{
ae.akx(My);
}
});
}
else
{
ae.akx(My);
}
return;
};

QMEditor.FUNCLIB.Music.prototype.akx=function(My)
{
var ae=this,
aZ=ae.getBindEditor(),
auN=My.S("_menuitem_");

ae.Vn=new QMBgMusic();

ae.Vn.setup({
container:auN,
height:'175px',
width:'265px',
num:ae.aCw,
menuObj:My,
style:aZ.getTemplate().STYLE,
onselectmusic:function(jC,kv,be)
{
if(!aZ.getBgMusicInfo()
||confirm(aZ.getLanguage().MC_REPLACE_TIP))
{
if(be&&be.indexOf("://")==-1)
{
be="http://"+be;
}
aZ.setBgMusicInfo(jC,kv,be);
ae.hideMenu(true);
A.ossLog("delay","all","stat=nothing&locval=editor,plus,music,10");
}
},
onclose:function()
{
ae.hideMenu(true);
},
onload:function()
{
ae.Vn.focus();
}
});
};

QMEditor.FUNCLIB.Music.prototype.bab=function(lF)
{
if(this.getContainer())
{
var aAQ=A.GelTags("a",this.getContainer()),
aCd=aAQ.length;

if(aCd>0)
{
aAQ[aCd-1].innerHTML=this.eO.getLanguage()["FUN_MUSIC_LABEL"];
}
}
};

QMEditor.FUNCLIB.Music.prototype.doMenuShow=function(cY,fQ)
{
this.Vn&&this.Vn.focus();
};



(function(){QMEditor.setupFunc();})();
}
)(QMEditorAdapter);
