let i = 0;

function image() {

    if (i == 1) {
        document.getElementById("nava").style.display = "none";
        i = 0;
    } else if (i == 0) {
        document.getElementById("nava").style.display = "flex";
        i = 1;
    }
}




function changecolor() {
    let a = document.getElementById("colorchange");
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    let b = document.getElementById("code").innerHTML = `<br><h3>computer generated random color code is : ${randomColor}</h3><br><br>`;
    a.style.backgroundColor = randomColor;
}

function display(val) {
    document.getElementById("textval").value += val;
}


function alhabibi() {
    // alert("hi");
    let x = document.getElementById("textval").value;
    y = eval(x);
    document.getElementById("textval").value = y;

}

function clr() {
    document.getElementById("textval").value = ""
}

/* start of project 3 */

let count = 0;

function plus() {
    count++;
    document.querySelector("#maincounter").innerHTML = `${count}`;
}

function reset() {
    alert("reset");
    count = 0;
    document.querySelector("#maincounter").innerHTML = `${count}`;
}

function minus() {
    count--;
    if (count >= 0) {
        document.querySelector("#maincounter").innerHTML = `${count}`;
    }
}




/* end of project 3 */


/* start of project 4 */



function getText() {
    let text = document.getElementById("textgetter").value;
    if (text == "") {
        alert("Enter a Text First");
        // break;
    } else {
        let todocont = document.getElementById("todocont");
        let p = document.createElement('p');
        p.innerText = `${text}`
        todocont.appendChild(p);
        document.getElementById("textgetter").value = "";
        p.addEventListener('click', function() {
                todocont.removeChild(p);
            }

        )
    }
}

/* end of project 4 */


// start of project 5


// ebd of project 5