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
var BoxImage = (function (_super) {
    __extends(BoxImage, _super);
    function BoxImage(texture) {
        if (texture === void 0) { texture = null; }
        var _this = _super.call(this, texture) || this;
        _this._canTouch = false;
        _this.init();
        return _this;
    }
    BoxImage.prototype.init = function () {
        this.touchEnabled = true;
        this.width = GameData.getBoxWidth();
        this.height = GameData.getBoxHeight();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.click, this);
        this.width = GameData.getBoxWidth();
        this.height = GameData.getBoxHeight();
    };
    //绘制内容
    //参数表示当前方块是否可以备点击
    BoxImage.prototype.drawBox = function (canTouch) {
        if (canTouch === void 0) { canTouch = false; }
        this._canTouch = canTouch;
        if (canTouch) {
            this.texture = RES.getRes("woman2");
        }
        else {
            this.texture = RES.getRes("woman1");
        }
    };
    //当前方块被点击后的响应事件
    BoxImage.prototype.click = function (evt) {
        if (this._canTouch) {
            this.texture = RES.getRes("woman3");
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
    return BoxImage;
}(egret.Bitmap));
__reflect(BoxImage.prototype, "BoxImage");
//# sourceMappingURL=BoxImage.js.map