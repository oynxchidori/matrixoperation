function subtraction() {
    var row1 = document.getElementById('size of row of matrix 1').value;
    var col1 = document.getElementById('size of column of matrix 1').value;
    var ma1 = document.getElementById('matrix1').value;
    if (ma1.split("|").length != row1 * col1){
        alert("Invalid Matrix ! ")
    }
    for (var a = 0; a < ma1.length; a++){
        var valid = "1234567890-|.".includes(ma1[a]);
        if (valid == false){
            alert("Invalid Matrix !");
        }
    }
    if (/-{2}[0-9]+/.test(ma1)){
        alert("Invalid Matrix !");
    }
    if (/\.{2}[0-9]+/.test(ma1)){
        alert("Invalid Matrix !");
    }
    var row2 = document.getElementById('size of row of matrix 2').value;
    var col2 = document.getElementById('size of column of matrix 2').value;
    var ma2 = document.getElementById('matrix2').value;
    if (ma2.split("|").length != row2 * col2){
        alert("Invalid Matrix ! ");
    }
    for (var k = 0; k < ma2.length; k++){
        var valid2 = "01234567890-|.".includes(ma2[k]);
        if (valid2 == false){
            alert("Invalid Matrix !");
        }
    }
    if (/-{2}/.test(ma2)){
        alert("Invalid Matrix !");
    }
    if (/\.{2}/.test(ma2)){
        alert("Invalid Matrix !");
    }
    if (~/[0-9]/.test(row1) || ~/[0-9]/.test(col1) || ~/[0-9]/.test(row2) || ~/[0-9]/.test(col2)){
        alert("invalid matrix size !")
    }
    if (row1 == row2 && col1 == col2) {
        var iteminma1 = ma1.split('|');
        var iteminma2 = ma2.split('|');
        var resultingMatrix = [];
        for (var i = 0; i < iteminma1.length; i++){
            var element1 = parseFloat(iteminma1[i]);
            var element2 = parseFloat(iteminma2[i]);
            resultingMatrix.push(element1 - element2);
        }
        var str = "";
        for (var j = 0; j < resultingMatrix.length - 1; j++){
            str = str + resultingMatrix[j];
            str = str + "|";
        }
        str = str + resultingMatrix[resultingMatrix.length - 1];
        var t2 = document.getElementById("result");
        t2.firstChild.nodeValue = str;
    }else{
        alert("Matrices of different sizes of rows or columns cannot be added !")
    }
}

// add event listener to table

document.addEventListener('DOMContentLoaded', function () {
    var el = document.getElementById("sub");
    el.addEventListener('click', subtraction, false);
}, false);