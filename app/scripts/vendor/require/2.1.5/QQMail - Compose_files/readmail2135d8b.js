

(function(zC)
{
var
ia=
{

dmG:"quickreply",
axV:"source",
cgp:"sendbtn",
dZr:"qmQuickReplyTextContainer",
dWs:"qmQuickReplyButtonContainer",
cQA:"afterSendDiv",
bVp:"afterSendingDiv",
cJM:"QuickReplyPart",

dIs:"QMEditorArea",
dIi:"QMEditorToolBarPlusArea",

epO:"jumpToNewWin",

exD:"replyfrm",

dkl:"submail_start_div",
bqm:"contentDiv",
eoG:"qm_converstaion_body",
dtg:"img_star",
dNK:"starStatus",
ecq:'tagContainer',
ddo:"mailContentContainer",

ekO:"send_time_msg",

dGH:"attachment",
duj:"pageEnd",

duh:"nextmail_top",
dtn:"nextmail_bt",
elG:"nextnewmail",
dRZ:"nextnewDiv",

egP:"QQMailBgMusicInfo",
dRe:"bgmusic",
dqu:"mp3player_container",
equ:"mp3player_info",

bmA:"submail",
coA:"fold",
QA:"detail",
cMQ:"sum",
dZh:"expand",
eob:"detailBtn",

diP:"referinfo",


elL:"setting_group",


cDL:"rmd",
cnM:"remarkContent",
bXb:"remarkcontainer",
beU:"remarktext",
crE:"remarkwrite",
cEn:"remarkread",
elJ:"remarksave",


dmV:"senderInfo",
dJj:"senderInfo2",
dJh:"senderInfo3",
eog:"mainmail",


eqS:"rejectgroupy",
eqQ:"rejectgroupn",

emt:"spam",
dhz:"cheatcode_greenbar",
drq:"greenbar_text"
},

ddn=
{
dSM:"convreandfw",
ebt:"spam",
edo:"moreoprContainer"
},


cYt="qmMailZoomTool",
csQ="qmTranslate",

bjw="Please enter remark here...",

dRr=T([
'<img src="$images_path$spacer12fb20.gif" class="icon_addMusic_d"/>',
'&nbsp;<a href="http://cgi.music.soso.com/fcgi-bin/m.q?w=$title$%20$author$&t=0" target="_blank">$title$ - $author$</a>']),

dkg=TE([
"/cgi-bin/mail_list?sid=$sid$",
'$@$if($s$=="from_unread_list")$@$',
'&flag=new&folderid=$folderid$&s=unread',
'$@$else if($s$=="from_star_list")$@$',
'&flag=star&folderid=$folderid$&s=star',
'$@$endif$@$',
'$@$if($more$)$@$',
'$more$',
'$@$endif$@$'
]),

ckk="/cgi-bin/readmail?sid=$sid$&mailid=$mailid$",

bMe=TE([ckk,
"&t=",
"$@$if($t$)$@$",
"$t$",
"$@$else$@$",
"compose",
"$@$endif$@$",
"&s=$s$&disptype=$disptype$"
]),

cbt=TE([
'/cgi-bin/readmail?sid=$sid$&t=compose&s=forward&disptype=html&from=attachfolder&getSubjectFromAttachName=1',
'&mailattach=$mailid$|$attachid$|$attachname$|$fileextenal$|$filebyte$'
]),

erQ=TE([
"/cgi-bin/readtemplate?sid=$sid$&t=compose&s=cnew&bigatt=1&attid=$attachid$&filesize=$filesize$&downpage=$downpage$&exptime=$exptime$&nocheckframe=true&urifilename=$urifilename$&getSubjectFromAttachName=1"
]),

evG=TE(
"/cgi-bin/grouplist?oper=$oper$&sid=$sid$&gid=$gid$@groupmail.qq.com&t=mail_mgr2&mailaction=$action$"
),

dIV=TE("/cgi-bin/grouplist?oper=reject&sid=$sid$&reject=$yn$&gid=$gid$@groupmail.qq.com&t=mail_mgr2&mailaction=reject_group"),

dVY=TE("/cgi-bin/reader_list?type=home&classtype=allfriend&uin=$mail.from.qq$&t=reader_personal&sid=$sid$&s=sidebar"),

eqM=TE("/cgi-bin/mail_list?sid=$sid$&t=mail_list_preview&sender=$mail.from.addr$&receiver=$mail.from.addr$&matchtype=include&folderid=all&page=0&name=$mail.from.name$&pagesize=5&mailidx=$mailid$&listmode=0&from=sidebar&s=$s$&record=n"),

aWq=TE([
'<form method="$sMethod$" id="$sFormId$" name="$sFormId$" target="$sTarget$" action="$sAction$" enctype="multipart/form-data">',
'$@$for($oInputs$)$@$',
'<input name="$name$" type="hidden" value="$value$"/>',
'$@$endfor$@$',
'</form>']),

dmS='"$name$"<$addr$>; ',

cDz=TE([
'$@$for($addrs$)$@$',


'"$@$eval getTop().encodeNick(getTop().htmlDecode($name$))$@$"<$addr$>; ',
'$@$endfor$@$'
]),

era=TE(
[
'<div id="container" style="line-height:20px">',
'<div>',
'<div style="margin:8px 4px 0 0;">',
'<a class="right" id="other" href="/cgi-bin/grouplist?sid=$sid$&t=setting_group&oper=list">Manage other Groups</a>',
'<p style="margin:0;">For this group:</p>',
'</div>',
'<div style="margin-bottom:5px;margin-left:8px;">',
'<div style="padding:5px 0 3px">',
'<input type="radio" name="qqnotify" value="notifyyes" $@$if(!$bReject$&&$bNotify$)$@$checked="true"$@$endif$@$ id="qqnotify"/>',
'<label for="qqnotify" style="color:#333">Get new messages form this group and notify me in QQ</label>',
'</div>',
'<div style="padding:5px 0 3px">',
'<input type="radio" name="qqnotify" value="notifyno" $@$if(!$bReject$&&!$bNotify$)$@$checked="true"$@$endif$@$ id="noqqnotify"/>',
'<label for="noqqnotify" style="color:#333">Get new messages from this group but do not notify me in QQ</label>',
'</div>',
'<div style="padding:5px 0 3px;">',
'<input type="radio" name="qqnotify" value="reject" $@$if($bReject$)$@$checked="true"$@$endif$@$ id="reject"/>',
'<label for="reject" style="color:#333">Reject messages from this group</label>',
'</div>',
'</div>',
'</div>',

'<div style="position:relative;border-top:1px solid #ccc;padding-top:8px;$@$if($bReject$)$@$display:none;$@$endif$@$;" class="clear" id="setnewdiv">',
'<p style="margin:0;">For Read messages in this group:</p>',
'<div style="margin-left:8px;">',
'<div style="padding:5px 0 3px">',
'<input type="radio" name="unread" value="setnewyes" $@$if($bNewreply$)$@$checked="true"$@$endif$@$ id="setunread"/>',
'<label for="setunread" style="color:#333">Mark as unread when they get new reply</label>',
'</div>',
'<div style="padding:5px 0 3px">',
'<input type="radio" name="unread" value="setnewno" $@$if(!$bNewreply$)$@$checked="true"$@$endif$@$ id="setread"/>',
'<label for="setread" style="color:#333">Keep as read when they get new reply</label>',
'</div>',
'</div>',
'</div>',
'<div style="padding:10px 0;overflow:hidden;" class="clear">',
'<a class="btn_blue btn_space" style="display:inline-block;" id="save">Save</a>',
'<a class="btn_gray" href="javascript:;" id="cancel">Cancel</a>',
'</div>',
'</div>'
]),

bJ={
efy:T(
[
'<div class="dialog_feedback">',
'<span class="dialog_icon icon_info_b"></span>',
'<div class="dialog_f_c">',
'<div class="dialog_f_t">Do you want to reply to all?</div>',
'<div class="dialog_f_d"> You are Bcc recipient, other recipients do not know that you have received this mail!</div>',
'</div>',
'</div>'
]
),
dOZ:T(
[
"<input type=button id='replyall' class='btn wd4' value='Reply to all'>",
"<input type=button class='btn wd4' value='Reply to sender' id='reply'>",
"<input type=button class='btn wd4' value='Cancel' id='cancel'>"
]
),
bHk:TE([
'<div><br></div><div><br></div>',
'<div style="font-size: 12px;font-family: Arial Narrow;padding:2px 0 2px 0;">',
'------------------&nbsp;$REFER$&nbsp;------------------',
'</div>',
'<div style="font-size: 12px;background:#efefef;padding:8px;">',
'<div><b>$FROM$</b> "$from.name$"<$from.addr$>; </div>',
'<div><b>$DATE$</b> $date$</div>',
'<div><b>$TO$</b> $@$for($to$)$@$',dmS,'$@$endfor$@$</div>',
'$@$if($cc.length$)$@$',
'<div><b >$CC$</b> $@$for($cc$)$@$',dmS,'$@$endfor$@$</div>',
'$@$endif$@$',
'<div><b>$SUBJECT$</b> $subject$</div>',
'</div><div><br></div>',
'$orgcontent$'
])
},

bhP={
bMd:{
REFER:"Original message",
FROM:"From:",
DATE:"Sendtime:",
TO:"To:",
CC:"Cc:",
SUBJECT:"Subject:"
},
bHg:{
REFER:"Original",
FROM:"From:",
DATE:"Date:",
TO:"To:",
CC:"Cc:",
SUBJECT:"Subject:"
}
},


efL=T("/cgi-bin/config_blackwhitelist?sid=$sid$&act=whitelist&Fun=submit&pagefrom=readmail&group=$fromaddr$&sloc=readmail_yellow_tip"),
cnF=T("/cgi-bin/report_cgi?r_type=$rtype$&r_result=$rresult$&r_msg=$rmsg$");
















function bIM(aj,PJ)
{
var alJ=aj.sFormId||unikey(),
fV=S(alJ,aj.oWin),
jc=[];

if(fV)
{
removeSelf(fV);
}
PJ=PJ||{};
PJ.sid=PJ.sid||getSid();
E(PJ,function(qk,lm)
{
jc.push({name:lm,value:qk});
}
);
aj.oInputs=jc;
insertHTML(aj.oWin.document.body,"beforeEnd",aWq.replace(
extend(
{
sFormId:alJ,
sTarget:"actionFrame",
sMethod:"POST"
},aj)
)
);
return S(alJ,aj.oWin);
}


function dkx(bc,ak)
{
rdVer(bc,1);
if(!rdVer.check(ak))
{

reloadFrm(ak);
}
}

function dyD(bVH,bSD,bUk,bTO,bTN)
{
var cYG=new Date();
var cHD=new Date(bVH,bSD,bUk,bTO,bTN,0);
var cPM=cYG>cHD;
if(cPM)
{
return['It is timing message, it has been sent at<span style="color:black;" >&nbsp;',getTop().formatDayByLocale(new Date(bVH,bSD,bUk,bTO,bTN,0),"%YY%-%MM%-%DD%-%HH%-%MMMM%","%"),'&nbsp;</span>.'].join("");
}
else
{
return['It is timing message, it will be sent at <span style="color:black;" >&nbsp;',getTop().formatDayByLocale(new Date(bVH,bSD,bUk,bTO,bTN,0),"%YY%-%MM%-%DD%-%HH%-%MMMM%","%"),'&nbsp;</span>.'].join("");
}





}

function elp(eL)
{
return filteScript(eL.replace(
/<div id=\'?\"?QQMailBgMusicInfo\'?\"?.*?>.*?<\/div>/ig,""
).replace(/<player .*?><\/player>/ig,"").replace(/(^\s+)|(\s+$)/ig,""));
}

function cLR(cWv)
{
var	bPw=true,
bol;

try{
bol=getTop().goUserInfo.get('RealDefaultAllMail');
}
catch(e)
{
return false;
}

function bGQ(bmK)
{
if(!bmK)
{
return false;
}
for(var i=0;i<bmK.length;i++)
{
if(bmK[i])
{
var en=bmK[i].addr||"",
cTi=bmK[i].qq;
if(cTi==g_admuin||en.indexOf("@g.qq.com")>0)
{
return true;
}
for(var j=0;j<bol.length;j++)
{
if((bol[j].email||"").toLowerCase()==en.toLowerCase())
{
return true;
}
}
}
}
return false;
}

if(bol&&bol.length)
{
bPw=!(bGQ(cWv.to)||bGQ(cWv.cc)||bGQ([cWv.from]));
}
else
{
bPw=false;
}
return bPw;
}

function cZs(ah,evW)
{
return(ah.ctrlKey&&ah.keyCode==13||ah.altKey&&ah.keyCode==83);
}



var Co={};

var aPf=Co.qmBaseDM=Co.aPf=inherit("_qmBaseDM",Object,function(aG)
{
return{

$_constructor_:function()
{
var aR=arguments;

if(aR.length)
{
var ae=this;

ae.azL=aR[aR.length-1];
ae.bo=ae.azL.oWin;
ae.dNR=ae.azL.sModuleName;
ae.fC.apply(ae,arguments);
}
},

CK:function(){},

uv:function(){},

oE:function(){},

UX:function(){},

fC:function()
{
var ae=this;

ae.CK.apply(ae,arguments);
ae.uv.apply(ae,arguments);
ae.oE.apply(ae,arguments);
},

attr:function(au,eb,bC)
{
var cS=attr(au,eb,bC);
if(cS==null&&au)
{
return bC===undefined?au[eb]:(au[eb]=bC);
}
return cS;
},

S:function(HM)
{
var ae=this;

return S(HM+(ae.azL.sAux||""),ae.bo);
},

SN:function(aI)
{
var ae=this;
return SN(aI+(ae.azL.sAux||""),ae.bo);
},

context:function(cbu)
{
var ae=this;
cbu=cbu||"sContext";
return ae.azL[cbu];
},

ahv:function(cPE,ah,qk)
{
var ae=this,
amx=getEventTarget(ah),
aH=amx.ownerDocument,
dMx=ae.dNR,
awN,eU,aC;

while(amx&&isObjContainTarget(cPE,amx))
{
awN=attr(amx,qk);

if(awN&&!eU)
{
eU=awN;
aC=amx;
}
awN=attr(amx,aPf.eiI);
if(awN)
{
if(awN==dMx)
{
if(eU&&typeof(ae[eU])=="function")
{
ae[eU](aC,ae.context("sContext"),ah);
}
break;
}
else
{
eU=null
}
}
amx=amx.parentNode;
}
},


evt:function(il,aQe)
{
var ae=this,
cjd=function(aAS)
{
aAS=typeof(aAS)=="string"?
ae.S(aAS):aAS;

E(il,function(qk)
{
var cef=aPf.erW[qk];
cef&&addEvent(aAS,cef,function(ah)
{
ae.ahv(aAS,ah,qk);
}
);
}
);
};

if(typeof(aQe)=="string")
{
aQe=ae.S(aQe);
}

if(aQe.nodeType)
{
cjd(aQe);
}
else
{
E(aQe,function(aAS)
{
cjd(aAS);
}
);
}
}

}
},
{
euV:"_module_state_",
eiI:"module",
dXN:"context",
evr:"aux",
erW:{
mor:"mouseover",
mot:"mouseout",
ck:"click",
md:"mousedown",
dck:"dblclick"
}
});

Co.qmReadMail=inherit("qmReadMail",Co.aPf,
function(aG)
{
return{







































oE:function()
{

var ae=this;

ae.etf.apply(ae,arguments);
ae.bo.document.body.focus();


setTimeout(function()
{
ae.coO.apply(ae,arguments);
},50
);
},

erH:function()
{
var ae=this,
btZ=ae.S(ia.duj);
if(getTop().S("qqmail_mailcontainer",ae.bo))
{
getTop().S("qqmail_mailcontainer",ae.bo).appendChild(btZ);
}
else
{
ae.bo.document.body.appendChild(btZ);
}
show(btZ,true);
},

cOs:function()
{
var ae=this,
aA=ae.bF;

QMAjax.send(
T('/cgi-bin/readmail?sid=$sid$&mailid=$mailid$&t=readsubmail&mode=fake&s=r2&base=$base$&pf=$pf$').replace({
sid:getSid(),
mailid:ae.getMailId(),
pf:rdVer.isPre(aA.folderid)?1:0,
base:rdVer("BaseVer",0)
}),{
method:"GET",
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(aP,bt)
{
var iI=trim(bt);
if(aP&&iI.indexOf("(")==0)
{
var fJ=evalValue(iI);
if(fJ)
{










ae.efh(fJ);
}
}
else
{
var Ao=getActionWin().document;
Ao.open();
Ao.write(bt);
}
}
}
);
},

cXU:function()
{
var ae=this,
aA=ae.bF,
sMailId=ae.getMailId(),
dDS=QMMailCache.getData(sMailId);


if((aA.bNewMail==1)&&(!dDS||dDS.bUnread===true))
{
folderOpt({
bNewMail:aA.bNewMail,
sFolderId:aA.folderid,
sMailId:sMailId,
oMatchTag:aA.oMatchTag,
oSysTag:aA.oSysTag,
bStar:aA.bStar
});
}
else
{
getTop().recordCompareReadedMailId(sMailId);
}
},

uv:function()
{
var ae=this,
ap=ae.bo;

ae.evt(["ck","md","kd"],ap.document.body);





ae.cwk();
},

etf:function()
{
var ae=this,
ap=ae.bo;

ap.QMReadMail=ae;

ap.go=function(ah,zu,kq,eyG,duo)
{
var aC={opt:kq};

if(duo)
{
aC.more=["&loc=",ae.bF.loc,duo].join("");
}
ae.optMail(aC,ae.getMailId(),ah);
}

ap.fw=function(aac,kh)
{
callBack.call(ae,ae[aac],kh);
}
ap.goback=function()
{
ae.goback();
}
ap.setRemindSpan=function(bc)
{
ae.S('remind_edit_'+bc).innerHTML=(reminddetail["mailid:"+bc]||"")
.replace(/linktitle=.*&sid=/g,function(bC)
{
return bC.replace(/\'/g,"&#039;");
}
);
}
ap.setMoreOperation=function(ejG,ejF)
{
ae.cXa&&ae.cXa.switchPair(ejG,ejF);
},

ap.fjGetFlvAttrUrl=function()
{
return T("/cgi-bin/readtemplate?sid=$sid$&t=video_ref.smil&vsrc=$vsrc$").replace({
sid:getSid(),
vsrc:encodeURIComponent(ap.sFlvPlayUrl.substr(1))
});
}
},

CK:function(aj,GA)
{
var ae=this;
ae.bF=aj;
ae.Zv=GA;
},





































efh:function(az)
{
var ae=this,
aZI,
cnw=ae.S(ia.duh),
caP=ae.S(ia.dtn),
ciQ=ae.S(ia.elG);

if(caP&&cnw&&ciQ)
{
if(az.sPn.indexOf("Previous")!=-1&&az.sPn.indexOf("Next")!=-1)
{
cnw.innerHTML=caP.innerHTML=az.sPn;
}
if(aZI=trim(az.sPnNew))
{
ciQ.innerHTML=aZI;
}
show(attr(ae.S(ia.dRZ),"mailid",az.sPnNewMailId),aZI!="");
}
},

clearCache:function()
{
rdVer(this.getMailId(),1);
},

dUo:function(nV)
{
var ae=this,
ej=ae.getMailId();

switch(nV)
{
case"delremark":
case"addremark":
ae.dEo.toggle(ej);
break;
case"delremind":
case"addremind":
var gC=GelTags("a",S("remind_edit_"+ej,document));
if(gC&&gC[0])
{
if(bf.sId=="addremind")
{
fireMouseEvent(gC[0],"click");
}
else
{
var hF=location.getParams(S("remind_delete",document).href),
eA=document.remind_frm;
eA.ruleid.value=hF["ruleid"];
eA.from.value=hF["from"];
eA.submit();
}
}
break;
case"print":
ae.optMail2({opt:"print"});
break;
}
},

cHm:function(aTl)
{
if(bnewwin)
{
var bMt=window.opener,
ae=this,
aA=ae.bF;

try{
if(bMt&&bMt.readMailFinish)
{
bMt.readMailFinish(
ae.getMailId(),
aA.reandfw,
aA.folderid
);
}
}
catch(e)
{
}
}
},














getEditorContent:function()
{
var ae=this;
return ae.bHq&&ae.bHq.getContent();
},

disableConfirm:function()
{
var ae=this;
return ae.bHq&&ae.bHq.disableConfirm();
},


UX:function(bAR)
{
var ae=this,
alW,
cy=ae.Zv,
dc=extend({},ae.azL,bAR),
aA=ae.bF;

switch(dc.sModuleName)
{
case"qmRemark":
alW=ae.dEo=new Co.qmRemark(
function(cRM)
{
var cPI=ae.cXa;
if(cPI)
{
switch(cRM)
{
case"del":

cPI.switchPair("addremark","delremark")
break;
case"save":
cPI.switchPair("delremark","addremark")

}
}
QMMailCache.setExpire();
ae.clearCache();
},dc
);
break;
case"qmMoreOptSel":
alW=ae.cXa=new Co.qmMoreOptSel(
{
oMoreOpt:aA.oMoreOpt,
fOnSelect:function(nV)
{
ae.dUo(nV);
}
},dc);
break;
case"qmQReply":

alW=ae.bHq=new Co.qmQReply(aA,cy,{
fCheckBcc:function()
{
callBack.call(ae,ae.checkBcc,arguments);
},
sSubTmp:""
},dc);
break;
case"qmAntiSpam":
alW=ae.cFi=new Co.qmAntiSpam(aA,cy,dc);
break;
case"qmReminder":
bq=ae.evM=new Co.qmReminder(aA,cy,dc);
break;
case"qmSenderInfo":
alW=new Co.qmSenderInfo(aA,cy,dc);
break;
case"qmPlayerParser":
alW=new Co.qmPlayerParser(
{
oContentDom:ae.S(ia.bqm),
bManuPlay:aA.bMusicManuPlay
},dc);
break;







































case csQ:

if(getTop().goUserInfo.get("DEF_TRANSLATE")=="1")
{
loadJsFile("$js_path$qmtranslate131cca.js",true,zC.document,function()
{
waitFor(function()
{
return ae.S(ia.bqm)&&zC.QMTranslate;
},
function(nd)
{
if(nd)
{
var aS=ae.S(ia.bqm);
new zC.QMTranslate(
{
oDom:aS
}
);
}
}
);
}
);
}
break;
}
return alW;
},

eny:function()
{
var ae=this,
aS=ae.S(ia.ddo);

aS.style.overflowY="scroll";
if(aS.scrollHeight-aS.offsetHeight>10)
{
aS.style.height=aS.scrollHeight+"px";
}
aS.style.overflowY="";
},
epi:function(aaX)
{
var ag=getTop(),ae=this,cCj=false,qi=0,mS=0,cq=0;

ae.bo.document.body.oncopy=function(ah)
{
if(!cCj)
{
var aC=ag.getEventTarget(ah),
bJX="",bnH=256,
bn=[
[
{sId:"",sItemValue:'<span class="icon_caution_s"></span>Viruses or errors exist in this URL.Stop accessing is recommended.',bDisSelect:true}
],
[
{sId:"",sItemValue:'<span class="icon_info_s"></span>It is unable to insure the safety.Please open it carefully.',bDisSelect:true}
],""];




if(ae.bo.document.selection)
{




bJX=ae.bo.document.selection.createRange().text;
mS=ae.bo.document.selection.createRange().offsetTop+bodyScroll(ae.bo.document,'scrollTop');
qi=ae.bo.document.selection.createRange().offsetLeft;
cq=ae.bo.document.selection.createRange().boundingHeight;

}
else
{
if(ag.isObjContainTarget(aaX,aC))
{
bJX=ae.bo.getSelection();
var selection=ae.bo.getSelection();
if(selection.rangeCount>0){
var rect=selection.getRangeAt(0).getBoundingClientRect();
qi=rect.left;
mS=rect.top+bodyScroll(ae.bo.document,'scrollTop')
cq=rect.height;
}
}
}
if(bJX!="")
{
if(bJX.length>bnH)
{
bJX=bJX.substring(0,bnH);
}
cCj=true;
QMAjax.send(T("/cgi-bin/getinvestigate?sid=$sid$&stat=getcopycontent&content=$content$&t=getcopycontent").replace(
{
sid:getSid(),
content:ag.encodeURI(bJX)
}),
{
method:"POST",
onload:function(aP,bt)
{
cCj=false;
if(aP)
{
if(bt!="2")
{
new QMMenu(
{
oEmbedWin:ae.bo,
sClassName:(bt==0?"tips_maliciousLink":"tips_unknowLink"),
sid:"report",
oItems:bn[bt],
nWidth:237,
nX:qi,
nY:mS+cq+5,
bAutoClose:false
});
}
}
}
});

setTimeout(function(){
cCj=false;
},5000);
}

}

}
},
coO:function()
{
var ag=getTop(),
ae=this,
ap=ae.bo,
cy=ae.Zv,
aA=ae.bF,
Uu=ae.S(ia.bqm),
sd=S("folder_"+aA.folderid,ag),
coX=ap.document.body.background;




ae.erH();

ae.eny();
ae.cOs();

aA.bBccToMe=cLR(cy);

aA.sMailContent=ia.ddo;
ae.cHm();

coX&&(Uu.style.backgroundImage="url("+coX+")");
swapLink(Uu,aA.disptype,ap);
ae.epi(Uu);

initMailSelect(aA.oMoveItems,true,aA.bOpenTag=="1",
ap,aA.folderid,aA.bAutoTag);



ae.UX({sModuleName:"qmQReply"});

ae.UX({sModuleName:"qmMoreOptSel"});


ae.UX({sModuleName:"qmRemark"});

if(aA.bReminder)
{

ae.UX({sModuleName:"qmReminder"});
}


ae.UX({sModuleName:"qmAntiSpam"});

ae.UX({sModuleName:"qmSenderInfo"});

ae.UX({sModuleName:"qmPlayerParser"});


var cg=ap.document.body;
if(getTop().location.getParams()["t"]!="newwin_frame"&&cg.scrollWidth>cg.clientWidth)
{
requestShowTip("tipRemindEdit",19,ap);
}




if(sd&&sd.parentNode.parentNode.id=="folder_pop_td")
{
new QMSender(
{
oWin:ap,
nCurFolderId:aA.folderid,
sWidth:210,
sCurSaveFrom:aA.saveFrom
}
);
}

aA.bClearRDCache&&ae.clearCache();


ae.dTf();

if(aA.flowid)
{
ossLog("realtime","all","flowid="+aA.flowid);
}



ae.cXU();

getTop().QMWebpushTip&&getTop().QMWebpushTip.read(1,ae.getMailId());




















getTop().goUserInfo.deferget('DEF_TRANSLATE',function(boI)
{

ae.UX({sModuleName:cYt});

ae.UX({sModuleName:csQ});

ae.rmLanguage(Uu);
});
ae.checkDecryptMail();
},

cwk:function()
{
var ag=getTop(),
ae=this,
ap=ae.bo;


addEvent(ap.document,"keydown",
function(ah)
{
if(ah.ctrlKey&&ah.keyCode=="65")
{
ae.doSelectAll(ah,ae.S(ia.ddo));
}
}
);
},

dTf:function()
{
var cDJ=this.S(ia.ekO),
ae=this,
ag=getTop(),
dr=[];

if(cDJ)
{
E(["year","month","day","hour","min"],function(qk)
{
dr.push(attr(cDJ,qk));
}
);
cDJ.innerHTML=callBack(dyD,dr);
var dYz=this.S("editsendtime");
getTop().addEvent(dYz,"click",function()
{
initTimeSendDlg(
{
sendtimeyear:ag.S("sendtimeyear",ag.getMainWin()),
sendtimemonth:ag.S("sendtimemonth",ag.getMainWin()),
sendtimeday:ag.S("sendtimeday",ag.getMainWin()),
sendtimehour:ag.S("sendtimehour",ag.getMainWin()),
sendtimemin:ag.S("sendtimemin",ag.getMainWin()),
confirmbtn:"OK",
title:"Modify time",
timetips:""
},function()
{
QMAjax.send(T(["/cgi-bin/mail_mgr?mailaction=mdy_sendtime&mailid=$mailid$&ef=js&resp_charset=UTF8",
"&sendtimeyear=$sendtimeyear$",
"&sendtimemonth=$sendtimemonth$",
"&sendtimeday=$sendtimeday$",
"&sendtimehour=$sendtimehour$",
"&sendtimemin=$sendtimemin$",]).replace(
{
mailid:ae.getMailId(),
sendtimeyear:ag.S("sendtimeyear",ag.getMainWin()).value,
sendtimemonth:ag.S("sendtimemonth",ag.getMainWin()).value,
sendtimeday:ag.S("sendtimeday",ag.getMainWin()).value,
sendtimehour:ag.S("sendtimehour",ag.getMainWin()).value,
sendtimemin:ag.S("sendtimemin",ag.getMainWin()).value
}),
{
method:"POST",
onload:function(aP,bt)
{
if(aP)
{
var cF=evalValue(bt);
if(cF.errcode=="0")
{
showInfo("Update successfully, the message will be sent at the time you specify");
var bK=[ag.S("sendtimeyear",ag.getMainWin()).value,ag.S("sendtimemonth",ag.getMainWin()).value,ag.S("sendtimeday",ag.getMainWin()).value,ag.S("sendtimehour",ag.getMainWin()).value,ag.S("sendtimemin",ag.getMainWin()).value];
debug(bK,2)
cDJ.innerHTML=callBack(dyD,bK);
}
else
{
showError(cF.errmsg);
}
}
}
})
},function(){}
);
});
}
},
























checkDecryptMail:function()
{
var ae=this;
aA=ae.bF;

if(aA.bEncrypt)
{
addEvent(ae.S("decryptmail_pw"),"keydown",
function(ah)
{
if(ah.keyCode=="13")
{
fireMouseEvent(ae.S("decryptmail"),"click");
}
}
);
}
},

decryptMail:function(ar,bc,ah)
{
var ae=this,
ap=ae.bo,
gI=encodeURIComponent(ae.S("decryptmail_pw").value);

if(gI)
{
QMAjax.send(T("/cgi-bin/readmail?sid=$sid$&mailid=$mailid$&action=decryptmail&t=success&secmailcode=$code$&ef=js&resp_charset=UTF8").replace(
{
mailid:bc,
sid:getSid(),
code:gI
}),
{
method:"GET",
onload:function(aP,bt)
{
if(aP)
{
var cF=evalValue(bt);
if(cF.errcode=="0")
{
ae.bF.bEncrypt=false;
ae.afterDecrytMail();
}
else
{
showError(cF.errmsg);
}
}
}
});
}
else
{
showError("Please enter password");
ae.S("decryptmail_pw").focus();
}

},

afterDecrytMail:function()
{
var ae=this,aA=ae.bF;

showInfo("Decrypt message successfully");
if(aA.bNeedReceipt&&aA.bNewMail)
{

var aN=ae.bo.location.href;
ae.clearCache();
goUrl(ae.bo,
cookQueryString(aN,
{
force_needreceipt:1,
r:Math.random()
})
);
}
else
{
dkx(ae.getMailId(),ae.bo);
}
},

doSelectAll:function(ah,an)
{
var ag=getTop(),
ae=this,
ap=ae.bo,
aH=ap.document;


if(ae.dEo.isFoucs())
{
return;
}

if(ap.getSelection)
{
var dD=ap.getSelection(),
bI=aH.createRange();

dD.rangeCount>0&&dD.removeAllRanges();
bI.selectNode(an);
dD.addRange(bI);
}
else 
{
var bI=aH.body.createTextRange();
bI.moveToElementText(an);
bI.select();
}
an.scrollIntoView();
ag.preventDefault(ah);
},

getMailInfo:function()
{
return this.Zv;
},


getCBInfo:function()
{
var ae=this,
aA=ae.bF,
cy=ae.Zv,
Gx=cy.from||{},
MQ=ae.S(ia.dtg),
afR=aA.oSysTag||"",
aKE=[],byA={};
if(afR!="")
{
aKE=afR.split("|");
}
for(var i=0;i<aKE.length-1;i++)
{
if(aKE[i]!="")
{
var eY=aKE[i].split(":");
if(eY[0]&&eY[1]!="")
{
byA[eY[0]]=eY[1];
}
}
}
return{
oWin:ae.bo,
sFid:aA.folderid,
bML:false,
oMail:[{
sMid:ae.getMailId(),
bSys:aA.bSys,
bUnr:false,
bSubUnr:false,
bStar:MQ.className=='qm_ico_flagon',
bTms:false,
oSysTag:byA||{},
oTagIds:aA.oMatchTag,
sSName:Gx.name,
sSEmail:Gx.addr,
oStar:MQ,
oTCont:ae.S(ia.ecq)
}]
};
},

notify:function(cRM,agq)
{
var ae=this,
cy=ae.Zv;

switch(cRM)
{
case"delsubmail":
if(--cy.nLen<=0)
{
ae.goback();
}
QMMailCache.setExpire();
break;
case"toRefer":
var Lj=ae.bCL[agq];
if(Lj)
{
Lj.seek();
}
break;
}
},

getMailId:function()
{
return this.context("sContext");
},

modifyTag:function(fE,dar)
{
var aSs=this.bF.oMatchTag;
if(!aSs)
{
return;
}
for(var aD=aSs.length-1;aD>=0;aD--)
{
if(aSs[aD]==fE)
{
break;
}
}
if(dar)
{
if(fE<0)
{
aSs.length=0;
}
else
{
aSs.splice(aD,1);
}
}
else
{
if(aD<0)
{
aSs.push(fE);
}
}
},

toAttach:function(ar)
{
var ae=this,
brC=ae.S(ia.dGH+(ae.attr(ar,"seq")||"")),
gc;

function dtc(times,isNotInit)
{
var kg=arguments.callee;

if(!isNotInit||!kg.time)
{
kg.orgclass=brC.className;
kg.time=0;
}
brC.className=(kg.time%2==0)?"toolbg":kg.orgclass;
brC.style.height=(kg.time%2==0)?"auto":"auto";
if(++kg.time<times)
{
setTimeout(function(){
kg(times,true);
},70);
}
}

if(brC)
{
gc=ae.bo.document.documentElement;
if(gc.scrollHeight<=gc.clientHeight)
{
dtc(6);
}
else
{
scrollIntoMidView(brC,gc,false,0,true);
dtc(4);
}
}
},

prevandnext:function(ar,bc,ah)
{
var ae=this,
ej=ae.attr(ar,"mailid");

rdVer.log(ej,"hit");
goUrl(
ae.bo,
["/cgi-bin/readmail?",
rdVer.url(ej,ae.bF.folderid,"",ae.attr(ar,"type")==="collo"?"3":"",false,"",false,"",true),
bnewwin?"&newwin=true":""].join(""),
true
);
ah&&preventDefault(ah);
},

dpa:function()
{
var aA=this.bF;

return dkg.replace(
{
sid:getSid(),
folderid:aA.folderid,
s:aA.subtmpl
}
);
},

goback:function(ar,bc,ah)
{
if(bnewwin)
{
goUrlTopWin("/cgi-bin/frame_html?sid="+getSid());
}
else
{
trace("history back","","start","mail_list");

if(!QMHistory.tryBackTo("mail_list"))
{
var ae=this;
ae.bo.location.href=QMHistory.getUrl("mail_list")||ae.dpa();
waitFor(
function()
{
return!!S("list",getMainWin());
},
function(nd)
{
if(nd)
{
bodyScroll(ae.bo,"scrollTop",getTop().gnMailListPos);
}
}
)
}
}
preventDefault(ah);
},


tag:function(ar,bc,ah)
{
var ae=this;
QMTag.readclose(ah,ae.getCBInfo());
},

starMail:function(ar)
{
var ae=this;
starMail(null,extend(ae.getCBInfo(),
{
oncomplete:function(ego,pz)
{
ae.clearCache();
show(ae.S(ia.dNK),pz);
return true;
}
}
));
},

getQMPreviewer:function(je)
{
var ae=this,
ag=getTop();

if(ag.QMPreviewer)
{
je&&je(ag.QMPreviewer);
}
else
{
loadCssFile(
"$css_path$../js/com/kits/qmpreviewer/css/previewer1320b1.css",
true,ag.document);

loadJsFile(
"$js_path$com/kits/qmpreviewer131f73.js",true,ag.document,function(){
je&&je(ag.QMPreviewer);
});
}
},

showScanImg:function(ar,bc,ah)
{
var ae=this,
aos=parents("div.attachitem",ar)[0],
dHb=finds("a[ck='previewAttach2']",aos)[0];

showTwoDCodeImgMenu(ae.bo,ar,attr(dHb,"filename"),attr(dHb,"down"));
preventDefault(ah)
},

previewAttach3:function(ar,bc,ah)
{
var ae=this,
aC=S(["AttachIconA",bc,(ae.attr(ar,"idx")||0)].join(""),ae.bo);
fireMouseEvent(aC,"click");
},
previewAttach2:function(ar,bc,ah)
{
var ae=this,
exB=function()
{
var bG,
dI=0,
bO=[];
while(bG=cBK(dI))
{
bO.push(bG);
dI++;
}
return bO
},
cBK=function(azS)
{
var cS={},
aC=S(["AttachIconA",bc,azS].join(""),ae.bo);

if(!aC)
{
return;
}

var efu=aC.getAttribute('down'),
oQ=S(["AttachIconA",bc,(azS-1)].join(""),ae.bo);

if(oQ&&oQ.getAttribute('down')===efu)
{
return;
}

E(
{
bBigAttach:"bigattach",
sName:"filename",
sUriFileName:"urifilename",
sDown:"down",
sDownPage:"downpage",
sUrl:"url",
sType:"viewmode",
sBytesize:"filebyte",
sThumb:"iconurl",
sFileIdx:"idx",
sAttid:"attid",
sFid:"fid",
sExptime:"exptime",
bIsTimeout:"timeout"
},
function(bf,lm){
cS[lm]=ae.attr(aC,bf);
}
);
cS["sFrom"]=cS["bBigAttach"]?"bigattach":"attach";
cS.sSuffix=cS.sName?(cS.sName.split(".").pop()||""):"";
if(!cS.sAttid)
{
cS.sAttid=cS.sDown.split("att=").pop();
}
if(cS.sDown)
{
cS.sTwoDCodeUrl=twoDCodeImgUrl(cS.sDown);
}
return cS;
};

ae.getQMPreviewer(function(erP)
{
var Cn={
fNext:function(uI){
var dI=parseInt(uI.sFileIdx)+1;
return cBK(dI);
},
fPrev:function(uI){
var dI=parseInt(uI.sFileIdx)-1;
return cBK(dI);
},
fFrwd:function(uI)
{
if(uI.bBigAttach)
{
goNewWin(
erQ.replace({
sid:getSid(),
attachid:encodeURIComponent(uI.sAttid),
downpage:encodeURIComponent(uI.sDownPage),
urifilename:uI.sUriFileName,
filesize:uI.sBytesize,
exptime:uI.sExptime
})
);
}
else
{
goNewWin(
cbt.replace({
sid:getSid(),
mailid:bc,
attachid:encodeURIComponent(uI.sAttid),
attachname:uI.sAttid,
fileextenal:uI.sSuffix,
filebyte:uI.sBytesize
})
);
}
}
}
erP.show(cBK(ae.attr(ar,"idx")),Cn);
}
)
},

previewAttach:function(ar,bc,ah)
{
var ae=this,
awq=T(ckk).replace(
{
sid:getSid(),
mailid:bc
}
),

aN=T("$url$&nocheckframe=true&t=attachpreviewer&select=$select$&selectfile=$selectfile$&seq=$seq$").replace(
{
url:awq,
select:ae.attr(ar,"select"),
seq:ae.attr(ar,"seq")||"",
selectfile:ae.attr(ar,"selectfile")||""
}
);
window.open(aN,"_blank");
preventDefault(ah);
},

playAttach:function(ar)
{
var ae=this,
aZs=GelTags("span",ar.parentNode.parentNode),
bbN=aZs.length==0?{}:aZs[0],
aS=ae.S(ia.dqu);

if(bbN.getAttribute("player")){
show(aS,true);
if(aS.getAttribute("uin_play_id"))
{
getTop().QMPlayer.delSkinById(aS.getAttribute("uin_play_id"));
}

var HJ="uni_id"+(+new Date());
aS.setAttribute("uin_play_id",HJ);
audioPlay({
id:HJ,
container:aS,
url:bbN.getAttribute("player"),
title:bbN.innerHTML,
autoplay:true,
global:true
});
return true;
}
return false;
},

checkdownload:function(ar,bc,ah)
{
new QMDialog({
sId:"checkdownload",
sTitle:"Speed up when download",
sUrl:T("/cgi-bin/readtemplate?sid=$sid$&t=readmail_checkdownload").replace(
{
sid:getSid()
}),
nWidth:461,
nHeight:175
});
preventDefault(ah);
return true;
},

checkBcc:function(ar,bc,ah)
{
var ae=this;

if(ae.bF.bBccToMe)
{
attr(ae.S(ia.axV),"checkBcc",1);
new QMDialog({
sId:"reply_dlg",
sTitle:"Note when reply:",
sBodyHtml:bJ.efy.toString(),
sFootHtml:bJ.dOZ.toString(),


onshow:function(){
this.S("replyall").focus();
},
onload:function(){
var cG=this;
addEvent(cG.S("replyall"),"click",function(){
ae.bF.bBccToMe=false;
attr(ae.S(ia.axV),"checkBcc",0);
if(ar.tagName=="TEXTAREA")
{
ae.bHq.focus();
}
else
{
ae.optMail({opt:"reply_all"},bc);
}
cG.close();
});
addEvent(cG.S("reply"),"click",function(cf){
attr(ae.S(ia.axV),"checkBcc",0);
ae.optMail({opt:"reply"},bc);
cG.close();
});
addEvent(cG.S("cancel"),"click",function(){cG.close()});
}

});
preventDefault(ah);
return true;
}
},

setAutoDel:function(ar,bc)
{
var ae=this,
ap=ae.bo,
aA=ae.bF;

if(aA.xqqstyle=="6")
{
bIM(
{
oWin:ap,
sAction:"/cgi-bin/mail_mgr"
},
{
mailid:bc,
mailaction:"autodel",
reporttype:adW(ar,"flag"),
s:"autodel"
}
).submit();
}
},

mailRecall:function(ar,bc)
{

var dDG=attr(ar,"loccnt"),
dLT=attr(ar,"mid"),
dZC=attr(ar,"mdata"),
cKw=attr(ar,"odd"),
cSf=0;

if(dDG>0&&cKw!="0"){
cSf=1;
new QMDialog({
sId:"mailrecall",
sTitle:"Withdrawn the message",
sUrl:T("/cgi-bin/readtemplate?sid=$sid$&t=mailrecall_confirm&mailid=$mailid$&localcount=$loccnt$&messageid=$mid$&date=$mdate$&odd=$odd$").replace(
{
sid:getSid(),
mailid:bc,
loccnt:dDG,
mid:dLT,
mdate:dZC,
odd:cKw
}),
nWidth:461,
nHeight:263
});
}
else
{
var fS,
iU;
if(cKw=="0")
{
cSf=2;
iU='The message can not be withdrawn';
fS='It is more than 15 days after sending, so it can not be withdrawn.';
}
else
{
cSf=3;
iU='The message was sent to mailbox other than QQMail, so it can not be withdrawn.';
fS='The unread messages that sent to QQMail receipt support to be withdrawn.';
}
msgBox(T([
'<b class="b_size">$t$</b>',
'<div style="overflow:hidden;margin-top:5px;">',
'$m$',
'</div>'
]).replace({t:iU,m:fS}),"dialog");

}








},

xfDl:function()
{
var bpt=attr(arguments[0],"oXfLinkArray").split("&&&");
bpt=bpt.slice(0,bpt.length-1);
if(bpt.length<1)return;
var xv=function(lZ,dQi)
{
switch(lZ)
{
case"check":
showProcess(1,true,"\u6B63\u5728\u68C0\u6D4B\u65CB\u98CE...");
break;
case"get_url":
showProcess(1,true,"\u6B63\u5728\u83B7\u53D6\u4E0B\u8F7D\u94FE\u63A5...");
break;
case"load_err":
showError("\u65CB\u98CE\u52A0\u8F7D\u5931\u8D25,\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01");
break;
case"geturl_err":
showError(dQi+"\u4E2A\u6587\u4EF6\u94FE\u63A5\u83B7\u53D6\u5931\u8D25");
break;
case"check_err":
if(confirm("\u60A8\u8FD8\u6CA1\u5B89\u88C5QQ\u65CB\u98CE\uFF0C\u73B0\u5728\u53BB\u4E0B\u8F7D\u5B89\u88C5\u4E48\uFF1F\u5B89\u88C5\u5B8C\u540E\u8BF7\u5237\u65B0\u672C\u9875\u9762\u3002"))
{
window.open("http://xf.qq.com/xf2/index.html");
}
break;
}
}
var aJp=new(getTop().clsXfBatchDownload)(bpt,xv);





















},

optMail2:function(ar,bc,ah)
{
var ae=this,
ap=ae.bo,
aei="_blank",
pZ=ae.attr(ar,"opt"),
awq=T(ckk).replace(
{
sid:getSid(),
mailid:bc
}
);

switch(pZ)
{
case"remind":
awq=T("/cgi-bin/readtemplate?t=calendar&sid=$sid$&cmd=moncal,,new,$subject$,mail,$mailid$").replace(
{
sid:getSid(),
mailid:bc,
subject:encodeURIComponent(ae.Zv.subject||"(No subject)")
});
aei="mainFrame";
rdVer(bc,1);
break;
case"print":
awq+=T("&t=readmail_print&s=$s$&filterflag=true").replace({s:ae.attr(ar,"s")||"print"});
break;
case"mime":
awq+="&action=readmailmime";
break;
case"dleml":
awq+="&action=downloademl";
aei="actionFrame";
break;
case"code":
awq+="&action=readmailcode";
break;
case"fwgroup":
awq+="&t=compose_group&s=forward";
aei="mainFrame";
break;
case"note":
awq+="&notefmt=1&t=note_edit_show";
aei="mainFrame";
break;
case"fweml":
awq+="&t=compose&s=forward&action=readmaileml";
aei="mainFrame";
break;
case"addc":




showProcess(1,true,"Contacts are adding...",null,false);
var aw=ar.parentNode.parentNode.parentNode.getElementsByTagName('span');
var fa='',bSO='';
for(var i=0,l=aw.length;i<l;i++)
{
if(ae.attr(aw[i],"mailhtml")=="operhidepanel")
{
fa=ae.attr(aw[i],"e");
bSO=ae.attr(aw[i],"n");
break;
}
}
if(fa==''&&bSO=='')
{
showError('New contact failed');
return;
}
QMAjax.send(
T('/cgi-bin/addr_addedit?sid=$sid$&category=&isqqgroup=&addr_errorflag=&OperType=ADD&Type=&GROUPLIST=&s=addfrommail&UseFreq=&USERNAME=$username$&USEREMAILNAME=$email$&USEREMAILNAME=&MOBILEPHONE=&PHS=&NICKNAME=&BRITHDAY=&MAILBOX_BACK=&STREET=&COMPANY=&NOTES=&list_index=&ef=js&inputcharset=utf8').replace({
sid:getSid(),
username:encodeURIComponent(bSO),
email:encodeURIComponent(fa)
}),{
method:"POST",
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(aP,bt)
{
var iI=trim(bt);
if(aP&&(iI.indexOf("(")==0||iI.indexOf("{")==0))
{
var fJ=evalValue('('+iI+')');
if(fJ)
{
showProcess(0);
if(fJ.errmsg)
{
showError(fJ.errmsg);
}
else
{
showInfo(fJ.msg);
ar.style.display='none';
ar.nextSibling.style.display='';
ar.nextSibling.setAttribute('addrid',fJ.addrid);
getTop().QMProfileTips.clearInfoCard(getTop().getMainWin());
rdVer(bc,1);


}
}
}
else
{
showError('New contact failed');
}
}
}
);

return;
break;
case"editc":
awq=awq.replace('readmail','addr_detail');
awq+="&AddrID="+ae.attr(ar,"addrid")+"&t=addr_detail_edit&s=edit&s=edit&&grpid=&category=all&rmqqgroup=1";
aei="mainFrame";
break;
default:
break;
}
ap.open(awq,aei);
preventDefault(ah);
},

newWinRead:function(ar,bc,ah)
{
goNewWin(this.bo.location,false);
preventDefault(ah);
},

createRule:function(ar,bc,ah)
{
showSimpleRuleFilter(this.attr(ar,"fromaddr"));
preventDefault(ah);
},

delMail:function(ar)
{
var ae=this,
ap=ae.bo,
aeb=false;

aeb=rmMail(ae.attr(ar,"opt")||0,
extend(ae.getCBInfo(),
{
oncomplete:function(cqA,jb)
{
var aN=jb.url||"";
if(aN.indexOf("/cgi-bin/readmail?")!=-1)
{
ae.prevandnext({mailid:ap.location.getParams(aN)["mailid"]});
return true;
}
}
}
)
);
aeb&&QMHistory.recordActionFrameChange();
},

optMail:function(ar,bc,ah)
{
var ae=this,
ap=ae.bo,
aA=ae.bF,
pZ=ae.attr(ar,"opt"),
dIq=ae.getEditorContent(),
jm=aA.folderid,
ctg=bMe.replace(
{
sid:getSid(),
t:ae.attr(ar,"t"),
s:pZ,
mailid:bc,
disptype:aA.disptype=="text"?"":"html"
}
);

switch(pZ)
{
case"reply_all":
case"reply":
case"forward":
case"draft":
var czT=[ae.attr(ar,"more")||""];
if(pZ=="draft")
{
czT.push("&backurl="+encodeURIComponent(ap.location.href));
}
if(bnewwin)
{
czT.push('&newwin=true&fwreplynewwin=true');
}
if(ah&&ah.shiftKey)
{
window.open(ctg+czT.join(""));
}
else if(dIq)
{
ae.disableConfirm();
bIM(
{
oWin:ap,
sTarget:"mainFrame",
sMethod:"POST",
sAction:ctg
},
{
pluscontent:htmlEncode(dIq)
}
).submit();
}
else
{
goUrl(ap,ctg+czT.join(""),true);
}
preventDefault(ah);
break;
}
},

zoomup:function(ar,ah)
{
var ae=this;
ae.cpl&&ae.cpl.zoomup(ar,ah);
},
zoomdown:function(ar,ah)
{
var ae=this;
ae.cpl&&ae.cpl.zoomdown(ar,ah);
},







reset:function(ar,ah)
{
var ae=this;
ae.cpl&&ae.cpl.reset(ar,ah);
},

rmLanguage:function(aaX)
{
var cyj=aaX&&(aaX.innerText||aaX.textContent||"");
if(!cyj)
{
return;
}

var dMo=cyj.match(/[\u2100-\uFFFF]/g)||[],
ewO=cyj.match(/[a-zA-Z]/g)||[],
dyK=cyj.match(/[a-zA-Z]+[\u2100-\uFFFF\s]/g,"")||[];
if(getTop().goUserInfo.get("DEF_TRANSLATE")!="1"&&dyK.length/(dMo.length+dyK.length)>0.5)
{
getTop().requestShowTip("tip74container","77",this.bo);
}




}


}});



Co.qmReminder=inherit("qmReminder",Co.aPf,
function(aG)
{
return(
{
oE:function()
{
var ae=this,
ap=ae.bo,
ej=ae.context("sContext");

QMAjax.send(
T("/cgi-bin/read_reminder?t=read_reminder.json&linkid=mailid:$mailid$&sid=$sid$&rettype=calendar").replace(
{
sid:getSid(),
mailid:ej
}),
{
method:"GET",
onload:function(aP,bt)
{
if(aP)
{
var fJ=evalValue(bt);
if(fJ&&fJ.id)
{
var aS=S("reminderContainer_mailid:"+ej,ap);
aS.innerHTML=TE("<span class='qm_ico_calendar'></span><span class='addrtitle'>Event time:$starttime$</span>&nbsp;<a href='/cgi-bin/readtemplate?sid=$sid$&t=calendar&cmd=moncal,$starttime$,view,$id$'>check calendar</a>").replace(
{
starttime:fJ.starttime,
allday:fJ.allday,
sid:getSid(),
id:fJ.id
});
show(aS,true);
show(S("addtoremind",ap),false);
}
}
}
});
}
});
});



Co.qmQReply=inherit("qmQReply",Co.aPf,
function(aG)
{
return{

CK:function(aj,cUa,cUG)
{
var ae=this;
ae.bF=aj;
ae.cmp=cUa;
ae.cic=cUG;
ae.bwv=ae.S(ia.axV);
ae.dWk;
},

getSource:function()
{
var zf=this.bwv;
return(zf.className.indexOf('graytext')!=-1)?"":textToHtml(htmlEncode(zf.value));
},

getContent:function()
{
return this.vz&&this.vz.getContent();
},







bUQ:function(aFN)
{
var ae=this,
aA=ae.bF,
dCp=ae.S(aA.sMailContent),
bA=ae.cmp,
iY=[aFN||textToHtml(htmlEncode(ae.S(ia.axV).value))];

try
{
var aEf=getTop().goUserInfo.get('getRealUserSignature');
if(aEf)
{
aEf=aEf(aA.folderid,aA.saveFrom);
if(aEf)
{
iY.push("<div>&nbsp;</div>"+aEf);
}
}
}
catch(aL)
{
}

if(!aA.noIncludeArtcle)
{
bA.orgcontent=dCp?
filteSignatureTag(elp(dCp.innerHTML)):"";

var bnt=bJ.bHk.replace(
extend({},bA,aA.titlePrefix=="1"?bhP.bHg:bhP.bMd)
);





if(bA.orgcontent)
{
iY.push(bnt);
return{content:iY.join("")};
}
else
{
return{
citeprev:"yes",
rmref:bnt,
content:iY.join("")
};
}
}
else
{
return{content:iY.join("")};
}
},

ctp:function(cs)
{
return cs&&trim(cs.replace(/<[^(img)]([^>]+)?>/gi,"").replace(/&nbsp;/g,""));
},

saveDraft:function()
{
var ae=this,
ap=ae.bo,
aA=ae.bF,
aZ=ae.vz,
bCp=ae.cic,
cyu=aZ.getContent(false),
zf=ae.S(ia.axV);

if(!aZ||cyu==ae.elC
||!ae.ctp(cyu)||isShow(ia.bVp,ap))
{
return;
}
else
{
var aMn=ae.cmp,
abG=extend(
{
actiontype:"save",
ReAndFw:"reply",
contenttype:"html",
from_s:"comm_quick",
t:"compose.json",
ReAndFwMailid:ae.context(),
to:cDz.replace({addrs:aMn.replyTo}),
cc:cDz.replace({addrs:aMn.replyCc}),
subject:(ae.bF.titlePrefix=="1"?"Re:":"Reply:")+aMn.reSubject,
savesendbox:1,
sendname:"",
sendmailname:ae.bF.sendmailname
},ae.bUQ(cyu)
);

if(ae.cuc)
{
abG.fmailid=ae.cuc;
}

waitFor(
function()
{
return!!(getTop().ComposeLib);
},
function(boI)
{
if(!boI)
{
debug("Load ComposeLib failed");
return;
}
ComposeLib.send(abG,
{
onready:function()
{
ae.bCT(true);
showProcess(1,true,"Saving draft","",false);
},
oncomplete:function(aP,bz)
{
var biO=S(ia.axV,ap),
as=evalValue(bz),
Hs=formatDate(new Date,"%hh%:%mm%","%");

if(aP)
{
ae.cuc=as.mailid;
ae.elC=cyu;
showInfo(Hs+" Draft save successfully");
reloadLeftWin();
}
else
{
showError(Hs+" Draft save failed");
}
ae.bCT(false);
}
});
}
);
}
},




send:function(ar,bc,ah)
{
var ae=this,
ap=ae.bo,
aA=ae.bF,
aZ=ae.vz,
bCp=ae.cic,
zf=ae.S(ia.axV);

if(ar.disabled)
{
return;
}

ae.stopFold(true);
if(!aZ||!ae.ctp(aZ.getContent(false)))
{
showError('Enter reply content first');
zf&&zf.focus();
}
else
{
var aMn=ae.cmp,
abG=extend(
{
ReAndFw:"reply",
contenttype:"html",
from_s:"comm_quick",
t:"compose.json",
s:bCp.s||"",
ReAndFwMailid:bc,
to:cDz.replace({addrs:aMn.replyTo}),
cc:cDz.replace({addrs:aMn.replyCc}),
subject:(ae.bF.titlePrefix=="1"?"Re:":"Reply:")+aMn.reSubject,
savesendbox:1,
sendname:"",
sendmailname:ae.bF.sendmailname
},ae.bUQ(aZ.getContent(false))
);

if(ae.cuc)
{
abG.fmailid=ae.cuc;
}

waitFor(
function()
{
return!!(getTop().ComposeLib);
},
function(boI)
{
if(!boI)
{
debug("Load ComposeLib failed");
return;
}
var cdy,
bEY="1"==getTop().gbBackGroundSend&&(cdy=getTop().BackGroundSend),
Cn={
onready:function()
{
if(bEY)
{

var biO=S(ia.axV,ap);
biO.value="";
biO.blur();
ae.stopFold(false);
biO.view("sending");
}
else
{
ae.bCT(true);
show(ia.bVp,true,ap);
}
},
oncomplete:function(aP,bz)
{
if(bEY)
{
if(aP)
{
var biO=S(ia.axV,ap),
as=evalValue(bz);

if(as&&as.compose=="ok")
{
biO.view("init");
}
else if(bCp.fQReplyComplete)
{
callBack(bCp.fQReplyComplete,[bz]);
}
}
}
else
{
var biO=S(ia.axV,ap);

if(aP)
{
biO.value="";
biO.blur();
biO.view("init");
showInfo("The message has been sent successfully.");
show(ia.cQA,true,ap);
show(ia.cJM,false,ap);
callBack(bCp.fQReplyComplete,[bz]);
}
else
{
biO.focus();
show(ia.cJM,true,ap);
}
ae.bCT(false);
setTimeout(function(){ae.vz.resetFixHeight();},500);
}
ae.cuc="";
show(ae.S(ia.bVp),false);
}
};


if(bEY)
{
cdy.quickReply(abG,"comm",Cn);
}
else
{
ComposeLib.send(abG,Cn);
}
},
100);
}
preventDefault(ah);
},

readyToWrite:function(ar,bc)
{
var ae=this;

show(ae.S(ia.cJM),true);
show(ae.S(ia.cQA),false);
ae.S(ia.axV).focus();

},

checkBcc:function()
{
callBack(this.cic.fCheckBcc,arguments);
},

disableConfirm:function()
{
setClass(this.bwv,'graytext qm_txt');
},

jump:function(ar,bc,ah)
{
if(ar.disabled)
{
return;
}

var ae=this,
aZ=ae.vz,
cX=aZ?aZ.getContent(false):ae.getSource(),
ap=ae.bo,
aN=bMe.replace(
{
sid:getSid(),
mailid:bc,
s:"reply_all",
disptype:"html"
});

ae.disableConfirm();

bIM(
{
oWin:ap,
sTarget:"_self",
sAction:aN+(getTop().bnewwin?"&newwin=true":"")
},
{
pluscontent:getTop().htmlEncode(cX)
}
).submit();
preventDefault(ah);
},

bCT:function(aTE)
{
var ae=this;

ae.S(ia.epO).disabled=ae.S(ia.cgp).disabled=aTE;
return this;
},

uv:function()
{
var ae=this,
ap=ae.bo,
zf=ae.bwv,
adX=ae.S(ia.cgp),
dHu=ae.S(ia.exF),
ewD=ae.S(ia.dZr),
cUQ=ae.S(ia.dWs);


function czN(pI)
{
switch(pI)
{
case"init":
ae.vz&&ae.vz.setContent("");

case"sending":
setClass(zf,'graytext qm_txt').value=zf.getAttribute('graytxt');
zf.style.height="20px";
show("rteContainer",false,ap);
show("qmQuickReplyTextContainer",true,ap);
show(cUQ,false,ap);
break;
case"show":
show("rteContainer",true,ap);
show("qmQuickReplyTextContainer",false,ap);
show(cUQ,true,ap);
ae.vz&&ae.vz.focus&&ae.vz.focus();
break;
default:
}
show(ia.cQA,pI=="init",ap);
show(ia.bVp,pI=="sending",ap);


































};
function UF(an)
{
var bR=0,
di=0;
while(an&&an.tagName!="BODY")
{
if(an.style.position!="absolute")
{
bR+=an.offsetTop;
di+=an.offsetLeft;
}
an=an.offsetParent;
}
return({
left:di,
top:bR
});
};
function St()
{
if(zf.className.indexOf('graytext')!=-1&&attr(ae.S(ia.axV),"checkBcc")!=1)
{
zf.setAttribute('graytxt',zf.value);
setClass(zf,'qm_txt b_size').value='';


if(!ae.vz)
{
S("tooBarContain",ap).innerHTML=getTop().outputToolBarControlBtn&&getTop().outputToolBarControlBtn()||"";
show(S("editor_toolbar_btn_container",ap),true);
}
qmAnimation.expand(zf,
{
to:54,
oncomplete:function()
{
var dtb=this;
show(cUQ,true);
show(dHu,true);
zf.style.overflow="auto";



if(!ae.vz)
{

QMEditor.createEditor(
{
editorId:"newReadMailQuickSend",
editorAreaWin:ap,

isNoEditScroll:true,

height:"103px",

funclist:QMEditor.CONST.FUNCLIST.READMAIL,






photoCGI:getPhotoCGI(),

onshowinstallactive:getTop().showInstallActiveXDialog&&getTop().showInstallActiveXDialog,
onkeydown:function(ah)
{
if(cZs(ah))
{
fireMouseEvent(adX,"click");
}
},
onload:function()
{
ae.vz=this;
dtb.view("show");
Mk(false);
setTimeout(function()
{

var dJL=S("QuickReplyPart",ap);
bodyScroll(ap,"scrollTop",UF(dJL).top-document.body.clientHeight+250);

}
);
}
}
).initialize(QMEditor.getBreakLine(1,
{
family:goUserInfo.get("DEF_FONT_FAMILY"),
size:goUserInfo.get("DEF_FONT_SIZE"),
color:goUserInfo.get("DEF_FONT_COLOR")
}
),false,S("QMEditorArea",ap).getAttribute("tIndex"));
}
else
{

dtb.view("show");
var bJJ=GelTags("embed",S("QMEditorToolBarPlusArea",ap))[0],
dwF=bJJ.parentNode;
dwF.parentNode.removeChild(dwF);

ae.vz.getTbExternInfo("Photo").funcObj.init_();
}
}
}
);
if(!getTop().ComposeLib)
{
loadJsFileToTop(["$js_path$libcompose131cca.js"]);

if("1"==getTop().gbBackGroundSend)
{
loadJsFileToTop(["$js_path$backsend131cca.js"]);
}
}

if(!ae.eoi)
{
ae.eoi=ap.setInterval(function()
{
ae.saveDraft();
},300000);
}
}
};
function Mk(gJ)
{
gJ=gJ==null?true:gJ;
ae.vz.showToolBar(gJ);

var avk=getTop().S("editor_toolbar_btn_container",ap);
if(!avk)
{
return false;
}

var GE=getTop().GelTags("span",avk);

getTop().show(GE[0],gJ);
getTop().show(GE[1],!gJ);

var kg=arguments.callee;
avk.onclick=function()
{
kg(!gJ);
return false;
};
};
zf.view=czN;

addEvents(setClass(zf,'graytext qm_txt'),
{
keydown:function(ah)
{

if(cZs(ah))
{
fireMouseEvent(adX,"click");
}
},
focus:St

}
);

ae.evt(["ck","md"],ia.dmG);


addEvent(ap,"beforeunload",function(ah)
{

removeEvent(ap,"beforeunload",arguments.callee);

var fS;
try
{
fS=ae.eqo(ah);
}
catch(vY)
{

}

if(fS)
{
return fS;
}
}
);
},

focus:function()
{
var ae=this;
if(ae.vz)
{
ae.vz&&ae.vz.focus&&ae.vz.focus();
}
else
ae.bwv.focus();
},

stopFold:function(dmM)
{
this.dWk=(dmM==undefined?true:dmM);
},

eyD:function()
{

},

eqo:function(ah)
{
var ae=this,
zf=ae.bwv,
aZ=ae.vz;

if(zf.className.indexOf('graytext')==-1&&(aZ&&ae.ctp(aZ.getContent(false))||zf.value))
{
var iI='The  message has not been sent yet. Are you sure to leave?';
ah.returnValue=iI
return iI;
}




return false;
}
}});
function getPageEditor(ay)
{
return QMEditor&&QMEditor.getEditor(ay);
}




Co.qmPlayerParser=inherit("qmPlayerParser",Co.aPf,
function(aG)
{
return{

iq:function(eko,eb)
{
return decodeURIComponent(attr(eko,eb));
},

bMx:function(bmP)
{
var ae=this;

if(!bmP.auto&&!confirm("It is risky to play external music, are you sure\uFF1F"))
{
return;
}

var aS=ae.S(ia.dqu),
dra=ae.S(ia.equ);

if(bmP.sosoGet)
{
getMusicUrl(bmP.title,bmP.author,
function(jJ,ku,be)
{
ae.bMx({
auto:true,
url:be||bmP.url,
title:jJ,
author:ku,
sosoGet:false
});
}
);
return;
}

show(aS,true);
if(aS.getAttribute("uin_play_id"))
{
getTop().QMPlayer.delSkinById(aS.getAttribute("uin_play_id"));
}
var HJ="uni_id"+(+new Date());
aS.setAttribute("uin_play_id",HJ);
audioPlay({
id:HJ,
container:aS,
url:bmP.url,
author:bmP.author,
title:bmP.title,
autoplay:true,
global:true
});
dra.innerHTML=dRr.replace(
{
images_path:getPath('image'),
author:htmlEncode(bmP.author)||'\u672A\u77E5',
title:htmlEncode(bmP.title)||'\u672A\u77E5'
}
);
show(dra,true);
},

coH:function(be,bwO,dxK,hS)
{
var ae=this,
ap=ae.bo,
doN=ae.S(ia.dRe),
uZ={
auto:dxK,
url:be,
sosoGet:bwO?true:false,
author:bwO&&bwO.author,
title:bwO&&bwO.title
};
if(be.indexOf("http")!=0)return;
if(hS=='bgmusic')
{
show(doN,true);
var dlJ=GelTags("a",doN);
dlJ[0].href=be;
dlJ[1].onclick=function()
{
ae.bMx(uZ);
return false;
};
}

if(dxK)
{
ae.bMx(uZ);
}
show(ae.S(ia.egP),false);
},


oE:function(aj)
{
var afb=GelTags("player",aj.oContentDom);

if(!afb.length)
{
return;
}

var ae=this,
ap=ae.bo,
kW=ae.S(ia.dGH);


for(var dI=0;dI<afb.length;dI++)
{
var hj=afb[dI],
cTp=hj.id||"",
tK=cTp.toLowerCase();

if(tK.indexOf("cmd:")==0){

tK=tK.split(":").pop();
switch(tK)
{
case"voice":
if(!kW)return;

var sO=attr(hj,"param"),

eeb=attr(hj,"media")||"voice",
GE=GelTags("span",kW),
dAk=GE.length,
cAC="";

for(var i=0,dAk;i<dAk;i++)
{
var jR=GE[i],
cAC=attr(jR,"player");

if(cAC&&(jR.innerText||jR.textContent)==sO)
{
var cLm=hj.parentNode;

if(eeb=="video")
{
if(!ap.sFlvPlayUrl)
{
ap.sFlvPlayUrl=cAC;
cLm.innerHTML=generateFlashCode(
unikey("flvplayer"),
"/zh_CN/htmledition/swf/WebFlvPlayer.swf",
{
width:400,
height:335
},
{
wmode:"opaque"
}
);
}
}
else
{
cLm.innerHTML='<div style="padding-left:10px;" ></div>';
var	dvu=
{
id:sO,
container:cLm.firstChild,
url:cAC,
title:hj.getAttribute('alias')?
hj.getAttribute('alias')+'\u7684\u8BED\u97F3':
'The voice mail from your friend',
dispInfo:{
title:hj.getAttribute("alias")?
hj.getAttribute("alias")+"\u7684\u8BED\u97F3":
"The voice mail from your friend"
},
global:false,
autoplay:false
};


dI--;
audioPlay(dvu);
var aeg=GelTags("a",jR.parentNode.parentNode);
aeg[0].onclick=aeg[aeg.length-1].onclick=function()
{

audioPlay(dvu);
};
}
break;
}
}
break;
case"bgmusic":
var aN=attr(hj,"url"),
aED=ae.iq(hj,"song"),
aoS=ae.iq(hj,"singer");

ae.coH(aN,
aN&&!aED&&!aoS?null:
{
author:aoS,
title:aED
},
!aj.bManuPlay,tK
);
break;
case"pcbgmusic":

var aN=attr(hj,"url"),
aED=ae.iq(hj,"song"),
aoS=ae.iq(hj,"singer"),
cu=ap.document.createElement('div');

cu.innerHTML='Loading...';
hj.parentNode.insertBefore(cu,hj);

audioPlay({
skin:'Global',
id:"pcbgmusic",
container:cu,
author:aoS,
title:aED,

autoplay:afb.length==1,
url:aN
});



break;
default:
break;
}
}
else if(cTp){

ae.coH(cTp);
}
}
}

}});




Co.qmMoreOptSel=inherit("qmMoreOptSel",Co.aPf,
function(aG)
{
return{

oE:function(aj)
{
var ae=this;
as=ae.ni={},
dja=aj.oMoreOpt,
jn=["Delete note","Add note","Cancel reminder","Add reminder","\u6253\u5370"],
iY=["delremark","addremark","delremind","addremind","print"];

for(var aD=iY.length-1;aD>=0;aD--)
{
as[iY[aD]]=0;
}
for(var aD=dja.length-1;aD>=0;aD--)
{
as[dja[aD]]=1;
}
E(SN(ddn.edo,aj.oWin),function(an){
new QMSelect({
oContainer:an,
nWidth:86,
sDefaultItemValue:"More...",
oMenu:{
nWidth:"auto",
nMaxWidth:180,
nMaxItemView:10,
oItems:QMMenu.makeMenuItem(jn,iY)
},
onafteropenmenu:function(ez,aKp){
for(var aD=iY.length-1;aD>=0;aD--){
ez.itemOption(iY[aD],"bDisplay",as[iY[aD]]);
}
},
onselect:function(bf){
callBack(aj.fOnSelect,[bf.sId]);
}
})
});
},

switchPair:function(dGK,exm)
{
var ae=this;
ae.ni[dGK]=1;
ae.ni[dGK]=0;
}
}});
















Co.qmRemark=inherit("qmRemark",Co.aPf,
function(aG)
{
return{

CK:function(ejQ)
{
var ae=this;

ae.cQO=false;
ae.dqy=ejQ;
ae.dpD=ae.S(ia.beU).clientHeight;
},

isFoucs:function()
{
return this.cQO;
},

uv:function()
{
var ae=this,
ap=ae.bo,
uP=ae.S(ia.beU);

ae.evt(["ck"],[
ia.bXb,
ia.cDL 
]);

addEvents(uP,
{
focus:function()
{
ae.cQO=true;
ae.onFocus();
},
keydown:function(ah)
{
ae.onKeydown(ah);
},
blur:function()
{
ae.cQO=false;
ae.onBlur();
}
}
);

addEvent(ap,"beforeunload",function(ah)
{
var fS=ae.cJe();
if(fS)
{
ah.returnValue=fS;
return fS;
}
}
);











addEvent(uP,gbIsIE?"propertychange":"input",function(ah)
{
if(gbIsIE)
{
ah.propertyName=="value"&&ae.adw();
}
else
{
ae.adw();
}

}
);
return ae;
},

adw:function()
{
if(gbIsIE&&gnIEVer==6)
{
return;
}
var ae=this,
uP=ae.S(ia.beU),
lR=uP.scrollHeight;

if(gbIsIE)
{

lR>ae.dpD&&(uP.style.height=lR+"px");
}
else
{
uP.style.height=ae.dpD+"px";
if(uP.clientHeight<lR)
{
uP.style.height=uP.scrollHeight+"px";
}
}

},

getMailId:function()
{
return this.azL.sContext;
},

toggle:function(ar)
{
var ae=this,

auD=ae.S(ia.cDL),
aoT=ae.S(ia.bXb),
uP=ae.S(ia.beU),
awx=ae.S(ia.crE);

if(auD.title.indexOf("Delete")>=0)
{
ae.del();
}
else
{
ar.blur();
show(aoT,true);
show(awx,true);
uP.focus();
}
return false;
},






del:function(ar)
{
var ae=this,
auD=ae.S(ia.cDL),
amZ=ae.S(ia.cnM),
aoT=ae.S(ia.bXb),
uP=ae.S(ia.beU),
awx=ae.S(ia.crE),
aHv=ae.S(ia.cEn);

if(!amZ.innerHTML)
{
show(aoT,false);
return false;
}

var	ej=ae.getMailId(),
ey=new QMAjax("/cgi-bin/mail_mgr?mailaction=remarks&type=del");

ey.onError=function(ep)
{
showError("Delete note failed, please try again.");
ae.aRz(false);
};
ey.onComplete=function(ep)
{
if(ep.responseText.indexOf("del successful")==-1)
{
return this.onError();
}
showInfo("It has been deleted");
if(auD)
{
auD.title="Add note";
auD.className="qm_ico_remarkoff";
}

uP.value="";
amZ.innerHTML="";
show(aoT,0);
show(awx,0);
show(aHv,0);
ae.aRz(false);
callBack(ae.dqy,["del"]);
}
confirmBox({
msg:"Are you sure to delete the note?",
title:'QQMail Note',
cancelBtnTxt:"Cancel",
confirmBtnTxt:"OK",
onreturn:function(aP)
{
if(aP)
{
ae.aRz(true);
ey.send(T("mailaction=remarks&sid=$sid$&type=del&mailid=$mailid$").replace({
sid:getSid(),
mailid:ej
}));
}
}
});
return false;
},

dee:function(fM)
{
return htmlEncode(fM).replace(/\n/gi,"<br/>").replace(/\x20/gi,"&nbsp;");
},

bUC:function(cs)
{
return htmlDecode(cs.replace(/&nbsp;/gi," ").replace(/<br\/?>/gi,"\n"));
},





save:function()
{
var ae=this,
ap=ae.bo,


amZ=ae.S(ia.cnM),
uP=ae.S(ia.beU),
awx=ae.S(ia.crE),
aHv=ae.S(ia.cEn),

ey=new QMAjax("/cgi-bin/mail_mgr?mailaction=remarks&type=mdy"),
iI=uP.value;

if(!iI||iI==bjw)
{
uP.focus();
return!!showError('Please enter the note first');
}
if(iI.replace(/[^\x00-\xff]/g,"aa").length>=1000)
{
uP.focus();
return!!showError('The characters of note can not be more than 4000 chars');
}

ey.onError=function(ep)
{
showError("Save note failed, please try it again.");
ae.aRz(false);
}
ey.onComplete=function(ep)
{
if(ep.responseText.indexOf("mdy successful")==-1)
{
return this.onError();
}
showInfo("Save successfully");

var auD=ae.S(ia.cDL);
if(auD)
{
auD.title="Delete note";
auD.className="qm_ico_remarkon";
}

amZ.innerHTML=ae.dee(iI);
ae.aRz(false);
ae.cancel();
callBack(ae.dqy,["save"]);
};

if(amZ.innerHTML==iI)
{
return ey.onComplete({responseText:"mdy successful"});
}

ae.aRz(true);
ey.send(
T("mailaction=remarks&sid=$sid$&resp_charset=UTF8&type=mdy&mailid=$mailid$&content=$content$").replace({
sid:getSid(),
mailid:ae.context("sContext"),
content:encodeURI(iI)
}));
return false;
},

cancel:function()
{
var ae=this,

amZ=ae.S(ia.cnM),
aoT=ae.S(ia.bXb),
uP=ae.S(ia.beU),
awx=ae.S(ia.crE),
aHv=ae.S(ia.cEn);

if(amZ.innerHTML=="")
{

uP.value=ae.bUC(bjw);
show(aHv,false);
show(awx,false);
show(aoT,false);
}
else
{
uP.value=ae.bUC(amZ.innerHTML);
show(aHv,true);
show(awx,false);
}
},

modify:function(ar)
{
var ae=this,

amZ=ae.S(ia.cnM),
aoT=ae.S(ia.bXb),
uP=ae.S(ia.beU),
awx=ae.S(ia.crE),
aHv=ae.S(ia.cEn);

uP.value=ae.bUC(amZ.innerHTML);
show(aHv,false);
show(awx,true);
uP.focus();
ae.adw();
},

onFocus:function()
{
var ae=this,
ap=ae.bo,


uP=ae.S(ia.beU);

if(uP.value==bjw)
{
uP.value="";
}
uP.style.color="#000";

uP.style.fontSize="14px";
return false;
},

onBlur:function()
{
var ae=this,


uP=ae.S(ia.beU);

if(uP.value=="")
{
uP.value=bjw;
uP.style.color="#A0A0A0";
uP.style.fontSize="12px";
}
return false;
},

onKeydown:function(ah)
{
if(ah.ctrlKey&&ah.keyCode==13||ah.altKey&&ah.keyCode==83)
{
this.save();
preventDefault(ah);
}
},




aRz:function(aRY)
{
this.S(ia.elJ).disabled=aRY;
},




cJe:function()
{
var ae=this,
amZ=ae.S(ia.cnM),
uP=ae.S(ia.beU);

if(!uP)
{
return'';
}

var	etj=(uP.value.replace(/\r/gi,"")!=ae.bUC(amZ.innerHTML).replace(/\r/gi,""));
return(uP&&uP.value&&etj&&uP.value!=bjw)?
'The remark you enter has not been saved yet, are you sure to leave?':'';
}
}});





Co.qmAntiSpam=inherit("qmAntiSpam",Co.aPf,
function(aG)
{
return{

CK:function(aj,GA)
{
var ae=this;

ae.Zv=GA;
ae.bF=aj;
ae.dWY=ae.S(ia.emt);
},

uv:function()
{
var ae=this,
ap=ae.bo;
ae.evt(["ck"],ae.SN(ddn.ebt));
},

dBK:function(cVj)
{
var iQ=this.bo.location;

iQ.replace(appendToUrl(
cookQueryString(iQ.href,
{
ver:""
}
),cVj));
},

dHT:function(bc,avD)
{
bIM(
{
oWin:this.bo,
sFormId:"mail_frm",
sAction:"/cgi-bin/mail_mgr"
},
extend({
s:"readmail_spam",
s_reject_what:"11",
isspam:'true',
mailid:bc,
reporttype:"",
location:"readmail",
srcfolderid:this.bF.folderid,
mailaction:"mail_spam"
},avD)
);
},

reject:function(ar,bc)
{
var ae=this,
dtT=attr(ar,"type_reject"),
egY=attr(ar,"subjectid");

ae.bo.QMReadMail.clearCache();

if(dtT=="sys_reject")
{
ae.dHT(bc,
{
"type_reject":dtT,
"subjectid":egY
}
);
doReject(true,attr(ar,"groupmail"),ae.bo,attr(ar,"mimefrom"),"You will not receive any messages from this sender. Continue??");
}
else 
{
ae.dHT(bc);
doReject(true,attr(ar,"groupmail"),ae.bo,attr(ar,"mimefrom"));
}
},

notSpam:function(ar,bc)
{
var ae=this,
ap=ae.bo;



reportNoSpamJson(
{
},
{

oWin:ae.bo,
sFid:ae.bF.folderid,
oACB:null,
bPop:false,
bML:false,
oMail:[
{
sMid:bc,
bUnr:false
}
]
}
);
},

reportSpam:function(ar,bc,ah,cd)
{
var ae=this,
aA=ae.bF;

var dVV=ae.attr(ar,"noaddblack")!="1";





var Ti=0;
var cMd=new Array();
var cWf=ae.attr(ar,"mimefrom");
var dgB=ae.attr(ar,"mailfrom");

if(cWf&&cWf.length>0)cMd[Ti++]=cWf;
if(dgB&&dgB.length>0)cMd[Ti++]=dgB;


reportSpamJson(
{
bBlackList:dVV,
oAddrList:cMd
},
{

oWin:ae.bo,
sFid:ae.bF.folderid,
oACB:null,
bPop:false,
bML:false,
oncomplete:cd,
oMail:[
{
sMid:bc,
bUnr:false
}
]
}
);
},

openSpam:function()
{
this.dBK("&disptype=html&dispimg=1&clickshowimage=1");
},

addWhiteSubmit:function(ar,bc,ah)
{
var ae=this,
ap=ae.bo,
apI=ae.Zv.from.addr;

if(!checkMail(trim(apI)))
{
return false;
}
bIM(
{
oWin:ap,
sMethod:"POST",
sAction:efL.replace({
sid:getSid(),
fromaddr:apI
})
}
).submit();
runUrlWithSid(cnF.replace(
{
rtype:1000006,
rmsg:bc
}
)
);
rdVer(bc,1);
ae.openSpam();
show(ae.dWY,false);
preventDefault(ah);
},

addSpamVote:function(ar,bc)
{
var ae=this,
bp=ae.attr(ar,"rtype");
runUrlWithSid(cnF.replace(
{
rtype:bp,
rmsg:bc
})+"&r_subtype=spamvote&fname="+ae.Zv.from.addr
);

if(bp=="1")
{
ae.S(ia.dhz).innerHTML='Thanks for participating! You can also archive all messages from this sender to specific folder&nbsp;&nbsp;<a <a ck="exbookEmlMgr" book="1" href="javascript:;">archive automatically</a>&nbsp;&nbsp;<a onclick="this.parentNode.parentNode.style.display=\'none\'" href="javascript:;">no need</a>';

show(ae.S(ia.drq),false);

}else if(bp=="2"){

ae.S(ia.dhz).innerHTML='Thanks for participating! If you do not want to get message from the sender any more, you can &nbsp;&nbsp;<a ck="reject" href="javascript:;">reject it</a>&nbsp;&nbsp;<a onclick="this.parentNode.parentNode.style.display=\'none\'" href="javascript:;">Keep recieving</a>';
show(ae.S(ia.drq),false);
}else{
getTop().showInfo("Report spam successfully");
var dKb=ae.S(ia.dhz).parentNode;
dKb.style.display="none";
}
rdVer(bc,1);

},

openHttpImage:function(ar,bc,ah)
{
runUrlWithSid(cnF.replace(
{
rtype:"1000004",
rmsg:bc,
rresult:1
}
));
this.openSpam();
preventDefault(ah);
},

openHttpSecureImage:function(ar,bc,ah)
{
runUrlWithSid(
cnF.replace(
{
rtype:1000005,
rresult:1,
rmsg:bc
}
)
);
this.dBK("&dispimg=1");
preventDefault(ah);
},

openUserEdu:function(ar,bc)
{
runUrlWithSid(
cnF.replace(
{
rtype:1000007,
rresult:1,
rmsg:bc
}
)
);
},

exbookEmlMgr:function(ar,bc)
{
var ae=this,
dWv=ae.attr(ar,"book"),
dXa=ae.attr(ar,"tuan")||0;

loadingBox(
{
model:"Antispam",
js:["$js_path$qmantispam131cca.js"],
oncheck:function()
{
return!!getTop().QMAntiSpam;
},
onload:function()
{
var dxA=new QMAntiSpam.qmExbookEmlMgr(
{
sMailId:bc,
from:ae.Zv.from,
fOnReload:function()
{
dkx(bc,ae.bo);
}
}
);
if(dWv=="1")
{
dxA.book1();
}
else
{
dxA.book2(dXa);
}
}
}
);
}
}});



Co.qmSenderInfo=inherit("qmSenderInfo",Co.aPf,
function(aG)
{
return{

CK:function(aj,GA)
{
this.dCA=GA;
this.bF=aj;
},

uv:function()
{
var ae=this;

ae.evt(["ck"],[ia.dmV,ia.dJj,ia.dJh]);
},

evs:function()
{
var ae=this;

createIframe(ae.bo,
dVY.replace(
{
sid:getSid(),
mail:ae.dCA
}),
{
id:"iframeRss"
}
);
},

efS:function()
{
var ae=this;

QMAjax.send(
eqM.replace(
{
sid:getSid(),
mailid:ae.azL.sContext,
mail:ae.dCA
}),
{
method:"GET",
onload:function(aP,bt)
{
if(aP)
{
var fJ=evalValue(bt);
ae.S("divMails_sidebar").innerHTML=fJ.sHtml||"";
}
}
});
},

toggle:function()
{
var ae=this,
aA=ae.bF,
cyF=ae.S(ia.dmV),
oR=!isShow(cyF);

cyF.style.zIndex=oR?"21":"20";
show(cyF,oR);
ae.S(ia.eog).className=oR?"myleftbar":"";
ae.S(ia.duj).className=oR?"myleftbar":"";
ae.S(ia.bqm).className=oR?"body myleftbar_":"body";

if(bnewwin)
{
show(ae.S(ia.duh),!oR);
show(ae.S(ia.dtn),!oR);
cyF.style.marginTop="40px";
}

if(aA.logintype!="2")
{




ae.efS();
}
}
}});




Co.qmConvMail=inherit("qmConvMail",Co.qmReadMail,
function(aG)
{
return{

CK:function()
{
var ae=this;
aG.CK.apply(ae,arguments);
ae.bCL={};
},

uv:function()
{
var ae=this;

ae.evt(["ck","md","dck"],ae.bo.document.body);
ae.cwk();
},

cwk:function()
{
var ag=getTop(),
ae=this,
ap=ae.bo;


addEvent(ap.document,"keydown",
function(ah)
{
if(ah.ctrlKey&&ah.keyCode=="65")
{
ae.S(ae.msCurrent)&&ae.doSelectAll(ah,ae.S(ae.msCurrent));
}
}
);
},

UX:function(bAR)
{
var ae=this,
alW,
cy=ae.Zv,
dc=extend({},ae.azL,bAR);

switch(dc.sModuleName)
{
case"qmSubMail":
var Lj=cy.oSubMails[dc.sAux]||[{},{}],
wG=dc.sContext||"";

Lj[0].cmailid=ae.getMailId();
alW=new Co.qmSubMail(Lj[0],Lj[1],dc);
wG&&(ae.bCL[wG]=alW);

break;

case"qmQReply":
var Lj=cy.oSubMails["0"];
alW=ae.bHq=new Co.qmQReply(Lj[0],Lj[1],
{
fCheckBcc:function()
{
callBack.call(ae,ae.checkBcc,arguments);
},
fQReplyComplete:function(bz)
{
ae.cwn(bz);
},
s:"conv_send"
},dc);
break;
}
return alW;
},

initQReply:function(cbu)
{
this.UX(
{
sModuleName:"qmQReply",
sAux:"",
sContext:cbu
}
);
},

cwn:function(bz)
{
var fJ=evalValue(bz),
cju=this.S(ia.dkl);


if(fJ)
{
this.S(ia.axV).view("init");
insertHTML(cju,"afterEnd",fJ.mailstr);





this.UX({
sContext:cju.nextSibling.getAttribute("context"),
sModuleName:"qmSubMail",
sAux:cju.nextSibling.getAttribute("aux")
});
}
else
{
this.S(ia.axV).view("show");
}

},

coO:function()
{
var ae=this,
ap=ae.bo,
aA=ae.bF,
cy=ae.Zv,
bgn=cy.oSubMails;

ae.cOs();

ae.cHm();
initMailSelect(aA.oMoveItems,true,aA.bOpenTag=="1",
ap,aA.folderid,aA.bAutoTag);

E(bgn,function(bf)
{
if(bf)
{
ae.UX(bf[2]);
}
bf&&getTop().QMWebpushTip&&getTop().QMWebpushTip.read(1,bf[2].sContext);
}
);

if(cy.nLen>2&&bgn[0][1].to.length>2&&getTop().g_encryptuin==bgn[cy.nLen-1][1].from.qq)
{

getTop().requestShowTip("tip74container","74",ap);
}


if(aA.nRet!=0&&aA.bRetry=="")
{
var azK=ae.bo.location.href+"";
azK=azK.replace(/#.*/gi,"")+"&retry=1";

ae.clearCache();

ae.bo.location=azK;
}



ae.cXU();


aA.bClearRDCache&&ae.clearCache();
},






getSubMailWithDom:function(an)
{
var ae=this,
aw=an,
aH=an.ownerDocument,
ej,
Lj;
while(aw&&aw!=aH)
{
if((ej=attr(aw,aPf.dXN))&&(Lj=ae.bCL[ej]))
{
return Lj.getMailInfo();
}
aw=aw.parentNode;
}
return null;
},

cXl:function(bc,dLD)
{
var ae=this;
doRmMail(
extend(ae.getCBInfo(),
{
oncomplete:function(cqA,jb)
{
var aN=jb.url||"";
if(aN.indexOf("/cgi-bin/readmail?")!=-1)
{
ae.prevandnext({mailid:ae.bo.location.getParams(aN)["mailid"]});
return true;
}
}
}
),
["mailaction=mail_del&mailid=",bc,(dLD?"&Fun=PerDel":"")]
);
},

delMail:function(ar,bc)
{
var ae=this,
gF=finds("td input[ck='selectSubMail']",ae.S("submail_inner_body")).length,
cvL=ae.attr(ar,"opt")=="1";

if(gF==1&&!cvL)
{
ae.cXl(bc,cvL);
return;
}

new QMDialog(
{
sTitle:"Warning",
sBodyHtml:TE([
'<div>',
'<div class="cnfx_content">',
'<span class="dialog_icon icon_info_b"></span>',
'<div class="dialog_f_c">',
'$@$if($isperdel$)$@$',
'$@$if($count$>1)$@$',
'<div class="dialog_f_t">Are you sure you want to delete the <span class="bold" style="margin:4px;">$count$</span> message(s) permanently?</div>',
'<div class="dialog_f_d">Message deleted permanently will not be recovered. You can delete some of the messages.</div>',
'$@$else$@$',
'Messages deleted permanently will not be recovered. <br/>Are you sure to continue? ',
'$@$endif$@$',
'$@$else$@$',
'$@$if($count$>1)$@$',
'<div class="dialog_f_t">Are you sure you want to delete the <span class="bold" style="margin:4px;">$count$</span> message(s)?</div>',
'<div class="dialog_f_d">Messages deleted will be in Trash Folder. You can delete some of the messages.</div>',
'$@$else$@$',
'Messages deleted will be in Trash Folder. Do you want to continue?',
'$@$endif$@$',
'$@$endif$@$',
'<div></div>',
'</div>',
'</div>']).replace(
{
isperdel:cvL,
count:gF
}),
sFootHtml:TE([
'<div class=" txt_right cnfx_btn">',
'$@$if($count$>1)$@$',
'<a class="btn_gray btn_left" id="selectmail" href="javascript:;">Select messages<span class="btn_dots">...</span></a>',
'$@$endif$@$',
'<a class="btn_gray confirm wd2" id="confirm" href="javascript:;">OK</a>',
'<a class="btn_gray cancelwd2" id="cancel" href="javascript:;">Cancel</a>',
'</div>'
]).replace(
{
count:gF
}),
onload:function()
{
var cG=this;
if(gF>1)
{
cG.S("selectmail").onclick=function()
{
ae.dhk(true);
cG.close();
}
}

cG.S("confirm").onclick=function()
{
ae.cXl(bc,cvL);
cG.close();
}

cG.S("cancel").onclick=function()
{
cG.close();
}
}
});
},

parentToContextDom:function(an)
{
return parents("div[module='qmSubMail']",an)[0];
},

editSubMail:function()
{
var ae=this;

ae.dhk(true);
},

foldSubMail:function()
{
var ae=this,
Uu=ae.S("submail_inner_body"),
bQi=finds("div[ck='dispSubMail']",Uu),
dza=true;

for(var i=0;i<bQi.length;i++)
{
if(!isShow(bQi[i]))
{
dza=false;
break;
}

}

if(!dza)
{
E(bQi,function(an)
{
if(!isShow(an))
{
var bzL=ae.parentToContextDom(an);
if(bzL)
{
var Lj=ae.bCL[bzL.getAttribute("context")];
Lj&&Lj.aOp();
}
}
});
}
else
{
var bzL=ae.parentToContextDom(bQi[0]);
if(bzL)
{
var Lj=ae.bCL[bzL.getAttribute("context")];
Lj&&Lj.dispSubMail(bQi[0]);
}
}
},

delSomeSubMail:function(ar,bc)
{
var ae=this,
cFs=attr(ar,"opt")=="1",
cXQ=ae.S("selectAllSubMail").checked,
awK=[],hp=[],
ne=0,
eqW=ae.S("submail_inner_body");

E(finds("td input[ck='selectSubMail']",eqW),function(an)
{
if(an.checked)
{
var Uu=ae.parentToContextDom(an);

awK.push(attr(Uu,"context"));
hp.push(Uu.id);
}
ne++;
});

if(hp.length==0)
{
showError("Please select the messages you want to delete.");
return;
}

function dqI()
{
if(cXQ)
{
ae.cXl(bc,cFs);
}
else
{

doRmMail(
extend(ae.getCBInfo(),
{
oncomplete:function(cqA,jb)
{
E(hp,function(ay)
{
removeSelf(S(ay,ae.bo));
});
ae.updateDelBtnCnt(0);
return true;
}
}
),
["mailaction=mail_del&mailid=",awK.join("&mailid="),(cFs?"&Fun=PerDel":"")]
);
}
ossLog("delay","all","stat=nothing&locval=convmail,delsomesubmail,"+(cFs?"1":"0"));
}

if(cFs)
{
confirmBox({
msg:T(
[
'<div class="dialog_f_t">Are you sure you want to delete the selected <span class="bold" style="margin:4px;">$count$</span> message(s) permanently?</div>',
'<div class="dialog_f_d">Message deleted permanently will not be recovered.</div>'
]).replace(
{
count:awK.length
}),
title:"Warning",
cancelBtnTxt:"Cancel",
confirmBtnTxt:"OK",
onreturn:function(aP)
{
if(aP)
{
dqI();
}
}
});
}
else
{
dqI();
}

},

selectAllSubMail:function(ar)
{
var ae=this,
qK=0;

E(finds("td input[ck='selectSubMail']",ae.S("submail_inner_body")),function(an)
{
an.checked=ar.checked;

if(an.checked)
{
qK++;
}
});

ae.updateDelBtnCnt(qK);
},


updateDelBtnCnt:function(SF)
{
var ae=this;

E(finds("a[ck='delSomeSubMail']",ae.S("qqmail_mailcontainer")),
function(an)
{
an.innerHTML=an.innerHTML.replace(/\(.*?\)/,"")+"("+SF+")";
if(0==SF)
{
addClass(an,"btn_disabled");
}
else
{
rmClass(an,"btn_disabled");
}
});
},

dhk:function(etg)
{
var ae=this,
Uu=ae.S("submail_inner_body"),
cg=ae.bo.document.body;

if(etg)
{
var bQi=finds("div[ck='dispSubMail']",Uu);
E(bQi,function(an)
{
if(!isShow(an))
{
var bzL=ae.parentToContextDom(an);
if(bzL)
{
var Lj=ae.bCL[bzL.getAttribute("context")];
Lj&&Lj.aOp();
}
}
});
addClass(cg,"mail_select");

E(finds("div.qm_converstaion_summary_body",Uu),
function(an)
{
attr(an,"_title",an.title);
an.title="";
attr(an.parentNode,"ck","selectSubMailOuter");
}
);

var tM=ae.S("selectAllSubMail");
tM.checked=true;
ae.selectAllSubMail(tM);
}
else
{
rmClass(cg,"mail_select");
E(finds("div.qm_converstaion_summary_body",Uu),
function(an)
{
an.title=attr(an,"_title");
attr(an.parentNode,"ck","dispSubMail");
}
);
}
},

cancelEditSubMail:function(ar,bc)
{
var ae=this;

ae.dhk(false);
},

getSubMailFrom:function(bc)
{
var Lj=this.bCL[bc];
if(Lj)
{
return Lj.getMailInfo().from.name;
}
}

}});

Co.qmSubMail=inherit("qmSubMail",Co.qmReadMail,
function(aG)
{
return{

uv:function()
{
var ae=this,
ap=ae.bo;

if(ae.bF.sIndex=="0")
{
ae.evt(["ck","md"],SN(ddn.dSM,ap));
}
ae.evt(["ck","md","dck","mot","mor"],ia.bmA);
},

oE:function()
{
var ae=this,
ap=ae.bo,
aA=ae.bF,
cy=ae.Zv,
Uu=ae.S(ia.bqm);

if(!cy.bAsyn)
{
aA.bMusicManuPlay=aA.sIndex!="0";


aA.bBccToMe=cLR(cy);

swapLink(Uu,cy.disptype,ap);


ae.checkDecryptMail();

ae.UX({sModuleName:"qmRemark"});
ae.UX({sModuleName:"qmAntiSpam"});
ae.UX({sModuleName:"qmPlayerParser"});


if(ae.azL.sAux=="0")
{
var bUY=this.bo.QMReadMail;

bUY.initQReply(ae.azL.sContext);
}
























getTop().goUserInfo.deferget("DEF_TRANSLATE",function(boI){

ae.UX({sModuleName:cYt});

ae.UX({sModuleName:csQ});

ae.rmLanguage(Uu);
});
}
},

eqv:function()
{
return this.bF.cmailid;
},

selectSubMail:function(ar)
{
var ae=this,
esD=S("selectAllSubMail",ae.bo),
dtJ=true,qK=0;

E(finds("td input[ck='selectSubMail']",S("submail_inner_body",ae.bo)),function(an)
{
if(!an.checked)
{
dtJ=false;
}
else
{
qK++;
}
});

esD.checked=dtJ;
ae.bo.QMReadMail.updateDelBtnCnt(qK);
},

selectSubMailOuter:function(ar)
{
var ae=this,
dcp=finds("input[ck='selectSubMail']",ar)[0];

dcp.checked=(dcp.checked?"":"checked");

ae.selectSubMail(dcp);
},

clearCache:function()
{
rdVer(this.bF.cmailid,1);
},

afterDecrytMail:function()
{
var ae=this;
showInfo("Decrypt message successfully");
ae.cUb();
ae.clearCache();
},

cRf:function(aq,cd)
{
var ae=this;

QMAjax.send(
T("/cgi-bin/readmail?sid=$sid$&t=readsubmail&s=$s$&mailid=$mailid$&submailid=$submailid$&frid=$frid$&index=$index$").replace(
{
sid:getSid(),
mailid:ae.eqv(),
submailid:ae.getMailId(),
frid:ae.Zv.frid,
s:aq,
index:ae.azL.sAux
}),
{
method:"GET",
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(aP,bt)
{
var iI=trim(bt);

if(!aP||iI.indexOf("<!--cgi exception-->")==0)
{
cd();
}
else
{
cd(evalValue(iI));
}
}
}
);
},

cHT:function(aTd,cEs)
{
var ae=this,
aTO=cEs.innerHTML,
dI=0,
chK=GelTags("form",ae.S(ia.bqm));

for(dI=0;dI<chK.length;dI++)
{
var fV=chK[dI];
if(attr(fV,"_refer_")=="1")
{
if(aTd.length)
{
if(dI>=aTd.length)
{
break;
}
try
{
fV.innerHTML=aTd[dI].replace(/<\/q>/g,"</blockquote>");
}
catch(e)
{
debug("error:innerHTML readonly "+dI);
}
}
fV.className=aTd?"":"qQmAIlcOnV";
}
}
if(aTd)
{
attr(cEs,"disp","0");
aTO=aTO.replace("Hide","Show");
}
else
{
attr(cEs,"disp","1");
aTO=aTO.replace("Hide","Show");
}
cEs.innerHTML=aTO;
},

setCurrent:function(ar,bc,ah)
{
var bUY=this.bo.QMReadMail;
bUY.msCurrent="contentDiv"+this.context("sAux");
},

unsetCurrent:function(ar,bc,ah)
{
var bUY=this.bo.QMReadMail;
bUY.msCurrent="";
},

seek:function()
{
var ae=this,
ap=ae.bo;

scrollIntoMidView(ae.S(ia.bmA),ap.document.body);
},

newWinRead:function(ar,bc,ah)
{
goNewWin(T([ckk,'&t=readmail&folderid=$folderid$']).replace({
folderid:this.bF.folderid,
mailid:bc
}),false);
},

delMail:function(ar)
{
var ae=this;

rmMail(ae.attr(ar,"opt")||0,
extend(ae.getCBInfo(),
{
oncomplete:function(cqA)
{
rdVer(ae.bF.cmailid,1);
ae.aOp(function()
{
removeSelf(ae.S(ia.bmA));
ae.bo.QMReadMail.notify("delsubmail");
});
return true;
}
}
)
);
},

getCBInfo:function()
{
var ae=this,
aA=ae.bF,
cy=ae.Zv,
Gx=cy.from||{};

return{
oWin:ae.bo,
sFid:aA.folderid,
bML:false,
oMail:[{
sMid:ae.getMailId(),
bSys:aA.bSys,
bUnr:false,
bSubUnr:false,
bTms:false,
sSName:Gx.name,
sSEmail:Gx.addr
}]
};
},

fReportSpamCallBack:function()
{
var ae=this;
return function()
{
var bnU=ae.bo.QMReadMail;
ae.aOp(function()
{
removeSelf(ae.S(ia.bmA));

bnU.Zv.nLen>1&&bnU.notify("delsubmail");
});

return bnU.Zv.nLen-1?true:false;
}
},
moreOpt:function(ar,bc)
{
var bP=calcPos(ar),
ae=this,
ap=ae.bo,
gc=ap.document&&ap.document.documentElement,
bn,
mS=bP[2],
VD=185,
eaE=gc?(gc.clientHeight+gc.scrollTop):0;

if(ae.bF.bEncrypt)
{
bn=
[
{sId:"reportSpam",sItemValue:"Spam"},
{sId:"PerDel",sItemValue:"Delete permanently"}
];
}
else
{
bn=
[
{sId:"reportSpam",sItemValue:"Spam"},
{sId:"PerDel",sItemValue:"Delete permanently"},
{sId:"fwgroup",sItemValue:"Forward to group mail"},
{sId:"note",sItemValue:"Save as a note"},
{sId:"fweml",sItemValue:"Forward as a attachment"},
{sId:"dleml",sItemValue:"Export as eml"},
{sId:"mime",sItemValue:"Show original"},
{sId:"code",sItemValue:"Message text garbled?"}
];
}

mS+VD>eaE&&(mS-=(VD+15));
new QMMenu(
{
oEmbedWin:ae.bo,
sId:"menu_"+bc,
oItems:bn,
nX:bP[3],
nY:mS,
bAutoClose:false,
onitemclick:function(ay,bf)
{
if(ay=="reportSpam")
{
ae.cFi.reportSpam(ar,bc,null,ae.fReportSpamCallBack());
ae.clearCache();
}
else if(ay=="PerDel")
{
ae.delMail({opt:"1"});
}
else
{
ae.optMail2({opt:ay},bc);
}
}
});
},

dispRef:function(ar)
{
var ae=this,
aTb=ae.attr(ar,"disp");

if(!ar||ar.disabled)
{
return;
}

if(aTb=="1")
{
ae.cHT(true,ar);
}
else if(aTb=="asyn")
{
ar.disabled=true;
showProcess(1,true,"Loading...",null,false);
ae.cRf("refer",function(dzp)
{
showProcess(0);
if(dzp)
{
ae.cHT(dzp,ar);
}
else
{
showError("Failed to load messages.");
}
ar.disabled=false;
});
}
else if(aTb=="0")
{
ae.cHT(false,ar);
}
},

dispDetail:function(ar)
{
var ae=this,
cy=ae.Zv,
aTb=ae.attr(ar,"disp"),
cCG=ae.S(ia.eob),
bxn=ae.S(ia.QA),
blq=ae.S(ia.cMQ),
dJ=GelTags("img",cCG)[0],
fk=GelTags("a",cCG)[0],
blp=ae.S(ia.diP);

if(aTb=="1")
{
if(isShow(bxn))
{
return;
}
show(blq,false);
qmAnimation.expand(bxn);
dJ.title=fk.title="Hide details";
dJ.className="qm_conversation_input_hidemail";
fk.innerHTML="Hide";
attr(cCG,"disp","0");

if(blp&&blp.innerHTML=="")
{
blp.innerHTML=ae.bo.QMReadMail.getSubMailFrom(cy.refermailid)||"";
}
}
else
{
if(isShow(blq))
{
return;
}
qmAnimation.fold(bxn,
{
oncomplete:function()
{
show(blq,true);
}
}
);
dJ.title=fk.title="Show details";
dJ.className="qm_conversation_input_showmail";
fk.innerHTML="Details";
attr(cCG,"disp","1");
}
},

aOp:function(cd)
{
var ae=this,
atl=ae.S(ia.coA),
aNe=ae.S(ia.dZh),
dzg=ae.S(ia.bmA);

if(isShow(atl))
{
var wc=atl.scrollHeight;
show(atl,false);
show(aNe,true);
setClass(dzg,"qm_con_expand");
qmAnimation.expand(aNe,
{
from:wc,
speed:"fast",
tween:"Sine"
}
);
}
else if(isShow(aNe))
{
show(atl,true);
var mR=atl.scrollHeight;
show(atl,false);

qmAnimation.fold(aNe,
{
speed:"fast",
to:mR||48,
oncomplete:cd||function()
{
setClass(dzg,"qm_con_fold");
show(aNe,false);
show(atl,true);
}
}
);
}
},

toReferMail:function(ar)
{
var ae=this;
ae.bo.QMReadMail.notify("toRefer",ae.Zv.refermailid);
},

cUb:function()
{
var ae=this;

showProcess(1,true,"Loading...",null,false);
ae.cRf("submail",function(eF)
{
if(eF)
{
showProcess(0);
ae.S(ia.bmA).innerHTML=eF.mailstr;
typeof(ae.bo.showNetDisk)=="function"
&&ae.bo.showNetDisk(ae.S(ia.bmA));
ae.aOp();

ae.Zv.bAsyn=false;

ae.oE();
}
else
{
showError("Failed to load messages.");
}
}
);
},

dispSubMail:function(ar)
{
var ae=this;

if(ae.attr(ar,"asyn")=="1")
{
ae.cUb();

if(ae.attr(ar,"newmail")=="true")
{
ae.attr(ar,"newmail","false");
hasClass(ar,"mailunread")
&&rmClass(ar,"mailunread");
!hasClass(ar,"mailread")
&&addClass(ar,"mailread");
}
}
else
{
ae.aOp();
}
}

}});


Co.qmAdConvMail=inherit("qmAdConvMail",Co.qmConvMail,
function(aG)
{
return{
coO:function()
{
aG.coO.call(this,arguments);
this.UX({sModuleName:"qmAntiSpam"});
},
UX:function(bAR)
{
var ae=this,
alW,
cy=ae.Zv,
dc=extend({},ae.azL,bAR);

switch(dc.sModuleName)
{
case"qmAdSubMail":
var Lj=cy.oSubMails[dc.sAux]||[{},{}],
wG=dc.sContext||"";
Lj[0].cmailid=ae.getMailId();
Lj[0].oMoveItems=ae.bF.oMoveItems;
alW=new Co.qmAdSubMail(Lj[0],Lj[1],dc);
wG&&(ae.bCL[wG]=alW);

break;

case"qmQReply":
var Lj=cy.oSubMails["0"];
alW=ae.bHq=new Co.qmQReply(Lj[0],Lj[1],
{
fCheckBcc:function()
{
callBack.call(ae,ae.checkBcc,arguments);
},
fQReplyComplete:function(bz)
{
ae.cwn(bz);
},
s:"conv_send"
},dc);
break;
case"qmAntiSpam":
alW=ae.cFi=new Co.qmAntiSpam(ae.bF,cy,dc);
break;
}
return alW;
},
reject:function(ar)
{
var ae=this;
ae.cFi.reject(ar,ae.azL.sContext);
},
parentToContextDom:function(an)
{
return parents("div[module='qmAdSubMail']",an)[0];
},

starMail:function(ar)
{
var ae=this,
bxb=hasClass(ar,"qm_ico_flagoff");
starMail(bxb,extend(ae.getCBInfo(),
{
oncomplete:function(ego,pz)
{
ae.clearCache();
return true;
}
}
));
}
}});

Co.qmAdSubMail=inherit("qmAdSubMail",Co.qmSubMail,
function(aG)
{
return{



































cUb:function()
{
var ae=this;

showProcess(1,true,"Loading...",null,false);
ae.cRf("adsubmail",function(eF)
{
if(eF)
{
showProcess(0);
ae.S(ia.bmA).innerHTML=eF.mailstr;
typeof(showNetDisk)=="function"
&&showNetDisk(ae.S(ia.bmA));
ae.aOp();

ae.Zv.bAsyn=false;

ae.oE();
}
else
{
showError("Failed to load messages.");
}
}
);
},
getMailId:function()
{
return this.azL.sContext;
},

getCBInfo:function()
{
var ae=this,
aA=ae.bF,
cy=ae.Zv,
Gx=cy.from||{};

return{
oWin:ae.bo,
sFid:cy.folderid,
bML:false,
oMail:[{
sMid:ae.getMailId(),
bSys:aA.bSys,
bUnr:false,
bSubUnr:false,
bTms:false,
sSName:Gx.name,
oTCont:document.createElement("div"),
sSEmail:Gx.addr,
oStar:{}
}]
};
},
oE:function()
{
var ae=this,
ap=ae.bo,
aA=ae.bF,
cy=ae.Zv,
Uu=ae.S(ia.bqm);

if(!cy.bAsyn)
{
aA.bMusicManuPlay=aA.sIndex!="0";


aA.bBccToMe=cLR(cy);
swapLink(Uu,cy.disptype,ap);


ae.checkDecryptMail();

ae.UX({sModuleName:"qmRemark"});
ae.UX({sModuleName:"qmAntiSpam"});
ae.UX({sModuleName:"qmPlayerParser"});


if(ae.azL.sAux=="0")
{
var bUY=this.bo.QMReadMail;
}
























getTop().goUserInfo.deferget("DEF_TRANSLATE",function(boI){

ae.UX({sModuleName:cYt});

ae.UX({sModuleName:csQ});

ae.rmLanguage(Uu);
});
}
},
showMenu:function(ar)
{
var ae=this,
aA=ae.bF,
rb=["menu",aA.cmailid,aA.sIndex].join("_"),
ej=ar.getAttribute("mailid");
new QMMenu(
{
sId:rb,
oEmbedWin:ae.bo,
oItems:ae.efa(),
onitemclick:function(ay,alX)
{
var jm=0;
if(ay.indexOf("reply")!=0&&ay.indexOf("_")!=-1)
{
var dtC=ay.split("_");
ay=dtC[0];
jm=dtC[1];
}
switch(ay)
{
case"reply":
case"reply_all":
case"forward":
ctg=bMe.replace(
{
sid:getSid(),
s:ay,
mailid:ej,
disptype:aA.disptype=="text"?"":"html"
});
goUrl(ae.bo,ctg,true);
break;
case'deleteMail':
ar.setAttribute("opt",0);
ae.delMail(ar);
break;
case"predeleteMail":

ar.setAttribute("opt",1);
ae.delMail(ar);
break;
case"report":
ae.cFi.reportSpam(ar,ej,null,ae.fReportSpamCallBack());

ae.clearCache();
break;
case"print":
ae.optMail2({opt:"print"},ej);
break;
case"star":
ae.starMail(true);
break;
case"unstar":
ae.starMail(false);
case"markAsTag":
QMTag.setMailTag(jm,ae.getCBInfo());
break;
case"newTag":
QMTag.newMailTag(extend(ae.getCBInfo(),
{
oncomplete:function(dr,jb)
{
}
}));
break;
case"newFolder":
case"moveToFolder":
moveMailJs(ay==="moveToFolder"?alX.sFolderId.split("_")[1]:"new",ay==="moveToFolder"?alX.sItemValue:"",ae.Zv.folderid,extend(ae.getCBInfo(),
{
oncomplete:function()
{
ae.aOp(function()
{
removeSelf(ae.S(ia.bmA));
ae.bo.QMReadMail.notify("delsubmail");
});
return true;
}
}));
break;
case"openNew":
goNewWin(T([ckk,'&t=readmail_ad&folderid=$folderid$']).replace({
folderid:ae.bF.folderid,
mailid:ej
}),false);
break;

}
},
nWidth:170,
nMaxWidth:280,
nMaxItemView:15,
bAnimation:true,
onload:function()
{
if(this.option("sId")===rb)
{
var jx=this,
cq=parseInt(jx.option("nHeight"),10),
cH=parseInt(jx.option("nWidth"),10),
cla=calcPos(ar),
bSp=calcAdjPos(cla.slice(0,4),cH,cq,ae.bo,3);

jx.option("nX",cla[1]-cH).option("nY",bSp[0]);
}
},
onshow:function()
{
return;
if(this.option("sId")===rb)
{
var jx=this,
cq=parseInt(jx.option("nHeight"),10),
cH=parseInt(jx.option("nWidth"),10),
cla=calcPos(ar),
bSp=calcAdjPos(cla.slice(0,4),cH,cq,ae.bo,3);
jx.option("nX",cla[1]-cH).option("nY",bSp[0]);
}
}

});
},
efa:function()
{
var ae=this,
bn=[],
aeY=[],
cCq=[],
apk=QMTag.get(),
bmH=ae.bF.oMoveItems,
bTy='<div class="right"><img src="/zh_CN/htmledition/images/spacer.gif" class="arrow_meunico" /></div>',
uj={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:7px; overflow:hidden;"></div>'},
aDK=T([
'<div style="white-space:nowrap;zoom:1;">',
'<input type="button" class="item_square flagbg$flagbg$"/>',
'<span class="item_square_txt">$name$ &nbsp</span>',
'</div>']),
MQ=ae.S(ia.dtg),
bxb=MQ&&MQ.className=='qm_ico_flagon',
exN,bnc;
bn.push(
{
sId:"reply",
sItemValue:"Reply"
},
{
sId:"reply_all",
sItemValue:"Reply to all"
},
{
sId:"forward",
sItemValue:"Forward"
},
uj,
{
sId:"deleteMail",
sItemValue:"Delete"
},
{
sId:"predeleteMail",
sItemValue:"Delete permanently"
},
{
sId:"report",
sItemValue:"Spam"
},






uj,
{
sId:"print",
sItemValue:"Print"
}
);

if(!bnewwin||finds("div[module='qmAdSubMail']",S("submail_inner_body",ae.bo)).length>1)
{
bn.push(
{
sId:"openNew",
sItemValue:"Open in new window"
});
}

return bn;































































},


showDetail:function()
{
var ae=this,
cy=ae.Zv,
bxn=ae.S(ia.QA),
blq=ae.S(ia.cMQ),
blp=ae.S(ia.diP);

if(isShow(bxn))
{
return;
}
show(blq,false);
qmAnimation.expand(bxn);
if(blp&&blp.innerHTML=="")
{
blp.innerHTML=ae.bo.QMReadMail.getSubMailFrom(cy.refermailid)||"";
}
},
hideDetail:function()
{
var ae=this,
bxn=ae.S(ia.QA),
blq=ae.S(ia.cMQ);

if(isShow(blq))
{
return;
}
qmAnimation.fold(bxn,
{
oncomplete:function()
{
show(blq,true);

blq.parentNode.style.zoom="";
blq.parentNode.style.zoom="1";
}
}
);
}
}});


Co.qmGroupQReply=inherit("qmGroupQReply",Co.aPf,
function(aG)
{
return{

CK:function(aj,cUa,cUG)
{
var ae=this;
ae.bF=aj;
ae.cmp=cUa;
ae.cic=cUG;
ae.bwv=ae.S(ia.axV);
},

uv:function()
{
var ae=this,
zf=ae.bwv,
ap=ae.bo,
ag=getTop(),
adX=ae.S(ia.cgp);

ae.evt(["ck"],ae.S(ia.dmG));

addEvent(zf,"focus",function(ah)
{
if(!ae.vz)
{

QMEditor.createEditor(
{
editorId:"readMailGroupQuickSend",
editorAreaWin:ap,
funclist:{tbExtern:"Mo"},
photoCGI:getPhotoCGI(),
isNoEditScroll:true,
height:"160px",

onkeydown:function(ah)
{
if(cZs(ah))
{
fireMouseEvent(adX,"click");
}
},
onload:function()
{
ae.vz=this;
ae.aOp(false);
}
}
).initialize(QMEditor.getBreakLine(1,
{
family:goUserInfo.get("DEF_FONT_FAMILY"),
size:goUserInfo.get("DEF_FONT_SIZE"),
color:goUserInfo.get("DEF_FONT_COLOR")
}
),false,ag.S("QMEditorArea",ap).getAttribute("tIndex"));

if(!ag.ComposeLib)
{
loadJsFileToTop(["$js_path$libcompose131cca.js"]);

if("1"==ag.gbBackGroundSend)
{
loadJsFileToTop(["$js_path$backsend131cca.js"]);
}
}
}
else
{
ae.aOp(false);
}
}
);
},

aOp:function(cle)
{
var ae=this,
zf=ae.bwv,
aZ=ae.vz,
adX=ae.S(ia.cgp),
dPZ=isShow(zf);

if(dPZ==cle)
{
return;
}

show(zf,cle);
show(ae.S(ia.dIs).parentNode,!cle);
show(ae.S(ia.dIi).parentNode,!cle);

if(cle)
{
setClass(adX,"grptitle_tab bd right").style.cssText="height:42px;width:44px;cursor:pointer";
setClass(adX.parentNode,"qm_right bd_ccc").style.cssText="";


adX.focus();
adX.blur();
aZ.setContent(QMEditor.getBreakLine(1,
{
family:goUserInfo.get("DEF_FONT_FAMILY"),
size:goUserInfo.get("DEF_FONT_SIZE"),
color:goUserInfo.get("DEF_FONT_COLOR")
}
));
}
else
{
setClass(adX,"right bd_upload grptitle_tab_ bold").style.cssText="height:26px;width:96px;cursor:pointer;"
if(getLocale()=="zh_CN")
{
setClass(adX.parentNode,"").style.cssText="border:none;clear:left;height:26px;padding:3px 0;width:449px;text-align:right;margin-top:2px;";
}
else
{
setClass(adX.parentNode,"").style.cssText="border:none;clear:left;height:26px;padding:3px 0;width:474px;text-align:right;margin-top:2px;";
}
show(ae.S(ia.dIs).parentNode,true);
show(ae.S(ia.dIi).parentNode,true);
aZ.focus();
}
},

bCT:function(bhF)
{
var ae=this;

ae.S(ia.cgp).disabled=bhF;
return this;
},



ctp:function(cs)
{
return cs&&trim(cs.replace(/<[^(img)]([^>]+)?>/gi,"").replace(/&nbsp;/g,""));
},

getContent:function()
{
return this.vz&&this.vz.getContent();
},

disableConfirm:function()
{
var ae=this;

},

send:function(ar,bc,ah)
{
var ae=this,
ap=ae.bo,
aZ=ae.vz,
aA=ae.bF,
bCp=ae.cic,
zf=ae.S(ia.axV);

if(ar.disabled)
{
return;
}

if(!aZ||!ae.ctp(aZ.getContent(false)))
{
showError('Enter reply content first');

aZ&&aZ.focus();
}
else
{
var aMn=ae.cmp,
abG=
{
qqgroupid:aA.gid+"@groupmail.qq.com",
subject:aMn.subject||"No subject",
content__html:aZ.getContent(),
t:"compose.json",
s:"group_send",

fmailid:bc
};

waitFor(
function()
{
return!!(getTop().ComposeLib);
},
function(boI)
{
if(!boI)
{
debug("Load ComposeLib failed");
return;
}

var cdy,
bEY=("1"==getTop().gbBackGroundSend&&(cdy=getTop().BackGroundSend)),
aA={
sType:"group",
onready:function()
{
if(bEY)
{
show(ia.bVp,true,ap);
ae.aOp(true);
}
else
{
ae.bCT(true);
}
},
oncomplete:function(aP,bz)
{
if(bEY)
{
if(aP)
{
callBack(bCp.fQReplyComplete,[bz]);
}
show(ia.bVp,false,ap);
}
else
{
if(aP)
{
ae.bCT(false);
showInfo("Comment successfully");
ae.aOp(true);
callBack(bCp.fQReplyComplete,[bz]);
}
else
{
ae.bCT(false);
}
setTimeout(function(){aZ.resetFixHeight();},500);
}
}
};


if(bEY)
{
cdy.quickReply(abG,"group",aA);
}
else
{
ComposeLib.send(abG,aA);
}
},
100);
}
preventDefault(ah);
}
};
});

Co.qmGroupMail=inherit("qmGroupMail",Co.qmReadMail,
function(aG)
{
return{
coO:function()
{
var ae=this,
ap=ae.bo,
cy=ae.Zv,
aA=ae.bF,
dTG=CN(ia.eoG,getTop().getMainWin().document);

ae.cOs();
E(dTG,function(aaX)
{
swapLink(aaX,cy.disptype,ap);
});

ae.cHm();

initMailSelect(aA.oMoveItems,true,aA.bOpenTag=="1",
ap,aA.folderid,aA.bAutoTag);
ae.UX({sModuleName:"qmGroupQReply"});
ae.UX({sModuleName:"qmAntiSpam"});


















getTop().goUserInfo.deferget("DEF_TRANSLATE",function(boI)
{

ae.UX({sModuleName:csQ});
});



ae.cXU();
getTop().QMWebpushTip&&getTop().QMWebpushTip.read(1,ae.getMailId());
},

getEditorContent:function()
{
var ae=this;

return ae.dlq.getContent();
},

disableConfirm:function()
{
var ae=this;
ae.dlq.disableConfirm();
},

cwk:function()
{
var ag=getTop(),
ae=this,
ap=ae.bo;


addEvent(ap.document,"keydown",
function(ah)
{
if(ah.ctrlKey&&ah.keyCode=="65")
{
ae.doSelectAll(ah,ae.S(ia.bqm));
}
}
);
},

UX:function(bAR)
{
var ae=this,
alW,
aA=ae.bF,
cy=ae.Zv,
dc=extend({},ae.azL,bAR);

switch(dc.sModuleName)
{
case"qmGroupQReply":
alW=ae.dlq=new Co.qmGroupQReply(
aA,cy,{
fQReplyComplete:function(bz)
{
ae.cwn(bz);
}
},dc);

break;
default:
alW=aG.UX.call(ae,bAR);
}
return alW;
},

cwn:function(bz)
{
var fJ=evalValue(bz),
cju=this.S(ia.dkl);

fJ&&insertHTML(cju,"afterEnd",fJ.mailstr);
this.clearCache();
QMMailCache.setExpire();
},

dpa:function()
{
var aA=this.bF;

return dkg.replace(
{
sid:getSid(),
folderid:aA.folderid,
s:aA.subtmpl,
more:"&t=mail_list_group&groupid="+aA.groupid
}
);
},















showSeqContent:function(ar)
{
var ae=this,
aSY=ae.attr(ar,"seq");

show(ia.ewp+aSY,true);
show(ia.eul+aSY,true);
},

settingGroup:function(ar,bc)
{
var bP=calcPos(ar),
ae=this,
ap=ae.bo,
CP=ae;

var oSettingGroup=new QMMenu(
{
oEmbedWin:ae.bo,
sId:"menu_"+ia.elL,
bAutoClose:false,
nWidth:getLocale()=="zh_CN"?290:454,
oItems:
[
{
nHeight:"auto",
sItemValue:era.replace(
{
bReject:CP.bF.bReject,
bNewreply:CP.bF.bNewreply,
bNotify:CP.bF.bNotify,
sid:getSid()
})
}
],
nX:bP[3],
nY:bP[2],
onload:function()
{
var ae=this,
aS=ae.S("container");

ae.S("qqnotify").onclick=ae.S("noqqnotify").onclick=function()
{
show(ae.S("setnewdiv"),true);
}

ae.S("reject").onclick=function()
{
show(ae.S("setnewdiv"),false);
}

addEvent(ae.S("cancel"),"click",function()
{
oSettingGroup.toggle();
}
);
addEvent(ae.S("save"),"click",function()
{
var aF={};
E(GelTags("input",aS),
function(bf)
{
if(bf.type=="radio"&&bf.checked)
{

aF[bf.name]=bf.value;
}
}
);
QMAjax.send(
T([
'/cgi-bin/grouplist?t=mail_mgr2&mailaction=groupmgr',
'&oper1=$oper1$&oper2=$oper2$&sid=$sid$&gid=$gid$@groupmail.qq.com'
]).replace({
oper1:aF["qqnotify"]||"",
oper2:aF["unread"]||"",
sid:getSid(),
gid:CP.bF.gid
}),
{
method:"GET",
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(aP,bt)
{
var ddj=true;
if(aP)
{
try
{
var fJ=evalValue(bt);
debug("@todo Save successfully");
showInfo("Settings saved successfully");
oSettingGroup.toggle();

ap.QMReadMail.clearCache();
QMMailCache.setExpire();

extend(CP.bF,fJ);
}
catch(e)
{
ddj=false;
}
}
else
{
ddj=false;
}
!ddj&&showError("Operation failed");
}
}
);
}
);
}
});
},

rejectGroup:function(ar,bc,ah)
{
var ae=this,
ap=ae.bo,
pZ=ae.attr(ar,"opt");

QMAjax.send(dIV.replace(
{
sid:getSid(),
gid:ae.bF.gid,
yn:pZ
}
),
{
method:"GET",
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(aP,bt)
{
var fJ=evalValue(bt);
if(!aP||bt.indexOf("<!--cgi exception-->")==0)
{
showError("Operation failed");
}
else
{
toggle(ia.eqS,ap);
toggle(ia.eqQ,ap);
showInfo((pZ=="yes"?"Reject mail from this QQ group successfully":"Start to recieve mail from this QQ group successfully"));
ap.QMReadMail.clearCache();
QMMailCache.setExpire();
}
}
});
},

showVoter:function(ar,gJ)
{
var ae=this,
doM;
if(!ar)
{
return;
}
if(doM=ar.getAttribute("vid"))
{
toggle("voter_"+doM,ap);
}
else
{
var dSh=ae.S("voter_play_box"),
aaU=GelTags("tr",dSh),
cRG=(gJ==undefined||(typeof gJ=="string"))?!ar.getAttribute("opt"):gJ;

for(var i=0,len=aaU.length;i<len;i++)
{
if(aaU[i].id)
{
qmAnimation[cRG?"expand":"fold"](aaU[i],{speed:"fast"});
}
}
ar[cRG?"setAttribute":"removeAttribute"]("opt","1");
ar.innerHTML=ar.getAttribute(cRG?"hideText":"showText");
}
}
};
});


zC.QMReadMail=Co;

})(window);
