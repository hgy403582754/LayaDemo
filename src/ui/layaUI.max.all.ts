
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameLoginUI extends View {
		public startBtn1:Laya.Button;
		public startBtn2:Laya.Button;
		public startBtn3:Laya.Button;
		public startBtn4:Laya.Button;
		public startBtn5:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Button","props":{"y":131,"x":446,"width":278,"var":"startBtn1","label":"登陆1","height":76}},{"type":"Button","props":{"y":205,"x":446,"width":278,"var":"startBtn2","name":"startBtn2","label":"登陆2","height":76}},{"type":"Button","props":{"y":288,"x":449,"width":278,"var":"startBtn3","name":"startBtn3","label":"登陆3","height":76}},{"type":"Button","props":{"y":368,"x":452,"width":278,"var":"startBtn4","name":"startBtn4","label":"登陆4","height":76}},{"type":"Button","props":{"y":459,"x":453,"width":278,"var":"startBtn5","name":"startBtn5","label":"登陆5","height":76}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameLoginUI.uiView);

        }

    }
}

module ui {
    export class PrecinctUI extends View {
		public poorPaln:Laya.Image;
		public money:laya.display.Text;
		public user:Laya.Box;
		public name:Laya.Label;
		public id:Laya.Label;
		public touxiang:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"playchoice_bg.png"}},{"type":"Box","props":{"y":15,"x":386},"child":[{"type":"Image","props":{"y":2,"x":0,"skin":"bg_money.png"},"child":[{"type":"Image","props":{"y":-2,"x":0,"skin":"icon_money.png"}},{"type":"Button","props":{"y":0,"x":392,"width":64,"stateNum":1,"skin":"btn_money_add.png","height":64}}]},{"type":"Image","props":{"y":-15,"x":-386,"skin":"information_bg.png"}}]},{"type":"Image","props":{"y":197,"x":41,"var":"poorPaln","skin":"img_selection_poor.png","name":"poorPaln"}},{"type":"Image","props":{"y":197,"x":469,"skin":"img_selection_boos.png"}},{"type":"Image","props":{"y":197,"x":890,"skin":"img_selection_rich.png"}},{"type":"Text","props":{"y":25,"x":482,"width":260,"var":"money","text":"0000000","height":35,"fontSize":45,"font":"SimHei","color":"#d5dd84","bold":true,"align":"left"}},{"type":"Box","props":{"y":569,"x":109},"child":[{"type":"Image","props":{"skin":"bg_chips.png"}},{"type":"Image","props":{"y":68,"skin":"bg_chips.png"}}]},{"type":"Box","props":{"y":571,"x":531},"child":[{"type":"Image","props":{"skin":"bg_chips.png"}},{"type":"Image","props":{"y":68,"skin":"bg_chips.png"}}]},{"type":"Box","props":{"y":572,"x":946},"child":[{"type":"Image","props":{"skin":"bg_chips.png"}},{"type":"Image","props":{"y":68,"skin":"bg_chips.png"}}]},{"type":"Box","props":{"y":15,"x":30,"var":"user","name":"user"},"child":[{"type":"Image","props":{"skin":"playchoice_headframe.png","renderType":"render"}},{"type":"Text","props":{"y":39,"x":90,"width":45,"text":"ID:","pivotY":-3,"pivotX":5,"height":30,"fontSize":25,"font":"Microsoft YaHei","color":"#eed68a"}},{"type":"Label","props":{"y":12,"x":95,"width":123,"var":"name","text":"00000","name":"name","height":27,"fontSize":25,"font":"Microsoft YaHei","color":"#eed68a"}},{"type":"Label","props":{"y":41,"x":132,"width":144,"var":"id","text":"0000","name":"id","height":29,"fontSize":25,"font":"Microsoft YaHei","color":"#eed68a"}},{"type":"Image","props":{"y":6,"x":8,"width":59,"var":"touxiang","name":"touxiang","height":61}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.PrecinctUI.uiView);

        }

    }
}

