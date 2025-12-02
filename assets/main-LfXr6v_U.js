(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const T=globalThis,R=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol(),B=new WeakMap;let X=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(R&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=B.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&B.set(e,t))}return t}toString(){return this.cssText}};const ot=r=>new X(typeof r=="string"?r:r+"",void 0,z),nt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce(((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1]),r[0]);return new X(e,r,z)},at=(r,t)=>{if(R)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),i=T.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},V=R?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ot(e)})(r):r;const{is:ht,defineProperty:lt,getOwnPropertyDescriptor:ct,getOwnPropertyNames:dt,getOwnPropertySymbols:pt,getPrototypeOf:ut}=Object,N=globalThis,W=N.trustedTypes,$t=W?W.emptyScript:"",ft=N.reactiveElementPolyfillSupport,E=(r,t)=>r,M={toAttribute(r,t){switch(t){case Boolean:r=r?$t:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},tt=(r,t)=>!ht(r,t),q={attribute:!0,type:String,converter:M,reflect:!1,useDefault:!1,hasChanged:tt};Symbol.metadata??=Symbol("metadata"),N.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=q){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&lt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=ct(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const l=i?.call(this);o?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??q}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=ut(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,s=[...dt(e),...pt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(V(i))}else t!==void 0&&e.push(V(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return at(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:M).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:M;this._$Em=i;const l=n.fromAttribute(e,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const i=this.constructor,o=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??tt)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:n}=o,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[E("elementProperties")]=new Map,y[E("finalized")]=new Map,ft?.({ReactiveElement:y}),(N.reactiveElementVersions??=[]).push("2.1.1");const D=globalThis,k=D.trustedTypes,G=k?k.createPolicy("lit-html",{createHTML:r=>r}):void 0,et="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,st="?"+f,_t=`<${st}>`,g=document,w=()=>g.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",I=Array.isArray,mt=r=>I(r)||typeof r?.[Symbol.iterator]=="function",L=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,K=/-->/g,J=/>/g,_=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,Z=/"/g,it=/^(?:script|style|textarea|title)$/i,gt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),A=gt(1),v=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Y=new WeakMap,m=g.createTreeWalker(g,129);function rt(r,t){if(!I(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(t):t}const At=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=x;for(let l=0;l<e;l++){const a=r[l];let c,p,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===x?p[1]==="!--"?n=K:p[1]!==void 0?n=J:p[2]!==void 0?(it.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=_):p[3]!==void 0&&(n=_):n===_?p[0]===">"?(n=i??x,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?_:p[3]==='"'?Z:F):n===Z||n===F?n=_:n===K||n===J?n=x:(n=_,i=void 0);const $=n===_&&r[l+1].startsWith("/>")?" ":"";o+=n===x?a+_t:h>=0?(s.push(c),a.slice(0,h)+et+a.slice(h)+f+$):a+f+(h===-2?l:$)}return[rt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class C{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[c,p]=At(t,e);if(this.el=C.createElement(c,s),m.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=m.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(et)){const u=p[n++],$=i.getAttribute(h).split(f),U=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:U[2],strings:$,ctor:U[1]==="."?vt:U[1]==="?"?bt:U[1]==="@"?xt:H}),i.removeAttribute(h)}else h.startsWith(f)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(it.test(i.tagName)){const h=i.textContent.split(f),u=h.length-1;if(u>0){i.textContent=k?k.emptyScript:"";for(let $=0;$<u;$++)i.append(h[$],w()),m.nextNode(),a.push({type:2,index:++o});i.append(h[u],w())}}}else if(i.nodeType===8)if(i.data===st)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(f,h+1))!==-1;)a.push({type:7,index:o}),h+=f.length-1}o++}}static createElement(t,e){const s=g.createElement("template");return s.innerHTML=t,s}}function b(r,t,e=r,s){if(t===v)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const o=P(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=b(r,i._$AS(r,t.values),i,s)),t}class yt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??g).importNode(e,!0);m.currentNode=i;let o=m.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new O(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Et(o,this,t)),this._$AV.push(c),a=s[++l]}n!==a?.index&&(o=m.nextNode(),n++)}return m.currentNode=g,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),P(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==v&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):mt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(g.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=C.createElement(rt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const o=new yt(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=Y.get(t.strings);return e===void 0&&Y.set(t.strings,e=new C(t)),e}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new O(this.O(w()),this.O(w()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=b(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==v,n&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=b(this,l[s+a],e,a),c===v&&(c=this._$AH[a]),n||=!P(c)||c!==this._$AH[a],c===d?t=d:t!==d&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class vt extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class bt extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class xt extends H{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??d)===v)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Et{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const St=D.litHtmlPolyfillSupport;St?.(C,O),(D.litHtmlVersions??=[]).push("3.3.1");const wt=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const o=e?.renderBefore??null;s._$litPart$=i=new O(t.insertBefore(w(),o),o,void 0,e??{})}return i._$AI(r),i};const j=globalThis;class S extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=wt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return v}}S._$litElement$=!0,S.finalized=!0,j.litElementHydrateSupport?.({LitElement:S});const Pt=j.litElementPolyfillSupport;Pt?.({LitElement:S});(j.litElementVersions??=[]).push("4.2.1");class Ct extends S{subscribe(){}publish(){}}const Ot=nt`
  :host {
    display: block;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f4;
    min-height: 100vh;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 20px;
    text-align: center;
  }
  
  h1 {
    color: #333;
    margin-bottom: 30px;
    font-size: 2.5rem;
  }

  /* --- BUSCADOR --- */
  .search-box {
    margin-bottom: 30px;
  }

  .search-box input {
    width: 100%;
    max-width: 400px;
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 30px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
  }

  .search-box input:focus {
    border-color: #646cff;
    box-shadow: 0 0 8px rgba(100, 108, 255, 0.2);
  }

  /* --- GRID DE POKEMON --- */
  .pokemon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 25px;
  }

  /* --- TARJETA (CARD) --- */
  .card {
    background: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  }
  
  .card img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    z-index: 1;
    position: relative;
  }
  
  .card h3 { 
    text-transform: capitalize; 
    margin: 15px 0 5px 0; 
    color: #444; 
    font-size: 1.2rem; 
  }
  
  .number { 
    position: absolute; 
    top: 10px; 
    right: 15px; 
    font-weight: bold; 
    color: #e0e0e0; 
    font-size: 2rem; 
    z-index: 0;
  }

  .loading {
    font-size: 1.5rem;
    color: #666;
    margin-top: 50px;
  }
`;class Ut{static async getPokemons(t=20){return(await(await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${t}`)).json()).results.map((i,o)=>{const n=o+1;return{id:n,name:i.name,image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${n}.png`,url:i.url}})}}const Tt=r=>class extends r{async _fetchPokemons(){this.isLoading=!0;try{const t=await Ut.getPokemons(151);this._onSuccess(t)}catch(t){console.error(t),this.isLoading=!1}}_onSuccess(t){this.pokemonList=t,this.isLoading=!1}_onSearchInput(t){const e=t.target.value;this.searchText=e}},kt=r=>class extends r{render(){const t=this.pokemonList.filter(e=>e.name.toLowerCase().includes(this.searchText.toLowerCase()));return A`
      <div class="container">
        <h1>🧬 Pokedex Architecture</h1>
        
        ${this._tplSearch()}

        ${this.isLoading?this._tplLoading():this._tplPokemonGrid(t)}
      </div>
    `}_tplSearch(){return A`
      <div class="search-box">
        <input 
          type="text" 
          placeholder="🔍 Buscar Pokémon..." 
          .value="${this.searchText}"
          @input="${this._onSearchInput}"
        >
      </div>
    `}_tplPokemonGrid(t){return t.length===0?A`<p>No se encontraron Pokémon 😢</p>`:A`
      <div class="pokemon-grid">
        ${t.map(e=>this._tplCard(e))}
      </div>
    `}_tplLoading(){return A`<div class="loading">Cargando datos... ⏳</div>`}_tplCard(t){return A`
      <div class="card">
        <span class="number">#${t.id}</span>
        <img src="${t.image}" alt="${t.name}" loading="lazy">
        <h3>${t.name}</h3>
      </div>
    `}};class Q extends kt(Tt(Ct)){static get is(){return"pokedex-page"}static get styles(){return[Ot]}static get properties(){return{pokemonList:{type:Array},isLoading:{type:Boolean},searchText:{type:String}}}constructor(){super(),this.pokemonList=[],this.isLoading=!1,this.searchText=""}firstUpdated(){this._fetchPokemons()}}customElements.define(Q.is,Q);
