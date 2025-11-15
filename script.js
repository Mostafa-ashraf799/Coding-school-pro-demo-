let pressCount = 0;
function addRow() {
let table = document.getElementById("codeTable");
let row = table.insertRow(-1);


row.innerHTML = `
<td><input type="checkbox"></td>
<td>
<textarea class="code"></textarea>
<button onclick="copyCode(this)">نسخ</button>
</td>
<td><textarea class="desc"></textarea></td>
<td>
<textarea class="code"></textarea>
<button onclick="copyCode(this)">نسخ</button>
</td>
<td><textarea class="desc"></textarea></td>
`;
}


function copyCode(btn) {
let area = btn.parentElement.querySelector("textarea");
area.select();
document.execCommand("copy");
alert("تم النسخ");
}


function pressFunction() {
pressCount++;


if (pressCount === 1) {
toggleEdit(false);
alert("تم إيقاف التعديل");
}


if (pressCount === 5) {
toggleEdit(true);
pressCount = 0;
alert("تم تفعيل التعديل من جديد");
}
}


function toggleEdit(enable) {
let areas = document.querySelectorAll("textarea");
areas.forEach(a => a.disabled = !enable);


let checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach(c => c.disabled = !enable);
}