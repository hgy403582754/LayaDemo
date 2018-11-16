/*
* name;
*/
class SelectRoom extends ui.SelectRoomUI {
    constructor(listData) {
        super();
        this.list = this.getChildByName("listRooms");
        this.initRooms(listData);
    }
    //数据初始化
    initRooms(listData) {
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
    joinRoomBtn(e) {
        console.log("onJoinBtn", e.currentTarget["data"]);
        GameMain.room = new Room();
        Laya.stage.addChild(GameMain.room);
    }
    //循环列表
    onListRender(cell, index) {
        if (index >= this.list.array.length) {
            return;
        }
        var data = this.list.array[index];
        var roomNum = cell.getChildByName("roomNum");
        roomNum.changeText(data.roomID);
        cell.getChildByName("joinBtn").on(Laya.Event.CLICK, this, this.joinRoomBtn);
        cell.getChildByName("joinBtn").data = index;
    }
}
//# sourceMappingURL=SelectRoom.js.map