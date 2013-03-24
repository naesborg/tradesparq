(function(HZ){
var eCf=T("/cgi-bin/reader_article_list?sid=$sid$&t=rss_list&s=personal&classtype=onefeed&feed=3_$uin$");
function cEU(bZ)
{
bZ=bZ||"";
if(bZ.length>25)
{
bZ=[bZ.substr(0,25)+"<wbr/>"+cEU(bZ.substr(25))].join("");
}
return bZ;
}

function deO(Pi)
{
return Pi==getTop().g_admuin;
}

function dvK(pG)
{
return pG=="10000@qq.com"||(pG.toLowerCase().indexOf("postmaster@")==0);
}

function ehx(pG)
{
return pG.indexOf("@g.qq.com")>0;
}

var cE,dz;
var dz=function(ao)
{
this.bM=ao;

this.Az;
this.biC;
this.bWo;
this.aQr;
this.bCA;
this.bri;
this.bWM;

this.bFO;

this.bVO;

this.Gp;

this.dvA;

ci={}
}

cE=dz.prototype;
dz.ci={};

dz.ci.elm="_QmProfileTipsInst_";

dz.ci.erH=TE([
'<div class="profile_wraper $@$if($role$=="xy" || $role$=="dr" || $role$=="qz")$@$ profile_min $@$endif$@$">',
'<div class="left" style="width:43px; padding-right:5px; $@$if($role$=="ml"||$role$=="qz")$@$padding:0 6px 9px 10px;$@$endif$@$">',
'<div class="icon_user" style="background:#fff; float:none; width:40px; height:40px; overflow:hidden; display:block; margin-left:0px;">',
'<img src="$icon$" title="$title.DATA$" width="40" >',
'</div>',
'</div>',











'<div class="left gray" style="width:230px; padding-top:2px; *margin-left:-2px;" >',
'<div class="green bold b_size">$dispname$',
'$@$if(($role$=="xy"||$role$=="dr"||$role$=="qz")&&$home$)$@$',
'<a target="_blank" href="$home$" class="others_home" title="',
'$@$if($role$=="xy")$@$',
'\u8BBF\u95EE$dispname$\u7684\u670B\u53CB\u7F51\u4E2A\u4EBA\u4E3B\u9875',
'$@$else if($role$=="dr")$@$',
'\u8BBF\u95EE$dispname$\u7684\u57CE\u5E02\u8FBE\u4EBA\u4E2A\u4EBA\u4E3B\u9875',
'$@$else$@$',
'\u8BBF\u95EE$dispname$\u7684QQ\u7A7A\u95F4\u4E2A\u4EBA\u4E3B\u9875',
'$@$endif$@$',
'"><span class="ico_$role$"></span></a>',



'$@$else if($qqfriend$)$@$',
'<a href="http://user.qzone.qq.com/$qqfriend$" ck="iconHandle" class="others_home" title="\u8BBF\u95EE\u201C$dispname$\u201D\u7684QQ\u7A7A\u95F4\u4E2A\u4EBA\u4E3B\u9875" target="_blank">',
'<span class="ico_qz"></span>',
'</a>',
'$@$endif$@$',
'</div>',
'<div style="margin:5px 0;" class="graytext">',
'$@$if($role$=="ml"||$role$=="qz")$@$',
'<span>$dispemail$</span>',
'$@$else if($role$=="xy")$@$',
'<span>\u6765\u81EA\u670B\u53CB\u7F51</span>',
'$@$else if($role$=="dr")$@$',
'<span>\u6765\u81EA\u57CE\u5E02\u8FBE\u4EBA</span>',
'$@$endif$@$',
'<a  style="margin-left:18px;" href="javascript:;" onclick=\'getTop().QMProfileTips.refuse("$dispname$", "$email$", "$mailid$")\'>Reject</a></div>',
'</div>',
'$@$if($role$=="ml" || $role$=="qz")$@$',
'<div class="personOperate">',
'<a class="pointer $@$if(!$bmail$)$@$graytext"$@$else$@$" href="javascript:;" onclick=\'getTop().QMProfileTips.oper("mailTo","$_id$","$email$", "$showinfo$", "$jsname$")\' $@$endif$@$ $@$if($showinfo$==2)$@$ style="border-left:none;"$@$endif$@$ $@$if($btnnum$==2||$btnnum$==0)$@$ style="width:159px; border-left:none;" $@$endif$@$>Send message</a>',
'<a class="pointer $@$if(!$bsms$||$bansms$)$@$graytext"$@$else$@$" href="javascript:;" onclick=\'getTop().QMProfileTips.oper("smsTo","$_id$","$email$", "$showinfo$", "$jsname$")\' $@$endif$@$ $@$if($bansms$)$@$title="\u53EA\u80FD\u5411\u5173\u6CE8\u8005\u53D1\u9001\u77ED\u6D88\u606F"$@$endif$@$ style="$@$if($showinfo$==2)$@$ border-right:none; $@$endif$@$ $@$if($btnnum$==2||$btnnum$==0)$@$ width:159px;border-right:none; $@$endif$@$ _padding-top:6px; _padding-bottom:5px; "><img src="$images_path$spacer12fb20.gif" class="icon_sms"/>',
'\u53D1\u77ED\u6D88\u606F</a>',
'</div>',
'$@$else$@$',
'<div class="clr"></div>',
'$@$endif$@$',
'<div>'

]);
dz.ci.ebI=TE([
'<div class="profile_inner">',
'<img src="$icon$" title="" class="iconMask_gray" />',
'<div class="green bold b_size">$dispname$</div>',
'<div class="graytext" title="$dispemail$">$dispemail$',



'</div>',
'</div>',
'$@$if($btnnum$!=0)$@$',
'<div class="profile_ope">',
'<table class="pro_ope ',
'$@$if($filinghtml$!="" || $rejectionhtml$!="")$@$',
'$@$if($filinghtml$!="" && $rejectionhtml$!="")$@$',
' pro_ope_f',
'$@$else$@$',
' pro_ope_four',
'$@$endif$@$',
'$@$endif$@$',
'"><tr>',
'$@$if($rejectionhtml$!="")$@$',
'<td>',

'$rejectionhtml$',
'</td>',
'$@$endif$@$',


'$addrinfohtml$',
'<td><a href="/cgi-bin/mail_list?sid=$sid$&s=searchcontact&sender=$email$&receiver=$email$&name=$name$&matchtype=include&folderid=all&page=0&AddrID=$AddrId$&grpid=$grpid$&category=all&from=profile&loc=profile,searchcontact,0,0">Recent mail from</a></td>',
'$@$if($filinghtml$!="")$@$',
'<td>$filinghtml$</td>',
'$@$endif$@$',
'$@$if(!$issys$)$@$',
'<td class="pro_ope_last"><a href="javascript:;" onclick=\'getTop().QMProfileTips.oper("mailTo","$_id$","$email$", "$showinfo$", "$jsname$")\'>Send message</a></td>',
'$@$endif$@$',
'</tr></table>',
'</div>',
'$@$endif$@$'
]);

dz.ci.ehn=TE([
'<div class="left" style="width:43px; padding:15px 5px 15px 15px;">',
'<div class="icon_user" style="background:#fff url($icon$); float:none; width:40px; height:40px; border:1px solid #ccc; overflow:hidden; display:block; margin-left:0px;">',
'<img src="/cgi-bin/getqqfriend?action=getimage&senderuin=$uin$&sid=$sid$" class="default_avator" title="$title.DATA$" width="40" onerror="this.src=\'$images_path$spacer12fb20.gif\'">',
'</div>',
'</div>',
'<div class="left gray" style="padding:17px 0 5px 0; width:230px; *margin-left:-2px;" >',
'<div class="green bold b_size">$weixin_nickname$</div>',
'<div style="margin:5px 0;" class="graytext">',
'$@$if($weixin_status$==3)$@$',
'\u5BF9\u65B9\u662F\u4F60\u7684\u5FAE\u4FE1\u597D\u53CB',
'$@$else if($weixin_status$==0)$@$',
'\u5BF9\u65B9\u662F\u4F60\u7684QQ\u597D\u53CB\uFF0C',
'<a href="javascript:;" class="pointer" onclick="getTop().QMProfileTips.oper(\'weixinVerify\',\'$uin$\')">\u6DFB\u52A0\u5230\u5FAE\u4FE1\u901A\u8BAF\u5F55</a>',
'$@$else if($weixin_status$==2)$@$',
'<a href="javascript:;" class="pointer" onclick="getTop().QMProfileTips.oper(\'weixinVerify\',\'$uin$\')">\u6DFB\u52A0\u5230\u5FAE\u4FE1\u901A\u8BAF\u5F55</a>',
'$@$else if($weixin_status$==1)$@$',
'<a href="javascript:;" class="pointer" onclick="getTop().QMProfileTips.oper(\'weixinhello\',\'$uin$\')" href="javascript:;">\u5FAE\u4FE1\u6253\u62DB\u547C</a>',
'$@$else if($weixin_status$==4)$@$',
'\u5DF2\u6DFB\u52A0\u5BF9\u65B9\u5230\u5FAE\u4FE1\u901A\u8BAF\u5F55',
'$@$endif$@$',
'</div>',
'</div>',
'<div class="clr"></div>'
]);

dz.ci.ftJ=TE([
'<div class="tipInner tipVerified">',
'$@$if($sCorpHomePage$)$@$',
'<a href="$sCorpHomePage$" target="_blank" class="ico_verified pointer"></a>',
'<a class="tipVerified_logo pointer" href="$sCorpHomePage$" target="_blank" title="$@$eval htmlEncode($sCorpName$)$@$" style="background-image:url($sLogoUrl$);"></a>',
'$@$else$@$',
'<span class="ico_verified"></span>',
'<span class="tipVerified_logo" title="$@$eval htmlEncode($sCorpName$)$@$" style="background-image:url($sLogoUrl$);"></span>',
'$@$endif$@$',
'<div class="tipVerified_name green" test="$sLogoUrl$" style="padding:20px 0 3px;">$@$eval htmlEncode($sCorpName$)$@$</div>',
'<div class="tipVerified_addr"><span class="addrtitle left">Address:</span>$@$eval htmlEncode($sCorpAddr$)$@$</div>',
'<div class="tipVerified_desc graytext">$@$eval htmlEncode($sCorpRemark$)$@$</div>',
'<div class="tipVerified_from"><a class="pointer" href="http://service.exmail.qq.com/cgi-bin/help?subtype=1&&id=23&&no=1001001" target="_blank">\u817E\u8BAF\u4F01\u4E1A\u90AE\u7BB1\u8BA4\u8BC1</a></div>',
'</div>'
]);

dz.ci.dQt=TE([
'<div class="profileTip" id="infocard_$_id$" style="display:none;">',
'<div class="infoArrowUp" id="infoarrowup_$_id$" style="display:none;"></div>',

'$@$if($isWeixin$)$@$',
'<div class="tipInner">',
dz.ci.ehn,
'</div>',
'$@$else if($role$=="corpprofile")$@$',
dz.ci.ftJ,
'$@$else$@$',
'<div class="tipInner">',
'$@$if($bSmsApp$)$@$',
dz.ci.erH,
'$@$else$@$',
dz.ci.ebI,
'$@$endif$@$',
'</div>',
'$@$endif$@$',

'<div class="infoArrowDown" id="infoarrowdown_$_id$" style="display:none;"></div>',
'</div>'
]);

dz.ci.dSO=TE([


'<td id="a_add_$email$" $@$if($bsa$!=1)$@$ style="display:none" $@$endif$@$ ><a href="javascript:;"  e="$email$" n="$username$" onclick="getTop().QMProfileTips.contactHandle(\'addc\',this)" title="Add to contacts"  class="pointer">',
'Add</a></td>',

'<td id="a_edit_$email$" $@$if($bse$!=1)$@$ style="display:none" $@$endif$@$><a href="javascript:;"  onclick="getTop().QMProfileTips.contactHandle(\'editc\',this)" addrid="$fromaddrid$"  class="pointer">Edit</a></td>',
























]);



cE.abI=function(Hz)
{
var ae=this;

if(ae.Az==-1)
{
return;
}

ae.Az=Hz;
switch(Hz)
{
case-1:
ae.aQr=null;
ae.cXV();
break;
case 0:
ae.dcU(false);
break;

case 1:
ae.bWo=setTimeout(function(){
if(ae.Az==1)
{
if(!ae.aQr||ae.bEe===true)
{
ae.dXR();
}
else
{
ae.abI(2);
}
}
},ae.dTA);
break;

case 2:
ae.dcU(true);

ae.dXu();
break;

case 3:
ae.bWo=setTimeout(function(){
if(ae.Az==3)
{
ae.abI(0);
if(ae.bFO)
{
ae.cyj(ae.bFO);
}
}
},100);
break;

case 4:
break;
}
}

cE.dcU=function(fZ)
{
var ae=this,
UH=ae.aQr;

if(!UH)return;

if(fZ&&!isShow(UH)||!fZ&&isShow(UH))
{
qmAnimation.play(UH,{
from:fZ?0.5:1,
to:fZ?1:0.5,
speed:'fast',
onaction:function(cO)
{
show(UH,true);
setOpacity(UH,cO);
},
oncomplete:function()
{
if(fZ&&ae.bVO==3)
{
ossLog("delay","all","stat=nothing&locval=,,logotips,1");
}
setOpacity(UH,fZ?1:0.5);
show(UH,fZ&&ae.Az==2);
gbIsIE&&(UH.style.filter='');
}
});
}
}


cE.dXu=function()
{
var ae=this,
bfb=ae.biC,
UH=ae.aQr,
Ig=ae.bri,
az=ae.bM,
Hx=az.document,
dos=bfb.getAttribute('beside'),
aK=dos?S(dos,ae.bM):bfb,
aAS=calcPos(aK),
bVZ=calcPos(UH),
cCG=S('infoarrowup_'+Ig,az),
cxS=S('infoarrowdown_'+Ig,az),
aqS=Hx.body.clientWidth;
if((aAS[1]+bVZ[4])<aqS)
{
if((aK.tagName=='IMG'||aAS[3]<50)&&aK.id!="imglogo")
{
show(cCG,false);
show(cxS,false);
UH.style.top=aAS[0]+'px';
UH.style.left=aAS[1]+5+'px';
}
else 
{

var dirc=(aAS[0]-bVZ[5])>bodyScroll(az,'scrollTop');

show(cCG,!dirc);
show(cxS,dirc);

UH.style.top=dirc?(aAS[0]-bVZ[5]-5+'px')
:(aAS[0]+aAS[5]+8+'px');
UH.style.left=aAS[1]-aAS[4]/2-65+'px';
}
}
else
{
show(cCG,false);
show(cxS,false);
UH.style.top=aAS[0]+'px';
UH.style.left=(aAS[3]-bVZ[4])>0?(aAS[3]-bVZ[4])
:0+'px';
}
}


cE.cTN=function(pG)
{
function edt(dQl,dRm,dci)
{
var cpx=S("a_add_"+pG,getMainWin()),cfA=S("a_edit_"+pG,getMainWin());
if(dQl=="1")
{
show(cpx,1);
show(cfA,0);
}
else if(dRm=="1")
{
show(cpx,0);
dci&&attr(cfA,"addrid",dci);
show(cfA,1);
}
else
{
show(cpx,0);
show(cfA,0);
show(cpx.parentNode,false);
}
}

QMAjax.send(T("/cgi-bin/addr_listall?sid=$sid$&searchaddr=$searchaddr$&func=searchaddr&t=searchaddrtmp&category=all").replace(
{
sid:getSid(),
searchaddr:encodeURI(pG)
}),
{
method:"POST",
onload:function(bz,bU)
{
var cpL="",bta=0,btt=0;
if(bz)
{
if(bU=="none")
{
bta="1";
btt="0";
}
else if(bU!="")
{
cpL=bU;
bta="0";
btt="1";
}
else
{
bta="0";
btt="0";
}
}
else
{
bta="0";
btt="0";
}
edt(bta,btt,cpL);
}
});
}

cE.dXR=function()
{
var ae=this,
gJ=ae.bCA,
aGr=ae.bVO,
Ig=ae.bri,
fe=ae.bWM,
bBJ=ae.eAD,
aqP=ae.eBz,
hN=ae.hN,
cCn=ae.emq,
cyC=ae.dOt,
bNK=ae.dvA,
fVB=ae.fQH,
drT=ae.fQr,
fNb=ae.fgQ,
bNG=function(aKD,eBF)
{
var bfb=ae.biC,
pn=ae.dQQ,
cbG=0,

dxZ=deO(gJ),
cop=dvK(fe),
aDT=ehx(fe),

dzW=fe&&!cop,
aCz=fe&&!cop&&!dxZ&&!aDT,
duk=gJ&&!dxZ&&!cop,
ehu=aCz&&aKD.followedby!="1"&&aGr=="2",
aKD=aKD||{};

if(gJ==getUin()||gJ==getTop().g_encryptuin||
(!dzW&&!aCz&&!duk))
{
cbG=0;
}
else if(aGr=="2")
{
cbG=3;
}
else
{
cbG=(aGr=="1"&&aKD.follower&&aKD.sharecount)?3:2;
}


if(pn)
{
aKD.name=pn;
}

var dVg=htmlEncode(encodeNick(aKD.name)),
dML=cEU(htmlEncode(encodeNick(aKD.name))),
fKc=S("a_edit_"+fe,getMainWin());
extend(aKD,
{
'_id':Ig,
'uin':gJ,
'email':fe,
'dispname':dML,
'jsname':dVg,
'dispemail':cEU(fe),
'showinfo':aGr,
'sid':getSid(),
'images_path':getPath('image'),
'img_path':getPath('image'),
'btnnum':cbG,
'arrow':bfb.tagName=="IMG"?0:1,
'bmail':dzW,
'bsms':aCz,
'bansms':ehu,
'brss':duk,
'rssdomain':typeof(gsRssDomain)=="undefined"?"":gsRssDomain,
'bSmsApp':eBF,
'role':bBJ,
"mailid":hN,
"qqfriend":cyC,
'home':cCn,
'mailhtml':bNK,
'addrinfohtml':fNb,
'rejectionhtml':fVB,
'filinghtml':drT,
'name':encodeURI(htmlEncode(aKD.name)),
'AddrId':attr(fKc,"addrid")||"",
'issys':cop
});

insertHTML(ae.bM.document.body,'afterBegin',dz.ci.dQt.replace(aKD));
ae.aQr=UH=S('infocard_'+Ig,ae.bM);



addEvents(UH,
{
mouseover:function(ag)
{
ae.abI(4);
},

mouseout:function(ag)
{
ae.abI(3);
}
});
ae.abI(2);
};

if(bBJ=="weixinprofile")
{
var	eL=ae.Gp=new QMAjax();

eL.method="post",

eL.url="/cgi-bin/getqqfriend";


eL.send(T("action=addsendermmfrd&subaction=$subaction$&senderuin=$uin$&sid=$sid$&t=weixinfriend").replace(
{
sid:getSid(),
uin:gJ,
subaction:"checkstatus"
}));
eL.onComplete=function(pB)
{
var hw=null;
if(pB&&ae.Az==1)
{
hw=evalValue(pB.responseText);
if(hw)
{
hw.isWeixin=true;
bNG(hw,false);
ae.cTN(ae.bWM);
}
}
}
eL.onError=function()
{
}
}
else if(bBJ=="corpprofile")
{
var	eL=ae.Gp=new QMAjax();
eL.method="post";
eL.url="/cgi-bin/getauthbizinfo?t=infocard&s=corp&bizdomain="+ae.bWM+"&sid="+getSid();
eL.send();
eL.onComplete=function(pB)
{
var hw=null;
if(pB&&ae.Az==1)
{
hw=evalValue(pB.responseText);
if(hw)
{
bNG(hw,false);
}
}
}
}
else if(bBJ)
{
var XG={};
if(aqP)
{
XG.icon=aqP;
}
else
{
XG.icon="/cgi-bin/getqqicon?uin="+gJ;
}
bNG(XG,true);
ae.cTN(ae.bWM);
}
else if(gJ&&!deO(gJ))
{
if(ae.bVO==2)
{
var	eL=ae.Gp=new QMAjax();

eL.method="post",

eL.url="/cgi-bin/reader_account_info";

eL.send(T("func=infocard&uin=$uin$&sid=$sid$&t=rss_mgr&s=infocard&r=$r$").replace(
{
sid:getSid(),
r:ae.bEe===true?Math.random():'',
uin:gJ
}));
eL.onComplete=function(pB)
{
var hw=null;
if(pB&&(ae.Az==1||ae.bEe===true))
{
if(pB.responseText.indexOf("new_rss_success")!=-1)
{
hw=evalValue(pB.responseText);
if(hw)
{
bNG(hw.feed,false);
ae.cTN(ae.bWM);
}
}
}
ae.bEe=false;
}
eL.onError=function()
{
ae.bEe=false;
}
}
else 
{
var XG={};
if(aGr=="1")
{
XG.icon="/cgi-bin/getqqicon?uin="+gJ;
}
bNG(XG,false);
ae.cTN(ae.bWM);
}
}
else
{
if(aGr=="3")
{
ae.ecl();
}
else
{
bNG({
icon:[getPath("image"),"newicon/",(dvK(fe)?"face_admin.gif":"male.gif")].join("")
});
ae.cTN(fe);
}
}
}


dz.ci.dSN=TE([
'<span id="infocard_$_id$" style="display:none;position:absolute;cursor:default;z-index:888;margin:-12px 0 0 -15px;">',
'<div unselectable="on" id="imglogonewtips" class="newtips" >',
'<div style="opacity: 1;" unselectable="on" id="imglogotipcontainer" class="tipcontainer">',
'<img id="imglogoup" class="arrowup" style="margin-left:18px;*position:relative;*top:6px;*left:18px;" src="$images_path$spacer12fb20.gif">',
'<div unselectable="on" class="container">',
'<div unselectable="on" class="contentcontainer">',
'<a class="btnClose" name="closecard" href="javascript:;" style="margin-top:6px;*right:0;"></a>',
'<div unselectable="on" class="content" nowrap>',
'$tipsword$',
'&nbsp; &nbsp; &nbsp;',
'<div unselectable="on" class="tipsrightpanel" style="font-size: 12px; color: rgb(0, 0, 0); font-weight: normal;">',
'<div unselectable="on" class="opertbar">',
'$@$for($links$)$@$',
'&nbsp;&nbsp;<a name="_tipslink_" style="text-decoration: underline;" target="$target$" href="$href$">$linkname$</a>',
'$@$endfor$@$',
'</div>',
'</div>',
'<div unselectable="on" class="clr"></div>',
'</div>',
'</div>',
'</div>',
'<img id="imglogodown" class="arrowdown" style="display: none; margin-left: -5px;" src="$images_path$spacer12fb20.gif">',
'</div>',
'<div unselectable="on" class="tipbackground"></div>',
'<div unselectable="on" class="oneheight"></div>',
'</div>',
'</span>'
]);

cE.ecl=function()
{
var ae=this,
Ig=ae.bri,
bfb=ae.biC;
ewN=bfb.getAttribute("stylenum"),
dqV=bfb.getAttribute("logotitle"),
cCL,crP,cEq;


if(!dqV)
{
cEq=true;
}
else
{
var xR=dqV.split("aboutlogo="),
cCL=xR[0],
crP=xR[1],
cEq=cCL=="nothing"||!ewN;
}

if(cEq)
{
bfb.title="Homepage";
}
else
{
var Xd=[],
fu=eval(["(",crP,")"].join(""));

for(var i=0;i<fu.length;i++)
{
if(i%3==0)
{
Xd.push(
{
linkname:fu[i],
href:TE(fu[i+1]).replace(
{
sid:getSid(),
uin:getUin()
}
),
target:fu[i+2]
}
);
}
}

insertHTML(ae.bM.document.body,'afterBegin',dz.ci.dSN.replace(
{
'_id':Ig,
images_path:getPath("image"),
tipsword:cCL,
links:Xd
}
));
ae.aQr=S('infocard_'+Ig,ae.bM);


addEvents(ae.aQr,
{
mouseover:function(ag)
{
ae.abI(4);
},

mouseout:function(ag)
{
ae.abI(3);
},

click:function(ag)
{
var aK=getEventTarget(ag);
if(aK.name=="closecard")
{
ae.abI(3);
ae.biC.setAttribute("t","");
}
else if(aK.name=="_tipslink_")
{
var ddo=location.getParams(aK.href)["logostatid"];
if(ddo)
{
ossLog("delay","all","stat=nothing&locval=,,logotips,"+ddo);
}
}
}
});
ae.abI(2);
}
}



cE.cXV=function()
{
var ae=this,
UH=ae.aQr;

if(UH)
{
qmAnimation.stop(UH);
show(UH,false);
}
clearTimeout(ae.bWo);
ae.Gp&&ae.Gp.abort();
}

cE.cyj=function(VK)
{
var ae=this;
if(ae.biC!=VK)
{
if(ae.Az==3)
{
ae.bFO=VK;
return;
}


ae.aQr&&removeSelf(ae.aQr);


var gJ=VK.getAttribute('u'),
pn=VK.getAttribute('n'),
aGr=VK.getAttribute("t"),
fe=VK.getAttribute('e'),
aqP=VK.getAttribute('i'),
bBJ=VK.getAttribute("r"),
cyC=VK.getAttribute("f"),
hN=VK.getAttribute("mailid"),
cCn=VK.getAttribute("h"),
eaa=VK.getAttribute("mailhtml"),
fRF=VK.getAttribute("rejecthtml"),
fhU=VK.getAttribute("filinghtml"),
ajJ=VK.getAttribute("mop"),
btt=VK.getAttribute("se"),
bta=VK.getAttribute("sa"),
aru=VK.getAttribute("sys"),


cpL=VK.getAttribute("addrid"),


dnv=S(eaa,ae.bM),
eMF=S(fRF,ae.bM),
faK=S(fhU,ae.bM),
bNK=dnv?dnv.innerHTML:"",
ewc=eMF?eMF.innerHTML:"",
drT=faK?faK.innerHTML:"",
cPL="";


function aSs()
{
cPL=dz.ci.dSO.replace(
{
bopen:ajJ,
bse:btt,
bsa:bta,
bsys:aru,
fromaddrid:cpL,
email:fe,
uin:gJ,
username:htmlEncode(encodeNick(pn))
}
)
if(gJ=="0"||!gJ||gJ==getTop().g_encryptzero)
{
gJ="";
}

bNK=bNK.replace(/(\s[^<]+?)=([^ \f\n\r\t\v\"\'>]+)/g,function(bMr,bH,bZ)
{
return bH+'="'+bZ+'"';
}
);
ewc=ewc.replace(/(\s[^<\'\"]+?)=([^ \f\n\r\t\v\"\'>]+)/g,function(bMr,bH,bZ)
{
return bH+'="'+bZ+'"';
}
);

drT=drT.replace(/(\s[^<]+?)=([^ \f\n\r\t\v\"\'>]+)/g,function(bMr,bH,bZ)
{
return bH+'="'+bZ+'"';
}
);

ae.fgQ=cPL;
ae.dvA=cPL+bNK.replace(/\s([^<=]+?)=(\"|\')(.*?[^\\]?)\2/g,function(bMr,bH,ebC,bZ)
{
if(bH=="id")
{
return" onclick='getTop().QMProfileTips.oper(\"custom\",\""+bZ+"\")'";
}
if(/(href|title|style|onclick|class)/i.test(bH))
{
return bMr;
}
return""
}
);
ae.fQH=ewc.replace(/\s([^<=]+?)=(\"|\')(.*?[^\\]?)\2/g,function(bMr,bH,ebC,bZ)
{
if(bH=="id")
{
return" onclick='getTop().ossLog(\"delay\", \"all\", \"stat=nothing&locval=profiletip,refuse,,1\");getTop().QMProfileTips.oper(\"custom\",\""+bZ+"\")'";
}
if(/(href|title|style|onclick|class)/i.test(bH))
{
return bMr;
}
return""
}
);

ae.fQr=drT.replace(/\s([^<=]+?)=(\"|\')(.*?[^\\]?)\2/g,function(bMr,bH,ebC,bZ)
{
if(bH=="id")
{
return" onclick='getTop().QMProfileTips.oper(\"custom\",\""+bZ+"\")'";
}
if(/(href|title|style|onclick|class)/i.test(bH))
{
return bMr;
}
return""
}
);
ae.cXV();

ae.bFO=null;
ae.biC=VK;
ae.bCA=gJ;
ae.bri=[gJ,fe?fe.replace(/\W/gi,""):""].join("");
ae.Az=0;
ae.aQr=S('infocard_'+ae.bri,ae.bM);
ae.dQQ=pn;
ae.bWM=fe||(gJ?gJ+"@qq.com":"");
ae.bVO=aGr;
ae.eBz=aqP;
ae.eAD=bBJ;
ae.emq=cCn;
ae.dOt=cyC;
ae.hN=hN;
ae.dTA=aGr==3?800:500;
ae.abI(ae.Az==0?1:2);
}

if(ajJ=="")
{
ajJ="1";
}
if(ajJ!="0")
{
aSs();
}






}
else
{
ae.abI(ae.Az==0?1:2);
}
}

cE.doi=function(VK)
{


var ae=this,
Rc=ae.Az;

ae.bFO=null;

ae.abI((Rc==2||Rc==3)?3:0);
}



dz.aYr=function(ao)
{
if(ao)
{
var djE=dz.ci.elm,
baP=ao[djE];

if(!baP)
{
baP=ao[djE]=new dz(ao);
addEvent(ao,"unload",function(ag)
{
var cSN=dz.aYr(ao);
if(cSN)
{
cSN.abI(-1);
}
});
}
return baP;
}
}


dz.clearInfoCard=function(ao)
{
var ae=this;
dz.aYr(ao).biC=null;
dz.aYr(ao).bEe=true;
}

dz.doMouseEvent=function(aA,ao,VK)
{
if(aA=="over")
{
dz.aYr(ao).cyj(VK);
}
else if(aA=="out")
{
dz.aYr(ao).doi(VK);
}
}

dz.oper=function(acJ,Pi,pG,aGr,dmJ)
{
var dbE=T([





'<div class="dialog_txt">',
'<div class="bold" style="padding-bottom:10px;">$HeadTitle$</div>',
'<input type="text" class="txt" id="content" style="width:365px;" maxlength="20"/>',
'</div>',
'<div class="dialog_operate">',
'<input type="button" class="btn wd2" value="Send" id="send"/>',
'<input type="button" class="btn wd2" value="Cancel" id="cancel" />',
'</div>'

]);
function dyb(evm,evK,fHZ)
{
return T('"$name$" <$email$>').replace({
name:encodeNick(evm)||evK,
email:pG||(Pi+"@qq.com")
});
}
function dxa(aJ,GR,bT,dNC,Vr)
{
new QMDialog({
sId:aJ,
sTitle:Vr||"&nbsp;",
sBodyHtml:GR,
nWidth:405,

onshow:function(){
this.S("content").focus();
},
onload:function(){
var dj=this;
addEvent(dj.S("send"),"click",function(cS){
QMAjax.send(bT.replace(
{
sid:getSid(),
uin:Pi,
msg:trim(dj.S("content").value)

}),
{
method:"POST",
onload:function(bz,bU)
{
if(bz)
{
if(bU=="0")
{
showInfo(dNC);
}
else if(bU=="-1")
{
showError("\u53D1\u9001\u5931\u8D25\uFF0C\u5BF9\u65B9\u628A\u4F60\u52A0\u5165\u4E86\u9ED1\u540D\u5355\u3002");
}
else
{
showInfo("\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
}
}
else
{
showError("\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
}
}
});
dj.close();
});
addEvent(dj.S("cancel"),"click",function(){dj.close()});
}
});
}

switch(acJ)
{
case"mailTo":
openComposeDlg("normal",{
sDefAddrs:dyb(dmJ,Pi,pG),
bUinEncrypt:true,
bAddrEdit:true,
nWidth:495
});
break;
case"smsTo":
openComposeDlg("sms",{
sDefAddrs:dyb(dmJ,Pi,pG),
bUinEncrypt:true,
bAddrEdit:false
});
break;
case"rssTo":
if(!Pi)
{
return;
}
var bi=eCf.replace({
sid:getSid(),
uin:Pi
});
if(aGr=="1")
{
goNewWin(bi,false,true);
}
else
{
goUrlMainFrm(gsRssDomain+bi);
}
break;
case"custom":
var av=S(Pi,getMainWin());
if(av)
{
fireMouseEvent(av,"click");
}
break;

case"weixinhello":
var dOS=dbE.replace({
HeadTitle:"\u5411TA\u8BF4\u53E5\u8BDD\u6253\u4E2A\u62DB\u547C"
}),
cCv=T("/cgi-bin/getqqfriend?sid=$sid$&action=addsendermmfrd&subaction=greet&t=weixinfriend&senderuin=$uin$&greetmsg=$msg$&loc=readmail,weixin,,,0,1");
dxa("weixinhello",dOS,cCv,"\u6D88\u606F\u53D1\u9001\u6210\u529F\uFF0C\u5982\u679C\u5BF9\u65B9\u56DE\u590D\u4F60\uFF0C\u4F60\u4EEC\u4F1A\u6210\u4E3A\u597D\u53CB\u3002","\u5FAE\u4FE1\u6253\u62DB\u547C");
break;
case"weixinVerify":
var efH=dbE.replace({
HeadTitle:"<b style='line-height:2;'>\u5BF9\u65B9\u542F\u7528\u4E86\u597D\u53CB\u9A8C\u8BC1</b><br/>\u60A8\u9700\u8981\u53D1\u9001\u9A8C\u8BC1\u8BF7\u6C42\uFF0C\u5E76\u5728\u5BF9\u65B9\u901A\u8FC7\u540E\u624D\u80FD\u6210\u4E3A\u597D\u53CB\u3002"
}),
cCv=T("/cgi-bin/getqqfriend?sid=$sid$&action=addsendermmfrd&subaction=greet&t=weixinfriend&senderuin=$uin$&greetmsg=$msg$");

QMAjax.send(T("/cgi-bin/getqqfriend?sid=$sid$&action=addsendermmfrd&subaction=addcontact&senderuin=$uin$&t=weixinfriend").replace(
{
sid:getSid(),
uin:Pi
}),
{
method:"POST",
onload:function(bz,bU)
{
if(bz)
{

if(bU=="0")
{
showInfo("\u6DFB\u52A0\u6210\u529F");
S("weixinContainer",getMainWin())&&attr(S("weixinContainer",getMainWin()),"w","0")
}
else if(bU=="-1")
{
showError("\u6DFB\u52A0\u5931\u8D25\uFF0C\u5BF9\u65B9\u628A\u4F60\u52A0\u5165\u4E86\u9ED1\u540D\u5355\u3002")
}
else if(bU=="1")
{
dxa("weixinverify",efH,cCv,"\u6D88\u606F\u53D1\u9001\u6210\u529F\uFF0C\u5982\u679C\u5BF9\u65B9\u901A\u8FC7\u9A8C\u8BC1\uFF0C\u4F60\u4EEC\u4F1A\u6210\u4E3A\u597D\u53CB\u3002","\u5FAE\u4FE1\u6253\u62DB\u547C");
}
else
{
showError("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u6E05\u7A0D\u540E\u518D\u8BD5");
}
}

}
})

break;
}
}

dz.contactHandle=function(gx,ak)
{
if(gx=="addc")
{
var ah=getTop(),fe='',bfM='';

fe=getTop().attr(ak,"e");
bfM=getTop().attr(ak,"n");;
ah.goUrlMainFrm(T('/cgi-bin/combine_addrlist?method=list&view=normal&t=addr_listall&sid=$sid$&s=addfromlist&category=all&addrusername=$username$&addruseremail=$email$&rmqqgroup=1&mode=new').replace(
{
sid:getSid(),
username:encodeURI(bfM),
email:encodeURIComponent(fe)
}
));



















































}
else if(gx=="editc")
{
var bi=T("/cgi-bin/combine_addrlist?t=addr_listall&method=list&view=normal&sid=$sid$&AddrID=$addrid$&s=edit&s=edit&&grpid=&category=all&rmqqgroup=1").replace(
{
sid:getSid(),
addrid:getTop().attr(ak,"addrid")
}
),Fz="mainFrame";
goUrlMainFrm(bi,true);
}
}













dz.refuse=function(aS,er,aP)
{

if(confirm("\u7CFB\u7EDF\u4F1A\u628A\u6B64\u53D1\u4EF6\u4EBA\u5730\u5740\u653E\u5165\u201C\u9ED1\u540D\u5355\u201D\u4E2D\uFF0C\n\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u6B64\u5730\u5740\u7684\u77ED\u6D88\u606F\u3002\n\u786E\u5B9A\u8981\u62D2\u6536\u201C"+aS+"\u201D\u7684\u77ED\u6D88\u606F\u5417\uFF1F"))
{
getMainWin().refuse(er,aP);
}
return;
}

HZ.QMProfileTips=dz;

})(window);