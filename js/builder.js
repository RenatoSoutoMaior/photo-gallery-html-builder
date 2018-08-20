function builder(root, widthX, heightY, amountPerLine, borderColor, borderSize, fileType) {
    let x = document.getElementById("myFiles");
    let txt = "";
    let tempAmountPerLine = 0;

    if ('files' in x) {
        if (x.files.length === 0) {
            txt = "Select one or more files.";
        } else {
            txt += "<style>a.hoverBorder {border: " + borderSize + "px solid white;} ";
            txt += "a.hoverBorder:hover {border: " + borderSize + "px solid " + borderColor + ";} ";
            txt += "button.buttonDownload {background-color: #008CBA;} ";
            txt += "button.buttonDownload:hover {background-color: #00a3d8;} ";
            txt += ".img{width: 100%;height: 100%;background-position: 50% 50%;background-repeat: no-repeat;background-size: cover;}";
            txt += "</style>";
            if (document.getElementsByName("downloadButton")[0].checked === true) {
                txt += "<div class='row' style='text-align: center;'><a href='" + root + '/' + root + "." + fileType + "' download>";
                txt += "<button class='buttonDownload' style='border: none;color: white;padding: 10px;text-align: center;";
                txt += "text-decoration: none;font-size: 16px;margin: 4px 2px;cursor: pointer;";
                txt += "border-radius: 8px;'>Download All</button></a></div>";
            }
            txt += "<div class='row' style='text-align: center;'>";
            for (let i = 0; i < x.files.length; i++) {
                let file = x.files[i];

                if (tempAmountPerLine === parseInt(amountPerLine)) {
                    txt += "</div><div class='row' style='text-align: center;'>";
                    tempAmountPerLine = 0;
                }
                txt += "<a class='img hoverBorder' target='_blank' href='" + root + '/' + file.name + "' width=" + widthX + " height=" + heightY;
                txt += " style='margin: 5px; background-image:url(";
                txt += "&#39" + root + '/' + file.name + "&#39";
                txt +=  ");display:inline-block;width:" + widthX + "px;height:" + heightY + "px;'></a>";
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

function showMeBorder() {
    if(document.getElementsByName("customBorder")[0].checked){
        document.getElementById("borderColor").disabled = false;
        document.getElementById("borderSize").disabled = false;
    } else {
        document.getElementById("borderColor").disabled = true;
        document.getElementById("borderSize").disabled = true;
    }
}

function showMeTypeFile() {
    if(document.getElementsByName("downloadButton")[0].checked){
        document.getElementById("typeFile").disabled = false;
    } else {
        document.getElementById("typeFile").disabled = true;
    }
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