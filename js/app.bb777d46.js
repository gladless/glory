(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)o=s[u],n[o]&&m.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},i=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7a8ba4b8"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(function(t,r){a=n[e]=[t,r]});t.push(a[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e),i=function(t){c.onerror=c.onload=null,clearTimeout(l);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,a[1](o)}n[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("dac5"),a("6e26"),a("9604"),a("df67");var r=a("6e6d"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],o=(a("7c55"),a("6691")),s={},c=Object(o["a"])(s,n,i,!1,null,null,null),l=c.exports,u=a("3bc2"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{ref:"game",staticClass:"game_box",attrs:{id:"game"}})])},m=[],d=(a("7364"),a("f763"),a("7a59"),a("3160"),{phaser:null,init:function(e){this.phaser=e},play:!0,allMusic:[{name:"bg_music",src:"http://qiniu.knave.top/glory/PVP.mp3"},{name:"atk1",src:"http://qiniu.knave.top/glory/player1_atk1.mp3"}],target:{},loadAllMusic:function(){var e=this.phaser.game,t=this;t.allMusic.forEach(function(a){t.target[a.name]=e.add.audio(a.name)})}}),g=d,f={phaser:null,rem:8.28,init:function(e){this.phaser=e,this.rem=e.game.width/100},allImages:[{name:"bg",src:"static/img/game-bg.png"},{name:"junmoxiao",src:"static/img/junmoxiao.png"},{name:"player",src:"static/img/player.png"},{name:"player_atk1_0",src:"static/img/player1/a0.png"},{name:"player_atk1_1",src:"static/img/player1/a1.png"},{name:"player_atk1_2",src:"static/img/player1/a2.png"},{name:"player_atk1_3",src:"static/img/player1/a3.png"},{name:"player_atk1_4",src:"static/img/player1/a4.png"},{name:"player_atk1_5",src:"static/img/player1/a5.png"},{name:"player_atk1_6",src:"static/img/player1/a6.png"},{name:"player_atk1_7",src:"static/img/player1/a7.png"},{name:"player_atk1_8",src:"static/img/player1/a8.png"},{name:"player_atk1_9",src:"static/img/player1/a9.png"},{name:"player_atk1_10",src:"static/img/player1/a10.png"},{name:"player_atk1_11",src:"static/img/player1/a11.png"},{name:"player_atk1_12",src:"static/img/player1/a12.png"},{name:"player_atk1_13",src:"static/img/player1/a13.png"},{name:"player_atk1_14",src:"static/img/player1/a14.png"},{name:"player_atk1_15",src:"static/img/player1/a15.png"},{name:"player_atk1_16",src:"static/img/player1/a16.png"}],target:{},createBgImg:function(){var e=this,t=e.phaser.game,a=t.add.sprite(0,0,"bg");a.scale.setTo(t.width/a.width,t.height/a.height),e.target.bg=a},createJunmoxiao:function(){var e=this,t=e.phaser.game,a=t.add.sprite(40,t.world.centerY-10*e.rem,"junmoxiao");a.scale.setTo(36*e.rem/a.width,60*e.rem/a.height),e.target.junmoxiao=a},createPlayer:function(){var e=this,t=e.phaser.game,a=t.add.sprite(t.width-25*e.rem-40,t.world.centerY+10*e.rem,"player");a.scale.setTo(60*e.rem/a.width,60*e.rem/a.height),e.target.player=a},moveinJunmoxiao:function(){var e=this,t=e.phaser.game;t.add.tween(e.target.junmoxiao).from({x:-300},1e3,Phaser.Easing.Quadratic.InOut,!0),setTimeout(function(){var a=t.add.text(300,t.world.centerY-10*e.rem-50,"- 想要得到我？！ -");a.anchor.set(.5),a.align="center",a.font="Arial Black",a.fontSize=50,a.fontWeight="bold",a.stroke="#000000",a.strokeThickness=6,a.fill="#fff",setTimeout(function(){t.add.tween(a).to({y:t.world.centerY-10*e.rem-150},500,Phaser.Easing.Quadratic.InOut,!0)},500),setTimeout(function(){var r=t.add.text(300,t.world.centerY-10*e.rem-50,"- 先打败我再说吧！ -");r.anchor.set(.5),r.align="center",r.font="Arial Black",r.fontSize=50,r.fontWeight="bold",r.stroke="#000000",r.strokeThickness=6,r.fill="#fff",setTimeout(function(){t.add.tween(r).to({y:t.world.centerY-10*e.rem-150},500,Phaser.Easing.Quadratic.InOut,!0)},500),setTimeout(function(){a.destroy()},800),setTimeout(function(){r.destroy()},2e3)},1e3)},1e3)},moveinPlayer:function(){var e=this,t=e.phaser.game;t.add.tween(e.target.player).from({x:t.width+300},1e3,Phaser.Easing.Quadratic.InOut,!0),setTimeout(function(){var a=t.add.text(t.width-25*e.rem,t.world.centerY+10*e.rem-50,"- 看招！ -");a.anchor.set(.5),a.align="center",a.font="Arial Black",a.fontSize=50,a.fontWeight="bold",a.stroke="#000000",a.strokeThickness=6,a.fill="#fff",setTimeout(function(){t.add.tween(a).to({y:t.world.centerY-150+10*e.rem},500,Phaser.Easing.Quadratic.InOut,!0)},500),setTimeout(function(){a.destroy()},2e3)},3500)},atk1:function(){var e=this;this.phaser.game.add.tween(this.target.player).to({x:30*this.rem},400,Phaser.Easing.Quadratic.InOut,!0),setTimeout(function(){g.target.atk1.play(),e.phaser.game.add.tween(e.target.player).to({x:e.phaser.game.width-25*e.rem-40},500,Phaser.Easing.Quadratic.InOut,!0)},400),this.fps(this.target.player,["player_atk1_0","player_atk1_1","player_atk1_2","player_atk1_3","player_atk1_4","player_atk1_5","player_atk1_6","player_atk1_7","player_atk1_8","player_atk1_9","player_atk1_10","player_atk1_11","player_atk1_12","player_atk1_13","player_atk1_14","player_atk1_15","player_atk1_16"])},fps:function(e,t){for(var a=function(a,r){setTimeout(function(){e.loadTexture(t[a])},50*a)},r=0,n=t.length;r<n;r++)a(r,n)},beAtk:function(){}},h=f,y="",_={init:function(){h.init(this),g.init(this);var e=this.game,t=e.add.image(0,0,"preload");t.scale.setTo(e.width/t.width,e.height/t.height),y=e.add.text(e.world.centerX,e.height-100,"正在加载 0%",{fill:"#111",fontSize:"52px"}),y.anchor={x:.5,y:.5}},preload:function(){var e=this.load;h.allImages.forEach(function(t){e.image(t.name,t.src)}),g.allMusic.forEach(function(t){e.audio(t.name,t.src)}),e.onFileComplete.add(function(e){y.text="正在加载 "+e+"%"})},create:function(){h.createBgImg(),h.createJunmoxiao(),h.moveinJunmoxiao(),h.createPlayer(),h.moveinPlayer(),setTimeout(function(){h.atk1()},4e3),g.loadAllMusic(),g.target.bg_music.volume=.3,g.target.bg_music.loopFull(),console.log("done")},update:function(){}},v={name:"home",data:function(){return{game:null}},mounted:function(){this.initGame()},methods:{initGame:function(){var e=this;e.game=new Phaser.Game(828,1472,Phaser.AUTO,"game");var t={create:function(){var t=this.game,a=new Phaser.Loader(t);a.crossOrigin="anonymous",a.image("preload","http://qiniu.knave.top/glory/pre_name_1.jpeg"),a.onLoadComplete.add(function(){var a=t.add.sprite(0,0,"preload");a.scale.setTo(t.width/a.width,t.height/a.height),e.game.state.start("main")}),a.start(),t.scale.scaleMode=Phaser.ScaleManager.EXACT_FIT,t.clearBeforeRender=!1}};e.game.state.add("pre",t);var a={init:_.init,preload:_.preload,create:_.create,update:_.update};e.game.state.add("main",a),e.game.state.start("pre")}}},k=v,w=(a("ece7"),Object(o["a"])(k,p,m,!1,null,"6c08342c",null)),b=w.exports;r["a"].use(u["a"]);var x=new u["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),T=a("591a");r["a"].use(T["a"]);var P=new T["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:x,store:P,render:function(e){return e(l)}}).$mount("#app")},"7c55":function(e,t,a){"use strict";var r=a("9ce3"),n=a.n(r);n.a},8469:function(e,t,a){},"9ce3":function(e,t,a){},ece7:function(e,t,a){"use strict";var r=a("8469"),n=a.n(r);n.a}});