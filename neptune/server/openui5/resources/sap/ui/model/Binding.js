/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/EventProvider','./ChangeReason'],function(q,E,C){"use strict";var B=E.extend("sap.ui.model.Binding",{constructor:function(m,p,c,P){E.apply(this);this.oModel=m;this.bRelative=!q.sap.startsWith(p,'/');this.sPath=p;this.oContext=c;this.mParameters=P;this.bInitial=false;this.bSuspended=false},metadata:{"abstract":true,publicMethods:["getPath","getContext","getModel","attachChange","detachChange","refresh","isInitial","attachDataRequested","detachDataRequested","attachDataReceived","detachDataReceived","suspend","resume"]}});B.prototype.getPath=function(){return this.sPath};B.prototype.getContext=function(){return this.oContext};B.prototype.setContext=function(c){if(this.oContext!=c){this.oContext=c;this._fireChange()}};B.prototype.getModel=function(){return this.oModel};B.prototype.attachChange=function(f,l){if(!this.hasListeners("change")){this.oModel.addBinding(this)}this.attachEvent("change",f,l)};B.prototype.detachChange=function(f,l){this.detachEvent("change",f,l);if(!this.hasListeners("change")){this.oModel.removeBinding(this)}};B.prototype._fireChange=function(a){this.fireEvent("change",a)};B.prototype.attachDataRequested=function(f,l){this.attachEvent("dataRequested",f,l)};B.prototype.detachDataRequested=function(f,l){this.detachEvent("dataRequested",f,l)};B.prototype.fireDataRequested=function(a){this.fireEvent("dataRequested",a)};B.prototype.attachDataReceived=function(f,l){this.attachEvent("dataReceived",f,l)};B.prototype.detachDataReceived=function(f,l){this.detachEvent("dataReceived",f,l)};B.prototype.fireDataReceived=function(a){this.fireEvent("dataReceived",a)};B.prototype.updateRequired=function(m){return m&&this.getModel()===m};B.prototype.checkUpdate=function(f){if(!this.bSuspended){this._fireChange({reason:C.Change})}};B.prototype.refresh=function(f){this.checkUpdate(f)};B.prototype.initialize=function(){this.checkUpdate(true);return this};B.prototype._refresh=function(){this.refresh()};B.prototype.isInitial=function(){return this.bInitial};B.prototype.isRelative=function(){return this.bRelative};B.prototype.attachEvents=function(e){if(!e){return this}var t=this;q.each(e,function(s,h){var m="attach"+s.substring(0,1).toUpperCase()+s.substring(1);if(t[m]){t[m](h)}else{q.sap.log.warning(t.toString()+" has no handler for event '"+s+"'")}});return this};B.prototype.detachEvents=function(e){if(!e){return this}var t=this;q.each(e,function(s,h){var m="detach"+s.substring(0,1).toUpperCase()+s.substring(1);if(t[m]){t[m](h)}else{q.sap.log.warning(t.toString()+" has no handler for event '"+s+"'")}});return this};B.prototype.attachRefresh=function(f,l){this.attachEvent("refresh",f,l)};B.prototype.detachRefresh=function(f,l){this.detachEvent("refresh",f,l)};B.prototype._fireRefresh=function(a){this.fireEvent("refresh",a)};B.prototype.suspend=function(){this.bSuspended=true};B.prototype.resume=function(){this.bSuspended=false;this.checkUpdate()};return B},true);
