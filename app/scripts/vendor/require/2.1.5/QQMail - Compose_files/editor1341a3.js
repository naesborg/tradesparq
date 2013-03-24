










(function(aT)
{


var ag=getTop(),
QMEditorAdapter={
document:ag.document,
window:ag,
gsAgent:gsAgent,
gbIsFF:gbIsFF,
gbIsChrome:gbIsChrome,
gbIsSafari:gbIsSafari,
gbIsOpera:gbIsOpera,
gbIsWebKit:gbIsWebKit,
gbIsIE:gbIsIE,
gnIEVer:gnIEVer,
gbIsMac:gbIsMac,

evalCss:evalCss,
S:S,
T:T,
TE:TE,
E:E,
createBlankIframe:createBlankIframe,
createIframe:createIframe,
GelTags:GelTags,
insertHTML:insertHTML,
attr:attr,
getStyle:getStyle,
setClass:setClass,
finds:finds,

isShow:isShow,
show:show,
callBack:callBack,
addEvent:addEvent,
addEvents:addEvents,
removeEvent:removeEvent,
getEventTarget:getEventTarget,
preventDefault:preventDefault,
stopPropagation:stopPropagation,
isObjContainTarget:isObjContainTarget,

loadJsFile:loadJsFile,
waitFor:waitFor,
calcPos:calcPos,
calcAdjPos:calcAdjPos,
calcPosFrame:calcPosFrame,
bodyScroll:bodyScroll,
getPath:getPath,
getPaths:getPaths,
getRes:getRes,

extend:extend,
trim:trim,
now:now,
unikey:unikey,
subAsiiStr:subAsiiStr,
debug:debug,

QMMenu:QMMenu,
QMDialog:QMDialog,
QMSelect:QMSelect
};

window.QMEditorAdapter=QMEditorAdapter;
})();






(function(aT)
{
var ag=getTop();

QMEditorAdapter.extend(QMEditorAdapter,
{

showError:ag.showError,
QMAjax:ag.QMAjax,
ossLog:ag.ossLog,
getSid:ag.getSid,
searchMusic:ag.searchMusic,
QMAXInfo:ag.QMAXInfo,
detectActiveX:ag.detectActiveX,
createActiveX:ag.createActiveX,
getAttachList:ag.getAttachList
});
})();





















































