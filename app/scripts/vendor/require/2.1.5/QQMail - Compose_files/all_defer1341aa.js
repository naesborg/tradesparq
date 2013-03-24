









(function()
{
var QMFullTextSearch={};

QMFullTextSearch.fch="Search",
QMFullTextSearch.eDC="Search",




QMFullTextSearch.search=function(dE)
{
var aKJ=S("subject"),
aD={
sid:getSid(),
searchmode:dE||"",
folderid:dE=="gmnormal"?"8":"all",
stat:dE=="attach"?"8":"6"
},
aFD=trim(aKJ.value),
eu={};
changeStatus(1);








aD.subject=aD.sender=aD.receiver=((aFD===QMFullTextSearch.fch||aFD===QMFullTextSearch.eDC)?"":encodeURI(aFD));
if(dE=="note")
{
eu=T(['/cgi-bin/note_list?sid=$sid$&s=search&keyword=$subject$']);
}
else if(dE=="attach")
{

eu=T([
'/cgi-bin/attachfolder?sid=$sid$&s=search&folderid=all&hflag=all&page=0&keytext=$subject$',
'&searchmode=$searchmode$&topmails=0&advancesearch=0&loc=frame_html,,,$stat$']);
}
else
{

if(attr(aKJ,"fullsearch")==1)
{
eu=T([
'/cgi-bin/mail_list?sid=$sid$&s=search&folderid=$folderid$&page=0&subject=$subject$&sender=$sender$',
'&receiver=$receiver$&searchmode=$searchmode$&topmails=0&advancesearch=0&loc=frame_html,,,$stat$']);
}
else
{
eu=T([
'/cgi-bin/mail_list?sid=$sid$&s=search&folderid=$folderid$&page=0&keyword=$subject$&sender=$sender$',
'&receiver=$receiver$&topmails=0&advancesearch=3&combinetype=or&loc=frame_html,,,7']);
}

if(dE=="gmnormal")
{
aD.sender=aD.receiver=null;
}
}
goUrlMainFrm(eu.replace(aD),false);
};

QMFullTextSearch.bUa=function(aA)
{
return function()
{
var aKJ=S("subject"),cuJ=S("subjectsearchLogo");
jp={
focus:[aKJ.getAttribute("focus")!="true",
"","","true"],
blur:[aKJ.value=="",
(attr(aKJ,"fullsearch")=="1")?QMFullTextSearch.fch:QMFullTextSearch.eDC,"#a0a0a0","false"]
}[aA];

if(jp[0])
{
aKJ.value=jp[1];
aKJ.style.color=jp[2];
aKJ.setAttribute("focus",jp[3]);
}
if(aA=="focus"&&aKJ.value!="")
{
QMFullTextSearch.QMAuto.show(eYv());
}
cuJ&&(setClass(cuJ,aA=="focus"?"ss_icon ss_endicon ss_icon_return":"ss_icon ss_endicon ss_icon_arrowdown"));
};
};
QMFullTextSearch.onkeydown=function(ag)
{
if(ag.keyCode==13)
{
QMFullTextSearch.search();
}
};
function eYv()
{
var aKJ=S("subject"),
eLD=T("<div unselectable=\"on\" class=\"ss_drop_item\"><a href=\"javascript:;\" unselectable=\"on\"><span unselectable=\"on\" class=\"ss_icon ss_icon_mail\"></span>Search all messages for <b unselectable=\"on\">$keyword$</b></a></div>"),
fBU=T("<div unselectable=\"on\" class=\"ss_drop_item\"><a href=\"javascript:;\"unselectable=\"on\"><span class=\"ss_icon ss_icon_attach\" unselectable=\"on\"></span>Search all attachments have the words <b unselectable=\"on\">$keyword$</b></a></div>"),
fwy=T("<div unselectable=\"on\" class=\"ss_drop_item\"><a href=\"javascript:;\"unselectable=\"on\"><span class=\"ss_icon ss_icon_group\" unselectable=\"on\"></span>Search all group mails have the words <b unselectable=\"on\">$keyword$</b></a></div>"),
fof=T("<div unselectable=\"on\" class=\"ss_drop_item\"><a href=\"javascript:;\"unselectable=\"on\"><span class=\"ss_icon ss_icon_note\" unselectable=\"on\"></span>Search all notes have the words <b unselectable=\"on\">$keyword$</b></a></div>"),
eFU="<div class=\"ss_drop_item ss_drop_split\" unselectable=\"on\"><a unselectable=\"on\" href=\"javascript:;\">Advanced Search...</a></div>",
aFD=trim(aKJ.value);
if(aFD=="")
{
return"";
}
else
{
var amh=13;
aFD=(aFD.length>amh)?aFD.substring(0,amh)+"...":aFD;
if(attr(aKJ,"fullsearch")!="1")
{
return[
{
sId:"searchInMail",
sItemValue:eLD.replace(
{
keyword:htmlEncode(aFD)
})
},
{
sId:"advanceSearch",
sItemValue:eFU
}
];
}
else
{
return[
{
sId:"searchInMail",
sItemValue:eLD.replace(
{
keyword:htmlEncode(aFD)
})
},
{
sId:"searchInAttach",
sItemValue:fBU.replace(
{
keyword:htmlEncode(aFD)
})
},
{
sId:"searchInGroupMail",
sItemValue:fwy.replace(
{
keyword:htmlEncode(aFD)
})
},
{
sId:"searchInNotes",
sItemValue:fof.replace(
{
keyword:htmlEncode(aFD)
})
},
{
sId:"advanceSearch",
sItemValue:eFU
}
];
}
}
}
function fUH()
{
if(S("smartSearch"))
{
QMFullTextSearch.QMAuto=new QMAutoComplete(
{
oInput:S("subject"),
oPosObj:S("smartSearch"),
sClassName:(getLocale()=="zh_CN")?"":"smart_search_menu",
nWidth:(getLocale()=="zh_CN")?280:370,
oClass:{
classnormal:"ss_drop_item_wrap",
classhigh:"ss_drop_item_wrap_hover"
},
ongetdata:function()
{
return eYv();
},
onselect:function(bF)
{
if(bF.sId=="searchInMail")
{
QMFullTextSearch.search();
}
else if(bF.sId=="searchInAttach")
{
QMFullTextSearch.search("attach");
}
else if(bF.sId=="searchInGroupMail")
{
getTop().ossLog("delay","all","stat=nothing&locval=search,group,,1");
QMFullTextSearch.search("gmnormal");
}
else if(bF.sId=="searchInNotes")
{
QMFullTextSearch.search("note");
}
else
{
showAdvanceSearchDialog();
}
}
});
}
}

waitFor(
function()
{
return getTop().QMAutoComplete;
},
function(bz)
{
if(bz)
{
fUH();
}
},
1000,
30000
);

QMFullTextSearch.onfocus=QMFullTextSearch.bUa("focus");
QMFullTextSearch.onblur=QMFullTextSearch.bUa("blur");

window.QMFullTextSearch=QMFullTextSearch;
})();


