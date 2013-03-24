

(function(ao)
{
if(ao.QMAddress)
{
return;
}

var ty=ao.QMAddress={test:1};















ty.aGg=
{
allAddresses:{},
allGroup:{},
mailgroup:{},
qqgroup:{},
id2email:{},
email2id:{},
domaingroup:{},
groupMails:{},


ggroup:{},















Ix:[],


bdU:false,
hM:"uninit"
};






ty.addAddress=function(WR)
{
var aU=WR.id,
fe=WR.email;

if(!aU||!fe)
{


return;
}

var lQ=this.aGg,
aYl=lQ.allAddresses;


if(!aYl[aU])
{

lQ.id2email[aU]=fe;
lQ.email2id[fe]=aU;
aYl[aU]=WR;
lQ.Ix.push(WR);
}
else
{






aYl[aU].searchdata=[WR.name,WR.pinyin,WR.memo].join(" ");
}

if(WR.qq==g_admuin)
{
lQ.groupMails[fe]=WR;
lQ.bdU=true;
}
};






ty.getAddress=function(cPd)
{

if(parseInt(cPd)==cPd)
{






}
else
{

cPd=this.aGg.email2id[cPd];
if(typeof cPd=="undefined")
{
return null;
}
}
return this.aGg.allAddresses[cPd];
};





ty.getAllAddressObj=function()
{
return this.aGg["allAddresses"];
};









ty.addGroup=function(Jp)
{
if(!Jp.id||!Jp.addressesId||!Jp.groupsId)
{
doPageError(["addGroup",getUin(),Jp.id].join(","));
return;
}
if(typeof Jp.groupType!="undefined"
&&(Jp.groupType=="mailgroup"||Jp.groupType=="qqgroup"||Jp.groupType=="domaingroup"))
{
this.aGg[Jp.groupType]=Jp;
}
this.aGg["allGroup"][Jp.id]=Jp;
};






ty.getGroup=function(bRl)
{
if(bRl=="mailgroup"||bRl=="qqgroup"||bRl=="domaingroup")
{
return this.aGg[bRl]||{};
}
return this.aGg["allGroup"][bRl];
};





ty.getAllGroupObj=function()
{
return this.aGg["allGroup"];
};







ty.getGroupMail=function(pG)
{
var lQ=this.aGg,
bes=lQ.groupMails;
if(lQ.bdU)
{
return pG?bes[pG]:bes;
}
else
{
return null;
}
};





ty.isInit=function()
{
var dG=this.aGg.hM.split("|")[0];
return dG=="init"||dG=="expired";
};





ty.isExpired=function()
{
var aRB=this.getTime();
return aRB>-1&&now()-aRB>120000;




















};

ty.getTime=function()
{
var gX=this.aGg.hM.split("|");
if(gX[0]=="expired")
{
var aRB=parseInt(gX[1])||0;


return aRB;

}
return-1;
};





ty.setExpired=function(bdx)
{
if(this.aGg.hM!="uninit")
{
this.aGg.hM=bdx==-1
?"init":["expired",bdx].join("|");
}
};





ty.countAddress=function()
{
var gu=0;
for(var acm in this.aGg.allAddresses)
{
gu++;
}
return gu;
};





ty.dbD=function()
{
for(var acm in this.aGg.allAddresses)
{
return true;
}
return false;
};






ty.countGroup=function()
{
var gu=0;
for(var acm in this.aGg.allGroup)
{
gu++;
}
return gu;
};











ty.getAncestor=function(UG)
{
var dtb;
while(UG)
{
if(UG.parentId==0)
{
return UG.id;
}
UG=ty.getGroup(UG.parentId);
}
return 0;
};











ty.bIK=function()
{
with(this.aGg)
{
hM="uninit";
allAddresses={};
allGroup={};
mailgroup={};
qqgroup={};
email2id={};
bRl={};
Ix=[];

}
};







ty.bEU=function(cT)
{
if(cT.domaingroups.length==0)
{

return cT;
}
function uQ(Fj,Gf)
{
while(Fj[Gf])
{
Gf++;
}
Fj[Gf]=1;
return Gf;
}
var bbR={},aZZ={};


for(var i=cT.sortbyupdatetime.length-1;i>=0;i--)
{
if(cT.sortbyupdatetime[i])
{
bbR[cT.sortbyupdatetime[i][0]]=1;
}
}

var bfF=[cT.qqgroups,cT.groups];
for(var i=bfF.length-1;i>=0;i--)
{
var fL=bfF[i];
for(var j=fL.length-1;j>=0;j--)
{
if(fL[j])
{
aZZ[fL[j][0]]=1;
}
}
}

var aZb=[];
var bQr={};


var aGK=100,asw=1000;
for(var i=0,aF=cT.domaingroups.length;i<aF;i++)
{
if(cT.domaingroups[i])
{

cT.domaingroups[i][0]=aGK=uQ(aZZ,aGK);

var fL=cT.domaingroups[i][1];

var ij=[];
for(var j=0,aCd=fL.length;j<aCd;j++)
{
if(fL[j])
{
fL[j].id=asw=uQ(bbR,asw);

cT.sortbyupdatetime.push([fL[j].id,"",fL[j].email,fL[j].name,(fL[j].uin==g_admuin?0:fL[j].uin)]);
ij.push(asw);

bQr[fL[j].email]=asw;
}
}
aZb.push([aGK,ij,cT.domaingroups[i][2]]);
}
}
cT.domaingroups=aZb;










return cT;
};








ty.bJU=function(cT)
{
ty.bIK();


var bJF=!!cT.qqgroups;
cT.qqgroups=cT.qqgroups||{};

cT=ty.bEU(cT);


var bep=10,
Ix=ty.aGg.Ix,
lE=cT.sortbyupdatetime,
bQS=ty.aGg.id2email,
fyf=ty.aGg.email2id,
bE;

for(var i=0,aF=lE.length;i<aF;i++)
{
if(bE=lE[i])
{
bQS[bE[0]]=bE[2];
fyf[bE[2]]=bE[0];
}
}
for(var i=0,aF=lE.length;i<aF;i++)
{
if(bE=lE[i])
{

ty.addAddress(
{
id:bE[0],
pinyin:bE[1],
email:bE[2],
name:bE[3],
qq:bE[4],

acspec:bE[3].indexOf('&')>=0,
u:bE[8],
memo:bE[9]
}
);
}
}

var aHk={
id:1,
name:"Contacts",
addressesId:[],
groupType:"mailgroup",
groupsId:[3],
parentId:0,
pinyin:''
};
ty.addGroup(aHk);

var aJe={
id:2,
name:"QQ Contacts",
addressesId:[],
groupType:"qqgroup",
groupsId:[],
parentId:0,
pinyin:''
};
if(bJF)
{
ty.addGroup(aJe);
}

var azS=g_admuin;
for(var i=0,aF=cT.groups.length;i<aF;i++)
{
var fL=cT.groups[i],
ij=[],
aub=fL[1];

for(var iV=0,Xu=aub.length;iV<Xu;iV++)
{
if(aub[iV]&&ty.getAddress(aub[iV]))
{
ij.push(aub[iV]);
}




}







if(ij.length>0&&ij.length<21)
{
var aYH=[];
for(var iV=0,cZ=ij.length;iV<cZ;iV++)
{
aYH.push(ty.getAddress(ij[iV]).name);
}

while(ty.getAddress(azS))
{
azS++;
}

ty.addAddress(
{
nShortcutGroupId:fL[0],
id:azS++,
pinyin:fL[3],
email:aYH.join("; "),
name:fL[2],
qq:-1,
acspec:fL[2].indexOf('&')>=0
}
);
}

var vK={
id:fL[0],
name:fL[2],
addressesId:ij,
groupsId:[],
parentId:aHk.id,
pinyin:''
};
aHk.groupsId.push(cT.groups[i][0]);
ty.addGroup(vK);
}



var aHX={
id:3,
name:"Recent",
addressesId:[],
groupsId:[],
parentId:1,
pinyin:"ZUIJINLIANXIREN"
};
ty.addGroup(aHX);


var bdW={},
i=0,
j=0,
aF=Ix.length;

for(;i<aF&&j<bep;i++)
{
if(Ix[i].u&&Ix[i].u!=='0')
{
var fi=Ix[i];
aHX.addressesId.push(Ix[i].id);
bdW[fi.email]=1;
j++;
}
}

var bew={
id:4,
name:"More",
addressesId:[],
groupsId:[],
parentId:1,
pinyin:'GENGDUOLIANXIREN'
};
for(;i<aF;i++)
{
if(Ix[i].u&&Ix[i].u!=='0')
{
var fi=Ix[i];
bew.addressesId.push(fi.id);
bdW[fi.email]=1;
j++;
}
}
ty.addGroup(bew);
if(j>bep)
{
aHX.moreChildId=4;
}


for(var i=0,aF=cT.qqgroups.length;i<aF;i++)
{
if(bE=cT.qqgroups[i])
{
var ij=bE[1];
if(ij.length>0&&typeof ij[ij.length-1]=="undefined")
{
ij.length=ij.length-1;
}
var vK={
id:bE[0],
name:bE[2],
addressesId:ij,
groupsId:[],
parentId:aJe.id
};
aJe.groupsId.push(bE[0]);
ty.addGroup(vK);
}
}


var arz={
id:7,
name:"Domain mail",
addressesId:[],
groupType:"domaingroup",
groupsId:[],
parentId:0,
pinyin:'YUMINGYOUXIANGLIANXIREN'
};

for(var i=0,aF=cT.domaingroups.length;i<aF;i++)
{
var ij=cT.domaingroups[i][1];
if(ij.length>0&&typeof ij[ij.length-1]=="undefined")
{
ij.length=ij.length-1;
}
var vK={
id:cT.domaingroups[i][0],
name:cT.domaingroups[i][2],
addressesId:ij,
groupsId:[],
parentId:arz.id,
pinyin:cT.domaingroups[i][3]
};
arz.groupsId.push(cT.domaingroups[i][0]);
ty.addGroup(vK);
}
if(arz.groupsId.length>0)
{
ty.addGroup(arz);
}


var eGy={
id:11,
name:"Group account",
addressesId:[],
groupsId:[],
parentId:0,
pinyin:'YOUJIANZU'
};
if(cT.ggroup)
{
for(var i=0,aF=cT.ggroup.length;i<aF;i++)
{
var fe=cT.ggroup[i][2],
fi=ty.getAddress(fe);
if(!fi)
{

while(ty.getAddress(azS))
{
azS++;
}
ty.addAddress(
fi={
id:azS,
pinyin:"",
email:cT.ggroup[i][2],
name:cT.ggroup[i][2].replace(/@.*/,""),
qq:g_admuin,
acspec:false
}
);
}
else
{
fi.qq=g_admuin;
}


eGy.addressesId.push(fi.id);
}
if(aF>0)
{
ty.addGroup(eGy);

}
}




this.aGg.hM="init";
};





ty.getAutoAddrList=function(akI)
{
var aZr=[],
aHW=ty.aGg.Ix,
fi;

if(typeof akI=="function")
{

for(var i=0,aF=aHW.length;i<aF;i++)
{
akI(fi=aHW[i])!==false&&aZr.push(fi);
}
return aZr;
}
else
{




return aHW;
}
};






ty.JW=function()
{

var ae=arguments.callee,
bFE;
if(!(bFE=ae.fFy))
{
bFE=ae.fFy=new QMAjaxRequest("","GET",30000);
bFE.onComplete=function(fj)
{
bFE.dG="finish";
var cmU=fj.responseText;

try
{
ty.aXI(
eval(cmU),
false
);
}
catch(bj)
{
if(cmU.indexOf("({")==0)
{
doPageError(bj.message,"qmaddress.js","QMAddress._loadAddressData");
}
ty.aXI({},true);
}
};
bFE.onError=function()
{
bFE.dG="finish";
ty.aXI({},true);
};
}
if(bFE.dG!="loading")
{
bFE.abort();
bFE.url=
T("/cgi-bin/addr_listall?sid=$sid$&encode_type=js&show_type=hot&all_data=1&level=0&qq=0&t=addr_data&sorttype=Freq&s=AutoComplete&category=hot&record=n&resp_charset=UTF8&ef=js&r=$random$")
.replace({
sid:getSid().split(",")[0],
random:Math.random()
}
);
bFE.dG="loading";
bFE.send();
}
};


ty.JW.eFn=0;

ty.JW.eyj=[];

ty.JW.bMH=function(cj)
{
if(typeof cj=="function")
{
var UD=ty.JW.eyj;
for(var aN=UD.length-1;aN>=0;aN--)
{
if(UD[aN]==cj)
{
return;
}
}
UD.push(cj);
}
};

ty.JW.OT=function(aI)
{
var UD=ty.JW.eyj,
bdb=[];
for(var aN=UD.length-1;aN>=0;aN--)
{

try
{
if(UD[aN](aI)!==false&&aI.sType!='succeed')
{
bdb.push(UD[aN]);
}
}
catch(rR)
{

}
}
ty.JW.eyj=bdb;
};






ty.aXI=function(an,bJM)
{
if(an.sysmaintence)
{

return ty.amd("fail",an.sysmaintence);
}

if(bJM||typeof an.groups=="undefined")
{

if(++ty.JW.eFn<5)
{
setTimeout(ty.JW,35000);
}
else
{

ty.amd("fail","Load contacts fail, please retry");
doPageError("QMAddress failed to load","","");
}
return;
}

ty.setExpired(-1);
ty.bJU(an);
ty.amd('succeed');
ty.setExpired(now());
};




ty.amd=function(aA,cQ)
{

if(ty.isInit())
{

ty.JW.OT({sType:'succeed',sMsg:'Import QQ Contacts'});
}
else if(aA!='succeed')
{
ty.JW.OT({
sType:aA,
sMsg:cQ
});
}
return false;
};










ty.initAddress=function(cj)
{
cj&&ty.JW.bMH(cj);

if(!ty.isInit()||ty.isExpired())
{
cj&&cj({sType:'loading',sMsg:'Loading...'});
ty.JW.eFn=0;
ty.JW();
}
else
{
cj&&cj({sType:'succeed',sMsg:'Import QQ Contacts'});
}
return false;
};




ty.importqq=function()
{
var gB="QQ contacts imported";
QMAjax.send("/cgi-bin/addr_importqq?&ImportType=Replace&sid="+getSid(),{
onload:function(bz,bU,fj){
if(bz&&bU.indexOf(gB)>-1)
{
showInfo(gB);
ty.setExpired(0);
ty.JW();
}
else
{
showError("Failed to import QQ contacts. Please try again. ");
}
}
});
return false;
};

ao.getAddrACData=function(nW,frq,akI)
{
var Tn=nW.value||frq||"",
dK=Tn.lastIndexOf(';');
dK=(dK>-1)?dK:Tn.lastIndexOf(',');
if(dK!=-1)
{
Tn=Tn.substr(dK+1)
}
if(!Tn)
{
return[];
}

var afL=trim(Tn).toLowerCase(),
fIv='<img unselectable="on" class="lm_groupAutoIcon" src="'+getPath('image')+'spacer.gif" title="Group account"/>',
ae=arguments.callee,
hx,


jh=new RegExp("("+regFilter(afL)+")","i"),
aFp='<b unselectable="on">$1</b>',
bdX=[],
ayi=[],
dGA={},
cXO,
aZN=afL.length;

if(ae.bbN&&afL.indexOf(ae.bbN)==0&&ae.aHP&&
ae.aHP.length&&ae.fwN===ty.getTime())
{
hx=ae.aHP;
}
else
{
hx=ty.getAutoAddrList(akI);
}

for(var i=0,cZ=hx.length;i<cZ;i++)
{
var io=hx[i],
afH,
dgE=true,
Gr=null;

if(io.acspec)
{

var aV=htmlDecode(io.name).toLowerCase(),
eB;
if((eB=aV.indexOf(afL))>-1)
{
Gr=['"',htmlEncode(aV.substring(0,eB)),'<b>',htmlEncode(aV.substr(eB,aZN)),'</b>',htmlEncode(aV.substring(eB+aZN)),'" &lt;',io.email,'&gt;'].join("");
}
}
else
{
if((afH=io.name.replace(jh,aFp))!=io.name)
{
Gr=['"',afH,'" &lt;',io.email,'&gt;'].join("");
}
}
if(!Gr)
{
if((afH=io.email.replace(jh,aFp))!=io.email)
{
Gr=['"',io.name,'" &lt;',afH,'&gt;'].join("");
}
else if(jh.test(io.pinyin))
{
Gr=['"',io.name,'" &lt;',io.email,'&gt;'].join("");
}
else if(io.memo&&io.memo!=io.name)
{

if((afH=io.memo.replace(jh,aFp))!=io.memo)
{

Gr=['"',io.name,'" &lt;',io.email,'&gt;','(',afH,')'].join("");

dgE=false;
}
}
}

if(dgE&&Gr&&io.memo)
{
Gr+=["(",io.memo,")"].join("");
dgE=false;
}
if(Gr&&io.qq==getTop().g_admuin)
{
Gr=fIv+Gr;
}

if(Gr&&io.nShortcutGroupId)
{
Gr='<img unselectable="on" class="lm_groupUnfold" src="'+getPath('image')+'spacer.gif" title="Group"/>'+io.name.replace(jh,aFp);
}

if(Gr)
{
var dbv=['"',io.name,'" &lt;',io.email,'&gt;'].join("");

if(dGA[dbv]==1)
{
if(dgE)
{
continue;
}
else
{
dGA[dbv]=2;
}
}
else
{
dGA[dbv]=1;
}

bdX.push(io);
ayi.push(
{
sId:i,
bMemo:!dgE,
oAddress:io,
sItemValue:Gr
}
);
}
}
cXO=ayi.length-1;
while(cXO>=0)
{
var bE=ayi[cXO],
io=bE.oAddress,
dbv=['"',io.name,'" &lt;',io.email,'&gt;'].join("");

if(dGA[dbv]==2&&!bE.bMemo)
{
ayi.splice(cXO,1);
delete bE;
}
cXO--;
}
ae.bbN=afL;

ae.fwN=ty.getTime();
ae.aHP=bdX;
return ayi;
};
}
)(window);
