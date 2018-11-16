/*
* name;
*/
class GameLogin extends ui.GameLoginUI {
   
    constructor() {
        super();
        EventMgr.getInstance().AddNotice("gotoRoom", this, this.onAddNotice);
        this.startBtn1.on(Laya.Event.CLICK, this, this.onLogain);
        this.startBtn2.on(Laya.Event.CLICK, this, this.onLogain);
        this.startBtn3.on(Laya.Event.CLICK, this, this.onLogain);
        this.startBtn4.on(Laya.Event.CLICK, this, this.onLogain);
        this.startBtn5.on(Laya.Event.CLICK, this, this.onLogain);

    }

    onAddNotice(data){
        console.log("打印data"+data);
        console.log("触发gotoroom");
    }
    private onLogain() {
        this.removeSelf();
        if (!GameMain.precinct) {
            var xhr1 = new XMLHttpRequest;
            xhr1.open("POST", 'http://47.92.121.171:17788', true);
            xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr1.onreadystatechange = function () {
                if (xhr1.readyState == 4 && xhr1.status == 200) {
                    var data = JSON.parse(xhr1.responseText)[0];
                    GameMain.gameUser = new GameUser(data.id, data.nickname);
                    GameMain.precinct = new Precinct(this.gameUser);
                    EventMgr.getInstance().Emit("gotoRoom",data);
                    Laya.stage.addChild(GameMain.precinct);


                }

                
            }.bind(this);
            xhr1.send("code=p_001&name=aaaaaa&pas=123456&belong=aabbccdd");
        }
    }
}
