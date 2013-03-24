
var QMComAdaptar=(function(aR)
{
var aNT=
{
"eml":"eml",
"pdf":"pdf",
"txt":"txt,h,m,js,java,c,cpp,plist,ini,stp,csv,xml",
"html":"html,htm,xhtml,mht",
"rar":"zip,7z,rar,bz2,gz,tar,tbz,tgz,cab,gzip,bzip2,deb",
"mov":"mp3,m4a,wma,wav,aac,ac3,mp2,ape,flac,f4a,mkv,rmvb,wmv,mp4,f4v,flv,avi,mov,qt,m4v,asf,rm,mpeg,mpg,vob,ts,3gp,3gpp,3gp2,ogg,ogv,mp4,webm,f4m,avi",
"jpg":"jpg,png,bmp,gif,jpeg,tiff",
"fl":"fla,swf",
"psd":"psd",
"exl":"xls,xlsx",
"ppt":"ppt,pptx",
"doc":"doc,docx,rtf,dot,docm",
"blank":""
};
aNT=(function(rp)
{
var hU={};
for(var i in rp)
{
for(var s=rp[i].split(","),j=0,l=s.length;j<l;j++)
{
hU[s[j]]=i;
}
}
return hU;
}
)(aNT);

var cuI;










function ebz(aq)
{
var ah=getTop(),
aV=aq.sInsName,
eV=aq.oCallbacks||{};
if(!ah[aV])
{

ah.loadJsFileToTop(["$js_path$qmplayer/player131cca.js"]);
}
ah.waitFor(
function()
{
return!!ah[aV];
},
function(bz)
{
if(bz)
{
eV.fSucc&&eV.fSucc(ah[aV]);
}
else
{
eV.fErr&&eV.fErr();
}
}
);
};

return{

isBrowser:function(ZN)
{
return{ie:gbIsIE}[ZN];
},
browserVer:function()
{
return gnIEVer;
},

S:S,
SN:SN,
C:function(mP)
{
return document.createElement(mP);
},
$:function(fV,aC)
{
return(aC||document).getElementsByTagName(fV);
},
attr:attr,
insertHTML:insertHTML,
evalCss:evalCss,
bodyScroll:bodyScroll,
contain:isObjContainTarget,

show:show,
isShow:isShow,
posShow:function(as,aoZ,aoJ)
{

if(as)
{
as.style.left=typeof aoZ!="string"?(aoZ||0)+"px":aoZ;
as.style.top=typeof aoJ!="string"?(aoJ||0)+"px":aoJ;
}
},
posHide:function(as)
{

as&&(as.style.left=as.style.top="-99999px");
},
isPosShow:function(as)
{
return this.isShow(as)&&as.style.left!="-99999px";
},
getStyle:getStyle,

hasClass:hasClass,
addClass:addClass,
setClass:setClass,
rmClass:rmClass,

addEvent:addEvent,
delEvent:removeEvent,
target:getEventTarget,
relatedTarget:function(ag)
{
return ag.toElement||ag.relatedTarget;
},
stopPropagation:stopPropagation,
preventDef:preventDefault,

get:function(bT,cu)
{
if(typeof cu=="function")
{
QMAjax.send(bT,{method:"GET",onload:cu});
}
else
{
QMAjax.send(bT,
{
method:"GET",
timeout:cu.nTimeout,
onload:cu.oncomplete
},
cu.bGlobal&&(cuI||(cuI=new QMAjax))
);
}
},

T:T,
TE:TE,
E:E,
callBack:callBack,
extend:extend,
cookQueryString:cookQueryString,
htmlEncode:htmlEncode,
parseJson:function(bW)
{
var Bn;
try{Bn=evalValue(bW)}catch(e){alert([bW,e.message]);}
return Bn;
},
funcProxy:function(aC,eF)
{
return function()
{
eF.apply(aC,arguments);
};
},

getPlayer:function(cj,cQY)
{
ebz(
{
sInsName:"QMPlayer",

oCallbacks:{
fSucc:cj,
fErr:cQY
}
}
);
},
generateIconUrl:function(apH)
{
return"/zh_CN/htmledition/images/xdisk/ico_min/fu_"+aNT[apH]+".gif";
},

ossLog:ossLog,

twoDCodeImgUrl:twoDCodeImgUrl
};
}
)();





