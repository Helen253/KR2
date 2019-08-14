let getSel = s => document.querySelector(s);
let getSelAll = s => document.querySelectorAll(s);

let font = document.forms['font'];
let fn = document.forms['fn'];

getSel('.headerNew').style.display = 'none'

font.buttonEdit.onclick = function () {
    getSel('.hText').style.display = 'block'
    getSel('.headerNew').style.display = 'block'
    getSel('.box').style.display = 'none'
    getSel('.header').style.display = 'none'
    getSel('#newText').value = getSel('.box').innerHTML
}

font.bold.onclick = function () {
    getSel('.box').classList.toggle('bold');
}
font.italic.onclick = function () {
    getSel('.box').classList.toggle('italic');
}
font.underline.onclick = function () {
    getSel('.box').classList.toggle('underline');
}
font.crossed.onclick = function () {
    getSel('.box').classList.toggle('lineThrough');
}
font.left.onclick = function () {
    getSel('.box').style.textAlign = 'left'
}
font.center.onclick = function () {
    getSel('.box').style.textAlign = 'center'
}
font.right.onclick = function () {
    getSel('.box').style.textAlign = 'right'
}

font.typeFont.onchange = function () {
    getSel('.box').style.fontFamily = this.value
}
font.sizeFont.onchange = function () {
    getSel('.box').style.fontSize = this.value
}


for (let i = 0; i < getSelAll('.newColor').length; i++) {
    getSelAll('.newColor')[i].onclick = function () {
        getSel('.box').style.color = this.style.backgroundColor
    }
}
for (let i = 0; i < getSelAll('.backgroundColor').length; i++) {
    getSelAll('.backgroundColor')[i].onclick = function () {
        getSel('.box').style.background = this.style.backgroundColor
    }
}
for (let j = 0; j < getSelAll('.backgroundImage').length; j++) {
    getSelAll('.backgroundImage')[j].onclick = function () {
        getSel('.box').style.background = this.style.backgroundImage
    }
}


getSel('#empty').style.display = 'none'
getSel('#check').style.display = 'none'
getSel('#sn').onclick = function () {
    login = fn.login.value;
    pass = fn.pass.value
    if (login == '' || pass == '') {
        getSel('#login').classList.add("error")
        getSel('#pass').classList.add("error")
        getSel('#empty').style.display = 'block'
        getSel('#check').style.display = 'none'
    } else if (login != 'admin' || pass != 'admin') {
        getSel('#login').classList.add("error")
        getSel('#pass').classList.add("error")
        getSel('#check').style.display = 'block'
        getSel('#empty').style.display = 'none'
    } else if (login == 'admin' || pass == 'admin') {
        getSel('#login').classList.add("good")
        getSel('#pass').classList.add("good")
        getSel('#empty').style.display = 'none'
        getSel('#check').style.display = 'none'
        this.setAttribute("data-dismiss", "modal")
    }


}

getSel('.hText').style.display = 'none'
getSel('.headerNew').style.display = 'none'

let nb = document.forms['nb'];
nb.save.onclick = function () {
    getSel('.hText').style.display = 'none'
    getSel('.headerNew').style.display = 'none'
    getSel('.header').style.display = 'block'
    getSel('.box').style.display = 'block'
    getSel('.box').innerHTML = getSel('#newText').value;
}

getSel('#empty1').style.display = 'none';

