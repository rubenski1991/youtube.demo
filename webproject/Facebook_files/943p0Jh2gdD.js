/*!CK:3543969118!*//*1401158230,178142543*/

if (self.CavalryLogger) { CavalryLogger.start_js(["dXZvm"]); }

__d("ZoomCropDimensions",["BasicVector"],function(a,b,c,d,e,f,g){var h=320,i=.5,j=.5,k=180;l.prototype.clone=function(){"use strict";return new l(this.$ZoomCropDimensions0).setSize(this.$ZoomCropDimensions1.x,this.$ZoomCropDimensions1.y).setSmallestSize(this.$ZoomCropDimensions2.x,this.$ZoomCropDimensions2.y).setCenter(this.$ZoomCropDimensions3.x,this.$ZoomCropDimensions3.y).setZoom(this.$ZoomCropDimensions4);};function l(m){"use strict";this.$ZoomCropDimensions0=m;this.setSmallestSize(k,k).setCenter(i,i);this.setSize(h,h).setZoom(j);}l.prototype.getArea=function(){"use strict";var m=this.getPosition(),n=this.$ZoomCropDimensions1.div(this.$ZoomCropDimensions4);return {height:Math.round(n.y),width:Math.round(n.x),x:Math.round(Math.abs(m.left)/this.$ZoomCropDimensions4),y:Math.round(Math.abs(m.top)/this.$ZoomCropDimensions4)};};l.prototype.getPosition=function(){"use strict";var m=this.$ZoomCropDimensions5();return {height:m.imageSize.y,left:this.$ZoomCropDimensions1.x/2-m.center.x,top:this.$ZoomCropDimensions1.y/2-m.center.y,width:m.imageSize.x};};l.prototype.getRect=function(){"use strict";var m=this.$ZoomCropDimensions5(),n=this.$ZoomCropDimensions1.div(this.$ZoomCropDimensions4);return {center:{x:m.center.x/m.imageSize.x,y:m.center.y/m.imageSize.y},size:{x:n.x,y:n.y}};};l.prototype.getSize=function(){"use strict";return this.$ZoomCropDimensions1;};l.prototype.getZoom=function(){"use strict";return this.$ZoomCropDimensions4;};l.prototype.getZoomRange=function(){"use strict";var m=Math.min(this.$ZoomCropDimensions0.x,this.$ZoomCropDimensions0.y);return {max:this.$ZoomCropDimensions1.x/Math.min(this.$ZoomCropDimensions2.x,m),min:this.$ZoomCropDimensions1.x/m};};l.prototype.moveByPixels=function(m,n){"use strict";var o=this.$ZoomCropDimensions5();return this.moveBy(m/o.imageSize.x,n/o.imageSize.y);};l.prototype.moveBy=function(m,n){"use strict";return this.setCenter(this.$ZoomCropDimensions3.x+m,this.$ZoomCropDimensions3.y+n);};l.prototype.setCenter=function(m,n){"use strict";this.$ZoomCropDimensions3=new g(Math.min(Math.max(m,0),1),Math.min(Math.max(n,0),1));return this;};l.prototype.setSize=function(m,n){"use strict";this.$ZoomCropDimensions1=new g(m,n);return this;};l.prototype.setSmallestSize=function(m,n){"use strict";this.$ZoomCropDimensions2=new g(m,n);return this;};l.prototype.setZoom=function(m){"use strict";var n=this.getZoomRange();this.$ZoomCropDimensions4=Math.max(Math.min(m,n.max),n.min);return this;};l.prototype.$ZoomCropDimensions6=function(m,n){"use strict";var o=this.$ZoomCropDimensions1.x/2,p=this.$ZoomCropDimensions1.y/2;return new g(Math.max(Math.min(n.x,m.x-o),o),Math.max(Math.min(n.y,m.y-p),p));};l.prototype.$ZoomCropDimensions5=function(){"use strict";var m=this.$ZoomCropDimensions0.mul(this.$ZoomCropDimensions4);return {imageSize:m,center:this.$ZoomCropDimensions6(m,this.$ZoomCropDimensions3.mul(m.x,m.y))};};e.exports=l;},null);