(function(A,aR)
{
var cR=window.QMPreviewerTmpl||(window.QMPreviewerTmpl={});

cR.config=
{
oUseHotKeys:
{
27:1,
8:1,
37:1,
39:1
}
};

cR.frame=A.TE([
'<div id="$sId$" orgcls="$sClass$" class="$sClass$" style="position:absolute;width:100%;height:100%;top:0;left:0;overflow:hidden;">',
'<a id="$sId$_focus" href="javascript:;"></a>',
'<iframe id="$sId$_downframe" style="display:none;"></iframe>',
'<div id="$sId$_scorllarea" class="scroll_area" style="position:absolute;width:100%;height:100%;"></div>',
'</div>',
]);
cR.loading=A.T([
'<div id="$sId$_loading" class="tip_loading"></div>',
'<div id="$sId$_msg" class="tip_msg"></div>',
]);

cR.operator=A.T([
'<div id="$sId$_minibar" class="minibar_area">',
'<div class="minibar unselect">',
'<a id="$sId$_minimize" orgcls="ico minimize" opt="minimize" title="Minimize"></a>',
'<span class="breakline"></span>',
'<a id="$sId$_close" orgcls="ico close" opt="close"></a>',
'</div>',
'</div>',
'<div id="$sId$_navbar" class="navigatebar unselect" opt="back">',
'<div id="$sId$_nav" orgcls="pv_navtxt"></div><i></i>',
'</div>',
'<div id="$sId$_mainbar" class="mainbar unselect" hide="auto">',
'<a id="$sId$_prev"  orgcls="pv_btn" opt="prev">',
'<span class="ico prev"></span>',
'</a> ',
'<a id="$sId$_next" orgcls="pv_btn" opt="next">',
'<span class="ico next"></span>',
'</a> ',
'<span id="$sId$_breakline" orgcls="breakline"></span>',
'<a id="$sId$_info" orgcls="pv_btn" opt="info">',
'<span class="ico info"></span>',
'</a> ',
'<a id="$sId$_list" orgcls="pv_btn" opt="list">',
'<span class="ico list"></span>',
'</a> ',
'<a id="$sId$_send" orgcls="pv_btn" opt="send">',
'<span class="ico send"></span>',
'</a> ',
'<a id="$sId$_down" orgcls="pv_btn" opt="down">',
'<span class="ico down"></span>',
'</a> ',
'<a id="$sId$_scan" orgcls="pv_btn" opt="scan">',
'<span class="ico qrcode"></span>',
'</a> ',
'</div>'
]);

cR.compressframe=A.T([
'<div class="cps_nav unselect" opt="cps_back">',
'<div id="$sId$_navtxt" class="cps_navtxt"></div><i></i>',
'</div>',
'<div class="cps_ctt">',
'<div id="$sId$_title" class="cps_title"></div>',
'<div id="$sId$_ctt" class="cps_list"></div>',
'</div>'
]);
cR.compresscontent=A.TE([
'<ul>',
'$@$if(!$oContent$)$@$',
'<li>Failed to load data.</li>',
'$@$else if($oContent$ == "encryption" || $oContent$ == "pwderror")$@$',
'<li style="list-style:none;">',
'<div style="position:absolute;top:50%;left:50%;width: 288px;margin:-100px 0 0 -187px;white-space: nowrap;border: 1px solid #dadada;padding: 34px 42px;border-radius: 4px;box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);font-size: 14px;background: #fafafa;">',
'<div>\u8BE5\u6587\u4EF6\u5DF2\u52A0\u5BC6\uFF0C\u8BF7\u8F93\u5165\u5BC6\u7801\u540E\u9884\u89C8\uFF1A</div>',
'<div style="margin-top: 16px;"><input id="$sId$_pwd" type="password" autofocus="autofocus" style="height:22px;vertical-align:middle;margin-right:6px;width:228px;" class="txt" ><a class="btn_gray" opt="cps_pwd">\u786E\u5B9A</a></div>',
'<div id="$sId$_pwd_tip" style="display:none;font-size:12px;margin-top:5px;color:#C00;">\u8BF7\u8F93\u5165\u5BC6\u7801</div>',
'$@$if($oContent$ == "pwderror")$@$',
'<div id="$sId$_pwd_err" style="font-size:12px;margin-top:5px;color:#C00;">\u8F93\u5165\u5BC6\u7801\u6709\u8BEF</div>',
'$@$endif$@$',
'</div>',
'</li>',
'$@$else$@$',
'$@$for($oContent$)$@$',
'<li class="cps_column" opt="cps_read" idx="$_idx_$">',
'$@$eval (_sSuffix_=$sName$.split(".").pop()) && ""$@$',

'$@$if($sType$=="dir")$@$',
'<div class="ico_file_dir"></div>',
'$@$else if($sType$=="img"&&$sThumb$)$@$',
'<div class="cps_img">',
'<table cellspacing="0"><tbody><tr><td>',

'<img style="display:none" name="preview_unloaded_img" tmpsrc="$sThumb$" ',
'onload="this.style.display=\x27\x27;" ',
'onerror="this.parentNode.className=\x27ico_file_img\x27;"/>',
'</td></tr></tbody></table>',
'</div>',
'$@$else if($sType$=="img")$@$',
'<div class="ico_file_img"></div>',
'$@$else if($sType$=="music")$@$',
'<div class="ico_file_audio"></div>',
'$@$else if($sType$=="video")$@$',
'<div class="ico_file_video"></div>',

'$@$else if(_sSuffix_=="html"||_sSuffix_=="htm"||_sSuffix_=="xhtml"||_sSuffix_=="mht")$@$',
'<div class="ico_file_html"></div>',
'$@$else if(_sSuffix_=="doc"||_sSuffix_=="docx"||_sSuffix_=="docm"||_sSuffix_=="dot"||_sSuffix_=="dotx"||_sSuffix_=="dotm")$@$',
'<div class="ico_file_doc"></div>',
'$@$else if(_sSuffix_=="xls"||_sSuffix_=="xlsx")$@$',
'<div class="ico_file_xls"></div>',
'$@$else if(_sSuffix_=="ppt"||_sSuffix_=="pptx")$@$',
'<div class="ico_file_ppt"></div>',
'$@$else if(_sSuffix_=="pdf")$@$',
'<div class="ico_file_pdf"></div>',
'$@$else if(_sSuffix_=="txt")$@$',
'<div class="ico_file_txt"></div>',
'$@$else if(_sSuffix_=="eml")$@$',
'<div class="ico_file_eml"></div>',
'$@$else if(_sSuffix_=="psd")$@$',
'<div class="ico_file_psd"></div>',
'$@$else if(_sSuffix_=="fla")$@$',
'<div class="ico_file_fla"></div>',
'$@$else if($sType$=="doc")$@$',
'<div class="ico_file_txt"></div>',
'$@$else if($sType$=="compress")$@$',
'<div class="ico_file_compress"></div>',
'$@$else$@$',
'<div class="ico_file_other"></div>',
'$@$endif$@$',
'<div class="cps_detail">$@$eval $_root_.oJs$.htmlEncode($sName$)$@$</div>',
'<div class="cps_size">$oInfo.sSize$</div>',
'</li>',
'$@$endfor$@$',
'$@$endif$@$',
'</ul>',
'<div style="clear:both"></div>'
]);

cR.doc=A.TE([
'<div id="$sId$_doc_container" class="doc_iframe" f="$oFileInfo.bIsNav$">',
'$@$if(!$oFileInfo.bIsNav$ && !$oFileInfo.bIsBook$)$@$',
'<div id="$sId$_doc_title" class="doc_title" style="zoom:1;$@$if(!$oFileInfo.sName$)$@$dipslay:none;$@$endif$@$">',
'<div>$@$html($oFileInfo.sName$)$@$</div>',
'</div>',
'$@$endif$@$',
'$@$if($oFileInfo.bIsBook$)$@$',
'<div id="$sId$_doc_title" style="zoom:1;boder-top:2px solid #fff;$@$if(!$oFileInfo.sName$)$@$dipslay:none;$@$endif$@$">',
'$oFileInfo.sName$',
'</div>',
'$@$endif$@$',
'<iframe id="$sId$_doc_view" frameborder="0" src="$oFileInfo.sUrl$" allowTransparency="true" ',
'onload="this.className=\x27 doc_finish\x27;"></iframe>',
'<div id="$sId$_doc_err" class="previewfailed" style="display:none">',
'<span class="icon_failed"></span>',
'<div id="$sId$_doc_err_default" style="margin:0 0 0 42px; line-height:18px;">',
'Preview error. Please <a href="javascript:;" style="color:#000; text-decoration:underline;" opt="retry">retry</a> ',
'or <a style="color:#000; text-decoration:underline;" href="$oFileInfo.sDown$" opt="down">download</a> .',
'<iframe id="$sId$_doc_down" style="display:none"></iframe>',
'</div>',
'<div id="$sId$_doc_err_notexist" style="margin:0 0 0 42px; line-height:18px;display:none;">',
'The file you want to preview doesn\'t exist. It may be expired or deleted by the sender.',
'</div>',
'</div>',
'</div>'
]);

cR.classifier=A.TE([
'<div class="mutil unselect" id="$sId$_con" opt="close">',
'<ul class="mutil_select">',
'$@$for($oFilesMap.oMap$)$@$',

'<li opt="chooseMod" sel="$_idx_$" hover="mutil_hover" class="mutil_$@$eval ($_idx_$.toLowerCase())$@$">',
'<div class="mutil_$@$eval ($_idx_$.toLowerCase())$@$_ico"></div>',
'<div class="file_quantity">$@$eval ($_this_$.length)$@$</div>',
'</li>',
'$@$endfor$@$',
'<div style="clear:both"></div>',
'</ul>',
'</div>'
]);

var cEi=' onload="this.setAttribute(\'loaded\',1);" onerror="this.setAttribute(\'err\',1);this.style.display=\x27none\x27;"';
cR.img=A.TE([
'<div id="$sId$_load" class="img_load">loading</div>',
'<div id="$sId$_fail" class="img_fail">',
'<p class="fail_info">$@$html($oFileInfo.sName$)$@$</p>',
'<div class="fail_disp"></div>',
'<div id="$sId$_err_notexist" style="color:#c00; margin:10px 0; display:none;">The file you want to preview doesn\'t exist. <br>It may be expired or deleted by the sender.</div>',
'</div>',
'$@$if($oFileInfo.sThumb$)$@$',
'<img id="$sId$_thumb" class="image" src="$oFileInfo.sThumb$"',
cEi,'/>',
'$@$endif$@$',
'<img id="$sId$_img" class="image" src="',
'$@$if($oFileInfo.sUrl$)$@$',
'$oFileInfo.sUrl$',
'$@$else$@$',
'errurl',
'$@$endif$@$',
'" ',cEi,'/>',
'<div id="$sId$_bar" class="img_bar img_bar_hide">',
'<a class="img_bar_btn ico_pf_right" opt="rotate_r"></a>',


'<a id="$sId$_zoombtn" class="img_bar_btn ico_pf_zoomb" opt="zoom" zb_ttl="Maximize" zs_ttl="Adapt to window" zs_cls="ico_pf_zooms"></a>',
'<div class="img_bar_txt">',
'$@$html($oFileInfo.sName$)$@$',
'</div>',
'</div>'
]);

cR.musicframe=A.TE([
'<div id="$sId$_music_container" class="player_con a_player $@$if($oFileList$)$@$ play_list $@$endif$@$">',
'<div id="$sId$_music_player" class="" style="">',

'</div>',
'<div id="$sId$_playlist"></div>',
'</div>'
]);
cR.musicskin=A.TE([
'<div id="playerpanel_$sId$"  class="player_panel">',
'<a class="btn_play" title="Play" action="play" id="play_$sId$">',
'<span class="ico_play" action="play"></span>',
'</a>',
'<a class="btn_play" title="Pause" action="pause" id="pause_$sId$" style="display:none">',
'<span class="ico_pause" action="pause"></span>',
'</a>',
'<div class="media_info">',
'<p class="media_name" id="playtitle_$sId$">$statemsg$</p>',
'<div id="progress_$sId$" class="progress" mousedown="setPos">',
'<div id="progressbar_$sId$" class="progress_line"></div>',
'<div id="loaded_$sId$" class="loaded_line" style="width:0%; "></div>',
'<div id="played_$sId$" class="played_line" style="width:0%; "></div>',
'<a id="handle_$sId$" class="handle" style="left:0%;" title="Drag to change the playing cource"></a>',
'</div>',

'<p class="media_time graytext" style="display:none">',
'<span id="currentPositionString_$sId$">00:00</span>/<span id="durationString_$sId$">00:00</span>',
'</p>',
'<p class="media_time graytext" id="stateMsg_$sId$" style="line-height:14px; display:none;">Loading</p>',
'</div>',
'<a id="volshow_$sId$" class="btn_vol" title="Volume">',
'<span class="ico_vol"></span>',
'</a>',
'<div id="volctrl_$sId$" class="vol_control" style="display:none">',
'<a id="muted_$sId$" class="btn_vol" title="Mute" action="muted" actionparam="1">',
'<span class="ico_vol"></span>',
'</a>',
'<a id="muted2_$sId$" class="btn_vol" title="Unmute" action="muted" style="display:none">',
'<span class="ico_vol2"></span>',
'</a>',
'<div id="volume_$sId$" class="progress" title="Drag to change the volume">',
'<div  id="volumebar_$sId$" class="progress_line"></div>',
'<div id="volumeset_$sId$" class="played_line" style="width:100%; "></div>',
'<a id="volumehandle_$sId$" class="handle" style="left:100%;" ></a>',
'</div>',
'</div>',
'</div>'
]);

cR.videoframe=A.TE([
'<div id="$sId$_video_container" class="player_con v_player $@$if($oFileList$)$@$ play_list $@$endif$@$" style="">',
'<div class="v_player_content" unselectable="on">',
'<div class="video">',
'<div style="position:relative;background-color:#000;height:100%;" id="$sId$_kernel"></div>',
'</div>',
'<div class="player_panel" id="$sId$_skin"></div>',
'</div>',
'<div id="$sId$_playlist"></div>',
'</div>'
]);
cR.videoskin=A.TE([
'<div id="playerpanel_$sId$" class="full_screen_mode">',
'<div id="progress_$sId$" class="progress" mousedown="setPos">',
'<div id="progressbar_$sId$" class="progress_line"></div>',
'<div id="loaded_$sId$" class="loaded_line" style="width:0%; "></div>',
'<div id="played_$sId$" class="played_line" style="width:0%; "></div>',
'<a id="handle_$sId$" class="handle" style="left:0%;"  title="Drag to change the playing cource"></a>',
'</div>',
'<a class="btn_play" title="Play" action="play" id="play_$sId$">',
'<span class="ico_play" action="play"></span>',
'</a>',
'<a class="btn_play" title="Pause" action="pause" id="pause_$sId$" style="display:none">',
'<span class="ico_pause" action="pause"></span>',
'</a>',
'<div class="media_info">',
'<p class="media_name" id="playtitle_$sId$">$statemsg$</p>',







'<p class="media_time graytext" style="display:none">',
'<span id="currentPositionString_$sId$">00:00</span>/<span id="durationString_$sId$">00:00</span>',
'</p>',
'<p class="media_time graytext" id="stateMsg_$sId$" style="line-height:14px; display:none;">Loading</p>',
'</div>',
'<a class="btn_fullscreen" title="Switch to full screen" id="fullscreen_$sId$">',
'<span class="img_bar_btn ico_pf_zoomb_black"></span>',
'</a>',
'<div id="volume_$sId$" class="v_vol_control">',
'<div id="volumebar_$sId$" class="v_progress_line"></div>',
'<div id="volumeset_$sId$" class="v_played_line" style="width:100%;"></div>',
'<a id="volumehandle_$sId$" class="v_handle" style="left:100%;"></a>',
'</div>',




'<div id="volctrl_$sId$" class="vol_control" style="display:;">',
'<a id="muted_$sId$" class="btn_vol" title="Mute" action="muted" actionparam="1">',
'<span class="ico_vol"></span>',
'</a>',
'<a id="muted2_$sId$" class="btn_vol" title="Unmute" action="muted" style="display:none">',
'<span class="ico_vol2"></span>',
'</a>',





'</div>',
'</div>'
]);

cR.other=A.T([
'<div class="other_disp"></div>',
'<div class="other_name">',
'$oFileInfo.sName$',
'</div>',
'<div class="other_desc">$oFileInfo.sFileDesc$</div>'
]);

cR.menu=A.TE([
'<div id="$sId$_ctt" class="menu_ctt"></div>',
'<a class="ico_close_s" opt="menu_hide"></a>',
'<div id="$sId$_bg" class="menu_bg"></div>',
'<span id="$sId$_arr" class="ico_b_arrow"></span>'
]);

cR.menuinfo=A.TE([
'<div class="menu_info">',
'$@$if($oInfo.sSender$)$@$',
'<div opt="menu_openurl">',
'<span class="ico_mi_mail"></span>',
'<span class="right">$@$eval $oJs$.htmlEncode($oInfo.sTime$)$@$</span>',
'<div class="bold ssender">$@$eval $oJs$.htmlEncode($oInfo.sSender$)$@$</div>',
'<p class="ssubject">$@$eval $oJs$.htmlEncode($oInfo.sSubject$)||"No subject"$@$</p>',
'</div>',
'$@$endif$@$',





'$@$if($oInfo.sSize$)$@$',
'<p>$oInfo.sSize$</p>',
'$@$endif$@$',
'</div>'
]);

cR.menuscan=A.TE([
'<div class="menu_info">',
'<img height="250" width="250" src="$src$">',
'<p style="margin:0;text-align:center;padding:5px 30px 5px 0;">Scan and open file in your phone.</p>',
'<p style="margin:0;text-align:center;padding:5px 30px 5px 0;">(QR code is valid for 5 minutes)</p>',
'</div>'
]);

cR.menuselector_ctt=A.TE([
'<li id="$_root_.sId$_item$_idx_$" opt="menu_select" sel="$_idx_$" class="menu_list_item">',
'$@$if($sThumb$)$@$',
'<div class="menu_list_img">',
'<table cellspacing="0" cellpadding="0"><tbody><tr><td>',
'<img src="$sThumb$" onerror="this.style.display=\x27none\x27;this.parentNode.className=\x27menu_list_img ico_fail_min\x27;"/>',
'</td></tr></tbody></table>',
'</div>',
'$@$else$@$',
'<div class="menu_list_img ico_fail_min"></div>',
'$@$endif$@$',
'<div class="menu_list_txt">$@$eval $_root_.oJs$.htmlEncode($sName$)$@$</div>',
'</li>',
]);
cR.menuselector=A.TE([
'$@$for($oList$)$@$',
'$@$if(($_idx_$%$_root_.nItemPerPage$)==0)$@$',
'<ul id="$_root_.sId$_list$@$eval Math.floor($_idx_$/$_root_.nItemPerPage$)$@$" class="menu_list" ',
'$@$if($_idx_$/$_root_.nItemPerPage$>0)$@$style="display:none;"$@$endif$@$>',
'$@$endif$@$',
cR.menuselector_ctt,
'$@$if(((+($_idx_$)+1)%$_root_.nItemPerPage$)==0||$_idx_$==($_root_.oList.length$-1))$@$',
'</ul>',
'$@$endif$@$',
'$@$endfor$@$',
'<div style="clear:both;"></div>',
'<div class="menu_multi_slide" $@$if($oPage.length$==1)$@$style="display:none;"$@$endif$@$>',
'<div class="menu_multi_slide_bar">',
'<a id="$_root_.sId$_prev" opt="menu_prev" class="ico_s_pre" title="Prev"></a>',
'$@$for($oPage$)$@$',
'<a id="$_root_.sId$_page$@$eval $_this_$-1$@$" opt="menu_page" page="$@$eval $_this_$-1$@$" class="ico_s_page" title="$_this_$"></a>',
'$@$endfor$@$',
'<a id="$_root_.sId$_next" opt="menu_next" page="$nNext$" class="ico_s_next" title="Next"></a>',
'</div>',
'</div>'
]);

cR.menuside=A.TE([
'<div class="menu_mask" opt="menu_hide"></div>',
'<div id="$sId$_ctt" class="menu_ctt"></div>'
]);
cR.menusideselector=A.TE([
'<div class="menu_close">',
'($oList.length$ files)',
'<a href="javascript:;" class="ico_close" title="Close this catalog" opt="menu_hide"></a>',
'</div>',
'<ul class="menu_list">',
'$@$for($oList$)$@$',
cR.menuselector_ctt,
'$@$endfor$@$',
'</ul>'
]);

var TP=
[
'.ico_close,.ico_mini,.ico_pre,.ico_next,.ico_send,.ico_download,.ico_more{background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview131151.png) no-repeat;cursor:pointer;}.ico_close{background-position:-128px -64px;width:21px;height:20px;position:absolute;top:74px;right:74px;}.ico_mini{background-position:-192px -64px;width:27px;height:21px;position:absolute;top:74px;right:110px;border-right:1px solid #000;padding-right:15px;}.ico_pre{background-position:0 0;width:50px;height:32px;display:inline-block;margin:15px 0 0 18px}.ico_next{background-position:-64px 0;width:50px;height:32px;display:inline-block;margin:15px 0 0 23px}.ico_more{background-position:-64px -64px;width:30px;height:28px;display:inline-block;margin:15px 0 0 23px}.ico_send{background-position:-128px 0;width:50px;height:28px;display:inline-block;margin:15px 0 0 23px}.ico_download{background-position:-192px 0;width:50px;height:27px;display:inline-block;margin:15px 0 0 23px}.ico_play,.ico_pause,.ico_vol,.ico_vol2,.ico_close_s,.ico_b_arrow{background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func131151.png) no-repeat;cursor:pointer;}.ico_play{background-position:-64px 0;width:27px;height:29px;display:inline-block;margin:22px 0 0 28px}.v_player .ico_play{margin:12px 0 0 18px;width:15px;height:19px;background-position:-122px -129px;}.ico_pause{background-position:0 0;width:27px;height:29px;display:inline-block;margin:22px 0 0 28px}.v_player .ico_pause{margin:12px 0 0 18px;width:15px;height:19px;background-position:-97px -129px;}.ico_vol{background-position:-128px 2px;width:28px;height:20px;display:inline-block;}.ico_close_s{background-position:-192px 0;height:28px;width:28px;position:absolute;right:-17px;top:-17px;z-index:2;}.ico_b_arrow{background-position:-240px 0;position:absolute;left:50%;bottom:-24px;width:32px;height:19px;margin-left:-16px;cursor:default;}.ico_s_pre,.ico_s_pagenow,.ico_s_page,.ico_s_next{background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func131151.png) no-repeat;display:inline-block;cursor:pointer;}.ico_s_pre{background-position:-144px -32px;width:13px;height:15px;margin-right:15px;}.ico_s_next{background-position:-160px -32px;width:13px;height:15px;margin-left:10px;}.ico_s_page{background-position:-240px -32px;width:16px;height:16px;margin-right:10px;}.ico_s_page.select{background-position:-256px -32px;}a.ico_s_pre,a.ico_s_next,a.ico_s_page{opacity:0.8;filter:alpha(opacity=80);}a.ico_s_pre:hover,a.ico_s_next:hover,a.ico_s_page:hover{opacity:1;filter:alpha(opacity=100);}a.ico_s_pre:active,a.ico_s_next:active,a.ico_s_page:active{opacity:0.6;filter:alpha(opacity=60);}.ico_vol{background-position:-128px 0;width:22px;height:16px;display:inline-block;}.ico_vol2{background-position:-128px 0;width:11px;height:16px;overflow:hidden;display:inline-block;}a.btn_play:hover .ico_play{filter:alpha(opacity=80);opacity:0.8;}a.btn_vol:hover .ico_vol{filter:alpha(opacity=80);opacity:0.8;}a.btn_vol:hover .ico_vol2{filter:alpha(opacity=80);opacity:0.8;}.ico_mi_mail{background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func131151.png) no-repeat -96px -32px;width:17px;height:11px;display:inline-block;margin:2px 0 0 -25px;position:absolute;}.img_bar_btn{background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func131151.png) no-repeat;display:inline-block;opacity:0.8;filter:(opacity=80);margin:12px 16px 0 0;}.img_bar_btn:hover{opacity:1;filter:(opacity=100);}.full_screen .img_bar_btn{background-position:-212px -32px;width:21px;height:18px;}.ico_pf_zoomb{background-position:0 -128px;width:25px;height:20px;}.ico_pf_zooms{background-position:-32px -128px;width:27px;height:21px;}.ico_pf_zoomb_black{background-position:-192px -32px;width:19px;height:15px;margin:0;}.ico_pf_right{background-position:-64px -128px;width:25px;height:23px;}.icon_failed{width:31px;height:31px;background:url($images_path$newicon/prompt12eea4.gif) no-repeat -192px 0;float:left;}.previewer{z-index:100;}.previewer .scroll_area{overflow:hidden;}.previewer .minibar_area{position:absolute;z-index:10;right:0;top:0;width:50px;height:50px;overflow:hidden;}.previewer .minibar{position:absolute;right:-50px;top:-50px;background-color:#393939;width:100px;height:100px;border-radius:100px;cursor:pointer;}.previewer .minibar_l{width:150px;}.previewer .minibar_l .minibar{width:150px;}.previewer .minibar .breakline{display:none;}.previewer .minibar_l .breakline{display:block;position:absolute;top:56px;height:20px;right:77px;}.previewer .mainbar{position:absolute;bottom:20px;z-index:10;height:48px;background-color:#7b7c7c;background-color:rgba(51,51,51,0.8);padding:0 15px;border-radius:10px;-webkit-transition:opacity 0.2s linear;-moz-transition:opacity 0.2s linear;-ms-transition:opacity 0.2s linear;}.previewer .navigatebar{position:absolute;left:20px;top:20px;z-index:11;cursor:pointer;}.previewer .pv_navtxt{background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview131151.png) no-repeat 0 -128px;width:55px;height:55px;display:block;}.previewer .pv_btn{width:60px;height:48px;display:block;float:left;cursor:pointer;}.previewer .mainbar a.select{background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview131151.png) no-repeat -96px -128px;}.previewer .ico{background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview131151.png) no-repeat;cursor:pointer;}.previewer .mainbar .mouseover{}.previewer .col{background-position:-128px -224px;width:16px;height:16px;display:inline-block;}.previewer .close{background-position:-106px -52px;width:50px;height:50px;position:absolute;top:50px;right:50px;z-index:1;}.previewer .minimize{background-position:-171px -52px;width:55px;height:50px;position:absolute;top:50px;right:95px;z-index:2;}.previewer .prev{background-position:0 0;width:29px;height:32px;display:inline-block;margin:11px 0 0 13px}.previewer .next{background-position:-64px 0;width:29px;height:32px;display:inline-block;margin:11px 0 0 18px}.previewer .list{background-position:-64px -64px;width:30px;height:24px;display:inline-block;margin:12px 0 0 18px}.previewer .send{background-position:-128px 0;width:28px;height:26px;display:inline-block;margin:9px 0 0 18px}.previewer .down{background-position:-192px 0;width:28px;height:24px;display:inline-block;margin:11px 0 0 18px}.previewer .qrcode{background-position:-256px -64px;width:24px;height:24px;display:inline-block;margin:12px 0 0 20px;}.previewer .info{background-position:-256px 0;width:28px;height:24px;display:inline-block;margin:12px 0 0 20px}.previewer .breakline{float:left;margin:5px 15px;width:2px;height:38px;overflow:hidden;background-color:#000;filter:alpha(opacity=30);opacity:0.3;}.previewer .disable{filter:alpha(opacity=50);opacity:0.5;cursor:default;}.previewer .disable:hover,.previewer .disable:active{filter:alpha(opacity=50);opacity:0.5;cursor:default;}.previewer .disable .ico{cursor:default;}.previewer .minibar .mousedown,.previewer .mainbar .mousedown span{filter:alpha(opacity=50);opacity:0.5;}.previewer .mainbar .mouseover{filter:alpha(opacity=80);opacity:0.8;}.previewer .mainbar .select{filter:alpha(opacity=60);opacity:0.6;}.previewer .hidebtn{display:none;}.previewer .allow_mo_hide .hidebar{opacity:0;filter:alpha(opacity=0);}.previewer .layer_tip{position:absolute;z-index:10;width:120px;height:120px;filter:alpha(opacity=50);opacity:0.5;background:#000;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;}.previewer .tip_loading{width:48px;height:48px;background:url($images_path$../js/com/kits/qmpreviewer/img/loading131151.gif) no-repeat;margin:36px 0 0 -24px;position:relative;left:50%;}.previewer .tip_msg{text-align:center;width:100%;color:#fff;position:absolute;}.previewer .onlymsg .tip_loading{display:none;}.previewer .onlymsg .tip_msg{top:50%;margin-top:-6px;}.previewer .onlyloading .tip_msg{display:none;}.previewer .loading{height:140px;}.previewer .loading .tip_msg{bottom:20px;}.previewer .layer_img{position:absolute;border:6px solid #fff;overflow:hidden;background:#fff;z-index:1;}.previewer .layer_img_ts{-webkit-transition:all .3s linear;-moz-transition:all .3s linear;-ms-transition:all .3s linear;}.previewer .layer_img .image{position:absolute;}.previewer .layer_img .img_load,.previewer .layer_img .img_fail,.previewer .img_show .image{position:absolute;width:100%;height:100%;}.previewer .layer_img .img_load{width:300px;height:200px;text-align:center;line-height:30px;background:#000;color:#fff;display:none;}.previewer .layer_img .img_fail{background:#fff;width:280px;height:230px;text-align:center;color:#bababa;}.previewer .img_bar{position:absolute;z-index:9;bottom:0;background-color:#000;background:rgba(0,0,0,0.6);color:#fff;filter:alpha(opacity=60);width:100%;height:45px;overflow:hidden;-webkit-transition:height .3s linear;-moz-transition:height .3s linear;-ms-transition:height .3s linear;}.previewer .img_bar_hide{height:0px;}.previewer .img_bar_btn{cursor:pointer;float:right;}.previewer .img_bar_txt{float:left;margin:0 10px;line-height:45px;font-size:14px;font-weight:bold;}.previewer .move{cursor:move;}.previewer .fail_disp{background:url($images_path$../js/com/kits/qmpreviewer/img/load_fail131151.png) no-repeat 0 0;width:173px;height:104px;margin:20px auto 0;}.fail_info{text-align:center;color:#808080;margin-top:25px;font-size:16px;font-weight:bold;}.previewer .layer_other{position:absolute;background:#fff;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:100px 20px 0;z-index:1;height:220px;*width:320px;overflow:hidden;}.previewer .other_disp{width:174px;height:96px;margin:0 auto;background:url($images_path$../js/com/kits/qmpreviewer/img/no_preview131151.png) no-repeat;}.previewer .other_name{text-align:center;margin-top:30px;line-height:20px;width:300px;word-break:break-all;word-warp:break-word;overflow:hidden;color:gray;}.previewer .other_desc{text-align:center;margin-top:10px;line-height:20px;width:300px;word-break:break-all;word-warp:break-word;overflow:hidden;color:gray;}.previewer .layer_doc{position:absolute;z-index:1;width:800px;margin:0 auto;background-color:#000;border:1px solid #666;box-shadow:0 0 15px #000;-webkit-box-shadow:0 0 15px #000;}.previewer .doc_iframe{width:100%;margin:0 auto;background-color:#fff;}.previewer .doc_iframe iframe{background:url($images_path$../js/com/kits/qmpreviewer/img/loading_bw131151.gif) no-repeat center center;width:100%;height:100%;position:absolute;}.previewer .doc_title{position:absolute;font:bold 26px lucida Grande,Verdana;width:100%;color:#ccc;}.previewer .doc_title div{border-bottom:1px solid #ccc;padding-bottom:10px;margin:10px 10px 0;word-break:break-all;word-wrap:break-word;}.previewer .doc_iframe .doc_finish{background:#fff;}.previewer .previewfailed{font-size:12px;border:4px solid #DDD;padding:15px 20px 12px;z-index:20;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;background:#F5F5F5;color:#494949;position:absolute;width:220px;height:40px;top:50%;left:50%;margin:-30px 0 0 -125px;}.previewer .player_panel{height:70px;background:#f2f2f2;z-index:1;background:-webkit-gradient(linear,left top,left bottom,color-stop(0,rgb(255,255,255)),color-stop(0.10,rgb(242,242,242)),color-stop(1,rgb(223,223,223)));background:-moz-linear-gradient(center top,rgb(255,255,255) 0%,rgb(242,242,242) 10%,rgb(223,223,223) 100%);}.v_player .player_panel{height:49px;}.previewer .player_panel .handle{position:absolute;top:-2px;margin-left:-1px;background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func131151.png) no-repeat -32px -32px;display:block;width:12px;height:12px;z-index:4;cursor:pointer;}.previewer .player_panel .v_handle{position:absolute;top:-2px;margin-left:-2px;background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func131151.png) no-repeat -144px -135px;display:block;width:6px;height:6px;z-index:4;cursor:pointer;}.btn_play{width:76px;height:69px;display:block;float:left;border-right:1px solid #d6d6d6;margin-right:30px;cursor:pointer;}.btn_play:hover{background-color:#d8d8d8;border-right:1px solid #ccc;}.v_player .btn_play{width:50px;height:42px;margin-right:10px;}.btn_vol{display:block;float:left;margin:28px 0 0 19px;cursor:pointer;height:16px;overflow:hidden;}.v_player .btn_vol{margin:13px 0 0 10px;_display:inline;}.v_player .btn_fullscreen{display:none;margin:13px 10px 0 10px;float:right;*width:19px;}.vol_control{position:absolute;right:-90px;padding:10px 22px 10px 12px;background:#eaeaea;border:1px solid #ababab;border-radius:8px;box-shadow:0 0 2px rgba(0,0,0,0.3);}.v_vol_control{float:right;width:50px;position:relative;margin:20px 10px 0 6px;}.v_progress_line,.v_played_line{position:absolute;left:0;top:0;height:2px;overflow:hidden;cursor:pointer;}.v_progress_line{;width:50px;background-color:#ccc;z-index:2;}.v_played_line{width:0%;background-color:#6d6d6d;z-index:3;}.fullscreen_mode .v_vol_control{width:60px;}.fullscreen_mode .v_progress_line{width:60px;}.media_info{float:left;width:280px;}.media_name{color:#444;text-align:center;margin:10px 10px 0;height:14px;word-break:break-all;word-wrap:break-word;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.v_player .media_name{margin:5px 0 3px 0;text-align:left;}.media_time{text-align:center;margin:0;}.v_player .media_time{text-align:left;}.fullscreen_mode .media_name{margin:14px 30px 14px 100px;text-align:center;}.fullscreen_mode .media_time{margin:-28px 0 0 0;*margin:-26px 0 0 0;}.progress{position:relative;margin:8px 0 6px 0;width:280px;height:7px;}.v_player .progress{margin:0px;width:460px;}.progress_line,.loaded_line,.played_line{position:absolute;left:0;right:0;overflow:hidden;width:280px;height:7px;cursor:pointer;}.progress_line{background-color:#d8d8d8;z-index:2;}.v_player .progress_line{width:460px;}.loaded_line{background-color:#d1d1d1;width:0%;z-index:3;}.v_player .loaded_line{width:460px;background-color:#acc74f;background:-moz-linear-gradient(top,#cddf67,#91b33a);background:-webkit-gradient(linear,0 0,0 100%,from(#cddf67),to(#91b33a));}.played_line{background-color:#acc74f;background:-moz-linear-gradient(top,#cddf67,#91b33a);background:-webkit-gradient(linear,0 0,0 100%,from(#cddf67),to(#91b33a));width:0%;z-index:4;}.v_player .played_line{width:460px;background:none;}.media_info .loaded_line{background-color:#acc74f;background:-moz-linear-gradient(top,#cddf67,#91b33a);background:-webkit-gradient(linear,0 0,0 100%,from(#cddf67),to(#91b33a));-webkit-transition:width .3s ease-in-out;-moz-transition:width .3s ease-in-out;-ms-transition:width .3s ease-in-out;-o-transition:width .3s ease-in-out;transition:width .3s ease-in-out;-webkit-transition:left .3s ease-in-out;-moz-transition:left .3s ease-in-out;-ms-transition:left .3s ease-in-out;-o-transition:left .3s ease-in-out;transition:left .3s ease-in-out;}.media_info .played_line{display:none;}.vol_control .progress{margin:3px 0 0 30px;width:80px;}.vol_control .progress_line,.vol_control .loaded_line,.vol_control .played_line{width:80px;-webkit-transition:width .2s ease-in-out;-moz-transition:width .2s ease-in-out;-ms-transition:width .2s ease-in-out;-o-transition:width .2s ease-in-out;transition:width .2s ease-in-out;}.vol_control .btn_vol{margin:0;}.play_list.a_player{height:auto;}.play_list.v_player{width:710px;height:413px;}.playlist_body{background-color:#ececec;border:solid #575757;}.playlist_body li{height:30px;overflow:hidden;}.playlist_body li a{display:block;padding:0 25px;height:30px;line-height:30px;cursor:pointer;text-decoration:none;color:#000;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}.playlist_body li a:hover{background-color:#528BCB;color:#fff;text-decoration:none;color:#fff;}.playlist_body .playing{background-color:#ddd;position:relative;}.playlist_body .playing .ico_playing{background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func131151.png) no-repeat 0 -32px;width:12px;height:14px;display:block;position:absolute;margin:10px 0 0 9px;top:0;left:0;}.v_player_content{float:left;border-right:1px solid #ABABAB;background-color:#6a6a6a;border:1px solid #575757;box-shadow:0 2px 3px #555;-moz-user-select:none;-webkit-user-select:none;}.play_list.a_player .player_panel{border-radius:8px 8px 0 0;border-color:#575757;border-bottom:1px solid #ababab;}.play_list.v_player .video{width:460px;border-top-right-radius:8px;}.play_list.a_player .playlist_body{border-width:0 1px 1px 1px;padding:5px 0 10px;border-radius:0 0 8px 8px;width:448px;max-height:150px;overflow-x:hidden;overflow-y:auto;}.play_list.v_player .playlist_body{border-width:0;padding:10px 0;margin-left:451px;width:210px;height:393px;overflow-x:hidden;overflow-y:auto;border-right:1px solid #ABABAB;border:1px solid #575757;border-radius:8px;box-shadow:0 2px 3px #555;}.a_player .vol_control{top:18px;}.v_player .vol_control{float:right;position:relative;right:auto;padding:0;width:30px;height:20px;margin:13px -8px 0 0;background:none;border:none;border-radius:0;box-shadow:none;}.v_player .type_FLASH .player_panel{display:none;}.v_player .type_FLASH .video{height:350px}.v_player .type_FLASH .video_loading{background:none;}.v_player .type_SWF{width:100%;}.v_player .type_SWF .player_panel{width:100%;}.v_player .type_SWF .video{width:100%;}.v_player .type_SWF.full_screen .video{height:100%;}.v_player .type_SWF .video_loading{}.v_player .type_SWF .progress{width:100%}.v_player .type_SWF .progress_line{width:100%;}.v_player .type_SWF .progress .handle,.v_player .type_SWF .vol_control,.v_player .type_SWF .v_vol_control{display:none}.previewer .layer_music{position:absolute;z-index:1;}.previewer .layer_music .player_con{position:absolute;}.a_player{width:450px;height:70px;margin:0 auto;top:50%;}.a_player .player_panel{width:448px;border:1px solid #ababab;box-shadow:0 2px 3px #555;box-shadow:0 2px 3px #555;}.previewer .video_content{width:100%;height:100%;top:0;z-index:1;}.v_player{width:460px;margin:0 auto;top:50%;border-radius:8px;}.v_player .player_panel{width:460px;position:relative;}.video{height:300px;width:460px;padding:0;}.full_screen_mode .btn_fullscreen{display:block;}.full_screen_mode .media_info,.full_screen_mode .media_info .progress,.full_screen_mode .media_info .progress_line,.full_screen_mode .media_info .loaded_line,.full_screen_mode .media_info .played_line{width:242px;}.v_player .full_screen_mode .vol_control{}.mute_mode .ico_vol{background-position:-128px 0;width:11px;height:16px;overflow:hidden;}.video_loading .kernel{top:- 3000px;margin:-3000px 0 0 -3000px;}.video_loading .flash_kernel{top:0;margin:0;}.video_loading{background:url($images_path$../js/com/kits/qmpreviewer/img/loading131151.gif) no-repeat 50% 50%;}.previewer .layer_cps{position:absolute;z-index:1;background:#fff;border:1px solid #666;box-shadow:0 0 15px #000;-webkit-box-shadow:0 0 15px #000;}.layer_cps .cps_ctt{overflow-y:auto;height:100%;}.layer_cps .cps_list{padding:10px 20px 70px;user-select:none;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;}.layer_cps .cps_title{padding:25px 20px 10px;border-bottom:3px solid #e7e7e7;font-weight:bold;font-size:20px;margin:0;-webkit-transition:margin 0.2s linear;-moz-transition:margin 0.2s linear;-ms-transition:margin 0.2s linear;}.layer_cps .cps_column{float:left;width:120px;height:120px;overflow:hidden;padding:15px 20px;border:3px solid #fff;cursor:pointer;}.layer_cps .cps_column:hover{border:3px solid #ececec;border-radius:5px;}.layer_cps .cps_img{width:114px;height:102px;margin:0 auto;overflow:hidden;}.layer_cps .cps_img table,.layer_cps .cps_img tr,.layer_cps .cps_img td{text-align:center;width:100%;height:100%;overflow:hidden;}.layer_cps .cps_detail{text-align:center;height:14px;line-height:14px;overflow:hidden;text-overflow:ellipsis;}.layer_cps .cps_size{color:#808080;text-align:center;}.layer_cps .cps_nav{position:absolute;left:-10px;top:10px;background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func131151.png) no-repeat 0 -64px;height:39px;padding-right:8px;cursor:pointer;opacity:0;-webkit-transition:all 0.2s linear;-moz-transition:left 0.2s linear,opacity 0.2s linear;-ms-transition:left 0.2s linear,opacity 0.2s linear;visibility:hidden;}.layer_cps .cps_navtxt{font-size:20px;font-weight:normal;color:#fff;margin:5px 0 0 18px;padding:0;min-width:150px;max-width:280px;height:25px;text-align:center;overflow:hidden;text-overflow:ellipsis;}.layer_cps .cps_nav i{background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func131151.png) no-repeat top right;width:6px;height:39px;position:absolute;right:0;top:0px;}.cps_shownav .cps_nav{left:-30px;opacity:1;visibility:visible;}.cps_shownav .cps_title{margin-top:30px;}.ico_file_doc,.ico_file_xls,.ico_file_ppt,.ico_file_eml,.ico_file_compress,.ico_file_dir,.ico_file_psd,.ico_file_fla,.ico_file_pdf,.ico_file_html,.ico_file_audio,.ico_file_video,.ico_file_txt,.ico_file_other,.ico_file_img{width:114px;height:102px;margin:0 auto;background:url($images_path$xdisk/ico_file_all12f587.jpg) no-repeat;}.ico_file_doc{background-position:0px 0px;}.ico_file_xls{background-position:-114px 0px;}.ico_file_ppt{background-position:-228px 0px;}.ico_file_eml{background-position:0px -102px;}.ico_file_compress{background-position:-114px -102px;}.ico_file_dir{background-position:-228px -102px;}.ico_file_psd{background-position:0px -204px;}.ico_file_fla{background-position:-114px -204px;}.ico_file_pdf{background-position:-228px -204px;}.ico_file_html{background-position:0px -306px;}.ico_file_audio{background-position:-114px -306px;}.ico_file_video{background-position:-228px -306px;}.ico_file_txt{background-position:0px -408px;}.ico_file_other{background-position:-114px -408px;}.ico_file_img{background-position:-228px -408px;}.previewer .classifier{}.mutil{position:absolute;top:50%;left:50%;width:780px;min-width:780px;height:540px;margin:-225px 0 0 -380px;z-index:1;}.mutil_select{position:relative;}.mutil_music,.mutil_video,.mutil_image,.mutil_document,.mutil_compress,.mutil_other{position:relative;float:left;width:220px;height:220px;margin:0 20px 20px 0;cursor:pointer;}.mutil_music_ico,.mutil_video_ico,.mutil_image_ico,.mutil_document_ico,.mutil_compress_ico,.mutil_other_ico{display:block;width:150px;height:160px;margin:28px 0 0 35px;}.mutil_music_ico{background:url($images_path$../js/com/kits/qmpreviewer/img/mutil_audio131151.png) no-repeat 0 0;width:160px;height:140px;margin:30px 0 0 35px;}.mutil_video_ico{background:url($images_path$../js/com/kits/qmpreviewer/img/mutil_vedio131151.png) no-repeat 0 0;width:170px;height:140px;margin:28px 0 0 24px;}.mutil_image_ico{background:url($images_path$../js/com/kits/qmpreviewer/img/mutil_pic131151.png) no-repeat 0 0;width:165px;height:140px;margin:30px 0 0 26px}.mutil_document_ico{background:url($images_path$../js/com/kits/qmpreviewer/img/mutil_doc131151.png) no-repeat 0 0;}.mutil_compress_ico{background:url($images_path$../js/com/kits/qmpreviewer/img/mutil_compress131151.png) no-repeat 0 0;}.mutil_other_ico{background:url($images_path$../js/com/kits/qmpreviewer/img/mutil_unknow131151.png) no-repeat 0 0;}.mutil_hover{background-color:#44454a;background-color:rgba(34,37,44,0.64);border-radius:8px;}.mutil_hover:active{background-color:#393c41;background-color:rgba(34,37,44,0.75);box-shadow:inset 0 0 15px #333;}.file_quantity{position:absolute;right:46px;top:38px;width:25px;height:25px;line-height:25px;background-color:#000;border:2px solid #fff;border-radius:30px;color:#fff;font-weight:bold;text-align:center;}.mutil_music .file_quantity{right:23px;}.mutil_video .file_quantity{right:23px;}.mutil_image .file_quantity{right:32px;}.mutil_tip{position:absolute;left:48px;bottom:38px;padding:3px 5px;background-color:#000;border-radius:5px;color:#fff;}.previewer .opt_menu{position:absolute;z-index:10;left:50px;top:100px;}.opt_menu .menu_ctt{}.opt_menu .menu_bg{position:absolute;z-index:-1;top:-15px;left:-15px;padding:15px;width:100%;height:100%;background-color:#303030;border-radius:10px;opacity:0.95;filter:alpha(opacity=95);}.opt_menu .ico_b_arrow{margin-bottom:-10px;}.opt_menu .ico_close_s{top:-23px;right:-29px;}.menu_info .ssender{color:#fff;width:115px;height:14px;overflow:hidden;text-overflow:ellipsis;font-weight:bold;}.menu_info .ssubject{clear:both;margin:10px 0 0 0;max-height:28px;_height:14px;overflow:hidden;}.menu_info .ssubject a{color:#8D8D8D;text-decoration:none;}.menu_info .ssubject a:hover{text-decoration:none;}.previewer .menu_list,.menu_multi_slide{width:505px;}.menu_list_item{float:left;height:50px;width:250px;margin-bottom:5px;border-radius:8px;overflow:hidden;cursor:pointer;}.menu_list_item:hover,.menu_list_hover_ie6{background-color:#357ca8;}.menu_list_item:active{background-color:#1e3848;}.menu_list .select,.menu_list .select:hover{background-color:#1e3848;}.menu_list_img{width:32px;height:32px;margin:10px 10px 0 10px;float:left;overflow:hidden;}.menu_list_img table tr td{width:32px;height:32px;text-align:center;line-height:0;}.menu_list_img img{width:32px;}.menu_list_item .ico_fail_min{background:url($images_path$../js/com/kits/qmpreviewer/img/ico_fail_min131151.png) no-repeat 0 0;width:31px;height:31px;}.menu_list_txt{float:left;width:190px;line-height:50px;color:#fff;white-space:nowrap;}.menu_multi_slide{height:30px;}.menu_multi_slide_bar{position:absolute;bottom:5px;width:100%;text-align:center;}.menu_multi_slide a.select{opacity:1;filter:alpha(opacity=100);cursor:default;}.previewer .menu_side{position:absolute;width:100%;height:100%;z-index:2;}.menu_side .menu_ctt{position:absolute;right:-300px;height:100%;width:300px;background:#fff;overflow:hidden;overflow-y:auto;border-left:1px solid #CCCCCC;box-shadow:0 0 15px #000;-webkit-box-shadow:0 0 15px #000;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;}.menu_side .menu_mask{position:absolute;width:100%;height:100%;background:#fff;opacity:0;filter:alpha(opacity=0);}.menu_side .menu_list{list-style:none;margin:0px;padding:0px;width:100%;}.menu_side .menu_list li{list-style-type:none;}.previewer .menu_info{padding:10px 10px 10px 35px;color:#8d8d8d;width:280px;}.previewer .menu_info:hover{border-radius:8px;}.ie .mainbar{background-color:#474747;opacity:0.5;}.ie .minibar{background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview131151.png) no-repeat 0 -224px;right:0;top:0;width:50px;height:50px;}.ie .minibar_l{width:100px;}.ie .minibar_l .minibar{width:100px;}.ie .close{right:0;top:0;}.ie .minimize{right:45px;top:0;}.ie .minibar .breakline{top:5px;right:23px;}.ie6 .minibar{background-image:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_ie6131151.png)}.ie6 .ico_close,.ie6 .ico_mini,.ie6 .ico_pre,.ie6 .ico_next,.ie6 .ico_send,.ie6 .ico_download,.ie6 .ico_more{background-image:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_ie6131151.png)}.ie6 .ico_play,.ie6 .ico_pause,.ie6 .ico_vol,.ie6 .ico_close_s,.ie6 .ico_b_arrow{background-image:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func_ie6131151.png)}.ie6 .ico{background-image:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_ie6131151.png);}.ie6 .ico_close_s{right:-7px;top:-11px;width:24px;height:24px;}.ie6 .ico_s_pre,.ie6 .ico_s_page,.ie6 .ico_s_next{background-image:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func_ie6131151.png)}.ie6 .mutil_music_ico{background-image:url($images_path$../js/com/kits/qmpreviewer/img/mutil_audio_ie6131151.png)}.ie6 .mutil_video_ico{background-image:url($images_path$../js/com/kits/qmpreviewer/img/mutil_vedio_ie6131151.png)}.ie6 .mutil_image_ico{background-image:url($images_path$../js/com/kits/qmpreviewer/img/mutil_pic_ie6131151.png)}.ie6 .mutil_document_ico{background-image:url($images_path$../js/com/kits/qmpreviewer/img/mutil_doc_ie6131151.png)}.ie6 .mutil_compress_ico{background-image:url($images_path$../js/com/kits/qmpreviewer/img/mutil_compress_ie6131151.png)}.ie6 .mutil_other_ico{background-image:url($images_path$../js/com/kits/qmpreviewer/img/mutil_unknow_ie6131151.png)}.ie6 .ico_mi_mail{background-image:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func_ie6131151.png)}.ie6 .playlist_body .playing .ico_playing{background-image:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func_ie6131151.png)}.ie6 .v_player .playlist_body{position:absolute;top:0;}.ie6 .menu_list_txt{width:180px;overflow:hidden;}.ie6 .a_player .playlist_body{height:150px;}.ie6 .vol_control{right:-93px;}.ie6 .v_player .vol_control{right:auto;}.ie7 .vol_control{right:-78px;}.ie7 .v_player .vol_control{right:auto;}.ie6 .progress,.ie7 .progress{zoom:1;}.ie6 .vol_control .progress,ie7 .vol_control .progress{margin-top:15px;}.ie6 .cps_nav .pv_navtxt{width:180px;}.ie6 .navigatebar .pv_navtxt{background-image:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_ie6131151.png);}.ie6 .mutil_select{zoom:1;}.ie6 .player_panel .handle{background-image:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func_ie6131151.png);}.ie6 .player_panel .v_handle{background-image:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func_ie6131151.png);}.ie6 .img_bar_btn{background-image:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func_ie6131151.png);}.ie6 .layer_cps .cps_nav{background-image:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_func_ie6131151.png);}.ie6 .layer_cps .cps_navtxt{width:280px;}.ie6 .doc_iframe iframe{}.ie6 .doc_title{}@-webkit-keyframes scale{0%{-webkit-transform:scale(0.9);opacity:0}51%{-webkit-transform:scale(0.9);opacity:0}100%{-webkit-transform:scale(1);opacity:1}}@-moz-keyframes scale{0%{-moz-transform:scale(0.9);opacity:0}51%{-moz-transform:scale(0.9);opacity:0}100%{-moz-transform:scale(1);opacity:1}}@-webkit-keyframes opacity_7{0%{opacity:0;}100%{opacity:0.7;}}@-moz-keyframes opacity_7{0%{opacity:0;}100%{opacity:0.7;}}@-webkit-keyframes opacity_7_0{0%{opacity:0.7;}100%{opacity:0;}}@-moz-keyframes opacity_7_0{0%{opacity:0.7;}100%{opacity:0;}}@-webkit-keyframes opacity_X{0%{visibility:hidden;}66%{height:0px;visibility:hidden;}100%{}}@-moz-keyframes opacity_X{0%{visibility:hidden;}66%{height:0px;visibility:hidden;}100%{}}.previewer .mask,.previewer .layer_mask{position:absolute;top:0;left:0;z-index:0;width:100%;height:100%;background:#000;filter:alpha(opacity=70);opacity:0.7;-webkit-animation:opacity_7 0.25s ease;-moz-animation:opacity_7 0.25s ease;}.previewer .layer_mask{z-index:1;}.viewer_animation .mainbar,.viewer_animation .minibar{overflow:hidden;-webkit-animation:opacity_X 0.75s ease;-moz-animation:opacity_X 0.75s ease;}.viewer_animation .layer_other,.viewer_animation .layer_doc,.viewer_animation .layer_cps,.viewer_animation .layer_img{-webkit-transform:scale(1);-webkit-animation:scale 0.5s ease;-moz-transform:scale(1);-moz-animation:scale 0.5s ease;}.previewer_hide .mask{opacity:0;-webkit-animation:opacity_7_0 0.25s ease;-moz-animation:opacity_7_0 0.25s ease;}.previewer .no_ts{-webkit-transition:none;-moz-transition:none;-ms-transition:none;}.video_content:-webkit-full-screen{background:#000;}.video_content:-moz-full-screen{background:#000;}.graytext{color:#A0A0A0;}.underline{text-decoration:underline;}.subscri_box{position:absolute;top:0;left:0;width:100%;}.subscri_title{padding-bottom:10px;margin:10px 15px 0;border-bottom:1px solid #ccc;}.subscri_title h1{color:#1E5494;font-size:14px;line-height:1;font-weight:bold;margin:0 0 6px 0;}.subscri_title .graytext a{color:#A0A0A0;}.read_ori{color:#A0A0A0;cursor:pointer;}.read_ori:hover{text-decoration:none;}.read_ori .underline{color:#A0A0A0;}.read_ori:hover .underline{text-decoration:underline;}.ico_read_ori{cursor:pointer;vertical-align:middle;margin:-2px 2px 0 5px;border:0 none;}img{border:0 none;}.wx_c_bar,.wx_close{background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview131151.png) no-repeat;}.ie6 .wx_c_bar,ie6 .wx_close{background:url($images_path$../js/com/kits/qmpreviewer/img/ico_preview_ie6131151.png) no-repeat;}.qr_previewer .editor_mask{position:absolute;top:0;left:0;z-index:998;background:black;opacity:0.7;filter:alpha(opacity=70);width:100%;height:100%;-webkit-animation:opacity_7 0.25s ease;-moz-animation:opacity:opacity 0.25s ease;}.qr_previewer .wx_c_bar{position:absolute;right:0;top:0;z-index:1001;width:50px;height:50px;display:inline-block;background-position:0 -222px;-webkit-animation:opacity_X 0.75s ease;-moz-animation:opacity_X 0.75s ease;}.qr_previewer .wx_close{background-position:-128px -64px;width:16px;height:16px;position:absolute;top:12px;left:24px;display:inline-block;}'
,
].join("\n");

TP&&A.evalCss(TP,window,"qmPreviewerDefault");

})(QMComAdaptar);



