const { assignSecretSanta } = require("../src/assignSanta");

describe('SecretSanta Assignment', ()=>{
    test('No employees assigned to themesleves' , ()=>{

        const employees = [
            { Employee_Name: 'Mayank Raj', Employee_EmailID: 'mayank.raj@example.com' },
            { Employee_Name: 'Jane Doe', Employee_EmailID: 'jane.doe@example.com' },
            { Employee_Name: 'John Smith', Employee_EmailID: 'john.smith@example.com' }
        ];
    
        const lastYearAssignments = []
    
        const assignments = assignSecretSanta(employees, lastYearAssignments);

        assignments.forEach(assignment => {
            expect(assignment.Employee_EmailID).not.toBe(assignment.Secret_Child_EmailID);
        })

    })
})


test("No employee get the same secret child as last year" , ()=>{
    const employees = [
        { Employee_Name: 'Mayank Raj', Employee_EmailID: 'mayank.raj@example.com' },
        { Employee_Name: 'Jane Doe', Employee_EmailID: 'jane.doe@example.com' },
        { Employee_Name: 'John Smith', Employee_EmailID: 'john.smith@example.com' }
    ];

    const lastYearAssignments = [];


    const lastYearMap = Object.fromEntries(
        lastYearAssignments.map(entry => [entry.Employee_EmailID, entry.Secret_Child_EmailID])
    );

    const assignments = assignSecretSanta(employees, lastYearAssignments);

    assignments.forEach(assignment => {
        expect(assignment.Secret_Child_EmailID).not.toBe(lastYearMap[assignment.Employee_EmailID]);
    });
})


test("All employees get assigned exactly once" , ()=>{
    const employees = [
        { Employee_Name: 'Mayank Raj', Employee_EmailID: 'mayank.raj@example.com' },
        { Employee_Name: 'Jane Doe', Employee_EmailID: 'jane.doe@example.com' },
        { Employee_Name: 'John Smith', Employee_EmailID: 'john.smith@example.com' }
    ];

    const lastYearAssignments = [];
    
    const assignments = assignSecretSanta(employees, lastYearAssignments);
    const assignmentMails =  assignments.map((assignment) => assignment.Secret_Child_EmailID)
    const uniqueAssignments = new Set(assignmentMails);
    expect(uniqueAssignments.size).toBe(assignmentMails.length);
    
})