


(function()
{
var ag=getTop();

ag.osslogAjaxCompose(0);
ag.initAddress&&ag.initAddress();
}
)();




var goCompose=
{
oQmSender:null,
Oa:"",
beA:false,
aYq:null,

bkk:false,
cFN:false,
aWt:false,
bVK:false,
bZi:false,
agU:null,
Qh:null,
sIphoneUpImgKey:""
}









function outputWbr(bj)
{
bj&&document.write(atf(bj));
}






function atf(bj,aDL)
{
var gW=aDL||12,
eV=bj||"",
bO=[],
aB=eV.length/gW;

for(var i=0;i<aB;i++)
{
bO[i]=getTop().htmlEncode(eV.substr(i*gW,gW));
}
return bO.join("<wbr>");
}






function addExistAttach(az,bon,aYX)
{
var ag=getTop(),
bFK=ag.T('<input id="$id$" name="$attachname$" value="$mailattach$" type="hidden" />'),
awI=az.forward,
lr=az.attach;

for(var i=0,aB=lr.length;i<aB;i++)
{
var aAf=lr[i].mailid.indexOf("@")==0?lr[i].attid:(lr[i].symname||lr[i].attid);
if(!bon)
{
ag.insertHTML(bon?ag.S("exist_file",window):document.frm,'beforeEnd',bFK.replace(
{
id:aAf,
mailattach:[lr[i].mailid,aAf,lr[i].name].join("|"),
attachname:aYX?"replymailattach":"mailattach"
}
));
}
else if(bon&&!ag.S(aAf,window))
{
if(QMAttach.getAttachSize()+QMAttach.bjs(lr[i].size)>QMAttach.getAttachLimit())
{
QMAttach.showAttachLimit(QMAttach.getAttachLimit());
return;
}


ag.insertHTML(bon?ag.S("exist_file",window):document.frm,'beforeEnd',QMAttach.aJz("exist").replace(
{
id:aAf,
value:[lr[i].mailid,aAf,lr[i].name].join("|"),
viewname:atf(lr[i].name),
newname:lr[i].newname,
size:lr[i].size,
viewfileurl:lr[i].viewfileurl,
attachname:aYX?"replymailattach":"mailattach"
}
));
}
}
}

function checkReplyAttach()
{
var kX=false;
getTop().E(["exist_file","exist_BigAttach"],function(HM)
{
if(getTop().S(HM,window))
{
ou=getTop().S(HM,window).childNodes;
for(var i=0,aB=ou.length;i<aB;i++)
{
if(ou[i].nodeType!=3&&getTop().isShow(ou[i]))
{
kX=true;
}
}

}
});

if(getTop().isShow(getTop().S("replyexistAttach",window))&&!kX)
{
getTop().show(getTop().S("replyexistAttach",window),false);
}
}

function addExistAttach_Big(az,aYX)
{
var ag=getTop(),
bKD=az.bigattach,aIA=aYX?ag.S("exist_BigAttach",window):ag.S("BigAttach",window);
for(var i=0,aB=bKD.length;i<aB;i++)
{
!ag.S("eabig_"+bKD[i].id,window)
&&
ag.insertHTML(aIA,'beforeEnd',QMAttach.aJz("exist_big").replace(
ag.extend(bKD[i],{mode:aYX?"replaybigattach":""})
));
}
}

function ossLogDelAttachOpt(an)
{
if(an)
{
var aos=an.className.indexOf("attsep")!=-1?
an:getTop().parents("div.attsep",an)[0];

if(aos)
{
var dcL=getTop().finds("input.ico_att",aos);

getTop().osslogAjaxCompose(110,dcL?1:0,encodeURIComponent(aos.innerText||aos.textContent||""));
}
}
}


var QMAttach=
{
mbHideBigAttach:false,
mbHideAttach:false,

mnAttBigSizeIn:0,
mnAttBigSizeEx:0,


ceH:20,

IM:"normal",
btk:"exe|msi|scr|cmd|bat|com",
anW:50,
aJY:0,

coW:100,

buX:{},

Br:[],
wm:{},

XO:null,
Ca:null,
amO:null,

ZA:null,

aUa:false,

onprogress:null,
onfinish:null,

Zs:"Drag the file to this area",
aQL:"Release the mouse",

initHideAttach:function(aj)
{
if(aj)
{
this.mbHideBigAttach=aj.hideBigAttach;
this.mbHideAttach=aj.hideAttach;
}
},

bQp:function(ah)
{
if(getTop().QMFileUpload.oUtil.isFileDragOver(ah))
{
QMAttach.aOc();
}
var aqv=ah.dataTransfer;
if(aqv)
{
aqv.effectAllowed=aqv.dropEffect="none";
}
getTop().preventDefault(ah);
},

dragOverEvent:function(ks)
{
var ag=getTop();

ag.addEvents([ag,window,getPageEditor()&&getPageEditor().getEditWin()],
{
dragover:QMAttach.bQp
},ks
);
},

initAttBigSize:function(aj)
{
if(aj)
{
this.mnAttBigSizeIn=aj.nAttBigSizeIn||0;
this.mnAttBigSizeEx=aj.nAttBigSizeEx||0;
}
},




checkAttachWarnningType:function()
{
var ae=this,
wv=[],
YA=getTop().S("exist_file",window),
agI=YA?YA.childNodes:[];

getTop().E(agI,function(au)
{
if(au.tagName=="DIV")
{
var de=getTop().S("eas_"+au.id.split("_").pop(),window),
eZ=de&&(de.innerText||de.textContent)||"";
if(ae.apu(eZ))
{
wv.push(ae.awJ(eZ));
}
}
}
);

getTop().E(ae.Br,function(ay)
{
var de=getTop().S("Uploader"+ay,window),
eZ=de&&de.value||"";
if(ae.apu(eZ))
{
wv.push(ae.awJ(eZ));
}
}
);

return wv;
},
retryUpload:function(aI)
{
var bQ=this.oFileUploadMgr.getFileById(aI);
if(bQ)
{
if(/cgi,-2/.test(bQ.get("sError")))
{
getTop().goUrlTopWin("/cgi-bin/logout?sid="+getTop().getSid());
}
else
{
this.oFileUploadMgr.retry(bQ);
this.onmgrprocess
&&this.onmgrprocess.call(this,bQ);
}
}
},





delAttach:function(aI)
{
var ae=this;
anp=getTop().S(aI,window)

aJ=aI.replace('Uploader',''),
cOc=ae.oFileUploadMgr.getFileById(aJ);
if(anp&&anp.disabled)
{

ae.aUE(anp.value);
}
ae.oFileUploadMgr.rmFile(cOc);

ae.EV();
debug("D"+aI)
getTop().removeSelf(getTop().S("D"+aI,window));
ossLogDelAttachOpt(anp);
return ae.aea();
},






delExistAttach:function(ay)
{
var bid=getTop().S("eas_"+ay,window);







ossLogDelAttachOpt(getTop().S("ea_"+ay,window));
getTop().removeSelf(getTop().S("ea_"+ay,window));

return this.aea();
},

delBigAttach:function(an)
{
var cu=getTop().parents("div.attsep",an)[0];

if(cu)
{
checkReplyAttach();
ossLogDelAttachOpt(cu);
getTop().removeSelf(cu);
}
},















getAttachLimit:function()
{
return this.anW*1024*1024;
},





getAttachSize:function()
{
var ae=this,
dp=0,
YA=getTop().S("exist_file",window),
agI=YA?YA.childNodes:[];
getTop().E(agI,function(au)
{
if(au.tagName=="DIV")
{
var de=getTop().S("s"+au.id,window);
if(de)
{
dp=dp+ae.bjs(de.innerHTML);
}
}
}
);
dp=dp+ae.oFileUploadMgr.getTotalSize();

return dp;
},

cRZ:function()
{
var ky=0,
bO=this.oFileUploadMgr.getUploadList();
for(var i=0,l=bO.length;i<l;i++)
{
bO[i].get("bUpToFtn")
&&
(ky=ky+(+bO[i].get("nSize")));
}
return this.getAttachSize()+ky;
},





getExistList:function()
{
return this.oFileUploadMgr.getUploadList("complete");
},

missAttach:function(sX)
{
var ag=getTop();
ag.confirmBox({
msg:ag.TE(['%@%if(%type%=="fw")%@%',
'The following attachments retrive fail, please delete and try again:',
'%@%else%@%',
'Failed to upload these %len% attachment(s). Please delete and try again:',
'%@%endif%@%<br/>',
'%@%for(%list%)%@%',
'<span style="color:red;" title="%name%">',
'%@%eval subAsiiStr(%name%,%_root_.width%,"...",1)%@%',
'</span>;&nbsp;',
'%@%if(%_root_.len%<5)%@%<br/>%@%endif%@%',
'%@%endfor%@%'],'%').replace({
len:sX.length,
width:sX.length<5?40:15,
list:sX
}),
title:"Error Information",
confirmBtnTxt:"Retry",
cancelBtnTxt:"Cancel",
onreturn:function(aP)
{
if(aP)
{
ag.fireMouseEvent(ag.SN("sendbtn",ag.getMainWin())[0],"click");
}
else
{
ag.E(sX,function(dL){
QMAttach.delAttach(dL.id);
});
}
}
});
},





hasAttach:function(btW)
{
var agI=this.oFileUploadMgr.getUploadList("complete"),
ou;

if(agI.length>0)
{
return true;
}


if(getTop().S("exist_file",window))
{
ou=getTop().S('exist_file',window).childNodes;
for(var i=0,aB=ou.length;i<aB;i++)
{
if(ou[i].nodeType!=3)
{
return true;
}
}
}

if(getTop().S("filecell",window))
{
ou=getTop().S('filecell',window).childNodes;
for(var i=0,aB=ou.length;i<aB;i++)
{
if(ou[i].nodeType!=3)
{
return true;
}
}
}

if(btW&&getTop().S("BigAttach",window))
{
ou=getTop().S('BigAttach',window).childNodes;
for(var i=0,aB=ou.length;i<aB;i++)
{
if(ou[i].nodeType!=3&&getTop().isShow(ou[i]))
{
return true;
}
}
}

return false;
},





hasUploadError:function()
{
return this.aIq("error")!=0;
},


initDragAndDropContainer:function()
{
var	ae=this,
aS=ae.ZA,ag=getTop();

if(!aS)
{
aS=ae.ZA=document.createElement("div");
document.body.insertBefore(aS,document.body.firstChild);
aS.id="dndContainer";
aS.className="QMEditorMenuBorder";
aS.innerHTML=ag.T([
'<div style="padding:5px 5px 0;font-size:12px;">',
'<a class="right" onclick="QMAttach.hideDragAndDropContainer();">',
'Close',
'</a>',

'</div>',
'<div style="height:150px;"></div>'
]);
}
ae.hideDragAndDropContainer();
},

aOc:function(bRH,kH,iv)
{
var	ae=this,
aS=ae.ZA,ag=getTop(),
jZ=ag.calcPos(ag.S("AttachFrame",window));

if(aS)
{
aS.style.left=jZ[3]+'px';
aS.style.top=(jZ[2]+2)+'px';
}
},




hideDragAndDropContainer:function()
{



var ae=this,
aS=ae.ZA;

if(aS)
{
aS.style.left=aS.style.top=-400+'px';
}
},









outputBtn:function(aHI,aSX,aqS,awm)
{
var ag=getTop(),
ae=this,
awh=typeof(aqS)!="number"
?this.anW:(this.anW=aqS);
},





isUploading:function()
{
return this.oFileUploadMgr.isUploading();
},

attrUpload:function(bsv,ew)
{
var ag=getTop(),
ae=this,
sE=new ag.QMAjax;

bsv.callBack("onprocess",[
ew.set(
{
sType:"CollectionAttach",
nPercent:100
})
]);

ag.getAttachList(
ew.bQ,
function(aP,aM,cR,Ru)
{
if(aP)
{

var kW=aM.attach[0],
bLp="SIZEUploader"+ew.get("sId"),
aoO=ag.S(bLp,window);
aoO.name=kW.byte;
aoO.innerHTML=["(",kW.newname?(kW.newname+"&nbsp;"):"",ae.Fw(ew.get("nSize")),")"].join("");
ag.show(aoO,1);
ag.S("Uploader"+ew.get("sId"),window).value=[kW.mailid,kW.symname||kW.attid,kW.name].join("|");
ew.set("attachid",kW.symname||kW.attid);



if(ag.S("from",document))
{
ag.S("from",document).value="attachfolder";
}
var Qv=kW.viewfileurl;
ae.attrUploadComplete.call(QMAttach,"/data/"+(Qv?"|"+Qv:""),ew,true);
}
else
{
var pT;
if(aM&&aM.errcode)
{
pT="cgi,"+aM.errcode;
}
else if(!aM&&Ru=="abort")
{
pT="http,700";
}
else if(cR.readyState=="4")
{
pT="http,"+cR.status;
}
else
{
pT="unknow,0";
}

ae.attrUploadComplete.call(QMAttach,pT,ew,false);
}
},
sE
);
},

attrUploadComplete:function(fS,ew,kX)
{
var ae=this;

if(kX===false)
{
ae.bSd.onerror(
ew.set(
{
nPercent:0,
sError:fS
}
)
);

ae.RU(ew,"error");
}
else
{
var kV=getTop().trim(fS);
var arZ=fS.split("|");

if(arZ.length>1)
{
var Qv;
arZ[1]&&(Qv=getTop().trim(arZ[1]));
if(Qv)
{

ew.set("sFileUrl",Qv);
}
kV=arZ[0];
}
ew.set("sFileId",kV.split('/').pop());

ae.bSd.oncomplete(
ew.set(
{
nPercent:100,
sStatus:"complete"
})
);
ae.RU(ew,"complete");
}
},
















addExistFileCell:function(az)
{
var ae=this;

getTop().E(az,function(av)
{
ae.aco(av);
ae.RU(av,"complete");

});
},




setUpAttInput:function()
{
var ae=this,
ag=getTop(),
bwR=ag.S("upfilelist",window),
ayI=ag.S("cattachlist",window);

var iY=[],aKq=[];
ag.E(ae.oFileUploadMgr.getUploadList("complete"),function(av)
{


var RP=av.get("sFileId");

if(RP&&!av.get("bUpToFtn"))
{
if(av.get("bVirtual"))
{
aKq.push(RP);
}
else
{
iY.push(RP);
}
}
}
);

if(ayI)
{
ayI.value=iY.join("|");

var bFy=ag.SN("cNoteattachelist",window),bZb=[];
if(bFy&&bFy.length>0)
{
ag.E(bFy,function(cI)
{
bZb.push(cI.value);
})
ayI.value+="|"+bZb.join("|");

}
}
if(!bwR)
{
ag.insertHTML(ayI,"afterEnd",ag.T('<input name="upfilelist" type="hidden" id="upfilelist" value="$value$" />').replace(
{
value:aKq.join("|")
}
));
}
else
{
bwR.value=aKq.join("|");
}


this.daD();


return iY.length+aKq.length;
},

daD:function()
{
var iF=0,
ag=getTop();

try
{
var aKc=ag.S("attachContainer",window),
ayI=ag.S("cattachlist",window),
brZ=aKc&&ag.finds("div.attsep",aKc);

iF=1;

if(brZ&&brZ.length>0)
{
var bSf=[];
for(var i in brZ)
{
var aos=brZ[i];
bSf.push(
[
(aos.innerText||aos.textContent||"").replace(/(.+\s\(.+\))(.+)/gi,"$1"),
ag.finds("input.ico_att",aos).length,
ag.finds("input[ext='netdisk']",aos).length
].join(",")
);
}
iF=2;

ag.E(this.oFileUploadMgr.getUploadList(),
function(av)
{
bSf.push([av.get("sName"),av.get("sStatus"),
av.get("sType"),(av.get("sFileId")||"").substr(0,10)].join(","));
}
);
iF=3;
ag.insertHTML(ayI,"afterEnd",ag.T('<input name="attachlist_log" type="hidden" id="attachlist_log" value="$value$" />').replace(
{
value:encodeURIComponent(bSf.join("|"))
}
));
iF=4;
}
}
catch(e)
{
getTop().ossLog("realtime","all","stat=custom&type=attachlistlogerr&info="+
[iF,e.message].join(",")
);
}
},

showAttachLimit:function(bnE)
{
var ag=getTop();

new ag.QMDialog({
sId:"attachAlert",
sTitle:"Attachment tips",
sBodyHtml:ag.TE([
'<div class="dialog_content" un="eve_complete_div">',
'<div class="dialog_feedback">',
'<span class="dialog_icon icon_info_b"></span>',
'<div class="dialog_f_c">',
'$@$if($hideBigAttach$==0)$@$',
'<div class="dialog_f_t">The file selected is over the upper limit of attachment size $size$ </div>',
'<div class="dialog_f_d">You can use <a id="link_bigattach" nocheck="true"><input type="button" class="ico_attbig" align="absmiddle" style="margin:0 3px 0 0!important;margin:0 3px 2px 0" />Large attachments</a>  to send.</div>',
'$@$else$@$',
'<div>The file selected is over the upper limit of attachment size $size$ </div>',
'$@$endif$@$',
'</div>',
'</div>',
'</div>'
]).replace({
hideBigAttach:this.mbHideBigAttach?1:0,
image_path:ag.getPath('image'),
size:this.Fw(bnE)
}),
nHeight:null,
onload:function()
{
var bW=this;
ag.addEvent(bW.S("link_bigattach"),"click",function(){
bW.close();
initFileTransporter();
});

}

});
},

rmFileCell:function(gU)
{
var ag=getTop();

ag.E(gU,function(av)
{
ag.removeSelf(ag.S("DUploader"+av.get("sId"),window));
});
},











aco:function(av)
{
var bd="Uploader"+av.get("sId");

var cu=document.createElement("div");
cu.className="attsep";
cu.id="D"+bd;



cu.innerHTML=this.aJz(av.get("sUploadMode")).replace(
{
id:av.get("sId"),
name:bd,
value:av.get("sName"),
images_path:getTop().getPath("image",true),
ext:av.get("sUploadMode"),
filename:getTop().htmlEncode(av.get("sName")),
dispfname:atf(av.get("sName")),
size:av.get("nSize")||0,
formatsize:this.Fw(parseInt(av.get("nSize")||0)),
mailattach:av.get("sUploadMode")=="collection"?[av.mailid,av.attachid,av.attachname].join("|"):"",
ftn:av.get("bUpToFtn")
}
);

getTop().S(av.get("bUpToFtn")?"BigAttach":"filecell",window).appendChild(cu);
getTop().show(getTop().S("attachContainer",getTop().getMainWin()),true);

setFileNameToSubject(av.get("sName"));

return this;
},





aea:function()
{
var aNJ=this.hasAttach();
getTop().show(getTop().S('sAddAtt1',window),!aNJ);
getTop().show(getTop().S('sAddAtt2',window),aNJ);
return this;
},




bCl:function()
{
var ae=this;
ae.XO=ae.Ca=ae.amO=null;
return ae;
},





bmy:function()
{
var ae=this;
if(ae.awX)
{
ae.awX.disable();
}
getTop().show(getTop().S("flashUploadContainer",window),false);
return ae;
},






Fw:function(gh)
{
if(isNaN(gh))
{
return"";
}
if(gh>1024*1024)
{
return parseInt(gh*100/(1024*1024))/100.0+"M";
}
if(gh>1024)
{
return parseInt(gh*100/1024)/100.0+"K";
}
return gh+"Byte";
},





byk:function()
{
return(this.aJY||1)-1;
},






aJz:function(cv)
{
var aJP=this.buX,
bU=aJP[cv];

if(cv=="exist")
{
return getTop().TE([
'<div class="attsep" id="ea_$id$" >',
'<span  style="margin-right:5px;">',
'<input type="button" class="ico_att" style="margin:1px 3px 0 0!important;margin:0 -1px 2px 0" />',
'<input type="hidden" id="$id$" name="$attachname$" value="$value$">',
'<span compose_path="$id$" id="eas_$id$">$viewname$</span>&nbsp;',
'<span class="addrtitle">(',
'$@$if($newname$)$@$',
'$newname$&nbsp;',
'$@$endif$@$',
'<span id="sea_$id$">$size$</span>)</span>',
'</span>',
'$@$if($viewfileurl$)$@$',
'<a style="margin-right:5px;" onClick="attachInsertImage(\x27$viewfileurl$\x27)" ><input type="button" class="ico_addpic" />Add to editor</a>',
'$@$endif$@$',
'<a onClick="delExistAttach(\x27$id$\x27);checkReplyAttach();return false">Remove</a>',
'</div>'
]);
}
else if(cv=="exist_big")
{
return getTop().TE([
'<div class="addrtitle attsep" id="eabig_$id$" mode="$mode$">',
'<span style="margin-right:5px">',
'<a href="$downloadlink$"></a>',
'<input type="button" class="ico_attbig" style="margin:0 3px 0 0!important;margin:0 3px 2px 0" />',
'<input type="hidden" name="fid" value="$fid$" />',
'<span  class="black" expiretime="$exptime$">',
'<span>$filename$</span>',
'<span class="addrtitle">&nbsp;($filesize$)</span>',
'</span>',
'</span>',
'<a onClick="delBigAttach(this)">Remove</a>',
'</div>'
])
}
else if(!bU)
{
var LX=[

'<span style="margin-right:5px;">',
'<input type="button" class="',
'$@$if($ftn$)$@$',
'ico_attbig',
'$@$else$@$',
'ico_att',
'$@$endif$@$',
'" style="margin:0 3px 0 0!important;margin:0 3px 2px 0;" />'
];
switch(cv)
{




















case"rawinput":

LX=LX.concat(
[
'<input name="$name$" ext="$ext$" id="$name$" type="hidden" value="$value$" filename="$filename$" filesize="$size$" />',
'<span id="S$name$">$dispfname$</span>&nbsp;<input type="button" class="ss_icon_loading" id="L$name$" style="width:16px;height:15px;padding:0;border:none;margin:0 3px 0 0!important;margin:0 3px 2px 0;" /><span id="SIZE$name$" name="$size$" class="addrtitle" style="display:none;"></span>',
'</span>',
'<span id="E$name$" class="upload_ctrl" ',
'style="display:none;color:red;margin-right:5px;cursor:default">',
'Failed to upload',
'</span>',
]
);
break;

case"collection":
case"netdisk":
case"control":
LX=LX.concat(
[
cv=="collection"?
'<input name="mailattach" ext="$ext$" id="$name$" type="hidden" value="$mailattach$" filename="$filename$" filesize="$size$">':'<input ext="$ext$" id="$name$" type="hidden" value="$value$" filename="$filename$" filesize="$size$" disabled>',
'<span id="S$name$">$dispfname$</span>&nbsp;<span id="SIZE$name$" name="$size$" class="addrtitle">($formatsize$)</span>',
'</span>',
'<span id="W$name$" style="color:grey; margin-right: 5px; cursor: default;">Waiting for uploading</span>',
'<span id="P$name$" class="bd_upload attchUploadstyle" style="display:none">',
'<div id="PB$name$" class="fdbody"></div>',
'</span>',



'<span id="E$name$" class="upload_ctrl" ',
'style="display:none;color:red;margin-right:5px;cursor:default">',
'Failed to upload',
'</span>',

]
);
break;
}
aJP[cv]=bU=getTop().TE(LX.concat([
'<span class="upload_ctrl" >',
'<a id="R$name$" style="margin-right:5px;display:none;" onclick="',

'QMAttach.retryUpload(\x27$id$\x27)',
'">','Retry</a>',
'<a id="V$name$" style="display:none;margin-right:5px;" onclick="attachInsertImage(this.getAttribute(\x27viewfileurl\x27));"><input type="button" class="ico_addpic" />Add to editor</a>',
'<a onclick="delAttach(\x27$name$\x27);return false" >Remove</a>',





'</span>'

]));
}

return bU;
},





bNm:function()
{
return(this.aJY++);
},




bqN:function()
{
var boU=this.oFileUploadMgr.getUploadList("ready");
return boU.length?boU[0]:null;
},




bsM:function()
{
return this.oFileUploadMgr.getUploadList().length
},




aIq:function(oZ)
{
return this.oFileUploadMgr.getUploadList(oZ).length
},





arW:function()
{
if(!getTop().goUserInfo.get("UPLOADEXPIRE"))
{
return true;
}

var ag=getTop();
new ag.QMDialog({
sId:"attachAlert",
sTitle:"QQMail Tips",
sBodyHtml:ag.T([
'<div class="dialog_feedback">',
'<span class="dialog_icon icon_info_b"></span>',
'<div class="dialog_f_c" style="font-size:12px;padding-top:0;width:330px;">',
'\u60A8\u6700\u8FD124\u5C0F\u65F6\u5185\u53D1\u9001\u8D85\u8FC7<b style="color:red;"> $size$M </b>\u7684\u666E\u901A\u9644\u4EF6\uFF0C\u572824\u5C0F\u65F6\u671F\u6EE1\u524D\u5C06\u4E0D\u80FD\u53D1\u9001\u5927\u9644\u4EF6\uFF0C\u4E3A\u4FDD\u8BC1\u670D\u52A1\u8D44\u6E90\u5408\u7406\u5229\u7528\uFF0C\u8BF7\u6539\u7528"\u8D85\u5927\u9644\u4EF6"\u529F\u80FD\u53D1\u9001\u3002',
'</div>',
'</div>',
'<div class="dialog_operate">',
'<input class="wd2 btn" type=button id="confirm" value=Confirm Style="margin-right:5px;" >',
'<input class="wd2 btn" type=button id="cancel" value=Cancel>',
'<div class="clr"></div>',
'</div>'
]).replace(
{
imgPath:ag.getPath("image"),
size:200
}),
onload:function(){
var bW=this;
ag.addEvent(bW.S("confirm"),"click",function(){
bW.close();
initFileTransporter();
});
ag.addEvent(bW.S("cancel"),"click",
function(){bW.close()});

},
onshow:function(){
this.S("confirm").focus();
}
});

return false;
},




apu:function(fN)
{
var aJX=this.btk.split("|"),
kX=false,
bua=(fN||"").split(".").pop().toLowerCase();
for(var i=0;i<aJX.length;i++)
{
if(bua==aJX[i])
{
kX=true;
}
}
return kX;
},





aUE:function(aPR)
{
if(aPR)
{
debug(["_asComposePath",aPR])
var aVP=getTop().S(aPR,window);

aVP&&getTop().removeSelf(aVP);
}
},

























awJ:function(fN)
{
var btO=fN.length,
aMs=btO-6,
bow=fN.substr(0,aMs),
bpf=fN.substr(aMs);

return getTop().subAsiiStr(bow,8,"...")+bpf;
},






bjs:function(vH)
{
vH=vH.toLowerCase();
if(vH.indexOf("k")!=-1)
{
return parseFloat(vH)*1024;
}
if(vH.indexOf("m")!=-1)
{
return parseFloat(vH)*1024*1024;
}
return parseFloat(vH);
},




aTf:function(ay,bry,boE)
{
var bd="Uploader"+ay,
ag=getTop();

ag.E(bry.split("|"),function(arY)
{

ag.show(ag.S(arY+bd,window),true);

}
);

ag.E(boE.split("|"),function(arY)
{

ag.show(ag.S(arY+bd,window),false);
}
);

return this;
},




RU:function(sP,oZ,Sv,hL)
{
if(!sP)
{
return this;
}
var aJ=sP.get("sId"),
ZZ="",
Qo="",

aYm=typeof sP.bQ=="string";


switch(oZ)
{
case"ready":
Qo="E|O|R|P";
ZZ="W";
break;
case"uploading":
if(aYm)
{
Qo="W|E|O|R|P";
}
else
{
ZZ="P";
Qo="W|E|O|R";

}
break;
case"complete":
Qo="W|E|O|R|P|L";
if(sP.get("sFileUrl"))
{
ZZ="|V";
getTop().S("VUploader"+aJ,window).setAttribute("viewfileurl",sP.get("sFileUrl"));
}


if(sP.get("bUpToFtn"))
{
var bZI=getTop().S("DUploader"+aJ,window);
getTop().insertHTML(bZI,"afterEnd",
QMAttach.aJz("exist_big").replace(
{
id:sP.get("sId"),
downloadlink:sP.get("sDownloadPage"),
exptime:sP.get("nServerSecond")+sP.get("nExpireTime"),
filename:atf(sP.get("sName")),
filesize:this.Fw(parseInt(sP.get("nSize")||0)),
fid:sP.get("sFileId")
})
);
getTop().removeSelf(bZI);
this.EV();
break;
}
else
{
if(/Rawinput/.test(sP.get("sType"))&&sP.get("nSize"))
{
var aoO=getTop().S("SIZEUploader"+aJ,window);
aoO.innerHTML="("+this.Fw(parseInt(sP.get("nSize")||0,10))+")";
getTop().show(aoO,true);
}
this.EV();
break;
}
case"error":
if(aYm)
{
ZZ="E|R";
Qo="W|O|P";
}
else
{
ZZ="E|O|R";
Qo="W|P|L";
}

var bdJ=getTop().S("EUploader"+aJ,window),
pT=sP.get("sError")||"";

if(bdJ)
{
if(/cgi,-501,ftnCreatefile/.test(pT))
{
bdJ.innerHTML="The remaining capacity of FTN was not enough";
}
else if(/cgi,-113,ftnCreatefile/.test(pT))
{
bdJ.innerHTML="File including senstive words";
}
else if(/cgi,-2/.test(pT))
{
bdJ.innerHTML="Expired ";
}
bdJ.title=getTop().T("Error type: $type$\nError description: $msg$").replace(
{
type:sP.get("sType"),
msg:pT.split(",").slice(0,2).join(",")
}
);
}
this.EV();
break;
}





return this.aTf(aJ,ZZ,Qo);
},



EV:function()
{
var ae=this,
Fn=ae.bqN();

if(!Fn&&!this.isUploading()&&typeof(ae.onfinish)=="function")
{
try
{
ae.onfinish.call(ae);
}
catch(aL)
{
getTop().doPageError(aL.message,"compose.js","QMAttach.onfinish");
}
ae.onprogress=null;
ae.onfinish=null;
}
},

getInfoUid:function(bov)
{
var aF=[];

getTop().E(this.oFileUploadMgr.getUploadList("complete"),function(av){
if(bov[av.get("sFileId")])
{
aF.push({
name:getTop().htmlEncode(av.get("sName")),
id:"Uploader"+av.get("sId")
});
}
});
return aF;
},
netDiskEvent:function()
{
var ag=getTop(),
ae=this,
adx=QMAttach.oFileUploadMgr;

function cJz(qn,az)
{
ag.QMNetDisk.progress(az.taskid,function(hB,aGG,bKd)
{
if(hB>=100)
{

ae.aOA.callBack("oncomplete",[
qn.set(
{
nPercent:100,
sStatus:"complete",
sFileId:aGG.fieldid,
sFileUrl:"jpg,png,bmp,gif,jpeg".indexOf((qn.get("sName").split(".").pop()+"").toLowerCase())>-1
&&ag.T("/cgi-bin/download?sid=$sid$&upfile=$fileid$").replace({
sid:ag.getSid(),
fileid:aGG.fieldid
})||""
})
]);
}
else if(hB>0)
{
ae.aOA.callBack("onprocess",[
qn.set(
{
nPercent:hB,
sStatus:"uploading"
})
]);
}
else if(hB<0)
{
ae.aOA.onerror(
qn.set(
{
nPercent:0,
sError:bKd
}
)
);
}
});
};

ag.QMNetDisk.addEvent(ag.QMNetDisk.EVENT.SELECT,function(kj)
{
for(var i=0;i<kj.length;i++)
{
var as=kj[i],
bkz=ae.aOA.addFile({
sPath:as.sPath,
sName:as.sName,
nSize:as.nSize,
sStatus:"ready"
});

bkz.bQ=[as];

bkz.set(
{


"sType":as.sType,
"bVirtual":"true"
}
);

bkz.upload=function(qn,dB)
{
return function()
{

if(adx.isUploading())
{
return;
}

ae.aOA.callBack("onprocess",[
qn.set(
{
nPercent:0,
sStatus:"uploading"
})
]);


ag.QMNetDisk.download(qn.bQ[0].sType,qn.bQ[0].sPath,
{
onsuccess:function(az)
{
qn.bQ[0].sTaskid=az.taskid;

cJz(qn,az);
},
onfailed:function(bKd)
{
ae.aOA.onerror(
qn.set(
{
nPercent:0,
sError:bKd
}
)
);
}
});
}
}(bkz,i);


QMAttach.oFileUploadMgr.oCfg.onselect.call(QMAttach.oFileUploadMgr,[bkz],"netdisk");

}
});
},
initFileUpload:function(aj)
{
var ag=getTop(),
ae=this,
cht=200,
adx=QMAttach.oFileUploadMgr;

ag.waitFor(function()
{
return!!ag.QMFileUpload
&&!!ag.S('AttachFrame',window)
&&(!aj.isNetDiskEnable||aj.isNetDiskEnable&&ag.QMNetDisk);
},
function(aP)
{
if(aP)
{
getTop().osslogAjaxCompose(100);

var baY=
{
onselect:function()
{
adx.oCfg.onselect.apply(adx,arguments);
},

onprocess:function()
{
adx.oCfg.onprocess.apply(adx,arguments);
},

oncomplete:function()
{
adx.oCfg.oncomplete.apply(adx,arguments);
},

onerror:function()
{
adx.oCfg.onerror.apply(adx,arguments);
}
};

ae.bSd=ag.QMFileUpload.create("base",baY);


if(aj.isNetDiskEnable)
{
ae.aOA=ag.QMFileUpload.create("base",baY);
QMAttach.netDiskEvent();
}


















































ae.bjN=ag.QMFileUpload.create("popup",
ag.extend(
{
oContainer:ag.S('AttachFrame',window)
},baY)
);

if(ae.bjN.name=="FlashPopupMail")
{
var aQW=getTop()["__UploadSvrProxy__"],
bk={},
cWG=location.protocol;

if(cWG=="https:"||!aj.sFlashMode||aj.sFlashMode=="RawPost")
{
bk.sFlashMode="RawPost";
}
else 
{
bk.sFlashMode=aj.sFlashMode;
if(!aQW)
{
bk.sUrl='http://upload.mail.qq.com/cgi-bin/uploadfile';
ae.bjN.initConfg(bk);


getTop().loadJsFile("http://upload.mail.qq.com/proxyinfo.js",true,getTop().document,
function()
{
aQW=getTop()["__UploadSvrProxy__"];
if(aQW&&aQW.ip)
{
bk.sUrl="http://"+aQW.ip+"/cgi-bin/uploadfile";
ae.bjN.initConfg(bk);
}
},{},true);
}
else
{
bk.sUrl="http://"+aQW.ip+"/cgi-bin/uploadfile";
ae.bjN.initConfg(bk);
}
}
}

ae.deb=ag.QMFileUpload.create("paste",
ag.extend(
{
oContainer:document.body
},baY)
);

ae.initDragAndDropContainer();

ae.dgq=ag.QMFileUpload.create("drag",
ag.extend(
{
oContainer:ae.ZA.lastChild
},baY)
);

QMAttach.dragOverEvent();

var rb="moreupload",
bFU=ag.S(rb,window);

bFU.onclick=function()
{

var bP=ag.calcPos(ag.S("AttachFrame",window)),
oJ=[
{sId:'drag',sItemValue:'Drag and drop to upload'},
{
sId:'attachfolder',
sItemValue:'Select from favorites'
}];

if((aj.attachs&&aj.attachs.length
||aj.bigattachs&&aj.bigattachs.length)&&window["attachflag"]!="replyattach")
{
oJ.push(
{
sId:'addExist',
sItemValue:'Add attachment from original message'
}
);
cht=280;
}


if(aj.isNetDiskEnable&&ag.QMNetDisk)
{
var Mv=ag.QMNetDisk.getInfo();
if(Mv.nNum)
{
for(var i in Mv.oBound)
{
oJ.push(
{
"weiyun":
{
sId:Mv.oBound[i].sAlias,
sItemValue:'From micro cloud '
},
"dropbox":
{
sId:Mv.oBound[i].sAlias,
sItemValue:'From Dropbox'
},
"googledrive":
{
sId:Mv.oBound[i].sAlias,
sItemValue:'From Google Drive'
}
}[i]
);
}
}

Mv.nMax>Mv.nNum
&&oJ.push(
{
sId:'bindNetDisk',
sItemValue:'\u7ED1\u5B9A\u5176\u4ED6\u7F51\u76D8...'
}
);
}

var aYJ;
if(ag.S("bigAttachLink",window))
{
aYJ=ag.calcPos(ag.S("bigAttachLink",window))[2]+4;
}
else
{
aYJ=bP[2]+(ag.gbIsIE?-7:2);
}
var ez=ag.QMMenu(rb);
if(!ez||!ez.isShow())
{
ag.hideMenuEvent();
new ag.QMMenu({
oEmbedWin:window,
sId:rb,
nX:bP[3],
nY:aYJ,
nItemHeight:21,

nWidth:ag.getLocale()=="zh_CN"?150:cht,
oItems:oJ,
onitemclick:function(ay)
{


switch(ay)
{
case'drag':
if(!ae.dgq)
{
showInstallActiveXDialog();
}
else
{
ae.aOc(true);
}
break;
case'attachfolder':
openAttachFolder();
break;
case'addExist':
addExistAttach({attach:aj.attachs},true)
addExistAttach_Big({bigattach:aj.bigattachs});
ag.ossLog("delay","all","stat=nothing&loc=compose,rlyatt,0,0");
ag.show("attachContainer",true,ag.getMainWin());
window["attachflag"]="replyAllAttach";
var btz=ag.S("domnewRcpt",window);
ag.show(btz,0);
getInputObj("newrcpt",null,false).value="";
break;
case'bindNetDisk':
ag.QMNetDisk.route("bind");
break;
case ag.QMNetDisk.CONST.TYPE_WEIYUN:
case ag.QMNetDisk.CONST.TYPE_DROPBOX:
case ag.QMNetDisk.CONST.TYPE_GOOGLEDRIVE:
ag.QMNetDisk.route("list",ay,QMAttach.oFileUploadMgr.getTotalSize());
break;
}
}
});
}
}
}
});
},


onmgrprocess:function(av)
{
var ae=this,
aw=getTop().S("PBUploader"+av.get("sId"),window);

if(aw)
{
debug(av.get("nPercent"));
aw.style.width=Math.round(av.get("nPercent"))+"%";
}

if(ae.onprogress)
{
try
{
if(av.get("nPercent")<0)
{
ae.onprogress.call(ae,-1);
}
else
{
var yx=ae.oFileUploadMgr,
dp=QMAttach.cRZ(),
bRM=yx.getUploadList("ready"),
bdd=0;
for(var i=0,l=bRM.length;i<l;i++)
{
var US=bRM[i].get("nSize")?(+bRM[i].get("nSize")):0;
bdd=bdd+US;
}
bdd=bdd+(100-av.get("nPercent"))/100*av.get("nSize");

ae.onprogress.call(ae,(dp-bdd)/dp*100);
}
}
catch(aL)
{
}
}

this.RU(av,av.get("sStatus"));
},


onmgrerror:function(av)
{
this.RU(av,av.get("sStatus"));
},


onmgrcomplete:function(av)
{
this.RU(av,av.get("sStatus"));
},

cNs:function(gU,eN)
{
var ag=getTop(),ae=this,
Ys=[],wv=[],ccg=[];

ag.E(gU,function(av)
{
var bLq=av.get("nSize");
if(typeof bLq!="undefined"&&av.get("nSize")<=0)
{
Ys.push(av.get("sName"));
av.destroy();
}
else if(ae.apu(av.get("sName")))
{
wv.push(av.get("sName"));
av.destroy();
}
else
{
ccg.push(av);
}
});
gU=ccg;

if(Ys.length>0||wv.length>0)
{
ag.alertBox(
{
msg:ag.TE(
[
'$@$if($sizedisp$)$@$',
'<div class="dialog_f_t">The size of following file(s) are 0,please check and try again.</div>',
'<div class="dialog_f_d addrtitle" style="width:400px;max-height:160px;_white-space:nowrap;word-wrap:break-word; word-break:break-all; overflow:hidden; text-overflow:ellipsis;">$sizefiles$</div>',
'$@$else if($typedisp$)$@$',
'<div class="dialog_f_t">excutable file was not allowed to send for security reasons.</div>',
'<div class="dialog_f_d addrtitle" style="width:400px;max-height:160px;_white-space:nowrap;word-wrap:break-word; word-break:break-all; overflow:hidden; text-overflow:ellipsis;">$typefiles$</div>',
'$@$endif$@$'
]).replace(
{
sizedisp:Ys.length,
sizefiles:getTop().htmlEncode(Ys.join(", ")),
typedisp:wv.length,
typefiles:getTop().htmlEncode(wv.join(", "))
}
),
title:"Warning",
onreturn:function()
{
eN(gU);
}
}
);
}
else
{
eN(gU);
}
},

cMl:function(gU,ddr,cRr,eN)
{
var ag=getTop(),ae=this;

new ag.QMDialog({
sTitle:"Attachment tips",
sBodyHtml:ag.TE([
'<div style="padding:10px 0 5px 10px;text-align:left;">',
'<img src="$image_path$ico_question12fb20.gif" align="absmiddle" style="float:left;margin:5px 10px 0;">',
'<div style="padding-top:10px;word-break:break-all;line-height:150%;margin:0 10px 10px 65px;" class="b_size">',
'$@$if($overtotal$==1)$@$',
'<div class="bold" style="margin-bottom:10px;">Total size of attachment(s) is over $totalsize$M</div>',
'$@$else$@$',
'<div class="bold" style="margin-bottom:10px;">some of attachment you add was over $singlesize$M</div>',
'$@$endif$@$',
'Recommended to send it as Large Attachment$@$if($locale$ == "zh_CN")$@$($aboutmore$)$@$endif$@$. <br>',
'<div class="addrtitle">Large Attachment will be stored temporarily and removed to save storage space.<br/> The recipient can download the file with high speed. </div>',
'</div>',
'</div>',
'<div style="text-align:right;">',
'<div style="padding:0 27px 12px 0;" id="dlgtype" dlgtype="$overtotal$">',
'<input class="btn_gray btn_input btn_space" id="bigAttSend" type="button" value="Send it as a Large Attachment" /> ',
'$@$if($overtotal$==1)$@$',
'<a class="btn_gray" id="cancel" value="" nocheck="true">Cancel upload</a> ',
'$@$else$@$',
'<a class="btn_gray" id="send" value="" nocheck="true">Send  as normal attachments</a> ',
'$@$endif$@$',
'</div>',
'</div>'
]).replace(
{
locale:ag.getLocale(),
image_path:ag.getPath("image"),
aboutmore:'<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&no=1000593&&id=35" target="_blank">More&hellip;</a>',
singlesize:ae.ceH,
totalsize:ae.anW,
oversingle:cRr?1:0,
overtotal:ddr?1:0
}),
onshow:function(){
this.S("bigAttSend").focus();
},
onload:function(){
var cG=this,bFa=cG.S("dlgtype").getAttribute("dlgtype");

ag.addEvent(cG.S("bigAttSend"),"click",function()
{
eN(true);
ag.ossLog("delay","all","stat=nothing&locval=qmattach,toftn,1,"+bFa);
cG.close();
}
);
ag.addEvent(cG.S("send"),"click",function()
{
eN(false);
ag.ossLog("delay","all","stat=nothing&locval=qmattach,toftn,0,"+bFa);
cG.close();
}
);
ag.addEvent(cG.S("cancel"),"click",function()
{
ag.ossLog("delay","all","stat=nothing&locval=qmattach,toftn,-1,"+bFa);
cG.close();
}
);
}
});
},

onmgrselect:function(gU,eN)
{
var ag=getTop(),ae=this,
caT=function()
{
ag.E(gU,function(av)
{
av.destroy();
});
};

if(!ae.arW())
{
caT();
return;
}

ae.cNs(gU,function(gU)
{
var cnk=0,bRw,bsO;
ag.E(gU,function(av)
{
var bLq=av.get("nSize");
if(typeof bLq!="undefined")
{
if(av.get("nSize")>ae.ceH*1024*1024)
{
bRw=true;
}
cnk+=av.get("nSize");
}
});

if(ae.getAttachSize()+cnk>ae.getAttachLimit())
{
bsO=true;
}

if(bsO&&!gU[0].uploadToFtn)
{
ae.showAttachLimit(ae.getAttachLimit());


var aMg=getTop().getMainWin(),
FU=aMg.QMAddrInput,
aLs=0;

FU&&getTop().E(FU.get("to",aMg).get("json"),
function(bf)
{
if(/qq.com$/gi.test(bf.addr))
{
aLs=1;
return false;
}
}
);
getTop().ossLog("delay","all","stat=custom&type=attbigsize&info="
+[aLs,ae.getAttachSize()+gU[0].get("nSize")].join(","));

caT();
}
else if((bsO||bRw)&&gU[0].uploadToFtn)
{
ae.cMl(gU,bsO,bRw,function(cRv)
{
if(cRv)
{
if(getTop().detectActiveX(3))
{
initFileTransporter(true);
}
else
{
ag.E(gU,function(av)
{
av.set("bUpToFtn",true);
ae.aco(av);
});
eN(gU);
}
}
else
{
ag.E(gU,function(av)
{
ae.aco(av);
});
eN(gU);
}
});
}
else
{
ag.E(gU,function(av)
{
ae.aco(av);
});
eN(gU);
}


ae.aea();
});



}
};





