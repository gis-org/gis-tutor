(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-196bbbbc"],{"01f2":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return o}));var n=r("debd"),a=r("38a4");const o=(()=>{if(!("document"in n["a"]))return()=>null;const e=document.createElement("canvas"),t=e.getContext("2d"),r=512;return e.height=r,e.width=1,r=>{t.clearRect(0,0,1,e.height);const n=t.createLinearGradient(0,0,0,e.height);for(const{ratio:e,color:t}of r.colorStops)n.addColorStop(Math.max(e,.001),`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`);return t.fillStyle=n,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}})();function i(e,t,r,n){const{blurRadius:a,fieldOffset:o,field:i}=t,s=new Float64Array(r*n),c=l(a),u=Math.round(3*a);let h,f=Number.NEGATIVE_INFINITY;const b=d(i,o),p=new Set;for(const l of e){const e=l.getCursor();for(;e.next();){const t=e.getObjectId();if(p.has(t))continue;p.add(t);const a=e.readLegacyPointGeometry(),o=128;if(a.x<-o||a.x>=r+o||a.y<-o||a.y>n+o)continue;const i=+b(e),l=Math.round(a.x)-u,d=Math.round(a.y)-u,y=Math.max(0,l),O=Math.max(0,d),w=Math.min(n,Math.round(a.y)+u),m=Math.min(r,Math.round(a.x)+u);for(let e=O;e<w;e++){const t=c[e-d];for(let n=y;n<m;n++){const a=c[n-l];h=s[e*r+n]+=t*a*i,h>f&&(f=h)}}}}return{matrix:s.buffer,max:f}}function s(e,t,r,n,a,o){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);const i=e.getImageData(0,0,t,t);r&&n&&i.data.set(new Uint8ClampedArray(c(t,r,n,a,o))),e.putImageData(i,0,0)}function c(e,t,r,n,o){const i=new Uint32Array(e*e),s="buffer"in t?t:new Float64Array(t),c="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),l=c.length/(o-n);for(let d=0;d<s.length;d++){const e=s[d],t=Math.floor((e-n)*l);i[d]=c[Object(a["d"])(t,0,c.length-1)]}return i.buffer}function l(e){const t=Math.round(3*e),r=2*e*e,n=new Float64Array(2*t+1);for(let a=0;a<=n.length;a++)n[a]=Math.exp(-((a-t)**2)/r)/Math.sqrt(2*Math.PI)*(e/2);return n}function d(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):r=>+r.readAttribute(e)+t:e=>1}},"331e":function(e,t,r){"use strict";r.r(t);var n=r("a4ee"),a=(r("c120"),r("b2b2")),o=(r("59b2"),r("cea0"),r("e92d"),r("d386")),i=r("0f1c"),s=r("01f2"),c=r("8c81"),l=r("ba46"),d=r("a015");class u{constructor(e,t){this.offset=e,this.extent=t}}function h(e){const t=e.key,r=new Map,n=256,a=c["E"],o=e.tileInfoView.tileInfo.isWrappable;return r.set(Object(d["a"])(t,-1,-1,o).id,new u([-a,-a],[a-n,a-n,a,a])),r.set(Object(d["a"])(t,0,-1,o).id,new u([0,-a],[0,a-n,a,a])),r.set(Object(d["a"])(t,1,-1,o).id,new u([a,-a],[0,a-n,n,a])),r.set(Object(d["a"])(t,-1,0,o).id,new u([-a,0],[a-n,0,a,a])),r.set(Object(d["a"])(t,1,0,o).id,new u([a,0],[0,0,n,a])),r.set(Object(d["a"])(t,-1,1,o).id,new u([-a,a],[a-n,0,a,n])),r.set(Object(d["a"])(t,0,1,o).id,new u([0,a],[0,0,a,n])),r.set(Object(d["a"])(t,1,1,o).id,new u([a,a],[0,0,n,n])),r}let f=class extends l["a"]{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const r=t.schema.processors[0];"heatmap"===r.type&&Object(i["a"])(this._schema,r)&&(e.mesh=!0,this._schema=r)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){const t={clear:!0};return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}async onTileMessage(e,t,r){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const n=this._tileKeyToFeatureSets.get(e.key.id);if(Object(a["i"])(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&n.set(t.addOrUpdate.instance,t),t.end){const t=[],n=h(e);this._tileKeyToFeatureSets.forEach((r,o)=>{if(o===e.key.id)r.forEach(e=>Object(a["a"])(e.addOrUpdate,e=>t.push(e)));else if(n.has(o)){const e=n.get(o),[i,s]=e.offset;r.forEach(e=>Object(a["a"])(e.addOrUpdate,e=>{const r=e.transform(i,s,1,1);t.push(r)}))}});const o=Object(s["a"])(t,this._schema.mesh,512,512),i={tileKey:e.key.id,intensityInfo:o},c=[o.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",i,{...r,transferList:c})}}onTileError(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}};f=Object(n["a"])([Object(o["a"])("esri.views.2d.layers.features.processors.HeatmapProcessor")],f);var b=f;t["default"]=b},a015:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("ee0e");function n(e,t,r,n){const a=e.clone(),o=1<<a.level,i=a.col+t,s=a.row+r;return n&&i<0?(a.col=i+o,a.world-=1):i>=o?(a.col=i-o,a.world+=1):a.col=i,a.row=s,a}},ba46:function(e,t,r){"use strict";var n=r("a4ee"),a=r("9096"),o=r("59b2"),i=(r("c120"),r("cea0"),r("e92d"),r("d386"));let s=class extends a["a"]{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};Object(n["a"])([Object(o["b"])({readOnly:!0})],s.prototype,"supportsTileUpdates",null),Object(n["a"])([Object(o["b"])({constructOnly:!0})],s.prototype,"remoteClient",void 0),Object(n["a"])([Object(o["b"])({constructOnly:!0})],s.prototype,"service",void 0),Object(n["a"])([Object(o["b"])()],s.prototype,"spatialReference",null),Object(n["a"])([Object(o["b"])({constructOnly:!0})],s.prototype,"tileInfo",void 0),Object(n["a"])([Object(o["b"])({constructOnly:!0})],s.prototype,"tileStore",void 0),s=Object(n["a"])([Object(i["a"])("esri.views.2d.layers.features.processors.BaseProcessor")],s);var c=s;t["a"]=c}}]);
//# sourceMappingURL=chunk-196bbbbc.33225fb3.js.map