let no = 0;

function addRow(){
    no++;

    let table = document.getElementById("items");
    let row = table.insertRow();

    row.innerHTML = `
        <td>${no}</td>
        <td><input></td>
        <td><input onkeydown="if(event.key==='Enter'){addRow()}"></td>
        <td>0</td>
    `;
}

addRow();
