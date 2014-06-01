/*!CK:3020730074!*//*1401191682,178146385*/

if (self.CavalryLogger) { CavalryLogger.start_js(["jrbzF"]); }

__d("legacy:UIControllerRegistry",[],function(a,b,c,d){a.__UIControllerRegistry=a.__UIControllerRegistry||{};},3);
__d("ComposerXComponents",[],function(a,b,c,d,e,f){function g(h){"use strict";this.$ComposerXComponents0=h;}g.prototype.getComponents=function(){"use strict";return this.$ComposerXComponents0;};e.exports=g;},null);
__d("ShareModeConst",[],function(a,b,c,d,e,f){var g={SELF_PAGE:'selfpage',PAGE:'page',SELF_POST:'self',FRIEND:'friend',GROUP:'group',ALBUM:'album',MESSAGE:'message'};e.exports=g;},null);
__d("Sharer",["CSS","Event","ShareModeConst","URI"],function(a,b,c,d,e,f,g,h,i,j){function k(l){"use strict";this.$Sharer0=l;}k.prototype.getSharerFrame=function(){"use strict";return this.$Sharer0;};k.prototype.getComponents=function(){"use strict";return this.$Sharer0.getComponents();};k.initPrivacyWarning=function(l,m){"use strict";l.subscribe('selector-change',function(n,o){g.conditionShow(m,o===i.GROUP||o===i.MESSAGE||o===i.FRIEND||o===i.SELF_POST);});};k.close=function(l){"use strict";if(typeof(l)=='string'&&l){window.location.href=l;}else{window.close();window.location.href=j().setPath('/').setQueryData().toString();}return false;};k.listenForCancel=function(l){"use strict";h.listen(l,'click',this.close);};e.exports=k;},null);
__d("SharerFrame",["ArbiterMixin","copyProperties","DOM"],function(a,b,c,d,e,f,g,h,i){function j(k,l){this._sharerSelector=k;this._sharerSelector.subscribe('change',function(m,n){this.inform('selector-change',n);}.bind(this));this._components=l;}j.focusInput=function(k){k.focus();};j.focusSelector=function(k){var l=i.find(k,'.selectedMode input[type="text"]');if(l)l.focus();};h(j.prototype,g,{getSelectedMode:function(){return this._sharerSelector.getSelectedMode();},getComponents:function(){return this._components.getComponents();}});e.exports=j;},null);
__d("SharerSelector",["ArbiterMixin","CSS","Input","copyProperties"],function(a,b,c,d,e,f,g,h,i,j){function k(l,m,n,o,p){this._selectedMode=n;var q=function(r,s){var t=s.value;m&&i.setValue(m,t);o[this._selectedMode].hideContent();p&&h.hide(p[this._selectedMode]);o[t].showContent();p&&h.show(p[t]);this._selectedMode=t;this.inform('change',this._selectedMode);}.bind(this);l&&l.subscribe('change',q);}j(k.prototype,g,{getSelectedMode:function(){return this._selectedMode;}});e.exports=k;},null);
__d("ShareMode",["CSS","Parent","copyProperties","cx","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k){function l(m){this._content=m;}i(l.prototype,{showContent:function(){this._content&&g.show(this._content);this.show();},hideContent:function(){this._content&&g.hide(this._content);this.hide();},_getSharerRoot:function(){return h.byClass(this._content,"_b-z");},hideMentionsInput:function(){g.addClass(this._getSharerRoot(),"_c7f");},showMentionsInput:function(){g.removeClass(this._getSharerRoot(),"_c7f");},show:k,hide:k});e.exports=l;},null);
__d("ShareModeFriendTimeline",["Focus","ShareMode"],function(a,b,c,d,e,f,g,h){for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(l,m){"use strict";h.call(this,l);this._typeaheadInput=m;}k.prototype.show=function(){"use strict";g.set(this._typeaheadInput);};e.exports=k;},null);
__d("ShareModeGroup",["Focus","ShareMode"],function(a,b,c,d,e,f,g,h){for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(l,m){"use strict";h.call(this,l);this._typeaheadInput=m;}k.prototype.show=function(){"use strict";g.set(this._typeaheadInput);};e.exports=k;},null);
__d("ShareModeMessage",["Focus","ShareMode"],function(a,b,c,d,e,f,g,h){for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(l,m){"use strict";h.call(this,l);this._typeaheadInput=m;}k.prototype.show=function(){"use strict";g.set(this._typeaheadInput);};e.exports=k;},null);
__d("ShareModeOwnTimeline",["CSS","ShareMode"],function(a,b,c,d,e,f,g,h){for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(l,m){"use strict";h.call(this);this._privacyWidget=l;this._boostWidget=m;}k.prototype.show=function(){"use strict";g.show(this._privacyWidget);this._boostWidget&&g.show(this._boostWidget);};k.prototype.hide=function(){"use strict";g.hide(this._privacyWidget);this._boostWidget&&g.hide(this._boostWidget);};e.exports=k;},null);
__d("ShareModePage",["CSS","Input","ShareMode"],function(a,b,c,d,e,f,g,h,i){for(var j in i)if(i.hasOwnProperty(j))l[j]=i[j];var k=i===null?null:i.prototype;l.prototype=Object.create(k);l.prototype.constructor=l;l.__superConstructor__=i;function l(m,n,o,p,q,r,s){"use strict";i.call(this,m);this._pageSelector=n;this._postAsPageInput=p;this._targetingWidget=s;this._shouldPostAsPage=h.getValue(this._postAsPageInput);if(this._pageSelector)this._pageSelector.subscribe('change',function(t,u){this._shouldPostAsPage=o[u.value];h.setValue(this._postAsPageInput,""+this._shouldPostAsPage);g.conditionShow(q,this._shouldPostAsPage);g.conditionShow(r,!this._shouldPostAsPage);g.conditionShow(this._targetingWidget,this._shouldPostAsPage);}.bind(this));}l.prototype.show=function(){"use strict";g.conditionShow(this._targetingWidget,this._shouldPostAsPage);};l.prototype.hide=function(){"use strict";g.hide(this._targetingWidget);};e.exports=l;},null);