const table = document.createElement("table");
const caption = document.createElement("caption");

const addElement = (parent, child, obj, className) => {
    const {value, attribute, num} = obj;
    parent.append(child);
    child.innerText = value;
    attribute && num && child.setAttribute(attribute, num);
    className && child.classList(className);
}

const createRow1 = (arr, dom, parent) => {
    for (let i = 0; i < arr.length; i++) {
        const child = document.createElement(dom);
        addElement(parent, child, arr[i]);
    }
}

const addEl = (tr, el, text = null, span = null, num = null) => {
    tr.append(el);
    el.innerText = text;
    span && el.setAttribute(span, num, text);
}

const createRow = (arr, dom, parent) => {
    for (let i = 0; i < arr.length; i++) {
        const child = document.createElement(dom);
        addEl(parent, child, arr[i]);
    }
}
////////////////////////////////////////////////////////1
document.body.prepend(table);
table.classList.add("table");
addElement(table, caption, heading);

for (let row in data) {
    const DOM = row === "row1" || row === "row4" ? "th" : "td";
    const tr = document.createElement("tr");
    table.append(tr);
    createRow1(data[row], DOM, tr);
}
////////////////////////////////////////////////////////////////2
const secondTable = document.createElement("table");
const secondCaption = document.createElement("caption");

document.body.prepend(secondTable);
secondTable.classList.add("second-table");
secondTable.append(secondCaption);
let obliqueType = document.createElement("i");
secondCaption.append(obliqueType);
obliqueType.innerText = "A test table with merged cells";

for (let row in data2) {

    const DOM = row === "row1" || row === "row2" ? "th" : "td";
    const tr = document.createElement("tr");
    secondTable.append(tr);
    createRow1(data2[row], DOM, tr);
}
///////////////////////////////////////////////////////////////////3
let thirdTable = document.createElement("table");

document.body.prepend(thirdTable);
thirdTable.classList.add("class", "third-table");

for (let row in data3) {
    const DOM = "td";
    const tr = document.createElement("tr");
    thirdTable.append(tr);
    createRow1(data3[row], DOM, tr);
}
///////////////////////////////////////////////////////////////////////////////4
let fourthTable = document.createElement("table");

document.body.prepend(fourthTable);
fourthTable.classList.add("fourth-table");

for (let row in data4) {
    const DOM = row === "row1" || row === "row2" || row === "row3" || row === "row8" ? "th" : "td";
    const tr = document.createElement("tr");
    fourthTable.append(tr);
    createRow1(data4[row], DOM, tr)
}
