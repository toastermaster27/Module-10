const employee = require('../lib/employee');

test('create employee obj', () => {
    const employee = new employee('Alice', 6, 'alice20@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('get employee name', () => {
    const employee = new employee('Alice', 6, 'alice20@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee id', () => {
    const employee = new employee('Alice', 6, 'alice20@gmail.com');
    expect(employee.getID()).toEqual(expect.any(Number));
}); 

test('get employee email', () => {
    const employee = new employee('Alice', 6, 'alice20@gmail.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('get employee role', () => {
    const employee = new employee('Alice', 6, 'alice20@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
});