(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3627710","chunk-2d22611c"],{"5d34":function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return b}));var o=r("a4ee"),a=r("6a0e"),i=r("59b2"),s=(r("c120"),r("cea0"),r("e92d"),r("448d")),n=r("d386");let c=class extends a["a"]{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};Object(o["a"])([Object(i["b"])({type:Number})],c.prototype,"nodesPerPage",void 0),Object(o["a"])([Object(i["b"])({type:Number})],c.prototype,"rootIndex",void 0),Object(o["a"])([Object(i["b"])({type:String})],c.prototype,"lodSelectionMetricType",void 0),c=Object(o["a"])([Object(n["a"])("esri.layer.support.I3SNodePageDefinition")],c);let l=class extends a["a"]{constructor(){super(...arguments),this.factor=1}};Object(o["a"])([Object(i["b"])({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),Object(o["a"])([Object(i["b"])({type:Number})],l.prototype,"factor",void 0),l=Object(o["a"])([Object(n["a"])("esri.layer.support.I3SMaterialTexture")],l);let p=class extends a["a"]{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};Object(o["a"])([Object(i["b"])({type:[Number]})],p.prototype,"baseColorFactor",void 0),Object(o["a"])([Object(i["b"])({type:l})],p.prototype,"baseColorTexture",void 0),Object(o["a"])([Object(i["b"])({type:l})],p.prototype,"metallicRoughnessTexture",void 0),Object(o["a"])([Object(i["b"])({type:Number})],p.prototype,"metallicFactor",void 0),Object(o["a"])([Object(i["b"])({type:Number})],p.prototype,"roughnessFactor",void 0),p=Object(o["a"])([Object(n["a"])("esri.layer.support.I3SMaterialPBRMetallicRoughness")],p);let u=class extends a["a"]{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};Object(o["a"])([Object(s["a"])({opaque:"opaque",mask:"mask",blend:"blend"})],u.prototype,"alphaMode",void 0),Object(o["a"])([Object(i["b"])({type:Number})],u.prototype,"alphaCutoff",void 0),Object(o["a"])([Object(i["b"])({type:Boolean})],u.prototype,"doubleSided",void 0),Object(o["a"])([Object(s["a"])({none:"none",back:"back",front:"front"})],u.prototype,"cullFace",void 0),Object(o["a"])([Object(i["b"])({type:l})],u.prototype,"normalTexture",void 0),Object(o["a"])([Object(i["b"])({type:l})],u.prototype,"occlusionTexture",void 0),Object(o["a"])([Object(i["b"])({type:l})],u.prototype,"emissiveTexture",void 0),Object(o["a"])([Object(i["b"])({type:[Number]})],u.prototype,"emissiveFactor",void 0),Object(o["a"])([Object(i["b"])({type:p})],u.prototype,"pbrMetallicRoughness",void 0),u=Object(o["a"])([Object(n["a"])("esri.layer.support.I3SMaterialDefinition")],u);let d=class extends a["a"]{};Object(o["a"])([Object(i["b"])({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:""+t.index}}})],d.prototype,"name",void 0),Object(o["a"])([Object(s["a"])({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=Object(o["a"])([Object(n["a"])("esri.layer.support.I3STextureFormat")],d);let b=class extends a["a"]{constructor(){super(...arguments),this.atlas=!1}};Object(o["a"])([Object(i["b"])({type:[d]})],b.prototype,"formats",void 0),Object(o["a"])([Object(i["b"])({type:Boolean})],b.prototype,"atlas",void 0),b=Object(o["a"])([Object(n["a"])("esri.layer.support.I3STextureSetDefinition")],b);let y=class extends a["a"]{};Object(o["a"])([Object(s["a"])({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],y.prototype,"type",void 0),Object(o["a"])([Object(i["b"])({type:Number})],y.prototype,"component",void 0),y=Object(o["a"])([Object(n["a"])("esri.layer.support.I3SGeometryAttribute")],y);let h=class extends a["a"]{};Object(o["a"])([Object(s["a"])({draco:"draco"})],h.prototype,"encoding",void 0),Object(o["a"])([Object(i["b"])({type:[String]})],h.prototype,"attributes",void 0),h=Object(o["a"])([Object(n["a"])("esri.layer.support.I3SGeometryCompressedAttributes")],h);let f=class extends a["a"]{constructor(){super(...arguments),this.offset=0}};Object(o["a"])([Object(i["b"])({type:Number})],f.prototype,"offset",void 0),Object(o["a"])([Object(i["b"])({type:y})],f.prototype,"position",void 0),Object(o["a"])([Object(i["b"])({type:y})],f.prototype,"normal",void 0),Object(o["a"])([Object(i["b"])({type:y})],f.prototype,"uv0",void 0),Object(o["a"])([Object(i["b"])({type:y})],f.prototype,"color",void 0),Object(o["a"])([Object(i["b"])({type:y})],f.prototype,"uvRegion",void 0),Object(o["a"])([Object(i["b"])({type:y})],f.prototype,"featureId",void 0),Object(o["a"])([Object(i["b"])({type:y})],f.prototype,"faceRange",void 0),Object(o["a"])([Object(i["b"])({type:h})],f.prototype,"compressedAttributes",void 0),f=Object(o["a"])([Object(n["a"])("esri.layer.support.I3SGeometryBuffer")],f);let O=class extends a["a"]{};Object(o["a"])([Object(s["a"])({triangle:"triangle"})],O.prototype,"topology",void 0),Object(o["a"])([Object(i["b"])()],O.prototype,"geometryBuffers",void 0),O=Object(o["a"])([Object(n["a"])("esri.layer.support.I3SGeometryDefinition")],O)},"6e36":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var o=r("2eab"),a=r("ce50"),i=r("b2b2");async function s(e,t,r,s,n,c){let l=null;if(Object(i["i"])(r)){const t=e+"/nodepages/",a=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await Object(o["default"])(a,{query:{f:"json",token:s},responseType:"json",signal:c})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(d){Object(i["i"])(n)&&n.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",a,d),l=d}}if(!t)return null;const p=e+"/nodes/",u=p+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await Object(o["default"])(u,{query:{f:"json",token:s},responseType:"json",signal:c})).data,urlPrefix:p}}catch(d){throw new a["a"]("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:d,url:u})}}},"96ae":function(e,t,r){"use strict";r.d(t,"a",(function(){return P}));var o=r("a4ee"),a=r("2eab"),i=r("ce50"),s=(r("c120"),r("e92d")),n=r("b2b2"),c=r("f4cc"),l=r("e041"),p=r("59b2"),u=(r("cea0"),r("afcf")),d=r("d386"),b=r("09db"),y=r("ca81"),h=r("3af1"),f=r("e64d"),O=r("5996"),j=r("54b4"),m=r("22f4"),v=r("6e36"),g=r("0224"),w=r("a7e1"),S=r("792b"),x=r("8eed"),I=r("e6a6");async function T(e,t,r){if(!t||!t.resources)return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const a=new Set(t.resources.toKeep.map(e=>e.resource.path)),s=new Set,n=[];a.forEach(t=>{o.delete(t),e.paths.push(t)});for(const i of t.resources.toUpdate)if(o.delete(i.resource.path),a.has(i.resource.path)||s.has(i.resource.path)){const{resource:t,content:o,finish:a,error:s}=i,c=Object(I["getSiblingOfSameTypeI"])(t,Object(x["a"])());e.paths.push(c.path),n.push(R({resource:c,content:o,finish:a,error:s},r))}else e.paths.push(i.resource.path),n.push(N(i,r)),s.add(i.resource.path);for(const i of t.resources.toAdd)n.push(R(i,r)),e.paths.push(i.resource.path);if(o.forEach(e=>{const r=t.portalItem.resourceFromPath(e);n.push(r.portalItem.removeResource(r).catch(()=>{}))}),0===n.length)return;const l=await Object(c["j"])(n);Object(c["v"])(r);const p=l.filter(e=>"error"in e).map(e=>e.error);if(p.length>0)throw new i["a"]("save:resources","Failed to save one or more resources",{errors:p})}async function R(e,t){const r=await Object(S["c"])(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function N(e,t){const r=await Object(S["c"])(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}const _=s["a"].getLogger("esri.layers.mixins.SceneService"),P=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=Object(c["i"])(async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return O["a"].fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new O["a"](o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e)return h["a"].fromJSON(e,r);const o=t.store,a=this._readSpatialReference(t);return null==a||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some(e=>e<U)?null:new h["a"]({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:a})}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"",a={major:Number.NaN,minor:Number.NaN,versionString:o},i=o.split(".");return i.length>=2&&(a.major=parseInt(i[0],10),a.minor=parseInt(i[1],10)),a}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return Object(j["j"])(this.url,t.name);let o=t.name;if(!o&&this.url){const e=Object(j["f"])(this.url);Object(n["i"])(e)&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),Object(j["a"])(o)}set url(e){const t=Object(j["i"])({layer:this,url:e,nonStandardUrlAllowed:!1,logger:_});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){Object(j["k"])(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=Object(l["K"])(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=Object(v["a"])(this.parsedUrl.path,this.rootNode,e,this.apiKey,_,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,r;const o=e.rootIndex%e.pageSize,a=null==(t=e.rootPage)||null==(r=t.nodes)?void 0:r[o];if(null==a||null==a.obb||null==a.obb.center||null==a.obb.halfSize)throw new i["a"]("sceneservice:invalid-node-page","Invalid node page.");if(a.obb.center[0]<U||null==this.fullExtent||this.fullExtent.hasZ)return;const s=a.obb.halfSize,n=a.obb.center[2],c=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.fullExtent.zmin=n-c,this.fullExtent.zmax=n+c}else if("node"===(null==e?void 0:e.type)){var o;const t=null==(o=e.rootNode)?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<U)return;const r=t[2],a=t[3];this.fullExtent.zmin=r-a,this.fullExtent.zmax=r+a}}async _fetchService(e){if(null==this.url)throw new i["a"]("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await Object(a["default"])(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await Object(a["default"])(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const a of o)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t),1===r&&(e.typeKeywords=e.typeKeywords.filter(e=>"Hosted Service"!==e)))}async _saveAs(e,t){const r={...A,...t};let o=w["default"].from(e);o||(_.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new i["a"]("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const a=o.portal||g["a"].getDefault();await this._ensureLoadBeforeSave(),o.type=M,o.portal=a;const s={origin:"portal-item",url:null,messages:[],portal:a,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write(null,s)]};return await Promise.all(s.resources.pendingOperations),await this._validateAgainstJSONSchema(n,s,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,1),await a._signIn(),await a.user.addItem({item:o,folder:r&&r.folder,data:n}),await T(this.resourceReferences,s,null),this.portalItem=o,Object(y["a"])(s),s.portalItem=o,o}async _save(e){const t={...A,...e};this.portalItem||(_.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new i["a"]("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==M&&(_.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+M),await Promise.reject(new i["a"]("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${M}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&Object(l["K"])(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||g["a"].getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write(null,r)]};return await Promise.all(r.resources.pendingOperations),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:o}),await T(this.resourceReferences,r,null),Object(y["a"])(r),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let a=t.messages.filter(e=>"error"===e.type).map(e=>new i["a"](e.name,e.message,e.details));if(o&&o.validationOptions.ignoreUnsupported&&(a=a.filter(e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name)),o.validationOptions.enabled||F){const t=(await r.e("chunk-ea395404").then(r.bind(null,"a7eb"))).validate(e,o.portalItemLayerType);if(t.length>0){const e="Layer item did not validate:\n"+t.join("\n");if(_.error("_validateAgainstJSONSchema(): "+e),"throw"===o.validationOptions.failPolicy){const e=t.map(e=>new i["a"]("sceneservice:schema-validation",e)).concat(a);throw new i["a"]("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(a.length>0)throw new i["a"]("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}};return Object(o["a"])([Object(p["b"])(m["c"])],t.prototype,"id",void 0),Object(o["a"])([Object(p["b"])({type:O["a"]})],t.prototype,"spatialReference",void 0),Object(o["a"])([Object(u["a"])("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),Object(o["a"])([Object(p["b"])({type:h["a"]})],t.prototype,"fullExtent",void 0),Object(o["a"])([Object(u["a"])("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),Object(o["a"])([Object(p["b"])({readOnly:!0,type:f["a"]})],t.prototype,"heightModelInfo",void 0),Object(o["a"])([Object(p["b"])({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),Object(o["a"])([Object(p["b"])({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),Object(o["a"])([Object(p["b"])({readOnly:!0})],t.prototype,"version",void 0),Object(o["a"])([Object(u["a"])("version",["store.version"])],t.prototype,"readVersion",null),Object(o["a"])([Object(p["b"])({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(o["a"])([Object(p["b"])({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),Object(o["a"])([Object(p["b"])({type:String})],t.prototype,"title",void 0),Object(o["a"])([Object(u["a"])("portal-item","title")],t.prototype,"readTitlePortalItem",null),Object(o["a"])([Object(u["a"])("service","title",["name"])],t.prototype,"readTitleService",null),Object(o["a"])([Object(p["b"])({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),Object(o["a"])([Object(p["b"])(m["n"])],t.prototype,"url",null),Object(o["a"])([Object(b["a"])("url")],t.prototype,"writeUrl",null),Object(o["a"])([Object(p["b"])()],t.prototype,"parsedUrl",null),Object(o["a"])([Object(p["b"])({readOnly:!0})],t.prototype,"store",void 0),Object(o["a"])([Object(p["b"])({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=Object(o["a"])([Object(d["a"])("esri.layers.mixins.SceneService")],t),t},U=-1e38,F=!1,M="Scene Service",A={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}},cafc:function(e,t,r){"use strict";r.r(t);var o=r("a4ee"),a=r("ce50"),i=r("af40"),s=r("b2b2"),n=r("e694"),c=r("f4cc"),l=r("3795"),p=r("59b2"),u=(r("c120"),r("cea0"),r("e92d"),r("afcf")),d=r("d386"),b=r("2698"),y=r("e041"),h=r("8eed"),f=r("7af8"),O=r("92ef");function j(e){return g[m(e)]||S}function m(e){return e instanceof Blob?e.type:v(e.url)}function v(e){const t=Object(y["n"])(e);return x[t]||w}const g={},w="text/plain",S=g[w],x={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const pe in x)g[x[pe]]=pe;var I=r("fcf2");function T(e){const t=Object(s["i"])(e)&&e.origins?e.origins:[void 0];return(r,o)=>{const a=R(e,r,o);for(const e of t){const t=Object(p["c"])(r,e,o);for(const e in a)t[e]=a[e]}}}function R(e,t,r){if(Object(s["i"])(e)&&"resource"===e.type)return N(e,t,r);switch(Object(s["i"])(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=I["c"];return{read:e,write:t}}}}function N(e,t,r){const o=Object(f["b"])(t,r);return{type:String,read:(e,t,r)=>{const a=Object(I["d"])(e,t,r);return o.type===String?a:"function"==typeof o.type?new o.type({url:a}):void 0},write:{writer(t,a,i,n){if(!n||!n.resources)return"string"==typeof t?void(a[i]=Object(I["e"])(t,n)):void(a[i]=t.write({},n));const c=K(t),l=c?Object(I["e"])(c,{...n,verifyItemRelativeUrls:n&&n.verifyItemRelativeUrls?{writtenUrls:n.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,p=o.type!==String&&(!Object(b["a"])(this)||n&&n.origin&&this.originIdOf(r)>Object(O["d"])(n.origin));n&&n.portalItem&&Object(s["i"])(l)&&!Object(y["s"])(l)?p?P(this,r,t,l,a,i,n,e):U(l,a,i,n):n&&n.portalItem&&(Object(s["h"])(l)||Object(s["i"])(Object(I["b"])(l))||Object(y["t"])(l)||p)?_(this,r,t,l,a,i,n,e):a[i]=l}}}}function _(e,t,r,o,a,i,n,c){const l=Object(h["a"])(),p=M(r,o,n),u=Object(y["z"])(Object(s["g"])(c,"prefix"),l),d=`${u}.${j(p)}`,b=n.portalItem.resourceFromPath(d);Object(y["t"])(o)&&n.resources.pendingOperations.push(A(o).then(e=>{b.path=`${u}.${j(e)}`,a[i]=b.itemRelativeUrl}).catch(()=>{})),F(e,t,b,p,n.resources.toAdd),a[i]=b.itemRelativeUrl}function P(e,t,r,o,a,i,s,n){const c=s.portalItem.resourceFromPath(o),l=M(r,o,s);j(l)===Object(y["n"])(c.path)?(F(e,t,c,l,s.resources.toUpdate),a[i]=o):_(e,t,r,o,a,i,s,n)}function U(e,t,r,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(e)}),t[r]=e}function F(e,t,r,o,a){a.push({resource:r,content:o,finish:r=>{k(e,t,r)}})}function M(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}async function A(e){const t=(await Promise.resolve().then(r.bind(null,"2eab"))).default,{data:o}=await t(e,{responseType:"blob"});return o}function K(e){return Object(s["h"])(e)?null:"string"==typeof e?e:e.url}function k(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}var L,z=r("a6a3"),E=r("f46e"),q=r("3d59"),J=r("b911"),D=r("0db5"),C=r("5a62"),B=r("96ae"),$=r("22f4"),G=r("5d34"),V=r("2eab"),Z=r("2c4f"),H=r("6a0e"),Q=(r("e06a"),r("7ffa")),W=r("0028"),X=r("09db"),Y=r("8188"),ee=r("1219");let te=L=class extends H["a"]{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,o){if(o.layer&&o.layer.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!Object(Y["a"])(e.spatialReference,o.layer.spatialReference))return void(o&&o.messages&&o.messages.push(new W["a"]("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const a=new ee["a"];Object(Y["l"])(e,a,o.layer.spatialReference),t[r]=a.toJSON(o)}else t[r]=e.toJSON(o);delete t[r].spatialReference}clone(){return new L({geometry:Object(Q["a"])(this.geometry),type:this.type})}};Object(o["a"])([Object(p["b"])({type:ee["a"]}),T()],te.prototype,"geometry",void 0),Object(o["a"])([Object(X["a"])(["web-scene","portal-item"],"geometry")],te.prototype,"writeGeometry",null),Object(o["a"])([Object(p["b"])({type:["clip","mask","replace"],nonNullable:!0}),T()],te.prototype,"type",void 0),te=L=Object(o["a"])([Object(d["a"])("esri.layers.support.SceneModification")],te);var re,oe=te,ae=oe;let ie=re=class extends(Object(H["b"])(Z["a"].ofType(ae))){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(e=>!!e.geometry)}clone(){return new re({url:this.url,items:this.items.map(e=>e.clone())})}_readModifications(e,t){for(const r of e)this.add(ae.fromJSON(r,t))}static fromJSON(e,t){const r=new re;return r._readModifications(e,t),r}static async fromUrl(e,t,r){const o={url:Object(y["K"])(e),origin:"service"},a=await Object(V["default"])(e,{responseType:"json",signal:Object(s["g"])(r,"signal")}),i=t.toJSON(),n=[];for(const s of a.data)n.push(ae.fromJSON({...s,geometry:{...s.geometry,spatialReference:i}},o));return new re({url:e,items:n})}};Object(o["a"])([Object(p["b"])({type:String})],ie.prototype,"url",void 0),ie=re=Object(o["a"])([Object(d["a"])("esri.layers.support.SceneModifications")],ie);var se=ie,ne=se;let ce=class extends(Object(B["a"])(Object(q["a"])(Object(J["a"])(Object(D["a"])(Object(C["a"])(Object(n["a"])(Object(E["a"])(z["a"])))))))){constructor(...e){super(...e),this.handles=new i["a"],this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(Object(l["b"])(this,"modifications","after-changes",()=>this.modifications=this.modifications,null,null,!0))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:Object(I["a"])(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=Object(s["g"])(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){Object(c["u"])(r)}if(await this._fetchService(t),Object(s["i"])(this._modificationsSource)){const t=await ne.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!Object(s["h"])(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new a["a"]("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new a["a"]("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new a["a"]("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};Object(o["a"])([Object(p["b"])({type:String,readOnly:!0})],ce.prototype,"geometryType",void 0),Object(o["a"])([Object(p["b"])({type:["show","hide"]})],ce.prototype,"listMode",void 0),Object(o["a"])([Object(p["b"])({type:["IntegratedMeshLayer"]})],ce.prototype,"operationalLayerType",void 0),Object(o["a"])([Object(p["b"])({json:{read:!1},readOnly:!0})],ce.prototype,"type",void 0),Object(o["a"])([Object(p["b"])({type:G["c"],readOnly:!0})],ce.prototype,"nodePages",void 0),Object(o["a"])([Object(p["b"])({type:[G["b"]],readOnly:!0})],ce.prototype,"materialDefinitions",void 0),Object(o["a"])([Object(p["b"])({type:[G["d"]],readOnly:!0})],ce.prototype,"textureSetDefinitions",void 0),Object(o["a"])([Object(p["b"])({type:[G["a"]],readOnly:!0})],ce.prototype,"geometryDefinitions",void 0),Object(o["a"])([Object(p["b"])({readOnly:!0})],ce.prototype,"serviceUpdateTimeStamp",void 0),Object(o["a"])([Object(p["b"])({type:ne}),T({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],ce.prototype,"modifications",void 0),Object(o["a"])([Object(u["a"])(["web-scene","portal-item"],"modifications")],ce.prototype,"readModifications",null),Object(o["a"])([Object(p["b"])($["b"])],ce.prototype,"elevationInfo",void 0),Object(o["a"])([Object(p["b"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ce.prototype,"path",void 0),ce=Object(o["a"])([Object(d["a"])("esri.layers.IntegratedMeshLayer")],ce);var le=ce;t["default"]=le},e6a6:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return c})),r.d(t,"contentToBlob",(function(){return y})),r.d(t,"fetchResources",(function(){return n})),r.d(t,"getSiblingOfSameType",(function(){return h})),r.d(t,"getSiblingOfSameTypeI",(function(){return f})),r.d(t,"removeAllResources",(function(){return p})),r.d(t,"removeResource",(function(){return l})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return d}));var o=r("2eab"),a=r("ce50"),i=r("b2b2"),s=r("e041");async function n(e,t={},r){await e.load(r);const o=Object(s["z"])(e.itemUrl,"resources"),{start:a=1,num:n=10,sortOrder:c="asc",sortField:l="created"}=t,p={query:{start:a,num:n,sortOrder:c,sortField:l,token:e.apiKey},signal:Object(i["g"])(r,"signal")},u=await e.portal._request(o,p);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map(({created:t,size:r,resource:o})=>({created:new Date(t),size:r,resource:e.resourceFromPath(o)}))}}async function c(e,t,r,o){if(!e.hasPath())throw new a["a"](`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const n=e.portalItem;await n.load(o);const c=Object(s["z"])(n.userItemUrl,"add"===t?"addResources":"updateResources"),[l,p]=u(e.path),d=await y(r),b=new FormData;return l&&"."!==l&&b.append("resourcesPrefix",l),b.append("fileName",p),b.append("file",d,p),b.append("f","json"),Object(i["i"])(o)&&o.access&&b.append("access",o.access),await n.portal._request(c,{method:"post",body:b,signal:Object(i["g"])(o,"signal")}),e}async function l(e,t,r){if(!t.hasPath())throw new a["a"]("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=Object(s["z"])(e.userItemUrl,"removeResources");await e.portal._request(o,{method:"post",query:{resource:t.path},signal:Object(i["g"])(r,"signal")}),t.portalItem=null}async function p(e,t){await e.load(t);const r=Object(s["z"])(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:Object(i["g"])(t,"signal")})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=b(e),[o,a]=u(t);return[o,a,r]}function b(e){const t=Object(s["n"])(e);return Object(i["h"])(t)?[e,""]:[e.slice(0,e.length-t.length-1),"."+t]}async function y(e){return e instanceof Blob?e:(await Object(o["default"])(e.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath(Object(s["z"])(r,t+o))}function f(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath(Object(s["z"])(r,t+o))}}}]);
//# sourceMappingURL=chunk-d3627710.d4cdbfc4.js.map