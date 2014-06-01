/*!CK:616764992!*//*1401158231,178142541*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8Suoe"]); }

__d("ZoomCropSlider.react",["React","AbstractRangeInput.react","cx"],function(a,b,c,d,e,f,g,h,i){var j=g.createClass({displayName:'ZoomCropSlider',propTypes:{onZoom:g.PropTypes.func,zoom:g.PropTypes.number,zoomRange:g.PropTypes.object},render:function(){return this.transferPropsTo(g.DOM.div({className:"_55vh"},g.DOM.div({className:"_55vi"},"−"),h({className:"_55vj",disabled:this.props.zoomRange.max===this.props.zoomRange.min,max:this.props.zoomRange.max,min:this.props.zoomRange.min,onChange:this.props.onZoom,values:[this.props.zoom]}),g.DOM.div({className:"_55vk"},"+")));}});e.exports=j;},null);