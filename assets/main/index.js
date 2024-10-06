window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  RankItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a0fbbJwiVO/q4XKGzMzbv3", "RankItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RankItem = function(_super) {
      __extends(RankItem, _super);
      function RankItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.rankingTxt = null;
        _this.nickNameTxt = null;
        _this.passTimeTxt = null;
        _this.head = null;
        _this.itemPanels = [];
        return _this;
      }
      RankItem.prototype.start = function() {};
      RankItem.prototype.updateItemContent = function(options) {
        var _this = this;
        this.rankingTxt.string = "" + options.rank;
        this.nickNameTxt.string = options.nickName;
        this.passTimeTxt.string = "" + options.passTime;
        options.rank <= 3 ? this.node.getComponent(cc.Sprite).spriteFrame = this.itemPanels[options.rank - 1] : this.node.getComponent(cc.Sprite).spriteFrame = options.isSelf ? this.itemPanels[4] : this.itemPanels[3];
        options.avatarUrl && cc.assetManager.loadRemote(options.avatarUrl, function(err, texture) {
          if (err) console.error(err); else {
            var frame = new cc.SpriteFrame(texture);
            _this.head.spriteFrame = frame;
            _this.head.node.children[0].active = false;
          }
        });
      };
      __decorate([ property(cc.Label) ], RankItem.prototype, "rankingTxt", void 0);
      __decorate([ property(cc.Label) ], RankItem.prototype, "nickNameTxt", void 0);
      __decorate([ property(cc.Label) ], RankItem.prototype, "passTimeTxt", void 0);
      __decorate([ property(cc.Sprite) ], RankItem.prototype, "head", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], RankItem.prototype, "itemPanels", void 0);
      RankItem = __decorate([ ccclass ], RankItem);
      return RankItem;
    }(cc.Component);
    exports.default = RankItem;
    cc._RF.pop();
  }, {} ],
  rank: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0f5dYKc6RHMJN2VklMpPCI", "rank");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.rankItem = null;
        _this.contentNode = null;
        _this.label = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        console.log("sub game");
        this.createRank();
        wx.onMessage(function(msg) {
          return _this.onMessage(msg);
        });
      };
      NewClass.prototype.onMessage = function(msg) {
        console.log(msg.event);
        this.label.string = msg.event;
        switch (msg.event) {
         case "setScore":
          break;

         case "getRank":
          for (var i = 0; i < 5; i++) this.createRank();
        }
      };
      NewClass.prototype.createRank = function() {
        var rank = cc.instantiate(this.rankItem);
        this.contentNode.addChild(rank);
      };
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "rankItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "contentNode", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ]
}, {}, [ "rank", "RankItem" ]);