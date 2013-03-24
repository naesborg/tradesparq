







(function(A,aT)
{
A.extend(QMEditor.CONST.LANGUAGE.zh_CN,{
FUN_SEPERATE:"Interval Line",
FUN_BOLD:"Bold",
FUN_ITALIC:"Italic",
FUN_UNDERLINE:"Underline",
FUN_FONTNAME:"Font",
FUN_FONTSIZE:"Font Size",
FUN_FORECOLOR:"Font Color",
FUN_BACKCOLOR:"Background Color",
FUN_ALIGNMODE:"Align",
FUN_SERIAL:"Bullet",
FUN_INDENT:"Indent",
FUN_QUOT:"Reference content",
FUN_CREATELINK:"Insert/Remove Links",
FUN_SOURCEEDIT:"Edit HTML Source Code",
FUN_PREVIEW:"Preview",
FUN_UPLOADEML:"upload eml file",

FS_XXSMALL:"Small",
FS_XSMALL:"Medium",
FS_MEDIUM:"Large",
FS_LARGE:"Larger",
FS_XLARGE:"Largest",

AM_LEFT:"Align Left",
AM_CENTER:"Align Center",
AM_RIGHT:"Align Right",

SL_NUMBER:"Number Bullet",
SL_PROJECT:"Graphic Bullet",

IT_INDENT:"Right Indent",
IT_OUTDENT:"Left Indent",

CL_NAME:"Text: ",
CL_LINK:"Link: ",
CL_MODIFY:"Edit",
CL_DELETE:"Remove",
CL_CONFIRM:"Add",
CL_CANCEL:"Cancel",
CL_NAME_DEF:"",

SE_PREVIEW:"Back to Visual Editing",
SE_PREVIEW_TITLE:"What you see is what you get",
SE_FORMAT:"Formatting",
SE_FORMAT_TITLE:"Code Formatting",
SE_FORMATTING:"Please do not edit codes while formatting..."
}
);

A.extend(QMEditor.CONST.getTemplate(),{
bXz:A.T([
'<div class="qmEditorMenuStatusItem unselect" unselectable="on" style="$style$">$content$</div>'
]),
ctp:A.T([
'<div class="qmEditorMenuIconStatusItem qmEditor$cmd$ unselect" unselectable="on" style="$style$">',
'<input class="qmEditorIcon" type="button" unselectable="on">',
'$content$',
'</div>'
]),
caP:A.T([
'<div id="qmEditorMenuColorCntr" class="unselect" unselectable="on">$html$</div>'
]),
bOq:A.T([
'<div class="qmEditorMenuItem" id="$id$" param="$color$" title="$color$" style="float:left;width:auto;height:auto;" unselectable="on" $event$ >',
'<div class="qmEditorMenuColor" param="$color$" style="background:$color$;" unselectable="on"></div>',
'</div>'
]),
bMg:A.T([
'<br style="clear:both;">'
]),
cdk:A.T([
'<b>&#187;</b>&nbsp;$content$'
]),
bZI:A.T([
'<div class="qmEditorMenuPanel" unselectable="on" >',
'<div id="name_cntr" class="qmEditorLinkDiv" unselectable="on" >',
'$langName$<input id="name" type="text" tabindex="1001"/> ',
'</div>',
'<div id="link_cntr" class="qmEditorLinkDiv" unselectable="on" >',
'$langLink$<input id="link" type="text"  tabindex="1002"/>',
'</div>',
'<div class="qmEditorLinkButton" unselectable="on" >',
'<a id="modify" class="btn_gray qmEditorLinkBtn" tabindex="1003">$langModify$</a>',
'<a id="delete" class="btn_gray qmEditorLinkBtn" tabindex="1004">$langDelete$</a>',
'<a id="confirm" class="btn_gray qmEditorLinkBtn" tabindex="1005">$langConfirm$</a>',
'<a id="cancel" class="btn_gray qmEditorLinkBtn" tabindex="1006">$langCancel$</a>',




'</div>',
'</div>'
]),
BOTTON_ICON_SOURCEEDIT:A.TE([
'<div class="qmEditorBtnA" style="$ui.style$;padding-left:0;" ',
' unselectable="on" onmousedown="return false;" title="$title$" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'">&lt;HTML&gt;</div>'
]),
SOURCEEDIT_TOOLBAR:A.TE([
'<div class="qmEditorBtnA" style="float:right;padding:2px 5px 0 0;* padding:3px 5px 0 0;" unselectable="on" onmousedown="return false;" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" title="$formatTitle$" >',
'<span style="display:none;">',
'$langFormatting$<span></span>',
'</span>',
'<span>$langFormat$</span>',
'</div>',
'<div class="qmEditorBtnA qmEditorFormatBtn" unselectable="on" onmousedown="return false;" title="$previewTitle$" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'">',
'$langPreview$<b>&#187;</b>',
'</div>'
]),
BOTTON_ICON_PREVIEW:A.TE([
'<div class="qmEditorBtnA" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="$ui.style$;padding-left:0;" ',
' unselectable="on" onmousedown="return false;" title="$title$" >$ui.langPreview$</div>'
]),

BOTTON_ICON_UPLOADEML:A.TE([
'<div class="qmEditorBtnA" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="$ui.style$;padding-left:0;" ',
' unselectable="on" onmousedown="return false;" title="$ui.title$" >$ui.langUploadEml$</div>'
])
});



QMEditor.prototype.bcH=function()
{
var Ij=this.getEditWin();
if(Ij.getSelection)
{
var dD=Ij.getSelection();
return dD.isCollapsed||dD.getRangeAt(0).collapsed;
}
else
{
return this.getEditDoc().selection.type=="None";
}
};

QMEditor.prototype.bJD=function(aNu)
{
var ae=this,
Ij=ae.getEditWin(),

bM=ae.getSelectionElement(),
Uh=bM,
bfd=(A.gbIsIE||A.gbIsOpera);

while(Uh&&Uh.nodeName!=aNu)
{
Uh=Uh.parentNode;
}

if(Uh)
{
return true;
}

if(this.bcH())
{
return false;
}


if(!bfd)
{
var aGL=bM.previousSibling,
aVE=bM.nextSibling;

if(aGL&&aGL.nodeName==aNu)
{
var aaz=Ij.getSelection().containsNode(aGL,true);
if(aaz)
{
return true;
}
}

if(aVE&&aVE.nodeName==aNu)
{
var aaz=Ij.getSelection().containsNode(aVE,true);
if(aaz)
{
return true;
}
}
}

(function(eE)
{
if(!eE)
{
return;
}

if(eE.nodeName==aNu)
{
Uh=eE;
return;
}

for(var avw=eE.firstChild,bfv;avw;avw=bfv)
{
bfv=avw.nextSibling;
arguments.callee(avw);
}
})(bfd?bM.parentNode:bM);

return!!Uh;
};

QMEditor.prototype.changeEditMode=function(Bi)
{
var bxd=this.getEditMode();
if(bxd=="text")
{
return false;
}

if(bxd==Bi)
{
return true;
}

var UT=Bi=="source",
bcl=UT?"source":"html",
byL=this.getSrceBody(),
IK=this.getEditObj();


if(A.gbIsWebKit)
{

(UT?this.getEditBody():byL).blur();
}

IK.style.display=UT?"none":"block";
byL.style.display=UT?"block":"none";

A.show(this.getRichToolBarObj(),!UT);
A.show(this.getSrceToolBarObj(),UT);

this.setEditContent(
bcl,
this.getEditContent(UT?"html":"source")
);
this.setEditMode(bcl);

this.focus(0);
};




QMEditor.FUNCLIB.afb=QMEditor.FUNCLIB.inheritFrom(function()
{
this.setId("MENUSTATUS");
this.bwr=QMEditor.CONST.getTemplate().bXz;

},QMEditor.FUNCLIB.MENU
);

QMEditor.FUNCLIB.afb.prototype.getMenuItems=function()
{
if(!this.bxS)
{
var aLu=this.Hl,
bU=this.bwr,
fD=this.getCmd()?"param":"cmd",
bCB=[];
for(var i=0,aB=aLu.length,as;i<aB;i++)
{
as=aLu[i];
bCB[i]=
{
sId:as[fD],
nHeight:as.height||"auto",
sItemValue:bU.replace(as)
};
}
this.bxS=bCB;
}
return this.bxS;
};

QMEditor.FUNCLIB.afb.prototype.initMenu=function(cY)
{
var ae=this,
Ym=ae.getBindEditor(),
tH=ae.getCmd();
if(tH)
{
var cW=Ym.queryCmdValue(tH);
cW&&cY.selectItem(cW);
}
else
{
A.E(ae.Hl,function(az)
{
cY.itemOption(az.cmd,"bDisSelect",
!Ym.queryCmdEnabled(az.cmd));
}
);
}
};

QMEditor.FUNCLIB.afb.prototype.doItemClick=function(ay)
{
var ae=this,
Ym=ae.getBindEditor(),
tH=ae.getCmd();
tH?Ym.execCmd(tH,ay):
Ym.execCmd(ay);
};


QMEditor.FUNCLIB.atN=QMEditor.FUNCLIB.inheritFrom(function()
{
this.setId("MENUICONSTATUS");
this.bwr=QMEditor.CONST.getTemplate().ctp;

},QMEditor.FUNCLIB.afb
);


QMEditor.FUNCLIB.asw=QMEditor.FUNCLIB.inheritFrom(function()
{
this.setId("MENUCOLOR");

this.Hl=[
'#000000 #993300 #333300 #003300 #003366 #000080 #333399 #333333',
'#800000 #FF6600 #808000 #008000 #008080 #0000FF #666699 #808080',
'#FF0000 #FF9900 #99CC00 #339966 #33CCCC #3366FF #800080 #999999',
'#FF00FF #FFCC00 #FFFF00 #00FF00 #00FFFF #00CCFF #993366 #C0C0C0',
'#FF99CC #FFCC99 #FFFF99 #CCFFCC #CCFFFF #99CCFF #CC99FF #FFFFFF'
];
},QMEditor.FUNCLIB.MENU
);

QMEditor.FUNCLIB.asw.prototype.getMenuUI=function(fQ)
{
var aZ=this.getBindEditor(),
ic=aZ.getTemplate(),
btZ=ic.bOq,
aQQ=ic.blu,
bFk=ic.bMg,
ME=[];


fQ.bAutoClose=true;
A.E(this.Hl,function(az)
{
A.E(az.split(" "),function(az)
{
ME.push(btZ.replace(
{
id:az.replace("#","C"),
color:az,
event:aQQ
}
));
}
);
ME.push(bFk);
}
);

return ic.caP.replace({html:ME.join("")});
};


QMEditor.FUNCLIB.asw.prototype.initMenu=function(cY)
{
var ae=this,
tH=ae.getCmd(),
aZ=ae.getBindEditor(),
cW=aZ.queryCmdValue(tH);

A.addEvent(cY.S("qmEditorMenuColorCntr"),"click",function(ah)
{
var cW=A.getEventTarget(ah).getAttribute("param");
if(cW)
{
ae.hideMenu();
aZ.execCmd(tH,cW);
}
}
);

if(typeof(cW)=="string")
{
var pF=cW.substring(4,cW.length-1).split(",");
for(var i=0,aB=pF.length;i<aB;i++)
{
pF[i]=parseInt(A.trim(pF[i])).toString(16);
if(pF[i].length==1)
{
pF[i]="0"+pF[i];
}
}
cW=pF.join("");
}
else if(typeof(cW)=="number")
{
pF=[cW.toString(16)];
for(var i=0,aB=6-pF[0].length;i<aB;i++)
{
pF.unshift("0");
}
pF=pF.join("").split("");

var sv=pF[0];
pF[0]=pF[4];
pF[4]=sv;
sv=pF[1];
pF[1]=pF[5];
pF[5]=sv;
cW=pF.join("");
}
else
{
return;
}

cW="#"+cW;

var bU=aZ.getTemplate().cdk;

cW=cW.toString().toUpperCase();
(cY.S(cW.replace("#","C"))||{}).className="qmEditorMenuItemCheck";
};




QMEditor.FUNCLIB.Separate=QMEditor.FUNCLIB.inheritFrom(function(ci)
{
this.setId("Separate");
this.setType("label");
this.setBindEditor(ci.editor);
this.setUiConfig(
{
title:this.getBindEditor().getLanguage().FUN_SEPERATE
});
},QMEditor.FUNCLIB.BASE
);


QMEditor.FUNCLIB.Bold=QMEditor.FUNCLIB.inheritFrom(function(ci)
{
this.setId("Bold");
this.setCmd("Bold");
this.setType("btn");
this.setBindEditor(ci.editor);

this.setUiConfig(A.extend(this.getUiConfig(),
{
icon:
{
title:this.getBindEditor().getLanguage().FUN_BOLD
}
}));


this.setfOnKeyDown(function(ah)
{
if(ah.ctrlKey&&ah.keyCode==66)
{
this.getfDoDefaultClick()();

A.preventDefault(ah);
}
});
},QMEditor.FUNCLIB.BASE
);


QMEditor.FUNCLIB.Italic=QMEditor.FUNCLIB.inheritFrom(function(ci)
{
this.setId("Italic");
this.setCmd("Italic");
this.setType("btn");
this.setBindEditor(ci.editor);
this.setUiConfig(
{
title:this.getBindEditor().getLanguage().FUN_ITALIC
});
this.setfOnKeyDown(function(ah)
{
if(ah.ctrlKey&&ah.keyCode==73)
{
this.getfDoDefaultClick()();

A.preventDefault(ah);
}
});
},QMEditor.FUNCLIB.BASE
);


QMEditor.FUNCLIB.Underline=QMEditor.FUNCLIB.inheritFrom(
function(ci)
{
this.setId("Underline");
this.setCmd("Underline");
this.setType("btn");
this.setBindEditor(ci.editor);
this.setUiConfig(
{
title:this.getBindEditor().getLanguage().FUN_UNDERLINE
});
this.setfOnKeyDown(function(ah)
{
if(ah.ctrlKey&&ah.keyCode==85)
{
this.getfDoDefaultClick()();

A.preventDefault(ah);
}
});
},QMEditor.FUNCLIB.BASE
);


QMEditor.FUNCLIB.FontName=QMEditor.FUNCLIB.inheritFrom(function(ci)
{
this.setId("FontName");
this.setCmd("FontName");
this.setBindEditor(ci.editor);
this.setUiConfig(
{
title:this.getBindEditor().getLanguage().FUN_FONTNAME
});

var ctW=[{
param:"\u5B8B\u4F53",
style:"font-family:\u5B8B\u4F53",
content:"\u5B8B\u4F53"
},{
param:"\u9ED1\u4F53",
style:"font-family:\u9ED1\u4F53",
content:"\u9ED1\u4F53"
},{
param:"\u6977\u4F53,\u6977\u4F53_GB2312",
style:"font-family:\u6977\u4F53,\u6977\u4F53_GB2312",
content:"\u6977\u4E66"
},{
param:"\u5E7C\u5706",
style:"font-family:\u5E7C\u5706",
content:"\u5E7C\u5706"
}],
bCG=[{
param:"Arial",
style:"font-family:Arial",
content:"Arial"
},{
param:"Arial Black",
style:"font-family:Arial Black;",
content:"Arial Black"
},{
param:"Times New Roman",
style:"font-family:Times New Roman",
content:"Times New Roman"
},{
param:"Verdana",
style:"font-family:Verdana",
content:"Verdana"
}];
if(getTop().getLocale()=="zh_CN")
{
this.Hl=ctW.concat(bCG);
}
else
{
this.Hl=bCG;
}



































},QMEditor.FUNCLIB.afb);


QMEditor.FUNCLIB.FontSize=QMEditor.FUNCLIB.inheritFrom(function(ci)
{
this.setId("FontSize");
this.setCmd("FontSize");
this.setBindEditor(ci.editor);
var fc=this.getBindEditor().getLanguage();
this.setUiConfig(
{
title:fc.FUN_FONTSIZE
});

this.Hl=[{
param:"1",
style:"font-size:xx-small;",
content:fc.FS_XXSMALL
},{
param:"2",
style:"font-size:x-small;",
content:fc.FS_XSMALL
},{
param:"4",
style:"font-size:medium;",
content:fc.FS_MEDIUM
},{
param:"5",
style:"font-size:large;",
content:fc.FS_LARGE
},{
param:"6",
style:"font-size:x-large;",
content:fc.FS_XLARGE
}];
},QMEditor.FUNCLIB.afb);


QMEditor.FUNCLIB.ForeColor=QMEditor.FUNCLIB.inheritFrom(
function(ci)
{
this.setId("ForeColor");
this.setCmd("ForeColor");
this.setBindEditor(ci.editor);
this.setUiConfig(
{
title:this.getBindEditor().getLanguage().FUN_FORECOLOR
});
},QMEditor.FUNCLIB.asw
);


QMEditor.FUNCLIB.BackColor=QMEditor.FUNCLIB.inheritFrom(
function(ci)
{
this.setId("BackColor");
this.setCmd(A.gbIsIE||A.gbIsWebKit?this.getId():"hilitecolor");
this.setBindEditor(ci.editor);
this.setUiConfig(
{
title:this.getBindEditor().getLanguage().FUN_BACKCOLOR
});
},QMEditor.FUNCLIB.asw
);


QMEditor.FUNCLIB.AlignMode=QMEditor.FUNCLIB.inheritFrom(
function(ci)
{
this.setId("AlignMode");
this.setBindEditor(ci.editor);
var fc=this.getBindEditor().getLanguage();
this.setUiConfig(
{
title:fc.FUN_ALIGNMODE
});

this.Hl=
[
{
cmd:"JustifyLeft",
content:fc.AM_LEFT
},
{
cmd:"JustifyCenter",
content:fc.AM_CENTER
},
{
cmd:"JustifyRight",
content:fc.AM_RIGHT
}
];
},QMEditor.FUNCLIB.atN
);


QMEditor.FUNCLIB.Serial=QMEditor.FUNCLIB.inheritFrom(function(ci)
{
this.setId("Serial");
this.setBindEditor(ci.editor);
var fc=this.getBindEditor().getLanguage();
this.setUiConfig(
{
title:fc.FUN_SERIAL
});

this.Hl=
[
{
cmd:"InsertorDeredlist",
content:fc.SL_NUMBER
},
{
cmd:"InsertunorDeredlist",
content:fc.SL_PROJECT
}
];
},QMEditor.FUNCLIB.atN);

QMEditor.FUNCLIB.Quot=QMEditor.FUNCLIB.inheritFrom(function(ci)
{
var ae=this;
ae.setId("formatblock");
ae.setCmd("formatblock");
ae.setType("btn");
ae.setBindEditor(ci.editor);
ae.setUiConfig(
{
title:ae.getBindEditor().getLanguage().FUN_QUOT
});
ae.setfOnClick(ae.Cb);
ae.setfDoDefaultClick(ae.Cb);
},QMEditor.FUNCLIB.atN
);

QMEditor.FUNCLIB.Quot.prototype.Cb=function(ah)
{
this.getBindEditor().queryFormatBlockState()?
this.cqD(ah):this.bYp(ah);
};
QMEditor.FUNCLIB.Quot.prototype.bYp=function(fJ)
{
var ae=this;


this.getBindEditor().execCmd(A.gbIsIE?"indent":"formatblock","blockquote",function()
{

var cbT="margin:0.8em 0 0.8em 2em; padding:0 0 0 0.7em; border-left:2px solid #DDDDDD;",
aw=this.getSelectionElement(),
aMB=aw&&clY(aw);
if(aMB)
{
aMB.style.cssText=cbT;
A.attr(aMB,"formatblock",1);



aMB=aw=aT;
}
});

function clY(an)
{
var aw=an,
cph=0;
while(aw&&aw.tagName!="BLOCKQUOTE"&&(aw.tagName=="OL"&&++cph)<2)
{
aw=aw.parentNode;
}
if(aw&&aw.tagName=="OL")
{
var aWN=ae.getBindEditor().getEditDoc().createElement("blockquote"),
abt=aw.childNodes;

aw.parentNode.insertBefore(aWN,aw);
for(var i=0,l=abt.length;i<l;i++)
{
aWN.appendChild(abt[i]);
}

aw.parentNode.removeChild(aw);
aw=aWN;
}
return aw;
}
};
QMEditor.FUNCLIB.Quot.prototype.cqD=function(fJ)
{
this.getBindEditor().execCmd("outdent","blockquote",function()
{

var nA=this.getEditBody();
A.E(nA.getElementsByTagName("blockquote"),function(OL)
{
OL
&&!A.trim(OL.innerHTML)
&&OL.parentNode.removeChild(OL);
OL=aT;
});

A.gbIsIE&&A.E(nA.getElementsByTagName("p"),function(OL)
{
if(OL&&A.attr(OL,"formatblock"))
{
OL.removeAttribute("formatblock")
OL.style.cssText="";
}
OL=aT;
});
});
};


QMEditor.FUNCLIB.Indent=QMEditor.FUNCLIB.inheritFrom(function(ci)
{
this.setId("IndentMode");
this.setBindEditor(ci.editor);
var fc=this.getBindEditor().getLanguage();
this.setUiConfig(
{
title:fc.FUN_INDENT
});

this.Hl=
[
{
cmd:"Indent",
content:fc.IT_INDENT
},
{
cmd:"Outdent",
content:fc.IT_OUTDENT
}
];
},QMEditor.FUNCLIB.atN
);


QMEditor.FUNCLIB.CreateLink=QMEditor.FUNCLIB.inheritFrom(function(
ci)
{
var ae=this;
ae.setId("CreateLink");
ae.setCmd("CreateLink");
ae.setBindEditor(ci.editor);
ae.setUiConfig(
{
title:ae.getBindEditor().getLanguage().FUN_CREATELINK
});
},QMEditor.FUNCLIB.MENU
);

QMEditor.FUNCLIB.CreateLink.prototype.getMenuUI=function()
{
var aZ=this.getBindEditor(),
fc=aZ.getLanguage(),
ic=aZ.getTemplate();
return ic.bZI.replace(
{
langName:fc.CL_NAME,
langLink:fc.CL_LINK,
langModify:fc.CL_MODIFY,
langDelete:fc.CL_DELETE,
langConfirm:fc.CL_CONFIRM,
langCancel:fc.CL_CANCEL
}
);
};

QMEditor.FUNCLIB.CreateLink.prototype.initMenu=function(cY)
{
var ae=this,
aZ=ae.getBindEditor(),
aGP=aZ.queryCmdEnabled("Unlink");

if(!aGP&&aZ.pB)
{
aZ.loadLastRange();
aGP=aZ.queryCmdEnabled("Unlink");
}
var aep=aGP&&aZ.bJD("A"),
gC=ae.cfS&&aZ.moveToAncestorNode("A"),
ZF=aZ.pB?false:aZ.bcH();


A.show(cY.S("name_cntr"),!aep&&ZF);
A.show(cY.S("link_cntr"),!(aep&&!gC));
A.show(cY.S("modify"),gC);
A.show(cY.S("delete"),aep);
A.show(cY.S("confirm"),!aep);

gC&&gC.href&&(aTc.value=gC.href);


var ciR=cY.S("name").value=aZ.getLanguage().CL_NAME_DEF;
cY.S("name").className="qmEditorCLNameDef";
cY.S("name").onfocus=function()
{
if(this.className!="qmEditorCLNameMdf")
{
this.className="qmEditorCLNameMdf";
this.value="";
}
};
cY.S("name").onblur=function()
{
if(!this.value)
{
this.className="qmEditorCLNameDef";
this.value=ciR;
}
};

cY.S("delete").onclick=function()
{
ae.getBindEditor().loadLastRange();
ae.getBindEditor().execCmd("Unlink");
ae.hideMenu(true);
};
cY.S("modify").onclick=function()
{
ae.getBindEditor().loadLastRange();
gC.href=ae.aeT();
ae.hideMenu(true);
};
cY.S("confirm").onclick=function()
{
var aZ=ae.getBindEditor(),
lj=aZ.getEditDoc(),
Ij=aZ.getEditWin();
aZ.loadLastRange();
if(ZF)
{
if(lj.selection)
{
aZ.focus();
lj.selection.createRange().pasteHTML(
A.T('<a href="$url$" >$name$</a>').replace(
{
url:ae.aeT(),
name:ae.bdU()
}
)
);
}
else
{
var bI=Ij.getSelection().getRangeAt(0),
gC=lj.createElement("a");
gC.href=ae.aeT();
gC.innerHTML=ae.bdU();

bI.insertNode(gC);
bI.setStartAfter(gC);
}
}
else
{
aZ.execCmd(ae.getCmd(),ae.aeT());
}
ae.hideMenu(true);
};
cY.S("cancel").onclick=function()
{
ae.hideMenu(true);
};

A.addEvent(cY.S("name"),"keydown",function(ah)
{
var ft=ah.keyCode;

if({13:1,27:1}[ft])
{
A.stopPropagation(ah);
A.preventDefault(ah);
}

ft==13&&(ae.getMenu().S("link").value?
ae.getMenu().S(!aep?"confirm":"modify").click():
ae.getMenu().S("link").focus());
ft==27&&ae.hideMenu(true);
}
);

A.addEvent(cY.S("link"),"keydown",function(ah)
{
var ft=ah.keyCode;

if({13:1,27:1}[ft])
{
A.stopPropagation(ah);
A.preventDefault(ah);
}

ft==13&&ae.getMenu().S(!aep?"confirm":"modify").click();
ft==27&&ae.hideMenu(true);
}
);

cY=aZ=aT;
};

QMEditor.FUNCLIB.CreateLink.prototype.doMenuShow=function(cY)
{
if(A.isShow(cY.S("link_cntr")))
{
cY.S("link").focus();
cY.S("link").select();
}
};

QMEditor.FUNCLIB.CreateLink.prototype.aeT=function()
{
var UH=this.getMenu().S("link").value;


if(/[a-zA-Z_0-9.-]+@[a-zA-Z_0-9.-]+\.\w+/.test(UH))
{
return A.trim(UH).toLowerCase().indexOf("mailto")==0
?UH:"mailto:"+UH;
}

return A.trim(UH).indexOf("://")==-1?"http://"+UH:UH;
};

QMEditor.FUNCLIB.CreateLink.prototype.bdU=function()
{
var awx=this.getMenu().S("name");
return awx.className!="qmEditorCLNameDef"&&awx.value||this.aeT();
};


QMEditor.FUNCLIB.SourceEdit=QMEditor.FUNCLIB.inheritFrom(function(
ci)
{




















this.setId("SourceEdit");
this.setType("custom");
this.setBindEditor(ci.editor);
var fc=this.getBindEditor().getLanguage();
this.setUiConfig(
{
title:fc.FUN_SOURCEEDIT,
sourceToolBar:
{
formatTitle:fc.SE_FORMAT_TITLE,
langFormat:fc.SE_FORMAT,
previewTitle:fc.SE_PREVIEW_TITLE,
langPreview:fc.SE_PREVIEW,
langFormatting:fc.SE_FORMATTING
}
});
this.setfOnClick(this.Cb);
this.setfDoDefaultClick(this.Cb);
},QMEditor.FUNCLIB.BASE
);

QMEditor.FUNCLIB.SourceEdit.prototype.setMouseOverEvent=function(aax)
{
};

QMEditor.FUNCLIB.SourceEdit.prototype.Cb=function(ah)
{
var aZ=this.getBindEditor(),
vd=aZ.getToolBarInfo().SpellCheck;
if(vd)
{
vd.gr(0,0,1);
}

this.bEJ();
aZ.hideMenu();
aZ.changeEditMode("source");
};

QMEditor.FUNCLIB.SourceEdit.prototype.bEJ=function()
{
var aZ=this.getBindEditor(),
aIg=aZ.getSrceToolBarObj();

if(aIg.getAttribute("setuped")=="true")
{
return false;
}

aIg.innerHTML=aZ.getTemplate().SOURCEEDIT_TOOLBAR
.replace(this.getUiConfig().sourceToolBar);

aIg.setAttribute("setuped","true");

this.bLO();
};

QMEditor.FUNCLIB.SourceEdit.prototype.bLO=function()
{
var ae=this,
aZ=this.getBindEditor(),
UA=aZ.getSrceToolBarObj().firstChild,
aRT=UA.nextSibling;

aRT.onclick=function()
{
if(ae.Mp)
{
clearInterval(ae.Mp);
}
aZ.changeEditMode("html");

var vd=aZ.getToolBarInfo().SpellCheck;
if(vd)
{
vd.gr(1,0,1);
}
};

UA.onclick=function()
{
ae.aZQ();
};
};

QMEditor.FUNCLIB.SourceEdit.prototype.aZQ=function()
{
var ae=this;
aZ=ae.getBindEditor();

if(!window.QMFormatter)
{
aZ.loadFile(
{
"$js_path$/com/kits/qmeditor/base/release/plus/formatter133d9c.js":true
}
);

if(ae.Mp)
{
return;
}

this.Mp=setInterval(function()
{
ae.aZQ();
},500);

return;
}

if(this.Mp)
{
clearInterval(this.Mp);
}

var UA=aZ.getSrceToolBarObj().firstChild,
aEY=UA.firstChild,
bbi=aEY.lastChild,
beg=UA.lastChild;

A.show(aEY,true);
A.show(beg,false);

UA.className="qmEditorFormatting";
bbi.innerHTML="0%";

function VK(aRe)
{
aZ.setEditContent("source",aRe);

A.show(aEY,false);
A.show(beg,true);

UA.className="qmEditorBtnA";
};

function RF(bOH)
{
bbi.innerHTML=bOH;
}

QMFormatter.format(aZ.getEditContent("source"),
VK,RF
);

};


QMEditor.FUNCLIB.Preview=QMEditor.FUNCLIB.inheritFrom(function(ci)
{











this.setId("Preview");
this.setType("custom");
this.setBindEditor(ci.editor);
this.setContainerClassName("qmEditorToolBarItemRight");
var fc=this.getBindEditor().getLanguage();
this.setUiConfig(
{
title:fc.FUN_PREVIEW,
langPreview:fc.FUN_PREVIEW
});
this.setfOnClick(this.Cb);
this.setfDoDefaultClick(this.Cb);
},QMEditor.FUNCLIB.BASE
);

QMEditor.FUNCLIB.Preview.prototype.Cb=function(ah)
{
var aZ=this.getBindEditor();

A.callBack.call(aZ,aZ.getfOnPreview());
};

QMEditor.FUNCLIB.Preview.prototype.setMouseOverEvent=function(aax)
{
};


QMEditor.FUNCLIB.UploadEml=QMEditor.FUNCLIB.inheritFrom(function(ci)
{











this.setId("UploadEml");
this.setType("custom");
this.setBindEditor(ci.editor);
this.setContainerClassName("qmEditorToolBarItemRight");
var fc=this.getBindEditor().getLanguage();
this.setUiConfig(
{
title:fc.FUN_UPLOADEML,
langUploadEml:fc.FUN_UPLOADEML
});
this.setfOnClick(this.Cb);
this.setfDoDefaultClick(this.Cb);
},QMEditor.FUNCLIB.BASE
);


QMEditor.FUNCLIB.UploadEml.prototype.Cb=function(ah)
{
var aZ=this.getBindEditor();

A.callBack.call(aZ,aZ.getfOnUploadEml());
};

QMEditor.FUNCLIB.UploadEml.prototype.setMouseOverEvent=function(aax)
{
};


(function(){QMEditor.setupFunc();})();
}
)(QMEditorAdapter);
(function(A,aT)
{
A.extend(QMEditor.CONST.LANGUAGE.zh_CN,{
FUN_SPELLCHECK:"Check spelling",
FUN_SPELLCHECKTITLE:"English Spelling Check",
FUN_SPELLCHECKING:"Checking spelling"
}
);

A.extend(QMEditor.CONST.getTemplate(),{

BOTTON_ICON_SPELLCHECK:A.TE([
'<div class="qmEditorBtnA" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="$ui.style$;padding-left:0;" ',
' unselectable="on" onmousedown="return false;" title="$title$" >$ui.content$</div>'
])
});


QMEditor.FUNCLIB.SpellCheck=QMEditor.FUNCLIB.inheritFrom(function(ci)
{



if(!getTop().goUserInfo.get('RealOpenSpellCheck'))
{
return;
}













this.setId("spellcheck");
this.setType("custom");
this.setBindEditor(ci.editor);
this.setContainerClassName("qmEditorToolBarItemRight");
var aZ=this.getBindEditor(),
fc=aZ.getLanguage();
this.setUiConfig(
{
title:fc.FUN_SPELLCHECKTITLE,
content:fc.FUN_SPELLCHECK
});
this.setfOnClick(this.Cb);
this.setfDoDefaultClick(this.Cb);








this.alz={};

aZ.getToolBarInfo().SpellCheck=this;


this.bRK=/(.*?)((<.*?>)|(&nbsp;)|[^\x00-\xff]|[\[\]\"\'\\\-!$^()_,.:;<>?/`\uFF04\uFF3E\uFF0A\uFF3F\uFF3B\uFF3D{}\uFF0E\uFF02\uFF07\uFF1C\uFF1E\uFF0F\uFFE3\uFF40@#%&*+=|~\uFF01\uFF20\uFF03\uFFE5\uFF05\u2026\uFF06¡Á\uFF08\uFF09\uFF0D\u2014\uFF0B\uFF1D\u3010\u3011\uFF5B\uFF5D\uFF0C\u3002\uFF1A\uFF1B\u201C\u201D\u2018\u2019\uFF3C\uFF5C\u300A\u300B\uFF1F\u3001\uFF5E¡¤\t\r\v\f\x20\n\u3000])/g;
this.bNX=/(.*?)([\[\]\"\'\\\-!$^()_,.:;<>?/`\uFF04\uFF3E\uFF0A\uFF3F\uFF3B\uFF3D{}\uFF0E\uFF02\uFF07\uFF1C\uFF1E\uFF0F\uFFE3\uFF40@#%&*+=|~\uFF01\uFF20\uFF03\uFFE5\uFF05\u2026\uFF06¡Á\uFF08\uFF09\uFF0D\u2014\uFF0B\uFF1D\u3010\u3011\uFF5B\uFF5D\uFF0C\u3002\uFF1A\uFF1B\u201C\u201D\u2018\u2019\uFF3C\uFF5C\u300A\u300B\uFF1F\u3001\uFF5E¡¤\t\r\v\f\x20\n\u3000])/g;

var bba={text:0,html:1},
ae=this;

this.pL=bba[aZ.getContentType()];




A.createBlankIframe(A.window,
{id:"spellcheckDocument"}
);


this.rC=new QMAjax("/cgi-bin/speller");
this.rC.onComplete=function(er)
{
var Ne=ae.rC.bDB;
for(var aD=Ne.length-1;aD>=0;aD--)
{
ae.alz[Ne[aD]]={};
}
Ne=evalValue(er.responseText);
if(typeof Ne=="object")
{
A.extend(ae.alz,Ne);
}
if(ae.pL&bba[ae.getBindEditor().getContentType()])
{
ae.gr(1);
}
ae.aId();
};
this.rC.onError=function(er,cv)
{
if(cv!="abort")
{
A.showError("Spelling check failed. Please try again. ");
}
ae.aId();
};


},QMEditor.FUNCLIB.BASE
);

QMEditor.FUNCLIB.SpellCheck.prototype.getStatus=function()
{
return this.pL;
};


QMEditor.FUNCLIB.SpellCheck.prototype.Cb=function(ah)
{
var aZ=this.getBindEditor(),
aC=A.getEventTarget(ah),
cNM=this.pL&4,
ae=this;
this.bju=aC;
if(this.pL&4)
{

return;
}
setTimeout(function()
{

ae.bRb();
});
};

QMEditor.FUNCLIB.SpellCheck.prototype.setMouseOverEvent=function(aax)
{
};

QMEditor.FUNCLIB.SpellCheck.prototype.bRb=function(HK)
{





if(HK)
{
this.rC.abort();
this.gr(0);
return;
}
this.bfi();

}


QMEditor.FUNCLIB.SpellCheck.prototype.aVc=function()
{
var aZ=this.getBindEditor(),
bDm=aZ.getContentType()=="text"?this.bNX:this.bRK,
aGn=this.alz,
Ne=[],bdt={},
bU=A.T('<$label$ class="" title="Please click on the word to display spelling suggestions. " name="spellcheck" style="border-bottom:1px dotted #FF2E7E;">$w1$</$label$>$w2$'),
ib=A.now(),
dQ=[
["&lt;","%"+ib+"#"],
["&gt;","%"+(ib+1)+"#"],
["&amp;","%"+(ib+2)+"#"],
["&quot;","%"+(ib+3)+"#"]
],
bhw={},
dk=aZ.getContent();
for(var aD=dQ.length-1;aD>=0;aD--)
{
dk=dk.replace(new RegExp(dQ[aD][0],"gi"),dQ[aD][1]);
bhw[ib+aD]=1;
}

dk=dk.replace(bDm,function(byW,Ka,bRW)
{
if(Ka&&!bhw[Ka])
{
if(!aGn[Ka])
{
if(!bdt[Ka])
{
bdt[Ka]=1;
Ne.push(Ka);
}
}
else if(aGn[Ka].suggestion&&!aGn[Ka].aYK)
{
return bU.replace({
w1:Ka,
w2:bRW,
label:A.gbIsIE?"a":"span"
});
}
}
return(byW);
});

for(var aD=dQ.length-1;aD>=0;aD--)
{
dk=dk.replace(new RegExp(dQ[aD][1],"gi"),dQ[aD][0]);
}

return[Ne,dk];
};

QMEditor.FUNCLIB.SpellCheck.prototype.aId=function()
{
var fc=this.getBindEditor().getLanguage(),
TN=this.bju,
cB=TN.style;
TN.innerHTML=fc.FUN_SPELLCHECK;
TN.title=fc.FUN_SPELLCHECKTITLE;
cB.paddingTop="2px";
cB.cursor="pointer";
cB.textDecoration="underline";
this.pL&=0xF^4;
};


QMEditor.FUNCLIB.SpellCheck.prototype.bRe=function()
{
var fc=this.getBindEditor().getLanguage(),
TN=this.bju,
cB=TN.style;
TN.innerHTML=fc.FUN_SPELLCHECKING;
TN.title=fc.FUN_SPELLCHECKING;
cB.paddingTop="0";
cB.cursor="auto";
cB.textDecoration="none";
};

QMEditor.FUNCLIB.SpellCheck.prototype.bfi=function()
{
var aF=this.aVc(),
ae=this;
this.bRe();
if(aF[0].length)
{
this.pL|=4;
this.rC.abort();
this.rC.bDB=aF[0];
this.rC.send(A.T("wordlist=$wl$&sid=$sid$&t=compose_speller").replace({
wl:aF[0].join(" "),
sid:A.getSid()
})
);

}


setTimeout(function(){
ae.aId();
},1000);
};


QMEditor.FUNCLIB.SpellCheck.prototype.auk=function(Cx)
{







var eF=Cx.parentNode;
while(Cx.firstChild)
{
eF.insertBefore(Cx.firstChild,Cx);
}
eF.removeChild(Cx);









};

QMEditor.FUNCLIB.SpellCheck.prototype.ayt=function(dF)
{
dF=dF||this.getBindEditor().getEditDoc();
var Gc=dF.getElementsByName("spellcheck");
for(var aD=Gc.length-1;aD>=0;aD--)
{
this.auk(Gc[aD]);
}
}

QMEditor.FUNCLIB.SpellCheck.prototype.bQS=function(ah)
{
var jQ=A.getEventTarget(ah),
Uu=this.alz[jQ.innerHTML];
if(!Uu)
{
this.bfi();
}
else if(Uu.suggestion)
{

var jF=A.calcPosFrame(jQ,this.getBindEditor().getEditWin()),


aJn=Uu.suggestion,
ae=this,
cUe=function(ah)
{
var aC=A.getEventTarget(ah);

jQ.innerHTML=aC.innerText||aC.textContent;
ae.auk(jQ);
};
bn=[];

for(var aD=0,cJ=aJn.length;aD<cJ;aD++)
{
if(aJn[aD])
{


bn.push({
sId:aD,
sItemValue:aJn[aD]
});
}
}
if(!bn.length)
{


bn.push({
sItemValue:"\u6CA1\u6709\u5EFA\u8BAE"
});
}


bn.push({
sItemValue:'<hr/>'
});

bn.push({
sId:"ignore",
sItemValue:"\u5FFD\u7565"
});





if(this.getBindEditor().getEditDoc().getElementsByName("spellcheck").length>1)
{
bn.push({
sId:"ignoreall",
sItemValue:"Ignore All"
});










}
Uu.hP=Uu.hP||unikey("m");



new(A.QMMenu)({
sId:Uu.hP,
oEmbedWin:A.window,
nX:jF[3],
nY:jF[2],
nWidth:150,
nItemHeight:21,
oItems:bn,
onitemclick:function(ay)
{
if(ay=="ignore")
{
Uu.aYK=1;
ae.auk(jQ);
}
else if(ay=="ignoreall")
{
A.E(ae.alz,function(VA)
{
VA.aYK=1;
});
ae.ayt();
}
else
{
jQ.innerHTML=bn[ay].sItemValue;
ae.auk(jQ);
}
}
});
}
};

QMEditor.FUNCLIB.SpellCheck.prototype.aOE=function()
{
var ae=this,
uI=function(){},
bLw=function(ah)
{
ae.bQS(ah);
};
A.E(ae.getBindEditor().getEditDoc().getElementsByName("spellcheck"),function(Cx)
{
if(!Cx.onclick)
{
A.addEvent(Cx,"click",bLw);
Cx.onclick=uI;
}
});
};

QMEditor.FUNCLIB.SpellCheck.prototype.gr=function(bQw,eK,aVp)
{
if(bQw)
{
if(!aVp||(this.pL&8))
{
var Ym=this.getBindEditor();
this.pL&=0xF^8;
this.pL|=2;
Ym.setContent(eK||this.aVc()[1]);
this.aOE();
Ym.focus(0);
}
}
else
{
if(aVp&&(this.pL&2))
{
this.pL|=8;
}
this.rC.abort();
this.pL&=0xF^2;
this.ayt();
}
};


(function(){QMEditor.setupFunc();})();
}
)(QMEditorAdapter);
