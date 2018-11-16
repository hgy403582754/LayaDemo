/*
* name;
*/
class Room extends ui.RoomUI {
    constructor() {
        super();
        var box1 = this.getChildByName("self");
        console.log(box1);
        let name = box1.getChildByName("name");
        name.changeText(GameMain.gameUser.name);
        this.initRoom();
    }
    //初始化房间
    initRoom() {
    }
}
//# sourceMappingURL=Room.js.map