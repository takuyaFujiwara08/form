function formSwitch() {
    var allergyDetailBox = document.getElementById("allergyDetailBox");

    check = document.getElementsByClassName('js-check');

    if (check[0].checked) {
        allergyDetailBox.style.display ="none";
    }else {
        allergyDetailBox.style.display ="block";
    }
    window.addEventListener('load', formSwitch());
}

function createNameBox() {
    var textbox_element = document.getElementById("nameBox");

    if (textbox_element.hasChildNodes()) {
        var new_element = document.createElement("input");
        new_element.setAttribute("type", "text");
        new_element.setAttribute("name", "entry.718191799");
        new_element.setAttribute("placeholder", "お名前");
        new_element.setAttribute("style", "margin-bottom: 10px;");
        textbox_element.appendChild(new_element);
    }
    
}

function checkInfo(){
    var inputBox = document.getElementById("inputBox");
    var submitButton = document.getElementById("submitButton");
    inputBox.style.display ="none";
    submitButton.style.display ="block";

    const workArea = document.getElementById("checkDisplayBox");

    var tel1 = document.getElementsByName("entry.745574103")[0].value;
    var tel2 = document.getElementsByName("entry.543309823")[0].value;
    var tel3 = document.getElementsByName("entry.517108552")[0].value;
    var allergy = document.getElementsByName("entry.560048140")[0].value;
    var name = document.getElementsByName("entry.718191799");
    var nameFull = "";
    for (let i = 0; i < name.length; i++) {
        nameFull += name[i].value;
        if (i != name.length -1) {
            nameFull += ", "
        }
    }

    workArea.innerHTML = `
        <div id="checkDisplay">
            <span>お名前</span>
            <p style="padding-left: 10px;">${nameFull}</p>
            <span>お電話番号</span>
            <p style="padding-left: 10px;">${tel1} - ${tel2} - ${tel3}</p>
            <span>アレルギー</span>
            <p style="padding-left: 10px;">${allergy}</p>
            <input id="back" type="button" value="戻る" onClick="backDisplay()">
        </div>
        `;
}

function backDisplay() {
    var inputBox = document.getElementById("inputBox");
    var submitButton = document.getElementById("submitButton");
    var checkDisplay = document.getElementById("checkDisplay");
    inputBox.style.display ="block";
    submitButton.style.display ="none";
    checkDisplay.remove();
}