QMAttach.oFileUploadMgr=cTg({



onselect:function(gU)
{
var ae=this,
ag=getTop();

QMAttach.hideDragAndDropContainer();

!gU.length
&&(gU=[gU]);
ag.osslogAjaxCompose(101);

ag.E(gU,function(av)
{
av.set("sUploadMode",ae.dfg(av));
});

QMAttach.onmgrselect(gU,function(gU)
{

ag.E(gU,function(av)
{
av.set("sFrom","attachToFtn");
ae.addFile(av);
});
});
},
onprocess:function(av)
{
QMAttach.onmgrprocess
&&QMAttach.onmgrprocess.call(QMAttach,av);
},
onerror:function(av)
{
getTop().osslogAjaxCompose(102);
getTop().osslogAjaxCompose(104);


debug(["QMFileUpload ONERROR",av.get("sType"),av.get("nPercent"),av.get("sError")].join(" : "));

if(/FlashPopup/.test(av.get("sType")))
{

QMAttach.bjN.initConfg({sFlashMode:"RawPost"});


}
QMAttach.onmgrerror
&&QMAttach.onmgrerror.call(QMAttach,av);

this.adA(av);
},
oncomplete:function(av)
{
getTop().osslogAjaxCompose(102);
getTop().osslogAjaxCompose(103);
QMAttach.onmgrcomplete
&&QMAttach.onmgrcomplete.call(QMAttach,av);

this.adA(av);
}
});

function cTg(ao)
{
var yx={};
yx.si=[];
yx.bLu={};
yx.oCfg=ao;

yx.moTmpSelect=[];

function Uc(av)
{
return av[av.uploadToFtn&&av.get("bUpToFtn")?"uploadToFtn":"upload"]();
}

getTop().extend(yx,
{
addFile:function(av)
{
if(this.Ll(av)&&!this.isUploading())
{

Uc(av);
}
},

initFileList:function(als)
{


QMAttach.addExistFileCell(this.setUploadData(als));
},
rmFile:function(av)
{
var dC=av.get("sStatus");
if(this.boy(av)&&dC=="uploading")
{


av.cancel();

this.adA(av);
}
av.destroy&&av.destroy();
getTop().osslogAjaxCompose(105);
},

retry:function(av)
{
if(this.agT(av)&&!this.isUploading())
{

Uc(av);
}
},


isUploading:function()
{

var bO=this.si;
for(var i=0,l=bO.length;i<l;i++)
{
if(bO[i].get("sStatus")=="uploading")
{
return true;
}
}
},

getTotalSize:function()
{
var ky=0,
bO=this.si;
for(var i=0,l=bO.length;i<l;i++)
{
!bO[i].get("bUpToFtn")
&&
(ky=ky+(+bO[i].get("nSize")));
}
return ky;
},

getFileById:function(ay)
{
var bO=this.si;
for(var i=0,l=bO.length;i<l;i++)
{
if(ay==bO[i].get("sId"))
{
return bO[i]
}
}
},

setUploadData:function(ju)
{
var FI=function(aI)
{
return this[aI];
};





var eg=this.si=[];
for(var i=0,l=ju.length;i<l;i++)
{
eg.push(getTop().extend({},ju[i]));
eg[i].get=FI;
}
return eg;
},
getUploadList:function(aq)
{
var bO=this.si,
aCI=[],
dC;

for(var i=0,l=bO.length;i<l;i++)
{
dC=bO[i]['sStatus']||bO[i].get("sStatus");
if(!aq||aq==dC)
{
aCI.push(bO[i]);
}
}

return aCI
},
getUploadListExclude:function(aq)
{
var bO=this.si,
aCI=[],
dC;

for(var i=0,l=bO.length;i<l;i++)
{
dC=bO[i]['sStatus']||bO[i].get("sStatus");
if(aq!=dC)
{
aCI.push(bO[i]);
}
}
return aCI
},
getUploadData:function()
{
var bO=this.getUploadList("complete"),
aCI=[];
for(var i=0,l=bO.length;i<l;i++)
{
aCI.push(bO[i].get()||bO[i]);
}
return aCI
},




dah:function(av)
{
return!!this.bLu[this.bED(av)]
},

dfg:function(av)
{
return({
RawinputPopupMail:"rawinput",
Base:"collection",
googledrive:"netdisk",
dropbox:"netdisk",
weiyun:"netdisk"
})[av.get("sType")]||"control";
},
cLT:function(av)
{
var bO=this.si;
dI=this.bDF(av);
for(var i=dI+1,l=bO.length;i<l;i++)
{
if(bO[i].get("sStatus")=="ready")
{
return bO[i]
}
}
},
bED:function(av)
{
return[av.get("sType"),av.get("sId")].join("_")
},
bDF:function(av)
{
var dI=-1,
bO=this.si;
for(var i=0,l=bO.length;i<l;i++)
{
if(bO[i].get("sId")==av.get("sId"))
{
dI=i;
break;
}
}
return dI;
},

adA:function(av)
{
var cdw=this.cLT(av);
if(cdw)
{
Uc(cdw);
}
},

Ll:function(av)
{


var cWh=this.dah(av);
if(!cWh)
{
this.bLu[this.bED(av)]=av;
this.si.push(av);
return true;
}
},

cvb:function(als)
{
var bQe={};
bQe.sStatus=als.sStatus;
bQe.sId=als.sId;
bQe.sType=als.sType;
},
boy:function(av)
{
var dI=this.bDF(av);

if(dI>-1)
{
delete this.bLu[this.bED(av)];
this.si.splice(dI,1);
return true;
}
},

agT:function(av)
{
var dI=this.bDF(av);

if(dI>-1)
{
av.set(
{
sStatus:"ready",
nPercent:0
}
);
this.si=this.si.concat(this.si.splice(dI,1));
return true;
}
}
}
);

return yx;
};


function openNewWinEdit()
{
cEG("opener");
getTop().goNewWin(location.pathname+location.search+'&plusopener=1');
return false;
}






function initComposeForPage(iS,aj)
{
var ag=getTop();
if(getPageId())
{
return;
}

if(!goCompose.agU)
{
var aqi="";

goCompose.agU=setTimeout(function(){

if(ag.QMEditor)
{
aqi=(ag.QMEditor.isInitialized)?"inited":"noInited";
}
else
{
aqi="noEditor";
}

ag.ossLog("delay","all","stat=nothing&locval=editorErr,"+aqi+","+iS);
},20*1000);
}

if(!ag.QMEditor&&!aj.nowait)
{
ag.loadJsFileToTop(["$js_path$com/kits/qmeditor/qqmail/release/editor1341a3.js"]);

var aZS=arguments,
ae=this;

return setTimeout(
function()
{
aZS.callee.apply(ae,aZS);
},
50
);
}

if(!ag.QMFileUpload)
{
ag.loadJsFileToTop(["$js_path$com/kits/qmfileupload/js/qmfileupload131cca.js"]);
}


arguments.callee.pageId=iS;
arguments.callee.pageConfig=aj;

var aVN={
"compose":bFI,
"group":bPx,
"groupsms":bEA,
"card":bLX,
"voice":bHF,
"postcard":bGk,
"qq":bRG,
"readmailGroup":bKj,
"note":bHM,
"noteFirstPage":bKJ,
"remind":bLy,
"readmailConv":bFf,
"qfcompose":bQI
}[iS];
if(aVN)
{
aVN(iS,aj||{});


}

ag.addEvent(window,"unload",function()
{
ag.cancelDoSend();
ag.QMDialog("composeExitAlert","close");
}
);

ag.setKeepAlive(window);


if("1"==ag.gbBackGroundSend)
{
ag.loadJsFileToTop(["$js_path$backsend131cca.js"]);
}

ag.loadJsFileToTop(["$js_path$composeresp131cca.js"]);
ag.loadJsFileToTop(["$js_path$libcompose131cca.js"]);


ag.osslogAjaxCompose(1);
if(goCompose.sIphoneUpImgKey=="")
{
goCompose.sIphoneUpImgKey=(new Date()).valueOf();
}
}

function cxH(au,aZu)
{
var axT=["self","attach"];
for(var n=0;n<axT.length;n++)
{
var bd=axT[n];
if(au[bd]&&getTop().QMDialog("ftnupload_"+bd))
{
for(var i in au[bd].moFile)
{
aZu.moFile[i]=au[bd].moFile[i];
aZu.moFile[i].listType=bd;
}
aZu.mnUploaderCount+=au[bd].mnUploaderCount||0;
}
}
}
function cxD()
{
var axT=["self","attach"];
for(var n=0;n<axT.length;n++)
{
try
{
getTop().QMDialog("ftnupload_"+axT[n]).close();
}
catch(e){}
}
}
function cDr(au)
{
var ape=0;
for(var i in au)
{
ape++
}
return ape;
}
function cEy(au)
{
var cuJ=au||{},
ag=getTop();
for(var i in cuJ)
{
ag.removeSelf(ag.S("BigAttach_"+i,window));
}
};


































































































