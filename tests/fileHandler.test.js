const { readXLSX, writeXLSX } = require('../src/fileHandler');
const fs = require('fs');

describe("File Handling", () => {
    const testFile = './tests/test.xlsx';
    const testData = [
        { Employee_Name: "Alice", Employee_EmailID: "alice@example.com" },
        { Employee_Name: "Bob", Employee_EmailID: "bob@example.com" }
    ];

    afterAll(() => {
        if (fs.existsSync(testFile)) fs.unlinkSync(testFile);
    });

    test("Writes XLSX file correctly", () => {
        writeXLSX(testFile, testData);
        expect(fs.existsSync(testFile)).toBe(true);
    });

    test("Reads XLSX file correctly", () => {
        const data = readXLSX(testFile);
        expect(data.length).toBe(2);
    });
});
