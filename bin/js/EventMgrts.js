/*
* name;
*/
var EventDispatcher = laya.events.EventDispatcher;
class EventMgr extends EventDispatcher {
    constructor() {
        super();
    }
    static getInstance() {
        if (EventMgr._instance == null) {
            EventMgr._instance = new EventMgr();
        }
        return EventMgr._instance;
    }
    ///注册事件
    Emit(InName, agv) {
        //派发事件
        console.log("派发事件", InName);
        EventMgr.eventDispatcher.event(InName, agv);
    }
    //侦听事件
    AddNotice(InName, caller, listener, arg) {
        console.log("侦听事件", InName);
        EventMgr.eventDispatcher.on(InName, caller, listener, (arg == null) ? null : ([arg]));
    }
}
EventMgr.eventDispatcher = new EventDispatcher();
//# sourceMappingURL=EventMgrts.js.map