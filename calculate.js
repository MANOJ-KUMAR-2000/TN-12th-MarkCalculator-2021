function calc_10th(sub_marks) {
    console.log(sub_marks);
    sub_marks.sort(function(a, b) { return a - b });
    console.log(sub_marks);
    var best_3 = sub_marks.slice(-3);
    console.log(best_3);
    var total = 0;

    for (let i = 0; i < best_3.length; i++) {
        total += best_3[i];
    }
    console.log((total / 3) / 2);
    return (total / 3) / 2;

}


function calc_12th(tenth_mark, eleven_marks, twel_marks) {
    var total_12 = 0;

    for (let i = 0; i < 3; i++) {
        total_12 += (((eleven_marks[i] - 10) * 20) / 90) + twel_marks[i] + tenth_mark;
    }

    for (let i = 3; i < eleven_marks.length; i++) {
        total_12 += (((eleven_marks[i] - 30) * 20) / 70) + twel_marks[i] + tenth_mark;
    }

    return total_12;
}

function check(eleven_marks, tenth_marks) {
    for (let i = 0; i < tenth_marks.length; i++) {
        if (eleven_marks[i] == "" || tenth_marks[i] == "") {
            return false;
        }
        if (eleven_marks[i] > 100 || tenth_marks[i] > 100) {
            return false;
        }
        if (eleven_marks[-1] == "") {
            return false;
        }
    }
    return true;

}

function show12thMark() {

    var lang1_10 = parseInt(document.getElementById('tenth_language1').value);
    var lang2_10 = parseInt(document.getElementById('tenth_language2').value);
    var maths_10 = parseInt(document.getElementById('tenth_maths').value);
    var sci_10 = parseInt(document.getElementById('tenth_science').value);
    var ss_10 = parseInt(document.getElementById('tenth_social').value);
    var tenth_marks = [lang1_10, lang2_10, maths_10, sci_10, ss_10];

    var lang1_11 = parseInt(document.getElementById('eleven_language1').value);
    var lang2_11 = parseInt(document.getElementById('eleven_language2').value);
    var maths_11 = parseInt(document.getElementById('eleven_sub1').value);
    var sub_1_11 = parseInt(document.getElementById('eleven_sub2').value);
    var sub_2_11 = parseInt(document.getElementById('eleven_sub3').value);
    var sub_3_11 = parseInt(document.getElementById('eleven_sub4').value);
    var eleventh_marks = [lang1_11, lang2_11, maths_11, sub_1_11, sub_2_11, sub_3_11];

    var lang1_12 = parseInt(document.getElementById('twelth_language1').value);
    var lang2_12 = parseInt(document.getElementById('twelth_language2').value);
    var maths_12 = parseInt(document.getElementById('twelth_sub1').value);
    var sub_1_12 = parseInt(document.getElementById('twelth_sub2').value);
    var sub_2_12 = parseInt(document.getElementById('twelth_sub3').value);
    var sub_3_12 = parseInt(document.getElementById('twelth_sub4').value);
    var tweleth_marks = [lang1_12, lang2_12, maths_12, sub_1_12, sub_2_12, sub_3_12];

    if (check(eleventh_marks, tenth_marks)) {
        var tenth_mark_50 = calc_10th(tenth_marks);
        var tweleth_mark = calc_12th(tenth_mark_50, eleventh_marks, tweleth_marks).toFixed(2);
        var display = document.getElementById('res-id');
        display.innerText = `Your mark : ${tweleth_mark}/600`;
    }
}