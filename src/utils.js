function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
}

function isValidAssignment(employee, assignedChild, lastYearMap) {
    return employee.Employee_EmailID !== assignedChild.Employee_EmailID &&
        (!lastYearMap[employee.Employee_EmailID] || lastYearMap[employee.Employee_EmailID] !== assignedChild.Employee_EmailID);
}

module.exports = { shuffleArray, isValidAssignment };
