function builder(root, widthX, heightY, amountPerLine, borderColor, borderSize) {
    let x = document.getElementById("myFiles");
    let txt = "";
    let tempAmountPerLine = 0;

    if ('files' in x) {
        if (x.files.length === 0) {
            txt = "Select one or more files.";
        } else {
            txt += "<style>img.hoverBorder {border: " + borderSize + "px solid white;} ";
            txt += "img.hoverBorder:hover {border: " + borderSize + "px solid " + borderColor + ";}";
            txt += "button.buttonDownload {background-color: #008CBA;} ";
            txt += "button.buttonDownload:hover {background-color: #00a3d8;}</style>";
            if (document.getElementsByName("downloadButton")[0].checked === true) {
                txt += "<div class='row' style='text-align: center;'><a href='" + root + ".zip' download>";
                txt += "<button class='buttonDownload' style='border: none;color: white;padding: 10px;text-align: center;";
                txt += "text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;";
                txt += "border-radius: 8px;'>Download All</button></a></div>";
            }
            txt += "<div class='row' style='text-align: center;'>";
            for (let i = 0; i < x.files.length; i++) {
                let file = x.files[i];

                if (tempAmountPerLine === parseInt(amountPerLine)) {
                    txt += "</div><div class='row' style='text-align: center;'>";
                    tempAmountPerLine = 0;
                }
                txt += "<a target='_blank' href='" + root + '/' + file.name + "'" + " width=" + widthX + " height=" + heightY;
                txt += "><img class='hoverBorder' src='" + root + '/';
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
    let copyTextarea = document.querySelector(id);
    copyTextarea.focus();
    copyTextarea.select();

    try {
        let successful = document.execCommand('copy');
        let msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
}

function showMe(box1, box2) {
    let checkbox = document.getElementsByName("customBorder");
    let visibility = "none";
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            visibility = "block";
            break;
        }
    }
    document.getElementById(box1).style.display = visibility;
    document.getElementById(box2).style.display = visibility;
}

function copyAll() {
    let copyText = document.getElementsByClassName("builtHTML")[0];
    copyText.select();
    document.execCommand("copy");
}

$(document).ready(function () {
    $("#success-alert").hide();
    $("#copyAll").click(function showAlert() {
        $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
            $("#success-alert").slideUp(500);
        });
    });
});
