(function () {
    window.Players = {
        "red": {"key": "red", "code": 1, "name": "红方"},
        "blue": {"key": "blue", "code": 0, "name": "蓝方"}
    };
    window.Pieces = {
        "x": {"key": "x", "code": 7, "name": "象", "prey": [7, 6, 5, 4, 3, 2, 1]},
        "sz": {"key": "sz", "code": 6, "name": "狮", "prey": [6, 5, 4, 3, 2, 1, 0]},
        "h": {"key": "h", "code": 5, "name": "虎", "prey": [5, 4, 3, 2, 1, 0]},
        "b": {"key": "b", "code": 4, "name": "豹", "prey": [4, 3, 2, 1, 0]},
        "l": {"key": "l", "code": 3, "name": "狼", "prey": [3, 2, 1, 0]},
        "g": {"key": "g", "code": 2, "name": "狗", "prey": [2, 1, 0]},
        "m": {"key": "m", "code": 1, "name": "猫", "prey": [1, 0]},
        "s": {"key": "s", "code": 0, "name": "鼠", "prey": [7, 0]}
    };
    window.Boards = {
        "normal": {"key": "normal", "code": 1, "name": "普通棋盘"},
        "river": {"key": "river", "code": 2, "name": "小河"},
        "trap": {"key": "trap", "code": 3, "name": "陷阱"},
        "den": {"key": "den", "code": 4, "name": "兽穴"}
    };
    window.Zone = function (board, player, piece) {
        this.board = board;
        this.player = player;
        this.piece = piece;
    };
    Zone.prototype = {
        out: function () {
            this.player = null;
            this.piece = null;
        },
        in: function (player, piece) {

        }
    };
    window.Board = function (id) {
        this.$wrapper = $("#" + id);
        this.value = [];
    };
    Board.prototype = {
        init: function () {
            this.value = [
                [new Zone(Boards.normal, Players.red, Pieces.sz), new Zone(Boards.normal, null, null), new Zone(Boards.trap, Players.red, null), new Zone(Boards.den, Players.red, null), new Zone(Boards.trap, Players.red, null), new Zone(Boards.normal, null, null), new Zone(Boards.normal, Players.red, Pieces.h)],
                [new Zone(Boards.normal, null, null), new Zone(Boards.normal, Players.red, Pieces.g), new Zone(Boards.normal, null, null), new Zone(Boards.trap, Players.red, null), new Zone(Boards.normal, null, null), new Zone(Boards.normal, Players.red, Pieces.m), new Zone(Boards.normal, null, null)],
                [new Zone(Boards.normal, Players.red, Pieces.s), new Zone(Boards.normal, null, null), new Zone(Boards.normal, Players.red, Pieces.b), new Zone(Boards.normal, null, null), new Zone(Boards.normal, Players.red, Pieces.l), new Zone(Boards.normal, null, null), new Zone(Boards.normal, Players.red, Pieces.x)],
                [new Zone(Boards.normal, null, null), new Zone(Boards.river, null, null), new Zone(Boards.river, null, null), new Zone(Boards.normal, null, null), new Zone(Boards.river, null, null), new Zone(Boards.river, null, null), new Zone(Boards.normal, null, null)],
                [new Zone(Boards.normal, null, null), new Zone(Boards.river, null, null), new Zone(Boards.river, null, null), new Zone(Boards.normal, null, null), new Zone(Boards.river, null, null), new Zone(Boards.river, null, null), new Zone(Boards.normal, null, null)],
                [new Zone(Boards.normal, null, null), new Zone(Boards.river, null, null), new Zone(Boards.river, null, null), new Zone(Boards.normal, null, null), new Zone(Boards.river, null, null), new Zone(Boards.river, null, null), new Zone(Boards.normal, null, null)],
                [new Zone(Boards.normal, Players.blue, Pieces.x), new Zone(Boards.normal, null, null), new Zone(Boards.normal, Players.blue, Pieces.l), new Zone(Boards.normal, null, null), new Zone(Boards.normal, Players.blue, Pieces.b), new Zone(Boards.normal, null, null), new Zone(Boards.normal, Players.blue, Pieces.s)],
                [new Zone(Boards.normal, null, null), new Zone(Boards.normal, Players.blue, Pieces.m), new Zone(Boards.normal, null, null), new Zone(Boards.trap, Players.blue, null), new Zone(Boards.normal, null, null), new Zone(Boards.normal, Players.blue, Pieces.g), new Zone(Boards.normal, null, null)],
                [new Zone(Boards.normal, Players.blue, Pieces.h), new Zone(Boards.normal, null, null), new Zone(Boards.trap, Players.blue, null), new Zone(Boards.den, Players.blue, null), new Zone(Boards.trap, Players.blue, null), new Zone(Boards.normal, null, null), new Zone(Boards.normal, Players.blue, Pieces.sz)]
            ];
            this._initChessBoard();
        },
        _initChessBoard: function () {
            var html = '<table>';
            this.value.forEach(function (x) {
                html += '<tr>';
                x.forEach(function (y) {
                    html += '<td class="' + y.board.key + '" boardKey="'+y.board.key+'" currentPiece="' + (y.piece == null ? "" : y.piece.key) + '">' +
                        '<span class="' + (y.piece == null ? "" : "piece") + ' ' + (y.player == null ? "" : y.player.key) + '">' +
                        (y.piece == null ? "" : y.piece.name) +
                        '</span>' +
                        +'</td>';
                });
                html += '</tr>';
            });
            html += '</table>';
            this.$wrapper.html(html);
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