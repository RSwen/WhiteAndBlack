var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var BoxMc = (function (_super) {
    __extends(BoxMc, _super);
    function BoxMc() {
        var _this = _super.call(this) || this;
        _this._canTouch = false;
        _this.init();
        return _this;
    }
    BoxMc.prototype.init = function () {
        this.touchEnabled = true;
        this.width = GameData.getBoxWidth();
        this.height = GameData.getBoxHeight();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.click, this);
        this.width = GameData.getBoxWidth();
        this.height = GameData.getBoxHeight();
        this.graphics.beginFill(0xcccccc);
        this.graphics.lineStyle(1, 0);
        this.graphics.drawRect(0, 0, GameData.getBoxWidth(), GameData.getBoxHeight());
        this.graphics.endFill();
        var data = RES.getRes("mcdata_json");
        var tex = RES.getRes("mcdata_png");
        this.mcf = new egret.MovieClipDataFactory(data, tex);
        this.mc = new egret.MovieClip();
        this.mc.y = 20;
        this.addChild(this.mc);
    };
    //绘制内容
    //参数表示当前方块是否可以备点击
    BoxMc.prototype.drawBox = function (canTouch) {
        if (canTouch === void 0) { canTouch = false; }
        this._canTouch = canTouch;
        if (canTouch) {
            this.mc.movieClipData = this.mcf.generateMovieClipData("mc2");
        }
        else {
            this.mc.movieClipData = this.mcf.generateMovieClipData("mc1");
        }
        this.mc.play(-1);
    };
    //当前方块被点击后的响应事件
    BoxMc.prototype.click = function (evt) {
        if (this._canTouch) {
            this.mc.movieClipData = this.mcf.generateMovieClipData("mc3");
            this.mc.play(-1);
        }
        var event;
        if (!this._canTouch) {
            event = new GameEvent(GameEvent.GAME_OVER);
        }
        else {
            event = new GameEvent(GameEvent.GAME_HIT);
        }
        this.dispatchEvent(event);
    };
    return BoxMc;
}(egret.Sprite));
__reflect(BoxMc.prototype, "BoxMc");
//# sourceMappingURL=BoxMc.js.map