var QMPreviewer=(function(A,aR)
{
var

bzp=
{
img:"Image",
music:"Music",
video:"Video",
doc:"Document",
compress:"Compress",
other:"Other"
},
eCg=1,
eBO=50,
yw={},
cal={},

aCM={},
bmc=[];

function apW(aS,aq)
{
var dcD=aS;
aq.sSkin&&cal[aS+aq.sSkin]&&(dcD=aS+aq.sSkin);
return new(cal[dcD])(aq);
}

function eiA(ag,fA)
{
var yp=A.target(ag),
qu=A.attr(yp,fA);

while(!qu&&(yp=yp.parentNode)&&yp.nodeType==1)
{
qu=A.attr(yp,fA);
}

return qu&&yp;
}

function kc(aG,ejB)
{
var awS=this.byz||(this.byz=[]),
cY=ejB.split("|"),
aXd,bgN;

for(var i=cY.length-1;i>=0;i--)
{
aXd=cY[i];
bgN=A.funcProxy(this,this[aXd+"_"]);
awS.push([aG,aXd,bgN]);
A.addEvent(aG,aXd,bgN);
}
}

function bZj()
{
if(this.byz)
{
var awS=this.byz,
cSD;

while(cSD=awS.shift())
{
A.delEvent.apply(this,cSD);
}

this.byz=aR;
}
}


yw.show=function(zH,lF,aq)
{
var ae=this;
if(!ae.bPM)
{
var aM=aq||{};
ae.yS(aM);
ae.bwe.show();
ae.UA=aM.oFileList?"List":"Callback";
ae.dfV=aM.bNoOpt;
ae.qj=lF||{};
if(aM.oFileList)
{
for(var i=0,l=aM.oFileList.length;i<l;i++)
{
aM.oFileList[i].nListIdx=i;
}
ae.auG={oMap:{List:aM.oFileList}};
ae.Kv.setFileList(aM.oFileList);
}
ae.bco(ae.bmW(zH),false,true);
}
};

yw.play=function(bQT,lF,aq)
{
var ae=this;
if(!ae.bPM&&(bQT||{}).length)
{
ae.yS(aq||{});
ae.bwe.show();
ae.auG=this.dRD(bQT);
ae.dfV=aM.bNoOpt;
ae.qj=lF||{};
ae.auG.oTypes.length==1?
ae.ou(ae.auG.oTypes[0]):
ae.dqk();
}
};

yw.close=function()
{
this.bPM&&this.mG()
};

yw.component=function(aS,eF,dZY)
{
var eC,
Dm=cal[dZY];


eC=cal[aS]=function()
{
arguments.length&&this.init&&this.init.apply(this,arguments);
};


eF(eC.prototype=Dm?new Dm():{},Dm&&Dm.prototype);

return this;
};

yw.getFrameInfo_=function(aA)
{
return this.adR[aA];
};


yw.fh=function(aq)
{
if(!this.dzm)
{
var aU=this.nf="pRevIEweR"+Math.random().toString().split(".").pop();


A.insertHTML(document.body,"afterBegin",yw.getView("frame",
{
sId:aU,
sClass:A.isBrowser("ie")?
"previewer previewer_hide ie"+A.browserVer()+(A.browserVer()<9?" ie":""):
"previewer previewer_hide"
}
));

this.adR=A.S(aU);
this.cgH=A.S(aU+"_scorllarea");

this.dzm=true;
}
return this;
};

yw.dij=function()
{
this.eBo();
this.bwe&&this.bwe.destroy();
this.Kv&&this.Kv.destroy();
this.HE&&this.HE.destroy();
this.Kv=this.HE=this.bwe=
this.adR=this.cgH=aR;
};

yw.yS=function(aq)
{
this.bPM=true;
!this.dzm&&this.fh();

this.dyg=A.getStyle(document.body,"overflow");
document.body.style.overflow="hidden";
this.adR.style.top=A.bodyScroll(window,"scrollTop")+"px";

A.setClass(this.adR,A.attr(this.adR,"orgcls")+
({Skin1:" previewer_skin1"}[this.bRH=aq.sSkin]||""));

A.show(this.adR,true);
A.rmClass(this.adR,"previewer_hide");

!this.bwe&&(this.bwe=apW("Mask",
{
sId:this.nf+"_mask",
sSkin:this.bRH,
oDomContainer:this.cgH,
oEvents:
{
fClick:A.funcProxy(this,this.dse)
}
}
));
!this.Kv&&(this.Kv=apW("Operator",
{
sId:this.nf+"_operator",
sSkin:this.bRH,
oDomFrame:this.adR,
oDomContainer:this.cgH,
oMenuContainer:this.adR,
oEvents:
{
fClick:A.funcProxy(this,this.alr),
fSelect:A.funcProxy(this,this.alr),
fResizeVisualRange:A.funcProxy(this,this.dNz)
}
}
));
!this.HE&&(this.HE=apW("Tip",
{
sId:this.nf+"_tip",
sSkin:this.bRH,
oDomContainer:this.adR,
oVisualRange:this.Kv.getVisualRange()
}
));

kc.call(this,document,"keydown");
A.S(this.nf+"_focus").focus();

return this;
};

yw.dse=function()
{
if(!this.Or||!this.Or.back())
{
this.UA=="Callback"||this.UA=="Classifier"||
this.auG.oTypes&&this.auG.oTypes.length==1?this.mG():
this.dqk();
}
};

yw.mG=function()
{
if(this.bPM)
{

bZj.call(this);

this.diT(this.genCacheKey(this.Or.getFileInfo()),this.Or);

this.byk(this.Or);
this.byk(this.aTX);
this.byk(this.aIr);

this.Kv.destroy();
this.HE.destroy();

this.auG=this.qj=
this.Kv=this.HE=
this.Or=this.aTX=this.aIr=aR;

A.rmClass(this.adR,"viewer_animation");
A.addClass(this.adR,"previewer_hide");
if(A.isBrowser("ie"))
{
A.show(this.adR,false);

document.body.style.overflow=this.dyg;
}
else
{

setTimeout(function()
{
A.show(yw.adR,false);

document.body.style.overflow=yw.dyg;
},
300
);
}
this.bPM=false;
}
};

yw.diT=function(bH,sP)
{

if(sP.status()=="loaded")
{

if(aCM[bH])
{
for(var i=bmc.length-1;i>=0;i--)
{
if(bmc[i]==bH)
{
bmc.splice(i);
break;
}
}
aCM[bH]!=sP&&
!this.cGa(aCM[bH])&&
aCM[bH].destroy();
}

if(bmc.length>=eBO)
{
var cxy=bmc.shift();
!this.cGa(aCM[cxy])&&
aCM[cxy].destroy();
delete aCM[cxy];
}

bmc.push(bH);
aCM[bH]=sP;
}
};

yw.eBo=function()
{
for(var i in aCM)
{
aCM[i].destroy();
delete aCM[i];
}
bmc=[];
};

yw.dnx=function(bH)
{
return aCM[bH];
};

yw.genCacheKey=function(zH)
{
return this.bxD(zH)+zH.sUrl;
};

yw.cGa=function(sP)
{
return sP==this.Or||sP==this.aIr||sP==this.aTX;
};

yw.bxD=function(zH)
{
var by=bzp[zH.sType]||bzp["other"];
return by!="Other"&&!zH.sUrl?"Loader":by;
};

yw.dRD=function(bQT)
{
var bQZ={oTypes:[],oMap:{}};
for(var i=0,aF=bQT.length;i<aF;i++)
{
var gs=bQT[i],
by=this.bxD(gs),
cZC=bQZ.oMap[by]||
(bQZ.oMap[bQZ.oTypes[bQZ.oTypes.length]=by]=[]);
cZC[gs.nListIdx=cZC.length]=gs;
}
return bQZ;
};

yw.ou=function(dE)
{
var eN=this.auG.oMap[dE];
this.UA=dE;
this.Kv.setFileList(eN);
this.bco(this.bmW(eN));
};

yw.dnu=function(sP)
{
var pX=this.Kv.getVisualRange(),
bwN=this.Or;


bwN&&bwN.uninstall();
this.HE.changeVisualRange(pX);
sP.changeVisualRange(pX);
if(sP.getFileInfo())
{
this.Kv.setFileInfo(sP.getFileInfo().oInfo);
this.Kv.setTwoDCodeUrl(sP.getFileInfo().sTwoDCodeUrl);
this.Kv.setFileName(sP.getFileInfo().sName);
}
(this.Or=sP).install();


if(bwN)
{
this.diT(this.genCacheKey(bwN.getFileInfo()),bwN);
this.byk(bwN);
this.Kv.hideBar();
}
};

yw.bmW=function(zH)
{
var gs=zH.length?zH[0]:zH,
eN=zH.length?zH:aR,
cix=gs.sUrl&&this.dnx(this.genCacheKey(gs));

if(cix)
{
cix.update(
{
oTip:this.HE,
oOperator:this.Kv,


oVisualRange:this.Kv.getVisualRange(),
oFileInfo:gs,
oFileList:eN
}
);
}
else
{
var by=this.bxD(zH);
cix=apW(
by,
{
sId:this.nf+"_viewer",
sSkin:this.bRH,
oTip:this.HE,
oOperator:this.Kv,
oDomContainer:by=="Image"?this.adR:this.cgH,
oVisualRange:this.Kv.getVisualRange(),
oFileInfo:gs,
oFileList:eN,
oEvents:by!="Loader"?aR:
{
fLoad:A.funcProxy(this,this.eBL),
fCancelLoad:A.funcProxy(this,this.eBP),
fFinish:A.funcProxy(this,this.ely)
}
}
);
}

return cix;
};

yw.bco=function(sP,ewb,eio)
{
var gs=sP.getFileInfo(),
cXE=this.UA!="Callback",
bAT=false,
cty,
Fn;

if(!ewb)
{
if(this.aIr==sP)
{
this.byk(this.aTX);
this.aTX=this.Or;
this.aIr=aR;
}
else if(this.aTX==sP)
{
this.byk(this.aIr);
this.aIr=this.Or;
this.aTX=aR;
}
else if(this.Or)
{
this.aIr=this.aTX=aR;
}
}

if(cXE)
{
Fn=this.auG.oMap[this.UA][gs.nListIdx+1];
cty=this.auG.oMap[this.UA][gs.nListIdx-1];
bAT=this.auG.oMap[this.UA].length==1;
this.Kv.selectFile(gs.nListIdx);
}
else if(!this.qj.fNext)
{
bAT=true;
}
else
{
Fn=this.qj.fNext(gs);
cty=this.qj.fPrev(gs);
}

if(eCg)
{

!this.aIr&&Fn&&this.bxD(Fn)=="Image"&&
(this.aIr=this.bmW(Fn));



}


(eio?
A.addClass(this.adR,"viewer_animation"):
A.rmClass(this.adR,"viewer_animation"));

this.Kv.enable(
{
navbar:false,
minibar:
{
minimize:this.bxD(gs)=="Music"
},
mainbar:{Video:1,Music:1}[this.UA]||this.dfV?false:
{
next:bAT?false:(Fn?true:"disable"),
prev:bAT?false:(cty?true:"disable"),
breakline:!bAT,
send:!!this.qj.fFrwd?(gs.bIsTimeout==1?"disable":true):false,
list:bAT?false:cXE,
info:gs.oInfo,

scan:gs.bIsTimeout!=1&&!!gs.sTwoDCodeUrl,

down:gs.bIsTimeout==1?"disable":true
}
},
{Document:true,Compress:true}[this.bxD(gs)]
);

this.dnu(sP);


gs.sName&&this.Kv.setTitle&&this.Kv.setTitle(gs.sName);
};

yw.dqk=function()
{
this.Kv.enable({navbar:false,mainbar:false});
this.dnu(apW(this.UA="Classifier",
{
sId:this.nf+"_classifier",
sSkin:this.bRH,
oTip:this.HE,
oDomContainer:this.adR,
oVisualRange:this.Kv.getVisualRange(),
oFilesMap:this.auG,
oEvents:
{
fClick:A.funcProxy(this,this.alr)
}
}
));
};

yw.byk=function(sP)
{
if(sP)
{
this.dnx(this.genCacheKey(sP.getFileInfo()))||this.cGa(sP)?
sP.uninstall():
sP.destroy();
}
};

yw.alr=function(ky,cu)
{
switch(ky)
{
case"chooseMod":
this.ou(cu);
break;
case"close":
this.mG();
break;
case"minimize":
this.Or.minimize&&this.Or.minimize();
this.mG();
break;
case"next":
if(this.aIr)
{
this.bco(this.aIr);
}
else
{
var gs=this.UA=="Callback"?
this.qj.fNext(this.Or.getFileInfo()):
this.auG.oMap[this.UA][this.Or.getFileInfo().nListIdx+1];
gs&&this.bco(this.bmW(gs));
}
break;
case"prev":
if(this.aTX)
{
this.bco(this.aTX)
}
else
{
var gs=this.UA=="Callback"?
this.qj.fPrev(this.Or.getFileInfo()):
this.auG.oMap[this.UA][this.Or.getFileInfo().nListIdx-1]
gs&&this.bco(this.bmW(gs));
}
break;
case"send":
var DR=this.qj;
DR.fFrwd&&DR.fFrwd(this.Or.getFileInfo());
break;
case"down":
var DR=this.qj;
if(DR.fDown)
{
DR.fDown(cu||this.Or.getFileInfo());
}
else
{
A.S(this.nf+"_downframe").src=(cu||this.Or.getFileInfo()).sDown;
}
break;
case"select":
var gs=this.auG.oMap[this.UA][cu];
gs&&this.bco(this.bmW(gs));
break;
case"openurl":
var DR=this.qj;
if(DR.fOpenUrl)
{
DR.fOpenUrl(cu||this.Or.getFileInfo());
}
}
};

yw.dNz=function(afJ)
{
this.adR.style.top=A.bodyScroll(window,"scrollTop")+"px";
this.Or&&this.Or.changeVisualRange(afJ);
this.HE.changeVisualRange(afJ);
};


yw.keydown_=function(ag)
{
var bK=ag.keyCode,
cKz=true;


if(!QMPreviewerTmpl.config.oUseHotKeys[bK])
{
return;
}

switch(bK)
{
case 27:
this.mG();
break;
case 8:
this.dse();
break;
default:
if({Callback:1,"Image":1,Document:1,Compress:1,Other:1}[this.UA])
{
var qu={37:"prev",39:"next"}[bK];
qu?this.alr(qu):(cKz=false);
}
else if(this.Or&&!this.Or.key(bK))
{
cKz=false;
}
}

if(cKz)
{
A.preventDef(ag);
A.stopPropagation(ag);
}
};

A.addEvent(window,"unload",function()
{
yw.dij();
}
);













yw.component("Base",function(aGu)
{

aGu.init=function(aq)
{
if(aq)
{
this.nf=aq.sId=aq.sId+Math.random().toString().substr(5);
this.qj=aq.oEvents||{};
aq.oDomContainer.appendChild(this.dL=A.C('div'));
}
};

aGu.destroy=function()
{
this.bZj();
this.dL.parentNode&&this.dL.parentNode.removeChild(this.dL);
this.dL=this.qj=aR;
};

aGu.update=function(aq)
{
};


aGu.hR=function(ehX)
{
return A.S(this.nf+"_"+ehX);
};

aGu.kc=kc;

aGu.bZj=bZj;

aGu.apW=apW;

aGu.ahg=eiA;
}
);


yw.component("VisualRange",function(afJ,aB)
{

afJ.init=function(aq)
{
aB.init.call(this,aq);
this.Yu=aq.oVisualRange;
};

afJ.destroy=function()
{
aB.destroy.call(this);
this.Yu=aR;
};

afJ.update=function(aq)
{
aB.update.call(this,aq);
this.Yu=aq.oVisualRange;
};

afJ.changeVisualRange=function(afJ)
{
afJ&&(this.Yu=afJ);
};
},
"Base"
);


yw.component("Tip",function(byP,aB)
{

byP.init=function(aq)
{
aB.init.call(this,aq);

this.dL.className="layer_tip";
this.dL.innerHTML=yw.getView("loading",aq);
A.posHide(this.dL);

this.chJ=this.hR("msg");
};

byP.destroy=function()
{
aB.destroy.call(this);
this.chJ=aR;
};

byP.show=function(aA,qK)
{
if(aA=="loading")
{
var gB=qK||"",
Ge=gB.length>14?"...":"";
A.setClass(this.dL,"layer_tip "+(gB?"loading":"onlyloading"));
gB&&(this.chJ.innerHTML=
A.htmlEncode(Ge?gB.substr(0,14-Ge.length):gB)+Ge);
}
else if(aA=="percent")
{
var hs=+qK;
A.setClass(this.dL,"layer_tip "+(hs?"loading":"onlyloading"));
!isNaN(hs)&&(this.chJ.innerHTML=hs+"%");
}
else
{
A.setClass(this.dL,"layer_tip onlymsg");
this.chJ.innerHTML=A.htmlEncode(qK||"");
}

this.fY();
};

byP.hide=function()
{
A.posHide(this.dL);
};

byP.changeVisualRange=function()
{
aB.changeVisualRange.apply(this,arguments);
A.isPosShow(this.dL)&&this.fY();
};


byP.fY=function()
{
var pX=this.Yu;
A.posShow(this.dL,
Math.floor(pX.nLeft+(pX.nWidth-this.dL.clientWidth)/2),
Math.floor(pX.nTop+(pX.nHeight-this.dL.clientHeight)/2)
);
};









},
"VisualRange"
);


yw.component("Viewer",function(sP,aB)
{

sP.init=function(aq)
{
aB.init.call(this,aq);
this.HE=aq.oTip;
this.Kv=aq.oOperator;
this.amT=aq.oFileInfo;
this.hM="init";

this.dQG=(aq||{}).sOssParam;
};

sP.destroy=function()
{
this.uninstall();
aB.destroy.call(this);
this.HE=this.Kv=this.amT=aR;
};

sP.getFileInfo=function()
{
return this.amT;
};

sP.status=function()
{
return this.hM;
};

sP.update=function(aq)
{
aB.update.call(this,aq);
this.HE=aq.oTip;
this.Kv=aq.oOperator;
A.extend(this.amT,aq.oFileInfo);
};

sP.install=function()
{
this.cKH=true;

this.logReset_();
};

sP.uninstall=function()
{
if(this.cKH)
{
this.cKH=false;
this.aMY();

this.log_(2);
}
};

sP.key=function(ado)
{
return false;
};

sP.back=function()
{
return false;
};


sP.log_=function(bRU)
{

if(!this.ded&&this.amT)
{
var gs=this.amT,
bJS=A.extend(
{
stat:"previewer",
from:
{
attach:0,
bigattach:1
}
[gs.sFrom],
type:
{
other:0,
image:1,
"document":2,
music:3,
video:4,
compress:5
}
[this.om],
suffix:(gs.sName||"").split(".").pop()||
gs.sSuffix||"none",
result:bRU,
trans:gs.sHash?1:0
},
this.dQG
);

this.ded=true;
if(!isNaN(bJS.from)&&!isNaN(bJS.type)&&bJS.result>=0&&bJS.result<=2)
{


A.ossLog("delay","all",bJS);
}
}
};

sP.logReset_=function()
{
this.ded=false;
};


sP.aMn=function()
{
return this.ajx()&&this.Kv;
};

sP.eBN=function(apH)
{
return bzp[apH]||bzp["other"];
};




sP.aAO=function(aA,qK)
{
this.HE.show(aA,qK);
};

sP.aMY=function()
{
this.HE.hide();
};

sP.ajx=function()
{
return this.cKH;
};
},
"VisualRange"
);


yw.component("Loader",function(ddp,aB)
{

ddp.install=function()
{
var ae=this;
aB.install.apply(this,arguments);
this.aAO("loading",this.amT.sName);
A.callBack(this.qj.fLoad,
[
this,
function(zH)
{
ae.efS=true;
if(zH)
{
A.extend(ae.getFileInfo(),zH);
A.callBack(ae.qj.fFinish,[ae]);
}
else
{
ae.aAO("err",ae.getFileInfo().sName+" Load failed");
}
}
]
);
};

ddp.uninstall=function()
{
aB.uninstall.apply(this,arguments);
!this.efS&&A.callBack(this.qj.fCancelLoad,[this]);
};
},
"Viewer"
);

yw.eBL=function(sP,dSk)
{
A.callBack(this.qj.fLoadUrl,[sP.getFileInfo(),dSk]);
};

yw.ely=function(sP)
{
if(this.Or==sP)
{
this.bco(this.bmW(sP.getFileInfo()),true);
}
};

yw.eBP=function(sP)
{
A.callBack(this.qj.fCancelLoadUrl,[sP.getFileInfo()]);
};

yw.getView=function(Qv,an)
{
return(QMPreviewerTmpl[Qv]||"").replace(an);
};

yw.getTemplate=function(Qv)
{
return QMPreviewerTmpl[Qv]||"";
};

return yw;
}
)(QMComAdaptar);


