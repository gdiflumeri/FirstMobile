/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/commons/library','sap/ui/core/Element'],function(q,l,E){"use strict";var P=E.extend("sap.ui.commons.layout.PositionContainer",{metadata:{library:"sap.ui.commons",properties:{top:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},bottom:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},left:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},right:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},centerHorizontally:{type:"boolean",group:"Dimension",defaultValue:false},centerVertically:{type:"boolean",group:"Dimension",defaultValue:false}},defaultAggregation:"control",aggregations:{control:{type:"sap.ui.core.Control",multiple:false}}}});(function(){P.prototype.setControl=function(C){c(this);if(this.getDomRef()){this.setAggregation("control",C,true);n(this,C?"CTRL_CHANGE":"CTRL_REMOVE")}else{if(this.getParent()&&this.getParent().getDomRef()){this.setAggregation("control",C,true);if(C){n(this,"CTRL_ADD")}}else{this.setAggregation("control",C)}}if(C){C.attachEvent("_change",o,this)}return this};P.prototype.destroyControl=function(){c(this);var S=!!this.getDomRef();this.destroyAggregation("control",S);if(S){n(this,"CTRL_REMOVE")}return this};P.prototype.setTop=function(t){s(this,"top",t,true);return this};P.prototype.setBottom=function(B){s(this,"bottom",B,true);return this};P.prototype.setLeft=function(L){s(this,"left",L,true);return this};P.prototype.setRight=function(r){s(this,"right",r,true);return this};P.prototype.setCenterHorizontally=function(C){s(this,"centerHorizontally",C,true);return this};P.prototype.setCenterVertically=function(C){s(this,"centerVertically",C,true);return this};P.prototype.updatePosition=function(p){if(!p){p={}}s(this,"centerHorizontally",p.centerHorizontally?p.centerHorizontally:null);s(this,"centerVertically",p.centerVertically?p.centerVertically:null);s(this,"left",p.left?p.left:null);s(this,"right",p.right?p.right:null);s(this,"top",p.top?p.top:null);var N=s(this,"bottom",p.bottom?p.bottom:null);if(N){n(this,"CTRL_POS")}};P.prototype.getComputedPosition=function(){var t=this.getTop();var B=this.getBottom();var L=this.getLeft();var r=this.getRight();var w=null;var h=null;var C=this.getControl();if(C){if(this.getCenterHorizontally()){L="50%";r=null}else{if(!a(this,C,"width","left",L,"right",r)){r=undefined}if(!L&&!r){L="0px"}}if(this.getCenterVertically()){t="50%";B=null}else{if(!a(this,C,"height","top",t,"bottom",B)){B=undefined}if(!t&&!B){t="0px"}}w=b(C,"width");h=b(C,"height")}return{top:t,bottom:B,left:L,right:r,width:w,height:h}};P.createPosition=function(C,p){var d=new P();d.setControl(C);if(p){if(p.left){d.setLeft(p.left)}if(p.right){d.setRight(p.right)}if(p.top){d.setTop(p.top)}if(p.bottom){d.setBottom(p.bottom)}if(p.centerHorizontally){d.setCenterHorizontally(p.centerHorizontally)}if(p.centerVertically){d.setCenterVertically(p.centerVertically)}}return d};P.prototype.reinitializeEventHandlers=function(C){if(this._sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);this._sResizeListenerId=null}if(!C&&this.getDomRef()&&(this.getCenterHorizontally()||this.getCenterVertically())){var t=this;var d=function(){var r=q(t.getDomRef());if(t.getCenterHorizontally()){r.css("margin-left","-"+r.children().outerWidth()/2+"px")}if(t.getCenterVertically()){r.css("margin-top","-"+r.children().outerHeight()/2+"px")}};this._sResizeListenerId=sap.ui.core.ResizeHandler.register(this.getDomRef(),d);d()}};P.prototype.exit=function(p){this.reinitializeEventHandlers(true)};P.prototype.init=function(){this._disableWidthCheck=true;this._disableHeightCheck=false};var s=function(t,p,v,N){var S=!!t.getDomRef();t.setProperty(p,v,S);if(S&&N){n(t,"CTRL_POS")}return S};var n=function(t,C){var L=t.getParent();if(L){L.contentChanged(t,C)}};var c=function(t){var C=t.getControl();if(C){sap.ui.commons.layout.AbsoluteLayout.cleanUpControl(C);C.detachEvent("_change",o,t)}};var a=function(p,C,d,e,v,f,V){if(v&&V){var L=p.getParent();var h=g(C,d);if(h){var i=C[h._sGetter]();if(!(!i||i==""||i=="auto"||i=="inherit")){q.sap.log.warning("Position "+f+"="+V+" ignored, because child control "+C.getId()+" has fixed "+d+" ("+i+").","","AbsoluteLayout '"+(L?L.getId():"_undefined")+"'");return false}}else{if((d==="width"&&!p._disableWidthCheck)||(d==="height"&&!p._disableHeightCheck)){q.sap.log.warning("Position "+f+"="+V+" ignored, because child control "+C.getId()+" not resizable.","","AbsoluteLayout '"+(L?L.getId():"_undefined")+"'");return false}}}return true};var g=function(C,p){var m=C.getMetadata();m._enrichChildInfos();var d=m.getAllProperties()[p];if(d&&sap.ui.base.DataType.getType(d.type)==sap.ui.base.DataType.getType("sap.ui.core.CSSSize")){return d}return null};var b=function(C,d){var p=g(C,d);if(p){var v=C[p._sGetter]();if(v&&q.sap.endsWith(v,"%")){return v}}return null};var o=function(e){var p=e.getParameter("name");var d=this.getParent();if((p==="width"||p==="height")&&d&&d.getDomRef()){n(this,"CTRL_POS")}}}());return P},true);
