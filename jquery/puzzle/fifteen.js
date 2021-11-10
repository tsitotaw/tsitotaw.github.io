let emptyPiece = {
    x: 300,
    y: 300
};

$(document).ready(function () {

    let gameStarted = false;

    function moveHorizontal(piece, isLeft){
        let size = (isLeft) ? piece.x-100 : piece.x+100;

        $(piece).css({
            "left": size + "px"
        });
        swapPlaces(piece);
    }

    function moveVertical(piece, isTop){
        let size = (isTop) ? piece.y-100 : piece.y+100;

        $(piece).css({
            "top": size + "px"
        });
        swapPlaces(piece);
    }

    function swapPlaces(piece) {
        let tempX = emptyPiece.x;
        let tempY = emptyPiece.y;
        emptyPiece.x = piece.x;
        emptyPiece.y = piece.y;
        piece.x = tempX;
        piece.y = tempY;
    }

    function gameWinChecker() {
        let win = true;
        $('#puzzlearea div').each(function () {
            let id = $(this).prop("id");
            let squareID = "square_" + this.x + "_" + this.y;
            if (id != squareID) {
                win = false;
            }
        });

        if (win && gameStarted)
            alert("Good Job, You WON!!!!!!");
    }

    let init = function () {
        $('#puzzlearea div').each(function (index) {
            let x = ((index % 4) * 100);
            let y = (Math.floor(index / 4) * 100);

            $(this).css({ "left": x + "px" });
            $(this).css({ "top": y + "px" });
            $(this).css({ "background-position": -x + 'px ' + (-y) + 'px' });

            this.x = x;
            this.y = y;
            $(this).prop("id", "square_" + x + "_" + y);
            $(this).on("click", function () {
                movePiece(this);
            });
        });
        toggleMMoveablePieceClass();
        $("#shufflebutton").on("click", shuffle);
    }

    init();

    function toggleMMoveablePieceClass() {

        $('#puzzlearea div').each(function () {

            piece = this; 
            let left = piece.x;
            let top = piece.y;

            $(piece).removeClass("movablepiece");

            if (left === emptyPiece.x && ((top - emptyPiece.y) === 100 || (top - emptyPiece.y) === -100)) {
                if ((top - emptyPiece.y) === 100 || (top - emptyPiece.y) === -100) {
                    $(piece).addClass("movablepiece");
                }
            }     

            else if (top === emptyPiece.y && ((left - emptyPiece.x) === 100 || (left - emptyPiece.x) === -100)) {
                $(piece).addClass("movablepiece");
            }
        });

        gameWinChecker();
    }    

    function movePiece(piece) {
        /**
         * we don't need to go all the way down, if this piece is not moveable
         */
        if(!$(piece).hasClass('movablepiece'))
        {
            return false;
        }


        let left = piece.x;
        let top = piece.y;


        /**
         * we will compare the left and top position of our peice againist emptyPiece
         * initially emptyPiece will have a default value of the last position (300,300)
         * everytime we do a shuffle, it will hold a new value
         * 
         * if both the left values are the same, we only can move up or down
         */
        if (left === emptyPiece.x) {
            if ((top - emptyPiece.y) === 100) {
                moveVertical(piece, true);
            } else if ((top - emptyPiece.y) === -100) {
                moveVertical(piece, false);
            }
        }


        /**
         * if both the top values are the same, we only can move left or right
         */
        if (top === emptyPiece.y) {
            if ((left - emptyPiece.x) === 100) {
                moveHorizontal(piece, true);
            } else if ((left - emptyPiece.x) === -100) {
                moveHorizontal(piece, false);
            }

            
        }
        toggleMMoveablePieceClass();
    }

   
    function shuffle() {
        for (let i = 0; i < 200; i++) {
            gameStarted = true;
            let data = $('.movablepiece');
            let item = data[Math.floor(Math.random() * data.length)];
            movePiece(item);
        }
    }
});