getSel('#invalid').style.display = 'none'
getSel('.createTable').onclick = function () {
    let tr = getSel('#inputTr').value;
    let td = getSel('#inputTd').value;
    let wTd = getSel('#widthTD').value;
    let hTd = getSel('#heightTD').value;
    let wBD = getSel('#widthBD').value;
    let tBD = getSel('#styleBorder').value;
    let sBD = getSel('#colorBorder').value;
    let table = getSelAll('.tableTable')

    let check = true;
    for (let i = 0; i < table.length; i++) {
        if (table[i].value != table[i].value * 1 || table[i].value == '') {
            check = false;
            table[i].classList.add("error")
            getSel('#styleBorder').classList.add("error")
            getSel('#colorBorder').classList.add("error")
            getSel('#empty1').style.display = 'block'
        } else {
            table[i].classList.add("good")
        }
    }
    if (check) {
        getSel('#empty1').style.display = 'none'
        getSel('#styleBorder').classList.add("good")
        getSel('#colorBorder').classList.add("good")
        let styleTd = `style="width:${wTd}px;height:${hTd}px;border:${wBD}px ${tBD} ${sBD}"`
        getSel('#newText').value += `<table>`
        for (let i = 0; i < tr; i++) {
            getSel('#newText').value += `<tr>`
            for (let j = 0; j < td; j++) {
                getSel('#newText').value += `<td ${styleTd}>TD</td>`
            }
            getSel('#newText').value += `</tr>`
        }
        getSel('#newText').value += `</table>`
    }
}

getSel('.reset').onclick = function () {
    let table = getSelAll('.tableTable')
    for (let i = 0; i < table.length; i++) {
        table[i].value = "Type here"
        table[i].classList.add("good")
        getSel('#styleBorder').classList.add("good")
        getSel('#colorBorder').classList.add("good")
        getSel('#empty1').style.display = 'none'
    }
}

getSel('#empty2').style.display = 'none';
getSel('.createList').onclick = function () {
    let lc = getSel('.listCount').value;
    let tm = getSel('#typeMarks').value;

    if (lc == "") {
        getSel('.listCount').classList.add("error")
        getSel('#empty2').style.display = 'block'
    }
    if (tm.value = "choose Ol type mark") {
        getSel('#typeMarks').classList.add("error")
        getSel('#empty2').style.display = 'block'
    }

    if (lc != "") {
        if (tm.value != "choose Ol type mark")
            getSel('#empty2').style.display = 'none';
        getSel('.listCount').classList.add("good")
        getSel('#typeMarks').classList.add("good")
        getSel('#newText').value += `<ol>`
        for (let j = 0; j < lc; j++) {
            getSel('#newText').value += `<li type="${tm}">item</li>`;
        }
        getSel('#newText').value += `</ol>`
    }

}

getSel('.resetList').onclick = function () {
    getSel('.listCount').value = "Type here..."
    getSel('#typeMarks').classList.add("good")
    getSel('.listCount').classList.add("good")
    getSel('#empty2').style.display = 'none';
    getSel('#typeMarks').value = "choose Ol type mark"

}

getSel('#empty3').style.display = 'none';
getSel('.createListUl').onclick = function () {
    let lcu = getSel('.listCountUl').value;
    let tmu = getSel('#typeMarksUl').value;

    if (lcu == "") {
        getSel('.listCountUl').classList.add("error")
        getSel('#empty3').style.display = 'block'
    }
    if (tmu.value = "choose Ul type mark") {
        getSel('#typeMarksUl').classList.add("error")
        getSel('#empty3').style.display = 'block'
    }

    if (lcu != "") {
        if (tmu.value != "choose Ul type mark")
            getSel('#empty3').style.display = 'none';
        getSel('.listCountUl').classList.add("good")
        getSel('#typeMarksUl').classList.add("good")
        getSel('#newText').value += `<ul>`
        for (let i = 0; i < lcu; i++) {
            getSel('#newText').value += `<li style="list-style-type:${tmu}">item</li>`;
        }
        getSel('#newText').value += `</ul>`

    }
    getSel('.resetListUl').onclick = function () {
        getSel('.listCountUl').value = "Type here..."
        getSel('#typeMarksUl').classList.add("good")
        getSel('.listCountUl').classList.add("good")
        getSel('#empty3').style.display = 'none';
        getSel('#typeMarksUl').value = "choose Ul type mark"
    }
}

$(document).ready(function () {
    bsCustomFileInput.init()
})


getSel('#customFile').onchange = function () {
    const url = URL.createObjectURL(this.files[0]);
    getSel('.box').style.background = "url(" + url + ") no-repeat";

}