function aiH()
{
if(goCompose.agU)
{
clearTimeout(goCompose.agU);
goCompose.agU=null;
}
}






function Bz(aj)
{
var acQ={
"card":"card",
"voice":"voice"
}[getPageId()];

var bcZ={
"note":true
}[getPageId()];

function Hz(cv,aGH)
{
var eA=JA();
var bbP=eA.sendtime;
var aZb=eA.verifycode;
var bbj=eA.verifycode_cn;


if(bbP&&cv!="keeptimer"
&&(!aZb||!aZb.value)
&&(!bbj||!bbj.value))
{
bbP.value=0;
}

if(typeof(aj.onsend)=="function")
{
aj.onsend.call(this,aj);
}
else
{
if(aj.safemode
&&JA().action.indexOf("groupmail_send")==-1)
{
alert('You are currently using Read Only Mode of QQMail, message is able to be sent normally but unable to be saved to "Sent".');
}
doProcess(aj.t||"",acQ||"send",bcZ,aGH);
}

return false
};

function bPk()
{
goCompose.beA=true;
if(typeof(aj.onsave)=="function")
{
aj.onsave.call(this,aj);
}
else
{
doProcess("savedraft",acQ||"save",bcZ);
}
return false;
};
function initTimeSendDlg(ao,bxJ,byC)
{

var ag=getTop(),
ayM=ao.sendtimeyear,
aWr=ao.sendtimemonth,
aYS=ao.sendtimeday,
bAm=ao.sendtimehour,
bCy=ao.sendtimemin,
ckm=ao.confirmbtn||"Send",
iU=ao.title||"Send later",
caL=ag.TE([
'<div style="padding:20px 28px;text-align:left;" $@$if($sLocale$=="en_US")$@$class="btn_select_short_en"$@$endif$@$>',
'<div style="_zoom:1;">$tip$<span id="sendTimeType"></span></div>',
'<div id="sendTimeContainer" style="margin:6px 0 8px -4px;font-family:Tahoma">Loading...</div>',
'<div class="clr"></div>',
'<div class="addrtitle" id="sendtimemsg" style="margin-top:10px;"></div>',
'</div>'
]);
ag.loadJsFile("$js_path$qmlunar131cca.js",true);
ag.loadJsFile("$js_path$qmdatectrl131f73.js",true);
var ccJ=ao.timetips||"Select the sending time:",
Sa=null;
new ag.QMDialog({
sId:"timeSend",
sBodyHtml:caL.replace({
tip:ccJ,
sLocale:getTop().getLocale()
}),
sFootHtml:ag.T([
'<input id="confirm" class="wd2 btn btn_true" type="button" value="$confirmBtn$" />',
'<input id="cancel"  class="wd2 btn btn_true" type="button" value="Cancel" />'
]).replace({
confirmBtn:ckm
}),
sTitle:iU,
nWidth:470,

onshow:function(){
this.S("cancel").focus();
},
onload:function(){
var bW=this;
ag.addEvent(bW.S("confirm"),"click",function()
{
var iC=Math.floor((Sa.get("solarDate")-ag.now())/(60*1000))

if(iC<0)
{
return ag.showError("The time you set is out of date.");
}
if(iC<5)
{
return ag.showError("The time you set is too close to present.");
}

bxJ&&bxJ(bW);
bW.close();
});
ag.addEvent(this.S("cancel"),"click",function()
{
bW.close();
});
},

onbeforeclose:function()
{
var bW=this;
byC&&byC(bW)
return true;
}

});

ag.waitFor(function()
{
return ag.Lunar&&ag.QMDateCtrl;
},
function(aP)
{
if(!aP)
{
ag.loadJsFile("$js_path$qmlunar131cca.js",true);
ag.loadJsFile("$js_path$qmdatectrl131f73.js",true);
return;
}
if(!ayM.value)
{

aNU(new Date(ag.now()+3600*1000));
}
var dV=ag.QMDialog("timeSend");
var avn=dV&&dV.S("sendTimeType");
if(avn&&ag.getLocale()=="zh_CN")
{
avn.innerHTML=ag.T('(<input type="radio" name="dateType" id="solar_radio" checked/><label for="solar_radio">\u516C\u5386</label><input type="radio" name="dateType" id="lunar_radio"/><label for="lunar_radio">\u519C\u5386</label>)');
}

ag.E(avn.getElementsByTagName("input"),function(cI){
var tD=cI.id=="lunar_radio";
cI.onclick=function(){
Sa.changeDateType(tD,"sameday");
};
});
var asu=dV&&dV.S("sendTimeContainer");

if(asu)
{
asu.innerHTML="";
}
debug([ayM.value,aWr.value,aYS.value])
Sa=new ag.QMDateCtrl({
container:asu,
type:ag.QMDateCtrl.LUNAR_LEAP_SUPPORT,
year:{current:ayM.value,end:parseInt(ayM.value)+2},
month:{current:aWr.value},
day:{current:aYS.value},
hour:{current:bAm.value},
minute:{current:bCy.value},
onchange:function(Qe)
{
aNF(Qe);
}
});
aNF(Sa);
}
);
return false;

function aNU(iN)
{
ayM.value=iN.getFullYear();
aWr.value=iN.getMonth()+1;
aYS.value=iN.getDate();
bAm.value=iN.getHours();
bCy.value=iN.getMinutes();
}

function aNF(Qe)
{
var jG=Qe.get("solarDate");
var dV=getTop().QMDialog("timeSend");
var aw=dV&&dV.S("sendtimemsg");
if(Qe.get("isLunar"))
{
if(aw)
{
var ceK=getTop().TE('\u65E5\u671F\u7B49\u540C\u4E8E&nbsp;<span class="black bold">\u516C\u5386\u7684$year$\u5E74$month$\u6708$day$\u65E5</span>&nbsp;\uFF0C\u5C4A\u65F6\u4E8E&nbsp;<span class="black bold">$hour$:$@$if($minute$<10)$@$0$@$endif$@$$minute$</span>&nbsp;\u6295\u9012\u3002');
aw.innerHTML=ceK.replace({
year:jG.getFullYear(),
month:jG.getMonth()+1,
day:jG.getDate(),
hour:jG.getHours(),
minute:jG.getMinutes()
});
}
}
else
{
if(aw)
{
aw.innerHTML=getTop().T('The message will be sent at&nbsp;<span class="black bold">$time$</span>&nbsp;.').replace({
time:getTop().QMTimeLang.formatRefer(jG)
});
}

}
aNU(jG);
};
}

function bfP(ah,aGH,UG)
{
var ag=getTop();
UG=(typeof(UG)=="undefined"?0:UG);
if(!aGH&&!doProcessCheck("",acQ||"send",UG,function(aIm)
{
bfP(ah,false,aIm);
}))
{
return false;
}
var bdB=JA().sendtimetip;
initTimeSendDlg(
{
sendtimeyear:getInputObj("sendtimeyear"),
sendtimemonth:getInputObj("sendtimemonth"),
sendtimeday:getInputObj("sendtimeday"),
sendtimehour:getInputObj("sendtimehour"),
sendtimemin:getInputObj("sendtimemin"),
confirmbtn:"Send",
title:"Send later",
timetips:bdB&&bdB.value||"Select the sending time:"
},function(au)
{
au.S("confirm").setAttribute("selected","true");
},function(au)
{
if(au.S("confirm").getAttribute("selected")=="true")
{
getInputObj("sendtime").value=1;
setTimeout(function()
{
Hz("keeptimer",true);
}
);
}
else
{
var aZ=getPageEditor();
aZ&&aZ.focus();
}
return true;
});
return false;
};


function aGU(Jh)
{
return function(jE)
{
jE.onclick=Jh;
};
};

getTop().E(getTop().SN("sendbtn",window),aGU(Hz));
getTop().E(getTop().SN("savebtn",window),aGU(bPk));
getTop().E(getTop().SN("timeSendbtn",window),aGU(bfP));

var ag=getTop(),
aho=ag.S("noletter",window);

if(aho)
{
aho.onclick=function()
{
var aZ=getPageEditor(),
FE=aZ.getContentObj("QQMAILSTATIONERY");

if(aZ.getContentType()=="html"&&FE)
{
var aw=getTop().GelTags("includetail",aZ.getEditWin().document)[0];
aZ.setContent(FE.innerHTML+(aw?aw.innerHTML:""));
aZ.focus();
}
else
{
useStationery();
this.checked=false;
aZ.focus();
}
};
}
var Tx=ag.S("mobile_email",window);
if(Tx)
{
var aFg=ag.goUserInfo.get('RealDefaulSender'),
abe=aWX("phone","1"),
aJy;

if(abe)
{
aJy=function()
{
if(Tx.checked)
{
ag.confirmBox(
{
msg:ag.T([
'<div class="dialog_f_t">Send message with $email$ temporary?</div>',
'<div class="dialog_f_d">Your  will receive SMS when you get reply message.</div>'
]).replace({email:abe}),
width:450,
onreturn:function(lo)
{
if(lo)
{
goCompose.oQmSender.setSenderSelected(abe);
ag.showInfo(
ag.T("Send message with $email$, and you will receive SMS when you have  incoming messages.").replace(
{
email:abe
}
)
);
ag.ossLog("delay","all","stat=nothing&locval=,,mobileemailclick,1");
}
else
{
Tx.checked=false;
}
}
}
);
}
else
{
var aGu=(aFg==abe)?aWX("phone","0"):aFg;
if(aGu)
{
goCompose.oQmSender.setSenderSelected(aGu);
ag.showInfo(ag.T("Send message with $email$, and you will not receive SMS when you have incoming messages.").replace({email:aGu}));
ag.ossLog("delay","all","stat=nothing&locval=,,mobileemailclick,2");
}
else
{
ag.showInfo("You only have a phone number account, and can not switch to the other account address to cancel remind");
Tx.checked=true;
}
}
}
}
else
{
aJy=function()
{
ag.ossLog("delay","all","stat=nothing&locval=,,mobileemailclick,0");
ag.confirmBox(
{
msg:[
'<div class="dialog_f_t">You need to register phone number account, then are able to turn on this feature.</div>',
'<div class="dialog_f_d">Mobile mail box and SMS alert is for free,<br> you can use it in next time you write message.</div>'
].join(""),
width:430,
confirmBtnTxt:"&nbsp;Enable mobil mail box&nbsp;",
cancelBtnTxt:"&nbsp;Detail&nbsp;",
neverBtnTxt:"Close",
onload:function(){
this.S("cancel").onclick=function()
{
window.open("http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=8&&no=1000605");
}
},
onreturn:function(aP,Rz,bKC){
if(aP)
{
ag.goNewWin(ag.T("/cgi-bin/register?sid=$sid$&action=phonelist&t=phone_alias_reg1&vipfun=phone&loc=register,mail,phone,2").replace(
{
sid:ag.getSid()
}
),false,true);
}
Tx.checked=false;
}
}
);
}
}

Tx.onclick=aJy;
Tx.checked=(aFg==abe);
}
var acW=getTop().S("secmailcode",window);
if(acW)
{
acW.onclick=function()
{
if(acW.value)
{
acW.value="";
acW.checked=false;
getTop().show(getTop().S("encrypt_mail_tips",window),false);
}
else
{
new ag.QMDialog(
{
sid:"encryptdlg",
sTitle:"Mail encryption",
sBodyHtml:ag.TE([
'<div style="font-size:12px; padding:20px; text-align:left; line-height:1.6;">',
'<p style="border-bottom:1px solid #E4E4E4; margin:0 0 15px; padding:0 0 15px;">As for encrypted message,recipients have to decrypt it before reading.</p>',
'<p style="margin:12px 0;"><label><span class="setMailCode">Password: </span><input type="password" id="pw1" value="" style="width:220px;margin:0;"/></label></p>',
'<p style="margin:12px 0;"><label><span class="setMailCode">Confirm Password: </span><input type="password" id="pw2" value="" style="width:220px;margin:0;"/></label></p>',
'</div>',
'<div class="dialog_operate">',
'<input id="ok" type="button" value="OK" class="btn wd1">',
'<input id="cancel" type="button" value="Cancel" class="btn wd1">',
'</div>'
]).replace({}),

nWidth:400,
onclose:function()
{
if(!acW.value)
{
acW.checked=false;
}
},
onshow:function()
{
this.S("pw1").focus();
},
onload:function()
{
var cG=this;

cG.S("ok").onclick=function()
{
var ayq=cG.S("pw1"),
aWp=cG.S("pw2");

if(!ayq.value)
{
ayq.focus();
getTop().showError("Please enter password");
}
else if(!aWp.value)
{
aWp.focus();
getTop().showError("Please enter password");
}
else if(ayq.value!=aWp.value)
{
ayq.focus();
getTop().showError("Passwords don't match,please type again");
}
else
{
acW.value=ayq.value;
getTop().show(getTop().S("encrypt_mail_tips",window),true);
cG.close();
}
}
cG.S("cancel").onclick=function()
{
cG.close();
}

}
});
}
}
}

}

function aWX(eb,bC)
{
var baE=getTop().goUserInfo.get('RealDefaultAllMail');
for(var i in baE)
{
var bfb=baE[i];
if(bfb[eb]==bC)
{
return bfb.email;
}
}

}






function bQI(iS,aj)
{
var ag=getTop(),
jY=function()
{
var aZ=getPageEditor();

aj.oMailInfo&&setComposeData(aj.oMailInfo);

Bz(aj);

Mk(true);

setNeedCloseConform(true);
autoSave(false);
Bj();

S("subject").focus();
};

ag.QMEditor.createEditor(
{
editorId:iS,
editorAreaWin:window,
funclist:getTop().QMEditor.CONST.FUNCLIST.QF_COMPOSE,
photoCGI:getTop().getPhotoCGI(),
customtags:OZ(),

nAutoRisizeMinHeight:319,


onload:jY,
onfocus:adE,
onmousedown:GP,
onbeforesaverange:bmV,
onkeydown:BM,
onpaste:ahm,
onputcontent:avc,
onchangecontenttype:avG,
onchangebgmusic:bgw,
onshowinstallactive:showInstallActiveXDialog,
onpreview:aRB,
onuploademl:uploadComposeEml
}
).initialize(
aj.source,
false,
S("QMEditorArea",window).getAttribute("tIndex")||3,
ag.S("QMEditorArea",window).getAttribute("accKey")
);


}




function chN(ao)
{
var ag=getTop(),
vo=ag.S("subject",window);

if(ao.initsubject&&vo)
{
vo.value=ao.initsubject;
}
}





function bFI(iS,aj)
{
var afb=getTop().GelTags("player",getTop().S("source",window)),
ag=getTop(),
Oh={};

if(afb&&afb.length>0
&&afb[0].id.toLowerCase()=="cmd:bgmusic")
{
var hj=afb[0];
Oh.url=hj.getAttribute("url");
Oh.song=decodeURIComponent(hj.getAttribute("song"));
Oh.singer=decodeURIComponent(hj.getAttribute("singer"));
}

var jY=function()
{
var aZ=getPageEditor(),
yS=aMv(aj)
||aio(aj,true);

chN(aj);

if(aj.bigattachs_auto.length)
{
addExistAttach_Big({bigattach:aj.bigattachs_auto});
getTop().show(getTop().S("attachContainer",getTop().getMainWin()),true);
}

if(Oh.song||Oh.url)
{
aZ.setBgMusicInfo(Oh.song,
Oh.singer,Oh.url
);
}

Bz(aj);
QMAttach.initAttBigSize(aj);

QMAttach.initFileUpload(aj);
goCompose.oQmSender=new ag.QMSender(
{
oWin:window,
nCurFolderId:aj.folderid,
sCurSaveFrom:aj.saveFrom||ag.goUserInfo.get('RealDefaulSender'),
sWidth:180,
bShowNode:"parentNode",
sVerAlign:"top",
bDraft:aj.subtmpl=="draft",
onclickItemCallBack:function(az)
{
getTop().S("mobile_email",window)&&(getTop().S("mobile_email",window).checked=(az.phone=="1"));
}
}
);


var acA=aj.saveFrom||ag.goUserInfo.get('RealDefaulSender');
var MR=ag.S("source",window)&&ag.S("source",window).innerHTML;
var bpH=null;


if(bpH=(MR.match(/<sign signid="(.*?)" nreadytime="(.*?)">/)||MR.match(/<sign signid="(.*?)">/)||(location.getParams()["s"]=="background"&&location.getParams()["recoverCompose"]=="true")))
{







}
else
{

if(aj.subtmpl!="draft")
{
if(ag.oAcctEmail&&ag.oAcctEmail[acA])
{
acA=ag.oAcctEmail[acA];
}
goCompose.oQmSender.setSenderSelected(acA);
}
}



Va();
if(getTop().goUserInfo.get('RealDefaultEditor'))
{
Mk(getTop().goUserInfo.get('RealDefaultEditor'));
}
else
{
Mk(false);
}
ag.show(ag.S("editor_toolbar_btn_container",window),
aZ.isSupportToolBar());

!aj.pluscontent&&!(yS||{}).isconfirm&&loadValue(true);

setNeedCloseConform(true);
autoSave(false);
Bj();
setMultiSignatureSelect();
setOtherComposeOptionEvent();
typeof(aj.onload)=="function"&&aj.onload(adE);





ag.gbIsMac&&!ag.detectActiveX(0,2)&&ag.requestShowTip("QMEditorToolBarPlusArea",32,window);
if(aj.encryptmail=="false"&&aj.xqqstyle=="800"&&aj.subtmpl=="forward")
{
setTimeout(function()
{
getTop().fireMouseEvent(getTop().S("otherComposeOptionBtn",window),"click");
getTop().requestShowTip("savesendbox",78,window);
},
1000
);
}
};

function ajN()
{
ag.waitFor(
function()
{
return!aj.asyncGetContent||getTop().goAsyncContent;
},
function(aP)
{
jY();
},500,10000
);
}

ag.QMEditor.createEditor(
{
editorId:iS,
editorAreaWin:window,
funclist:ag.QMEditor.CONST.FUNCLIST.COMPOSE,
photoCGI:ag.getPhotoCGI(),
customtags:OZ(),
isOpenEditBar:true,

funcConfig:{Photo:{album:true,attach:true,iPhoneUpload:true}},

nAutoRisizeMinHeight:319,


onload:OJ(ajN),
onfocus:adE,
onmousedown:GP,
onclick:oClipImg.checkUpload,
onbeforesaverange:bmV,
onkeydown:BM,
onkeyup:bAU,
onpaste:function()
{
ahm.apply(this,arguments);
oClipImg.analyse.apply(this,arguments);
},
onputcontent:avc,
onchangecontenttype:avG,
onchangebgmusic:bgw,
onshowinstallactive:showInstallActiveXDialog,
onpreview:aRB
}
).initialize(
aj.source||outputDataLoading(),
false,
ag.S("QMEditorArea",window).getAttribute("tIndex"),
ag.S("QMEditorArea",window).getAttribute("accKey")
);



cvg();

getTop().initAddress(showQuickAddr);

getTop().addEvent(window,"unload",function()
{
QMAttach.dragOverEvent(true);

}
);

}







function bPx(iS,aj)
{
var ag=getTop(),
jY=function()
{
var yS=aMv(aj)
||aio(aj,true);

QMAttach.initHideAttach(aj);
QMAttach.initFileUpload(aj);

Bz(aj);
if(getTop().goUserInfo.get('RealDefaultEditor'))
{
Mk(getTop().goUserInfo.get('RealDefaultEditor'));
}
else
{
Mk(false);
}
getTop().show(getTop().S("editor_toolbar_btn_container",window),getPageEditor().isSupportToolBar());

if(!(yS||{}).isconfirm)
{
loadValue(true);
}
setNeedCloseConform(true);

Bj();

typeof(aj.onload)=="function"&&aj.onload(adE);



};

function ajN()
{
ag.waitFor(
function()
{
return!aj.asyncGetContent||ag.goAsyncContent;
},
function(aP)
{
jY();
},500,10000
);
}

ag.QMEditor.createEditor({
editorId:iS,
editorAreaWin:window,
funclist:ag.QMEditor.CONST.FUNCLIST.GROUP,
photoCGI:ag.getPhotoCGI(),

photoConfig:{
widthlimit:1024,
heightlimit:1024,
sizelimit:1
},
customtags:OZ(),
isOpenEditBar:true,


nAutoRisizeMinHeight:319,
funcConfig:{Photo:{align:"left",url:true,album:true,attach:true,iPhoneUpload:true}},


onload:OJ(ajN),
onfocus:adE,
onmousedown:GP,
onbeforesaverange:bmV,
onkeydown:BM,
onpaste:ahm,
onputcontent:avc,
onshowinstallactive:showInstallActiveXDialog,
onpreview:aRB
}).initialize(
aj.source||outputDataLoading(),
false,
ag.S("QMEditorArea",window).getAttribute("tIndex"),
ag.S("QMEditorArea",window).getAttribute("accKey")
);


cvg();

ag.addEvent(window,"unload",function()
{
QMAttach.dragOverEvent(true);
}
);
}






function bEA(iS,aj)
{
var ga=getTop(),
yA=ga.S("QMEditorArea",window);
if(!yA)
return;
ga.QMEditor.createEditor({
editorId:iS,
editorAreaWin:window,
height:ga.getStyle(yA,"height"),
funclist:ga.QMEditor.CONST.FUNCLIST.GROUP,
photoCGI:ga.getPhotoCGI(),
photoConfig:{
widthlimit:1024,
heightlimit:1024,
sizelimit:1
},
customtags:OZ(),

onload:OJ(jY),
onfocus:bFH,
onblur:bIF,
onmousedown:GP,
onkeydown:akI,
onpaste:akI,

onshowinstallactive:showInstallActiveXDialog
}).initialize(aj.source||outputDataLoading(),false,5);


var aZ=null,
ddJ=ga.S('editorToolContainer',window),
asM,afT,aEb,
bIw=62,dhy=62,
lQ,kU,cRR=+yA.clientHeight,
tX;


function jY()
{
Bz(aj);

QMAttach.initHideAttach(aj);
QMAttach.initFileUpload(aj);

Mk(false);

ga.show(ga.S("editor_toolbar_btn_container",window),getPageEditor().isSupportToolBar());



(aZ=getPageEditor()).setContent('');
asM=yA.getElementsByTagName('iframe')[0];
afT=asM.contentWindow;
aEb=afT.document;

lQ=+aEb[ga.gbIsIE?'body':'documentElement'].scrollHeight;
kU=+yA.getAttribute('maxHeight');
yA.style.height='';
ga.show(ga.S('smsInputHead',window),true);

ga.addEvent(aEb.body,'click',function(ah)
{
akI(ah);
});



};

function bFH(ah)
{

lQ=bIw;
akI(ah);
}

function bIF(ah)
{
return;
}

function akI(ah)
{

if(ah&&ah.ctrlKey&&(ah.keyCode==10||ah.keyCode==13))
{
BM(ah);
return;
}


setTimeout(function(){

if(!ga.gbIsIE&&ah.keyCode==8)
{
asM.style.height=lQ+'px';
}
var arU=afT.document[ga.gbIsIE?'body':'documentElement'].scrollHeight;
afT.document.body.style.overflowY=(arU>kU?'auto':'hidden');
asM.style.height=(arU>kU?kU:
(arU<lQ?lQ:arU))+'px';
},0);
}



window.ajustEditor=akI;


var bbD=ga.S('quickEditorContainer',window),
bex=ga.S('fullModeLink',window),
aXy=ga.S('foldLink',window),
amo=ga.S('expandLink',window);
if(bex&&aXy&&amo)
{
amo.onclick=function()
{
St(bbD,true,function(){
ga.show(amo,false);
var xI=new Date();
xI.setTime(xI.getTime()+(300*24*3600*1000));
ga.setUserCookie('QUICK_EDITOR_FOLD',1,xI);
});

}
aXy.onclick=function()
{
St(bbD,false,function(){
ga.show(amo,true);
var xI=new Date();
xI.setTime(xI.getTime()+(300*24*3600*1000));
ga.setUserCookie('QUICK_EDITOR_FOLD',0,xI);
});
}
bex.onclick=function()
{
if(!aZ)
return;
var	aGZ=aZ.getContent().toLowerCase(),
aFz=aZ.getContent(true),
ali=ga.trim(aFz.replace(/&nbsp;/ig,'')),
oP=JA(),
bDj=ga.S('filecell',window),
bKb=ga.S('BigAttach',window);
if(bDj.innerHTML.length>10||bKb.innerHTML.length>10||oP.mailtype.value=='vote')
{
ga.confirmBox(
{
msg:[
'<div class="dialog_f_t">Attachment and vote data will lost when switch to full editor .</div>',
'<div class="dialog_f_d" style="font-size:14px;">Are you sure to switch ? </div>'
].join(""),
width:430,
onreturn:function(lo)
{
if(lo)
{

bhm();
}
}
}
);
}
else
{
bhm();
}
function bhm()
{
if(ali)
{
cEG();
}
oP.action='/cgi-bin/grouplist1?sid='+getTop().getSid();
oP.target='mainFrame';
oP.t.value='compose_group';
oP.s.value='';
oP.submit();
}
};
}

function St(an,Zu,je)
{
var jB=getTop().qmAnimation;
jB[Zu?'expand':'fold'](an,
{
durlimit:300,
type:'wait',
speed:'fast',
oncomplete:function()
{
je();
ga.show(an,Zu);
}
});
}

getTop().addEvent(window,"unload",function()
{
QMAttach.dragOverEvent(true);
}
);
}






function bLX(iS,aj)
{
var jY=function()
{
aMv(aj)||aio(aj,true,1);
Bz(aj);
Va();
if(getTop().goUserInfo.get('RealDefaultEditor'))
{
Mk(getTop().goUserInfo.get('RealDefaultEditor'));
}
else
{
Mk(false);
}
getTop().show(getTop().S("editor_toolbar_btn_container",window),getPageEditor().isSupportToolBar());
getTop().S("sendmailname",window).value=getTop().goUserInfo.get('RealDefaulSender');
Bj();
typeof(aj.onload)=="function"&&aj.onload(adE);
};
getTop().QMEditor.createEditor(
{
editorId:iS,
editorAreaWin:window,
funclist:getTop().QMEditor.CONST.FUNCLIST.MO,
customtags:OZ(),

onmousedown:GP,
onload:OJ(jY),
onkeydown:BM
}
).initialize(aj.source||outputDataLoading(),false,3);

getTop().initAddress(showQuickAddr);
}




function initCardListPage(aj,bLN)
{
var ag=getTop();

ag.extend(window,bLN);

initComposeForPage.pageId="card";
Bz(aj);
Va();
try{
ag.S("sendmailname",window).value=ag.goUserInfo.get('RealDefaulSender');
}catch(e)
{
debug(["getDefaultSender error:",e.message]);
}
}






