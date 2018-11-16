class Precinct extends ui.PrecinctUI {

    constructor(gameuser) {
        super();

        var box: Laya.Box = this.getChildByName("user") as Laya.Box;
        console.log("box" + box);
        let name = box.getChildByName("name") as Laya.Text;
        let id = box.getChildByName("id") as Laya.Text;
        let image = box.getChildByName("touxiang") as Laya.Image;
        name.changeText(GameMain.gameUser.name);
        id.changeText(GameMain.gameUser.id);
        image.skin = "avatar02.jpg";
        this.poorPaln.on(Laya.Event.CLICK, this, this.SocketRoom);

    }


    //选择游戏区域
    //建立游戏链接
    private SocketRoom() {
        console.log("fasong");
        var ws = new WebSocket("ws://47.92.244.198:17788/JiuDianBan01");
        ws.onopen = function () {
            // Web Socket 已连接上，使用 send() 方法发送数据
            //user    值为 name+pas+belong

            ws.send('0068{"code":"1_1_001","msg":{"which":"N","user":"aaaaaa123456aabbccdd"}}');
        }

        ws.onmessage = function (evt) {
            console.log("返回数据" + evt.data);
            var received_msg = JSON.parse(evt.data);
            console.log("返回数据" + received_msg);
            var listData = received_msg.msg.N;
            GameMain.selectRoom = new SelectRoom(listData);

            Laya.stage.addChild(GameMain.selectRoom);



        };
        ws.onclose = function () {
            // 关闭 websocket
        };
    }


}