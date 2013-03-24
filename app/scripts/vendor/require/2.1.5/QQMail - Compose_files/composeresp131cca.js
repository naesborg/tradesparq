var ComposeResp=(function(A,aR)
{
var ah=getTop(),

fvM=ah.TE("/cgi-bin/mailmicromsg?sid=$sid$&t=mailmicromsg.json&action=compose$@$for($oUins$)$@$&uin=$_this_$$@$endfor$@$"),

dEc=ah.TE([
'<li id="wxaddritem_$sIdx$">',
'<table width="500" cellspacing="0" cellpadding="0" border="0" style="line-height:20px">',
'<tbody>',
'<tr>',
'<td width="1%" valign="top" nowrap="nowrap" class="addrtitle">&#8226;&nbsp;</td>',
'<td class="addrtitle">',
'<div style="width:550px;word-wrap:break-word;word-break:break-all">',
'<span id="li_$sIdx$" class="black"><span id="addressname_0">$sName$</span>&lt;<span id="address_0">$sAddr$</span>&gt;</span>&nbsp;&nbsp;&nbsp;',
'$@$if($sAid$ > 0)$@$',
'<a id="a_$sIdx$" href="javascript:void(0)" txt="Edit contacts info" onclick="Opr(\'$sIdx$\',0,\'new\')">Edit contacts info</a>',
'$@$else$@$',
'<nobr>(<span id="saveAddrPanel_$sIdx$">',
'<span class="txt_red">\u6B64\u8054\u7CFB\u4EBA\u672A\u4FDD\u5B58</span>\uFF0C\u60A8\u53EF\u4EE5<a id="a_$sIdx$" href="javascript:void(0)" txt="\u4FEE\u6539\u5E76\u4FDD\u5B58" onclick="Opr(\'$sIdx$\',0,\'new\')">\u4FEE\u6539\u5E76\u4FDD\u5B58</a>',
'</span>)</nobr>',
'$@$endif$@$',
'</div>',
'</td>',
'</tr>',
'</tbody>',
'</table>',
'<div class="bd smscontent di" id="smsdiv_$sAid$" style="display:none; padding-top:10px;"></div>',
'<iframe name="if" id="edit_$sIdx$" idx="$sIdx$" class="bd di" style="display:none;height:400px" frameborder="0" scrolling=no src="javascript:\'<body>Loading...</body>\';"></iframe>',
'</li>'
]),
fFi=ah.TE([
'$@$if($ismmuser$ == 0)$@$',
'<div class="settingtable qqshowbd" style="margin:8px 0 15px 71px;width:580px;">',
'<div class="" style="padding:15px;">',
'<img class="left ico_wxlogo" src="$imgpath$spacer.gif"/>',
'<div style="margin-left:58px;">',
'<div class="b_size">\u9664\u4E86\u53D1\u90AE\u4EF6\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u548C\u4ED6(\u4EEC)\u5728\u5FAE\u4FE1\u4E0A\u5BF9\u8BB2\u3002</div>',
'<div style="margin-top:7px;">',
'<a target="_blank" href="http://weixin.qq.com/cgi-bin/readtemplate?check=false&t=weixin_redirect&from=100&stype=1000183" class="button_gray_s" style="margin: 0pt 10px 0pt 0;">\u4F53\u9A8C\u5FAE\u4FE1</a>',
'</div>',
'</div>',
'</div>',
'</div>',
'$@$else if($ismmuser$ == 1)$@$',
'<div class="settingtable qqshowbd receiverPannel" style="$@$if($nOpenWx$==0 && $nUnOpenWx$==0 && $nGroup$==0)$@$display:none;$@$endif$@$">',
'<div class="receiverBox" style="$@$if($nOpenWx$==0 && $nUnOpenWx$==0)$@$display:none;$@$endif$@$">',
'<div class="intro" style="$@$if($nOpenWx$==0 && $nUnOpenWx$==0)$@$display:none;$@$endif$@$">',
'<img class="left ico_wxlogo" src="$imgpath$spacer.gif"/>',
'$@$if($nOpenWx$>1 || $nUnOpenWx$ > 1)$@$',
'<p>\u9664\u4E86\u53D1\u90AE\u4EF6\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u548C\u4ED6\u4EEC\u5728\u5FAE\u4FE1\u4E0A\u5BF9\u8BB2\u3002</p>',
'$@$else$@$',
'<p>\u9664\u4E86\u53D1\u90AE\u4EF6\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u548C\u4ED6\u5728\u5FAE\u4FE1\u4E0A\u5BF9\u8BB2\u3002</p>',
'$@$endif$@$',

'<div class="clear"></div>',
'</div>',


'$@$if($oFrdWXLst.length$ > 0)$@$',
'<div class="wx_invite_pannel">',
'<div class="addrtitle" style="">\u60A8\u7684\u5FAE\u4FE1\u597D\u53CB\uFF1A</div>',
'<div class="receiverList">',
'<ul class="addrname wx_invite_list">',
'$@$for($oFrdWXLst$)$@$',
dEc,
'$@$endfor$@$',
'</ul>',
'</div>',
'</div>',
'$@$if($oNotFrdWXLst.length$ > 0 || $oNotWXLst.length$ > 0 || $oGrpLst.length$ > 0)$@$',
'<div class="qqshowbd" style="margin:15px 0;border-width:1px 0 1px 0;border-bottom:1px solid #f4f4f4;"></div>',
'$@$endif$@$',
'$@$endif$@$',


'$@$if($oNotFrdWXLst.length$ > 0)$@$',
'<div class="wx_invite_pannel" id="wxaddfriend">',
'<div class="addrtitle" >\u60A8\u53EF\u4EE5\u6DFB\u52A0\u4ED6$@$if($oNotFrdWXLst.length$ > 1)$@$\u4EEC$@$endif$@$\u4E3A\u5FAE\u4FE1\u597D\u53CB\uFF1A</div>',
'<div class="receiverList">',
'<ul class="addrname wx_invite_list">',
'$@$for($oNotFrdWXLst$)$@$',
dEc,
'$@$endfor$@$',
'</ul>',
'<div class="addrname wxinviteScuessPanel">',
'<img align="absmiddle" style="margin-top:-3px;margin-top:0\9;margin-right:5px;" class="icon_finish_m" src="$imgpath$spacer.gif"/>',

'<span class="addrtitle">',
'$@$if($oNotFrdWXLst.length$ > 1)$@$',
'\u6DFB\u52A0\u5FAE\u4FE1\u597D\u53CB\u6210\u529F\uFF0C\u5FEB\u53BB\u5FAE\u4FE1\u8054\u7CFB\u4ED6\u4EEC\u5427',
'$@$else$@$',
'\u6DFB\u52A0\u5FAE\u4FE1\u597D\u53CB\u6210\u529F\uFF0C\u5FEB\u53BB\u5FAE\u4FE1\u8054\u7CFB\u4ED6\u5427',
'$@$endif$@$',
'</span>',
'</div>',
'<div class="addrname wxinviteFailedPanel">',
'<img align="absmiddle" style="margin-top:-3px;margin-top:0\9;margin-right:5px;" class="icon_error_m" src="$imgpath$spacer.gif"/>',
'<span class="">\u6DFB\u52A0\u5FAE\u4FE1\u597D\u53CB\u5931\u8D25\uFF0C<a class="underline" href="" onclick="return addmicromail(\'friend\', \'$sUins$\');">\u8BF7\u91CD\u8BD5</a></span>',
'</div>',
'<div style="" class="addOpera">',
'<a class="button_gray_l" style="width:107px" onclick="return addmicromail(\'friend\', \'$sUins$\');">\u6DFB\u52A0\u4E3A\u5FAE\u4FE1\u597D\u53CB</a>',
'<input type="button" class="btn" disabled value="Contacts are adding..." style="width:80px;" />',
'</div>',
'</div>',
'</div>',
'$@$if($oNotWXLst.length$ > 0 || $oGrpLst.length$ > 0)$@$',
'<div class="qqshowbd" style="margin:15px 0;border-width:1px 0 1px 0;border-bottom:1px solid #f4f4f4;"></div>',
'$@$endif$@$',
'$@$endif$@$',


'$@$if($oNotWXLst.length$ > 0)$@$',
'<div class="wx_invite_pannel" id="wxinvitepannel">',
'<div class="addrtitle" style="">\u60A8\u53EF\u4EE5\u9080\u8BF7\u4EE5\u4E0B\u6536\u4EF6\u4EBA\u4F7F\u7528\u5FAE\u4FE1\uFF1A</div>',
'<div class="receiverList" >',
'<ul class="addrname wx_invite_list">',
'$@$for($oNotWXLst$)$@$',
dEc,
'$@$endfor$@$',
'</ul>',
'<div class="addrname wxinviteScuessPanel">',
'<img align="absmiddle" style="margin-top:-3px;margin-top:0\9;margin-right:5px;" class="icon_finish_m" src="$imgpath$spacer.gif"><span class="addrtitle">Send invitation succeed.!</span>',
'</div>',
'<div class="addrname wxinviteFailedPanel">',
'<img align="absmiddle" style="margin-top:-3px;margin-top:0\9;margin-right:5px;" class="icon_error_m" src="$imgpath$spacer.gif">',
'<span class="">Send invitation fail,<a class="underline" href="" onclick="return addmicromail(\'invite\', \'$sAddrs$\');"> please try again</a></span>',
'</div>',
'<div class="addOpera">',
'<a target="_blank"  onclick="return addmicromail(\'invite\', \'$sAddrs$\');" href="/cgi-bin/getqqfriend?sid=$sid$&t=wx_invite&from=4&action=ivt" class="button_gray_l">',

'$@$if($oNotWXLst.length$ > 1)$@$',
'Send invitation to them',
'$@$else$@$',
'Send invitation to him',
'$@$endif$@$',
'</a>',
'<input type="button" class="btn" disabled value="Contacts are adding..." style="width:80px;" />',
'</div>',
'</div>',
'</div>',
'$@$if($oGrpLst.length$ > 0)$@$',
'<div class="qqshowbd" style="margin:15px 0;border-width:1px 0 1px 0;border-bottom:1px solid #f4f4f4;"></div>',
'$@$endif$@$',
'$@$endif$@$',


'$@$if($oGrpLst.length$ > 0)$@$',
'<div class="wx_invite_pannel" style="padding:13px 15px 10px" id="wxinvitepannel">',
'<div class="addrtitle">Group message:</div>',
'<div class="receiverList" >',
'<ul class="addrname wx_invite_list">',
'$@$for($oGrpLst$)$@$',
dEc,
'$@$endfor$@$',
'</ul>',
'</div>',
'</div>',
'$@$endif$@$',
'</div>',
'</div>',
'$@$endif$@$'
]),
jl=ah.inherit("_ComPOse_REsp_",Object,function(aB)
{
return({
evt_:
{
bindHandler:function(ak,ag)
{

}
},

$_constructor_:function(aj)
{

},
fGU:function(lF,ari)
{
var ae=this,
bsn=function(Xf)
{
Xf=typeof(Xf)=="string"?
A.S(Xf):Xf;

A.E(lF,function(nz)
{
var btb={



"ck":"click",
"md":"mousedown"
}[nz];
btb&&A.addEvent(Xf,btb,function(ag)
{
ae.fsd(Xf,ag,nz);
}
);
}
);
};

if(typeof(ari)=="string")
{
ari=A.S(ari);
}

if(ari.nodeType)
{
bsn(ari);
}
else
{
A.E(ari,function(Xf)
{
bsn(Xf);
}
);
}
},
fsd:function(dhE,ag,nz)
{
var ae=this,
YH=A.getEventTarget(ag),
aT=YH.ownerDocument,
jB,fz,aK;

while(YH&&A.isObjContainTarget(dhE,YH))
{
jB=A.attr(YH,nz);

if(jB)
{
fz=jB;
aK=YH;
}

if(fz)
{
if(typeof(ae.evt_[fz])=="function")
{
ae.evt_[fz].apply(ae,[aK,ag]);
break;
}
}
YH=YH.parentNode;
}
},
frR:function(aXR,Xb)
{
var bBI=aXR.s,
fCv=aXR.cginame,
cF=ah.getMainWin();

ah.initPageEvent(cF);

bBI!="group_quick"&&bBI!="group_vote"
&&ah.reloadLeftWin();

Xb.oUploadSize
&&ah.goUserInfo.set("UPLOADEXPIRE",Xb.oUploadSize.nSize?Xb.oUploadSize.sExpire:"");

(bBI=="comm"||bBI=="card"||bBI=="postcard")
&&ah.recodeComposeStatus(1,Xb.sMailId);

Xb.sRefreshBirthInf=="1"
&&ah.reloadFrm(ah.F("addrToday"));


fCv=="groupmail_send"&&ah.QMDialog("composeExitAlert","isShow")
&&ah.QMDialog("","close");

if(cF.setNeedCloseConform)
{

cF.ErrorCallBack=function(){};
}
},
fOO:function(aXR,Xb)
{
var bBI=aXR.s,
cF=ah.getMainWin();
debug("1BizSession:"+bBI);






switch(bBI)
{
case"group_quick":
ah.pasteHTML(Xb.sGroupHTML,"contentDiv");
ah.showInfo("Your comment has been posted. ");
cF.ErrorCallBack();
cF.revertReadMailGroupText();
cF.clearRdCache();
break;
case"conv_quick":
ah.showInfo("Your message has been sent. ");
A.insertHTML(A.S("submail_start_div"),"afterEnd",Xb.sConvHTML);
if(cF.quickSendFinish)
{
cF.quickSendFinish(Xb.sReAndFwMailid,Xb.sMailId);
cF.clearRdCache();
cF.QMConvMail.oneMailReady(
{
mailid:Xb.sMailId
}
);
}
break;
case"comm_quick":
ah.showInfo("Your message has been sent. ");
if(cF.quickSendFinish)
{
cF.quickSendFinish(Xb.sReAndFwMailid,Xb.sMailId);
}
break;
case"voice_quick":
if(cF.location.href.indexOf('/cgi-bin/today?')!=-1)
{
ah.showInfo("Say hello to receiver");
cF.ResetHello();
}
break;
case"rss_quick":
var hk=cF.location.href;
if(hk.indexOf('reader_detail')!=-1||hk.indexOf('reader_comment')!=-1)
{
ah.showInfo("Your reply message has been sent. ");
ah.reloadFrm(cF);
}
break;
case"group_vote":
if(cF.location.href.indexOf('t=readmail')!=-1)
{
ah.showInfo("You have voted. ");
cF.QMReadMail.clearCache();
ah.setTimeout("getTop().goUrlMainFrm( getTop().strReplace(getTop().getMainWin().location.href,'&refresh_maillist=true','')+'&refresh_maillist=true' );",500);
}
break;
case"gstate":
if(Xb.sOper2=="setnewno")
{
ah.showInfo("mark as unread when got new reply enabled");
}
else if(Xb.sOper2=="setnewyes")
{
ah.showInfo("mark as unread when got new reply disabled");
}
else if(Xb.sOper=="submit"&&Xb.sBan=="false")
{
ah.showInfo("New message alert with QQ enabled ");
}
else if(Xb.sOper=="submit")
{
ah.showInfo("New message alert with QQ disabled ");
}
else
{
ah.showInfo("Setting saved");
}


if(Xb.sFrom=="setting")
{
ah.goUrlMainFrm(A.T("/cgi-bin/grouplist?sid=$sid$&t=setting_group&oper=list").replace({sid:ah.getSid()}),false,true);
}
else
{
var fwc=A.T('/cgi-bin/mail_list?t=$t$&sid=$sid$&folderid=8&groupid=$groupid$'),
tk='mail_list_group',
eSH=ah.S('folder_8'),
ffp=eSH&&eSH.getAttribute('href');
if(ffp&&ffp.indexOf('mail_list_groupindex')>0)
{
tk='mail_list_groupsms';
}
ah.goUrlMainFrm(fwc.replace({t:tk,sid:ah.getSid(),groupid:+Xb.sGid}),false,true);
}
ah.rdVer.batch("@");
break;
case"reject":
ah.showInfo(Xb.sReject=="yes"?"Messages from this group will be rejected. ":"You will receive messages from this group.");
ah.rdVer.batch("@");

if(Xb.sFrom=="setting")
{
ah.goUrlMainFrm(A.T("/cgi-bin/grouplist?sid=$sid$&t=setting_group&oper=list").replace({sid:ah.getSid()}),false,true);
}
else if(Xb.sTag=="compose")
{
ah.goUrlMainFrm(A.T("/cgi-bin/grouplist?sid=$sid$&t=compose_group&gid=$gid$&s=from_mail_list$newwin$").replace({
sid:ah.getSid(),
gid:Xb.sRejectGid,
newwin:ah.bnewwin?"&newwin=true":""
}),false,true);
}
else
{
ah.reloadFrmLeftMain(false,true)
}
break;
case"card_qq":
ah.QMDialog("GreetingCard","close");
ah.showInfo("Sent succeed");
ah.disableAll(false);

if(Xb.sMK=="birth")
{
cF.location.href=A.T('/cgi-bin/cardlist?t=card_qq&sid=$sid$&param=$param$&ListType=Cards&limit=18&Cate1Idx=listall&loc=cardlist,card,,1').replace({
sid:ah.getSid(),
sParam:Xb.sParam
});
}
break;
case"reject_from_readmail":
var wz=Xb.sGid;
ah.showInfo(Xb.sReject=="yes"?"Messages from this group will be rejected. ":"You will receive messages from this group. ");
if(Xb.sReject=="yes")
{
A.S("reject_note").innerHTML="&nbsp;&nbsp;<span  class='addrtitle'>Messages from this group are rejected. &nbsp;<a href='/cgi-bin/grouplist?oper=reject&sid=$sid$&reject=no&gid="+wz+"&t=compose_send&s=reject_from_readmail' target='actionFrame'>[Receive Group Messages]</a></span>";
}
else
{
A.S("reject_note").innerHTML="&nbsp;&nbsp;<a href='/cgi-bin/grouplist?oper=reject&sid=$sid$&reject=yes&gid="+wz+"&t=compose_send&s=reject_from_readmail' target='actionFrame'>Reject Messages from this Group</a>";
}
cF.clearRdCache();
break;
default:
if(this.au.sType!="save")
{


this.fFb(Xb.sHtml,function(ao)
{
this.fjF(aXR,Xb,ao);
this.fkQ(aXR,Xb,ao);
this.frZ();
},this.au.sModule=="note");

this.fGU(["ck","md"],cF.document.body);
}
else
{

ah.afterAutoSave("",Xb.sMailId,[ah.formatDate(new Date,"%hh%:%mm%","%")," ",ah.gsMsgSaveOk].join(""));
}
}
},
fIe:function(Xb)
{
var eya=A.S("weixinAD"),
bWF=Xb.oToObj,
bC=bWF&&bWF.oItems,
kI=ah.getSid(),
gJ=ah.getUin(),
bi="",
cJC=[];

bC&&ah.E(bC,function(bF)
{
bF.isremote==0&&bF.isgroup==0&&
bF.sUin&&bF.sUin!=gJ&&
cJC.push(bF.sUin);
}
);

bi=fvM.replace({sid:kI,oUins:cJC});
ah.QMAjax.send(bi,
{
method:"GET",
onload:function(bz,bU)
{
if(bz)
{
var cU=evalValue(bU),
eVl=cJC.length,
eBu=0,
ffS=bWF.oFrdWXLst=[],
fUW=bWF.oNotFrdWXLst=[],
eEG=bWF.oNotWXLst=[],
eQD="",
LK="";

ah.E(bC,function(bF)
{
if(bF)
{
var eaS=cU.oUins[bF.sUin];
if(eaS)
{

if(eaS.isOpenWx==0)
{
eVl--;
eBu++;
LK+=["&alia=",bF.sAddr].join("");
eEG.push(bF);
}

else if(eaS.isFriend==0)
{
eQD+=["&mmuin=",bF.sUin].join("");
fUW.push(bF);
}

else
{
ffS.push(bF);
}
}

else if(bF.isremote==1)
{
eBu++;
eEG.push(bF);
}
}
});
bWF.ismmuser=cU.ismmuser;
bWF.nOpenWx=eVl;
bWF.nUnOpenWx=eBu;
bWF.oGrpLst.pop();
if(eya)
{
eya.innerHTML=fFi.replace(
ah.extend({
sUins:eQD,
sAddrs:LK,
imgpath:ah.getPath('image'),
sid:ah.getSid()
},bWF)
);
eya.style.display="block";
}
}
}
});
},
fjF:function(aXR,Xb)
{
var bBI=aXR.s;


try
{
if(Xb.sSelfDef!="-1"&&!Xb.sSelfDef||Xb.sAutoSave=="1")
{

ah.goUserInfo.reset();
}

if(Xb.sBackUrl.search("reader_detail")!=-1||Xb.sBackUrl.search("reader_list")!=-1)
{
if(bBI=="group")
{
A.S("btnrssbackl_group").style.display="block";
A.S("btnbackl_group").style.display="none";
A.S("btnwriteagn_group").style.display="none";
}
A.S("sendinfomsg").innerHTML=Xb.sIncludeQzone?"The message has been posted to Qzone as a message. ":"The message has been forwarded to your friends as a message. ";
A.S("rssbacklist").style.display="block";
A.S("backlist").style.display="none";
A.S("backReceive").style.display="none";

A.S("btnbackr").disable=false;
A.S("btnagainr").disable=false;
A.S("btnbackl").disable=false;
A.S("btnagainl").disable=false;
A.S("btnrssbackl").disable=true;
if(ah.bnewwin)
{
A.S("btnrssbackl").value="Close New Window";
}
}
else if(!ah.bnewwin)
{
A.S("rssbacklist").style.display="none";
A.S("backlist").style.display="block";
A.S("backReceive").style.display="none";

A.S("btnbackr").disable=true;
A.S("btnagainr").disable=true;
A.S("btnbackl").disable=false;
A.S("btnagainl").disable=false;
A.S("btnrssbackl").disable=false;
}
else
{
A.S("entermail").style.display="";
A.S("rssbacklist").style.display="none";
A.S("backlist").style.display="none";
A.S("backReceive").style.display="";

A.S("btnbackr").disable=false;
A.S("btnagainr").disable=false;
A.S("btnbackl").disable=true;
A.S("btnagainl").disable=true;
A.S("btnrssbackl").disable=false;
}
}
catch(e)
{
}
},
fkQ:function(aXR,Xb,ao)
{
var cF=ah.getMainWin(),
etx=A.GelTags("script",ao.document.body),
dv=Xb.sHtml;



ao.gnScriptIdx=-1;


ao.document.write=function(cL)
{
etx[ao.gnScriptIdx]
&&A.insertHTML(etx[ao.gnScriptIdx],"afterEnd",cL)
};

A.E(etx,function(fhP,tn)
{
ao.gnScriptIdx=tn;
try
{
ah.globalEval(fhP.innerHTML,cF);
}
catch(e)
{
debug(e);
}
});
},
frZ:function()
{
var cF=ah.getMainWin();



cF.document.body.onbeforeunload=null;

cF.clearAutoSave();
},
fFb:function(cL,jk,fhn)
{
var ae=this;

if(cL)
{
if(fhn)
{
ah.createBlankIframe(ah,
{
id:"notehandleFrame",
onload:function()
{
var az=this.contentWindow;
az.document.body.innerHTML="&nbsp;"+cL;
jk&&jk.call(ae,az)
}
}
);
}
else
{
ah.getMainWin().document.body.innerHTML="&nbsp;"+cL;
setTimeout(function(){
jk&&jk.call(ae,ah.getMainWin())
});
}
}
},
handle:function(aj)
{
this.au=aj;

aj.fComplete
&&aj.fComplete(aj);

try
{
this.frR(aj.oPostData,aj.oRespData);
this.fOO(aj.oPostData,aj.oRespData);

aj.oPostData.s=="comm"&&this.fIe(aj.oRespData);
}
catch(e)
{
aj.fReportError
&&aj.fReportError(aj)
}
}
});
});

return new jl();
})(function()
{
var ah=getTop();

return{
S:function(aJ)
{
return ah.S(aJ,ah.getMainWin())
},
E:ah.E,
T:ah.T,
TE:ah.TE,
attr:ah.attr,
insertHTML:ah.insertHTML,
GelTags:ah.GelTags,
addEvent:ah.addEvent,
getEventTarget:ah.getEventTarget,
isObjContainTarget:ah.isObjContainTarget
};
}());