function showAdvanceSearchDialog(fAs)
{
var ah=getTop(),
cgY={sid:ah.getSid(),

keyword:(fAs!="all")?encodeURI(trim(S("subject").value)):""},
bi=T('/cgi-bin/folderlist?sid=$sid$&t=searchoption&advancesearch=2&loc=frame_html,,9&advkeyword=$keyword$').replace(cgY),
eM=new QMDialog({
sId:"advsearch",
sTitle:"Advanced Search",
sUrl:bi,
onload:function()
{
ah.gnIEVer==6&&(this.S("_dlgiframe_").src=this.S("_dlgiframe_").src);
},
nWidth:461,
nHeight:428
});
}






function showAdvanceSearchMenu()
{
var bC={
"all":{sId:"0",sItemValue:"<div class=\"ss_drop_item\"><a href=\"javascript:;\"><span class=\"ss_icon ss_icon_mail\"></span>Search all messages</a></div>"},
"att":{sId:"1",sItemValue:"<div class=\"ss_drop_item\"><a href=\"javascript:;\"><span class=\"ss_icon ss_icon_attach\"></span>Search all attachments</a></div>"},
"grp":{sId:"3",sItemValue:"<div class=\"ss_drop_item\"><a href=\"javascript:;\"><span class=\"ss_icon ss_icon_group\"></span>Search all group Messages</a></div>"},
"nte":{sId:"4",sItemValue:"<div class=\"ss_drop_item\"><a href=\"javascript:;\"><span class=\"ss_icon ss_icon_note\"></span>Search all notes</a></div>"},
"adv":{sId:"2",sItemValue:"<div class=\"ss_drop_item ss_drop_split\"><a href=\"javascript:;\">Advanced Search...</a></div>"}
},
fy=document.body.clientWidth-284,
cz=62,
fUd=attr(S("subject"),"fullsearch"),
fWT=attr(S("subject"),"newattachfolder");

new(getTop().QMMenu)({
oEmbedWin:window,
nX:fy,
nY:cz,

nWidth:281,
oItems:fUd==1?[bC.all,bC.att,bC.grp,bC.nte,bC.adv]:[bC.all,bC.grp,bC.nte,bC.adv],

sClassName:"ss_drop_wrap ",
onitemclick:function(aJ){
var cgY={sid:getTop().getSid()};

if(aJ=="1")
{
changeStatus(1);

var bi=bi=T("/cgi-bin/attachfolder?topmails=0&sid=$sid$&s=search&folderid=all&hflag=all&page=0&subject=&sender=&receiver=&searchmode=attach&advancesearch=0").replace(cgY);
getTop().getMainWin().location.href=bi;
}
else if(aJ=="0")
{
changeStatus(1);
var bi=T("/cgi-bin/mail_list?topmails=0&sid=$sid$&s=search&folderid=all&page=0&subject=&sender=&receiver=&searchmode=&advancesearch=0").replace(cgY);
getTop().getMainWin().location.href=bi;
}
else if(aJ=="3")
{
changeStatus(1);
var bi=T("/cgi-bin/mail_list?sid=$sid$&folderid=8&page=0&t=mail_list_group").replace(cgY);
getTop().getMainWin().location.href=bi;
}
else if(aJ=="4")
{
changeStatus(1);
var bi=T("/cgi-bin/note_list?catid=0&sid=$sid$").replace(cgY);
getTop().getMainWin().location.href=bi;
}
else
{
showAdvanceSearchDialog("all");
}
}
});
}






function showTaskPanel()
{
debug("showTaskPanel");
}





function beforeFrameHtmlUnload()
{
var fwa=["ftnupload_self","ftnupload_attach"];

var afM=QMDialog();
for(var i in afM)
{
if(afM[i].option("status")=="min")
{

setTimeout(function(){
afM[i].max();
},10);
return"Program is in progress,Are you sure to close ?";
}
}

var euJ=window.QMFtnModels;
if(euJ&&euJ.oFtnLogic&&euJ.oFtnLogic.isUploading())
{
return"File upload is in progress, Are you sure to leave ?";
}
}





function ckDns(dSn)
{
E(dSn,function(dMh,i)
{
var dNH=(new Image());
dNH.src=["http://",dMh,"/zh_CN/htmledition/images/spacer.gif"].join("");
}
);
}




