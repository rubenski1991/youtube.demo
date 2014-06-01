/*!CK:3071992180!*//*1401161090,178183207*/

if (self.CavalryLogger) { CavalryLogger.start_js(["1AROf"]); }

__d("legacy:control-textarea",["TextAreaControl"],function(a,b,c,d){a.TextAreaControl=b('TextAreaControl');},3);
__d("TimelineYearOverviewClickLogging",["BanzaiLogger","Event","Parent","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j){var k=10,l='data-logging';function m(n,o){j(h.listen(o,'click',function(p){var q=i.byAttribute(p.getTarget(),l);if(q){n.event=q.getAttribute(l);g.create({delay:k}).log('TimelineYearOverviewLoggerConfig',n);}}));}f.init=m;},null);