(function(A,aR)
{
QMPreviewer.component("Mask",function(buN,aB)
{

buN.init=function(aq)
{
aB.init.call(this,aq);

this.dL.className=aq.bIsLayerLever?"layer_mask":"mask";

this.kc(this.dL,"click");
};

buN.show=function()
{
A.show(this.dL,true);
};

buN.hide=function()
{
A.show(this.dL,false);
};


buN.click_=function(ag)
{
A.callBack(this.qj.fClick);
};
},
"Base"
);

QMPreviewer.component("MaskSkin1",function(buN,aB)
{
buN.show=function()
{
A.show(this.dL,false);
};
},
"Mask"
);
}
)(QMComAdaptar);

(function(A,aR)
{
QMPreviewer.component("Operator",function(vR,aB)
{
var eiu=1500,
etl=0,
cIM=
{
minibar:
{
minimize:false,
close:true
},
navbar:
{
nav:false
},
mainbar:
{
prev:true,
next:true,
breakline:true,
list:false,
send:true,
scan:true,
down:true,
info:false
}
};


vR.init=function(aq,auI)
{
var ae=this;
aB.init.call(ae,aq);

ae.cim={};
ae.cij=ae.cdG={};
ae.cIu=(auI&&auI.oBtnDefCfg)||cIM;
for(var i in ae.cIu)
{
ae.cim[i]={};
ae.cdG[i]=false;
}

ae.dL.style.cssText="position:static;";
ae.dL.innerHTML=QMPreviewer.getView((auI&&auI.sTmpl||"operator"),aq);

ae.bkX=aq.oDomContainer;
ae.saveDom_();

ae.initMenu_(aq);

ae.initEvent_();
aq.bAutoResize!==false&&ae.kc(window,"resize");

ae.calcVisualRange_();
};

vR.destroy=function()
{
var ae=this;
aB.destroy.call(ae);
ae.bbK&&ae.bbK.destroy();
ae.bwi&&ae.bwi.destroy();
ae.aNb&&ae.aNb.destroy();
ae.aFR=ae.bbK=ae.bwi=ae.aNb
ae.bkX=ae.cij=ae.cim=ae.cdG=
ae.apG=ae.cfz=ae.bzl=aR;
};

vR.enable=function(bRF,dzx)
{
var ae=this;
dzx?A.addClass(ae.dL,"allow_mo_hide"):
A.rmClass(ae.dL,"allow_mo_hide");
ae.dxB(bRF===false?
ae.cdG:bRF||{});
ae.dgi();

ae.aFR&&(ae.cij.mainbar===false||
!ae.cim.mainbar[ae.aJg])&&ae.TJ();
return ae;
};

vR.hideBar=function(vL)
{
this.cci();
this.djM(vL===aR?
eiu:vL);
return this;
};

vR.getBtnCfg=function()
{
return this.cij;
};

vR.getVisualRange=function()
{
return this.Yu;
};

vR.setFileList=function(qN)
{
this.bbK.setFileList(qN);
};

vR.selectFile=function(cKj)
{
this.bbK.selectFile(cKj);
};

vR.setFileInfo=function(gE)
{
this.bwi&&this.bwi.setInfo(gE);
};

vR.setTwoDCodeUrl=function(cvL)
{
this.aNb&&this.aNb.setTwoDCodeUrl(cvL);
};

vR.setFileName=function(aS)
{
this.aNb&&this.aNb.setFileName(aS);
};

vR.resize=function()
{
var ae=this;
ae.adjustPos_().calcVisualRange_().resizeMenu_();
A.callBack(ae.qj.fResizeVisualRange,[ae.getVisualRange()]);
return ae;
};

vR.operate=function(ky,cu)
{
A.callBack(this.qj.fClick,[ky,cu]);
return this;
};


vR.saveDom_=function()
{
var ae=this;
A.show(ae.bzl=ae.hR("minibar"),false);
A.show(ae.cfz=ae.hR("navbar"),false);
A.show(ae.apG=ae.hR("mainbar"),false);
};

vR.initMenu_=function(aq)
{
var ae=this,
be=aq.oMenuContainer||aq.oDomContainer;
ae.bbK=ae.apW("Menu.Selector",
{
sId:ae.nf+"_list",
sType:"list",
oDomContainer:be,
oEvents:
{
fClick:A.funcProxy(ae,ae.bEr),
fHide:A.funcProxy(ae,ae.dhe)
}
}
);
ae.bwi=ae.apW("Menu.Info",
{
sId:ae.nf+"_info",
sType:"info",
oDomContainer:be,
oEvents:
{
fClick:A.funcProxy(ae,ae.bEr),
fHide:A.funcProxy(ae,ae.etT)
}
}
);
ae.aNb=ae.apW("Menu.Scan",
{
sId:ae.nf+"_scan",
sType:"scan",
oDomContainer:be,
oEvents:
{
fClick:A.funcProxy(ae,ae.bEr),
fHide:A.funcProxy(ae,ae.dtv)
}
}
);
};

vR.initEvent_=function()
{
this.kc(this.dL,"click|mousedown|mouseup|mouseover|mouseout");
};

vR.adjustPos_=function(bkg)
{
var ae=this;
if(bkg===aR||bkg=="minibar")
{
A.hasClass(this.hR("minimize"),"hidebtn")?
A.rmClass(ae.bzl,"minibar_l"):
A.addClass(ae.bzl,"minibar_l");
};
if(bkg===aR||bkg=="mainbar")
{
this.apG.style.left=(ae.ecN=Math.floor(
(ae.bkX.clientWidth-ae.apG.clientWidth)/2))+"px";
};
return ae;
};

vR.calcVisualRange_=function()
{
var ae=this,
axF=ae.bkX.clientWidth,
aNv=ae.bkX.clientHeight,
dkb=0,


eCu=A.isShow(ae.cfz)?
parseInt(A.getStyle(ae.cfz,"left"))+ae.cfz.clientWidth:
0,
eaT=A.isShow(ae.bzl)?(axF-
(parseInt(A.getStyle(ae.bzl,"right"))||0)-
(parseInt(A.getStyle(ae.bzl,"width"))||0))-10:axF,
dvk=ae.eyy=A.isShow(ae.apG)?(aNv-
(parseInt(A.getStyle(ae.apG,"bottom"))||0)-
ae.apG.clientHeight):aNv,
cxX=Math.max(axF-eaT,eCu);

ae.Yu={
nTop:dkb,
nBottom:dvk,
nLeft:cxX,
nRight:axF-cxX,
nWidth:axF-(cxX*2),
nHeight:dvk-dkb,

nFullTop:0,
nFullBottom:aNv,
nFullLeft:0,
nFullRight:axF,
nFullWidth:axF,
nFullHeight:aNv
};

return ae;
};

vR.showMenu_=function(ky)
{
if(ky==this.aJg)
{
this.TJ();
A.rmClass(this.hR(ky),"select");
}
else if({list:1,info:1,scan:1}[ky])
{
this.TJ();
this.aJg=ky;
this.aFR={list:this.bbK,info:this.bwi,scan:this.aNb}[ky],
A.addClass(this.hR(ky),"select");
this.resizeMenu_();
}
};

vR.resizeMenu_=function()
{
var ae=this;
if(ae.aJg)
{
var aCj=this.hR(ae.aJg);
ae.aFR.show(
ae.ecN+aCj.offsetLeft+aCj.clientWidth/2,
ae.eyy+aCj.offsetTop
);
}
};


vR.dxB=function(aq)
{
var ae=this;
for(var bJu in ae.cIu)
{
var bYZ=aq[bJu],
cBK=ae.cIu[bJu],
dvw=this.hR(bJu);
bYZ===aR&&(bYZ=cBK);

if(bYZ===false)
{
A.show(dvw,false);
}
else
{
var dsB=ae.cim[bJu];
for(var aHj in cBK)
{
var bgE=bYZ[aHj];
bgE===aR&&(bgE=cBK[aHj]);

if(dsB[aHj]!=bgE)
{
var aCj=this.hR(aHj),
jo=A.attr(aCj,"orgcls");

if(!bgE)
{
jo+=" hidebtn";
}
else if(bgE=="disable")
{
jo+=" disable";
}
else if(typeof bgE=="string")
{

aCj.title=bgE;
}

A.setClass(aCj,jo);
dsB[aHj]=bgE;
}
}

A.show(dvw,true);
ae.adjustPos_(bJu);
}
}

ae.calcVisualRange_().cij=aq;
};

vR.bEr=function(ky,cu)
{
switch(ky)
{
case"select":
A.callBack(this.qj.fSelect,[ky,cu]);
break;
case"openurl":
A.callBack(this.qj.fClick,[ky,cu]);
break;
default:
}
};

vR.TJ=function()
{
if(this.aFR)
{
this.aFR.hide();
}
};

vR.dhe=function()
{
var ae=this;
A.rmClass(this.hR("list"),"select");
ae.aJg=ae.aFR=aR;
ae.hideBar();
};

vR.etT=function()
{
var ae=this;
A.rmClass(this.hR("info"),"select");
ae.aJg=ae.aFR=aR;
ae.hideBar();
};

vR.dtv=function()
{
var ae=this;
A.rmClass(this.hR("scan"),"select");
ae.aJg=ae.aFR=aR;
ae.hideBar();
};

vR.dgi=function()
{
A.hasClass(this.apG,"hidebar")&&A.rmClass(this.apG,"hidebar")
}

vR.cci=function()
{
this.showMenu_(this.aJg);
!A.hasClass(this.apG,"hidebar")&&A.addClass(this.apG,"hidebar");
};

vR.djM=function(vL)
{
var ae=this;
ae.dim();
if(!ae.cXo)
{
var nq=typeof vL=="number"?vL:0;
nq?
(ae.Ll=setTimeout(A.funcProxy(ae,ae.cci),vL)):
ae.cci();
}
};

vR.dim=function()
{
if(this.Ll)
{
clearTimeout(this.Ll);
this.Ll=0;
}
};


vR.click_=function(ag)
{
var yp=this.ahg(ag,"opt"),
qu=A.attr(yp,"opt");
if(qu&&!A.hasClass(yp,"disable"))
{
if({list:1,info:1,scan:1}[qu])
{
this.showMenu_(qu);
}
else
{
A.callBack(this.qj.fClick,[qu]);
}
}
};

vR.mousedown_=function(ag)
{
var aak=this.ahg(ag,"opt");
aak&&!A.hasClass(aak,"disable")&&
A.addClass(aak,"mousedown");
};

vR.mouseup_=function(ag)
{
var aak=this.ahg(ag,"opt");
aak&&
A.rmClass(aak,"mousedown");
};

vR.mouseover_=function(ag)
{
var aak=this.ahg(ag,"opt");
if(aak&&!A.hasClass(aak,"mouseover"))
{
!A.hasClass(aak,"disable")&&
!A.hasClass(aak,"select")&&
A.addClass(aak,"mouseover");
}
if((aak=this.ahg(ag,"hide"))==this.apG)
{
this.cXo=true;
this.dim();
this.dgi();
}
};

vR.mouseout_=function(ag)
{
var aak=this.ahg(ag,"opt"),
bNv=A.relatedTarget(ag);
if(aak&&!A.contain(aak,bNv))
{
A.rmClass(aak,"mouseover");
A.rmClass(aak,"mousedown");
}
if(!this.aFR&&
(aak=this.ahg(ag,"hide"))==this.apG&&
!A.contain(aak,bNv))
{
this.cXo=false;
this.djM(etl);
}
};

vR.resize_=function(ag)
{
this.resize();
};
},
"Base"
);

QMPreviewer.component("OperatorSkin1",function(vR,aB)
{
var cIM=
{
mainbar:
{
prev:true,
next:true,
breakline:false,
list:true,
send:false,
scan:true,
down:true,
info:false
}
};

vR.init=function(aq)
{
var ae=this;
aB.init.call(ae,aq,
{
oBtnDefCfg:cIM,
sTmpl:"operator_skin1"
}
);

ae.fgL=false;
};

vR.enable=function(bRF,dzx)
{
var ae=this;
ae.dxB(bRF===false?
ae.cdG:bRF||{});
return ae;
};

vR.setTitle=function(aS)
{
var dpN=this.egl;
dpN.innerHTML=A.htmlEncode(aS);
A.show(dpN,true);
};



vR.saveDom_=function()
{
var ae=this;
A.show(ae.apG=ae.hR("mainbar"),false);
A.show(ae.egl=ae.hR("titletxt"),false);
};

vR.initMenu_=function(aq)
{
var ae=this,
be=aq.oMenuContainer||aq.oDomContainer;













ae.bbK=ae.apW("Menu.Selector.Side",
{
sId:ae.nf+"_list",
sType:"list",
oDomContainer:aq.oDomFrame,
oEvents:
{
fClick:A.funcProxy(ae,ae.bEr),
fHide:A.funcProxy(ae,ae.dhe)
}
}
);
ae.aNb=ae.apW("Menu.ScanSkin1",
{
sId:ae.nf+"_scan",
sType:"scan",
oDomContainer:be,
oEvents:
{
fClick:A.funcProxy(ae,ae.bEr),
fHide:A.funcProxy(ae,ae.dtv)
}
}
);
};

vR.initEvent_=function()
{
this.kc(this.dL,"click");
};

vR.adjustPos_=function(bkg)
{
var ae=this;
if(bkg===aR||bkg=="mainbar")
{
var av=ae.hR("optarea"),
fy,dhk,cTe;

if(dhk=ae.bkX.offsetWidth)
{
av.style.left=0;
cTe=av.offsetWidth;
av.style.left=(dhk-cTe-20)+"px";
}
};
return ae;
};

vR.calcVisualRange_=function()
{
var ae=this,
axF=ae.bkX.clientWidth,
aNv=ae.bkX.clientHeight,
cWk=(ae.apG.clientHeight||parseInt(A.getStyle(ae.apG,"height")))+1;

if(axF&&aNv)
{
ae.Yu={
nTop:cWk,
nBottom:aNv,
nLeft:0,
nRight:axF,
nWidth:axF,
nHeight:aNv-cWk,

nFullTop:0,
nFullBottom:aNv,
nFullLeft:0,
nFullRight:axF,
nFullWidth:axF,
nFullHeight:aNv
};
}

return ae;
};

vR.showMenu_=function(ky)
{
if(ky=="list")
{
this.bbK.show();
}
else if(ky=="scan")
{
this.aJg=ky;
this.aFR=this.aNb;
this.resizeMenu_();
}
};

vR.resizeMenu_=function()
{
var ae=this;
if(ae.aJg=="scan")
{
var aCj=ae.hR(ae.aJg),
epY=ae.hR("optarea"),
ek=ae.aFR;
ek.show(
epY.offsetLeft+aCj.offsetLeft+aCj.offsetWidth/2,
aCj.offsetTop+aCj.offsetHeight+20
);
}
};

vR.cci=function()
{
};
},
"Operator"
);
}
)(QMComAdaptar);