function bHF(iS,aj)
{

if(!getTop().S("QMEditorArea",window))
{
Bz(aj);

Bj();

Va();
setNeedCloseConform(true);

typeof(aj.onload)=="function"&&aj.onload(adE);

try
{

getTop().S("sendmailname",window).value=getTop().goUserInfo.get('RealDefaulSender');
}
catch(e)
{
debug(e.message);
}

getTop().initAddress(showQuickAddr);
}

var jY=function()
{
var ag=getTop();
aio(aj,true);
Bz(aj);






goCompose.oQmSender=new ag.QMSender(
{
nCurFolderId:"",
sCurSaveFrom:"",
sWidth:210,
bShowNode:"parentNode"
}
);

Bj();

Va();
setNeedCloseConform(true);

typeof(aj.onload)=="function"&&aj.onload(adE);
};

getTop().QMEditor.createEditor(
{
editorId:iS,
editorAreaWin:window,
funclist:getTop().QMEditor.CONST.FUNCLIST.MO,
customtags:OZ(),

onload:OJ(jY),
onkeydown:BM
}
).initialize(aj.source,false,3);

aMv(aj);
}






function bGk(iS,aj)
{
OJ(function()
{
aMv(aj);
Bz(aj);

Bj();
Va();
getTop().S("sendmailname",window).value=getTop().goUserInfo.get('RealDefaulSender');

setNeedCloseConform(true);
})();
getTop().initAddress(showQuickAddr);
}






function bRG(iS,aj)
{
var jY=function()
{
Bz(aj);
QMAttach.initAttBigSize(aj);

QMAttach.initFileUpload(aj);
aio(aj,true,1);
Va();
Bj();

if(typeof(aj.onload)=="function")
{
aj.onload();
}
};

getTop().QMEditor.createEditor(
{
editorId:iS,
editorAreaWin:window,
style:"border:none;icon:big;",
funclist:{tbExtern:"Mo Photo"},
photoCGI:getTop().getPhotoCGI(),
customtags:OZ(),

onload:OJ(jY),
onfocus:adE,
onmousedown:GP,
onbeforesaverange:bmV,
onkeydown:BM,
onputcontent:avc
}
).initialize(aj.source||outputDataLoading(),false,5);
}






function bKj(iS,aj)
{
var jY=function()
{
this.setContent(getTop().QMEditor.getBreakLine(1));
Bj();

if(typeof(aj.onload)=="function")
{
aj.onload();
}
aiH();
focusPageEditor(0);
};

getTop().QMEditor.createEditor(
{
editorId:iS,
editorAreaWin:window,
funclist:{tbExtern:"Mo"},
customtags:OZ(),

onmousedown:GP,
onload:jY,
onkeydown:BM
}
).initialize(aj.source,false);
}






function bKJ(iS,aj)
{
getTop().QMEditor.createEditor({
editorId:iS,
editorAreaWin:window,
height:aj.height||getTop().getStyle(getTop().S("QMEditorArea",window),"height"),

isNoEditScroll:true,

onmousedown:GP,
onkeydown:BM,
onpaste:function()
{
callBack.call(this,aj.onpaste);
},
onfocus:function()
{
if(this.getContent(true)==getNoteFirstPageSource(true,aj.sDefaultText))
{
this.setContent(getTop().QMEditor.getBreakLine());
this.focus(0);
}
},
onblur:function()
{
var dk=this.getContent().toLowerCase();
if(!dk||dk==getTop().QMEditor.getBreakLine().toLowerCase())
{
this.setContent(getNoteFirstPageSource(false,aj.sDefaultText));
}
},
onload:function()
{
typeof(aj.onload)=="function"&&aj.onload(adE);
aiH();
}
}).initialize(
getNoteFirstPageSource(false,aj.sDefaultText),
false,
false,
getTop().S("QMEditorArea",window).getAttribute("accKey")
);
}






function bHM(iS,aj)
{
var ga=getTop();
var jY=function()
{
Bz(aj);
if(aj.isPaste)
{
getPageEditor().setContent("");
getPageEditor().paste();
}
else if(aj.isReadCache)
{
var aXV=getTop().getGlobalVarValue("NOTE_CONTENT_CACHE");
if(aXV)
{
getPageEditor().setContent(aXV);
}
}
else if(aj.asyncGetContent||ga.goAsyncContent)
{
var vo=ga.S("subject",window);
if(vo)
{
vo.value=ga.goAsyncContent.subject;
vo.focus();
}
getPageEditor().setContent(ga.goAsyncContent.content);
}
else
{
getPageEditor()
.setContent(filterSourceContent(getTop().S("source",window).innerHTML)
||getTop().QMEditor.getBreakLine()
);
}

Mk(getTop().getUserCookieFlag("CCSHOW")[3]==1?true:false);
getTop().show(getTop().S("editor_toolbar_btn_container",window),getPageEditor().isSupportToolBar());

loadValue(true);
setNeedCloseConform(true);
autoSave(false);

Bj();
aiH();
typeof(aj.onload)=="function"&&aj.onload(adE);
};

function ajN()
{
getTop().waitFor(
function()
{
return!aj.asyncGetContent||getTop().goAsyncContent
},
function(aP)
{
jY();
},500,10000
);
}

getTop().QMEditor.createEditor({
editorId:iS,
editorAreaWin:window,
funclist:getTop().QMEditor.CONST.FUNCLIST.NOTE,
photoCGI:getTop().getPhotoCGI(),

nAutoRisizeMinHeight:319,
funcConfig:{Photo:{align:"left",url:true,album:true,attach:true,iPhoneUpload:true}},


onload:ajN,
onmousedown:GP,
onkeydown:BM,
onpaste:ahm,
onchangecontenttype:avG,
onshowinstallactive:showInstallActiveXDialog
}).initialize(
aj.source||outputDataLoading(),
false,
getTop().S("QMEditorArea",window).getAttribute("tIndex"),
getTop().S("QMEditorArea",window).getAttribute("accKey")
);


}


function bFf(iS,aj)
{
var jY=function()
{

Mk(getTop().getUserCookieFlag("CCSHOW")[3]==1?true:false);
getTop().show(getTop().S("editor_toolbar_btn_container",window),getPageEditor().isSupportToolBar());

loadValue(true);
setNeedCloseConform(true);


Bj();
aiH();
typeof(aj.onload)=="function"&&aj.onload(adE);

focusPageEditor(0);
};

getTop().QMEditor.createEditor({
editorId:iS,
editorAreaWin:window,
funclist:getTop().QMEditor.CONST.FUNCLIST.NOTE,
photoCGI:getTop().getPhotoCGI(),

nMinHeight:319,


onload:jY,
onmousedown:GP,
onkeydown:BM,
onpaste:ahm,
onchangecontenttype:avG,
onshowinstallactive:showInstallActiveXDialog
}).initialize(
"",
false,
getTop().S("QMEditorArea",window).getAttribute("tIndex"),
getTop().S("QMEditorArea",window).getAttribute("accKey")
);


}




function bLy(iS,aj)
{
OJ(
function()
{
Bz(aj);
Bj();
}
)();
getTop().initAddress(showQuickAddr);
}







function OZ()
{
return["sign","includetail"];
}






function OJ(dz)
{
return function()
{
aiH();

getTop().goUserInfo.deferget('RealDefaultEditor',dz);














};
}





function getPageId()
{
return initComposeForPage.pageId;
}



function getPageConfig()
{
return initComposeForPage.pageConfig;
}





function getPageEditor()
{
return getTop().QMEditor&&getTop().QMEditor.getEditor(getPageId());
}








function getInputObj(aI,qZ,aRY)
{
var eA=qZ||JA();
if(!eA)
{
return null;
}
var eu=eA[aI];
if(!eu)
{
getTop().insertHTML(eA,"afterBegin",
getTop().T('<input name="$name$" type="hidden" $disabled$/>').replace({
name:aI,
disabled:aRY?"disabled":""
})
);
eu=eA[aI];
}
return eu;
}

function attachInsertImage(be)
{
var aZ=getPageEditor();
if(aZ.getContentType()=="text")
{
getTop().confirmBox(
{
msg:"Unabled to add image to content when you are using Plain text, switch to rich text ?",
title:"Tips",
onreturn:function(aP)
{
if(aP)
{
aZ.changeContentType("html");
getTop().S("contenttype",window).checked=false;
setTimeout(function()
{
aZ.insertImage(be);
},100);
}
}
});
}
else
{
getPageEditor().insertImage(be);
}
return false;
}






function focusPageEditor(dN,ay)
{
var aZ=getPageEditor();
if(aZ)
{
aZ.resizeNoScrollEditor();
aZ.focus(dN||0,aZ.getContentObj(ay||"QQMAILSTATIONERY"));
}
}





function changeContentType(amR)
{
var ag=getTop();
if(!getPageEditor().changeContentType(amR.checked?"text":"html"))
{
amR.checked=!amR.checked;
}
else
{
ag.show(ag.S("signSelContainer",window),!amR.checked);
}
}




function avG()
{
var rB=this.getContentType()!="html",
ag=getTop();
if(rB)
{
(ag.S("noletter",window)||{}).checked=false;
getPageEditor().setBgMusicInfo();
}
ag.S("contenttype",window).checked=rB;









ag.show(ag.S("QMEditorToolBarPlusArea",window),!rB);
ag.show(ag.S("editor_toolbar_btn_container",window),!rB);
!rB&&bmV();
}






function outputDataLoading(aFj)
{
return getTop().T(['<div class="$className$" style="$height$font-size:12px;color:gray;$padding$">Loading ...</div>'])
.replace({
className:aFj?"QMEditorBase":"",
padding:aFj?"padding:5px;":"",
height:aFj?"height:100%;":""
});
}






function outputToolBarControlBtn(ay)
{
return getTop().T([
'<span id="$id$"  style="display:none;" unselectable="on" onmousedown="return false;" class="qmEditorTxtStyle">',
'<input type="button" style="cursor:pointer;',
'width:16px;height:16px;border:none;padding:0;margin:-1px 2px 0 -5px;*margin:0 2px 0 0;text-decoration:none;" ',
'unselectable="on" onmousedown="return false;" class="qmEditorIcon" />',
'<a  href="javascript:;">',
'Text<span>\u2191</span><span style="display:none;" >\u2193</span>',
'</a>',
'</span>'])
.replace({
images_path:getTop().getPath("image"),
id:ay||"editor_toolbar_btn_container",
path:getTop().getPath("js")
});
}






function filterSourceContent(aFN)
{
return getTop().filteScript(aFN.replace(
/<div\s.*?\'?\"?QQMailBgMusicInfo\'?\"?.*?>.*?<\/div>/ig,""
).replace(/<player .*?><\/player>/ig,"").replace(/(^\s+)|(\s+$)/ig,""));
}

function erJ(dLc)
{
var aZ=getPageEditor(),
CD=getTop().TE(
[
'$breakline$',
'<div style="line-height:30px; font-size:14px; ">',
'<div style="color:#999; font-size:12px;margin-bottom:8px;">File(s) from Cloud</div>',
'$@$for($oFiles$)$@$',
'<div><span $@$if($_idx_$==0)$@$ style="border-top:1px solid #999;padding-top:5px;" $@$endif$@$>',
'<span>',
'$fname$',
'<span style="color:#999; margin-left:5px; margin-right:20px">($fsize$)</span>',
'</span>',
'<a href="$furl$" target="_blank" style="color:#33394f; text-decoration:underline;">Download </a>',
'</span></div>',
'$@$endfor$@$',
'</div>',
'$breakline$'
]);


window.weiyunfileonload=function(jb)
{
var drc=getTop().S("weiyunfiles",aZ.getEditWin());
if(jb&&(jb.ret==0))
{
var MD=getTop().S("subject",window);
if(MD&&!MD.value)
{
if(jb.data.length>1)
{
MD.value=
['"',getTop().htmlEncode(jb.data[0].fname),'"',
"",jb.data.length," file(s)"].join("");

}
else
{
MD.value=getTop().htmlEncode(jb.data[0].fname);
}
}
getTop().insertHTML(drc,"afterEnd",
CD.replace(
{
oFiles:jb.data,
breakline:getTop().QMEditor.getBreakLine(1)
})
);
getTop().removeSelf(drc);

}
else
{
getTop().showError("Files of Cloud load failed");
}
}

getTop().loadJsFile(location.protocol+"//webcgi.weiyun.qq.com/qmail.fcg?cmd=1&callback=weiyunfileonload&key="+dLc,true,document);
}








function aio(aj,bMb,bHm)
{
if(bMb&&aj.subtmpl!="draft"&&aj.subtmpl!="background")
{
aWH();
}

var MR=getTop().S("source",window)&&getTop().S("source",window).innerHTML,
bhs=getTop().goUserInfo.get('getRealUserSignature')?(getTop().goUserInfo.get('getRealUserSignature'))(aj.folderid,aj.saveFrom):null,
aLJ=aj.subtmpl=="draft"||aj.subtmpl=="content"||aj.subtmpl=="background"||aj.subtmpl==="from_star_list",
eD=[],
aZ=getPageEditor();
if(!aLJ)
{

var dkn=location.getParams()["weiyunfid"];
if(dkn)
{
eD.push("<div id='weiyunfiles'></div>");
erJ(dkn);
}

if(aj.pluscontent)
{
eD.push(aj.pluscontent,getTop().QMEditor.getBreakLine(1));
}
else
{
eD.push(getTop().QMEditor.getBreakLine(
bHm||(getTop().filteSignatureTag(bhs)?2:1),
{
family:getTop().goUserInfo.get("DEF_FONT_FAMILY"),
size:getTop().goUserInfo.get("DEF_FONT_SIZE"),
color:getTop().goUserInfo.get("DEF_FONT_COLOR")
}
));
}

eD.push(bhs);
}
if(!aj.isNoInclude&&MR&&(aj.subtmpl=="draft"||aj.subtmpl=="background"||aj.subtmpl==="from_star_list"))
{
eD.push(getTop().filteSignatureTag(MR,"2LOWCASE"));
}

if(!aLJ&&(getPageId()=="compose"||getPageId()=="qq"))
{
eD=[getTop().goUserInfo.get("RealUserDefaultStationeryHeader"),eD.join(""),
getTop().goUserInfo.get("RealUserDefaultStationeryBottom")];

if(!!getTop().goUserInfo.get("RealUserDefaultStationeryHeader"))
{
getTop().requestShowTip("editor_toolbar_btn_container","45",window);
}
}

if(!aj.isNoInclude&&MR&&aj.subtmpl!="draft"&&aj.subtmpl!="background"&&aj.subtmpl!=="from_star_list")
{
MR=filterSourceContent(getTop().filteSignatureTag(MR));
if(MR)
{
eD.push(["<div><includetail>",MR,
"</includetail></div>"].join(""));
}
}


aZ.setContent(eD=filterSourceContent(eD.join("")));









}




function Bj(ks)
{
getTop().addEvent(document,"keydown",BM,ks);
getTop().addEvent(document,"keyup",bAU,ks);
}




function Va()
{
var bS=getTop().S("savesendbox",window);
if(bS)
{
try
{
bS.checked=!getTop().goUserInfo.get('RealDefaultSaveSendbox');
}
catch(aL)
{
bS.checked=true;
}
if(!bS.checked)
{
bS.onclick=function()
{
getTop().show("auto_save_span",bS.checked,window);
var cjT=getTop().S("auto_save",window);
if(cjT)
{
!bS.checked&&(cjT.checked=false);
}
};
}
}
}






function Mk(gJ)
{
gJ=gJ==null?true:gJ;
getPageEditor().showToolBar(gJ);

var avk=getTop().S("editor_toolbar_btn_container",window);
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
}




function bgw()
{
var ag=getTop();
var Ut=ag.S("editor_bgmusic_container",window);
if(!Ut)
{
return;
}

if(Ut.getAttribute("inited")!="true")
{
Ut.innerHTML=ag.T([
'<div></div>',
'<div id="bg_music_listen" style="display:none;margin:4px 0 4px 0;">',
'<div id="mp3player_msg" ></div>',
'<div id="mp3player_container" style="display:none;" >Loading player...</div>',
'</div>']);
Ut.setAttribute("inited","true");
}

var bD=this.getBgMusicInfo();
ag.show(Ut,bD);
if(!bD)
{
return;
}

Ut.firstChild.innerHTML=ag.T([
'<span style="word-break:break-all;"><span class="graytext">Backgroud music:</span>$bgmusic$</span>',
'<a style="margin:0 5px 0 10px;" onclick="',
'if ( confirm( \x27Are you sure to delete the backgroud music?\x27 ) ) {','getTop().audioStop();',
'getPageEditor().setBgMusicInfo();','}','">Delete</a>',
'<a onclick="',
'tryListenBgMusic( this );',
'" >Try</a>']).replace({
bgmusic:bD.song?ag.T("$song$($singer$)").replace({
song:bD.song,
singer:bD.singer
}):ag.htmlEncode(bD.url)
});


ag.audioStop();
ag.show(ag.S("mp3player_container",window),false);
ag.show(ag.S("mp3player_msg",window),true);

function bbm(XA)
{
tryListenBgMusic(Ut.firstChild.lastChild,bD.song,
bD.singer,XA
);
}

if(bD.song)
{
getTop().S("mp3player_msg",window).innerHTML="Loading...please wait ";
getTop().getMusicUrl(bD.song,bD.singer,function(jJ,kv,be)
{
if(!getPageEditor())
{
return;
}
if(be)
{
getPageEditor().setBgMusicInfo(jJ,kv,be);
bbm("open");
}
else
{
getTop().S("mp3player_msg",window).innerHTML="Loaded fail";
}
});
}

bbm("open");
}








function tryListenBgMusic(Zz,jJ,kv,cv)
{
var CG=["Try","close"];
if(cv!="close"
&&(Zz.innerHTML==CG[0]||cv=="open"))
{

Zz.innerHTML=CG[1];

var gQ=getPageEditor().getBgMusicInfo();
if(gQ&&gQ.url)
{
getTop().show(getTop().S("mp3player_container",window),true);
getTop().show(getTop().S("mp3player_msg",window),false);


setTimeout(function()
{
getTop().audioPlay(
{
id:"bg_music_compose",
url:gQ.url,
author:gQ.singer,
title:gQ.song,
autoplay:true,
global:true
}
);
},200);
}

getTop().show(getTop().S("bg_music_listen",window),true);
}
else
{

Zz.innerHTML=CG[0];


getTop().audioStop();
getTop().show(getTop().S("mp3player_container",window),false);
getTop().show(getTop().S("mp3player_msg",window),true);

getTop().show(getTop().S("bg_music_listen",window),false);
}
}




function aWH(bcc)
{
var akS,
ahK;

if(bcc=="editor")
{
akS=getPageEditor().getContentObj("QQMAILSTATIONERY");
ahK=getPageEditor().getContentObj("QqMAiLcARdWoRD");
}
else
{
akS=getTop().S("QQMAILSTATIONERY",window);
ahK=getPageEditor().getContentObj("QqMAiLcARdWoRD");
}

if(akS)
{
akS.id="";
}

if(ahK)
{
ahK.id="";
}

if(akS||ahK)
{
aWH(bcc);
}
}





function GP(ah)
{
getTop().hideMenuEvent(ah);
QMAttach.hideDragAndDropContainer();
}




function bmV()
{
var aZ=getPageEditor(),
FE=aZ&&aZ.getContentObj("QQMAILSTATIONERY");

FE&&!aZ.isSelectionInObject(FE)&&
!aZ.loadLastRange()&&aZ.focus(0,FE);
}





function adE(ah)
{

arguments.callee.editorEverFocus=true;
}




function avc()
{
var FE=this.getContentObj("QQMAILSTATIONERY"),
aho=getTop().S("noletter",window);

this.adjustBodyStyle("padding",FE?"0":"2px 4px 0");


Ke(getTop().gbIsIE?"auto":"100%");

if(aho)
{
aho.checked=!!FE;
}
}





function Ke(aPU)
{
try
{
var DC=getPageEditor().getContentTags("table");
for(var i=0,cJ=Math.min(DC.length,50);i<cJ;i++)
{
var hC=DC[i];
if(hC.className=="i")
{
hC.style.width=aPU;
}
}
}
catch(aL)
{
}
}




