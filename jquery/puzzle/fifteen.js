var emptyPiece = {
    x: 300,
    y: 300
};

$(document).ready(function () {

    var gameStarted = false;

    function moveLeft(piece) {
        var x = piece.x;
        $(piece).css({
            "left": (x - 100) + "px"
        });
        swapPlaces(piece);
    }

    function moveRight(piece) {
        var x = piece.x;
        $(piece).css({
            "left": (x + 100) + "px"
        });
        swapPlaces(piece);
    }

    function moveUp(piece) {
        var y = piece.y;
        $(piece).css({
            "top": (y - 100) + "px"
        });
        swapPlaces(piece);
    }

    function moveDown(piece) {
        var y = piece.y;
        $(piece).css({
            "top": (y + 100) + "px"
        });
        swapPlaces(piece);
    }

    function swapPlaces(piece) {
        var tempX = emptyPiece.x;
        var tempY = emptyPiece.y;
        emptyPiece.x = piece.x;
        emptyPiece.y = piece.y;
        piece.x = tempX;
        piece.y = tempY;
    }

    function gameWinChecker()
    {
        var win = true;
        $('#puzzlearea div').each(function () {
            var id = $(this).prop("id");
            var squareID = "square_" + this.x + "_" + this.y;
            if (id != squareID) {
                win = false;
            }
        });

        if (win && gameStarted)
            alert("Good Job, You WON!!!!!!");
    }

    $('#puzzlearea div').each(function (index, value) {
        var x = ((index % 4) * 100);
        var y = (Math.floor(index / 4) * 100);
        
        $(this).addClass('puzzlepiece');
        
        $(this).css({
            "left": x + "px",
            "top": y + "px",
            "backgroundImage": "url('background.jpg')",
            "backgroundPosition": -x + 'px ' + (-y) + 'px'
        });

        this.x = x;
        this.y = y;
        $(this).prop("id", "square_" + x + "_" + y);
        $(this).on("click", function () {
            move(this);
        });
    });


    resetAllandChecks();


    function resetAllandChecks() {

        $('#puzzlearea div').each(function () {
            $(this).removeClass("movablepiece");
            resetHelper(this);
        });

        gameWinChecker();
    }


    function resetHelper(piece) {
        var squareX = piece.x;
        var squareY = piece.y;


        if (squareX === emptyPiece.x) {
            if ((squareY - emptyPiece.y) === 100) {
                $(piece).addClass("movablepiece");
            } else if ((squareY - emptyPiece.y) === -100) {
                $(piece).addClass("movablepiece");
            } else {
                $(piece).removeClass("movablepiece");
            }
        }


        if (squareY === emptyPiece.y) {
            if ((squareX - emptyPiece.x) === 100) {
                $(piece).addClass("movablepiece");
            } else if ((squareX - emptyPiece.x) === -100) {
                $(piece).addClass("movablepiece");
            } else {
                $(piece).removeClass("movablepiece");
            }
        }
    }

    function move(piece) {
        var squareX = piece.x;
        var squareY = piece.y;


        if (squareX === emptyPiece.x) {
            if ((squareY - emptyPiece.y) === 100) {
                moveUp(piece);
            } else if ((squareY - emptyPiece.y) === -100) {
                moveDown(piece);
            }

            resetAllandChecks();
        }


        if (squareY === emptyPiece.y) {
            if ((squareX - emptyPiece.x) === 100) {
                moveLeft(piece);
            } else if ((squareX - emptyPiece.x) === -100) {
                moveRight(piece);
            }

            resetAllandChecks();
        }

    }

    $("#shufflebutton").on("click", shuffle);

    function shuffle()
    {
        for (var i = 0; i < 200; i++) {
            gameStarted = true;
            var data = $('.movablepiece');
            var item = data[Math.floor(Math.random() * data.length)];
            move(item);
        }
    }
});