var QMIme=
{


dTt:"//ime.qq.com/fcgi-bin/getjs ",
czB:{"ime-cfg":"lt=102"},

JN:function(jI)
{
return!!window.QQWebIME&&(jI?QQWebIME[jI]:false);
},

Ga:function(aA)
{
var Ap=S("imeIcon");
Ap&&(setClass(Ap,Ap.getAttribute("css")+aA)
.title=Ap.getAttribute(aA));
setUserCookieFlag("CCSHOW",4,{on:4,off:3}[aA]);
},

aku:function(aA)
{
if(this.JN("set"))
{
QQWebIME.set(aA);
this.dOe().Ga(aA);
return true;
}
return false;
},

dOe:function()
{
var ae=this;
if(ae.JN("event")&&!QQWebIME["_setevt_"])
{
QQWebIME["_setevt_"]=true;
QQWebIME.event("on",function(){ae.Ga("on");});
QQWebIME.event("off",function(){ae.Ga("off");});
}
return ae;
},



ison:function()
{
return this.JN('get')&&QQWebIME.get('on');
},




load:function(UX)
{
if(getLocale()=="zh_CN")
{
var ae=this;
loadJsFile(ae.dTt,true,document,function()
{
callBack.call(ae,UX,[ae.aku("on")]);
},
ae.czB
);
}
},



panel:function(aXJ,eCi,aWP)
{
var hQ=S("imePanel"),
atH=aXJ!==false,
cWp=atH?3:1;
aWP&&this.Ga("off");
!atH&&this.off();
show(hQ,atH);
if(!aWP&&getCookieFlag("CCSHOW")[4]!=cWp)
{
setCookieFlag("CCSHOW",4,cWp);
ossLog("realtime","all","loc=py,"+(atH?"on":"off")+",0");
}
atH&&eCi!==false&&this[aWP?"load":"on"]();
return!!hQ;
},



off:function()
{
return this.aku("off");
},



on:function()
{
var ae=this;
!ae.aku("on")&&(showProcess(1,0,'loading module of Cloud input method...','',false)||ae.load(
function(bz)
{
(bz?showInfo:showError)(
[bz?"Cloud input method loaded"
:"Cloud input method loadef fail - <a href='http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=10000&&no=1000561' target='_blank'>help</a>"].join(""));
}
));
},



toggle:function()
{
this.ison()?this.off():this.on();
}
};