(function()
{
var oClipImg={};

oClipImg.filter=function(eL)
{
return eL.replace(/<img.*?__clipimgunikey__=[\'\"]?[\d]+[\'\"]?.*?>/gi,"");
}


oClipImg.checkUpload=function(ah)
{
var aZ=this,
aC=getTop().getEventTarget(ah),
rf=getTop().attr(aC,"__clipimgunikey__");

if(rf)
{
window.open(
getTop().T("/cgi-bin/readtemplate?sid=$sid$&t=help_localpic&filepath=$path$").replace(
{
sid:getTop().getSid(),
path:encodeURIComponent(getTop().attr(aC,"url"))
})
);
}
}






oClipImg.analyse=function()
{
var aZ=this;

setTimeout(function()
{
var afT=aZ.getEditWin(),
bzJ=aZ.getContent(),
aZa=function(ctw,be)
{
var aN=ctw.match(/webkit\-fake\-url(.*?)(?=[\'\"])/gi);
return getTop().TE([
'<img CONTENTEDITABLE="false" UNSELECTABLE="on" onmousedown="return false;"  style="cursor:pointer;opacity:0.8;filter:(opacity=80)" url="$url$" noeditme="1" __clipimgunikey__="$id$" src="$imgpath$function/local_pic.png"/>'
]).replace(
{
id:getTop().unikey(),
url:aN||('file:///'+be),
imgpath:getTop().getPath('image')
})
};

var Sh=bzJ.replace(/<v:imagedata.*?src=[\'\"]file:\/\/\/(.*?)[\'\"].*?>[.\n]*?<\/v:imagedata>/gi,aZa).replace(/<img.*?src=[\'\"]file:\/\/\/(.*?)[\'\"].*?>/gi,aZa).replace(/<img.*?src=[\'\"]webkit\-fake\-url(.*?)[\'\"].*?>/gi,aZa);

if(Sh!=bzJ)
{
aZ.setContent(Sh);
getTop().ossLog("delay","all","stat=rmimgerr&type=3&info=0");
}
},13);
}

window.oClipImg=oClipImg;
})();





function ahm(ah)
{
var abL=arguments.callee;
var ath=getTop().S("subjectsample",window);
if((!getTop().S("subject",window).value||getTop().S("subject",window).value==(ath&&ath.value))
&&!abL.RA)
{
var bZ=this;
var aFW=this.getContent(true);
setTimeout(function()
{
var Sh=bZ.getContent(true);
var aiU=aFW.length;
var agc=Sh.length;
var bjg=3001;
if(aiU>bjg||agc>bjg)
{
return;
}

for(var i=0;i<aiU&&i<agc;i++)
{
if(aFW.charAt(aiU-i-1)!=Sh
.charAt(agc-i-1))
{
break;
}
}
var bbg=agc-i;
var asS=aiU-i;

for(var i=0;i<aiU&&i<agc;i++)
{
if(aFW.charAt(i)!=Sh.charAt(i))
{
break;
}
}
if(i<asS)
{
asS=i;
}
var bha=(asS==bbg?Sh:Sh
.substring(asS,bbg)).replace(/[\r\n]/ig,"");
if(getTop().isUrl(bha))
{
var ag=getTop();
var ey=abL.RA=new ag.QMAjaxRequest(
"/cgi-bin/geturlinfo","POST",20*1000
);
ey.onComplete=function(kP)
{
var Kd=kP.responseText;
if(Kd.indexOf("ok|")==0)
{
if(!getTop().S("subject",window).value
||getTop().S("subject",window).value==(ath&&ath.value))
{
if(getTop().getMainWin().SubjectCtrl)
{
getTop().getMainWin().SubjectCtrl(1);
}
getTop().S("subject",window).value=getTop().trim(getTop().htmlDecode(Kd).substr(3)
.replace(/&#(x)?([^&]{1,5});?/g,
function(a,b,c)
{
return String.fromCharCode(parseInt(c,
b?16:10
));
}
).replace(/[\r\n]/g,""));
}
delete ey;
}
else
{
ey.onError();
}
};
ey.onError=function()
{
delete ey;
};
ey.send(getTop().T('sid=$sid$&url=$url$&pageid=$id$').replace(
{
sid:getTop().getSid(),
id:getPageId(),
url:encodeURIComponent(bha)
}
));
}
},13
);
}
}








function trimEditorContent(zQ)
{
var aWv=zQ.getContent(true);
var dk=zQ.getContent();

return(!aWv||(aWv.replace(/ /ig,'')==''))
&&dk.toLowerCase().indexOf('img')==-1?"":dk;
}

































































































function noteFirstPageQuickSave()
{
if(getPageEditor().getContent(true)=="Write message here...")
{
return getTop().showError('Please write message first',800);
}
getTop().S("content",window).value=getPageEditor().getContent();
window.unloadwarning=false;


getTop().S("sendbtn",window).onclick=null;

return JA().submit();
}







function getNoteFirstPageSource(bQv,fM)
{
var iI=fM||"Write message here...";
return bQv?iI:["<div style='color:#a0a0a0;font-size:14px;'>",
iI,"</div>"].join("");
}





function delAttach(aI)
{
QMAttach.delAttach(aI);
}





function delExistAttach(ay)
{
QMAttach.delExistAttach(ay);
return false;
}







function delBigAttach(an)
{
QMAttach.delBigAttach(an);
return false;
}





function setFileNameToSubject(fN)
{
var vo=getTop().S("subject",window),
abL=arguments.callee;

if(fN&&vo&&!vo.value
&&!abL.bPj&&getPageId()!="groupsms")
{
var eZ=fN.split("\\").pop();
vo.value=eZ.split(".").slice(0,-1).join(".")
||eZ;
abL.bPj=true;
}
}





















function addExistBigAttach(aHt,be,fN,gw,vH,hB)
{
var bcx=getTop().S("BigAttach",window),
cee=typeof hB!="undefined";
if(!bcx)
{
return;
}

var gl="BigAttach_"+gw,
cu;

if(getTop().S(gl,window))
{
cu=getTop().S(gl,window);
}
else
{
cu=document.createElement("div");
cu.id=gl;
bcx.appendChild(cu);
}




cu.className="addrtitle attsep";

if(!be&&hB!=100)
{
cu.setAttribute("uncomplete",true);
}
else
{
cu.removeAttribute("uncomplete");
}

cu.innerHTML=getTop().TE([
"<span style='margin-right:5px;'>",
"<input type='button' class='ico_attbig' align='absmiddle' style='margin:0 1px 0 0!important;margin:0 3px 2px 0'>",
"<input type='hidden' name='fid' value='$fid$' />",
"<span class='black' expiretime='$expire$'>",
"<span>$filename$</span>",
"<span style='font-weight:normal;' class='addrtitle'> $@$if($size$)$@$($size$)$@$endif$@$</span>",
"</span>",
"</span>",
"$@$if($percent$<100)$@$",
"<ul class='bd_upload' style='font-size:1px;width:100px;height:10px;overflow:hidden;border-width:1px;margin-left:5px;dispaly:block;'>",
"<ul class='fdbody' style='width:$percent$%;font-size:1px;height:10px;overflow:hidden;padding:0;border:0;'></ul>",
"</ul>",
"$@$endif$@$",

"<span>",
"<a href='$url$'></a>",
"<nobr>",





"$@$if($percent$==100)$@$",
"<a onclick='delBigAttach(this);'>Delete</a></nobr>",
"$@$endif$@$",
"</span>"
]).replace({
expire:aHt,
filename:atf(fN),
size:vH,
percent:cee?hB:100,
url:be,
fid:gw||""
});
getTop().show(getTop().S("attachContainer",getTop().getMainWin()),true);
setFileNameToSubject(fN);
}











function addBigAttach(aHt,fN,vH,be,fT,
gw)
{
if(QMAttach.mbHideBigAttach)
{

getTop().showError("Large attachment are not available in Group message.");
}
else
{








var bhi=(getTop().getDomain()=="qq.com"
?"http://mail.qq.com"
:"http://mail.foxmail.com");

if(/http:\/\/mail\.(qq|foxmail)\.com/.test(be))
{
be.replace(/http:\/\/mail\.(qq|foxmail)\.com/,bhi);
}
else
{
be=bhi+be;
}

!(new RegExp("&code=","ig")).test(be)
&&(be=[be,"&code=",fT].join(""));
addExistBigAttach(aHt,be,fN,gw,vH);
}
}






function getCurrentReceivers(aHs)
{
if(getPageId()!="compose")
{
return"";
}

var ag=getTop(),
aFI=[];
ag.E(
aHs||["to","cc","bcc","sc"],
function(oD)
{
var bS=QMAddrInput.get(oD,window),
Vd=bS&&bS.get();

Vd&&(aFI=aFI.concat(Vd));
}
);
return aFI.join(";");
}














































function initColorSubject()
{
var ag=getTop(),
pn=ag.S("cpanelBtn",window);
if(!pn)
{
return;
}

var ajA=["11","Orange","13","Green","14","Purple","10","Black"],
bn=[{sItemValue:'<span style="margin-left:5px;">Subject\x27s color...</span>'}];
for(var i=0,aB=ajA.length;i<aB;i+=2)
{
bn.push({
sId:ajA[i],
sItemValue:["<div id='",ajA[i],"' class='s",ajA[i],"_bg' style='margin-top:3px;width:15px;height:15px;float:left;'></div>&nbsp;",ajA[i+1]].join("")
});
}
if(ag.getLocale()=="zh_CN")
{
bn.push({
sItemValue:"<div style='float:right;margin-right:10px;'><a href='http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=11&&no=138' target='_blank'>\u5E2E\u52A9</a></div>"
});
}
pn.onclick=function()
{
var bP=ag.calcPos(this);
new ag.QMMenu({
oEmbedWin:window,
sId:"colorsubject",
nX:ag.getLocale()=="zh_CN"?bP[1]-96:bP[1]-146,
nY:bP[2]+1,
nWidth:ag.getLocale()=="zh_CN"?100:150,
oItems:bn,
nItemHeight:21,
onitemclick:setSubjectColor
});
};
}





function showSubjectMsg(gJ)
{
var vo=getTop().S("subject",window);
if(gJ)
{
if(vo.value=="")
{
vo.value=getTop().gsMsgNoSubject;
setTimeout(function()
{
showSubjectMsg(false);
},5000);
}
}
else
{
if(vo.value==getTop().gsMsgNoSubject)
{
vo.value="";

try
{
document.selection.createRange().select();
}
catch(aL)
{
}
}
}
}




function setSubjectColor(bkp)
{
getTop().S("xqqstyle",window).value=bkp;
getTop().S("subject",window).className="s"+bkp;
showSubjectMsg(true);
getTop().show(getTop().S('cpanel',window),false);
}


















function initAddrCtrl(ak,aHs,aj)
{
var ag=getTop(),
ap=ak||window,
anM=window.addrDomain={},
Bp=window.InputObjs=[],
bmc=window.NewInputAddrs=[],
dnb="",
btz=ag.S("domnewRcpt",ak),
euA=ag.S("domAddExistFile",ak);

aj=ag.extend({
bAddrTip:false,
bDomCheck:true,
bNick:false
},aj);


try
{

ap.focus();
}
catch(aL){}


function bTz(clf)
{
if(clf=="sc")
{
bxE(Bp.slice(3));
}
else
{
bxE(Bp.slice(0,3));
}
}

function ecw(bh)
{
for(var i=0;i<bmc.length;i++)
{
if(bmc[i].addr==bh)
{
return true;
}
}
return false;
}

function cey()
{

var cfI=ag.S("replyexistAttach",ap),aKc=ag.S("attachContainer",ap);

if(!ag.isShow(cfI)&&bmc.length>0)
{
if(!ag.isShow(aKc))
{
ag.show(aKc,1);
}
ag.show(btz,1);
}

}
function bYj()
{
var cfI=ag.S("replyexistAttach",ap);
if(ag.isShow(btz)&&bmc.length==0)
{
ag.show(btz,0);
}
if(ag.isShow(cfI)&&bmc.length==0)
{
emptyData(ap);
}
}

function cvb()
{


var aF=[],bd="",egm=ag.S("new_addr1",ap),egn=ag.S("new_addr2",ap);
for(var i=0;i<bmc.length;i++)
{
var bD=bmc[i],aaq="";

aF.push(bD.nick?['"',getTop().encodeNick(bD.nick),
'"<',bD.addr,'>'].join(""):bD.addr);
aaq=bD.nick?getTop().htmlEncode(getTop().encodeNick(bD.nick)):bD.addr;
bd+='<span class="">'+aaq+'</span>';
if(i<bmc.length-1)
{
bd+=",&nbsp;";
}
}
getInputObj("newrcpt",null,false).value=aF.length>0?aF.join(";"):"";
ag.setHTML(egm,bd);
ag.setHTML(egn,bd);


}

ag.E(
aHs||["to","cc","bcc","sc"],
function(oD)
{
var bfC=ag.S(oD+"AreaCtrl",ap),
pA=ag.S(oD,ap),
aZj=0;
if(bfC&&pA)
{
var aBn=aFi(),
FU=new QMAddrInput(
{
id:oD,
win:ap,
tabIndex:pA.tabIndex,
accessKey:pA.accessKey,
dom:{
container:bfC
},
feature:{
autoFold:aj.bAutoFold
},
dispMode:aj.bNick?'onlynick':'full',
maxHeight:aj.nMaxHeight,
filterFunc:function(bNi)
{
return aBn||!bNi.nShortcutGroupId;
},
onfocus:function()
{
setFocus(oD);
bTz(oD);
},
onblur:function()
{
if(window["attachflag"]!="replyAllAttach")
{
btz&&cey();
}
},
onchange:function(aq)
{

var Vd=this.get(";");
goCompose.Qh&&goCompose.Qh.check();

if(oD=="to"&&!aZj
&&getTop().S("aSC",window)&&Vd.split(";").length>=5)
{

aZj=1;
getTop().requestShowTip("aSc",16,window);
}

bTz(oD);
if(getPageConfig()&&window["attachflag"]!="replyAllAttach")
{
bmc=window.NewInputAddrs=[];
if((getPageConfig().subtmpl=="reply"||getPageConfig().subtmpl=="reply_all")
&&((getPageConfig().attachs&&getPageConfig().attachs.length)||(getPageConfig().bigattachs&&getPageConfig().bigattachs.length)))
{
ag.E(["to","cc","bcc","sc"],function(ay)
{
var edV=QMAddrInput.get(ay,ap),kR=edV.get("json");

for(var i=0;i<kR.length;i++)
{

if(dnb.indexOf(kR[i].addr)==-1)
{
!ecw(kR[i].addr)&&bmc.push(kR[i]);
}
}
});
cvb();
btz&&bYj();
}
}
else
{
debug("no config");
}
}
}
);
dnb+=pA.defaultValue+";";
FU.disabled(pA.disabled)
.add(pA.value);

pA.value="";

Bp.push(FU);
}
}
);

if(!!aj.bDomCheck)
{

var hN=location.getParams()["s"]=="reply_all"?3:7;
(goCompose.Qh=QMAddrDomainCheck.createChecker(Bp,hN,{oPermit:ag.S('receiverMsgContainer',window)})).check();
}

initAddrLinkEvent(ap);
}


function emptyData(ak)
{
var ag=getTop(),ap=ak||window,
bWK=ag.S("exist_file",ap),
dBp=ag.S("new_addrs",ap),
cfI=ag.S("replyexistAttach",ap),
dcQ=ag.S("exist_BigAttach",ap);
ag.show(cfI,0);
bWK&&ag.setHTML(bWK,"");
ag.show(bWK,0)
dcQ&&ag.setHTML(dcQ,"");
ag.show(dcQ,0);
dBp&&ag.setHTML(dBp,"");
getInputObj("newrcpt",null,false).value="";
}




function initAddrLinkEvent(ak)
{
getTop().E(["to","cc","bcc","sc"],function(oD)
{
var aUT=oD.toUpperCase(),
pb=QMAddrInput.get(oD,ak),
gC=getTop().S(["a"+aUT],ak),
bjX=getTop().S([oD+"_btn"],ak);

if(pb&&gC)
{
gC.onclick=oD=="sc"
?function(ah)
{
if(showSeparatedCopy())
{
getTop().ossLog("delay","all",getTop().T('stat=compose_send&t=$t$&sub=sc').replace(location.getParams()));
}
getTop().preventDefault(ah||window.event);
if(goCompose.Qh)
{
goCompose.Qh.check();
}
}
:function(ah)
{
setFocus(!this.disabled&&showInputCtrl(aUT)
?oD:(getFocus()==oD?"to":getFocus()));
QMAddrInput.get(getFocus(),ak).focus("end");
getTop().preventDefault(ah||window.event);

if(goCompose.Qh)
{
goCompose.Qh.check();
}

};
}

if(pb&&bjX)
{
bjX.onclick=function(ah)
{
var ag=getTop();
if(!(ag.QMLinkman&&ag.QMAddress&&ag.QMAddress.isInit()))
{
return;
}
ag.QMLinkman.showDlg(oD,QMAddrInput.get(oD,window),{bSupportGroup:aFi()});
getTop().preventDefault(ah||window.event);
}
}
});

var dtw=getTop().S("domAddExistFile",ak);
if(dtw)
{

dtw.onclick=function(ah)
{
eiO(ak);
return false;
}
}
}




function eiO(ak)
{
ak["attachflag"]="replyattach";
addExistAttach({attach:getPageConfig().attachs},true,true);
addExistAttach_Big({bigattach:getPageConfig().bigattachs},true);
getTop().ossLog("delay","all","stat=nothing&loc=compose,rlyatt,0,0");



getTop().show("attachContainer",true,ak);
getTop().show("replyexistAttach",true,ak);
getTop().show("domnewRcpt",false,ak);
}




function bxE(bCC)
{
var ag=getTop(),
kg=arguments.callee,
ey=kg.ajax,
cU=kg.cache||(kg.cache={});

var aFO=[];
for(var i=0,len=bCC.length;i<len;i++)
{
var FU=bCC[i],
kR=FU&&!FU.isDisabled()&&FU.get("json")||[];

for(var j=0,len2=kR.length;j<len2;j++)
{
if(kR[j].valid)
{
aFO.push(kR[j].addr);
}
}
}
function dBT(ejR)
{

for(var i=0,len=window.InputObjs.length;i<len;i++)
{
var FU=window.InputObjs[i];
FU&&!FU.isDisabled()&&(FU.setAddrError(ejR));

}
}

if(aFO.length)
{
var fa;
if(cU[fa=aFO.sort().join(';')])
{
bbG(cU[fa]);
dBT(cU['invalidaddr']||[]);
}
else
{
if(!ey)
{
ey=kg.ajax=new ag.QMAjax;
ey.url="/cgi-bin/addr_domain_check";

ey.onComplete=function(Ru)
{

var cAN=eval(Ru.responseText),
dST=cAN&&cAN.addrhistory||[],
cUo=cAN&&cAN.invalidlocalaccount||[],
eoX=cU['invalidaddr']=cU['invalidaddr']||[];

bbG(
cU[ey.fa]=dST
);
for(var i=0,aB=cUo.length,bG;i<aB;i++)
{
bG=cUo[i];
bG&&eoX.push(bG);
}
dBT(cUo);
ag.ossLog("realtime","all","stat=custom&type=addressaptitude&info=open");
};
}
ey.fa=fa;
ey.abort();

ey.send(ag.T("acttype=4&sid=$sid$&uin=$uin$&addrfilt=$addr$").replace({
sid:ag.getSid(),
uin:ag.getUin(),
addr:fa
}));
}
}
else
{
bbG([]);
}

function bbG(Jg)
{
var aZK=kg.showSpan||(kg.showSpan=ag.S("addrAssociation",window)),
eB,bbn=[],

bZP=ag.T('addAddr("\\\"$name$\\\"&lt;$email$&gt;;")'),
bOa=ag.TE([
'$@$for($_this_$)$@$$@$if($_idx_$<3)$@$',
'<a style="pointer:cursor;" title="$email$" onclick=\''+bZP+'\'>$htmlname$</a>',
'$@$if($_idx_$<$_root_.length$-1&&$_idx_$<2)$@$, $@$endif$@$',
'$@$endif$@$$@$endfor$@$'
]);

if(!aZK){return;}

if(Jg.length)
{
for(var i=0,len=Jg.length;i<len;i++)
{
eB=ag.QMAddress.getAddress(Jg[i]);
if(eB)
{
bbn.push({
htmlname:eB.name,
name:ag.htmlEncode(ag.encodeNick(ag.encodeNick(ag.htmlDecode(eB.name)))),
email:eB.email
});
}
}

aZK.innerHTML=bOa.replace(bbn);
}

ag.show(aZK.parentNode,!!bbn.length);
}


}






function setFocus(oD)
{
if(oD)
{
arguments.callee.bLn=oD;
}
}





function getFocus()
{
return setFocus.bLn||"to";
}






function addAddr(du,buw)
{
var gX=QMAddrInput.get(getFocus(),window);
if(gX)
{
gX.add(du);
if(!buw)
{
gX.focus("end");
}
}
}






function showQuickAddr2(aM,bLG)
{
var ag=getTop(),
auT=bLG,
bp=aM.sType,
ng=ag.QMAddress;
if(!auT)
{
return false;
}

if(bp=='succeed')
{

if(auT.innerHTML.indexOf('lm_panel')<0)
{
linkmanInstance=new ag.QMLinkman({
nType:0,
bSupportGroup:aFi(),
oMainGroup:["mailgroup",11,"domaingroup","qqgroup"],
oContainer:auT,
onselect:function(aTK)
{
ag.QMLinkman.addAddrEx(aTK,1,QMAddrInput.get(getFocus(),window));
}
});

}
}
else
{
auT.innerHTML=ag.T([
'<div style="padding:155px 0 0;text-align:center;">',
bp=='loading'?'<img src="$images_path$ico_loading112fb20.gif"/>loading...':
'<a href="javascript:\'\'" onclick="return getTop().QMAddress.$fun$();">$content$</a>',
'</div>'
]).replace({
images_path:ag.getPath("image"),
fun:'initAddress',
content:aM.sMsg
});
}

return bp!='succeed';
}






function showQuickAddr(aM)
{
var ag=getTop();
return showQuickAddr2(aM,ag.S("quickaddr_div",window));
}






function aFi()
{
var cm=location.getParams();
return';compose;compose_postcard;compose_postcard_dlg;compose_card;compose_video;'.indexOf(';'+cm['t']+';')>-1&&cm['s']!='reply_all';
}







function showSeparatedCopy(bfq)
{
debug("showSeparatedCopy")
var ag=getTop(),
aS=ag.S("trSC",window),
wo=!ag.isShow(aS),
avE=QMAddrInput.get("sc",window)[wo&&!bfq?"clear":"flush"](),
abt=!wo?avE.get("json"):null,
aIx={};
debug("isshow:"+ag.isShow(aS));
debug("_bSeparatedCopy : "+wo)
if(abt)
{
for(var i=0,cJ=abt.length;i<cJ;i++)
{
var as=abt[i];
aIx[as.addr]=as.format;
}
}

ag.E(["to","cc","bcc"],function(ay)
{
var bam=ay.toUpperCase();
var Tn=ag.S("a"+bam,window);
var pb=QMAddrInput.get(ay,window).flush();

if(Tn)
{
ag.setClass(Tn,wo?Tn.className
+" nounderline cur_default":ag.trim(Tn.className
.replace(/nounderline cur_default/,"")));
Tn.disabled=wo;
}

ag.show(ag.S("tr"+bam,window),!wo
&&(!Tn||Tn.getAttribute("show")=="true"));

if(pb)
{
pb.disabled(wo);

if(!bfq&&wo)
{
avE.add(pb.get().join("; "));
}

if(abt)
{
for(var kR=[],as=null,i=0,cJ=abt.length;i<cJ;i++)
{
if(pb.hasAddr((as=abt[i]).addr))
{
kR.push(as.format);
delete aIx[as.addr]
}
}
pb.clear().add(kR.join("; "));
}
}
}
);

var aMf=ag.S("aSC",window);
if(aMf)
{
aMf.innerHTML=wo?"Send simultaneously":"Send individually";

ag.show(aMf.previousSibling,wo);
ag.show(aMf.previousSibling.previousSibling,!wo);
}
ag.S("separatedcopy",window).value=wo.toString();

avE.disabled(!wo);
ag.show(aS,wo);

if(wo)
{
avE.focus("end");
}
else
{
var kR=[];
for(var anZ in aIx)
{
kR.push(anZ);
}
QMAddrInput.get("to",window).add(kR.join("; "));
QMAddrInput.get("to",window).focus("end");
}

return wo;
}








function showInputCtrl(ay,bHE)
{
var aS=getTop().S("tr"+ay,window);
var gC=getTop().S("a"+ay,window);
var oR=getTop().isShow(aS);
var bPP=QMAddrInput.get(ay.toLowerCase(),window),deO;

getTop().show(aS,!oR);
if(ay=="CC")
{
deO=oR?"Add Cc ":"Remove Cc";
}
else if(ay=="BCC")
{
deO=oR?"Add Bcc":"Remove Bcc";
}

gC.innerHTML=deO;
gC.setAttribute("show",oR?"false":"true");
bPP.disabled(oR)[bHE==false||oR
?"length"
:"focus"]("end");

getTop().setUserCookieFlag('CCSHOW',ay=="CC"?0:1,oR?0:1);

return!oR;
}








function hideRightArea(gJ,bNA)
{
var aVl=getTop().S("rightArea",window);
if(!aVl)
{
return false;
}

gJ=!!gJ;

var bke=getTop().S("rightAreaBtn",window);
bke.onclick=function(){hideRightArea(!gJ);};
bke.innerHTML='<input type="button" hidefocus class='
+(!gJ?'nextfd />':'prefd />');


getTop().show(aVl,gJ);
if(!bNA)
{
getTop().setUserCookieFlag('CCSHOW',2,(!gJ?'1':'0'));
}
return false;
}




function initCookieSetting()
{
var aHi=getTop().getUserCookie("CCSHOW")||"";
var bkH=window.QMAddrInput&&QMAddrInput.get("cc",window);
var biI=window.QMAddrInput&&QMAddrInput.get("bcc",window);

if(bkH&&(bkH.length()||aHi.charAt(0)==1))
{
showInputCtrl("CC",false);
}

if(biI&&(biI.length()||aHi.charAt(1)==1))
{
showInputCtrl("BCC",false);
}

if(getTop().S("rightArea",window)&&aHi.charAt(2)==1)
{
hideRightArea(false,true);
}
}





function loadValue(bRD)
{
if(bRD&&getPageEditor())
{
Ke("100%");
getInputObj("content_compare",null,true).value=getPageEditor()
.getContent();
Ke(getTop().gbIsIE?"auto":"100%");
}

var ae=arguments.callee;
var cU=ae.uF;
getTop().E(ae.bhj,function(bC,lm)
{
var eu=getInputObj(bC,null,true);
if(eu&&eu.value!=cU[lm])
cU[lm]=eu.value;
}
);
}
loadValue.bhj=["to","cc","bcc","subject","content_compare"];
loadValue.uF=[];





function aId()
{
var pN=loadValue.bhj,
cU=loadValue.uF,
cfz=function(cs)
{
return cs.replace(/<param .*?\">/ig,"").replace(/<script[^>]*?>.*?(<\/script>)/gi,"");
};
if(getPageEditor())
{
Ke("100%");
getInputObj("content_compare",null,true).value=getPageEditor()
&&getPageEditor().getContent();
Ke(getTop().gbIsIE?"auto":"100%");
}

for(var i=pN.length-1;i>=0;i--)
{
var gX=getInputObj(pN[i],null,true);
var cX=cfz(gX&&gX.value||"");
var bQB=cfz(cU[i]||"");
if(cX!=bQB)
{
return true;
}
}

return false;
}

function aVZ()
{
return getTop().QMDialog("ftnupload_attach");
}
function ciG()
{
var cG=getTop().QMDialog("ftnupload_attach"),
yx=cG&&cG.getDialogWin().oMainObj;

return(yx&&yx.mnUploaderCount==yx.mnSuccessCount);
}

function cfM()
{
return getTop().QMDialog("ftnupload_self");
}
function cpU()
{
var cG=getTop().QMDialog("ftnupload_self"),
yx=cG&&cG.getDialogWin().oMainObj;

return(yx&&yx.mnUploaderCount==yx.mnSuccessCount);
}





function setNeedCloseConform(bxm)
{

getTop().log("setNeedCloseConform _abNeed="+bxm+" caller="+arguments.callee.caller.toString())
setNeedCloseConform.bPv=bxm;
}





function isNeedCloseConform()
{
return setNeedCloseConform.bPv;
}




function getToBeReloadInfo()
{
var ag=getTop(),bD,
cAU=QMAttach.oFileUploadMgr&&QMAttach.oFileUploadMgr.getUploadData();

bD=
{
content:getPageEditor()&&ag.filteSignatureTag(getPageEditor().getContent(),"FILTE<:"),
subject:ag.S("subject",window).value,
exbacode:ag.S("exist_BigAttach",window)&&ag.S("exist_BigAttach",window).innerHTML,
bacode:ag.S("BigAttach",window)&&ag.S("BigAttach",window).innerHTML,
excode:ag.S("exist_file",window)&&ag.S("exist_file",window).innerHTML,
fileuploaddata:cAU||[]
};

if(window.QMAddrInput)
{
getTop().E(["to","cc","bcc","sc"],
function(qk)
{
var bS=QMAddrInput.get(qk,window);
if(bS&&!bS.isDisabled())
{
bD[qk]=bS.get(";");
}
});
}

return bD;
}




function cEG(dOx)
{
getTop()[dOx=="opener"?"goReloadInfoOpener":"goReloadInfo"]=getTop().extend(getToBeReloadInfo(),
{
isconfirm:aId()
}
);
}





function aMv(aj)
{
var yS=getTop().goReloadInfo||getTop().goAsyncContent;
getTop().goReloadInfo=null;

if(aj.sPlusOpener)
{
var bMt=getTop().opener;
if(bMt)
{
yS=bMt.goReloadInfoOpener;
bMt.goReloadInfoOpener=null;
}
}

if(!!yS)
{
var ag=getTop(),
aeQ=yS.bacode,
cZX=yS.excode,

bPZ=aj&&aj.hideBigAttach,
cAU=yS.fileuploaddata,
MD=getTop().S("subject",window),
aIA=getTop().S("BigAttach",window),

bWK=getTop().S("exist_file",window),

aZ=getPageEditor();
if(yS.exbacode)
{
aeQ+=yS.exbacode;
}

if(bPZ&&aeQ)
{

getTop().showError("Large attachment are not available in Group message.");
aeQ="";
}
cAU&&QMAttach.oFileUploadMgr.initFileList(cAU);
if(bWK&&cZX&&cZX.replace(/\s/ig,""))
{
bWK.innerHTML=cZX.replace(/name=\"replymailattach\"/g,'name="mailattach"');
ag.show("attachContainer",true,ag.getMainWin());
}

var drj=window.QMAddrInput;
getTop().E(["to","cc","bcc","sc"],function(qk,dB)
{
var bS=drj&&drj.get(qk,window);
yS[qk]&&bS&&bS.add(yS[qk]);
});

if(yS["sc"])
{
showSeparatedCopy(true);
}

if(MD&&yS.subject)
{
MD.value=yS.subject;
}

if(aIA&&aeQ&&aeQ.replace(/\s/ig,""))
{
aIA.innerHTML=aeQ;
ag.show("attachContainer",true,ag.getMainWin());
}






if(aZ)
{
if(yS.content)
{
aZ.setContent(yS.content);
}
else
{
aZ.setContent(
yS.pluscontent||"",
getTop().QMEditor.getBreakLine(1),
aZ.getContent()
);
}
}

return yS;
}

return null;
}





function confirmCheckBeforeClose()
{
if(window.getFlashCurrentState&&getFlashCurrentState()==401)
{
return"recording";
}

if(getTop().S("voiceid",window)&&getTop().S("voiceid",window).value)
{
return"recorded";
}

if(aId())
{
return"content";
}
if(aVZ())
{
return"ftnuploading";
}

return"exit";
}





function closePage(ah)
{
var abb;
if(isNeedCloseConform())
{
var avl=(new Array(42)).join("-")+(new Array(5)).join(" ");
if(getTop().isDisableCtl("sendbtn",window))
{
getTop().QMDialog("composeExitAlert","close");
getTop().switchFolder("folder_newmail");

return getTop().T([avl,'\nAre you sure you want to stop \uFF1F\n',avl]);
}
else if((abb=confirmCheckBeforeClose())!="exit")
{
getTop().QMDialog("composeExitAlert","close");
getTop().switchFolder("folder_newmail");

return getTop().T([avl,"\n",{
"driftcontent":'Tip: Contents not sent will be lost. ',
"content":'Tip: Contents not saved will be lost. ',
"recording":'Tips: you are recording audio and video, it would be lost if not send.',
"recorded":'Tips: you have recorded audio and video, it would be lost if not send.',
"ftnuploading":'Tips: files uploading, it would be cancelled if close this page.'
}[abb],"\n",avl]).replace({
content:getPageId()=="note"?"note":"message"
});
}
}
setNeedCloseConform(true);
}





function redirectExitURLId(MA)
{
if(MA==1
&&(getTop().QMHistory.tryBackTo("readmail")||getTop().QMHistory.tryBackTo("mail_list")))
{
return;
}

var IV=["/cgi-bin/addressbook/addr_listall?","/cgi-bin/today?",

"/cgi-bin/cardlist?ListType=Cards&Cate1Idx=listall&t=card&loc=cardlist,cardlist,fromtab,1&",
"/cgi-bin/readtemplate?t=compose&s=cnew&",
"/cgi-bin/grouplist?t=compose_group&",
"/cgi-bin/note_list?",
"/cgi-bin/mail_list?folderid=8&t=mail_list_group&",
"/cgi-bin/readtemplate?t=compose_audiomail&",
"/cgi-bin/addr_listall?func=birthcard&t=birth_friendlist&",
"/cgi-bin/readtemplate?t=compose_video&",
"/cgi-bin/readtemplate?t=compose_postcard&",
"/cgi-bin/readtemplate?t=compose_drift&maxage=0&"
];

if(MA<0||MA>=IV.length)
{
MA=1;
}
var aN=IV[MA]+"sid="+getTop().getSid();
if(MA==5)
{
aN+=("&"+getTop().getGlobalVarValue("DEF_NOTE_ORG"));
;
getTop().setGlobalVarValue("DEF_NOTE_ORG","");
}
if(getTop().bnewwin==1)
{
aN+="&newwin=true";
}
getTop().goUrlMainFrm((MA==1
?getTop().QMHistory.getUrl(getTop().QMHistory.getLastRecordId())
:null)
||aN,false,MA>=2
&&MA<=4);
}





function exitConfirm(aHT)
{
var abb;
var ag=getTop();
var aHW=function()
{
if(typeof aHT=="function")
{
aHT();
}
else
{
ag.globalEval(aHT,window);
}
}

var asi=getPageConfig().subtmpl=="draft"
&&!location.getParams()["backurl"];
var CU=getTop().S("fmailid",window)&&ag.S("fmailid",window).value;

if(CU==getPageConfig().mailid)
{
CU="";
}

if(isNeedCloseConform()
&&getPageId()!="remind"
&&((abb=confirmCheckBeforeClose())!="exit"
||(!asi&&CU&&!goCompose.beA)))
{
disableAutoSave();

if(getPageEditor())
{
getPageEditor().saveRange();
}

var aOC=getTop().S("qqgroupid",window)&&!ag.S("qqgroupid",window).disabled;
var bK={
exitstyle:"",
delstyle:"display:none",
exitbtn:"No",
disattach:ag.getMainWin().sendAfterUpload()?"block":"none"
};

if(getPageId()=="note")
{
bK.title="Note was changed ,do you want to save change ?";
}
else if(getPageId()=="voice")
{
switch(abb)
{
case"recording":
bK.title="Recording, are you sure not to send the audio and video message?";
break;
case"recorded":
bK.title="Recorded, are you sure not to send the audio and video message?";
break;
default:
bK.title="Content modified, are you sure not to send the audio and video message?";
}
bK.savestyle="display:none;";
bK.exitbtn="OK";
}
else if(getPageId()=="postcard")
{
bK.title="Content modified, are you sure not to send the postcard?";
bK.savestyle="display:none;";
bK.exitbtn="OK";
}
else if(getPageId()=="bottleDrift")
{
bK.title="";
bK.savestyle="display:none;";
bK.exitbtn="OK";
}
else if(aOC)
{
bK.title="Group message had been changed, are you sure to quit? ";
bK.savestyle="display:none;";
bK.exitbtn="OK";
}
else
{
bK.title=CU&&!asi
?"Message was saved as a draft. Do you want it as a draft?"
:asi?"Draft was changed, save change?":"Message was changed, save change?";
if(!asi)
{
bK.exitstyle="display:none;";
bK.delstyle="";
}
}

var dV=new ag.QMDialog({
sId:"composeExitAlert",
sTitle:"Warning",
sBodyHtml:ag.TE([
'<div class="dialog_feedback">',
'<span class="dialog_icon icon_info_b"></span>',
'<div class="dialog_f_c">',
'<div $@$if($disattach$=="block")$@$class="dialog_f_t"$@$endif$@$>$title$</div>',
'<div class="dialog_f_d" style="width:370px;display:$disattach$"">Notes: message will be sent automatically after finishing uploading large attachment.<br/>It will be cancelled if you leave now. You can click "Cancel" to stay in this page.</div>',
'</div>',
'</div>',
'<div class="dialog_operate">',
'<a class="btn_gray" id="btn_exit_save" name="btn_exit_save" href="javascript:;" style="$savestyle$">Yes</a>',
'<a class="btn_gray" id="btn_exit_notsave" name="btn_exit_notsave" href="javascript:;" style="$exitstyle$">$exitbtn$</a>',
'<a class="btn_gray" id="btn_delete_save" name="btn_delete_save" href="javascript:;" style="$delstyle$">No</a>',
'<a class="btn_gray" id="btn_not_exit" href="javascript:;" href="javascript:;" initlized="true">Cancel</a>',




'<div class="clr"></div>',
'</div>'
]).replace(bK),
nWidth:null,
nHeight:null,
bClose:true,
onshow:function()
{
var bW=this;
if(aOC||getPageId()=="voice"||
getPageId()=="note"||getPageId()=="postcard")
{
try
{
bW.S("btn_exit_notsave").focus();
}
catch(fO)
{
debug("error when focus on element 'btn_exit_notsave'");
}
}
else
{
try
{
bW.S("btn_delete_save").focus();
}
catch(fO)
{
debug("error when focus on element 'btn_delete_save'");
}
}
},
onload:function(){
var bW=this;
ag.addEvent(bW.S("btn_exit_save"),"click",function(ah)
{
if(abb!="exit")
{
bW.close();
doProcess(getPageId()=="note"?"":"savedraft",
{
card:"card",
note:"send"
}[getPageId()]||"save",getPageId()=="note"?1:0
);
setNeedCloseConform(false);
aHW();
}
else
{
ag.fireMouseEvent(bW.S("btn_exit_notsave"),"click");
}
ag.preventDefault(ah);
});
ag.addEvent(bW.S("btn_exit_notsave"),"click",function(ah)
{
ag.disableAll(true);
bW.S("btn_exit_notsave").disabled=true;
setNeedCloseConform(false);
bW.close();
aHW();
ag.preventDefault(ah);
});
ag.addEvent(bW.S("btn_delete_save"),"click",function(ah)
{
var aFh=function()
{
if(bW.S("btn_exit_notsave"))
return ag.fireMouseEvent(bW.S("btn_exit_notsave"),
"click"
);
};
if(CU)
{
var ey=new ag.QMAjaxRequest("/cgi-bin/mail_mgr");
ey.onComplete=function(Vc)
{
if(Vc.responseText.indexOf("isMainFrameError")!=-1)
{
ey.onError();
}
else
{
getTop().hiddenMsg();
getTop().reloadLeftWin();
aFh();
}
};
ey.onError=function()
{
ag.showError("Remove draft fail");
aFh();
};
ey
.send(ag.T('sid=$sid$&Fun=$fun$&mailaction=$mailaction$&mailid=$mailid$')
.replace({
sid:ag.getSid(),
fun:"PerDel",
mailaction:"mail_del",
mailid:CU
}));

bW.S("btn_delete_save").disabled=true;
ag.disableAll(true);
ag.showInfo("Deleting draft");
}
else
{
aFh();
}
ag.preventDefault(ah);
});
ag.addEvent(bW.S("btn_not_exit"),"click",function(ah)
{
bW.close();
ag.preventDefault(ah);
});







},
onbeforeclose:function(){
ag.disableAll(false);
enableAutoSave();
return true;
},
onclose:function(){
if(getPageEditor())
{
getPageEditor().loadRange();
}
}
});


return false;
}

setNeedCloseConform(false);
aHW();
return false;
}





function saveContentGoUrl(be)
{
cEG();
var ag=getTop(),bma=QMAttach.oFileUploadMgr;
if(QMAttach.oFileUploadMgr.getUploadList().length>QMAttach.oFileUploadMgr.getUploadList("complete").length)
{
ag.confirmBox(
{
title:"Warning",
msg:"There are some attachments still in progress, are you sure to abort ?",
confirmBtnTxt:"Yes",
cancelBtnTxt:"No",
width:430,
onreturn:function(lo)
{
if(lo)
{


QMAttach.rmFileCell(QMAttach.oFileUploadMgr.getUploadListExclude("complete"));
cEG();
setNeedCloseConform(false);
getTop().goUrlMainFrm(be,false,true);
}
}
}
);
}
else
{
setNeedCloseConform(false);
getTop().goUrlMainFrm(be,false,true);
}
}





function selectGroup(ay)
{
ay=String(ay).indexOf("@groupmail.qq.com")==-1
?(ay+"@groupmail.qq.com")
:ay;
var kD=getTop().S("Gname_"+ay,window);
if(kD)
{
getTop().S("qqgroupid",window).value=ay;
getTop().S("groupname",window).value=kD.innerHTML;
}
}




function useStationery()
{
hideRightArea(true,true);
changeTab("stationery_div");
if((getTop().S("stationery",window).src=="")
||(getTop().S("stationery",window).src.indexOf("javascript:")==0))
setTimeout(
'getTop().S("stationery", window).src="/cgi-bin/readtemplate?t=stationery&sid="+getTop().getSid();',
10
);
}





function changeTab(aI)
{
var hp=["AddrTab","stationery_div","card_div"];
var bIk=["addr_cmd","stationery_cmd","card_cmd"];
var bPR=["cptab","cptab cpslt"];
for(var i=0,cJ=hp.length;i<cJ;i++)
{
var kD=getTop().S(hp[i],window);
if(kD)
{
var dI=(aI==hp[i])?1:0;
getTop().S(bIk[i],window).className=bPR[dI];
getTop().show(kD,dI);
}
}
}



















































function autoSave(bFw)
{
if(bFw&&aId()&&isEnabledAutoSave())
{
getPageId()!="note"?doProcess("autosave","save"):doProcess(
"note_autosave","send",true
);
}

goCompose.aYq=setTimeout(
function()
{
autoSave(true);
},
getPageId()=="note"?300000:300000
);
}

function clearAutoSave()
{
disableAutoSave();
clearTimeout(goCompose.aYq);
}

function isEnabledAutoSave()
{
var aYN=arguments.callee.aZx;
return typeof aYN!="boolean"?true:aYN;
}

function disableAutoSave()
{
isEnabledAutoSave.aZx=false;
}

function enableAutoSave()
{
isEnabledAutoSave.aZx=true;
}







function bOp(eL,xu)
{

if(getTop().S("mailbgmusic",window))
{
getTop().S("mailbgmusic",window).value="use";
}

var qI=getTop().getUserInfo("alias");
var bLx=xu.song?getTop().T('<b>$songDisp$</b>($singerDisp$)')
.replace({
songDisp:getTop().htmlEncode(xu.song),
singerDisp:getTop().htmlEncode(xu.singer)
}):"";
var bGz=xu.song
?getTop().T('<a href="http://music.soso.com/music.cgi?w=$songorg$&pl=$singerorg$" target="_blank">\u67E5\u770B</a>&nbsp;')
.replace({
songorg:xu.song,
singerorg:xu.singer
})
:getTop().T('<a href="$url$" target="_blank">Download </a>').replace({
url:xu.url
});
return getTop().T([
'$content$',
'<player id="cmd:bgmusic" url="$url$" song="$song$" singer="$singer$"></player> ',
'<div id=QQMailBgMusicInfo style="font:12px;color:#909090;">',
'<br><br><br><br>Your friend  $alias$  choose backgroud music for this message - $bgmusic$',
'$viewurl$&nbsp;',
'<a id="_bgmusic_play_btn_" href="http://mail.qq.com/zh_CN/htmledition/playmusic.html?song=$song$&singer=$singer$&sender=$encodealias$&url=$encodeurl$" target="_blank">\u64AD\u653E</a>',
'</div>']).replace({
content:eL,
url:xu.url,
alias:qI,
bgmusic:bLx,
viewurl:bGz,
song:xu.song
?encodeURIComponent(xu.song)
:"",
singer:xu.singer
?encodeURIComponent(xu.singer)
:"",
encodeurl:xu.url
?encodeURIComponent(xu.url)
:"",
encodealias:encodeURIComponent(qI)
}
);
}








function bMT(Mj)
{
var aB=Mj.length;
if(aB>10)
{
getTop().msgBox("You can select 10 contacts at most. ","dialog",true,0,"info");
return false;
}
if(!getTop().S("MyRssContent",window))
{
for(var aD=0;aD<aB;aD++)
{
if(Mj[aD].valid&&!/@((vip.)?qq|foxmail).com/i.test(Mj[aD].addr))
{
getTop().msgBox("You can only send reminders to QQ Mail users. ","dialog",true,0,"info");
return false;
}
}
}
return true;
}






function addrErrDlg(ao)
{
var bk=ao,ag=getTop();
new ag.QMDialog({
sId:bk.sId||"Address_error",
sTitle:bk.sTitle||"Invalid recipient format. ",
nHeight:null,
sBodyHtml:ag.T([
'<div class="dialog_feedback">',
'<span class="dialog_icon icon_caution_b"></span>',
'<div class="dialog_f_c">',
'<div class="dialog_f_t">$desc$</div>',
'<div class="dialog_f_d" style="max-height:64px;_height:53px;word-break:break-all;overflow:hidden;">" <span class="red">$result$</span> "</div>',
'</div>',
'</div>',
'<div class="dialog_operate">',
'<input type=button class="btn wd2" id="confirm" value="OK" >',
'</div>'
]).replace({
result:bk.oErrorAddrs.join('</b>","<b style="color:red;">'),
desc:bk.sDesc||""
}),
onload:function(){
var bW=this;
ag.addEvent(this.S("confirm"),"click",function(){
bW.close();
});
},
onshow:function(){
this.S("confirm").focus();
}
});
return false;

}








function doProcessCheck(mA,gR,acu,aeN)
{
if(gR=="voice"&&!CheckVoiceBeforeCompose())
{
return false;
}

if(gR=="card"&&window.setBirthCardReceiver
&&!setBirthCardReceiver(mA=="savedraft"?0:1))
{
return false;
}
var ag=getTop(),
gW=0;


try
{
var aaY={},
asz=["to","cc","bcc","sc"],
arH=false,
asY=[],
cwC=[],
cHz="",
dHC=0;

var aWu=false;

if(!(gR=="card"&&window.setBirthCardReceiver)
&&getPageId()!="qq"&&getPageId()!="note"&&getPageId()!="group"&&getPageId()!="groupsms")
{

for(var aD=asz.length-1;aD>=0;aD--)
{
var ay=asz[aD],
bfn=typeof(QMAddrInput)=="undefined",
aEP=window.QMAddrDomainCheck;
if(getPageId()=="card"&&bfn)
{

var pb=aaY[ay]=ag.QMAddrInput.get(ay,ag);
aEP=ag.QMAddrDomainCheck;
}
else if(!bfn)
{
var cG=ag.QMDialog('postcard_dlg'),
ap=window;
if(cG)
{
ap=cG.getDialogWin();
}
var pb=aaY[ay]=QMAddrInput.get(
ay,ap
);
}
if(!pb)
{

continue;
}

if(gR=="send"&&aEP&&!aEP.permit(pb.get('validemail')))
{
ag.showError('Failed to send: you have input too many email addresses. ');
return false;
}

if(getPageId()=="postcard")
{
if(!checkWordText())
{
return false;
}
}

var pA=ag.S(ay,window);
if(pb&&pA)
{

var aEm=pA.disabled=pb
.flush().isDisabled();



var cX=pA.value=aEm
?"":pb.get().join("; ");

if(!aEm)
{










var cOy=pb.get("json");
for(var i=0;i<cOy.length;i++)
{
dHC++;
if(cOy[i].addr.indexOf("@qzone.qq.com")>-1)
{
cHz=cOy[i].addr;
}
}
asY=aEm?"":asY
.concat(pb.get("errhtml"));
cwC=aEm?"":cwC
.concat(pb.get("errQQhtml"));

if(!arH)
{
arH=!!cX;
}

if(getPageId()=="remind"&&!bMT(pb.get("json")))
{
aWu=true;
}
}
}
}



gW++;
if(acu<gW)
{
if(gR=="send"&&getPageId()=="compose"&&dHC>1&&cHz!="")
{

ag.confirmBox(
{
title:"Warning",
msg:ag.T('<div class="dialog_f_t" style="line-height:1.5; padding-bottom:10px;">$addr$ was exist in message receiver,<br>  message content wil be posted in QZone.</div><div> are you sure to post ?</div>').replace(
{
addr:cHz
}),
onreturn:function(lo)
{
if(lo)
{
ag.ossLog("realtime","all","stat=nothing&loc=qzone,send,1,0");
setTimeout(
function()
{
aeN(gW);
},
100
);
}
}
}
);
ag.ossLog("realtime","all","stat=nothing&loc=qzone,check,1,0");
return false;
}

}

if(getPageId()=="remind"&&aWu)
{
return false;
}
}
else
{
arH=true;
}

if(getPageId()!="note"
&&getPageId()!="group"
&&getPageId()!="groupsms"
&&!(ag.S("separatedcopy",window)&&ag.S("separatedcopy",window).disabled)
&&(gR=="voice"||gR=="send"||(gR=="card"&&mA=="")))
{
if(!arH)
{
if(gR=="card")
{
ag.showError(ag.gsMsgNoCardSender);

splashToCtrl(ag.QMDialog("GreetingCard").S("bccAreaCtrl"));

ag.show(ag.S("cardTip",window),true);
}
else if(getPageId()=="postcard")
{
ag.showError(ag.gsMsgNoSender);
splashToCtrl("bccAreaCtrl");
}
else
{
ag.showError(ag.gsMsgNoSender);
splashToCtrl("toAreaCtrl");
}

for(var i=0,cJ=asz.length;i<cJ;i++)
{
var pb=aaY[asz[i]];
if(pb&&!pb.isDisabled())
{
pb.focus("end");
break;
}
}

return false;
}
gW++;
if(acu<gW)
{
if(asY.length)
{
return addrErrDlg({
sId:"Address_error",
sTitle:"Invalid recipient format. ",
sDesc:"Format of the following recipients is invalid: ",
oErrorAddrs:asY
});






























}
if(cwC.length)
{
return addrErrDlg({
sId:"AddressQQ_error",
sTitle:"Recipient does not exist.",
sDesc:"Recipient  below does not exist.",
oErrorAddrs:cwC
});
}

}


ag.gSendmailSubject=ag.S("subject",window).value;

}
}
catch(aL)
{
alert(aL.message)
}


try
{
var awf=ag.S("qqgroupid",window);
if((gR=="send"||gR=="card")
&&awf&&!awf.disabled
&&awf.value.indexOf("@")==-1)
{
if(gR=="card")
{
ag.showError("Please select a QQ group.");
changeTab("AddrTab");
ag.show(ag.S("cardTip",window),true);
window.scroll(0,0);
}
else
{
ag.showError("Please select a QQ group.");
}
return false;
}

if(awf&&!ag.trim(getPageEditor().getContent(true)))
{
ag.confirmBox(
{
title:"Fail message",
msg:"Please input message content. ",
width:430,
onreturn:function(lo)
{
var aZ=getPageEditor();
aZ&&aZ.focus();
}
}
);
return false;
}

if(gR=="send"&&getInputObj("mailtype").value=="vote")
{
if(ag.S("votesubject",window).value=="")
{
ag.showError("Please fill in the subject of vote. ");
ag.S("votesubject",window).focus();
splashToCtrl("votesubject");
return false;
}

var tT=ag.SN("option",window);
for(var i=0,cJ=tT.length;i<cJ;i++)
{
if((tT[i].value=="")&&(i<2))
{
ag.showError(["Please fill in the content of Option ",i+1,". "].join(""));
tT[i].focus();
splashToCtrl(tT[i]);
return false;
}
}
}
}
catch(aL)
{
}


try
{
var MD=ag.S("subject",window);
if(MD.value==ag.gsMsgNoSubject)
{
MD.value="";
}
var EP=ag.isShow(MD)?MD.value:"";
if(ag.getAsiiStrLen(EP)>240)
{
ag.showError("Title must have at most 240 characters.");
return false;
}
gW++;
if(acu<gW)
{
if(!goCompose.bkk&&!ag.trim(EP)&&
(getPageId()=="compose"||getPageId()=="qfcompose")&&gR=="send")
{
ag.confirmBox(
{
msg:[
'<div class="dialog_f_t">You have not filled in subject of the message. </div>',
'<div class="dialog_f_d" style="font-size:14px;">Are you sure you want to continue? </div>'
].join(""),
width:430,
onreturn:function(lo)
{
if(lo)
{
setTimeout(
function()
{
goCompose.bkk=true;
aeN(gW);
},
100
);
}
}
}
);
return false;
}
}
}
catch(aL)
{
}


try
{
var wv=QMAttach.checkAttachWarnningType();
if(wv.length!=0)
{
ag.msgBox("Your attachment contains an exe file:"+wv.join(", ")+", for security reasons, aattachment(s) such as these are not allowed","dialog",true,0,"Failure information");
return false;
}

var amH=QMAttach.getAttachSize(),
biR=QMAttach.getAttachLimit();

if(amH>biR)
{
QMAttach.showAttachLimit(biR);
return false;
}

var asF=false,
Oa=ag.QMAddress&&ag.QMAddress.getGroupMail()?"":"none";


for(var bp in aaY)
{
if(asF&&Oa)
{
break;
}

if(!aaY[bp])
{
continue;
}

var bO=aaY[bp].get("json");
for(var i=0,cJ=bO.length;i<cJ;i++)
{
var en=bO[i].addr;
if(!asF
&&en.indexOf("@vip.qq.com")==-1
&&en.indexOf("@qq.com")==-1
&&en.indexOf("@foxmail.com")==-1)
{
asF=true;
}

if(!Oa&&ag.QMAddress.getGroupMail(en))
{
Oa=en;
}

if(asF&&Oa)
{
break;
}
}
}
goCompose.Oa=Oa;

if(
(aVZ()&&!ciG()||cfM()&&!cpU())


&&mA!="autosave")
{
gW++;
if(acu<gW)
{
ag.confirmBox(
{
sId:"confirmcheckuploading",
title:"Tips",
msg:["Large attachment(s) have not finished uploading yet",mA=="savedraft"?", they will not be saved in Drafts":", if send now attachment(s)  will be lost "].join(""),
onreturn:function(Je)
{
if(Je)
{
aeN(gW);
}
}
});
return false;
}

}
}
catch(aL)
{

}

gW++;
if(acu<gW)
{
try
{
var vy=getPageConfig().subtmpl;
if(!goCompose.aWt
&&mA!="savedraft"&&mA!="autosave"
&&vy!="reply"&&vy!="reply_all"
&&vy!="forward"&&vy!="draft"
&&vy!="content"
&&ag.S("AttachFrame",window)&&!QMAttach.hasAttach(true))
{

var EP=ag.isShow(ag.S("subject",window))?ag.S("subject",window).value:"";
var dk=getPageEditor().getContent(true);
var aOk=/attachment|attachments/ig;
if(!QMAttach.isUploading()
&&(EP.indexOf("Attachments")!=-1
||dk.indexOf("Attachments")!=-1
||EP.search(aOk)!=-1
||dk.search(aOk)!=-1))
{
ag.confirmBox(
{
msg:[
'<div style="padding:0 10px 0 0;"><b>',
'You have mentioned "attachment" in the message; however no file is attached.',
'</b></div>',
'<div>',
'Are you sure you want to continue? ',
'</div>'].join(""),
width:430,
onreturn:function(aP)
{
if(aP)
{
goCompose.aWt=true;
setTimeout(
function()
{
aeN(gW);
},
100
);
}
}
}
);

return false;
}
}
}
catch(aL)
{

}
}


gW++;
if(acu<gW)
{
var bS=getTop().S("savesendbox",window);
if(getPageId()=="compose"&&bS&&!bS.checked)
{
ag.QMAjax.send(ag.T("/cgi-bin/tip?sid=$sid$&args=savesendbox,28&t=tipcheck").replace(
{
sid:ag.getSid()
}),
{
method:"GET",
timeout:500,
onload:function(aP,bt)
{
if(aP)
{
if(bt=="1")
{
ag.confirmBox(
{
title:"Tips",
msg:
[
'<div class="dialog_f_t">The message you had sent will not be saved in sent box.</div>',
'<div class="dialog_f_d">',
'<div style="margin-bottom: 6px; margin-top: 5px;">Maybe you change the option in setting ,you could :</div> ',
'<input type="radio" checked="checked" id="csavesendbox" value="1" name="cssb"><label for="csavesendbox">Choose save message automatic, and continue</label><br>',
'<input type="radio" value="0" name="cssb" id="cdonotsavesendbox"><label for="cdonotsavesendbox">Choose not save  and continue</label>',
'</div>'
].join(""),

onreturn:function(aP)
{
if(aP)
{

if(this.S("csavesendbox").checked)
{
bS.checked=true;

ag.QMAjax.send(ag.T("/cgi-bin/setting1?sid=$sid$&savesendbox=0&fun=submit&loc=send,save,1,0").replace(
{
sid:ag.getSid()
}),
{
method:"POST",
timeout:500,
onload:function()
{
ag.goUserInfo.reset();
}
});

}
else
{
ag.ossLog("realtime","all","stat=noting&loc=send,save,0,0");
}
setTimeout(
function()
{
aeN(gW);
});
}
}
});
return false;
}
else
{
setTimeout(
function()
{
aeN(gW);
});
}
}
else
{
setTimeout(
function()
{
aeN(gW);
});
}
}
}
);
return false;
}
}


gW++;
if(acu<gW)
{
try
{

}
catch(aL)
{
}

}
































































































































return true;
}







function doProcessSafe(mA,gR,TU)
{



try
{
TU();
}
catch(aL)
{
var ae=arguments.callee,
iU=getPageId()=="note"?"Failed to save the diary ":"Failed to send the message ";

if(aL.dispmode=="dialog")
{
getTop().msgBox(aL.message,"dialog",true,0,iU);
}
else if(gR=="voice"||gR=="send"
||(gR=="card"&&mA==""))
{
getTop().msgBox(
getTop().T([
'<div>',
'Reason: $desc$ ',
'<div style="display:$cache$">Failure code: $code$ ',
'(<a href="http://support.qq.com/cgi-bin/beta1/titlelist_simple?pn=0&order=3&fid=350" target="_blank" title="\u628A\u5931\u8D25\u539F\u56E0\u4E0E\u5931\u8D25\u7801\u53D1\u5230\u90AE\u7BB1\u53CD\u9988\u610F\u89C1\uFF0C\u6211\u4EEC\u4F1A\u5C3D\u5FEB\u5904\u7406\uFF01">\u62A5\u544A\u5931\u8D25\u539F\u56E0</a>)',
'</div>',
'</div>',
'<div style="color:red;display:$cache$">',
'Please clear browser cache and enter the mailbox again. ',
'<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=7&&no=339" target="_blank">\u67E5\u770B\u5E2E\u52A9</a>',
'</div>']).replace({
desc:aL.message,
code:ae.mn,
cache:aL.clrcache==false?"none":""
}),"dialog",true,0,iU
);
getTop().recodeComposeStatus(4,null,[ae.mn,
encodeURIComponent(aL.message)].join('|'),true);
}
else
{
getTop().showError(aL.message);
}

getTop().disableAll(false);
enableAutoSave();
}
}

function isUseBackgroundSend()
{
var xo=QMAttach.getExistList(),
amE=getPageId(),
bUG=xo.length?xo[xo.length-1].sUploadMode:"";
if(("compose"==amE||"group"==amE)

&&"1"==getTop().gbBackGroundSend)
{
return true;
}
return false;
}



function composeFormSubmit(jr,mA)
{
if(!jr)
{
return;
}
var czG,
ag=getTop(),
abL=arguments.callee,
amE=getPageId(),
dCk=function()
{
if(jr.verifycode)
{
jr.verifycode.value="";
}
if(jr.verifycode_cn)
{
jr.verifycode_cn.value="";
}
},
cPr=function()
{
if(mA=="savedraft"||"save"==jr.actiontype.value)
{
return"save"
}
else
{
return jr.actiontype.value
}
};


ag.gfComposeFail=function()
{
ag.showProcess(1);
abL(jr)
};


if("save"!=jr.actiontype.value&&isUseBackgroundSend())
{
doProcessSafe.mn=85;
setNeedCloseConform(false);
ag.showProcess(0);
ag.BackGroundSend.send(jr,amE,getToBeReloadInfo());

dCk();
}
else
{

ag.waitFor(
function()
{
return ag.ComposeLib;
},
function(aP)
{
if(!aP)
{
ag.osslogAjaxCompose(13);
ag.showError('Sending module load failed<a onclick="gfComposeFail();" nocheck="true">[please retry]</a>',-1);
return;
}

var bZL=ag.ComposeLib,
bdT=bZL.getFormData(jr),
bSo=jr.getAttribute("action")||"",
bsR=bdT.s,
aUj=cPr();


if(aUj=="save")
{
delete bdT.secmailcode;
}

bZL.send(
ag.extend(
bdT,
{
cginame:bSo.replace(/^.*?\/cgi-bin\/(\w+).*$/gi,"$1"),
ef:"js",
t:"compose_send.json"
}
),{
sType:"nil",
nTimeout:2*60*1000,
sSendingDesc:ag.TE([
'$@$if($type$=="note")$@$',
'Saving notes',
'$@$else if($sendtime$==1)$@$',
'$@$if($s$=="comm")$@$',
'Saving draft',
'$@$else if($s$=="card")$@$',
' ',
'$@$else if($s$=="postcard")$@$',
' ',
'$@$else if($s$=="video")$@$',
' ',
'$@$else if($s$=="voice")$@$',
' ',
'$@$endif$@$',
'$@$else$@$',
'$@$if($handleString$=="send")$@$',
'Sending message...',
'$@$else$@$',
'Saving draft',
'$@$endif$@$',
'$@$endif$@$',
'... [<a onclick="ComposeLib.abort();" nocheck="true" style="color:white;">Cancel</a>]'
]).replace({
handleString:"save"!=aUj?"send":"save",
sendtime:bdT.sendtime,
s:bdT.s,
type:getPageId()
}),
sCgiPath:bSo,
bCancelable:true,
onready:function()
{

ag.osslogAjaxCompose(8);
setNeedCloseConform(true);


},
oncomplete:function(aP,Ru)
{
var MP={};


ag.disableAll(false,window);

bSo=="/cgi-bin/groupmail_send"&&ag.disableTimeSendBtn(true,window);

setNeedCloseConform(mA=="autosave"&&getPageConfig().subtmpl!="draft");

Bj(true);

if(aP)
{
try
{
MP=eval("("+Ru+")");
}
catch(e)
{}

ag.osslogAjaxCompose(9,MP.errcode,bsR,aUj);

if(typeof(MP.errcode)=="undefined")
{

ag.osslogAjaxCompose(12,MP.errcode,bsR,Ru);
ag.showError("Sending Status abnormal, message maybe has been received, confirm it please [-12]");
}
else if(+MP.errcode<0)
{

ag.recodeComposeStatus(2,null,0);

if(/<script[^>]*>(.*)?<\/script>/gi.test(MP.errmsg))
{
setNeedCloseConform(false);
var zF=ag.trim(MP.errmsg.replace(/<script[^>]*>(.*)?<\/script>/gi,""));
MP.errcode!="-106"&&
(zF&&zF.length>=4?ag.showError(zF):ag.showError(ag.T('message sent fail ,please try again. [$code$]').replace({code:MP.errcode})));
ag.globalEval(RegExp.$1);

if(MP.errcode=="-151")
{
QMAttach.missAttach(QMAttach.getInfoUid(ag.misslist));
}
else if(MP.errcode=="-161")
{
ag.showError(" "+ag.misslist[0].name+"  does not exist.");
}
else if(MP.errcode=="-133")
{
ag.hiddenMsg();
ag.alertBox(
{
msg:zF,
title:"Alarm"
}
);
}
else if(MP.errcode=="-106")
{
var bYL=MP.errmsg.match("sVirusAttName=.*?(?=,)"),
clg=MP.errmsg.match("sMatchRules=.*?(?=;)"),
cuC=bYL&&bYL[0].split('='),
caB=clg&&clg[0].split('='),
bOj=cuC&&cuC[1],
bHV=caB&&caB[1];

bOj&&bHV&&ag.alertBox({
title:"Virus Alert",
msg:ag.T([
'<div class="dialog_f_t">Your attachment(s) have been detected with virus, please check and try again.</div>',
'<div class="dialog_f_d" style="margin-top:4px;">',
'<span class="addrtitle">File name:</span>',
'<span class="tf" style="display:inline-block;width:242px;margin-top:-3px;vertical-align:middle;">$sVirusAttName$</span>',
'<br /><span class="addrtitle">Virus name:</span>$sMatchRules$',
'</div>'
]).replace({
sVirusAttName:bOj.substr(1,bOj.length-2),
sMatchRules:bHV.substr(1,bHV.length-2)
})
});
}



setTimeout(function()
{
setNeedCloseConform(false);
},500
);
}
else
{
ag.showError(MP.errmsg);
}
}
else
{
if(getPageId()!="note")
{
if(bdT.sendtime==1)
{
ag.showInfo("Draft is saved");
}
else
{
ag.showInfo("Message is sent");
}
}

ag.ComposeResp.handle(
{
sType:aUj,
sModule:getPageId(),
oPostData:bdT,
oRespData:MP,





fReportError:function()
{

ag.osslogAjaxCompose(11,MP.errcode,bsR,aUj);
}
}
);
}
}
else
{

ag.osslogAjaxCompose(10,Ru=="abort"?1:2,bsR,aUj);

ag.recodeComposeStatus(Ru=="abort"?3:2,null,0);


if(Ru=="abort")
{
ag.hiddenMsg()
}

else
{
ag.showError('Message sent fail <a onclick="gfComposeFail();" nocheck="true">[please retry]</a>',-1);
}

}
}
}
);

dCk();
},
200
);
}

doProcessSafe.mn=90;

}










function doProcess(mA,gR,aFo,aWx,
UG)
{

getTop().osslogAjaxCompose(7);
doProcessSafe(mA,gR,function()
{
doProcessSafe.mn=00;

if(getTop().isDisableCtl("sendbtn",window))
{
return;
}
doProcessSafe.mn=10;

if(!doProcessCheck(mA,gR,UG||0,function(aIm)
{
doProcess(mA,gR,aFo,
aWx,aIm
);
}))
{
return;
}
doProcessSafe.mn=20;

disableAutoSave();
var oP=JA();
oP.target="actionFrame";
doProcessSafe.mn=30;

var dk="",
aZ=getPageEditor();

if(!aZ)
{
if(window.GetSendContent)
{
dk=window.GetSendContent(mA,gR,
aFo,aWx,UG
);
}
else
{
throw{message:"Unabled to lauch editor"};
}
}
else
{
Ke("100%");
if(aZ.getContentTags("sign")[0]&&aZ.getContentTags("sign").length>=1)
{

var cpC=aZ.getContentTags("sign"),
aEb=aZ.getEditDoc(),
emU=mA===""&&gR==="send",
epe=mA==="savedraft"&&gR==="save",
dua,exh;
for(var i=cpC.length-1;i>=0;i--)
{


if(emU||(epe&&cpC[i].getAttribute("nreadytime")!=aZ.getReadyTimeStamp()))
{
dua=cpC[i].innerHTML;

getTop().insertHTML(cpC[i],"afterEnd",dua);
getTop().removeSelf(cpC[i]);
}







}
}
dk=aZ.getContent();



aZ.getContentType()=="text"
&&dk.substring(dk.length-4,dk.length)=="<br>"
&&(dk=dk.substring(0,dk.length-4));

Ke(getTop().gbIsIE?"auto":"100%");

try
{

getInputObj("content_compare",null,true).value=dk;
}
catch(aL)
{
}

dk=getTop().filteSignatureTag(filterSourceContent(oClipImg.filter(dk)),"FILTE<:");
}
if(dk==null)
{
throw{message:"Unabled to lauch editor "};
}
doProcessSafe.mn=31;


if(gR=="voice")
{
dk=CombineVoiceMail(dk,getTop().S("voiceid",window).value,
getTop().S("voicename",window).value
);
DisableRecord();
}
doProcessSafe.mn=32;

if(aZ&&aZ.getBgMusicInfo())
{
dk=bOp(dk,aZ
.getBgMusicInfo());
}
doProcessSafe.mn=32;


gR!='save'&&getTop().audioStop();
doProcessSafe.mn=33;

getTop().disableAll(true,window);
doProcessSafe.mn=34;

mA!=null?oP.t.value=mA:null;
oP.actiontype.value=gR;
getTop().isSaveData=false;

doProcessSafe.mn=35;

function dRH()
{

var aqg="",dBC="",dlk=false,
aHU=0,
bQw=new RegExp("bmp|doc|eml|exl|gif|html|jpg|mov|pdf|ppt|psd|rar|swf|tu|txt"),
bLb=getTop().T(
[
'<div style="padding:10px 0;font-size:12px;">',
'<div title="%filename%&#10;&#13;File size: %filesize%&#10;&#13;exprire time :%expiredtimeString%" class="bigatt_bt">',
'<div style="float:left;margin:2px 8px 0 0;">',
'<a target="_blank" href="%downloadlink%"><img border="0" src="http://res.mail.qq.com/zh_CN/htmledition/images/fj/fu_%filetype%.gif"/></a>',
'</div>',
'<div class="name_big" >',
'<span class=\'qqmailbgattach\' expiretime="%expiretime%" downloadlink="%downloadlink%">',
'<a style="color:#000;" target="_blank" href="%downloadlink%">%filename%</a><span style="color:#A0A0A0;"> (%filesize%, %expiredtimeDesc%)</span>',
'</span>',
'<div class="down_big">',
'<a target="_blank" href="%downloadlink%">Download </a><span style="display:none;">:%downloadlink%</span>',
'</div>',
'</div>',
'</div>',
'</div>'],"%"
);
function dkX(bIt)
{
if(getTop().S(bIt,window))
{
var os=getTop().S(bIt,window).childNodes,dLR=bIt=="exist_BigAttach"?true:false;
for(var i=os.length-1;i>=0;i--)
{


if(os[i].nodeType==1&&getTop().isShow(os[i])&&!getTop().GelTags("div",os[i]).length)
{
var aqi="",
jR=getTop().GelTags("span",os[i])[1],
bki=getTop().GelTags("a",os[i])[0].href,
aGw=jR.getAttribute("expiretime"),
bM=jR.firstChild,
eZ=(bM.innerText||bM.textContent||""),
Bt=eZ.split(".").pop(),
amN=new RegExp("\\((.+)\\)","ig").exec(jR.lastChild.innerHTML)[1],

alq=getTop().formatDate(
new Date(parseInt(aGw)*1000),
"$YY$  $hh$:$mm$"
);

if(!bQw.test(Bt))
{
Bt="qita";
}

if(aZ&&aZ.getContentType()=="text")
{
aqi+=(jR.innerText||jR.textContent)
+(alq!="NaN"?" (Expired time: "
+alq+")":"")+"\n link: "
+bki+"\n\n";

}
else
{
aqi+=bLb.replace({
filename:eZ,
filesize:amN,
filetype:Bt,
expiretime:aGw,
expiredtimeString:(alq!="NaN"
?alq
:""),
expiredtimeDesc:(aGw=="-1"
?"unlimited"
:alq+" Expired"),
downloadlink:bki
});
}
if(!dLR)
{

aqg+=aqi;

}

dBC+=aqi;
aHU++;
}
}

if(os.length>0&&getInputObj("newrcpt",null,false).value)
{
dlk=true;
}

}

}
dkX("BigAttach");
dkX("exist_BigAttach");

if(aHU>0&&oP.bigattachcnt)
{
oP.bigattachcnt.value=aHU;
}
doProcessSafe.mn=50;

function dve(bIt,fT)
{
if(fT)
{
var bQl=getTop().T(
[
'<div id=QQMailBigAttach style="padding: 2px; margin-bottom: 15px;background-color:#E0ECF9;width:auto;font-family:Verdana,Arial,Tahoma;font-size:14px;" >',
'<hr style="display:none;" />',
'<div style="text-align:left;padding: 6px 0pt 10px 6px;">',
'<b style="font-size: 14px;"><img border="0" align="absmiddle" style="margin-right:4px;" src="http://res.mail.qq.com/zh_CN/htmledition/images/icon_att.gif"/>\u4ECE%domain%\u90AE\u7BB1\u53D1\u6765\u7684\u8D85\u5927\u9644\u4EF6</b>',
'</div>',

'<div style="padding: 0pt 8px 6px 12px;background:#fff;">',
'<div style="clear:both;" >%bigattachlist%</div>',
'</div>',
'</div>'],"%"
);
var aVq="";
var fY=getTop().getDomain()=="qq.com"?"QQ":"foxmail.com";
var bKW=aZ
&&aZ.getContentType()=="text";

if(bKW)
{
aVq="The following file(s) have been sent to you by "+fY+"File Hub of QQMail. Storing period is limited, please extract them as soon as possible.";
getInputObj(bIt,null).value="\n\n\n"+new Array(60).join("-")+"\n"
+aVq+"\n"+fT;
}
else
{
getInputObj(bIt,null).value=bQl.replace(
{
domain:fY,
bigattachlist:fT
}
);
}
}
else
{
getInputObj(bIt,null).value="";
}
}

dve("bigattachcontent",aqg);


dlk&&dve("replybigattachcontent",dBC);
};

function bye()
{
doProcessSafe.mn=60;

QMAttach.setUpAttInput();
doProcessSafe.mn=65;

dRH();
doProcessSafe.mn=70;


dk=getTop().fixNonBreakSpace(dk);
if(QMCharCode.hasNonGbkChar(dk))
{
aFo=true;
getInputObj("sendcharset").value="utf-8";
}
oP.content.value=dk;
doProcessSafe.mn=71;




if(gR=="voice"||gR=="send"
||(gR=="card"&&mA==""))
{
doProcessSafe.mn=72;

if(gR=="card")
{
if(!CheckHasSetCard())
throw{
message:getTop().gsMsgNoCard,
clrcache:false
};
ComposeCard(dk);
}

oP.actiontype.value="send";
doProcessSafe.mn=73;

if(getPageId()=="note")
{
getTop().showProcess(1,1,"Saving notes");
}
else
{
var bMM=[
"<img src='",getTop().getPath("image"),
"newicon/a_send.gif' width='14px' height='14px' align='absmiddle'>&nbsp;",
getTop().gsMsgSend
].join("");

getTop().showProcess(1,false,bMM);
}
doProcessSafe.mn=74;

if(getPageId()!="note"
&&oP.action.indexOf("/cgi-bin/compose_send")!=-1)
{
getTop().gSendTimeStart=new Date();

try
{



var xo=QMAttach.getExistList(),
bAg=
{
cgitm:getTop().g_cgiTimeStamp||0,
clitm:getTop().g_clientTimeStamp||0,
comtm:getTop().gSendTimeStart.valueOf(),



logattcnt:xo.length,
logattsize:QMAttach.getAttachSize(),
logattmethod:xo.length?xo[xo.length-1].sUploadMode:""
};
for(var k in bAg)
{
var bS=document.createElement("input");
bS.type="hidden";
bS.name=k;
bS.value=bAg[k];
oP.appendChild(bS);
}
}
catch(e)
{

}
}
doProcessSafe.mn=75;
}
else
{
getTop().isSaveData=true;
if(mA=="savedraft")
{
if(gR=="card")
{
if(!CheckHasSetCard())
{
throw{
message:getTop().gsMsgNoCard
};
}

ComposeCard(dk);
}
getTop().showProcess(1,1,getTop().gsMsgAutoSave);
}
else
{
getTop().showProcess(1,1,getPageId()=="note"
?"Saving notes"
:getTop().gsMsgAutoSave);
}
}

doProcessSafe.mn=80;

getTop().isUseActiveXCompose=false;
if(getTop().gbIsOpera)
{

var bS=document.createElement("input");
bS.type="hidden";
bS.name="random";
bS.value=Math.random();
oP.appendChild(bS);
}

if(getPageId()=="groupsms")
{
var ga=getTop(),
aGZ=aZ.getContent().toLowerCase(),
aFz=aZ.getContent(true),
ali=ga.trim(aFz.replace(/&nbsp;/ig,''));

if(!ali&&aGZ.indexOf("<img")<0)
{

ga.showError("Please input message content. ");
ga.disableCtl('sendbtn',false,window);
return false;
}
else if(!ali&&aGZ.indexOf("<img")>=0&&!oP.subject.value)
{
oP.subject.value="Picture";
}
else if(ali)
{

oP.subject.value='';
}
}


if(mA!="autosave"&&gR!="save"&&getTop().QMAddress)
{
getTop().QMAddress.setExpired(0);
}


composeFormSubmit(oP,mA);
}

function biJ()
{
doProcessSafe(mA,gR,function()
{







bye();

});
}

function aQF(bOu)
{
doProcessSafe(mA,gR,function()
{
doProcessSafe.mn=50;

if(!bOu&&QMAttach.hasUploadError())
{
return getTop().confirmBox({

msg:gR=="save"?"Upload attachment fail!\n Are you sure to save the message without attachment ?":"upload attachment fail!\nAre you sure to send the message without attachment ?",
onreturn:function(aP)
{
doProcessSafe.mn=51;
if(aP)
{
biJ();
}
else
{
getTop().cancelDoSend();
}

}
})

}

doProcessSafe.mn=52;
biJ();
});
}

function bRS(hB)
{
hB==-1?
getTop().showProcess(1,1,"Attachment uploading","",false):
getTop().showProcess(2,1,hB,"Attachment uploading",false);
}

doProcessSafe.mn=40;

if(mA=="autosave")
{
aQF(true);
}
else
{
if(QMAttach.isUploading())
{
QMAttach.onprogress=bRS;
QMAttach.onfinish=aQF;
}
else
{
aQF()
}
}
}
);
}






function BM(ah)
{
var aN=location.href;

if(ah.keyCode==10||ah.keyCode==13
||ah.keyCode==83)
{
if(((ah.keyCode!=83&&ah.ctrlKey)
||(ah.keyCode==83&&ah.altKey))&&aN.indexOf('compose_postcard_dlg')<0)
{
getTop().fireMouseEvent(getTop().SN("sendbtn",window)[0],"click");
}
else if(ah.keyCode==83&&ah.ctrlKey)
{

getTop().preventDefault(ah);
getTop().fireMouseEvent(getTop().SN("savebtn",window)[0],"click");

}
else if(ah.keyCode==10||ah.keyCode==13)
{
var kE=ah.srcElement||ah.target;
if(kE.id=="subject"||kE.id=="to"||kE.id=="cc"
||kE.id=="bcc")
{
return false;
}
}
}
else if(ah.ctrlKey||ah.metaKey)
{
if(ah.keyCode==83||ah.keyCode==115)
{
if(isEnableAutoSave()&&aN.indexOf("=compose_")==-1
&&aN.indexOf("=compose")!=-1)
{
doProcess('savedraft','save');
}
}
else if((ah.keyCode==86||ah.keyCode==118)
&&aN.indexOf("t=compose")!=-1
&&aN.indexOf("_card")==-1&&!ah.cancelBubble)
{
QMAttach.deb&&QMAttach.deb.getClipBoardFiles(ah);
}
}
else
{
setNeedCloseConform(true);
}

return true;
}






function bAU(ah)
{
if(getTop().gnIEVer==6||getTop().gnIEVer==7||getTop().gnIEVer==8)
{
if(ah.ctrlKey&&ah.keyCode==83)
{
getTop().preventDefault(ah);
getTop().fireMouseEvent(getTop().SN("savebtn",window)[0],"click");
}
}
}



function initFileTransporter(blk)
{
var ag=getTop(),
aKH="ftnupload_attach",



dQf=ag.S("bigAttachLink",ag.getMainWin()),
epv=ag.attr(dQf,"ftnv2"),
cEE=epv=="true"?true:false;

var aN=ag.T("/cgi-bin/ftnExs_files?sid=$sid$&t=exs_attachment&smethod=new&ftntype=1&listtype=attach$autoselect$").replace({
sid:ag.getSid(),
autoselect:blk?"&autoselect=true":""
}),
CQ=ag.T("/cgi-bin/readtemplate?sid=$sid$&t=ftn_bigattach$autoselect$").replace({
sid:ag.getSid(),
autoselect:blk?"&cmd=bigattachUpload,1,1":""
});


ag.QMDialog(aKH,"max")||new ag.QMDialog({
sId:aKH,
sTitle:"<span class='attach_add_title'>Add Large Attachment</span>",
bMin:true,
nWidth:cEE?467:440,
nHeight:cEE?476:399,
sUrl:cEE?CQ:aN,
onbeforeclose:function()
{
if(cEE&&this.getDialogWin()["_msg"])
{
this.getDialogWin()["_msg"]("/FtnUI/Dlg_close");
var aeb=this.getDialogWin()["_bRet"];
return typeof(aeb)=="undefined"?true:aeb;
}
return true;
}
});
getTop().ftSendStatic("1002");
}

function openAttachFolder()
{
var ag=getTop(),
aN=[
'/cgi-bin/attachfolder?topmails=0&s=search&folderid=attach&hflag=attach&action=list&page=0&t=attachfolder_dlg&subject=&sender=&receiver=&searchmode=attach&advancesearch=0&showattachtag=1&fnviewtype=cell&nocheckframe=true&sid=',ag.getSid()
].join(''),
aPE="DEF_ATTACH_FOLDER_SELECT";
ag.setGlobalVarValue(aPE,{});
new ag.QMDialog({
sId:"attachFolderDlg",
sTitle:"Favorite Attachments",
nWidth:467,
nHeight:ag.gbIsIE?431:426,
sUrl:aN,
onclose:function()
{
var ae=this,
aJU=ag.getGlobalVarValue(aPE);
if(aJU)
{
var az=aJU,



as;
for(var k in aJU)
{
if(as=aJU[k])
{
var cXD=QMAttach.bSd.addFile({
sName:as.name,
nSize:+as.size,
sStatus:"ready",
mailid:as.mailid,
attachid:as.attachid,
attachname:as.name,
editname:as.editname,
fileextenal:as.ext,
filebyte:as.size
});

cXD.bQ=[{
mailid:as.mailid,
attachid:as.attachid,
attachname:as.name,
editname:as.editname,
fileextenal:as.ext,
filebyte:as.size
}];
cXD.upload=function()
{
QMAttach.attrUpload(QMAttach.bSd,this);
};

QMAttach.oFileUploadMgr.oCfg.onselect.call(QMAttach.oFileUploadMgr,[cXD],"attfld");
}
}

}
ag.setGlobalVarValue(aPE,{});
}
});
}































function showInstallActiveXDialog(aq)
{
var aDO=getTop().detectActiveX(aq=="filetransport"?3:0);

if(aq=="failpaste")
{
getTop().showError("Only text contents can be pasted in browsing mode.");
return;
}

function gr(Bf,ki)
{
var hw=ki==null?true:ki;
getTop().E(Bf.split(","),function(ay)
{
var dV=getTop().QMDialog("activexDialog");
var aw=dV&&dV.S(ay);
if(aw)
{
getTop().show(aw,hw);
}
}
);
}

function qQ(Bf)
{
gr(Bf,false);
}

function bfo(hV)
{
return[
aDO?"update":"setup",
getPageId(),
hV,
{
"paste":2,
"filetransport":3,
"drag":4
}[aq]||1
].join(",");
}

function Hr()
{
var aaD=false
if(getTop().gbIsMac)
{
aaD=getTop().detectActiveX(0,2,null,Math.random());

}
else
{
aaD=getTop().detectActiveX(0,2);
}
if(aaD)
{

var bDZ={
"ico_attbig_disabled":"ico_attbig",
"ico_screensnap_disable":"ico_screensnap"
},
Gr=getTop().SN("activexControlBtn",window);

for(var i=Gr.length-1;i>=0;i--)
{
var hR=bDZ[Gr[i].className];
if(hR)
{
getTop().setClass(Gr[i],hR);
}
}

if(getPageEditor())
{
getPageEditor().updateToolBarUI("ScreenSnap");
}






return true;
}
return false;
}

function aqa()
{

getTop().QMDialog("activexDialog","close");
focusPageEditor(0);






























}



function cKF()
{
var ag=getTop(),dV=ag.QMDialog("activexDialog");
if(dV)
{
getTop().QMDialog("activexDialog","close");



}


getTop().getActionWin().location="http://snip.qq.com/download";
}
function cJB()
{

qQ("snipcheck");
gr("snipchecking");

setTimeout(function()
{



if(Hr())
{
getTop().QMDialog("activexDialog","close");
}
else
{
getTop().QMDialog("activexDialog").S("snipcheck").innerHTML="Redetect";
gr("snipFail,snipcheck");
qQ("snipMsg,snipchecking");
}
},
500
);

}

function tR()
{
var bp=getTop().gbIsIE?"IE":"FF";
if(!getTop().gbIsIE&&!getTop().QMAXInfo.mbAblePlugin)
{

qQ("setupMsg,setup,onlinesetup,cancel,checkMsg,check");
gr("finish,nosupportMsg");
return;
}
getTop().getActionWin().location="/zh_CN/"+getTop().QMAXInfo.get("path")+getTop().QMAXInfo.installer("download");

qQ("setupMsg,setup,onlinesetup,cancel,checkMsg,check");
gr("download,downloadMsg");
var dV=getTop().QMDialog("activexDialog");
var aw=dV&&dV.S("download");
aw&&(aw.disabled=true);

getTop().ossLog("realtime","all","stat=custom&type=INSTALL_ACTIVEX&locval="+bfo("exe"));
}

function bRE()
{
if(!getTop().gbIsIE&&!getTop().QMAXInfo.mbAblePlugin)
{

qQ("setupMsg,setup,onlinesetup,cancel,checkMsg,check");
gr("finish,nosupportMsg");
return;
}

getTop().goUrlTopWin(getTop().T("/cgi-bin/readtemplate?t=browser_addon&check=false&returnsid=$sid$&s=install")
.replace(
{
sid:getTop().getSid(),
loc:bfo("cab")
}
)
);
}

function apZ()
{
gr("detectContainer");
qQ("optContainer");

setTimeout(function()
{
qQ("detectContainer,download,downloadMsg");
gr("optContainer");

if(Hr())
{
qQ("setup,checkMsg,check,cancel");
gr("finishMsg,finish");
}
else
{
gr("setup,checkMsg,check,cancel");
}
},
500
);

getTop().QMDialog("activexDialog").S("hasinstall").checked=false;
};


function bFg()
{
qQ("detectContainer,download,downloadMsg,setup,checkMsg,check,cancel");
gr("optContainer,restartMsg,finish");
}

var ayF=(getTop().getDomain()=="qq.com"?"QQ":"foxmail.com"),
iU=ayF+"Mailbox"+getTop().QMAXInfo.getTitle()+"Installation";
var ij=getTop().T([
'<div id="optContainer" class="dialog_feedback">',
'<span class="dialog_icon icon_info_b"></span>',
'<div>',
'<div id="setupMsg" class="dialog_f_c" >',
'<div class="dialog_f_t">$msg$</div>',
'<div class="dialog_f_d">Following features are available after installation: <br>',
'$func$',
'</div>',
'</div>',
'<div id="downloadMsg" class="dialog_f_c" style="display:none;">',
'<div class="dialog_f_t">Please click OK after installation.</div>',
'<div class="dialog_f_d">You can <a href="/zh_CN$path$$exe$" target="_blank">click here</a> to download if download failed.  ',
'<div>',
'<input style="vertical-align:middle;" type="checkbox" id="hasinstall"> ',
'<label for="hasinstall">I have installed the program. </label>',
'</div>',
'</div>',




'</div>',
'<div id="checkMsg" class="dialog_f_c" style="display:none;">',
'<div class="dialog_f_t">System have found $control$ is not $opt$ succeed.</div>',
'<div class="dialog_f_d">Please make sure the installation completed and try again. </div>',
'</div>',
'<div id="finishMsg" class="dialog_f_c" style="display:none;">',
'<div class="dialog_f_t">$control$Successfully installed.</div>',
'<div class="dialog_f_d">\u60A8\u53EF\u4EE5\u9A6C\u4E0A\u4EAB\u53D7$control$\u5E26\u6765\u7684\u6109\u5FEB\u4F53\u9A8C\u3002<br>',
'$func$',
'</div>',
'</div>',

'<div id="restartMsg" class="dialog_f_c" style="display:none;">',
'<div class="dialog_f_t">Please restart Firefox after installation. </div>',
'<div class="dialog_f_d">$func$</div>',
'</div>',
'<div id="nosupportMsg" class="dialog_f_c" style="display:none;">',
'<div class="dialog_f_t">QQMail $control$ is not available to your current browser. </div>',
'<div class="dialog_f_d"></div>',
'</div>',
'</div>',











'</div>',
'<div id="detectContainer" style="padding-top:60px;text-align:center;display:none;">',
'<img src="$images_path$ico_loading212fb20.gif" align="absmiddle" style="margin-right:20px;">',
'Detecting $control$ install ...',
'</div>']);
var dry=getTop().T([
'<input class="wd3 btn" type=button id=\'setup\' style="$setupStyle$" value=Download $opt$>',
'<input class="wd3 btn" style="$onlineStyle$" type=button id=\'onlinesetup\' value=Online $opt$>',
'<input class="wd1 btn" type=button id=\'download\' value=OK style="display:none;">',
'<input class="wd3 btn" type=button id=\'check\' value=Check again style="display:none;">',
'<input class="wd1 btn" type=button id=\'cancel\' value=Cancel>',
'<input class="wd1 btn" type=button id=\'finish\' value=Finish style="display:none;">'
]);
var cMq=getTop().T([
'<div id="optContainer">',
'<div class="dialog_feedback">',
'<img class="dialog_icon" style="margin:1px 14px -4px 0;" src="$images_path$snip_74x7412fb20.jpg" />',
'<div class="dialog_f_c" id="setupMsg" style="margin-left:84px;white-space:nowrap;">',
'<div class="dialog_f_t">Please install capture tool "Snip", then you can capture images in QQMail.</div>',
'<div class="dialog_f_d">"If installed, associated it with QQMail in Snip Settings, .</div>',











'</div>',
'</div>',
'</div>'
]),
dkZ=getTop().T([
'<div id="snipFail"  style="display:none">The installation is not successful, please confirm that you have downloaded and successfully installed Snip.</div>',
'<div id="snipMsg" ><div class="b_size bold">Check installing status of Snip</div>',
'<div style="margin:5px 0 0;" class="graytext">After downloaded and successfully installed Snip, then check installing status of Snip.</div></div >'


]);

var Tm=getTop().TE([
getTop().gbIsIE||getTop().gbIsFF?
'<input hideFocus type="button"  onmousedown="return false" unselectable="on" style="margin:2px 5px 0;" class="ico_att"/>upload attachment with drag<br>':'',
'<input hideFocus type="button"  style="margin:2px 5px 0;" class="ico_attbig"/>Larger attachment<br>',
'<input hideFocus style="background: url($images_path$/newicon/compose12eea4.png) no-repeat 0 -120px;margin:2px 5px 0;height:16px;width:16px;padding:0;border:0;" type=button unselectable="on">Capture'
]).replace({
images_path:getTop().getPath("image",true)
}),
fS=aDO
?getTop().T('<b>$mailname$Mail $controlname$$control$ is too old ,please upgrade to latest version.</b>')
:getTop().T('<b>$mailname$Mail$controlname$$control$ is not installed.</b>'),
yM="Capture",
cH=400,
cq=210;

switch(aq)
{
case"paste":
fS=getTop().T('<b>Do you want to insert a picture or add attachments though pasting? </b><br>$mailname$QQMail Capture$control$will be able to help you resolve the problem.');
cq=230;
break;
case"filetransport":
yM="FTN";
break;
case"drag":
yM="Drag";
break;
}

var ag=getTop();
if(ag.gbIsMac)
{
var sG=ag.detectActiveX(0,0)&&!ag.detectActiveX(0,2),
dhl="Please install Snip",
cPy="Snip is too old ,please upgrade to lastest version.";

ij=cMq.replace(
{
title:sG?cPy:dhl,
images_path:getTop().getPath("image",true)
});
iU="&nbsp;";
cq=cq-30;
dry=ag.T(['<input class="wd3 btn" type=button id="snipsetup" value=Download Snip>',




'&nbsp;&nbsp;<a href="http://snip.qq.com#faq10" target="_blank" id="hadsetup">\u6211\u5DF2\u5B89\u88C5Snip</a>',

]);
}

new ag.QMDialog({
sId:"activexDialog",
sTitle:iU,
sBodyHtml:ij.replace({
control:getTop().QMAXInfo.getTitle(),
images_path:getTop().getPath("image",true),
msg:fS.replace(
{
control:getTop().QMAXInfo.getTitle(),
mailname:ayF,
controlname:yM
}
),


setupStyle:getTop().QMAXInfo.installer("download")?"":"display:none;",
onlineStyle:getTop().QMAXInfo.installer("online")?"":"display:none;",
opt:aDO?"Upgrade ":" install",
func:Tm,
path:getTop().QMAXInfo.get("path"),
exe:getTop().QMAXInfo.installer("download")
}),
sFootHtml:dry.replace({
control:getTop().QMAXInfo.getTitle(),
images_path:getTop().getPath("image",true),
msg:fS.replace(
{
control:getTop().QMAXInfo.getTitle(),
mailname:ayF,
controlname:yM
}
),


setupStyle:getTop().QMAXInfo.installer("download")?"":"display:none;",
onlineStyle:getTop().QMAXInfo.installer("online")?"":"display:none;",
opt:aDO?"Upgrade ":" install",
func:Tm,
path:getTop().QMAXInfo.get("path"),
exe:getTop().QMAXInfo.installer("download")
}),



onload:function()
{
var cG=this;
ag.addEvent(cG.S("setup"),"click",tR);
ag.addEvent(cG.S("snipsetup"),"click",cKF);
ag.addEvent(cG.S("snipcheck"),"click",cJB);
ag.addEvent(cG.S("onlinesetup"),"click",bRE);
ag.addEvent(cG.S("download"),"click",(getTop().gbIsFF?bFg:apZ));
ag.addEvent(cG.S("check"),"click",apZ);
ag.addEvent(cG.S("cancel"),"click",aqa);
ag.addEvent(cG.S("hadsetup"),"click",aqa);
ag.addEvent(cG.S("finish"),"click",aqa);
ag.addEvent(cG.S("hasinstall"),"click",function()
{
cG.S("download").disabled=!cG.S("hasinstall").checked;
}
);

},
onshow:function()
{
if(this.S("setup"))
{
this.S("setup").focus();
}
}
});


if({
"compose":true,
"card":true,
"note":true
}[getPageId()])
{
autoSave(true,null);
}
}






function initSendTimeInput(aYn,pC)
{
var wz=new Date();

var cO=getTop().trim(aYn.replace(/\D/ig," ").replace(/ +/ig," "))
.split(" ");
var pO=wz.getFullYear();

if(cO[0]=="")
{

var cO=getTop().trim(aYn).split("\u6708");
var dQ=
{
'\u6B63':1,
'\u4E00':1,
'\u4E8C':2,
'\u4E09':3,
'\u56DB':4,
'\u4E94':5,
'\u516D':6,
'\u4E03':7,
'\u516B':8,
'\u4E5D':9,
'\u5341':10,
'\u5341\u4E00':11,
'\u814A':12,

'\u521D':0,
'\u5EFF':20
};
var bho=dQ[cO[0]];
var bez=dQ[cO[1].charAt(1)];
if(bez==10)
{

var bfr={'\u521D':10,'\u4E8C':20,'\u5EFF':20,'\u4E09':30}[cO[1].charAt(0)];
}
else
{
var bfr=dQ[cO[1].charAt(0)]+bez;
}

for(var i=pO-1;i<pO+1;i++)
{
var ka=getTop().Lunar||Lunar,
auW=ka.lunarDateToSolar(i,bho,bfr,ka.isChangeToLeapMonth(i,bho));
if(auW.valueOf()+24*60*60*1000>=wz.valueOf())
{

pO=auW.getFullYear();
cO[0]=auW.getMonth()+1;
cO[1]=auW.getDate();
break;
}
}
}
else
{

if(cO[0]<wz.getMonth()+1)
{
pO++;
}
}

document.write(getTop().T(
[
'<textarea style="display:none;" name="sendtimetip" disabled>',
'Sending time has been set in birthday of <b class="grn">%nick%</b>, you can modify it::','</textarea>',
'<input type="hidden" name="sendtimeyear" value="%year%" />',
'<input type="hidden" name="sendtimemonth" value="%month%" />',
'<input type="hidden" name="sendtimeday" value="%day%" />',
'<input type="hidden" name="sendtimehour" value="0" />',
'<input type="hidden" name="sendtimemin" value="0" />'
],
"%"
).replace(
{
nick:getTop().htmlEncode(pC),
year:pO,
month:cO[0],
day:cO[1]
}
)
);
}












function createPostNewWindow(aI,pe,az,bOd)
{
var ap=window,
aH=ap.document;
var aXf="_creAtenEWpOstwIn_";
EZ=getTop().S(aXf,ap);
if(!EZ)
{
EZ=aH.createElement("form");
EZ.id=aXf;
EZ.method="post";
aH.body.appendChild(EZ);
}
EZ.innerHTML="";
if(pe.indexOf("sid=")<0)
{
pe=[pe,pe.indexOf("?")<0?"?":"&","sid=",getTop().getSid()].join("");
}
EZ.action=pe;
EZ.target=aI;
EZ.onsubmit=function(){
ap.open('about:blank',aI,bOd);
};
az=az||{};
az.sid=az.sid||getTop().getSid();
getTop().E(az,function(bC,bh){
var bS=aH.createElement("input");
bS.type="hidden";
bS.name=bh;
bS.value=bC;
EZ.appendChild(bS);
});
EZ.submit();
}

function setComposeData(az)
{
getPageEditor().setContent(az.content||"");
getInputObj("subject").value=az.subject||"";
}

function uploadComposeEml()
{
new QMDialog(
{
sId:"uploademldlg",
sTitle:"Upload eml file",
sBodyHtml:TE([
'<form style="width:100%;" method="post" id="uploademl" name="uploademl" target="actionFrame" action="/cgi-bin/qf_upload" enctype="multipart/form-data">',
'<div class="dialog_txt">',
'Please select eml :<input type="hidden" name="sid" value="$sid$"/>',
'<input type="file" name="UploadFile" class="btn" value=""/>',
'</div>',
'<div class="dialog_operate">',
'<input type="submit" value="Upload" class="wd2 btn"/>',
'<input type="button" value="Cancel" class="wd2 btn"  id="cancel"/>',
'<div class="clr"></div>',
'</div>',
'</form>'
]).replace(
{
sid:getSid()
}
),
onload:function()
{
var cG=this;
cG.S("cancel").onclick=function()
{
getActionWin().location.href="javascript:;";
cG.close();
}
}
}
);
}

function aRB()
{
var aZ=getPageEditor(),
dk;

Ke("100%");
dk=getPageEditor().getContent();
Ke(getTop().gbIsIE?"auto":"100%");

dk=getTop().filteSignatureTag(filterSourceContent(dk),"FILTE<:");
dk=getTop().fixNonBreakSpace(dk);

var bNU=getTop().T('height=$height$,width=$width$,top=$top$,left=$left$,toolbar=no,scrollbars= yes,menubar=no').replace(
{
top:100,
left:100,
height:500,
width:550
}
);
createPostNewWindow("newwin","/cgi-bin/readtemplate",{content:dk,t:"compose_preview"},bNU);
}





function setOtherComposeOptionEvent()
{
var ag=getTop(),
pn=ag.S("otherComposeOptionBtn",window),
Su=ag.S("otherComposeOptionCntr",window);
ag.addEvent(pn,"click",function()
{
var oR=ag.isShow(Su);

ag.show(Su,!oR);
pn.getElementsByTagName("img")[0].className="arrow"+(!oR?"up":"down");

getPageEditor().resizeEditor();
Su.scrollIntoView();
return;
ag.qmAnimation[oR?"fold":"expand"](Su,{
durlimit:10,
type:"wait",
speed:"fast",
onready:function()
{
return{
from:Su.clientHeight||0
};
},
onaction:function()
{
getPageEditor().resizeEditor();

},
oncomplete:function()
{
ag.show(Su,!oR);
pn.getElementsByTagName("img")[0].className="arrow"+(!oR?"up":"down");

getPageEditor().resizeEditor();
}
});

});
}









function setDefSign(cXs)
{
var ag=getTop(),bwe=ag.TE([
'<div class="left" style="cursor:pointer;">',
'Signature:$@$if($sItemValue$)$@$$sItemValue$$@$else$@$Not use$@$endif$@$<span class="addrtitle" style="font-family: arial,sans-serif; padding-left:4px; font-size:9px; position:relative; top:-1px;" >\u25BC</span>&nbsp;',
'</div>',
'<span class="left addrtitle" >&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>'
]);
return bwe.replace({sItemValue:cXs});
}
function setMultiSignatureSelect()
{
var ag=getTop();
try{
var gp=ag.goUserInfo.get('RealAllSignature');
}
catch(aL)
{
return setTimeout(arguments.callee,500);
}

if(!gp)
{
return;
}

var aS=ag.S("signSelContainer",window);
if(aS)
{
var dek=ag.TE([
'<div style="$@$if($bNewStyle$)$@$margin-left:-18px;$@$endif$@$padding:0 0 0 12px;">',

'$@$if($sItemValue$)$@$$sItemValue$$@$else$@$Signature 1$@$endif$@$&nbsp;&nbsp;&nbsp;&nbsp;',
'</div>'
]),
cSn='<div style="width:100%;height:0;overflow:hidden;margin-left:-16px;padding:5px 26px 0 0;border-bottom:1px solid #E6E9ED;">&nbsp;</div>',
bBo=0;

function cvl()
{
var oJ=[{sId:"-1",sItemValue:'<div style="padding:0 12px">Not use</div>'}],
cmC=bmQ("sign"),
aLX=ag.goUserInfo.get('RealAllSignature');
VD=21;
oJ.push({
sId:"border",
nHeight:11,
sItemValue:cSn,
bDisSelect:true
});
VD+=11;
for(var aJ in aLX)
{
var as=aLX[aJ],
uL=dek.replace
({
sItemValue:as[1],
bNewStyle:(aJ>199&&aJ<300)?true:false
});

if(aJ>=0&&(aJ<100||(aJ>199&&aJ<300)))
{




oJ.push({
sId:aJ,
sItemValue:uL
});
VD+=21;
}

if(cmC==aJ)
{
bBo=oJ.length-1;
}
}


if(oJ.length<=2)
{
return false;
}

















VD+=21;
return{
oitems:oJ,
nheight:VD,
selectidx:bBo
};
}

if(!cvl())
{
return;
}
ag.addEvent(aS,"click",function()
{
var bP=ag.calcPos(aS),
ez=cvl(),
gp=ag.goUserInfo.get('RealAllSignature');
new(ag.QMMenu)({
oEmbedWin:window,
sId:"signatureMenu",
nX:bP[3]-1,
nY:bP[2]-ez.nheight-8,
nItemHeight:21,
bAnimation:false,
oItems:ez.oitems,
onitemclick:function(ay,bf)
{
ag.S("signtype",window)&&(ag.S("signtype",window).value=(ay!="newsign")?ay:"");
if(gp[ay])
{
setSignature("sign",ay,true);
aS.innerHTML=setDefSign(gp[ay][1]);
}
else if(ay==-1)
{
setSignature("sign",-1,true);
aS.innerHTML=setDefSign("Not use");
}
else if(ay=="newsign")
{
var aN=ag.T("/cgi-bin/setting1?fun=list&edittype=$edittype$&t=signature_new&sid=$sid$&signid=$signid$").replace(
{
edittype:"addsign",
sid:ag.getSid(),
signid:-1
});
new ag.QMDialog(
{
sId:"editSignature_qqmail",
sUrl:aN,
sTitle:"Add Signature",
nWidth:604,
nHeight:444
});
}

}
});
});

var bOr=bmQ("sign");
if(bOr==-1)
{
aS.innerHTML=setDefSign("Not use");
}
else if(gp[bOr])
{
aS.innerHTML=setDefSign(gp[bOr][1]);
}




}
}





function syncMultiSignatureData()
{
setMultiSignatureSelect();
return;







}






function bmQ(aq)
{
var aZ=getPageEditor();
if(!aZ)
{
return-1;
}

var aYQ=aZ.getContentTags(aq)[0];
if(!aYQ)
{
return-1;
}
return aYQ.getAttribute("signid");
}







function bbk(aq,bC,ay,dgt)
{
var aZ=getPageEditor();
if(!aZ)
{
return;
}

var Zw={};
function aww(aq)
{
return Zw[aq]=aZ.getContentTags(aq)[0];
}

function bkQ(aq,jE,bNn)
{
if(!aZ)
{
return;
}

var LQ=jE.parentNode;
if(LQ&&LQ.tagName=="DIV"
&&LQ.firstChild==jE)
{
jE=LQ;
}
getTop().insertHTML(jE,bNn,getTop().T('$breakline$<div><$type$></$type$></div>').replace({
breakline:getTop().QMEditor.getBreakLine(1,
{
family:getTop().goUserInfo.get("DEF_FONT_FAMILY"),
size:getTop().goUserInfo.get("DEF_FONT_SIZE"),
color:getTop().goUserInfo.get("DEF_FONT_COLOR")
}
),
type:aq
}));

aww(aq);
}

aww("sign");
aww("includetail");



if(!bC&&!Zw[aq])
{
return;
}

if(!Zw.sign)
{
var drr=aZ.getContentTags("includetail")[0];
bkQ("sign",drr||aZ.getContentObj("QQMAILSTATIONERY")||
aZ.getContentTags("body")[0],drr?"beforeBegin":"beforeEnd");
}

var kE=Zw[aq];
kE.innerHTML=bC;
kE.setAttribute("signid",ay);
kE.setAttribute("nreadytime",aZ.getReadyTimeStamp());
if(aq=="sign")
{
syncMultiSignatureData();
dgt&&focusPageEditor(0);
}
}






function setSignature(aq,bz,dgt)
{
if(bz==-1)
{

return bbk(aq,"",-1);
}


var Ge=arguments.callee;
function bDE()
{
setTimeout(function()
{
Ge(aq,bz);
},
200
);
}

var cX="";
try
{
switch(aq)
{
case"sign":
var beb=getTop().goUserInfo.get('RealAllSignature')[bz];
if(beb&&(parseInt(bz)<100||(parseInt(bz)>199&&parseInt(bz)<300)))
{
cX=getTop().getSignatureHeader()+beb[0];
}
break;
default:
return;
}
}
catch(aL)
{
return bDE();
}

bbk(aq,cX,bz,dgt);
}





function sendAfterUpload(bcT)
{
if(bcT)
{
getTop().getMainWin().gbCkSendafterupload=bcT;
}
else
{
return(getTop().getMainWin().gbCkSendafterupload=="undefined")?0:getTop().getMainWin().gbCkSendafterupload;
}
}






var QMCharCode={

FD:[[0,127]
,[164,164],[167,168],[176,177],[183,183],[215,215],[224,225],[232,234],[236,237]
,[242,243],[247,247],[249,250],[252,252],[257,257],[275,275],[283,283],[299,299]
,[324,324],[328,328],[333,333],[363,363],[462,462],[464,464],[466,466],[468,468]
,[470,470],[472,472],[474,474],[476,476],[593,593],[609,609],[711,711],[713,715]
,[729,729],[913,929],[931,937],[945,961],[963,969],[1025,1025],[1040,1103],[1105,1105]
,[8208,8208],[8211,8214],[8216,8217],[8220,8221],[8229,8230],[8240,8240],[8242,8243],[8245,8245]
,[8251,8251],[8364,8364],[8451,8451],[8453,8453],[8457,8457],[8470,8470],[8481,8481],[8544,8555]
,[8560,8569],[8592,8595],[8598,8601],[8712,8712],[8719,8719],[8721,8721],[8725,8725],[8730,8730]
,[8733,8736],[8739,8739],[8741,8741],[8743,8747],[8750,8750],[8756,8759],[8765,8765],[8776,8776]
,[8780,8780],[8786,8786],[8800,8801],[8804,8807],[8814,8815],[8853,8853],[8857,8857],[8869,8869]
,[8895,8895],[8978,8978],[9312,9321],[9332,9371],[9472,9547],[9552,9587],[9601,9615],[9619,9621]
,[9632,9633],[9650,9651],[9660,9661],[9670,9671],[9675,9675],[9678,9679],[9698,9701],[9733,9734]
,[9737,9737],[9792,9792],[9794,9794],[12288,12291],[12293,12311],[12317,12318],[12321,12329],[12353,12435]
,[12443,12446],[12449,12534],[12540,12542],[12549,12585],[12832,12841],[12849,12849],[12963,12963],[13198,13199]
,[13212,13214],[13217,13217],[13252,13252],[13262,13262],[13265,13266],[13269,13269],[19968,40869],[63788,63788]
,[63865,63865],[63893,63893],[63975,63975],[63985,63985],[64012,64015],[64017,64017],[64019,64020],[64024,64024]
,[64031,64033],[64035,64036],[64039,64041],[65072,65073],[65075,65092],[65097,65106],[65108,65111],[65113,65126]
,[65128,65131],[65281,65374]]

};






QMCharCode.findGbkChar=function(vw)
{
var aui,asj,UU;
var FD=this.FD;
aui=0;
asj=FD.length-1;
while(aui<=asj)
{
UU=Math.floor((aui+asj)/2);
if(vw>FD[UU][1])
{
aui=UU+1;
}
if(vw<FD[UU][0])
{
asj=UU-1;
}
if(vw>=FD[UU][0]&&vw<=FD[UU][1])
{
return 1;
}
}
return 0;
};






QMCharCode.hasNonGbkChar=function(eL)
{
for(var i=Math.min(eL.length,10000)-1;i>=0;i--)
{
var bQD=eL.charCodeAt(i);
if(this.findGbkChar(bQD)==0)
{
return true;
}
}
return false;
};











function splashToCtrl(arA,acH)
{
var anH=arA.style?arA:getTop().S(arA,window),
yi=0,
brM=isNaN(acH)?6:acH;
(function()
{
anH.style.backgroundColor=(yi++%2==0)
?"#f9f2b3":"#fff";
if(yi<brM)
{
setTimeout(arguments.callee,100);
}
}
)();
}

function doVerifySubmit()
{
doProcess('',(getPageId()=="card")?"card":"send",false,false,99);
}

function doVerifyCancel(){}

function doFtnUploaded()
{
var ag=getTop();
new ag.QMDialog({
sId:"ftnfinished",
sTitle:"Warning",
bClose:true,
sBodyHtml:ag.T([
'<div class="dialog_feedback" style="width:400px;">',
'<span class="dialog_icon icon_info_b"></span>',
'<div class="dialog_f_c">',
'Large attachment upload completed. Message will be sent after <span id="countsecond" class="red">10</span>  seconds.<br />You can cancel auto-send during this period.',

'</div>',
'</div>',
'<div class="dialog_operate">',
'<input class="wd4 btn" type="button" id="confirm" value="Cancel Auto-sending">',
'<div class="clr"></div>',
'</div>'
]).replace({
image_path:ag.getPath("image",true)
}),
onload:function(){
var ae=this;
var gF=10;
var iC=setInterval(function(){
ae.S("countsecond")
&&
(ae.S("countsecond").innerHTML=gF--);
},1000);
var bpG=setTimeout(function(){
ae.S("countsecond")&&ag.fireMouseEvent(ag.SN("sendbtn",window)[0],"click");
clearInterval(iC)
ae.close();
},10000);
ag.addEvent(ae.S("confirm"),"click",function(){
clearTimeout(bpG);
clearInterval(iC)
ae.close();
});
}
});
}

function JA()
{

if(getPageId()=='groupsms')
{
return getTop().S('frmCompose',window);
}
return getTop().S('frm',window);
}


function asyncGetContent(be)
{
var ga=getTop(),
aN=ga.htmlDecode(ga.trim(be));

ga.goAsyncContent=false;

if(aN&&/^https?:\/\/[\w.]+qq.com(\/)/i.test(aN))
{
ga.loadJsFile(aN,false,ga.document,function()
{
if(!ga.goAsyncContent||!ga.goAsyncContent.content)
{
ga.goAsyncContent={};
ga.showError("Get mail content fail");
}
}
);
}
}

function cvg()
{
var ag=getTop(),
aFC=["AttachFrame","bigAttachLink","editor_toolbar_btn_container","groupVote"];

ag.E(aFC,function(ay)
{
var bM=ag.S(ay,window);
if(bM)
{
bM.onmouseover=function()
{
this.getElementsByTagName('a')[0].style.textDecoration='underline';
}
bM.onmouseout=function()
{
this.getElementsByTagName('a')[0].style.textDecoration='none';
}
}
});
}


function compose_js(){}
