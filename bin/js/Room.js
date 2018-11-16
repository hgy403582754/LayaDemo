var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
* name;
*/
var Tween = laya.utils.Tween;
class Room extends ui.RoomUI {
    // private card: Laya.Image;
    constructor() {
        super();
        var box1 = this.getChildByName("self");
        console.log(box1);
        // let name = box1.getChildByName("name") as Laya.Text;
        // name.changeText(GameMain.gameUser.name);
        this.readyBtn.on(Laya.Event.CLICK, this, this.initRoom);
        //侦听点击准备事件
        EventMgr.getInstance().AddNotice("ready", this, this.onReadyOrCancel);
    }
    //初始化房间
    initRoom() {
        return __awaiter(this, void 0, void 0, function* () {
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
                console.log("posx", pos.x);
                console.log("posy", pos.y);
                //缓动动画
                yield this.ontween(pos.x, pos.y, card);
            }
        });
    }
    //发牌缓动
    ontween(x, y, card) {
        return new Promise((resolve, reject) => {
            console.log("ontween-posx", x);
            console.log("ontween-posy", y);
            setTimeout(() => {
                Tween.to(card, { x: x, y: y }, 500, null, Laya.Handler.create(this, () => {
                    console.log("发牌结束");
                    Laya.stage.removeChild(card);
                }));
            }, 500);
        });
    }
    //点击准备
    onReadyBtn() {
        console.log("点击准备");
    }
    onReadyOrCancel(data) {
        console.log("侦听到准备");
    }
}
//# sourceMappingURL=Room.js.map