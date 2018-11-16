var WebGL = Laya.WebGL;
// 程序入口
class GameMain {
    constructor() {
        Laya.init(1334, 750, WebGL);
        var resArray = [
            { url: "playchoice_bg.png", type: Laya.Loader.IMAGE },
            { url: "btn_join.png", type: Laya.Loader.IMAGE },
            { url: "btn_ready.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    onload() {
        GameMain.room = new Room();
        Laya.stage.addChild(GameMain.room);
        // GameMain.gamenLogin = new GameLogin();
        // Laya.stage.addChild(GameMain.gamenLogin);
    }
    //获取游戏服务器
    getGameServer() {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest;
            xhr.open("POST", 'http://47.92.121.171:9002/rout/get_game_servers', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            // readyState 属性改变时，就会调用
            xhr.onreadystatechange = function () {
                //状态改变        
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(xhr.responseText);
                }
            };
            //发送游戏类型和商户信息
            xhr.send("game=1&shang=common");
        });
    }
}
new GameMain();
//# sourceMappingURL=LayaSample.js.map