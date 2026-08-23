let count = 0;


// เลข INV

let invNumber = 1;


function generateINV(){

    return "INV-" +
    String(invNumber).padStart(5,"0");

}



function today(){

    let d = new Date();

    return d.toLocaleDateString("th-TH");

}



document.getElementById("inv").value = generateINV();
document.getElementById("date").value = today();


document.getElementById("p_inv").innerText =
document.getElementById("inv").value;


document.getElementById("p_date").innerText =
document.getElementById("date").value;




function calculateFormula(value){

return value
.split(/[+*xX]/)
.filter(v=>v.trim()!="")
.reduce((sum,num)=>sum+Number(num),0);

}





function addRow(){

count++;


let table=document.getElementById("items");

let row=table.insertRow();



row.innerHTML=`

<td>${count}</td>


<td>
<input class="item"
oninput="updatePreview()"
onkeydown="goFormula(event,this)">
</td>



<td>

<input class="formula"

oninput="updatePreview()"

onkeydown="enterNext(event)">

</td>



<td class="result">
0
</td>

`;



}





function updatePreview(){


let total=0;


let preview =
document.getElementById("previewTable");


// ลบรายการเดิม

while(preview.rows.length>1){

preview.deleteRow(1);

}



document.querySelectorAll(".formula")
.forEach((input,index)=>{


let result =
calculateFormula(input.value);



input.closest("tr")
.querySelector(".result")
.innerText=result;



total+=result;



let item =
input.closest("tr")
.querySelector(".item")
.value;



let row =
preview.insertRow();



row.innerHTML=`

<td>${index+1}</td>

<td>${item}</td>

<td>${input.value}</td>

<td>${result.toFixed(2)}</td>

`;



});



document.getElementById("total")
.innerText=total.toFixed(2);


document.getElementById("p_total")
.innerText=total.toFixed(2);



document.getElementById("p_customer")
.innerText=
document.getElementById("customer").value;


}





function goFormula(event,input){

if(event.key==="Enter"){

event.preventDefault();


input
.parentElement
.nextElementSibling
.querySelector("input")
.focus();


}

}





function enterNext(event){


if(event.key==="Enter"){


event.preventDefault();


addRow();


document
.querySelector("#items tr:last-child .item")
.focus();



}


}

function saveBill(){

let bill = {

inv: document.getElementById("inv").value,

date: document.getElementById("date").value,

customer: document.getElementById("customer").value,

total: document.getElementById("total").innerText

};


fetch("/save_bill",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(bill)

})

.then(res=>res.json())

.then(data=>{

alert("บันทึกบิลเรียบร้อย");

});


}


addRow();