module ui {
    export class RoomUI extends View {
		public readyBtn:Laya.Button;
		public play_1:Laya.Box;
		public name:Laya.Label;
		public play_2:Laya.Box;
		public play_3:Laya.Box;
		public play_4:Laya.Box;
		public play_5:Laya.Box;
		public cardBack:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"bg03_playing.png"}},{"type":"Button","props":{"y":19,"x":35,"width":81,"stateNum":1,"skin":"btn_playing.png","height":61}},{"type":"Button","props":{"y":479,"x":543,"width":201,"var":"readyBtn","stateNum":1,"skin":"btn_ready.png","name":"readyBtn","height":87}},{"type":"Box","props":{"y":556,"x":239,"var":"play_1","name":"play_1"},"child":[{"type":"Image","props":{"x":3,"width":98,"skin":"playchoice_headframe.png","height":97}},{"type":"Image","props":{"x":131,"width":89,"skin":"image_sate_unready.png","height":33}},{"type":"Label","props":{"y":114,"x":5,"width":102,"var":"name","text":"昵称昵称","name":"name","height":30,"fontSize":20,"font":"Microsoft YaHei","color":"#eed6b6","bold":false}},{"type":"Image","props":{"y":144,"width":124,"skin":"bg_chips.png","height":37}},{"type":"Label","props":{"y":153,"x":20,"width":80,"text":"资产资产","height":20,"fontSize":20,"font":"Microsoft YaHei","color":"#9d8c76"}}]},{"type":"Box","props":{"y":348,"x":1067,"var":"play_2","name":"play_2"},"child":[{"type":"Image","props":{"x":3,"width":98,"skin":"playchoice_headframe.png","height":97}},{"type":"Image","props":{"x":131,"width":89,"skin":"image_sate_unready.png","height":33}},{"type":"Label","props":{"y":114,"x":5,"width":102,"text":"昵称昵称","height":30,"fontSize":20,"font":"Microsoft YaHei","color":"#eed6b6","bold":false}},{"type":"Image","props":{"y":144,"width":124,"skin":"bg_chips.png","height":37}},{"type":"Label","props":{"y":153,"x":20,"width":80,"text":"资产资产","height":20,"fontSize":20,"font":"Microsoft YaHei","color":"#9d8c76"}}]},{"type":"Box","props":{"y":81,"x":1067,"var":"play_3","name":"play_3"},"child":[{"type":"Image","props":{"x":3,"width":98,"skin":"playchoice_headframe.png","height":97}},{"type":"Image","props":{"x":131,"width":89,"skin":"image_sate_unready.png","height":33}},{"type":"Label","props":{"y":114,"x":5,"width":102,"text":"昵称昵称","height":30,"fontSize":20,"font":"Microsoft YaHei","color":"#eed6b6","bold":false}},{"type":"Image","props":{"y":144,"width":124,"skin":"bg_chips.png","height":37}},{"type":"Label","props":{"y":153,"x":20,"width":80,"text":"资产资产","height":20,"fontSize":20,"font":"Microsoft YaHei","color":"#9d8c76"}}]},{"type":"Box","props":{"y":81,"x":49,"var":"play_4","name":"play_4"},"child":[{"type":"Image","props":{"x":3,"width":98,"skin":"playchoice_headframe.png","height":97}},{"type":"Image","props":{"x":131,"width":89,"skin":"image_sate_unready.png","height":33}},{"type":"Label","props":{"y":114,"x":5,"width":102,"text":"昵称昵称","height":30,"fontSize":20,"font":"Microsoft YaHei","color":"#eed6b6","bold":false}},{"type":"Image","props":{"y":144,"width":124,"skin":"bg_chips.png","height":37}},{"type":"Label","props":{"y":153,"x":20,"width":80,"text":"资产资产","height":20,"fontSize":20,"font":"Microsoft YaHei","color":"#9d8c76"}}]},{"type":"Box","props":{"y":348,"x":49,"var":"play_5","name":"play_5"},"child":[{"type":"Image","props":{"x":3,"width":98,"skin":"playchoice_headframe.png","height":97}},{"type":"Image","props":{"x":131,"width":89,"skin":"image_sate_unready.png","height":33}},{"type":"Label","props":{"y":114,"x":5,"width":102,"text":"昵称昵称","height":30,"fontSize":20,"font":"Microsoft YaHei","color":"#eed6b6","bold":false}},{"type":"Image","props":{"y":144,"width":124,"skin":"bg_chips.png","height":37}},{"type":"Label","props":{"y":153,"x":20,"width":80,"text":"资产资产","height":20,"fontSize":20,"font":"Microsoft YaHei","color":"#9d8c76"}}]},{"type":"Image","props":{"y":208,"x":483,"var":"cardBack","skin":"img_card_back_small.png","name":"cardBack"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RoomUI.uiView);

        }

    }
}

module ui {
    export class SelectRoomUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"bg_choice.png"}},{"type":"List","props":{"y":121,"x":16,"width":1305,"spaceX":40,"repeatY":1,"repeatX":3,"name":"listRooms","height":475,"hScrollBarSkin":"comp/hscroll.png"},"child":[{"type":"Box","props":{"y":0,"x":0,"width":422,"renderType":"render","name":"itemRoom","height":425},"child":[{"type":"Image","props":{"skin":"bg_join.png"}},{"type":"Image","props":{"y":153,"x":274,"skin":"board_head_join.png"}},{"type":"Image","props":{"y":144,"x":20,"width":120,"skin":"borad_head.png","height":124}},{"type":"Image","props":{"y":80,"x":84,"skin":"borad_head.png"}},{"type":"Image","props":{"y":13,"x":147,"skin":"borad_head.png"}},{"type":"Image","props":{"y":83,"x":211,"skin":"borad_head.png"}},{"type":"Button","props":{"y":296,"x":57,"width":309,"stateNum":1,"skin":"btn_join.png","name":"joinBtn","height":104}},{"type":"Label","props":{"y":241,"x":169,"width":97,"text":"0000","name":"roomNum","height":40,"fontSize":25,"font":"Microsoft YaHei","color":"#eed68a"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.SelectRoomUI.uiView);

        }

    }
}