(function(A,aR)
{
QMPreviewer.component("Menu",function(fO,aB)
{

fO.init=function(aq)
{
aB.init.call(this,aq);
this.init_(aq);
};

fO.destroy=function()
{
aB.destroy.call(this);
this.aMC=aR;
};

fO.show=function(aej,Yn)
{
this.bYT=aej;
this.cde=Yn;
this.show_();
};

fO.hide=function()
{
if(A.isPosShow(this.dL))
{
A.posHide(this.dL);
A.callBack(this.qj.fHide);
}
};


fO.init_=function(aq)
{
A.posHide(this.dL);

this.dL.className="opt_menu";
this.dL.innerHTML=QMPreviewer.getView("menu",aq);
this.aMC=this.hR("ctt");

this.kc(this.dL,"click");
};

fO.show_=function()
{
var cds=this.hR("arr");
A.posShow(
this.dL,this.bYT-cds.offsetLeft-cds.offsetWidth/2,
this.cde-cds.offsetHeight-cds.offsetTop
);
};

fO.resize_=function()
{
this.dL.style.width=this.aMC.scrollWidth+"px";
this.dL.style.height=this.hR("bg").style.height =this.aMC.scrollHeight+"px";
A.isPosShow(this.dL)&&this.show_();
};


fO.aFq=function(cL)
{
this.aMC.innerHTML=cL;
this.resize_();
};


fO.click_=function(ag,fU)
{
var yp=fU||this.ahg(ag,"opt"),
qu=A.attr(yp,"opt");
switch(qu)
{
case"menu_hide":
this.hide();
break;
}
A.stopPropagation(ag);
};
},
"Base"
);
}
)(QMComAdaptar);


