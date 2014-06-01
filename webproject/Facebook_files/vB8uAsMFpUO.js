/*!CK:2304040327!*//*1401158230,178198825*/

if (self.CavalryLogger) { CavalryLogger.start_js(["g6UiE"]); }

__d("ZoomCropImagePreview.react",["React","cx"],function(a,b,c,d,e,f,g,h){var i=g.createClass({displayName:'ZoomCropImagePreview',propTypes:{dimensions:g.PropTypes.object,size:g.PropTypes.object,src:g.PropTypes.string},render:function(){var j=this.props.dimensions,k=this.props.size,l=j.getSize().x/k.x;if(l!==1)j=j.clone().setSize(k.x,k.y).setZoom(j.getZoom()/l);return this.transferPropsTo(g.DOM.div({className:"_1k3v",style:{height:k.y,width:k.x}},g.DOM.img({className:"_1k3w",src:this.props.src,style:j.getPosition()})));}});e.exports=i;},null);