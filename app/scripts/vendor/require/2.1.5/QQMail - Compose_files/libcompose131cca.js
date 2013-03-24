




(function(ao,aR)
{
var eHa=140;
var bRz=ao.ComposeLib={};






















bRz.openDlg=function(abY,aj)
{
var fzQ={
"sms":fNT,
"note":fDE,
"group":fQI,
"normal":fBK,
"card":fkq
};
var eMO=fzQ[abY];
if(eMO)
{
aj=aj||{};
aj.sType=abY;
uo(aj,
{
bAddrEdit:true
}
);
new eMO(aj);
}
}
bRz.getAttachList=function(ib,cj,gO)
{
var kX=arguments.callee,
bh=arguments;


getTop().getAttachList(ib,function(anX,an)
{
if(anX)
{
cj(an);
}
else
{
cxl();
}
}
);

function cxl()
{
if(!gO)
{
getTop().showError("Fail to load attachments");
return;
}
else
{
gO.innerHTML="";
}
var aT=gO.ownerDocument,
av=aT.createElement("div"),
OZ=aT.createElement("span"),
iR=aT.createElement("a");
OZ.innerHTML="Fail to load attachments.";
iR.innerHTML="Please try again";
iR.href="javascript:;";
iR.onclick=function()
{
gO.innerHTML="Trying";
kX.apply(bRz,bh);
}
av.appendChild(OZ);
av.appendChild(iR);
gO.appendChild(av);
}
}



bRz.send=function(bhM,dCY,eBU)
{
var by=(dCY&&dCY.sType)||"normal";
eL=(new QMCpsSend(
uo(bhM,eMH[dCY.oMailAttach?"attach":by]),
uo(dCY,dQj[by])
)).send(eBU);
bRz.Gp=eL;
};



bRz.abort=function(aR)
{
if(bRz.Gp)
{
try
{
bRz.Gp.abort();
}
catch(e)
{
debug(e);
}
bRz.Gp=aR;
}
};



bRz.getFormData=function(lu)
{
var fgc=/^(?:select|textarea)/i,
fWe=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
fgw=/^(?:radio|checkbox)$/i,
eMh=lu.elements,
aL={};
for(var i=0,l=eMh.length;i<l;i++)
{
var aD=eMh[i],
aV=aD.name,
cA=aD.value,
dTk=aD.checked;
if(aV
&&cA
&&(fgw.test(aD.type)&&aD.checked||fgc.test(aD.nodeName)||fWe.test(aD.type))
&&aV!="content_compare"

)
{

if(aV!="content__html")
{
cA=cA.replace(/&/gi,"&#38;").replace(/&#38;#x(?=\w{4})/gi,"&#x");
}
if(!dTk&&aV=="contenttype")
{
aD=aV=dTk=undefined;
continue;
}
if(!aL[aV])
{
aL[aV]=cA;
}
else if(typeof(aL[aV])=="object")
{
aL[aV].push(cA)
}
else
{
aL[aV]=[aL[aV],cA];
}
}
aD=aV=dTk=undefined;
}


return aL;
};



function aFu(aj,OR)
{
var agT=aj.sFormId||unikey(),
gQ=S(agT,aj.oWin),
le=[],
aYL=TE([
'<form method="$sMethod$" id="$sFormId$" name="$sFormId$" target="$sTarget$" action="$sAction$" enctype="multipart/form-data">',
'$@$for($oInputs$)$@$',
'<input name="$name$" type="hidden" value="$value$"/>',
'$@$endfor$@$',
'</form>']);

if(gQ)
{
removeSelf(gQ);
}
OR=OR||{};
OR.sid=OR.sid||getSid();
E(OR,function(nz,lU)
{
le.push({name:lU,value:nz});
}
);
aj.oInputs=le;
insertHTML(aj.oWin.document.body,"beforeEnd",aYL.replace(
extend(
{
sFormId:agT,
sTarget:"actionFrame",
sMethod:"POST"
},aj)
)
);
return S(agT,aj.oWin);
}

function uo(aj,DZ,Qf)
{
aj=aj||{};

var eKu=function(aI)
{
for(var i in aI)
{
if(Qf||typeof(aj[i])=="undefined"||aj[i]==null)
{
aj[i]=aI[i];
}
}
}
if(isArr(DZ))
{
for(var i=0;i<DZ.length;i++)
{
eKu(DZ[i]);
}
}
else
{
eKu(DZ);
}
return aj;
}

function fHG(aoS,ahT)
{
var arq=aoS.style?aoS:getTop().S(aoS,window),
Ef=0,
bku=isNaN(ahT)?6:ahT;
(function()
{
arq.style.backgroundColor=(Ef++%2==0)
?"#f9f2b3":"#fff";
if(Ef<bku)
{
setTimeout(arguments.callee,100);
}
}
)();
}


var

fwZ=
{
normal:
{
sTitle:"Send Message",
nHeight:"auto",
nWidth:"auto"
},
sms:
{
sTitle:"Send SMS",
nHeight:"auto",
nWidth:"auto"
},
note:
{
sTitle:"Fast Note",
nHeight:"auto",
nWidth:"auto"
},
group:
{
sTitle:"Group Message",
nHeight:"auto",
nWidth:"auto"
},
card:
{
sTitle:"Send Greeting Card",
nHeight:"auto",
nWidth:"auto"
}
},


dQj=
{
normal:
{
sSendingDesc:"Sending message...",
sFailDesc:"Failed to send the message.",
sSuccessDesc:"Message is sent",
sCgiPath:"/cgi-bin/compose_send"
},
sms:
{
sSendingDesc:"Sending SMS...",
sFailDesc:"Failed to send SMS",
sSuccessDesc:"SMS sent. <br><a href='javascript:;' id='goSmsLink'>Click here to check.</a>",
sCgiPath:"/cgi-bin/compose_send"
},
group:
{
sSendingDesc:"Sending message...",
sFailDesc:"Failed to send the message.",
sSuccessDesc:"Message is sent",
sCgiPath:"/cgi-bin/groupmail_send"
},
note:
{
sSendingDesc:"Saving note...",
sFailDesc:"Failed to save the note.",
sSuccessDesc:"Note saved",
sCgiPath:"/cgi-bin/note_edit"
},
card:
{
sSendingDesc:"Sending the greeting card...",
sFailDesc:"Failed to send the greeting card. ",
sSuccessDesc:"Message is sent",
sCgiPath:"/cgi-bin/compose_send"
}
},


eMH=
{
nil:
{
actiontype:"send"
},
attach:
{
actiontype:"send",
s:"comm",
from:"attachfolder",
from_s:"forward",
ReAndFw:"forward",



savesendbox:"1"
},

normal:
{
actiontype:"send",
separatedcopy:"false",
selfdefinestation:"-1",
savesendbox:"1",
domaincheck:"0"
},


sms:
{
t:"sms_mgr.json",
s:"send",
subject:"SMS",
savesendbox:"1",
mailtype:"5",
smstype:1
},

note:
{
t:"compose.json",
catid:"0",
actiontype:"send"
},

group:
{
t:"compose.json"

},
card:
{
actiontype:"send",

separatedcopy:"false",
selfdefinestation:"-1",
savesendbox:"1",
domaincheck:"0"
}
},


cFm={
fLI:"Please fill in the recipient first. ",

eNd:[
'<div class="dialog_f_t">You have not filled in subject of the message. </div>',
'<div class="dialog_f_d" style="font-size:14px;">Are you sure you want to continue? </div>'
].join(""),

fbe:"Failed to load QQ groups. Please try again later. ",

fwU:"Please select a QQ group.",

fCU:"Failed to load QQ groups. Please try again later. "
},

bIb=T("/cgi-bin/readmail?sid=$sid$&t=$t$&s=forward&from=attachfolder&disptype=html$mailattach$"),
fjx=T('/cgi-bin/readtemplate?sid=$sid$&t=compose&disptype=html'),
fUL=T("/cgi-bin/grouplist?sid=$sid$&t=compose.json&s=grouplist"),
fpP=T("/cgi-bin/readtemplate?sid=$sid$&t=sms_list_v2#$hash$"),


fxw=T(
[
'<span over="Over: " default="Left: "></span><span style="font-family:Georgia;font-size:14px;font-weight:bold;"></span> '
]
);







var cZc=inherit("_QMBaseCps",Object,
function(aB)
{
return{
$_constructor_:function(aj)
{
this.fh(aj);
},


gH:function(PY)
{
var dj=this.cMS;
return dj&&dj.S(PY);
},
eZH:function()
{
return this.cMS.getDialogWin();
},

eDL:function(fzb,aYp)
{
var jw=this.gH(fzb);
jw&&(jw.disabled=aYp);
return this;
},



fh:function(aj)
{
var ae=this;
ae.xv(aj);
ae.fIk(aj);
},

xv:function(aj)
{
var ae=this,
by=aj.sType;

uo(aj,fwZ[by]);
ae.bR=aj;

ae.aRQ=extend({},eMH[aj.oMailAttach?"attach":by]);

if(aj.sTitle==="SMS")
{
ae.cCN=extend({},aj,dQj[by]);
}
else
{
ae.cCN=extend({},dQj[by]);
}

ae.aqN;
ae.wx;
ae.eLQ;
ae.eQx=[];
},

fwg:function()
{
var ae=this;
ae.fUG();
ae.eDm();
ae.cHS();
ae.flO();
ae.eWL();
ae.faC();
},

fIk:function(aj)
{
var ae=this;
new QMDialog(
{
sId:aj.sType+"ComposeDlg",
sTitle:aj.sTitle,
nWidth:aj.nWidth,
nHeight:aj.nHeight,
sBodyHtml:ae.fHr(),
onload:function()
{
ae.cMS=this;
ae.fwg(this);
},
onbeforeclose:function()
{
(ae.wx||ae.gH("content")).focus();
return true;
},
onshow:function()
{
var nJ=this.option("nY");
if(nJ<70)
{
this.option("nY",70)
}
ae.fRZ(this);
}
}
);
},

PN:function()
{
var ae=this;
ae.cPJ();
ae.flh();
ae.eQx=ae.cYo();
ae.dIM();
},







fRZ:function()
{
var ae=this,
Jg=ae.aqN;
if(Jg&&!Jg.get().length)
{
Jg.focus();
}
else
{
ae.fcZ().focus();
}
},

eWL:function()
{
},


dtU:function(nz)
{
var ae=this,
czJ,
Yv=ae.aRQ,
dQc=ae.cCN;

switch(nz)
{
case"to":
czJ=Yv.to!="";
if(!czJ)
{
showError(cFm.fLI);
if(ae.aqN)
{
fHG(ae.gH("toAddrArea"));
ae.aqN.focus();
}
}
break;
case"subject":
czJ=Yv.subject!="";
break;
case"wordcnt":
break;

}
return czJ;
},

dIM:function()
{
var ae=this,
ePU=ae.eQx.shift();

if(!ePU)
{
(new QMCpsSend(
ae.aRQ,
ae.cCN)
).send();
}
else
{
var Qo=callBack.call(ae,ePU)
if(Qo)
{
return ae.dIM();
}
else
{
}
}
},


cYo:function()
{
return[];
},

eDm:function()
{
var ae=this;

(ae.wx=QMEditor.createEditor({
editorId:"ComposeDlg",
editorAreaWin:ae.eZH(),
editorAreaObj:ae.gH("QMEditorArea"),
funclist:QMEditor.CONST.FUNCLIST.COMPOSE,

onkeydown:function(ag){ae.bxL(ag)}
})).initialize(ae.bR.sDefContent,false,3);
},

bxL:function(ag)
{



var ae=this;
zk=ag.ctrlKey,
zm=ag.altKey,
kl=ag.keyCode;

if(zk&&kl==13 
||zm&&kl==83)
{
fireMouseEvent(ae.gH("sendBtn"),"click");
}




},

fUG:function()
{
var ae=this,
aE=ae.bR,
by=aE.sType;

ae.gH("sendBtn").onclick=function()
{
ae.PN();
}
ae.gH("cancelBtn").onclick=function()
{
ae.cMS.close();
}
addEvent(ae.cMS.getPanelDom(),"keydown",function(ag)
{
ae.bxL(ag);
});

var eKA=ae.gH("jumpToNewWin");
eKA&&(eKA.onclick=function(){
ae.fhL();
});
},
faC:function()
{

},
fhL:function()
{

var ae=this,

aE=ae.bR,
vn=aE.oMailAttach||[],
bS=ae.wx,
cA=bS?bS.getContent():"",
ah=getTop(),
az=ae.bM,
bi=(aE.oMailAttach?bIb:fjx).replace({
sid:getSid(),
t:"compose",
s:"forward",
from:"attachfolder",
disptype:"html",
mailattach:ah.TE([
'$@$for($oAttach$)$@$',
'&mailattach=$mailid$|$attachid$|$attachname$|$fileextenal$|$filebyte$',
'$@$if($editname$)$@$',
'|$editname$',
'$@$endif$@$',
'$@$endfor$@$'
]).replace(
{
oAttach:vn
}
)
});


ae.cMS.close();

aFu(
{
oWin:getMainWin(),
sTarget:"_self",
sAction:bi
},
{
initsubject:ae.gH("subject").value,
initaddress:getTop().htmlEncode(ae.aqN.get().join(";")),
pluscontent:getTop().htmlEncode(cA)
}
).submit();
},
cHS:function()
{
var ae=this,
aE=ae.bR;

if(aE.bAddrEdit)
{
ae.aqN=Jg=new QMAddrInput(
{
id:"to",
win:ae.eZH(),
dom:{container:ae.gH("toAddrArea")},
tabIndex:1,
dispMode:"onlynick",
isEnableTip:false,
maxItemView:10
}
);
Jg.add(aE.sDefAddrs);
}
},

flO:function()
{
var ae=this;
if(ae.gH("subject"))
{
ae.gH("subject").value=ae.bR.sDefSubject||"";
};

},

dWf:function(cu)
{
alertBox({msg:this.cCN.sSuccessDesc});
},




cMX:function()
{
},

flh:function()
{
var ae=this;
extend(ae.cCN,ae.cMX(),
{
onready:function()
{
ae.cmo(true);
},

oncomplete:function(bz,cu)
{
if(bz)
{
ae.cMS.close(true);
ae.dWf(cu);
callBack(ae.bR.oncomplete,[bz]);
}
else
{
ae.cmo(false);
ae.fcZ().focus();
}
}
}
);
},

cmo:function(aYp)
{
this.eDL("sendBtn",aYp).eDL("saveBtn",aYp);
},

fcZ:function()
{
var ae=this;
return ae.wx||ae.gH("content");
},

fHr:function()
{
var ae=this,
aE=ae.bR;

return ae.constructor.ci.cWs.replace(
{
addredit:aE.bAddrEdit,
addrs:QMAddrParser.parseAddr(aE.sDefAddrs)
}
);
},


cPJ:function()
{
}

};
},
{
});

var fBK=inherit("_QMNorCps",cZc,
function(aB)
{
return(
{
cMX:function()
{
return{nLocId:100};
},
faC:function()
{

if(!this.bR.oMailAttach)
{
return;
}
var ae=this,
aE=ae.bR,
fnP=ae.gH("attachArea"),
bWP=ae.gH("attachList");


fnP.style.display="";

bRz.getAttachList(aE.oMailAttach,function(an)
{
var aD=an,
aIC=[],
vn=aD.attach,
edn=aD.forward;

bWP.innerHTML=ae.constructor.ci.fFt.replace({
list:vn
});
for(var i=0;i<vn.length;i++)
{
aIC.push(vn[i].name);

extend(
ae.aRQ,
{
mailattach:[vn[i].mailid,vn[i].mailid.indexOf("@")==0?vn[i].attid:vn[i].symname,vn[i].name].join("|")
}
);
}

extend(
ae.aRQ,
{
ReAndFwMailid:edn,
fattachlist:aIC.join("|")
}
);
},
bWP
);
},

cPJ:function()
{
var ae=this,
aE=ae.bR,
Yv=ae.aRQ;

extend(Yv,
{
sendmailname:getUserInfoText("addr"),
to:aE.bAddrEdit?ae.aqN.get().join(";"):aE.sDefAddrs,
subject:ae.gH("subject").value,
content__html:ae.wx.getContent()
}
);

if(aE.bUinEncrypt)
{
Yv.ue=1;
}
},

cYo:function()
{
var ae=this;
return[
function()
{
return ae.dtU("to");
},
function()
{
if(!ae.dtU("subject"))
{
confirmBox(
{
msg:cFm.eNd,
width:430,
onreturn:function(kM)
{
if(kM)
{
ae.dIM();
}
}
}
);
return false;
}
return true;
}
];
}
}
);
},
{
ci:
{
cWs:TE(
[
'<div style="*width:466px;text-align:left; padding:10px 15px 10px 10px;">',
'<div style="margin:0 0 5px; overflow:hidden; zoom:1;">',
'<div style="float:right;margin:0;" id="jumpToNewWin">',
'<input type="button" class="ico_input icon_switch_compose" style="margin-right:4px;margin-bottom:3px;vertical-align:middle;">',
'<a href="javascript:;">Switch to full mode</a>',
'</div>',
'<div class="clr"></div>',
'</div>',
'<div style="margin:0 0 5px; overflow:hidden; zoom:1;">',
'<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9;  text-align:right;height:24px;line-height:24px;">To:</div>',
'$@$if($addredit$)$@$',
'<div id="toAddrArea" class="noime div_txt f_size" style="line-height:16px;margin-left:60px;width:399px;"></div>',
'$@$else$@$',
'<div class="noime div_txt f_size settingtable graytext" style="line-height:16px;margin-left:60px;width:399px;">',
'$@$for($addrs$)$@$$@$eval htmlEncode($nick$)$@$; $@$endfor$@$',
'</div>',
'$@$endif$@$',
'<div class="clr"></div>',
'</div>',
'<div id="subjectArea" style="margin:0 0 5px; overflow:hidden; zoom:1;">',
'<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:25px;line-height:25px;">Subject: </div>',
'<div style="margin-left:60px;"><input id="subject" class="txt" type="text" style="width:399px;height:25px;line-height:25px;" tabindex="2"/></div>',
'<div class="clr"></div>',
'</div>',
'<div id="attachArea" style="margin:0 0 5px; overflow:hidden; zoom:1;display:none">',
'<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:25px;line-height:25px;">File:</div>',
'<div id="attachList" style="float:left;line-height:25px;width:400px;overflow:hidden;white-space:nowrap;">',
'<span>Loading attachments</span>',
'</div>',
'<div class="clr"></div>',
'</div>',
'<div style="margin:0 0 5px;zoom:1;">',
'<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:24px;line-height:24px;">Content: </div>',
'<div style="margin-left:60px;"><div id="QMEditorArea" style="height:150px;" ></div></div>',
'<div class="clr"></div>',
'</div>',
'<div style="overflow:hidden; zoom:1;padding:4px 8px 4px 60px;text-align:left;">',
'<a class="btn_blue btn_space" tabindex="4" id="sendBtn">Send</a>',
'<a class="btn_gray" tabindex="5" id="cancelBtn">Cancel</a>',
'</div>',
'</div>'


]),
fFt:TE([
'$@$if($list.length$>5)$@$',

'<div style="height:125px;overflow:auto;">',
'$@$for($list$)$@$',

'<div aid="$id$">',
'<input type="button" class="ico_att" style="margin:0 3px 2px 0" tabindex="-1">',
'<span>$@$eval htmlEncode($name$)$@$</span> ($@$if($newname$)$@$$newname$ $@$endif$@$<span byte="$byte$" class="addrtitle">$size$</span>)',
'</div>',

'$@$endfor$@$',
'</div>',
'$@$else$@$',
'$@$for($list$)$@$',
'$@$if($_idx_$<=5)$@$',
'<div aid="$id$">',
'<input type="button" class="ico_att" style="margin:0 3px 2px 0" tabindex="-1">',
'<span>$@$eval htmlEncode($name$)$@$</span>&nbsp;<span class="addrtitle">($@$if($newname$)$@$$newname$ $@$endif$@$<span byte="$byte$">$size$</span>)</span>',
'</div>',
'$@$endif$@$',
'$@$endfor$@$',
'$@$endif$@$'
])
}
}
);


var fkq=inherit("_QMCardCps",cZc,
function(aB)
{
return(
{
cMX:function()
{
return{nLocId:500};
},

cPJ:function()
{
var ae=this,
Yv=ae.aRQ;

extend(Yv,
{
sendmailname:getUserInfoText("addr"),
to:ae.aqN.get().join(";"),
subject:ae.gH("subject").value,
content__html:ae.wx.getContent()
}
);
},

dWf:function(cu)
{
var ae=this,
fwK=ae.cCN.sSuccessDesc;

if(ae.bR.bShowResult)
{
showInfo("Sent successfully");
}
else
{
alertBox({msg:fwK});
}
},

cYo:function()
{
var ae=this;
return[
function()
{
return ae.dtU("to");
}
];
}
}
);
},
{
ci:
{
cWs:TE(
[
'<div style="text-align:left; padding:20px 15px 10px 10px;">',
'<div style="margin:0 0 5px; overflow:hidden; zoom:1;">',
'<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9;  text-align:right;height:24px;line-height:24px;">Reply</div>',
'<div id="toAddrArea" class="noime div_txt f_size" style="line-height:16px;margin-left:60px;width:399px;"></div>',
'<div class="clr"></div>',
'</div>',
'<div id="subjectArea" style="margin:0 0 5px; overflow:hidden; zoom:1;display:none">',
'<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:25px;line-height:25px;">Subject: </div>',
'<div style="margin-left:60px;"><input id="subject" class="txt" type="text" style="width:399px;height:25px;line-height:25px;" tabindex="2"/></div>',
'<div class="clr"></div>',
'</div>',
'<div style="margin:0 0 5px;zoom:1;">',
'<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:24px;line-height:24px;">Wishes: </div>',
'<div style="margin-left:60px;"><div id="QMEditorArea" style="height:250px;*width:403px;" ></div></div>',
'<div class="clr"></div>',
'</div>',
'<div style="overflow:hidden; zoom:1;padding:4px 8px 4px 60px;text-align:left;">',

'<div class="greenbutton left" style="width:50px;"><input type="button" value="Send" style="width: 50px;" class="" id="sendBtn" tabindex="4"></div>',
'<a id="cancelBtn" class="left" style="display:block;margin-left:10px;line-height:20px;line-height:25px\\9;height:25px\\9;" tabindex="5">Cancel</a>',
'</div>',
'</div>'


])
}
}
);




var fNT=inherit("_QMSmsCps",cZc,
function(aB)
{
return(
{
eWL:function()
{
var ae=this;
ae.eLQ=new eLL(
{
oText:ae.gH("content"),
oDisper:ae.gH("wordCnt")
}
);
},

eDm:function()
{
var ae=this,
bG=ae.gH("content");

bG.value=ae.bR.sDefContent||"";
addEvent(bG,"keydown",function(ag)
{
ae.bxL(ag);
});
},

bxL:function(ag)
{
callBack.call(this,aB.bxL,[ag]);

if(ag.keyCode==13)
{
preventDefault(ag);
}
},

cMX:function()
{
return{nLocId:eHa};
},

cPJ:function()
{
var ae=this,
aE=ae.bR,
Yv=ae.aRQ;

extend(Yv,
{
to:aE.bAddrEdit?ae.aqN.get().join(";"):aE.sDefAddrs,
content:ae.gH("content").value
}
);
if(aE.bUinEncrypt)
{
Yv.ue=1;
}
},
eTx:function(cIB)
{
var aD=this.aRQ,
fu=[];

for(var aV in aD)
{
fu.push([aV,cIB?cIB(aD[aV]):encodeURI(aD[aV])].join("="));
}
return fu.join("&");
},
dWf:function(cu)
{
alertBox(
{
msg:this.cCN.sSuccessDesc,
onload:function()
{
var dj=this;
dj.S("goSmsLink").onclick=function()
{
dj.close();
};
},
onreturn:function()
{

var aD=eval(cu),
bE=aD.content&&aD.content.itms&&aD.content.itms[0]||{},
aIE=bE.inf.tid||bE.inf.id,
zR=aIE?("mail,"+aIE):"inbox";

goUrlMainFrm(fpP.replace({sid:getSid(),hash:zR}),true);
}
}
);
},

cYo:function()
{
var ae=this;
return[
function()
{
return ae.dtU("to");
},
function()
{
var eOa=ae.eLQ;
if(eOa.isOverLimit())
{
showError("Max "+eOa.getLimit()+" characters");
ae.gH("content").focus();
return false;
}
else
{
return true;
}
}
];
}
}
);
},
{
ci:
{
cWs:TE(
[
'<div style="text-align:left; padding:20px 15px 15px 10px;*width:466px;">',
'<div style="margin:0 0 5px; overflow:hidden; zoom:1;">',
'<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9;  text-align:right;height:24px;line-height:24px;">To:</div>',
'$@$if($addredit$)$@$',
'<div id="toAddrArea" class="noime div_txt f_size" style="line-height:16px;margin-left:60px;width:399px;"></div>',
'$@$else$@$',
'<div class="noime div_txt f_size settingtable graytext" style="line-height:16px;margin-left:60px;width:399px;">',
'$@$for($addrs$)$@$$@$eval htmlEncode($nick$)$@$; $@$endfor$@$',
'</div>',
'$@$endif$@$',
'<div class="clr"></div>',
'</div>',
'<div style="margin:0 0 5px; overflow:hidden; zoom:1;">',
'<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:25px;line-height:25px;">Content: </div>',
'<div style="margin-left:60px;"><textarea id="content" class="txt" style="width:395px; overflow:auto; height:80px;"></textarea></div>',
'<div class="clr"></div>',
'</div>',
'<div id="wordCnt" style="margin:5px 0 5px 60px;margin-left:60px;float:right;" class="graytext"></div>',



'<div style="overflow:hidden; zoom:1;padding:4px 8px 4px 60px;text-align:left;">',

'<div class="greenbutton left" style="width:50px;"><input type="button" value="Send" style="width: 50px;" class="" id="sendBtn" tabindex="2"></div>',
'<a id="cancelBtn" class="left" style="display:block;margin-left:10px;line-height:20px;line-height:25px\\9;height:25px\\9;" tabindex="3">Cancel</a>',
'</div>',
'</div>'

])
}
}
);

var fQI=inherit("_QMGrpCps",cZc,
function(aB)
{
return(
{
fmQ:function(ezh)
{
var ae=this,
cSw=ae.gH("toAddrArea");

ae.fvV=ezh;
if(ezh.oItems.length==1)
{
cSw.innerHTML=cFm.fCU;
}
else
{
cSw.innerHTML="";
new QMSelect({
oContainer:cSw,
nWidth:cSw.clientWidth||cSw.offsetWidth||401,
oMenu:ezh,
sStyle:"float:none;padding:0;border-width:0;padding-left:-3px;",
onselect:function(bF)
{
ae.aRQ.qqgroupid=bF.sId;
ae.aRQ.groupname=bF.sItemValue;
}
});
}
},

cHS:function()
{
var ae=this;
QMAjax.send(fUL.replace({sid:getSid()}),
{
method:"GET",
onload:function(bz,cu)
{
if(bz)
{
if(cu.indexOf("oItems")!=-1)
{
var hw=eval(cu);
hw&&ae.fmQ(hw);
return;
}
}
ae.gH("toAddrArea").innerHTML=cFm.fbe;
}
}
);
},

cMX:function()
{
return{nLocId:300};
},

cPJ:function()
{
var ae=this,
Yv=ae.aRQ;

extend(Yv,
{
subject:ae.gH("subject").value,
content__html:ae.wx.getContent()
}
);
},

cYo:function()
{
var ae=this;
return[
function()
{
if(ae.fvV)
{
return true;
}
showError(cFm.fbe);
return false;
},
function()
{
var wz=ae.aRQ.qqgroupid;
if(wz=="null"||!wz)
{
showError(cFm.fwU);
return false;
}
return true;
},
function()
{
if(!ae.dtU("subject"))
{
confirmBox(
{
msg:cFm.eNd,
width:430,
onreturn:function(kM)
{
if(kM)
{
ae.dIM();
}
}
}
);
return false;
}
return true;
}
];
}
}
);
},
{
ci:
{
cWs:TE(
[
'<div style="text-align:left; padding:20px 15px 15px 10px;">',
'<div style="margin:0 0 5px; overflow:hidden; zoom:1;">',
'<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9;  text-align:right;height:25px;line-height:25px;">QQ Group: </div>',
'<div id="toAddrArea" class="noime div_txt f_size" style="padding-left:0px;padding-right:0px;line-height:16px;margin-left:60px;width:399px;width:401px\\9;">Loading QQ group...</div>',
'<div class="clr"></div>',
'</div>',
'<div id="subjectArea" style="margin:0 0 5px; overflow:hidden; zoom:1;">',
'<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:25px;line-height:25px;">Subject: </div>',
'<div style="margin-left:60px;"><input id="subject" class="txt" type="text" style="width:400px;height:25px;line-height:25px;"  tabindex="2"/></div>',
'<div class="clr"></div>',
'</div>',
'<div style="margin:0 0 5px;zoom:1;">',
'<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:25px;line-height:25px;">Content: </div>',
'<div style="margin-left:60px;"><div id="QMEditorArea" style="height:250px;" ></div></div>',
'<div class="clr"></div>',
'</div>',
'<div style="overflow:hidden; zoom:1;padding:4px 8px 4px 60px;text-align:left;">',
'<div class="greenbutton left" style="width:50px;"><input type="button" value="Send" style="width: 50px;" class="" id="sendBtn" tabindex="3"></div>',
'<a id="cancelBtn" class="left" style="display:block;margin-left:10px;line-height:20px;line-height:25px\\9;height:25px\\9;"  tabindex="4">Cancel</a>',
'</div>',
'</div>'
])
}
}
);

var fDE=inherit("_QMNoteCps",cZc,
function(aB)
{
return(
{
cHS:function()
{
},

cMX:function()
{
return{nLocId:400};
},

cPJ:function()
{
var ae=this,
Yv=ae.aRQ;

extend(Yv,
{
content__html:ae.wx.getContent()
}
);
}
}
);
},
{
ci:
{
cWs:TE(
[
'<div style="text-align:left; padding:20px 15px 10px 10px;">',
'<div style="margin:0 0 5px;zoom:1;">',
'<div class="left" style="width:50px; padding:0 10px 0 0; padding-top:2px\9; text-align:right;height:24px;line-height:24px;">Content: </div>',
'<div style="margin-left:60px;"><div id="QMEditorArea" style="height:250px;" ></div></div>',
'<div class="clr"></div>',
'</div>',


'<div style="overflow:hidden; zoom:1;padding:4px 8px 4px 60px;text-align:left;">',

'<div class="greenbutton left" style="width:50px;"><input type="button" value="Send" style="width: 50px;" class="" id="sendBtn" tabindex="2"></div>',
'<a id="cancelBtn" class="left" style="display:block;margin-left:10px;line-height:20px;line-height:25px\\9;height:25px\\9;" tabindex="3">Cancel</a>',
'</div>',

'</div>'
])
}
}
);



var QMCgiExpt=function(ao,fHu)
{
this.eUS;
this.edw;
this.fHf=fHu;
this.bM=ao;
this.eGH;
}

QMCgiExpt.prototype=
{
check:function(bz,cu)
{
var ae=this;
if(bz)
{
ae.eUS=cu.indexOf('<!--cgi exception-->')==-1;
ae.eGH=cu;
}
else
{
ae.edw=typeof(cu)=="number"?cu:"";
}
return ae.eUS;
},

getErrCode:function()
{
return this.edw||"";
},

doExptScript:function()
{
var ae=this;
if(!ae.edw)
{
var az=ae.bM,
de=az.document.createElement("div"),
eoB;

de.innerHTML=ae.eGH;
E(GelTags("div",de),function(wi)
{
if("msg_txt"==wi.id)
{
eoB=wi;
return false;
}
}
);

if(eoB)
{
setVerifyCallBack(function(ekC)
{
callBack(ae.fHf,[ekC]);
}
);

showError(eoB.innerHTML,0,true);
setVerifyCallBack();
}
}
}
}


























var QMCpsSend=function(epF,aj)
{
this.fh(epF,aj);
}

QMCpsSend.prototype=
{
send:function(eBU)
{
var ae=this,
fEp=eBU||{},
eL=new QMAjax,
aE=ae.bR;

showProcess(1,true,aE.sSendingDesc,"",false);
callBack(aE.onready);


QMAjax.send(aE.sCgiPath,
{
method:"POST",
timeout:aE.nTimeout||30000,
content:ae.eTx(fEp.fCustomData),
onload:function(bz,cu)
{
osslogAjaxCompose(55);

var ezG=ae.fxb,
czJ=ezG.check(bz,cu);
if(czJ)
{
osslogAjaxCompose(56);
showProcess(0);
}
else
{
osslogAjaxCompose(57);
showError(aE.sFailDesc+ezG.getErrCode());
ezG.doExptScript();
}
callBack(aE.oncomplete,[czJ,cu]);
}
},
eL
);

return eL;
},

fh:function(epF,aj)
{
var ae=this;

ae.bR=aj;
ae.aRQ=uo(epF,
{
sid:getSid(),
resp_charset:"UTF8"
}
);


if(!ae.aRQ.loc&&typeof ae.bR.nLocId=="number")
{
ae.aRQ.loc=ae.flo();
}

ae.fxb=new QMCgiExpt(ao,
function(ekC)
{
extend(ae.aRQ,ekC);
ae.send();
}
);
},

eTx:function(cIB)
{
var aD=this.aRQ,
fu=[];

for(var aV in aD)
{
var gz=aD[aV];
if(typeof gz=="object"&&gz.length)
{
for(var i=0;i<gz.length;i++)
{
fu.push([aV,cIB?cIB(gz[i]):encodeURI(gz[i])].join("="));
}
}
else
{
fu.push([aV,cIB?cIB(gz):encodeURI(gz)].join("="));
}
}

return fu.join("&");
},

flo:function(jH)
{
var ae=this,
Yv=ae.aRQ,
dQc=ae.bR;

return[
dQc.sCgiPath.split("/").pop(),
Yv.t,
Yv.s,
dQc.nLocId
].join(",");
}
}











var eLL=ao.QMWordCntCtl=function(aj)
{
var ae=this;
ae.fh(aj);
}

eLL.prototype=
{

check:function()
{
var ae=this,
eUm=ae.ftI,
fy=ae.elf-ae.bSy.value.length;

eUm.innerHTML=eUm.getAttribute(fy>0?"default":"over");
ae.fnS.innerHTML=Math.abs(fy);
ae.fhX.style.color=ae.flG(fy);

return ae;
},


getLimit:function()
{
return this.elf;
},


isOverLimit:function()
{
var ae=this;
return ae.elf-ae.bSy.value.length<0;
},


fh:function(aj)
{
var ae=this;
ae.elf=aj.nLimit||eHa;
return ae.axd(aj).kc();
},

axd:function(aj)
{
var ae=this;
eEL=ae.fhX=aj.oDisper,
qC=eEL.childNodes;
ae.bSy=aj.oText;
eEL.innerHTML=fxw;
ae.ftI=qC[0];
ae.fnS=qC[1];
return ae.check();
},

kc:function()
{
var ae=this;

function ads()
{
ae.check();
}

addEvents(ae.bSy,
{
"keydown":ads,
"keyup":ads,
"paste":function()
{
setTimeout(ads);
}
}
);

return ae;
},

flG:function(aej)
{
if(aej<0)
{
return"#FF3300";
}
else if(aej<30)
{
return"#700000";
}
else
{
return"#A0A0A0";
}
}
};

}
)(window);