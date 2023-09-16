(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const R=n=>n<10?`0${n}`:n;var ne=globalThis&&globalThis.__awaiter||function(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function c(a){try{l(i.next(a))}catch(d){o(d)}}function h(a){try{l(i.throw(a))}catch(d){o(d)}}function l(a){a.done?s(a.value):r(a.value).then(c,h)}l((i=i.apply(n,e||[])).next())})};function oe(n,e){return ne(this,void 0,void 0,function*(){const t=new AudioContext({sampleRate:e});return t.decodeAudioData(n).finally(()=>t.close())})}function ae(n){const e=n[0];if(e.some(t=>t>1||t<-1)){const t=e.length;let i=0;for(let r=0;r<t;r++){const s=Math.abs(e[r]);s>i&&(i=s)}for(const r of n)for(let s=0;s<t;s++)r[s]/=i}return n}function ce(n,e){return typeof n[0]=="number"&&(n=[n]),ae(n),{duration:e,length:n[0].length,sampleRate:n[0].length/e,numberOfChannels:n.length,getChannelData:t=>n==null?void 0:n[t],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}const Y={decode:oe,createBuffer:ce};var K=globalThis&&globalThis.__awaiter||function(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function c(a){try{l(i.next(a))}catch(d){o(d)}}function h(a){try{l(i.throw(a))}catch(d){o(d)}}function l(a){a.done?s(a.value):r(a.value).then(c,h)}l((i=i.apply(n,e||[])).next())})};function le(n,e,t){var i,r;return K(this,void 0,void 0,function*(){const s=yield fetch(n,t);{const o=(i=s.clone().body)===null||i===void 0?void 0:i.getReader(),c=Number((r=s.headers)===null||r===void 0?void 0:r.get("Content-Length"));let h=0;const l=(a,d)=>K(this,void 0,void 0,function*(){if(a)return;h+=(d==null?void 0:d.length)||0;const p=Math.round(h/c*100);return e(p),o==null?void 0:o.read().then(({done:m,value:u})=>l(m,u))});o==null||o.read().then(({done:a,value:d})=>l(a,d))}return s.blob()})}const de={fetchBlob:le};class I{constructor(){this.listeners={}}on(e,t){return this.listeners[e]||(this.listeners[e]=new Set),this.listeners[e].add(t),()=>this.un(e,t)}once(e,t){const i=this.on(e,t),r=this.on(e,()=>{i(),r()});return i}un(e,t){this.listeners[e]&&(t?this.listeners[e].delete(t):delete this.listeners[e])}unAll(){this.listeners={}}emit(e,...t){this.listeners[e]&&this.listeners[e].forEach(i=>i(...t))}}class he extends I{constructor(e){super(),e.media?this.media=e.media:this.media=document.createElement("audio"),e.mediaControls&&(this.media.controls=!0),e.autoplay&&(this.media.autoplay=!0),e.playbackRate!=null&&this.onceMediaEvent("canplay",()=>{e.playbackRate!=null&&(this.media.playbackRate=e.playbackRate)})}onMediaEvent(e,t,i){return this.media.addEventListener(e,t,i),()=>this.media.removeEventListener(e,t)}onceMediaEvent(e,t){return this.onMediaEvent(e,t,{once:!0})}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const e=this.getSrc();e.startsWith("blob:")&&URL.revokeObjectURL(e)}setSrc(e,t){if(this.getSrc()===e)return;this.revokeSrc();const r=t instanceof Blob?URL.createObjectURL(t):e;this.media.src=r,this.media.load()}destroy(){this.media.pause(),this.revokeSrc(),this.media.src="",this.media.load()}play(){return this.media.play()}pause(){this.media.pause()}isPlaying(){return this.media.currentTime>0&&!this.media.paused&&!this.media.ended}setTime(e){this.media.currentTime=e}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(e){this.media.volume=e}getMuted(){return this.media.muted}setMuted(e){this.media.muted=e}getPlaybackRate(){return this.media.playbackRate}setPlaybackRate(e,t){t!=null&&(this.media.preservesPitch=t),this.media.playbackRate=e}getMediaElement(){return this.media}setSinkId(e){return this.media.setSinkId(e)}}function ue(n,e,t,i,r=5){let s=()=>{};if(!n)return s;const o=c=>{if(c.button===2)return;c.preventDefault(),c.stopPropagation();let h=c.clientX,l=c.clientY,a=!1;const d=u=>{u.preventDefault(),u.stopPropagation();const f=u.clientX,b=u.clientY;if(a||Math.abs(f-h)>=r||Math.abs(b-l)>=r){const{left:w,top:L}=n.getBoundingClientRect();a||(a=!0,t==null||t(h-w,l-L)),e(f-h,b-l,f-w,b-L),h=f,l=b}},p=u=>{a&&(u.preventDefault(),u.stopPropagation())},m=()=>{a&&(i==null||i()),s()};document.addEventListener("pointermove",d),document.addEventListener("pointerup",m),document.addEventListener("pointerleave",m),document.addEventListener("click",p,!0),s=()=>{document.removeEventListener("pointermove",d),document.removeEventListener("pointerup",m),document.removeEventListener("pointerleave",m),setTimeout(()=>{document.removeEventListener("click",p,!0)},10)}};return n.addEventListener("pointerdown",o),()=>{s(),n.removeEventListener("pointerdown",o)}}class x extends I{constructor(e,t){super(),this.timeouts=[],this.isScrolling=!1,this.audioData=null,this.resizeObserver=null,this.isDragging=!1,this.options=e;let i;if(typeof e.container=="string"?i=document.querySelector(e.container):e.container instanceof HTMLElement&&(i=e.container),!i)throw new Error("Container not found");this.parent=i;const[r,s]=this.initHtml();i.appendChild(r),this.container=r,this.scrollContainer=s.querySelector(".scroll"),this.wrapper=s.querySelector(".wrapper"),this.canvasWrapper=s.querySelector(".canvases"),this.progressWrapper=s.querySelector(".progress"),this.cursor=s.querySelector(".cursor"),t&&s.appendChild(t),this.initEvents()}initEvents(){this.wrapper.addEventListener("click",t=>{const i=this.wrapper.getBoundingClientRect(),s=(t.clientX-i.left)/i.width;this.emit("click",s)}),this.options.dragToSeek&&this.initDrag(),this.scrollContainer.addEventListener("scroll",()=>{const{scrollLeft:t,scrollWidth:i,clientWidth:r}=this.scrollContainer,s=t/i,o=(t+r)/i;this.emit("scroll",s,o)});const e=this.createDelay(100);this.resizeObserver=new ResizeObserver(()=>{e(()=>this.reRender())}),this.resizeObserver.observe(this.scrollContainer)}initDrag(){ue(this.wrapper,(e,t,i)=>{this.emit("drag",Math.max(0,Math.min(1,i/this.wrapper.getBoundingClientRect().width)))},()=>this.isDragging=!0,()=>this.isDragging=!1)}getHeight(){return this.options.height==null?128:isNaN(Number(this.options.height))?this.options.height==="auto"&&this.parent.clientHeight||128:Number(this.options.height)}initHtml(){const e=document.createElement("div"),t=e.attachShadow({mode:"open"});return t.innerHTML=`
      <style>
        :host {
          user-select: none;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
          touch-action: none;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight()}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `,[e,t]}setOptions(e){this.options=e,this.reRender()}getWrapper(){return this.wrapper}getScroll(){return this.scrollContainer.scrollLeft}destroy(){var e;this.container.remove(),(e=this.resizeObserver)===null||e===void 0||e.disconnect()}createDelay(e=10){const t={};return this.timeouts.push(t),i=>{t.timeout&&clearTimeout(t.timeout),t.timeout=setTimeout(i,e)}}convertColorValues(e){if(!Array.isArray(e))return e||"";if(e.length<2)return e[0]||"";const t=document.createElement("canvas"),r=t.getContext("2d").createLinearGradient(0,0,0,t.height),s=1/(e.length-1);return e.forEach((o,c)=>{const h=c*s;r.addColorStop(h,o)}),r}renderBarWaveform(e,t,i,r){const s=e[0],o=e[1]||e[0],c=s.length,{width:h,height:l}=i.canvas,a=l/2,d=window.devicePixelRatio||1,p=t.barWidth?t.barWidth*d:1,m=t.barGap?t.barGap*d:t.barWidth?p/2:0,u=t.barRadius||0,f=h/(p+m)/c,b=u&&"roundRect"in i?"roundRect":"rect";i.beginPath();let w=0,L=0,M=0;for(let E=0;E<=c;E++){const g=Math.round(E*f);if(g>w){const U=Math.round(L*a*r),re=Math.round(M*a*r),J=U+re||1;let B=a-U;t.barAlign==="top"?B=0:t.barAlign==="bottom"&&(B=l-J),i[b](w*(p+m),B,p,J,u),w=g,L=0,M=0}const v=Math.abs(s[E]||0),_=Math.abs(o[E]||0);v>L&&(L=v),_>M&&(M=_)}i.fill(),i.closePath()}renderLineWaveform(e,t,i,r){const s=o=>{const c=e[o]||e[0],h=c.length,{height:l}=i.canvas,a=l/2,d=i.canvas.width/h;i.moveTo(0,a);let p=0,m=0;for(let u=0;u<=h;u++){const f=Math.round(u*d);if(f>p){const w=Math.round(m*a*r)||1,L=a+w*(o===0?-1:1);i.lineTo(p,L),p=f,m=0}const b=Math.abs(c[u]||0);b>m&&(m=b)}i.lineTo(p,a)};i.beginPath(),s(0),s(1),i.fill(),i.closePath()}renderWaveform(e,t,i){if(i.fillStyle=this.convertColorValues(t.waveColor),t.renderFunction){t.renderFunction(e,i);return}let r=t.barHeight||1;if(t.normalize){const s=Array.from(e[0]).reduce((o,c)=>Math.max(o,Math.abs(c)),0);r=s?1/s:1}if(t.barWidth||t.barGap||t.barAlign){this.renderBarWaveform(e,t,i,r);return}this.renderLineWaveform(e,t,i,r)}renderSingleCanvas(e,t,i,r,s,o,c,h){const l=window.devicePixelRatio||1,a=document.createElement("canvas"),d=e[0].length;a.width=Math.round(i*(o-s)/d),a.height=r*l,a.style.width=`${Math.floor(a.width/l)}px`,a.style.height=`${r}px`,a.style.left=`${Math.floor(s*i/l/d)}px`,c.appendChild(a);const p=a.getContext("2d");this.renderWaveform(e.map(f=>f.slice(s,o)),t,p);const m=a.cloneNode();h.appendChild(m);const u=m.getContext("2d");a.width>0&&a.height>0&&u.drawImage(a,0,0),u.globalCompositeOperation="source-in",u.fillStyle=this.convertColorValues(t.progressColor),u.fillRect(0,0,a.width,a.height)}renderChannel(e,t,i){const r=document.createElement("div"),s=this.getHeight();r.style.height=`${s}px`,this.canvasWrapper.style.minHeight=`${s}px`,this.canvasWrapper.appendChild(r);const o=r.cloneNode();this.progressWrapper.appendChild(o);const{scrollLeft:c,scrollWidth:h,clientWidth:l}=this.scrollContainer,a=e[0].length,d=a/h;let p=Math.min(x.MAX_CANVAS_WIDTH,l);if(t.barWidth||t.barGap){const g=t.barWidth||.5,v=t.barGap||g/2,_=g+v;p%_!==0&&(p=Math.floor(p/_)*_)}const m=Math.floor(Math.abs(c)*d),u=Math.floor(m+p*d),f=u-m,b=(g,v)=>{this.renderSingleCanvas(e,t,i,s,Math.max(0,g),Math.min(v,a),r,o)},w=this.createDelay(),L=this.createDelay(),M=(g,v)=>{b(g,v),g>0&&w(()=>{M(g-f,v-f)})},E=(g,v)=>{b(g,v),v<a&&L(()=>{E(g+f,v+f)})};M(m,u),u<a&&E(u,u+f)}render(e){this.timeouts.forEach(c=>c.timeout&&clearTimeout(c.timeout)),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",this.wrapper.style.width="";const t=window.devicePixelRatio||1,i=this.scrollContainer.clientWidth,r=Math.ceil(e.duration*(this.options.minPxPerSec||0));this.isScrolling=r>i;const s=this.options.fillParent&&!this.isScrolling,o=(s?i:r)*t;if(this.wrapper.style.width=s?"100%":`${r}px`,this.scrollContainer.style.overflowX=this.isScrolling?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.options.splitChannels)for(let c=0;c<e.numberOfChannels;c++){const h=Object.assign(Object.assign({},this.options),this.options.splitChannels[c]);this.renderChannel([e.getChannelData(c)],h,o)}else{const c=[e.getChannelData(0)];e.numberOfChannels>1&&c.push(e.getChannelData(1)),this.renderChannel(c,this.options,o)}this.audioData=e,this.emit("render")}reRender(){if(!this.audioData)return;const e=this.progressWrapper.clientWidth;this.render(this.audioData);const t=this.progressWrapper.clientWidth;this.scrollContainer.scrollLeft+=t-e}zoom(e){this.options.minPxPerSec=e,this.reRender()}scrollIntoView(e,t=!1){const{clientWidth:i,scrollLeft:r,scrollWidth:s}=this.scrollContainer,o=s*e,c=i/2,h=t&&this.options.autoCenter&&!this.isDragging?c:i;if(o>r+h||o<r)if(this.options.autoCenter&&!this.isDragging){const l=c/20;o-(r+c)>=l&&o<r+i?this.scrollContainer.scrollLeft+=l:this.scrollContainer.scrollLeft=o-c}else this.isDragging?this.scrollContainer.scrollLeft=o<r?o-10:o-i+10:this.scrollContainer.scrollLeft=o;{const{scrollLeft:l}=this.scrollContainer,a=l/s,d=(l+i)/s;this.emit("scroll",a,d)}}renderProgress(e,t){isNaN(e)||(this.progressWrapper.style.width=`${e*100}%`,this.cursor.style.left=`${e*100}%`,this.cursor.style.marginLeft=Math.round(e*100)===100?`-${this.options.cursorWidth}px`:"",this.isScrolling&&this.options.autoScroll&&this.scrollIntoView(e,t))}}x.MAX_CANVAS_WIDTH=4e3;class pe extends I{constructor(){super(...arguments),this.unsubscribe=()=>{}}start(){this.unsubscribe=this.on("tick",()=>{requestAnimationFrame(()=>{this.emit("tick")})}),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}}var k=globalThis&&globalThis.__awaiter||function(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function c(a){try{l(i.next(a))}catch(d){o(d)}}function h(a){try{l(i.throw(a))}catch(d){o(d)}}function l(a){a.done?s(a.value):r(a.value).then(c,h)}l((i=i.apply(n,e||[])).next())})};const me={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class N extends he{static create(e){return new N(e)}constructor(e){var t,i;super({media:e.media,mediaControls:e.mediaControls,autoplay:e.autoplay,playbackRate:e.audioRate}),this.plugins=[],this.decodedData=null,this.subscriptions=[],this.options=Object.assign({},me,e),this.timer=new pe;const r=e.media?void 0:this.getMediaElement();this.renderer=new x(this.options,r),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins();const s=this.options.url||((t=this.options.media)===null||t===void 0?void 0:t.currentSrc)||((i=this.options.media)===null||i===void 0?void 0:i.src);s&&this.load(s,this.options.peaks,this.options.duration)}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",()=>{const e=this.getCurrentTime();this.renderer.renderProgress(e/this.getDuration(),!0),this.emit("timeupdate",e),this.emit("audioprocess",e)}))}initPlayerEvents(){this.subscriptions.push(this.onMediaEvent("timeupdate",()=>{const e=this.getCurrentTime();this.renderer.renderProgress(e/this.getDuration(),this.isPlaying()),this.emit("timeupdate",e)}),this.onMediaEvent("play",()=>{this.emit("play"),this.timer.start()}),this.onMediaEvent("pause",()=>{this.emit("pause"),this.timer.stop()}),this.onMediaEvent("emptied",()=>{this.timer.stop()}),this.onMediaEvent("ended",()=>{this.emit("finish")}),this.onMediaEvent("seeking",()=>{this.emit("seeking",this.getCurrentTime())}))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",e=>{this.options.interact&&(this.seekTo(e),this.emit("interaction",e*this.getDuration()),this.emit("click",e))}),this.renderer.on("scroll",(e,t)=>{const i=this.getDuration();this.emit("scroll",e*i,t*i)}),this.renderer.on("render",()=>{this.emit("redraw")}));{let e;this.subscriptions.push(this.renderer.on("drag",t=>{this.options.interact&&(this.renderer.renderProgress(t),clearTimeout(e),e=setTimeout(()=>{this.seekTo(t)},this.isPlaying()?0:200),this.emit("interaction",t*this.getDuration()),this.emit("drag",t))}))}}initPlugins(){var e;!((e=this.options.plugins)===null||e===void 0)&&e.length&&this.options.plugins.forEach(t=>{this.registerPlugin(t)})}setOptions(e){this.options=Object.assign({},this.options,e),this.renderer.setOptions(this.options),e.audioRate&&this.setPlaybackRate(e.audioRate),e.mediaControls!=null&&(this.getMediaElement().controls=e.mediaControls)}registerPlugin(e){return e.init(this),this.plugins.push(e),this.subscriptions.push(e.once("destroy",()=>{this.plugins=this.plugins.filter(t=>t!==e)})),e}getWrapper(){return this.renderer.getWrapper()}getScroll(){return this.renderer.getScroll()}getActivePlugins(){return this.plugins}loadAudio(e,t,i,r){return k(this,void 0,void 0,function*(){if(this.emit("load",e),this.isPlaying()&&this.pause(),this.decodedData=null,!t&&!i){const s=o=>this.emit("loading",o);t=yield de.fetchBlob(e,s,this.options.fetchParams)}if(this.setSrc(e,t),i)r=(yield Promise.resolve(r||this.getDuration()))||(yield new Promise(s=>{this.onceMediaEvent("loadedmetadata",()=>s(this.getDuration()))}))||(yield Promise.resolve(0)),this.decodedData=Y.createBuffer(i,r);else if(t){const s=yield t.arrayBuffer();this.decodedData=yield Y.decode(s,this.options.sampleRate)}this.emit("decode",this.getDuration()),this.decodedData&&this.renderer.render(this.decodedData),this.emit("ready",this.getDuration())})}load(e,t,i){return k(this,void 0,void 0,function*(){yield this.loadAudio(e,void 0,t,i)})}loadBlob(e,t,i){return k(this,void 0,void 0,function*(){yield this.loadAudio("blob",e,t,i)})}zoom(e){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(e),this.emit("zoom",e)}getDecodedData(){return this.decodedData}exportPeaks({channels:e=1,maxLength:t=8e3,precision:i=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const r=Math.min(e,this.decodedData.numberOfChannels),s=[];for(let o=0;o<r;o++){const c=this.decodedData.getChannelData(o),h=Math.min(c.length,t),l=c.length/h,a=[];for(let d=0;d<h;d++){const p=Math.round(d*l),m=c[p];a.push(Math.round(m*i)/i)}s.push(a)}return s}getDuration(){let e=super.getDuration()||0;return(e===0||e===1/0)&&this.decodedData&&(e=this.decodedData.duration),e}toggleInteraction(e){this.options.interact=e}seekTo(e){const t=this.getDuration()*e;this.setTime(t)}playPause(){return k(this,void 0,void 0,function*(){return this.isPlaying()?this.pause():this.play()})}stop(){this.pause(),this.setTime(0)}skip(e){this.setTime(this.getCurrentTime()+e)}empty(){this.load("",[[0]],.001)}destroy(){this.emit("destroy"),this.plugins.forEach(e=>e.destroy()),this.subscriptions.forEach(e=>e()),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}const te="/WB_LVL_2_music/assets/play-1f8e9e1f.svg",ie="/WB_LVL_2_music/assets/stop-6bb09953.svg",fe="/WB_LVL_2_music/assets/World-ff43fe8d.mp3",ge="/WB_LVL_2_music/assets/Eyes-ab1f0f6b.mp3",ve="/WB_LVL_2_music/assets/Hell-16239c2a.mp3",ye="/WB_LVL_2_music/assets/Never-2ed94e26.mp3",be="/WB_LVL_2_music/assets/Blue-57bf1cf0.mp3",T=[{id:1,author:"Armstrong",title:"World",src:fe},{id:2,author:"AC",title:"Hell",src:ve},{id:3,author:"Rick",title:"Never",src:ye},{id:4,author:"DVRST",title:"Eyes",src:ge},{id:5,author:"Eiffel",title:"Blue",src:be}];let C=[],P=T[0].src,W=0,V=!1,z=!1,X=!1;const F=n=>{P=n},D=n=>{z=n},O=n=>{X=n},se=n=>{V=n},q=n=>{W=n},Le=n=>{C=n},y=N.create({hideScrollbar:!0,minPxPerSec:500,container:"#waveform",waveColor:"rgba(255,255,255,0.1)",progressColor:"rgb(255,255,255)",url:P,interact:!1});y.getMediaElement();const A=()=>{y.getMediaElement(),document.querySelector("#play").querySelector("img").src=te,y.pause();const n=document.querySelector("#current_time");n.style.width="0"},we=document.querySelector("#all_music"),Ce=document.querySelector("#playlist"),Se=()=>{y.on("finish",()=>{let n=V?C:T,e=V?Ce:we;if(z){let i=Math.round(Math.random()*100);for(i=i%n.length;i===W;)i=Math.round(Math.random()*100),i=i%n.length;q(i)}else X||q(W<n.length-1?W+1:0);const t=e.querySelectorAll("p");t.forEach(i=>i.classList.remove("current")),t[W].classList.add("current"),F(n[W].src),y.load(P),y.on("ready",()=>{A(),y.play(),document.querySelector("#play").querySelector("img").src=ie})})};let S=y.getMediaElement();const Ee=()=>{S.addEventListener("loadedmetadata",()=>{const n=S.duration;document.querySelector("#time").innerText=`${Math.floor(S.currentTime/60)}:${R(Math.round(S.currentTime%59))}`,document.querySelector("#duration").innerText=`${Math.floor(n/60)}:${R(Math.round(n%60))}`}),S.addEventListener("timeupdate",()=>{const n=S.duration;if(!isNaN(n)){const e=document.querySelector("#current_time");e.style.width=`${S.currentTime/(n/100)}%`,document.querySelector("#time").innerText=`${Math.floor(S.currentTime/60)}:${R(Math.round(S.currentTime%59))}`,document.querySelector("#duration").innerText=`${Math.floor(n/60)}:${R(Math.round(n%60))}`}})},$=document.querySelector("#playlist"),Me=document.querySelector("#all_music"),G=()=>{$.innerHTML="<h2>Плейлист</h2>",C.forEach((n,e)=>{const t=document.createElement("p");t.innerHTML=`${n.author} - ${n.title} 
      <span class="favorites_add inactive">
        <span></span>
        <span></span>
      </span>`,$.appendChild(t),t.addEventListener("click",()=>{se(!0),$.querySelectorAll("p").forEach(s=>s.classList.remove("current")),Me.querySelectorAll("p").forEach(s=>s.classList.remove("current")),t.classList.add("current"),F(T[e].src),y.load(P),y.on("ready",()=>A()),q(e)}),t.querySelector("span").addEventListener("click",()=>{C.splice(e,1),G(),j(),localStorage.setItem("playlist",JSON.stringify(C.filter(r=>r.id<6)))})})},Te=document.querySelector("#playlist"),H=document.querySelector("#all_music"),j=()=>{const n=C.map(e=>e.id);H.innerHTML="<h2>Музыка</h2>",T.forEach((e,t)=>{const i=document.createElement("p");i.innerHTML=`${e.author} - ${e.title} 
    <span class="favorites_add ${n.includes(e.id)?"inactive":"active"}">
      <span></span>
      <span></span>
    </span>`,H.appendChild(i),t===0&&i.classList.add("current"),i.addEventListener("click",()=>{se(!1),H.querySelectorAll("p").forEach(o=>o.classList.remove("current")),Te.querySelectorAll("p").forEach(o=>o.classList.remove("current")),i.classList.add("current"),F(T[t].src),y.load(P),y.on("ready",()=>A()),q(t)});const r=i.querySelector("span");r.addEventListener("click",()=>{C.filter((s,o)=>s.id===e.id).length===0?(C.push(e),r.classList.remove("active"),r.classList.add("inactive")):(C.splice(t,1),r.classList.remove("inactive"),r.classList.add("active")),localStorage.setItem("playlist",JSON.stringify(C.filter(s=>s.id<6))),G()})})},Q="/WB_LVL_2_music/assets/circle-89fa1a5b.svg",Z="/WB_LVL_2_music/assets/random-aff75743.svg",_e="/WB_LVL_2_music/assets/circleActive-85445618.svg",We="/WB_LVL_2_music/assets/randomActive-b97d7036.svg",Pe=()=>{let n=y.getMediaElement();const e=document.querySelector("#volume");e.addEventListener("click",s=>{const o=s.target.getBoundingClientRect(),c=s.clientX-o.left,h=1/100*(c/(e.clientWidth/100));n.volume=h,document.querySelector("#current_volume").style.width=`${h*100}%`});const t=document.querySelector("#timeline");t.addEventListener("click",s=>{const o=n.duration,c=s.target.getBoundingClientRect(),h=s.clientX-c.left,l=o/100*(h/(t.clientWidth/100));n.currentTime=l});const i=document.querySelector("#cycle_button");i.addEventListener("click",()=>{X?(O(!1),i.src=Q):(O(!0),i.src=_e,D(!1),r.src=Z)});const r=document.querySelector("#random_button");r.addEventListener("click",()=>{z?(D(!1),r.src=Z):(D(!0),r.src=We,O(!1),i.src=Q)}),document.querySelector("#play").addEventListener("click",()=>{const s=document.querySelector("#play").querySelector("img");n.paused?(n.play(),s.src=ie):(n.pause(),s.src=te)})},ee=localStorage.getItem("playlist");ee&&Le(JSON.parse(ee));Ee();Pe();Se();j();G();A();document.querySelector("#upload_button").addEventListener("click",()=>{const n=document.querySelector("#upload").querySelectorAll("input");let e=n[2].files[0];const t=new FileReader;t.addEventListener("load",i=>{e=i.target.result,T.push({id:T.length+1,title:n[1].value,author:n[0].value,src:e}),n.forEach(r=>r.value=""),j()}),t.readAsDataURL(e)});
