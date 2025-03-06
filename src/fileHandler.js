const fs = require('fs');
const csv = require('csv-parser');
const fastCsv = require('fast-csv');
const xlsx = require('xlsx');

function readXLSX(filePath) {
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
    }
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; 
    return xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

function writeXLSX(filePath, data) {
    const worksheet = xlsx.utils.json_to_sheet(data);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Secret Santa");
    xlsx.writeFile(workbook, filePath);
}
function writeCSV(filePath, data) {
    const ws = fs.createWriteStream(filePath);
    fastCsv.write(data, { headers: true }).pipe(ws);
}

module.exports = {  writeCSV , readXLSX, writeXLSX  };
