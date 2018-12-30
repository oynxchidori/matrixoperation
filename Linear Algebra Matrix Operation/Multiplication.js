
function multiplication() {
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
    if (/-{2}/.test(ma1)){
        alert("Invalid Matrix !");
    }else if (/\.{2}/.test(ma1)){
        alert("Invalid Matrix !");
    }
    var row2 = document.getElementById('size of row of matrix 2').value;
    var col2 = document.getElementById('size of column of matrix 2').value;
    var ma2 = document.getElementById('matrix2').value;
    if (ma2.split("|").length != row2 * col2){
        alert("Invalid Matrix ! ")
    }
    for (var k = 0; k < ma2.length; k++){
        var valid2 = "1234567890-|.".includes(ma2[k]);
        if (valid2 == false){
            alert("Invalid Matrix !");
        }
    }
    if (/-{2}/.test(ma2)){
        alert("Invalid Matrix !");
    }else if (/\.{2}/.test(ma2)){
        alert("Invalid Matrix !");
    }
    if (~/[0-9]/.test(row1) || ~/[0-9]/.test(col1) || ~/[0-9]/.test(row2) || ~/[0-9]/.test(col2)){
        alert("invalid matrix size !")
    }
    if (row1 == col2) {
        var iteminma1 = ma1.split('|');
        var iteminma2 = ma2.split('|');
        var iteminma22 = [];
        for (var g = 0; g != parseInt(row2, 10); g++){
            for (var f = g; f < iteminma2.length; f = f + parseInt(row2, 10)){
                iteminma22.push(iteminma2[f]);
            }
        }
        var resultingMatrix = [];
        for (var p = 0; p < iteminma22.length; p = p + parseInt(col2, 10)) {
            for (var i = 0; i < iteminma1.length; i = i + parseInt(row1, 10)) {
                var count = 0;
                for (var l = i; l != parseInt(row1, 10) + parseInt(i, 10); l++) {
                    count = count + parseFloat(iteminma1[l]) * parseFloat(iteminma22[p + l % parseInt(col2, 10)]);
                }
                resultingMatrix.push(count);
            }
        }
        var str = "";
        for (var j = 0; j < resultingMatrix.length - 1; j++){
            str = str + resultingMatrix[j];
            str = str + "|";
        }
        str = str + resultingMatrix[resultingMatrix.length - 1];
        str = str + " Matrix size:" + col1 + " x " + row2;
        var t2 = document.getElementById("result");
        t2.firstChild.nodeValue = str;
    }else{
        alert("Matrices of different sizes of rows or columns cannot be multiplied !")
    }
}

// add event listener to table

document.addEventListener('DOMContentLoaded', function () {
    var el = document.getElementById("multi");
    el.addEventListener('click', multiplication, false);
}, false);