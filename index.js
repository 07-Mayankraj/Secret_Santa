const { readXLSX, writeXLSX, writeCSV } = require('./src/fileHandler');
const { assignSecretSanta } = require('./src/assignSanta');
const fs = require('fs');
const EMPLOYEE_XLSX = './data/Employee-List.xlsx';
const LAST_YEAR_XLSX = './data/Secret-Santa-Game-Result-2023.xlsx';
const OUTPUT_XLSX = './data/Result_secret_santa_output.csv';

async function main() {
    try {
        const employees = readXLSX(EMPLOYEE_XLSX);
        const lastYearAssignments = readXLSX(LAST_YEAR_XLSX);

        console.log({employees , lastYearAssignments});
        if (employees.length < 2) {
            throw new Error("Not enough employees for Secret Santa.");
        }

        const assignments = assignSecretSanta(employees, lastYearAssignments);
        writeCSV(OUTPUT_XLSX, assignments);
        // for auto delete
        // setTimeout(() => fs.unlink(OUTPUT_XLSX ,()=> console.log('file deleted')) , 1000)
        
        console.log("Secret Santa assignments generated successfully!");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
