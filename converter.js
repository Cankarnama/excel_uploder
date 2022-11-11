let file;
document.getElementById('file').addEventListener("change", (event) => {file = event.target.files[0];
})

document.getElementById('button').addEventListener("click", () => {
    if(file){
        let content = new FileReader();
        content.readAsBinaryString(file);
        content.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
         workbook.SheetNames.forEach(sheet => {
              let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
              document.getElementById("dump").innerHTML = JSON.stringify(rowObject,undefined,4)
         });
        }
    }
});