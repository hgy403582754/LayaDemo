import WebGL = Laya.WebGL;
// 程序入口
class GameMain {
    private ws: WebSocket;
    private data: any;
    private xmlhttp: XMLHttpRequest;
    private precinct: Precinct;

    //用户信息
    public static gameUser: GameUser;
    //登陆页面
    public static gamenLogin: GameLogin;
    //游戏选区页面
    public static precinct: Precinct;
    //选择游戏房间页面
    public static selectRoom: SelectRoom;
    //游戏桌
    public static room: Room;
    constructor() {
        Laya.init(1334, 750, WebGL);


        var resArray: Array<any> = [

            { url: "playchoice_bg.png", type: Laya.Loader.IMAGE },
            { url: "btn_join.png", type: Laya.Loader.IMAGE },
            { url: "btn_ready.png", type: Laya.Loader.IMAGE }

        ];

        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));

    }
    private onload() {

        GameMain.room = new Room();
        Laya.stage.addChild(GameMain.room);
        // GameMain.gamenLogin = new GameLogin();
        // Laya.stage.addChild(GameMain.gamenLogin);
    }

    //获取游戏服务器
    private getGameServer() {
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
            }
            //发送游戏类型和商户信息
            xhr.send("game=1&shang=common");
        });
    }


}
new GameMain();