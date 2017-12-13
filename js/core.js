(function () {
    window.Players = {
        "red": {"key": "red", "code": 1, "name": "红方"},
        "blue": {"key": "blue", "code": 0, "name": "蓝方"}
    };
    window.Pieces = {
        "x": {"key": "x", "code": 7, "name": "象"},
        "sz": {"key": "sz", "code": 6, "name": "狮"},
        "h": {"key": "h", "code": 5, "name": "虎"},
        "b": {"key": "b", "code": 4, "name": "豹"},
        "l": {"key": "l", "code": 3, "name": "狼"},
        "g": {"key": "g", "code": 2, "name": "狗"},
        "m": {"key": "m", "code": 1, "name": "猫"},
        "s": {"key": "s", "code": 0, "name": "鼠"}
    };
    window.Boards = {
        "normal":{"key": "normal", "code": 1, "name": "普通棋盘"},
        "river":{"key": "river", "code": 2, "name": "小河"},
        "trap":{"key": "trap", "code": 3, "name": "陷阱"},
        "den":{"key": "den", "code": 4, "name": "兽穴"}
    };
    window.Piece = function (player, piece) {
        this.player = Players[player];
        this.piece = Pieces[piece];
    };
    window.Board = {
        value: [],
        init: function () {
            this.value = [
                [new Piece(Players.red.key, Pieces.s.key), "", 3, 4, 5, 6, 7, 8, 9],
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