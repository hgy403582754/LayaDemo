/*
* name;
*/
import Tween = laya.utils.Tween;
class Room extends ui.RoomUI {
    // private card: Laya.Image;
    constructor() {
        super();
        var box1: Laya.Box = this.getChildByName("self") as Laya.Box;
        console.log(box1);
        // let name = box1.getChildByName("name") as Laya.Text;
        // name.changeText(GameMain.gameUser.name);

        this.readyBtn.on(Laya.Event.CLICK, this, this.initRoom);
        //侦听点击准备事件
        EventMgr.getInstance().AddNotice("ready", this, this.onReadyOrCancel);



    }

    //初始化房间
    async  initRoom() {
        var arraycard = [];
        for (var i = 0; i < 5; i++) {
            //创建一个新牌面
            
            var card = new Laya.Image("img_card_back_small.png");
            card.x = this.cardBack.x;
            card.y = this.cardBack.y;
            Laya.stage.addChild(card);
            //获取box坐标
            var pos = this["play_" + (i + 1)].localToGlobal(new Laya.Point(0, 0));
            //this.play_1          
            console.log("posx", pos.x)
            console.log("posy", pos.y)
            //缓动动画
            await this.ontween(pos.x, pos.y, card); 
        }
    }

    //发牌缓动
    ontween(x, y, card) {
        return new Promise((resolve, reject) => {
            console.log("ontween-posx", x)
            console.log("ontween-posy", y)
            setTimeout(() => {
                resolve(Tween.to(card, { x: x, y: y }, 500, null, Laya.Handler.create(this, () => {
                    console.log("发牌结束");
                    Laya.stage.removeChild(card);
                })))
            }, 500);

        })
    }
    //点击准备
    onReadyBtn() {
        console.log("点击准备");
    }

    private onReadyOrCancel(data) {
        console.log("侦听到准备");

    }



}