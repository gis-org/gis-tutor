(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a33b6"],{"00ff":function(e,t,o){"use strict";o.r(t);var r=o("a4ee"),i=o("1325"),a=o("2eab"),l=(o("1fd7"),o("b2b2")),s=o("e694"),c=o("f4cc"),n=o("e041"),b=o("59b2"),p=(o("c120"),o("cea0"),o("e92d"),o("afcf")),y=o("d386"),d=o("a6a3"),u=o("997b"),j=o("b911"),O=o("0db5"),S=o("8e17"),h=o("5a62"),f=o("22f4"),v=o("0d93"),m=o("db52"),g=o("37e7"),w=o("4dc9"),C=o("0d76");const R=["atom","xml"],k={base:v["a"],key:"type",typeMap:{"simple-line":m["a"]},errorContext:"symbol"},F={base:v["a"],key:"type",typeMap:{"picture-marker":g["a"],"simple-marker":w["a"]},errorContext:"symbol"},x={base:v["a"],key:"type",typeMap:{"simple-fill":C["a"]},errorContext:"symbol"};let M=class extends(Object(u["a"])(Object(S["a"])(Object(j["a"])(Object(O["a"])(Object(h["a"])(Object(s["a"])(d["a"]))))))){constructor(...e){super(...e),this.description=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.outSpatialReference=null,this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(n["k"])(this.url,R)||"GeoRSS":e||""}set title(e){this._set("title",e)}readFeatureCollections(e,t){return t.featureCollection.layers.forEach(e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline&&-1!==t.outline.style.indexOf("esriSFS")&&(t.outline.style="esriSLSSolid")}),t.featureCollection.layers}load(e){const t=Object(l["i"])(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(c["u"]).then(()=>this._fetchService(t))),Promise.resolve(this)}async _fetchService(e){const{data:t}=await Object(a["default"])(i["a"].geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e});this.read(t,{origin:"service"})}};Object(r["a"])([Object(b["b"])()],M.prototype,"description",void 0),Object(r["a"])([Object(b["b"])({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],M.prototype,"title",null),Object(r["a"])([Object(b["b"])()],M.prototype,"featureCollections",void 0),Object(r["a"])([Object(p["a"])("service","featureCollections",["featureCollection.layers"])],M.prototype,"readFeatureCollections",null),Object(r["a"])([Object(b["b"])(f["c"])],M.prototype,"id",void 0),Object(r["a"])([Object(b["b"])(f["e"])],M.prototype,"legendEnabled",void 0),Object(r["a"])([Object(b["b"])({types:k,json:{write:!0}})],M.prototype,"lineSymbol",void 0),Object(r["a"])([Object(b["b"])({type:["show","hide"]})],M.prototype,"listMode",void 0),Object(r["a"])([Object(b["b"])({types:F,json:{write:!0}})],M.prototype,"pointSymbol",void 0),Object(r["a"])([Object(b["b"])({types:x,json:{write:!0}})],M.prototype,"polygonSymbol",void 0),Object(r["a"])([Object(b["b"])({type:["GeoRSS"]})],M.prototype,"operationalLayerType",void 0),Object(r["a"])([Object(b["b"])()],M.prototype,"outSpatialReference",void 0),Object(r["a"])([Object(b["b"])(f["n"])],M.prototype,"url",void 0),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{read:!1},value:"geo-rss"})],M.prototype,"type",void 0),M=Object(r["a"])([Object(y["a"])("esri.layers.GeoRSSLayer")],M);var G=M;t["default"]=G}}]);
//# sourceMappingURL=chunk-2d0a33b6.8bd19a49.js.map