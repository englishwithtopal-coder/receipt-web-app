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
    <td><input></td>
    <td>
        <input class="formula" 
        oninput="updateTotal()"
        onkeydown="enterNext(event)">
    </td>
    <tr>
<th>ลำดับ</th>
<th>รายการ</th>
<th>วิธีคำนวณ</th>
<th>รวม</th>
</tr>
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


function enterNext(event){

    if(event.key === "Enter"){
        event.preventDefault();
        addRow();
    }

}

addRow();
