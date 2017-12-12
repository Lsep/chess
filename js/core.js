(function () {
    window.Player = {
      red:{"code":1,"name":"红方"},
      blue:{"code":0,"name":"蓝方"}
    };
    window.Piece = {
        x:{"code": 7, "name": "象"},
        s:{"code": 6, "name": "狮"},
        h:{"code": 5, "name": "虎"},
        b:{"code": 4, "name": "豹"},
        l:{"code": 3, "name": "狼"},
        g:{"code": 2, "name": "狗"},
        m:{"code": 1, "name": "猫"},
        S:{"code": 0, "name": "鼠"}
    };
    window.piece = function (player,piece) {
        this.player = Player[player];
        this.piece = Piece[piece];
    };
    window.Board = {
        value:[],
        init:function () {
            this.value = [
                [piece(Player.red,Piece.s),2,3,4,5,6,7,8,9],
                [],
                [],
                [],
                [],
                [],
                []
            ];
        }
    }
})();
(function () {
    if (window.Chess) {
        return;
    }
    window.Chess = function (AI) {
        if (typeof AI !== "number" || AI < 0 || AI > 4) {
            return;
        }
        this.AI = AI;
        this.isAI = AI !== 0;
    };
    Chess.prototype = {
        init: function () {

        }
    }
})();