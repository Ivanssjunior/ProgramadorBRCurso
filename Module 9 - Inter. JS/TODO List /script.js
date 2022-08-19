document.getElementById("i1").value = getSavedItem("i1");
document.getElementById("i2").value = getSavedItem("i2");
document.getElementById("i3").value = getSavedItem("i3");
document.getElementById("i4").value = getSavedItem("i4");

document.getElementById("c1").value = checkedBox("c1");
document.getElementById("c2").value = checkedBox("c2");
document.getElementById("c3").value = checkedBox("c3");
document.getElementById("c4").value = checkedBox("c4");


function saveValue (e) {
    var id = e.id
    var val = e.value
    localStorage.setItem(id, val);
}

function getSavedItem (v) {
    if(!localStorage.getItem(v)) {
        return ""
    }
    return localStorage.getItem(v);
}

const checkbox = document.getElementById("checkedBox")
checkbox.addEventListener("change", function(c) {
    if (this.checkedBox) {
        var checkId = c.id
        var checkVal = c.value
        localStorage.setItem(checkId, checkVal);
    } else {
        
    }
})