(function(A,aR)
{
QMPreviewer.component("Menu.Info",function(fO,aB)
{

fO.show=function()
{
this.bzV();
aB.show.apply(this,arguments);
};

fO.destroy=function()
{
aB.destroy.call(this);
this.LH=aR;
};

fO.setInfo=function(gE)
{
if(gE!=this.LH)
{
this.LH=gE;
this.dai=true;
A.isPosShow(this.dL)&&this.bzV();
}
};


fO.bzV=function()
{
if(this.dai)
{
this.aFq(QMPreviewer.getView("menuinfo",
{
sId:this.nf,
oInfo:this.LH,
oJs:A
}
));
this.dai=false;
}
};


fO.click_=function(ag)
{
var yp=this.ahg(ag,"opt"),
qu=A.attr(yp,"opt");
if(qu=="menu_openurl")
{
A.callBack(this.qj.fClick,["openurl"]);
this.hide();
}
aB.click_.call(this,ag,yp);
};
},
"Menu"
);
}
)(QMComAdaptar);


(function(A,aR)
{
QMPreviewer.component("Menu.Scan",function(fO,aB)
{

fO.init=function(aq)
{
aB.init.call(this,aq);
this.bDK=false;
this.bAB=false;
};

fO.show=function()
{
this.bzV();
aB.show.apply(this,arguments);
};

fO.destroy=function()
{
aB.destroy.call(this);
};

fO.setTwoDCodeUrl=function(cvL)
{
this.dvN=cvL;
this.bAB=true;
};

fO.setFileName=function(aS)
{
this.ceo=aS;
};


fO.bzV=function()
{
if(this.bAB||!this.bDK)
{
this.aFq(QMPreviewer.getView("menuscan",
{
sId:this.nf,
src:this.dvN,
name:this.ceo,
oJs:A
}
));
this.bDK=true;
this.bAB=false;
}
};


fO.resize_=function()
{
this.dL.style.width="320px";
this.dL.style.height=this.hR("bg").style.height =this.aMC.scrollHeight+"px";
A.isPosShow(this.bEW)&&this.show_();
};

fO.click_=function(ag)
{
var yp=this.ahg(ag,"opt");
aB.click_.call(this,ag,yp);
};
},
"Menu"
);

QMPreviewer.component("Menu.ScanSkin1",function(fO,aB)
{
fO.init_=function(aq)
{
A.posHide(this.dL);

this.dL.className="menu_scan_skin1";
this.dL.innerHTML=QMPreviewer.getView("menuskin1",aq);
this.aMC=this.hR("ctt");
this.bEW=this.hR("ct");
this.bDK=false;
this.bAB=false;

this.kc(this.dL,"click");
};

fO.show=function(aej,Yn)
{
this.bzV();
aej-=this.hR("ctt").offsetWidth/2;
this.bEW.style.top=Yn+"px";
this.bEW.style.left=aej+"px";
aB.show.call(this);

};


fO.bzV=function()
{
if(this.bAB||!this.bDK)
{
this.aFq(QMPreviewer.getView("menuscanskin1",
{
sId:this.nf,
src:this.dvN,
name:this.ceo,
oJs:A
}
));
this.bDK=true;
this.bAB=false;
}
};

fO.resize_=function()
{
debug("resize");
this.bEW.style.width="250px";
this.bEW.style.height=this.hR("bg").style.height =(this.aMC.scrollHeight+10)+"px";

};
},
"Menu.Scan"
);
}
)(QMComAdaptar);


(function(A,aR)
{
QMPreviewer.component("Menu.Selector",function(fO,aB)
{
var cMl=6;


fO.show=function()
{
this.select_();
aB.show.apply(this,arguments);
};

fO.setFileList=function(qN)
{
var btA=[];
this.Vw=-1;
this.buP=Math.floor((qN.length-1)/cMl)+1;
for(var i=0,aF=this.buP;i<aF;i++)
{
btA[i]=i+1;
}
this.aFq(QMPreviewer.getView("menuselector",
{
sId:this.nf,
oList:qN,
nItemPerPage:cMl,
oPage:btA,
oJs:A
}
));
this.azR(0);
};

fO.selectFile=function(bkw)
{
this.cwB=bkw;
A.isPosShow(this.dL)&&this.select_();
};


fO.select_=function(bkw)
{
var aRz=bkw||this.cwB;
if(this.bJk!=aRz)
{
A.rmClass(this.hR("item"+(this.bJk||0)),"select")
A.addClass(this.hR("item"+(this.bJk=aRz)),"select");

this.azR(Math.floor(aRz/cMl));
}
};


fO.azR=function(ez)
{
if(ez!=this.Vw&&ez>-1&&ez<this.buP)
{
if(this.Vw>-1)
{
A.show(this.hR("list"+this.Vw),false);
A.rmClass(this.hR("page"+this.Vw),"select");
}

A.show(this.hR("list"+(this.Vw=ez)),true);
A.addClass(this.hR("page"+this.Vw),"select");

ez==0?A.addClass(this.hR("prev"),"disable"):
A.rmClass(this.hR("prev"),"disable");
ez+1==this.buP?A.addClass(this.hR("next"),"disable"):
A.rmClass(this.hR("next"),"disable");
}
};


fO.click_=function(ag)
{
var yp=this.ahg(ag,"opt"),
qu=A.attr(yp,"opt");

switch(qu)
{
case"menu_select":
var aRz=parseInt(A.attr(yp,"sel"));
this.select_(aRz,true);
A.callBack(this.qj.fClick,["select",aRz]);
break;
case"menu_page":
this.azR(parseInt(A.attr(yp,"page")));
break;
case"menu_prev":
this.azR(this.Vw-1);
break;
case"menu_next":
this.azR(this.Vw+1);
break;
}
aB.click_.call(this,ag,yp);
};
},
"Menu"
);

QMPreviewer.component("Menu.Selector.Side",function(fO,aB)
{

fO.init_=function(aq)
{
A.show(this.dL,false);

this.dL.className="menu_side";
this.dL.innerHTML=QMPreviewer.getView("menuside",aq);
this.aMC=this.hR("ctt");

this.kc(this.dL,"click");
};

fO.show=function(aej,Yn)
{
this.select_();
A.show(this.dL,true);
var elG=this.aMC;
setTimeout(function()
{
elG.style.right=0;
}
);
};

fO.hide=function()
{
var av=this.dL;
this.aMC.style.cssText="";
setTimeout(function()
{
A.show(av,false);
},
A.isBrowser("ie")?0:500
);
};

fO.setFileList=function(qN)
{
this.aFq(QMPreviewer.getView("menusideselector",
{
sId:this.nf,
oList:qN,
oJs:A
}
));
};

fO.selectFile=function(bkw)
{
this.cwB=bkw;
A.isShow(this.dL)&&this.select_();
};

fO.select_=function(bkw,eyJ)
{
var aRz=bkw||this.cwB;
if(this.bJk!=aRz)
{
A.rmClass(this.hR("item"+(this.bJk||0)),"select")
A.addClass(this.hR("item"+(this.bJk=aRz)),"select");
}
eyJ&&this.hide();
};

fO.resize_=function()
{
};
},
"Menu.Selector"
);
}
)(QMComAdaptar);


(function(A,aR)
{
QMPreviewer.component("Classifier",function(axD,aB)
{

axD.init=function(aq)
{
aB.init.call(this,aq);


this.dL.className="classifier";
this.dL.innerHTML=QMPreviewer.getView("classifier",aq);
this.kc(this.dL,"click|mouseover|mouseout");
};

axD.destroy=function()
{
aB.destroy.call(this);

};

axD.install=function()
{
if(!this.ajx())
{
aB.install.apply(this,arguments);
}
};

axD.uninstall=function()
{
if(this.ajx())
{
aB.uninstall.apply(this,arguments);
}
};

axD.changeVisualRange=function()
{
aB.changeVisualRange.apply(this,arguments);

};
axD.key=function(ado)
{
var dK=this.eww();
switch(ado)
{
case 37:
case 39:
this.djt(dK+(ado==37?-1:1));
break;
case 38:
case 40:
this.djt(dK<0?0:dK>2?dK-3:
Math.min(A.$("li",this.dL).length-1,dK+3));
break;
case 13:
this.aKP(A.$("li",this.dL)[Math.max(0,dK)]);
break;
default:
return false;
}
return true;
};

axD.dje=function()
{
var aFU=A.$("li",this.dL);
for(var i=0,l=aFU.length;i<l;i++)
{
if(A.hasClass(aFU[i],"mutil_hover"))
{
A.rmClass(aFU[i],"mutil_hover")
}
}
};

axD.eww=function()
{
var aFU=A.$("li",this.dL),
dsf=-1;
for(var i=0,l=aFU.length;i<l;i++)
{
if(A.hasClass(aFU[i],"mutil_hover"))
{
dsf=i;
break;
}
}
return dsf;
};
axD.djt=function(fm)
{
var aFU=A.$("li",this.dL);
this.dje();

if(aFU.length)
{
if(fm+1>aFU.length)
{
fm=0
}
else if(fm<0)
{
fm=aFU.length-1;
}
A.addClass(aFU[fm],"mutil_hover")
}
};
axD.aKP=function(as)
{
var qu=A.attr(as,"opt");
qu&&A.callBack(this.qj.fClick,
[qu,qu=="chooseMod"&&A.attr(as,"sel")]);
};


axD.click_=function(ag)
{
var yp=this.ahg(ag,"opt");
this.aKP(yp);
};
axD.mouseover_=function(ag)
{
var yp=this.ahg(ag,"hover"),
jo=A.attr(yp,"hover");
this.dje();

yp&&!A.hasClass(yp,jo)
&&A.addClass(yp,jo);
};
axD.mouseout_=function(ag)
{
var yp=this.ahg(ag,"hover"),
jo=A.attr(yp,"hover");
yp&&A.hasClass(yp,jo)
&&A.rmClass(yp,jo);
};


;},
"Viewer"
);
}
)(QMComAdaptar);


