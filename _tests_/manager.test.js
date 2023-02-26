const Manager = require('../lib/manager');

test('create manager obj', () => {
    const manager = new Manager('Alice', 6, 'alice20@gmail.com', 10);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets employee role', () => {
    const manager = new Manager('Alice', 6, 'alice20@gmail.com', 10);
    expect(manager.getRole()).toEqual("Manager");
});