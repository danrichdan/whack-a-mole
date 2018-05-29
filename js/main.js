
var $mole = $('#game-area img');
var top;
var left;

function getPosition() {
    return Math.floor(Math.random() * 70);
}

function molePosition() {
    $mole.css({"top" : getPosition() + "vh", "left": getPosition() + "vw"});     
}

$(document).ready(function() {
    molePosition();
});

$mole.click(function() {
    $mole.hide();

    setTimeout(function(){
        $mole.show();
        molePosition();
    }, 1000);   
});