function navRightMenu(bQ,ag)
{
var aT=bQ.ownerDocument,
az=aT.defaultView||aT.parentWindow,
Lx=ag.clientX+bodyScroll(az,'scrollLeft'),
KK=ag.clientY+bodyScroll(az,'scrollTop'),
aK=getEventTarget(ag),
zu,
eWT,
fYi=false,
gbq=false,
vi=
{
bZd:{sId:"open",sItemValue:'Open',oUrl:T("/cgi-bin/mail_list?sid=$sid$&s=unread&folderid=personal&flag=new&page=0&stype=myfolders&topmails=0")},
bYf:{sId:"opennew",sItemValue:'Open in new window'},
aNP:{nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:5px; overflow:hidden;"></div>'},
fTA:{sId:"writegroupmail",sItemValue:'Compose group message'},
fJo:{sId:"readrecord",sItemValue:'All notes'},
ckd:{sId:"readnew",sItemValue:'Unread messages'},
fOU:{sId:"writemessage",sItemValue:'\u5199\u77ED\u6D88\u606F'},
flW:{sId:"checkmailing",sItemValue:'Delivery status'},
fHW:{sId:"emptydel",sItemValue:'Empty trashbox'},
aNt:{sId:"mark",sItemValue:'Mark all as read'},
exy:{sId:"createtag",sItemValue:'New label'},
bVe:{sId:"setting",sItemValue:'Setting'},
fEw:{sId:"hide",sItemValue:'Hide'},
fnu:{sId:"show",sItemValue:'Show'},
fkt:{sId:"showhide",sItemValue:'Setting'},
fZo:{sId:"createremind",sItemValue:'New'},
dJI:{sId:"upload",sItemValue:'Upload'},
fQe:{sId:"addsubscription",sItemValue:'Add subscription'},
fVc:{sId:"managegroupmail",sItemValue:'Setting of group mail'},
fFG:{sId:"checkunanswered",sItemValue:'Messages not reply'},
fjM:{sId:"delinquiry",sItemValue:'Query deleted messages'},
fBo:{sId:"emptytrash",sItemValue:'Empty Trash'},
gaZ:{sId:"managesubscription",sItemValue:'Manage Subscription'},
fzu:{sId:"writelog",sItemValue:'Write note'},
fPC:{sId:"writedaily",sItemValue:'\u5199\u65E5\u5FD7'},
fFB:{sId:"revievedinquiry",sItemValue:'Query incoming messages'},
fuY:{sId:"report",sItemValue:'Spam report'},
dXx:{sId:"createfolder",sItemValue:'New Folder'},
emK:{sId:"createmailbox",sItemValue:'New other box'},
dTf:{sId:"managefolder",sItemValue:'Setting of Folder'},
exZ:{sId:"managemailbox",sItemValue:'Setting of other box'},
fWF:{sId:"delfolder",sItemValue:'Remove Folder'},
eDw:{sId:"managetag",sItemValue:'Setting of labels'},
gaF:{sId:"recieverecord",sItemValue:'Record of incoming message'},
fph:{sId:"recievepopmail",sItemValue:'Receive'},
fmH:{sId:"recieveallpopmail",sItemValue:'Receive all'},
fZL:{sId:"delmailbox",sItemValue:'Delete'},
eXY:{sId:"mailboxsetting",sItemValue:'Change'}
},
ajN=
{
aWW:[vi.bZd,vi.bYf,vi.aNP],
fzU:[vi.fTA,vi.aNt,vi.aNP],
fMA:[vi.bZd,vi.bYf,vi.fJo,vi.aNP],
Lt:[vi.ckd,vi.aNt,vi.aNP],
fKX:[vi.flW,vi.fFG],
fJn:[vi.fHW,vi.fjM],
ffK:[vi.aNt,vi.fBo,vi.aNP,vi.fuY],
fvI:[vi.ckd,vi.aNt],
fCk:[vi.exy,vi.eDw],
fYN:[vi.exy,vi.aNP],
bVe:[vi.bVe,vi.aNP],
eXY:[vi.eXY,vi.aNP],


fyD:[],
fiL:[vi.bZd,vi.bYf,vi.aNP],
frG:[vi.fzu,vi.aNP],
dJI:[vi.dJI,vi.aNP],
fwO:[vi.fQe,vi.fPC,vi.aNt,vi.aNP],
fZK:[vi.dXx,vi.dTf],
fYT:[vi.emK,vi.exZ,vi.aNP]
},
ehV=
{
"1":{oMenu:ajN.aWW.concat(ajN.Lt).concat([vi.fFB]),sName:"recievebox"},
"notsysmsg":{oMenu:ajN.aWW.concat([vi.ckd,vi.aNt]),sName:"personalmsg"},
"sysmsg":{oMenu:ajN.aWW.concat([vi.ckd,vi.aNt]),sName:"sysmsg"},
"starred":{oMenu:[vi.bZd,vi.bYf],sName:"starred"},
"9":{oMenu:ajN.aWW.concat([vi.fOU]),sName:"message"},
"8":{oMenu:ajN.aWW.concat(ajN.fzU).concat([vi.fVc]),sName:"groupmail"},
"4":{oMenu:[vi.bZd,vi.bYf],sName:"draftbox"},
"3":{oMenu:ajN.aWW.concat([vi.aNt]).concat(ajN.fKX),sName:"sended"},
"5":{oMenu:ajN.aWW.concat([vi.aNt]).concat(ajN.fJn),sName:"deleted"},
"6":{oMenu:bC=ajN.aWW.concat(ajN.ffK),sName:"trashbox"},

"personal":{
oMenu:[
vi.bZd,
vi.bYf,
vi.ckd,
vi.aNP,
vi.aNt,
vi.aNP,
vi.dXx,
vi.dTf
],
sName:"personal"
},

"personalfolders":{
oMenu:[
vi.bZd,
vi.bYf,
vi.ckd,
vi.aNP,
vi.aNt,
vi.aNP,
vi.dXx,
vi.dTf
],
sName:"personalfolders"
},

"pop":{
oMenu:[
vi.bZd,
vi.bYf,
vi.ckd,
vi.aNP,
vi.fmH,
vi.aNt,
vi.aNP,
vi.emK,
vi.exZ
],
sName:"pop"
},

"popfolders":{
oMenu:[
vi.bZd,
vi.bYf,
vi.ckd,
vi.aNP,
vi.fph,
vi.aNt,
vi.aNP,
vi.emK,
vi.exZ
],
sName:"popfolders"
},

"tag":{oMenu:ajN.aWW.concat(ajN.fCk),sName:"tag"},
"tagfolders":{oMenu:ajN.aWW.concat([vi.exy,vi.eDw]),sName:"tagfolders"},

"11":{oMenu:ajN.aWW.concat(ajN.bVe),sName:"plp"},
"card":{oMenu:ajN.aWW,sName:"card"},
"postcard":{oMenu:ajN.aWW,sName:"postcard"},
"reminder":{oMenu:ajN.aWW.concat(ajN.fyD),sName:"reminder"},
"attach":{oMenu:ajN.fiL,sName:"attach"},
"note":{oMenu:ajN.fMA.concat(ajN.frG),sName:"note"},
"ftn":{oMenu:ajN.aWW.concat(ajN.dJI),sName:"ftn"},
"mydisk":{oMenu:ajN.aWW.concat(ajN.dJI),sName:"mydisk"},
"reader":{oMenu:ajN.aWW.concat(ajN.fwO).concat(ajN.bVe),sName:"reader"},
"morefunction":{oMenu:[vi.fkt],sName:"morefunction"},
"bookfolders":{oMenu:ajN.aWW.concat(ajN.fvI),sName:"bookfolders"}
},
csp=
{
"readnew":TE('/cgi-bin/readtemplate?sid=$sid$&t=unreadmail&folderid=$@$if($menuid$=="sysmsg"|$menuid$=="notsysmsg")$@$1$@$else$@$$menuid$$@$endif$@$&flag=new&topmails=0&stype=$@$if($menuid$=="personal")$@$myfolders$@$else if($menuid$=="pop")$@$myotherinbox$@$else if($menuid$=="sysmsg")$@$&flag=system$@$else if($menuid$=="notsysmsg")$@$&flag=~system$@$endif$@$'),
"writegroupmail":T("/cgi-bin/grouplist?t=compose_group&sid=$sid$&newwin="),
"managegroupmail":T("/cgi-bin/grouplist?sid=$sid$&t=setting_group&oper=list"),
"checkmailing":T("/cgi-bin/help_static_send?sid=$sid$"),
"checkunanswered":T("/cgi-bin/mail_list?sid=$sid$&folderid=3&daterange=5&collolimit=0&combinetype=and&t=help_static_unreply"),
"revievedinquiry":T("/cgi-bin/help_static_receive?sid=$sid$&foldertype=0"),
"delinquiry":T("/cgi-bin/help_static_delete?sid=$sid$"),
"report":T("/cgi-bin/help_report_spam?sid=$sid$"),
"managesubscription":T("/cgi-bin/setting10?action=list&t=setting10&sid=$sid$"),
"writelog":T("/cgi-bin/cataloglist?sid=$sid$&t=note_edit_show&catid="),
"writedaily":T("/cgi-bin/readtemplate?sid=$sid$&t=compose&s=SendToQZone&entrance=rss"),
"writemessage":T("/cgi-bin/readtemplate?sid=$sid$&t=sms_list_v2&go=compose"),
"createremind":T("/cgi-bin/reminder_list?t=remind&sid=$sid$&sorttype=create&filter=1&fn=1&loc=folderlist,,,39&pageaction=createremind"),
"readrecord":T("/cgi-bin/note_list?sid=$sid$&catid=0"),
"createmailbox":T("/cgi-bin/foldermgr?sid=$sid$&fun=detailpop&t=pop_detail&acctid=0"),
"folder":TE('/cgi-bin/folderlist?t=folderlist_setting&s=null&sid=$sid$&info=true$@$if($itemid$=="managetag")$@$&jump=tag#mytagdiv$@$else$@$&jump=myfolders$@$endif$@$'),
"mailbox":T("/cgi-bin/folderlist?t=poplist_setting&s=null&sid=$sid$"),
"showhide":T("/cgi-bin/foldermgr?sid=$sid$&fun=showfldflags&t=setting_folder"),
"addsubscription":T("http://r.mail.qq.com/cgi-bin/reader_main?sid=$sid$&t=r_index&source=folderlist&hash=search%3Fkeyworkd%3D"),
"recieverecord":T("/cgi-bin/help_static_pop?sid=$sid$&domain=$etitle$"),
"mailboxsetting":T("/cgi-bin/foldermgr?sid=$sid$&fun=detailpop&t=pop_detail&folderid=$menuid$&acctid=$acctid$&s=maillist"),
"upload":
{
"ftn":T("/cgi-bin/readtemplate?sid=$sid$&t=ftn&navcmd=nav,autoupload"),
"mydisk":T("/cgi-bin/ftnList?sid=$sid$&t=exs_ftn_mydisk&listtype=mydisk&bus=6&list=0&display=list&autostart=1")
},
"setting":
{
"reader":T("http://r.mail.qq.com/cgi-bin/reader_main?sid=$sid$&t=r_index&source=folderlist&hash=setting/general"),
"11":T("/cgi-bin/bottle_panel?sid=$sid$&t=bottle&loc=folderlist,,,33&func=setting")
}
},
bC=[];

while(aK.tagName!="LI"&&aK.tagName!="BODY")
{
var bOP=aK.id,
eS=aK.parentNode;
if(bOP.match(/folder_.*/))
{
var dkF;
eWT=aK.getAttribute("etitle");
zu=bOP.replace("folder_","").replace("_td","").replace("_ns","");
dkF=ehV[zu]?ehV[zu]:ehV[aK.getAttribute("name")+"folders"];
bC=dkF?dkF["oMenu"]:[];
eCR=dkF?dkF["sName"]:"";
aK=eS.tagName=="LI"?eS:aK;
break;
}
else
{
aK=eS;
}
}

if(bC&&bC.length>0)
{
var eS=aK.parentNode,
cQk=eS.id;

if(cQk=="morefunctionfolders")
{
bC=bC.concat([vi.fnu]);
}
else if(cQk=="my_note"||eS.tagName=="SPAN")
{
bC=bC.concat([vi.fEw]);
}

ossLog("delay","all","stat=right&menuid="+eCR);

var ek=new QMMenu(
{
sId:zu,
oEmbedWin:az,

nWidth:"auto",
nMaxWidth:180,
nMaxItemView:14,
sClassName:"qmpanel_shadow",
bAnimation:false,
bAutoClose:true,
oItems:bC,

onitemclick:function(aJ,aEP)
{
var eu,
bi="",
dDL="",
kG=getTop().getMainWin().location;

ossLog("delay","all","stat=right&menuid="+eCR+"&opr="+aJ);
switch(aJ)
{
case"opennew":
var cS={shiftKey:true};
case"open":
var bE=S("folder_"+zu),
cS=cS||null;
fireMouseEvent(bE,"mousedown",cS);
fireMouseEvent(bE,"click",cS);
break;
case"writemessage":
var bE=S("folder_"+9);
switchFolder("folder_"+zu);
kG.href=bE.href+"&go=compose";
break;
case"mark":
if(zu=="reader")
{
var gQ=aT.createElement("form");

gQ.action=gsRssDomain+"/cgi-bin/reader_mgr?fun=setfeedread&type=all&sid="+getSid();
gQ.method="post";
gQ.target="actionFrame";
aT.body.appendChild(gQ);
gQ.submit();

setRssUnread(0,0);

getTop().showInfo("\u9605\u8BFB\u7A7A\u95F4\u6807\u4E3A\u5DF2\u8BFB\u64CD\u4F5C\u6210\u529F");
if(S("folder_reader_td").className=="fn")
{
reloadFrm(getTop().getMainWin());
}
}
else
{
var fzA={"notsysmsg":"~system","sysmsg":"system"};

QMAjax.send("/cgi-bin/mail_mgr?mailaction=read_all&t=unreadmail_reg_data",
{
method:"POST",
content:T('sid=$sid$&folderid=$folderid$&flag=$flag$').replace(
{
sid:getSid(),
folderid:(zu=="notsysmsg"||zu=="sysmsg")?1:zu,
flag:fzA[zu]||""
}
),
onload:function(bz,bU)
{
if(bz)
{
var QB=S("folder_"+zu+"_td"),
kd=QB.parentNode;

reloadLeftWin();

if(QB.className=="fn"||
(kd.id=="personalfolders"&&S("folder_personal_td").className=="fn")||
(kd.id=="popfolders"&&S("folder_pop_td").className=="fn"))
{
reloadFrm(getTop().getMainWin());
getTop().showInfo("Mark folder as read");
}

if(zu=="personal"||zu=="pop")
{
var aDz=S(zu+"folders").getElementsByTagName("LI");

for(var i=0;i<aDz.length;i++)
{
if(aDz[i].className=="fn")
{
reloadFrm(getTop().getMainWin());
getTop().showInfo("Mark folder as read");
break;
}
}
}

if(bU)
{
try
{
var aL=eval(bU);
setRollBack(aL.rbkey,"Operation in folder");
}
catch(e)
{
}
}
}
}
}
);
}
break;
case"emptydel":
case"emptytrash":
var ht=S("folder_"+zu).nextSibling;

ht=ht.tagName=="A"?ht:ht.nextSibling;
if(ht)
{
fireMouseEvent(ht,"click");
}
break;
case"createtag":
QMTag.newMailTag();
break;
case"createfolder":
moveMailJs('new','',"",{bML:true,oMail:[],oWin:[],bIsJump:true});
break;
case"managefolder":
case"managetag":
case"delfolder":
eu=csp["folder"];
break;
case"managemailbox":
case"delmailbox":
eu=csp["mailbox"];
break;
case"show":
case"hide":
case"morefunction":
eu=csp["showhide"];
break;
case"upload":
getTop().setUserCookie('ftAutoStart',1);
getTop().ftSendStatic('1106',getUin());
eu=csp["upload"][zu];
break;
case"setting":
eu=csp["setting"][zu];
break;
case"mailboxsetting":
dDL=S("folder_"+zu).getAttribute("acctid");
eu=csp[aJ];
break;
case"createremind":
getTop().setUserCookie('ftAutoStart',1);
getTop().ftSendStatic('1106',getUin());
eu=csp[aJ];
break;
case"recieveallpopmail":
getTop().recvPopAll()
break;
case"recievepopmail":
dDL=S("folder_"+zu).getAttribute("acctid");
getTop().recvPop(dDL,zu,getTop().getMainWin());
break;
case"readnew":
if(!getGlobalVarValue("unreadlist"))
{
eu=TE("/cgi-bin/mail_list?sid=$sid$&page=0&flag=new&s=unread&sFrom=folderlist&folderid=$menuid$&loc=folderlist,,,100");
break;
}
default:
eu=csp[aJ];
}

if(eu)
{
bi=eu.replace(
{
sid:getSid(),
menuid:zu,
itemid:aJ,
etitle:eWT,
acctid:dDL
}
);
switchFolder("folder_"+zu);
kG.href=bi;
}
},

onload:function()
{

var mC=this;
if(mC.option("sId")==zu)
{
var	cX=parseInt(mC.option("nHeight")),
dp=parseInt(mC.option("nWidth")),
cI=calcAdjPos([KK,Lx,KK,Lx],dp,cX,az,1);

mC.option("nX",cI[3]).option("nY",cI[0]);
}
}
}
);


if(zu!="reader"&&!aK.getElementsByTagName("B").length)
{
ek.itemOption("readnew","bDisSelect",true);
ek.itemOption("mark","bDisSelect",true);
}
else if(zu=="reader")
{
var dI=S("folder_reader").className;

if(!dI.match(/bold/)||dI.match(/normal/))
{
ek.itemOption("mark","bDisSelect",true);
}
}
if(S("popfolders").getElementsByTagName("A").length>29)
{
ek.itemOption("createmailbox","bDisSelect",true);
}
if(aK.getElementsByTagName("A").length<2)
{
ek.itemOption("emptydel","bDisSelect",true);
ek.itemOption("emptytrash","bDisSelect",true);
}

var bEb=aK.getElementsByTagName("IMG");
if(bEb.length>0&&bEb[0].src.match(/ico_pwd/))
{
ek.itemOption("readnew","bDisSelect",true);
ek.itemOption("mark","bDisSelect",true);
ek.itemOption("createfolder","bDisSelect",true);
ek.itemOption("createmailbox","bDisSelect",true);
ek.itemOption("recieverecord","bDisSelect",true);
}
}

preventDefault(ag);
}

function mailRightMenu(bQ,ag)
{
var aT=bQ.ownerDocument,
az=aT.defaultView||aT.parentWindow,
Lx=ag.clientX+bodyScroll(az,'scrollLeft'),
KK=ag.clientY+bodyScroll(az,'scrollTop'),
Hn=BaseMailOper,
tD=Hn.getInstance(az),
buy=GelTags('input',bQ)[0],
cXv=buy.checked==true;

if(!tD)
{
return;
}

if(!cXv)
{

QMMailList.selectedUI({oMail:[]});
}

ossLog("delay","all","stat=right");
buy.checked=true;

var aE=tD.getConfig();

function awf(vJ)
{


var bC=[],
avc=[],
fzp=[],
nT=0,
bf=vJ.oMail,
dEY=vJ.sFid=="11"||/^(LP|ZP)/.exec(bf[0].sMid),
bzH=bf.length,
uZ={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:7px; overflow:hidden;"></div>'},
avn=T([
'<div style="white-space:nowrap;zoom:1;">',
'<input type="button" class="item_square flagbg$flagbg$"/>',
'<span class="item_square_txt">$name$ &nbsp</span>',


'</div>']);

if(bzH==1&&!dEY)
{

bC.push(
{
sId:"preview",
sItemValue:'<div class="right"><img src="/zh_CN/htmledition/images/spacer.gif" class="arrow_meunico" /></div>Preview',
oSubMenu:{
sClassName:'rightpre qmpanel_shadow',
nWidth:460,

oItems:[{
nHeight:350,
sItemValue:T('<div scroll="true" id="pre" style="height:350px;width:438px;overflow-x:hidden;overflow-y:auto;"><div style="*margin:100px 0 0 0;height:64px;text-align:center;width:100%;"><center><img src="$images$ico_loading2.gif"/></center></div></div>').replace({
images:getPath("image")
})
}],
onload:function(){
var ems=this,
bt=vJ.oMail[0].sMid;
QMAjax.send(T('/cgi-bin/readmail?sid=$sid$&folderid=$f$&t=quickreadmail&mailid=$m$&mode=preview&maxage=3600&ver=$v$').replace({
v:rdVer(bt,0),
sid:getSid(),
f:vJ.sFid,
m:bt
}),{
method:'GET',
onload:function(bz,bU,fj){
if(bz)
{
ossLog("delay","all","stat=right&opr=preview");
var aWY=ems.S('pre');
if(aWY)
{
aWY.style.lineHeight=1;
aWY.innerHTML=filteScript(bU).replace(/<style ?.*>[\s\S]*?<\/style>/ig,"");
swapLink(aWY,"preview",aWY.ownerDocument);
}
}
}
});
}
}
}
);
bC.push(
{
sId:"opennew",
sItemValue:'Open in new window'
}
);
bC.push(uZ);

}

var aru=false;
for(var i=0;i<bzH;i++)
{
nT+=bf[i].bUnr?1:0;
bf[i]&&bf[i].bSys==1&&(aru=true);
}























debug(aru)



if(vJ.sFid!=5&&vJ.sFid!=6)
{
bC.push({sId:"delmail",sItemValue:'Delete'});
}
else
{
bC.push({sId:"predelmail",sItemValue:'Delete forever'});
}

if(!aru&&aE.bSpam&&vJ.sFid!=6&&!dEY)
{
bC.push({sId:"spammail",sItemValue:"Report spam"});
}

bC.push(uZ);
if(aE.bReadMode)
{
if(nT)
{
bC.push({sId:"read",sItemValue:"Mark as read"});
}
if(nT!=bzH)
{
bC.push({sId:"unread",sItemValue:"Mark as unread"});
}
}
if(bzH==1)
{
bC.push(
{
sId:"createreceiverule",
sItemValue:"Create rules"
});
}
if(aE.bTagMode&&!dEY)
{
var cTT=0;
for(var i=0;i<bzH;i++)
{
if(bf[i].oTagIds.length)
{
cTT=true;
break;
}
}
if(cTT)
{
avc.push(
{
sId:'rmalltag',
sItemValue:'Remove label'
},
extend({bDisSelect:true,sId:'deltaghr'},uZ)
);
}
for(var Zl=QMTag.get(),i=0,aF=Zl.length;i<aF;i++)
{
var jt=Zl[i];
avc.push(
{
sId:'tid_'+jt.id,
sItemValue:avn.replace(jt)
}
);
}
if(aF)
{
avc.push(uZ);
}
avc.push({
sId:'newtag',
sItemValue:'New label'
});

bC.push({
sId:"mark",
sItemValue:'<div class="right"><img src="/zh_CN/htmledition/images/spacer.gif" class="arrow_meunico" /></div>Labels',
oSubMenu:{
oItems:avc
}
}
);

}

if(!dEY)
{
bC.push({
sId:"move",
sItemValue:'<div class="right"><img src="/zh_CN/htmledition/images/spacer.gif" class="arrow_meunico" /></div>Move to',
oSubMenu:{
oItems:aE.moMoveItem
}
}
);
}

return bC;
}

var bJ;


if(aE.mnFolderType==0)
{

bJ=QMMailList.getCBInfo(aE.oWin);
QMMailList.selectedUI(bJ);
}
else
{

bJ=aE.oWin.QMReadMail.getTag();
}

tD.setMailInfo(bJ);

var cbD=null,
zu=unikey(),
ek=new QMMenu({
sId:zu,
oEmbedWin:az,

nWidth:"auto",
nMaxWidth:180,
nMaxItemView:14,
sClassName:"qmpanel_shadow",
bAnimation:false,
bAutoClose:true,
oItems:awf(bJ),

onitemclick:function(aJ,aEP){
ossLog("delay","all","stat=right&opr="+aJ);
tD.apply(cbD=aJ,aEP.sItemValue);
},

onbeforeclose:function(){

if(this.option("sId")==zu)
{
if(!cXv&&(cbD==null||'|spammail|new|newtag|autotag|'.indexOf(cbD)<0))
{
try
{

buy.checked=false;
var bkS=QMMailList.getCBInfo(az);
QMMailList.selectedUI(bkS);
}
catch(e)
{
}
}
cbD=null;
}
return true;
},

onload:function(){
var mC=this;
if(mC.option("sId")==zu)
{
var	cX=parseInt(mC.option("nHeight")),
dp=parseInt(mC.option("nWidth")),
cI=calcAdjPos([KK,Lx,KK,Lx],dp,cX,az,1);
mC.option("nX",cI[3]).option("nY",cI[0]);
}
}
});

if(aE.mnFolderType==0)
{
var agX=bJ.oMail.length;
ek.itemOption("rmalltag","bDisplay",agX);
ek.itemOption("deltaghr","bDisplay",agX);
}
}




(function()
{
function dnL()
{
var ah=getTop();
ah.loadJsFileToTop(["$js_path$qqplus_kernel131cca.js","$js_path$qqplus_ui1341aa.js"]);
}






function eXH(dE,eos)
{
var aqT=S("qqplus_panel",getTop());
if(aqT)
{
var diq=getUserCookie("wimrefreshrun");
if(eos&&diq)
{
dE=diq=="1"?"":"ready";
}

if(dE=="ready")
{
return dJb("stop",{title:"\u70B9\u51FB\u767B\u5F55\u90AE\u7BB1\u804A\u5929\u529F\u80FD"});
}

dnL();
dJb("load",{title:"\u6B63\u5728\u52A0\u8F7D\u90AE\u7BB1\u804A\u5929..."});

waitFor(
function()
{
return window.QQPlusUI&&window.QQPlusKernel;
},
function(bz)
{
if(bz)
{
QQPlusStartUp(getUin(),aqT);
}
else
{
dJb("stop",{title:"\u52A0\u8F7D\u90AE\u7BB1\u804A\u5929\u529F\u80FD\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D"});
}
getMainWin().CheckQQPlusState&&getMainWin().CheckQQPlusState();
}
);
}
}




function fip()
{
getTop().QQPlusUI&&getTop().QQPlusUI.stopQQPlus();
getMainWin().CheckQQPlusState&&getMainWin().CheckQQPlusState();
}





function ffH(cYh)
{
confirmBox(
{
title:"\u90AE\u7BB1\u804A\u5929\u63D0\u793A",
msg:cYh=="login"?"\u60A8\u786E\u5B9A\u8981\u767B\u5F55\u90AE\u7BB1\u804A\u5929\uFF1F":"\u60A8\u786E\u5B9A\u8981\u9000\u51FA\u90AE\u7BB1\u804A\u5929\uFF1F",
enableRecord:true,
defaultChecked:getTop().getGlobalVarValue("DEF_QQPLUSAUTOLOGIN"),
recordInfo:"\u8FDB\u5165\u90AE\u7BB1\u81EA\u52A8\u767B\u5F55",
onreturn:function(bz,cbc)
{
if(!bz)
{
return;
}

var ehW=getTop().getGlobalVarValue("DEF_QQPLUSAUTOLOGIN");
if(ehW!=cbc)
{
getTop().setGlobalVarValue("DEF_QQPLUSAUTOLOGIN",cbc);
(new QMAjax("/cgi-bin/setting1","POST"))
.send(
T('sid=$sid$&Fun=submit&qqplus=$qqplus$').replace(
{
sid:getSid(),
qqplus:cbc?1:0
}
)
);
var cF=getMainWin();
if(cF.location.href.indexOf("/cgi-bin/setting1")>=0&&S("qqplus",cF))
{
S("qqplus",cF).checked=cbc?true:false;
}
}

(cYh=="login"?eXH:fip)();
}
}
);
}







function dJb(gS,aI)
{
var aqT=S("qqplus_panel",getTop());
if(aqT)
{
switch(gS)
{
case"stop":
aqT.innerHTML=T([
'<a nocheck="true" style="font-size:12px;font-weight:normal;padding:2px;" class="onlineman" ',
'title="$title$">',
'<span title="$title$" class="ico_offline" style="margin:0px 3px 0 4px;" align="absmiddle"></span>',
'</a>']).replace(
{
images_path:getPath("image"),
title:aI.title
}
);
aqT.onclick=function()
{
ffH("login");
};
break;
case"custom":
aqT.innerHTML=aI.html;
aqT.onclick=aI.onclick;
break;
case"load":
default:
aqT.innerHTML=T([
'<img src="$images_path$ico_loading312fb20.gif" title="$title$" ',
'align="absmiddle" style="width:16px;height:16px;margin-left:10px;" />'])
.replace(
{
images_path:getPath("image"),
title:aI.title
}
);
aqT.onclick=function()
{
};
}

if(aqT.firstChild)
{
aqT.title=aqT.firstChild.title;
}


arguments.callee.sState=gS;

return true;
}
}





function fnj()
{
try
{
if((new ActiveXObject("TimwpDll.TimwpCheck")).CheckQQRunning())
{
var cfq=new ActiveXObject("SSOAxCtrlForPTLogin.SSOForPTLogin"),
aD=cfq.CreateTXSSOData();
cfq.InitSSOFPTCtrl(0,aD);
var emI=cfq.CreateTXSSOData(),
cUF=cfq.DoOperation(1,emI).GetArray("PTALIST"),
aF=cUF.GetSize();
for(var aN=0;aN<aF;aN++)
{
var zl=cUF.GetData(aN).GetDWord("dwSSO_Account_dwAccountUin");
if(zl==getUin())
{
return true;
}
}
}
}
catch(e)
{
}
return false;
}




function fQN(dZt)
{
if(!dZt&&fnj())
{

return false;
}
dnL();
waitFor(
function()
{
return window.QQPlusUI&&window.QQPlusKernel;
},
function(bz)
{
if(bz)
{
QQPlusMail.init(getUin());
}
}
);
}


window.startUpQQPlus=eXH;
window.showQQPlusInfo=dJb;
window.confirmQQPlusOpreate=ffH;
window.startUpQQPlusMail=fQN;

})();





(function(ao)
{

var cQW=getTop().g_oGroupMailAddr={







};





function fNc(aei,cj)
{
if(!aei||aei.indexOf("@g.qq.com")==-1)
{
return null;
}
if(cQW[aei]&&cQW[aei].length>0)
{

callBack(cj,[cQW[aei]]);
return cQW[aei];
}
var bi=["/cgi-bin/addr_listall?sid=",getSid(),"&t=mail_group&category=mailgroup&groupaddr=",aei].join('');
QMAjax.send(bi,
{
method:"GET",
content:null,
onload:function(bz,bU,fj)
{
var agw=evalValue(bU);
if(agw.members)
{
callBack(cj,[cQW[aei]=agw.members]);
}
}
}
);
return null;
}

var eiz={

},
eRj="ggoupmember";
ao.showGGoupMember=function(aei,as)
{
var afa=as.ownerDocument,
az=afa.parentWindow||afa.defaultView;
eiz[aei]=1;
fNc(aei,function(eUr)
{
if(eiz[aei])
{

var cI=calcPos(as),
wJ=[
{
nHeight:35,
sItemValue:
'<div class="bold black"><img title="Group messages" src="/zh_CN/htmledition/images/spacer.gif" class="lm_groupAutoIcon" style="margin-left:0;"/>'+aei.replace(/@.*/,"")+'  group members</div>'
},
{
nHeight:8,
sItemValue:'<div style="background:#CCC; height:1px; overflow:hidden; margin:0 15px 0 0;"></div>'
}
];
for(var i=0,aF=eUr.length;i<aF;i++)
{
wJ.push({
sItemValue:T('<div style="width:100px" class="left txtflow">$sNickName$</div><div class="txtflow">$sEmail$</div>').replace(eUr[i])
});
}
wJ.push({
nHeight:10,
sItemValue:'<div style="height:5px;overflow:hidden;"></div>'
});

as.title="";

var zu=eRj+aei;
ek=QMMenu(zu);
if(!ek||!ek.isShow())
{
hideMenuEvent();
new QMMenu({
sClassName:"mailgroup_member",
oEmbedWin:az,
sId:zu,
nX:cI[3],
nY:cI[2],
nItemHeight:21,
bAnimation:false,
nWidth:300,
nMaxItemView:12,
oItems:wJ
});
}
};
}
);
};
ao.hideGGoupMember=function(aei)
{
var zu=eRj+aei,
ek=QMMenu(zu);
ek&&ek.autoClose();
eiz[aei]=0;
};

ao.clearGroupMailAddr=function(aei)
{
if(aei)
{
delete cQW[aei]
}
else
{
getTop().g_oGroupMailAddr={};
}
};
})(window);




function uploadSvrSpeedTest()
{
var eMD=[

['upload.mail.qq.com'],

['119.147.193.107','119.147.193.109','119.147.193.95'],

['112.95.234.65','112.95.234.66','112.90.142.165'],

['222.202.96.242'],

['112.95.241.169']
],
aL=[],
eFT=50;

function cXk(dMU)
{
var bGL=dMU&&dMU[(parseInt(Math.random()*1000))%dMU.length];
if(bGL)
{
var aKT=new Date().valueOf(),
Bk=unikey(),
uX="init",
nq,
mj=function()
{
if(uX=="init")
{
createForm(
{
oWin:window,
sMethod:"POST",
sAction:"http://"+bGL+"/cgi-bin/uploadfile",
sTarget:Bk
},
{
sid:getSid(),
lang:"uft8",
ssl_edition:getCookie("ssl_edition"),
skey:getCookie("skey"),
uin:getUin(),
qm_sk:getCookie("qm_sk"),
mode:"file",
newflash:1,
UploadFile:(new Array(eFT*1024+1)).join("0")
}).submit();

uX="posting";
}
else
{
clearTimeout(nq);
aL.push(
uX=="timeout"?-1:(eFT/(new Date().valueOf()-aKT)*1000).toFixed(0)
);
removeSelf(S(Bk,window));
cXk(eMD.shift());
}
};

createBlankIframe(window,
{
id:Bk,
onload:mj
});

nq=setTimeout(function()
{
uX="timeout";
mj();
},30000);
}
else
{
ossLog("delay","all","stat=uploadsvrspeed&speeds="+aL.join(","));
}
}

cXk(eMD.shift());
}





function all_defer_js(){}
