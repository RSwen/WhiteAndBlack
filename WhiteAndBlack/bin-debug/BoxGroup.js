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
var BoxGroup = (function (_super) {
    __extends(BoxGroup, _super);
    function BoxGroup() {
        var _this = _super.call(this) || this;
        _this._isHit = false; //本行是否被击中
        _this.init();
        return _this;
    }
    BoxGroup.prototype.init = function () {
        this._boxs = [];
        for (var i = 0; i < GameData.column; i++) {
            var box = new BoxGraphics();
            this._boxs.push(box);
            box.addEventListener(GameEvent.GAME_HIT, this.boxhit, this);
            box.addEventListener(GameEvent.GAME_OVER, this.boxGameOver, this);
            this.addChild(box);
            box.x = GameData.getBoxWidth() * i;
        }
    };
    /*
        //位图方式
        private _boxs:Array<BoxImage>;
        private init():void
        {
            this._boxs = [];
            for(var i:number=0;i<GameData.column;i++)
            {
                var box:BoxImage = new BoxImage();
                this._boxs.push(box);
                box.addEventListener(GameEvent.GAME_HIT, this.boxhit, this);
                box.addEventListener(GameEvent.GAME_OVER, this.boxGameOver, this);
                this.addChild(box);
                box.x = GameData.getBoxWidth()*i;
            }
        }
    */
    /*
        //mc方式
        private _boxs:Array<BoxMc>;
        private init():void
        {
            this._boxs = [];
            for(var i:number=0;i<GameData.column;i++)
            {
                var box:BoxMc = new BoxMc();
                this._boxs.push(box);
                box.addEventListener(GameEvent.GAME_HIT, this.boxhit, this);
                box.addEventListener(GameEvent.GAME_OVER, this.boxGameOver, this);
                this.addChild(box);
                box.x = GameData.getBoxWidth()*i;
            }
        }
    */
    //创建一行新的box
    BoxGroup.prototype.create = function () {
        this._isHit = false;
        var touchIndex = Math.floor(Math.random() * 4);
        var len = this._boxs.length;
        for (var i = 0; i < len; i++) {
            if (i == touchIndex) {
                this._boxs[i].drawBox(true);
            }
            else {
                this._boxs[i].drawBox();
            }
        }
    };
    Object.defineProperty(BoxGroup.prototype, "isHit", {
        get: function () {
            return this._isHit;
        },
        enumerable: true,
        configurable: true
    });
    BoxGroup.prototype.boxhit = function (evt) {
        if (!this._isHit) {
            this._isHit = true;
            var event = new GameEvent(GameEvent.GAME_HIT);
            this.dispatchEvent(event);
        }
    };
    BoxGroup.prototype.boxGameOver = function (evt) {
        var event = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
    };
    return BoxGroup;
}(egret.Sprite));
__reflect(BoxGroup.prototype, "BoxGroup");
//# sourceMappingURL=BoxGroup.js.map