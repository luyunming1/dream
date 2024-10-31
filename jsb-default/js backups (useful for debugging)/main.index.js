window.__require = function t(e, o, i) {
function a(n, r) {
if (!o[n]) {
if (!e[n]) {
var s = n.split("/");
s = s[s.length - 1];
if (!e[s]) {
var l = "function" == typeof __require && __require;
if (!r && l) return l(s, !0);
if (c) return c(s, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = s;
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (a = t[r]) && (n = (c < 3 ? a(n) : c > 3 ? a(e, o, n) : a(e, o)) || n);
return c > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, r = n.ccclass, s = n.property, l = function(t) {
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
e.timeCount = null;
e.darkNode = null;
e.jingling = null;
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
e.isStart = !1;
e.tcount = 0;
e.eareCount = 0;
e.curCount = 0;
e.darkCount = 0;
e.darkDeleteCount = 0;
e.curIndex = 0;
e.curClear = 0;
e.isDarkMove = !1;
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
this.isStart = !0;
this.tcount = 0;
this.darkCount = 0;
this.darkDeleteCount = 0;
};
e.prototype.onClose = function() {
this.playsoud(this.btnAudio);
cc.director.loadScene("dhall");
};
e.prototype.playsoud = function(t) {
if (parseFloat(cc.sys.localStorage.getItem("soundvolume")) > .5) {
cc.audioEngine.setMusicVolume(.5);
cc.audioEngine.playEffect(t, !1);
}
};
e.prototype.playmusic = function() {
if (parseFloat(cc.sys.localStorage.getItem("musicvolume")) > .5) {
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
this.toolsNode.removeAllChildren(!0);
this.curCloudNodes = this.cloudNodes_0;
1 == o.curLevel ? this.curCloudNodes = this.cloudNodes_1 : 2 == o.curLevel ? this.curCloudNodes = this.cloudNodes_2 : 3 == o.curLevel ? this.curCloudNodes = this.cloudNodes_3 : 4 == o.curLevel ? this.curCloudNodes = this.cloudNodes_4 : 5 == o.curLevel && (this.curCloudNodes = this.cloudNodes_5);
this.curCount = 0;
this.eareCount = o.levelData[o.curLevel];
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
var r = c.getComponent(cc.Button).clickEvents;
r.length > 0 && r.splice(r.length - 1, 1);
var s = new cc.Component.EventHandler();
s.target = this.node;
s.component = "DreamClient";
s.handler = "showToolDetail";
s.customEventData = "" + a;
r.push(s);
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
var o = this;
if (!this.isDarkMove) {
var i = parseInt(e);
console.log(" clickTarget  index=" + i);
this.handleTarget(t, i, function() {
o.curCount++;
o.moveCloud(i);
if (o.curCount >= o.eareCount) {
o.isStart = !1;
o.scheduleOnce(function() {
o.gameFinish();
}, 15);
}
o.scheduleOnce(function() {
o.curCount, o.eareCount;
}, 1);
});
}
};
e.prototype.handleTarget = function(t, e, i) {
this.showGameHelp(!1, "");
if (this.checkHaveTools(e)) {
console.log(" handleTarget  index=" + e);
t.target.getComponent(cc.Button).interactable = !1;
if (this.toolsNode.getChildByName("tools_" + e)) {
var a = this.toolsNode.getChildByName("tools_" + e), c = cc.instantiate(a);
c.parent = t.target;
c.getComponent(cc.Button).interactable = !1;
var n = c.parent.convertToNodeSpaceAR(a.parent.convertToWorldSpaceAR(a.getPosition()));
c.x = n.x;
c.y = n.y;
cc.tween(c).to(.3, {
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
c.active = !1;
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
} else this.showPangbai(e);
};
e.prototype.checkHaveTools = function(t) {
return this.leveToolsValue[o.curLevel][t] < 0 || !!this.toolsNode.getChildByName("tools_" + t);
};
e.prototype.moveCloud = function(t) {
var e = this;
this.isDarkMove = !0;
cc.tween(this.curCloudNodes[t]).delay(1.5).to(.5, {
opacity: 0
}).call(function() {
e.curIndex = t;
var i, a = e.LeveNodes[o.curLevel].getChildByName("miwu").getChildByName("dark_" + t), c = a.parent.convertToWorldSpaceAR(a.getPosition());
c = e.mapNode.convertToNodeSpaceAR(c);
for (var n = 0; n < 10; ++n) {
(i = cc.instantiate(e.darkNode)).parent = e.mapNode;
i.getChildByName("liziDark").active = !0;
i.getChildByName("liziLight").active = !1;
i.getChildByName("liziDark").getComponent(cc.ParticleSystem).resetSystem();
i.x = c.x + e.randomFloat(-50, 50);
i.y = c.y + e.randomFloat(-50, 50);
9 == n ? e.moveDark(i, 0, c, function() {}) : e.moveDark(i, 0, c);
}
}).start();
this.scheduleOnce(function() {
e.curCloudNodes[t] && (e.curCloudNodes[t].active = !1);
}, 2.2);
};
e.prototype.clickDark = function(t) {
var e = this;
this.darkDeleteCount++;
this.darkCount++;
t.target.getComponent(cc.Button).interactable = !1;
t.target.stopAllActions();
var o = t.target.parent.convertToNodeSpaceAR(this.jingling.parent.convertToWorldSpaceAR(this.jingling.getPosition()));
t.target.stopAllActions();
cc.tween(t.target).to(.3, {
x: o.x,
y: o.y
}).call(function() {
t.target.active = !1;
e.mapNode.removeChild(t.target);
e.darkDeleteCount >= 10 && e.clearDark();
}).start();
t.target.getComponent(cc.Button).interactable = !1;
};
e.prototype.moveDark = function(t, e, o, i) {
var a = this;
void 0 === i && (i = null);
if (t) {
console.log("moveDark --- ");
t.stopAllActions();
var c = this.randomFloat(-260, 260) + o.x, n = this.randomFloat(-260, 260) + o.y, r = Math.sqrt((t.x - c) * (t.x - c) + (t.y - n) * (t.y - n)) / 200;
cc.tween(t).to(r, {
x: c,
y: n
}).call(function() {
if (e < 5) a.moveDark(t, e + 1, o, i); else if (t) {
t.stopAllActions();
cc.tween(t).to(.5, {
opacity: 0
}).call(function() {
a.darkDeleteCount++;
a.mapNode.removeChild(t);
a.darkDeleteCount >= 10 && a.clearDark();
}).start();
}
}).start();
}
};
e.prototype.clearDark = function() {
this.isDarkMove = !1;
for (var t = this.darkCount, e = 0; e < t; ++e) this.moveClear(.3 * e);
this.curClear += t >= 9 ? 100 / this.leveToolsValue[o.curLevel].length : 100 / this.leveToolsValue[o.curLevel].length * (t / 9);
this.curClear >= 99 && (this.curClear = 100);
this.darkCount = 0;
this.darkDeleteCount = 0;
this.timeCount.string = this.curClear.toFixed(0) + "%";
};
e.prototype.moveClear = function(t) {
var e = this;
this.scheduleOnce(function() {
if (e.darkNode) {
var i, a = e.jingling.parent.convertToWorldSpaceAR(e.jingling.getPosition());
a = e.mapNode.convertToNodeSpaceAR(a);
(i = cc.instantiate(e.darkNode)).parent = e.mapNode;
i.active = !0;
i.getChildByName("liziDark").active = !1;
i.getChildByName("liziLight").active = !0;
i.getChildByName("liziLight").getComponent(cc.ParticleSystem).resetSystem();
i.x = a.x;
i.y = a.y;
var c = e.LeveNodes[o.curLevel].getChildByName("miwu").getChildByName("dark_" + e.curIndex), n = c.parent.convertToWorldSpaceAR(c.getPosition());
n = e.mapNode.convertToNodeSpaceAR(n);
console.log("moveClear ------- " + t + "  opacity=" + c.opacity);
cc.tween(i).to(.3, {
x: n.x,
y: n.y
}).call(function() {
c.opacity -= 22;
c.opacity < 20 && (c.opacity = 0);
e.mapNode.removeChild(i);
}).start();
}
}, t);
};
e.prototype.gameFinish = function() {
cc.audioEngine.stopAll();
this.resultDlg.active = !0;
this.resultDlg.getChildByName("text").getComponent(cc.Label).string = "You Clear " + this.curClear.toFixed(0) + "% dark";
this.playsoud(this.gamewinAudio);
cc.sys.localStorage.setItem("gameleve_" + o.curLevel, "1");
var t = parseInt("" + this.tcount);
cc.sys.localStorage.getItem("timeleve_" + o.curLevel) && (t = parseInt(cc.sys.localStorage.getItem("timeleve_" + o.curLevel)));
cc.sys.localStorage.setItem("timeleve_" + o.curLevel, "" + t);
var e = 0;
cc.sys.localStorage.getItem("gameclear_" + o.curLevel) && (e = parseInt(cc.sys.localStorage.getItem("gameclear_" + o.curLevel)));
e < this.curClear && (e = this.curClear);
cc.sys.localStorage.setItem("gameclear_" + o.curLevel, "" + e);
};
e.prototype.hideFinish = function() {
this.resultDlg.active = !1;
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
this.isStart && (this.tcount += t);
};
var o;
e.curLevel = 0;
e.levelData = [ 6, 5, 6, 5, 5, 5 ];
c([ s(cc.Node) ], e.prototype, "resultDlg", void 0);
c([ s(cc.Node) ], e.prototype, "mapNode", void 0);
c([ s(cc.Node) ], e.prototype, "maptouch", void 0);
c([ s(cc.Node) ], e.prototype, "pangbai", void 0);
c([ s(cc.Node) ], e.prototype, "toolsNode", void 0);
c([ s(cc.ParticleSystem) ], e.prototype, "lizi", void 0);
c([ s(cc.Label) ], e.prototype, "toolDetail", void 0);
c([ s(cc.Label) ], e.prototype, "timeCount", void 0);
c([ s(cc.Node) ], e.prototype, "darkNode", void 0);
c([ s(cc.Node) ], e.prototype, "jingling", void 0);
c([ s(cc.Node) ], e.prototype, "LeveNodes", void 0);
c([ s(cc.Node) ], e.prototype, "cloudNodes_0", void 0);
c([ s(cc.Node) ], e.prototype, "cloudNodes_1", void 0);
c([ s(cc.Node) ], e.prototype, "cloudNodes_2", void 0);
c([ s(cc.Node) ], e.prototype, "cloudNodes_3", void 0);
c([ s(cc.Node) ], e.prototype, "cloudNodes_4", void 0);
c([ s(cc.Node) ], e.prototype, "cloudNodes_5", void 0);
c([ s(cc.AudioClip) ], e.prototype, "btnAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "bgAudios", void 0);
c([ s(cc.AudioClip) ], e.prototype, "goujiaoAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "longAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "langAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "huoyanAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "shuiAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "shuiluoAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "fengAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "qiaodaAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "qiangAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "gamewinAudio", void 0);
return o = c([ r ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
DreamTeach: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0e464hxa7BP3ZJK1bfRGyPi", "DreamTeach");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (a = t[r]) && (n = (c < 3 ? a(n) : c > 3 ? a(e, o, n) : a(e, o)) || n);
return c > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, r = n.ccclass, s = n.property, l = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mapNode = null;
e.pangbai = null;
e.toolsNode = null;
e.lizi = null;
e.toolDetail = null;
e.timeCount = null;
e.darkNode = null;
e.jingling = null;
e.fingerNode = null;
e.natNodes = [];
e.LeveNodes = [];
e.cloudNodes_0 = [];
e.btnAudio = null;
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
e.isStart = !1;
e.tcount = 0;
e.eareCount = 0;
e.curCount = 0;
e.darkCount = 0;
e.darkDeleteCount = 0;
e.curIndex = 0;
e.curClear = 0;
e.isDarkMove = !1;
e.teachStep = 0;
e.leveToolsValue = [ [ -1, 1, 2, 3, 4, 5 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, 4, 5 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 3, -1 ], [ 0, 1, 2, 3, 4 ] ];
e.leveNoToolsShow = [ [ "Road signs", "This hole needs to be filled!", "It's too high! Help!", "The flock is very dangerous!", "Man eating flowers are blocking it!", "Drive away this wolf!" ], [ "This ship can't sail!", " The sea god's hand is empty!", "The coral reef is lifeless!", "Drive away this water monster!!", "Drive away the sharks!" ], [ "This cloud and mist?", "The oasis has dried up!", "What are the shortcomings of this formation!", "We need to drive away the giant snake!", "The Pharaoh's hand is empty!", "The avatar is missing!" ], [ "The flower fairy's hand is empty!", "The scarecrow's head is empty!", "The Flower King hasn't bloomed yet!", "This is a gap!", "It seems like something is missing!!" ], [ "The elf's hand is empty!", "The snowman seems to be doing something!", "It's very thin here!", "This bonfire is out!", "This dragon is frozen!" ], [ "Please help the witch fly away!", "The crow is very sad!", " We need tools to drive away the giant snake!", "The wild wolf is blocking the way!", "The crocodile looks hungry!" ] ];
e.leveToolsDetail = [ [ "", "Boards, used for repairs", "Ladders, used for climbing to higher places", "A dog is easy to look after the house and yard", "A shovel is perfect for cleaning things up", "Wooden stick, the weapon of the opponent's animal" ], [ "Like a sail", "Scepter", "A big pearl", "A cannon, best for defense", "A harpoon", "" ], [ "Fan, can blow out strong winds", "A jar of magical water", "A gem", "Torch, the best choice to drive away animals", "Scepter", "Statue fragments" ], [ "A magical flower", "A straw hat", "A watering can filled with water", "A gem", "Windmill blades", "" ], [ "scepter", "a fishing rod", "a hammer, can be used to break open certain places", "torch, the best choice in life", "", "" ], [ "strange broom", "a bottle of water", "sharp spear", "torch", "a plate of delicious food", "" ] ];
e.winshow = [ "Congratulations! You have dispelled a fog!", "Congratulations! You have dispelled all the fog" ];
return e;
}
e.prototype.onLoad = function() {
this.lizi.node.active = !1;
this.pangbai.active = !1;
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchCancel, this, !0);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !0);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0);
};
e.prototype.start = function() {
this.toolDetail.node.parent.active = !1;
this.initGame();
this.playmusic();
this.isStart = !0;
this.tcount = 0;
this.darkCount = 0;
this.darkDeleteCount = 0;
};
e.prototype.onClose = function() {
this.playsoud(this.btnAudio);
cc.director.loadScene("dhall");
};
e.prototype.playsoud = function(t) {
if (parseFloat(cc.sys.localStorage.getItem("soundvolume")) > .5) {
cc.audioEngine.setMusicVolume(.5);
cc.audioEngine.playEffect(t, !1);
}
};
e.prototype.playmusic = function() {
parseFloat(cc.sys.localStorage.getItem("musicvolume")) > .5 && cc.audioEngine.stopAll();
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
var e = this;
if (this.isTouchStart && 0 == this.teachStep) {
this.isDarkMove = !1;
this.scheduleOnce(function() {
e.mapNode.stopAllActions();
cc.tween(e.mapNode).to(.5, {
x: 300
}).call(function() {
e.natNodes[0].active = !1;
e.natNodes[1].active = !1;
e.pangbai.active = !1;
e.showGameHelp(!0, "This road sign is overturned, try touching it");
e.fingerNode.active = !0;
e.fingerNode.stopAllActions();
cc.tween(e.fingerNode).to(.5, {
x: -166
}).to(.5, {
x: -151
}).union().repeatForever().start();
}).start();
}, 1);
this.teachStep = 1;
}
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
this.toolsNode.removeAllChildren(!0);
this.curCloudNodes = this.cloudNodes_0;
this.curCount = 0;
this.eareCount = 6;
this.fingerNode.active = !1;
this.isDarkMove = !0;
this.teachStep = 0;
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
};
e.prototype.pickTools = function(t, e) {
var o = this;
if (!this.isDarkMove) {
var i = parseInt(e);
if (this.leveToolsValue[0][i] >= 0) {
this.playsoud(this.btnAudio);
var a = cc.instantiate(t.target);
a.parent = t.target.parent;
a.name = "tools_" + i;
a.scale = 1;
if (a.height > 100) {
var c = 100 / a.height;
a.scale = c;
}
var n = a.getComponent(cc.Button).clickEvents;
n.length > 0 && n.splice(n.length - 1, 1);
var r = new cc.Component.EventHandler();
r.target = this.node;
r.component = "DreamClient";
r.handler = "showToolDetail";
r.customEventData = "" + i;
n.push(r);
var s = t.target.parent.convertToNodeSpaceAR(this.toolsNode.parent.convertToWorldSpaceAR(this.toolsNode.getPosition()));
if (a.getChildByName("tools")) {
a.getChildByName("tools").active = !0;
a.getChildByName("img") && (a.getChildByName("img").active = !1);
}
t.target.stopAllActions();
cc.tween(a).to(.3, {
x: s.x,
y: s.y
}).call(function() {
a.y = 0;
a.stopAllActions();
a.parent = o.toolsNode;
t.target.getChildByName("show") || (t.target.active = !1);
}).start();
t.target.getComponent(cc.Button).interactable = !1;
if (1 == i) {
this.mapNode.stopAllActions();
cc.tween(this.mapNode).to(.3, {
x: -250
}).call(function() {
o.fingerNode.stopAllActions();
cc.tween(o.fingerNode).to(.5, {
x: 435,
y: -128
}).delay(.2).call(function() {
o.fingerNode.stopAllActions();
cc.tween(o.fingerNode).to(.5, {
x: 435
}).to(.5, {
x: 450
}).union().repeatForever().start();
}).start();
}).start();
}
} else t.target.active = !1;
}
};
e.prototype.showToolDetail = function(t, e) {
var o = parseInt(e);
console.log("showToolDetail " + e);
this.toolDetail.string = "" + this.leveToolsDetail[0][o];
this.toolDetail.node.parent.active = !0;
this.toolDetail.node.parent.opacity = 0;
cc.tween(this.toolDetail.node.parent).to(.5, {
opacity: 255
}).delay(1.5).to(.5, {
opacity: 0
}).start();
};
e.prototype.clickTarget = function(t, e) {
var o = this;
if (!this.isDarkMove) {
var i = parseInt(e);
console.log(" clickTarget  index=" + i);
this.handleTarget(t, i, function() {
o.curCount++;
o.moveCloud(i);
if (o.curCount >= o.eareCount) {
o.isStart = !1;
o.scheduleOnce(function() {
o.gameFinish();
}, 15);
}
o.scheduleOnce(function() {
o.curCount, o.eareCount;
}, 1);
});
}
};
e.prototype.handleTarget = function(t, e, o) {
var i = this;
this.showGameHelp(!1, "");
if (this.checkHaveTools(e)) {
if (0 == e) {
this.teachStep = 2;
this.mapNode.stopAllActions();
cc.tween(this.mapNode).delay(1).to(.5, {
x: 350
}).call(function() {
i.natNodes[0].active = !1;
i.natNodes[1].active = !1;
i.pangbai.active = !1;
i.pangbaiText("Capture these fleeing dark forces!");
i.fingerNode.active = !0;
i.fingerNode.stopAllActions();
cc.tween(i.fingerNode).to(.5, {
x: -166
}).to(.5, {
x: -151
}).union().repeatForever().start();
}).start();
}
if (1 == e) {
this.teachStep = 5;
this.mapNode.stopAllActions();
cc.tween(this.mapNode).to(.3, {
x: -150
}).call(function() {}).start();
}
console.log(" handleTarget  index=" + e);
t.target.getComponent(cc.Button).interactable = !1;
if (this.toolsNode.getChildByName("tools_" + e)) {
var a = this.toolsNode.getChildByName("tools_" + e), c = cc.instantiate(a);
c.parent = t.target;
c.getComponent(cc.Button).interactable = !1;
var n = c.parent.convertToNodeSpaceAR(a.parent.convertToWorldSpaceAR(a.getPosition()));
c.x = n.x;
c.y = n.y;
cc.tween(c).to(.3, {
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
c.active = !1;
o();
}).start();
this.toolsNode.removeChild(this.toolsNode.getChildByName("tools_" + e));
} else {
if (t.target.getChildByName("img")) {
cc.tween(t.target.getChildByName("img")).to(.5, {
opacity: 0
}).start();
t.target.getChildByName("show").active = !0;
t.target.getChildByName("show").opacity = 0;
cc.tween(t.target.getChildByName("show")).to(.5, {
opacity: 255
}).start();
}
o();
}
e <= 1 ? this.playsoud(this.qiaodaAudio) : 3 == e ? this.playsoud(this.goujiaoAudio) : 5 == e ? this.playsoud(this.langAudio) : this.playsoud(this.btnAudio);
} else {
if (1 == e) {
this.teachStep = 4;
this.mapNode.stopAllActions();
cc.tween(this.mapNode).delay(.5).to(.3, {
x: 300
}).call(function() {
i.fingerNode.stopAllActions();
cc.tween(i.fingerNode).to(.5, {
x: -452,
y: -508
}).delay(.2).call(function() {
i.fingerNode.stopAllActions();
cc.tween(i.fingerNode).to(.5, {
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
return this.leveToolsValue[0][t] < 0 || !!this.toolsNode.getChildByName("tools_" + t);
};
e.prototype.moveCloud = function(t) {
var e = this;
this.isDarkMove = !0;
cc.tween(this.curCloudNodes[t]).delay(1.5).to(.5, {
opacity: 0
}).call(function() {
e.curIndex = t;
var o, i = e.LeveNodes[0].getChildByName("miwu").getChildByName("dark_" + t), a = i.parent.convertToWorldSpaceAR(i.getPosition());
a = e.mapNode.convertToNodeSpaceAR(a);
for (var c = 0; c < 10; ++c) {
(o = cc.instantiate(e.darkNode)).parent = e.mapNode;
o.getChildByName("liziDark").active = !0;
o.getChildByName("liziLight").active = !1;
o.getChildByName("liziDark").getComponent(cc.ParticleSystem).resetSystem();
o.x = a.x + e.randomFloat(-50, 50);
o.y = a.y + e.randomFloat(-50, 50);
9 == c ? e.moveDark(o, 0, a, function() {}) : e.moveDark(o, 0, a);
}
}).start();
this.scheduleOnce(function() {
e.curCloudNodes[t] && (e.curCloudNodes[t].active = !1);
}, 2.2);
};
e.prototype.clickDark = function(t) {
var e = this;
this.darkDeleteCount++;
this.darkCount++;
t.target.getComponent(cc.Button).interactable = !1;
t.target.stopAllActions();
var o = t.target.parent.convertToNodeSpaceAR(this.jingling.parent.convertToWorldSpaceAR(this.jingling.getPosition()));
t.target.stopAllActions();
cc.tween(t.target).to(.3, {
x: o.x,
y: o.y
}).call(function() {
t.target.active = !1;
e.mapNode.removeChild(t.target);
e.darkDeleteCount >= 10 && e.clearDark();
}).start();
t.target.getComponent(cc.Button).interactable = !1;
};
e.prototype.moveDark = function(t, e, o, i) {
var a = this;
void 0 === i && (i = null);
if (t) {
console.log("moveDark --- ");
t.stopAllActions();
var c = this.randomFloat(-260, 260) + o.x, n = this.randomFloat(-260, 260) + o.y, r = Math.sqrt((t.x - c) * (t.x - c) + (t.y - n) * (t.y - n)) / 200;
cc.tween(t).to(r, {
x: c,
y: n
}).call(function() {
if (e < 5) a.moveDark(t, e + 1, o, i); else if (t) {
t.stopAllActions();
cc.tween(t).to(.5, {
opacity: 0
}).call(function() {
a.darkDeleteCount++;
a.mapNode.removeChild(t);
a.darkDeleteCount >= 10 && a.clearDark();
}).start();
}
}).start();
}
};
e.prototype.clearDark = function() {
var t = this;
this.isDarkMove = !1;
for (var e = this.darkCount, o = 0; o < e; ++o) this.moveClear(.3 * o);
this.curClear += e >= 9 ? 100 / this.leveToolsValue[0].length : 100 / this.leveToolsValue[0].length * (e / 9);
this.curClear >= 99 && (this.curClear = 100);
this.darkCount = 0;
this.darkDeleteCount = 0;
this.timeCount.string = this.curClear.toFixed(0) + "%";
if (2 == this.teachStep) {
this.teachStep = 3;
this.mapNode.stopAllActions();
cc.tween(this.mapNode).delay(2).to(.3, {
x: -250
}).call(function() {
t.fingerNode.stopAllActions();
cc.tween(t.fingerNode).to(.5, {
x: 435,
y: -128
}).delay(.2).call(function() {
t.fingerNode.stopAllActions();
cc.tween(t.fingerNode).to(.5, {
x: 435
}).to(.5, {
x: 450
}).union().repeatForever().start();
}).start();
}).start();
}
if (5 == this.teachStep) {
this.teachStep = 6;
this.fingerNode.active = !1;
this.scheduleOnce(function() {
if (t.fingerNode) {
t.showGameHelp(!0, "This is the level of clearing of dark power!");
t.timeCount.node.parent.getChildByName("finger").active = !0;
}
}, 2);
this.scheduleOnce(function() {
if (t.fingerNode) {
t.timeCount.node.parent.getChildByName("finger").active = !1;
t.showGameHelp(!1, "");
}
}, 7);
this.scheduleOnce(function() {
if (t.fingerNode) {
t.timeCount.node.parent.getChildByName("finger").active = !1;
t.showGameHelp(!0, "That's all for the introduction. Have a pleasant game!");
}
}, 10);
}
};
e.prototype.moveClear = function(t) {
var e = this;
this.scheduleOnce(function() {
if (e.darkNode) {
var o, i = e.jingling.parent.convertToWorldSpaceAR(e.jingling.getPosition());
i = e.mapNode.convertToNodeSpaceAR(i);
(o = cc.instantiate(e.darkNode)).parent = e.mapNode;
o.active = !0;
o.getChildByName("liziDark").active = !1;
o.getChildByName("liziLight").active = !0;
o.getChildByName("liziLight").getComponent(cc.ParticleSystem).resetSystem();
o.x = i.x;
o.y = i.y;
var a = e.LeveNodes[0].getChildByName("miwu").getChildByName("dark_" + e.curIndex), c = a.parent.convertToWorldSpaceAR(a.getPosition());
c = e.mapNode.convertToNodeSpaceAR(c);
console.log("moveClear ------- " + t + "  opacity=" + a.opacity);
cc.tween(o).to(.3, {
x: c.x,
y: c.y
}).call(function() {
a.opacity -= 22;
a.opacity < 20 && (a.opacity = 0);
e.mapNode.removeChild(o);
}).start();
}
}, t);
};
e.prototype.gameFinish = function() {
cc.audioEngine.stopAll();
};
e.prototype.hideFinish = function() {};
e.prototype.showPangbai = function(t) {
if (this.pangbai) {
this.pangbai.getChildByName("data").getChildByName("jl_1").active = !0;
this.pangbai.getChildByName("data").getChildByName("jl_2").active = !1;
this.pangbaiText(this.leveNoToolsShow[0][t]);
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
this.isStart && (this.tcount += t);
};
e.curLevel = 0;
e.levelData = [ 6, 5, 6, 5, 5, 5 ];
c([ s(cc.Node) ], e.prototype, "mapNode", void 0);
c([ s(cc.Node) ], e.prototype, "pangbai", void 0);
c([ s(cc.Node) ], e.prototype, "toolsNode", void 0);
c([ s(cc.ParticleSystem) ], e.prototype, "lizi", void 0);
c([ s(cc.Label) ], e.prototype, "toolDetail", void 0);
c([ s(cc.Label) ], e.prototype, "timeCount", void 0);
c([ s(cc.Node) ], e.prototype, "darkNode", void 0);
c([ s(cc.Node) ], e.prototype, "jingling", void 0);
c([ s(cc.Node) ], e.prototype, "fingerNode", void 0);
c([ s(cc.Node) ], e.prototype, "natNodes", void 0);
c([ s(cc.Node) ], e.prototype, "LeveNodes", void 0);
c([ s(cc.Node) ], e.prototype, "cloudNodes_0", void 0);
c([ s(cc.AudioClip) ], e.prototype, "btnAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "goujiaoAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "longAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "langAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "huoyanAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "shuiAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "shuiluoAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "fengAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "qiaodaAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "qiangAudio", void 0);
c([ s(cc.AudioClip) ], e.prototype, "gamewinAudio", void 0);
return c([ r ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (a = t[r]) && (n = (c < 3 ? a(n) : c > 3 ? a(e, o, n) : a(e, o)) || n);
return c > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, r = n.ccclass, s = (n.property, function(t) {
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
return o = c([ r ], e);
}(cc.Component));
o.default = s;
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (a = t[r]) && (n = (c < 3 ? a(n) : c > 3 ? a(e, o, n) : a(e, o)) || n);
return c > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, r = n.ccclass, s = n.property, l = function(t) {
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
c([ s(cc.Node) ], e.prototype, "pangbai", void 0);
return c([ r ], e);
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (a = t[r]) && (n = (c < 3 ? a(n) : c > 3 ? a(e, o, n) : a(e, o)) || n);
return c > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("../../FirstGo/Script/FirstGo"), r = t("./DreamClient"), s = t("./GHistory"), l = cc._decorator, d = l.ccclass, p = l.property, h = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.setLayer = null;
e.helpLayer = null;
e.meLayer = null;
e.historyLayer = null;
e.wupo = null;
e.long = null;
e.bgAudio = null;
e.btnAudio = null;
return e;
}
e.prototype.onLoad = function() {
this.setLayer.active = !1;
this.helpLayer.active = !1;
this.meLayer.active = !1;
cc.sys.localStorage.getItem("musicvolume") || cc.sys.localStorage.setItem("musicvolume", "1");
cc.sys.localStorage.getItem("soundvolume") || cc.sys.localStorage.setItem("soundvolume", "1");
for (var t = 0; t < 8; ++t) cc.sys.localStorage.getItem("leve_xing_" + t) || cc.sys.localStorage.setItem("leve_xing_" + t, "0");
this.historyLayer.node.active = !1;
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
parseFloat(cc.sys.localStorage.getItem("musicvolume")) > .5 && cc.audioEngine.playMusic(this.bgAudio, !0);
};
e.prototype.playsoud = function(t) {
parseFloat(cc.sys.localStorage.getItem("soundvolume")) > .5 && cc.audioEngine.playEffect(t, !1);
};
e.prototype.onDestroy = function() {};
e.prototype.startGame = function(t, e) {
this.playsoud(this.btnAudio);
r.default.curLevel = parseInt(e);
cc.director.loadScene("drgame");
};
e.prototype.onLogout = function() {
cc.game.end();
};
e.prototype.setLayerClick = function() {
this.playsoud(this.btnAudio);
this.setLayer.active = !this.setLayer.active;
var t = parseFloat(cc.sys.localStorage.getItem("musicvolume")), e = parseFloat(cc.sys.localStorage.getItem("soundvolume"));
this.setLayer.getChildByName("uiNode").getChildByName("MusicA").active = t > .5;
this.setLayer.getChildByName("uiNode").getChildByName("MusicB").active = t <= .5;
this.setLayer.getChildByName("uiNode").getChildByName("SoundA").active = e > .5;
this.setLayer.getChildByName("uiNode").getChildByName("SoundB").active = e <= .5;
};
e.prototype.onMusic = function() {
this.playsoud(this.btnAudio);
this.setLayer.getChildByName("uiNode").getChildByName("MusicA").active = !0;
this.setLayer.getChildByName("uiNode").getChildByName("MusicB").active = !1;
cc.sys.localStorage.setItem("musicvolume", "1");
this.playmusic();
};
e.prototype.offMusic = function() {
this.playsoud(this.btnAudio);
this.setLayer.getChildByName("uiNode").getChildByName("MusicA").active = !1;
this.setLayer.getChildByName("uiNode").getChildByName("MusicB").active = !0;
cc.sys.localStorage.setItem("musicvolume", "0.0");
this.playmusic();
};
e.prototype.onSound = function() {
this.playsoud(this.btnAudio);
this.setLayer.getChildByName("uiNode").getChildByName("SoundA").active = !0;
this.setLayer.getChildByName("uiNode").getChildByName("SoundB").active = !1;
cc.sys.localStorage.setItem("soundvolume", "1");
};
e.prototype.offSound = function() {
this.playsoud(this.btnAudio);
this.setLayer.getChildByName("uiNode").getChildByName("SoundA").active = !1;
this.setLayer.getChildByName("uiNode").getChildByName("SoundB").active = !0;
cc.sys.localStorage.setItem("soundvolume", "0.0");
};
e.prototype.helpLayerClick = function() {
this.playsoud(this.btnAudio);
this.helpLayer.active = !this.helpLayer.active;
};
e.prototype.HowToPlayClick = function() {
this.playsoud(this.btnAudio);
cc.director.loadScene("gteach");
};
e.prototype.HistoryClick = function() {
this.playsoud(this.btnAudio);
this.historyLayer.node.active = !0;
this.historyLayer.initDlg();
};
e.prototype.aboutMeClick = function() {
this.playsoud(this.btnAudio);
this.meLayer.active = !this.meLayer.active;
};
e.prototype.update = function(t) {
n.default.checkInfo(t, !1);
};
c([ p(cc.Node) ], e.prototype, "setLayer", void 0);
c([ p(cc.Node) ], e.prototype, "helpLayer", void 0);
c([ p(cc.Node) ], e.prototype, "meLayer", void 0);
c([ p(s.default) ], e.prototype, "historyLayer", void 0);
c([ p(cc.Node) ], e.prototype, "wupo", void 0);
c([ p(cc.Node) ], e.prototype, "long", void 0);
c([ p(cc.AudioClip) ], e.prototype, "bgAudio", void 0);
c([ p(cc.AudioClip) ], e.prototype, "btnAudio", void 0);
return c([ d ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../FirstGo/Script/FirstGo": "FirstGo",
"./DreamClient": "DreamClient",
"./GHistory": "GHistory"
} ],
GHistory: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "47857rn/utAO6u2NKwB9Ea1", "GHistory");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (a = t[r]) && (n = (c < 3 ? a(n) : c > 3 ? a(e, o, n) : a(e, o)) || n);
return c > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, r = n.ccclass, s = n.property, l = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.clearlabel = null;
e.levedata = null;
e.levelLables = [];
e.bgImg = null;
e.bgSprits = [];
e.bxingNodes = [];
e.showLevel = 0;
return e;
}
e.prototype.start = function() {};
e.prototype.onClose = function() {
this.node.active = !1;
};
e.prototype.initDlg = function() {
this.levedata.active = !1;
this.showLevelData();
};
e.prototype.clickLevel = function(t, e) {
this.showLevel = parseInt(e);
this.showLevelData();
};
e.prototype.showLevelData = function() {
for (var t = 0; t < 6; ++t) this.showLevel == t ? this.levelLables[t].node.color = cc.color(0, 255, 255, 255) : this.levelLables[t].node.color = cc.color(255, 255, 255, 255);
var e = 0, o = cc.sys.localStorage.getItem("gameclear_" + this.showLevel);
if (o) {
this.levedata.active = !0;
var i = parseInt(o);
this.bgImg.spriteFrame = this.bgSprits[this.showLevel];
this.clearlabel.string = i + "%";
i >= 90 ? e = 5 : i >= 80 ? e = 4 : i >= 70 ? e = 3 : i >= 60 ? e = 2 : i >= 50 && (e = 1);
for (t = 0; t < 5; ++t) this.bxingNodes[t].color = t < e ? cc.color(255, 255, 255, 255) : cc.color(155, 155, 155, 255);
} else this.levedata.active = !1;
};
c([ s(cc.Label) ], e.prototype, "clearlabel", void 0);
c([ s(cc.Node) ], e.prototype, "levedata", void 0);
c([ s(cc.Label) ], e.prototype, "levelLables", void 0);
c([ s(cc.Sprite) ], e.prototype, "bgImg", void 0);
c([ s(cc.SpriteFrame) ], e.prototype, "bgSprits", void 0);
c([ s(cc.Node) ], e.prototype, "bxingNodes", void 0);
return c([ r ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ]
}, {}, [ "FirstGo", "DreamClient", "DreamTeach", "First", "FirstLogin", "GHistory" ]);