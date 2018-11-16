/*
* name;
*/
import EventDispatcher = laya.events.EventDispatcher;
class EventMgr extends EventDispatcher {
    static eventDispatcher: EventDispatcher = new EventDispatcher();
    static _instance: EventMgr;
    public static getInstance() {
        if (EventMgr._instance == null) {
            EventMgr._instance = new EventMgr();
        }
        return EventMgr._instance;
    }
    constructor() {
        super();
    }
    ///注册事件
    public Emit(InName, agv?: null) {
        //派发事件
        console.log("派发事件",InName);
        EventMgr.eventDispatcher.event(InName, agv);
    }
    //侦听事件
    public AddNotice(InName, caller, listener: Function, arg?: any[]): void {
        console.log("侦听事件",InName);
        EventMgr.eventDispatcher.on(InName, caller, listener, (arg == null) ? null : ([arg]));
    }
}