(function(A,aR)
{
QMPreviewer.component("Document",function(fJ,aB)
{
var cKZ=false;


fJ.init=function(aq)
{
var ae=this;
aB.init.call(ae,aq);

A.posHide(ae.dL);
ae.dL.className="layer_doc";
ae.dL.innerHTML=QMPreviewer.getView("doc",aq);
ae.bvK=ae.hR("doc_container");
ae.bnL=ae.hR("doc_title");
ae.auj=ae.hR("doc_view");
ae.dxY=ae.hR("doc_err");
ae.drQ=ae.hR("doc_err_default");
ae.duI=ae.hR("doc_err_notexist");

ae.om="document";

ae.kc(ae.hR("doc_view"),"error|load");
ae.kc(ae.bvK,"click");


ae.amT.bIsTimeout==1&&ae.cif(true);
};

fJ.destroy=function()
{
aB.destroy.call(this);
this.dxY=this.auj=this.bnL=this.bvK=this.drQ=this.duI=aR;
};

fJ.install=function()
{
if(!this.ajx())
{
aB.install.call(this);
this.cLK&&this.aMn().hideBar();
this.fY();
this.dyj();
this.checkScrolling_();
}
};

fJ.uninstall=function()
{
if(this.ajx())
{
aB.uninstall.call(this);
this.nG();
}
};

fJ.changeVisualRange=function(afJ)
{
aB.changeVisualRange.call(this,afJ);
this.resize_();
};


fJ.resize_=function()
{
var pX=this.Yu;
if(pX)
{
var afG=0,
Ge=this.amT.sSuffix||(this.amT.sName||"".split(".").pop()),
diU=pX.nFullHeight-afG-pX.nFullTop,
cxf=(cKZ||{xls:1,xlsx:1,ppt:1,pptx:1}[Ge])?(this.bnL?this.bnL.clientHeight:0):0,
dpJ={xls:1024,xlsx:1024,pdf:960,ppt:990,pptx:990}[Ge]||840,
dp=(pX.nFullWidth<dpJ+afG?
pX.nFullWidth:dpJ)-afG;

this.bvK.style.height=diU+"px";
this.dL.style.padding=(afG/2)+"px";
this.dL.style.top=pX.nFullTop+"px";

this.dL.style.width=dp+"px"
this.dL.style.left=pX.nLeft+
(pX.nWidth-dp-afG)/2+"px";

this.auj.style.top=(cxf+2)+"px";
this.auj.style.height=(diU-cxf)+"px";
}
};

fJ.checkScrolling_=function()
{
};


fJ.fY=function(aA)
{
A.show(this.bvK,true);
A.posShow(this.dL);
this.resize_();
};

fJ.cif=function(ekQ)
{
var ae=this;
A.show(ae.dxY,ekQ);
if(ae.amT.bIsTimeout==1)
{
A.show(ae.drQ,false);
A.show(ae.duI,true);
}
};

fJ.dyj=function()
{
try
{
var aT=this.auj&&this.auj.contentWindow&&
this.auj.contentWindow.document;

if(aT&&aT.body.childNodes.length>0)
{
var dg=this.auj.contentWindow.document.childNodes[0],
dxS=dg&&dg.nodeName=="#comment"&&
dg.data.toLowerCase().indexOf("exception")>-1;

this.cif(dxS);

this.log_(dxS?0:1);

this.cLK&&this.bnL
&&(this.bnL.style.color="#000");
}
}
catch(e)
{

if(this.cLK)
{
this.log_(0);
}
}
};

fJ.nG=function()
{
A.show(this.bvK,false);
A.posHide(this.dL);
};


fJ.error_=function()
{
this.ajx()&&this.cif(true);
};

fJ.load_=function()
{
var ae=this;
this.cLK=true;
this.hM="loaded";

if(this.ajx())
{
this.aMn().hideBar();
this.dyj();
}
};
fJ.click_=function(ag)
{
var yp=this.ahg(ag,"opt"),
qu=A.attr(yp,"opt");

if(qu=="retry")
{

this.logReset_();

this.hM="loading";
A.hasClass(this.auj,"doc_finish")
&&A.rmClass(this.auj,"doc_finish");
this.auj.src=this.auj.src;
this.cif(false);
}
else if(qu=="down")
{
this.hR("doc_down").src=A.attr(yp,"href");
}
};
},
"Viewer"
);

QMPreviewer.component("DocumentSkin1",function(fJ,aB)
{
var cKZ=false;
fJ.init=function(aq)
{
var ae=this;
aB.init.call(ae,aq);

ae.diy=aq.oDomContainer;
};

fJ.uninstall=function()
{
var ae=this;
if(ae.ajx())
{
ae.Ll&&clearInterval(ae.Ll);
ae.Ll=aR;
ae.cLV=0;
aB.uninstall.call(ae);

ae.diy.onscroll=null;
}
};

fJ.load_=function()
{
var ae=this;
aB.load_.call(ae);

A.browserVer()==6&&setTimeout(function(){ae.dL.style.zoom=1;},100);

ae.diy.onscroll=function()
{
var cTo=ae.auj.contentWindow;
cTo.doScrollEvt&&cTo.doScrollEvt();
}
};

fJ.resize_=function()
{
var ae=this,
pX=ae.Yu;

if(pX)
{
var Ge=ae.amT.sName.split(".").pop(),
cxf=(cKZ||{xls:1,xlsx:1,ppt:1,pptx:1}[Ge])?
(ae.bnL?ae.bnL.clientHeight:0):0;


ae.djA();
ae.dL.style.top=pX.nTop+"px";

ae.dL.style.width="100%";
ae.dL.style.left=pX.nLeft+"px";

try
{



}
catch(e)
{
}



}
};

fJ.checkScrolling_=function()
{
var ae=this;
if(!ae.Ll)
{
ae.Ll=setInterval(function()
{
ae.djA();
},
100
);
}
};

fJ.djA=function()
{
var ae=this;

if(ae.Yu)
{
var cX=0,
ccS,
aDn,
gC,
anM;
try
{
aDn=ae.auj.contentWindow,
gC=aDn.document.documentElement,
anM=aDn.document.body;
if(!A.S("xlsContainer",aDn)&&
!A.S("slideGuide",aDn))
{
cX=aDn.getHeight?aDn.getHeight():
A.bodyScroll(aDn.document,"scrollHeight");
}
}
catch(e)
{

}

!(ccS=!(ae.Yu.nHeight>=cX))&&
(cX=ae.Yu.nHeight);


if(ae.cLV!=cX)
{
ae.bvK.style.height=(ae.cLV=cX)+"px";
anM&&(anM.style.overflowY=ccS?"hidden":"auto");


if(A.browserVer()==6)
{

ccS&&(gC.style.overflowY="hidden");
if(A.S("xlsContainer",aDn)||A.S("slideGuide",aDn))
{
ae.auj.style.height=ae.cLV+"px";
}
}
}


if(ccS&&anM&&aDn.loadMorePage&&
ae.apw!=QMPreviewer.getFrameInfo_("scrollTop"))
{
(ae.apw=QMPreviewer.getFrameInfo_("scrollTop"))+
ae.Yu.nFullHeight>
QMPreviewer.getFrameInfo_("scrollHeight")-100&&aDn.loadMorePage();
}
}
};
},
"Document"
);
}
)(QMComAdaptar);

(function(A,aR)
{
QMPreviewer.component("Compress",function(IF,aB)
{

IF.init=function(aq,auI)
{
var ae=this;
aB.init.call(ae,aq);
ae.bTY=(auI&&auI.oTmpl)||{};

show(ae.dL,false);
A.setClass(ae.dL,"layer_cps");
ae.dL.innerHTML=QMPreviewer.getView(ae.bTY.sFrame||"compressframe",aq);

ae.om="compress";
ae.Ju=[];
ae.cdj=aq.oDomContainer;
ae.aDi=ae.apW("Operator",
{
sId:ae.nf+"_navopt",
oDomContainer:ae.cdj,
bAutoResize:false,
oEvents:
{
fClick:A.funcProxy(ae,ae.alr),
fResizeVisualRange:A.funcProxy(ae,ae.eoh)
}
}
);

ae.kc(ae.dL,"click");
};

IF.destroy=function()
{
aB.destroy.call(this);
this.aDi.destroy();
this.aDi=this.bwz=this.Ju=
this.cdj=aR;
};

IF.install=function()
{
if(!this.ajx())
{
aB.install.apply(this,arguments);
this.resize_();
A.show(this.dL,true);
this.bjB(this.amT);
}
};

IF.uninstall=function()
{
if(this.ajx())
{
clearInterval(this.Ll);
this.cFe=false;
this.uninstallFileViewer_();
this.Ju=[];
A.show(this.dL,false);
aB.uninstall.apply(this,arguments);
}
};

IF.changeVisualRange=function()
{
aB.changeVisualRange.apply(this,arguments);
A.isShow(this.dL)&&this.resize_();
this.ajx()&&this.aDi.resize();
};

IF.back=function()
{
if(this.aoI)
{
!this.aoI.back()&&this.uninstallFileViewer_();
return true;
}
else if(this.Ju.length>1)
{
this.esd();
return true;
}

return aB.back.apply(this,arguments);
};

IF.minimize=function()
{
this.aoI&&this.aoI.minimize&&this.aoI.minimize();
};



IF.resize_=function()
{
var pX=this.Yu;
if(pX)
{
var dp=(pX.nWidth<840?pX.nWidth:840);

this.dL.style.top=pX.nFullTop;
this.dL.style.height=pX.nFullHeight+"px";
this.dL.style.width=dp+"px"
this.dL.style.left=pX.nLeft+
(pX.nWidth-dp)/2+"px";
}
};

IF.installFileViewer_=function(sP)
{
var gs=sP.getFileInfo();
this.uninstallFileViewer_();
this.eji();
this.aDi.enable(
{
navbar:
{
nav:this.Ju[this.Ju.length-1].sName
},
minibar:
{
minimize:gs.sType=="music"
},
mainbar:
{
next:false,
prev:false,
breakline:false,
list:false,
send:false,
scan:false,
info:false
}
},
{doc:true}[gs.sType]
);

this.aoI=sP;
this.aDi.resize();
this.aDi.setFileInfo(A.extend(
{sName:gs.sName},gs.oInfo));
this.aoI.install();
show(this.dL,false);
};

IF.uninstallFileViewer_=function()
{
if(this.aoI)
{
show(this.dL,true);
this.dSZ();
this.aDi.enable(false);
this.aoI.destroy();
this.aoI=aR;
}
};

IF.drawTitle_=function()
{
if(this.Ju.length<2)
{
A.rmClass(this.dL,"cps_shownav");
}
else
{
A.addClass(this.dL,"cps_shownav");
this.hR("navtxt").innerHTML=A.htmlEncode(this.Ju[this.Ju.length-2].sName);
}

this.hR("title").innerHTML=A.htmlEncode(this.Ju[this.Ju.length-1].sName);
};



IF.eoh=function(fOG)
{
this.aoI&&this.aoI.changeVisualRange(this.aDi.getVisualRange());
};

IF.drZ=function(dVO)
{
var ae=this;
if(dVO===false)
{
clearInterval(ae.Ll);

if(ae.cJf<100)
{
ae.Ll=setInterval(function()
{
if(ae.cJf>99)
{
clearInterval(ae.Ll);
ae.aMY();
}
else
{
ae.aAO("percent",++ae.cJf);
}
},10);
}
}
else if(this.amT.sBytesize)
{
var gb=+new Date(),gZ=+this.amT.sBytesize/((200*1024*1024)/(30*1000));
ae.aAO("percent",0);
this.Ll=setInterval(function()
{
ae.aAO("percent",ae.cJf=Math.min(99,Math.floor((+new Date()-gb)/gZ*100)));
},200);
}
};

IF.qk=function(bz,aCh)
{
var tM=bz&&A.parseJson(aCh),
aD=this.Ju[this.Ju.length-1];

tM&&tM.oContent&&(aD.oContent=tM.oContent);
this.cvl();


this.aMY();
this.drZ(false);
};

IF.cvl=function(dE)
{
this.hR("ctt").innerHTML=dE=="clear"?"":
QMPreviewer.getView(this.bTY.sContent||"compresscontent",A.extend({oJs:A},this.Ju[this.Ju.length-1]));

if(dE!="clear")
{
if(this.cFe)
{
if(this.Ju[this.Ju.length-1].oContent)
{
this.hM="loaded";
this.cFe=false;
this.aMn().hideBar();

this.log_(1);
}
else
{

this.log_(0);
}
}

this.eoK();
}
};

IF.eoK=function()
{
var cZV=this.dL,
DX=0,
dK=0;
A.E(A.SN("preview_unloaded_img"),function(Zr,tn,eai)
{
A.contain(cZV,Zr)
&&A.attr(Zr,"tmpsrc")
&&setTimeout(
function()
{
var Zx=A.attr(Zr,"tmpsrc");
if(Zx)
{
Zr.src=Zx;
Zr.removeAttribute("tmpsrc");
}
Zr=Zx=aR;
},

(DX=DX+(dK++==0?2000:(dK>4?100:500)))
);

eai-1==tn
&&(cZV=aR);
}
);
};

IF.cWD=function()
{
var cpU=this.Ju[this.Ju.length-1];
this.drawTitle_();
if(!cpU.oContent)
{
this.aAO("loading");
this.cvl("clear");
this.drZ(true);
A.get(cpU.sUrl,
{
bGlobal:true,
nTimeout:120000,
oncomplete:A.funcProxy(this,this.qk)
}
);
}
else
{
this.cvl();
}
};

IF.bjB=function(bYr)
{
this.Ju.length==0&&(this.cFe=true);
this.Ju.push(bYr);
this.cWD();
};

IF.esd=function()
{
this.Ju.pop();
this.cWD();
};

IF.dYA=function(zH)
{
var diS=this.eBN(zH.sUrl?zH.sType:"other");

if(zH.sType=="doc"&&zH.sUrl)
{
var cB={
redirect:true,
t:"attachments_content",
s:"yozo",
fromattach:"1"
},
jh=new RegExp("(.*)(&curfile=)(.*?)\\&","gi");
jh.test(zH.sUrl)
&&(cB.filename=RegExp.$3);
zH.sUrl=A.cookQueryString(zH.sUrl,cB);

}
this.installFileViewer_(this.apW(diS,
{
sId:this.nf+"_"+diS,
oTip:this.HE,
oOperator:this.aDi,
oDomContainer:this.cdj,
oVisualRange:this.Yu,
oFileInfo:zH
}
));
};

IF.eji=function()
{
if(!this.bwz)
{
this.bwz=this.aMn().getBtnCfg();
}

this.aMn().enable(false);
};

IF.dSZ=function()
{
if(this.bwz)
{
this.aMn().enable(this.bwz,true).resize().hideBar();
}
};

IF.alr=function(ky,cu)
{
switch(ky)
{
case"back":
this.back();
break;
case"close":
case"minimize":
case"down":
this.aMn().operate(ky,cu||this.aoI.getFileInfo());
break;
}
};


IF.click_=function(ag)
{
var bBt=this.ahg(ag,"opt");
switch(bBt&&A.attr(bBt,"opt"))
{
case"cps_read":
var cef=this.Ju[this.Ju.length-1].oContent[A.attr(bBt,"idx")];
cef&&cef.sType=="dir"?this.bjB(cef):this.dYA(cef);
break;
case"cps_back":
this.back();
break;
}
};
},
"Viewer"
);

QMPreviewer.component("CompressSkin1",function(IF,aB)
{
IF.init=function(aq)
{
aB.init.call(this,aq,{oTmpl:{sFrame:"compressframe_skin1"}});

this.bQb=this.apW("Mask",
{
sId:this.nf+"_cpsmask",
oDomContainer:this.cdj,
bIsLayerLever:true,
oEvents:
{
fClick:A.funcProxy(this,this.back)
}
}
);
this.bQb.hide();
};

IF.destroy=function()
{
this.bQb.destroy();
this.bQb=aR;
aB.destroy.call(this);
};

IF.resize_=function()
{
var pX=this.Yu;
if(pX)
{
this.dL.style.top=pX.nTop+"px";
this.dL.style.height=pX.nHeight+"px";
this.dL.style.width=pX.nWidth+"px";
this.dL.style.left=pX.nLeft+"px";
}
};

IF.installFileViewer_=function(sP)
{
var gs=sP.getFileInfo();
this.uninstallFileViewer_();

this.aDi.enable(
{
navbar:
{
nav:this.Ju[this.Ju.length-1].sName
},
minibar:false,
mainbar:
{
next:false,
prev:false,
breakline:false,
list:false,
send:false,
scan:false,
info:false
}
},
{doc:true}[gs.sType]
);

this.aoI=sP;
this.aDi.resize();
this.aDi.setFileInfo(A.extend(
{sName:gs.sName},gs.oInfo));
this.bQb.show();
this.aoI.install();
};

IF.uninstallFileViewer_=function()
{
if(this.aoI)
{
this.bQb.hide();
}
aB.uninstallFileViewer_.call(this);
};

IF.drawTitle_=function()
{
if(this.Ju.length<2)
{
A.rmClass(this.dL,"cps_shownav");
}
else
{
A.addClass(this.dL,"cps_shownav");
this.hR("navtxt").innerHTML=A.htmlEncode(this.Ju[this.Ju.length-2].sName);
}

this.hR("title").innerHTML=A.htmlEncode(this.Ju[this.Ju.length-1].sName);
};
},
"Compress"
);
}
)(QMComAdaptar);

