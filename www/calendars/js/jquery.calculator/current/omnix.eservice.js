/*! HS Project - ALL RIGHTS RESIRVED OMNIX INTERNATIONAL LLC 2015-06-25 */
function checkErr(){function generateErrorModal(ErrorJSON){var JSONObj=eval("["+ErrorJSON+"]");ErrContainer.text(""),ErrContainer.closest(".AppletBorder").remove();var Div,TableObj;Div=document.createElement("div"),Div.id="errorCont",Div.className="datagrid";var msgs=ErrText.split(" ,");TableObj=document.createElement("ol"),TableObj.id="error";for(var errorsArray=[],JsonArrLen=JSONObj[0].SiebelCustomErr.length,msg=0;JsonArrLen>msg;msg++)if(""!=JSONObj[0].SiebelCustomErr[msg].Error){var errMessage=JSONObj[0].SiebelCustomErr[msg].Error,errFieldName=JSONObj[0].SiebelCustomErr[msg].FieldName;if(-1==$.inArray(errMessage,errorsArray)){var TRObj=document.createElement("li");msg%2==0&&(TRObj.className="alt"),TRObj.innerHTML=JSONObj[0].SiebelCustomErr[msg].Error,TableObj.appendChild(TRObj),errorsArray[msg]=errMessage}}if(errorsArray=[],Div.appendChild(TableObj),0==$("#error").length){var errDiv=document.createElement("div");errDiv.id="error",document.body.appendChild(errDiv)}$("#error").prepend(Div),$(".error").text(""),$("#error > li").hover(function(){$(this).addClass("trhover")},function(){$(this).removeClass("trhover")}),$(function(){$("#error").dialog({show:{effect:"blind",duration:1e3},hide:{effect:"explode",duration:1e3},width:"600px",modal:!0,title:Omnix_Settings.checkErr.tableHeaderTitle,dialogClass:"alert",buttons:{Ok:function(){$(this).dialog("close")}}})})}var ErrContainer=$('td:contains("SiebelCustomErr")').last();ErrContainer.css("display","none !important");var ErrText=ErrContainer.text(),SiebelErrCodeIndex=ErrText.indexOf("'SiebelCustomErr':[");if(SiebelErrCodeIndex>-1){if(!$("#errFields").length){var $hiddenInput=$("<input/>",{type:"hidden",id:"errFields",value:"Fields,Field1,"});$hiddenInput.appendTo("body")}$(".error").css("display","none");var ErrStr=ErrText.indexOf("{'SiebelCustomErr':["),ErrEnd=ErrText.indexOf("(SBL-"),ErrorJSON=ErrText.substring(ErrStr,ErrEnd);$("#errFields").val(ErrorJSON),sessionStorage.setItem("errFields",ErrorJSON),"Y"==sessionStorage.getItem("GoBack"),history.back()}else{if($(".error").length){var ErrMsg=$(".error").text(),End=ErrMsg.indexOf("(SBL");ErrMsg=ErrMsg.substring(0,End),$(".error").text(ErrMsg)}if(!$("#errFields").length){var $hiddenInput=$("<input/>",{type:"hidden",id:"errFields",value:"Fields,Field1,"});$hiddenInput.appendTo("body");var Fields=sessionStorage.getItem("errFields");$("#errFields").val(Fields)}var ErrorJSONSTR=$("#errFields").val();if(""!=ErrorJSONSTR){var SessVal=sessionStorage.getItem("GoBack");sessionStorage.setItem("GoBack","Y");var ErrorJSON="";generateErrorModal(ErrorJSONSTR),ErrorJSON=eval("["+ErrorJSONSTR+"]");for(var JsonArrLen=ErrorJSON[0].SiebelCustomErr.length,ErrIndx=0;JsonArrLen>ErrIndx;ErrIndx++){var FieldName=ErrorJSON[0].SiebelCustomErr[ErrIndx].FieldName,ErrorText=ErrorJSON[0].SiebelCustomErr[ErrIndx].Error,$errField=$("[data-FieldName='"+FieldName+"']");if($errField.length){$errField.prop("data-ErrorText",ErrorText),$errField.addClass("errorField"),$errField.css("position","relative"),$errField.each(function(){var a=$(this).closest("td").children()[0];$(a).tooltip({track:!0,content:function(){return $(this).prop("data-ErrorText")}}),"errorIcon"!=$(a).attr("id")&&$(this).closest("td").prepend("<div id='errorIcon' style='height:15px;width:15px; position: relative;'><img src='images/error-icon.png'></div>")}),$errField.animate({left:"-=5px"},80);for(var i=0;6>i;i++)$errField.animate({left:"+=5px"},80),$errField.animate({left:"-=5px"},80);$errField.animate({left:"+=5px"},80)}else"N"!=SessVal&&sessionStorage.setItem("GoBack","N")}sessionStorage.setItem("errFields",""),$("#errFields").val("")}}}function applySpinner(){var a=$('input[data-spinner="true"]');a.length>0&&a.spinner()}function loadTooltips(){function a(a){function b(b){var d=c(b);try{var e=d.split(".")[0],f=d.split(".")[1],g="";return $(a).find(Omnix_Settings.RootElement).each(function(){$(this).find(Omnix_Settings.Applet).text()==e&&$(this).find(Omnix_Settings.Control).text()==f&&"Y"==$(this).find(Omnix_Settings.Active).text()&&(g=$(this).find(Omnix_Settings.Tooltip).text())}),g}catch(h){return Omnix_Settings.DefaultTooltip}}function c(a){try{var b=ctrlLookupMap;for(var c in b)if(b[c]==a)return c}catch(d){return Omnix_Settings.DefaultTooltip}}var d=$(document).tooltip({track:!0,content:function(){var a=$(this),c=a.attr("id");return b(c)}});d.tooltip("option","position",{my:"left top+15",at:"left bottom"})}$("input").each(function(){$(this).attr("title",Omnix_Settings.DefaultTooltip)}),$("select").each(function(){$(this).attr("title",Omnix_Settings.DefaultTooltip)}),$("textarea").each(function(){$(this).attr("title",Omnix_Settings.DefaultTooltip)}),$.ajax({type:"GET",url:Omnix_Settings.XMLPath,dataType:"xml",cache:!1,success:function(b){a(b)}})}function applychosen(){var a=$("select");a.length>0&&("rtl"==Omnix_Settings.AppDir&&$("select").addClass("chosen-rtl"),$("select").chosen({no_results_text:Omnix_Settings.apply_chosen.no_results_text,allow_single_deselect:!0,search_contains:!0,placeholder_text_single:Omnix_Settings.apply_chosen.placeholder_text_single,width:Omnix_Settings.InputWidth}))}function applySelectric(){var a=$("select");if(a.length>0&&(a.selectric({maxHeight:Omnix_Settings.SelectMaxHeight,openOnHover:!1,keySearchTimeout:4e3,arrowButtonMarkup:"ltr"==Omnix_Settings.AppDir?'<div style="float:right;"><b class="button">&#9662;</b></div>':""}),$(".selectricWrapper").css("width",Omnix_Settings.InputWidth),a.css("height",Omnix_Settings.Inputheight)),!Omnix_Settings.apply_Selectric.SelectOnly){var b=$("input:text");b.length>0&&(b.css("background","url(images/INPUT_BG.jpg)"),b.css("height",Omnix_Settings.Inputheight),b.css("border",Omnix_Settings.InputBorder),b.css("width",Omnix_Settings.InputWidth));var c=$(".mceGridField > span");c.length>0&&(c.css("background","url(images/INPUT_BG.jpg)"),c.css("height",Omnix_Settings.Inputheight),c.css("width",Omnix_Settings.InputWidth));var d=$(".mceGridField:empty");d.length>0&&(d.css("background","url(images/INPUT_BG.jpg)"),d.css("height",Omnix_Settings.Inputheight),d.css("width",Omnix_Settings.InputWidth))}}function appletCorners(){var a=$("span[class*='AppletStyle']");a.length>0&&a.corner()}function applyReqImage(){var a=$("[data-required ='true']");a.length>0&&a.addClass("req")}function applyiCheck(){var a=$("input:checkbox");a.length>0&&a.iCheck({checkboxClass:"icheckbox_minimal-grey",radioClass:"iradio_minimal-grey",increaseArea:"0%"})}if(window.jQuery){var htmlDir=window.location.pathname.split("/")[1].indexOf("ara")>-1?"rtl":"ltr",Omnix_Settings={hideThreadTitle:!0,public_dir:"23030/scripts/",XMLPath:"http://10.1.164.67/siebelxml/ToolTips.xml",AppDir:htmlDir,textAlign:"rtl"==htmlDir?"right":"left",disableRightClick:!1,RootElement:"EcaAdminTooltips",Applet:"AppletName",Tooltip:"rtl"==htmlDir?"TooltipARA":"TooltipENU",Control:"ControlName",Active:"Active",DefaultTooltip:"",SelectMaxHeight:300,UCMFrameHeight:"600px",HomePageHeight:"800px",UploaderHeight:"300px",InputWidth:"170px",Inputheight:"24px",InputBorder:"0px",applet_Corners:{enabled:!1,script_url:"jquery.corner.js"},apply_iCheck:{enabled:!1,script_url:"icheck.min.js"},load_Tooltips:{enabled:!1,script_url:"jquery-ui.min.js"},applySpinner:{enabled:!1,script_url:"jquery-ui.min.js"},apply_ReqImage:{enabled:!1},apply_chosen:{enabled:!1,script_url:"chosen.jquery.min.js",no_results_text:"rtl"==htmlDir?decodeURIComponent("%D9%84%D8%A7%20%D9%8A%D9%88%D8%AC%D8%AF%20%D8%B3%D8%AC%D9%84%D8%A7%D8%AA%20%D9%85%D8%B7%D8%A7%D8%A8%D9%82%D8%A9"):"No Resulet Found",placeholder_text_single:"rtl"==htmlDir?decodeURIComponent("%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1"):"Select"},apply_Selectric:{enabled:!1,script_url:"jquery.selectric.min.js",SelectOnly:!0},apply_forms:{enabled:!1,script_url:"jquery.uniform.min.js"},checkErr:{enabled:!0,tableHeaderTitle:"rtl"==htmlDir?decodeURIComponent("%D8%AD%D8%AF%D8%AB%20%D8%AE%D8%B7%D8%A3%20%D9%84%D9%84%D8%A3%D8%B3%D8%A8%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AA%D8%A7%D9%84%D9%8A%D8%A9%20%3A%20"):"An error has occurred for the following reasons : "}};try{$('td:contains("SiebelCustomErr")').last().css("display","none !important")}catch(e){}try{$('td:contains("SiebelCustomErr")').closest("table").css("display","none")}catch(e){}$(document).ready(function(){try{var a=$("span[data-iframe]");a.each(function(){var a="600px",b=$(this).attr("data-iframe");"UCM Iframe"==b?a=Omnix_Settings.UCMFrameHeight:"Uploader Iframe"==b?a=Omnix_Settings.UploaderHeight:"Homepage Iframe"==b&&(a=Omnix_Settings.HomePageHeight);var c,d=$(this).text();if(d.indexOf("?")>-1){var e=d.substr(0,d.indexOf("?")),f=d.substr(d.indexOf("?")+1);f=decodeURIComponent(f),f=encodeURI(f),c=e+"?"+f}else c=encodeURI(d);var g='<div style="clear:both;">&nbsp;</div><br><iframe width="100%" height="'+a+'" src="'+c+'" frameborder="0"></iframe> ';$(this).html(g)})}catch(b){console.warn(b.message)}try{$(".threadbar").css("display","none")}catch(b){console.warn(b.message)}try{Omnix_Settings.apply_ReqImage.enabled&&applyReqImage()}catch(b){console.warn(b.message)}try{Omnix_Settings.applySpinner.enabled&&$.getScript(Omnix_Settings.public_dir+Omnix_Settings.applySpinner.script_url,function(){applySpinner()})}catch(b){console.warn(b.message)}try{Omnix_Settings.disableRightClick&&$(document).on("contextmenu",function(a){a.preventDefault()})}catch(b){console.warn(b.message)}try{Omnix_Settings.load_Tooltips.enabled&&$.getScript(Omnix_Settings.public_dir+Omnix_Settings.load_Tooltips.script_url,function(){loadTooltips()})}catch(b){console.warn(b.message)}try{Omnix_Settings.checkErr.enabled&&$.getScript(Omnix_Settings.public_dir+Omnix_Settings.load_Tooltips.script_url,function(){checkErr()})}catch(b){console.warn(b.message)}try{Omnix_Settings.apply_chosen.enabled&&$.getScript(Omnix_Settings.public_dir+Omnix_Settings.apply_chosen.script_url,function(){applychosen()})}catch(b){console.warn(b.message)}try{Omnix_Settings.apply_Selectric.enabled&&$.getScript(Omnix_Settings.public_dir+Omnix_Settings.apply_Selectric.script_url,function(){applySelectric()})}catch(b){console.warn(b.message)}try{Omnix_Settings.apply_forms.enabled&&$.getScript(Omnix_Settings.public_dir+Omnix_Settings.apply_forms.script_url,function(){var a=$("input:text, .mceGridField > span, .mceGridField:empty");a.uniform(),a.css("height",Omnix_Settings.Inputheight),a.css("width",Omnix_Settings.InputWidth)})}catch(b){console.warn(b.message)}try{Omnix_Settings.apply_iCheck.enabled&&$.getScript(Omnix_Settings.public_dir+Omnix_Settings.apply_iCheck.script_url,function(){applyiCheck()})}catch(b){console.warn(b.message)}try{Omnix_Settings.applet_Corners.enabled&&$.getScript(Omnix_Settings.public_dir+Omnix_Settings.applet_Corners.script_url,function(){appletCorners()})}catch(b){console.warn(b.message)}})}