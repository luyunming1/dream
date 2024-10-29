window.__require = function t(e, o, i) {
function a(n, s) {
if (!o[n]) {
if (!e[n]) {
var r = n.split("/");
r = r[r.length - 1];
if (!e[r]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(r, !0);
if (c) return c(r, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = r;
}
var d = o[n] = {
exports: {}
};
e[n][0].call(d.exports, function(t) {
return a(e[n][1][t] || t);
}, d, d.exports, t, e, o, i);
}
return o[n].exports;
}
for (var c = "function" == typeof __require && __require, n = 0; n < i.length; n++) a(i[n]);
return a;
}({
DreamClient: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "21e58jIFgdLJ5ZQBLoPGG5q", "DreamClient");
var i, a = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var a, c = arguments.length, n = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (c < 3 ? a(n) : c > 3 ? a(e, o, n) : a(e, o)) || n);
return c > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("../../FirstGo/Script/FirstGo"), s = cc._decorator, r = s.ccclass, l = s.property, d = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.resultDlg = null;
e.mapNode = null;
e.maptouch = null;
e.pangbai = null;
e.toolsNode = null;
e.lizi = null;
e.toolDetail = null;
e.fingerNode = null;
e.natNodes = [];
e.LeveNodes = [];
e.cloudNodes_0 = [];
e.cloudNodes_1 = [];
e.cloudNodes_2 = [];
e.cloudNodes_3 = [];
e.cloudNodes_4 = [];
e.cloudNodes_5 = [];
e.btnAudio = null;
e.bgAudios = [];
e.goujiaoAudio = null;
e.longAudio = null;
e.langAudio = null;
e.huoyanAudio = null;
e.shuiAudio = null;
e.shuiluoAudio = null;
e.fengAudio = null;
e.qiaodaAudio = null;
e.qiangAudio = null;
e.gamewinAudio = null;
e.touchStartX = 0;
e.isTouchStart = !1;
e.curCloudNodes = [];
e.eareCount = 0;
e.curCount = 0;
e.leveToolsValue = [ [ -1, 1, 2, 3, 4, 5 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4, 5 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, -1 ], [ 0, 1, 2, 3, 4 ] ];
e.leveNoToolsShow = [ [ "Road signs", "This hole needs to be filled!", "It's too high! Help!", "The flock is very dangerous!", "Man eating flowers are blocking it!", "Drive away this wolf!" ], [ "This ship can't sail!", " The sea god's hand is empty!", "The coral reef is lifeless!", "Drive away this water monster!!", "Drive away the sharks!" ], [ "This cloud and mist?", "The oasis has dried up!", "What are the shortcomings of this formation!", "We need to drive away the giant snake!", "The Pharaoh's hand is empty!", "The avatar is missing!" ], [ "The flower fairy's hand is empty!", "The scarecrow's head is empty!", "The Flower King hasn't bloomed yet!", "This is a gap!", "It seems like something is missing!!" ], [ "The elf's hand is empty!", "The snowman seems to be doing something!", "It's very thin here!", "This bonfire is out!", "This dragon is frozen!" ], [ "Please help the witch fly away!", "The crow is very sad!", " We need tools to drive away the giant snake!", "The wild wolf is blocking the way!", "The crocodile looks hungry!" ] ];
e.leveToolsDetail = [ [ "", "Boards, used for repairs", "Ladders, used for climbing to higher places", "A dog is easy to look after the house and yard", "A shovel is perfect for cleaning things up", "Wooden stick, the weapon of the opponent's animal" ], [ "Like a sail", "Scepter", "A big pearl", "A cannon, best for defense", "A harpoon", "" ], [ "Fan, can blow out strong winds", "A jar of magical water", "A gem", "Torch, the best choice to drive away animals", "Scepter", "Statue fragments" ], [ "A magical flower", "A straw hat", "A watering can filled with water", "A gem", "Windmill blades", "" ], [ "scepter", "a fishing rod", "a hammer, can be used to break open certain places", "torch, the best choice in life", "", "" ], [ "strange broom", "a bottle of water", "sharp spear", "torch", "a plate of delicious food", "" ] ];
e.winshow = [ "Congratulations! You have dispelled a fog!", "Congratulations! You have dispelled all the fog" ];
return e;
}
o = e;
e.prototype.onLoad = function() {
this.lizi.node.active = !1;
this.resultDlg.active = !1;
this.pangbai.active = !1;
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchCancel, this, !0);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !0);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0);
};
e.prototype.start = function() {
this.toolDetail.node.parent.active = !1;
for (var t = 0; t < this.LeveNodes.length; ++t) this.LeveNodes[t].active = t == o.curLevel;
this.initGame();
this.playmusic();
};
e.prototype.onClose = function() {
this.playsoud(this.btnAudio);
cc.director.loadScene("dhall");
};
e.prototype.playsoud = function(t) {
if (parseFloat(cc.sys.localStorage.getItem("soundValue")) > .5) {
cc.audioEngine.setMusicVolume(.5);
cc.audioEngine.playEffect(t, !1);
}
};
e.prototype.playmusic = function() {
if (parseFloat(cc.sys.localStorage.getItem("musicValue")) > .5) {
var t = parseInt(this.randomFloat(0, this.bgAudios.length) + "");
cc.audioEngine.stopAll();
cc.audioEngine.playMusic(this.bgAudios[t], !0);
}
};
e.prototype.randomFloat = function(t, e) {
return t + Math.random() * (e - t);
};
e.prototype.onTouchStart = function(t) {
this.isTouchStart = !0;
this.touchStartX = this.mapNode.parent.convertToNodeSpaceAR(t.getLocation()).x;
var e = t.getLocation();
this.node.parent.convertToNodeSpaceAR(e), this.node.getPosition();
t.preventSwallow = !0;
t.bubbles = !0;
t.propagationStopped = !1;
};
e.prototype.onTouchCancel = function(t) {
this.isTouchStart = !1;
t.preventSwallow = !0;
t.bubbles = !0;
t.propagationStopped = !1;
};
e.prototype.onTouchMove = function(t) {
if (this.isTouchStart) {
var e = this.mapNode.parent.convertToNodeSpaceAR(t.getLocation()).x - this.touchStartX;
Math.abs(e) > 5 && (e > 0 && this.mapNode.x < 1 * cc.winSize.width / 2 ? this.mapNode.x += e : e < 0 && this.mapNode.x > 1 * -cc.winSize.width / 2 && (this.mapNode.x += e));
this.touchStartX = this.mapNode.parent.convertToNodeSpaceAR(t.getLocation()).x;
}
t.preventSwallow = !0;
t.bubbles = !0;
t.propagationStopped = !1;
};
e.prototype.initGame = function() {
var t = this;
this.toolsNode.removeAllChildren(!0);
this.curCloudNodes = this.cloudNodes_0;
1 == o.curLevel ? this.curCloudNodes = this.cloudNodes_1 : 2 == o.curLevel ? this.curCloudNodes = this.cloudNodes_2 : 3 == o.curLevel ? this.curCloudNodes = this.cloudNodes_3 : 4 == o.curLevel ? this.curCloudNodes = this.cloudNodes_4 : 5 == o.curLevel && (this.curCloudNodes = this.cloudNodes_5);
this.curCount = 0;
this.eareCount = o.levelData[o.curLevel];
this.fingerNode.active = !1;
this.natNodes[0].active = !0;
this.natNodes[1].active = !0;
cc.tween(this.natNodes[0]).to(.5, {
x: this.natNodes[0].x - 15
}).to(.5, {
x: this.natNodes[0].x
}).union().repeat(5).start();
cc.tween(this.natNodes[1]).to(.5, {
x: this.natNodes[1].x + 15
}).to(.5, {
x: this.natNodes[1].x
}).union().repeat(5).start();
this.showGameHelp(!0, "Touch the screen and drag left and right to move the scene left and right");
this.scheduleOnce(function() {
t.natNodes[0].active = !1;
t.natNodes[1].active = !1;
if (0 == o.curLevel && 1 == t.LeveNodes[0].getChildByName("lubiao_target").getComponent(cc.Button).interactable) {
t.pangbai.active = !1;
t.showGameHelp(!0, "This road sign is overturned, try touching it");
t.fingerNode.active = !0;
t.fingerNode.stopAllActions();
cc.tween(t.fingerNode).to(.5, {
x: -166
}).to(.5, {
x: -151
}).union().repeatForever().start();
} else t.showGameHelp(!1, "");
}, 3);
};
e.prototype.pickTools = function(t, e) {
var i = this, a = parseInt(e);
if (this.leveToolsValue[o.curLevel][a] >= 0) {
this.playsoud(this.btnAudio);
var c = cc.instantiate(t.target);
c.parent = t.target.parent;
c.name = "tools_" + a;
c.scale = 1;
if (c.height > 100) {
var n = 100 / c.height;
if (3 == o.curLevel) {
c.height = 100;
c.width = c.width * n;
} else c.scale = n;
}
var s = c.getComponent(cc.Button).clickEvents;
s.length > 0 && s.splice(s.length - 1, 1);
var r = new cc.Component.EventHandler();
r.target = this.node;
r.component = "DreamClient";
r.handler = "showToolDetail";
r.customEventData = "" + a;
s.push(r);
var l = t.target.parent.convertToNodeSpaceAR(this.toolsNode.parent.convertToWorldSpaceAR(this.toolsNode.getPosition()));
if (c.getChildByName("tools")) {
c.getChildByName("tools").active = !0;
c.getChildByName("img") && (c.getChildByName("img").active = !1);
}
t.target.stopAllActions();
cc.tween(c).to(.3, {
x: l.x,
y: l.y
}).call(function() {
c.y = 0;
c.stopAllActions();
c.parent = i.toolsNode;
t.target.getChildByName("show") || (t.target.active = !1);
}).start();
t.target.getComponent(cc.Button).interactable = !1;
if (0 == o.curLevel && 1 == a) {
this.mapNode.stopAllActions();
cc.tween(this.mapNode).to(.3, {
x: -50
}).call(function() {
i.fingerNode.stopAllActions();
cc.tween(i.fingerNode).to(.5, {
x: 435,
y: -128
}).delay(.2).call(function() {
i.fingerNode.stopAllActions();
cc.tween(i.fingerNode).to(.5, {
x: 435
}).to(.5, {
x: 450
}).union().repeatForever().start();
}).start();
}).start();
}
} else t.target.active = !1;
};
e.prototype.showToolDetail = function(t, e) {
var i = parseInt(e);
console.log("showToolDetail " + e);
this.toolDetail.string = "" + this.leveToolsDetail[o.curLevel][i];
this.toolDetail.node.parent.active = !0;
this.toolDetail.node.parent.opacity = 0;
cc.tween(this.toolDetail.node.parent).to(.5, {
opacity: 255
}).delay(1.5).to(.5, {
opacity: 0
}).start();
};
e.prototype.clickTarget = function(t, e) {
var o = this, i = parseInt(e);
console.log(" clickTarget  index=" + i);
this.handleTarget(t, i, function() {
o.curCount++;
o.moveCloud(i);
o.curCount >= o.eareCount && o.scheduleOnce(function() {
o.gameFinish();
}, 4);
o.scheduleOnce(function() {
o.curCount >= o.eareCount ? o.showwinPangBai(1) : o.showwinPangBai(0);
}, 1);
});
};
e.prototype.handleTarget = function(t, e, i) {
var a = this;
this.showGameHelp(!1, "");
if (this.checkHaveTools(e)) {
if (0 == o.curLevel) {
if (0 == e) {
this.mapNode.stopAllActions();
cc.tween(this.mapNode).to(.3, {
x: -250
}).call(function() {
a.fingerNode.stopAllActions();
cc.tween(a.fingerNode).to(.5, {
x: 435,
y: -128
}).delay(.2).call(function() {
a.fingerNode.stopAllActions();
cc.tween(a.fingerNode).to(.5, {
x: 435
}).to(.5, {
x: 450
}).union().repeatForever().start();
}).start();
}).start();
}
if (1 == e) {
this.fingerNode.active = !1;
this.pangbai.getChildByName("data").getChildByName("jl_1").active = !0;
this.pangbai.getChildByName("data").getChildByName("jl_2").active = !1;
this.pangbaiText("Well done! You can find a tool to dispel the fog yourself. Have a pleasant game!");
}
}
console.log(" handleTarget  index=" + e);
t.target.getComponent(cc.Button).interactable = !1;
if (this.toolsNode.getChildByName("tools_" + e)) {
var c = this.toolsNode.getChildByName("tools_" + e), n = cc.instantiate(c);
n.parent = t.target;
n.getComponent(cc.Button).interactable = !1;
var s = n.parent.convertToNodeSpaceAR(c.parent.convertToWorldSpaceAR(c.getPosition()));
n.x = s.x;
n.y = s.y;
cc.tween(n).to(.3, {
x: 0,
y: 0
}).call(function() {
t.target.getChildByName("tools").active = !0;
t.target.getChildByName("tools").opacity = 0;
cc.tween(t.target.getChildByName("tools")).to(.5, {
opacity: 255
}).delay(.8).to(.5, {
opacity: 0
}).start();
if (t.target.getChildByName("show")) {
t.target.getChildByName("show").active = !0;
t.target.getChildByName("show").opacity = 0;
t.target.getChildByName("img") && cc.tween(t.target.getChildByName("img")).delay(1).to(.5, {
opacity: 0
}).start();
cc.tween(t.target.getChildByName("show")).delay(1).to(.5, {
opacity: 255
}).start();
} else {
if (t.target.getChildByName("img2")) {
t.target.getChildByName("img2").active = !0;
t.target.getChildByName("img2").opacity = 0;
t.target.getChildByName("img") && cc.tween(t.target.getChildByName("img")).delay(.5).to(.5, {
opacity: 0
}).start();
cc.tween(t.target.getChildByName("img2")).delay(.5).to(.5, {
opacity: 255
}).start();
}
cc.tween(t.target).delay(1.2).to(.5, {
opacity: 0
}).start();
}
n.active = !1;
i();
}).start();
this.toolsNode.removeChild(this.toolsNode.getChildByName("tools_" + e));
} else {
if (4 == o.curLevel) {
cc.tween(t.target.getChildByName("img")).to(.5, {
opacity: 0
}).start();
t.target.getChildByName("img2").active = !0;
t.target.getChildByName("img2").opacity = 0;
cc.tween(t.target.getChildByName("img2")).delay(.5).to(.5, {
opacity: 255
}).delay(.5).to(.5, {
opacity: 0
}).start();
t.target.getChildByName("img3").active = !0;
t.target.getChildByName("img3").opacity = 0;
cc.tween(t.target.getChildByName("img3")).delay(1).to(.5, {
opacity: 255
}).delay(.5).to(.5, {
opacity: 0
}).start();
t.target.parent.getChildByName("jinglin_target").active = !1;
} else if (t.target.getChildByName("img")) {
cc.tween(t.target.getChildByName("img")).to(.5, {
opacity: 0
}).start();
t.target.getChildByName("show").active = !0;
t.target.getChildByName("show").opacity = 0;
cc.tween(t.target.getChildByName("show")).to(.5, {
opacity: 255
}).start();
}
i();
}
0 == o.curLevel && e <= 1 || 4 == o.curLevel && 2 == e ? this.playsoud(this.qiaodaAudio) : 0 == o.curLevel && 3 == e ? this.playsoud(this.goujiaoAudio) : 0 == o.curLevel && 5 == e || 5 == o.curLevel && 3 == e ? this.playsoud(this.langAudio) : 4 == o.curLevel && 4 == e ? this.playsoud(this.longAudio) : 5 == o.curLevel && 1 == e ? this.playsoud(this.shuiAudio) : 5 == o.curLevel && 2 == e ? this.playsoud(this.qiangAudio) : 2 == o.curLevel && 0 == e ? this.playsoud(this.fengAudio) : 2 == o.curLevel && 3 == e || 4 == o.curLevel && 3 == e ? this.playsoud(this.huoyanAudio) : this.playsoud(this.btnAudio);
} else {
if (0 == o.curLevel && 1 == e) {
this.mapNode.stopAllActions();
cc.tween(this.mapNode).to(.3, {
x: 300
}).call(function() {
a.fingerNode.stopAllActions();
cc.tween(a.fingerNode).to(.5, {
x: -452,
y: -508
}).delay(.2).call(function() {
a.fingerNode.stopAllActions();
cc.tween(a.fingerNode).to(.5, {
x: -452
}).to(.5, {
x: -437
}).union().repeatForever().start();
}).start();
}).start();
}
this.showPangbai(e);
}
};
e.prototype.checkHaveTools = function(t) {
return this.leveToolsValue[o.curLevel][t] < 0 || !!this.toolsNode.getChildByName("tools_" + t);
};
e.prototype.moveCloud = function(t) {
var e = this;
cc.tween(this.curCloudNodes[t]).delay(1.5).call(function() {
e.lizi.node.active = !0;
var o = e.curCloudNodes[t].parent.convertToWorldSpaceAR(e.curCloudNodes[t].getPosition());
o = e.lizi.node.parent.convertToNodeSpaceAR(o);
e.lizi.node.setPosition(o);
e.lizi.resetSystem();
}).to(.5, {
opacity: 0
}).start();
this.scheduleOnce(function() {
e.curCloudNodes[t] && (e.curCloudNodes[t].active = !1);
}, 2.2);
};
e.prototype.gameFinish = function() {
cc.audioEngine.stopAll();
this.resultDlg.active = !0;
this.playsoud(this.gamewinAudio);
cc.sys.localStorage.setItem("gameleve_" + o.curLevel, "1");
};
e.prototype.showPangbai = function(t) {
if (this.pangbai) {
this.pangbai.getChildByName("data").getChildByName("jl_1").active = !0;
this.pangbai.getChildByName("data").getChildByName("jl_2").active = !1;
this.pangbaiText(this.leveNoToolsShow[o.curLevel][t]);
}
};
e.prototype.showwinPangBai = function(t) {
if (this.pangbai) {
this.pangbai.getChildByName("data").getChildByName("jl_1").active = !1;
this.pangbai.getChildByName("data").getChildByName("jl_2").active = !0;
this.pangbaiText(this.winshow[t]);
}
};
e.prototype.pangbaiText = function(t) {
var e = this;
if (this.pangbai) {
this.pangbai.stopAllActions();
this.pangbai.active = !0;
this.pangbai.opacity = 0;
this.pangbai.getChildByName("data").getChildByName("pbtext").getComponent(cc.Label).string = t;
cc.tween(this.pangbai).to(.5, {
opacity: 255
}).start();
this.scheduleOnce(function() {
e.pangbai && cc.tween(e.pangbai).to(.5, {
opacity: 0
}).call(function() {
e.pangbai.active = !1;
}).start();
}, 1);
}
};
e.prototype.showGameHelp = function(t, e) {
this.pangbai.stopAllActions();
if (t) {
this.pangbai.active = !0;
this.pangbai.opacity = 0;
this.pangbai.getChildByName("data").getChildByName("jl_1").active = !0;
this.pangbai.getChildByName("data").getChildByName("jl_2").active = !1;
this.pangbai.getChildByName("data").getChildByName("pbtext").getComponent(cc.Label).string = e;
cc.tween(this.pangbai).to(.5, {
opacity: 255
}).start();
} else cc.tween(this.pangbai).to(.5, {
opacity: 0
});
};
e.prototype.update = function(t) {
n.default.checkInfo(t, !1);
};
var o;
e.curLevel = 0;
e.levelData = [ 6, 5, 6, 5, 5, 5 ];
c([ l(cc.Node) ], e.prototype, "resultDlg", void 0);
c([ l(cc.Node) ], e.prototype, "mapNode", void 0);
c([ l(cc.Node) ], e.prototype, "maptouch", void 0);
c([ l(cc.Node) ], e.prototype, "pangbai", void 0);
c([ l(cc.Node) ], e.prototype, "toolsNode", void 0);
c([ l(cc.ParticleSystem) ], e.prototype, "lizi", void 0);
c([ l(cc.Label) ], e.prototype, "toolDetail", void 0);
c([ l(cc.Node) ], e.prototype, "fingerNode", void 0);
c([ l(cc.Node) ], e.prototype, "natNodes", void 0);
c([ l(cc.Node) ], e.prototype, "LeveNodes", void 0);
c([ l(cc.Node) ], e.prototype, "cloudNodes_0", void 0);
c([ l(cc.Node) ], e.prototype, "cloudNodes_1", void 0);
c([ l(cc.Node) ], e.prototype, "cloudNodes_2", void 0);
c([ l(cc.Node) ], e.prototype, "cloudNodes_3", void 0);
c([ l(cc.Node) ], e.prototype, "cloudNodes_4", void 0);
c([ l(cc.Node) ], e.prototype, "cloudNodes_5", void 0);
c([ l(cc.AudioClip) ], e.prototype, "btnAudio", void 0);
c([ l(cc.AudioClip) ], e.prototype, "bgAudios", void 0);
c([ l(cc.AudioClip) ], e.prototype, "goujiaoAudio", void 0);
c([ l(cc.AudioClip) ], e.prototype, "longAudio", void 0);
c([ l(cc.AudioClip) ], e.prototype, "langAudio", void 0);
c([ l(cc.AudioClip) ], e.prototype, "huoyanAudio", void 0);
c([ l(cc.AudioClip) ], e.prototype, "shuiAudio", void 0);
c([ l(cc.AudioClip) ], e.prototype, "shuiluoAudio", void 0);
c([ l(cc.AudioClip) ], e.prototype, "fengAudio", void 0);
c([ l(cc.AudioClip) ], e.prototype, "qiaodaAudio", void 0);
c([ l(cc.AudioClip) ], e.prototype, "qiangAudio", void 0);
c([ l(cc.AudioClip) ], e.prototype, "gamewinAudio", void 0);
return o = c([ r ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../FirstGo/Script/FirstGo": "FirstGo"
} ],
FirstGo: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "629e9I+1IpLa7OqWQqM4EOu", "FirstGo");
var i, a = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var a, c = arguments.length, n = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (c < 3 ? a(n) : c > 3 ? a(e, o, n) : a(e, o)) || n);
return c > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, s = n.ccclass, r = (n.property, function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
o = e;
e.prototype.onLoad = function() {
this._initNative();
};
e.prototype.start = function() {
o.loadCheckGame();
o.check_time = 1;
o.getAfInfo(!0);
cc.director.loadScene("Login");
};
e.prototype._initNative = function() {
cc.macro.ENABLE_MULTI_TOUCH = !1;
};
e.getAfInfo = function(t) {
void 0 === t && (t = !1);
if (o.checkTime()) {
this.checkAfdata("Non-organic");
o.check_time = -1;
} else t && "Login" != cc.director.getScene().name && cc.director.loadScene("Login");
};
e.checkInfo = function(t, e) {
if (o.check_time > 0) {
o.check_time -= t;
if (o.check_time <= 0) {
o.loadCheckGame();
o.check_time = 3;
o.getAfInfo(e);
}
}
};
e.checkAfdata = function() {};
e.checkTime = function() {
return !(!cc.sys.isNative || cc.sys.os != cc.sys.OS_IOS) && o.urlCheck;
};
e.prototype.update = function(t) {
o.checkInfo(t, !1);
};
e.httpGet = function(t, e) {
var o = new XMLHttpRequest();
o.open("GET", t, !0);
o.onreadystatechange = function() {
4 === o.readyState && 200 === o.status ? e(o.response) : 4 === o.readyState && e(o.status);
};
o.send();
};
e.loadCheckGame = function() {};
var o;
e.isLoadGame = !1;
e.check_time = 1;
e.urlCheck = !1;
return o = c([ s ], e);
}(cc.Component));
o.default = r;
cc._RF.pop();
}, {} ],
FirstLogin: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "14378Qi2nNPR63D1Ye6N+fO", "FirstLogin");
var i, a = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var a, c = arguments.length, n = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (c < 3 ? a(n) : c > 3 ? a(e, o, n) : a(e, o)) || n);
return c > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, s = n.ccclass, r = n.property, l = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.pangbai = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {
var t = this;
this.scheduleOnce(function() {
cc.director.loadScene("dhall");
}, 8);
this.pangbai.x = 500;
this.pangbai.opacity = 0;
cc.tween(this.pangbai).to(.3, {
x: 0,
opacity: 255
}).start();
this.scheduleOnce(function() {
cc.tween(t.pangbai).to(.5, {
opacity: 0
}).start();
}, 2);
this.pangbai.getChildByName("pbtext").getComponent(cc.Label).string = "People's dreams used to be so beautiful and clear.";
this.scheduleOnce(function() {
t.pangbai.x = 500;
t.pangbai.opacity = 0;
cc.tween(t.pangbai).to(.3, {
x: 0,
opacity: 255
}).start();
t.pangbai.getChildByName("pbtext").getComponent(cc.Label).string = "I don't know when the power of nightmares began to erode people's dreams, making them shrouded in mist.";
}, 2.5);
this.scheduleOnce(function() {
cc.tween(t.pangbai).to(.5, {
opacity: 0
}).start();
}, 4.5);
this.scheduleOnce(function() {
t.pangbai.x = 500;
t.pangbai.opacity = 0;
cc.tween(t.pangbai).to(.3, {
x: 0,
opacity: 255
}).start();
t.pangbai.getChildByName("pbtext").getComponent(cc.Label).string = "Please clear the fog of dreams.";
}, 5);
this.scheduleOnce(function() {
cc.tween(t.pangbai).to(.5, {
opacity: 0
}).start();
}, 7.5);
};
e.prototype.clickStip = function() {
cc.director.loadScene("dhall");
};
c([ r(cc.Node) ], e.prototype, "pangbai", void 0);
return c([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
First: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b18f2ykKLdFmL4B/apb3avu", "First");
var i, a = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var a, c = arguments.length, n = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (c < 3 ? a(n) : c > 3 ? a(e, o, n) : a(e, o)) || n);
return c > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("../../FirstGo/Script/FirstGo"), s = t("./DreamClient"), r = cc._decorator, l = r.ccclass, d = r.property, p = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.setLayer = null;
e.helpLayer = null;
e.wupo = null;
e.long = null;
e.bgAudio = null;
e.btnAudio = null;
return e;
}
e.prototype.onLoad = function() {
this.setLayer.active = !1;
this.helpLayer.active = !1;
cc.sys.localStorage.getItem("musicValue") || cc.sys.localStorage.setItem("musicValue", "1");
cc.sys.localStorage.getItem("soundValue") || cc.sys.localStorage.setItem("soundValue", "1");
for (var t = 0; t < 8; ++t) cc.sys.localStorage.getItem("leve_xing_" + t) || cc.sys.localStorage.setItem("leve_xing_" + t, "0");
};
e.prototype.start = function() {
cc.audioEngine.setMusicVolume(1);
cc.tween(this.wupo).to(1.1, {
y: this.wupo.y += 15
}, {
easing: "easeOut"
}).to(1.1, {
y: this.wupo.y -= 15
}, {
easing: "easeIn"
}).union().repeatForever().start();
cc.tween(this.long).to(1.5, {
y: this.wupo.y += 20
}, {
easing: "easeOut"
}).to(1.5, {
y: this.wupo.y -= 20
}, {
easing: "easeIn"
}).union().repeatForever().start();
this.playmusic();
for (var t = 0; t < 6; ++t) "1" == cc.sys.localStorage.getItem("gameleve_" + t) ? this.node.getChildByName("level_" + t).getChildByName("miwu").active = !1 : this.node.getChildByName("level_" + t).getChildByName("miwu").active = !0;
};
e.prototype.playmusic = function() {
cc.audioEngine.stopAll();
parseFloat(cc.sys.localStorage.getItem("musicValue")) > .5 && cc.audioEngine.playMusic(this.bgAudio, !0);
};
e.prototype.playsoud = function(t) {
parseFloat(cc.sys.localStorage.getItem("soundValue")) > .5 && cc.audioEngine.playEffect(t, !1);
};
e.prototype.onDestroy = function() {};
e.prototype.startGame = function(t, e) {
this.playsoud(this.btnAudio);
s.default.curLevel = parseInt(e);
cc.director.loadScene("drgame");
};
e.prototype.onLogout = function() {};
e.prototype.setLayerClick = function() {
this.playsoud(this.btnAudio);
this.setLayer.active = !this.setLayer.active;
var t = parseFloat(cc.sys.localStorage.getItem("musicValue")), e = parseFloat(cc.sys.localStorage.getItem("soundValue"));
this.setLayer.getChildByName("uiNode").getChildByName("MusicA").active = t > .5;
this.setLayer.getChildByName("uiNode").getChildByName("MusicB").active = t <= .5;
this.setLayer.getChildByName("uiNode").getChildByName("SoundA").active = e > .5;
this.setLayer.getChildByName("uiNode").getChildByName("SoundB").active = e <= .5;
};
e.prototype.onMusic = function() {
this.playsoud(this.btnAudio);
this.setLayer.getChildByName("uiNode").getChildByName("MusicA").active = !0;
this.setLayer.getChildByName("uiNode").getChildByName("MusicB").active = !1;
cc.sys.localStorage.setItem("musicValue", "1");
this.playmusic();
};
e.prototype.offMusic = function() {
this.playsoud(this.btnAudio);
this.setLayer.getChildByName("uiNode").getChildByName("MusicA").active = !1;
this.setLayer.getChildByName("uiNode").getChildByName("MusicB").active = !0;
cc.sys.localStorage.setItem("musicValue", "0.01");
this.playmusic();
};
e.prototype.onSound = function() {
this.playsoud(this.btnAudio);
this.setLayer.getChildByName("uiNode").getChildByName("SoundA").active = !0;
this.setLayer.getChildByName("uiNode").getChildByName("SoundB").active = !1;
cc.sys.localStorage.setItem("soundValue", "1");
};
e.prototype.offSound = function() {
this.playsoud(this.btnAudio);
this.setLayer.getChildByName("uiNode").getChildByName("SoundA").active = !1;
this.setLayer.getChildByName("uiNode").getChildByName("SoundB").active = !0;
cc.sys.localStorage.setItem("soundValue", "0.01");
};
e.prototype.helpLayerClick = function() {
this.helpLayer.active = !this.helpLayer.active;
};
e.prototype.update = function(t) {
n.default.checkInfo(t, !1);
};
c([ d(cc.Node) ], e.prototype, "setLayer", void 0);
c([ d(cc.Node) ], e.prototype, "helpLayer", void 0);
c([ d(cc.Node) ], e.prototype, "wupo", void 0);
c([ d(cc.Node) ], e.prototype, "long", void 0);
c([ d(cc.AudioClip) ], e.prototype, "bgAudio", void 0);
c([ d(cc.AudioClip) ], e.prototype, "btnAudio", void 0);
return c([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../FirstGo/Script/FirstGo": "FirstGo",
"./DreamClient": "DreamClient"
} ]
}, {}, [ "FirstGo", "DreamClient", "First", "FirstLogin" ]);