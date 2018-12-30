function calculate(matrix, rowlength){
    if (matrix.length == 1){
        return parseInt(matrix[0], 10);
    }else if (matrix.length == 4){
        return parseInt(matrix[0], 10) * parseInt(matrix[3], 10) - parseInt(matrix[1], 10) * parseInt(matrix[2], 10);
    }else{
        var save = 0;
        var actual = matrix.slice(rowlength, 10);
        for (var k = 0; k != rowlength; k++){
            var temp = [];
            for (var c = 0; c != actual.length; c++){
                if (c % rowlength != k){
                    temp.push(actual[c]);
                }
            }
            var s = calculate(temp, rowlength - 1);
            save = save +  parseInt(matrix[k], 10) * s * Math.pow(-1, k);
        }
        return save;
    }
}
function determinant() {
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

    if (!(/[0-9]/.test(row1)) || !(/[0-9]/.test(col1))){
        alert("invalid matrix size !")
    }
    if (row1 == col1 && row1 != "0") {
        var iteminma1 = ma1.split('|');
        var re = calculate(iteminma1, parseInt(row1, 10));
        var str = "";
        str = str + re;
        var t2 = document.getElementById("result");
        t2.firstChild.nodeValue = str;
    }else{
        alert("Matrix whose size of column is not equal to that of row cannot be used in this calculation !")
    }
}

// add event listener to table

document.addEventListener('DOMContentLoaded', function () {
    var el = document.getElementById("determinant");
    el.addEventListener('click', determinant, false);
}, false);