(function(A,aT)
{
var aPI=[
'.qmEditorBase{width:100%;height:100%;border-collapse:collapse;border-right:1px solid #c3c3c3;border-top:1px solid #9a9a9a;border-left:1px solid #9a9a9a;background:#fff;}.qmEditorBaseBd{border-top:1px solid #c3c3c3;position:relative;}.qmEditorToolBar{border-bottom:none;}.qmEditorToolBarDiv{height:100%;height:20px;padding:3px 2px;border-bottom:1px solid #999;cursor:default;}.qmEditorToolBarItem{float:left;font-size:1px;margin:0 1px;margin:0\u005C9;}.settingDiv_div .qmEditorToolBarItem{line-height:17px;}.qmEditorToolBarItemRight{float:right;font-size:1px;margin:0 5px;*margin:1px 3px 0;}.qmEditorContent{}.qmEditorText{height:100%;border:none;margin:0;padding:0 4px;font:normal 14px "lucida Grande",Verdana;line-height:160%;word-break:break-all;white-space:pre-wrap;word-wrap:break-word;zoom:1;width:99%;}.qmEditorDivEditArea{display:block;height:100%;overflow:auto;padding:1px 4px;font:normal 14px "lucida Grande",Verdana;background:#fff;line-height:160%;word-break:break-all;white-space:pre-wrap;word-wrap:break-word;border-top:1px solid #d4d4d4;}.qmEditorIfrmEditArea{display:block;width:100%;height:100%;border-top:1px solid #d4d4d4;margin-bottom:1px;}.qmEditorTBExternItem{}.qmEditorBtnIcon,.qmEditorMenuIcon{width:24px;height:17px;text-align:center;padding:1px;border:none;overflow:hidden;}.qmEditorBtnIconOver{padding:1px 0 0 1px;border-left:none;border-top:none;border-right:1px solid gray;border-bottom:1px solid gray;}.qmEditorBtnIconCheck{padding:0;border-left:1px solid gray;border-top:1px solid gray;border-right:1px solid white;border-bottom:1px solid white;}.qmEditorBtnA,.qmEditorFormatting{padding:2px 0 3px 8px;color:#039;font:normal 12px "lucida Grande",Verdana;cursor:pointer;white-space:nowrap;-moz-user-select:none}.qmEditorMoreIcon{border:none;background:url($images_path$../js/com/kits/qmeditor/base/images/newicon/compose13372a.png) no-repeat 0 -478px;width:16px;height:14px;position:relative;top:1px;top:-1px\u005C9;cursor:pointer;margin-left:5px;}.qmEditorIcon{border:none;background:url($images_path$../js/com/kits/qmeditor/base/images/newicon/editor_new13372a.gif) no-repeat;width:20px;height:16px;overflow:hidden;}.qmEditorSeparate .qmEditorIcon{background:none;}.qmEditorBold .qmEditorIcon{background-position:0px 0;width:10px;}.qmEditorItalic .qmEditorIcon{background-position:-32px 0;width:10px;}.qmEditorUnderline .qmEditorIcon{background-position:-63px 0;width:10px;}.qmEditorFontName .qmEditorIcon{background-position:-95px 0;width:18px;}.qmEditorFontSize .qmEditorIcon{background-position:-128px 0;width:18px;}.qmEditorForeColor .qmEditorIcon{background-position:-159px 0;width:18px;}.qmEditorBackColor .qmEditorIcon{background-position:-192px 0;width:18px;}.qmEditorAlignMode .qmEditorIcon{background-position:-223px 2px;width:20px;}.qmEditorSerial .qmEditorIcon{background-position:-256px 2px;width:20px;}.qmEditorIndentMode .qmEditorIcon{background-position:-288px 2px;width:20px;}.qmEditorformatblock{width:20px;}.qmEditorformatblock .qmEditorIcon{background-position:-572px 1px;width:16px;}.qmEditorCreateLink .qmEditorIcon{background-position:-318px 2px;}.qmEditorPhoto .qmEditorIcon,.qmEditorMo .qmEditorIcon,.qmEditorScreenSnap .qmEditorIcon,.qmEditorMusic .qmEditorIcon,.qmEditorTxtStyle .qmEditorIcon{background:url($images_path$../js/com/kits/qmeditor/base/images/newicon/compose13372a.png) no-repeat;width:16px;padding:0;}.qmEditorPhoto .qmEditorIcon{background-position:0 -71px;}.qmEditorMo .qmEditorIcon{background-position:0 -95px;}.qmEditorScreenSnap .qmEditorIcon{background-position:0 -119px;width:14px;}.qmEditorScreenSnapDisable .qmEditorIcon{background-position:0 -288px;width:14px;}.qmEditorMusic .qmEditorIcon{background-position:0 -143px;width:13px;}.qmEditorTxtStyle .qmEditorIcon{background-position:0 -168px;}.qmEditorJustifyLeft .qmEditorIcon{background-position:-350px 2px;}.qmEditorJustifyCenter .qmEditorIcon{background-position:-382px 2px;}.qmEditorJustifyRight .qmEditorIcon{background-position:-414px 2px;}.qmEditorInsertorDeredlist .qmEditorIcon{background-position:-446px 2px;}.qmEditorInsertunorDeredlist .qmEditorIcon{background-position:-478px 2px;}.qmEditorIndent .qmEditorIcon{background-position:-542px 2px;}.qmEditorOutdent .qmEditorIcon{background-position:-510px 2px;}.qmEditorPhoto .qmEditorBigIcon{background:url($images_path$../js/com/kits/qmeditor/base/images/compose_easy_photo13372a.gif) no-repeat;width:24px;height:22px;vertical-align:middle;}.qmEditorMo .qmEditorBigIcon{background:url($images_path$../js/com/kits/qmeditor/base/images/compose_easy_face13372a.gif) no-repeat;width:22px;height:22px;vertical-align:middle;}.qmEditorBtnIconSeparate{width:1px;}.qmEditorBtnIconBold{width:20px;}.qmEditorBtnIconItalic{width:20px;}.qmEditorBtnIconUnderline{width:20px;}.qmEditorBtnIconFontName{width:24px;}.qmEditorBtnIconFontSize{width:24px;}.qmEditorBtnIconForeColor{width:24px;}.qmEditorBtnIconBackColor{width:24px;margin-right:2px;}.qmEditorBtnIconAlignMode{width:24px;}.qmEditorBtnIconSerial{width:24px;}.qmEditorBtnIconIndent{width:24px;}.qmEditorBtnIconCreateLink{width:20px;}.qmEditorBtnIconPhoto{width:24px;}.qmEditorScreenSnap{width:24px;}.qmEditorBtnIconMo{width:24px;}.qmEditorBtnIconMusic{width:24px;}.qmEditorBtnText{width:16px;border-width:0px;height:14px;margin:2px 10px 0 0;padding:1px 0;}.qmEditorBtnText .qmEditorIcon{font-size:12px;cursor:pointer;margin-right:5px;}.qmEditorMenuIcon{margin:-3px 0 0 0;height:17px;*xheight:19px;}.qmEditorMenuBorder{border:1px outset;* border:2px outset;position:absolute;z-index:99;background:white;padding:2px;font-size:1px;}.qmEditorMenuItem,.qmEditorMenuItemOver,.qmEditorMenuItemCheck,.qmEditorMenuItemDisabled{width:130px;height:16px;line-height:16px;padding:2px;cursor:default;font:normal 12px "lucida Grande",Verdana;}.qmEditorMenuItem,.qmEditorMenuItem,.qmEditorMenuItemDisabled{padding:3px;}.qmEditorMenuItemOver{border:1px solid #000080;background:#FFEEC2;color:#036;}.qmEditorMenuItemCheck{border:1px solid #9a9afb;}.qmEditorMenuItemDisabled{color:gray;}.qmEditorMenuColor{width:10px;*width:12px;height:10px;*height:12px;font-size:1px;border:1px solid #a6a6a6;}.qmEditorMenuPanel{font-size:12px;padding:3px;}.qmEditorButton1 .qmEditorButton2{font-size:12x;height:auto;*height:22px;line-height:auto;*line-height:18px;padding:0 8px;*padding:0;}.qmEditorButton1{width:52px;margin:1px 2px 0 0}.qmEditorButton2{width:76px;*width:72px;margin:1px 2px 0 0}.qmEditorCLNameDef{color:gray;}.qmEditorCLNameMdf{color:black;}.qmEditorFormatting{text-decoration:none;color:gray;}.qmEditorFormatBtn{float:left;padding:2px 0 3px 5px;* padding:1px 0 3px 5px;}.qmEditorLinkDiv{padding-bottom:5px;}.qmEditorLinkBtn{margin-left:3px;}.qmEditorLinkButton{text-align:right;}.qmEditorMenuStatusItem{padding:5px 10px 5px 0;cursor:pointer;}.qmEditorMenuIconStatusItem{padding:5px 10px 5px 0;cursor:pointer;}.qmEditorMenuIconStatusItem .qmEditorIcon{position:relative;top:-1px;top:-2px\u005C9;left:-5px;cursor:pointer;}@media screen and (-webkit-min-device-pixel-ratio:0){}.menubarbg{background-image:url("$images_path$../js/com/kits/qmeditor/base/images/newicon/mailcomposetool13372a.png");_background-image:url("$images_path$../js/com/kits/qmeditor/base/images/newicon/mailcomposetool_ie13372a.png");}.editormenubar{background-position:0 -128px;background-repeat:repeat-x;height:23px;padding:4px;position:absolute;border:1px solid #555;-moz-box-shadow:0 1px 1px #999;-moz-border-radius:5px;}.imgzoomout{float:left;_display:inline;margin:0 5px;width:21px;height:23px;background-position:0 -30px;background-repeat:no-repeat;}.imgzoomout:hover{background-position:-33px -31px;}.imgzoomin{float:left;_display:inline;margin:0 5px;width:21px;height:23px;background-position:-63px -30px;background-repeat:no-repeat;}.imgzoomin:hover{background-position:-96px -31px;}.imgzoombar{float:left;_display:inline;width:66px;margin:10px 0 0;height:3px;background-position:-32px 0;position:relative;}.imgzoombar .zoomhandle{position:absolute;width:11px;height:17px;top:-7px;left:29px;background-position:-126px -30px;}.imgzoombar .zoomhandle:hover{background-position:-159px -31px;}.menubarrotate{float:left;_display:inline;margin:0 3px;width:22px;height:23px;background-position:-191px -64px;background-repeat:no-repeat;}.menubarrotate:hover{background-position:-224px -64px;}.menubarremove{float:left;_display:inline;margin:0 5px;width:19px;height:23px;background-position:-191px -31px;background-repeat:no-repeat;}.menubarremove:hover{background-position:-224px -32px;}.menubarspl{float:left;_display:inline;width:2px;height:25px;margin:-1px 3px 0;background-position:0 0;background-repeat:no-repeat;}a.menubarlink:link,a.menubarlink:visited{float:left;margin:0 3px;line-height:23px;color:#DDD;text-decoration:underline;}a.menubarlink:hover{color:#FFF;}.menubariconlink{float:left;_display:inline;margin:0 5px;width:22px;height:23px;background-position:0 -57px;}.linkmodify{float:left;_display:inline;margin:0 3px;width:23px;height:23px;background-position:-31px -63px;}.linkmodify:hover{background-position:-64px -64px;}.menubarinput{float:left;_display:inline;margin:1px 7px 0 5px;width:200px;}.menubarfinish{float:left;_display:inline;margin:0 5px;width:24px;height:23px;background-position:-95px -62px;}.menubarfinish:hover{background-position:-128px -63px;}.menubariconimg{float:left;_display:inline;margin:0 2px 0 5px;width:24px;height:23px;background-position:-63px -94px;}.menubariconimg:hover{background-position:-95px -94px;}.menubariconlink2{float:left;_display:inline;margin:0 5px 0 2px;width:24px;height:23px;background-position:1px -89px;}.menubariconlink2:hover{background-position:-31px -89px;}@media all and (-webkit-min-device-pixel-ratio:10000),not all and (-webkit-min-device-pixel-ratio:0){head~body #QMEditorArea{margin-bottom:28px;}}.qmpanel_shadow .arrow{position:absolute;top:-4px;width:11px;height:11px;overflow:hidden;border:1px solid #bababa;background:#FFFFFF;clip:rect(-3px,10px,10px,-3px);-moz-box-shadow:0 0 3px rgba(0,0,0,0.15);-webkit-box-shadow:0 0 3px rgba(0,0,0,0.15);-o-box-shadow:0 0 3px rgba(0,0,0,0.15);box-shadow:0 0 3px rgba(0,0,0,0.15);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);top:-10px\u005C9;clip:rect(-3px 100px 100px -3px)\u005C9;filter:progid:DXImageTransform.Microsoft.Matrix(Dx=-2,Dy=12,M11=0.7,M12=0.7,M21=-0.7,M22=0.7);}@media screen and (-webkit-min-device-pixel-ratio:0){.qmpanel_shadow .arrow{clip:rect(-3px,10px,10px,-3px);}}.qmpanel_shadow .btn_close{position:absolute;z-index:3;right:8px;top:8px;width:13px;height:13px;overflow:hidden;vertical-align:middle;background:url($images_path$../../../zh_CN/htmledition/images/newicon/mail12dc93.png) no-repeat scroll -96px -19px;-moz-border-radius:2px;-webkit-border-radius:2px;-o-border-radius:2px;border-radius:2px;}.qmpanel_shadow .btn_close:hover{background-position:-107px -19px;background-color:#999;}.qmpanel_shadow .btn_close:active{opacity:0.6;filter:alpha(opacity=60);}ul.qmEditorToolTab{position:relative;height:25px;padding:9px 0 1px 9px;overflow:hidden;zoom:1;}.qmEditorToolTab .sepLine{position:absolute;left:0;top:34px;height:1px;width:100%;overflow:hidden;margin:0;_padding-right:9px;background:#CED1D7;}.qmEditorToolTab li{float:left;}.qmEditorToolTab a{display:inline-block;min-width:42px;_width:42px;white-space:nowrap;margin-right:-1px;padding:0 12px;border:1px solid #CED1D7;border-width:1px 1px 0;line-height:24px;text-align:center;background:#F5F5F5;}.qmEditorToolTab a:link,.qmEditorToolTab a:hover{}.qmEditorToolTab a.on,.qmEditorToolTab a.on:hover{position:relative;z-index:2;margin-top:-3px;line-height:28px;text-decoration:none;color:#494949;background:#FFFFFF;font-weight:bold;-moz-box-shadow:0 0 2px #BABABA;-webkit-box-shadow:0 0 2px #BABABA;-o-box-shadow:0 0 2px #BABABA;box-shadow:0 0 3px rgba(0,0,0,0.15);}.qzone_container{width:362px;}.qmEditorMoOuter{}.qmEditorMoPadding{padding:6px 6px 2px;}.qmEditorMoLoading{float:left;font:normal 12px Verdana;display:none;padding-top:8px;color:gray;}.qmEditorMoPageCntr{font-size:12px;color:#000;cursor:default;padding:1px 5px 1px 0;}.qmEditorMoPage{margin-top:7px;color:#000;border:none;background:transparent;margin-right:2px;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\u0027#ffffff\u0027,endColorstr=\u0027#ffffff\u0027);}.qmEditorMoTurnPage{border:none;width:50px;height:18px;background:#fff;cursor:pointer;text-align:center;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\u0027#ffffff\u0027,endColorstr=\u0027#ffffff\u0027);}.qmEditorMoTurnPage:active,.qmEditorMoPage:active{background:#fff;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\u0027#ffffff\u0027,endColorstr=\u0027#ffffff\u0027);}.qmEditorMoPreview{background:#fff;position:absolute;left:0;top:0;border:1px solid #004B97;text-align:center;overflow:hidden;}.qmEditorToolLoading{text-align:center;padding:36px 0;}.qmEditorAlbumsSelect{}.qmEditorPicContent{padding:10px;}.qmEditorPicContent .bd{box-shadow:0 0 3px rgba(0,0,0,0.2);}.qmEditorPicSelect{padding:1px;margin:2px;background-color:#ececec;border:1px solid #fff;width:100px;height:75px;overflow:hidden;}.qmEditorPicSelect table{width:100%;height:100%;overflow:hidden;margin-top:-212px;}.qmEditorPicSelect table td{text-align:center;line-height:0;height:500px;vertical-align:middle;}.qm_addinput{height:22px;line-height:1;border-width:1px;border-color:#9a9a9a #7c7c7c #c3c3c3 #c3c3c3;box-shadow:0 1px 1px #d4d4d4 inset;margin:0 5px 0 0;padding:0 5px;padding:5px\u005C9;height:12px\u005C9;width:295px;border-radius:3px;background:#FFFFFF;}#qzoneimgAlbum{margin:-3px 0 0 5px;}.qzoneimgData{height:242px;*height:262px;overflow-y:auto;padding:10px;}.qmEditorMusicCntr{width:320px;color:#494949;overflow:hidden;}.qmEditorMusicHead{padding:13px 8px 15px 17px;}.qmEditorMusicLogo{float:left;_display:inline;margin-top:-9px;padding:0 0 7px 17px;}.qmEditorMusicSearch{padding:0 0 18px 17px;}.qmEditorMusicTxt{float:left;width:214px;}a.qmEditorMusicBtn{float:left;width:55px;}.qmEditorMusicData{margin-top:-6px;zoom:1;}.qmEditorMusicResult{border-top:1px solid #DDDDDD;text-align:center;}.qmEditorMusicResultTxt{display:inline-block;position:relative;left:-2px;top:-9px;padding:0 16px;color:#C4C4C4;background:#FFFFFF;}.qmEditorMusicInfo{padding:5px 0 18px;text-align:center;}.qmEditorMusicOpt{position:relative;height:16px;margin-bottom:-16px;padding:8px 11px;}a.qmEditorMusicItem,a.qmEditorMusicItem:visited,a.qmEditorMusicItem:link{display:block;padding:0 19px;border-bottom:1px solid #EAEAEA;color:#494949;line-height:27px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;_width:282px;}a.qmEditorMusicItem:hover{text-decoration:none;background:#F0F1F1;}.QMEditorToolPop .qmEditorHead{color:#494949;padding:10px 10px 10px 15px;border-bottom:1px solid #bababa;text-align:left;}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.qmEditorMoreIcon,.qmEditorPhoto .qmEditorIcon,.qmEditorMo .qmEditorIcon,.qmEditorScreenSnap .qmEditorIcon,.qmEditorMusic .qmEditorIcon,.qmEditorTxtStyle .qmEditorIcon{background-image:-webkit-image-set(url($images_path$../js/com/kits/qmeditor/base/images/newicon/compose13372a.png) 1x,url(../images/newicon/compose@2X.png) 2x);}.qmEditorIcon{background-image:-webkit-image-set(url($images_path$../js/com/kits/qmeditor/base/images/newicon/editor_new13372a.gif) 1x,url($images_path$../js/com/kits/qmeditor/base/images/newicon/editor_new@2X13372a.gif) 2x);}}'


].join('\n');


function QMEditor(ci)
{
if(!ci)
{
ci={};
}

this.Yi=ci.editorId
||["QMEditor",(new Date()).valueOf()].join("");
this.bia=ci.tbExternId||"QMEditorToolBarPlusArea";
this.NZ=ci.tbExternObj;

this.je=ci.editorAreaWin||window;
this.bkk=ci.editorAreaId||"QMEditorArea";
this.mF=ci.editorAreaObj;




this.uW=ci.height;
this.bhK=ci.customtags;


this.aOr=ci.resPath||A.getPath("image");
this.CL=ci.language||QMEditor.CONST.LANGUAGE.zh_CN;
this.qB=QMEditor.CONST.bJ;

this.akL=[";",ci.style].join("").toLowerCase();
this.awh=ci.funclist||QMEditor.CONST.FUNCLIST.BASE;

this.sK="html";
this.YV="NotInited";

this.Zi={};
this.ayG={};


this.PF=ci.nAutoRisizeMinHeight;
this.abk=ci.isNoEditScroll;

this.amy=ci.isOpenEditBar;
this.bvz=ci.isMatchBrackets;

var eM=QMEditor.CONST.FILES;
for(var i in eM)
{
var azk=eM[i].split(" ");
for(var j=azk.length-1;j>=0;j--)
{
this.ayG[azk[j]]=i;
}
}
this.bpD=ci.bNotAllowArrow;

this.aCQ=ci.onload;
this.VC=ci.onfocus;
this.XT=ci.onblur;
this.Cp=ci.onclick;
this.azA=ci.onmousedown;
this.Ss=ci.onkeydown;
this.aNL=ci.onkeypress;
this.alD=ci.onkeyup;
this.Xl=ci.onpaste;
this.azd=ci.onputcontent;
this.aaB=ci.onbeforesaverange;
this.aAC=ci.onselectionchange;
this.aBR=ci.onchangecontenttype;
this.ayg=ci.onchangebgmusic;
this.aJg=ci.onshowinstallactive;
this.aZF=ci.onpreview;
this.baY=ci.onuploademl;


this.aDY=ci.photoCGI;
this.aRl=ci.photoConfig;
this.asj=ci.funcConfig;


this.auR=ci;
};


QMEditor.prototype.getEditorId=function()
{
return this.Yi;
};

QMEditor.prototype.getPhotoActionSrc=function()
{
return this.aDY;
};

QMEditor.prototype.getTbExtern=function()
{
var ae=this,
de=ae.NZ;

return de?de:(ae.NZ=A.S(ae.bia,ae.je));
}




QMEditor.prototype.getTbExternInfo=function(yx)
{
var ae=this;

if(!yx)
{
return ae.Bg;
}

for(var i=ae.Bg.length-1;i>=0;i--)
{
if(ae.Bg[i].funcName==yx)
{
return ae.Bg[i];
}
}
}


QMEditor.prototype.getEditorArea=function()
{
var ae=this,
de=ae.mF;

return de?de:(ae.mF=A.S(ae.bkk,ae.je));
};

QMEditor.prototype.getContentType=function()
{
return this.sK=="text"?"text":"html";
};

QMEditor.prototype.adjustBodyStyle=function(RJ,dG)
{
try{
"txt"!==this.gq&&(this.eL.style[RJ]=dG);
}catch(fO)
{
A.debug("QMEditor adjustBodyStyle err:"+fO.message);
}
return this;
};

QMEditor.prototype.getBodyStyle=function(RJ)
{
return"txt"!==this.gq?this.eL.style[RJ]:"";
};

QMEditor.prototype.getEditWin=function()
{
return this.iJ;
};


QMEditor.prototype.initialize=function(eK,aZG,Cg,RP)
{
var ae=this;

if(!(ae.getEditorArea())
||ae.YV!="NotInited")
{
return false;
}
ae.YV="Initlizing";


A.evalCss(aPI,this.je,"qmEditor");



((/android|ipad|iphone|ipod/i).test(A.gsAgent)
?ae.bfN
:ae.bgl
).call(ae,
eK||QMEditor.getBreakLine(),
Cg,
RP,
function()
{


if("txt"!==ae.gq)
{
ae.ahs();
ae.aVe();
ae.aZD();
ae.aUV();
ae.bfb();
}
ae.aQO();
ae.Rg();
ae.bag();
ae.aXh();

ae.clx();

ae.YV="Ready";
ae.setReadyTimeStamp();
QMEditor.setEditor(ae);
if("txt"!==ae.gq)
{
ae.biM();
aZG&&ae.showToolBar(true);
}
ae.aCZ();
ae.biv();
if(typeof(ae.aCQ)=="function")
{
ae.je.setTimeout(
function()
{
ae.aCQ.call(ae);
}
);
}
}
);

return true;
};

QMEditor.prototype.isInitialized=function()
{
return this.YV=="Ready";
};
QMEditor.prototype.setReadyTimeStamp=function()
{
this.bsY=A.now();
};
QMEditor.prototype.getReadyTimeStamp=function()
{
return this.bsY;
};
QMEditor.prototype.isSelectionInObject=function(iC)
{

if(!iC||"txt"===this.gq)
{
return;
}

if(this.iJ.getSelection)
{

var dD=this.iJ.getSelection();
if(dD&&dD.rangeCount>0)
{
var bI=dD.getRangeAt(0),
rD=this.fK.createRange();

rD.selectNode(iC.firstChild||iC);
var avG=bI.compareBoundaryPoints(
Range.START_TO_START,
rD
)==1;

rD.selectNode(iC.lastChild||iC);
var auo=bI.compareBoundaryPoints(
Range.END_TO_END,
rD
)==-1;

if(!(avG&&auo))
{
return false;
}
}
else
{
return false;
}
}
else
{

var bI=this.fK.body.createTextRange();
bI.moveToElementText(iC);

var dD=this.fK.selection;

if(dD.type=="None"&&typeof dD.typeDetail=="unknown")
{
return true;
}

var BW=dD.createRange();
if(dD.type=="Control")
{
for(var i=0,aB=BW.length;i<aB;i++)
{
if(BW(i).parentNode)
{
var bM=BW(i).parentNode;
BW=this.fK.body.createTextRange();
BW.moveToElementText(bM);
break;
}
}
}
if(!bI.inRange(BW)&&!BW.text&&!BW.htmlText)
{
return false;
}
}

return true;
};

QMEditor.prototype.focus=function(nL,nC)
{
var ae=this,
ym=null;
if("txt"===ae.gq)
{
ym=ae.eL;
}
else
{
switch(ae.sK)
{
case"text":
ae.je.focus();
ae.sV.focus();
ym=ae.sV;
break;
case"source":
ae.je.focus();
ae.wT.focus();
ym=ae.wT;
break;
case"html":
default:
if(!(ym=nC))
{

ae.uW&&A.gbIsFF&&ae.eL.focus();

ym=ae.ajY(ae.fK)
?ae.iJ
:ae.eL;

ym.focus();
}

if(A.gbIsIE)
{
var xe=nC&&nC.firstChild,
Ky;
if(xe&&xe.nodeName=="DIV")
{
if(Ky=xe.firstChild)
{
Ky.nodeName=="FONT"&&
(ym=Ky);
}
else
{
xe.innerHTML=" ";
ym=xe.firstChild;
}
}
}
break;
}
}
ae.acD(ym,nL);
};

QMEditor.prototype.scrollTo=function(nL)
{
var ae=this;

switch(ae.sK)
{
case"html":
ae.eL.scrollTop=nL;
break;
case"text":
ae.sV.scrollTop=nL;
break;
case"source":
ae.wT.scrollTop=nL;
break;
}
}

QMEditor.prototype.showCursor=function()
{

try
{

this.fK.selection.createRange().select();
}
catch(e)
{
}
};

QMEditor.prototype.changeContentType=function(EC,bZX)
{

var ae=this,
ES=!EC
?(this.getContentType()=="text"?true:false)
:(EC=="text"?false:true);
EC=ES?"html":"text";

if(EC==this.getContentType())
{
return true;
}

if("txt"!==this.gq)
{
if(!ES&&!confirm(this.CL.CHG_CONTENTTYPE))
{
return false;
}

this.uV.style.display=ES?"block":"none";
this.sV.style.display=ES?"none":"block";
this.wT.style.display="none";

if(!ES)
{
this.aDk("text");
setTimeout(function(){ae.ahW();},200);
}
else
{
this.bjO("html");

}

this.showToolBar(ES?this.isShowToolBar():false,true)
A.show(this.getTbExtern(),ES);
}

this.sK=EC;
this.focus(0);

if(typeof(this.aBR)=="function")
{
this.aBR.call(this);
}

return true;
};

QMEditor.prototype.showToolBar=function(kg,aVu)
{

var ae=this;
if("txt"!==ae.gq)
{
kg=kg==null?!ae.isShowToolBar():kg;
!aVu&&ae.xI.setAttribute("disp",kg?"true":"false");
ae.xI.parentNode.style.display=kg?"":"none";


ae.ail();


ae.resizeNoScrollEditor();
}
};

QMEditor.prototype.isShowToolBar=function()
{
return"txt"!==this.gq&&this.xI
&&this.xI.getAttribute("disp")=="true";
};

QMEditor.prototype.isSupportToolBar=function()
{
return"txt"!==this.gq;
};

QMEditor.prototype.getBgMusicInfo=function()
{
return"txt"!==this.gq?this.aBI:null;
};

QMEditor.prototype.getContent=function(EJ)
{

var ae=this;
return("txt"!==ae.gq?ae.getEditContent
:ae.aBb).call(ae,ae.sK,EJ);
};




QMEditor.prototype.getContentWidthSpellcheck=function(EJ)
{
var ae=this;
return("txt"!==ae.gq?ae.getEditContent
:ae.aBb).call(ae,ae.sK,EJ,1);
};

QMEditor.prototype.getContentObj=function(ay)
{
return"txt"!==this.gq?A.S(ay,this.iJ):null;
};

QMEditor.prototype.getContentTags=function(iR)
{

return"txt"!==this.gq?A.GelTags(iR,this.fK):[];
};

QMEditor.prototype.setContent=function(eK)
{
var ae=this;
return("txt"!==ae.gq?ae.setEditContent
:ae.ben).call(ae,ae.sK,eK);
};

QMEditor.prototype.setBgMusicInfo=function(jC,kv,be)
{
if("txt"!==this.gq)
{
var aiv=this.aBI||{},
aAK=aiv.song,
bhx=aiv.singer,
bex=aiv.url,
UQ=!aAK&&!jC
?be!=bex
:(aAK!=jC||bhx!=kv);

this.aBI=!jC&&!be?null:{
song:jC,
singer:kv,
url:be
};

if(!UQ)
{
return;
}

if(this.amK&&typeof(this.amK)=="function")
{
this.amK(this);
}

if(typeof(this.ayg)=="function")
{
this.ayg.call(this);
}
}
};

QMEditor.prototype.hideMenu=function(UJ,aGR)
{
var Ie=A.QMMenu();

for(var i in Ie)
{
Ie[i].close();
}
};

QMEditor.prototype.addEvent=function(va,aDe)
{

if(typeof(aDe)!="function")
{
return false;
}

var aly=["on",va,"List"].join("");
if(!this[aly])
{
this[aly]=[];
}

this[aly].push(aDe);

return true;
};

QMEditor.prototype.saveRange=function()
{

if("txt"!==this.gq&&this.rd)
{
if(typeof(this.aaB)=="function")
{
this.aaB.call(this);
}

this.axQ=this.LB();
}
};

QMEditor.prototype.loadRange=function(aq)
{

if("txt"!==this.gq)
{
if(this.aCR(this.axQ))
{
if(aq!="notclear")
{
this.clearRange();
}
}
}
};

QMEditor.prototype.clearRange=function()
{

this.axQ=null;
};

QMEditor.prototype.loadLastRange=function()
{

return this.aTq();
};

QMEditor.prototype.paste=function()
{

"txt"!==this.gq&&this.execCmd("paste");
};

QMEditor.prototype.updateToolBarUI=function(bho)
{

if("txt"!==this.gq)
{
var aDA=function(aYq)
{
A.E(aYq,function(dL)
{
if(dL.funcObj&&dL.funcName==bho)
{
dL.funcObj.apL();
}
}
);
};

aDA(this.wu);
aDA(this.Bg);
}
};

QMEditor.prototype.test=function()
{

try
{
return(

this.getEditorArea().getAttribute("QMEditorId")==this.Yi

&&("txt"===this.gq?true:

A.GelTags("td",this.mF)[1].firstChild==this.uV
)
);
}
catch(aL)
{
return false;
}
};

QMEditor.prototype.resetFixHeight=function()
{

var ae=this;
ae.mF.style.height=ae.uW;
A.gbIsIE&&(A.GelTags("td",ae.mF)[1].style.height=ae.uW);
ae.uV.style.height=ae.uW;
};

QMEditor.prototype.insertImage=function(be,eN)
{
var ae=this;
this.execCmd("InsertImage",be,function()
{
var dD=ae.fK.selection,
aw;
if(dD&&dD.type=="Control")
{
aw=ae.getSelectionElement();
var bI=ae.fK.body.createTextRange();



bI.moveToElementText(aw);
bI.moveEnd("character",1);
bI.collapse(false);
bI.select();
}
else
{
var bI=ae.iJ.getSelection().getRangeAt(0);
aw=bI.startContainer.childNodes[bI.startOffset-1];
}


ae.autoScaleImg(aw,be);


setTimeout(function(){ae.resizeNoScrollEditor();},500);

typeof eN=="function"&&eN.call(ae,be,aw);

typeof ae.onafterinsertimage=="function"&&
ae.onafterinsertimage(aFf);
}
);
};

QMEditor.prototype.getImgDom=function(an)
{
var dJ,bO;

if(an.nodeName=="IMG")
{
dJ=an;
}
else
{
bO=an.getElementsByTagName&&an.getElementsByTagName("IMG");
dJ=(bO&&bO.length)&&bO[0];
}
return dJ;
};

QMEditor.prototype.autoScaleImg=function(an,be)
{
var ae=this,
dJ=ae.getImgDom(an);

if(dJ)
{
var aKT=be.match(/originalwidth=.*&/),
aLW=be.match(/originalheight=.*/),
aKE=aKT&&aKT[0],
aOd=aLW&&aLW[0],
aNQ=aKE&&parseInt(aKE.split('=')[1]),
aNh=aOd&&parseInt(aOd.split('=')[1]),
bsj=!!aNQ&&!!aNh,
aOg=parseInt(ae.mF.clientWidth*0.8||960);

if(bsj)
{
aMv(aOg,aNQ,aNh);
}
else
{
A.addEvent(dJ,"load",function()
{
aMv(aOg);
});
}
}

function aMv(asZ,brN,boD)
{
var Yu=brN||parseInt(dJ.naturalWidth||dJ.offsetWidth),
avk=boD||parseInt(dJ.naturalHeight||dJ.offsetHeight),
aKv=dJ.getAttribute("modifysize"),
fB,cH,cs;

!dJ.naturalWidth&&(dJ["naturalW"]=Yu);
!dJ.naturalWidth&&(dJ["naturalH"]=avk);
if(aKv)
{
var fB=parseInt(aKv||100),
cH=parseInt(Yu*(fB/100)),
cs=parseInt(avk*(fB/100));
dJ.style.width=cH+"px";
dJ.style.height=cs+"px";
}
else if(Yu>asZ)
{
var cs=parseInt(asZ*(avk/Yu)),
cH=asZ,
fB=cH/Yu,
avd=fB<0.25,
fk=parseInt((fB-(avd?0:0.25))*60*(avd?1:(100/175)))+(-1);

dJ.style.width=cH+"px";
dJ.style.height=cs+"px";
dJ.setAttribute("modifysize",(parseInt(fB*100)||1)+"%");
dJ.setAttribute("diffpixels",fk+"px");
dJ.setAttribute("scalingmode",avd?"normal":"zoom");

}
}
};


QMEditor.prototype.bgl=function(eK,Cg,RP,aga)
{

var ae=this,
bU=ae.qB,
PH=ae.uW?"height:"+ae.uW:"";

ae.mF.innerHTML=bU.azi.replace(
{
border:ae.akL.indexOf(";border:none")!=-1
?"border:none;":"",
tabIdx:Cg,
style:PH
}
);

A.createBlankIframe(ae.je,
{

obj:A.GelTags("textarea",ae.mF)[0].parentNode,
where:"afterBegin",

className:"qmEditorIfrmEditArea",
scrolling:"auto",
style:PH,
attrs:["hideFocus",isNaN(Cg)
?"":" tabIndex="+Cg].join(""),

header:bU.aVf,
body:bU.bjH.replace(
{
editable:ae.ajY(document)
?"":"contentEditable=true",
accesskey:RP?'accesskey="'+RP+'"':'',
content:eK
}
),

defcss:false,

onload:function()
{
ae.gq="iframe";
ae.uV=this;

ae.iJ=ae.uV.contentWindow;
ae.fK=ae.iJ.document;

ae.eL=ae.fK.body;
ae.wT=ae.uV.nextSibling;
ae.sV=ae.wT.nextSibling;


ae.axx();
ae.aXC();


ae.ail();
ae.aMV=true;

aga.call(ae);
}
}
);



};

QMEditor.prototype.bfN=function(eK,Cg,RP,aga)
{
var ae=this,
bU=ae.qB,
PH=ae.uW?"height:"+ae.uW:"";

ae.mF.innerHTML=ae.qB.azi.replace(
{
editcontainer:ae.qB.aWc.replace(
{
style:PH,
tabIdx:Cg
}
),
border:ae.akL.indexOf(";border:none")!=-1
?"border:none;":"",
style:PH
}
);


ae.gq="txt";
ae.uV=A.GelTags("td",ae.mF)[1].firstChild;


ae.eL=ae.uV;




ae.axx();

aga.call(ae);
};

QMEditor.prototype.biM=function()
{

this.xI=A.GelTags("td",this.mF)[0];
this.getTbExtern();

this.Yg=this.xI.firstChild.firstChild;
this.aKh=this.Yg.nextSibling;

if((this.wu=this.ayF(this.awh.toolbar)).length>0)
{
for(var i=this.wu.length-1;i>=0;i--)
{
A.insertHTML(this.Yg,"afterBegin",
this.qB.bbd
);
this.wu[i].funcArea=this.Yg.firstChild;
}
}

if((this.Bg=(this.NZ
&&this.ayF(this.awh.tbExtern))
||[]).length>0)
{
for(var i=this.Bg.length-1;i>=0;i--)
{
A.insertHTML(this.NZ,"afterBegin",
this.qB.bgS
);
this.Bg[i].funcArea=this.NZ.firstChild;
}
}

var ae=this;
this.je.setTimeout(
function()
{
ae.axp();
},
100
);
};

QMEditor.prototype.axx=function()
{
if(this.ajY(this.fK))
{


this.fK.designMode="on";
this.execCmd("useCSS",false);

this.je.focus();

}

this.mF.setAttribute("QMEditorId",this.Yi);
};

QMEditor.prototype.aXC=function()
{
var aBm=this.bhK,
lj=this.fK;

if(aBm)
{
A.E(aBm,function(aVr)
{
lj.createElement(aVr);
}
);
}

return this;
};

QMEditor.prototype.ayF=function(aZq)
{
var aDj=[];

A.E(
(aZq||"").replace(/\|/ig,"Separate").split(" "),
function(aCM)
{
if(aCM)
{
aDj.push({funcName:aCM});
}
}
);

return aDj;
};

QMEditor.prototype.axp=function()
{
var ae=this,
ayi={};

function tU(bgm,aax)
{
A.E(bgm,function(dL)
{
if(!dL.funcObj)
{
var ajr=dL.funcName;
if(QMEditor.FUNCLIB[ajr])
{
dL.funcObj=new QMEditor.FUNCLIB[ajr](
{
oParamSet:ae.auR,
editor:ae
}
);
dL.funcObj.tU(
{
container:dL.funcArea,
uiType:aax
}
);
}
else
{
ayi[ae.ayG[ajr]]=true;
}
}
}
);
};

tU(this.wu,"icon");
tU(this.Bg,
this.akL.indexOf(";icon:big")!=-1?"big":"text");
this.loadFile(ayi);
};

QMEditor.prototype.loadFile=function(bes,yL)
{
if(!this.Zi)
{
this.Zi={};
}

for(var hm in bes)
{
var ayJ=this.Zi[hm],
baJ=ayJ
?(A.now()-ayJ>2000):true;

if(baJ)
{

A.loadJsFile(A.getRes(hm),false,document,yL);
this.Zi[hm]=A.now();
}
}

return this;
};

QMEditor.prototype.ajY=function(ago)
{

var azP=ago&&ago.designMode
&&ago.designMode.toString().toLowerCase()||"";
return(azP=="off"||azP=="on")
&&!A.gbIsWebKit;
};

QMEditor.prototype.getEditContent=function(Bi,EJ,bkb)
{
switch(Bi)
{
case"html":
var nA=this.eL,
vd=this.wu&&this.wu.SpellCheck;
if(!bkb&&vd&&(vd.getStatus()&2))
{

var sG=F("spellcheckDocument",A.window).document,
aBp=nA.innerHTML;
if(sG.body&&aBp!=sG.body.innerHTML)
{
sG.body.innerHTML=aBp;
vd.ayt(sG);
nA=sG.body;
}
}
return EJ
?(nA.innerText||nA.textContent||"")
:nA.innerHTML;
case"text":
return this.sV.value+"<br>";
case"source":
return this.wT.value;
}
return"";
};

QMEditor.prototype.aBb=function(Bi,EJ)
{
if(EJ||Bi=="text")
{
return this.eL.value;
}
else
{
return(A.gbIsIE||A.gbIsOpera
?textToHtml
:textToHtmlForNoIE)(this.eL.value);
}
};

QMEditor.prototype.setEditContent=function(Bi,eK)
{
var ae=this;
switch(Bi)
{
case"html":
var dk=eK.replace(/<img.*?>/gi,
function(bj)
{
return bj.replace(/onload=\".*?\"/gi,"").replace(/onload=\'.*?\'/gi,"");
}
);


dk=dk.replace(/height\s*=\s*(\'|\")*\s*\d{1,3}(\.\d*)?%\s*\1/gi,"").replace(/height\s*:\s*\d{1,3}(\.\d*)?%;/gi,"");
this.eL&&(this.eL.innerHTML=dk||QMEditor.getBreakLine());
this.ahs()
.aTa();

var vd=ae.wu&&ae.wu.SpellCheck;
vd&&vd.aOE();

setTimeout(function(){ae.resizeNoScrollEditor(true);},500);
break;
case"text":
ae.sV.value=eK;
break;
case"source":
ae.wT.value=eK;
break;
}
return this;
};

QMEditor.prototype.ben=function(Bi,eK)
{
var dk=htmlDecode(eK

.replace(/\n/ig,"")

.replace(/<div>[ \t]*<br>[ \t]*<\/div>/ig,"\n")
.replace(/<div .*?>[ \t]*<br .*?>[ \t]*<\/div>/ig,"\n")
.replace(/(<\/div>)|(<\/p>)|(<br\/?>)/ig,"\n")
.replace(/<.*?>/ig,"")
).replace(/&nbsp;/ig," ")
.replace(/[\t ]*\n/g,"\n")
.replace(/\s*$/,"");
this.eL.value=dk;
};

QMEditor.prototype.aDk=function(Pz)
{
switch(Pz)
{
case"text":
if(!A.gbIsIE&&!A.gbIsWebKit)
{
this.setEditContent("html",
htmlToText(this.getEditContent("html")));
}
this.setEditContent("text",
this.getEditContent("html",true));
break;
case"source":
this.setEditContent("source",this.getEditContent("html"));
break;
}
return this;
};

QMEditor.prototype.bjO=function(Pz)
{
if(Pz=="html"||Pz=="source")
{
this.setEditContent("html",(A.gbIsIE||A.gbIsOpera
?textToHtml
:textToHtmlForNoIE)(this.getEditContent("text")));
}
if(Pz=="source")
{
this.aDk("source");
}
};

QMEditor.prototype.acD=function(nC,nL)
{
if(nC&&typeof(nL)=="number")
{
if(!window.getSelection)
{
var bI=(nC.createTextRange?nC:this.eL)
.createTextRange();
bI.moveToElementText(nC);
bI.moveStart("character",nL);
bI.collapse(true);
bI.select();
}
else if(nC.tagName!="TEXTAREA")
{
var ae=this;

function tS()
{
ae.iJ.focus();
var dD=ae.iJ.getSelection();

if(!dD)
{
return false;
}

if(dD.rangeCount>0)
{
dD.removeAllRanges();
}

var bI=ae.fK.createRange();
bI.selectNode(nC&&nC.firstChild||
(nC.nodeType?nC:null)
||ae.eL.firstChild||ae.eL);
bI.collapse(true);
dD.addRange(bI);
return true;
}

if(!tS())
{
this.je.setTimeout(tS);
}
}
else
{
nC.selectionStart=nL;
nC.selectionEnd=nL;
}




}

return this;
};

QMEditor.prototype.Wi=function(cv)
{
if(cv!="equal")
{
return true;
}

var bI=this.fK.body.createTextRange();
bI.moveToElementText(cv=="equal"
?this.eL
:this.mF);

try
{
return bI[cv=="equal"?"isEqual":"inRange"](
this.fK.selection.createRange());
}
catch(aL)
{
return false;
}
};

QMEditor.prototype.ahs=function()
{
if(typeof(this.azd)=="function")
{
try
{
this.azd.call(this);
}
catch(aL)
{
}
}

if(A.gbIsIE)
{
A.E(A.GelTags("div",this.eL),function(eE)
{
var VX=eE.firstChild,
aDo=VX&&VX.nodeType==3
&&!VX.nextSibling?VX.nodeValue:"";

if(aDo.length==1
&&fixNonBreakSpace(aDo)==" ")
{
eE.innerHTML="";
}
}
);
}

return this;
};

QMEditor.prototype.ail=function()
{
if(A.gbIsIE)
{
var ae=this,
yG=ae.getEditorArea(),
cs=yG.clientHeight||yG.offsetHeight||(+yG.style.height),
aVH=ae.isShowToolBar()?ae.xI.clientHeight:0,
fP=cs-aVH-2;

!isNaN(fP)&&fP>0&&(ae.uV.parentNode.style.height=
ae.wT.style.height=
ae.sV.style.height=fP+"px");





if(!ae.biy&&(ae.biy=true))
{
yG.onpropertychange=function()
{
ae.ail();
}
}
}
};

QMEditor.prototype.aQO=function()
{
var ae=this;

A.addEvent(ae.je,"unload",function()
{
QMEditor.delEditor(ae.Yi);
}
);
return ae;
};

QMEditor.prototype.Rg=function()
{
var ae=this,
lj=ae.fK;

function hideMenu()
{
ae.hideMenu(null,true);
}

if(ae.gq=="iframe")
{

A.addEvent(lj,"mousedown",hideMenu);
}

if(typeof(ae.azA)=="function")
{
A.addEvent("txt"===ae.gq?ae.eL:lj,
"mousedown",function(ah)
{
ae.azA.call(ae,ah);
}
);
}

if(typeof(this.Cp)=="function")
{
A.addEvent("txt"===ae.gq?ae.eL:lj,
"click",function(ah)
{
ae.Cp.call(ae,ah);
}
);
}

return ae;
};

QMEditor.prototype.moveToAncestorNode=function(aJC)
{
var bM=this.getSelectionElement();

while(bM&&bM.nodeName!=aJC)
{
bM=bM.parentNode;
}

return bM;
};

QMEditor.prototype.getSelectionElement=function()
{
var bM,bI,
dD=this.fK.selection;

if(this.rd!==true)
{
return bM;
}

if(dD)
{
bI=dD.createRange();

if(dD.type=="Control")
{
if(bI.length==1&&bI.item(0).nodeType==1)
{
bM=bI.item(0);
}
else
{
for(var i=0,aB=bI.length;i<aB;i++)
{
if(bI(i).parentNode)
{
bM=bI(i).parentNode;
break;
}
}
}
}
else
{
bM=bI.parentElement();
}
}
else
{
try
{
bI=this.iJ.getSelection().getRangeAt(0);

if(!(bI.startContainer!=bI.endContainer
||bI.startContainer.nodeType!=1||bI.startOffset!=bI.endOffset
-1))
{
bM=bI.startContainer.childNodes[bI.startOffset];
if(bM.nodeType!=1)
{
bM=null;
}
}

if(!bM)
{
var aNF=bI.startContainer,
bnY=bI.endContainer;

if(A.gbIsFF&&aNF.nodeType==3&&bnY.tagName=="BODY")
{



bM=aNF;
}
else
{
bM=bI.endContainer;
}
}
}
catch(e)
{

}

}

return bM;
};




QMEditor.prototype.btG=function(ah)
{
var ae=this,
dQ=
{
"(":")",
"[":"]",
"{":"}",
"\uFF08":"\uFF09",
"\"":"\"",
"'":"'",
"\u201C":"\u201D",
"\u2018":"\u2019"
},
aV;

switch(ah.keyCode)
{
case 57:
ah.shiftKey&&(aV="(");
break;
case 219:
aV=ah.shiftKey?"{":"[";
break;
case 222:
aV=ah.shiftKey?"\"":"'";
break;
}

if(aV)
{
var lj=ae.fK,
Ij=ae.iJ,
dD,bI,zz,QL,cCy;

if(lj.selection)
{
dD=lj.selection;
bI=dD.createRange();
bI.moveEnd('character',-1);
var Jt=bI.moveEnd('character',2),
iE=bI.text;
zz=iE.slice(0,1)||aV;
QL=iE.slice(1,2)||"";

if(!!dQ[zz]&&dQ[zz]!=QL)
{
Jt==2&&bI.moveEnd('character',-1);
bI.collapse(false);
bI.select();
bI.pasteHTML(dQ[zz]);
bI.moveEnd('character',-1);
bI.collapse(false);
bI.select();
}
}
else
{
dD=Ij.getSelection();
bI=dD.getRangeAt(0);

var zO=bI.startContainer,
dN=bI.startOffset,
aet=zO.childNodes[dN-1];

if(zO.nodeType==3)
{
QL=zO.nodeValue[dN];
zz=zO.nodeValue[dN-1]||"";
}
else if(aet&&aet.nodeValue)
{
zz=aet.nodeValue[0]||aV;
QL=zO.childNodes[dN].nodeValue[0]||"";
}
else
{
zz=aV;
QL=""
}

if(!!dQ[zz]&&dQ[zz]!=QL)
{
dD.removeAllRanges();
bI.deleteContents();

var avy=lj.createRange(),
aqf=lj.createTextNode(dQ[zz]);


if(zO.nodeType==3)
{
zO.insertData(dN,aqf.nodeValue);
}

else
{
zO.insertBefore(aqf,aet);
}

avy.setEnd(zO,dN);
avy.setStart(zO,dN);

dD.addRange(avy);
ae.focus();
}
}
}
};
























































































QMEditor.prototype.bag=function()
{
var ae=this;

if(typeof(ae.Ss)=="function")
{
A.addEvent("txt"===ae.gq?ae.eL:ae.fK,
"keydown",function(ah)
{
ae.Ss.call(ae,ah);

}
);
}
if(typeof(ae.aNL)=="function")
{
A.addEvent("txt"===ae.gq?ae.eL:ae.fK,
"keypress",function(ah)
{
ae.aNL.call(ae,ah);
}
);
}
if(typeof(ae.alD)=="function")
{
A.addEvent("txt"===ae.gq?ae.eL:ae.fK,
"keyup",function(ah)
{
ae.alD.call(ae,ah);
ae.bvz&&ae.btG(ah);
}
);
}
if(typeof(ae.Xl)=="function")
{
A.addEvent("txt"===ae.gq?ae.eL:ae.fK.body,
"paste",function(ah)
{
ae.Xl.call(ae,ah);
}
);
}

return ae;
};

QMEditor.prototype.aXh=function()
{
var ae=this;

A.addEvent(ae.fK,"click",function()
{
ae.eL.focus();
});

A.addEvents(
"txt"===ae.gq?ae.eL:ae.iJ,
{
focus:function(ah)
{
if(!ae.rd)
{
ae.rd=true;

if(A.gbIsFF)
{
var dD=ae.iJ.getSelection();
dD.anchorNode.tagName=="BODY"&&!dD.anchorOffset&&
ae.acD(ae.eL.firstChild,0);
}

else if(A.gbIsIE)
{
var xe,Ky;
if(ae.fK.selection.createRange().compareEndPoints(
"StartToStart",ae.eL.createTextRange())==0&&
(xe=ae.eL.firstChild)&&
xe.nodeName=="DIV")
{
if((Ky=xe.firstChild))
{
Ky.nodeName=="FONT"&&
ae.acD(Ky,0);
}
else
{

xe.innerHTML=" ";
ae.acD(xe.firstChild,0);
}
}
}

if(typeof(ae.VC)=="function")
{
ae.VC.call(ae,ah);
}
}
},
blur:function(ah)
{
if(ae.rd)
{
ae.rd=false;

typeof(ae.XT)=="function"&&
ae.XT.call(ae,ah);
}
}
}
);

var ko=0;

A.addEvents(
ae.eL,
{
dragenter:function(ah)
{
if(!ae.rd)
{
ae.rd=true;

typeof(ae.VC)=="function"&&
ae.VC.call(ae,ah);
}
ko&&(ae.je.clearTimeout(ko)||(ko=0));
},
dragleave:function(ah)
{
if(ae.rd)
{
ko&&ae.je.clearTimeout(ko);
ko=ae.je.setTimeout(function()
{
if(ae.rd)
{
ae.rd=false;

typeof(ae.XT)=="function"&&
ae.XT.call(ae,ah);
}
},
500
);
}
}
}
);

return ae;
};

QMEditor.prototype.aVe=function()
{
var ae=this;

if(!A.gbIsIE)
{
A.addEvent(ae.iJ,"focus",function(ah)
{
try
{
var dD=ae.iJ.getSelection();
if(dD.focusNode&&dD.focusNode.tagName=="HTML")
{
dD.collapse(ae.eL.firstChild
||ae.eL,0);
}
}
catch(aL)
{
QMEditor.getTopWin().doPageError(
["editor focus error: ",aL.message].join(""));
}
}
);
}
else
{
A.addEvent(ae.iJ,"blur",function(ah)
{
try
{
ae.eL.ownerDocument.selection.empty();
}
catch(aL)
{


}
}
);
}
};

QMEditor.prototype.aZD=function()
{
var ae=this;

if(A.gbIsIE)
{
function bdn(ah)
{
var ft=ah.keyCode;
if(!ah.altKey
&&!ah.ctrlKey
&&(ft>=48
&&ft<=57||ft>=65
&&ft<=90||ft>=96
&&ft<=111||ft>=186
&&ft<=192||ft>=219
&&ft<=222||ft==8
||ft==32||ft==13
||ft==46||ft==229 
))
{
azR(ft==8?ah:null);
}
}

function azR(ah,axu,bcJ)
{
if(!ae.Wi("equal"))
{
return;
}

function Zp()
{
ae.eL.innerHTML="<div>&nbsp;</div>";
ae.ahs().focus(0);

if(!bcJ&&ah)
{
A.preventDefault(ah);
}
}

if(typeof(axu)=="number")
{
ae.je.setTimeout(Zp,axu);
}
else
{
Zp();
}
}

A.addEvent(ae.eL,"keydown",bdn);
A.addEvent(ae.eL,"cut",function()
{
azR(null,0,true);
}
);
}

return ae;
};

QMEditor.prototype.aUV=function()
{
var ae=this;

if(A.gbIsIE)
{
A.addEvent(this.eL,"keydown",function(ah)
{
if(ae.Wi()
&&ah.keyCode==8
&&ae.fK.selection.type=="Control"
)
{
ae.fK.selection.clear();
A.preventDefault(ah);
return;
}
}
);
}

return ae;
};

QMEditor.prototype.bfb=function()
{
var ae=this;


if(ae.ban)
{
throw new Error("*** can not set once again!!");
}

ae.ban=true;

var lj=ae.fK;




A.addEvent(lj,"mouseup",function(ah)
{

ae.Lf(ah,true);
}
);
A.addEvent(ae.iJ,"focus",function(ah)
{
ae.loadLastRange();
ae.Lf(ah,true);
}
);
A.addEvent(lj,"mousedown",function(ah)
{

ae.Lf(ah);
}
);
A.addEvent(lj,"keydown",function(ah)
{

ae.Lf(ah,true);
}
);
A.addEvent(lj,"keyup",function(ah)
{




ae.Lf(ah,true);
}
);



A.addEvent(lj,"keydown",function(ah)
{
var ayx=ah.keyCode;
if(ah.ctrlKey&&ayx>=65&&ayx<=90)
ae.agL("keydown",ah);
}
);

A.addEvent(lj,"contextmenu",function(ah)
{
ae.agL("contextmenu",ah);
}
);

A.addEvent(ae.eL,"paste",function(ah)
{
ae.agL("paste",ah);
}
);

return ae;
};

QMEditor.prototype.LB=function()
{
if(this.sK!="html")
{
return null;
}

if(window.getSelection)
{
var dD=this.iJ.getSelection(),
bI=null;

try
{
bI=dD?dD.getRangeAt(0):null;
}
catch(e)
{
A.debug("_getRange err")
bI=null;
}
return bI
}
else
{
return this.fK.selection.createRange();
}
};

QMEditor.prototype.aCR=function(ga)
{
if(!ga)
{
return false;
}

if(window.getSelection)
{
var dD=this.iJ.getSelection();
dD.removeAllRanges();
dD.addRange(ga);
}
else
{
ga.select();
}

return true;
};

QMEditor.prototype.beS=function()
{
if(typeof(this.aaB)=="function")
{
this.aaB.call(this);
}

A.gbIsIE&&(this.awO=this.LB());
};

QMEditor.prototype.aTq=function()
{
return this.aCR(this.awO);
};

QMEditor.prototype.aTa=function()
{
this.awO=null;
};

QMEditor.prototype.agL=function(va,ah)
{
var ae=this,
bO=ae[["on",va,"List"].join("")],
aB=bO&&bO.length||0;

if(aB>0&&ae.Wi())
{
for(var i=0;i<aB;i++)
{
if(bO[i](ah)===true)
{
break;
}
}
}

return ae;
};

QMEditor.prototype.Lf=function(ah,bcB)
{
var ae=this,
bO=ae.onselectionchangeList||[];

if(ae.aiy)
{
ae.je.clearTimeout(ae.aiy);
}

if(ae.Wi())
{
function aBi()
{

ae.beS();

for(var i=0,aB=bO.length;i<aB;i++)
{
if(bO[i](ah)===true)
{
break;
}
}

if(typeof(ae.aAC)=="function")
{
ae.aAC.call(ae);
}
};

if(bcB)
{
aBi();
}
else
{
ae.aiy=this.je.setTimeout(
function()
{
ae.aiy=null;
aBi();
},100
);
}
}
return ae;
};

QMEditor.prototype.WK=function(aq,hS,bz)
{
if(this.sK!="html")
{
return false;
}

if(aq=="execCommand")
{
!(bz&&bz=="delImg")&&this.focus();
}

try
{
return this.fK[aq](hS,false,bz||false);
}
catch(e)
{
return false;
}
};

QMEditor.prototype.execCmd=function(hS,bz,aml)
{
var ae=this;

if(ae.aMV&&!ae.rd)
{
ae.focus();
ae.rd=true;
setTimeout(function()
{
ae.execCmd(hS,bz,aml);
}
);
return true;
}
else
{
this.loadLastRange();

var jM=ae.WK("execCommand",hS,bz);

if(jM)
{
if(typeof(aml)=="function")
{
aml.call(ae);
}
ae.aMV&&ae.Lf({},true);
}

return jM;
}
};

QMEditor.prototype.queryCmdState=function(hS)
{
return this.WK("queryCommandState",hS);
};

QMEditor.prototype.queryCmdEnabled=function(hS)
{
return this.WK("queryCommandEnabled",hS);
};

QMEditor.prototype.queryCmdValue=function(hS)
{
return this.WK("queryCommandValue",hS);
};

QMEditor.prototype.queryFormatBlockState=function()
{
function boH(an)
{
var aw=an;
while(aw&&aw.parentNode)
{
if(aw.tagName&&aw.tagName=="BLOCKQUOTE"&&A.attr(aw,"formatblock"))
{
return true;
}
else
{
aw.parentNode&&(aw=aw.parentNode);
}
}
return false
}
function brB(ga)
{

var bqb=function()
{
var atF=ga.cloneContents(),
ash=atF.ownerDocument.createElement("div"),
VQ="";
ash.appendChild(atF);
VQ=ash.innerHTML;
atF=ash=aT;
return VQ
},
bul=A.gbIsIE?(ga.htmlText||""):bqb(),
brX=/<blockquote[^>]+formatblock[^>]+>.*?<\/blockquote>/gi;
return brX.test(bul);
}
return boH(this.getSelectionElement())||brB(this.LB());
};

QMEditor.prototype.getfOnShowInstallactive=function()
{
return this.aJg;
};

QMEditor.prototype.getPhotoConfig=function()
{
return this.aRl;
};

QMEditor.prototype.getfOnPreview=function()
{
return this.aZF;
};














QMEditor.prototype.aCZ=function()
{
var bPW=arguments.callee,
ae=this;

setTimeout(function()
{
ae.resizeEditor(true);


(ae.PF&&!ae.uW)&&
ae.je.setInterval(function(){ae.resizeEditor();},1500);
},
A.gbIsIE?100:300
);
};





QMEditor.prototype.resizeEditor=function(aFx)
{
var ae=this,
nA=ae.eL,
jm=ae.sV,
Nh=ae.PF,
Ej=ae.YH||Nh||0;

if(Nh&&(aFx||!ae.abk||
(nA.scrollHeight<=Ej&&jm.style.display=="none")||
(jm.scrollHeight<=Ej&&jm.style.display=="block")))
{
var aqs=ae.getEditorArea(),
Nh=ae.PF,
aH=ae.je.document,
oQ=aH.documentElement,
aIG=aH.body,
wn=oQ.clientHeight,
lR=Math.min(aIG.scrollHeight,oQ.scrollHeight)

+(A.gbIsIE&&A.gnIEVer===6?10:0),
anQ=aqs.clientHeight,
nj=wn-lR+anQ;

nj=nj<Nh?Nh:nj;
nj!=anQ&&(aqs.style.height=nj+"px");
ae.YH=ae.eL.clientHeight;
}


};


QMEditor.prototype.resizeNoScrollEditor=function(aWw,ah)
{
var ae=this,
WS=A.gbIsIE,
azo=WS&&A.gnIEVer===6,
nA=ae.eL,
Ej=ae.YH||ae.PF||(ae.YH=nA.clientHeight),
lR=nA.scrollHeight;

if(ae.abk&&Ej!=0)
{
if(lR>Ej)
{
var Pw=ae.mF;

if(WS&&aWw)
{

A.GelTags("td",ae.mF)[1].style.height=(lR+"px");
Pw.style.height=(lR)+"px";
}
else
{
var nj=ae.bsX();

nj<Ej&&(nj=Ej);


if(ae.uW||azo)
{
ae.uV.style.height=(nj-5-ae.xI.offsetHeight)+"px";
}
!azo&&(Pw.style.height=nj+"px");
}
}
}
};

QMEditor.prototype.bsX=function()
{
var ae=this,
nA=ae.eL,
fk=25;


ae.isShowToolBar()&&(fk+=ae.xI.offsetHeight);

nA.scrollWidth>nA.clientWidth&&(fk+=10);


var aw=nA.lastChild,
bP=A.calcPos(aw),
nj=bP[0]+bP[5]+fk;


while(nj==fk&&aw)
{
aw=aw.previousSibling;
bP=A.calcPos(aw);
nj=bP[0]+bP[5]+fk;
}


A.gbIsFF&&bP[5]==0&&(nj+=5);
return nj;
};

QMEditor.prototype.ahW=function()
{
if(!this.abk)
{
return;
}
var ae=this,
jm=ae.sV,
Pw=ae.mF,
lH=ae.YH||ae.PF,
fk=QMEditor.getTopWin().gbIsIE?10:0,
lR;

A.gbIsIE&&(Pw.style.height=lH+"px");
jm.style.height=lH+"px";
lR=jm.scrollHeight;
if(jm.clientHeight<lR)
{
jm.style.height=(lR)+"px";
!(A.gbIsIE&&A.gnIEVer==6)&&(Pw.style.height=(lR+fk)+"px");
}
};

QMEditor.prototype.biv=function()
{
var ae=this,
de="txt"===ae.gq?ae.eL:ae.fK;

if(!ae.abk)
{
return;
}
ae.eL.style.overflowY="hidden";
A.addEvent(de,"keydown",function(ah){ae.resizeNoScrollEditor(false,ah);});
A.addEvent(de,"keyup",function(ah){ae.resizeNoScrollEditor();});
A.addEvent(de,"paste",function(ah){setTimeout(function(){ae.resizeNoScrollEditor();},500)});

ae.sV.style.overflowY="hidden";
A.addEvent(ae.sV,A.gbIsIE?"propertychange":"input",function(ah)
{
if(A.gbIsIE)
{
ah.propertyName=="value"&&ae.ahW();
}
else
{
ae.ahW();
}

}
);
setTimeout(function(){ae.resizeNoScrollEditor();},500);

return ae;
};




QMEditor.createEditor=function(ci)
{
return new this(ci);
};

QMEditor.getEditorSet=function()
{
return this.getTopWin().gQmEditorSet||{};
};

QMEditor.getEditor=function(ay)
{
var azH=this.getTopWin(),
aZ=azH.gQmEditorSet&&azH.gQmEditorSet[ay];

if(aZ)
{
if(aZ.test())
{
return aZ;
}
else
{
this.delEditor(ay);
}
}

return null;
};

QMEditor.getTopWin=function()
{
try
{
var cij=A.document;
return A.window;
}
catch(aL)
{
return window;
}
};

QMEditor.setEditor=function(zI)
{
if(!this.getEditor)
{
return false;
}

var aJ=zI.getEditorId(),
jL=this.getTopWin();
this.delEditor(aJ);

if(!jL.gQmEditorSet)
{
jL.gQmEditorSet={};
}
jL.gQmEditorSet[aJ]=zI;

return true;
};

QMEditor.delEditor=function(ay)
{
var ae=this,
jL=ae.getTopWin();

if(jL.gQmEditorSet&&jL.gQmEditorSet[ay])
{
delete jL.gQmEditorSet[ay];
}
};

QMEditor.hideEditorMenu=function()
{













}

QMEditor.getBreakLine=function(hQ,zV)
{










var aLC=zV&&(zV.family||zV.size||zV.color)?[
"<FONT ",
zV.family&&"face='"+zV.family+"' ",
zV.size&&"size='"+zV.size+"' ",
zV.color&&"color='"+zV.color+"' ",
">",
A.gbIsIE?"&nbsp;":"<BR>",
"</FONT>"
].join(""):A.gbIsIE?"&nbsp;":"<BR>";


return(new Array((hQ||1)+1)).join(A.gbIsFF?aLC:"<DIV>"+aLC+"</DIV>");

};

QMEditor.setupFunc=function()
{
A.E(this.getEditorSet(),function(aWT)
{
aWT.axp();
});
};


QMEditor.CONST={};
QMEditor.CONST.qO="QMEditor_45t62ASG^TfgSDA@#!Raaf";


QMEditor.CONST.LANGUAGE={};
QMEditor.CONST.LANGUAGE.zh_CN={
CHG_CONTENTTYPE:"Some of the formats will be lost if you convert the content into plain text. Do you want to continue? "
};


QMEditor.CONST.FILES={

"$js_path$/com/kits/qmeditor/base/js/editor_toolbar1341a3.js":"Separate Bold Italic Underline FontName FontName FontSize ForeColor BackColor AlignMode Serial Indent Quot CreateLink SourceEdit Preview SpellCheck UploadEml",
"$js_path$/com/kits/qmeditor/base/js/editor_toolbar_plus1341a3.js":"ClipImg Photo ScreenSnap Mo Music"
};


QMEditor.CONST.FUNCLIST={};
QMEditor.CONST.FUNCLIST.BASE={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent | CreateLink Mo Photo ScreenSnap SourceEdit"
};
QMEditor.CONST.FUNCLIST.COMPOSE={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit Preview SpellCheck",
tbExtern:"Photo ScreenSnap Mo Music"
};
QMEditor.CONST.FUNCLIST.BIZMAIL_COMPOSE={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit Preview SpellCheck",
tbExtern:"Photo ScreenSnap Mo"
};
QMEditor.CONST.FUNCLIST.QF_COMPOSE={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit Preview UploadEml",
tbExtern:""
};
QMEditor.CONST.FUNCLIST.GROUP={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit Preview",
tbExtern:"Photo ScreenSnap Mo"
};
QMEditor.CONST.FUNCLIST.NOTE={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit",
tbExtern:"Photo ScreenSnap Mo"
};
QMEditor.CONST.FUNCLIST.READMAIL={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit",
tbExtern:"Photo Mo ScreenSnap"
};
QMEditor.CONST.FUNCLIST.ORIGINAL={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit Preview",
tbExtern:"Photo Mo"
};
QMEditor.CONST.FUNCLIST.MO={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent | CreateLink Mo SourceEdit"
};


QMEditor.CONST.bJ={
azi:A.T([
'<table cellspacing=0 cellpadding=0 class="qmEditorBase" style="$border$" >',
'<tr style="display:none;"><td height="10px" class="qmEditorToolBar" valign="top" unselectable="on" onmousedown="return false;" >',
'<div class="qmEditorToolBarDiv">',
'<div></div><div style="display:none;"></div><div class="qmEditorBtnIcon" style="width:1px;" ></div>',
'</div>',
'</td></tr>',
'<tr><td height="100%" valign="top" unselectable="on" class="qmEditorContent">',
'$editcontainer$',
'<textarea class="qmEditorText" tabindex="$tabIdx$" style="display:none;font-size:12px;$style$"></textarea>',
'<textarea class="qmEditorText" tabindex="$tabIdx$" style="display:none;font-size:12px;$style$"></textarea>',
'</td></tr>',
'</table><div class="qmEditorBaseBd"></div>'
]),
chJ:A.T([
'<div class="qmEditorDivEditArea">$content$</div>'
]),
aWc:A.T([
'<textarea class="qmEditorText" tabindex="$tabIdx$" style="font-size:12px;$style$"></textarea>',
]),
aVf:A.T([
'<script>',
'window.onerror = function() { return true; };',
'</script>',
'<style>',
'body {margin:0;overflow:auto;font:normal 14px Verdana;background:#fff;padding:2px 4px 0;cursor:text;}',
'body, p, font, div, li { line-height: 1.5;}',
'body, td, th {color:#000000;}',
'.i {width:100%;*width:auto;table-layout:fixed;}',
'pre {white-space: pre-wrap;white-space: -moz-pre-wrap;white-space: -pre-wrap;white-space: -o-pre-wrap;word-wrap: break-word;}',
'a img {border:none;}',

'a { color: -moz-hyperlinktext !important;text-decoration: -moz-anchor-decoration;}',
'</style>',
]),
bjH:A.T([
'<body $editable$ $accesskey$>$content$</body>',
]),
bbd:A.T([
'<div class="qmEditorToolBarItem unselect" unselectable="on"></div>'
]),
bgS:A.T([
'<span class="qmEditorTBExternItem unselect"></span>'
]),
BOTTON_ICON:A.T([
'<div class="qmEditor$id$ qmEditorBtnIcon$id$ qmEditorBtnIcon unselect $ui.clsName$" unselectable="on" >',
'<input type="button" class="qmEditorIcon" unselectable="on" onmousedown="return false;"/>',
'</div>']),
BOTTON_TEXT:A.TE([
'<span class="qmEditor$id$ qmEditorBtnText$id$ qmEditorBtnText unselect $ui.clsName$" unselectable="on" $@$if($id$=="Music")$@$opt="music"$@$endif$@$>',
'<span class="qmEditorBtnTextCt">',
'<input type="button" class="qmEditorIcon" unselectable="on" onmousedown="return false;"/>',
'<a unselectable="on">$ui.label$</a>',
'</span>',
'$@$if($ui.moreBtn$)$@$',
'<input type="button" class="qmEditorMoreIcon" unselectable="on" onmousedown="return false;" opt="more"/>',
'$@$endif$@$',
'</span>']),
BOTTON_BIG:A.T([
'<a class="qmEditor$id$ qmEditorBtnText$id$ qmEditorBtnText unselect $ui.clsName$" unselectable="on">',
'<input type="button" class="qmEditorIcon qmEditorBigIcon" unselectable="on" onmousedown="return false;"/>',
'$ui.label$',
'</a>']),
bUe:A.T([
'<div class="qmEditorMenuBorder" style="display:none;$style$" unselectable="on" onmousedown="return false;" >$innerHTML$</div>']),
bSS:A.T([
'<div class="qmEditorMenuItem" param="$param$" style="$style$;" unselectable="on" $event$ >',
'$content$',
'</div>']),
blu:A.T([
'onmouseover="',
'if ( this.className != \'QMEditorMenuItemDisabled\' && this.className != \'qmEditorMenuItemOver\' )',
'{',
'this.className = \'qmEditorMenuItemOver\';',
'}',
'" onmouseout="',
'var _sClassName = this.getAttribute( \'curclass\' ) || \'qmEditorMenuItem\';',
'if ( this.className != _sClassName )',
'{',
'this.className = _sClassName',
'}',
'" '])
};



QMEditor.prototype.getTemplate=function()
{
return this.qB;
};


QMEditor.CONST.getTemplate=function()
{
return QMEditor.CONST.bJ;
}

QMEditor.prototype.getLanguage=function()
{
return this.CL;
};

QMEditor.prototype.getEditMode=function()
{
return this.sK;
};

QMEditor.prototype.setEditMode=function(cv)
{
this.sK=cv;
};

QMEditor.prototype.getEditDoc=function()
{
return this.fK;
};

QMEditor.prototype.getToolBarInfo=function()
{
return this.wu;
};

QMEditor.prototype.getEditBody=function()
{
return this.eL;
};

QMEditor.prototype.getSrceBody=function()
{
return this.wT;
};

QMEditor.prototype.getEditObj=function()
{
return this.uV;
};

QMEditor.prototype.getRichToolBarObj=function()
{
return this.Yg;
};

QMEditor.prototype.getSrceToolBarObj=function()
{
return this.aKh;
};


QMEditor.Plugins={};
QMEditor.prototype.clx=function()
{
var ae=this;
for(var aWL in QMEditor.Plugins)
{
aWL&&QMEditor.Plugins[aWL]&&QMEditor.Plugins[aWL](ae);
}
};


window.QMEditor=QMEditor;
}
)(QMEditorAdapter);
(function(A,aT)
{
QMEditor.FUNCLIB={};


QMEditor.FUNCLIB.inheritFrom=function(ayh,YG)
{
ayh.prototype=new YG();
return ayh;
}

QMEditor.FUNCLIB.BASE=function(ci)
{
this.hP="_BASE";
this.ku="label";
this.aua=false;
this.ael="";
this.tO={};
this.auR={};
};


QMEditor.FUNCLIB.BASE.prototype.tU=function(ci)
{
if(this.bbz())
{
return false;
}

this.fj=ci.container;
this.Ay=ci.uiType
if(!this.eO||!this.fj)
{
return false;
}

this.fj.innerHTML=this.Vr();

if(this.ael)
{
this.fj.className=this.ael;
}

if(this.Ay=="text")
{
var sz=this.fj.firstChild.firstChild;

sz.onmouseover=function()
{
this.getElementsByTagName('a')[0].style.textDecoration='underline';
}
sz.onmouseout=function()
{
this.getElementsByTagName('a')[0].style.textDecoration='none';
}
}

if(typeof(this.ku)!="string")
{
this.ku="label";
}

if(this.ku!="label")
{
if(typeof(this.Cp)!="function")
{
var ae=this,
aZJ={
btn:ae.IW,
checkbox:ae.IW,
menu:ae.aUH
}[ae.ku];
ae.Cp=function(ah)
{
if(ae.eO.changeEditMode)
{
ae.eO.changeEditMode("html");
}
aZJ.call(this,ah);
};
}






if(this.ku=="btn")
{
this.aXf=this.bix;
}

this.VV("keydown");
this.VV("selectionchange");
this.VV("contextmenu");
this.VV("paste");

this.setMouseOverEvent();
this.Rg();
}

this.init_();

this.bil=true;

return true;
};

QMEditor.FUNCLIB.BASE.prototype.init_=function()
{

};

QMEditor.FUNCLIB.BASE.prototype.bbz=function()
{
return this.bil;
};

QMEditor.FUNCLIB.BASE.prototype.Vr=function()
{
var brM=typeof(this.Ay)!="string"?(this.Ay="icon"):this.Ay,
ic=this.eO.qB[["BOTTON_",brM.toUpperCase(),
(this.ku=="custom"?"_"+this.hP.toUpperCase():"")].join("")]||"",
awb={id:this.hP,ui:this.tO||{}};
return ic.replace(awb);
};

QMEditor.FUNCLIB.BASE.prototype.apL=function()
{
if(this.auC)
{
this.auC();
this.fj.innerHTML=this.Vr();
}
}

QMEditor.FUNCLIB.BASE.prototype.Rm=function()
{
return this.aua;
};

QMEditor.FUNCLIB.BASE.prototype.ZR=function(uy)
{
this.aua=uy;
if(this.Ay=="icon")
{
var de=this.fj.firstChild;
A.setClass(de,de.className.replace(" qmEditorBtnIconCheck","")+
(uy?" qmEditorBtnIconCheck":""));
}
};

QMEditor.FUNCLIB.BASE.prototype.VV=function(va)
{



var adh={
"keydown":this.Ss,
"keyup":this.alD,
"selectionchange":this.aXf,
"contextmenu":this.aYs,
"paste":this.Xl
}[va];

var ae=this;
if(typeof(adh)=="function")
{
ae.eO.addEvent(va,function(ah)
{
adh.call(ae,ah);
}
);
}

return ae;
};

QMEditor.FUNCLIB.BASE.prototype.setMouseOverEvent=function()
{
var ae=this;
if(ae.Ay=="icon")
{
var aS=ae.fj;
aS.onmouseover=function()
{
A.setClass(this.firstChild,this.firstChild.className.replace(" qmEditorBtnIconOver","")+
" qmEditorBtnIconOver");
};

aS.onmouseout=function()
{
A.setClass(this.firstChild,this.firstChild.className.replace(" qmEditorBtnIconOver",""));
};
}

return ae;
};

QMEditor.FUNCLIB.BASE.prototype.Rg=function()
{
var ae=this;

if(typeof(ae.Cp)!="function")
{
return false;
}

ae.fj.onclick=function(ah)
{
ah=ah||ae.eO.je.event;


ae.Cp.call(ae,ah);
A.preventDefault(ah);
A.stopPropagation(ah);
};






return true;
};

QMEditor.FUNCLIB.BASE.prototype.IW=function(ah)
{
this.eO.execCmd(this.JH);
this.eO.hideMenu();
};

QMEditor.FUNCLIB.BASE.prototype.bix=function(ah)
{
var aZ=this.eO;
if(this.JH=="formatblock")
{

this.ZR(aZ.queryFormatBlockState());
}
else
{
aZ.queryCmdEnabled(this.JH)&&
this.ZR(aZ.queryCmdState(this.JH));
}
};

QMEditor.FUNCLIB.BASE.prototype.getBindEditor=function()
{
return this.eO;
};



QMEditor.FUNCLIB.BASE.prototype.setCmd=function(hS)
{
this.JH=hS;
};

QMEditor.FUNCLIB.BASE.prototype.getCmd=function()
{
return this.JH;
};

QMEditor.FUNCLIB.BASE.prototype.setBindEditor=function(zI)
{
this.eO=zI;
};

QMEditor.FUNCLIB.BASE.prototype.setId=function(ay)
{
this.hP=ay;
};

QMEditor.FUNCLIB.BASE.prototype.getId=function()
{
return this.hP;
};

QMEditor.FUNCLIB.BASE.prototype.setType=function(aq)
{
this.ku=aq;
};

QMEditor.FUNCLIB.BASE.prototype.getType=function()
{
return this.ku;
};

QMEditor.FUNCLIB.BASE.prototype.setUiConfig=function(aj)
{
this.tO=aj;
};

QMEditor.FUNCLIB.BASE.prototype.getUiConfig=function()
{
return this.tO;
};

QMEditor.FUNCLIB.BASE.prototype.setfOnKeyDown=function(dz)
{
this.Ss=dz;
};

QMEditor.FUNCLIB.BASE.prototype.setfOnContextMenu=function(dz)
{
this.aYs=dz;
};

QMEditor.FUNCLIB.BASE.prototype.setfOnPaste=function(dz)
{
this.Xl=dz;
};

QMEditor.FUNCLIB.BASE.prototype.setfOnClick=function(dz)
{
this.Cp=dz;
};

QMEditor.FUNCLIB.BASE.prototype.setfDoDefaultClick=function(dz)
{
this.IW=dz;
};
QMEditor.FUNCLIB.BASE.prototype.getfDoDefaultClick=function()
{
return this.IW;
};
QMEditor.FUNCLIB.BASE.prototype.getfOnUploadEml=function()
{
return this.baY;
};

QMEditor.FUNCLIB.BASE.prototype.setContainerClassName=function(lb)
{
this.ael=lb;
};

QMEditor.FUNCLIB.BASE.prototype.setFuncConfig=function(aj)
{
this.asj=aj;
};

QMEditor.FUNCLIB.BASE.prototype.getFuncConfig=function(aj)
{
return this.asj;
};

QMEditor.FUNCLIB.BASE.prototype.getContainer=function()
{
return this.fj;
};

QMEditor.FUNCLIB.MENU=QMEditor.FUNCLIB.inheritFrom(function()
{
this.hP="MENU";
this.ku="menu";
this.arM=0;
},QMEditor.FUNCLIB.BASE
);

QMEditor.FUNCLIB.MENU.prototype.showMenu=function(UJ,fQ)
{
var ae=this,
oK=ae.getMenuItems(fQ);

if(!oK||oK.length==0||!oK[0]||!oK[0].sItemValue)
{
return;
}

var bP=A.calcPos(fQ&&fQ.oContainer||ae.fj),
asu=ae.Ay=="text"&&!ae.eO.bpD&&
(fQ&&fQ.nArrowPos||ae.tO.arrowPos)||0,
brQ=asu&&bP[3]-A.calcPos(ae.eO.getEditorArea())[3],
Ww=asu&&(brQ<0?1:
Math.min(bP[3]-A.calcPos(ae.eO.getEditorArea())[3],asu-7)),
cH=fQ?fQ.nWidth:this.tO.width,
boQ=(ae.asj||{}).align=="right"||this.tO.align=="right",
qj=cH&&boQ?Math.max(bP[1]-cH,A.calcPos(ae.eO.getEditorArea())[3]):bP[3];

if(UJ)
{

!ae.eO.rd&&ae.eO.focus();

ae.ZR(true);
}

ae.oc&&ae.oc.close(true);

ae.amv=fQ;
ae.oc=new A.QMMenu(
{
oEmbedWin:this.eO.je,

nWidth:cH||"auto",
sWidthDetect:"float",
nItemHeight:(fQ?fQ.nItemHeight:this.tO.itemHeight)||aT,
nArrowPos:Ww?Ww<10?10:Ww:0,
nX:qj+(Ww?25:0),
nY:bP[2]+(Ww?-4:5),
oItems:oK,
bAutoClose:fQ.bAutoClose||oK.length>1,
bProxyScroll:fQ.bAutoClose||oK.length>1,
onload:function()
{

ae.arM++;
ae.initMenu(this,fQ);
},
onshow:function()
{
ae.doMenuShow(this,fQ);
},
onclose:function()
{

if(--ae.arM<=0)
{
ae.arM=0;
ae.ZR(false);
}
fQ.fMenuClose&&fQ.fMenuClose();
},
onitemclick:function(ay,ah)
{
ae.doItemClick(ay,ah,fQ);
}
}
);
};

QMEditor.FUNCLIB.MENU.prototype.hideMenu=function(UJ)
{

this.getMenu().close();
this.amv=aT;
};

QMEditor.FUNCLIB.MENU.prototype.aUH=function(ah)
{
var asS=A.getEventTarget(ah).getAttribute("opt"),
hx=true,aLK;

if(this.Rm())
{
var bpT=this.amv&&this.amv.sName=="more",
bnV=(asS=="more");
hx=bnV!=bpT;
}


aLK=!this.Rm()&&!((asS=="more"||this.getId()=="Music")&&(A.gbIsIE&&A.gnIEVer===6));
hx?
this.showMenu(aLK,asS=="more"?{sName:"more"}:{}):
this.hideMenu(true);
};

QMEditor.FUNCLIB.MENU.prototype.getUiType=function()
{
return this.Ay;
};

QMEditor.FUNCLIB.MENU.prototype.getMenu=function()
{
return this.oc;
};



QMEditor.FUNCLIB.MENU.prototype.getMenuItems=function(fQ)
{
return[
{
bDisSelect:true,
sStyle:"padding:0;",
nHeight:"auto",
sItemValue:this.getMenuUI(fQ)
}
];
};

QMEditor.FUNCLIB.MENU.prototype.getMenuUI=
QMEditor.FUNCLIB.MENU.prototype.initMenu=
QMEditor.FUNCLIB.MENU.prototype.doMenuShow=
QMEditor.FUNCLIB.MENU.prototype.doItemClick=function()
{
};
}
)(QMEditorAdapter);
(function(A,aT)
{
A.extend(QMEditor.Plugins,
{
"EditMenu":function(zI)
{
if(zI.amy)
{
zI.aDS=new QMEditor.EditMenu({
editor:zI,
editorAreaWin:zI.je
}
);
}
}
}
);

var csX=QMEditor.delEditor,
chb=QMEditor.prototype.hideMenu;
QMEditor.delEditor=function(ay)
{
var ae=this;
csX.call(ae,ay);

ae.amy&&ae.aDS.destroy();
};
QMEditor.prototype.hideMenu=function(UJ,aGR)
{
var ae=this;
chb.call(ae,UJ,aGR)

this.amy&&!aGR&&this.aDS.hideEditMenu();
};



QMEditor.EditMenu=function(aj)
{
this.init(aj);
};

QMEditor.EditMenu.bJ=
{
bdN:'<div unselectable="on" id="QMEditorMenuBar" class="menubarbg editormenubar" style="display:none;"></div>',
bjn:A.TE([
'<a func="zoomout" class="menubarbg imgzoomout" title="Zoom out" unselectable="on"></a>',
'<span class="menubarbg imgzoombar" unselectable="on"><a id="zoomhandle" func="drag" class="menubarbg zoomhandle" title="$size$" unselectable="on" style="left:$pixels$"></a></span>',
'<a func="zoomin" class="menubarbg imgzoomin" title="Zoom In" unselectable="on"></a>',


'<span class="menubarbg menubarspl" unselectable="on"></span>',
'<a func="del" unselectable="on" class="menubarbg menubarremove" title="Remove" href="javascript:;"></a>'
]),
azr:A.TE([
'<span id="QMEditorIMGMenu">$imgcontent$</span>'
]),
azQ:A.TE([
'<span class="menubarbg menubariconlink" unselectable="on"></span>',
'<span id="QMEditMenuCommon" class="linkcommon" unselectable="on">',
'<span style="max-width:184px; overflow:hidden; height:23px;float:left;"><a class="menubarlink" id="QMEditMenuLink" href="$link$" unselectable="on" target="blank" style="white-space:nowrap;">$link$</a></span>',
'<span class="menubarbg menubarspl" unselectable="on"></span>',
'<a href="javascript:;" func="modify" class="menubarbg linkmodify" title="Change link" unselectable="on"></a>',
'<span class="menubarbg menubarspl" unselectable="on"></span>',
'<a func="unlink" unselectable="on" class="menubarbg menubarremove" title="Clear link" unselectable="on"></a>',
'</span>',
'<span id="QMEditMenuModify" class="linkedit" style="display:none;" unselectable="on">',
'<input type="text" id="QMEditMenuInput" class="menubarinput"/>',
'<span class="menubarbg menubarspl" unselectable="on"></span>',
'<a func="save" class="menubarbg menubarfinish" title="OK" unselectable="on"></a>',
'</span>'
]),
bee:A.TE([
'<a func="showimg" class="menubarbg menubariconimg" title="Edit"></a>',
'<span class="menubarbg menubarspl"></span>',
'<a func="showlink" class="menubarbg menubariconlink2" title="Edit link"></a>'
])
};

QMEditor.EditMenu.getTemplate=function()
{
return QMEditor.EditMenu.bJ;
};

QMEditor.EditMenu.prototype.init=function(aj)
{
var ae=this,
mY;

ae.eO=aj.editor;
ae.ZD=mY=aj.editorAreaWin;
ae.pB=null;

A.insertHTML(mY.document.body,"afterBegin",QMEditor.EditMenu.bJ.bdN);
ae.PV=A.S("QMEditorMenuBar",mY);

ae.aXZ();
ae.Rg();


ae.btT=mY.setInterval(
function()
{
var aw=ae.eO.getSelectionElement(),
lk=ae.PV;


if(A.isShow(A.S("QMEditMenuModify",mY)))
{
return;
}

var	aF=ae.axr(aw);
if(aF&&aF.sHtml!="")
{
if(ae.pB==aF.oEditObj)
{
return;
}

lk.innerHTML=aF.sHtml;
ae.pB=aF.oEditObj;

if(!A.isShow(lk))
{
ae.akd(aF.oEditObj);
}
else
{
A.show(lk,true);
}
}
else
{
A.show(lk,false);
ae.pB=null;
}
},
500
);
};

QMEditor.EditMenu.prototype.destroy=function(aj)
{
var iD=this.btT;
iD&&clearInterval(iD);
};

QMEditor.EditMenu.prototype.Rg=function()
{
A.addEvent(A.S("QMEditorMenuBar",this.ZD),"click",function(ah){A.stopPropagation(ah);});
};

QMEditor.EditMenu.prototype.aXZ=function()
{
var ae=this,
mY=ae.ZD,
lk=ae.PV,
aZ=ae.eO,
oJ=QMEditor.EditMenu.bJ;


A.addEvent("txt"===aZ.gq?aZ.eL:aZ.fK,
"mousedown",function(ah)
{
ae.showEditMenu(ah);
}
);


A.addEvent(lk,"mousedown",function(ah)
{
var bS=A.S("QMEditMenuInput",mY),
aC=A.getEventTarget(ah);

if(aC)
{
var akI=A.attr(aC,"func");

switch(akI)
{
case"del":
{
aZ.execCmd("Delete","delImg");
A.show(lk,false);
break;
}
case"rotate":
{
var aw=ae.pB,
acN=aw.nAngle=((aw.nAngle||0)+90);

ae.rotateImg&&ae.rotateImg();





















}
case"unlink":
{
if(!A.gbIsIE)
{
var dD=aZ.iJ.getSelection(),
rD=aZ.fK.createRange();

if(A.gbIsOpera&&ae.pB.nodeName=="IMG")
{
rD.selectNode(ae.pB);
dD.removeAllRanges();
dD.addRange(rD);
}
else if(ae.pB.nodeName=="A")
{
rD.selectNode(aZ.moveToAncestorNode("A"));
dD.removeAllRanges();
dD.addRange(rD);
}
}
A.show(lk,false);
aZ.execCmd("Unlink");
break;
}
case"modify":
{
var gC=A.S("QMEditMenuLink",mY),
alv=A.S("QMEditMenuCommon",mY),
ahG=A.S("QMEditMenuModify",mY);
A.show(alv,false);
A.show(ahG,true);

aZ.saveRange();
bS.value=gC.href;
bS.focus();
break;
}
case"save":
{
var gC=A.S("QMEditMenuLink",mY),
alv=A.S("QMEditMenuCommon",mY),
ahG=A.S("QMEditMenuModify",mY),
eS=bS.value,
aw=ae.pB,
fm=aw.nodeName=="A"?aw:aw.parentNode;


if(/[a-zA-Z_0-9.-]+@[a-zA-Z_0-9.-]+\.\w+/.test(eS))
{
eS=A.trim(eS).toLowerCase().indexOf("mailto")==0
?eS
:"mailto:"+eS;
}
else 
{
eS=A.trim(eS).indexOf("://")==-1?"http://"+eS:eS;
}
fm.href=gC.href=gC.innerHTML=eS;
aZ.loadRange();
A.show(alv,true);
A.show(ahG,false);
break;
}
case"close":
{
A.show(lk,false);
break;
}
case"showimg":
{
lk.innerHTML=oJ.azr.replace(
{
"imgcontent":ae.ayj(ae.pB,oJ)
}
);
break;
}
case"showlink":
{
var aw=ae.pB,
fm=aw.nodeName=="A"?aw:aw.parentNode;

lk.innerHTML=oJ.azQ.replace(
{
"link":fm.href
}
);
break;
}
case"drag":
{
var Lm=aC,
wK=ah.clientX,
aH=mY.document;

var	agz=function()
{
removeEvent(aH,"mousemove",aAG);
removeEvent(aH,"mouseup",agz);
A.callBack.call(ae,ae.aoJ,[aC,ah,akI,parseInt(aC.style.left)]);
};

var aAG=function(ah)
{
var di=parseInt(aC.style.left),
fk=di+(ah.clientX-wK),
aBS=false;

if(fk<-5||fk>65)
{
aBS=true;
}
if(fk<=-1)
{
fk=-1;
}
else if(fk>=59)
{
fk=59;
}
aC.style.left=fk+"px";
wK=ah.clientX;

if(aBS)
{
agz();
}
};

A.addEvents(aH,{
mousemove:aAG,
mouseup:agz
});
break;
}
default:
{
A.callBack.call(ae,ae.aoJ,[aC,ah,akI]);
}
}
}

if(!A.isShow(bS))
{
A.preventDefault(ah);
A.stopPropagation(ah);
}

}
);

return ae;
};

QMEditor.EditMenu.prototype.axr=function(eE,bjY)
{
var ae=this,
aZ=ae.eO,
fm=null,
IK=null,
afz=true,
Ff=0,
dq="",
axT="",
bCF="",
oJ=QMEditor.EditMenu.bJ,
ic={
"1":oJ.azQ,
"2":oJ.azr,
"3":oJ.bee
};

if(!eE)
{
return{"sHtml":"","oEditObj":null};
}

if(eE.nodeName=="A")
{
fm=eE;
}
else if(eE.parentNode&&eE.parentNode.nodeName=="A")
{
fm=eE.parentNode;
}
else if(eE.nodeName=="DIV"&&eE.firstChild&&eE.firstChild==eE.lastChild&&eE.firstChild.nodeName=="A")
{
fm=eE.firstChild;
}
if(fm&&fm.name!="spellcheck")
{
Ff=1;
IK=fm;
}


!bjY&&(afz=(A.gbIsIE
?aZ.fK.selection.type!="None"
:!aZ.iJ.getSelection().getRangeAt(0).collapsed));

if(afz&&eE&&(eE.nodeName=="IMG")
&&!eE.src.match(/images\/mo\//)&&!eE.getAttribute("noeditme")
)
{
Ff+=2;
IK=eE;
}
else if(afz&&!A.gbIsIE&&Ff==1)
{
var bO=eE.getElementsByTagName&&eE.getElementsByTagName("IMG");
eE=(bO&&bO.length)&&bO[0];

if(eE&&(eE.nodeName=="IMG")&&!eE.src.match(/soso/)&&!eE.getAttribute("noeditme"))
{
Ff+=2;
IK=eE;
}
}


(Ff>1)&&(axT=ae.ayj(IK,oJ));
dq=ic[Ff]?
ic[Ff].replace(
{
"link":((fm&&fm.href)||""),
"images_path":aZ.aOr,
"imgcontent":axT
})
:"";
return{"sHtml":dq,"oEditObj":IK};
};

QMEditor.EditMenu.prototype.ayj=function(an,aZE)
{
return(aZE.bjn.replace({
"size":an.getAttribute("modifysize")||"100%",
"pixels":an.getAttribute("diffpixels")||"25px"
}));
};

QMEditor.EditMenu.prototype.akd=function(an)
{
var ae=this,
aZ=ae.eO,
mY=ae.ZD,
lk=ae.PV,
bP=A.calcPos(aZ.mF),
bR=bP[0],
di=bP[3],
ajh=bP[2],
bkC=A.document.body.clientHeight,
kS=A.bodyScroll(mY,"scrollTop"),
akv=A.bodyScroll(aZ.iJ,"scrollTop"),
YO,
agU=bR,
aDf=di,
aqw=an.getElementsByTagName("IMG");

(aqw.length>0)&&(an=aqw[0]);


bP=A.calcPos(an);
bR+=bP[2]+3;
di+=bP[3];


bR-=akv;


if(aZ.isShowToolBar())
{
var fk=aZ.xI.offsetHeight;
bR+=fk;
ajh+=fk;
agU+=fk;
}
YO=bR;
(bR>ajh)&&(bR=ajh);


if((bR-kS)>(bkC-95))
{

if((bP[2]-akv)>(an.offsetHeight+20))
{
bR=YO-(an.offsetHeight+35);
}
else 
{
bR=YO-(bP[2]-akv+10);
}
}

(an.nodeName=="IMG")&&(bR=YO-an.offsetHeight);


lk.style.top=(bR<agU?agU:bR)+"px";
lk.style.left=(di<aDf?aDf:di)+"px";

setTimeout(function(){A.show(lk,true);},100);
};

QMEditor.EditMenu.prototype.aoJ=function(ar,ah,WX,fk)
{
var ae=this,
aw=ae.pB,
azW=A.S("zoomhandle",ae.ZD);

if(!(WX&&WX.match(/zoom/))&&!fk)
{
return;
}

var ng=aw.getAttribute("scalingmode")||"zoom",
axg={
"zoom":{
"25":"-1px",
"50":"8px",
"75":"16px",
"100":"25px",
"125":"33px",
"150":"42px",
"175":"51px",
"200":"59px"
},
"normal":{
"1":"-1px",
"10":"5px",
"20":"11px",
"30":"17px",
"40":"23px",
"50":"29px",
"60":"35px",
"70":"41px",
"80":"47px",
"90":"53px",
"100":"59px"
}
}[ng],
nJ={"zoom":200,"normal":100}[ng],
wQ={"zoom":25,"normal":1}[ng],
iD={"zoom":25,"normal":10}[ng],
btJ={"zoom":175,"normal":100}[ng],
air="";
cH=aw["naturalW"]||aw.naturalWidth,
cs=aw["naturalH"]||aw.naturalHeight,
dp=parseInt(aw.getAttribute("modifysize")||100),
XB=dp%iD;

!cH&&(cH=aw["naturalW"]=aw.offsetWidth);
!cs&&(cs=aw["naturalH"]=aw.offsetHeight);

if(WX=="zoomin")
{
if(XB>0)
{
dp+=(iD-XB);
}
else
{
dp+=iD;
}
(dp>nJ)&&(dp=nJ);
}
else if(WX=="zoomout")
{
if(XB>0)
{
dp-=XB;
}
else
{
dp-=iD;
}
(dp<wQ)&&(dp=wQ);
}
else if(fk)
{
dp=parseInt((fk+1)/60*btJ)+wQ;
dp>nJ&&(dp=nJ);
air=fk+"px";
}

azW.setAttribute("title",dp+"%");
azW.style.left=axg[dp]||air;
aw.style.width=parseInt(parseInt(cH)*(dp/100))+"px";
aw.style.height=parseInt(parseInt(cs)*(dp/100))+"px";
aw.setAttribute("modifysize",dp+"%");
aw.setAttribute("diffpixels",axg[dp]||air);

ae.eO.resizeNoScrollEditor();
ae.akd(aw);
};

QMEditor.EditMenu.prototype.hideEditMenu=function()
{
A.show(this.PV,false);
};

QMEditor.EditMenu.prototype.showEditMenu=function(ah)
{
var ae=this,
aZ=ae.eO,
ajS=("txt"===aZ.gq?aZ.eL:aZ.fK),
cg=ajS.body?ajS.body:ajS,
lk=ae.PV,
aw=A.getEventTarget(ah),
oResult;

if(!lk)
{
return;
}

if(aw.nodeName.match(/IMG|A/))
{
oResult=ae.axr(aw,true);
}

if(oResult&&oResult.sHtml!="")
{
var bM=aw.parentNode.nodeName=="A"?aw.parentNode:aw;
lk.innerHTML=oResult.sHtml;

ae.pB=oResult.oEditObj;
ae.akd(bM);


if(A.gbIsWebKit||A.gbIsFF)
{
aAA();


A.gbIsFF&&setTimeout(aAA,150);
}
}
return;
function aAA()
{
var dD=aZ.iJ.getSelection(),
rD=aZ.fK.createRange();

rD.selectNode(bM);
dD.removeAllRanges();
dD.addRange(rD);
}
};
}
)(QMEditorAdapter);
(function(A,aT)
{

QMEditor.CONST.FILES={

"$js_path$/com/kits/qmeditor/qqmail/release/editor_toolbar1341a3.js":"Separate Bold Italic Underline FontName FontName FontSize ForeColor BackColor AlignMode Serial Indent Quot CreateLink SourceEdit Preview SpellCheck UploadEml",
"$js_path$/com/kits/qmeditor/qqmail/release/editor_toolbar_plus1341a3.js":"ClipImg Photo ScreenSnap Mo Music"
};

QMEditor.CONST.FUNCLIST.COMPOSE={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit Preview SpellCheck",
tbExtern:"Photo ScreenSnap Mo Music"
};

QMEditor.CONST.FUNCLIST.GROUP={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit Preview",
tbExtern:"Photo ScreenSnap Mo"
};

QMEditor.CONST.FUNCLIST.BIZMAIL_COMPOSE={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent Quot | CreateLink SourceEdit Preview SpellCheck",
tbExtern:"Photo ScreenSnap Mo"
};
}
)(QMEditorAdapter);


(function(A,aT)
{
A.extend(QMEditor.EditMenu.getTemplate(),
{
bKf:A.T([
"magick?fun=rotate&$rotatekey$&degree=$degree$&sid=$sid$&s=rotateimg&t=compose.json"
])
});

QMEditor.EditMenu.prototype.rotateImg=function()
{
var ae=this,
dJ=ae.eO.getImgDom(ae.pB),
asn=parseInt(dJ.getAttribute("degree")||0)+90,
arH=dJ.getAttribute("rotatekey");

asn==360&&(asn=0);
if(!arH)
{
var XD=dJ.getAttribute("src");
arH=XD.match(/(upfile|f)=.*&/gi)[0].split('&')[0];
dJ.setAttribute("rotatekey",arH);
}

var ug=A.getSid(),
aN=QMEditor.EditMenu.bJ.bKf.replace(
{
rotatekey:arH.replace("f=","fkey="),
degree:asn,
sid:ug
});
A.QMAjax.send(aN,
{
method:"GET",
onload:function(aP,bt)
{
if(aP)
{
var cF=evalValue(bt);
dJ.setAttribute("src",cF.viewfileurl);
dJ.setAttribute("degree",asn)
}
}
});
};
}
)(QMEditorAdapter);


