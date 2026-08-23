let count = 0;

function calculateFormula(value){
    return value
        .split(/[+*xX]/)
        .filter(v => v.trim() !== "")
        .reduce((sum, num) => sum + Number(num), 0);
}

function addRow(){

    count++;

    let table = document.getElementById("items");
    let row = table.insertRow();

    row.innerHTML = `
    <td>${count}</td>

    <td>
        <input class="item"
        onkeydown="goFormula(event,this)">
    </td>

    <td>
        <input class="formula"
        oninput="updateTotal()"
        onkeydown="enterNext(event,this)">
    </td>

    <td class="result">0</td>
    `;
}

function updateTotal(){

    let total = 0;

    document.querySelectorAll(".formula").forEach(input=>{

        let value = input.value;

        let result = calculateFormula(value);

        input.closest("tr")
        .querySelector(".result")
        .innerText = result;

        total += result;
    });

    document.getElementById("total").innerText = total;
}


function enterNext(event,input){

    if(event.key === "Enter"){

        event.preventDefault();

        addRow();

        document
        .querySelector("#items tr:last-child .item")
        .focus();

    }

}
function goFormula(event,input){

    if(event.key === "Enter"){

        event.preventDefault();

        input
        .parentElement
        .nextElementSibling
        .querySelector("input")
        .focus();

    }

}
addRow();
