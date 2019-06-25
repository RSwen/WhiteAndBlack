class BoxMc extends egret.Sprite
{
    public constructor()
    {
        super();
        this.init();
    }

    private init()
    {
        this.touchEnabled = true;
        this.width = GameData.getBoxWidth();
        this.height = GameData.getBoxHeight();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.click, this);

        this.width = GameData.getBoxWidth();
        this.height = GameData.getBoxHeight();

        this.graphics.beginFill(0xcccccc);
        this.graphics.lineStyle(1,0);
        this.graphics.drawRect(0,0,GameData.getBoxWidth(),GameData.getBoxHeight());
        this.graphics.endFill();

        var data = RES.getRes("mcdata_json");
        var tex = RES.getRes("mcdata_png");
        this.mcf = new egret.MovieClipDataFactory(data, tex);
        this.mc = new egret.MovieClip();
        this.mc.y = 20;
        this.addChild(this.mc);
    }
    private mcf:egret.MovieClipDataFactory;
    private mc:egret.MovieClip;

    private _canTouch:boolean = false;
    //绘制内容
    //参数表示当前方块是否可以备点击
    public drawBox(canTouch:boolean=false)
    {
        this._canTouch = canTouch;
        if(canTouch)
        {
           this.mc.movieClipData = this.mcf.generateMovieClipData("mc2");
        }
        else
        {
            this.mc.movieClipData = this.mcf.generateMovieClipData("mc1");
        }
        this.mc.play(-1);
    }

    //当前方块被点击后的响应事件
    private click(evt:egret.TouchEvent):void
    {
        if(this._canTouch)
        {
            this.mc.movieClipData = this.mcf.generateMovieClipData("mc3");
            this.mc.play(-1);
        }

        var event:GameEvent;
        if(!this._canTouch) //不能点击，抛出错误事件
        {
            event = new GameEvent(GameEvent.GAME_OVER);
        }
        else
        {
            event = new GameEvent(GameEvent.GAME_HIT);
        }
        this.dispatchEvent(event);
    }


}