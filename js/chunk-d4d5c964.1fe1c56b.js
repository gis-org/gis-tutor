(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4d5c964"],{"49a0":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("8048");const a=96;function s(e,t){const r=t||e.extent,s=e.width,i=Object(n["d"])(r&&r.spatialReference);return r&&s?r.width/s*i*n["h"]*a:0}},8760:function(e,t,r){"use strict";r.r(t);var n,a=r("a4ee"),s=r("1325"),i=r("8d60"),l=r("4856"),o=r("2eab"),u=r("2c4f"),c=r("4d10"),p=r("9096"),b=r("fa8a"),d=r("7ffa"),y=r("b2b2"),m=r("e694"),h=r("f4cc"),f=r("e041"),g=r("59b2"),O=r("cea0"),j=(r("c120"),r("e92d"),r("afcf")),x=r("d386"),w=r("09db"),v=r("c478"),E=r("3af1"),S=r("5996"),N=r("49a0"),I=r("7f83"),R=r("a6a3"),U=r("997b"),F=r("b911"),L=r("0db5"),_=r("8e17"),A=r("5a62"),P=r("601a"),M=r("54b4"),q=r("22f4"),T=r("b807"),C=r("af40"),V=r("1a3e");let W=0,B=n=class extends m["b"]{constructor(e){super(e),this._sublayersHandles=new C["a"],this.dimensions=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.legendUrl=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.popupEnabled=!1,this.queryable=!1,this.spatialReferences=null}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?E["a"].fromJSON(e):null}get id(){const e=this._get("id");return null==e?W++:e}set id(e){this._set("id",e)}readLegendUrl(e,t){return t?t.legendUrl||t.legendURL:null}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}get name(){return this._get("name")}set name(e){this._set("name",e)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach(e=>{e.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach(e=>{e.parent=this,e.layer=this.layer}),this._sublayersHandles.add([e.on("after-add",({item:e})=>{e.parent=this,e.layer=this.layer}),e.on("after-remove",({item:e})=>{e.parent=null,e.layer=null})])),this._set("sublayers",e)}castSublayers(e){return Object(O["m"])(u["a"].ofType(n),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new n;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map(e=>e.clone())),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map(e=>e.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map(e=>e)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};Object(a["a"])([Object(g["b"])()],B.prototype,"description",null),Object(a["a"])([Object(g["b"])({readOnly:!0})],B.prototype,"dimensions",void 0),Object(a["a"])([Object(g["b"])({value:null})],B.prototype,"fullExtent",null),Object(a["a"])([Object(j["a"])("fullExtent",["extent"])],B.prototype,"readExtent",null),Object(a["a"])([Object(g["b"])()],B.prototype,"fullExtents",void 0),Object(a["a"])([Object(g["b"])()],B.prototype,"featureInfoFormat",void 0),Object(a["a"])([Object(g["b"])()],B.prototype,"featureInfoUrl",void 0),Object(a["a"])([Object(g["b"])({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],B.prototype,"id",null),Object(a["a"])([Object(g["b"])({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],B.prototype,"legendUrl",void 0),Object(a["a"])([Object(j["a"])(["web-document"],"legendUrl")],B.prototype,"readLegendUrl",null),Object(a["a"])([Object(g["b"])({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],B.prototype,"legendEnabled",void 0),Object(a["a"])([Object(g["b"])({value:null})],B.prototype,"layer",null),Object(a["a"])([Object(g["b"])()],B.prototype,"maxScale",void 0),Object(a["a"])([Object(g["b"])()],B.prototype,"minScale",void 0),Object(a["a"])([Object(g["b"])({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],B.prototype,"name",null),Object(a["a"])([Object(g["b"])()],B.prototype,"parent",void 0),Object(a["a"])([Object(g["b"])({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],B.prototype,"popupEnabled",void 0),Object(a["a"])([Object(g["b"])({type:Boolean,json:{write:{ignoreOrigin:!0}}})],B.prototype,"queryable",void 0),Object(a["a"])([Object(g["b"])()],B.prototype,"sublayers",null),Object(a["a"])([Object(V["a"])("sublayers")],B.prototype,"castSublayers",null),Object(a["a"])([Object(g["b"])({type:[Number],json:{read:{source:"spatialReferences"}}})],B.prototype,"spatialReferences",void 0),Object(a["a"])([Object(g["b"])({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],B.prototype,"title",null),Object(a["a"])([Object(g["b"])({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],B.prototype,"visible",null),B=n=Object(a["a"])([Object(x["a"])("esri.layers.support.WMSSublayer")],B);var k=B,D=k,$=r("ce50");const G=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],H={84:4326,83:4269,27:4267};function X(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const e=Array.prototype.slice.call(r.childNodes).map(e=>e.textContent).join("\r\n");throw new $["a"]("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const n=Z("Capability",r),a=Z("Service",r),s=Z("Request",n);if(!n||!a||!s)return null;const i=Z("Layer",n);if(!i)return null;const l="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",o=te("Title",a,"")||te("Name",a,""),u=te("AccessConstraints",a,""),c=te("Abstract",a,""),p=parseInt(te("MaxWidth",a,"5000"),10),b=parseInt(te("MaxHeight",a,"5000"),10),d=ae(s,"GetMap"),y=ne(s,"GetMap"),m=ie(i,l,t);let h,f,g,O,j=0;if(Array.prototype.slice.call(n.childNodes).forEach(e=>{"Layer"===e.nodeName&&(0===j?h=e:1===j?(m.name&&(m.name="",m.sublayers.push(ie(h,l,t))),m.sublayers.push(ie(e,l,t))):m.sublayers.push(ie(e,l,t)),j++)}),!m)return null;const x=m.fullExtents;if(f=m.sublayers,f||(f=[]),0===f.length&&f.push(m),g=m.extent,!g){const e=new E["a"](f[0].extent);m.extent=e.toJSON(),g=m.extent}if(O=m.spatialReferences,!O.length&&f.length>0){const e=t=>{let r=[];return t.sublayers.forEach(t=>{!r.length&&t.spatialReferences.length&&(r=t.spatialReferences||e(t))}),r};f.forEach(t=>{O.length||(O=t.spatialReferences||e(t))})}const w=ne(s,"GetFeatureInfo");let v;if(w){const e=ae(s,"GetFeatureInfo");e.indexOf("text/html")>-1?v="text/html":e.indexOf("text/plain")>-1&&(v="text/plain")}if(!v){const e=function(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach(t=>{e(t)}))};e(m)}const S=Y(f),N=m.minScale||0,I=m.maxScale||0,R=m.dimensions,U=S.reduce((e,t)=>e.concat(t.dimensions),[]),F=R.concat(U).filter(ue);let L=null;if(F.length>0){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;F.forEach(r=>{const{extent:n}=r;le(n)?n.forEach(r=>{e=Math.min(e,r.getTime()),t=Math.max(t,r.getTime())}):n.forEach(r=>{e=Math.min(e,r.min.getTime()),t=Math.max(t,r.max.getTime())})}),L={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[e,t]}}return{copyright:u,description:c,dimensions:R,extent:g,fullExtents:x,featureInfoFormat:v,featureInfoUrl:w,mapUrl:y,maxWidth:p,maxHeight:b,maxScale:I,minScale:N,layers:S,spatialReferences:O,supportedImageFormatTypes:d,timeInfo:L,title:o,version:l}}function J(e){return G.some(([t,r])=>e>=t&&e<=r)}function Q(e){return e.length?e.filter(e=>e.popupEnabled&&e.name&&e.queryable).map(e=>e.name).join(","):""}function Y(e){let t=[];return e.forEach(e=>{t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(Y(e.sublayers)),delete e.sublayers)}),t}function z(e,t,r){var n;return null!=(n=t.getAttribute(e))?n:r}function K(e,t,r,n){const a=Z(e,r);return a?z(t,a,n):n}function Z(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(oe(n)&&n.nodeName===e)return n}return null}function ee(e,t){const r=[];for(let n=0;n<t.childNodes.length;n++){const a=t.childNodes[n];oe(a)&&a.nodeName===e&&r.push(a)}return r}function te(e,t,r){const n=Z(e,t);return n?n.textContent:r}function re(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),a=parseFloat(e.getAttribute("miny")),s=parseFloat(e.getAttribute("maxx")),i=parseFloat(e.getAttribute("maxy"));let l,o,u,c;r?(l=isNaN(a)?-Number.MAX_VALUE:a,o=isNaN(n)?-Number.MAX_VALUE:n,u=isNaN(i)?Number.MAX_VALUE:i,c=isNaN(s)?Number.MAX_VALUE:s):(l=isNaN(n)?-Number.MAX_VALUE:n,o=isNaN(a)?-Number.MAX_VALUE:a,u=isNaN(s)?Number.MAX_VALUE:s,c=isNaN(i)?Number.MAX_VALUE:i);const p=new S["a"]({wkid:t});return new E["a"]({xmin:l,ymin:o,xmax:u,ymax:c,spatialReference:p})}function ne(e,t){const r=Z(t,e);if(r){const e=Z("DCPType",r);if(e){const t=Z("HTTP",e);if(t){const e=Z("Get",t);if(e){let t=K("OnlineResource","xlink:href",e,null);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),ce(t,["service","request"])}}}}return null}function ae(e,t){const r=ee("Operation",e);if(0===r.length)return ee("Format",Z(t,e)).map(e=>e.textContent);const n=[];return r.forEach(e=>{e.getAttribute("name")===t&&ee("Format",e).forEach(e=>{n.push(e.textContent)})}),n}function se(e,t,r){const n=Z(t,e);if(!n)return r;const{textContent:a}=n;if(null==a||""===a)return r;const s=Number(a);return isNaN(s)?r:s}function ie(e,t,r){var n;if(!e)return null;const a={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},s=Z("LatLonBoundingBox",e),i=Z("EX_GeographicBoundingBox",e);let l=null;s&&(l=re(s,4326)),i&&(l=new E["a"](0,0,0,0,new S["a"]({wkid:4326})),l.xmin=parseFloat(te("westBoundLongitude",i,"0")),l.ymin=parseFloat(te("southBoundLatitude",i,"0")),l.xmax=parseFloat(te("eastBoundLongitude",i,"0")),l.ymax=parseFloat(te("northBoundLatitude",i,"0"))),s||i||(l=new E["a"](-180,-90,180,90,new S["a"]({wkid:4326}))),a.minScale=se(e,"MaxScaleDenominator",0),a.maxScale=se(e,"MinScaleDenominator",0);const o=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(e=>{if("Name"===e.nodeName)a.name=e.textContent||"";else if("Title"===e.nodeName)a.title=e.textContent||"";else if("Abstract"===e.nodeName)a.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const r=e.getAttribute(o);if(r&&0===r.indexOf("EPSG:")){const n=parseInt(r.substring(5),10);0===n||isNaN(n)||l||(l="1.3.0"===t?re(e,n,J(n)):re(e,n))}const n=r&&r.indexOf(":");if(n&&n>-1){let s=parseInt(r.substring(n+1,r.length),10);0===s||isNaN(s)||(s=H[s]?H[s]:s);const i="1.3.0"===t?re(e,s,J(s)):re(e,s);a.fullExtents.push(i)}}else if(e.nodeName===o)e.textContent.split(" ").forEach(e=>{0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(H[e]&&(e=H[e]),-1===a.spatialReferences.indexOf(e)&&a.spatialReferences.push(e))});else if("Style"!==e.nodeName||a.legendURL){if("Layer"===e.nodeName){const n=ie(e,t,r);n&&(n.parentLayerId=a.id,a.sublayers||(a.sublayers=[]),a.sublayers.push(n))}}else{const t=Z("LegendURL",e);if(t){const e=Z("OnlineResource",t);e&&(a.legendURL=e.getAttribute("xlink:href"))}}}),a.extent=null==(n=l)?void 0:n.toJSON(),a.dimensions=ee("Dimension",e).filter(e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent).map(e=>{const t=e.getAttribute("name"),r=e.getAttribute("units"),n=e.textContent,a=e.getAttribute("unitSymbol"),s=e.getAttribute("default"),i="0"!==z("default",e,"0"),l="0"!==z("nearestValue",e,"0"),o="0"!==z("current",e,"0");return/^time$/i.test(t)&&/^ISO8601$/i.test(r)?{name:"time",units:"ISO8601",extent:de(n),default:de(s),multipleValues:i,nearestValue:l,current:o}:/^elevation$/i.test(t)?{name:"elevation",units:r,extent:pe(n),unitSymbol:a,default:pe(s),multipleValues:i,nearestValue:l}:{name:t,units:r,extent:be(n),unitSymbol:a,default:be(s),multipleValues:i,nearestValue:l}}),a}function le(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function oe(e){return e.nodeType===Node.ELEMENT_NODE}function ue(e){return"time"===e.name}function ce(e,t){const r=[],n=Object(f["K"])(e);for(const a in n.query)n.query.hasOwnProperty(a)&&-1===t.indexOf(a.toLowerCase())&&r.push(a+"="+n.query[a]);return n.path+(r.length?"?"+r.join("&"):"")}function pe(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map(e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}}).filter(e=>e):r.map(e=>parseFloat(e))}function be(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map(e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}}).filter(e=>e):r}function de(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map(e=>{const t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?ye(t[2]):void 0}}).filter(e=>e):r.map(e=>new Date(e))}function ye(e){const t=/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i,r=e.match(t);return r?{years:me(r[1]),months:me(r[2]),days:me(r[3]),hours:me(r[4]),minutes:me(r[5]),seconds:me(r[6])}:null}function me(e){if(!e)return 0;const t=/(?:\d+(?:.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function he(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const fe=new Set([102100,3857,102113,900913]),ge=new Set([3395,54004]);function Oe(e,t){let r=e.wkid;return Object(y["h"])(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),fe.has(r)?t.find(e=>fe.has(e))||t.find(e=>ge.has(e))||102100:r)}const je=new b["a"]({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let xe=class extends(Object(p["b"])(Object(U["a"])(Object(P["a"])(Object(_["a"])(Object(A["a"])(Object(F["a"])(Object(L["a"])(Object(m["a"])(R["a"]))))))))){constructor(...e){super(...e),this.allSublayers=new c["a"]({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.watch("sublayers",(e,t)=>{if(t){for(const e of t)e.layer=null;this.handles.remove("wms-sublayer")}if(e){for(const t of e)t.parent=this,t.layer=this;this.handles.add([e.on("after-add",({item:e})=>{e.parent=this,e.layer=this}),e.on("after-remove",({item:e})=>{e.parent=null,e.layer=null})],"wms-sublayer")}},!0)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=Object(y["i"])(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(h["u"]).then(()=>this._fetchService(t))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return new E["a"]({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("image/png")>-1?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new S["a"](t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter(e=>e!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return ve(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return ve(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const a=new Map,s=e.flatten(({sublayers:e})=>e&&e.toArray()).toArray();s.forEach(e=>{"number"==typeof e.parent.id&&(a.has(e.parent.id)?a.get(e.parent.id).push(e.id):a.set(e.parent.id,[e.id]))}),s.forEach(e=>{const r={sublayer:e,...n},s=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},r);if(a.has(e.id)&&(s.sublayerIds=a.get(e.id)),!e.sublayers&&e.name){const n=e.write({},r);delete n.id,t.layers.push(n)}}),t.visibleLayers=s.filter(e=>e.visible&&!e.sublayers).map(e=>e.name)}createExportImageParameters(e,t,r,n){const a=n&&n.pixelRatio||1,s=Object(N["a"])({extent:e,width:t})*a,i=new T["a"]({layer:this,scale:s}),{xmin:l,ymin:o,xmax:u,ymax:c,spatialReference:p}=e,b=Oe(p,this.spatialReferences),d="1.3.0"===this.version&&J(b)?`${o},${l},${c},${u}`:`${l},${o},${u},${c}`,y=i.toJSON();return{bbox:d,["1.3.0"===this.version?"crs":"srs"]:isNaN(b)?void 0:"EPSG:"+b,...y}}async fetchImage(e,t,r,n){var a,s;const i=this.mapUrl,l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const u=null==n||null==(a=n.timeExtent)?void 0:a.start,c=null==n||null==(s=n.timeExtent)?void 0:s.end,p=Object(y["i"])(u)&&Object(y["i"])(c)?u.getTime()===c.getTime()?he(u):`${he(u)}/${he(c)}`:void 0,b={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...l,time:p}),signal:null==n?void 0:n.signal};return null!=n&&n.timestamp&&(b.query={_ts:n.timestamp,...b.query}),Object(o["default"])(i,b).then(e=>e.data)}fetchFeatureInfo(e,t,r,n,a){const s=Object(N["a"])({extent:e,width:t}),o=new T["a"]({layer:this,scale:s}),u=Q(o.visibleSublayers);if(!this.featureInfoUrl||!u)return null;const c="1.3.0"===this.version?{I:n,J:a}:{x:n,y:a},p={query_layers:u,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...c},b={...this.createExportImageParameters(e,t,r),...p},d=this._mixCustomParameters(b),y=Object(f["e"])(this.featureInfoUrl,d),m=document.createElement("iframe");m.src=y,m.frameBorder="0",m.marginHeight="0",m.marginWidth="0",m.style.width="100%",m.setAttribute("sandbox","");const h=new l["a"]({title:this.title,content:m});return new i["a"]({sourceLayer:this,popupTemplate:h})}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}supportsSpatialReference(e){return Object(M["e"])(this.url)||this.spatialReferences.some(t=>{const r=900913===t?S["a"].WebMercator:new S["a"]({wkid:t});return Object(I["c"])(r,e)})}async _fetchService(e){if(!this.resourceInfo){this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request);const t=await Object(o["default"])(this.parsedUrl.path,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...this.parsedUrl.query,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=X(t.data)}if(this.parsedUrl){const e=new f["a"](this.parsedUrl.path);"https"!==e.scheme||e.port&&"443"!==e.port||-1!==s["a"].request.httpsDomains.indexOf(e.host)||s["a"].request.httpsDomains.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function we(e,t){return e.some(e=>{for(const r in e)if(Object(v["a"])(e,r,null,t))return!0;return!1})}function ve(e,t,r){const n=new Map;e.every(e=>null==e.id)&&(e=Object(d["a"])(e)).forEach((e,t)=>e.id=t);for(const s of e){const e=new D;e.read(s,t),-1===(null==r?void 0:r.indexOf(e.name))&&(e.visible=!1),n.set(e.id,e)}const a=[];for(const s of e){const e=n.get(s.id);if(null!=s.parentLayerId&&s.parentLayerId>=0){const t=n.get(s.parentLayerId);t.sublayers||(t.sublayers=new u["a"]),t.sublayers.unshift(e)}else a.unshift(e)}return a}Object(a["a"])([Object(g["b"])({readOnly:!0})],xe.prototype,"allSublayers",void 0),Object(a["a"])([Object(g["b"])({json:{type:Object,write:!0}})],xe.prototype,"customParameters",void 0),Object(a["a"])([Object(g["b"])({json:{type:Object,write:!0}})],xe.prototype,"customLayerParameters",void 0),Object(a["a"])([Object(g["b"])({type:String,json:{write:!0}})],xe.prototype,"copyright",void 0),Object(a["a"])([Object(g["b"])()],xe.prototype,"description",void 0),Object(a["a"])([Object(g["b"])({readOnly:!0})],xe.prototype,"dimensions",void 0),Object(a["a"])([Object(g["b"])({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{service:{read:{source:"extent"}}}}})],xe.prototype,"fullExtent",void 0),Object(a["a"])([Object(j["a"])(["web-document","portal-item"],"fullExtent",["extent"])],xe.prototype,"readFullExtentFromItemOrMap",null),Object(a["a"])([Object(w["a"])(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],xe.prototype,"writeFullExtent",null),Object(a["a"])([Object(g["b"])()],xe.prototype,"fullExtents",void 0),Object(a["a"])([Object(g["b"])({type:String,json:{write:{ignoreOrigin:!0}}})],xe.prototype,"featureInfoFormat",void 0),Object(a["a"])([Object(g["b"])({type:String,json:{write:{ignoreOrigin:!0}}})],xe.prototype,"featureInfoUrl",void 0),Object(a["a"])([Object(g["b"])({type:String,json:{origins:{"web-document":{default:"image/png",type:je.jsonValues,read:{reader:je.read,source:"format"},write:{writer:je.write,target:"format"}}}}})],xe.prototype,"imageFormat",void 0),Object(a["a"])([Object(j["a"])("imageFormat",["supportedImageFormatTypes"])],xe.prototype,"readImageFormat",null),Object(a["a"])([Object(g["b"])({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],xe.prototype,"imageMaxHeight",void 0),Object(a["a"])([Object(g["b"])({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],xe.prototype,"imageMaxWidth",void 0),Object(a["a"])([Object(g["b"])()],xe.prototype,"imageTransparency",void 0),Object(a["a"])([Object(g["b"])(q["e"])],xe.prototype,"legendEnabled",void 0),Object(a["a"])([Object(g["b"])({type:["show","hide","hide-children"]})],xe.prototype,"listMode",void 0),Object(a["a"])([Object(g["b"])({type:String,json:{write:{ignoreOrigin:!0}}})],xe.prototype,"mapUrl",void 0),Object(a["a"])([Object(g["b"])({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],xe.prototype,"isReference",void 0),Object(a["a"])([Object(g["b"])({type:["WMS"]})],xe.prototype,"operationalLayerType",void 0),Object(a["a"])([Object(g["b"])({type:S["a"],json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],xe.prototype,"spatialReference",void 0),Object(a["a"])([Object(j["a"])(["web-document","portal-item"],"spatialReference",["spatialReferences"])],xe.prototype,"readSpatialReferenceFromItemOrDocument",null),Object(a["a"])([Object(g["b"])({type:[O["a"]],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],xe.prototype,"spatialReferences",void 0),Object(a["a"])([Object(w["a"])(["web-document","portal-item"],"spatialReferences")],xe.prototype,"writeSpatialReferences",null),Object(a["a"])([Object(g["b"])({type:u["a"].ofType(D),json:{write:{target:"layers",overridePolicy(e,t,r){if(we(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],xe.prototype,"sublayers",void 0),Object(a["a"])([Object(j["a"])(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],xe.prototype,"readSublayersFromItemOrMap",null),Object(a["a"])([Object(j["a"])("service","sublayers",["layers"])],xe.prototype,"readSublayers",null),Object(a["a"])([Object(w["a"])("sublayers",{layers:{type:[D]},visibleLayers:{type:[String]}})],xe.prototype,"writeSublayers",null),Object(a["a"])([Object(g["b"])({json:{read:!1},readOnly:!0,value:"wms"})],xe.prototype,"type",void 0),Object(a["a"])([Object(g["b"])(q["n"])],xe.prototype,"url",void 0),Object(a["a"])([Object(g["b"])({type:String,json:{write:{ignoreOrigin:!0}}})],xe.prototype,"version",void 0),xe=Object(a["a"])([Object(x["a"])("esri.layers.WMSLayer")],xe);var Ee=xe;t["default"]=Ee},b807:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("a4ee"),a=r("fc29"),s=r("9096"),i=r("59b2"),l=(r("c120"),r("cea0"),r("e92d"),r("d386"));const o={visible:"visibleSublayers"};let u=class extends(Object(s["b"])(a["a"])){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("wms-sublayer-update",e=>this.notifyChange(o[e.propertyName]))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter(e=>e.name).map(e=>e.name).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=null==e?void 0:e.sublayers,n=[],a=e=>{const{minScale:r,maxScale:s,sublayers:i,visible:l}=e;l&&(0===t||(0===r||t<=r)&&(0===s||t>=s))&&(i?i.forEach(a):n.unshift(e))};return null==r||r.forEach(a),n}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:n,version:a}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:n,version:a,layers:t}}};Object(n["a"])([Object(i["b"])()],u.prototype,"layer",null),Object(n["a"])([Object(i["b"])({readOnly:!0})],u.prototype,"layers",null),Object(n["a"])([Object(i["b"])({type:Number})],u.prototype,"scale",void 0),Object(n["a"])([Object(i["b"])({readOnly:!0})],u.prototype,"version",null),Object(n["a"])([Object(i["b"])({readOnly:!0})],u.prototype,"visibleSublayers",null),u=Object(n["a"])([Object(l["a"])("esri.layers.support.ExportWMSImageParameters")],u)}}]);
//# sourceMappingURL=chunk-d4d5c964.1fe1c56b.js.map