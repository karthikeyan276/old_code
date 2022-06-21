var selectedRow = null

function onFormSubmit(e) {
	e.preventDefault();
    alert ("Submited Scuess");  

        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

function readFormData() {
    var formData = {};
    formData["Code"] = document.getElementById("Code").value;
    formData["Name"] = document.getElementById("Name").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    formData["mail"] = document.getElementById("mail").value;


    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.Code;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.Name;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.qty;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.perPrice;
        
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
        cell5 = newRow.insertCell(5);
		cell5.innerHTML = data.mail;
        
}


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Code").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
    document.getElementById("mail").value = selectedRow.cells[5].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Code;
    selectedRow.cells[1].innerHTML = formData.Name;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
    selectedRow.cells[5].innerHTML = formData.mail;

}

function onDelete(td) {
    if (confirm('Surely will delete The Record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("Code").value = '';
    document.getElementById("Name").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("perPrice").value = '';
    selectedRow = null;
}
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}


 