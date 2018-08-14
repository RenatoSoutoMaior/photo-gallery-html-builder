function builder(root, widthX, heightY, amountPerLine, borderColor, borderSize) {
    var x = document.getElementById("myFiles");
    var txt = "";
    var tempAmountPerLine = 0;

    if ('files' in x) {
        if (x.files.length === 0) {
            txt = "Select one or more files.";
        } else {
            txt += "<style>img.HoverBorder {border: " + borderSize + "px solid white;}";
            txt += " img.HoverBorder:hover {border: " + borderSize + "px solid " + borderColor + ";}</style>";
            txt += "<div class='row'>";
            for (var i = 0; i < x.files.length; i++) {
                var file = x.files[i];

                if (tempAmountPerLine === parseInt(amountPerLine)) {
                    txt += "</div><div class='row'>";
                    tempAmountPerLine = 0;
                }
                txt += "<a target='_blank' href='" + root + file.name + "'" + " width=" + widthX + " height=" + heightY;
                txt += "><img class='HoverBorder' src='" + root;
                if ('name' in file) {
                    txt += file.name + "' width=" + widthX + " height=" + heightY + " style='margin: 5px;'/></a>";
                }
                tempAmountPerLine += 1;
            }
            txt += "</div>";
        }
    }
    else {
        if (x.value === "") {
            txt += "Select one or more files.";
        } else {
            txt += "The files property is not supported by your browser!";
            txt += "<br>The path of the selected file: " + x.value;
        }
    }
    document.getElementById("builtHTML").innerText = txt;
}

function copy(id) {
    var copyTextarea = document.querySelector(id);
    copyTextarea.focus();
    copyTextarea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
}

function showMe(box1, box2) {
    var checkbox = document.getElementsByName("checkbox");
    var visibility = "none";
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            visibility = "block";
            break;
        }
    }
    document.getElementById(box1).style.display = visibility;
    document.getElementById(box2).style.display = visibility;
}

$(document).ready(function () {
    $("#success-alert").hide();
    $("#copyAll").click(function showAlert() {
        $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
            $("#success-alert").slideUp(500);
        });
    });
});
