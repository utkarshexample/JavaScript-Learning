function clean() {
    location.reload();

}

function check() {
   
    if (document.getElementById('number').value == "") {
        document.getElementById('errorname').innerHTML = "Please enter a number between 1 to 5";
    } else {
        document.getElementById('errorname').innerHTML = "";
    }
}

function rate() {
    var a = document.getElementById("number").value;
    var aP = document.getElementsByTagName('span');
    var fs, hs;


    if (a == 5) {
        fs = aP.length;
        hs = 0;
    }
    if (5>a && a>4 ) {
        fs = aP.length - 1;
        hs = 1;
    }
    if (a == 4) {
        fs = aP.length - 1;
        hs = 0;
    }
    if (4>a && a>3) {
        fs = aP.length - 2;
        hs = 1;
    }
    if (a == 3) {
        fs = aP.length - 2;
        hs = 0;
    }
    if (3>a && a>2) {
        fs = aP.length - 3;
        hs = 1;
    }
    if (a == 2) {
        fs = aP.length - 3;
        hs = 0;
    }
    if (a<2 && a>1 ) {
        fs = aP.length - 4;
        hs = 1;
    }
    if (a == 1) {
        fs = aP.length - 4;
        hs = 0;
    }

    for (var i = 0; i < fs; i++) {
        if (aP[i].className === 'fa fa-star' || aP[i].className === 'fas fa-star-half checked') {
            aP[i].className = 'fas fa-star checked';
        }
    }

    if (hs == 1) {
        if (aP[i].className === 'fa fa-star') {
            aP[i].className = 'fas fa-star-half checked';
        }
    }
}

