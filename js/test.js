(function () {
    $(document).ready(function () {
        $("#test").click(function () {
            var board = new Board();
            board.init();
            console.log(board.value)
        });
    });
    
    function shuffle(arr){
        var len = arr.length;
        for(var i = 0; i < len - 1; i++){
            var idx = Math.floor(Math.random() * (len - i));
            var temp = arr[idx];
            arr[idx] = arr[len - i - 1];
            arr[len - i -1] = temp;
        }
        return arr;
    }
})();
