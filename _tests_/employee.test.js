const Employee = require('../lib/employee');

test('create employee obj', () => {
    const employee = new Employee('Alice', 6, 'alice20@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('get employee name', () => {
    const employee = new Employee('Alice', 6, 'alice20@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('Alice', 6, 'alice20@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get employee email', () => {
    const employee = new Employee('Alice', 6, 'alice20@gmail.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('get employee role', () => {
    const employee = new Employee('Alice', 6, 'alice20@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
});