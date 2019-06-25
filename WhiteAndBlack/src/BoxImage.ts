class BoxImage extends egret.Bitmap
{
    public constructor(texture: egret.Texture=null)
    {
        super(texture);
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
    }

    private _canTouch:boolean = false;
    //绘制内容
    //参数表示当前方块是否可以备点击
    public drawBox(canTouch:boolean=false)
    {
        this._canTouch = canTouch;
        if(canTouch)
        {
            this.texture = RES.getRes("woman2");
        }
        else
        {
            this.texture = RES.getRes("woman1");
        }
    }

    //当前方块被点击后的响应事件
    private click(evt:egret.TouchEvent):void
    {
        if(this._canTouch)
        {
            this.texture = RES.getRes("woman3");
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