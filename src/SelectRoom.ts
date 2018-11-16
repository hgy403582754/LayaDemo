/*
* name;
*/
class SelectRoom extends ui.SelectRoomUI {
    private list: Laya.List;
    constructor(listData) {
        super();
        this.list = this.getChildByName("listRooms") as Laya.List;
        this.initRooms(listData);
        EventMgr.getInstance().AddNotice("gotoRoom", this, this.onAddNotice);
    }
    onAddNotice(){
        console.log("onAddNotice");
    }

    //数据初始化
    private initRooms(listData) {
        var tables, roomData, num;
        var arr = [];
        for (let i = 0; i < listData.rooms; i++) {
            roomData = listData.room[i];
            console.log("第" + i + "次" + roomData);
            num = roomData.num;
            arr.push({ roomID: "房间号1：" + num });
        }
        this.list.array = arr;
        this.list.renderHandler = new Laya.Handler(this, this.onListRender);

    }
    //加入房间方法
    private joinRoomBtn(e) {
        console.log("onJoinBtn", e.currentTarget["data"]);
         GameMain.room = new Room();
        Laya.stage.addChild(GameMain.room);
        
       
    }

    //循环列表
    private onListRender(cell, index) {
        if (index >= this.list.array.length) {
            return;
        }
        var data = this.list.array[index];
        var roomNum = cell.getChildByName("roomNum") as Laya.Label;
        roomNum.changeText(data.roomID);
        cell.getChildByName("joinBtn").on(Laya.Event.CLICK, this, this.joinRoomBtn);
         cell.getChildByName("joinBtn").data = index;
    }
}

