(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e62e7"],{"983e":function(e,s,i){"use strict";i.r(s);var t=i("a4ee"),r=i("b2b2"),a=i("3795"),l=(i("59b2"),i("c120"),i("cea0"),i("e92d"),i("d386")),n=i("189c6"),y=i("33c9");function u(e,s){return!e.visible||0!==e.minScale&&s>e.minScale||0!==e.maxScale&&s<e.maxScale}let o=class extends n["default"]{initialize(){this.handles.add([Object(a["a"])(this.view,"viewpoint",()=>this._update())])}_injectOverrides(e){const s=super._injectOverrides(e),i=this.view.scale,t=this.layer.sublayers.filter(e=>u(e,i)).map(e=>e.subtypeCode);if(!t.length)return s;const a=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;if(Object(r["h"])(s))return new y["a"]({where:a});const l=s.clone();return l.where+=" AND "+a,l}_setLayersForFeature(e){const s=this.layer.fieldsIndex.get(this.layer.subtypeField),i=e.attributes[s.name],t=this.layer.sublayers.find(e=>e.subtypeCode===i);e.layer=t,e.sourceLayer=this.layer}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode}))},s=this.layer.sublayers.map(e=>e.subtypeCode).join(","),i=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${s})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=i,{...super._createSchemaConfig(),...e,definitionExpression:t}}};o=Object(t["a"])([Object(l["a"])("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);var b=o;s["default"]=b}}]);
//# sourceMappingURL=chunk-2d0e62e7.30befa7b.js.map