(function(A,aR)
{
QMPreviewer.component("Image",function(wd,aB)
{

wd.init=function(aq,auI)
{
var ae=this,
aXO=parseInt(aq.oFileInfo.sWidth)||0,
bgL=parseInt(aq.oFileInfo.sHeight)||0;

aB.init.call(ae,aq);

A.posHide(ae.dL);
ae.dL.className="layer_img";
ae.dL.innerHTML=QMPreviewer.getView((auI&&auI.sTmpl||"img"),aq);

ae.om="image";
ae.dlR=isNaN((auI||{}).nRangeDelta)?40:auI.nRangeDelta;
ae.cYc=isNaN((auI||{}).nRangeDef)?20:auI.nRangeDef;

aq.oDomContainer.appendChild(ae.aux=ae.hR("bar"));
ae.cTx=ae.hR("err_notexist");

A.posHide(ae.bSh=ae.hR("load"));
A.posHide(ae.bPe=ae.hR("fail"));
A.posHide(ae.csZ=ae.hR("img"));
A.posHide(ae.cHI=ae.hR("thumb"));

aXO&&bgL&&(ae.dsD={nWidth:aXO,nHeight:bgL});
ae.axs=false;

ae.kc(ae.dL,"mouseover|mouseout|mousedown|mousemove|dblclick");
ae.kc(ae.aux,"click|mousemove|mouseout");
};


wd.destroy=function()
{
aB.destroy.call(this);
this.aux.parentNode.removeChild(this.aux);
this.bza=this.cVU=this.cTx=
this.aux=this.bEp=this.bSh=this.bPe=
this.cHI=this.csZ=aR;
};

wd.install=function()
{
if(!this.ajx())
{
aB.install.apply(this,arguments);
this.cEJ=-1;

if(!this.cwE(this.bys()))
{
this.beC();
this.ecv();
}
}
};

wd.uninstall=function()
{
if(this.ajx())
{
this.YO(false);
this.bux(true);
this.dpl();

this.dL.nAngle&&!(this.bEO=false)&&
this.FX(this.dL,-1*this.dL.nAngle);

this.cDl=false;
A.rmClass(this.dL,"layer_img_ts");

A.posHide(this.dL);
aB.uninstall.apply(this,arguments);
}
};

wd.back=function()
{
if(this.axs)
{
this.cyf();
return true;
}

return aB.back.apply(this,arguments);
};

wd.changeVisualRange=function(afJ)
{
aB.changeVisualRange.call(this,afJ);
!this.axs&&A.isPosShow(this.dL)&&
!this.cwE(this.bys())&&this.beC();
};


wd.showLoadTip_=function(cQ)
{
this.aAO("loading",cQ);
};


wd.bys=function()
{
var dsJ=this.dmk(this.csZ);

if(dsJ)
{
return dsJ;
}
if(this.dsD&&this.dOr(this.cHI))
{
return this.dsD;
}
};

wd.dpl=function()
{
if(this.Ll)
{
clearInterval(this.Ll);
this.Ll=0;
}
};

wd.ecv=function()
{
var ae=this;
this.Ll=setInterval(function()
{
ae.cwE(ae.bys())&&ae.dpl();
},
300
);
};

wd.fY=function(bQB,bRA)
{
var pX=this.Yu,
aVL=this.czD(),
fy=Math.floor(pX.nLeft+(pX.nWidth-bQB-aVL)/2),
cz=Math.floor(pX.nTop+(pX.nHeight-bRA-aVL)/2);

this.dL.style.width=bQB+"px";
this.dL.style.height=bRA+"px";

this.cDl&&A.addClass(this.dL,"layer_img_ts");

if(!this.axs)
{
var cgq=!this.bEO;
asQ=pX.nFullHeight-(cgq?cz:
Math.floor(pX.nTop+(pX.nHeight-bQB-aVL)/2))-
(cgq?bRA:bQB)-(aVL/2);
this.aux.style.width=(cgq?bQB:bRA)+"px";
this.aux.style.left=(cgq?fy:
Math.floor(pX.nLeft+(pX.nWidth-bRA-aVL)/2))+
(aVL/2)+"px";
this.aux.style.bottom=(asQ>0?asQ:0)+"px";
}
else
{
this.aux.style.cssText="";
}

A.posShow(this.dL,fy,cz);
};

wd.beC=function()
{
A.posHide(this.bEp);
A.posShow(this.bEp=this.bSh);
A.isShow(this.bSh)&&this.fY(
parseInt(A.getStyle(this.bSh,"width")),
parseInt(A.getStyle(this.bSh,"height"))
);
this.showLoadTip_(this.amT.sName);
};

wd.ebb=function()
{
var ae=this;
A.posHide(ae.bEp);
A.posShow(ae.bEp=ae.bPe);
A.isShow(ae.bPe)&&ae.fY(
parseInt(A.getStyle(ae.bPe,"width")),
parseInt(A.getStyle(ae.bPe,"height"))
);
ae.aMY();

if(ae.amT.bIsTimeout==1)
{
A.show(ae.cTx,true);
}
};

wd.bTX=function(aHF)
{
A.posHide(this.bEp);
A.addClass(this.dL,"img_show");
 A.posShow(this.cHI);
A.posShow(this.csZ);
this.cuK(aHF);
this.aMY();

this.cDl=true;
};

wd.cwE=function(aHF)
{
if(aHF)
{
if(aHF.nWidth>0)
{
this.hM="loaded";
this.bTX(aHF);

this.log_(1);
}
else
{
this.ebb();

this.log_(0);
}
return true;
}
};

wd.cuK=function(aHF)
{
var aVL=this.czD(),
pX=this.Yu,
dxX=(pX.nWidth-this.dlR-aVL)||
this.cYc,
ddc=(pX.nHeight-this.dlR-aVL)||
this.cYc,
cSG=this.bEO?ddc:dxX,
dfB=this.bEO?dxX:ddc,
bRN=aHF.nWidth,
bRV=aHF.nHeight,
cxd=bRN/cSG,
csY=bRV/dfB;

if(cxd>1||csY>1)
{
if(cxd>csY)
{
bRN=cSG;
bRV=Math.floor(bRV/cxd);
}
else
{
bRN=Math.floor(bRN/csY);
bRV=dfB;
}
A.show(this.hR("zoombtn"),true);
}
else
{
A.show(this.hR("zoombtn"),false);
}

this.fY(bRN,bRV);
};

wd.elu=function(aHF)
{
this.fY(aHF.nWidth,aHF.nHeight);
};

wd.czD=function()
{
return 2*(parseInt(A.getStyle(this.dL,"borderTopWidth"))||0);
};

wd.dmk=function(Zr)
{
if(A.attr(Zr,"err"))
{
return{nWidth:-1,nHeight:-1};
}
else if(Zr)
{
var aXO=Zr.naturalWidth||Zr.width,
bgL=Zr.naturalHeight||Zr.height;

if(A.attr(Zr,"loaded")||Math.min(aXO,bgL)>100)
{
if(!Zr.naturalWidth)
{
Zr.naturalWidth=aXO;
Zr.naturalHeight=bgL;
}
return{nWidth:aXO,nHeight:bgL};
}
}
};

wd.dOr=function(Zr)
{
return A.attr(Zr,"loaded")||(this.dmk(Zr)||{}).nWidth>0;
};

wd.cyf=function()
{
this.YO(!this.axs);
};

wd.YO=function(dzq)
{
if(dzq!=this.axs)
{
var cfy=this.hR("zoombtn");
if(this.axs=dzq)
{
A.addClass(this.dL,"move");
this.bwz=this.aMn().getBtnCfg();
this.aMn().enable(false);
this.elu(this.bys());

A.addClass(cfy,A.attr(cfy,"zs_cls"));


this.bux(true);
setTimeout(A.funcProxy(this,this.bUD));
}
else
{
this.dfp=+new Date;
this.bux(true);
A.rmClass(this.dL,"move");
this.aMn().enable(this.bwz).resize();
this.cuK(this.bys());

A.rmClass(cfy,A.attr(cfy,"zs_cls"));

}
}
};

wd.bUD=function(cEo)
{

this.cbl();
this.cDl&&this.aux&&
A.setClass(this.aux,"img_bar"+
(this.axs?" zoom_mode":"")+
(cEo===true?" no_ts":""));
};

wd.bux=function(cEo)
{
this.cbl();
this.aux&&
A.setClass(this.aux,"img_bar img_bar_hide"+
(this.axs?" zoom_mode":"")+
(cEo===true?" no_ts":""));
};

wd.eqa=function()
{
!this.axs&&this.bux();
};

wd.dza=function(vL,ede)
{
this.cbl().cwo=
setTimeout(A.funcProxy(this,ede?
this.eqa:this.bux),vL||500);
};

wd.cbl=function()
{
if(this.cwo)
{
clearTimeout(this.cwo);
this.cwo=0;
}
return this;
};

wd.FX=function(as,dPk)
{
var aHN=as.nAngle=((as.nAngle||0)+dPk);

if(document.addEventListener)
{
as.style.cssText=as.style.cssText.replace(/-[a-z]+-transform:[\s]?rotate[^;]+;/g,"")+
"-webkit-transform:rotate("+aHN+"deg);"+
"-moz-transform:rotate("+aHN+"deg);"+
"-o-transform:rotate("+aHN+"deg);"+

"-ms-transform:rotate("+aHN+"deg);";
}
else
{
var aHN=aHN%360,
avV=aHN>=0?Math.PI*aHN/180:Math.PI*(360+aHN)/180,
aFn=Math.cos(avV),
aEB=Math.sin(avV);

as.style.filter="progid:DXImageTransform.Microsoft.Matrix(M11="+aFn+",M12="+
(-aEB)+",M21="+aEB+",M22="+aFn+",SizingMethod='auto expand')";

if(aHN%180==0)
{
A.delEvent(as,"propertychange",this.cGX);
as.style.marginLeft=as.style.marginTop=0;
}
else
{
this.cGX({srcElement:as,propertyName:"style.height"});
A.addEvent(as,"propertychange",this.cGX);
}
}
};

wd.cGX=function(ag)
{
var av=ag.srcElement;
if({"style.height":1}[ag.propertyName])
{
av.style.marginLeft=(av.clientWidth-av.clientHeight)/2+"px";
av.style.marginTop=(av.clientHeight-av.clientWidth)/2+"px";
}
};


wd.mouseover_=function(ag)
{




};

wd.mousemove_=function(ag)
{
var qQ=ag.x||ag.pageX,
nJ=ag.y||ag.pageY;
if(this.cEJ!=-1)
{


if(!this.axs&&
Math.max(Math.abs(this.cEJ-qQ),Math.abs(this.elp-nJ))>5&&
(new Date-(this.dfp||0)>200))
{
this.bUD();
this.dza(1000,true);
}
A.contain(this.aux,A.relatedTarget(ag))&&this.cbl();
}
this.cEJ=qQ;
this.elp=nJ;
};

wd.mouseout_=function(ag)
{
var bNv=A.relatedTarget(ag);
!this.axs&&!A.contain(this.dL,bNv)&&
!A.contain(this.aux,bNv)&&this.dza();
};

wd.mousedown_=function(ag)
{
if(this.axs)
{
this.aMG=
{
aMZ:this.dL.setCapture?this.dL:window,
amo:ag.clientX,
ajK:ag.clientY,
bvX:parseInt(A.getStyle(this.dL,"left")),
bwd:parseInt(A.getStyle(this.dL,"top"))
};


A.rmClass(this.dL,"layer_img_ts");


A.addEvent(this.aMG.aMZ,"mouseup",
this.bza||(this.bza=A.funcProxy(this,this.De)));
A.addEvent(this.aMG.aMZ,"mousemove",
this.cVU||(this.cVU=A.funcProxy(this,this.ajd)));

if(this.aMG.aMZ.setCapture)
{
this.aMG.aMZ.setCapture();
A.addEvent(this.aMG.aMZ,"losecapture",this.bza);
}
else
{
captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
A.addEvent(this.aMG.aMZ,'blur',this.bza);
}
}

A.preventDef(ag)
A.stopPropagation(ag);
};

wd.ajd=function(ag,dLk)
{
var aHL=this.aMG||dLk;
if(aHL)
{
A.posShow(this.dL,
ag.clientX-aHL.amo+aHL.bvX,
ag.clientY-aHL.ajK+aHL.bwd
);
}
};

wd.De=function(ag)
{
if(this.aMG)
{
var aHL=this.aMG;
this.aMG=aR;

if(aHL.aMZ.releaseCapture)
{
aHL.aMZ.releaseCapture();
A.delEvent(aHL.aMZ,"losecapture",this.bza);
}
else
{
releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);
A.delEvent(aHL.aMZ,'blur',this.bza);
}

ag&&this.ajd(ag,aHL);


A.addClass(this.dL,"layer_img_ts");

}
};

wd.click_=function(ag)
{
var bBt=this.ahg(ag,"opt"),
qu=bBt&&A.attr(bBt,"opt");

switch(qu)
{
case"rotate_r":
case"rotate_l":
this.bEO=!this.bEO;
if(!this.axs)
{
this.cuK(this.bys());

this.bux(true);
this.dfp=+new Date;
}
this.FX(this.dL,qu=="rotate_r"?90:-90);
break;
case"zoom":
this.cyf();
break;
}
};

wd.dblclick_=function(ag)
{
this.cyf();
};
},
"Viewer"
);

QMPreviewer.component("ImageSkin1",function(wd,aB)
{
wd.init=function(aq)
{
aB.init.call(this,aq,
{
sTmpl:"img_skin1",
nRangeDelta:0,
nRangeDef:0
}
);
};


wd.showLoadTip_=function(cQ)
{
this.aAO("loading");
};

wd.czD=function()
{
return 0;
};
},
"Image"
);
}
)(QMComAdaptar);

(function(A,aR)
{
QMPreviewer.component("Music",function(aCr,aB)
{
var	bRT=function(an)
{
var ae=this;
if(typeof an.length=="undefined")
{
return({
title:an.sName,
autoplay:true,
fileType:an.sSuffix,
url:an.sUrl,
onsuccess:function(){ae.log_(1);},
onerror:function(){ae.log_(0);}
});
}
else
{
var cv=[];
for(var i=0;i<an.length;i++)
{
cv.push({
title:an[i].sName,
autoplay:true,
fileType:an[i].sSuffix,
url:an[i].sUrl,
onsuccess:function(){ae.log_(1);},
onerror:function(){ae.log_(0);}
});
}
return cv;
}
};

aCr.init=function(aq)
{
var ae=this;
aB.init.call(ae,aq);

ae.dL.className="layer_music";
ae.dL.innerHTML=QMPreviewer.getView("musicframe",aq);
ae.aJP=ae.hR("music_container");
ae.bMA=ae.hR("playlist");
ae.ddF=ae.hR("music_player");


ae.om="music";
ae.au=aq;

A.posHide(ae.dL);
};

aCr.destroy=function()
{
aB.destroy.call(this);

this.dpb=
this.auM=this.aJP=this.ddF=
this.bMA=this.au=aR;
};

aCr.install=function()
{
if(!this.ajx())
{
aB.install.call(this);
this.fY();
}
};

aCr.uninstall=function()
{
if(this.ajx())
{
aB.uninstall.call(this);
this.nG();
}
};

aCr.changeVisualRange=function(afJ)
{
aB.changeVisualRange.call(this,afJ);
this.aci();
};

aCr.minimize=function()
{
this.dpb=true;
};
aCr.key=function(ado)
{
var ae=this;

if(ado==37||ado==38)
{
if(ae.auM)
{
ae.auM.prev()
}
}

else if(ado==39||ado==40)
{
if(ae.auM)
{
ae.auM.next()
}
}

else if(ado==13)
{

}
};


aCr.aci=function()
{
var pX=this.Yu;
if(pX)
{
this.aJP.style.top=(pX.nTop+
Math.max(0,pX.nHeight-this.aJP.clientHeight)/2)+"px";
this.aJP.style.left=pX.nLeft+
(pX.nWidth-this.aJP.clientWidth)/2+"px";
}
};

aCr.fY=function()
{
A.posShow(this.dL);
this.cHn();
};

aCr.cHn=function()
{
var ae=this,
aM=ae.au,
awm="gplayer_kernel",
dMz="gplayer_container",
bjA={
sId:"qmPreViewERaudio",
oContainer:this.ddF,
oSkinTemplate:QMPreviewer.getTemplate("musicskin")
};


if(aM.oFileList)
{
bjA.oInfoList=bRT.call(ae,aM.oFileList);
bjA.oPlayList={
nType:1,
oContainer:this.bMA
};
}
else
{
bjA.oInfo=bRT.call(ae,aM.oFileInfo);
}


ae.aAO("loading");

A.getPlayer(
function(asz)
{


var aKO=asz.initKernel({
sId:awm,
oContainer:bAx(),
onShowPlaylist:function()
{

}
}),
bvB=asz.initSkin({
sId:awm,
sSkin:"Global",
oContainer:A.S(dMz)
});
ae.auM=asz;



asz.init({
oSkin:bvB,
oKernel:aKO
});

asz.init({
oSkin:asz.initSkin(bjA),
oKernel:bjA.oInfoList?
aKO.setInfoList(bjA.oInfoList)
:aKO.setInfo(bjA.oInfo)
});
ae.aMY();


setTimeout(function()
{
ae.aci();
},
20
);

},
function()
{
ae.aAO("err","Load player failed");

this.log_(0);
}
);

function bAx()
{
var aU=awm+"_dom";
if(A.S(aU))
{
return A.S(aU)
}
else
{
var av=document.createElement("div");
av.id=aU;
av.style.cssText="position:absolute;left:-100000px;";
document.body.appendChild(av);
return av;
}
};
};
aCr.cxU=function()
{
var ae=this;
A.getPlayer(
function()
{
ae.auM.delSkinById("qmPreViewERaudio");
!ae.dpb&&ae.auM.pause();
}
);
};

aCr.nG=function()
{
A.posHide(this.dL);
this.cxU();
};


},
"Viewer"
);
}
)(QMComAdaptar);

(function(A,aR)
{
QMPreviewer.component("Other",function(bwU,aB)
{

bwU.init=function(aq)
{
var ae=this;
aB.init.call(ae,aq);

A.posHide(ae.dL);
ae.dL.className="layer_other";
ae.dL.innerHTML=QMPreviewer.getView("other",aq);

ae.om="other";
};

bwU.install=function()
{
aB.install.apply(this,arguments);
this.fY();
};

bwU.uninstall=function()
{
aB.uninstall.apply(this,arguments);
this.nG();
};


bwU.fY=function()
{
var pX=this.Yu;
A.posShow(this.dL,
Math.floor(pX.nLeft+(pX.nWidth-(this.dL.clientWidth||0))/2),
Math.floor(pX.nTop+(pX.nHeight-(this.dL.clientHeight||0))/2)
);

this.log_(1);
};

bwU.nG=function()
{
A.posHide(this.dL);
};

bwU.changeVisualRange=function()
{
aB.changeVisualRange.apply(this,arguments);
A.isPosShow(this.dL)&&this.fY();
};
},
"Viewer"
);
}
)(QMComAdaptar);


(function(A,aR)
{
QMPreviewer.component("Video",function(aJT,aB)
{
var bRT=function(an)
{
var ae=this;
if(typeof an.length=="undefined")
{
return({
title:an.sName,
autoplay:true,
fileType:an.sSuffix,
url:an.sUrl,
hash:an.sHash,
onsuccess:function(){ae.log_(1);},
onerror:function(){ae.log_(0);}
});
}
else
{
var cv=[];
for(var i=0;i<an.length;i++)
{
cv.push({
title:an[i].sName,
autoplay:true,
fileType:an[i].sSuffix,
url:an[i].sUrl,
hash:an[i].sHash,
onsuccess:function(){ae.log_(1);},
onerror:function(){ae.log_(0);}
});
}
return cv;
}
};

aJT.init=function(aq)
{
var ae=this;

aB.init.call(ae,aq);

ae.dL.className="layer_music";
ae.dL.innerHTML=QMPreviewer.getView("videoframe",aq);
ae.aJP=ae.hR("video_container");

ae.cyD=ae.hR("kernel");
ae.cFH=ae.hR("skin");
ae.bMA=ae.hR("playlist");


ae.om="video";
ae.au=aq;

A.posHide(ae.dL);
};

aJT.destroy=function()
{
aB.destroy.call(this);

this.auM=this.aJP=this.cyD=this.cFH=this.bMA=this.au=aR;
};

aJT.install=function()
{
if(!this.ajx())
{
aB.install.call(this);
this.aci();
this.fY();
}
};

aJT.uninstall=function()
{
if(this.ajx())
{
aB.uninstall.call(this);
this.nG();
}
};
aJT.changeVisualRange=function(afJ)
{
aB.changeVisualRange.call(this,afJ);
this.aci();
};
aJT.key=function(ado)
{
var ae=this;

if(ado==37||ado==38)
{
if(ae.auM)
{
ae.auM.prev()
}
}

else if(ado==39||ado==40)
{
if(ae.auM)
{
ae.auM.next()
}
}

else if(ado==13)
{

}
};


aJT.aci=function()
{
var pX=this.Yu;

if(pX)
{
this.aJP.style.top=pX.nTop+
Math.max(0,pX.nHeight-this.aJP.clientHeight)/2+"px";
this.aJP.style.left=pX.nLeft+
(pX.nWidth-this.aJP.clientWidth)/2+"px";
}
};
aJT.fY=function()
{
A.posShow(this.dL);
this.cHn();
};
aJT.cHn=function()
{
var ae=this,
aM=ae.au,
dvr=QMPreviewer.getTemplate("videoskin");


ae.aAO("loading");
A.getPlayer(
function(asz)
{
ae.auM=asz;
ae.aMY();

if(aM.oFileList)
{
asz.init({
oSkin:asz.initSkin({
sId:"qmPreViewERvidio",
oContainer:ae.cFH,
oSkinTemplate:dvr,
oPlayList:{
nType:1,
oContainer:ae.bMA
}
}),
oKernel:asz.initKernel({
sId:"qmPreViewERvidio",
oContainer:ae.cyD,
oInfoList:bRT.call(ae,aM.oFileList)
})
});
}
else
{
asz.init({
oSkin:asz.initSkin({
sId:"qmPreViewERvidio",
oContainer:ae.cFH,
oSkinTemplate:dvr
}),
oKernel:asz.initKernel({
sId:"qmPreViewERvidio",
oContainer:ae.cyD,
oInfo:bRT.call(ae,aM.oFileInfo)
})
});
}

},
function()
{
ae.aAO("err","Load player failed");

this.log_(0);
}
);
};
aJT.cxU=function()
{
var ae=this;
A.getPlayer(
function()
{
ae.auM.delUIById("qmPreViewERvidio");
}
);
};

aJT.nG=function()
{
A.posHide(this.dL);
this.cxU();
};

},
"Viewer"
);
}
)(QMComAdaptar);
